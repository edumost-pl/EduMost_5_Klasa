function em(text) {
  return { text: text, emphasis: true };
}

function mark(pl, plMarks, ua, uaMarks) {
  return {
    pl: { t: pl, mark: plMarks },
    ua: { t: ua, mark: uaMarks }
  };
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
    {
      type: "goal",
      heading: { pl: "Dzisiaj pracujemy z wierszem", ua: "Сьогодні працюємо з віршем" },
      promptPlace: "before",
      prompt: {
        pl: "Jan Lechoń · „Preludium” · podręcznik s. 10–11. Najpierw przeczytamy wiersz, potem nauczymy się trzech rzeczy.",
        ua: "Сьогодні ти навчишся знаходити того, хто говорить у вірші, описувати настрій і розпізнавати апострофу."
      },
      items: [
        {
          pl: "dowiem się, kto mówi w wierszu;",
          ua: "дізнаюся, хто говорить у вірші;"
        },
        {
          pl: "nauczę się opisywać sytuację i nastrój;",
          ua: "навчуся описувати ситуацію і настрій;"
        },
        {
          pl: "nauczę się rozpoznawać apostrofę.",
          ua: "навчуся розпізнавати апострофу."
        }
      ]
    },
    // 2
    {
      type: "observe",
      heading: { pl: "Przeczytaj wiersz", ua: "Прочитай вірш" },
      formula: "Jan Lechoń  ·  Preludium",
      text: {
        pl: [
          "Za oknami świt czerwony,",
          "Jeszcze sennych szelest drzew,",
          "Słońce wraca z drugiej strony,",
          "Ptak zbudzony zaczął śpiew.",
          " ",
          " ",
          "Ach! dzień dobry wam, kasztany,",
          "Wodo pełna srebrnych lśnień!",
          "Jeszcze jeden darowany",
          "Cudownego życia dzień!"
        ]
      },
      promptPlace: "after",
      prompt: {
        pl: "💡 Słowo z wiersza: świt = początek ranka, światło widoczne przed pojawieniem się słońca. Przeczytaj jeszcze raz. Potem posłuchaj nagrania.",
        ua: "світанок — початок ранку. Прочитай вірш уважно. Якщо якесь слово незрозуміле, скористайся поясненням нижче."
      },
      visual: {
        kind: "youtube",
        place: "after",
        id: "k-UCIU4xkSM",
        title: {
          pl: "Posłuchaj: Jan Lechoń „Preludium”",
          ua: "Послухай: Jan Lechoń «Preludium»"
        }
      },
      task: {
        id: "t2-s02-relacja",
        type: "single-choice",
        question: {
          pl: "Co dzieje się w wierszu?",
          ua: "Що відбувається у вірші?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Zaczyna się poranek: świt, słońce, szelest drzew, śpiew ptaka — i radość z kolejnego dnia.",
              ua: "Починається ранок: світанок, сонце, шелест дерев, спів птаха — і радість з нового дня."
            }
          },
          {
            id: "b",
            label: {
              pl: "Zapada noc: księżyc, cisza i strach przed ciemnością.",
              ua: "Настає ніч: місяць, тиша і страх перед темрявою."
            }
          },
          {
            id: "c",
            label: {
              pl: "Ktoś idzie do szkoły i martwi się o sprawdzian.",
              ua: "Хтось іде до школи і хвилюється за контрольну."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Spójrz na pierwsze słowa: „Za oknami świt…” i na koniec: „darowany / Cudownego życia dzień”.",
          ua: "Подивись на початок: «Za oknami świt…» і на кінець: «darowany / Cudownego życia dzień»."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "W wierszu jest świt i słońce, które wraca — to początek dnia, nie noc.",
              ua: "У вірші світанок і сонце, яке повертається — це початок дня, не ніч."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "W tym wierszu nie ma szkoły. Jest okno, świt, drzewa, ptak, kasztany i woda.",
              ua: "У цьому вірші немає школи. Є вікно, світанок, каштани і вода."
            }
          }
        ],
        explanation: {
          pl: "W wierszu pojawia się poranek: świt, słońce, szelest drzew, śpiew ptaka. Osoba mówiąca zauważa piękno świata i cieszy się kolejnym dniem. (Wyjaśnienie EduMost — parafraza treści, nie cytat z kryteriów GWO.)",
          ua: "У вірші ранок: світанок, сонце, шелест, спів. Особа, яка говорить, радіє новому дню. (Пояснення EduMost.)"
        }
      }
    },
    // 3
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które pomogą zrozumieć wiersz", ua: "Слова, які допоможуть зрозуміти вірш" },
      promptPlace: "before",
      prompt: {
        pl: "Nie ucz się ich na pamięć. Wystarczy, że zrozumiesz je w tym wierszu.",
        ua: "Це не словник напам’ять — лише те, що треба до «Preludium»."
      },
      rows: [
        { pl: "świt — początek ranka; światło przed pojawieniem się słońca", ua: "світанок — початок ранку" },
        { pl: "preludium — wstęp, zapowiedź czegoś; też krótki utwór muzyczny na początek", ua: "прелюдія — вступ; короткий музичний твір на початок" },
        { pl: "kasztany — drzewa (tu: te, które osoba wita)", ua: "каштани — дерева, яких вітають у вірші" },
        { pl: "srebrne lśnienia — błyszczące, jasne odbicia na wodzie", ua: "сріблясті відблиски — блиск на воді" },
        { pl: "darowany dzień — dzień, który można przeżyć i potraktować jak dar", ua: "подарований день — день як дар" }
      ],
      task: {
        id: "t2-s03-slowo",
        type: "single-choice",
        question: {
          pl: "Które znaczenie słowa preludium łączy się z treścią tego wiersza?",
          ua: "Яке значення слова preludium пасує до змісту цього вірша?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "wstęp / zapowiedź czegoś — tu jak początek dnia; też krótki utwór na początek",
              ua: "вступ / початок чогось — тут як початок дня; також короткий твір на початок"
            }
          },
          {
            id: "b",
            label: { pl: "koniec dnia, zmierzch", ua: "кінець дня, смеркання" }
          },
          {
            id: "c",
            label: { pl: "nazwa ptaka za oknem", ua: "назва птаха за вікном" }
          }
        ],
        answer: "a",
        hint: {
          pl: "W słowniku (s. 11): preludium to krótki utwór albo wstęp / zapowiedź. Wiersz jest jak wejście w nowy dzień.",
          ua: "У словнику (с. 11): прелюдія — короткий твір або вступ. Тут — початок дня."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Preludium to początek, nie koniec. W wierszu świt i nowy dzień — nie zmierzch.",
              ua: "Preludium — початок, не кінець дня."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ptak śpiewa w wierszu, ale preludium to nie nazwa ptaka. To wstęp / krótki utwór.",
              ua: "Preludium — не назва птаха."
            }
          }
        ],
        explanation: {
          pl: "Tytuł pasuje do wiersza jako wstęp: świt, budzenie się świata, pierwszy śpiew. To jak krótkie preludium dnia. (Wyjaśnienie tytułu — EduMost, na podstawie haseł ze s. 11.)",
          ua: "Preludium тут — вступ до дня: світанок і перший спів. (Пояснення EduMost.)"
        }
      }
    },
    // 4
    {
      type: "concept",
      heading: { pl: "Kto mówi w wierszu?", ua: "Хто говорить у вірші?" },
      visual: vizGh("t2-okno-swit.png", {
        alt: {
          pl: "Poranek za oknem: czerwony świt, drzewa, ptak",
          ua: "Ранок за вікном: червоний світанок, дерева, птах"
        },
        title: { pl: "Osoba mówiąca patrzy za okno", ua: "Особа, яка говорить, дивиться у вікно" },
        prompt: {
          pl: "Edukacyjna ilustracja 16:9, klasa 5. Widok z okna o świcie: czerwono-pomarańczowe niebo, ciche drzewa, mały ptak. Ciepły akwarelowy styl jak w podręczniku, bez grozy, bez logotypów, bez angielskiego.",
          ua: "Освітня ілюстрація 16:9: світанок за вікном, дерева, птах, акварель, без логотипів."
        }
      }),
      text: {
        pl: [
          ["Kiedy czytasz wiersz, słyszysz czyjś głos. Ta osoba mówi o tym, co ", em("widzi"), ", ", em("słyszy"), " albo ", em("przeżywa"), "."],
          ["Nazywamy ją ", em("osobą mówiącą"), "."],
          ["Jan Lechoń ", em("napisał"), " wiersz. Ale to nie znaczy, że wszystkie słowa wypowiada Jan Lechoń jako prywatna osoba."],
          "My pytamy: kto mówi W TEKŚCIE? (Słowo „podmiot liryczny” zostawiamy na inną lekcję.)"
        ],
        ua: [
          "У вірші хтось говорить про те, що бачить і відчуває. Це — osoba mówiąca, тобто особа, яка говорить у творі.",
          "Ян Лехонь написав вірш. Питаємо, хто говорить У ТЕКСТІ — не «хто автор на обкладинці»."
        ]
      },
      task: {
        id: "t2-s04-kto",
        type: "single-choice",
        question: {
          pl: "Co możemy powiedzieć o osobie mówiącej — i który fragment to pokazuje?",
          ua: "Що можна сказати про особу, яка говорить — і який уривок це показує?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Patrzy za okno o świcie i wita kasztany oraz wodę — np. „Za oknami świt czerwony” / „Ach! dzień dobry wam, kasztany”.",
              ua: "Дивиться у вікно на світанку і вітає каштани та воду."
            }
          },
          {
            id: "b",
            label: {
              pl: "To Jan Lechoń, bo on napisał wiersz — nie trzeba szukać w tekście.",
              ua: "Це Ян Лехонь, бо він написав вірш — шукати в тексті не треба."
            }
          },
          {
            id: "c",
            label: {
              pl: "To ptak, bo „Ptak zbudzony zaczął śpiew”.",
              ua: "Це птах, бо «Ptak zbudzony zaczął śpiew»."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Nie pytamy, kto napisał wiersz. Pytamy, czyj głos słychać w utworze — co ta osoba widzi i do kogo się zwraca.",
          ua: "Не питаємо, хто написав вірш. Питаємо, чий голос чути в тексті."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Autor napisał wiersz. Osoba mówiąca to głos W TEKŚCIE: ktoś patrzy za okno i mówi „dzień dobry” kasztanom.",
              ua: "Автор написав вірш. Особа, яка говорить — голос У ТЕКСТІ."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ptak śpiewa — osoba mówiąca go SŁYSZY. To nie ptak jest osobą mówiącą.",
              ua: "Птах співає — особа, яка говорить, його ЧУЄ."
            }
          }
        ],
        explanation: {
          pl: "Osoba mówiąca patrzy za okno, widzi świt i kasztany, słyszy drzewa i ptaka, cieszy się dniem. Autora (Lechonia) znamy z podpisu pod tytułem; głos czytamy w wierszu.",
          ua: "Особа, яка говорить, дивиться у вікно і вітає світ. Автор — на підписі; голос — у тексті."
        }
      }
    },
    // 5
    {
      type: "concept",
      heading: { pl: "Co to znaczy „sytuacja”?", ua: "Що означає «sytuacja»?" },
      visual: vizGh("t2-sytuacja-poranek.png", {
        alt: {
          pl: "Poranek: okno, drzewa, ptak, woda",
          ua: "Ранок: вікно, дерева, птах, вода"
        },
        title: { pl: "Gdzie, kiedy, co widzi, co słyszy", ua: "Де, коли, що бачить, що чує" },
        prompt: {
          pl: "Edukacyjna infografika 16:9, cztery małe kadry z etykietami PL: GDZIE — przy oknie; KIEDY — świt; WIDZI — świt, kasztany, wodę; SŁYSZY — szelest drzew, śpiew ptaka. Ciepły poranek, bez grozy, bez angielskiego, bez logotypów.",
          ua: "Інфографіка 16:9: де / коли / бачить / чує. Ранок, без логотипів."
        }
      }),
      text: {
        pl: [
          "Chcemy ustalić, co dzieje się wokół osoby mówiącej. Z tekstu zbieramy:",
          "• gdzie prawdopodobnie jest;",
          "• kiedy to się dzieje;",
          "• co widzi;",
          "• co słyszy;",
          "• co przeżywa."
        ],
        ua: [
          "Щоб зрозуміти ситуацію, шукаємо в тексті: де, коли, що бачить, що чує і що відчуває osoba mówiąca."
        ]
      },
      task: {
        id: "t2-s05-sytuacja",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz wszystko, co naprawdę wynika z wiersza (może być kilka odpowiedzi).",
          ua: "Познач усе, що справді випливає з вірша (може бути кілька)."
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Kiedy: o świcie — „Za oknami świt czerwony”, „Słońce wraca”, „Ptak zbudzony”.",
              ua: "Коли: на світанку — świt, słońce wraca, ptak zbudzony."
            }
          },
          {
            id: "b",
            label: {
              pl: "Widzi: świt za oknami, kasztany, wodę pełną srebrnych lśnień.",
              ua: "Бачить: світанок за вікнами, каштани, воду."
            }
          },
          {
            id: "c",
            label: {
              pl: "Jest noc i osoba boi się burzy.",
              ua: "Ніч, і особа боїться бурі."
            }
          },
          {
            id: "d",
            label: {
              pl: "Słyszy: senny szelest drzew i śpiew ptaka.",
              ua: "Чує: шелест дерев і спів птаха."
            }
          },
          {
            id: "e",
            label: {
              pl: "Gdzie: prawdopodobnie przy oknie — „Za oknami świt czerwony”.",
              ua: "Де: ймовірно біля вікна — «Za oknami»."
            }
          }
        ],
        answer: ["a", "b", "d", "e"],
        hint: {
          pl: "Szukaj w tekście: świt, okno, szelest, ptak, kasztany, woda. Nie zgaduj „ładnej” historii spoza wiersza.",
          ua: "Шукай у тексті: świt, okno, szelest, ptak, kasztany, woda."
        },
        mistakes: [
          {
            answer: "c",
            feedback: {
              pl: "Nocy i burzy w tym wierszu nie ma. Jest świt i budzący się dzień.",
              ua: "Ночі й бурі немає. Є світанок."
            }
          }
        ],
        explanation: {
          pl: "Sytuacja (EduMost): poranek, budzący się świat, obserwowanie przyrody zza okna, przeżywanie piękna dnia. Osoba jest przy oknie; widzi świt, kasztany i wodę; słyszy drzewa i ptaka.",
          ua: "Ситуація (EduMost): ранок, світ прокидається, погляд з вікна, радість дня."
        }
      }
    },
    // 6
    {
      type: "practice",
      heading: { pl: "Jaki jest nastrój?", ua: "Який настрій?" },
      formula: "nastrój  →  ponieważ  →  fragment z wiersza",
      promptPlace: "before",
      prompt: {
        pl: "Nastrój to ogólne wrażenie i uczucia, które pojawiają się podczas czytania wypowiedzi. Najpierw przeczytaj jeszcze raz drugą strofę: „Ach! dzień dobry wam, kasztany…”.",
        ua: "Настрій — це загальне відчуття, яке виникає під час читання."
      },
      items: [
        {
          pl: "Słowa z podręcznika (s. 11): smutny · pogodny · spokojny · radosny · wesoły · ponury · żartobliwy · pełen niepokoju · mroczny · tajemniczy · posępny",
          ua: "сумний · світлий, життєрадісний · спокійний · радісний · веселий · похмурий · жартівливий · сповнений тривоги · похмурий, темний · загадковий · похмурий"
        },
        {
          pl: "Twój nastrój po przeczytaniu może być inny — to Twoja reakcja. Teraz pytamy o nastrój WYPOWIEDZI w wierszu.",
          ua: "Твій настрій може бути інший. Це нормально. Зараз — настрій висловлювання у вірші."
        }
      ],
      task: {
        id: "t2-s06-nastroj",
        type: "single-choice",
        question: {
          pl: "Wybierz parę: nastrój wypowiedzi + fragment, który to potwierdza.",
          ua: "Вибери пару: настрій + уривок, який це підтверджує."
        },
        options: [
          {
            id: "a",
            label: {
              pl: "pogodny, radosny, wesoły  →  ponieważ  →  „Jeszcze jeden darowany / Cudownego życia dzień!”",
              ua: "погідний, радісний, веселий  →  бо  →  «darowany / Cudownego życia dzień»"
            }
          },
          {
            id: "b",
            label: {
              pl: "smutny, ponury, posępny  →  ponieważ  →  „Jeszcze sennych szelest drzew”",
              ua: "сумний, похмурий  →  бо  →  шелест дерев"
            }
          },
          {
            id: "c",
            label: {
              pl: "mroczny, pełen niepokoju  →  ponieważ  →  „Za oknami świt czerwony”",
              ua: "морочний, сповнений тривоги  →  бо  →  червоний світанок"
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Wróć do drugiej strofy. Osoba mówi „dzień dobry” i cieszy się „darowanym” dniem. Które słowa z ramki to opisują: pogodny, radosny… czy smutny?",
          ua: "Друга строфа: «dzień dobry» і «darowany dzień». Це радість, не сум."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szelest drzew jest cichy, ale cały wiersz wita dzień i nazywa go darem. To nie smutek.",
              ua: "Шелест тихий, але вірш вітає день як дар. Це не сум."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Czerwony świt to kolor poranka, nie groza. Osoba cieszy się dniem, nie boi się.",
              ua: "Червоний світанок — колір ранку, не жах."
            }
          }
        ],
        explanation: {
          pl: "Nastrój wypowiedzi jest pogodny i radosny, bo osoba wita kasztany i wodę oraz nazywa dzień darem. Słowa ze szkolnej ramki, które pasują: pogodny, spokojny, radosny, wesoły. (Można wybrać kilka — nie tylko jedno.) Smutny, ponury, mroczny — nie pasują do tego głosu.",
          ua: "Настрій погідний і радісний: день як дар. Сумний / похмурий — не пасує."
        }
      }
    },
    // 7
    {
      type: "example",
      heading: { pl: "Zobacz ten zwrot", ua: "Подивись на це звертання" },
      formula: "Ach! dzień dobry wam, kasztany, / Wodo pełna srebrnych lśnień!",
      visual: vizGh("t2-apostrofa-zwrot.png", {
        alt: {
          pl: "Zwrot do kasztanów i wody",
          ua: "Звертання до каштанів і води"
        },
        title: { pl: "Czy ktoś tu do kogoś mówi?", ua: "Чи хтось тут до когось каже?" },
        prompt: {
          pl: "Edukacyjna ilustracja 16:9: ciepły poranek, kasztany i tafla wody ze srebrnymi błyskami. Ktoś z okna jakby wita drzewa i wodę. Napis PL: dzień dobry wam. Bez definicji na rysunku, bez logotypów, bez angielskiego.",
          ua: "Ілюстрація: каштани і вода, вітання з вікна. Без логотипів."
        }
      }),
      text: {
        pl: [
          "Najpierw zobacz. Jeszcze nie nazywamy tego trudnym słowem.",
          "Czy osoba mówiąca tylko opisuje świat? Czy może ZWRACA SIĘ do kogoś lub czegoś?"
        ],
        ua: [
          "Спочатку подивись. Чи особа лише описує світ, чи звертається до когось / чогось?"
        ]
      },
      task: {
        id: "t2-s07-zwrot",
        type: "single-choice",
        question: {
          pl: "Czy w tych dwóch liniach osoba mówiąca zwraca się bezpośrednio do kogoś lub czegoś?",
          ua: "Чи в цих двох рядках особа звертається безпосередньо до когось або чогось?"
        },
        options: [
          { id: "a", label: { pl: "Tak — mówi do kasztanów i do wody", ua: "Так — говорить до каштанів і до води" } },
          { id: "b", label: { pl: "Nie — tylko opowiada o poranku", ua: "Ні — лише розповідає про ранок" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj słów jak „dzień dobry wam” i „Wodo” (jak wołanie). To nie jest tylko opis „kasztany stoją”.",
          ua: "Шукай «dzień dobry wam» і «Wodo» — це вітання, не лише опис."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Gdyby tylko opisywała, usłyszelibyśmy np. „kasztany stoją przy wodzie”. Tu mówi: dzień dobry WAM, kasztany; WODO!",
              ua: "Тут не лише опис: «dzień dobry wam» і «Wodo»."
            }
          }
        ],
        explanation: {
          pl: "Tak. To bezpośrednie zwrócenie się. W podręczniku (s. 11) zapamiętaj definicję: Apostrofa to bezpośrednie zwrócenie się do jakiegoś odbiorcy, na przykład osoby, bóstwa czy przedmiotu. Stosuje się ją w tekstach poetyckich pełnych emocji, utrzymanych w podniosłym, uroczystym nastroju, a także w przemówieniach. Jak rozpoznać: 1) ktoś mówi 2) zwraca się bezpośrednio 3) zwrot ma odbiorcę (tu: kasztany i woda).",
          ua: "Апострофа — це безпосереднє звертання до когось або чогось. У «Preludium» — до каштанів і води."
        }
      }
    },
    // 8
    {
      type: "practice",
      heading: { pl: "Rozpoznaj apostrofę", ua: "Розпізнай апострофу" },
      promptPlace: "before",
      prompt: {
        pl: "Najpierw dwa przykłady EduMost (nie z Lechonia). A: „Dzień dobry, przyjacielu!” — zwrot do kogoś. B: „Słońce pojawiło się nad horyzontem.” — tylko opis, bez zwrotu. Niżej wiersz — potem nowe zdania.",
        ua: "Спочатку приклад: А — звертання, B — лише опис. Нижче вірш, потім нові речення."
      },
      text: {
        pl: [
          "Za oknami świt czerwony,",
          "Jeszcze sennych szelest drzew,",
          "Słońce wraca z drugiej strony,",
          "Ptak zbudzony zaczął śpiew.",
          " ",
          " ",
          "Ach! dzień dobry wam, kasztany,",
          "Wodo pełna srebrnych lśnień!",
          "Jeszcze jeden darowany",
          "Cudownego życia dzień!"
        ]
      },
      task: {
        id: "t2-s08-rozpoznaj",
        type: "single-choice",
        question: {
          pl: "W którym zdaniu jest apostrofa?",
          ua: "У якому реченні є апострофа?"
        },
        options: [
          {
            id: "a",
            label: { pl: "Noc była cicha i długa.", ua: "Ніч була тиха і довга." }
          },
          {
            id: "b",
            label: { pl: "O nocy, zostań jeszcze chwilę!", ua: "О ноче, залишся ще на мить!" }
          },
          {
            id: "c",
            label: { pl: "Dzieci bały się ciemności.", ua: "Діти боялися темряви." }
          }
        ],
        answer: "b",
        hint: {
          pl: "Czy osoba mówi DO kogoś / czegoś, czy tylko O kimś / o czymś?",
          ua: "Говорить ДО когось чи лише ПРО когось?"
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Tu ktoś opowiada O nocy, nie mówi DO nocy. Brak bezpośredniego zwrotu.",
              ua: "Розповідь ПРО ніч, не звертання ДО ночі."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Tu opowieść o dzieciach. Nikt nie zwraca się do ciemności ani do dzieci.",
              ua: "Розповідь про дітей, без звертання."
            }
          }
        ],
        explanation: {
          pl: "„O nocy, zostań jeszcze chwilę!” to zwrot do nocy — apostrofa. „Dzień dobry, przyjacielu!” też byłoby apostrofą. Opis bez zwrotu (słońce wzeszło / noc była cicha) — nie.",
          ua: "«О ноче…» — звертання, отже апострофа."
        }
      }
    },
    // 9
    {
      type: "observe",
      heading: { pl: "Apostrofa w „Preludium”", ua: "Апострофа в «Preludium»" },
      visual: vizGh("t2-kasztany-woda.png", {
        alt: {
          pl: "Kasztany i woda o świcie",
          ua: "Каштани і вода на світанку"
        },
        title: { pl: "Do kogo zwraca się osoba mówiąca?", ua: "До кого звертається особа?" },
        prompt: {
          pl: "Edukacyjna ilustracja 16:9: kasztan o świcie i woda ze srebrnymi lśnieniami. Ciepły akwarelowy poranek, etykiety PL: kasztany, woda. Bez całego wiersza na rysunku, bez logotypów, bez angielskiego.",
          ua: "Ілюстрація: каштани і вода, світанок. Без логотипів."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Wróć do wiersza. Znajdź apostrofę — bezpośredni zwrot. Potem powiedz, do kogo lub do czego.",
        ua: "Знайди звертання в «Preludium». До кого / до чого воно?"
      },
      task: {
        id: "t2-s09-w-wierszu",
        type: "single-choice",
        question: {
          pl: "Który fragment jest apostrofą — i do kogo (czego) jest ten zwrot?",
          ua: "Який уривок є апострофою і до кого (чого) звертання?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "„Za oknami świt czerwony, / Jeszcze sennych szelest drzew” — opis poranka, nie zwrot.",
              ua: "Опис ранку, не звертання."
            }
          },
          {
            id: "b",
            label: {
              pl: "„Słońce wraca z drugiej strony, / Ptak zbudzony zaczął śpiew.” — opis, nie zwrot.",
              ua: "Опис сонця і птаха, не звертання."
            }
          },
          {
            id: "c",
            label: {
              pl: "„Ach! dzień dobry wam, kasztany, / Wodo pełna srebrnych lśnień!” — zwrot do kasztanów i do wody.",
              ua: "Звертання до каштанів і до води."
            }
          },
          {
            id: "d",
            label: {
              pl: "„Jeszcze jeden darowany / Cudownego życia dzień!” — radość, ale bez „do kogo”.",
              ua: "Радість, але без «до кого»."
            }
          }
        ],
        answer: "c",
        hint: {
          pl: "Apostrofa to zwrot. Gdzie ktoś mówi „dzień dobry wam” i woła „Wodo”?",
          ua: "Де є «dzień dobry wam» і «Wodo»?"
        },
        mistakes: [
          {
            answer: "a",
            feedback: {
              pl: "Tu osoba opisuje, co widzi i słyszy. Nie mówi DO świtu ani DO drzew.",
              ua: "Опис, не звертання."
            }
          },
          {
            answer: "b",
            feedback: {
              pl: "Słońce i ptak są opisane. Nikt nie mówi „słońce, wróć” — to nie apostrofa.",
              ua: "Опис, не звертання до сонця."
            }
          },
          {
            answer: "d",
            feedback: {
              pl: "To radość z dnia, ale bez bezpośredniego zwrotu do odbiorcy. Apostrofa jest wers wyżej: kasztany i woda.",
              ua: "Радість без звертання. Апострофа — рядком вище."
            }
          }
        ],
        explanation: {
          pl: "Właśnie dlatego ten fragment jest apostrofą: osoba mówiąca nie tylko opisuje kasztany i wodę. Zwraca się do nich bezpośrednio („dzień dobry wam, kasztany”, „Wodo”). Odbiorcy zwrotu: kasztany i woda.",
          ua: "Це апострофа, бо є безпосереднє звертання до каштанів і води — не лише опис."
        }
      }
    },
    // 10
    {
      type: "task",
      heading: { pl: "Teraz mówisz głosem osoby z wiersza", ua: "Тепер говориш голосом особи з вірша" },
      promptPlace: "before",
      prompt: {
        pl: "Wyobraź sobie, że jesteś osobą mówiącą w „Preludium”. Dokończ wypowiedź po polsku. W podręczniku (s. 11) startery: „Każdy dzień mojego życia…” albo „Moje życie…”. Pomyśl, co ta osoba widzi, słyszy i czuje.",
        ua: "Уяви, що ти — osoba mówiąca у вірші. Продовж думку польською."
      },
      text: {
        pl: [
          "Nie oceniamy, czy to ładna poezja. Napisz 1–3 zdania. Potem sam sprawdź listę pod spodem.",
          "Gdy mówisz o nastroju ludzi, w ramce s. 11 są też: mieć dobry/zły wpływ · patrzeć na świat przez różowe okulary · popadać w depresję · widzieć świat w ciemnych barwach · być optymistą/pesymistą · dzielić się radością · zarażać smutkiem · zachowywać pogodę ducha."
        ],
        ua: [
          "Стиль не оцінюємо. Напиши 1–3 речення польською.",
          "З рамки с. 11 (настрій людей): мати добрий/поганий вплив · дивитися на світ крізь рожеві окуляри · бути оптимістом/песимістом · ділитися радістю · зберігати гарний настрій."
        ]
      },
      task: {
        id: "t2-s10-ja",
        type: "open-answer",
        question: {
          pl: "Dokończ: „Każdy dzień mojego życia…” albo „Moje życie…”",
          ua: "Продовж: «Każdy dzień mojego życia…» або «Moje życie…»"
        },
        answer: [
          "Każdy dzień mojego życia jest darem.",
          "Każdy dzień mojego życia jest cudowny.",
          "Każdy dzień mojego życia jest darowany.",
          "Moje życie jest darem.",
          "Moje życie jest cudowne."
        ],
        hint: {
          pl: "Zacznij jak w książce. Możesz napisać np.: „Każdy dzień mojego życia jest darem.” Potem sam sprawdź: czy po polsku? czy jak osoba mówiąca (ja)? czy jest świt, radość, dar dnia?",
          ua: "Почни як у книжці. Потім сам: польською? як особа з вірша? чи є ранок / радість / дар дня?"
        },
        explanation: {
          pl: "Sprawdź sam: 1) napisałem po polsku; 2) pisałem jak osoba mówiąca (nie jak recenzent o wierszu); 3) nawiązałem do sytuacji lub nastroju (świt, kasztany, darowany dzień). Silnik nie ocenia poezji — jeśli napisałeś własne zdanie, i tak przeczytaj tę listę.",
          ua: "Самоперевірка: польською? як особа з вірша? чи є зв’язок із ранком і радістю дня?"
        }
      }
    },
    // 11
    {
      type: "check",
      heading: { pl: "Sprawdź się", ua: "Перевір себе" },
      promptPlace: "before",
      prompt: {
        pl: "Trzy rzeczy z dzisiejszej lekcji. Możesz wrócić wzrokiem do wiersza. Zaznacz wszystkie prawdziwe zdania.",
        ua: "Можна дивитися у вірш. Познач усі правдиві речення."
      },
      task: {
        id: "t2-s11-sprawdz",
        type: "multiple-choice",
        question: {
          pl: "Zaznacz trzy zdania, które są prawdziwe po tej lekcji.",
          ua: "Познач три речення, які правдиві після цього уроку."
        },
        options: [
          {
            id: "a",
            label: {
              pl: "W wierszu mówi osoba mówiąca (głos w tekście). Nie wystarczy: „Lechoń, bo autor”.",
              ua: "У вірші говорить osoba mówiąca. Не досить: «Лехонь, бо автор»."
            }
          },
          {
            id: "b",
            label: {
              pl: "Nastrój można zgadnąć z tytułu, bez fragmentu.",
              ua: "Настрій можна вгадати з назви, без уривка."
            }
          },
          {
            id: "c",
            label: {
              pl: "Nastrój wypowiedzi jest pogodny i radosny, bo dzień jest „darowany” / „cudownego życia”.",
              ua: "Настрій погідний і радісний, бо день «darowany»."
            }
          },
          {
            id: "d",
            label: {
              pl: "Apostrofa to znak «’» w nazwisku.",
              ua: "Апострофа — знак «’» у прізвищі."
            }
          },
          {
            id: "e",
            label: {
              pl: "Apostrofa w „Preludium” to zwrot: „Ach! dzień dobry wam, kasztany, / Wodo pełna srebrnych lśnień!”",
              ua: "Апострофа — звертання до каштанів і води в другій строфі."
            }
          }
        ],
        answer: ["a", "c", "e"],
        hint: {
          pl: "Trzy cele: kto mówi; nastrój + dowód w tekście; apostrofa w drugiej strofie (kasztany i woda).",
          ua: "Три цілі: хто говорить; настрій + доказ; апострофа до каштанів і води."
        },
        explanation: {
          pl: "Gotowe. Potrafisz już: znaleźć osobę mówiącą; opisać sytuację; określić nastrój i znaleźć dowód; rozpoznać apostrofę. Błędne były: zgadywanie nastroju bez fragmentu oraz mylenie apostrofy ze znakiem w nazwisku.",
          ua: "Готово: особа мовця · ситуація · настрій + доказ · апострофа."
        }
      }
    },
    // 12
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "W wierszu mówi osoba mówiąca — głos w tekście, nie automatycznie autor.",
          ["osoba mówiąca"],
          "У вірші говорить особа мовця — голос у тексті, не автоматично автор.",
          ["особа мовця"]
        ),
        mark(
          "Nastrój określamy na podstawie tekstu.",
          ["Nastrój", "tekstu"],
          "Настрій визначаємо на основі тексту.",
          ["Настрій", "тексту"]
        ),
        mark(
          "Swoją odpowiedź warto poprzeć fragmentem.",
          ["fragmentem"],
          "Відповідь варто підкріпити уривком.",
          ["уривком"]
        ),
        mark(
          "Apostrofa to bezpośredni zwrot do odbiorcy.",
          ["Apostrofa", "zwrot"],
          "Апострофа — безпосереднє звертання до адресата.",
          ["Апострофа"]
        )
      ],
      task: {
        id: "t2-s12-zeszyt",
        type: "single-choice",
        question: {
          pl: "Do zeszytu (nie cały wiersz): 1) Apostrofa to bezpośrednie zwrócenie się do jakiegoś odbiorcy, na przykład osoby, bóstwa czy przedmiotu. (podręcznik s. 11)  2) Przykład z „Preludium”: „Ach! dzień dobry wam, kasztany, / Wodo pełna srebrnych lśnień!”  Czy zapisałeś definicję i ten jeden zwrot?",
          ua: "У зошит: означення апострофи з підручника + один звертальний уривок. Записав?"
        },
        options: [
          {
            id: "a",
            label: { pl: "Tak — zapisałem w zeszycie", ua: "Так — записав у зошит" }
          },
          {
            id: "b",
            label: { pl: "Jeszcze nie", ua: "Ще ні" }
          }
        ],
        answer: "a",
        hint: {
          pl: "Krótko: definicja z ramki s. 11 + dwie linie do kasztanów i wody. Nie przepisuj całego „Preludium”.",
          ua: "Коротко: дефініція + два рядки до каштанів і води."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To jeden krótki zapis. Definicja + zwrot do kasztanów i wody. Potem zaznacz „Tak”.",
              ua: "Короткий запис. Потім познач «Так»."
            }
          }
        ],
        explanation: {
          pl: "Koniec lekcji. Później będzie lekcja o podmiocie lirycznym. Wróć do języka polskiego strzałką u góry.",
          ua: "Кінець уроку. Пізніше — ліричний суб’єкт. Повернись стрілкою вгорі."
        }
      }
    }
  ]
};
