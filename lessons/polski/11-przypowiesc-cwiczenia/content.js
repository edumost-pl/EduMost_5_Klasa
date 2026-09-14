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
      heading: { pl: "Ilustracja i wystawa", ua: "Ілюстрація і виставка" },
      formula: "s. 27  ·  po przeczytaniu wiersza  ·  lekcja 11",
      promptPlace: "before",
      prompt: {
        pl: "Wiersz już znasz (lekcja 10). Dziś zadania z podręcznika: obraz poetycki, ilustracja w grupie, przedstawienie pracy, wystawa. Klucze schowane.",
        ua: "Вірш уже є (урок 10). Сьогодні вправи з підручника: поетичний образ, ілюстрація, виставка. Ключі сховані."
      },
      items: [
        { pl: "wyodrębnię obrazy poetyckie w wierszu;", ua: "виділю поетичні образи у вірші;" },
        { pl: "ustalę, co mogą oznaczać ogród, makówka, ziarnko;", ua: "визначу, що можуть означати ogród, makówka, ziarnko;" },
        { pl: "przygotuję z grupą ilustrację i tytuł;", ua: "підготую з групою ілюстрацію і назву;" },
        { pl: "przedstawię pracę i pomogę w wystawie.", ua: "представлю роботу і допоможу на виставці." }
      ]
    },
    // 2
    {
      type: "concept",
      heading: { pl: "Zad. 1a · obrazy poetyckie", ua: "Завд. 1а · поетичні образи" },
      formula: "s. 27  ·  ramka podręcznika",
      visual: vizGh("t11-obraz-poetycki1.png", {
        alt: {
          pl: "Liść-łódka na gałązkach bzu — przykład obrazu poetyckiego",
          ua: "Листок-човник на гілках бузку — приклад поетичного образу"
        },
        title: { pl: "Slajd · obraz poetycki", ua: "Слайд · поетичний образ" },
        prompt: {
          pl: "Wstaw spokojny kadr do ramki: dziecko w oknie, głowa na piąstkach, liść jak łódka na liliowych gałązkach bzu (cytat Grochowiaka). PNG. Przytnij znak wodny.",
          ua: "Встав кадр: дитина в вікні, листок-човник на бузку."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Zad. 1a: przeczytajcie uważnie utwór i porozmawiajcie, jakie obrazy poetyckie można w nim wyodrębnić. Najpierw ramka z podręcznika.",
        ua: "Завд. 1а: які поетичні образи можна виділити у вірші. Спочатку рамка з підручника."
      },
      text: {
        pl: "**Obraz poetycki** to rodzaj obrazu namalowanego słowem: opis w utworze, na podstawie którego czytelnik może, wykorzystując wyobraźnię, stworzyć w myślach wyrazisty, plastyczny obraz świata przedstawionego.",
        ua: "**Поетичний образ** — картина, намальована словом: опис у творі, з якого читач може в думках створити виразний, пластичний образ зображеного світу."
      },
      items: [
        { pl: "Ze słów i ich znaczeń poeci *tworzą* takie obrazy — nie z fotografii.", ua: "Зі слів і їхніх значень поети *творять* такі образи — не з фотографії." },
        { pl: "Przykład z ramki (Stanisław Grochowiak) — wiersza nie tłumaczymy: „Czasem dobrze usiąść w oknie, / złożyć głowę swą na piąstkach – / i popłynąć liścia łódką / po liliowych bzu gałązkach.”", ua: "Приклад з рамки (Stanisław Grochowiak) — вірш не перекладаємо." }
      ],
      task: {
        id: "t11-s02-definicja",
        type: "single-choice",
        question: {
          pl: "Czym — według ramki — jest obraz poetycki?",
          ua: "Чим — за рамкою — є obraz poetycki?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Opisem w utworze, z którego czytelnik może w myślach stworzyć wyrazisty, plastyczny obraz świata.",
              ua: "Описом у творі, з якого читач може в думках створити виразний образ світу."
            }
          },
          { id: "b", label: { pl: "Tylko zdjęciem z internetu wklejonym do zeszytu.", ua: "Лише фото з інтернету, вклеєним у зошит." } },
          { id: "c", label: { pl: "Zawsze wykresem z matematyki.", ua: "Завжди графіком з математики." } }
        ],
        answer: "a",
        hint: {
          pl: "Drugi akapit ramki: „Obraz poetycki to taki opis…”",
          ua: "Другий абзац рамки: «Obraz poetycki to taki opis…»"
        },
        explanation: {
          pl: "Podręcznik: obraz namalowany słowem. Czytelnik wyobraża sobie świat przedstawiony.",
          ua: "Підручник: картина, намальована словом."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 1a · co widać u Miłosza?", ua: "Завд. 1а · що видно в Мілоша?" },
      formula: "USTNIE",
      promptPlace: "before",
      prompt: {
        pl: "Porozmawiajcie: które obrazy z wiersza da się „zobaczyć”? Potem zaznacz to, co NA PEWNO jest w tekście.",
        ua: "Поговоріть: які образи з вірша можна «побачити»? Потім познач те, що НАПЕВНО в тексті."
      },
      text: {
        pl: "Możliwe obrazy z wiersza (do rozmowy): domek na ziarnku; pieski i księżyc makowy; makówka pełna ziaren; ogród, dzieci, kołyszący się mak.",
        ua: "Можливі образи: хатинка на зерні; песики і місяць; маківка; сад, діти, мак."
      },
      task: {
        id: "t11-s03-obrazy",
        type: "multiple-choice",
        question: {
          pl: "Które obrazy NA PEWNO można wyodrębnić z wiersza? Zaznacz wszystkie pewne.",
          ua: "Які образи НАПЕВНО можна виділити з вірша? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Mały dom na ziarnku maku.", ua: "Малий дім на зерні маку." } },
          { id: "b", label: { pl: "Pieski szczekające na księżyc makowy.", ua: "Песики, що гавкають на маковий місяць." } },
          { id: "c", label: { pl: "Statek kosmiczny z dinozaurami.", ua: "Космічний корабель із динозаврами." } },
          { id: "d", label: { pl: "Dzieci w ogrodzie i kołyszący się mak.", ua: "Діти в саду і мак, що хитається." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Palcem w trzech strofach. Czego NIE ma?",
          ua: "Пальцем у трьох строфах. Чого НЕМАЄ?"
        },
        explanation: {
          pl: "Dom na ziarnku, psy i księżyc, dzieci i mak — są. Dinozaury — nie.",
          ua: "Дім на зерні, пси і місяць, діти і мак — є. Динозаврів немає."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 1b · ogród, makówka, ziarnko", ua: "Завд. 1б · ogród, makówka, ziarnko" },
      formula: "s. 27  ·  ZESZYT",
      promptPlace: "before",
      prompt: {
        pl: "Na podstawie odpowiednich fragmentów tekstu ustalcie, co — według was — oznaczają ogród, makówka, ziarnko maku. Najpierw cytat + wasza myśl. Potem przykład.",
        ua: "На основі фрагментів тексту встановіть, що означають ogród, makówka, ziarnko maku. Спочатку цитата, потім приклад."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Trzy kolumny w zeszycie. Nie otwieraj klucza, zanim wpiszesz swoje.",
            ua: "Три колонки в зошиті. Не відкривай ключ, доки не запишеш своє."
          }
        },
        {
          formula: "PRZYKŁAD EduMost  ·  nie jedyna dobra odpowiedź",
          text: {
            pl: [
              "ziarnko maku — „Ziemia to ziarnko”; inne ziarnka to planety i gwiazdy;",
              "makówka — „Wszystko w makówce”: całość światów, jak Wszechświat;",
              "ogród — tam rośnie mak i biegają dzieci: bliski, codzienny świat wokół nas."
            ],
            ua: [
              "ziarnko — Земля (і інші світи);",
              "makówka — ціле, як Всесвіт;",
              "ogród — близький щоденний світ."
            ]
          }
        }
      ],
      task: {
        id: "t11-s04-znaczenia",
        type: "single-choice",
        question: {
          pl: "Skąd brać znaczenia ogrodu, makówki i ziarnka?",
          ua: "Звідки брати значення ogrodu, makówki і ziarnka?"
        },
        options: [
          { id: "a", label: { pl: "Z odpowiednich fragmentów wiersza, a potem wasza interpretacja.", ua: "З відповідних фрагментів вірша, а тоді ваша інтерпретація." } },
          { id: "b", label: { pl: "Tylko z pierwszej lepszej reklamy maku.", ua: "Лише з першої-ліпшої реклами маку." } },
          { id: "c", label: { pl: "Nie trzeba czytać wiersza — wystarczy zgadywać.", ua: "Не треба читати вірш — досить вгадувати." } }
        ],
        answer: "a",
        hint: {
          pl: "Polecenie: „na podstawie odpowiednich fragmentów tekstu”.",
          ua: "Завдання: «на основі відповідних фрагментів тексту»."
        },
        explanation: {
          pl: "Podręcznik każe oprzeć się na fragmencie. Potem „według was” — interpretacja, nie reklama.",
          ua: "Підручник каже спертися на фрагмент. Потім «на вашу думку»."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 1c · wniosek", ua: "Завд. 1в · висновок" },
      formula: "zeszyt",
      promptPlace: "before",
      prompt: {
        pl: "Uzupełnijcie wniosek: „Przypowieść o maku pozwoliła nam sobie wyobrazić, że ?”. Najpierw sami.",
        ua: "Доповніть висновок: «Przypowieść o maku pozwoliła nam sobie wyobrazić, że ?». Спочатку самі."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Dokończ zdanie własnymi słowami. Potem możesz porównać z przykładem.",
            ua: "Докінчи речення своїми словами. Потім можна порівняти з прикладом."
          }
        },
        {
          formula: "PRZYKŁAD EduMost  ·  nie jedyna wersja",
          text: {
            pl: [
              "…że Ziemia jest jak ziarnko maku, a Wszechświat jak makówka — ogromny, pełen innych światów, a na każdym może być mały dom z ogrodem."
            ],
            ua: [
              "…що Земля як зерня маку, а Всесвіт як маківка — великий, повний інших світів."
            ]
          }
        }
      ],
      task: {
        id: "t11-s05-wniosek",
        type: "true-false",
        question: {
          pl: "Czy wniosek ma pokazać, CO wiersz pozwolił sobie wyobrazić (np. Ziemię jak ziarnko), a nie przepis na makowiec?",
          ua: "Чи висновок має показати, ЩО вірш дав уявити (напр. Землю як зерня), а не рецепт маковника?"
        },
        answer: true,
        hint: {
          pl: "Zdanie zaczyna się: pozwoliła nam sobie wyobrazić, że…",
          ua: "Речення: pozwoliła nam sobie wyobrazić, że…"
        },
        explanation: {
          pl: "Tak: to wniosek o wyobrażeniu świata z przypowieści, nie o cieście.",
          ua: "Так: висновок про уяву світу з притчі, не про тісто."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 1d–e · praca grupy", ua: "Завд. 1г–ґ · робота групи" },
      formula: "dowolna technika  ·  tytuł",
      promptPlace: "before",
      prompt: {
        pl: "d) Przydzielcie zadania wszystkim osobom w grupie i wykonajcie pracę (ilustracja dowolną techniką). e) Zatytułujcie swoją pracę. Tu nie ma jednego klucza-rysunku — jest lista, czego nie pominąć.",
        ua: "г) Розподіліть завдання в групі й зробіть ілюстрацію. ґ) Дайте назву. Немає одного «правильного» малюнка."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Najpierw podział ról i szkic. Tytuł na końcu — gdy już wiecie, który obraz wybraliście.",
            ua: "Спочатку ролі і ескіз. Назва наприкінці — коли вже знаєте, який образ обрали."
          }
        },
        {
          formula: "CHECKLISTA  ·  EduMost",
          text: {
            pl: [
              "Jest konkretny obraz z wiersza (nie przypadkowy mak z reklamy).",
              "Widać, czy to ziarnko, makówka, ogród, psy, dzieci…",
              "Tytuł wiąże się z wierszem (nie „Bez tytułu 3”)."
            ],
            ua: [
              "Є конкретний образ з вірша.",
              "Видно, що саме з тексту.",
              "Назва пов’язана з віршем."
            ]
          }
        }
      ],
      task: {
        id: "t11-s06-grupa",
        type: "multiple-choice",
        question: {
          pl: "Co grupa MUSI zrobić według zad. 1? Zaznacz wszystkie pewne.",
          ua: "Що група МУСИТЬ зробити за завд. 1? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Przydzielić zadania osobom w grupie i wykonać ilustrację.", ua: "Розподілити завдання в групі й зробити ілюстрацію." } },
          { id: "b", label: { pl: "Zatytułować pracę.", ua: "Дати роботі назву." } },
          { id: "c", label: { pl: "Wysłać rakietę na Marsa.", ua: "Відправити ракету на Марс." } },
          { id: "d", label: { pl: "Wybrać obraz poetycki z wiersza (zad. 1a).", ua: "Обрати поетичний образ з вірша (завд. 1а)." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Punkty a, d, e w zadaniu 1. Czego tam nie ma?",
          ua: "Пункти а, г, ґ у завданні 1. Чого там немає?"
        },
        explanation: {
          pl: "Jest: obrazy, praca grupy, tytuł. Nie ma lotu na Marsa.",
          ua: "Є: образи, робота групи, назва. Немає польоту на Марс."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 2 · przedstawcie pracę", ua: "Завд. 2 · представте роботу" },
      formula: "USTNIE",
      promptPlace: "before",
      prompt: {
        pl: "a) Szczegółowo opiszcie ilustrację. b) Wyjaśnijcie jej tytuł. c) Powiedzcie, który etap pracy był dla grupy najtrudniejszy.",
        ua: "а) Детально опишіть ілюстрацію. б) Поясніть назву. в) Скажіть, який етап був найважчий."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Trzy punkty na głos. Najpierw opis tego, CO widać, potem DLACZEGO taki tytuł, na końcu trudność.",
            ua: "Три пункти вголос. Спочатку ЩО видно, потім ЧОМУ така назва, наприкінці — труднощі."
          }
        },
        {
          formula: "WZÓR wypowiedzi  ·  EduMost",
          text: {
            pl: [
              "Opis: Na środku jest… Po lewej… Kolory… To obraz z wersu / strofy…",
              "Tytuł: …, bo w wierszu…",
              "Najtrudniejsze: np. podział ról / wybór jednego obrazu / napisanie tytułu."
            ],
            ua: [
              "Опис: у центрі… ліворуч… це образ із рядка…",
              "Назва: …, бо у вірші…",
              "Найважче: ролі / вибір образу / назва."
            ]
          }
        }
      ],
      task: {
        id: "t11-s07-prezentacja",
        type: "single-choice",
        question: {
          pl: "Czego zad. 2 NIE każe robić na forum?",
          ua: "Чого завд. 2 НЕ каже робити перед класом?"
        },
        options: [
          { id: "a", label: { pl: "Ukryć ilustrację i nic nie mówić o tytule ani o trudnościach.", ua: "Сховати ілюстрацію і нічого не казати про назву й труднощі." } },
          { id: "b", label: { pl: "Szczegółowo opisać ilustrację.", ua: "Детально описати ілюстрацію." } },
          { id: "c", label: { pl: "Wyjaśnić tytuł.", ua: "Пояснити назву." } }
        ],
        answer: "a",
        hint: {
          pl: "Przeczytaj a, b, c w zadaniu 2.",
          ua: "Прочитай а, б, в у завданні 2."
        },
        explanation: {
          pl: "Trzeba opisać, wyjaśnić tytuł i powiedzieć o trudnym etapie. Nie chować pracy.",
          ua: "Треба описати, пояснити назву і сказати про важкий етап."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Zad. 3 · wystawa", ua: "Завд. 3 · виставка" },
      formula: "s. 27",
      promptPlace: "before",
      prompt: {
        pl: "a) Pod każdą z prac umieśćcie podpis zawierający informacje o autorach i tytule. b) Zatytułujcie całą wystawę.",
        ua: "а) Під кожною роботою — підпис: автори і назва. б) Дайте назву всій виставці."
      },
      reveal: true,
      steps: [
        {
          visual: vizGh("t11-wystawa.png", {
            alt: {
              pl: "Ściana z pracami uczniów, pod każdą podpis: autorzy i tytuł",
              ua: "Стіна з роботами учнів, під кожною підпис: автори і назва"
            },
            title: { pl: "Slajd · wystawa", ua: "Слайд · виставка" },
            prompt: {
              pl: "Wstaw kadr: korytarz lub klasa, prace 5 klasy na ścianie, pod każdą kartka z imionami i tytułem, nad całością jeden tytuł wystawy. PNG. Przytnij znak wodny.",
              ua: "Встав кадр: виставка робіт, підписи, спільна назва."
            }
          }),
          text: {
            pl: "Najpierw podpis pod WASZĄ pracą i propozycja tytułu wystawy. Potem przykład.",
            ua: "Спочатку підпис під ВАШОЮ роботою і пропозиція назви виставки."
          }
        },
        {
          formula: "PRZYKŁAD EduMost  ·  nie jedyny tytuł",
          text: {
            pl: [
              "Podpis pod pracą: Tytuł pracy · imiona grupy · kl. 5.",
              "Tytuł wystawy (przykład): „Ziarnko i makówka” albo „Porównać kosmos do maku”."
            ],
            ua: [
              "Підпис: назва роботи · імена групи · 5 клас.",
              "Назва виставки (приклад): «Ziarnko i makówka» або «Porównać kosmos do maku»."
            ]
          }
        }
      ],
      task: {
        id: "t11-s08-wystawa",
        type: "multiple-choice",
        question: {
          pl: "Co MUSI być na wystawie według zad. 3? Zaznacz wszystkie pewne.",
          ua: "Що МАЄ бути на виставці за завд. 3? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Podpis pod każdą pracą: autorzy i tytuł.", ua: "Підпис під кожною роботою: автори і назва." } },
          { id: "b", label: { pl: "Tytuł całej wystawy.", ua: "Назва всієї виставки." } },
          { id: "c", label: { pl: "Bilet w cenie stu złotych.", ua: "Квиток за сто злотих." } }
        ],
        answer: ["a", "b"],
        hint: {
          pl: "Dwa polecenia: a i b.",
          ua: "Два пункти: а і б."
        },
        explanation: {
          pl: "Podpis (autorzy + tytuł pracy) i tytuł wystawy. Cennik biletów — nie z podręcznika.",
          ua: "Підпис і назва виставки. Ціни квитків у підручнику немає."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Relacja do gazetki", ua: "Репортаж до стіннівки" },
      formula: "program · artykuł",
      promptPlace: "before",
      prompt: {
        pl: "W programie jest też: artykuł do szkolnej gazetki — relacja z wystawy. Tego nie ma jako osobne zadanie na s. 27, ale pasuje po zad. 3. Kilka zdań w zeszycie. Przykład — wzór, nie gotowiec.",
        ua: "У програмі є також стаття до шкільної стіннівки — репортаж з виставки. Кілька речень у зошит."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: "Napisz: gdzie była wystawa, jaki miała tytuł, którą pracę zapamiętałeś i dlaczego.",
            ua: "Напиши: де була виставка, яка назва, яку роботу запам’ятав і чому."
          }
        },
        {
          formula: "WZÓR początku  ·  EduMost",
          text: {
            pl: [
              "W klasie 5 odbyła się wystawa ilustracji do wiersza Czesława Miłosza „Przypowieść o maku”.",
              "Tytuł wystawy: … Najbardziej zapamiętałem pracę …, bo pokazywała …"
            ],
            ua: [
              "У 5 класі була виставка ілюстрацій до вірша Мілоша.",
              "Назва виставки: … Найбільше запам’ятав роботу …, бо…"
            ]
          }
        }
      ],
      task: {
        id: "t11-s09-gazetka",
        type: "true-false",
        question: {
          pl: "Czy relacja z wystawy powinna powiedzieć, CO się wydarzyło (wystawa, tytuł, prace), a nie tylko „było fajnie” bez faktów?",
          ua: "Чи репортаж має сказати, ЩО сталося (виставка, назва, роботи), а не лише «було файно» без фактів?"
        },
        answer: true,
        hint: {
          pl: "Relacja = kto, co, gdzie. Potem wrażenie.",
          ua: "Репортаж = хто, що, де. Потім враження."
        },
        explanation: {
          pl: "Tak: najpierw fakty z wystawy, potem krótka opinia. Samo „fajnie” to za mało.",
          ua: "Так: спочатку факти, потім коротка думка."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Notatka do zeszytu", ua: "Нотатка до зошита" },
      promptPlace: "after",
      prompt: {
        pl: "Obraz poetycki = obraz namalowany słowem. Ilustracja z wiersza + tytuł. Wystawa: podpis (autorzy, tytuł pracy) + tytuł całości. Wiersz i terminy — lekcja 10.",
        ua: "Obraz poetycki = картина словом. Ілюстрація + назва. Виставка: підпис + назва цілого. Вірш — урок 10."
      },
      items: [
        { pl: "Obraz poetycki — z ramki na s. 27.", ua: "Поетичний образ — з рамки на с. 27." },
        { pl: "Znaczenia ogrodu, makówki, ziarnka — z fragmentów wiersza.", ua: "Значення ogrodu, makówki, ziarnka — з фрагментів вірша." },
        { pl: "Wystawa: podpis pod pracą i tytuł wystawy.", ua: "Виставка: підпис під роботою і назва виставки." }
      ],
      task: {
        id: "t11-s10-notatka",
        type: "single-choice",
        question: {
          pl: "Co zostawiasz po lekcji 11?",
          ua: "Що лишаєш після уроку 11?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Zrobiłem ilustrację do obrazu z wiersza, dałem tytuł, na wystawie jest podpis z autorami.",
              ua: "Зробив ілюстрацію до образу з вірша, дав назву, на виставці є підпис з авторами."
            }
          },
          { id: "b", label: { pl: "Nic nie rysowaliśmy — tylko dyktando z ch.", ua: "Нічого не малювали — лише диктант з ch." } },
          { id: "c", label: { pl: "Wystawa była o rz niewymiennym w Rzeszowie.", ua: "Виставка була про rz незмінне в Жешуві." } }
        ],
        answer: "a",
        hint: {
          pl: "Co jest na s. 27? Ilustracja i wystawa czy ortografia?",
          ua: "Що на с. 27? Ілюстрація і виставка чи орфографія?"
        },
        explanation: {
          pl: "Lekcja 11 to zadania plastyczno-grupowe do Miłosza. Ortografia była wcześniej.",
          ua: "Урок 11 — ілюстрація і виставка до Мілоша."
        }
      }
    }
  ]
};
