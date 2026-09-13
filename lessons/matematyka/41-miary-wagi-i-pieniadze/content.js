function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Zakupy, mapa i droga",
        ua: "Покупки, карта і дорога"
      },
      formula: "1 zł = 100 gr",
      text: {
        pl: [
          "W sklepie liczymy złote i grosze, kilogramy i centymetry.",
          "Dziś: czy starczy pieniędzy, ile zostanie, ile to kilometrów na mapie i jak daleko dojedziemy."
        ],
        ua: [
          "У магазині рахуємо злоті й гроші, кілограми й сантиметри.",
          "Сьогодні: чи вистачить грошей, скільки зостанеться, скільки це кілометрів на карті і як далеко доїдемо."
        ]
      }
    },
    {
      type: "goal",
      heading: {
        pl: "Co będziesz umieć?",
        ua: "Що ти вмітимеш?"
      },
      items: [
        { pl: "zamieniać złote i grosze, metry i kilogramy", ua: "переводити злоті й гроші, метри й кілограми" },
        { pl: "liczyć resztę przy zakupach", ua: "рахувати решту при покупках" },
        { pl: "odczytać skalę mapy (cm ↔ km)", ua: "прочитати масштаб карти (см ↔ км)" },
        { pl: "obliczyć drogę ze wzoru s = v · t", ua: "обчислити шлях за формулою s = v · t" },
        { pl: "wziąć 10% albo 50% ceny jako ułamek", ua: "узяти 10% або 50% ціни як дріб" },
        { pl: "oszacować, czy pieniądze wystarczą", ua: "прикинути, чи вистачить грошей" }
      ]
    },
    {
      type: "observe",
      heading: {
        pl: "Jednostki, które spotkasz w sklepie",
        ua: "Одиниці, які зустрінеш у магазині"
      },
      text: {
        pl: [
          "Zanim liczysz resztę, ustaw jednostki obok siebie.",
          "Grosze do groszy, centymetry do centymetrów."
        ],
        ua: [
          "Перш ніж рахувати решту, постав одиниці поруч.",
          "Гроші до грошей, сантиметри до сантиметрів."
        ]
      },
      items: [
        { pl: "1 zł = 100 gr", ua: "1 zł = 100 гр" },
        { pl: "1 m = 100 cm", ua: "1 м = 100 см" },
        { pl: "1 km = 1000 m", ua: "1 км = 1000 м" },
        { pl: "1 kg = 1000 g", ua: "1 кг = 1000 г" }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Złote, grosze i reszta",
        ua: "Злоті, гроші і решта"
      },
      formula: "20 zł − 13 zł 70 gr = 6 zł 30 gr",
      text: {
        pl: [
          ["Najpewniej jest sprowadzić wszystko do ", em("groszy"), "."],
          "20 zł to 2000 gr. 13 zł 70 gr to 1370 gr.",
          ["2000 − 1370 = 630 gr, czyli ", em("6 zł 30 gr"), "."]
        ],
        ua: [
          ["Найпевніше все звести до ", em("грошів"), "."],
          "20 zł — це 2000 гр. 13 zł 70 гр — це 1370 гр.",
          ["2000 − 1370 = 630 гр, тобто ", em("6 zł 30 гр"), "."]
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Wstążka w sklepie",
        ua: "Стрічка в магазині"
      },
      reveal: true,
      steps: [
        {
          formula: "2 m 30 cm = 230 cm",
          text: {
            pl: "Kupujemy 2 m 30 cm wstążki. Odcinamy 3 kawałki po 70 cm.",
            ua: "Купуємо 2 м 30 см стрічки. Відрізаємо 3 шматки по 70 см."
          }
        },
        { formula: "3 · 70 cm = 210 cm" },
        {
          formula: "230 − 210 = 20 cm",
          text: {
            pl: ["Zostanie ", em("20 cm"), " wstążki."],
            ua: ["Залишиться ", em("20 см"), " стрічки."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "Skala mapy: 2 cm ↔ 1 km",
        ua: "Масштаб карти: 2 см ↔ 1 км"
      },
      formula: "2 cm na mapie  ↔  1 km w terenie",
      text: {
        pl: [
          "Na mapie odcinek 2 cm oznacza 1 kilometr w rzeczywistości.",
          ["Jeśli na mapie jest ", em("10 cm"), ", to par jest 10 : 2 = 5, więc w terenie ", em("5 km"), "."],
          "Najpierw: ile razy ten odcinek 2 cm mieści się na mapie. Potem tyle kilometrów."
        ],
        ua: [
          "На карті відрізок 2 см означає 1 кілометр у дійсності.",
          ["Якщо на карті ", em("10 см"), ", то пар 10 : 2 = 5, отже в місцевості ", em("5 км"), "."],
          "Спочатку: скільки разів відрізок 2 см вміщається на карті. Потім стільки кілометрів."
        ]
      }
    },
    {
      type: "example",
      heading: {
        pl: "Droga: s = v · t",
        ua: "Шлях: s = v · t"
      },
      reveal: true,
      steps: [
        {
          formula: "s = v · t",
          text: {
            pl: ["Rower jedzie ze stałą prędkością ", em("15 km/h"), " przez ", em("2 h"), "."],
            ua: ["Велосипед їде зі сталою швидкістю ", em("15 км/год"), " протягом ", em("2 год"), "."]
          }
        },
        { formula: "s = 15 · 2" },
        {
          formula: "s = 30 km",
          text: {
            pl: ["Prędkość w km/h razy czas w godzinach daje drogę w ", em("kilometrach"), "."],
            ua: ["Швидкість у км/год, помножена на час у годинах, дає шлях у ", em("кілометрах"), "."]
          }
        }
      ]
    },
    {
      type: "concept",
      heading: {
        pl: "10% i 50% ceny — jak ułamek",
        ua: "10% і 50% ціни — як дріб"
      },
      formula: "10% = 1/10,    50% = 1/2",
      text: {
        pl: [
          ["Dziesięć procent to po prostu ", em("jedna dziesiąta"), ". Pięćdziesiąt procent to ", em("połowa"), "."],
          ["10% z 80 zł to 80 : 10 = ", em("8 zł"), "."],
          ["50% z 48 zł to 48 : 2 = ", em("24 zł"), "."],
          "Nie liczysz jeszcze „p procent z b” wzorem z klasy 7 — tylko te dwa wygodne ułamki."
        ],
        ua: [
          ["Десять відсотків — це просто ", em("одна десята"), ". П’ятдесят відсотків — це ", em("половина"), "."],
          ["10% від 80 zł — це 80 : 10 = ", em("8 zł"), "."],
          ["50% від 48 zł — це 48 : 2 = ", em("24 zł"), "."],
          "Ще не рахуєш «p відсотків від b» формулою з 7 класу — лише ці два зручні дроби."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: {
        pl: "Język matematyczny",
        ua: "Математична мова"
      },
      rows: [
        { pl: "złoty, grosz", ua: "злотий, гріш" },
        { pl: "reszta", ua: "решта" },
        { pl: "masa, kilogram, gram", ua: "маса, кілограм, грам" },
        { pl: "skala mapy", ua: "масштаб карти" },
        { pl: "droga, prędkość, czas", ua: "шлях, швидкість, час" },
        { pl: "oszacować", ua: "прикинути" }
      ],
      phrases: [
        { pl: "Oblicz resztę.", ua: "Обчисли решту." },
        { pl: "Czy pieniędzy wystarczy?", ua: "Чи вистачить грошей?" },
        { pl: "Odczytaj skalę mapy.", ua: "Прочитай масштаб карти." }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "Grosze",
        ua: "Гроші"
      },
      task: {
        id: "miary-guided-gr",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Ile groszy to ", em("3 zł 40 gr"), "? Wpisz samą liczbę groszy."],
          ua: ["Скільки грошів у ", em("3 zł 40 гр"), "? Введи лише число грошів."]
        },
        answer: 340,
        hint: {
          pl: "1 zł = 100 gr. Najpierw złote, potem dodaj 40.",
          ua: "1 zł = 100 гр. Спочатку злоті, потім додай 40."
        },
        explanation: {
          pl: "3 · 100 = 300, plus 40 groszy daje 340 gr.",
          ua: "3 · 100 = 300, плюс 40 грошів дає 340 гр."
        },
        mistakes: [
          {
            answer: 3400,
            feedback: {
              pl: "Za dużo zer. 3 zł to 300 groszy, nie 3000.",
              ua: "Забагато нулів. 3 zł — це 300 грошів, не 3000."
            }
          },
          {
            answer: 43,
            feedback: {
              pl: "To sklejenie 3 i 40 od tyłu. 3 zł = 300 gr.",
              ua: "Це склеювання 3 і 40. 3 zł = 300 гр."
            }
          }
        ]
      }
    },
    {
      type: "mistake",
      heading: {
        pl: "Czy to jest dobrze?",
        ua: "Чи це добре?"
      },
      claim: {
        pl: "1,5 kg = 150 g",
        ua: "1,5 кг = 150 г"
      },
      text: {
        pl: [
          ["1 kg = 1000 g, więc pół kilograma to 500 g."],
          ["1,5 kg = 1000 g + 500 g = ", em("1500 g"), ", nie 150 g."]
        ],
        ua: [
          ["1 кг = 1000 г, тож пів кілограма — 500 г."],
          ["1,5 кг = 1000 г + 500 г = ", em("1500 г"), ", не 150 г."]
        ]
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Połowa ceny",
        ua: "Половина ціни"
      },
      task: {
        id: "miary-half-price",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Bluza kosztuje ", em("48 zł"), ". Dziś jest 50% taniej, czyli za połowę. Ile złotych zapłacisz?"],
          ua: ["Кофта коштує ", em("48 zł"), ". Сьогодні 50% дешевше, тобто за половину. Скільки злотих заплатиш?"]
        },
        answer: 24,
        hint: {
          pl: "50% = 1/2. Podziel 48 na 2.",
          ua: "50% = 1/2. Поділи 48 на 2."
        },
        explanation: {
          pl: "50% to połowa. 48 : 2 = 24 zł.",
          ua: "50% — це половина. 48 : 2 = 24 zł."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "Dziesiąta część ceny",
        ua: "Десята частина ціни"
      },
      task: {
        id: "miary-tenth-price",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Książka kosztuje ", em("80 zł"), ". 10% ceny odkładasz na prezent. Ile złotych odkładasz?"],
          ua: ["Книжка коштує ", em("80 zł"), ". 10% ціни відкладаєш на подарунок. Скільки злотих відкладаєш?"]
        },
        answer: 8,
        hint: {
          pl: "10% = 1/10. Podziel 80 na 10.",
          ua: "10% = 1/10. Поділи 80 на 10."
        },
        explanation: {
          pl: "10% to jedna dziesiąta. 80 : 10 = 8 zł.",
          ua: "10% — одна десята. 80 : 10 = 8 zł."
        },
        mistakes: [
          {
            answer: 10,
            feedback: {
              pl: "10 to sama liczba procentów, nie 10% z 80. Weź jedną dziesiątą z 80.",
              ua: "10 — це саме число відсотків, не 10% від 80. Візьми одну десяту від 80."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Szlak na mapie",
        ua: "Маршрут на карті"
      },
      text: {
        pl: [
          ["Na mapie ", em("2 cm"), " odpowiadają ", em("1 km"), " w terenie."],
          ["Szlak ma na mapie ", em("14 cm"), "."]
        ],
        ua: [
          ["На карті ", em("2 см"), " відповідають ", em("1 км"), " у місцевості."],
          ["Маршрут на карті має ", em("14 см"), "."]
        ]
      },
      task: {
        id: "miary-map-scale",
        type: "input-number",
        level: "B",
        question: {
          pl: "Ile kilometrów ma szlak w terenie? Wpisz liczbę kilometrów.",
          ua: "Скільки кілометрів має маршрут у місцевості? Введи число кілометрів."
        },
        answer: 7,
        hint: {
          pl: "Ile razy odcinek 2 cm mieści się w 14 cm?",
          ua: "Скільки разів відрізок 2 см вміщається в 14 см?"
        },
        explanation: {
          pl: "14 : 2 = 7, więc 7 km.",
          ua: "14 : 2 = 7, отже 7 км."
        },
        mistakes: [
          {
            answer: 28,
            feedback: {
              pl: "Pomnożyłeś 14 · 2. Tu 2 cm to już 1 km, więc dzielisz 14 : 2.",
              ua: "Помножив 14 · 2. Тут 2 см — це вже 1 км, тож ділиш 14 : 2."
            }
          },
          {
            answer: 14,
            feedback: {
              pl: "14 cm na mapie to nie 14 km. Każde 2 cm to 1 km.",
              ua: "14 см на карті — це не 14 км. Кожні 2 см — це 1 км."
            }
          }
        ]
      }
    },
    {
      type: "problem",
      heading: {
        pl: "Rower do jeziora",
        ua: "Велосипед до озера"
      },
      text: {
        pl: [
          ["Jedziesz ", em("12 km/h"), " przez ", em("3 h"), "."],
          ["Droga: ", em("s = v · t"), "."]
        ],
        ua: [
          ["Їдеш ", em("12 км/год"), " протягом ", em("3 год"), "."],
          ["Шлях: ", em("s = v · t"), "."]
        ]
      },
      task: {
        id: "miary-speed-time",
        type: "input-number",
        level: "B",
        question: {
          pl: "Ile kilometrów przejedziesz? Wpisz liczbę kilometrów.",
          ua: "Скільки кілометрів проїдеш? Введи число кілометрів."
        },
        answer: 36,
        hint: {
          pl: "s = 12 · 3.",
          ua: "s = 12 · 3."
        },
        explanation: {
          pl: "s = 12 · 3 = 36 km.",
          ua: "s = 12 · 3 = 36 км."
        },
        mistakes: [
          {
            answer: 15,
            feedback: {
              pl: "Dodałeś 12 + 3. Wzór to mnożenie: prędkość razy czas.",
              ua: "Додав 12 + 3. Формула — множення: швидкість на час."
            }
          },
          {
            answer: 4,
            feedback: {
              pl: "To byłoby 12 : 3. Tu mnożymy, nie dzielimy.",
              ua: "Так було б 12 : 3. Тут множимо, не ділимо."
            }
          }
        ]
      }
    },
    {
      type: "challenge",
      heading: {
        pl: "Czy starczy 40 zł?",
        ua: "Чи вистачить 40 zł?"
      },
      text: {
        pl: [
          ["Masz ", em("40 zł"), ". Kupujesz: zeszyt ", em("12 zł 90 gr"), ", flamastry ", em("8 zł 50 gr"), ", blok ", em("15 zł 80 gr"), "."],
          "Najpierw oszacuj (zaokrąglij do pełnych złotych), potem policz dokładnie w groszach."
        ],
        ua: [
          ["Маєш ", em("40 zł"), ". Купуєш: зошит ", em("12 zł 90 гр"), ", фломастери ", em("8 zł 50 гр"), ", блок ", em("15 zł 80 гр"), "."],
          "Спочатку прикинь (округлі до повних злотих), потім полічи точно в грошах."
        ]
      },
      task: {
        id: "miary-enough-money",
        type: "single-choice",
        level: "C",
        question: {
          pl: "Która odpowiedź jest prawdziwa?",
          ua: "Яка відповідь правдива?"
        },
        options: [
          { id: "a", label: { pl: "Wystarczy; zostanie 2 zł 80 gr", ua: "Вистачить; залишиться 2 zł 80 гр" } },
          { id: "b", label: { pl: "Nie wystarczy; brakuje 2 zł 80 gr", ua: "Не вистачить; бракує 2 zł 80 гр" } },
          { id: "c", label: { pl: "Wystarczy; zostanie 5 zł", ua: "Вистачить; залишиться 5 zł" } }
        ],
        answer: "a",
        hint: {
          pl: "Szacunek: 13 + 9 + 16 = 38 zł. Potem grosze: 1290 + 850 + 1580.",
          ua: "Прикидка: 13 + 9 + 16 = 38 zł. Потім гроші: 1290 + 850 + 1580."
        },
        explanation: {
          pl: "Szacunek: 13 + 9 + 16 = 38 zł — powinno wystarczyć. Dokładnie: 1290 + 850 = 2140, +1580 = 3720 gr. 4000 − 3720 = 280 gr, czyli 2 zł 80 gr.",
          ua: "Прикидка: 13 + 9 + 16 = 38 zł — має вистачити. Точно: 1290 + 850 = 2140, +1580 = 3720 гр. 4000 − 3720 = 280 гр, тобто 2 zł 80 гр."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Suma 37 zł 20 gr jest mniejsza niż 40 zł. Pieniędzy wystarczy.",
              ua: "Сума 37 zł 20 гр менша ніж 40 zł. Грошей вистачить."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "5 zł to zaokrąglenie bez groszy (40 − 35). Policz grosze: zostanie 2 zł 80 gr.",
              ua: "5 zł — це округлення без грошів (40 − 35). Полічи гроші: залишиться 2 zł 80 гр."
            }
          }
        ]
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Reszta",
        ua: "Чи вже вмію? Решта"
      },
      task: {
        id: "miary-check-rest",
        type: "input-number",
        level: "A",
        question: {
          pl: ["Płacisz ", em("10 zł"), " za bułki za ", em("7 zł 20 gr"), ". Ile groszy reszty dostaniesz?"],
          ua: ["Платиш ", em("10 zł"), " за булочки за ", em("7 zł 20 гр"), ". Скільки грошів решти отримаєш?"]
        },
        answer: 280,
        hint: {
          pl: "10 zł = 1000 gr. 7 zł 20 gr = 720 gr.",
          ua: "10 zł = 1000 гр. 7 zł 20 гр = 720 гр."
        },
        explanation: {
          pl: "1000 − 720 = 280 gr, czyli 2 zł 80 gr.",
          ua: "1000 − 720 = 280 гр, тобто 2 zł 80 гр."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "Czy już umiem? Skala",
        ua: "Чи вже вмію? Масштаб"
      },
      task: {
        id: "miary-check-map",
        type: "input-number",
        level: "B",
        question: {
          pl: ["Na mapie ", em("2 cm"), " ↔ ", em("1 km"), ". Odcinek ma ", em("8 cm"), ". Ile to kilometrów w terenie?"],
          ua: ["На карті ", em("2 см"), " ↔ ", em("1 км"), ". Відрізок має ", em("8 см"), ". Скільки це кілометрів у місцевості?"]
        },
        answer: 4,
        hint: {
          pl: "8 : 2.",
          ua: "8 : 2."
        },
        explanation: {
          pl: "8 : 2 = 4 km.",
          ua: "8 : 2 = 4 км."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "Najważniejsze",
        ua: "Найважливіше"
      },
      formula: "1 zł = 100 gr,   2 cm ↔ 1 km,   s = v · t",
      text: {
        pl: [
          "Przed odejmowaniem sprowadź do groszy albo centymetrów.",
          "Na mapie: ile razy odcinek skali mieści się w pomiarze.",
          ["10% to ", em("1/10"), ", 50% to ", em("1/2"), ". Najpierw oszacuj, potem licz dokładnie."]
        ],
        ua: [
          "Перед відніманням зведи до грошів або сантиметрів.",
          "На карті: скільки разів відрізок масштабу вміщається у вимірі.",
          ["10% — це ", em("1/10"), ", 50% — це ", em("1/2"), ". Спочатку прикинь, потім рахуй точно."]
        ]
      }
    },
    {
      type: "review",
      heading: {
        pl: "Wrócimy do tego",
        ua: "Ми до цього повернемось"
      },
      text: {
        pl: [
          "Później znów: reszta przy kasie, odcinek na mapie, droga przy stałej prędkości.",
          "To nie nowy materiał — krótka powtórka miar i pieniędzy."
        ],
        ua: [
          "Пізніше знову: решта на касі, відрізок на карті, шлях при сталій швидкості.",
          "Це не новий матеріал — коротке повторення мір і грошей."
        ]
      }
    }
  ]
};
