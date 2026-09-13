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
    {
      type: "goal",
      heading: { pl: "Ćwiczenia · rz niewymienne", ua: "Вправи · rz незмінне" },
      formula: "s. 22  ·  po opowieści o Katarzynie",
      promptPlace: "before",
      prompt: {
        pl: "Opowieść już znasz (lekcja 7, s. 20–21). Dziś zadania z podręcznika: rysunki, czasowniki, opowiadanie, zapis z pamięci. Klucze są schowane — najpierw zeszyt.",
        ua: "Оповідання вже є (урок 7). Сьогодні вправи з підручника. Ключі сховані."
      },
      items: [
        { pl: "znajdę na rysunkach to, o czym jest w utworze;", ua: "знайду на малюнках те, про що в творі;" },
        { pl: "nazwę obrazki wyrazami z rz niewymiennym;", ua: "назву малюнки словами з rz незмінним;" },
        { pl: "wypiszę czasowniki z rz niewymiennym;", ua: "випишу дієслова з rz незмінним;" },
        { pl: "opowiem historię i zapiszę wyrazy z pamięci.", ua: "розкажу історію і запишу слова з пам’яті." }
      ]
    },
    {
      type: "observe",
      heading: { pl: "Zad. 2 · znajdź na rysunkach", ua: "Завд. 2 · знайди на малюнках" },
      formula: "s. 22  ·  USTNIE",
      visual: vizGh("t8-zad2-rysunki.png", {
        alt: {
          pl: "Pięć kadrów: laptop przy drodze do Rzeszowa, rzeźbiarka z młotkiem, kuchnia, kolorowe zjawisko, posąg",
          ua: "П’ять кадрів з оповідання"
        },
        title: { pl: "Slajd · zadanie 2", ua: "Слайд · вправа 2" },
        prompt: {
          pl: "Wstaw slajd ze s. 22 zad. 2: pięć kadrów (droga Rzeszów 15 km i laptop; rzeźbiarka z młotkiem przy posągu; kuchnia; fioletowo-zielone zjawisko; posąg). PNG, kadr szeroki. Przytnij znak wodny i «Next page».",
          ua: "Встав п’ять кадрів завдання 2 зі с. 22."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "USTNIE: wskaż palcem elementy, o których była mowa w utworze. Jeszcze nie zapisuj wszystkich wyrazów — to zadanie 3.",
        ua: "УСНО: покажи елементи з твору. Запис слів — завдання 3."
      },
      text: {
        pl: "Zad. 2: Znajdź na poniższych rysunkach te elementy, o których jest mowa w utworze.",
        ua: "Завд. 2: знайди на малюнках елементи з твору."
      },
      task: {
        id: "t8-s02-elementy",
        type: "multiple-choice",
        question: {
          pl: "Które elementy NA PEWNO są w opowieści i na tych rysunkach? Zaznacz wszystkie.",
          ua: "Які елементи НАПЕВНО є в оповіданні і на малюнках? Познач усі."
        },
        options: [
          { id: "a", label: { pl: "rzeźbiarka i posąg", ua: "скульпторка і статуя" } },
          { id: "b", label: { pl: "tablica z Rzeszowem / droga", ua: "вказівник Rzeszów / дорога" } },
          { id: "c", label: { pl: "rakieta Apollo 11", ua: "ракета Apollo 11" } },
          { id: "d", label: { pl: "kuchnia / przybory", ua: "кухня / прибори" } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Czy w opowieści o Katarzynie leciała rakieta? Czego NIE było?",
          ua: "Чи в оповіданні була ракета?"
        },
        explanation: {
          pl: "W utworze: rzeźbiarka, posąg, okolice Rzeszowa, kuchnia. Rakieta to inna lekcja.",
          ua: "У творі немає ракети."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 3 · nazwij obrazki", ua: "Завд. 3 · назви малюнки" },
      formula: "wyrazy z rz niewymiennym  ·  ZESZYT",
      promptPlace: "before",
      prompt: {
        pl: "Po wysłuchaniu opowieści powiedz, kogo lub co przedstawiono. Rozwiązaniem są wyrazy z rz niewymiennym. ZESZYT najpierw. Klucz — „Pokaż następny krok”.",
        ua: "Назви, кого або що зображено. Слова з rz незмінним. Спочатку зошит."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t8-zad3a.png", {
            alt: {
              pl: "Jarzębina, rzeka z węgorzami, rzemieślnik, kobieta",
              ua: "Горобина, річка з вуграми, ремісник, жінка"
            },
            title: { pl: "Slajd · zadanie 3 (część 1)", ua: "Слайд · вправа 3 (1)" },
            prompt: {
              pl: "Wstaw slajd zad. 3 (pierwsza grupa): gałązka jarzębiny; rzeka z dwoma węgorzami; mężczyzna w niebieskim; kobieta w fioletowym. Pod spodem kropki na wyrazy. PNG. Przytnij strzałki Genially.",
              ua: "Встав малюнки завдання 3: горобина, річка, двоє людей."
            }
          }),
          text: {
            pl: "Najpierw zapisz w zeszycie. Potem otwórz klucz.",
            ua: "Спочатку зошит, потім ключ."
          }
        },
        {
          formula: "KLUCZ  ·  porównaj z zeszytem",
          text: {
            pl: [
              "jarzębina",
              "rzeka, węgorze",
              "rzemieślnik",
              "rzeźbiarka / Katarzyna"
            ],
            ua: [
              "jarzębina",
              "rzeka, węgorze",
              "rzemieślnik",
              "rzeźbiarka"
            ]
          }
        }
      ],
      task: {
        id: "t8-s03-nazwij-a",
        type: "single-choice",
        question: {
          pl: "Co jest na rysunku z wodą i dwiema długimi rybami?",
          ua: "Що на малюнку з водою і двома довгими рибами?"
        },
        options: [
          { id: "a", label: { pl: "rzeka i węgorze", ua: "rzeka і węgorze" } },
          { id: "b", label: { pl: "morze i orły", ua: "morze і orły" } },
          { id: "c", label: { pl: "Księżyc i moduł Orzeł", ua: "Місяць і модуль Orzeł" } }
        ],
        answer: "a",
        hint: {
          pl: "Wróć do pierwszego zdania opowieści: nad rzeką… łowić węgorze.",
          ua: "Перше речення: над річкою… вугри."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "morze / orzeł to rz wymienne z innej lekcji. Tu: rzeka, węgorze.",
              ua: "morze / orzeł — інший урок. Тут rzeka, węgorze."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To T5. Tu opowieść o Katarzynie.",
              ua: "Це T5. Тут оповідання про Катажину."
            }
          }
        ],
        explanation: {
          pl: "Rozwiązaniem zad. 3 są wyrazy z rz niewymiennym. Pełny klucz części 1: po przycisku powyżej.",
          ua: "Повний ключ — після кнопки."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 3 · Rzeszów i wierzba", ua: "Завд. 3 · Rzeszów і верба" },
      formula: "ZESZYT  ·  potem klucz",
      promptPlace: "before",
      prompt: {
        pl: "ZESZYT: trzy wyrazy z rz niewymiennym. Potem przycisk.",
        ua: "ЗОШИТ: три слова. Потім кнопка."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t8-zad3b.png", {
            alt: {
              pl: "Tablica Rzeszów, rzeźbiarka, wierzba",
              ua: "Вказівник Rzeszów, скульпторка, верба"
            },
            title: { pl: "Slajd · zadanie 3 (część 2)", ua: "Слайд · вправа 3 (2)" },
            prompt: {
              pl: "Wstaw slajd: tablica Rzeszów z gołębiami i miasteczkiem; rzeźbiarka z rękami na biodrach; wierzba. Kropki na wyrazy. PNG. Przytnij strzałki Genially.",
              ua: "Встав: Rzeszów, скульпторка, верба."
            }
          }),
          text: {
            pl: "Zapisz najpierw sam. Klucz schowany.",
            ua: "Спочатку сам. Ключ сховано."
          }
        },
        {
          formula: "KLUCZ",
          text: {
            pl: ["Rzeszów", "rzeźbiarka", "wierzba"],
            ua: ["Rzeszów", "rzeźbiarka", "wierzba"]
          }
        }
      ],
      task: {
        id: "t8-s04-nazwij-b",
        type: "multiple-choice",
        question: {
          pl: "Które podpisy pasują do tych trzech rysunków? Zaznacz wszystkie pewne.",
          ua: "Які підписи пасують до цих трьох малюнків? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Rzeszów", ua: "Rzeszów" } },
          { id: "b", label: { pl: "wierzba", ua: "wierzba" } },
          { id: "c", label: { pl: "orzeł (wymienne — nie z tej opowieści jako podpis tablicy)", ua: "orzeł" } },
          { id: "d", label: { pl: "rzeźbiarka", ua: "rzeźbiarka" } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Na tablicy jest nazwa miasta z opowieści. Drzewo z długimi gałęziami: wierzba.",
          ua: "На таблиці — назва міста. Дерево — верба."
        },
        explanation: {
          pl: "Rzeszów, rzeźbiarka, wierzba — rz niewymienne z utworu. orzeł zostaw (inna lekcja, wymiana rz → r).",
          ua: "orzeł — інший урок."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Zad. 4 · czasowniki", ua: "Завд. 4 · дієслова" },
      formula: "wypisz z tekstu  ·  ZESZYT",
      promptPlace: "before",
      prompt: {
        pl: "Wypisz z tekstu czasowniki z rz niewymiennym. Nie bierz przymiotników ani rzeczowników. Nie bierz marzyłby (tam jest ż). Klucz po zeszycie.",
        ua: "Випиши дієслова з rz незмінним. Не marzyłby (там ż)."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Najpierw sam w zeszycie. Potem „Pokaż następny krok”.",
            ua: "Спочатку зошит."
          }
        },
        {
          formula: "KLUCZ  ·  czasowniki z opowieści",
          text: {
            pl: [
              "narzekała",
              "rzuciła",
              "wyrzec",
              "wydarzyło",
              "kojarzy"
            ],
            ua: [
              "narzekała",
              "rzuciła",
              "wyrzec",
              "wydarzyło",
              "kojarzy"
            ]
          }
        }
      ],
      task: {
        id: "t8-s05-czasowniki",
        type: "multiple-choice",
        question: {
          pl: "Które to czasowniki z rz niewymiennym z opowieści? Zaznacz wszystkie pewne.",
          ua: "Які це дієслова з rz незмінним? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "rzuciła", ua: "rzuciła" } },
          { id: "b", label: { pl: "narzekała", ua: "narzekała" } },
          { id: "c", label: { pl: "rzeka (to rzeczownik)", ua: "rzeka (іменник)" } },
          { id: "d", label: { pl: "marzyłby (tu ż, nie rz)", ua: "marzyłby (ż)" } }
        ],
        answer: ["a", "b"],
        hint: {
          pl: "Czasownik = co ktoś ROBI. rzeka nic nie robi. marzyłby ma ż.",
          ua: "Дієслово = що хтось РОБИТЬ."
        },
        explanation: {
          pl: "Pewne czasowniki z tekstu: narzekała, rzuciła, wyrzec, wydarzyło, kojarzy. rzetelnie to przysłówek. marzyłby — ż.",
          ua: "Повний ключ дієслів — після кнопки."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Właściwa litera", ua: "Правильна літера" },
      formula: "rz  ·  nie cała teoria ż/sz",
      promptPlace: "before",
      prompt: {
        pl: "Zakres: rz niewymienne z opowieści. Nie zamieniamy lekcji w kurs o wszystkich ż.",
        ua: "Лише rz незмінне з оповідання."
      },
      task: {
        id: "t8-s06-litera",
        type: "single-choice",
        question: {
          pl: "Katarzyna ______ jeździła do miasta. Która forma jest z opowieści?",
          ua: "Катажина ______ їздила до міста. Яка форма з оповідання?"
        },
        options: [
          { id: "a", label: { pl: "rzadko", ua: "rzadko" } },
          { id: "b", label: { pl: "żadko", ua: "żadko" } },
          { id: "c", label: { pl: "szadko", ua: "szadko" } }
        ],
        answer: "a",
        hint: {
          pl: "Zatrzymaj się. Sprawdź zapis tego wyrazu w poznanej grupie z s. 20.",
          ua: "Перевір написання в групі зі с. 20."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tutaj nie korzystamy z ż. W opowieści: rzadko.",
              ua: "Тут не ż. В оповіданні: rzadko."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "sz to inna sprawa. Tu: rzadko (rz niewymienne).",
              ua: "sz — інше. Тут rzadko."
            }
          }
        ],
        explanation: {
          pl: "rzadko — rz niewymienne z tekstu. Nie uzasadniamy wymianą rz → r. Zapamiętaj zapis.",
          ua: "rzadko — rz незмінне з тексту."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Dyktando wzrokowe", ua: "Зоровий диктант" },
      formula: "przeczytaj  ·  zasłoń  ·  wpisz",
      promptPlace: "before",
      prompt: {
        pl: "Przeczytaj zdanie. Zasłoń wyraz z luką (dłonią albo kartką). Wpisz z pamięci cały wyraz.",
        ua: "Прочитай. Закрий слово. Впиши з пам’яті."
      },
      text: {
        pl: "To się zdarzyło niedaleko Rzeszowa.",
        ua: "Спочатку прочитай ціле речення, потім впиши слово."
      },
      task: {
        id: "t8-s07-dyktando",
        type: "input-text",
        question: {
          pl: "Wpisz brakujący wyraz: To się zdarzyło niedaleko ______.",
          ua: "Впиши слово: To się zdarzyło niedaleko ______."
        },
        answer: [
          "Rzeszowa",
          "rzeszowa",
          "Rzeszowa.",
          "rzeszowa."
        ],
        hint: {
          pl: "Nazwa miasta z tytułu. Zaczyna się od Rz. Końcówka: -owa.",
          ua: "Назва міста з заголовка. Rz- + -owa."
        },
        explanation: {
          pl: "Rzeszowa — rz niewymienne. Nie ma tu wymiany rz → r jak w orzeł → orli.",
          ua: "Rzeszowa — rz незмінне."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zad. 5–6 · czytaj i opowiedz", ua: "Завд. 5–6 · читай і розкажи" },
      formula: "USTNIE  ·  s. 22",
      visual: vizGh("t8-zad5-6.png", {
        alt: {
          pl: "Polecenia 5 i 6: czytanie po cichu i wspólne opowiadanie",
          ua: "Завдання 5 і 6"
        },
        title: { pl: "Slajd · zadania 5 i 6", ua: "Слайд · вправи 5 і 6" },
        prompt: {
          pl: "Wstaw slajd z poleceniami 5 i 6 ze s. 22 (czytanie po cichu + opowiadanie historii z pomocą rysunków; osoba wskazuje kolegę). PNG. Przytnij strzałki Genially.",
          ua: "Встав слайд завдань 5 і 6."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Zad. 5: przeczytaj po cichu opowieść i zapamiętaj jak najwięcej wyróżnionych wyrazów z rz niewymiennym. Zad. 6 USTNIE: opowiedz historię (rysunki pomagają). Po fragmencie wskaż kolegę.",
        ua: "Завд. 5: тихо прочитай. Завд. 6: розкажи історію вголос."
      },
      text: {
        pl: [
          "Możesz wrócić do lekcji 7 (fragmenty opowieści) albo do podręcznika s. 20–21.",
          "Nie spisuj teraz listy — najpierw mów."
        ],
        ua: [
          "Можна повернутись до уроку 7.",
          "Спочатку говори, не списуй список."
        ]
      },
      task: {
        id: "t8-s08-opowiedz",
        type: "single-choice",
        question: {
          pl: "W jakiej kolejności opowiadasz historię?",
          ua: "В якому порядку розказуєш історію?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Pracownia nad rzeką → rzeźba dla Małgorzaty → zjawisko na tarasie → goście i Mona Lisa.",
              ua: "Майстерня над річкою → скульптура → явище → гості і Мона Ліза."
            }
          },
          {
            id: "b",
            label: {
              pl: "Start rakiety → lądowanie na Księżycu → Denis Tito.",
              ua: "Старт ракети → Місяць → Деніс Тіто."
            }
          },
          {
            id: "c",
            label: {
              pl: "Tylko wiersz „Noc”, bez Katarzyny.",
              ua: "Лише вірш «Noc»."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Początek: Rzeszów i rzeka. Koniec: towarzystwo i Mona Lisa.",
          ua: "Початок: Rzeszów. Кінець: Мона Ліза."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To T5. Dziś Katarzyna i rzeźba.",
              ua: "Це T5. Сьогодні Катажина."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To T6. Tu opowieść ze s. 20–21.",
              ua: "Це T6."
            }
          }
        ],
        explanation: {
          pl: "Zad. 6 jest ustne. Rysunki z zad. 2 pomagają utrzymać kolejność.",
          ua: "Завд. 6 усне. Малюнки з завд. 2 тримають порядок."
        }
      }
    },
    {
      type: "challenge",
      heading: { pl: "Zad. 7 · z pamięci", ua: "Завд. 7 · з пам’яті" },
      formula: "ZESZYT  ·  nie zaglądaj od razu",
      promptPlace: "before",
      prompt: {
        pl: "Zapisz, nie zaglądając do tekstu, jak najwięcej wyrazów z rz niewymiennym. Potem wróć do opowieści i innym kolorem dopisz te, których nie było. Klucz — po próbie.",
        ua: "Запиши з пам’яті. Потім іншим кольором допиши решту. Ключ після спроби."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Najpierw twoja lista w zeszycie. Potem porównaj.",
            ua: "Спочатку твій список."
          }
        },
        {
          formula: "KLUCZ  ·  wyrazy z rz niewymiennym ze s. 20–21",
          text: {
            pl: [
              "Rzeszowa, wierzba, jarzębina, rzeką, węgorze, rzeźbiarka, rzeszach, rzadko, rzeczy, narzędzia, warzywa,",
              "rzetelnie, narzekała, rzeźba, narzeczonej Małgorzaty, rzemieślnik, rzemyków, zwierząt,",
              "rzepy, rzeżuchy, porzeczek, orzechów, rzepakowego, orzeźwiający, korzeniem, rzęsy, macierzanki, burzą,",
              "rzeczywiście, rzuciła, porządku, zorzy, zdarzenia, twarzy, wyrzec, wydarzyło, tchórzy,",
              "Grzegorzem, Marzanną, towarzystwo, kojarzy.",
              "Nie wpisuj: marzyłby — to ż, nie rz."
            ],
            ua: [
              "Список з підручника (без marzyłby — це ż)."
            ]
          }
        }
      ],
      task: {
        id: "t8-s09-pamiec",
        type: "true-false",
        question: {
          pl: "Czy marzyłby należy do listy rz niewymiennego z tej lekcji?",
          ua: "Чи marzyłby належить до списку rz незмінного?"
        },
        answer: false,
        hint: {
          pl: "Popatrz na litery: marzyłby. Czy tam jest rz, czy ż?",
          ua: "Подивись літери: rz чи ż?"
        },
        explanation: {
          pl: "marzyłby ma ż. Nie mieszamy go z rz niewymiennym. Pełną listę rz otwierasz przyciskiem powyżej — po własnej próbie.",
          ua: "marzyłby — ż. Список rz — після кнопки."
        }
      }
    },
    {
      type: "classification",
      heading: { pl: "Wymienne czy niewymienne?", ua: "Змінне чи незмінне?" },
      formula: "porównanie  ·  bez przypadkowych słów",
      promptPlace: "before",
      prompt: {
        pl: "Tabela w głowie: WYMIENNE — szukam pary rz → r. NIEWYMIENNE — nie uzasadniam tą wymianą; uczę się pisowni z opowieści.",
        ua: "ЗМІННЕ — пара rz → r. НЕЗМІННЕ — вчимо написання з оповідання."
      },
      items: [
        { pl: "wymienne: orzeł → orli; morze → morski", ua: "змінне: orzeł, morze" },
        { pl: "niewymienne (z opowieści): Rzeszów, rzadko, rzeźba, rzuciła", ua: "незмінне: Rzeszów, rzadko, rzeźba, rzuciła" }
      ],
      task: {
        id: "t8-s10-klasyfikuj",
        type: "single-choice",
        question: {
          pl: "Jak sklasyfikujesz parę: rzuciła  /  orzeł?",
          ua: "Як класифікуєш: rzuciła / orzeł?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "rzuciła — niewymienne (opowieść); orzeł — wymienne (orli).",
              ua: "rzuciła — незмінне; orzeł — змінне."
            }
          },
          {
            id: "b",
            label: {
              pl: "Oba wymienne, bo oba mają rz.",
              ua: "Обидва змінні, бо є rz."
            }
          },
          {
            id: "c",
            label: {
              pl: "Oba niewymienne, bo nie znam pary.",
              ua: "Обидва незмінні, бо не знаю пари."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Zatrzymaj się. Dla orzeł para jest. Dla rzuciła z tej opowieści — nie korzystamy z rz → r.",
          ua: "Для orzeł є пара. Для rzuciła — ні."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Samo rz w wyrazie nie znaczy „wymienne”. Trzeba sprawdzić parę.",
              ua: "Саме rz не означає «змінне»."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "orzeł ma parę orli. Nie mów, że nie znasz.",
              ua: "orzeł має пару orli."
            }
          }
        ],
        explanation: {
          pl: "To najważniejsze porównanie T7+T8. Nie używamy reguły „nie znalazłem wymiany = zawsze rz”.",
          ua: "Не правило «немає заміни = завжди rz»."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Mini-kontrola i zeszyt", ua: "Міні-контроль і зошит" },
      formula: "bez oceny szkolnej",
      promptPlace: "after",
      prompt: {
        pl: "Notatka: Rz niewymienne — nie uzasadniamy wymianą rz → r. Z opowieści m.in. Rzeszów, rzeka, rzeźbiarka, rzadko, rzuciła. Czasowniki: narzekała, rzuciła, wyrzec, wydarzyło, kojarzy. 🟢 Potrafię rozpoznać rz niewymienne. 🟡 Muszę jeszcze poćwiczyć.",
        ua: "Нотатка коротко + 5 дієслів. 🟢 / 🟡"
      },
      items: [
        { pl: "🟢 Potrafię rozpoznać i zapisać rz niewymienne z tej opowieści.", ua: "🟢 Впізнаю і записую rz незмінне." },
        { pl: "🟡 Jeszcze mylę z orzeł / morze albo z ż (marzyłby).", ua: "🟡 Ще плутаю зі змінним rz або з ż." }
      ],
      task: {
        id: "t8-s11-mini",
        type: "single-choice",
        question: {
          pl: "Który zestaw jest poprawny?",
          ua: "Який набір правильний?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "niewymienne: rzadko, rzuciła; wymienne: orzeł; ż: marzyłby",
              ua: "незмінне: rzadko, rzuciła; змінне: orzeł; ż: marzyłby"
            }
          },
          {
            id: "b",
            label: {
              pl: "wszystkie przez rz, zawsze",
              ua: "усе через rz завжди"
            }
          },
          {
            id: "c",
            label: {
              pl: "rzadko to ż, orzeł to niewymienne",
              ua: "rzadko — ż, orzeł — незмінне"
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Trzy szuflady: niewymienne z opowieści / wymienne z T5 / ż.",
          ua: "Три шухляди: незмінне / змінне / ż."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Błędne uproszczenie. Wróć do trzech szuflad.",
              ua: "Хибне спрощення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Na odwrót: rzadko — rz niewymienne; orzeł — wymienne.",
              ua: "Навпаки."
            }
          }
        ],
        explanation: {
          pl: "Koniec dwóch godzin o rz niewymiennym. Przykłady sprawdzone ze s. 20–22. marzyłby nie włączamy do rz.",
          ua: "Кінець двох уроків. marzyłby не в rz."
        }
      }
    }
  ]
};
