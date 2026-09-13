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
      heading: { pl: "Kim jest podmiot liryczny?", ua: "Хто такий podmiot liryczny?" },
      formula: "liryka  ·  osoba mówiąca  ·  s. 18–19",
      promptPlace: "before",
      prompt: {
        pl: "W T2 pytaliśmy: kto mówi w wierszu? Dziś nauczymy się, jak nazywa się ta osoba w języku polonistycznym — i jak odróżnić ją od autora.",
        ua: "У T2 ми питали: хто говорить у вірші? Сьогодні дізнаєшся назву цього поняття."
      },
      items: [
        { pl: "znajdę osobę mówiącą w wierszu;", ua: "знайду особу, яка говорить у вірші;" },
        { pl: "odczytam z tekstu, jak wygląda i co robi;", ua: "з тексту прочитаю, як виглядає і що робить;" },
        { pl: "odróżnię autora od podmiotu lirycznego;", ua: "відрізню автора від podmiotu lirycznego;" },
        { pl: "samodzielnie rozpoznam podmiot liryczny w nowym wierszu.", ua: "самостійно впізнаю podmiot liryczny у новому вірші." }
      ]
    },
    // S02
    {
      type: "observe",
      heading: { pl: "Przeczytaj „Noc”", ua: "Прочитай «Noc»" },
      formula: "Antoni Wic  ·  Noc",
      visual: vizGh("t6-noc-ksiezyc.png", {
        place: "after",
        alt: {
          pl: "Noc: księżyc, płaszcz z nitką Drogi Mlecznej, ciche pole",
          ua: "Ніч: місяць, плащ із ниткою Чумацького Шляху"
        },
        title: { pl: "Przy wierszu", ua: "До вірша" },
        prompt: {
          pl: "Edukacyjna ilustracja 16:9, klasa 5. Spokojna noc: duży księżyc, drobny gwiezdny pył, długi ciemny płaszcz z srebrną nitką Drogi Mlecznej, bez twarzy, bez grozy, akwarela. Bez logotypów, bez angielskiego, bez napisów, bez watermarku.",
          ua: "Освітня ілюстрація: ніч, місяць, плащ, акварель, без логотипів."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Przeczytaj wiersz dwa razy. 1) Za pierwszym razem: co się dzieje? 2) Za drugim razem: kto mówi? Wiersza nie tłumaczymy na ukraiński.",
        ua: "Прочитай вірш двічі. 1) Що відбувається? 2) Хто говорить? Вірш не перекладаємо."
      },
      text: {
        pl: [
          "Przychodzę o zmierzchu,",
          "witam się z księżycem.",
          "Milkną już ostatnie świerszcze.",
          "Mój płaszcz przetykany",
          "Mlecznej Drogi nitką",
          "szeleści...",
          " ",
          "– Uśnijcie mili wreszcie!",
          " ",
          "Gwiezdnym pyłem prószę",
          "i otwieram wrota",
          "snom...",
          " ",
          "– W podróż się wybierzcie!",
          " ",
          "Śpiewam kołysankę",
          "o baśniowych krainach",
          "nucę...",
          " ",
          "– Do świtu śnijcie, marzcie!"
        ]
      },
      task: {
        id: "t6-s02-relacja",
        type: "single-choice",
        question: {
          pl: "Co dzieje się w wierszu? (Jeszcze nie o terminie „podmiot”.)",
          ua: "Що відбувається у вірші? (Ще не про термін.)"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Ktoś przychodzi wieczorem, wita księżyc, usypia ludzi i otwiera sny — aż do świtu.",
              ua: "Хтось приходить увечері, вітає місяць, заколисує людей і відкриває сни — до світанку."
            }
          },
          {
            id: "b",
            label: {
              pl: "Zaczyna się poranek: świt, ptak i kasztany (jak w „Preludium”).",
              ua: "Починається ранок: світанок, птах і каштани (як у «Preludium»)."
            }
          },
          {
            id: "c",
            label: {
              pl: "Ktoś pisze sprawdzian z ortografii.",
              ua: "Хтось пише контрольну з орфографії."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Zobacz początek: „Przychodzę o zmierzchu”. Potem: uśnijcie, sny, świt.",
          ua: "Подивись початок: «Przychodzę o zmierzchu». Потім: uśnijcie, sny, świt."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To nie „Preludium”. Tu jest zmierzch, księżyc i kołysanka — wieczór / noc, nie poranek.",
              ua: "Це не «Preludium». Тут zmierzch, місяць і колискова — вечір / ніч."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "W wierszu nie ma szkoły. Jest zmierzch, księżyc, sny i kołysanka.",
              ua: "У вірші немає школи. Є сутінки, місяць, сни і колискова."
            }
          }
        ],
        explanation: {
          pl: "Głos w wierszu przychodzi o zmierzchu, usypia „milych”, sieje gwiezdny pył, otwiera wrota snom i śpiewa aż do świtu. Kim jest ten głos — sprawdzimy dalej.",
          ua: "Голос приходить увечері, заколисує, відкриває сни і співає до світанку."
        }
      }
    },
    // S03
    {
      type: "concept",
      heading: { pl: "Słowa, które pomagają zrozumieć", ua: "Слова, які допомагають зрозуміти" },
      promptPlace: "before",
      prompt: {
        pl: "Nie ucz się listy na pamięć. Klikaj „Pokaż następny krok”. Słowo → znaczenie → UA → fragment wiersza.",
        ua: "Не вчи список напам’ять. Слово → значення → UA → уривок."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: [
              [em("zmierzch"), " — czas, kiedy kończy się dzień i zaczyna noc."],
              "W wierszu: „Przychodzę o zmierzchu.”"
            ],
            ua: ["сутінки — коли день кінчається і починається ніч."]
          }
        },
        {
          text: {
            pl: [
              [em("szeleści"), " — wydaje cichy, szeleszczący dźwięk (jak tkanina)."],
              "W wierszu: płaszcz „szeleści...”"
            ],
            ua: ["шелестить — тихий шелест тканини."]
          }
        },
        {
          text: {
            pl: [
              [em("prószę"), " (tu od prószyć) — sypię drobno, jak pył lub mąkę."],
              "W wierszu: „Gwiezdnym pyłem prószę” — nie myl z „proszę” (= uprzejma prośba)."
            ],
            ua: ["тут: дрібно сиплю (зоряний пил), не «будь ласка»."]
          }
        },
        {
          text: {
            pl: [
              [em("wrota"), " — duże drzwi, brama."],
              "W wierszu: „otwieram wrota / snom...”"
            ],
            ua: ["ворота, великі двері."]
          }
        },
        {
          text: {
            pl: [
              [em("kołysanka"), " — cicha piosenka, która pomaga zasnąć."],
              [em("świt"), " — początek dnia, kiedy robi się jasno."],
              "W wierszu: „Śpiewam kołysankę” / „Do świtu śnijcie, marzcie!”"
            ],
            ua: ["колискова; світанок."]
          }
        }
      ],
      task: {
        id: "t6-s03-zmierzch",
        type: "single-choice",
        question: {
          pl: "Co znaczy w tym wierszu: „Przychodzę o zmierzchu”?",
          ua: "Що означає тут: «Przychodzę o zmierzchu»?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Przychodzę, gdy dzień się kończy i zaczyna noc.",
              ua: "Приходжу, коли день кінчається і починається ніч."
            }
          },
          {
            id: "b",
            label: {
              pl: "Przychodzę w południe, gdy słońce jest najwyżej.",
              ua: "Приходжу вдень, коли сонце найвище."
            }
          },
          {
            id: "c",
            label: {
              pl: "Przychodzę na sprawdzian z matematyki.",
              ua: "Приходжу на контрольну з математики."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Zmierzch ≠ świt. Świt jest na końcu wiersza („Do świtu…”).",
          ua: "Zmierzch ≠ świt. Світанок — в кінці вірша."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Południe to środek dnia. Zmierzch to początek nocy. Świt — jasny poranek.",
              ua: "Полудень — середина дня. Zmierzch — початок ночі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "W wierszu nie ma szkoły. Zmierzch = koniec dnia, początek nocy.",
              ua: "У вірші немає школи. Zmierzch = кінець дня."
            }
          }
        ],
        explanation: {
          pl: "Przydatne też: świerszcze (owady, które cykają wieczorem); płaszcz przetykany nitką = w tkaninie wpleciona nitka Drogi Mlecznej; marzcie = śnijcie, wyobrażajcie sobie.",
          ua: "Ще: świerszcze — цвіркуни; marzcie — мрійте / сніть."
        }
      }
    },
    // S04
    {
      type: "guided-practice",
      heading: { pl: "Kto mówi te słowa?", ua: "Хто каже ці слова?" },
      promptPlace: "before",
      prompt: {
        pl: "Nie podajemy jeszcze nazwy. Słuchaj głosu: „Przychodzę…”, „witam się…”, „Mój płaszcz…”, „Śpiewam kołysankę…”",
        ua: "Ще без терміна. Слухай голос: Przychodzę, witam się, Mój płaszcz, Śpiewam."
      },
      text: {
        pl: [
          "Przychodzę o zmierzchu,",
          "witam się z księżycem.",
          "Mój płaszcz przetykany",
          "Mlecznej Drogi nitką",
          "szeleści...",
          "Śpiewam kołysankę",
          "o baśniowych krainach",
          "nucę..."
        ],
        ua: ["Шукай у цих рядках, хто говорить. Не з підпису «Antoni Wic»."]
      },
      task: {
        id: "t6-s04-kto-glos",
        type: "single-choice",
        question: {
          pl: "Kto mówi te słowa — i czy to zwykły człowiek z imieniem i nazwiskiem w wierszu?",
          ua: "Хто каже ці слова — і чи це звичайна людина з прізвищем у вірші?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Głos postaci nocy: przychodzi, wita księżyc, ma płaszcz z nitką Drogi Mlecznej, śpiewa kołysankę. To nie podpis „Antoni Wic”.",
              ua: "Голос постаті ночі: приходить, вітає місяць, має плащ, співає колискову. Це не підпис «Antoni Wic»."
            }
          },
          {
            id: "b",
            label: {
              pl: "Na pewno Antoni Wic, bo on napisał wiersz — w tekście nie trzeba szukać.",
              ua: "Напевно Antoni Wic, бо він написав вірш — у тексті шукати не треба."
            }
          },
          {
            id: "c",
            label: {
              pl: "Mówi świerszcz, bo milkną świerszcze.",
              ua: "Говорить цвіркун, бо свєрщі затихають."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj form: przychodzę, witam się, mój, śpiewam. Co ta osoba ROBI i co MA?",
          ua: "Шукай: przychodzę, witam się, mój, śpiewam."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Autor napisał utwór. Teraz pytamy, czyj GŁOS słychać w wersach. Tego głosu szukamy w tekście.",
              ua: "Автор написав твір. Зараз питаємо, чий ГОЛОС у рядках."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Świerszcze milkną — to tło. Mówi ktoś, kto ma płaszcz i śpiewa kołysankę.",
              ua: "Цвіркуни затихають — це тло. Говорить той, хто має плащ і співає."
            }
          }
        ],
        explanation: {
          pl: "Z tekstu: przychodzi o zmierzchu, wita się z księżycem, ma płaszcz, sieje gwiezdny pył, otwiera wrota snom, śpiewa, mówi do ludzi/snów. To postać nocy — nie definicja na razie, tylko wniosek z wiersza.",
          ua: "З тексту: постать ночі, не прізвище з підпису."
        }
      }
    },
    // S05
    {
      type: "practice",
      heading: { pl: "Jak wygląda? Co robi?", ua: "Як виглядає? Що робить?" },
      promptPlace: "before",
      prompt: {
        pl: "Zadanie jak 1a ze s. 19. Nie zgaduj z obrazka. Każda informacja ma fragment w wierszu.",
        ua: "Не з малюнка. Кожна інформація — з вірша."
      },
      items: [
        { pl: "Jak wygląda? → szukaj: płaszcz, nitka, Mleczna Droga.", ua: "Як виглядає? плащ, нитка, Чумацький Шлях." },
        { pl: "Czym się zajmuje? → szukaj: przychodzę, witam, prószę, otwieram, śpiewam, nucę.", ua: "Що робить? przychodzę, witam, prószę, otwieram, śpiewam." }
      ],
      task: {
        id: "t6-s05-wyglad",
        type: "multiple-choice",
        question: {
          pl: "Co naprawdę wynika z tekstu o osobie mówiącej? Zaznacz wszystkie odpowiedzi z wiersza.",
          ua: "Що справді випливає з тексту? Познач усі відповіді з вірша."
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Ma płaszcz przetykany nitką Mlecznej Drogi (szeleści).",
              ua: "Має плащ із ниткою Чумацького Шляху."
            }
          },
          {
            id: "b",
            label: {
              pl: "Sieje gwiezdny pył, otwiera wrota snom, śpiewa kołysankę.",
              ua: "Сипле зоряний пил, відчиняє ворота снам, співає колискову."
            }
          },
          {
            id: "c",
            label: {
              pl: "Mówi: „Uśnijcie mili wreszcie!”, „W podróż się wybierzcie!”, „Do świtu śnijcie, marzcie!”",
              ua: "Каже: Uśnijcie… W podróż… Do świtu śnijcie…"
            }
          },
          {
            id: "d",
            label: {
              pl: "Ma czerwony rower i dzwonek — tego w wierszu nie ma.",
              ua: "Має червоний велосипед — цього у вірші немає."
            }
          }
        ],
        answer: ["a", "b", "c"],
        hint: {
          pl: "Wróć do wiersza (Wstecz / kropki). Które zdania cytują wersy, a które dopisują rower?",
          ua: "Повернись до вірша. Що є в рядках, а що дописане?"
        },
        explanation: {
          pl: "Źródło w tekście: płaszcz + nitka; gwiezdny pył, wrota snom, kołysanka; trzy zwroty do śpiących. Roweru nie ma — nie zgadujemy z ilustracji.",
          ua: "Усе з вірша, не з малюнка. Велосипеда немає."
        }
      }
    },
    // S06
    {
      type: "concept",
      heading: { pl: "Osoba mówiąca = podmiot liryczny", ua: "Особа, яка говорить = podmiot liryczny" },
      formula: "osoba mówiąca  =  podmiot liryczny",
      promptPlace: "before",
      prompt: {
        pl: "Dopiero TERAZ nazwa. W T2 już pytaliśmy „kto mówi?”. Dziś: jak to się nazywa.",
        ua: "Щойно ТЕПЕР назва. У T2 вже було «хто говорить?»."
      },
      text: {
        pl: [
          "W poezji (liryce) nadawcę wypowiedzi poetyckiej — osobę, która wyraża przeżycia, doznania, przemyślenia, poglądy albo opisuje świat — nazywamy OSOBĄ MÓWIĄCĄ albo PODMIOTEM LIRYCZNYM.",
          "Prościej: podmiot liryczny to osoba / postać / głos, który mówi w wierszu.",
          "Nie mówimy, że podmiot liryczny to zawsze autor. Wręcz przeciwnie — zaraz to rozdzielimy."
        ],
        ua: [
          "Особа, яка говорить у вірші, називається osobą mówiącą або podmiotem lirycznym.",
          "Це не завжди автор."
        ]
      },
      task: {
        id: "t6-s06-termin",
        type: "single-choice",
        question: {
          pl: "Co to jest podmiot liryczny (osoba mówiąca)?",
          ua: "Що таке podmiot liryczny (osoba mówiąca)?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Osoba / postać / głos, który mówi w wierszu.",
              ua: "Особа / постать / голос, який говорить у вірші."
            }
          },
          {
            id: "b",
            label: {
              pl: "Zawsze ten sam człowiek, który napisał wiersz — bez czytania tekstu.",
              ua: "Завжди той, хто написав вірш — без читання тексту."
            }
          },
          {
            id: "c",
            label: {
              pl: "Tytuł książki na okładce.",
              ua: "Назва книжки на обкладинці."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Prostsze zdanie z tego ekranu: kto mówi W WIERSZU?",
          ua: "Просте речення з екрана: хто говорить У ВІРШІ?"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Autor napisał. Podmiot liryczny to głos w tekście. Nie muszą być tą samą osobą.",
              ua: "Автор написав. Podmiot liryczny — голос у тексті. Це не обов’язково та сама особа."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Tytuł to „Noc”. Podmiot liryczny to ktoś, kto mówi wersami.",
              ua: "Заголовок — «Noc». Podmiot — той, хто говорить рядками."
            }
          }
        ],
        explanation: {
          pl: "Zapamiętaj parę nazw: osoba mówiąca = podmiot liryczny. To głos w wierszu, nie automatycznie autor.",
          ua: "osoba mówiąca = podmiot liryczny. Голос у вірші, не автоматично автор."
        }
      }
    },
    // S07
    {
      type: "comparison",
      heading: { pl: "Autor ≠ podmiot liryczny", ua: "Автор ≠ podmiot liryczny" },
      formula: "AUTOR  ≠  PODMIOT LIRYCZNY",
      promptPlace: "before",
      prompt: {
        pl: "To ma być bardzo jasne. Analogia: jeśli aktor mówi w filmie jako król, aktor nie staje się królem. Autor może napisać wiersz, w którym mówi inna postać.",
        ua: "Як актор у ролі короля не стає королем, так автор може створити вірш, у якому говорить інша постать."
      },
      items: [
        { pl: "AUTOR — osoba, która NAPISAŁA wiersz. Tu: Antoni Wic.", ua: "АВТОР — той, хто НАПИСАВ вірш. Тут: Antoni Wic." },
        { pl: "PODMIOT LIRYCZNY — głos / osoba / postać, która MÓWI w wierszu. Tu: postać przedstawiona jako Noc.", ua: "PODMIOT LIRYCZNY — голос / постать, яка ГОВОРИТЬ. Тут: постать Ночі." }
      ],
      task: {
        id: "t6-s07-nierowni",
        type: "true-false",
        question: {
          pl: "Czy autor musi być tą samą osobą, która mówi w wierszu?",
          ua: "Чи автор обов’язково є тією самою особою, яка говорить у вірші?"
        },
        answer: false,
        hint: {
          pl: "Antoni Wic napisał „Noc”. W wierszu mówi postać Nocy (płaszcz, księżyc, kołysanka).",
          ua: "Antoni Wic написав «Noc». У вірші говорить постать Ночі."
        },
        mistakes: [
          {
            answer: true,
            feedback: {
              pl: "Nie. Autor = kto napisał. Podmiot = kto mówi w tekście. W „Nocy” to nie to samo.",
              ua: "Ні. Автор = хто написав. Podmiot = хто говорить у тексті."
            }
          }
        ],
        explanation: {
          pl: "Antoni Wic napisał wiersz „Noc”. W wierszu mówi postać przedstawiona jako Noc. Autor i podmiot liryczny NIE muszą być tą samą osobą.",
          ua: "Автор і podmiot liryczny НЕ обов’язково одна особа."
        }
      }
    },
    // S08
    {
      type: "algorithm",
      heading: { pl: "Jak rozpoznać? Pięć pytań", ua: "Як розпізнати? П’ять питань" },
      promptPlace: "before",
      prompt: {
        pl: "Strategia do KAŻDEGO wiersza — nie tylko do „Nocy”.",
        ua: "Стратегія до БУДЬ-ЯКОГО вірша."
      },
      items: [
        { pl: "1. Kto mówi?", ua: "1. Хто говорить?" },
        { pl: "2. Co robi?", ua: "2. Що робить?" },
        { pl: "3. Co o sobie mówi?", ua: "3. Що каже про себе?" },
        { pl: "4. Do kogo mówi?", ua: "4. До кого говорить?" },
        { pl: "5. Co czuje / myśli? (jeśli widać w tekście)", ua: "5. Що відчуває / думає?" }
      ],
      task: {
        id: "t6-s08-strategia",
        type: "single-choice",
        question: {
          pl: "Do kogo — według wiersza — zwraca się ten głos? (Pytanie 4.)",
          ua: "До кого — за віршем — звертається цей голос?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Do śpiących / do ludzi (i snów): „Uśnijcie mili…”, „W podróż się wybierzcie!”, „Do świtu śnijcie, marzcie!”",
              ua: "До тих, хто має спати: Uśnijcie… W podróż… Do świtu śnijcie…"
            }
          },
          {
            id: "b",
            label: {
              pl: "Do nauczyciela matematyki — tego w wierszu nie ma.",
              ua: "До вчителя математики — цього немає."
            }
          },
          {
            id: "c",
            label: {
              pl: "Tylko do Antoniego Wica, bo on jest autorem.",
              ua: "Лише до Антоні Віца, бо він автор."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Znajdź wersy z wykrzyknikiem i formą: uśnijcie, wybierzcie, śnijcie, marzcie.",
          ua: "Знайди рядки з: uśnijcie, wybierzcie, śnijcie, marzcie."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szukaj w tekście. Są zwroty do tych, którzy mają zasnąć i śnić do świtu.",
              ua: "У тексті є звертання до тих, хто має заснути."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Autor nie jest odbiorcą tych wykrzyknień. Głos mówi do „milych”, do snów, do śpiących.",
              ua: "Автор не є адресатом цих вигуків."
            }
          }
        ],
        explanation: {
          pl: "1 Noc (głos). 2 Przychodzi, sieje pył, otwiera wrota, śpiewa. 3 „Mój płaszcz…”. 4 Do śpiących. 5 Łagodnie usypia, zaprasza do snu. Tę listę możesz zabrać do innego wiersza.",
          ua: "Ці п’ять питань можна взяти до іншого вірша."
        }
      }
    },
    // S09
    {
      type: "check",
      heading: { pl: "Ćwiczenie z „Noc”", ua: "Вправа з «Noc»" },
      promptPlace: "before",
      prompt: {
        pl: "Nie wystarczy samo słowo „Noc”. Po odpowiedzi zawsze: który fragment to potwierdza?",
        ua: "Не лише слово «Noc». Завжди: який уривок це підтверджує?"
      },
      task: {
        id: "t6-s09-dowod",
        type: "single-choice",
        question: {
          pl: "Kto jest osobą mówiącą — i który fragment to potwierdza?",
          ua: "Хто є особою, яка говорить — і який уривок це підтверджує?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Postać Nocy. Dowód m.in.: „Przychodzę o zmierzchu”, „Mój płaszcz… Mlecznej Drogi nitką”, „Śpiewam kołysankę”.",
              ua: "Постать Ночі. Доказ: Przychodzę o zmierzchu; Mój płaszcz; Śpiewam kołysankę."
            }
          },
          {
            id: "b",
            label: {
              pl: "Antoni Wic, bo pod tytułem jest jego nazwisko — fragmentu z wiersza nie trzeba.",
              ua: "Antoni Wic, бо під заголовком його прізвище — уривок не потрібен."
            }
          },
          {
            id: "c",
            label: {
              pl: "Księżyc, bo ktoś wita się z księżycem.",
              ua: "Місяць, бо хтось вітається з місяцем."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "„Witam się z księżycem” = mówiący wita KSIĘŻYC, więc sam nie jest księżycem. Szukaj „przychodzę”, „mój płaszcz”.",
          ua: "«Witam się z księżycem» = мовець вітає МІСЯЦЬ, отже сам не є місяцем."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Nazwisko pod tytułem to AUTOR. Osoba mówiąca: dowód w wersach (przychodzę, płaszcz, kołysanka).",
              ua: "Прізвище — АВТОР. Особа, яка говорить — у рядках."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Księżyc jest witany, nie mówi. Mówi ten, kto przychodzi o zmierzchu i ma płaszcz.",
              ua: "Місяць вітають, він не говорить."
            }
          }
        ],
        explanation: {
          pl: "Odpowiedź „Noc” jest dobra, gdy stoi przy niej DOWÓD z tekstu. Wygląd: płaszcz. Działania: pył, wrota, kołysanka. Zwroty: uśnijcie, śnijcie.",
          ua: "Відповідь «Noc» добра разом із ДОКАЗОМ з тексту."
        }
      }
    },
    // S10
    {
      type: "classification",
      heading: { pl: "Autor → podmiot → odbiorca", ua: "Автор → podmiot → адресат" },
      formula: "AUTOR    ↓    PODMIOT LIRYCZNY    ↓    ODBIORCA",
      promptPlace: "before",
      prompt: {
        pl: "Schemat z zad. 2b s. 19. Uzupełnij z tej lekcji, nie zgaduj.",
        ua: "Схема із завд. 2b с. 19."
      },
      items: [
        { pl: "AUTOR — Antoni Wic (napisał wiersz).", ua: "АВТОР — Antoni Wic." },
        { pl: "PODMIOT LIRYCZNY — postać / głos Nocy.", ua: "PODMIOT LIRYCZNY — постать / голос Ночі." },
        { pl: "ODBIORCA — ten, do kogo zwracają się słowa: „Uśnijcie mili wreszcie!”, „W podróż się wybierzcie!”, „Do świtu śnijcie, marzcie!”", ua: "АДРЕСАТ — той, до кого звертаються ці слова." }
      ],
      task: {
        id: "t6-s10-schemat",
        type: "single-choice",
        question: {
          pl: "Kto jest kim w tym wierszu?",
          ua: "Хто є ким у цьому вірші?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Autor: Antoni Wic. Podmiot: Noc. Odbiorca: śpiący / ci, którzy mają śnić do świtu.",
              ua: "Автор: Antoni Wic. Podmiot: Ніч. Адресат: ті, хто має спати до світанку."
            }
          },
          {
            id: "b",
            label: {
              pl: "Autor: Noc. Podmiot: Antoni Wic. Odbiorca: księżyc.",
              ua: "Автор: Ніч. Подміот: Antoni Wic. Адресат: місяць."
            }
          },
          {
            id: "c",
            label: {
              pl: "Wszyscy trzej to ta sama osoba.",
              ua: "Усі троє — та сама особа."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Pod tytułem: nazwisko autora. W wersach: kto przychodzi. Wykrzyknienia: do kogo.",
          ua: "Під заголовком: автор. У рядках: хто приходить. Вигуки: до кого."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Noc nie napisała wiersza. Antoni Wic nie mówi „mój płaszcz… nitką”. Księżyc jest witany, nie jest głównym odbiorcą „uśnijcie”.",
              ua: "Ніч не написала вірш. «Uśnijcie» — не до місяця як головного адресата."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Trzeba rozdzielić: kto napisał / kto mówi / do kogo. To trzy role.",
              ua: "Три ролі: хто написав / хто говорить / до кого."
            }
          }
        ],
        explanation: {
          pl: "Autor ≠ podmiot ≠ odbiorca. W „Nocy”: Wic → głos Nocy → śpiący. Księżyc jest tym, z kim podmiot się wita, nie tym, kto ma „uśnąć”.",
          ua: "Три різні ролі. Не змішуй їх."
        }
      }
    },
    // S11
    {
      type: "challenge",
      heading: { pl: "Mówisz głosem Nocy", ua: "Говориш голосом Ночі" },
      promptPlace: "before",
      prompt: {
        pl: "Zad. 3 s. 19: dalszy ciąg W IMIENIU NOCY (nie autora). Rymy nieobowiązkowe. Najpierw napisz 1–2 zdania (tu albo w zeszycie). Silnik nie ocenia poezji — potem zaznacz, co PASUJE do roli Nocy.",
        ua: "Продовж В ІМЕНІ НОЧІ (не автора). Рима не обов’язкова."
      },
      items: [
        { pl: "Kiedy nadejdzie noc…", ua: "Kiedy nadejdzie noc…" },
        { pl: "Zanim przyjdzie świt…", ua: "Zanim przyjdzie świt…" },
        { pl: "Moje gwiazdy…", ua: "Moje gwiazdy…" },
        { pl: "Zapraszam was…", ua: "Zapraszam was…" }
      ],
      task: {
        id: "t6-s11-kontynuacja",
        type: "multiple-choice",
        question: {
          pl: "Które wypowiedzi są w imieniu podmiotu lirycznego (Nocy)? Zaznacz wszystkie pasujące. (Twoje zdanie z zeszytu też jest dobre, jeśli jest w 1. osobie jak Noc.)",
          ua: "Які висловлювання — в імені субъекта (Ночі)? Познач усі доречні."
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Zanim przyjdzie świt, otworzę wrota snom i zaśpiewam kołysankę.",
              ua: "Zanim przyjdzie świt, otworzę wrota snom…"
            }
          },
          {
            id: "b",
            label: {
              pl: "Moje gwiazdy sypią pył; zapraszam was, uśnijcie mili.",
              ua: "Moje gwiazdy… zapraszam was, uśnijcie mili."
            }
          },
          {
            id: "c",
            label: {
              pl: "Kiedy nadejdzie noc, nucę o baśniowych krainach.",
              ua: "Kiedy nadejdzie noc, nucę o baśniowych krainach."
            }
          },
          {
            id: "d",
            label: {
              pl: "Ja, Antoni Wic, napisałem ten wiersz w zeszycie na lekcji.",
              ua: "Я, Antoni Wic, написав цей вірш."
            }
          }
        ],
        answer: ["a", "b", "c"],
        hint: {
          pl: "Noc mówi: przychodzę, śpiewam, otwieram, zapraszam. Autor mówi: „napisałem wiersz”.",
          ua: "Ніч каже: przychodzę, śpiewam, otwieram. Автор: «написав вірш»."
        },
        explanation: {
          pl: "Pasuje wszystko w 1. osobie Nocy (sny, świt, gwiazdy, kołysanka). Nie pasuje głos autora. Jeśli napisałeś podobnie w zeszycie — jest dobrze, nawet gdy rym jest inny.",
          ua: "Усе в 1. особі Ночі — добре. Голос автора — ні."
        }
      }
    },
    // S12
    {
      type: "observe",
      heading: { pl: "Nowy wiersz · transfer", ua: "Новий вірш · перенесення" },
      formula: "EduMost  ·  nowy tekst  ·  nie „Noc” i nie „Preludium”",
      promptPlace: "before",
      prompt: {
        pl: "Czy znajdziesz osobę mówiącą BEZ pomocy? To nie „Noc” i nie T2. Najpierw przeczytaj. Potem: kto mówi + jeden dowód.",
        ua: "Новий текст. Спочатку прочитай. Потім: хто говорить + один доказ."
      },
      text: {
        pl: [
          "Biegam po łące",
          "i niosę złote światło.",
          "Budzę ptaki",
          "i ogrzewam wasze okna.",
          " ",
          "– Dzień dobry, dzieci!",
          "Wstawajcie, już jasno!"
        ]
      },
      task: {
        id: "t6-s12-transfer",
        type: "single-choice",
        question: {
          pl: "Kto jest podmiotem lirycznym — i który fragment to potwierdza?",
          ua: "Хто є podmiotem lirycznym — і який уривок це підтверджує?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Głos dnia / słońca (jasne światło). Dowód: „niosę złote światło”, „ogrzewam wasze okna”, „już jasno”.",
              ua: "Голос дня / сонця. Доказ: złote światło, ogrzewam okna, już jasno."
            }
          },
          {
            id: "b",
            label: {
              pl: "Postać Nocy z poprzedniego wiersza, bo znamy „Noc”.",
              ua: "Постать Ночі з попереднього вірша."
            }
          },
          {
            id: "c",
            label: {
              pl: "Antoni Wic, bo wszystkie wiersze pisze on.",
              ua: "Antoni Wic, бо всі вірші пише він."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Nie przenoś Nocy do nowego tekstu. Szukaj: złote światło, ogrzewam, dzień dobry, jasno.",
          ua: "Не перенось Ніч у новий текст. Шукай: złote światło, jasno."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To INNY wiersz. Tu jest jasno i złote światło, nie zmierzch. Strategia: czytaj TEN tekst.",
              ua: "Це ІНШИЙ вірш. Тут світло, не zmierzch."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wic jest autorem „Nocy”, nie tego tekstu. Tu pytamy o głos W TYCH wersach.",
              ua: "Віц — автор «Nocy», не цього тексту. Питаємо про голос У ЦИХ рядках."
            }
          }
        ],
        explanation: {
          pl: "Transfer zadziałał, jeśli nie wkleiłeś Nocy ani Wica. Tu głos dnia/słońca + dowód z wersów. Odbiorca: dzieci („Dzień dobry, dzieci!”).",
          ua: "Стратегія: цей текст, не пам’ять про «Noc»."
        }
      }
    },
    // S13
    {
      type: "check",
      heading: { pl: "Mini-sprawdzenie", ua: "Міні-перевірка" },
      promptPlace: "before",
      prompt: {
        pl: "Bez szkolnej oceny. Zaznacz wszystkie zdania prawdziwe.",
        ua: "Без шкільної оцінки. Познач усі правдиві речення."
      },
      task: {
        id: "t6-s13-mix",
        type: "multiple-choice",
        question: {
          pl: "Które zdania są zgodne z lekcją?",
          ua: "Які речення згідні з уроком?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Autor „Nocy” to Antoni Wic; osoba mówiąca to postać Nocy.",
              ua: "Автор «Nocy» — Antoni Wic; особа, яка говорить — постать Ночі."
            }
          },
          {
            id: "b",
            label: {
              pl: "Autor i podmiot liryczny nie muszą być tą samą osobą.",
              ua: "Автор і podmiot liryczny не обов’язково одна особа."
            }
          },
          {
            id: "c",
            label: {
              pl: "Żeby wskazać podmiot, trzeba znaleźć fragment-dowód w tekście.",
              ua: "Щоб вказати podmiot, треба фрагмент-доказ у тексті."
            }
          },
          {
            id: "d",
            label: {
              pl: "Wystarczy powiedzieć „autor”, bez czytania wiersza.",
              ua: "Достатньо сказати «автор», не читаючи вірша."
            }
          }
        ],
        answer: ["a", "b", "c"],
        hint: {
          pl: "Odrzuć to, co każe NIE czytać wiersza.",
          ua: "Відкинь те, що каже НЕ читати вірш."
        },
        explanation: {
          pl: "Pytanie na koniec: kto mówi w wierszu? Nie myl „Antoni Wic” z „głosem / postacią Nocy”.",
          ua: "Хто говорить у вірші? Не плутай Віца з голосом Ночі."
        }
      }
    },
    // S14
    {
      type: "summary",
      heading: { pl: "Zapamiętaj · zeszyt", ua: "Запам’ятай · зошит" },
      items: [
        { pl: "Podmiot liryczny (osoba mówiąca) — osoba, postać lub głos, który wypowiada się w wierszu.", ua: "Podmiot liryczny — особа / постать / голос у вірші." },
        { pl: "Jak znaleźć? 1 KTO MÓWI? 2 Co o sobie mówi? 3 Co robi? 4 Do kogo? 5 Fragment-dowód.", ua: "Як знайти? П’ять питань + доказ." },
        { pl: "Autor — osoba, która napisała utwór. Autor ≠ podmiot liryczny.", ua: "Автор написав твір. Це не завжди субъект." },
        { pl: "Przykład: w „Nocy” Antoniego Wica podmiotem lirycznym jest postać Nocy.", ua: "У «Nocy» субъект — постать Ночі." }
      ],
      promptPlace: "after",
      prompt: {
        pl: "Do zeszytu przepisz krótko te cztery zdania — nie cały wiersz.",
        ua: "У зошит — коротко ці чотири речення, не весь вірш."
      },
      task: {
        id: "t6-s14-karta",
        type: "single-choice",
        question: {
          pl: "Kto mówi w wierszu Antoniego Wica „Noc”?",
          ua: "Хто говорить у вірші Антоні Віца «Noc»?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Postać / głos Nocy (podmiot liryczny) — nie mylić z autorem Antonim Wicem.",
              ua: "Постать / голос Ночі (podmiot liryczny) — не плутати з автором."
            }
          },
          {
            id: "b",
            label: {
              pl: "Tylko Antoni Wic, bo autor zawsze jest osobą mówiącą.",
              ua: "Лише Antoni Wic, бо автор завжди є особою, яка говорить."
            }
          },
          {
            id: "c",
            label: {
              pl: "Nikt nie mówi — wiersz nie ma głosu.",
              ua: "Ніхто не говорить — у вірші немає голосу."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Wróć do „Przychodzę o zmierzchu” i do schematu autor ≠ podmiot.",
          ua: "Повернись до «Przychodzę o zmierzchu» і до схеми автор ≠ podmiot."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wic jest autorem. W wierszu mówi postać Nocy. Nie muszą być tą samą osobą.",
              ua: "Віц — автор. У вірші говорить постать Ночі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Słychać głos: przychodzę, śpiewam, uśnijcie. To podmiot liryczny.",
              ua: "Чути голос: przychodzę, śpiewam. Це podmiot liryczny."
            }
          }
        ],
        explanation: {
          pl: "Kto mówi w wierszu? Postać / głos Nocy. Antoni Wic to autor. To jest T6.",
          ua: "Хто говорить? Постать Ночі. Віц — автор."
        }
      }
    }
  ]
};
