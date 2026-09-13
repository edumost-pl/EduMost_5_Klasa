function em(text) {
  return { text: text, emphasis: true };
}

function vizGh(folder, file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  spec.url = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/" +
    folder + "/images/" + file + "?raw=true";
  return spec;
}

function tree(spec) {
  spec.kind = "class-tree";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Powtórzenie i sprawdzian", ua: "Повторення і перевірка" },
      text: {
        pl: [
          "To nie nowa lekcja biologii. Powtarzasz cały dział II: Budowa i czynności życiowe organizmów (lekcje 4–14).",
          "Najpierw krótka powtórka. Potem zadania jak w podręczniku „Wiesz czy nie wiesz?”. Na końcu mini-notatka przed szkolnym sprawdzianem."
        ],
        ua: [
          "Це не новий урок біології. Ти повторюєш увесь розділ II: Будова і життєві функції організмів (уроки 4–14).",
          "Спочатку коротке повторення. Потім завдання як у підручнику «Знаєш чи не знаєш?». Наприкінці міні-нотатка перед шкільною перевіркою."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Co umiesz po tym dziale?", ua: "Що вмієш після цього розділу?" },
      items: [
        { pl: "Wymienisz składniki chemiczne organizmu i powiesz, po co jest woda.", ua: "Назвеш хімічні складники організму і скажеш, навіщо вода." },
        { pl: "Porównasz komórkę zwierzęcą z roślinną.", ua: "Порівняєш тваринну клітину з рослинною." },
        { pl: "Odróżnisz samożywność od cudzożywności i podasz równanie fotosyntezy.", ua: "Відрізниш саможивлення від гетеротрофного і назвеш рівняння фотосинтезу." },
        { pl: "Odróżnisz oddychanie tlenowe od fermentacji i złożysz siedem czynności życiowych.", ua: "Відрізниш аеробне дихання від бродіння і збереш сім життєвих функцій." }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Z czego zbudowany jest organizm?", ua: "З чого збудований організм?" },
      visual: vizGh("L04_Skladniki_chemiczne_organizmow", "l04-sklad-czlowieka.png", {
        alt: { pl: "Skład chemiczny organizmu człowieka", ua: "Хімічний склад організму людини" },
        title: { pl: "Najwięcej jest wody. Reszta to cukry, białka, tłuszcze, sole, witaminy.", ua: "Найбільше води. Решта — цукри, білки, жири, солі, вітаміни." },
        prompt: { pl: "Istniejąca infografika lekcji 4: skład chemiczny organizmu człowieka." }
      }),
      text: {
        pl: [
          "Organizm składa się z tych samych pierwiastków, które są w przyrodzie nieożywionej — ale ułożonych w związki.",
          ["Najwięcej jest ", em("wody"), ". Woda rozpuszcza substancje i przenosi je po organizmie."],
          "Cukry i tłuszcze dają energię. Białka budują ciało. Sole mineralne i witaminy są potrzebne w małych ilościach, ale bez nich organizm źle działa.",
          "DNA to nośnik informacji dziedzicznej — nie mylisz go z zapasem energii."
        ],
        ua: [
          "Організм складається з тих самих елементів, що є в неживій природі — але укладених у сполуки.",
          ["Найбільше ", em("води"), ". Вода розчиняє речовини і переносить їх по організму."],
          "Цукри і жири дають енергію. Білки будують тіло. Мінеральні солі і вітаміни потрібні в малих кількостях, але без них організм погано працює.",
          "ДНК — носій спадкової інформації. Не плутай її із запасом енергії."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Komórka zwierzęca i roślinna", ua: "Тваринна і рослинна клітина" },
      visual: vizGh("L08_Porownujemy_komorki", "l08-zwierze-roslina.png", {
        alt: { pl: "Porównanie komórki zwierzęcej i roślinnej", ua: "Порівняння тваринної і рослинної клітини" },
        title: { pl: "Roślinna ma ścianę, chloroplasty i dużą wakuolę.", ua: "Рослинна має стінку, хлоропласти і велику вакуолю." },
        prompt: { pl: "Istniejący schemat lekcji 8: komórka zwierzęca obok roślinnej." }
      }),
      text: {
        pl: [
          "Obie komórki mają błonę, cytoplazmę, jądro i mitochondria.",
          ["Komórka roślinna ma dodatkowo ", em("ścianę komórkową"), ", ", em("chloroplasty"), " (z chlorofilem) i zwykle dużą ", em("wakuolę"), "."],
          "W mitochondriach uwalniana jest energia. W chloroplastach zachodzi fotosynteza.",
          "Komórka bakterii nie ma jądra — to już dział III, nie mieszaj jej tu z rośliną."
        ],
        ua: [
          "Обидві клітини мають мембрану, цитоплазму, ядро і мітохондрії.",
          ["Рослинна клітина має додатково ", em("клітинну стінку"), ", ", em("хлоропласти"), " (з хлорофілом) і зазвичай велику ", em("вакуолю"), "."],
          "У мітохондріях вивільняється енергія. У хлоропластах відбувається фотосинтез.",
          "Клітина бактерії не має ядра — це вже розділ III, не змішуй її тут із рослиною."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Jak organizmy się odżywiają?", ua: "Як організми живляться?" },
      visual: vizGh("L09_Samozywnosc_i_fotosynteza", "l09-rownanie.png", {
        alt: { pl: "Równanie słowne fotosyntezy", ua: "Словесне рівняння фотосинтезу" },
        title: { pl: "Światło + dwutlenek węgla + woda → cukier + tlen.", ua: "Світло + вуглекислий газ + вода → цукор + кисень." },
        prompt: { pl: "Istniejąca plansza lekcji 9: równanie słowne fotosyntezy." }
      }),
      text: {
        pl: [
          ["", em("Samożywność"), " — organizm sam wytwarza pokarm. U roślin to ", em("fotosynteza"), " w chloroplastach."],
          "Do fotosyntezy potrzeba: światła, dwutlenku węgla i wody. Powstaje cukier i tlen.",
          "Jodyna barwi skrobię na niebieskofioletowo — tak w doświadczeniu sprawdzasz, że w liściu powstał pokarm.",
          ["", em("Cudzożywność"), " — organizm korzysta z gotowego pokarmu. Zwierzęta, grzyby, człowiek."]
        ],
        ua: [
          ["", em("Саможивлення"), " — організм сам виробляє поживу. У рослин це ", em("фотосинтез"), " у хлоропластах."],
          "Для фотосинтезу потрібні: світло, вуглекислий газ і вода. Виникає цукор і кисень.",
          "Йод забарвлює крохмаль на синьо-фіолетово — так у досліді перевіряєш, що в листку виникла пожива.",
          ["", em("Гетеротрофне живлення"), " — організм користується готовою поживою. Тварини, гриби, людина."]
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Oddychanie i fermentacja", ua: "Дихання і бродіння" },
      visual: vizGh("L12_Oddychanie_tlenowe_i_fermentacja", "l12-rownanie.png", {
        alt: { pl: "Równanie oddychania tlenowego", ua: "Рівняння аеробного дихання" },
        title: { pl: "Cukier + tlen → dwutlenek węgla + woda + energia.", ua: "Цукор + кисень → вуглекислий газ + вода + енергія." },
        prompt: { pl: "Istniejąca plansza lekcji 12: równanie oddychania tlenowego." }
      }),
      text: {
        pl: [
          "Wymiana gazów to wdech i wydech. Oddychanie komórkowe dzieje się w mitochondriach: cukier + tlen → energia, dwutlenek węgla i woda.",
          ["", em("Fermentacja"), " zachodzi bez tlenu i daje mniej energii. Drożdże: cukier → alkohol + dwutlenek węgla (balon nad butelką nadyma się)."],
          "Rośliny też oddychają — w dzień dodatkowo fotosyntetyzują.",
          "Siedem czynności życiowych z lekcji 1 nadal obowiązuje: odżywianie, oddychanie, wydalanie, ruch, reakcja na bodźce, rozmnażanie, wzrost i rozwój."
        ],
        ua: [
          "Обмін газів — це вдих і видих. Клітинне дихання відбувається в мітохондріях: цукор + кисень → енергія, вуглекислий газ і вода.",
          ["", em("Бродіння"), " відбувається без кисню і дає менше енергії. Дріжджі: цукор → спирт + вуглекислий газ (кулька над пляшкою надувається)."],
          "Рослини теж дихають — удень додатково фотосинтезують.",
          "Сім життєвих функцій з уроку 1 далі чинні: живлення, дихання, виділення, рух, реакція на подразники, розмноження, ріст і розвиток."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa działu", ua: "Слова розділу" },
      rows: [
        { pl: "woda", ua: "вода" },
        { pl: "białka / cukry / tłuszcze", ua: "білки / цукри / жири" },
        { pl: "chloroplast", ua: "хлоропласт" },
        { pl: "mitochondrium", ua: "мітохондрія" },
        { pl: "fotosynteza", ua: "фотосинтез" },
        { pl: "samożywność / cudzożywność", ua: "саможивлення / гетеротрофне живлення" },
        { pl: "fermentacja", ua: "бродіння" }
      ]
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Składniki organizmu", ua: "Перевірка 1. Складники організму" },
      text: {
        pl: ["Jak w podręczniku: co jest rozpuszczalnikiem, a co buduje ciało?"],
        ua: ["Як у підручнику: що є розчинником, а що будує тіло?"]
      },
      task: {
        id: "bio-r2-s1",
        type: "multiple-choice",
        question: { pl: "Zaznacz wszystkie prawdziwe zdania.", ua: "Познач усі правдиві речення." },
        options: [
          { id: "a", label: { pl: "Woda rozpuszcza substancje i przenosi je po organizmie.", ua: "Вода розчиняє речовини і переносить їх по організму." } },
          { id: "b", label: { pl: "Białka budują ciało.", ua: "Білки будують тіло." } },
          { id: "c", label: { pl: "DNA to zapas energii jak tłuszcz.", ua: "ДНК — запас енергії, як жир." } },
          { id: "d", label: { pl: "Cukry mogą dostarczać energii.", ua: "Цукри можуть постачати енергію." } }
        ],
        answer: ["a", "b", "d"],
        explanation: {
          pl: "DNA niesie informację dziedziczną, nie jest zapasem energii.",
          ua: "ДНК несе спадкову інформацію, не є запасом енергії."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Komórki", ua: "Перевірка 2. Клітини" },
      task: {
        id: "bio-r2-s2",
        type: "single-choice",
        question: { pl: "Co ma komórka roślinna, a zwierzęca zwykle nie?", ua: "Що має рослинна клітина, а тваринна зазвичай ні?" },
        options: [
          { id: "a", label: { pl: "jądro i mitochondria", ua: "ядро і мітохондрії" } },
          { id: "b", label: { pl: "ścianę komórkową, chloroplasty i dużą wakuolę", ua: "клітинну стінку, хлоропласти і велику вакуолю" } },
          { id: "c", label: { pl: "tylko błonę, bez cytoplazmy", ua: "лише мембрану, без цитоплазми" } }
        ],
        answer: "b",
        explanation: {
          pl: "Jądro i mitochondria są w obu. Roślinna dodaje ścianę, chloroplasty i dużą wakuolę.",
          ua: "Ядро і мітохондрії є в обох. Рослинна додає стінку, хлоропласти і велику вакуолю."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Fotosynteza", ua: "Перевірка 3. Фотосинтез" },
      task: {
        id: "bio-r2-s3",
        type: "single-choice",
        question: { pl: "Które równanie słowne fotosyntezy jest poprawne?", ua: "Яке словесне рівняння фотосинтезу правильне?" },
        options: [
          { id: "a", label: { pl: "cukier + tlen → dwutlenek węgla + woda + energia", ua: "цукор + кисень → вуглекислий газ + вода + енергія" } },
          { id: "b", label: { pl: "dwutlenek węgla + woda + światło → cukier + tlen", ua: "вуглекислий газ + вода + світло → цукор + кисень" } },
          { id: "c", label: { pl: "woda + tlen → cukier bez światła", ua: "вода + кисень → цукор без світла" } }
        ],
        answer: "b",
        explanation: {
          pl: "Zdanie A to oddychanie tlenowe, nie fotosynteza. Do fotosyntezy trzeba światła.",
          ua: "Речення A — аеробне дихання, не фотосинтез. Для фотосинтезу треба світло."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Cudzożywność", ua: "Перевірка 4. Гетеротрофне живлення" },
      task: {
        id: "bio-r2-s4",
        type: "true-false",
        question: { pl: "Organizmy cudzożywne korzystają z gotowego pokarmu — same go nie wytwarzają w fotosyntezie.", ua: "Гетеротрофні організми користуються готовою поживою — самі її не виробляють у фотосинтезі." },
        answer: true,
        explanation: {
          pl: "Zwierzęta, grzyby i człowiek są cudzożywne. Rośliny zielone — samożywne.",
          ua: "Тварини, гриби і людина — гетеротрофи. Зелені рослини — саможивні."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Fermentacja", ua: "Перевірка 5. Бродіння" },
      task: {
        id: "bio-r2-s5",
        type: "single-choice",
        question: { pl: "Co jest prawdą o fermentacji u drożdży?", ua: "Що правда про бродіння в дріжджів?" },
        options: [
          { id: "a", label: { pl: "zachodzi bez tlenu; cukier → alkohol + dwutlenek węgla", ua: "відбувається без кисню; цукор → спирт + вуглекислий газ" } },
          { id: "b", label: { pl: "to to samo co fotosynteza w chloroplastach", ua: "це те саме, що фотосинтез у хлоропластах" } },
          { id: "c", label: { pl: "wymaga tlenu jak oddychanie w mitochondriach", ua: "потребує кисню, як дихання в мітохондріях" } }
        ],
        answer: "a",
        explanation: {
          pl: "Fermentacja bez tlenu. W doświadczeniu dwutlenek węgla nadyma balon.",
          ua: "Бродіння без кисню. У досліді вуглекислий газ надуває кульку."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 6. Doświadczenie", ua: "Перевірка 6. Дослід" },
      task: {
        id: "bio-r2-s6",
        type: "single-choice",
        question: { pl: "Po co w doświadczeniu z liściem używasz jodyny? I ile czynników zmieniasz?", ua: "Навіщо в досліді з листком використовуєш йод? І скільки чинників змінюєш?" },
        options: [
          { id: "a", label: { pl: "jodyna barwi skrobię; zmieniasz jeden czynnik (np. światło)", ua: "йод забарвлює крохмаль; змінюєш один чинник (напр. світло)" } },
          { id: "b", label: { pl: "jodyna zabija bakterie; zmieniasz wszystkie warunki naraz", ua: "йод убиває бактерії; змінюєш усі умови разом" } },
          { id: "c", label: { pl: "jodyna mierzy temperaturę; nie trzeba próby kontrolnej", ua: "йод вимірює температуру; контрольна проба не потрібна" } }
        ],
        answer: "a",
        explanation: {
          pl: "Niebieskofioletowy kolor jodyny = skrobia. Reszta warunków taka sama jak w próbie kontrolnej.",
          ua: "Синьо-фіолетовий колір йоду = крохмаль. Решта умов така сама, як у контрольній пробі."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 7. Czynności życiowe", ua: "Перевірка 7. Життєві функції" },
      task: {
        id: "bio-r2-s7",
        type: "multiple-choice",
        question: { pl: "Zaznacz czynności życiowe organizmu (nie cechy przedmiotu).", ua: "Познач життєві функції організму (не риси предмета)." },
        options: [
          { id: "a", label: { pl: "odżywianie się", ua: "живлення" } },
          { id: "b", label: { pl: "oddychanie", ua: "дихання" } },
          { id: "c", label: { pl: "ładny kolor liścia", ua: "гарний колір листка" } },
          { id: "d", label: { pl: "rozmnażanie się", ua: "розмноження" } }
        ],
        answer: ["a", "b", "d"],
        explanation: {
          pl: "Kolor nie jest czynnością życiową. Lista z lekcji 1: odżywianie, oddychanie, wydalanie, ruch, reakcja, rozmnażanie, wzrost i rozwój.",
          ua: "Колір не є життєвою функцією. Список з уроку 1: живлення, дихання, виділення, рух, реакція, розмноження, ріст і розвиток."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("L01_Biologia_jako_nauka", "l01-czynnosci-7.png", {
        alt: { pl: "Siedem czynności życiowych", ua: "Сім життєвих функцій" },
        title: { pl: "Dział II składa się w te siedem punktów.", ua: "Розділ II складається в ці сім пунктів." },
        prompt: { pl: "Istniejąca infografika lekcji 1: siedem czynności życiowych." }
      }),
      text: {
        pl: [
          "Woda, białka, cukry, tłuszcze, sole, witaminy. DNA — informacja, nie energia.",
          "Roślinna komórka: ściana, chloroplasty, duża wakuola. Energia w mitochondriach.",
          "Fotosynteza: CO₂ + woda + światło → cukier + tlen. Cudzożywne jedzą gotowy pokarm.",
          "Oddychanie tlenowe w mitochondriach. Fermentacja bez tlenu (drożdże).",
          "Siedem czynności życiowych — wszystkie potrzebne organizmowi."
        ],
        ua: [
          "Вода, білки, цукри, жири, солі, вітаміни. ДНК — інформація, не енергія.",
          "Рослинна клітина: стінка, хлоропласти, велика вакуоля. Енергія в мітохондріях.",
          "Фотосинтез: CO₂ + вода + світло → цукор + кисень. Гетеротрофи їдять готову поживу.",
          "Аеробне дихання в мітохондріях. Бродіння без кисню (дріжджі).",
          "Сім життєвих функцій — усі потрібні організму."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Przed szkolnym sprawdzianem", ua: "Перед шкільною перевіркою" },
      items: [
        { pl: "Jeśli coś było trudne — wróć do lekcji 4–14.", ua: "Якщо щось було важко — повернись до уроків 4–14." },
        { pl: "Potrafię porównać komórkę zwierzęcą z roślinną.", ua: "Можу порівняти тваринну клітину з рослинною." },
        { pl: "Potrafię podać równanie fotosyntezy i oddychania tlenowego.", ua: "Можу назвати рівняння фотосинтезу і аеробного дихання." },
        { pl: "Potrafię odróżnić fermentację od oddychania tlenowego.", ua: "Можу відрізнити бродіння від аеробного дихання." },
        { pl: "Dział III to wirusy, bakterie, protisty i grzyby — nie składniki komórki od nowa.", ua: "Розділ III — віруси, бактерії, протисти і гриби, не складники клітини знову." }
      ]
    }
  ]
};
