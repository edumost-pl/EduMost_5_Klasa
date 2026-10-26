(function () {
  function T(n, id, pl, ua, page, aboutPl, aboutUa, outPl, outUa, lesson) {
    var topic = {
      id: id,
      num: n,
      title: { pl: pl, ua: ua },
      about: { pl: aboutPl, ua: aboutUa },
      outcome: { pl: outPl, ua: outUa },
      status: lesson ? "ready" : "planned"
    };
    if (page) topic.page = page;
    if (lesson) topic.lesson = lesson;
    return topic;
  }

  window.EduMostCurriculum.geografia = {
    id: "geografia",
    icon: "🌍",
    name: { pl: "Geografia", ua: "Географія" },
    book: {
      title: "Planeta Nowa",
      parts: "podręcznik do klasy 5",
      author: "Feliks Szlajfer, Zbigniew Zaniewicz, Tomasz Rachwał, Roman Malarz",
      publisher: "Nowa Era",
      nr: "906/1/2018"
    },
    tocStatus: "confirmed",
    parts: [
      {
        id: "mapa-polski",
        title: { pl: "1. Mapa Polski", ua: "1. Карта Польщі" },
        chapters: [
          {
            id: "czym-zajmuje-sie-geografia",
            title: { pl: "Czym zajmuje się geografia?", ua: "Чим займається географія?" },
            topics: [
              T(1, "czym-jest-geografia", "Czym zajmuje się geografia?", "Чим займається географія?", "5",
                "Czym jest geografia i skąd bierze wiadomości: mapa, atlas, obserwacja.",
                "Що таке географія і звідки вона бере відомості: карта, атлас, спостереження.",
                "Powiesz, czym zajmuje się geografia i do czego służy mapa.",
                "Скажеш, чим займається географія і навіщо потрібна карта.")
            ]
          },
          {
            id: "mapa-i-skala",
            roman: "1",
            title: { pl: "Mapa i skala", ua: "Карта і масштаб" },
            topics: [
              T(2, "mapa-elementy-znaki", "Mapa, jej elementy i znaki kartograficzne", "Карта, її елементи й картографічні знаки", "8",
                "Tytuł, treść, legenda i trzy grupy znaków. Czytamy mapę Iławy.",
                "Заголовок, зміст, легенда і три групи знаків. Читаємо карту Ілави.",
                "Odczytasz legendę i rozróżnisz znaki punktowe, liniowe i powierzchniowe.",
                "Прочитаєш легенду і відрізніш точкові, лінійні й площинні знаки.",
                "02-mapa-elementy-znaki"),
              T(3, "skala", "Skala liczbowa, mianowana i podziałka", "Числовий, іменований і лінійний масштаб", "8",
                "Trzy zapisy tej samej skali i zamiana centymetrów na metry i kilometry.",
                "Три записи одного масштабу і переведення сантиметрів у метри й кілометри.",
                "Zamienisz skalę liczbową na mianowaną i odczytasz podziałkę.",
                "Переведеш числовий масштаб в іменований і прочитаєш лінійку.",
                "03-skala")
            ]
          },
          {
            id: "odleglosci",
            roman: "2",
            title: { pl: "Odległości na mapie i w terenie", ua: "Відстані на карті і на місцевості" },
            topics: [
              T(4, "odleglosci", "Odległość na mapie i w terenie", "Відстань на карті і на місцевості", "12",
                "Odcinek prosty i droga łamana: linijka, centymetry, mnożenie, metry.",
                "Прямий відрізок і ламана дорога: лінійка, сантиметри, множення, метри.",
                "Obliczysz odległość w terenie po prostej i po łamanej.",
                "Обчислиш відстань на місцевості по прямій і по ламаній.",
                "04-odleglosci")
            ]
          },
          {
            id: "ukszaltowanie",
            roman: "3",
            title: { pl: "Ukształtowanie powierzchni na mapach", ua: "Форми поверхні на картах" },
            topics: [
              T(5, "wysokosc", "Wysokość bezwzględna i względna", "Абсолютна і відносна висота", "15",
                "Wysokość od poziomu morza i różnica wysokości między dwoma punktami.",
                "Висота від рівня моря і різниця висот між двома точками.",
                "Odróżnisz wysokość bezwzględną od względnej i odczytasz n.p.m.",
                "Відрізніш абсолютну висоту від відносної і прочитаєш н.р.м."),
              T(6, "poziomice", "Poziomice", "Горизонталі", "15",
                "Linie tej samej wysokości: góra, dolina, kotlina i stromy stok.",
                "Лінії однієї висоти: гора, долина, улоговина і крутий схил.",
                "Po poziomicach poznasz formę terenu i stromiznę stoku.",
                "За горизонталями впізнаєш форму рельєфу і крутість схилу."),
              T(7, "hipsometria", "Mapa hipsometryczna", "Гіпсометрична карта", "15",
                "Kolory wysokości na mapie Polski. Progi bierzemy z legendy atlasu.",
                "Кольори висот на карті Польщі. Пороги беремо з легенди атласу.",
                "Po kolorach wskażesz nizinę, wyżynę i góry.",
                "За кольорами покажеш низовину, височину і гори.")
            ]
          },
          {
            id: "czytamy-mape",
            roman: "4",
            title: { pl: "Czytamy mapę najbliższej okolicy", ua: "Читаємо карту найближчої околиці" },
            topics: [
              T(8, "rodzaje-map", "Rodzaje map", "Види карт", "21",
                "Mapa ogólnogeograficzna, tematyczna, turystyczna, papierowa i cyfrowa.",
                "Загальногеографічна, тематична, туристична, паперова і цифрова карта.",
                "Dobierzesz rodzaj mapy do pytania.",
                "Добереш вид карти до запитання."),
              T(9, "plan-miasta", "Plan miasta", "План міста", "21",
                "Siatka, komórka, znak i legenda na planie. Skala jest już znana.",
                "Сітка, клітинка, знак і легенда на плані. Масштаб уже відомий.",
                "Znajdziesz obiekt na planie po literze kolumny i numerze rzędu.",
                "Знайдеш об’єкт на плані за літерою стовпця і номером рядка."),
              T(10, "czytamy-okolice", "Czytamy mapę okolicy i orientujemy ją", "Читаємо карту околиці і повертаємо її на північ", "21",
                "Róża wiatrów, północ i porównanie planu z tym, co widać na ulicy.",
                "Роза вітрів, північ і звірка плану з тим, що видно на вулиці.",
                "Ustawisz plan północą do północy i odczytasz kierunek.",
                "Поставиш план північчю на північ і прочитаєш напрямок.")
            ]
          },
          {
            id: "podsumowanie-mapa",
            title: { pl: "Podsumowanie i Sprawdź się", ua: "Підсумок і перевірка" },
            topics: [
              T(11, "powtorzenie-mapa", "Powtórzenie: mapa Polski", "Повторення: карта Польщі", "28–30",
                "Znak, skala, odległość, poziomica i kierunek w zadaniach ze stron 28 i 30.",
                "Знак, масштаб, відстань, горизонталь і напрямок у завданнях зі сторінок 28 і 30.",
                "Rozwiążesz zadanie, w którym trzeba połączyć te umiejętności.",
                "Розв’яжеш завдання, де ці вміння треба поєднати.")
            ]
          }
        ]
      },
      {
        id: "krajobrazy-polski",
        title: { pl: "2. Krajobrazy Polski", ua: "2. Ландшафти Польщі" },
        chapters: [
          {
            id: "co-to-jest-krajobraz",
            roman: "1",
            title: { pl: "Co to jest krajobraz?", ua: "Що таке ландшафт?" },
            topics: [
              T(12, "krajobraz-i-pasy", "Krajobraz i pasy rzeźby Polski", "Ландшафт і смуги рельєфу Польщі", "34",
                "Z czego składa się krajobraz i jak ułożone są pasy od morza do gór.",
                "З чого складається ландшафт і як смуги йдуть від моря до гір.",
                "Nazwiesz składniki krajobrazu i wskażesz pasy rzeźby Polski.",
                "Назвеш складники ландшафту і покажеш смуги рельєфу Польщі.")
            ]
          },
          {
            id: "wybrzeze",
            roman: "2",
            title: { pl: "Krajobraz nadmorski Wybrzeża Słowińskiego", ua: "Приморський ландшафт Слупського узбережжя" },
            topics: [
              T(13, "wybrzeze-slowinskie", "Wybrzeże Słowińskie", "Слупське узбережжя", "40",
                "Wybrzeże, wydmy, wiatr i morze. Położenie na mapie Polski.",
                "Узбережжя, дюни, вітер і море. Положення на карті Польщі.",
                "Pokażesz Wybrzeże Słowińskie i poznasz je na fotografii.",
                "Покажеш Слупське узбережжя і впізнаєш його на фотографії.")
            ]
          },
          {
            id: "mazury",
            roman: "3",
            title: { pl: "Krajobraz Pojezierza Mazurskiego", ua: "Ландшафт Мазурського поозер’я" },
            topics: [
              T(14, "pojezierze-mazurskie", "Pojezierze Mazurskie", "Мазурське поозер’я", "45",
                "Jeziora polodowcowe, lasy i położenie pojezierza.",
                "Післяльодовикові озера, ліси і положення поозер’я.",
                "Pokażesz Mazury i wyjaśnisz, skąd wzięły się jeziora.",
                "Покажеш Мазури і поясниш, звідки взялися озера.")
            ]
          },
          {
            id: "mazowsze",
            roman: "4",
            title: { pl: "Krajobraz Niziny Mazowieckiej", ua: "Ландшафт Мазовецької низовини" },
            topics: [
              T(15, "nizina-mazowiecka", "Nizina Mazowiecka", "Мазовецька низовина", "50",
                "Płaska dolina Wisły. To nie jest lekcja o Warszawie.",
                "Плоска долина Вісли. Це не урок про Варшаву.",
                "Pokażesz Nizinę Mazowiecką i odróżnisz równinę od wielkiego miasta.",
                "Покажеш Мазовецьку низовину і відрізніш рівнину від великого міста.")
            ]
          },
          {
            id: "warszawa",
            roman: "5",
            title: { pl: "Krajobraz wielkomiejski Warszawy", ua: "Міський ландшафт Варшави" },
            topics: [
              T(16, "warszawa", "Warszawa — krajobraz wielkomiejski", "Варшава — міський ландшафт", "54",
                "Gęsta zabudowa, park w mieście i plan centrum.",
                "Щільна забудова, парк у місті і план центру.",
                "Poznasz krajobraz wielkiego miasta i odczytasz plan centrum.",
                "Впізнаєш ландшафт великого міста і прочитаєш план центру.")
            ]
          },
          {
            id: "slask",
            roman: "6",
            title: { pl: "Krajobraz miejsko-przemysłowy Wyżyny Śląskiej", ua: "Місько-промисловий ландшафт Сілезької височини" },
            topics: [
              T(17, "wyzyna-slaska", "Wyżyna Śląska", "Сілезька височина", "59",
                "Przemysł, miasta i zmiana krajobrazu przez człowieka.",
                "Промисловість, міста і зміна ландшафту людиною.",
                "Pokażesz Śląsk i nazwiesz plus oraz minus krajobrazu przemysłowego.",
                "Покажеш Сілезію і назвеш плюс і мінус промислового ландшафту.")
            ]
          },
          {
            id: "lubelska",
            roman: "7",
            title: { pl: "Krajobraz rolniczy Wyżyny Lubelskiej", ua: "Сільськогосподарський ландшафт Люблінської височини" },
            topics: [
              T(18, "wyzyna-lubelska", "Wyżyna Lubelska", "Люблінська височина", "64",
                "Pola, wąwozy i less. Położenie wyżyny.",
                "Поля, яри і лес. Положення височини.",
                "Pokażesz Wyżynę Lubelską i wyjaśnisz, czym jest wąwóz.",
                "Покажеш Люблінську височину і поясниш, що таке яр.")
            ]
          },
          {
            id: "jura",
            roman: "8",
            title: { pl: "Krajobraz Wyżyny Krakowsko-Częstochowskiej", ua: "Ландшафт Краківсько-Ченстоховської височини" },
            topics: [
              T(19, "jura", "Wyżyna Krakowsko-Częstochowska", "Краківсько-Ченстоховська височина", "68",
                "Skałki wapienne, zamki i ostańce.",
                "Вапнякові скелі, замки й останці.",
                "Pokażesz Jurę i poznasz ją po skałkach na zdjęciu.",
                "Покажеш Юру і впізнаєш її за скелями на фото.")
            ]
          },
          {
            id: "tatry",
            roman: "9",
            title: { pl: "Krajobraz wysokogórski Tatr", ua: "Високогірний ландшафт Татр" },
            topics: [
              T(20, "tatry", "Tatry: krajobraz wysokogórski", "Татри: високогірний ландшафт", "74",
                "Tatry Wysokie i Zachodnie, Rysy jako najwyższy szczyt Polski.",
                "Високі і Західні Татри, Риси як найвища вершина Польщі.",
                "Pokażesz Tatry i odróżnisz Tatry Wysokie od Zachodnich.",
                "Покажеш Татри і відрізніш Високі Татри від Західних."),
              T(21, "pietra-tatr", "Piętra roślinne w Tatrach", "Рослинні пояси в Татрах", "74",
                "Od regla po turnie: im wyżej, tym zimniej.",
                "Від поясу лісу до скель: що вище, то холодніше.",
                "Ułożysz piętra roślin od dołu do góry.",
                "Розставиш рослинні пояси знизу вгору.")
            ]
          },
          {
            id: "wokol-szkoly",
            title: { pl: "Krajobraz najbliższej okolicy szkoły", ua: "Ландшафт найближчої околиці школи" },
            topics: [
              T(22, "wokol-szkoly", "Krajobraz wokół szkoły w Poznaniu", "Ландшафт навколо школи в Познані", "",
                "Wymaganie programu o okolicy szkoły. W Planecie Nowej nie ma osobnej strony rozdziału.",
                "Вимога програми про околицю школи. У Planeta Nowa немає окремої сторінки розділу.",
                "Ocenisz ład okolicy szkoły i zaproponujesz jedną zmianę.",
                "Оціниш вигляд околиці школи і запропонуєш одну зміну.")
            ]
          },
          {
            id: "podsumowanie-polska",
            title: { pl: "Podsumowanie i Sprawdź się", ua: "Підсумок і перевірка" },
            topics: [
              T(23, "powtorzenie-polska", "Powtórzenie: krajobrazy Polski", "Повторення: ландшафти Польщі", "82–83",
                "Osiem krajobrazów z programu: mapa, zdjęcie i krótki opis.",
                "Вісім ландшафтів із програми: карта, фото і короткий опис.",
                "Pokażesz osiem krajobrazów i poznasz je na fotografii.",
                "Покажеш вісім ландшафтів і впізнаєш їх на фотографії.")
            ]
          }
        ]
      },
      {
        id: "lady-i-oceany",
        title: { pl: "3. Lądy i oceany na Ziemi", ua: "3. Материки й океани на Землі" },
        chapters: [
          {
            id: "przez-lady",
            roman: "1",
            title: { pl: "Przez lądy i oceany", ua: "Крізь материки й океани" },
            topics: [
              T(24, "globus-siatka", "Globus, równik i południki", "Глобус, екватор і меридіани", "86",
                "Bieguny, równik, południk zerowy i 180°, zwrotniki, koła podbiegunowe, półkule. Bez stopni.",
                "Полюси, екватор, нульовий меридіан і 180°, тропіки, полярні кола, півкулі. Без градусів.",
                "Pokażesz te linie na globusie i nazwiesz półkule.",
                "Покажеш ці лінії на глобусі і назвеш півкулі."),
              T(25, "kontynenty-oceany", "Kontynenty i oceany", "Материки й океани", "86",
                "Położenie kontynentów i oceanów względem równika i południka zerowego.",
                "Положення материків і океанів відносно екватора і нульового меридіана.",
                "Nazwiesz kontynenty i oceany i określisz, po której są stronie linii.",
                "Назвеш материки й океани і визначиш, по який вони бік лінії.")
            ]
          },
          {
            id: "wyprawy",
            roman: "2",
            title: { pl: "Pierwsze podróże geograficzne", ua: "Перші географічні подорожі" },
            topics: [
              T(26, "wyprawy", "Pierwsze wyprawy geograficzne", "Перші географічні подорожі", "91",
                "Trasy Kolumba, Magellana i Marco Polo: oceany i lądy, nie życiorysy.",
                "Маршрути Колумба, Магеллана і Марко Поло: океани і суходіл, не біографії.",
                "Na trasie pokażesz ocean albo morze i dużą formę lądu.",
                "На маршруті покажеш океан або море і велику форму суходолу.")
            ]
          }
        ]
      },
      {
        id: "krajobrazy-swiata",
        title: { pl: "4. Krajobrazy świata", ua: "4. Ландшафти світу" },
        chapters: [
          {
            id: "pogoda-a-klimat",
            roman: "1",
            title: { pl: "Pogoda a klimat", ua: "Погода і клімат" },
            topics: [
              T(27, "pogoda-klimat", "Pogoda a klimat", "Погода і клімат", "102",
                "Pogoda to jeden dzień. Klimat to zwykły przebieg przez wiele lat.",
                "Погода — це один день. Клімат — це звичайний хід протягом багатьох років.",
                "Odróżnisz pogodę od klimatu i nazwiesz składniki pogody.",
                "Відрізніш погоду від клімату і назвеш складники погоди."),
              T(28, "klimatogram", "Czytamy klimatogram", "Читаємо кліматограму", "102",
                "Słupki opadów, linia temperatury, średnia, amplituda i suma roczna.",
                "Стовпчики опадів, лінія температури, середня, амплітуда і річна сума.",
                "Odczytasz z klimatogramu temperaturę i opady.",
                "Прочитаєш з кліматограми температуру й опади.")
            ]
          },
          {
            id: "strefy",
            roman: "2",
            title: { pl: "Strefy klimatyczne i strefy krajobrazowe", ua: "Кліматичні й ландшафтні зони" },
            topics: [
              T(29, "strefy", "Strefy klimatyczne i krajobrazowe", "Кліматичні й ландшафтні зони", "108",
                "Od równika ku biegunom: mniej ciepła, inny krajobraz.",
                "Від екватора до полюсів: менше тепла, інший ландшафт.",
                "Pokażesz strefy i powiążesz je z nagrzewaniem Ziemi.",
                "Покажеш зони і пов’яжеш їх із нагріванням Землі.")
            ]
          },
          {
            id: "lasy",
            roman: "3",
            title: { pl: "W wilgotnym lesie równikowym i w lesie strefy umiarkowanej", ua: "У вологому екваторіальному лісі і в лісі помірного поясу" },
            topics: [
              T(30, "las-rownikowy", "Wilgotny las równikowy", "Вологий екваторіальний ліс", "113",
                "Warstwy lasu, klimatogram, rośliny, zwierzęta i życie ludzi.",
                "Яруси лісу, кліматограма, рослини, тварини і життя людей.",
                "Pokażesz wilgotny las równikowy i opiszesz jego warstwy.",
                "Покажеш вологий екваторіальний ліс і опишеш його яруси."),
              T(31, "las-umiarkowany", "Las strefy umiarkowanej", "Ліс помірного поясу", "113",
                "Porównanie z lasem równikowym: temperatura, deszcz, warstwy, ludzie.",
                "Порівняння з екваторіальним лісом: температура, дощ, яруси, люди.",
                "Porównasz oba lasy na klimatogramie i na zdjęciu.",
                "Порівняєш обидва ліси на кліматограмі і на фото.")
            ]
          },
          {
            id: "sawanna-step",
            roman: "4",
            title: { pl: "Krajobrazy sawanny i stepu", ua: "Ландшафти савани і степу" },
            topics: [
              T(32, "sawanna-step", "Sawanna i step", "Савана і степ", "120",
                "Pora deszczowa sawanny i mroźna zima stepu. Jedna lekcja porównawcza.",
                "Сезон дощів савани і морозна зима степу. Один урок-порівняння.",
                "Porównasz sawannę i step: rośliny, zwierzęta, zajęcia ludzi.",
                "Порівняєш савану і степ: рослини, тварини, заняття людей.")
            ]
          },
          {
            id: "pustynie",
            roman: "5",
            title: { pl: "Krajobrazy pustyni gorącej i pustyni lodowej", ua: "Ландшафти спекотної і льодової пустелі" },
            topics: [
              T(33, "pustynie", "Pustynia gorąca i pustynia lodowa", "Спекотна і льодова пустеля", "127",
                "Pustynia to mało opadów. Gorąca i lodowa w jednym porównaniu.",
                "Пустеля — це мало опадів. Спекотна і льодова в одному порівнянні.",
                "Wyjaśnisz, czym jest pustynia, i porównasz oba rodzaje.",
                "Поясниш, що таке пустеля, і порівняєш обидва види.")
            ]
          },
          {
            id: "srodziemnomorski",
            roman: "6",
            title: { pl: "Krajobraz śródziemnomorski", ua: "Середземноморський ландшафт" },
            topics: [
              T(34, "srodziemnomorski", "Krajobraz śródziemnomorski", "Середземноморський ландшафт", "136",
                "Suche lato na klimatogramie, oliwki, jasne miasteczka.",
                "Сухе літо на кліматограмі, оливи, світлі містечка.",
                "Po wykresie wskażesz suche lato i poznasz ten krajobraz.",
                "За графіком покажеш сухе літо і впізнаєш цей ландшафт.")
            ]
          },
          {
            id: "tajga-tundra",
            roman: "7",
            title: { pl: "Krajobrazy tajgi i tundry", ua: "Ландшафти тайги і тундри" },
            topics: [
              T(35, "tajga-tundra", "Tajga i tundra", "Тайга і тундра", "142",
                "Las iglasty, bezdrzewna tundra i wieloletnia zmarzlina.",
                "Хвойний ліс, безліса тундра і багаторічна мерзлота.",
                "Odróżnisz tajgę od tundry i wyjaśnisz, czym jest zmarzlina.",
                "Відрізніш тайгу від тундри і поясниш, що таке мерзлота.")
            ]
          },
          {
            id: "himalaje",
            roman: "8",
            title: { pl: "Krajobraz wysokogórski Himalajów", ua: "Високогірний ландшафт Гімалаїв" },
            topics: [
              T(36, "himalaje", "Himalaje", "Гімалаї", "149",
                "Najwyższe góry, doliny i życie ludzi. Piętra roślin są następną lekcją.",
                "Найвищі гори, долини і життя людей. Рослинні пояси — наступний урок.",
                "Pokażesz Himalaje i nazwiesz cechy krajobrazu wysokogórskiego.",
                "Покажеш Гімалаї і назвеш риси високогірного ландшафту."),
              T(37, "strefy-a-pietra", "Strefy a piętra roślinne", "Зони і рослинні пояси", "149",
                "Strefy zmieniają się ku biegunowi, piętra — w górę stoku.",
                "Зони змінюються до полюса, пояси — вгору по схилу.",
                "Wyjaśnisz różnicę między strefowością a piętrowością.",
                "Поясниш різницю між зональністю і поясністю.")
            ]
          },
          {
            id: "podsumowanie-swiat",
            title: { pl: "Podsumowanie i Sprawdź się", ua: "Підсумок і перевірка" },
            topics: [
              T(38, "powtorzenie-swiat", "Powtórzenie: krajobrazy świata", "Повторення: ландшафти світу", "155, 158",
                "Strefa na mapie, na zdjęciu i na nowym klimatogramie.",
                "Зона на карті, на фото і на новій кліматограмі.",
                "Poznasz strefę po zdjęciu i wykresie oraz pokażesz ją na mapie.",
                "Впізнаєш зону за фото і графіком і покажеш її на карті.")
            ]
          }
        ]
      }
    ]
  };
})();
