function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L26_Paprociowe/images/";

function viz(file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  return spec;
}

function vizGh(file, spec) {
  spec = viz(file, spec);
  spec.url = BIO_IMG + file + "?raw=true";
  return spec;
}

function tree(spec) {
  spec.kind = "class-tree";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Paszport lekcji", ua: "Паспорт уроку" },
      items: [
        { pl: "Wskażesz wilgotne środowisko paproci.", ua: "Вкажеш вологе середовище папоротей." },
        { pl: "Wskażesz kłącze, korzenie i liście paproci.", ua: "Вкажеш кореневище, корені і листки папороті." },
        { pl: "Znajdziesz kupki zarodni na spodzie liścia.", ua: "Знайдеш купки спорангіїв на споді листка." },
        { pl: "Wyjaśnisz, czym paproć różni się od mchu.", ua: "Поясниш, чим папороть відрізняється від моху." },
        { pl: "Odróżnisz paproć, skrzyp i widłak.", ua: "Відрізниш папороть, хвощ і плаун." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "paproć", ua: "папороть" },
        { pl: "kłącze", ua: "кореневище" },
        { pl: "kupki zarodni", ua: "купки спорангіїв" },
        { pl: "zarodnik", ua: "спора" },
        { pl: "przedrośle", ua: "заросток" },
        { pl: "paprotniki", ua: "папоротеподібні" },
        { pl: "skrzyp", ua: "хвощ" },
        { pl: "widłak", ua: "плаун" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l26-zacznijmy.png", {
        alt: { pl: "Paproć w wilgotnym lesie", ua: "Папороть у вологому лісі" },
        title: { pl: "Po mchach — paprotniki. Dziś paproć, skrzyp i widłak.", ua: "Після мохів — папоротеподібні. Сьогодні папороть, хвощ і плаун." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 dużej paproci w cienistym, wilgotnym lesie, dzień. Etykieta PL: paproć. Bez mchu jako jedynego motywu, bez kwiatu, bez szyszki, bez nasion. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Mchy z lekcji 25 miały chwytniki i puszkę. Paproć jest większa i ma prawdziwe korzenie oraz liście.",
          ["Razem z skrzypem i widłakiem to ", em("paprotniki"), " — rośliny zarodnikowe. Kwiatu, szyszki i nasion tu nie ma (lekcje 27–30)."]
        ],
        ua: [
          "Мохи з уроку 25 мали ризоїди і коробочку. Папороть більша і має справжні корені та листки.",
          ["Разом із хвощем і плауном це ", em("папоротеподібні"), " — спорові рослини. Квітки, шишки і насіння тут немає (уроки 27–30)."]
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Gdzie rosną paprocie", ua: "Де ростуть папороті" },
      visual: vizGh("l26-srodowisko.png", {
        alt: { pl: "Paprocie w cieniu i wilgoci lasu", ua: "Папороті в затінку і волозі лісу" },
        title: { pl: "Cień i wilgoć. Runo leśne, wąwóz, brzeg potoku.", ua: "Затінок і волога. Лісова підстилка, яр, берег струмка." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kadry, etykiety PL. 1 paprocie w runie leśnym. 2 wąwóz / brzeg potoku. 3 doniczkowa paproć w mieszkaniu (cień). Napis: środowisko paproci. Bez kwiatów, bez szyszek. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Paprocie lubią wilgoć i cień: las, wąwóz, brzeg potoku. Niektóre hodujemy w doniczce — też w cieniu, nie na palącym słońcu.",
          "Do zapłodnienia, jak u mchów, potrzebna jest kropla wody. Dlatego suche, otwarte pole to nie ich miejsce.",
          "Nie myl paproci z mchem na korze: paproć ma duże liście, mech — drobne listki i poduszkę."
        ],
        ua: [
          "Папороті люблять вологу і затінок: ліс, яр, берег струмка. Деякі тримаємо в горщику — теж у затінку, не на пекучому сонці.",
          "Для запліднення, як у мохів, потрібна крапля води. Тому сухе відкрите поле — не їхнє місце.",
          "Не плутати папороть із мохом на корі: папороть має великі листки, мох — дрібні листочки і подушку."
        ]
      },
      task: {
        id: "l26-e1",
        type: "single-choice",
        question: { pl: "Jakie środowisko wybierają paprocie?", ua: "Яке середовище обирають папороті?" },
        options: [
          { id: "a", label: { pl: "wilgotne i cieniste miejsca (np. las)", ua: "вологі й затінені місця (напр. ліс)" } },
          { id: "b", label: { pl: "tylko suchą pustynię", ua: "лише суху пустелю" } },
          { id: "c", label: { pl: "tylko słoną wodę oceanu", ua: "лише солону воду океану" } }
        ],
        answer: "a",
        explanation: { pl: "Wilgoć i cień. Nie pustynia i nie ocean.", ua: "Волога і затінок." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Środowisko", ua: "Середовище" },
      visual: tree({
        layout: "fork",
        root: { pl: "paprocie", ua: "папороті" },
        items: [
          { pl: "wilgoć", ua: "волога" },
          { pl: "cień", ua: "затінок" },
          { pl: "las / wąwóz", ua: "ліс / яр" }
        ]
      }),
      items: [
        { pl: "wilgoć — kropla wody do rozmnażania", ua: "волога — крапля води для розмноження" },
        { pl: "cień — runo, doniczka w mieszkaniu", ua: "затінок — підстилка, горщик у квартирі" },
        { pl: "nie pustynia jako typowe miejsce", ua: "не пустеля як типове місце" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Kłącze, korzenie, liście", ua: "Кореневище, корені, листки" },
      visual: vizGh("l26-budowa.png", {
        alt: { pl: "Paproć z kłączem, korzeniami i liśćmi", ua: "Папороть із кореневищем, коренями і листками" },
        title: { pl: "Kłącze to pęd pod ziemią. Korzenie nie są chwytnikami.", ua: "Кореневище — пагін під землею. Корені не є ризоїдами." },
        prompt: { pl: "Edukacyjny schemat 16:9 paproci. Etykiety PL: liście; młody liść (pastorał, zwinięty); kłącze (pęd pod ziemią); korzenie. Napis: kłącze = łodyga z lekcji 23, pod glebą. Bez kupek zarodni na tym kadrze. Bez chwytników mchu jako „to samo”. Bez kwiatu. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Liście"), " paproci są duże. Młody liść bywa zwinięty jak pastorał, potem się rozwija. Tu fotosynteza (lekcja 9)."],
          ["", em("Kłącze"), " to pęd pod ziemią (lekcja 23) — nie korzeń. Z kłącza wyrastają liście i korzenie."],
          ["", em("Korzenie"), " przytwierdzają i pobierają wodę. To nie chwytniki mchu z lekcji 25: paproć ma tkanki przewodzące (lekcja 21), więc może być większa."]
        ],
        ua: [
          ["", em("Листки"), " папороті великі. Молодий листок буває згорнутий як патериця, потім розгортається. Тут фотосинтез (урок 9)."],
          ["", em("Кореневище"), " — пагін під землею (урок 23), не корінь. З кореневища виростають листки і корені."],
          ["", em("Корені"), " прикріплюють і вбирають воду. Це не ризоїди моху з уроку 25: папороть має провідні тканини (урок 21), тож може бути більшою."]
        ]
      },
      task: {
        id: "l26-e2",
        type: "multiple-choice",
        question: { pl: "Zaznacz trzy części paproci.", ua: "Познач три частини папороті." },
        options: [
          { id: "a", label: { pl: "kłącze", ua: "кореневище" } },
          { id: "b", label: { pl: "korzenie", ua: "корені" } },
          { id: "c", label: { pl: "liście", ua: "листки" } },
          { id: "d", label: { pl: "puszka zarodniona mchu", ua: "коробочка моху" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Kłącze, korzenie, liście. Puszka = mech (L25).", ua: "Кореневище, корені, листки. Коробочка = мох." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Części paproci", ua: "Частини папороті" },
      visual: tree({
        layout: "nested",
        root: { pl: "paproć", ua: "папороть" },
        groups: [
          {
            title: { pl: "liście", ua: "листки" },
            items: [{ pl: "światło + zarodnie", ua: "світло + спорангії" }]
          },
          {
            title: { pl: "kłącze", ua: "кореневище" },
            items: [{ pl: "pęd pod ziemią", ua: "пагін під землею" }]
          },
          {
            title: { pl: "korzenie", ua: "корені" },
            items: [{ pl: "woda, umocowanie", ua: "вода, закріплення" }]
          }
        ]
      }),
      items: [
        { pl: "liście — duże, młode zwinięte", ua: "листки — великі, молоді згорнуті" },
        { pl: "kłącze — łodyga pod glebą", ua: "кореневище — стебло під ґрунтом" },
        { pl: "korzenie — nie chwytniki", ua: "корені — не ризоїди" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Kupki zarodni", ua: "Купки спорангіїв" },
      visual: vizGh("l26-kupki.png", {
        alt: { pl: "Spód liścia paproci z kupkami zarodni", ua: "Спід листка папороті з купками спорангіїв" },
        title: { pl: "Brązowe punkciki na spodzie to nie choroba. To zarodnie.", ua: "Коричневі крапки на споді — не хвороба. Це спорангії." },
        prompt: { pl: "Edukacyjna infografika 16:9. LEWA: spód liścia paproci, etykieta PL: kupki zarodni. PRAWA: powiększenie kupki — zarodnie, zarodniki (drobny proszek, nie groza). Napis: zarodniki, nie nasiona. Bez kwiatu. Bez puszki mchu na tym kadrze. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Na spodzie liścia bywają brązowe punkciki: ", em("kupki zarodni"), ". W zarodniach powstają ", em("zarodniki"), "."],
          "To nie rdza i nie nasiona. Nasiona i kwiat poznasz później. Zarodniki mchu były w puszce na trzonku (lekcja 25) — tu są na liściu.",
          "Odwróć liść: jeśli widać regularne kupki, to paproć w fazie rozsiewu."
        ],
        ua: [
          ["На споді листка бувають коричневі крапки: ", em("купки спорангіїв"), ". У спорангіях виникають ", em("спори"), "."],
          "Це не іржа і не насіння. Насіння і квітку пізнаєш пізніше. Спори моху були в коробочці на ніжці (урок 25) — тут вони на листку.",
          "Переверни листок: якщо видно регулярні купки — папороть у фазі поширення."
        ]
      },
      task: {
        id: "l26-e3",
        type: "single-choice",
        question: { pl: "Gdzie u paproci znajdziesz kupki zarodni?", ua: "Де в папороті знайдеш купки спорангіїв?" },
        options: [
          { id: "a", label: { pl: "na spodzie liścia", ua: "на споді листка" } },
          { id: "b", label: { pl: "w puszce na trzonku jak u mchu", ua: "в коробочці на ніжці як у моху" } },
          { id: "c", label: { pl: "w kwiecie", ua: "у квітці" } }
        ],
        answer: "a",
        explanation: { pl: "Spód liścia. Nie puszka mchu i nie kwiat.", ua: "Спід листка. Не коробочка моху і не квітка." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Gdzie zarodniki", ua: "Де спори" },
      visual: tree({
        layout: "fork",
        root: { pl: "zarodniki", ua: "спори" },
        items: [
          { pl: "paproć — kupki", ua: "папороть — купки" },
          { pl: "mech — puszka", ua: "мох — коробочка" }
        ]
      }),
      items: [
        { pl: "paproć — kupki na spodzie liścia", ua: "папороть — купки на споді листка" },
        { pl: "mech — puszka na trzonku (L25)", ua: "мох — коробочка на ніжці (урок 25)" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Przedrośle", ua: "Заросток" },
      visual: vizGh("l26-przedrosle.png", {
        alt: { pl: "Zarodnik, sercowate przedrośle i młoda paproć", ua: "Спора, серцеподібний заросток і молода папороть" },
        title: { pl: "Z zarodnika najpierw mała płytka. Potem z niej paproć.", ua: "Зі спори спочатку маленька пластинка. Потім із неї папороть." },
        prompt: { pl: "Edukacyjny schemat 16:9, cztery kroki, etykiety PL: zarodnik; przedrośle (mała sercowata zielona płytka); młoda paproć na przedroślu; dorosła paproć z kupkami. Napis: nie nasiono. Bez kwiatu, bez szyszki. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Z zarodnika wyrasta ", em("przedrośle"), " — mała, zwykle sercowata zielona płytka. To nie liść dorosłej paproci."],
          "Na przedroślu, przy kropli wody, powstaje zarodek nowej paproci. Potem przedrośle zanika, a rośnie kłącze i liście.",
          "Nie myl zarodnika z nasionem. Nasiono ma zapas i osłonę — to lekcje o nagonasiennych i kwiatach."
        ],
        ua: [
          ["Зі спори виростає ", em("заросток"), " — маленька, зазвичай серцеподібна зелена пластинка. Це не листок дорослої папороті."],
          "На заростку, при краплі води, виникає зародок нової папороті. Потім заросток зникає, а росте кореневище і листки.",
          "Не плутати спору з насіниною. Насінина має запас і оболонку — це уроки про голонасінні і квіти."
        ]
      },
      task: {
        id: "l26-e4",
        type: "true-false",
        question: { pl: "Przedrośle to mała zielona płytka z zarodnika. To nie nasiono i nie liść dorosłej paproci.", ua: "Заросток — маленька зелена пластинка зі спори. Це не насінина і не листок дорослої папороті." },
        answer: true,
        explanation: { pl: "Zarodnik → przedrośle → paproć. Nie nasiono.", ua: "Спора → заросток → папороть." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Od zarodnika do paproci", ua: "Від спори до папороті" },
      visual: tree({
        layout: "ladder",
        alt: { pl: "Zarodnik, przedrośle, młoda paproć, kupki zarodni", ua: "Спора, заросток, молода папороть, купки спорангіїв" },
        items: [
          { pl: "zarodnik", ua: "спора" },
          { pl: "przedrośle", ua: "заросток" },
          { pl: "młoda paproć", ua: "молода папороть" },
          { pl: "kupki zarodni", ua: "купки спорангіїв" }
        ],
        caption: { pl: "do zapłodnienia: kropla wody", ua: "для запліднення: крапля води" }
      }),
      items: [
        { pl: "zarodnik — nie nasiono", ua: "спора — не насінина" },
        { pl: "przedrośle — mała płytka", ua: "заросток — маленька пластинка" },
        { pl: "potem znowu kupki na liściu", ua: "потім знову купки на листку" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Paproć, skrzyp, widłak", ua: "Папороть, хвощ, плаун" },
      visual: vizGh("l26-paprotniki.png", {
        alt: { pl: "Paproć, skrzyp i widłak obok siebie", ua: "Папороть, хвощ і плаун поряд" },
        title: { pl: "Trzy paprotniki. Wszystkie z zarodnikami, bez kwiatu.", ua: "Три папоротеподібні. Усі зі спорами, без квітки." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy kadry, etykiety PL. 1 paproć — duże liście, kłącze. 2 skrzyp — pęd członowany, kłos zarodnionośny (nie kwiat). 3 widłak — płożące pędy, kłosy. Napis: paprotniki. Bez zrywania widłaka. Bez szyszki sosny. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Paproć"), " — duże liście i kłącze. ", em("Skrzyp"), " — pęd z członów (jak rurki) i kłos zarodnionośny; to nie kłos zboża i nie kwiat."],
          ["", em("Widłak"), " — pędy płożące, kłosy z zarodniami. Widłaki w Polsce często chronimy: nie zrywamy."],
          "Różnica z mchem: paprotniki mają korzenie (albo kłącze) i tkanki przewodzące, więc rosną wyżej. Szyszki sosny — lekcja 27."
        ],
        ua: [
          ["", em("Папороть"), " — великі листки і кореневище. ", em("Хвощ"), " — пагін із члеників (як трубки) і спороносний колосок; це не колосок злаку і не квітка."],
          ["", em("Плаун"), " — сланкі пагони, колоски зі спорангіями. Плауни в Польщі часто охороняємо: не зриваємо."],
          "Різниця з мохом: папоротеподібні мають корені (або кореневище) і провідні тканини, тож ростуть вище. Шишки сосни — урок 27."
        ]
      },
      task: {
        id: "l26-e5",
        type: "multiple-choice",
        question: { pl: "Które trzy rośliny to paprotniki z tej lekcji?", ua: "Які три рослини — папоротеподібні з цього уроку?" },
        options: [
          { id: "a", label: { pl: "paproć", ua: "папороть" } },
          { id: "b", label: { pl: "skrzyp", ua: "хвощ" } },
          { id: "c", label: { pl: "widłak", ua: "плаун" } },
          { id: "d", label: { pl: "torfowiec", ua: "сфагнум" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Trzy paprotniki. Torfowiec = mech (L25).", ua: "Три папоротеподібні. Сфагнум = мох." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Trzy paprotniki", ua: "Три папоротеподібні" },
      visual: tree({
        layout: "fork",
        root: { pl: "paprotniki", ua: "папоротеподібні" },
        items: [
          { pl: "paproć", ua: "папороть" },
          { pl: "skrzyp", ua: "хвощ" },
          { pl: "widłak", ua: "плаун" }
        ]
      }),
      items: [
        { pl: "paproć — liście i kłącze", ua: "папороть — листки і кореневище" },
        { pl: "skrzyp — pęd członowany, kłos", ua: "хвощ — членистий пагін, колосок" },
        { pl: "widłak — pędy płożące, kłosy", ua: "плаун — сланкі пагони, колоски" }
      ]
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Środowisko", ua: "Практика. Середовище" },
      task: {
        id: "l26-p1",
        type: "single-choice",
        question: { pl: "Paproć w runie leśnym wybiera przede wszystkim:", ua: "Папороть у лісовій підстилці обирає передусім:" },
        options: [
          { id: "a", label: { pl: "wilgoć i cień", ua: "вологу і затінок" } },
          { id: "b", label: { pl: "suchą pustynię jako jedyne miejsce", ua: "суху пустелю як єдине місце" } },
          { id: "c", label: { pl: "słoną wodę oceanu", ua: "солону воду океану" } }
        ],
        answer: "a",
        explanation: { pl: "Wilgotny, cienisty las.", ua: "Вологий затінений ліс." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Części", ua: "Частини" },
      task: {
        id: "l26-p2",
        type: "single-choice",
        question: { pl: "Kłącze paproci to:", ua: "Кореневище папороті — це:" },
        options: [
          { id: "a", label: { pl: "pęd pod ziemią (łodyga), nie korzeń", ua: "пагін під землею (стебло), не корінь" } },
          { id: "b", label: { pl: "chwytniki mchu", ua: "ризоїди моху" } },
          { id: "c", label: { pl: "słoje pnia drzewa", ua: "річні кільця стовбура дерева" } }
        ],
        answer: "a",
        explanation: { pl: "Kłącze = pęd (L23) pod glebą. Korzenie osobno.", ua: "Кореневище = пагін під ґрунтом." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Kupki", ua: "Купки" },
      task: {
        id: "l26-p3",
        type: "true-false",
        question: { pl: "Kupki zarodni są zwykle na spodzie liścia paproci. To nie kwiat i nie puszka mchu.", ua: "Купки спорангіїв зазвичай на споді листка папороті. Це не квітка і не коробочка моху." },
        answer: true,
        explanation: { pl: "Spód liścia. Mech ma puszkę (L25).", ua: "Спід листка. Мох має коробочку." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Paproć a mech", ua: "Папороть і мох" },
      task: {
        id: "l26-p4",
        type: "single-choice",
        question: { pl: "Czym paproć różni się od mchu?", ua: "Чим папороть відрізняється від моху?" },
        options: [
          { id: "a", label: { pl: "ma korzenie i kłącze; zarodnie w kupkach na liściu (mech: chwytniki i puszka)", ua: "має корені і кореневище; спорангії в купках на листку (мох: ризоїди і коробочка)" } },
          { id: "b", label: { pl: "ma kwiat i nasiona, a mech ma szyszki", ua: "має квітку і насіння, а мох має шишки" } },
          { id: "c", label: { pl: "to to samo co torfowiec", ua: "це те саме, що сфагнум" } }
        ],
        answer: "a",
        explanation: { pl: "Korzenie vs chwytniki. Kupki vs puszka. Nie kwiat.", ua: "Корені проти ризоїдів. Купки проти коробочки." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Trzy paprotniki", ua: "Три папоротеподібні" },
      task: {
        id: "l26-p5",
        type: "multiple-choice",
        question: { pl: "Zaznacz paprotniki z tej lekcji.", ua: "Познач папоротеподібні з цього уроку." },
        options: [
          { id: "a", label: { pl: "paproć — duże liście", ua: "папороть — великі листки" } },
          { id: "b", label: { pl: "skrzyp — pęd członowany", ua: "хвощ — членистий пагін" } },
          { id: "c", label: { pl: "widłak — pędy płożące", ua: "плаун — сланкі пагони" } },
          { id: "d", label: { pl: "sosna z szyszkami", ua: "сосна із шишками" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Paproć, skrzyp, widłak. Sosna = nagonasienne (L27).", ua: "Папороть, хвощ, плаун. Сосна — пізніше." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Środowisko", ua: "Перевірка 1. Середовище" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l26-s1",
        type: "single-choice",
        question: { pl: "Gdzie wskażesz typowe środowisko paproci?", ua: "Де вкажеш типове середовище папороті?" },
        options: [
          { id: "a", label: { pl: "wilgotne, cieniste miejsca (np. las, wąwóz)", ua: "вологі затінені місця (напр. ліс, яр)" } },
          { id: "b", label: { pl: "tylko suche piaski pustyni", ua: "лише сухі піски пустелі" } },
          { id: "c", label: { pl: "tylko wnętrze puszki mchu", ua: "лише внутрішність коробочки моху" } }
        ],
        answer: "a",
        explanation: { pl: "Wilgoć i cień.", ua: "Волога і затінок." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Części", ua: "Перевірка 2. Частини" },
      task: {
        id: "l26-s2",
        type: "multiple-choice",
        question: { pl: "Które trzy części wskażesz na paproci?", ua: "Які три частини вкажеш на папороті?" },
        options: [
          { id: "a", label: { pl: "kłącze", ua: "кореневище" } },
          { id: "b", label: { pl: "korzenie", ua: "корені" } },
          { id: "c", label: { pl: "liście", ua: "листки" } },
          { id: "d", label: { pl: "chwytniki mchu", ua: "ризоїди моху" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Kłącze, korzenie, liście. Chwytniki = mech.", ua: "Кореневище, корені, листки." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Kupki", ua: "Перевірка 3. Купки" },
      task: {
        id: "l26-s3",
        type: "single-choice",
        question: { pl: "Gdzie znajdziesz kupki zarodni?", ua: "Де знайдеш купки спорангіїв?" },
        options: [
          { id: "a", label: { pl: "na spodzie liścia paproci", ua: "на споді листка папороті" } },
          { id: "b", label: { pl: "w kwiecie jabłoni", ua: "у квітці яблуні" } },
          { id: "c", label: { pl: "w szyszce sosny", ua: "у шишці сосни" } }
        ],
        answer: "a",
        explanation: { pl: "Spód liścia. Kwiat i szyszka — później.", ua: "Спід листка. Квітка і шишка — пізніше." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Paproć a mech", ua: "Перевірка 4. Папороть і мох" },
      task: {
        id: "l26-s4",
        type: "true-false",
        question: { pl: "Paproć ma korzenie i kłącze; zarodnie w kupkach na liściu. Mech ma chwytniki i puszkę.", ua: "Папороть має корені і кореневище; спорангії в купках на листку. Мох має ризоїди і коробочку." },
        answer: true,
        explanation: { pl: "Inna budowa, oba zarodniki, oba lubią wilgoć.", ua: "Інша будова, обидва спори, обидва волога." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Trzy paprotniki", ua: "Перевірка 5. Три папоротеподібні" },
      task: {
        id: "l26-s5",
        type: "multiple-choice",
        question: { pl: "Które trzy odróżnisz jako paprotniki?", ua: "Які три відрізниш як папоротеподібні?" },
        options: [
          { id: "a", label: { pl: "paproć", ua: "папороть" } },
          { id: "b", label: { pl: "skrzyp", ua: "хвощ" } },
          { id: "c", label: { pl: "widłak", ua: "плаун" } },
          { id: "d", label: { pl: "torfowiec", ua: "сфагнум" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Paproć, skrzyp, widłak. Torfowiec = mech.", ua: "Папороть, хвощ, плаун. Сфагнум = мох." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: tree({
        layout: "fork",
        root: { pl: "paprotniki", ua: "папоротеподібні" },
        items: [
          { pl: "paproć", ua: "папороть" },
          { pl: "skrzyp", ua: "хвощ" },
          { pl: "widłak", ua: "плаун" }
        ]
      }),
      text: {
        pl: [
          "Wilgoć i cień.",
          "Kłącze, korzenie, liście.",
          "Kupki zarodni na spodzie liścia.",
          "Paproć ≠ mech (korzenie vs chwytniki).",
          "Paproć, skrzyp, widłak.",
          "Szyszki i kwiat — lekcje 27–30."
        ],
        ua: [
          "Волога і затінок.",
          "Кореневище, корені, листки.",
          "Купки спорангіїв на споді листка.",
          "Папороть ≠ мох (корені проти ризоїдів).",
          "Папороть, хвощ, плаун.",
          "Шишки і квітка — уроки 27–30."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię wskazać wilgotne środowisko paproci.", ua: "Можу вказати вологе середовище папороті." },
        { pl: "Potrafię wskazać kłącze, korzenie i liście.", ua: "Можу вказати кореневище, корені і листки." },
        { pl: "Potrafię znaleźć kupki zarodni na spodzie liścia.", ua: "Можу знайти купки спорангіїв на споді листка." },
        { pl: "Potrafię porównać paproć z mchem.", ua: "Можу порівняти папороть із мохом." },
        { pl: "Potrafię odróżnić paproć, skrzyp i widłak.", ua: "Можу відрізнити папороть, хвощ і плаун." }
      ]
    }
  ]
};
