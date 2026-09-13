function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE = "Styl: akwarela podręcznikowa GWO «Między nami» klasa 5 — ciepła zieleń lasu, jagody, miękki kontur tuszu, płaskie cienie, zero napisów na kadrze, zero znaku wodnego. PNG.";

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
      formula: "s. 39  ·  Jan Twardowski  ·  lekcja 17 z 18",
      promptPlace: "before",
      prompt: {
        pl: "Dwa tematy, jeden wiersz. Dziś czytamy i nazywamy: treść, adresat, glosy z pól. Wiersza nie tłumaczymy. Przenośnia i opowiadanie — jutro (s. 40). Klucze są schowane.",
        ua: "Два уроки, один вірш. Сьогодні: зміст, адресат, глоси. Вірш не перекладаємо. Переносний смисл і оповідання — завтра (с. 40). Ключі сховані."
      },
      items: [
        { pl: "opowiem o *najwspanialszym* miejscu lub zjawisku przyrody i uzasadnię wybór;", ua: "розкажу про *найчудовіше* місце або явище природи і обґрунтую вибір;" },
        { pl: "zrelacjonuję treść wiersza Twardowskiego;", ua: "перекажу зміст вірша Твардовського;" },
        { pl: "wskażę *adresata*: kim jest, co robi, jakie ma możliwości;", ua: "вкажу *адресата*: хто він, що робить, які має можливості;" },
        { pl: "wyjaśnię glosy: *zawilec*, *czosnek niedźwiedzi*;", ua: "поясню глоси: *zawilec*, *czosnek niedźwiedzi*;" },
        { pl: "rozpoznam *apostrofę* («Ty który…») — jak w lekcji 2.", ua: "впізнаю *апострофу* («Ty który…») — як на уроці 2." }
      ],
      task: {
        id: "t17-s01-umiem",
        type: "multiple-choice",
        question: {
          pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
          ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Zrelacjonować, o czym jest wiersz.", ua: "Переказати, про що вірш." } },
          { id: "b", label: { pl: "Uzupełnić schemat adresata: kim jest / co robi / jakie ma możliwości.", ua: "Заповнити схему адресата: хто / що робить / які можливості." } },
          { id: "c", label: { pl: "Tylko napisać opowiadanie «Serce choćby na chwilę» — to jest na dziś.", ua: "Лише написати оповідання «Serce choćby na chwilę» — це на сьогодні." } },
          { id: "d", label: { pl: "Wyjaśnić zawilec i czosnek niedźwiedzi z pól.", ua: "Пояснити zawilec і czosnek niedźwiedzi з полів." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Spójrz na listę. Opowiadanie jest zadaniem 5 na s. 40 — która lekcja?",
          ua: "Подивись на список. Оповідання — завдання 5 на с. 40. Який урок?"
        },
        explanation: {
          pl: "Dziś: treść, adresat, glosy. Opowiadanie i przenośnia — lekcja 18.",
          ua: "Сьогодні: зміст, адресат, глоси. Оповідання і переносний смисл — урок 18."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "W gąszczu stworzenia", ua: "У гущавині творення" },
      formula: "s. 39  ·  po lekcjach 15–16",
      promptPlace: "before",
      prompt: {
        pl: "Dział w podręczniku: *W gąszczu stworzenia*. To już nie Księga Rodzaju i nie mit o Olimpie — to *wiersz*. Jan Twardowski mówi do kogoś słowem «Ty».",
        ua: "Розділ підручника: *W gąszczu stworzenia*. Це вже не Книга Буття і не міф про Олімп — це *вірш*. Ян Твардовський каже до когось «Ty»."
      },
      text: {
        pl: [
          "Lekcja 15: sześć dni stwarzania (Biblia). Lekcja 16: Eden i XIV-wieczna ilustracja.",
          "Lekcja 17: poezja. Tytuł: *Który stwarzasz jagody*. Autor: Jan Twardowski.",
          "Jutro (lekcja 18): «serce choćby na chwilę», prośba z końcówki, opowiadanie."
        ],
        ua: [
          "Урок 15: шість днів творення (Біблія). Урок 16: Еден і ілюстрація XIV ст.",
          "Урок 17: поезія. Назва: *Który stwarzasz jagody*. Автор: Ян Твардовський.",
          "Завтра (урок 18): «serce choćby na chwilę», прохання з кінця, оповідання."
        ]
      },
      task: {
        id: "t17-s02-dzial",
        type: "single-choice",
        question: {
          pl: "Czym jest utwór z tej lekcji?",
          ua: "Чим є твір з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "Wierszem Jana Twardowskiego.", ua: "Віршем Яна Твардовського." } },
          { id: "b", label: { pl: "Fragmentem Księgi Rodzaju z lekcji 15.", ua: "Уривком Книги Буття з уроку 15." } },
          { id: "c", label: { pl: "Mitem o Zeusie z lekcji 14.", ua: "Міфом про Зевса з уроку 14." } }
        ],
        answer: "a",
        hint: {
          pl: "Na s. 39 stoi: JAN TWARDOWSKI i tytuł wiersza. Czy to kolumna Biblii?",
          ua: "На с. 39: JAN TWARDOWSKI і назва вірша. Чи це колонка Біблії?"
        },
        explanation: {
          pl: "To wiersz. Biblia i Olimp były wcześniej — tu inny gatunek i inny adresat w poezji.",
          ua: "Це вірш. Біблія і Олімп були раніше."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zadanie wstępne · przyroda", ua: "Вступне · природа" },
      formula: "s. 39  ·  USTNIE + zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Przedstaw najwspanialsze — twoim zdaniem — miejsce lub zjawisko ze świata przyrody. Powiedz, jakie wywołuje w tobie emocje. Program: uzasadnij wybór. Najpierw zeszyt, potem wskazówki.",
        ua: "Представ найчудовіше — на твою думку — місце або явище зі світу природи. Скажи, які емоції воно будить. Обґрунтуй вибір. Спочатку зошит."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "W zeszycie trzy linijki: 1) co wybieram (jezioro / burza / jagody w lesie…). 2) dlaczego to *najwspanialsze* (jeden powód z tego, co widać albo czuć). 3) jaka emocja: spokój, zachwyt, strach, wdzięczność…",
            ua: "У зошиті три рядки: 1) що обираю. 2) чому це *найчудовіше*. 3) яка емоція."
          }
        },
        {
          formula: "WZÓR EduMost  ·  nie jedyna dobra odpowiedź",
          text: {
            pl: [
              "Wybieram cień pod leszczyną po deszczu: liście duże, ziemia pachnie, widać ślimaka.",
              "Emocja: spokój i zdziwienie, że coś tak małego też jest «stworzone».",
              "Uzasadnienie ma być twoje — nie kopiuj wzoru jeden do jednego. Twardowski też patrzy na *małe* rzeczy."
            ],
            ua: [
              "Обираю тінь під ліщиною після дощу: велике листя, земля пахне, видно слимака.",
              "Емоція: спокій і подив, що щось таке мале теж «створене».",
              "Обґрунтування має бути твоє. Твардовський теж дивиться на *малі* речі."
            ]
          }
        }
      ],
      task: {
        id: "t17-s03-wstepne",
        type: "true-false",
        question: {
          pl: "Czy do tego zadania wystarczy napisać samo «las jest ładny» — bez miejsca/zjawiska, bez emocji i bez uzasadnienia?",
          ua: "Чи для цього завдання досить написати лише «ліс гарний» — без місця/явища, без емоцій і без обґрунтування?"
        },
        answer: false,
        hint: {
          pl: "Polecenie ma dwa człony: co? + jakie emocje? Program dodaje: uzasadnij.",
          ua: "Завдання має два члени: що? + які емоції? Програма: обґрунтуй."
        },
        explanation: {
          pl: "Nie. Trzeba: konkretne miejsce albo zjawisko, emocja, powód wyboru. «Ładny las» to za mało.",
          ua: "Ні. Потрібні: конкретне місце або явище, емоція, причина. «Гарний ліс» — замало."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy wiersz", ua: "Читаємо вірш" },
      formula: "Jan Twardowski  ·  Który stwarzasz jagody",
      visual: {
        kind: "youtube",
        id: "kS2fKjLUU3A",
        title: {
          pl: "Posłuchaj: Jan Twardowski „Który stwarzasz jagody”",
          ua: "Послухай: Jan Twardowski «Który stwarzasz jagody»"
        }
      },
      promptPlace: "before",
      prompt: {
        pl: "Najpierw posłuchaj nagrania. Potem przeczytaj wiersz dwa razy. 1) Co ktoś stwarza? 2) Do kogo jest «Ty»? Wiersza nie tłumaczymy na ukraiński.",
        ua: "Спочатку послухай запис. Потім прочитай вірш двічі. 1) Що хтось творить? 2) До кого «Ty»? Вірш не перекладаємо."
      },
      text: {
        pl: [
          "Ty który stwarzasz jagody",
          "królika z marchewką",
          "lato chrabąszczowe",
          "cień wielki małych liści",
          "zawilec półobecny bo uwiednie zanim go się przyniesie do domu",
          "czosnek niedźwiedzi dla trzmieli",
          "smutek roślin",
          "wydrę na krótkich nogach",
          "ślimaka co zasypia na sześć miesięcy",
          "niezgrabny śnieg co ma wdzięk większy zanim zacznie tańczyć",
          "serce choćby na chwilę",
          " ",
          "spraw",
          "niech poeci piszą wiersze prostsze od wspaniałej poezji"
        ]
      },
      task: {
        id: "t17-s04-w-wierszu",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO jest w tym wierszu? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО є в цьому вірші? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Jagody, królik z marchewką, ślimak, śnieg.", ua: "Ягоди, кролик з морквою, слимак, сніг." } },
          { id: "b", label: { pl: "Zwrot «Ty który stwarzasz…» i prośba «spraw / niech poeci…».", ua: "Звертання «Ty który stwarzasz…» і прохання «spraw / niech poeci…»." } },
          { id: "c", label: { pl: "Zeus, Olimp i Cerber.", ua: "Зевс, Олімп і Цербер." } },
          { id: "d", label: { pl: "Zawilec i czosnek niedźwiedzi.", ua: "Zawilec і czosnek niedźwiedzi." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Palcem w tekście. Czy słowo Zeus stoi w którejś linijce?",
          ua: "Пальцем у тексті. Чи слово Зевс стоїть у якомусь рядку?"
        },
        explanation: {
          pl: "W wierszu: drobna przyroda, «Ty który», końcowa prośba, dwie glosy z pól. Zeus — lekcja 14.",
          ua: "У вірші: дрібна природа, «Ty który», прохання в кінці, дві глоси. Зевс — урок 14."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Relacja · o czym jest wiersz?", ua: "Переказ · про що вірш?" },
      formula: "s. 39  ·  program: relacjonuje treść",
      promptPlace: "before",
      prompt: {
        pl: "Zrelacjonuj treść swoimi słowami: kto mówi, do kogo, o czym prosi. Nie streszczaj Biblii ani mitu.",
        ua: "Перекажи своїми словами: хто говорить, до кого, про що просить. Не переказуй Біблію чи міф."
      },
      text: {
        pl: [
          "Podmiot mówi do kogoś na «Ty»: wylicza, co ten ktoś *stwarza* — od jagód i królika po ślimaka, śnieg i serce.",
          "Na końcu prosi: spraw, niech poeci piszą wiersze *prostsze* od wspaniałej poezji.",
          "To nie opis sześciu dni z lekcji 15 — tu liczy się *mały* świat tuż przy ziemi."
        ],
        ua: [
          "Суб’єкт каже до когось на «Ty»: перелічує, що той хтось *творить* — від ягід і кролика до слимака, снігу і серця.",
          "Наприкінці просить: учини, хай поети пишуть вірші *простіші* за прекрасну поезію.",
          "Це не опис шести днів з уроку 15 — тут важливий *малий* світ біля землі."
        ]
      },
      task: {
        id: "t17-s05-relacja",
        type: "single-choice",
        question: {
          pl: "Która relacja zgadza się z tym wierszem?",
          ua: "Який переказ пасує до цього вірша?"
        },
        options: [
          { id: "a", label: { pl: "Ktoś zwraca się do Stwórcy i wylicza drobne stworzenia; na końcu prosi o prostsze wiersze.", ua: "Хтось звертається до Творця і перелічує дрібні створіння; наприкінці просить простіших віршів." } },
          { id: "b", label: { pl: "Bóg w sześciu dniach oddziela światłość od ciemności i stwarza człowieka z żebra.", ua: "Бог за шість днів відділяє світло від темряви і творить людину з ребра." } },
          { id: "c", label: { pl: "Komiks: przybysz mówi PYK! i złości się na Ziemian.", ua: "Комікс: прибулець каже PYK! і злиться на землян." } }
        ],
        answer: "a",
        hint: {
          pl: "Czy w Twardowskim jest «dzień czwarty» albo PYK!?",
          ua: "Чи в Твардовського є «четвертий день» або PYK!?"
        },
        explanation: {
          pl: "Wiersz: zwrot do Stwórcy + lista drobiazgów + prośba o prostszą poezję. Sześć dni — lekcja 15. PYK! — komiks.",
          ua: "Вірш: звертання до Творця + список дрібниць + прохання простішої поезії."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa z pól", ua: "Слова з полів" },
      promptPlace: "before",
      prompt: {
        pl: "Dwie glosy z pól s. 39. Znaczenie *w tym tekście*. To gatunki roślin, nie bogowie z Olimpu.",
        ua: "Дві глоси з полів с. 39. Значення *в цьому тексті*. Це види рослин, не боги з Олімпу."
      },
      rows: [
        { pl: "zawilec — gatunek rośliny, kwiat", ua: "zawilec — вид рослини, квітка" },
        { pl: "czosnek niedźwiedzi — gatunek rośliny jadalnej i leczniczej", ua: "czosnek niedźwiedzi — вид їстівної і лікарської рослини" },
        { pl: "adresat — ten, do kogo zwraca się wypowiedź (tu: «Ty»)", ua: "adresat — той, до кого звернена висловлювання (тут: «Ty»)" },
        { pl: "apostrofa — zwrot do kogoś lub czegoś (lekcja 2)", ua: "apostrofa — звертання до когось або чогось (урок 2)" }
      ],
      task: {
        id: "t17-s06-glosy",
        type: "single-choice",
        question: {
          pl: "Która para jest poprawna *w tym tekście*?",
          ua: "Яка пара правильна *в цьому тексті*?"
        },
        options: [
          { id: "a", label: { pl: "zawilec = kwiat / gatunek rośliny; czosnek niedźwiedzi = roślina jadalna i lecznicza.", ua: "zawilec = квітка / вид рослини; czosnek niedźwiedzi = їстівна і лікарська рослина." } },
          { id: "b", label: { pl: "zawilec = Cerber; czosnek niedźwiedzi = sklepienie nieba.", ua: "zawilec = Цербер; czosnek niedźwiedzi = склепіння неба." } },
          { id: "c", label: { pl: "Obie glosy oznaczają «werset» z Księgi Rodzaju.", ua: "Обидві глоси означають «вірш» з Книги Буття." } }
        ],
        answer: "a",
        hint: {
          pl: "Pomarańczowe pola na s. 39. Czy tam jest Cerber?",
          ua: "Помаранчеві поля на с. 39. Чи там Цербер?"
        },
        explanation: {
          pl: "Pola: zawilec – kwiat; czosnek niedźwiedzi – roślina jadalna i lecznicza. Cerber i sklepienie — inne lekcje.",
          ua: "Поля: zawilec – квітка; czosnek niedźwiedzi – їстівна і лікарська рослина."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Apostrofa · Ty który", ua: "Апострофа · Ty który" },
      formula: "lekcja 2  ·  zwrot",
      promptPlace: "before",
      prompt: {
        pl: "W lekcji 2 apostrofa to zwrot do kogoś. Tu pierwsze słowa: *Ty który stwarzasz…* Ktoś mówi — do kogoś.",
        ua: "На уроці 2 апострофа — звертання до когось. Тут перші слова: *Ty który stwarzasz…* Хтось каже — до когось."
      },
      text: {
        pl: [
          "Podmiot liryczny (osoba mówiąca w wierszu) zwraca się do adresata.",
          "Adresat to nie to samo co autor. Jan Twardowski *napisał* wiersz. W tekście ktoś mówi «Ty» do tego, który stwarza jagody.",
          "To nie list do kolegi i nie Zeus na Olimpie — szukaj w *tym* utworze."
        ],
        ua: [
          "Liryczny суб’єкт (особа, що говорить у вірші) звертається до адресата.",
          "Адресат — не те саме, що автор. Ян Твардовський *написав* вірш. У тексті хтось каже «Ty» до того, хто творить ягоди.",
          "Це не лист до однокласника і не Зевс на Олімпі — шукай *у цьому* творі."
        ]
      },
      task: {
        id: "t17-s07-apostrofa",
        type: "true-false",
        question: {
          pl: "Czy zdanie «Ty który stwarzasz jagody» jest apostrofą — zwrotem do kogoś?",
          ua: "Чи речення «Ty który stwarzasz jagody» є апострофою — звертанням до когось?"
        },
        answer: true,
        hint: {
          pl: "Czy jest słowo «Ty» i zwrot do adresata? Tak było w definicji z lekcji 2.",
          ua: "Чи є слово «Ty» і звертання до адресата? Так було в означенні з уроку 2."
        },
        explanation: {
          pl: "Tak: «Ty który…» to zwrot. Apostrofa. Adresata opiszesz w następnym zadaniu.",
          ua: "Так: «Ty który…» — звертання. Апострофа. Адресата опишеш у наступному завданні."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 1 · adresat", ua: "Завд. 1 · адресат" },
      formula: "s. 39  ·  schemat",
      promptPlace: "before",
      prompt: {
        pl: "Przedstaw adresata wypowiedzi. Na podstawie tekstu uzupełnij schemat: Kim jest? Co robi? Jakie ma możliwości? Najpierw zeszyt — potem klucz.",
        ua: "Представ адресата висловлювання. За текстом заповни схему: Хто він? Що робить? Які має можливості? Спочатку зошит."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t17-adresat.png", {
            alt: {
              pl: "Schemat: ADRESAT — Kim jest? Co robi? Jakie ma możliwości?",
              ua: "Схема: ADRESAT — Хто? Що робить? Які можливості?"
            },
            title: { pl: "Slajd · schemat adresata", ua: "Слайд · схема адресата" },
            prompt: {
              pl: IMG_STYLE + " Wstaw schemat ze s. 39: na środku koło z napisem ADRESAT (napis może być na slajdzie jako etykieta schematu). Trzy pytania dookoła: «Kim jest?» (góra), «Co robi?» (lewo), «Jakie ma możliwości?» (prawo). Delikatne zielone liście / iskierki jak w podręczniku. Przytnij znak wodny. PNG poziomy.",
              ua: "Схема зі с. 39: ADRESAT і три питання. Акварель, без водяного знака."
            }
          }),
          text: {
            pl: "Odpowiedzi bierz z wiersza, nie z Wikipedii. Szukaj czasowników: stwarzasz, spraw.",
            ua: "Відповіді бери з вірша, не з Вікіпедії. Шукай дієслова: stwarzasz, spraw."
          }
        },
        {
          formula: "KLUCZ  ·  z tekstu",
          text: {
            pl: [
              "Kim jest? Stwórca / Bóg — ten, do kogo podmiot mówi «Ty który stwarzasz…». Nie Zeus, nie kolega, nie sam tytuł książki.",
              "Co robi? Stwarza drobny świat: jagody, królika z marchewką, lato, cień liści, zawilec, czosnek niedźwiedzi, wydrę, ślimaka, śnieg, serce.",
              "Jakie ma możliwości? Może stwarzać przyrodę i dać «serce choćby na chwilę»; może spełnić prośbę: sprawić, żeby poeci pisali prościej."
            ],
            ua: [
              "Хто? Творець / Бог — той, до кого суб’єкт каже «Ty który stwarzasz…». Не Зевс, не однокласник.",
              "Що робить? Творить дрібний світ: ягоди, кролика, літо, тінь, zawilec, czosnek, видру, слимака, сніг, серце.",
              "Які можливості? Може творити природу і дати «serce choćby na chwilę»; може вчинити, щоб поети писали простіше."
            ]
          }
        }
      ],
      task: {
        id: "t17-s08-adresat",
        type: "multiple-choice",
        question: {
          pl: "Które informacje o adresacie wynikają z *tego* wiersza? Zaznacz wszystkie pewne.",
          ua: "Які відомості про адресата випливають з *цього* вірша? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Kim jest: ten, który stwarza (Stwórca) — «Ty który…».", ua: "Хто: той, хто творить (Творець) — «Ty który…»." } },
          { id: "b", label: { pl: "Co robi: stwarza jagody, zwierzęta, rośliny, śnieg, serce.", ua: "Що робить: творить ягоди, звірів, рослини, сніг, серце." } },
          { id: "c", label: { pl: "Kim jest: Zeus na Olimpie z piorunem.", ua: "Хто: Зевс на Олімпі з блискавкою." } },
          { id: "d", label: { pl: "Możliwości: może sprawić, by poeci pisali wiersze prostsze.", ua: "Можливості: може вчинити, щоб поети писали простіші вірші." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Olimp jest w lekcji 14. Jakie «Ty» stoi w pierwszej linijce Twardowskiego?",
          ua: "Олімп — урок 14. Яке «Ty» стоїть у першому рядку Твардовського?"
        },
        explanation: {
          pl: "Adresat = Stwórca z tego wiersza: stwarza drobiazgi i może spełnić prośbę. Zeus tu nie występuje.",
          ua: "Адресат = Творець з цього вірша. Зевса тут немає."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Czytanie na głos", ua: "Читання вголос" },
      formula: "s. 39  ·  recytacja",
      promptPlace: "before",
      prompt: {
        pl: "Program: recytacja. Przeczytaj wiersz tak, żeby było słychać *wyliczenie* (jagody, królik, ślimak…) i *prośbę* na końcu (spraw / niech…). Pauza przed «spraw».",
        ua: "Програма: декламація. Прочитай так, щоб було чути *перелік* і *прохання* в кінці. Пауза перед «spraw»."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Wskazówki: wolno; «Ty» trochę wyraźniej; nazwy roślin i zwierząt bez pośpiechu; ostatnie dwa wersy ciszej, jak prośba, nie jak krzyk.",
            ua: "Повільно; «Ty» виразніше; назви рослин і звірів без поспіху; останні два рядки тихіше, як прохання."
          }
        },
        {
          formula: "WZÓR zasad  ·  EduMost",
          text: {
            pl: [
              "Lista stworzeń = katalog: po każdej linijce mikro pauza.",
              "«serce choćby na chwilę» — najwolniej, to most do lekcji 18.",
              "«spraw» samo w wersie: oddech, potem «niech poeci…»."
            ],
            ua: [
              "Список створінь = каталог: після рядка мікропауза.",
              "«serce choćby na chwilę» — найповільніше, місток до уроку 18.",
              "«spraw» окремим рядком: вдих, потім «niech poeci…»."
            ]
          }
        }
      ],
      task: {
        id: "t17-s09-czytanie",
        type: "single-choice",
        question: {
          pl: "Jak NA PEWNO warto przeczytać końcówkę tego wiersza?",
          ua: "Як НАПЕВНО варто прочитати кінцівку цього вірша?"
        },
        options: [
          { id: "a", label: { pl: "Z pauzą przed «spraw» — to prośba, nie komenda na boisku.", ua: "З паузою перед «spraw» — це прохання, не команда на полі." } },
          { id: "b", label: { pl: "Krzyczeć «PYK!» jak w komiksie z lekcji 12.", ua: "Кричати «PYK!» як у коміксі з уроку 12." } },
          { id: "c", label: { pl: "Pominąć dwie ostatnie linijki, bo «nie są ważne».", ua: "Пропустити два останні рядки, бо «не важливі»." } }
        ],
        answer: "a",
        hint: {
          pl: "Ostatnie dwa wersy są osobną zwrotką. Jaki to rodzaj wypowiedzi: rozkaz na wf czy prośba?",
          ua: "Останні два рядки — окрема строфа. Це наказ на фізрі чи прохання?"
        },
        explanation: {
          pl: "«Spraw / niech poeci…» to prośba. Jutro ją wyjaśnisz. PYK! tu nie pasuje. Końcówki nie wycinamy.",
          ua: "«Spraw / niech poeci…» — прохання. Завтра його поясниш."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Po lekcji umiem — notatka", ua: "Після уроку вмію — нотатка" },
      promptPlace: "after",
      prompt: {
        pl: "To zabierasz do zeszytu. Jutro: «serce choćby na chwilę», prośba, opowiadanie.",
        ua: "Це забираєш у зошит. Завтра: «serce choćby na chwilę», прохання, оповідання."
      },
      items: [
        { pl: "Jan Twardowski, *Który stwarzasz jagody* — wiersz, nie Biblia i nie mit.", ua: "Ян Твардовський, *Który stwarzasz jagody* — вірш, не Біблія і не міф." },
        { pl: "Apostrofa: «Ty który stwarzasz…». Adresat = Stwórca: stwarza drobny świat, może dać serce i spełnić prośbę o prostsze wiersze.", ua: "Апострофа: «Ty który stwarzasz…». Адресат = Творець: творить дрібний світ, може дати серце і вчинити простіші вірші." },
        { pl: "zawilec = kwiat; czosnek niedźwiedzi = roślina jadalna i lecznicza.", ua: "zawilec = квітка; czosnek niedźwiedzi = їстівна і лікарська рослина." },
        { pl: "Lekcja 18: przenośnia, zad. 2–5 (s. 40).", ua: "Урок 18: переносний смисл, завд. 2–5 (с. 40)." }
      ],
      task: {
        id: "t17-s10-notatka",
        type: "single-choice",
        question: {
          pl: "Która notatka pokazuje, że umiesz to, czego wymaga lekcja 17?",
          ua: "Яка нотатка показує, що вмієш те, чого вимагає урок 17?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Wiersz Twardowskiego. Adresat = Stwórca («Ty który»). Glosy: zawilec, czosnek niedźwiedzi. To nie Zeus i nie Księga Rodzaju.",
              ua: "Вірш Твардовського. Адресат = Творець («Ty który»). Глоси: zawilec, czosnek niedźwiedzi. Це не Зевс і не Книга Буття."
            }
          },
          { id: "b", label: { pl: "Sześć dni stwarzania i Omne Bonum — nic więcej.", ua: "Шість днів творення і Omne Bonum — більше нічого." } },
          { id: "c", label: { pl: "Dziś trzeba oddać gotowe opowiadanie na stronę 40.", ua: "Сьогодні треба здати готове оповідання на сторінку 40." } }
        ],
        answer: "a",
        hint: {
          pl: "Co jest na s. 39? Wiersz, glosy, zad. 1. Gdzie jest zad. 5?",
          ua: "Що на с. 39? Вірш, глоси, завд. 1. Де завд. 5?"
        },
        explanation: {
          pl: "Lekcja 17 = s. 39: treść i adresat. Sześć dni i Omne Bonum — 15–16. Opowiadanie — 18.",
          ua: "Урок 17 = с. 39. Шість днів і Omne Bonum — 15–16. Оповідання — 18."
        }
      }
    }
  ]
};
