function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE_SCH = "Styl: infografika szkolna, białe tło, karty turkus i ochra. Etykiety po polsku. Zero znaku wodnego. PNG 16:9.";
var IMG_STYLE_RYS = "Styl: kontur podręcznikowy GWO, czarny tusz na kremie, uśmiechnięta dziewczynka wśród papirusów. Zero napisów, zero znaku wodnego. PNG.";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "../23-rzeczownik-konkretne/" + file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostT23Blocks = [
  {
    type: "goal",
    heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
    formula: "s. 52  ·  ciąg dalszy  ·  lekcja 23",
    promptPlace: "before",
    prompt: {
      pl: "Ciąg dalszy rzeczownika z lekcji 22. Teraz s. 52: *konkretne / abstrakcyjne*, zad. 4–5, wniosek i konkurs *Rozpoznaj, jaki to rzeczownik?* Odmiany przez przypadki nadal nie robimy.",
      ua: "Продовження іменника з уроку 22. Тепер с. 52: *конкретні / абстрактні*, завд. 4–5, висновок і конкурс *Розпізнай, який це іменник?* Відмінювання далі не робимо."
    },
    items: [
      { pl: "odróżnię rzeczowniki *konkretne* (zmysły) od *abstrakcyjnych* (pojęcia);", ua: "розрізню іменники *конкретні* (органи чуття) від *абстрактних* (поняття);" },
      { pl: "wskażę w e-mailu Wiktora jedne i drugie;", ua: "вкажу в e-mail Віктора ті й ті;" },
      { pl: "uzupełnię zdania rzeczownikami z ramki i zapiszę *wniosek*;", ua: "доповню речення іменниками з рамки і запишу *висновок*;" },
      { pl: "przygotuję mini-konkurs: *Rozpoznaj, jaki to rzeczownik?*", ua: "підготую міні-конкурс: *Розпізнай, який це іменник?*" }
    ],
    task: {
      id: "t23-s01-umiem",
      type: "multiple-choice",
      question: {
        pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
        ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Oddzielić konkretne (zmysły) od abstrakcyjnych (pojęcia).", ua: "Відділити конкретні (органи чуття) від абстрактних (поняття)." } },
        { id: "b", label: { pl: "Uzupełnić zdania z ramki i napisać wniosek.", ua: "Доповнити речення з рамки і написати висновок." } },
        { id: "c", label: { pl: "Na nowo nauczyć się od zera, czym jest rzeczownik — bez lekcji 22.", ua: "Наново навчитися з нуля, що таке іменник — без уроку 22." } },
        { id: "d", label: { pl: "Zagrać w rozpoznawanie: własne/pospolite + konkretne/abstrakcyjne.", ua: "Зіграти в розпізнавання: власні/загальні + конкретні/абстрактні." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Definicja kto?/co? była wczoraj. Dziś nowy podział.",
        ua: "Означення хто?/що? було вчора. Сьогодні новий поділ."
      },
      explanation: {
        pl: "Lekcja 23 = zmysły vs pojęcia, zad. 4–5, konkurs. Definicja rzeczownika — lekcja 22.",
        ua: "Урок 23 = органи чуття vs поняття, завд. 4–5, конкурс. Означення іменника — урок 22."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 4 · zmysły albo nie", ua: "Завд. 4 · органи чуття чи ні" },
    formula: "s. 52",
    promptPlace: "before",
    prompt: {
      pl: "Ustal, które wśród rzeczowników z e-maila Wiktora są nazwami: osób, roślin i rzeczy dających się rozpoznać za pomocą zmysłów (można je zobaczyć, mają zapach, kształt, barwę, można ich dotknąć) — oraz pojęć niemożliwych do rozpoznania za pomocą zmysłów.",
      ua: "Встанови, які серед іменників з e-mail Віктора є назвами осіб, рослин і речей, які можна пізнати органами чуття (побачити, запах, форма, колір, дотик) — і понять, яких органами чуття не впізнати."
    },
    reveal: true,
    steps: [
      {
        visual: vizGh("t23-zmysly.png", {
          alt: {
            pl: "Schemat: konkretne przez zmysły, abstrakcyjne w myśli",
            ua: "Схема: конкретні через органи чуття, абстрактні в думці"
          },
          title: { pl: "Slajd · zmysły", ua: "Слайд · органи чуття" },
          prompt: {
            pl: IMG_STYLE_SCH + " IMAGE PROMPT: dwie kolumny. Lewa konkretne: ikony oka, ucha, nosa, ręki, języka plus stół, wąż, kaktus, śnieg. Prawa abstrakcyjne: dymek myśli, przyjaźń, żal, piękno, pisanie. Etykiety po polsku.",
            ua: "Схема конкретні / абстрактні. Польські етикетки."
          }
        }),
        text: {
          pl: "Test: czy możesz to zobaczyć, usłyszeć, powąchać, dotknąć albo poczuć smak? Jeśli tak → konkretne. Jeśli tylko pomyśleć → abstrakcyjne.",
          ua: "Тест: чи можеш це побачити, почути, понюхати, доторкнутись або відчути смак? Так → конкретне. Лише подумати → абстрактне."
        }
      },
      {
        formula: "KLUCZ EduMost  ·  z e-maila (nie jedyne)",
        text: {
          pl: "Konkretne: mama, miasto, Nil, ryby, trzcina, śnieg, muł, statek, piramida, grobowiec, pole. Abstrakcyjne: wycieczka, konkurs, wzrost, wylew (jako zjawisko-proces), obumieranie. *Kair, Wiktor, Cheops* są własne i zarazem konkretne (osoba / miejsce).",
          ua: "Конкретні: mama, miasto, Nil, ryby, trzcina, śnieg, muł, statek, piramida, grobowiec, pole. Абстрактні: wycieczka, konkurs, wzrost, wylew (процес), obumieranie. *Kair, Wiktor, Cheops* — власні і водночас конкретні."
        }
      }
    ],
    task: {
      id: "t23-s02-zad4",
      type: "multiple-choice",
      question: {
        pl: "Które pary z e-maila są dobrze podzielone? Zaznacz wszystkie pewne.",
        ua: "Які пари з e-mail добре поділені? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "muł, statek, piramida — konkretne (widać, można dotknąć)", ua: "muł, statek, piramida — конкретні" } },
        { id: "b", label: { pl: "konkurs, wzrost, obumieranie — abstrakcyjne (pojęcia / procesy)", ua: "konkurs, wzrost, obumieranie — абстрактні" } },
        { id: "c", label: { pl: "Nil — abstrakcyjne, bo to „tylko nazwa na mapie”", ua: "Nil — абстрактне, бо «лише назва на мапі»" } },
        { id: "d", label: { pl: "płynęliśmy — konkretny rzeczownik", ua: "płynęliśmy — конкретний іменник" } }
      ],
      answer: ["a", "b"],
      hint: {
        pl: "Nil to rzeka — można ją zobaczyć. płynęliśmy to czasownik.",
        ua: "Ніл — ріка, її можна побачити. płynęliśmy — дієслово."
      },
      explanation: {
        pl: "Konkretne = zmysły. Abstrakcyjne = w głowie. Nil jest konkretny (i własny). Czasownik nie jest rzeczownikiem.",
        ua: "Конкретні = органи чуття. Абстрактні = в голові. Ніл конкретний (і власний). Дієслово не є іменником."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Ramka · konkretne i abstrakcyjne", ua: "Рамка · конкретні і абстрактні" },
    formula: "s. 52",
    promptPlace: "before",
    prompt: {
      pl: "To druga ramka z wykrzyknikiem. Inny podział niż własne/pospolite: teraz pytamy o *zmysły*, nie o wielką literę. Jeden wyraz może być *własny i konkretny* (Nil) albo *pospolity i abstrakcyjny* (radość).",
      ua: "Це друга рамка зі знаком оклику. Інший поділ, ніж власні/загальні: тепер питаємо про *органи чуття*, не про велику літеру. Одне слово може бути *власним і конкретним* (Nil) або *загальним і абстрактним* (radość)."
    },
    text: {
      pl: [
        "Wśród rzeczowników wyróżniamy:",
        "*rzeczowniki konkretne* — nazywają osoby, zwierzęta, rośliny i rzeczy, mające kształt, barwę, zapach (więc *można je rozpoznać za pomocą zmysłów*), np. *niemowlę, wąż, kaktus, stół, śnieg, dom*;",
        "*rzeczowniki abstrakcyjne* — nazywają pojęcia, wytwory naszych myśli (zatem *nie da się ich rozpoznać za pomocą zmysłów*) oraz cechy i czynności, np. *przyjaźń, młodość, wyobraźnia, wina, piękno, żal, charakter, pogląd, niesprawiedliwość, głębokość, pisanie*."
      ],
      ua: [
        "Серед іменників виділяємо:",
        "*конкретні іменники* — називають осіб, тварин, рослини і речі, що мають форму, колір, запах (отже *їх можна впізнати органами чуття*), напр. *немовля, змія, кактус, стіл, сніг, дім*;",
        "*абстрактні іменники* — називають поняття, витвори наших думок (отже *їх не впізнати органами чуття*) та риси і дії, напр. *дружба, молодість, уява, вина, краса, жаль, характер, погляд, несправедливість, глибина, писання*."
      ]
    },
    task: {
      id: "t23-s03-ramka",
      type: "single-choice",
      question: {
        pl: "Dlaczego *pisanie* jest w ramce wśród abstrakcyjnych, skoro wczoraj było przykładem rzeczownika?",
        ua: "Чому *pisanie* в рамці серед абстрактних, якщо вчора це був приклад іменника?"
      },
      options: [
        { id: "a", label: { pl: "Bo to nadal rzeczownik (co?), tylko nazywa czynność / pojęcie, nie przedmiot do dotknięcia.", ua: "Бо це далі іменник (що?), лише називає дію / поняття, не предмет для дотику." } },
        { id: "b", label: { pl: "Bo to już nie rzeczownik — to czasownik pisać.", ua: "Бо це вже не іменник — це дієслово pisać." } },
        { id: "c", label: { pl: "Bo wszystkie rzeczowniki na -anie są własne.", ua: "Бо всі іменники на -anie є власними." } }
      ],
      answer: "a",
      hint: {
        pl: "Dwa podziały są niezależne: część mowy vs konkret/abstrakt.",
        ua: "Два поділи незалежні: частина мови vs конкрет/абстракт."
      },
      explanation: {
        pl: "*pisanie* = rzeczownik abstrakcyjny. *pisać* = czasownik. Wielka litera tu nic nie zmienia.",
        ua: "*pisanie* = абстрактний іменник. *pisać* = дієслово. Велика літера тут нічого не змінює."
      }
    }
  },
  {
    type: "vocabulary",
    heading: { pl: "Przykłady z ramki · z tłumaczeniem", ua: "Приклади з рамки · з перекладом" },
    formula: "s. 52  ·  konkretne / abstrakcyjne",
    promptPlace: "before",
    prompt: {
      pl: "Lewa kolumna po polsku. Dotknij testem zmysłów.",
      ua: "Ліва колонка польською. Перевір тестом органів чуття."
    },
    rows: [
      { pl: "niemowlę  ·  konkretne", ua: "немовля (можна побачити, usłyszeć)" },
      { pl: "wąż  ·  konkretne", ua: "змія" },
      { pl: "kaktus  ·  konkretne", ua: "кактус" },
      { pl: "stół  ·  konkretne", ua: "стіл" },
      { pl: "śnieg  ·  konkretne", ua: "сніг" },
      { pl: "dom  ·  konkretne", ua: "дім" },
      { pl: "przyjaźń  ·  abstrakcyjne", ua: "дружба" },
      { pl: "młodość  ·  abstrakcyjne", ua: "молодість" },
      { pl: "wyobraźnia  ·  abstrakcyjne", ua: "уява" },
      { pl: "wina  ·  abstrakcyjne", ua: "вина (почуття / провина)" },
      { pl: "piękno  ·  abstrakcyjne", ua: "краса" },
      { pl: "żal  ·  abstrakcyjne", ua: "жаль" },
      { pl: "pisanie  ·  abstrakcyjne", ua: "писання (назва дії)" }
    ],
    task: {
      id: "t23-s04-przyklad",
      type: "single-choice",
      question: {
        pl: "Który zestaw jest poprawny?",
        ua: "Який набір правильний?"
      },
      options: [
        { id: "a", label: { pl: "stół, wąż, śnieg — konkretne; przyjaźń, żal, pisanie — abstrakcyjne", ua: "stół, wąż, śnieg — конкретні; przyjaźń, żal, pisanie — абстрактні" } },
        { id: "b", label: { pl: "przyjaźń — konkretne, bo przyjaźń „widać w oczach”", ua: "przyjaźń — конкретне, бо дружбу «видно в очах»" } },
        { id: "c", label: { pl: "śnieg — abstrakcyjne, bo zimą go czasem nie ma", ua: "śnieg — абстрактне, бо взимку його іноді немає" } }
      ],
      answer: "a",
      hint: {
        pl: "Test zmysłów, nie poezja. Śnieg ma kształt, barwę, zimno w dłoni.",
        ua: "Тест органів чуття, не поезія. Сніг має форму, колір, холод у долоні."
      },
      explanation: {
        pl: "Śnieg i wąż są w ramce jako konkretne. Przyjaźń i pisanie — abstrakcyjne.",
        ua: "Śnieg і wąż у рамці як конкретні. Przyjaźń і pisanie — абстрактні."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 5a · luki z ramki", ua: "Завд. 5а · пропуски з рамки" },
    formula: "s. 52",
    promptPlace: "before",
    prompt: {
      pl: "Uzupełnij zdania rzeczownikami wybranymi z ramki. Zapisz zdania w zeszycie. Wszystkie 14 wyrazów z ramki wchodzą do tekstu.",
      ua: "Доповни речення іменниками з рамки. Запиши речення в зошит. Усі 14 слів з рамки входять у текст."
    },
    text: {
      pl: [
        "Ramka: *wylewanie · nawadnianie · radość · ulga · obumieranie · zadowolenie · głód · smutek · dobrobyt · wysychanie · nawożenie · strach · niszczenie · niepewność*",
        "*?* Nilu powodowało *?* mułem i *?* pól. Panował *?*. Przestawał zagrażać *?*. Egipcjanie odczuwali *?*, *?* oraz *?*. *?* rzeki pociągało za sobą *?* i *?* roślin. Pojawiał się wówczas *?* przed głodem. Mieszkańcy Egiptu czuli *?* i *?*."
      ],
      ua: [
        "Рамка: *wylewanie · nawadnianie · radość · ulga · obumieranie · zadowolenie · głód · smutek · dobrobyt · wysychanie · nawożenie · strach · niszczenie · niepewność*",
        "*?* Нілу спричиняло *?* мулом і *?* полів. Панував *?*. Переставав загрожувати *?*. Єгиптяни відчували *?*, *?* та *?*. *?* ріки тягло за собою *?* і *?* рослин. З’являвся тоді *?* перед голодом. Мешканці Єгипту відчували *?* і *?*."
      ]
    },
    reveal: true,
    steps: [
      {
        visual: vizGh("t23-nilka.png", {
          alt: {
            pl: "Dziewczynka wśród roślin nad Nilem",
            ua: "Дівчинка серед рослин над Нілом"
          },
          title: { pl: "Slajd · Nil i rośliny", ua: "Слайд · Ніл і рослини" },
          prompt: {
            pl: IMG_STYLE_RYS + " IMAGE PROMPT: kontur GWO, dziewczynka z krótkimi włosami wśród papirusów i lotosów w płytkiej wodzie Nilu. Zero liter.",
            ua: "Дівчинка серед папірусів. Без напису."
          }
        }),
        text: {
          pl: "Najpierw zeszyt. Patrz, *co do czego pasuje*: Nil → wylewanie / wysychanie; muł → nawożenie; pola → nawadnianie.",
          ua: "Спочатку зошит. Дивись, *що до чого пасує*: Ніл → wylewanie / wysychanie; мул → nawożenie; поля → nawadnianie."
        }
      },
      {
        formula: "KLUCZ EduMost",
        text: {
          pl: "Wylewanie Nilu powodowało nawożenie mułem i nawadnianie pól. Panował dobrobyt. Przestawał zagrażać głód. Egipcjanie odczuwali radość, ulgę oraz zadowolenie. Wysychanie rzeki pociągało za sobą obumieranie i niszczenie roślin. Pojawiał się wówczas strach przed głodem. Mieszkańcy Egiptu czuli smutek i niepewność.",
          ua: "Розлив Нілу спричиняв удобрювання мулом і зрошення полів. Панував добробут. Переставав загрожувати голод. Єгиптяни відчували радість, полегшення і вдоволення. Висихання ріки тягло відмирання і знищення рослин. З’являвся страх перед голодом. Мешканці Єгипту відчували смуток і непевність."
        }
      }
    ],
    task: {
      id: "t23-s05-luki",
      type: "multiple-choice",
      question: {
        pl: "Które uzupełnienia pierwszego zdania są pewne? Zaznacz wszystkie pewne.",
        ua: "Які доповнення першого речення певні? Познач усі певні."
      },
      options: [
        { id: "a", label: { pl: "Wylewanie Nilu powodowało nawożenie mułem i nawadnianie pól.", ua: "Wylewanie Nilu → nawożenie mułem i nawadnianie pól." } },
        { id: "b", label: { pl: "Panował dobrobyt. Przestawał zagrażać głód.", ua: "Panował dobrobyt. Przestawał zagrażać głód." } },
        { id: "c", label: { pl: "Wylewanie Nilu powodowało strach i niszczenie piramid.", ua: "Розлив Нілу спричиняв страх і знищення пірамід." } },
        { id: "d", label: { pl: "Egipcjanie odczuwali radość, ulgę oraz zadowolenie.", ua: "Єгиптяни відчували radość, ulgę, zadowolenie." } }
      ],
      answer: ["a", "b", "d"],
      hint: {
        pl: "Piramid nikt w ramce nie niszczy. Ramka ma 14 słów — wszystkie o wylewie i suszy.",
        ua: "Пірамід у рамці ніхто не нищить. У рамці 14 слів — усі про розлив і посуху."
      },
      explanation: {
        pl: "Wylew = nawożenie + nawadnianie + dobrobyt. Susza = obumieranie roślin + strach. Nie mieszaj z piramidami.",
        ua: "Розлив = удобрення + зрошення + добробут. Посуха = відмирання рослин + страх. Не мішай з пірамідами."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Zad. 5b · wniosek", ua: "Завд. 5б · висновок" },
    formula: "s. 52",
    promptPlace: "before",
    prompt: {
      pl: "Uzupełnij wniosek. Do wyboru: *cechy · czynności · przedmioty · przeżycia · stany*. Wpisane rzeczowniki z ramki *nie* nazywają stołu ani węża.",
      ua: "Доповни висновок. На вибір: *cechy · czynności · przedmioty · przeżycia · stany*. Вписані іменники з рамки *не* називають стіл чи змію."
    },
    text: {
      pl: [
        "Wpisane rzeczowniki nazywają *?*, *?* i *?*.",
        "Spójrz na ramkę: *wylewanie, nawadnianie, obumieranie, wysychanie, nawożenie, niszczenie* — to nazwy *czynności*. *radość, ulga, zadowolenie, smutek, strach* — *przeżycia*. *głód, dobrobyt, niepewność* — *stany*."
      ],
      ua: [
        "Вписані іменники називають *?*, *?* і *?*.",
        "Подивись на рамку: *wylewanie, nawadnianie…* — назви *дій*. *radość, ulga…* — *переживання*. *głód, dobrobyt, niepewność* — *стани*."
      ]
    },
    task: {
      id: "t23-s06-wniosek",
      type: "single-choice",
      question: {
        pl: "Który wniosek jest zgodny z zad. 5?",
        ua: "Який висновок узгоджений із завд. 5?"
      },
      options: [
        { id: "a", label: { pl: "Wpisane rzeczowniki nazywają czynności, przeżycia i stany.", ua: "Вписані іменники називають дії, переживання і стани." } },
        { id: "b", label: { pl: "Wpisane rzeczowniki nazywają przedmioty i cechy stołu.", ua: "Вписані іменники називають предмети і риси столу." } },
        { id: "c", label: { pl: "Wpisane rzeczowniki to same nazwy własne Egiptu.", ua: "Вписані іменники — самі власні назви Єгипту." } }
      ],
      answer: "a",
      hint: {
        pl: "Czy wylewanie albo radość to przedmiot jak stół?",
        ua: "Чи wylewanie або radość — це предмет як стіл?"
      },
      explanation: {
        pl: "Ramka 5a to abstrakcyjne: czynności, przeżycia, stany — nie przedmioty (stół) i nie własne (Nil).",
        ua: "Рамка 5а — абстрактні: дії, переживання, стани — не предмети (стіл) і не власні (Ніл)."
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Konkurs · Rozpoznaj, jaki to rzeczownik?", ua: "Конкурс · Розпізнай, який це іменник?" },
    formula: "program GWO  ·  tematy 22 i 23",
    promptPlace: "before",
    prompt: {
      pl: "Plan wynikowy: przygotuj dla koleżanek i kolegów konkurs. Jedno słowo — trzy odpowiedzi. Najpierw zeszyt z kartami, potem gramy.",
      ua: "Плановий результат: підготуй для однокласників конкурс. Одне слово — три відповіді. Спочатку зошит із картками, потім граємо."
    },
    items: [
      { pl: "Na kartce: rzeczownik z e-maila albo z ramki (np. *Nil, mama, radość, Cheops*).", ua: "На картці: іменник з e-mail або з рамки (напр. *Nil, mama, radość, Cheops*)." },
      { pl: "Pytanie 1: *własny* czy *pospolity*? (wielka / mała litera)", ua: "Питання 1: *власний* чи *загальний*? (велика / мала літера)" },
      { pl: "Pytanie 2: *konkretny* czy *abstrakcyjny*? (zmysły / pojęcie)", ua: "Питання 2: *конкретний* чи *абстрактний*? (органи чуття / поняття)" },
      { pl: "Pytanie 3: pytanie *kto?* czy *co?*", ua: "Питання 3: питання *хто?* чи *що?*" }
    ],
    reveal: true,
    steps: [
      {
        formula: "PRZYKŁAD EduMost",
        text: {
          pl: "Karta *Nil*: własne · konkretne · co?  |  Karta *radość*: pospolite · abstrakcyjne · co?  |  Karta *Wiktor*: własne · konkretne · kto?",
          ua: "Картка *Nil*: власне · конкретне · що?  |  *radość*: загальне · абстрактне · що?  |  *Wiktor*: власне · конкретне · хто?"
        }
      }
    ],
    task: {
      id: "t23-s07-konkurs",
      type: "single-choice",
      question: {
        pl: "Jak poprawnie rozpoznać kartę *radość*?",
        ua: "Як правильно розпізнати картку *radość*?"
      },
      options: [
        { id: "a", label: { pl: "pospolite · abstrakcyjne · co?", ua: "загальне · абстрактне · що?" } },
        { id: "b", label: { pl: "własne · konkretne · kto?", ua: "власне · конкретне · хто?" } },
        { id: "c", label: { pl: "pospolite · konkretne · kto? — bo radość „widać na twarzy”", ua: "загальне · конкретне · хто? — бо радість «видно на обличчі»" } }
      ],
      answer: "a",
      hint: {
        pl: "Czy Radość to imię jednej osoby? Czy możesz ją położyć na stole?",
        ua: "Чи Radość — ім’я однієї особи? Чи можна покласти її на стіл?"
      },
      explanation: {
        pl: "radość — każda radość (pospolite), pojęcie (abstrakcyjne), pytanie co?",
        ua: "radość — будь-яка радість (загальне), поняття (абстрактне), питання що?"
      }
    }
  },
  {
    type: "observe",
    heading: { pl: "Uwaga · dwa podziały naraz", ua: "Увага · два поділи водночас" },
    formula: "nie mylić siatek",
    promptPlace: "before",
    prompt: {
      pl: "Typowy błąd: myśleć, że *własne = konkretne* zawsze. To dwie osie.",
      ua: "Типова помилка: думати, що *власне = конкретне* завжди. Це дві осі."
    },
    text: {
      pl: [
        "Oś 1: *własne / pospolite* → litera (Kair / miasto).",
        "Oś 2: *konkretne / abstrakcyjne* → zmysły (stół / przyjaźń).",
        "*Nil* = własne + konkretne. *radość* = pospolite + abstrakcyjne. *Wiktor* = własne + konkretne. *wylewanie* = pospolite + abstrakcyjne.",
        "Jeszcze nie odmieniamy: *Nilu, Cheopsa* w e-mailu to już inne przypadki — wrócimy na s. 60."
      ],
      ua: [
        "Вісь 1: *власні / загальні* → літера (Kair / miasto).",
        "Вісь 2: *конкретні / абстрактні* → органи чуття (stół / przyjaźń).",
        "*Nil* = власне + конкретне. *radość* = загальне + абстрактне. *Wiktor* = власне + конкретне. *wylewanie* = загальне + абстрактне.",
        "Ще не відмінюємо: *Nilu, Cheopsa* в e-mail — уже інші відмінки; повернемось на с. 60."
      ]
    },
    task: {
      id: "t23-s08-osie",
      type: "true-false",
      question: {
        pl: "Czy każdy rzeczownik własny jest automatycznie abstrakcyjny?",
        ua: "Чи кожен власний іменник автоматично абстрактний?"
      },
      answer: false,
      hint: {
        pl: "Czy Wiktora i Nil można zobaczyć?",
        ua: "Чи Віктора і Ніл можна побачити?"
      },
      explanation: {
        pl: "Własne często są konkretne (osoba, rzeka, miasto). Abstrakcyjne bywają pospolite (radość, ból). Osie są niezależne.",
        ua: "Власні часто конкретні (особа, ріка, місто). Абстрактні часто загальні (radość, ból). Осі незалежні."
      }
    }
  },
  {
    type: "summary",
    heading: { pl: "Po lekcji umiem — notatka", ua: "Після уроку вмію — нотатка" },
    promptPlace: "after",
    prompt: {
      pl: "To zabierasz do zeszytu razem z lekcją 22. Definicja + dwa podziały + zasada litery.",
      ua: "Це забираєш у зошит разом з уроком 22. Означення + два поділи + правило літери."
    },
    items: [
      { pl: "Rzeczownik nazywa osoby, zwierzęta, rośliny, przedmioty, zjawiska i pojęcia. Mianownik: *kto? co?*", ua: "Іменник називає осіб, тварин, рослини, предмети, явища і поняття. Називний: *хто? що?*" },
      { pl: "Własne (jedna osoba/rzecz) — wielka litera. Pospolite (typ) — mała. *Nil / rzeka*, *Kair / miasto*.", ua: "Власні (одна особа/річ) — велика літера. Загальні (тип) — мала. *Nil / rzeka*, *Kair / miasto*." },
      { pl: "Konkretne — zmysły (*stół, wąż, śnieg*). Abstrakcyjne — pojęcia, cechy, czynności (*przyjaźń, żal, pisanie*).", ua: "Конкретні — органи чуття (*stół, wąż, śnieg*). Абстрактні — поняття, риси, дії (*przyjaźń, żal, pisanie*)." },
      { pl: "Wniosek z zad. 5: wpisane rzeczowniki nazywają *czynności, przeżycia i stany*. Odmiana przez przypadki — później (s. 60).", ua: "Висновок із завд. 5: вписані іменники називають *дії, переживання і стани*. Відмінювання — пізніше (с. 60)." }
    ],
    task: {
      id: "t23-s09-notatka",
      type: "single-choice",
      question: {
        pl: "Która notatka pokazuje, że umiesz lekcje 22–23?",
        ua: "Яка нотатка показує, що вмієш уроки 22–23?"
      },
      options: [
        {
          id: "a",
          label: {
            pl: "kto?/co?; własne wielką / pospolite małą; konkretne zmysłami / abstrakcyjne w myśli; wniosek: czynności, przeżycia, stany.",
            ua: "хто?/що?; власні з великої / загальні з малої; конкретні органами чуття / абстрактні в думці; висновок: дії, переживання, стани."
          }
        },
        { id: "b", label: { pl: "Tylko odmieniam Nil przez 7 przypadków i zamykam zeszyt.", ua: "Лише відмінюю Ніл через 7 відмінків і закриваю зошит." } },
        { id: "c", label: { pl: "Prometeusz ukradł ogień, a Kora zerwała narcyz — to wszystko rzeczowniki własne abstrakcyjne.", ua: "Прометей украв вогонь, а Кора зірвала нарцис — усе це власні абстрактні іменники." } }
      ],
      answer: "a",
      hint: {
        pl: "s. 60 to inny temat. Prometeusz i Kora — inne lekcje.",
        ua: "с. 60 — інша тема. Прометей і Кора — інші уроки."
      },
      explanation: {
        pl: "22–23 = podział rzeczownika. Przypadki = 29–31. Mity = 19–21.",
        ua: "22–23 = поділ іменника. Відмінки = 29–31. Міфи = 19–21."
      }
    }
  }
];

(function () {
  var part = window.EduMostT23Blocks || [];
  var prev = window.EduMostLessonContent && window.EduMostLessonContent.blocks;
  if (prev && prev.length) {
    window.EduMostLessonContent = { blocks: prev.concat(part) };
  } else {
    window.EduMostLessonContent = { blocks: part };
  }
})();
