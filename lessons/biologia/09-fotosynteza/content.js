function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L09_Samozywnosc_i_fotosynteza/images/";

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

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Misja: skąd roślina bierze pokarm", ua: "Місія: звідки рослина бере поживу" },
      visual: vizGh("l09-zacznijmy.png", {
        alt: { pl: "Zielona roślina na słońcu", ua: "Зелена рослина на сонці" },
        title: { pl: "Roślina nie chodzi do sklepu. Skąd bierze pokarm?", ua: "Рослина не ходить до магазину. Звідки бере поживу?" },
        prompt: { pl: "Zdjęcie lekcji 9: zielona roślina w słońcu." }
      }),
      text: {
        pl: [
          "To lekcja 9: samożywność i fotosynteza. Pies je karmę. Ty jesz śniadanie. Pelargonia na parapecie nie gryzie kanapki, a mimo to rośnie.",
          "Dziś zobaczysz, jak zielona roślina sama wytwarza pokarm i skąd bierze się tlen w powietrzu.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi. Wzoru z cyframi dziś nie zapisujemy."
        ],
        ua: [
          "Це урок 9: саможивлення і фотосинтез. Пес їсть корм. Ти їси сніданок. Пеларгонія на підвіконні не гризе канапку, а все одно росте.",
          "Сьогодні побачиш, як зелена рослина сама виробляє поживу і звідки береться кисень у повітрі.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок. Формули з цифрами сьогодні не записуємо."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "samożywność", ua: "саможивлення — організм сам виробляє поживу" },
        { pl: "cudzożywność", ua: "чужоживлення — їсть готову поживу; урок 11" },
        { pl: "fotosynteza", ua: "фотосинтез — вироблення поживи за участю світла" },
        { pl: "chlorofil", ua: "хлорофіл — зелений барвник, поглинає світло" },
        { pl: "glukoza", ua: "глюкоза — цукор, пожива рослини" },
        { pl: "skrobia", ua: "крохмаль — запас цукру" },
        { pl: "tlen", ua: "кисень — іде в повітря" },
        { pl: "dwutlenek węgla", ua: "вуглекислий газ — входить із повітря" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Samożywność", ua: "Поняття. Саможивлення" },
      visual: vizGh("l09-samozywnosc.png", {
        alt: { pl: "Roślina wytwarza pokarm sama", ua: "Рослина сама виробляє поживу" },
        title: { pl: "Pokarm powstaje w roślinie, nie w misce.", ua: "Пожива виникає в рослині, не в мисці." },
        prompt: { pl: "Plansza lekcji 9: samożywność rośliny obok psa." }
      }),
      text: {
        pl: [
          [em("Samożywność"), " to sposób odżywiania, w którym organizm ", em("sam wytwarza"), " substancje odżywcze."],
          "Tak odżywiają się zielone rośliny. Pokarm nie przychodzi z zewnątrz jako gotowy obiad. Roślina buduje go w swoich komórkach.",
          "Organizmy, które jedzą gotowy pokarm wytworzony przez innych, są cudzożywne. Cudzożywność poznasz na lekcji 11."
        ],
        ua: [
          [em("Саможивлення"), " — спосіб живлення, у якому організм ", em("сам виробляє"), " поживні речовини."],
          "Так живляться зелені рослини. Пожива не приходить ззовні як готова вечеря. Рослина будує її у своїх клітинах.",
          "Організми, які їдять готову поживу, вироблену іншими, є чужоживними. Чужоживлення пізнаєш на уроці 11."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Pelargonia i pies", ua: "Приклад. Пеларгонія і пес" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Pies je gotową karmę. Pokarmu sam nie wytwarza."],
            ua: ["Пес їсть готовий корм. Поживу сам не виробляє."]
          }
        },
        {
          text: {
            pl: ["Pelargonia nie dostaje obiadu z miski. Substancje odżywcze powstają w niej samej."],
            ua: ["Пеларгонія не дістає вечерю з миски. Поживні речовини виникають у ній самій."]
          }
        },
        {
          text: {
            pl: ["Samożywność nie znaczy „roślina nie potrzebuje niczego”. Potrzebuje światła, wody i dwutlenku węgla."],
            ua: ["Саможивлення не означає «рослині нічого не треба». Їй потрібні світло, вода і вуглекислий газ."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Co to znaczy?", ua: "Коротке питання. Що це означає?" },
      task: {
        id: "l09-g1",
        type: "single-choice",
        question: {
          pl: "Co oznacza samożywność?",
          ua: "Що означає саможивлення?"
        },
        options: [
          { id: "a", label: { pl: "organizm sam wytwarza substancje odżywcze", ua: "організм сам виробляє поживні речовини" } },
          { id: "b", label: { pl: "organizm je wyłącznie mięso", ua: "організм їсть виключно м’ясо" } },
          { id: "c", label: { pl: "organizm nie potrzebuje żadnego pokarmu", ua: "організм не потребує жодної поживи" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj organizmu, który buduje pokarm sam, jak zielona roślina.",
          ua: "Шукай організм, який будує поживу сам, як зелена рослина."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mięso to gotowy pokarm. Samożywność znaczy, że organizm sam wytwarza substancje odżywcze.",
              ua: "М’ясо — це готова пожива. Саможивлення означає, що організм сам виробляє поживні речовини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pokarm powstaje, tylko nie przychodzi z miski. Roślina nadal potrzebuje światła, wody i dwutlenku węgla.",
              ua: "Пожива виникає, лише не приходить із миски. Рослині й далі потрібні світло, вода і вуглекислий газ."
            }
          }
        ],
        explanation: {
          pl: "Samożywny organizm sam wytwarza substancje odżywcze.",
          ua: "Саможивний організм сам виробляє поживні речовини."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Nic jej nie trzeba", ua: "Типова помилка. Їй нічого не треба" },
      claim: {
        pl: "„Samożywna roślina nie potrzebuje żadnego pokarmu ani żadnych substancji.”",
        ua: "«Саможивній рослині не потрібна жодна пожива і жодні речовини.»"
      },
      text: {
        pl: [
          "Pokarm powstaje w roślinie, ale nie z niczego.",
          "Do wytworzenia substancji odżywczych potrzeba światła, wody i dwutlenku węgla."
        ],
        ua: [
          "Пожива виникає в рослині, але не з нічого.",
          "Щоб виробити поживні речовини, потрібні світло, вода і вуглекислий газ."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dąb i kot", ua: "Сам. Дуб і кіт" },
      task: {
        id: "l09-p1",
        type: "single-choice",
        question: {
          pl: "Który organizm jest samożywny?",
          ua: "Який організм саможивний?"
        },
        options: [
          { id: "a", label: { pl: "dąb", ua: "дуб" } },
          { id: "b", label: { pl: "kot", ua: "кіт" } },
          { id: "c", label: { pl: "człowiek", ua: "людина" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kot je gotowy pokarm. Samożywny jest zielony dąb: sam wytwarza substancje odżywcze.",
              ua: "Кіт їсть готову поживу. Саможивним є зелений дуб: сам виробляє поживні речовини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Człowiek je gotowy pokarm. Sam pokarmu z dwutlenku węgla i wody nie wytwarza.",
              ua: "Людина їсть готову поживу. Сама поживу з вуглекислого газу і води не виробляє."
            }
          }
        ],
        explanation: {
          pl: "Dąb jest zieloną rośliną, więc sam wytwarza substancje odżywcze.",
          ua: "Дуб — зелена рослина, тож сам виробляє поживні речовини."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Gdzie zachodzi fotosynteza", ua: "Поняття. Де відбувається фотосинтез" },
      visual: vizGh("l09-gdzie.png", {
        alt: { pl: "Chloroplasty w komórce liścia", ua: "Хлоропласти в клітині листка" },
        title: { pl: "W chloroplastach. Tam jest chlorofil.", ua: "У хлоропластах. Там хлорофіл." },
        prompt: { pl: "Plansza lekcji 9: liść, chloroplast, chlorofil." }
      }),
      text: {
        pl: [
          ["Proces wytwarzania pokarmu przy udziale światła nazywamy ", em("fotosyntezą"), "."],
          ["Zachodzi w ", em("chloroplastach"), ". Chloroplasty zawierają ", em("chlorofil"), ", zielony barwnik, który pochłania światło."],
          "Najwięcej chloroplastów jest w komórkach liści. Inne zielone części też mogą fotosyntetyzować. Dziś zapamiętaj liść i chloroplast."
        ],
        ua: [
          ["Процес вироблення поживи за участю світла називаємо ", em("фотосинтезом"), "."],
          ["Відбувається в ", em("хлоропластах"), ". Хлоропласти містять ", em("хлорофіл"), ", зелений барвник, який поглинає світло."],
          "Найбільше хлоропластів у клітинах листків. Інші зелені частини теж можуть фотосинтезувати. Сьогодні запам’ятай листок і хлоропласт."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Od liścia do barwnika", ua: "Приклад. Від листка до барвника" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Patrzysz na liść. W jego komórkach jest dużo chloroplastów."],
            ua: ["Дивишся на листок. У його клітинах багато хлоропластів."]
          }
        },
        {
          text: {
            pl: ["W chloroplaście jest chlorofil. To on pochłania światło."],
            ua: ["У хлоропласті є хлорофіл. Саме він поглинає світло."]
          }
        },
        {
          text: {
            pl: ["Fotosynteza nie zachodzi w jądrze ani w mitochondrium mięśnia."],
            ua: ["Фотосинтез не відбувається в ядрі і не в мітохондрії м’яза."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Które miejsce?", ua: "Коротке питання. Яке місце?" },
      task: {
        id: "l09-g2",
        type: "single-choice",
        question: {
          pl: "Gdzie zachodzi fotosynteza?",
          ua: "Де відбувається фотосинтез?"
        },
        options: [
          { id: "a", label: { pl: "w chloroplastach, głównie w liściach", ua: "у хлоропластах, здебільшого в листках" } },
          { id: "b", label: { pl: "w jądrze komórki nabłonka", ua: "в ядрі клітини епітелію" } },
          { id: "c", label: { pl: "w mitochondriach mięśnia psa", ua: "у мітохондріях м’яза пса" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj zielonej struktury z chlorofilem. Najwięcej jej w liściu.",
          ua: "Шукай зелену структуру з хлорофілом. Найбільше її в листку."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jądro trzyma DNA. Fotosynteza zachodzi w chloroplastach liścia.",
              ua: "Ядро тримає ДНК. Фотосинтез відбувається в хлоропластах листка."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mitochondrium daje energię. Fotosyntezy w mięśniu psa nie ma, bo nie ma tam chloroplastów.",
              ua: "Мітохондрія дає енергію. Фотосинтезу в м’язі пса немає, бо там немає хлоропластів."
            }
          }
        ],
        explanation: {
          pl: "Fotosynteza zachodzi w chloroplastach, głównie w liściach.",
          ua: "Фотосинтез відбувається в хлоропластах, здебільшого в листках."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Fotosynteza w jądrze", ua: "Типова помилка. Фотосинтез у ядрі" },
      claim: {
        pl: "„Fotosynteza zachodzi w jądrze, bo tam jest DNA.”",
        ua: "«Фотосинтез відбувається в ядрі, бо там ДНК.»"
      },
      text: {
        pl: [
          "DNA w jądrze zapisuje cechy. Pokarmu tam nie wytwarza.",
          "Pokarm przy świetle powstaje w chloroplastach, gdzie jest chlorofil."
        ],
        ua: [
          "ДНК у ядрі записує риси. Поживу там не виробляє.",
          "Пожива на світлі виникає в хлоропластах, де є хлорофіл."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Zielony barwnik", ua: "Сам. Зелений барвник" },
      task: {
        id: "l09-p2",
        type: "single-choice",
        question: {
          pl: "W chloroplaście liścia jest zielony barwnik. Jak się nazywa i co robi ze światłem?",
          ua: "У хлоропласті листка є зелений барвник. Як він називається і що робить зі світлом?"
        },
        options: [
          { id: "a", label: { pl: "chlorofil — pochłania światło", ua: "хлорофіл — поглинає світло" } },
          { id: "b", label: { pl: "skrobia — pochłania światło", ua: "крохмаль — поглинає світло" } },
          { id: "c", label: { pl: "celuloza — wytwarza tlen w jądrze", ua: "целюлоза — виробляє кисень у ядрі" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Skrobia jest zapasem cukru, nie barwnikiem. Światło pochłania chlorofil.",
              ua: "Крохмаль — запас цукру, не барвник. Світло поглинає хлорофіл."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Celuloza buduje ścianę. Zielony barwnik, który pochłania światło, to chlorofil w chloroplaście.",
              ua: "Целюлоза будує стінку. Зелений барвник, який поглинає світло, — це хлорофіл у хлоропласті."
            }
          }
        ],
        explanation: {
          pl: "Chlorofil w chloroplastach pochłania światło.",
          ua: "Хлорофіл у хлоропластах поглинає світло."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Czego potrzebuje roślina", ua: "Поняття. Чого потребує рослина" },
      visual: vizGh("l09-substraty.png", {
        alt: { pl: "Światło, woda i dwutlenek węgla wchodzą do liścia", ua: "Світло, вода і вуглекислий газ входять у листок" },
        title: { pl: "Światło, woda, dwutlenek węgla. Chlorofil je spina.", ua: "Світло, вода, вуглекислий газ. Хлорофіл їх з’єднує." },
        prompt: { pl: "Schemat lekcji 9: wejście do liścia." }
      }),
      text: {
        pl: [
          "Do fotosyntezy roślina potrzebuje:",
          [em("światła"), " — zwykle słonecznego; chlorofil je pochłania;"],
          [em("wody"), " — pobieranej głównie przez korzeń, przez włośniki;"],
          [em("dwutlenku węgla"), " — gazu z powietrza, który wchodzi do liścia przez szparki."],
          "Bez chlorofilu światło nie zostanie użyte w chloroplaście. Sole mineralne są roślinie potrzebne do życia, ale nie wpisujemy ich do równania z tej lekcji."
        ],
        ua: [
          "Для фотосинтезу рослина потребує:",
          [em("світла"), " — зазвичай сонячного; хлорофіл його поглинає;"],
          [em("води"), " — яку здебільшого бере корінь, через кореневі волоски;"],
          [em("вуглекислого газу"), " — газу з повітря, який входить у листок через продихи."],
          "Без хлорофілу світло не буде використане в хлоропласті. Мінеральні солі рослині потрібні для життя, але в рівняння з цього уроку їх не вписуємо."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy drogi do liścia", ua: "Приклад. Три дороги до листка" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Słońce daje światło. Chlorofil w chloroplaście je pochłania."],
            ua: ["Сонце дає світло. Хлорофіл у хлоропласті його поглинає."]
          }
        },
        {
          text: {
            pl: ["Woda idzie głównie z korzenia, przez włośniki."],
            ua: ["Вода йде здебільшого з кореня, через кореневі волоски."]
          }
        },
        {
          text: {
            pl: ["Dwutlenek węgla wchodzi z powietrza przez szparki. Sole mineralne zostają poza równaniem."],
            ua: ["Вуглекислий газ входить із повітря через продихи. Мінеральні солі лишаються поза рівнянням."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jaki zestaw?", ua: "Коротке питання. Який набір?" },
      task: {
        id: "l09-g3",
        type: "single-choice",
        question: {
          pl: "Czego roślina potrzebuje do fotosyntezy?",
          ua: "Чого рослина потребує для фотосинтезу?"
        },
        options: [
          { id: "a", label: { pl: "światła, wody, dwutlenku węgla i chlorofilu", ua: "світла, води, вуглекислого газу і хлорофілу" } },
          { id: "b", label: { pl: "gotowego obiadu", ua: "готової вечері" } },
          { id: "c", label: { pl: "tylko soli mineralnych, bez wody i bez światła", ua: "лише мінеральних солей, без води і без світла" } }
        ],
        answer: "a",
        hint: {
          pl: "Trzy rzeczy wchodzą: światło, woda, dwutlenek węgla. Chlorofil jest w chloroplaście.",
          ua: "Три речі входять: світло, вода, вуглекислий газ. Хлорофіл є в хлоропласті."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Gotowy obiad to cudzożywność. Roślina sama wytwarza pokarm ze światła, wody i dwutlenku węgla.",
              ua: "Готова вечеря — це чужоживлення. Рослина сама виробляє поживу зі світла, води і вуглекислого газу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Sole są roślinie potrzebne do życia, ale do równania fotosyntezy ich nie wpisujemy. Brakuje światła, wody i dwutlenku węgla.",
              ua: "Солі рослині потрібні для життя, але в рівняння фотосинтезу їх не вписуємо. Бракує світла, води і вуглекислого газу."
            }
          }
        ],
        explanation: {
          pl: "Potrzeba światła, wody, dwutlenku węgla i chlorofilu w chloroplastach.",
          ua: "Потрібні світло, вода, вуглекислий газ і хлорофіл у хлоропластах."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Sole zamiast wody", ua: "Типова помилка. Солі замість води" },
      claim: {
        pl: "„Do fotosyntezy wpisuję sole mineralne, a woda nie jest potrzebna.”",
        ua: "«У фотосинтез вписую мінеральні солі, а вода не потрібна.»"
      },
      text: {
        pl: [
          "Woda jest potrzebna. Wchodzi głównie przez korzeń.",
          "Sole mineralne zostaw poza równaniem tej lekcji."
        ],
        ua: [
          "Вода потрібна. Входить здебільшого через корінь.",
          "Мінеральні солі залиш поза рівнянням цього уроку."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Dwie drogi", ua: "Сам. Дві дороги" },
      task: {
        id: "l09-p3",
        type: "single-choice",
        question: {
          pl: "Skąd liść dębu bierze wodę, a skąd dwutlenek węgla?",
          ua: "Звідки листок дуба бере воду, а звідки вуглекислий газ?"
        },
        options: [
          { id: "a", label: { pl: "woda głównie przez korzeń; dwutlenek węgla z powietrza przez szparki", ua: "вода здебільшого через корінь; вуглекислий газ із повітря через продихи" } },
          { id: "b", label: { pl: "woda przez szparki; dwutlenek węgla przez włośniki", ua: "вода через продихи; вуглекислий газ через кореневі волоски" } },
          { id: "c", label: { pl: "oba powstają w mitochondriach kota", ua: "обидва виникають у мітохондріях кота" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Drogi są zamienione. Woda idzie głównie z korzenia. Dwutlenek węgla wchodzi przez szparki.",
              ua: "Дороги переплутані. Вода йде здебільшого з кореня. Вуглекислий газ входить через продихи."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Mitochondria kota nie robią fotosyntezy. Woda i dwutlenek węgla wchodzą do liścia rośliny.",
              ua: "Мітохондрії кота не роблять фотосинтез. Вода і вуглекислий газ входять у листок рослини."
            }
          }
        ],
        explanation: {
          pl: "Woda przychodzi głównie z korzenia. Dwutlenek węgla wchodzi z powietrza przez szparki.",
          ua: "Вода приходить здебільшого з кореня. Вуглекислий газ входить із повітря через продихи."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Równanie słowne", ua: "Поняття. Словесне рівняння" },
      visual: vizGh("l09-rownanie.png", {
        alt: { pl: "Równanie słowne fotosyntezy", ua: "Словесне рівняння фотосинтезу" },
        title: { pl: "Dwutlenek węgla + woda → glukoza + tlen.", ua: "Вуглекислий газ + вода → глюкоза + кисень." },
        prompt: { pl: "Schemat lekcji 9: równanie słowne, bez wzoru z cyframi." }
      }),
      text: {
        pl: [
          "Z dwutlenku węgla i wody powstają:",
          [em("glukoza"), " — cukier, pokarm rośliny; część zapasu to ", em("skrobia"), ";"],
          [em("tlen"), " — gaz, który roślina uwalnia do powietrza."],
          "Równanie słowne: dwutlenek węgla + woda → glukoza + tlen.",
          "Przy strzałce są światło i chlorofil. Wzoru z cyframi dziś nie zapisujemy."
        ],
        ua: [
          "З вуглекислого газу і води виникають:",
          [em("глюкоза"), " — цукор, пожива рослини; частина запасу — це ", em("крохмаль"), ";"],
          [em("tlen"), " — газ, який рослина вивільняє в повітря."],
          "Словесне рівняння: вуглекислий газ + вода → глюкоза + кисень.",
          "Біля стрілки — світло і хлорофіл. Формули з цифрами сьогодні не записуємо."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Czytanie strzałki", ua: "Приклад. Читання стрілки" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Po lewej stronie strzałki: dwutlenek węgla i woda."],
            ua: ["Ліворуч від стрілки: вуглекислий газ і вода."]
          }
        },
        {
          text: {
            pl: ["Nad strzałką: światło i chlorofil. To warunki, nie produkty."],
            ua: ["Над стрілкою: світло і хлорофіл. Це умови, не продукти."]
          }
        },
        {
          text: {
            pl: ["Po prawej: glukoza i tlen. To powstaje."],
            ua: ["Праворуч: глюкоза і кисень. Це виникає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Która strzałka?", ua: "Коротке питання. Яка стрілка?" },
      task: {
        id: "l09-g4",
        type: "single-choice",
        question: {
          pl: "Które równanie słowne fotosyntezy jest poprawne?",
          ua: "Яке словесне рівняння фотосинтезу правильне?"
        },
        options: [
          { id: "a", label: { pl: "dwutlenek węgla + woda → glukoza + tlen", ua: "вуглекислий газ + вода → глюкоза + кисень" } },
          { id: "b", label: { pl: "glukoza + tlen → dwutlenek węgla + woda", ua: "глюкоза + кисень → вуглекислий газ + вода" } },
          { id: "c", label: { pl: "sole mineralne + piasek → chlorofil", ua: "мінеральні солі + пісок → хлорофіл" } }
        ],
        answer: "a",
        hint: {
          pl: "Na początku gazy i woda, które wchodzą. Na końcu cukier i tlen.",
          ua: "На початку газ і вода, які входять. Наприкінці цукор і кисень."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Strzałka jest odwrócona. To inny proces, lekcja 12. W fotosyntezie glukoza i tlen powstają.",
              ua: "Стрілка перевернута. Це інший процес, урок 12. У фотосинтезі глюкоза і кисень виникають."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Sole i piasek nie są równaniem fotosyntezy. Po lewej są dwutlenek węgla i woda.",
              ua: "Солі і пісок не є рівнянням фотосинтезу. Ліворуч — вуглекислий газ і вода."
            }
          }
        ],
        explanation: {
          pl: "Dwutlenek węgla i woda dają glukozę i tlen. Przy strzałce: światło i chlorofil.",
          ua: "Вуглекислий газ і вода дають глюкозу і кисень. Біля стрілки: світло і хлорофіл."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Odwrócona strzałka", ua: "Типова помилка. Перевернута стрілка" },
      claim: {
        pl: "„Fotosynteza zaczyna się od glukozy i tlenu, a kończy na dwutlenku węgla.”",
        ua: "«Фотосинтез починається з глюкози і кисню, а закінчується вуглекислим газом.»"
      },
      text: {
        pl: [
          "To odwrócony kierunek. Inny proces poznasz na lekcji 12.",
          "W fotosyntezie dwutlenek węgla i woda są na początku. Glukoza i tlen powstają."
        ],
        ua: [
          "Це зворотний напрям. Інший процес пізнаєш на уроці 12.",
          "У фотосинтезі вуглекислий газ і вода на початку. Глюкоза і кисень виникають."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Co zostaje, co ucieka", ua: "Сам. Що лишається, що виходить" },
      task: {
        id: "l09-p4",
        type: "single-choice",
        question: {
          pl: "Co z produktów fotosyntezy zostaje pokarmem rośliny, a co idzie do powietrza?",
          ua: "Що з продуктів фотосинтезу лишається поживою рослини, а що йде в повітря?"
        },
        options: [
          { id: "a", label: { pl: "glukoza zostaje pokarmem, część jako skrobia; tlen idzie do powietrza", ua: "глюкоза лишається поживою, частина як крохмаль; кисень іде в повітря" } },
          { id: "b", label: { pl: "tlen zostaje pokarmem; glukoza ucieka do powietrza", ua: "кисень лишається поживою; глюкоза виходить у повітря" } },
          { id: "c", label: { pl: "oba wracają do korzenia jako dwutlenek węgla", ua: "обидва повертаються в корінь як вуглекислий газ" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Pokarmem jest cukier, glukoza. Tlen roślina uwalnia do powietrza.",
              ua: "Поживою є цукор, глюкоза. Кисень рослина вивільняє в повітря."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Dwutlenek węgla jest na początku, nie produktem. Powstają glukoza i tlen.",
              ua: "Вуглекислий газ є на початку, не продуктом. Виникають глюкоза і кисень."
            }
          }
        ],
        explanation: {
          pl: "Glukoza karmi roślinę. Tlen idzie do powietrza.",
          ua: "Глюкоза годує рослину. Кисень іде в повітря."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Bez światła", ua: "Поняття. Без світла" },
      visual: vizGh("l09-swiatlo.png", {
        alt: { pl: "Roślina na świetle i w ciemności", ua: "Рослина на світлі і в темряві" },
        title: { pl: "Bez światła nowy cukier nie powstaje.", ua: "Без світла новий цукор не виникає." },
        prompt: { pl: "Kolaż lekcji 9: ta sama roślina w słońcu i w ciemności." }
      }),
      text: {
        pl: [
          "Chlorofil musi mieć światło. W całkowitej ciemności roślina nie prowadzi fotosyntezy. Nowy cukier z dwutlenku węgla i wody wtedy nie powstaje.",
          "Roślina może przez jakiś czas korzystać z zapasu skrobi. Dlatego kwiat w ciemnym pokoju nie ginie od razu. Długo bez światła zielone rośliny słabną.",
          "Na następnej lekcji sprawdzimy doświadczeniem, czy skrobia w liściu powstaje tylko tam, gdzie padało światło."
        ],
        ua: [
          "Хлорофіл мусить мати світло. У повній темряві рослина не веде фотосинтез. Новий цукор із вуглекислого газу і води тоді не виникає.",
          "Рослина може якийсь час користуватися запасом крохмалю. Тому квітка в темній кімнаті не гине відразу. Довго без світла зелені рослини слабшають.",
          "На наступному уроці дослідом перевіримо, чи крохмаль у листку виникає лише там, де падало світло."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Słońce i szafa", ua: "Приклад. Сонце і шафа" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na słońcu chlorofil pochłania światło. Fotosynteza może iść."],
            ua: ["На сонці хлорофіл поглинає світло. Фотосинтез може йти."]
          }
        },
        {
          text: {
            pl: ["W ciemnej szafie nowego cukru nie ma. Brakuje światła."],
            ua: ["У темній шафі нового цукру немає. Бракує світла."]
          }
        },
        {
          text: {
            pl: ["Roślina jeszcze żyje, bo zużywa zapas skrobi. To nie jest nowa fotosynteza."],
            ua: ["Рослина ще живе, бо витрачає запас крохмалю. Це не новий фотосинтез."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Ciemna szafa", ua: "Коротке питання. Темна шафа" },
      task: {
        id: "l09-g5",
        type: "single-choice",
        question: {
          pl: "Czy w całkowitej ciemności powstaje nowy cukier?",
          ua: "Чи в повній темряві виникає новий цукор?"
        },
        options: [
          { id: "a", label: { pl: "Nie. Bez światła fotosynteza nie zachodzi.", ua: "Ні. Без світла фотосинтез не відбувається." } },
          { id: "b", label: { pl: "Tak. Ciemność przyspiesza fotosyntezę.", ua: "Так. Темрява прискорює фотосинтез." } },
          { id: "c", label: { pl: "Tak. Zużywanie skrobi to nowa fotosynteza.", ua: "Так. Витрачання крохмалю — це новий фотосинтез." } }
        ],
        answer: "a",
        hint: {
          pl: "Chlorofil potrzebuje światła. Zapas skrobi to nie nowy cukier.",
          ua: "Хлорофілу потрібне світло. Запас крохмалю — не новий цукор."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ciemność nie przyspiesza fotosyntezy. Bez światła chlorofil nie ma czego pochłaniać.",
              ua: "Темрява не прискорює фотосинтез. Без світла хлорофілу нічого поглинати."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Skrobia to zapas z wcześniejszej fotosyntezy. W ciemności nowy cukier nie powstaje.",
              ua: "Крохмаль — запас із попереднього фотосинтезу. У темряві новий цукор не виникає."
            }
          }
        ],
        explanation: {
          pl: "Bez światła fotosynteza nie zachodzi i nowy cukier nie powstaje.",
          ua: "Без світла фотосинтез не відбувається і новий цукор не виникає."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Ginie w tej samej sekundzie", ua: "Типова помилка. Гине тієї самої секунди" },
      claim: {
        pl: "„Gdy zgaśnie światło, roślina ginie w tej samej sekundzie.”",
        ua: "«Коли згасне світло, рослина гине тієї самої секунди.»"
      },
      text: {
        pl: [
          "Nowa fotosynteza staje. Roślina nie znika od razu.",
          "Przez jakiś czas korzysta z zapasu skrobi. Długo bez światła słabnie."
        ],
        ua: [
          "Новий фотосинтез зупиняється. Рослина не зникає відразу.",
          "Якийсь час користується запасом крохмалю. Довго без світла слабшає."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Noc w ciemnym pokoju", ua: "Сам. Ніч у темній кімнаті" },
      task: {
        id: "l09-p5",
        type: "single-choice",
        question: {
          pl: "Pelargonia stała noc w ciemnym pokoju i rano jeszcze żyje. Co działo się z fotosyntezą w nocy?",
          ua: "Пеларгонія простояла ніч у темній кімнаті і вранці ще жива. Що було з фотосинтезом уночі?"
        },
        options: [
          { id: "a", label: { pl: "Nowy cukier nie powstał. Roślina mogła korzystać z zapasu skrobi.", ua: "Новий цукор не виник. Рослина могла користуватися запасом крохмалю." } },
          { id: "b", label: { pl: "W nocy fotosynteza była szybsza niż w dzień.", ua: "Уночі фотосинтез був швидший, ніж удень." } },
          { id: "c", label: { pl: "Skrobia powstała właśnie dlatego, że było ciemno.", ua: "Крохмаль виник саме тому, що було темно." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "W ciemności fotosynteza nie przyspiesza. Bez światła nowego cukru nie ma.",
              ua: "У темряві фотосинтез не прискорюється. Без світла нового цукру немає."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Skrobia powstaje z cukru fotosyntezy, a fotosynteza potrzebuje światła. Ciemność jej nie uruchamia.",
              ua: "Крохмаль виникає з цукру фотосинтезу, а фотосинтезу потрібне світло. Темрява його не запускає."
            }
          }
        ],
        explanation: {
          pl: "W nocy nowy cukier nie powstał. Życie rano może iść z zapasu skrobi.",
          ua: "Уночі новий цукор не виник. Життя вранці може йти із запасу крохмалю."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Po co to innym", ua: "Поняття. Навіщо це іншим" },
      visual: vizGh("l09-znaczenie.png", {
        alt: { pl: "Rośliny dają pokarm i tlen innym organizmom", ua: "Рослини дають поживу і кисень іншим організмам" },
        title: { pl: "Cukier zostaje w roślinie. Tlen idzie do powietrza.", ua: "Цукор лишається в рослині. Кисень іде в повітря." },
        prompt: { pl: "Plansza lekcji 9: pokarm i tlen z fotosyntezy." }
      }),
      text: {
        pl: [
          "Fotosynteza karmi roślinę: glukoza to jej pokarm, skrobia to zapas.",
          "Zwierzęta i ludzie nie fotosyntetyzują. Jedzą rośliny albo jedzą kogoś, kto jadł rośliny.",
          "Tlen z fotosyntezy jest w powietrzu. Oddychanie tlenowe, lekcja 12, potrzebuje tego gazu w mitochondriach.",
          "Zielone rośliny są podstawą życia na lądzie i w wielu wodach. Fotosynteza i oddychanie to dwa różne procesy."
        ],
        ua: [
          "Фотосинтез годує рослину: глюкоза — її пожива, крохмаль — запас.",
          "Тварини і люди не фотосинтезують. Їдять рослини або їдять когось, хто їв рослини.",
          "Кисень із фотосинтезу є в повітрі. Аеробному диханню, урок 12, потрібен цей газ у мітохондріях.",
          "Зелені рослини є основою життя на суходолі і в багатьох водах. Фотосинтез і дихання — два різні процеси."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Zając i ptak", ua: "Приклад. Заєць і птах" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Trawa robi glukozę w liściach. Część zostaje jako skrobia."],
            ua: ["Трава робить глюкозу в листках. Частина лишається як крохмаль."]
          }
        },
        {
          text: {
            pl: ["Zając je trawę. Sam chloroplastów nie ma."],
            ua: ["Заєць їсть траву. Сам хлоропластів не має."]
          }
        },
        {
          text: {
            pl: ["Tlen z liścia idzie do powietrza. Ptak nim oddycha."],
            ua: ["Кисень із листка йде в повітря. Птах ним дихає."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Po co zwierzętom?", ua: "Коротке питання. Навіщо тваринам?" },
      task: {
        id: "l09-g6",
        type: "single-choice",
        question: {
          pl: "Dlaczego fotosynteza jest ważna dla zwierząt?",
          ua: "Чому фотосинтез важливий для тварин?"
        },
        options: [
          { id: "a", label: { pl: "daje tlen do powietrza i pokarm, który zaczyna się od roślin", ua: "дає кисень у повітря і поживу, яка починається від рослин" } },
          { id: "b", label: { pl: "zwierzęta dostają chloroplasty w mięśniach", ua: "тварини дістають хлоропласти в м’язах" } },
          { id: "c", label: { pl: "fotosynteza zastępuje wydalanie", ua: "фотосинтез замінює виділення" } }
        ],
        answer: "a",
        hint: {
          pl: "Dwie rzeczy wychodzą z rośliny do innych: tlen i pokarm.",
          ua: "Дві речі виходять із рослини до інших: кисень і пожива."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zwierzęta nie mają chloroplastów. Korzystają z tlenu i z pokarmu, który zaczyna się od roślin.",
              ua: "Тварини не мають хлоропластів. Користуються киснем і поживою, яка починається від рослин."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wydalanie to inna czynność życiowa. Fotosynteza daje pokarm roślinie i tlen do powietrza.",
              ua: "Виділення — інша життєва функція. Фотосинтез дає поживу рослині і кисень у повітря."
            }
          }
        ],
        explanation: {
          pl: "Zwierzęta korzystają z tlenu i z pokarmu, który zaczyna się od roślin.",
          ua: "Тварини користуються киснем і поживою, яка починається від рослин."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. To ten sam proces", ua: "Типова помилка. Це той самий процес" },
      claim: {
        pl: "„Fotosynteza i oddychanie to ten sam proces, bo oba dotyczą gazów.”",
        ua: "«Фотосинтез і дихання — це той самий процес, бо обидва стосуються газів.»"
      },
      text: {
        pl: [
          "Gazy są w obu, ale kierunek pracy jest inny.",
          "Fotosynteza wytwarza glukozę i tlen. Oddychanie tlenowe to lekcja 12."
        ],
        ua: [
          "Гази є в обох, але напрям роботи інший.",
          "Фотосинтез виробляє глюкозу і кисень. Аеробне дихання — це урок 12."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Cukier w trawie", ua: "Сам. Цукор у траві" },
      task: {
        id: "l09-p6",
        type: "single-choice",
        question: {
          pl: "Zając zjadł trawę. Skąd w liściu trawy wzięła się glukoza?",
          ua: "Заєць з’їв траву. Звідки в листку трави взялася глюкоза?"
        },
        options: [
          { id: "a", label: { pl: "z fotosyntezy w chloroplastach trawy", ua: "з фотосинтезу в хлоропластах трави" } },
          { id: "b", label: { pl: "z mitochondriów zająca", ua: "з мітохондрій зайця" } },
          { id: "c", label: { pl: "zając wlał ją do liścia z miski", ua: "заєць влив її в листок із миски" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Mitochondria zająca nie robią cukru dla trawy. Glukoza powstała w chloroplastach liścia.",
              ua: "Мітохондрії зайця не роблять цукор для трави. Глюкоза виникла в хлоропластах листка."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Trawa jest samożywna. Glukozę wytwarza sama, w chloroplastach, nie dostaje jej z miski.",
              ua: "Трава саможивна. Глюкозу виробляє сама, в хлоропластах, не дістає її з миски."
            }
          }
        ],
        explanation: {
          pl: "Glukoza w trawie powstaje w fotosyntezie, w chloroplastach liścia.",
          ua: "Глюкоза в траві виникає у фотосинтезі, в хлоропластах листка."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Pięć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, którą część fotosyntezy sprawdziłeś nie tym słowem."
        ],
        ua: [
          "П’ять питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, яку частину фотосинтезу ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Samożywność", ua: "Перевірка 1. Саможивлення" },
      task: {
        id: "l09-t1",
        type: "single-choice",
        question: {
          pl: "Czym jest samożywność?",
          ua: "Що таке саможивлення?"
        },
        options: [
          { id: "a", label: { pl: "Organizm sam wytwarza substancje odżywcze, tak jak zielone rośliny w fotosyntezie.", ua: "Організм сам виробляє поживні речовини, як зелені рослини у фотосинтезі." } },
          { id: "b", label: { pl: "Organizm je gotowy pokarm wytworzony przez innych.", ua: "Організм їсть готову поживу, вироблену іншими." } },
          { id: "c", label: { pl: "W liściu nie ma chlorofilu, więc pokarm nie powstaje.", ua: "У листку немає хлорофілу, тож пожива не виникає." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Jedzenie gotowego pokarmu to cudzożywność, lekcja 11. Samożywność znaczy: organizm sam wytwarza substancje odżywcze.",
              ua: "Їжа готової поживи — це чужоживлення, урок 11. Саможивлення означає: організм сам виробляє поживні речовини."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Bez chlorofilu fotosynteza nie idzie. Samożywność jest wtedy, gdy zielona roślina sama wytwarza pokarm.",
              ua: "Без хлорофілу фотосинтез не йде. Саможивлення є тоді, коли зелена рослина сама виробляє поживу."
            }
          }
        ],
        explanation: {
          pl: "Samożywny organizm sam wytwarza substancje odżywcze. Zielone rośliny robią to w fotosyntezie.",
          ua: "Саможивний організм сам виробляє поживні речовини. Зелені рослини роблять це у фотосинтезі."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Miejsce", ua: "Перевірка 2. Місце" },
      task: {
        id: "l09-t2",
        type: "single-choice",
        question: {
          pl: "Gdzie zachodzi fotosynteza?",
          ua: "Де відбувається фотосинтез?"
        },
        options: [
          { id: "a", label: { pl: "w chloroplastach dzięki chlorofilowi, głównie w liściach", ua: "у хлоропластах завдяки хлорофілу, здебільшого в листках" } },
          { id: "b", label: { pl: "w wakuoli komórki bakteryjnej", ua: "у вакуолі бактеріальної клітини" } },
          { id: "c", label: { pl: "w ścianie komórkowej z celulozy, bez chlorofilu", ua: "у клітинній стінці з целюлози, без хлорофілу" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Bakteria nie ma chloroplastów liścia. Fotosynteza zielonej rośliny jest w chloroplastach.",
              ua: "Бактерія не має хлоропластів листка. Фотосинтез зеленої рослини є в хлоропластах."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ściana jest z celulozy i nie pochłania światła. Światło pochłania chlorofil w chloroplastach.",
              ua: "Стінка з целюлози і не поглинає світло. Світло поглинає хлорофіл у хлоропластах."
            }
          }
        ],
        explanation: {
          pl: "Fotosynteza zachodzi w chloroplastach dzięki chlorofilowi, głównie w liściach.",
          ua: "Фотосинтез відбувається в хлоропластах завдяки хлорофілу, здебільшого в листках."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Czego potrzeba", ua: "Перевірка 3. Чого треба" },
      task: {
        id: "l09-t3",
        type: "single-choice",
        question: {
          pl: "Który zestaw jest potrzebny do fotosyntezy?",
          ua: "Який набір потрібен для фотосинтезу?"
        },
        options: [
          { id: "a", label: { pl: "światło, woda, dwutlenek węgla i chlorofil", ua: "світло, вода, вуглекислий газ і хлорофіл" } },
          { id: "b", label: { pl: "tylko ciemność i zapas skrobi", ua: "лише темрява і запас крохмалю" } },
          { id: "c", label: { pl: "sole mineralne zamiast wody i zamiast światła", ua: "мінеральні солі замість води і замість світла" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ciemność zatrzymuje fotosyntezę. Skrobia jest zapasem, nie zastępuje światła, wody i dwutlenku węgla.",
              ua: "Темрява зупиняє фотосинтез. Крохмаль є запасом, не замінює світло, воду і вуглекислий газ."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Sole nie wchodzą do równania tej lekcji. Potrzeba światła, wody, dwutlenku węgla i chlorofilu.",
              ua: "Солі не входять у рівняння цього уроку. Потрібні світло, вода, вуглекислий газ і хлорофіл."
            }
          }
        ],
        explanation: {
          pl: "Do fotosyntezy potrzeba światła, wody, dwutlenku węgla i chlorofilu.",
          ua: "Для фотосинтезу потрібні світло, вода, вуглекислий газ і хлорофіл."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Co powstaje", ua: "Перевірка 4. Що виникає" },
      task: {
        id: "l09-t4",
        type: "single-choice",
        question: {
          pl: "Co powstaje w fotosyntezie?",
          ua: "Що виникає у фотосинтезі?"
        },
        options: [
          { id: "a", label: { pl: "glukoza i tlen", ua: "глюкоза і кисень" } },
          { id: "b", label: { pl: "dwutlenek węgla i woda", ua: "вуглекислий газ і вода" } },
          { id: "c", label: { pl: "światło i chlorofil", ua: "світло і хлорофіл" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Dwutlenek węgla i woda są na początku. Powstają glukoza i tlen.",
              ua: "Вуглекислий газ і вода є на початку. Виникають глюкоза і кисень."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Światło i chlorofil są warunkami przy strzałce. Produktami są glukoza i tlen.",
              ua: "Світло і хлорофіл є умовами біля стрілки. Продуктами є глюкоза і кисень."
            }
          }
        ],
        explanation: {
          pl: "W fotosyntezie powstają glukoza i tlen.",
          ua: "У фотосинтезі виникають глюкоза і кисень."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Znaczenie", ua: "Перевірка 5. Значення" },
      task: {
        id: "l09-t5",
        type: "single-choice",
        question: {
          pl: "Dlaczego fotosynteza jest ważna także poza rośliną?",
          ua: "Чому фотосинтез важливий також поза рослиною?"
        },
        options: [
          { id: "a", label: { pl: "Do powietrza trafia tlen, a pokarm wielu organizmów zaczyna się od roślin.", ua: "У повітря потрапляє кисень, а пожива багатьох організмів починається від рослин." } },
          { id: "b", label: { pl: "Zwierzęta zaczynają mieć chloroplasty w skórze.", ua: "Тварини починають мати хлоропласти в шкірі." } },
          { id: "c", label: { pl: "Fotosynteza jest tym samym co oddychanie tlenowe.", ua: "Фотосинтез є тим самим, що аеробне дихання." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zwierzęta nie dostają chloroplastów. Korzystają z tlenu i z pokarmu roślin.",
              ua: "Тварини не дістають хлоропластів. Користуються киснем і поживою рослин."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To dwa różne procesy. Fotosynteza wytwarza glukozę i tlen. Oddychanie jest na lekcji 12.",
              ua: "Це два різні процеси. Фотосинтез виробляє глюкозу і кисень. Дихання є на уроці 12."
            }
          }
        ],
        explanation: {
          pl: "Fotosynteza daje tlen do powietrza i pokarm, który zaczyna się od roślin.",
          ua: "Фотосинтез дає кисень у повітря і поживу, яка починається від рослин."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l09-rownanie.png", {
        alt: { pl: "Równanie słowne fotosyntezy", ua: "Словесне рівняння фотосинтезу" },
        title: { pl: "Dwutlenek węgla + woda → glukoza + tlen.", ua: "Вуглекислий газ + вода → глюкоза + кисень." },
        prompt: { pl: "To samo równanie słowne fotosyntezy." }
      }),
      text: {
        pl: [
          "Samożywność: organizm sam wytwarza substancje odżywcze.",
          "Fotosynteza zachodzi w chloroplastach dzięki chlorofilowi, głównie w liściach.",
          "Potrzeba: światło, woda, dwutlenek węgla i chlorofil.",
          "Równanie: dwutlenek węgla + woda → glukoza + tlen.",
          "Bez światła nowego cukru nie ma. Zapas skrobi pozwala przetrwać jakiś czas.",
          "Glukoza karmi roślinę. Tlen idzie do powietrza i służy innym organizmom."
        ],
        ua: [
          "Саможивлення: організм сам виробляє поживні речовини.",
          "Фотосинтез відбувається в хлоропластах завдяки хлорофілу, здебільшого в листках.",
          "Потрібно: світло, вода, вуглекислий газ і хлорофіл.",
          "Рівняння: вуглекислий газ + вода → глюкоза + кисень.",
          "Без світла нового цукру немає. Запас крохмалю дає прожити якийсь час.",
          "Глюкоза годує рослину. Кисень іде в повітря і служить іншим організмам."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wyjaśnię, czym jest samożywność.", ua: "Поясню, що таке саможивлення." },
        { pl: "Powiem, gdzie zachodzi fotosynteza.", ua: "Скажу, де відбувається фотосинтез." },
        { pl: "Wymienię, czego roślina potrzebuje do fotosyntezy.", ua: "Назву, чого рослина потребує для фотосинтезу." },
        { pl: "Podam równanie słowne fotosyntezy.", ua: "Назву словесне рівняння фотосинтезу." },
        { pl: "Wyjaśnię, dlaczego fotosynteza jest ważna także dla innych organizmów.", ua: "Поясню, чому фотосинтез важливий також для інших організмів." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
