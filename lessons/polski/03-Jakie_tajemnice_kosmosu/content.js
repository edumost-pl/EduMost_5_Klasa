function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    // S01
    {
      type: "goal",
      heading: { pl: "Tajemnice kosmosu", ua: "Таємниці космосу" },
      formula: "język polski  ·  opis zdjęcia i pytania  ·  s. 12",
      promptPlace: "before",
      prompt: {
        pl: "To lekcja języka polskiego, nie astronomii. Dziś uczysz się opisywać zdjęcie i zadawać ciekawe pytania.",
        ua: "Це урок польської мови, не астрономії. Сьогодні вчишся описувати світлину і ставити цікаві питання."
      },
      items: [
        {
          pl: "opisywać to, co widzisz na zdjęciu;",
          ua: "описувати те, що бачиш на світлині;"
        },
        {
          pl: "dobierać słowa do miejsca, obiektu i tego, co się dzieje;",
          ua: "добірати слова до місця, об’єкта і того, що відбувається;"
        },
        {
          pl: "porównywać obiekty (przypomina, wygląda jak, ma kształt);",
          ua: "порівнювати об’єкти;"
        },
        {
          pl: "zadawać pytania z różnymi pytajnikami;",
          ua: "ставити питання з різними питальними словами;"
        },
        {
          pl: "układać własne pytania o kosmosie.",
          ua: "самостійно складати свої питання про космос."
        }
      ]
    },
    // S02
    {
      type: "observe",
      heading: { pl: "Przyjrzyj się zdjęciu", ua: "Придивись до світлини" },
      visual: vizGh("t3-ziemia-kosmos.png", {
        alt: {
          pl: "Kula ziemska w czerni kosmosu",
          ua: "Земля як куля в чорноті космосу"
        },
        title: { pl: "Ziemia w kosmosie", ua: "Земля в космосі" },
        prompt: {
          pl: "Edukacyjna ilustracja 16:9, klasa 5. Kula ziemska (błękit, biel chmur, odrobina zieleni) na pierwszym planie, w tle głęboka czerń kosmosu i kilka gwiazd. Cienka poświata atmosfery. Ciepła akwarela, bez grozy, bez logotypów, bez angielskiego, bez napisów.",
          ua: "Освітня ілюстрація 16:9: Земля як куля, чорний космос, кілька зірок, акварель, без логотипів."
        }
      }),
      promptPlace: "after",
      prompt: {
        pl: "Nie pisz jeszcze długiego opisu. Najpierw zobacz: co jest blisko, co w tle, jakie kolory.",
        ua: "Ще не пиши довгий опис. Спочатку подивись: що близько, що в тлі, які кольори."
      },
      text: {
        pl: [
          "Na zdjęciach z podręcznika (s. 12) widać kosmos. Tu masz ilustrację do ćwiczenia opisu.",
          "Pytania pomocnicze: Co widzisz? Co jest na pierwszym planie? Co jest w tle? Jakie kolory zauważasz?"
        ],
        ua: [
          "На світлинах у підручнику (с. 12) видно космос. Тут ілюстрація, щоб учитися опису.",
          "Допоміжні питання: Що бачиш? Що на передньому плані? Що в тлі? Які кольори?"
        ]
      },
      task: {
        id: "t3-s02-plan",
        type: "single-choice",
        question: {
          pl: "Co znajduje się na pierwszym planie?",
          ua: "Що на передньому плані?"
        },
        options: [
          {
            id: "a",
            label: { pl: "kula ziemska (Ziemia jako kula)", ua: "земна куля (Земля як куля)" }
          },
          {
            id: "b",
            label: { pl: "szkolna klasa i tablica", ua: "шкільний клас і дошка" }
          },
          {
            id: "c",
            label: { pl: "las i rzeka", ua: "ліс і річка" }
          }
        ],
        answer: "a",
        hint: {
          pl: "Pierwszy plan to to, co widać najbliżej, największe na ilustracji.",
          ua: "Передній план — те, що найближче, найбільше на ілюстрації."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To nie zdjęcie klasy. Na ilustracji jest Ziemia w kosmosie.",
              ua: "Це не світлина класу. На ілюстрації Земля в космосі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Las i rzeka byłyby krajobrazem na Ziemi. Tu patrzysz na Ziemię z kosmosu.",
              ua: "Ліс і річка були б краєвидом на Землі. Тут дивишся на Землю з космосу."
            }
          }
        ],
        explanation: {
          pl: "Na pierwszym planie jest kula ziemska. W tle — czerń kosmosu i gwiazdy. Kolory: błękit, biel, zieleń, czerń.",
          ua: "На передньому плані — земна куля. У тлі — чорнота космосу і зірки."
        }
      }
    },
    // S03
    {
      type: "concept",
      heading: { pl: "Słowa do opisu: przestrzeń", ua: "Слова до опису: простір" },
      promptPlace: "before",
      prompt: {
        pl: "Grupa A. Miejsce. Nie ucz się listy na pamięć — zrozum różnicę i użyj słowa w zdaniu.",
        ua: "Група A. Місце. Не вчи список напам’ять — зрозумій різницю і вживай слово в реченні."
      },
      visual: vizGh("t3-ziemia-kosmos.png", {
        alt: {
          pl: "Kula ziemska w czerni kosmosu",
          ua: "Земля як куля в чорноті космосу"
        },
        title: { pl: "Ziemia w kosmosie", ua: "Земля в космосі" },
        prompt: {
          pl: "Edukacyjna ilustracja 16:9, klasa 5. Kula ziemska (błękit, biel chmur, odrobina zieleni) na pierwszym planie, w tle głęboka czerń kosmosu i kilka gwiazd. Cienka poświata atmosfery. Ciepła akwarela, bez grozy, bez logotypów, bez angielskiego, bez napisów.",
          ua: "Освітня ілюстрація 16:9: Земля як куля, чорний космос, кілька зірок, акварель, без логотипів."
        }
      }),
      items: [
        {
          pl: "*niebo* — przestrzeń nad nami. Tam są chmury, słońce, księżyc, gwiazdy. Przykład: Na niebie widać gwiazdy.",
          ua: "niebo — небо, простір над нами."
        },
        {
          pl: "*czerń* — bardzo głęboki czarny kolor, taki jak noc bez świateł. Przykład: W tle widać czerń kosmosu.",
          ua: "czerń — глибока чорнота."
        },
        {
          pl: "*otchłań* — bardzo głęboka, ogromna przestrzeń, której końca nie widać. Przykład: Gwiazdy toną w otchłani kosmosu.",
          ua: "otchłań — безодня: величезний простір без видимого кінця."
        },
        {
          pl: "*kosmos* — przestrzeń poza Ziemią, tam są planety i gwiazdy. Przykład: W kosmosie jest bardzo ciemno.",
          ua: "kosmos — космос."
        },
        {
          pl: "*Wszechświat* — wszystko, co istnieje: Ziemia, planety, gwiazdy, galaktyki. Jeszcze szersze słowo niż kosmos. Przykład: Wszechświat jest pełen tajemnic.",
          ua: "Wszechświat — Всесвіт: усе, що існує."
        }
      ],
      task: {
        id: "t3-s03-otchlan",
        type: "single-choice",
        question: {
          pl: "Które słowo najlepiej pasuje do zdania: „Gwiazdy toną w ogromnej przestrzeni, której końca nie widać”?",
          ua: "Яке слово найкраще пасує: «Зірки тонуть у величезному просторі, кінця якого не видно»?"
        },
        options: [
          { id: "a", label: { pl: "otchłań", ua: "otchłań" } },
          { id: "b", label: { pl: "księżyc", ua: "księżyc" } },
          { id: "c", label: { pl: "kula ziemska", ua: "kula ziemska" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj słowa, które znaczy: ogromna przestrzeń bez widocznego końca — nie obiekt.",
          ua: "Шукай слово на величезний простір без кінця — не об’єкт."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Księżyc to obiekt na niebie, satelita Ziemi. Tu mowa o przestrzeni, nie o księżycu.",
              ua: "Księżyc — об’єкт на небі, супутник Землі. Тут ідеться про простір."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Kula ziemska to Ziemia przedstawiona jako kula. Tu chodzi o przestrzeń wokół — otchłań.",
              ua: "Kula ziemska — Земля як куля. Тут ідеться про простір — otchłań."
            }
          }
        ],
        explanation: {
          pl: "Otchłań to ogromna, głęboka przestrzeń. Księżyc i kula ziemska to obiekty, nie przestrzeń. Czerń to kolor. Niebo jest bliżej nas; kosmos i Wszechświat to szersze nazwy przestrzeni.",
          ua: "Otchłań — величезний глибокий простір. Księżyc і kula ziemska — об’єкти, не простір."
        }
      }
    },
    // S04
    {
      type: "concept",
      heading: { pl: "Słowa do opisu: obiekty", ua: "Слова до опису: об’єкти" },
      visual: vizGh("t3-ziemia-kosmos.png", {
        alt: {
          pl: "Kula ziemska w kosmosie",
          ua: "Земна куля в космосі"
        },
        title: { pl: "Co to za obiekt?", ua: "Що це за об’єкт?" },
        prompt: {
          pl: "Ta sama edukacyjna ilustracja 16:9: kula ziemska na tle czerni kosmosu, kilka gwiazd, akwarela, bez logotypów, bez napisów.",
          ua: "Та сама ілюстрація: Земля як куля на тлі космосу."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Grupa B. Obiekty. To nie lekcja astronomii — tylko tyle, żeby dobrze dobrać słowo przy opisie.",
        ua: "Група B. Об’єкти. Не астрономія — лише стільки, щоб правильно дібрати слово в описі."
      },
      items: [
        {
          pl: "*ciało niebieskie* — ogólna nazwa obiektu w kosmosie: gwiazda, planeta, księżyc. Przykład: Słońce jest ciałem niebieskim.",
          ua: "ciało niebieskie — небесне тіло: загальна назва."
        },
        {
          pl: "*planeta* — konkretny rodzaj ciała niebieskiego, które krąży wokół gwiazdy. Przykład: Ziemia jest planetą.",
          ua: "planeta — планета: конкретний вид небесного тіла."
        },
        {
          pl: "*kula ziemska* — Ziemia przedstawiona jako kula (tak często widać ją na zdjęciu z kosmosu). Przykład: Na zdjęciu widać kulę ziemską.",
          ua: "kula ziemska — земна куля: Земля як куля."
        },
        {
          pl: "*księżyc* — naturalny satelita; nasz Księżyc krąży wokół Ziemi. Przykład: Na niebie widać księżyc.",
          ua: "księżyc — місяць, природний супутник."
        }
      ],
      task: {
        id: "t3-s04-obiekt",
        type: "single-choice",
        question: {
          pl: "Co najdokładniej nazywa obiekt na tym zdjęciu?",
          ua: "Що найточніше називає об’єкт на цій світлині?"
        },
        options: [
          { id: "a", label: { pl: "kula ziemska", ua: "kula ziemska" } },
          { id: "b", label: { pl: "księżyc", ua: "księżyc" } },
          { id: "c", label: { pl: "otchłań", ua: "otchłań" } }
        ],
        answer: "a",
        hint: {
          pl: "Widać błękit, chmury i kształt kuli. To Ziemia, nie szary księżyc i nie sama przestrzeń.",
          ua: "Видно блакить, хмари і форму кулі. Це Земля, не сірий місяць і не сам простір."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Księżyc jest szary, bez błękitnych oceanów. Tu widać Ziemię — kulę ziemską.",
              ua: "Місяць сірий, без блакитних океанів. Тут видно Землю — kulę ziemską."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Otchłań to przestrzeń, nie obiekt. Obiektem na zdjęciu jest kula ziemska. (Ciało niebieskie też pasuje, ale jest ogólniejsze.)",
              ua: "Otchłań — простір, не об’єкт. Тут kula ziemska. (Ciało niebieskie теж пасує, але загальніше.)"
            }
          }
        ],
        explanation: {
          pl: "Najdokładniej: kula ziemska. To też planeta i ciało niebieskie — ale przy opisie zdjęcia warto być precyzyjnym: widać Ziemię jako kulę.",
          ua: "Найточніше: kula ziemska. Це також planeta і ciało niebieskie, але в описі світлини варто бути точним."
        }
      }
    },
    // S05
    {
      type: "concept",
      heading: { pl: "Co widać na obrazie?", ua: "Що видно на зображенні?" },
      promptPlace: "before",
      prompt: {
        pl: "Grupa C. Czasowniki opisu. Klikaj „Pokaż następny krok” — te słowa są podobne, więc oglądamy je po kolei.",
        ua: "Група C. Дієслова опису. Натискай «Показати наступний крок» — слова схожі, тому дивимось по черзі."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: [
              [em("wyłania się"), " — coś stopniowo staje się widoczne, kawałek po kawałku."],
              "Przykład: Księżyc wyłania się zza chmur.",
              [em("pojawia się"), " — zaczyna być widoczne. Może stać się widoczne od razu, niekoniecznie powoli."],
              "Przykład: Na niebie pojawia się pierwsza gwiazda."
            ],
            ua: [
              "wyłania się — поступово з’являється, стає видимим.",
              "Приклад: Місяць виринає з-за хмар.",
              "pojawia się — з’являється, починає бути видимим (не обов’язково повільно).",
              "Приклад: На небі з’являється перша зірка."
            ]
          }
        },
        {
          text: {
            pl: [
              [em("ukazuje się"), " — coś pokazuje się nam, staje się dobrze widoczne."],
              "Przykład: Spoza chmur ukazuje się księżyc.",
              [em("widnieje"), " — już jest na obrazie, jest widoczne (nie „zaczyna się pojawiać”, tylko już to widać)."],
              "Przykład: Na zdjęciu widnieje kula ziemska.",
              "Różnica: wyłania się / pojawia się / ukazuje się = ruch, początek widoczności. widnieje = już tam jest."
            ],
            ua: [
              "ukazuje się — показується, стає добре видимим.",
              "Приклад: З-за хмар показується місяць.",
              "widnieje — видніється, уже є видимим на зображенні.",
              "Приклад: На світлині видніється земна куля.",
              "Різниця: перші три — початок видимості. widnieje — уже видно."
            ]
          }
        },
        {
          text: {
            pl: [
              [em("rozświetla"), " — daje światło, sprawia, że coś staje się jaśniejsze."],
              "Przykład: Słońce rozświetla niebo.",
              [em("rozpościera się"), " — zajmuje dużą przestrzeń, rozciąga się szeroko. Przykład: Nad Ziemią rozpościera się czerń kosmosu."],
              [em("otacza"), " — jest dookoła czegoś. Przykład: Czerń kosmosu otacza kulę ziemską."],
              [em("wyróżnia się"), " — jest łatwo zauważalne, zwraca uwagę. Przykład: Na czarnym tle wyróżnia się jasna planeta."]
            ],
            ua: [
              "rozświetla — освітлює, робить щось яскравішим.",
              "Приклад: Сонце освітлює небо.",
              "rozpościera się — простягається, займає великий простір. otacza — оточує, є довкола.",
              "wyróżnia się — виділяється, привертає увагу."
            ]
          }
        }
      ],
      task: {
        id: "t3-s05-wylania",
        type: "single-choice",
        question: {
          pl: "Księżyc powoli staje się widoczny zza chmur. Które wyrażenie pasuje najlepiej?",
          ua: "Місяць повільно стає видимим з-за хмар. Який вислів пасує найкраще?"
        },
        options: [
          { id: "a", label: { pl: "wyłania się", ua: "wyłania się" } },
          { id: "b", label: { pl: "widnieje", ua: "widnieje" } },
          { id: "c", label: { pl: "rozświetla", ua: "rozświetla" } }
        ],
        answer: "a",
        hint: {
          pl: "Zwróć uwagę na słowo „powoli” i „zza chmur”. Coś dopiero staje się widoczne.",
          ua: "Зверни увагу на «повільно» і «з-за хмар». Щось щойно стає видимим."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Widnieje znaczy: już jest widoczne na obrazie. Tu księżyc dopiero powoli wychodzi zza chmur — wyłania się.",
              ua: "Widnieje — уже видно. Тут місяць щойно повільно виходить з-за хмар — wyłania się."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Rozświetla znaczy: daje światło. Księżyc może świecić, ale tu ważne jest to, że powoli staje się widoczny — wyłania się.",
              ua: "Rozświetla — дає світло. Тут важливо, що місяць повільно стає видимим — wyłania się."
            }
          }
        ],
        explanation: {
          pl: "Wyłania się = stopniowo, kawałek po kawałku. Pojawia się też znaczy „zaczyna być widoczne”, ale bez tego „powoli”. Widnieje = już widać. Rozświetla = daje światło.",
          ua: "Wyłania się = поступово. Pojawia się теж «починає бути видимим», але не обов’язково повільно. Widnieje = уже видно. Rozświetla = дає світло."
        }
      }
    },
    // S06
    {
      type: "comparison",
      heading: { pl: "Porównujemy", ua: "Порівнюємо" },
      visual: vizGh("t3-ksiezyc.png", {
        alt: {
          pl: "Księżyc w kształcie półkola na nocnym niebie",
          ua: "Місяць у формі півкола на нічному небі"
        },
        title: { pl: "Księżyc i kształt", ua: "Місяць і форма" },
        prompt: {
          pl: "Edukacyjna ilustracja 16:9, klasa 5. Nocne niebo, księżyc w kształcie jasnego półkola, delikatne chmury. Akwarela, spokojny nastrój, bez logotypów, bez angielskiego, bez napisów.",
          ua: "Освітня ілюстрація 16:9: ніч, місяць-півколо, хмари, акварель, без логотипів."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Grupa D. Te cztery konstrukcje są bliskie, ale nie identyczne. Popatrz na przykłady.",
        ua: "Група D. Порівняння. Чотири конструкції близькі, але не однакові."
      },
      items: [
        {
          pl: "*przypomina* — jest podobne do czegoś. Przykład: Mgławica przypomina kolorowy kwiat.",
          ua: "przypomina — нагадує, схоже на щось."
        },
        {
          pl: "*jest podobna do* — ktoś/coś ma cechy kogoś/czegoś (tu: planeta podobna do kuli). Przykład: Planeta jest podobna do kuli.",
          ua: "*jest podobna do* — подібна до (з do)."
        },
        {
          pl: "*ma kształt* — jego forma jest jak… Przykład: Księżyc ma kształt półkola.",
          ua: "ma kształt — має форму."
        },
        {
          pl: "*wygląda jak* — wydaje się podobne, gdy na to patrzymy. Przykład: Ta chmura wygląda jak statek.",
          ua: "wygląda jak — виглядає як (коли дивимось)."
        }
      ],
      task: {
        id: "t3-s06-ksztalt",
        type: "single-choice",
        question: {
          pl: "Która konstrukcja najlepiej pasuje: „Księżyc ______ półkola”?",
          ua: "Яка конструкція найкраще пасує: «Księżyc ______ półkola»?"
        },
        options: [
          { id: "a", label: { pl: "ma kształt", ua: "ma kształt" } },
          { id: "b", label: { pl: "wyłania się", ua: "wyłania się" } },
          { id: "c", label: { pl: "otacza", ua: "otacza" } }
        ],
        answer: "a",
        hint: {
          pl: "Mówimy o formie, o tym, jaki ten księżyc JEST z wyglądu — nie o tym, że wychodzi zza chmur.",
          ua: "Йдеться про форму, а не про те, що місяць виходить з-за хмар."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wyłania się mówi, że coś powoli staje się widoczne. Tu pytamy o FORMĘ: ma kształt półkola.",
              ua: "Wyłania się — поступово стає видимим. Тут питаємо про ФОРМУ: ma kształt półkola."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Otacza znaczy: jest dookoła. Księżyc nie otacza półkola — on ma kształt półkola.",
              ua: "Otacza — оточує. Місяць не оточує півкола — він має форму півкола."
            }
          }
        ],
        explanation: {
          pl: "Ma kształt + dopełniacz: ma kształt kuli / półkola. Przypomina kwiat (bez „do”). Jest podobna do kuli (z do). Wygląda jak statek (z jak).",
          ua: "ma kształt півкола. przypomina kwiat (без do). jest podobna do kuli (з do). wygląda jak statek (з jak)."
        }
      }
    },
    // S07
    {
      type: "guided-practice",
      heading: { pl: "Zbuduj opis", ua: "Побудуй опис" },
      visual: vizGh("t3-ziemia-kosmos.png", {
        alt: {
          pl: "Kula ziemska na tle czerni kosmosu",
          ua: "Земна куля на тлі чорноти космосу"
        },
        title: { pl: "Opisz to zdjęcie", ua: "Опиши цю світлину" },
        prompt: {
          pl: "Ta sama ilustracja 16:9: kula ziemska, czerń kosmosu, gwiazdy. Akwarela, bez logotypów.",
          ua: "Та сама ілюстрація: земна куля, космос, зірки."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Teraz składamy słowa. Myśl: CO? GDZIE? JAKIE? JAK WYGLĄDA? CO SIĘ DZIEJE?",
        ua: "Тепер складаємо слова. Думай: ЩО? ДЕ? ЯКЕ? ЯК ВИГЛЯДАЄ? ЩО ВІДБУВАЄТЬСЯ?"
      },
      text: {
        pl: [
          "Ramki do opisu:",
          "Na zdjęciu widnieje ______.",
          "W tle znajduje się ______.",
          "Na czarnym tle wyróżnia się ______.",
          "______ ma kształt ______."
        ],
        ua: [
          "Рамки для опису:",
          "На світлині видніється ______.",
          "У тлі є ______.",
          "На чорному тлі виділяється ______.",
          "______ має форму ______."
        ]
      },
      task: {
        id: "t3-s07-widnieje",
        type: "input-text",
        question: {
          pl: "Uzupełnij: Na zdjęciu widnieje ______.",
          ua: "Доповни: Na zdjęciu widnieje ______."
        },
        answer: [
          "kula ziemska",
          "kula ziemska.",
          "Ziemia",
          "Ziemia.",
          "planeta",
          "planeta.",
          "planeta Ziemia",
          "planeta Ziemia.",
          "ciało niebieskie",
          "ciało niebieskie."
        ],
        hint: {
          pl: "Co jest na pierwszym planie? Wpisz obiekt, nie kolor.",
          ua: "Що на передньому плані? Впиши об’єкт, не колір."
        },
        explanation: {
          pl: "Model: Na zdjęciu widnieje kula ziemska. W tle znajduje się czerń kosmosu. Na czarnym tle wyróżnia się błękitna planeta. Kula ziemska ma kształt kuli. (Można też: Ziemia / planeta — ale kula ziemska jest najdokładniejsze.)",
          ua: "Зразок: Na zdjęciu widnieje kula ziemska. У тлі — czerń kosmosu. На чорному тлі виділяється блакитна планета."
        }
      }
    },
    // S08
    {
      type: "concept",
      heading: { pl: "Ludzie i kosmos", ua: "Люди і космос" },
      visual: vizGh("t3-niebo-ludzie.png", {
        alt: {
          pl: "Dzieci patrzą w gwiaździste niebo",
          ua: "Діти дивляться в зоряне небо"
        },
        title: { pl: "Dlaczego ludzie patrzą w niebo?", ua: "Чому люди дивляться в небо?" },
        prompt: {
          pl: "Edukacyjna ilustracja 16:9, klasa 5. Dwoje dzieci odwróconych plecami, patrzą w górę na nocne gwiaździste niebo. Spokój i ciekawość, bez grozy. Akwarela, bez logotypów, bez angielskiego, bez napisów na ubraniach.",
          ua: "Освітня ілюстрація 16:9: двоє дітей дивляться в зоряне небо, акварель, без логотипів."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Druga ramka z podręcznika: czasowniki. Nie pokazujemy wszystkich 22 naraz — tylko grupy i przykłady.",
        ua: "Друга рамка з підручника: дієслова. Не всі 22 одразу — групи і приклади."
      },
      items: [
        {
          pl: "MYŚLĄ / PLANUJĄ: zastanawiają się, przewidują, planują, rozpamiętują. Przykład: Ludzie zastanawiają się, czy istnieje życie na innych planetach.",
          ua: "Думають / планують: zastanawiają się (міркують), przewidują, planują, rozpamiętują (довго згадують)."
        },
        {
          pl: "ROZMAWIAJĄ / INFORMACJE: rozmawiają, pytają, dowiadują się, orientują się, wspominają. Przykład: Dzieci pytają, gdzie jest Księżyc.",
          ua: "Розмовляють / інформація: rozmawiają, pytają, dowiadują się, orientują się, wspominają."
        },
        {
          pl: "CZUJĄ: marzą, uśmiechają się, martwią się, smucą się, dziwią się, podziwiają, modlą się. Przykład: Dzieci podziwiają nocne niebo.",
          ua: "Почуття: marzą, uśmiechają się, martwią się, smucą się, dziwią się, podziwiają, modlą się."
        },
        {
          pl: "SZUKAJĄ / OBSERWUJĄ: badają, obserwują, szukają, odkrywają, wpatrują się, liczą. Przykład: Naukowcy badają kosmos. Astronomowie obserwują gwiazdy. Dzieci wpatrują się w niebo. Liczą gwiazdy.",
          ua: "Шукають / спостерігають: badają, obserwują, szukają, odkrywają, wpatrują się, liczą."
        }
      ],
      task: {
        id: "t3-s08-obserwuje",
        type: "single-choice",
        question: {
          pl: "Naukowiec patrzy przez teleskop. Który czasownik pasuje najlepiej?",
          ua: "Науковець дивиться в телескоп. Яке дієслово пасує найкраще?"
        },
        options: [
          { id: "a", label: { pl: "obserwuje", ua: "obserwuje" } },
          { id: "b", label: { pl: "smuci się", ua: "smuci się" } },
          { id: "c", label: { pl: "wspomina", ua: "wspomina" } }
        ],
        answer: "a",
        hint: {
          pl: "Teleskop służy do uważnego patrzenia. Które słowo znaczy: uważnie patrzeć, śledzić?",
          ua: "Телескоп — щоб уважно дивитися. Яке слово означає: уважно дивитися, стежити?"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Smucić się to być smutnym. Teleskop nie mówi, że naukowiec jest smutny — on obserwuje.",
              ua: "Smucić się — сумувати. Телескоп не означає смуток — науковець obserwuje."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wspominać to myśleć o tym, co było kiedyś. Przy teleskopie naukowiec patrzy teraz — obserwuje.",
              ua: "Wspominać — згадувати минуле. Біля телескопа науковець дивиться зараз — obserwuje."
            }
          }
        ],
        explanation: {
          pl: "Obserwuje = uważnie patrzy (np. przez teleskop). Bada = szuka odpowiedzi, prowadzi badania. Wpatruje się = długo, nieruchomo patrzy. Podziwia = patrzy z zachwytem.",
          ua: "obserwuje = уважно дивиться. bada = досліджує. wpatruje się = довго вдивляється. podziwia = дивиться із захопленням."
        }
      }
    },
    // S09
    {
      type: "practice",
      heading: { pl: "Wybierz właściwy czasownik", ua: "Вибери правильне дієслово" },
      promptPlace: "before",
      prompt: {
        pl: "Trzy sytuacje. Zaznacz wszystkie poprawne pary. Po błędzie przeczytaj, DLACZEGO inne słowo nie pasuje.",
        ua: "Три ситуації. Познач усі правильні пари. Після помилки прочитай, ЧОМУ інше слово не пасує."
      },
      text: {
        pl: [
          "*bada* — szuka odpowiedzi, prowadzi badania.",
          "*obserwuje* — uważnie patrzy i śledzi.",
          "*wpatruje się* — długo, nieruchomo patrzy.",
          "*podziwia* — patrzy z zachwytem."
        ],
        ua: [
          "bada — досліджує, шукає відповідь.",
          "obserwuje — уважно дивиться.",
          "wpatruje się — довго вдивляється.",
          "podziwia — захоплюється, дивиться з подивом."
        ]
      },
      task: {
        id: "t3-s09-pary",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz wszystkie prawdziwe dopasowania.",
          ua: "Познач усі правильні відповідності."
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Astronom patrzy długo na gwiazdy przez teleskop. → obserwuje",
              ua: "Астроном довго дивиться на зірки в телескоп. → obserwuje"
            }
          },
          {
            id: "b",
            label: {
              pl: "Dzieci patrzą z zachwytem na nocne niebo. → podziwiają",
              ua: "Діти дивляться із захопленням на нічне небо. → podziwiają"
            }
          },
          {
            id: "c",
            label: {
              pl: "Naukowcy próbują znaleźć odpowiedź na trudne pytanie. → zastanawiają się",
              ua: "Науковці намагаються знайти відповідь на складне питання. → zastanawiają się"
            }
          },
          {
            id: "d",
            label: {
              pl: "Astronom patrzy przez teleskop. → smuci się",
              ua: "Астроном дивиться в телескоп. → smuci się"
            }
          },
          {
            id: "e",
            label: {
              pl: "Dzieci patrzą z zachwytem na niebo. → planują",
              ua: "Діти дивляться із захопленням на небо. → planują"
            }
          }
        ],
        answer: ["a", "b", "c"],
        hint: {
          pl: "Odrzuć emocję bez dowodu (smuci się) i planowanie bez planu (planują). Zostaw: uważne patrzenie, zachwyt, szukanie odpowiedzi.",
          ua: "Відкинь емоцію без доказу (smuci się) і планування без плану. Залиш: уважний погляд, захоплення, пошук відповіді."
        },
        explanation: {
          pl: "a) teleskop → obserwuje (uważnie patrzy). b) zachwyt → podziwiają. c) trudne pytanie → zastanawiają się. d) smuci się = jest smutny; teleskop tego nie mówi. e) planują = układają plan; zachwyt to podziw, nie plan.",
          ua: "a) телескоп → obserwuje. b) захоплення → podziwiają. c) важке питання → zastanawiają się. d) smuci się — сум без доказу. e) planują — це план, не захоплення."
        }
      }
    },
    // S10
    {
      type: "concept",
      heading: { pl: "Jak zadawać pytania?", ua: "Як ставити питання?" },
      promptPlace: "before",
      prompt: {
        pl: "Pytajnik to słowo, od którego zaczyna się pytanie. Nie ucz się definicji — zobacz, O CO pyta.",
        ua: "Питальне слово — з нього починається питання. Не вчи визначення — подивись, ПРО ЩО питає."
      },
      items: [
        {
          pl: "KTO? — o osobę. Przykład: Kto patrzy w niebo?",
          ua: "KTO? — про особу."
        },
        {
          pl: "CO? — o rzecz, zjawisko, treść. Przykład: Co widzisz?",
          ua: "CO? — про річ, явище, зміст."
        },
        {
          pl: "GDZIE? — o miejsce. Przykład: Gdzie znajduje się planeta?",
          ua: "GDZIE? — про місце."
        },
        {
          pl: "KIEDY? — o czas. Przykład: Kiedy widać gwiazdy?",
          ua: "KIEDY? — про час."
        },
        {
          pl: "JAK? — o sposób. Przykład: Jak wygląda zdjęcie?",
          ua: "JAK? — про спосіб."
        },
        {
          pl: "JAKA / JAKIE? — o cechę. Przykład: Jaka jest czerń kosmosu?",
          ua: "JAKA / JAKIE? — про рису, ознаку."
        },
        {
          pl: "ILE? — o liczbę. Przykład: Ile gwiazd widać na zdjęciu?",
          ua: "ILE? — про кількість."
        },
        {
          pl: "DLACZEGO? — o powód. Przykład: Dlaczego ludzie badają kosmos?",
          ua: "DLACZEGO? — про причину."
        },
        {
          pl: "CZY? — pytanie, na które odpowiadamy tak albo nie. Przykład: Czy istnieje życie poza Ziemią?",
          ua: "CZY? — питання так / ні."
        }
      ],
      task: {
        id: "t3-s10-dlaczego",
        type: "single-choice",
        question: {
          pl: "Które pytanie pyta o powód?",
          ua: "Яке питання питає про причину?"
        },
        options: [
          { id: "a", label: { pl: "Dlaczego ludzie badają kosmos?", ua: "Dlaczego ludzie badają kosmos?" } },
          { id: "b", label: { pl: "Gdzie znajduje się planeta?", ua: "Gdzie znajduje się planeta?" } },
          { id: "c", label: { pl: "Czy istnieje życie poza Ziemią?", ua: "Czy istnieje życie poza Ziemią?" } }
        ],
        answer: "a",
        hint: {
          pl: "Powód = dla jakiej przyczyny. Które słowo na początku o to pyta?",
          ua: "Причина = чому так є. Яке слово на початку про це питає?"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Gdzie pyta o miejsce, nie o powód. O powód pyta Dlaczego?",
              ua: "Gdzie питає про місце, не про причину. Про причину питає Dlaczego?"
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Czy? to pytanie tak / nie. Nie pyta „z jakiego powodu”, tylko czy coś jest prawdą.",
              ua: "Czy? — питання так / ні. Не питає «з якої причини»."
            }
          }
        ],
        explanation: {
          pl: "Dlaczego? = powód. Gdzie? = miejsce. Czy? = tak / nie. Co? = treść. Jak? = sposób. Kto? = osoba.",
          ua: "Dlaczego? = причина. Gdzie? = місце. Czy? = так / ні. Co? = зміст. Jak? = спосіб. Kto? = особа."
        }
      }
    },
    // S11
    {
      type: "guided-practice",
      heading: { pl: "Z pytajnika do pełnego pytania", ua: "Від питального слова до повного питання" },
      visual: vizGh("t3-ziemia-kosmos.png", {
        alt: {
          pl: "Kosmos i kula ziemska",
          ua: "Космос і земна куля"
        },
        title: { pl: "Zadaj pytanie o zdjęcie", ua: "Постав питання про світлину" },
        prompt: {
          pl: "Ta sama ilustracja 16:9: kula ziemska w czerni kosmosu. Akwarela, bez napisów.",
          ua: "Та сама ілюстрація: земна куля в космосі."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Najpierw zobacz wzór, potem napisz własne pytanie od Co.",
        ua: "Спочатку подивись зразок, потім напиши своє питання від Co."
      },
      text: {
        pl: [
          "Wzór: Co widzisz?",
          "Inne starty: Kto…? Gdzie…? Dlaczego…? Jak…?",
          "Pytanie zaczyna się wielką literą i kończy znakiem ?."
        ],
        ua: [
          "Зразок: Co widzisz?",
          "Інші початки: Kto…? Gdzie…? Dlaczego…? Jak…?",
          "Питання з великої літери і зі знаком ?."
        ]
      },
      task: {
        id: "t3-s11-co",
        type: "input-text",
        question: {
          pl: "Napisz pełne pytanie od Co o tym zdjęciu.",
          ua: "Напиши повне питання від Co про цю світлину."
        },
        answer: [
          "Co widzisz?",
          "Co widzisz na zdjęciu?",
          "Co widać na zdjęciu?",
          "Co znajduje się na zdjęciu?",
          "Co znajduje się na pierwszym planie?",
          "Co jest na zdjęciu?",
          "Co jest na pierwszym planie?",
          "Co widnieje na zdjęciu?"
        ],
        hint: {
          pl: "Zacznij od Co, napisz resztę (np. widzisz / widać na zdjęciu) i postaw znak zapytania.",
          ua: "Почни з Co, допиши решту (наприклад widzisz / widać na zdjęciu) і постав знак питання."
        },
        explanation: {
          pl: "Dobrze: Co widzisz? / Co widzisz na zdjęciu? / Co znajduje się na zdjęciu? Wielka litera i znak ? są częścią pytania.",
          ua: "Добре: Co widzisz? / Co widzisz na zdjęciu? Велика літера і знак ? — частина питання."
        }
      }
    },
    // S12
    {
      type: "practice",
      heading: { pl: "Dlaczego ludzie patrzą w niebo?", ua: "Чому люди дивляться в небо?" },
      visual: vizGh("t3-niebo-ludzie.png", {
        alt: {
          pl: "Ludzie patrzą w niebo",
          ua: "Люди дивляться в небо"
        },
        title: { pl: "Pytanie z ramki czasowników", ua: "Питання з рамки дієслів" },
        prompt: {
          pl: "Ta sama ilustracja: dzieci patrzą w gwiaździste niebo. Akwarela, bez logotypów.",
          ua: "Та сама ілюстрація: діти дивляться в зоряне небо."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "W podręczniku (zad. 2) rozmawiacie, dlaczego — waszym zdaniem — ludzie patrzą w niebo. Najpierw wzór, potem wybierz czasownik i pełne pytanie.",
        ua: "У підручнику (завд. 2) говорите, чому — на вашу думку — люди дивляться в небо. Спочатку зразок, потім вибери дієслово і повне питання."
      },
      text: {
        pl: [
          "Wzór: Dlaczego ludzie patrzą w niebo?",
          "Teraz wstaw czasownik z ramki: badają, obserwują, podziwiają, marzą, pytają, odkrywają…"
        ],
        ua: [
          "Зразок: Dlaczego ludzie patrzą w niebo?",
          "Тепер встав дієслово з рамки: badają, obserwują, podziwiają…"
        ]
      },
      task: {
        id: "t3-s12-pytanie",
        type: "single-choice",
        question: {
          pl: "Które pytanie jest poprawne i używa czasownika z ramki?",
          ua: "Яке питання правильне і використовує дієслово з рамки?"
        },
        options: [
          {
            id: "a",
            label: { pl: "Dlaczego ludzie badają kosmos?", ua: "Dlaczego ludzie badają kosmos?" }
          },
          {
            id: "b",
            label: { pl: "Dlaczego ludzie uśmiechają kosmos?", ua: "Dlaczego ludzie uśmiechają kosmos?" }
          },
          {
            id: "c",
            label: { pl: "Badają dlaczego kosmos ludzie?", ua: "Badają dlaczego kosmos ludzie?" }
          }
        ],
        answer: "a",
        hint: {
          pl: "Pytanie: pytajnik + kto + czasownik + dopełnienie + ?. Czasownik musi pasować do kosmosu.",
          ua: "Питання: питальне слово + хто + дієслово + додаток + ?. Дієслово має пасувати до космосу."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Uśmiechają się (z się) — i uśmiechamy się do kogoś, nie „uśmiechamy kosmos”. Poprawnie: Dlaczego ludzie badają kosmos? Albo: Czy ludzie uśmiechają się, gdy patrzą w niebo?",
              ua: "Uśmiechają się (з się) — усміхаємось до когось, не «усміхаємо космос». Правильно: Dlaczego ludzie badają kosmos?"
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szyk jest zły. W pytaniu pytajnik stoi na początku: Dlaczego ludzie badają kosmos?",
              ua: "Порядок слів неправильний. Питальне слово на початку: Dlaczego ludzie badają kosmos?"
            }
          }
        ],
        explanation: {
          pl: "Wzór: Dlaczego ludzie + czasownik + kosmos? Np. Dlaczego ludzie badają kosmos? Czy naukowcy odkryją nowe planety? Nie dawaj od razu gotowej odpowiedzi na wszystko — najpierw pytanie.",
          ua: "Зразок: Dlaczego ludzie + дієслово + kosmos? Напр. Dlaczego ludzie badają kosmos? Czy naukowcy odkryją nowe planety?"
        }
      }
    },
    // S13
    {
      type: "challenge",
      heading: { pl: "Mapa tajemnic", ua: "Мапа таємниць" },
      promptPlace: "before",
      prompt: {
        pl: "Sam układasz pytania o kosmosie. Minimum: 1× Dlaczego?, 1× Czy?, 1 dowolne. Tu wpisz pytanie z Czy. Dwa pozostałe — w zeszycie.",
        ua: "Сам складаєш питання про космос. Мінімум: 1× Dlaczego?, 1× Czy?, 1 будь-яке. Тут впиши питання з Czy. Два інші — у зошиті."
      },
      items: [
        {
          pl: "Dlaczego…? (w zeszycie) — np. Dlaczego ludzie badają kosmos?",
          ua: "Dlaczego…? (у зошиті)"
        },
        {
          pl: "Czy…? (tu) — pytanie tak / nie.",
          ua: "Czy…? (тут) — питання так / ні."
        },
        {
          pl: "Dowolne: Gdzie…? / Jak…? / Kiedy…? / Kto…? (w zeszycie)",
          ua: "Будь-яке: Gdzie / Jak / Kiedy / Kto (у зошиті)"
        }
      ],
      text: {
        pl: "Pomoc: badają, obserwują, podziwiają, marzą, pytają, odkrywają, wpatrują się.",
        ua: "Підказка-дієслова: badają, obserwują, podziwiają, marzą, pytają, odkrywają, wpatrują się."
      },
      task: {
        id: "t3-s13-czy",
        type: "input-text",
        question: {
          pl: "Napisz własne pytanie zaczynające się od Czy (o kosmosie).",
          ua: "Напиши своє питання, що починається з Czy (про космос)."
        },
        answer: [
          "Czy istnieje życie poza Ziemią?",
          "Czy istnieje życie na innych planetach?",
          "Czy na innych planetach jest życie?",
          "Czy naukowcy odkryją nowe planety?",
          "Czy ludzie polecą na Marsa?",
          "Czy ludzie polecą w kosmos?",
          "Czy na Księżycu jest woda?",
          "Czy kosmos ma koniec?",
          "Czy Wszechświat ma koniec?",
          "Czy gwiazdy zawsze świecą?",
          "Czy można zamieszkać na innej planecie?",
          "Czy ludzie odkryją życie w kosmosie?",
          "Czy astronomowie obserwują gwiazdy?",
          "Czy dzieci podziwiają nocne niebo?",
          "Czy warto badać kosmos?"
        ],
        hint: {
          pl: "Zacznij od Czy, potem reszta pytania i znak ?. Np. Czy istnieje życie poza Ziemią?",
          ua: "Почни з Czy, далі решта питання і знак ?. Напр. Czy istnieje życie poza Ziemią?"
        },
        explanation: {
          pl: "Pytanie z Czy kończy się znakiem ? i oczekuje tak / nie. Sprawdź zeszyt: 1) Dlaczego…? 2) Czy…? 3) inne pytajnik. Wielka litera na początku.",
          ua: "Питання з Czy закінчується ? і чекає так / ні. Перевір зошит: 1) Dlaczego…? 2) Czy…? 3) інше питальне слово."
        }
      }
    },
    // S14
    {
      type: "summary",
      heading: { pl: "Po tej lekcji potrafię", ua: "Після цього уроку я вмію" },
      items: [
        {
          pl: "opisać zdjęcie: co widnieje, co się wyróżnia, jaki ma kształt;",
          ua: "описати світлину: що видніється, що виділяється, яку має форму;"
        },
        {
          pl: "użyć słów z ramek — nie jako listy, tylko w zdaniu;",
          ua: "вживати слова з рамок — не як список, а в реченні;"
        },
        {
          pl: "sformułować pytanie (Co? Gdzie? Dlaczego? Czy?);",
          ua: "сформулювати питання;"
        },
        {
          pl: "wyjaśnić, dlaczego wybrałem dane słowo (np. wyłania się, a nie widnieje).",
          ua: "пояснити, чому вибрав саме це слово."
        }
      ],
      promptPlace: "after",
      prompt: {
        pl: "Mini-check. Potem możesz wrócić do wcześniejszych ekranów.",
        ua: "Міні-перевірка. Потім можна повернутися до попередніх екранів."
      },
      task: {
        id: "t3-s14-check",
        type: "single-choice",
        question: {
          pl: "Które zdanie poprawnie opisuje zdjęcie kuli ziemskiej w kosmosie?",
          ua: "Яке речення правильно описує світлину земної кулі в космосі?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Na zdjęciu widnieje kula ziemska. Na czarnym tle wyróżnia się błękitna planeta.",
              ua: "На світлині видніється земна куля. На чорному тлі виділяється блакитна планета."
            }
          },
          {
            id: "b",
            label: {
              pl: "Na zdjęciu widnieje kula ziemska wygląda jak otchłań ma kształt.",
              ua: "На світлині видніється земна куля виглядає як безодня має форму."
            }
          },
          {
            id: "c",
            label: {
              pl: "Księżyc wyłania się zza chmur, więc to na pewno zdjęcie lasu.",
              ua: "Місяць виринає з-за хмар, отже це точно світлина лісу."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj pełnych, naturalnych zdań. Słowa z ramki mają tworzyć opis, nie stos.",
          ua: "Шукай повні, природні речення. Слова з рамки мають складати опис, не купу слів."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tu słowa z ramki są wrzucone obok siebie, bez sensu. Opis to zdania: widnieje…, wyróżnia się…, ma kształt kuli.",
              ua: "Тут слова з рамки звалені докупи. Опис — це речення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wyłania się może pasować do księżyca zza chmur, ale to nie opis kuli ziemskiej w kosmosie i nie las.",
              ua: "Wyłania się може пасувати до місяця з-за хмар, але це не опис земної кулі і не ліс."
            }
          }
        ],
        explanation: {
          pl: "Po lekcji umiesz: Na zdjęciu widnieje… / wyróżnia się… / ma kształt… oraz pytania: Co widzisz? Dlaczego ludzie badają kosmos? Czy istnieje życie poza Ziemią?",
          ua: "Після уроку вмієш описувати світлину і складати питання: Co…? Dlaczego…? Czy…?"
        }
      }
    }
  ]
};
