function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L13_Doswiadczenie_fermentacja/images/";

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
        { pl: "Sformułujesz problem i hipotezę doświadczenia z drożdżami.", ua: "Сформулюєш проблему і гіпотезу досліду з дріжджами." },
        { pl: "Wskażesz próbę badawczą i kontrolną.", ua: "Вкажеш дослідну і контрольну пробу." },
        { pl: "Powiesz, co pokazuje nadmuchany balon.", ua: "Скажеш, що показує надута кулька." },
        { pl: "Wymienisz warunki fermentacji drożdży w tym doświadczeniu.", ua: "Назвеш умови бродіння дріжджів у цьому досліді." },
        { pl: "Sformułujesz wniosek: drożdże bez tlenu wytwarzają dwutlenek węgla.", ua: "Сформулюєш висновок: дріжджі без кисню виробляють вуглекислий газ." }
      ]
    },
    {
      type: "vocabulary",
      heading: { pl: "Najważniejsze pojęcia", ua: "Найважливіші поняття" },
      rows: [
        { pl: "drożdże", ua: "дріжджі" },
        { pl: "fermentacja", ua: "бродіння" },
        { pl: "hipoteza", ua: "гіпотеза" },
        { pl: "próba badawcza", ua: "дослідна проба" },
        { pl: "próba kontrolna", ua: "контрольна проба" },
        { pl: "dwutlenek węgla", ua: "вуглекислий газ" },
        { pl: "wniosek", ua: "висновок" }
      ]
    },
    {
      type: "intro",
      heading: { pl: "Zacznijmy", ua: "Почнімо" },
      visual: vizGh("l13-zacznijmy.png", {
        alt: { pl: "Butelka z drożdżami i cukrem, na szyjce balon", ua: "Пляшка з дріжджами і цукром, на шийці кулька" },
        title: { pl: "Dlaczego balon się nadyma, skoro nikt w niego nie dmucha?", ua: "Чому кулька надувається, хоч ніхто в неї не дмухає?" },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9. Przezroczysta butelka z mętną cieczą, na szyjce nadmuchany beżowy balon. Etykieta PL: drożdże + cukier + ciepła woda. Szkolny stół. Bez twarzy, bez alkoholu do picia, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Ciasto rośnie. W butelce z drożdżami balon puchnie. Kto dmucha?",
          "Nikt. To gaz z fermentacji. Na tej lekcji ułożysz doświadczenie jak na lekcji 2: jedno pytanie, jedna zmiana, wniosek. Mieszaniny nie pijesz — to szkolny test, nie napój."
        ],
        ua: [
          "Тісто росте. У пляшці з дріжджами кулька пухне. Хто дмухає?",
          "Ніхто. Це газ із бродіння. Мішанину не п’єш — це шкільний тест, не напій."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Problem i hipoteza", ua: "Проблема і гіпотеза" },
      visual: vizGh("l13-hipoteza.png", {
        alt: { pl: "Pytanie: czy drożdże wytwarzają gaz bez dostępu powietrza?", ua: "Питання: чи дріжджі виробляють газ без доступу повітря?" },
        title: { pl: "Pytanie, potem przypuszczenie.", ua: "Питання, потім припущення." },
        prompt: { pl: "Szkolna tablica 16:9, polskie napisy. Problem: Czy drożdże w cieple, z cukrem, wytwarzają gaz (CO₂) przy fermentacji? Hipoteza: Tak — balon na butelce z żywymi drożdżami i cukrem się nadmie. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Problem"), ": Czy drożdże z cukrem w ciepłej wodzie wytwarzają gaz, który napełnia balon?"],
          ["", em("Hipoteza"), ": Tak — jeśli drożdże są żywe i mają cukier, balon się nadmie, bo powstaje dwutlenek węgla."],
          "Balon na szyjce ogranicza dopływ powietrza z zewnątrz. Fermentacja i tak może iść — nie potrzebuje tlenu jak oddychanie tlenowe."
        ],
        ua: [
          ["", em("Проблема"), ": Чи дріжджі з цукром у теплій воді виробляють газ, який наповнює кульку?"],
          ["", em("Гіпотеза"), ": Так — якщо дріжджі живі і мають цукор, кулька надується, бо виникає вуглекислий газ."]
        ]
      },
      task: {
        id: "l13-e1",
        type: "single-choice",
        question: { pl: "Co jest hipotezą tego doświadczenia?", ua: "Що є гіпотезою цього досліду?" },
        options: [
          { id: "a", label: { pl: "żywe drożdże z cukrem wytworzą gaz (CO₂) i balon się nadmie", ua: "живі дріжджі з цукром вироблять газ (CO₂) і кулька надується" } },
          { id: "b", label: { pl: "balon nadyma się, bo ktoś dmucha w klasie", ua: "кулька надувається, бо хтось дмухає в класі" } },
          { id: "c", label: { pl: "drożdże prowadzą fotosyntezę w chloroplastach", ua: "дріжджі ведуть фотосинтез у хлоропластах" } }
        ],
        answer: "a",
        explanation: { pl: "Drożdże to grzyby — bez chloroplastów. Gaz z fermentacji.", ua: "Дріжджі — гриби, без хлоропластів." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Próba badawcza i kontrolna", ua: "Дослідна і контрольна проба" },
      visual: vizGh("l13-proby.png", {
        alt: { pl: "Dwie butelki: z cukrem i bez cukru", ua: "Дві пляшки: з цукром і без цукру" },
        title: { pl: "Jedna zmiana. Reszta taka sama.", ua: "Одна зміна. Решта така сама." },
        prompt: { pl: "Edukacyjne zdjęcie 16:9. Dwie identyczne butelki z balonami. LEWA: drożdże + cukier + ciepła woda, balon duży — próba badawcza. PRAWA: drożdże + ciepła woda BEZ cukru, balon wiotki — próba kontrolna. Polskie etykiety. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["", em("Próba badawcza"), ": ciepła woda + drożdże + cukier. Balon na szyjce."],
          ["", em("Próba kontrolna"), ": tak samo, ale ", em("bez cukru"), " (albo z drożdżami zabitymi wrzątkiem — nauczyciel wybiera jedną kontrolę)."],
          "Temperatura, ilość wody, rodzaj butelki — takie same. Zmieniamy jeden czynnik: czy drożdże mają cukier (pokarm) do fermentacji."
        ],
        ua: [
          ["", em("Дослідна проба"), ": тепла вода + дріжджі + цукор."],
          ["", em("Контрольна проба"), ": так само, але ", em("без цукру"), "."],
          "Змінюємо один чинник: чи мають дріжджі цукор."
        ]
      },
      task: {
        id: "l13-e2",
        type: "true-false",
        question: { pl: "W próbie kontrolnej brakuje badanego czynnika — na przykład cukru.", ua: "У контрольній пробі бракує досліджуваного чинника — наприклад цукру." },
        answer: true,
        explanation: { pl: "Jak na lekcji 2 i 10: kontrola bez czynnika.", ua: "Як на уроках 2 і 10." }
      }
    },
    {
      type: "classification",
      heading: { pl: "Dwie butelki", ua: "Дві пляшки" },
      visual: tree({
        layout: "fork",
        root: { pl: "jeden czynnik: cukier", ua: "один чинник: цукор" },
        items: [
          { pl: "badawcza — z cukrem", ua: "дослідна — з цукром" },
          { pl: "kontrolna — bez cukru", ua: "контрольна — без цукру" }
        ]
      }),
      items: [
        { pl: "próba badawcza — drożdże + cukier + ciepła woda", ua: "дослідна проба — дріжджі + цукор + тепла вода" },
        { pl: "próba kontrolna — tak samo, ale bez cukru", ua: "контрольна проба — так само, але без цукру" }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Co pokazuje balon?", ua: "Що показує кулька?" },
      visual: vizGh("l13-balon.png", {
        alt: { pl: "Balon wypełniony gazem z fermentacji", ua: "Кулька, наповнена газом із бродіння" },
        title: { pl: "Gaz = dwutlenek węgla z fermentacji, nie z płuc ucznia.", ua: "Газ = вуглекислий газ із бродіння, не з легень учня." },
        prompt: { pl: "Zbliżenie 16:9 na nadmuchany balon na butelce, strzałka PL: dwutlenek węgla (CO₂). Bez twarzy, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Balon powiększa się, bo w butelce przybywa gazu. Ten gaz to głównie ", em("dwutlenek węgla"), " — produkt fermentacji drożdży.",
          "To nie jest tlen z fotosyntezy. Drożdże nie mają chloroplastów.",
          "W pracowni czasem sprawdza się CO₂ wodą wapienną (mętnieje). Na paszport wystarczy: balon = gaz z fermentacji = CO₂."
        ],
        ua: [
          "Кулька збільшується, бо в пляшці більшає газу. Цей газ — здебільшого ", em("вуглекислий газ"), ".",
          "Це не кисень із фотосинтезу.",
          "На паспорт досить: кулька = газ із бродіння = CO₂."
        ]
      },
      task: {
        id: "l13-e3",
        type: "single-choice",
        question: { pl: "Co pokazuje nadmuchany balon w tym doświadczeniu?", ua: "Що показує надута кулька в цьому досліді?" },
        options: [
          { id: "a", label: { pl: "powstaje gaz — dwutlenek węgla z fermentacji drożdży", ua: "виникає газ — вуглекислий газ із бродіння дріжджів" } },
          { id: "b", label: { pl: "powstaje tlen z chlorofilu drożdży", ua: "виникає кисень із хлорофілу дріжджів" } },
          { id: "c", label: { pl: "balon sam zasysa powietrze z klasy", ua: "кулька сама всмоктує повітря з класу" } }
        ],
        answer: "a",
        explanation: { pl: "CO₂ z fermentacji. Drożdże bez chlorofilu.", ua: "CO₂ з бродіння." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Warunki", ua: "Умови" },
      visual: vizGh("l13-warunki.png", {
        alt: { pl: "Ciepło, cukier, żywe drożdże", ua: "Тепло, цукор, живі дріжджі" },
        title: { pl: "Żywe drożdże, cukier, umiarkowane ciepło.", ua: "Живі дріжджі, цукор, помірне тепло." },
        prompt: { pl: "Edukacyjna infografika 16:9, trzy karty PL: 1 żywe drożdże (nie przegotowane); 2 cukier jako pokarm; 3 ciepła woda, nie wrzątek. Krzyżyk przy lodówce i przy wrzątku. Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Drożdże są żywe — to grzyby. Wrzątek je zabija; wtedy balon się nie nadmie.",
          "Cukier to ich pokarm do fermentacji.",
          "Ciepło (letnia woda) przyspiesza proces. Lodówka spowalnia. Wrzątek niszczy komórki.",
          "Doświadczenie robisz w szkole albo oglądasz wynik. Nie pijesz zawartości butelki."
        ],
        ua: [
          "Дріжджі живі — це гриби. Кип’яток їх убиває.",
          "Цукор — їхня пожива для бродіння.",
          "Тепло прискорює. Холодильник сповільнює.",
          "Вміст пляшки не п’єш."
        ]
      },
      task: {
        id: "l13-e4",
        type: "multiple-choice",
        question: { pl: "Zaznacz warunki, które sprzyjają temu doświadczeniu.", ua: "Познач умови, які сприяють цьому досліду." },
        options: [
          { id: "a", label: { pl: "żywe drożdże", ua: "живі дріжджі" } },
          { id: "b", label: { pl: "cukier", ua: "цукор" } },
          { id: "c", label: { pl: "ciepła (letnia) woda", ua: "тепла (літепла) вода" } },
          { id: "d", label: { pl: "wrzątek, który zabija drożdże", ua: "кип’яток, який убиває дріжджі" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Wrzątek psuje próbę badawczą, bo zabija grzyby.", ua: "Кип’яток псує дослідну пробу." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Wniosek", ua: "Висновок" },
      visual: vizGh("l13-wynik.png", {
        alt: { pl: "Balon nadęty przy cukrze, wiotki bez cukru", ua: "Кулька надута при цукрі, млява без цукру" },
        title: { pl: "Fermentacja bez tlenu wytwarza CO₂.", ua: "Бродіння без кисню виробляє CO₂." },
        prompt: { pl: "To samo porównanie dwóch butelek z etykietą wniosku PL: drożdże + cukier → CO₂ (fermentacja). Bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          ["Typowy wynik: balon przy cukrze i żywych drożdżach jest duży. Przy kontroli — nie."],
          ["", em("Wniosek"), ": drożdże w obecności cukru prowadzą fermentację i wytwarzają dwutlenek węgla — nawet gdy balon ogranicza dopływ powietrza."],
          "To potwierdza lekcję 12: fermentacja nie wymaga tlenu tak jak oddychanie tlenowe w mitochondriach."
        ],
        ua: [
          "Типовий результат: кулька при цукрі велика. При контролі — ні.",
          ["", em("Висновок"), ": дріжджі з цукром ведуть бродіння і виробляють вуглекислий газ."],
          "Бродіння не потребує кисню так, як аеробне дихання."
        ]
      },
      task: {
        id: "l13-e5",
        type: "true-false",
        question: { pl: "Wniosek: drożdże bez tlenu (fermentacja) wytwarzają dwutlenek węgla, który napełnia balon.", ua: "Висновок: дріжджі без кисню (бродіння) виробляють вуглекислий газ, який наповнює кульку." },
        answer: true,
        explanation: { pl: "Gaz w balonie = CO₂ z fermentacji.", ua: "Газ у кульці = CO₂ з бродіння." }
      }
    },
    {
      type: "concept",
      heading: { pl: "Bezpieczeństwo i metoda", ua: "Безпека і метод" },
      visual: vizGh("l13-szkola.png", {
        alt: { pl: "Szkolny stół z doświadczeniem — nie do picia", ua: "Шкільний стіл із дослідом — не для пиття" },
        title: { pl: "Oglądasz. Nie smakujesz.", ua: "Дивишся. Не смакуєш." },
        prompt: { pl: "Fotorealistyczne zdjęcie 16:9 szkolnej pracowni, butelki z balonami na tacy, kartka NIE PIĆ. Bez twarzy zbliżeniem, bez angielskiego, bez logotypów." }
      }),
      text: {
        pl: [
          "Zawartość nie jest napojem. Alkohol z fermentacji nie jest tematem do degustacji w klasie 5.",
          "Metoda: problem → hipoteza → jedna zmienna → wynik → wniosek. Tak samo jak banany (L2) i skrobia w liściu (L10)."
        ],
        ua: [
          "Вміст не є напоєм.",
          "Метод: проблема → гіпотеза → одна змінна → результат → висновок."
        ]
      },
      task: {
        id: "l13-e6",
        type: "true-false",
        question: { pl: "Mieszaniny z doświadczenia z drożdżami nie pijesz.", ua: "Мішанину з досліду з дріжджами не п’єш." },
        answer: true,
        explanation: { pl: "Szkolny test gazu, nie posiłek.", ua: "Шкільний тест газу, не їжа." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Praktyka. Problem", ua: "Практика. Проблема" },
      task: {
        id: "l13-p1",
        type: "single-choice",
        question: { pl: "Które pytanie jest problemem badawczym tej lekcji?", ua: "Яке питання є дослідницькою проблемою цього уроку?" },
        options: [
          { id: "a", label: { pl: "Czy drożdże z cukrem wytwarzają gaz, który napełnia balon?", ua: "Чи дріжджі з цукром виробляють газ, який наповнює кульку?" } },
          { id: "b", label: { pl: "Jaki kolor ma kreda?", ua: "Який колір має крейда?" } },
          { id: "c", label: { pl: "Czy lis jest samożywny?", ua: "Чи лисиця саможивна?" } }
        ],
        answer: "a",
        explanation: { pl: "Problem dotyczy gazu z fermentacji.", ua: "Проблема стосується газу з бродіння." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Próby", ua: "Проби" },
      task: {
        id: "l13-p2",
        type: "single-choice",
        question: { pl: "Która para jest poprawna?", ua: "Яка пара правильна?" },
        options: [
          { id: "a", label: { pl: "badawcza — drożdże + cukier; kontrolna — bez cukru (albo martwe drożdże)", ua: "дослідна — дріжджі + цукор; контрольна — без цукру (або мертві дріжджі)" } },
          { id: "b", label: { pl: "kontrolna musi mieć więcej cukru niż badawcza", ua: "контрольна мусить мати більше цукру, ніж дослідна" } },
          { id: "c", label: { pl: "obie próby muszą być wrzątkiem", ua: "обидві проби мусять бути кип’ятком" } }
        ],
        answer: "a",
        explanation: { pl: "Kontrola bez pokarmu albo bez żywych komórek.", ua: "Контроль без поживи або без живих клітин." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Balon", ua: "Кулька" },
      task: {
        id: "l13-p3",
        type: "true-false",
        question: { pl: "Nadmuchany balon oznacza, że powstał dwutlenek węgla.", ua: "Надута кулька означає, що виник вуглекислий газ." },
        answer: true,
        explanation: { pl: "Gaz fermentacji = CO₂.", ua: "Газ бродіння = CO₂." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Warunki", ua: "Умови" },
      task: {
        id: "l13-p4",
        type: "multiple-choice",
        question: { pl: "Zaznacz, czego potrzebują drożdże w tym teście.", ua: "Познач, чого потребують дріжджі в цьому тесті." },
        options: [
          { id: "a", label: { pl: "cukier", ua: "цукор" } },
          { id: "b", label: { pl: "żywe komórki drożdży", ua: "живі клітини дріжджів" } },
          { id: "c", label: { pl: "umiarkowane ciepło", ua: "помірне тепло" } },
          { id: "d", label: { pl: "chloroplasty i pełne słońce jak moczarka", ua: "хлоропласти і повне сонце як елодея" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Drożdże nie fotosyntetyzują.", ua: "Дріжджі не фотосинтезують." }
      }
    },
    {
      type: "practice",
      heading: { pl: "Wniosek", ua: "Висновок" },
      task: {
        id: "l13-p5",
        type: "single-choice",
        question: { pl: "Który wniosek jest poprawny?", ua: "Який висновок правильний?" },
        options: [
          { id: "a", label: { pl: "Drożdże z cukrem prowadzą fermentację i wytwarzają CO₂ nawet przy ograniczonym dostępie powietrza.", ua: "Дріжджі з цукром ведуть бродіння і виробляють CO₂ навіть при обмеженому доступі повітря." } },
          { id: "b", label: { pl: "Drożdże potrzebują tlenu tak samo jak mitochondrium do tego gazu w balonie.", ua: "Дріжджі потребують кисню так само, як мітохондрія для цього газу в кульці." } },
          { id: "c", label: { pl: "Balon nadyma tlen z liścia.", ua: "Кульку надуває кисень із листка." } }
        ],
        answer: "a",
        explanation: { pl: "Fermentacja bez tlenu. Nie mylić z fotosyntezą moczarki.", ua: "Бродіння без кисню." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Problem i hipoteza", ua: "Перевірка 1. Проблема і гіпотеза" },
      text: {
        pl: ["To sprawdzenie Paszportu."],
        ua: ["Це перевірка Паспорта."]
      },
      task: {
        id: "l13-s1",
        type: "single-choice",
        question: { pl: "Która para pasuje do doświadczenia z drożdżami?", ua: "Яка пара пасує до досліду з дріжджами?" },
        options: [
          { id: "a", label: { pl: "problem: czy powstaje gaz napełniający balon?; hipoteza: tak, gdy są żywe drożdże i cukier (CO₂)", ua: "проблема: чи виникає газ, що наповнює кульку?; гіпотеза: так, коли є живі дріжджі і цукор (CO₂)" } },
          { id: "b", label: { pl: "problem: czy lis ma chlorofil?; hipoteza: jodyna jest cukrem", ua: "проблема: чи лисиця має хлорофіл?; гіпотеза: йод є цукром" } },
          { id: "c", label: { pl: "nie ma hipotezy, jest tylko zgadywanie koloru balonu", ua: "немає гіпотези, є лише вгадування кольору кульки" } }
        ],
        answer: "a",
        explanation: { pl: "Pytanie o gaz; hipoteza o CO₂ z żywych drożdży i cukru.", ua: "Питання про газ; гіпотеза про CO₂." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Próby", ua: "Перевірка 2. Проби" },
      task: {
        id: "l13-s2",
        type: "multiple-choice",
        question: { pl: "Zaznacz prawdziwe zdania.", ua: "Познач правдиві речення." },
        options: [
          { id: "a", label: { pl: "Próba badawcza zawiera drożdże i cukier.", ua: "Дослідна проба містить дріжджі і цукор." } },
          { id: "b", label: { pl: "Próba kontrolna jest bez cukru albo z zabitymi drożdżami.", ua: "Контрольна проба без цукру або з убитими дріжджами." } },
          { id: "c", label: { pl: "Zmieniamy naraz temperaturę, gatunek rośliny i jodynę.", ua: "Змінюємо водночас температуру, вид рослини і йод." } }
        ],
        answer: ["a", "b"],
        explanation: { pl: "Jeden czynnik. Nie mieszamy z doświadczeniem ze skrobią.", ua: "Один чинник." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Balon", ua: "Перевірка 3. Кулька" },
      task: {
        id: "l13-s3",
        type: "single-choice",
        question: { pl: "Co pokazuje nadmuchany balon?", ua: "Що показує надута кулька?" },
        options: [
          { id: "a", label: { pl: "dwutlenek węgla z fermentacji", ua: "вуглекислий газ із бродіння" } },
          { id: "b", label: { pl: "tlen z chloroplastów drożdży", ua: "кисень із хлоропластів дріжджів" } },
          { id: "c", label: { pl: "parę wodną z fotosyntezy liścia", ua: "водяну пару з фотосинтезу листка" } }
        ],
        answer: "a",
        explanation: { pl: "CO₂. Nie tlen z liścia.", ua: "CO₂. Не кисень із листка." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Warunki", ua: "Перевірка 4. Умови" },
      task: {
        id: "l13-s4",
        type: "multiple-choice",
        question: { pl: "Zaznacz warunki fermentacji drożdży w tym doświadczeniu.", ua: "Познач умови бродіння дріжджів у цьому досліді." },
        options: [
          { id: "a", label: { pl: "żywe drożdże", ua: "живі дріжджі" } },
          { id: "b", label: { pl: "cukier", ua: "цукор" } },
          { id: "c", label: { pl: "umiarkowane ciepło", ua: "помірне тепло" } },
          { id: "d", label: { pl: "koniecznie wrzątek", ua: "обов’язково кип’яток" } }
        ],
        answer: ["a", "b", "c"],
        explanation: { pl: "Wrzątek zabija drożdże.", ua: "Кип’яток убиває дріжджі." }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Wniosek", ua: "Перевірка 5. Висновок" },
      task: {
        id: "l13-s5",
        type: "true-false",
        question: { pl: "Drożdże bez tlenu wytwarzają dwutlenek węgla podczas fermentacji.", ua: "Дріжджі без кисню виробляють вуглекислий газ під час бродіння." },
        answer: true,
        explanation: { pl: "To domknięcie paszportu i lekcji 12.", ua: "Це замикання паспорта і уроку 12." }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l13-proby.png", {
        alt: { pl: "Dwie próby z drożdżami", ua: "Дві проби з дріжджами" },
        title: { pl: "Cukier + żywe drożdże → CO₂ w balonie.", ua: "Цукор + живі дріжджі → CO₂ в кульці." },
        prompt: { pl: "To samo porównanie dwóch butelek." }
      }),
      text: {
        pl: [
          "Problem i hipoteza: gaz z drożdży i cukru.",
          "Badawcza = cukier; kontrolna = bez cukru (lub martwe drożdże).",
          "Balon = CO₂, nie tlen z liścia.",
          "Warunki: żywe drożdże, cukier, letnia woda. Nie pić.",
          "Wniosek: fermentacja bez tlenu wytwarza dwutlenek węgla."
        ],
        ua: [
          "Проблема і гіпотеза: газ із дріжджів і цукру.",
          "Дослідна = цукор; контрольна = без цукру.",
          "Кулька = CO₂.",
          "Умови: живі дріжджі, цукор, літепла вода. Не пити.",
          "Висновок: бродіння без кисню виробляє вуглекислий газ."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Paszport zaliczony", ua: "Паспорт зараховано" },
      items: [
        { pl: "Potrafię sformułować problem i hipotezę doświadczenia z drożdżami.", ua: "Можу сформулювати проблему і гіпотезу досліду з дріжджами." },
        { pl: "Potrafię wskazać próbę badawczą i kontrolną.", ua: "Можу вказати дослідну і контрольну пробу." },
        { pl: "Potrafię powiedzieć, co pokazuje balon.", ua: "Можу сказати, що показує кулька." },
        { pl: "Potrafię wymienić warunki fermentacji drożdży.", ua: "Можу назвати умови бродіння дріжджів." },
        { pl: "Potrafię sformułować wniosek o CO₂ bez tlenu.", ua: "Можу сформулювати висновок про CO₂ без кисню." }
      ]
    }
  ]
};
