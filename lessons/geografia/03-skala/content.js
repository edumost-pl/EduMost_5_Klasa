function em(text) {
  return { text: text, emphasis: true };
}

function img(file, altPl, altUa, place) {
  const spec = {
    kind: "image",
    file: "./img/" + file,
    alt: { pl: altPl, ua: altUa },
    title: { pl: altPl, ua: altUa }
  };
  if (place) spec.place = place;
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    // 01
    {
      type: "intro",
      heading: { pl: "1. Misja: trzy zapisy skali", ua: "1. Місія: три записи масштабу" },
      visual: img(
        "trzy-100.png",
        "Trzy zapisy jednej skali: 1 : 100 000, 1 cm – 1 km i pasek, na którym jeden odcinek ma 1 km",
        "Три записи одного масштабу: число, запис з одиницями і смужка з кроком 1 км"
      ),
      text: {
        pl: [
          "Na mapie odległości są mniejsze niż w rzeczywistości. **Skala** pomaga odczytać, jakiej odległości w terenie odpowiada odległość na mapie.",
          "W tej misji poznasz trzy sposoby zapisywania skali i nauczysz się rozpoznawać, kiedy oznaczają to samo.",
          "Odległości między obiektami linijką zmierzysz w następnej lekcji. Dziś tylko zapis skali."
        ],
        ua: [
          "На карті відстані менші, ніж у реальності. **Масштаб** допомагає визначити, якій відстані на місцевості відповідає відстань на карті.",
          "У цій місії ти познайомишся з трьома способами запису масштабу й навчишся розпізнавати, коли вони означають одне й те саме.",
          "Відстань між об’єктами лінійкою з пенала виміряєш на наступному уроці. Сьогодні лише запис масштабу."
        ]
      }
    },
    {
      type: "guided-practice",
      heading: { pl: "2. Co mówi skala?", ua: "2. Що каже масштаб?" },
      visual: img(
        "napisy-plan.png",
        "Trzy napisy na planie: Stare Miasto, krzyż ze słowem kościół i pasek 0–200 m",
        "Три написи на плані: назва міста, хрест зі словом і смужка 0–200 м"
      ),
      text: {
        pl: [
          "**Skala** mapy pokazuje, ile razy zmniejszono rzeczywiste odległości.",
          "Na przykład zapis 1 : 100 000 oznacza, że 1 cm na mapie odpowiada 100 000 cm w terenie.",
          [em("Tytuł"), " nazywa cały obszar. ", em("Legenda"), " wyjaśnia znaki. ", em("Skala"), " podaje stosunek odległości na mapie i w terenie."]
        ],
        ua: [
          "**Масштаб** карти показує, у скільки разів зменшено реальні відстані.",
          "Наприклад, запис 1 : 100 000 означає, що 1 см на карті відповідає 100 000 см на місцевості.",
          [em("Заголовок"), " називає всю територію. ", em("Легенда"), " пояснює знаки. ", em("Масштаб"), " подає відношення відстані на карті і на місцевості."]
        ]
      },
      task: {
        id: "g03-02",
        type: "single-choice",
        question: {
          pl: "Który element mapy informuje o zmniejszeniu odległości?",
          ua: "Який елемент карти повідомляє про зменшення відстані?"
        },
        options: [
          { id: "a", label: { pl: "skala — pasek 0–200 m", ua: "масштаб — смужка 0–200 м" } },
          { id: "b", label: { pl: "tytuł — napis Stare Miasto", ua: "заголовок — напис Старе місто" } },
          { id: "c", label: { pl: "legenda — krzyż i słowo kościół", ua: "легенда — хрест і слово костел" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj paska z metrami. Nazwa miasta i znak kościoła mają inne role.",
          ua: "Шукай смужку з метрами. Назва міста і знак костела мають інші ролі."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tytuł tylko nazywa obszar. Wróć do paska na dole obrazka: tam jest zmniejszenie.",
              ua: "Заголовок лише називає територію. Повернися до смужки внизу зображення: там є зменшення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Legenda tłumaczy znak. Nie mówi, ile razy zmniejszono odległość. Wróć do paska z metrami.",
              ua: "Легенда пояснює знак. Не каже, у скільки разів зменшено відстань. Повернися до смужки з метрами."
            }
          }
        ],
        explanation: {
          pl: "O zmniejszeniu mówi skala. Na tym planie jest nią pasek 0–200 m, a nie nazwa miasta i nie wiersz kościoła.",
          ua: "Про зменшення каже масштаб. На цьому плані ним є смужка 0–200 м, а не назва міста і не рядок костела."
        }
      }
    },
    {
      type: "guided-practice",
      heading: { pl: "3. Skala liczbowa", ua: "3. Числовий масштаб" },
      formula: "1 : 100 000",
      text: {
        pl: [
          "**Skala liczbowa** ma postać 1 : liczba.",
          "Czytamy ją tak: 1 cm na mapie odpowiada 100 000 cm w terenie.",
          "Na razie nie zmieniamy jednostek. Najpierw poprawnie odczytaj zapis."
        ],
        ua: [
          "**Числовий масштаб** має вигляд 1 : число.",
          "Читаємо його так: 1 см на карті відповідає 100 000 см на місцевості.",
          "Поки що не змінюємо одиниці. Спочатку правильно прочитай запис."
        ]
      },
      visual: img(
        "zapis-50000.png",
        "Zapis skali 1 : 50 000",
        "Запис масштабу 1 : 50 000",
        "after"
      ),
      task: {
        id: "g03-03",
        type: "single-choice",
        question: {
          pl: "Jak czytasz zapis z obrazka: 1 : 50 000?",
          ua: "Як читаєш запис із зображення: 1 : 50 000?"
        },
        options: [
          { id: "a", label: { pl: "1 cm na mapie odpowiada 50 000 cm w terenie.", ua: "1 см на карті відповідає 50 000 см на місцевості." } },
          { id: "b", label: { pl: "1 cm na mapie odpowiada 50 000 km w terenie.", ua: "1 см на карті відповідає 50 000 км на місцевості." } },
          { id: "c", label: { pl: "1 cm na mapie odpowiada 50 cm w terenie.", ua: "1 см на карті відповідає 50 см на місцевості." } }
        ],
        answer: "a",
        hint: {
          pl: "Liczba po dwukropku zostaje w centymetrach. Jeszcze nie zamieniasz jej na kilometry.",
          ua: "Число після двокрапки лишається в сантиметрах. Ще не переводиш його в кілометри."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kilometry pojawią się później, po zamianie jednostek. Wróć do odczytu: liczba zostaje w centymetrach.",
              ua: "Кілометри з’являться пізніше, після заміни одиниць. Повернися до читання: число лишається в сантиметрах."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Z liczby zniknęły zera. Wróć do całego zapisu 50 000 i zostaw centymetry.",
              ua: "Із числа зникли нулі. Повернися до всього запису 50 000 і залиш сантиметри."
            }
          }
        ],
        explanation: {
          pl: "1 : 50 000 czytasz: 1 cm na mapie odpowiada 50 000 cm w terenie.",
          ua: "1 : 50 000 читаєш так: 1 см на карті відповідає 50 000 см на місцевості."
        }
      }
    },
    {
      type: "example",
      heading: { pl: "4. Robimy to razem", ua: "4. Робимо це разом" },
      reveal: true,
      steps: [
        {
          formula: "1 cm = 100 000 cm",
          text: {
            pl: ["Bierzemy zapis 1 : 100 000. Najpierw bez zamiany: 1 cm na mapie = 100 000 cm w terenie."],
            ua: ["Беремо запис 1 : 100 000. Спочатку без заміни: 1 см на карті = 100 000 см на місцевості."]
          }
        },
        {
          formula: "100 000 cm = 1 000 m",
          text: {
            pl: ["100 cm = 1 m, więc centymetry zamieniamy na metry, dzieląc przez 100. 100 000 cm = 1 000 m."],
            ua: ["100 см = 1 м, тож сантиметри переводимо в метри, ділячи на 100. 100 000 см = 1 000 м."]
          }
        },
        {
          formula: "1 000 m = 1 km",
          text: {
            pl: ["1 000 m = 1 km. Z 1 000 m wychodzi 1 km."],
            ua: ["1 000 м = 1 км. Із 1 000 м виходить 1 км."]
          }
        },
        {
          formula: "1 : 100 000 → 1 cm – 1 km",
          text: {
            pl: ["Wychodzi **skala mianowana**: 1 cm – 1 km. Najpierw sens jednostek. Skracanie zer tylko potem, gdy wynik już znasz."],
            ua: ["Виходить **іменований масштаб**: 1 см – 1 км. Спочатку сенс одиниць. Скорочення нулів — лише потім, коли результат уже знаєш."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "5. Spróbuj sam", ua: "5. Спробуй сам" },
      visual: img(
        "zapis-200000.png",
        "Zapis skali 1 : 200 000",
        "Запис масштабу 1 : 200 000"
      ),
      text: {
        pl: ["Zamień skalę liczbową na mianowaną. Jednostki sprawdzaj po kolei: centymetry, metry, kilometry."],
        ua: ["Переведи числовий масштаб в іменований. Одиниці перевіряй по черзі: сантиметри, метри, кілометри."]
      },
      task: {
        id: "g03-05",
        type: "single-choice",
        question: {
          pl: "Zamień skalę 1 : 200 000 na skalę mianowaną.",
          ua: "Переведи масштаб 1 : 200 000 в іменований масштаб."
        },
        options: [
          { id: "a", label: { pl: "1 cm – 2 km", ua: "1 см – 2 км" } },
          { id: "b", label: { pl: "1 cm – 200 km", ua: "1 см – 200 км" } },
          { id: "c", label: { pl: "1 cm – 200 m", ua: "1 см – 200 м" } }
        ],
        answer: "a",
        hint: {
          pl: "Zostaw najpierw centymetry. Podziel przez 100, żeby dostać metry. Potem sprawdź, ile razy mieści się 1 000 m.",
          ua: "Спочатку залиш сантиметри. Поділи на 100, щоб отримати метри. Потім перевір, скільки разів уміщується 1 000 м."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "200 km zostawia liczbę prawie bez zamiany. Wróć do dzielenia centymetrów przez 100.",
              ua: "200 км лишає число майже без заміни. Повернися до ділення сантиметрів на 100."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "200 m to za krótki wynik. Po metrach sprawdź jeszcze kilometry: 1 000 m = 1 km.",
              ua: "200 м — це закороткий результат. Після метрів перевір ще кілометри: 1 000 м = 1 км."
            }
          }
        ],
        explanation: {
          pl: "200 000 cm = 2 000 m = 2 km. Skala mianowana: 1 cm – 2 km.",
          ua: "200 000 см = 2 000 м = 2 км. Іменований масштаб: 1 см – 2 км."
        }
      }
    },
    {
      type: "guided-practice",
      heading: { pl: "6. Skala mianowana", ua: "6. Іменований масштаб" },
      formula: "1 cm – 5 km",
      text: {
        pl: [
          "**Skala mianowana** podaje odległość na mapie i odpowiadającą jej odległość w terenie razem z jednostkami.",
          "Zapis 1 cm – 5 km oznacza, że 1 cm na mapie odpowiada 5 km w terenie."
        ],
        ua: [
          "**Іменований масштаб** подає відстань на карті і відповідну їй відстань на місцевості разом з одиницями.",
          "Запис 1 см – 5 км означає, що 1 см на карті відповідає 5 км на місцевості."
        ]
      },
      items: [
        { pl: [em("1 cm"), " — odległość na mapie."], ua: [em("1 см"), " — відстань на карті."] },
        { pl: [em("5 km"), " — ta sama odległość w terenie."], ua: [em("5 км"), " — та сама відстань на місцевості."] }
      ],
      task: {
        id: "g03-06",
        type: "single-choice",
        question: {
          pl: "Co oznacza zapis 1 cm – 3 km?",
          ua: "Що означає запис 1 см – 3 км?"
        },
        options: [
          { id: "a", label: { pl: "1 cm na mapie odpowiada 3 km w terenie.", ua: "1 см на карті відповідає 3 км на місцевості." } },
          { id: "b", label: { pl: "3 km na mapie odpowiada 1 cm w terenie.", ua: "3 км на карті відповідає 1 см на місцевості." } },
          { id: "c", label: { pl: "Cała mapa ma długość 3 km.", ua: "Уся карта має довжину 3 км." } }
        ],
        answer: "a",
        hint: {
          pl: "Pierwsza jednostka jest na kartce. Druga jest w terenie.",
          ua: "Перша одиниця є на аркуші. Друга є на місцевості."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Strony zapisu są zamienione. Wróć do kolejności: najpierw kartka, potem teren.",
              ua: "Боки запису переставлені. Повернися до порядку: спочатку аркуш, потім місцевість."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "3 km nie jest długością całej kartki. Wróć do jednego centymetra na mapie.",
              ua: "3 км не є довжиною всього аркуша. Повернися до одного сантиметра на карті."
            }
          }
        ],
        explanation: {
          pl: "1 cm – 3 km znaczy: 1 cm na mapie odpowiada 3 km w terenie.",
          ua: "1 см – 3 км означає: 1 см на карті відповідає 3 км на місцевості."
        }
      }
    },
    {
      type: "guided-practice",
      heading: { pl: "7. Centymetry, metry, kilometry", ua: "7. Сантиметри, метри, кілометри" },
      visual: img(
        "zapis-80000.png",
        "Zapis skali 1 : 80 000",
        "Запис масштабу 1 : 80 000",
        "after"
      ),
      text: {
        pl: [
          "**100 cm = 1 m.**",
          "**1 000 m = 1 km.**",
          "**100 000 cm = 1 km.**",
          "Nie zamieniaj każdego zapisu od razu na kilometry. Najpierw policz metry i sprawdź wynik.",
          "1 : 50 000 to 50 000 cm, czyli 500 m. To nie jest 1 cm – 5 km, bo 5 km ma 500 000 cm."
        ],
        ua: [
          "**100 см = 1 м.**",
          "**1 000 м = 1 км.**",
          "**100 000 см = 1 км.**",
          "Не переводь кожен запис одразу в кілометри. Спочатку порахуй метри і перевір результат.",
          "1 : 50 000 — це 50 000 см, тобто 500 м. Це не 1 см – 5 км, бо 5 км має 500 000 см."
        ]
      },
      task: {
        id: "g03-07",
        type: "single-choice",
        question: {
          pl: "Jaki zapis mianowany pasuje do 1 : 80 000?",
          ua: "Який іменований запис пасує до 1 : 80 000?"
        },
        options: [
          { id: "a", label: { pl: "1 cm – 800 m", ua: "1 см – 800 м" } },
          { id: "b", label: { pl: "1 cm – 8 km", ua: "1 см – 8 км" } },
          { id: "c", label: { pl: "1 cm – 80 km", ua: "1 см – 80 км" } }
        ],
        answer: "a",
        hint: {
          pl: "Podziel 80 000 przez 100. Potem porównaj wynik z 1 000.",
          ua: "Поділи 80 000 на 100. Потім порівняй результат з 1 000."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "8 km ma 800 000 cm, a tu jest 80 000 cm. Wróć do metrów i porównaj je z 1 000.",
              ua: "8 км має 800 000 см, а тут є 80 000 см. Повернися до метрів і порівняй їх з 1 000."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "80 km dokłada kilometry do liczby 80. Wróć do dzielenia centymetrów przez 100.",
              ua: "80 км додає кілометри до числа 80. Повернися до ділення сантиметрів на 100."
            }
          }
        ],
        explanation: {
          pl: "80 000 cm = 800 m. To mniej niż 1 000 m, więc zostają metry: 1 cm – 800 m.",
          ua: "80 000 см = 800 м. Це менше ніж 1 000 м, тож лишаються метри: 1 см – 800 м."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "8. Podziałka liniowa", ua: "8. Лінійний масштаб" },
      visual: img(
        "podzialka-5.png",
        "Podziałka 0, 5, 10 km. Jeden odcinek ma 5 km. Liczba 10 jest końcem całego paska.",
        "Смужка 0, 5, 10 км. Один відрізок має 5 км. Число 10 є кінцем усієї смужки."
      ),
      text: {
        pl: [
          "**Podziałka liniowa** to skala narysowana jako pasek z kreskami i liczbami.",
          "Każdy odcinek między sąsiednimi liczbami odpowiada jednej odległości w terenie.",
          "Na tym pasku stoją 0, 5 i 10 km. Od 0 do 5 jest jeden odcinek, więc ma 5 km. Liczba 10 to koniec całego paska, nie jeden odcinek."
        ],
        ua: [
          "**Лінійний масштаб** — це масштаб, намальований як смужка з рисками і числами.",
          "Кожен відрізок між сусідніми числами відповідає одній відстані на місцевості.",
          "На цій смужці стоять 0, 5 і 10 км. Від 0 до 5 є один відрізок, тож він має 5 км. Число 10 — це кінець усієї смужки, не один відрізок."
        ]
      }
    },
    {
      type: "guided-practice",
      heading: { pl: "9. Ile ma jeden odcinek?", ua: "9. Скільки має один відрізок?" },
      visual: img(
        "pasek-0246.png",
        "Podziałka z liczbami 0, 2, 4 i 6 km",
        "Смужка з числами 0, 2, 4 і 6 км"
      ),
      text: {
        pl: ["Sąsiednie liczby dzielą pasek na równe odcinki. Ostatnia liczba to koniec całości."],
        ua: ["Сусідні числа ділять смужку на рівні відрізки. Останнє число — це кінець цілого."]
      },
      task: {
        id: "g03-09",
        type: "single-choice",
        question: {
          pl: "Ile kilometrów odpowiada jednemu odcinkowi?",
          ua: "Скільки кілометрів відповідає одному відрізку?"
        },
        options: [
          { id: "a", label: { pl: "2 km", ua: "2 км" } },
          { id: "b", label: { pl: "6 km", ua: "6 км" } },
          { id: "c", label: { pl: "4 km", ua: "4 км" } }
        ],
        answer: "a",
        hint: {
          pl: "Patrz na sąsiednie liczby, na przykład 0 i 2. Ostatnia liczba to koniec całego paska.",
          ua: "Дивись на сусідні числа, наприклад 0 і 2. Останнє число — це кінець усієї смужки."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "6 km to koniec całego paska. Wróć do jednego kroku, od 0 do najbliższej liczby.",
              ua: "6 км — це кінець усієї смужки. Повернися до одного кроку, від 0 до найближчого числа."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "4 km stoi w środku paska, nie na końcu pierwszego odcinka. Wróć do liczb 0 i 2.",
              ua: "4 км стоїть посередині смужки, не на кінці першого відрізка. Повернися до чисел 0 і 2."
            }
          }
        ],
        explanation: {
          pl: "Jeden odcinek prowadzi od 0 do 2 km. Cały pasek ma trzy odcinki i przedstawia 6 km.",
          ua: "Один відрізок веде від 0 до 2 км. Уся смужка має три відрізки і показує 6 км."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "10. Trzy zapisy, jedna skala", ua: "10. Три записи, один масштаб" },
      visual: img(
        "trzy-100.png",
        "1 : 100 000, 1 cm – 1 km i podziałka, na której jeden odcinek ma 1 km",
        "1 : 100 000, 1 см – 1 км і смужка, на якій один відрізок має 1 км"
      ),
      text: {
        pl: [
          "To trzy sposoby przedstawienia tej samej skali. Zapis liczbowy podaje proporcję, skala mianowana pokazuje odległość wraz z jednostkami, a podziałka przedstawia ją na pasku.",
          "Sprawdziliśmy liczby: 1 : 100 000 to 1 cm – 1 km. Na pasku jeden odcinek ma 1 km, więc pasuje do tej pary. Inny pasek, z innymi liczbami, nie musi pasować."
        ],
        ua: [
          "Це три способи показати той самий масштаб. Числовий запис подає відношення, іменований масштаб показує відстань разом з одиницями, а лінійний показує її на смужці.",
          "Ми перевірили числа: 1 : 100 000 — це 1 см – 1 км. На смужці один відрізок має 1 км, тож він пасує до цієї пари. Інша смужка, з іншими числами, не мусить пасувати."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "11. Dopasuj pary. 1 : 400 000", ua: "11. Добери пари. 1 : 400 000" },
      visual: img(
        "zapis-400000.png",
        "Zapis skali 1 : 400 000",
        "Запис масштабу 1 : 400 000"
      ),
      task: {
        id: "g03-11",
        type: "single-choice",
        question: {
          pl: "Który zapis mianowany jest tą samą skalą?",
          ua: "Який іменований запис є тим самим масштабом?"
        },
        options: [
          { id: "a", label: { pl: "1 cm – 4 km", ua: "1 см – 4 км" } },
          { id: "b", label: { pl: "1 cm – 40 km", ua: "1 см – 40 км" } },
          { id: "c", label: { pl: "1 cm – 400 m", ua: "1 см – 400 м" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "40 km byłoby przy większej liczbie centymetrów. Wróć do dzielenia przez 100, a potem przez 1 000.",
              ua: "40 км було б при більшій кількості сантиметрів. Повернися до ділення на 100, а потім на 1 000."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "400 m to wynik zatrzymany za wcześnie. Po metrach sprawdź, czy wychodzi pełny kilometr.",
              ua: "400 м — це результат, зупинений зарано. Після метрів перевір, чи виходить повний кілометр."
            }
          }
        ],
        explanation: {
          pl: "400 000 cm = 4 000 m = 4 km. Ta sama skala: 1 cm – 4 km.",
          ua: "400 000 см = 4 000 м = 4 км. Той самий масштаб: 1 см – 4 км."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "12. Dopasuj pary. 1 : 50 000", ua: "12. Добери пари. 1 : 50 000" },
      visual: img(
        "zapis-50000.png",
        "Zapis skali 1 : 50 000",
        "Запис масштабу 1 : 50 000"
      ),
      task: {
        id: "g03-12",
        type: "single-choice",
        question: {
          pl: "Który zapis mianowany jest tą samą skalą?",
          ua: "Який іменований запис є тим самим масштабом?"
        },
        options: [
          { id: "a", label: { pl: "1 cm – 500 m", ua: "1 см – 500 м" } },
          { id: "b", label: { pl: "1 cm – 5 km", ua: "1 см – 5 км" } },
          { id: "c", label: { pl: "1 cm – 50 km", ua: "1 см – 50 км" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "5 km ma 500 000 cm, a tu jest 50 000 cm. Wróć do metrów: wynik jest mniejszy niż 1 000 m.",
              ua: "5 км має 500 000 см, а тут є 50 000 см. Повернися до метрів: результат менший ніж 1 000 м."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "50 km dokłada kilometry do liczby 50. Wróć do 100 cm = 1 m.",
              ua: "50 км додає кілометри до числа 50. Повернися до 100 см = 1 м."
            }
          }
        ],
        explanation: {
          pl: "50 000 cm = 500 m. To mniej niż 1 km, więc zostają metry: 1 cm – 500 m.",
          ua: "50 000 см = 500 м. Це менше ніж 1 км, тож лишаються метри: 1 см – 500 м."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "13. Dopasuj pary. Podziałka", ua: "13. Добери пари. Лінійний масштаб" },
      visual: img(
        "pasek-0246.png",
        "Podziałka 0, 2, 4, 6 km",
        "Смужка 0, 2, 4, 6 км"
      ),
      text: {
        pl: ["Przyjmij, że jeden odcinek tego paska ma na mapie 1 cm. Najpierw odczytaj odcinek, potem dobierz zapis."],
        ua: ["Прийми, що один відрізок цієї смужки має на карті 1 см. Спочатку прочитай відрізок, потім добери запис."]
      },
      task: {
        id: "g03-13",
        type: "single-choice",
        question: {
          pl: "Który zapis liczbowy pasuje do takiej podziałki?",
          ua: "Який числовий запис пасує до такої смужки?"
        },
        options: [
          { id: "a", label: { pl: "1 : 200 000", ua: "1 : 200 000" } },
          { id: "b", label: { pl: "1 : 20 000", ua: "1 : 20 000" } },
          { id: "c", label: { pl: "1 : 2 000 000", ua: "1 : 2 000 000" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "1 : 20 000 to 1 cm – 200 m, a odcinek ma 2 km. Wróć do zamiany 2 km na centymetry.",
              ua: "1 : 20 000 — це 1 см – 200 м, а відрізок має 2 км. Повернися до заміни 2 км на сантиметри."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "1 : 2 000 000 to 1 cm – 20 km. Tu jeden odcinek ma 2 km, nie 20 km.",
              ua: "1 : 2 000 000 — це 1 см – 20 км. Тут один відрізок має 2 км, не 20 км."
            }
          }
        ],
        explanation: {
          pl: "2 km = 200 000 cm. Gdy 1 cm na mapie ma 2 km w terenie, zapis liczbowy to 1 : 200 000.",
          ua: "2 км = 200 000 см. Коли 1 см на карті має 2 км на місцевості, числовий запис такий: 1 : 200 000."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "14. Zadania mieszane. Odczyt", ua: "14. Змішані завдання. Читання" },
      visual: img(
        "zapis-15000.png",
        "Zapis skali 1 : 15 000",
        "Запис масштабу 1 : 15 000"
      ),
      task: {
        id: "g03-14",
        type: "single-choice",
        question: {
          pl: "Jak czytasz ten zapis, zanim zamienisz jednostki?",
          ua: "Як читаєш цей запис, перш ніж заміниш одиниці?"
        },
        options: [
          { id: "a", label: { pl: "1 cm na mapie to 15 000 cm w terenie.", ua: "1 см на карті — це 15 000 см на місцевості." } },
          { id: "b", label: { pl: "1 cm na mapie to 15 km w terenie.", ua: "1 см на карті — це 15 км на місцевості." } },
          { id: "c", label: { pl: "1 cm na mapie to 15 m w terenie.", ua: "1 см на карті — це 15 м на місцевості." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To jeszcze odczyt, nie zamiana na kilometry. Wróć do liczby i zostaw centymetry.",
              ua: "Це ще читання, не заміна на кілометри. Повернися до числа і залиш сантиметри."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "15 m odcina zera. Wróć do całego zapisu 15 000 cm.",
              ua: "15 м відрізає нулі. Повернися до всього запису 15 000 см."
            }
          }
        ],
        explanation: {
          pl: "Przed zamianą 1 : 15 000 znaczy: 1 cm na mapie to 15 000 cm w terenie.",
          ua: "Перед заміною 1 : 15 000 означає: 1 см на карті — це 15 000 см на місцевості."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "15. Zadania mieszane. Zamiana", ua: "15. Змішані завдання. Заміна" },
      visual: img(
        "zapis-800000.png",
        "Zapis skali 1 : 800 000",
        "Запис масштабу 1 : 800 000"
      ),
      task: {
        id: "g03-15",
        type: "single-choice",
        question: {
          pl: "Zamień 1 : 800 000 na skalę mianowaną.",
          ua: "Переведи 1 : 800 000 в іменований масштаб."
        },
        options: [
          { id: "a", label: { pl: "1 cm – 8 km", ua: "1 см – 8 км" } },
          { id: "b", label: { pl: "1 cm – 80 km", ua: "1 см – 80 км" } },
          { id: "c", label: { pl: "1 cm – 800 m", ua: "1 см – 800 м" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "80 km byłoby przy 8 000 000 cm. Wróć do dwóch kroków: przez 100, potem przez 1 000.",
              ua: "80 км було б при 8 000 000 см. Повернися до двох кроків: на 100, потім на 1 000."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "800 m to 80 000 cm, a tu jest 800 000 cm. Po metrach sprawdź jeszcze kilometry.",
              ua: "800 м — це 80 000 см, а тут є 800 000 см. Після метрів перевір ще кілометри."
            }
          }
        ],
        explanation: {
          pl: "800 000 cm = 8 000 m = 8 km. Skala mianowana: 1 cm – 8 km.",
          ua: "800 000 см = 8 000 м = 8 км. Іменований масштаб: 1 см – 8 км."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "16. Zadania mieszane. Jeden odcinek", ua: "16. Змішані завдання. Один відрізок" },
      visual: img(
        "pasek-050100.png",
        "Podziałka z liczbami 0, 50 i 100 m",
        "Смужка з числами 0, 50 і 100 м"
      ),
      task: {
        id: "g03-16",
        type: "single-choice",
        question: {
          pl: "Ile metrów ma jeden odcinek?",
          ua: "Скільки метрів має один відрізок?"
        },
        options: [
          { id: "a", label: { pl: "50 m", ua: "50 м" } },
          { id: "b", label: { pl: "100 m", ua: "100 м" } },
          { id: "c", label: { pl: "50 km", ua: "50 км" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "100 m to koniec całego paska. Wróć do kroku od 0 do 50.",
              ua: "100 м — це кінець усієї смужки. Повернися до кроку від 0 до 50."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Na pasku jest jednostka metr, nie kilometr. Wróć do liter przy końcu paska.",
              ua: "На смужці є одиниця метр, не кілометр. Повернися до літер біля кінця смужки."
            }
          }
        ],
        explanation: {
          pl: "Jeden odcinek prowadzi od 0 do 50 m. 100 m to dwa takie odcinki.",
          ua: "Один відрізок веде від 0 до 50 м. 100 м — це два такі відрізки."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "17. Zadania mieszane. Błąd w jednostkach", ua: "17. Змішані завдання. Помилка в одиницях" },
      visual: img(
        "liczba-2000.png",
        "Zapis skali liczbowej 1 : 2 000 000",
        "Запис числового масштабу 1 : 2 000 000"
      ),
      task: {
        id: "g03-17",
        type: "single-choice",
        question: {
          pl: "Kolega mówi: „Skala 1 : 2 000 000 to 1 cm – 2 km”. Czy ma rację?",
          ua: "Товариш каже: «Масштаб 1 : 2 000 000 — це 1 см – 2 км». Чи має він рацію?"
        },
        options: [
          { id: "a", label: { pl: "Nie. Z 2 000 000 cm wychodzi 20 km.", ua: "Ні. Із 2 000 000 см виходить 20 км." } },
          { id: "b", label: { pl: "Tak. Zostaje 2, więc są 2 km.", ua: "Так. Лишається 2, тож це 2 км." } },
          { id: "c", label: { pl: "Tak. Dwa miliony centymetrów to 2 km.", ua: "Так. Два мільйони сантиметрів — це 2 км." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Sama dwójka nie jest wynikiem. Wróć do dzielenia: najpierw przez 100 na metry, potem przez 1 000 na kilometry.",
              ua: "Сама двійка не є результатом. Повернися до ділення: спочатку на 100 у метри, потім на 1 000 у кілометри."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "2 km ma 200 000 cm, a tu jest 2 000 000 cm. Wróć do zamiany centymetrów na metry.",
              ua: "2 км має 200 000 см, а тут є 2 000 000 см. Повернися до заміни сантиметрів на метри."
            }
          }
        ],
        explanation: {
          pl: "2 000 000 cm = 20 000 m = 20 km. Zapis mianowany: 1 cm – 20 km.",
          ua: "2 000 000 см = 20 000 м = 20 км. Іменований запис: 1 см – 20 км."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "18. Jak w zeszycie. Odczyt", ua: "18. Як у зошиті. Читання" },
      visual: img(
        "zapis-25000.png",
        "Zapis skali 1 : 25 000",
        "Запис масштабу 1 : 25 000"
      ),
      task: {
        id: "g03-18",
        type: "single-choice",
        question: {
          pl: "Jak czytasz skalę 1 : 25 000?",
          ua: "Як читаєш масштаб 1 : 25 000?"
        },
        options: [
          { id: "a", label: { pl: "1 cm na mapie to 25 000 cm w terenie.", ua: "1 см на карті — це 25 000 см на місцевості." } },
          { id: "b", label: { pl: "1 cm na mapie to 25 km w terenie.", ua: "1 см на карті — це 25 км на місцевості." } },
          { id: "c", label: { pl: "Cała kartka ma 25 000 cm.", ua: "Увесь аркуш має 25 000 см." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To odczyt liczby, nie zamiana na kilometry. Wróć do centymetrów.",
              ua: "Це читання числа, не заміна на кілометри. Повернися до сантиметрів."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Liczba nie mierzy całej kartki. Wróć do jednego centymetra na mapie.",
              ua: "Число не міряє весь аркуш. Повернися до одного сантиметра на карті."
            }
          }
        ],
        explanation: {
          pl: "1 : 25 000 czytasz: 1 cm na mapie to 25 000 cm w terenie.",
          ua: "1 : 25 000 читаєш так: 1 см на карті — це 25 000 см на місцевості."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "19. Jak w zeszycie. Zamiana", ua: "19. Як у зошиті. Заміна" },
      visual: img(
        "zapis-4000000.png",
        "Zapis skali 1 : 4 000 000",
        "Запис масштабу 1 : 4 000 000"
      ),
      task: {
        id: "g03-19",
        type: "single-choice",
        question: {
          pl: "Zamień 1 : 4 000 000 na skalę mianowaną.",
          ua: "Переведи 1 : 4 000 000 в іменований масштаб."
        },
        options: [
          { id: "a", label: { pl: "1 cm – 40 km", ua: "1 см – 40 км" } },
          { id: "b", label: { pl: "1 cm – 4 km", ua: "1 см – 4 км" } },
          { id: "c", label: { pl: "1 cm – 400 km", ua: "1 см – 400 км" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "4 km pasuje do 400 000 cm, a tu jest 4 000 000 cm. Wróć do liczby zer.",
              ua: "4 км пасує до 400 000 см, а тут є 4 000 000 см. Повернися до кількості нулів."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "400 km jest dziesięć razy za duże. Wróć do metrów, a potem podziel je przez 1 000.",
              ua: "400 км у десять разів завищене. Повернися до метрів, а потім поділи їх на 1 000."
            }
          }
        ],
        explanation: {
          pl: "4 000 000 cm = 40 000 m = 40 km. Skala mianowana: 1 cm – 40 km.",
          ua: "4 000 000 см = 40 000 м = 40 км. Іменований масштаб: 1 см – 40 км."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "20. Jak w zeszycie. Jeden odcinek", ua: "20. Як у зошиті. Один відрізок" },
      visual: img(
        "podzialka-100.png",
        "Podziałka 0, 100 i 200 m",
        "Смужка 0, 100 і 200 м"
      ),
      task: {
        id: "g03-20",
        type: "single-choice",
        question: {
          pl: "Ile metrów ma jeden odcinek tej podziałki?",
          ua: "Скільки метрів має один відрізок цієї смужки?"
        },
        options: [
          { id: "a", label: { pl: "100 m", ua: "100 м" } },
          { id: "b", label: { pl: "200 m", ua: "200 м" } },
          { id: "c", label: { pl: "100 km", ua: "100 км" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "200 m to koniec dwóch odcinków. Wróć do kroku od 0 do 100.",
              ua: "200 м — це кінець двох відрізків. Повернися до кроку від 0 до 100."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Przy pasku stoi metr, nie kilometr. Wróć do jednostki na obrazku.",
              ua: "Біля смужки стоїть метр, не кілометр. Повернися до одиниці на зображенні."
            }
          }
        ],
        explanation: {
          pl: "Jeden odcinek prowadzi od 0 do 100 m. 200 m to cały pasek.",
          ua: "Один відрізок веде від 0 до 100 м. 200 м — це вся смужка."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "21. Jak w zeszycie. Trzy zapisy", ua: "21. Як у зошиті. Три записи" },
      visual: img(
        "zapis-200000.png",
        "Zapis skali 1 : 200 000",
        "Запис масштабу 1 : 200 000"
      ),
      task: {
        id: "g03-21",
        type: "single-choice",
        question: {
          pl: "Która trójka oznacza jedną skalę?",
          ua: "Яка трійка означає один масштаб?"
        },
        options: [
          { id: "a", label: { pl: "1 : 200 000, 1 cm – 2 km, jeden odcinek 2 km", ua: "1 : 200 000, 1 см – 2 км, один відрізок 2 км" } },
          { id: "b", label: { pl: "1 : 200 000, 1 cm – 20 km, jeden odcinek 2 km", ua: "1 : 200 000, 1 см – 20 км, один відрізок 2 км" } },
          { id: "c", label: { pl: "1 : 200 000, 1 cm – 2 km, jeden odcinek 20 km", ua: "1 : 200 000, 1 см – 2 км, один відрізок 20 км" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "20 km nie wychodzi z 200 000 cm. Wróć do zamiany tej liczby na kilometry i porównaj ją z odcinkiem.",
              ua: "20 км не виходить із 200 000 см. Повернися до заміни цього числа на кілометри і порівняй його з відрізком."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Odcinek 20 km nie jest tą samą odległością co 1 cm – 2 km. Wróć do jednej liczby na wszystkich trzech zapisach.",
              ua: "Відрізок 20 км не є тією самою відстанню, що 1 см – 2 км. Повернися до одного числа на всіх трьох записах."
            }
          }
        ],
        explanation: {
          pl: "200 000 cm = 2 km. Dlatego 1 : 200 000, 1 cm – 2 km i odcinek 2 km to jedna skala.",
          ua: "200 000 см = 2 км. Тому 1 : 200 000, 1 см – 2 км і відрізок 2 км — це один масштаб."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "22. Sprawdź się. Co pokazuje skala", ua: "22. Перевір себе. Що показує масштаб" },
      visual: img(
        "napisy-kosciol.png",
        "Trzy napisy: tytuł miasta, krzyż ze słowem kościół i zapis 1 : 25 000",
        "Три написи: назва міста, хрест зі словом костел і запис 1 : 25 000"
      ),
      task: {
        id: "g03-22",
        type: "single-choice",
        question: {
          pl: "Który napis jest skalą?",
          ua: "Який напис є масштабом?"
        },
        options: [
          { id: "a", label: { pl: "1 : 25 000", ua: "1 : 25 000" } },
          { id: "b", label: { pl: "tytuł miasta", ua: "назва міста" } },
          { id: "c", label: { pl: "krzyż i słowo kościół", ua: "хрест і слово костел" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tytuł nazywa obszar. Wróć do napisu, który podaje zmniejszenie.",
              ua: "Заголовок називає територію. Повернися до напису, який подає зменшення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Krzyż ze słowem to legenda. Wróć do zapisu z dwukropkiem.",
              ua: "Хрест зі словом — це легенда. Повернися до запису з двокрапкою."
            }
          }
        ],
        explanation: {
          pl: "Skala na tym obrazku to zapis 1 : 25 000. Tytuł nazywa miasto, a krzyż należy do legendy.",
          ua: "Масштаб на цьому зображенні — це запис 1 : 25 000. Заголовок називає місто, а хрест належить до легенди."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "23. Sprawdź się. Odczyt", ua: "23. Перевір себе. Читання" },
      formula: "1 : 300 000",
      task: {
        id: "g03-23",
        type: "single-choice",
        question: {
          pl: "Jak czytasz skalę 1 : 300 000?",
          ua: "Як читаєш масштаб 1 : 300 000?"
        },
        options: [
          { id: "a", label: { pl: "1 cm na mapie to 300 000 cm w terenie.", ua: "1 см на карті — це 300 000 см на місцевості." } },
          { id: "b", label: { pl: "1 cm na mapie to 300 km w terenie.", ua: "1 см на карті — це 300 км на місцевості." } },
          { id: "c", label: { pl: "1 cm na mapie to 300 m w terenie.", ua: "1 см на карті — це 300 м на місцевості." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kilometry nie są pierwszym odczytem. Wróć do liczby i zostaw centymetry.",
              ua: "Кілометри не є першим читанням. Повернися до числа і залиш сантиметри."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "300 m odcina zera. Wróć do całego zapisu 300 000 cm.",
              ua: "300 м відрізає нулі. Повернися до всього запису 300 000 см."
            }
          }
        ],
        explanation: {
          pl: "1 : 300 000 czytasz: 1 cm na mapie to 300 000 cm w terenie.",
          ua: "1 : 300 000 читаєш так: 1 см на карті — це 300 000 см на місцевості."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "24. Sprawdź się. Zamiana", ua: "24. Перевір себе. Заміна" },
      visual: img(
        "zapis-10000.png",
        "Zapis skali 1 : 10 000",
        "Запис масштабу 1 : 10 000"
      ),
      task: {
        id: "g03-24",
        type: "single-choice",
        question: {
          pl: "Zamień 1 : 10 000 na skalę mianowaną.",
          ua: "Переведи 1 : 10 000 в іменований масштаб."
        },
        options: [
          { id: "a", label: { pl: "1 cm – 100 m", ua: "1 см – 100 м" } },
          { id: "b", label: { pl: "1 cm – 10 km", ua: "1 см – 10 км" } },
          { id: "c", label: { pl: "1 cm – 1 km", ua: "1 см – 1 км" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "10 km ma 1 000 000 cm. Tu po dwukropku jest 10 000. Wróć do dzielenia przez 100.",
              ua: "10 км має 1 000 000 см. Тут після двокрапки є 10 000. Повернися до ділення на 100."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "1 km ma 100 000 cm. Porównaj to z 10 000 cm na obrazku.",
              ua: "1 км має 100 000 см. Порівняй це з 10 000 см на зображенні."
            }
          }
        ],
        explanation: {
          pl: "10 000 cm = 100 m. To mniej niż 1 km, więc 1 cm – 100 m.",
          ua: "10 000 см = 100 м. Це менше ніж 1 км, тож 1 см – 100 м."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "25. Sprawdź się. Podziałka", ua: "25. Перевір себе. Лінійний масштаб" },
      formula: "0 —— 4 —— 8 km",
      text: {
        pl: ["Dwie kreski dzielą pasek na równe odcinki. Liczby stoją przy kreskach."],
        ua: ["Дві риски ділять смужку на рівні відрізки. Числа стоять біля рисок."]
      },
      task: {
        id: "g03-25",
        type: "single-choice",
        question: {
          pl: "Ile kilometrów ma jeden odcinek?",
          ua: "Скільки кілометрів має один відрізок?"
        },
        options: [
          { id: "a", label: { pl: "4 km", ua: "4 км" } },
          { id: "b", label: { pl: "8 km", ua: "8 км" } },
          { id: "c", label: { pl: "2 km", ua: "2 км" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "8 km to koniec całego paska. Wróć do kroku od 0 do 4.",
              ua: "8 км — це кінець усієї смужки. Повернися до кроку від 0 до 4."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "2 km nie stoi między sąsiednimi liczbami. Wróć do różnicy 0 i 4.",
              ua: "2 км не стоїть між сусідніми числами. Повернися до різниці 0 і 4."
            }
          }
        ],
        explanation: {
          pl: "Jeden odcinek prowadzi od 0 do 4 km. Cały pasek ma dwa odcinki i kończy się na 8 km.",
          ua: "Один відрізок веде від 0 до 4 км. Уся смужка має два відрізки і закінчується на 8 км."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "26. Sprawdź się. Para zapisów", ua: "26. Перевір себе. Пара записів" },
      visual: img(
        "zapis-15000.png",
        "Zapis skali 1 : 15 000",
        "Запис масштабу 1 : 15 000"
      ),
      task: {
        id: "g03-26",
        type: "single-choice",
        question: {
          pl: "Która para jest tą samą skalą?",
          ua: "Яка пара є тим самим масштабом?"
        },
        options: [
          { id: "a", label: { pl: "1 : 15 000 i 1 cm – 150 m", ua: "1 : 15 000 і 1 см – 150 м" } },
          { id: "b", label: { pl: "1 : 15 000 i 1 cm – 15 km", ua: "1 : 15 000 і 1 см – 15 км" } },
          { id: "c", label: { pl: "1 : 15 000 i 1 cm – 1,5 km", ua: "1 : 15 000 і 1 см – 1,5 км" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "15 km ma 1 500 000 cm, a tu jest 15 000 cm. Wróć do dzielenia przez 100.",
              ua: "15 км має 1 500 000 см, а тут є 15 000 см. Повернися до ділення на 100."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "1,5 km ma 150 000 cm. Tu po dwukropku jest 15 000 cm. Wróć do dzielenia przez 100 i porównaj wynik z 1 000.",
              ua: "1,5 км має 150 000 см. Тут після двокрапки є 15 000 см. Повернися до ділення на 100 і порівняй результат з 1 000."
            }
          }
        ],
        explanation: {
          pl: "15 000 cm = 150 m. To mniej niż 1 km, więc para to 1 : 15 000 i 1 cm – 150 m.",
          ua: "15 000 см = 150 м. Це менше ніж 1 км, тож пара така: 1 : 15 000 і 1 см – 150 м."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "27. Słowniczek", ua: "27. Словарик" },
      rows: [
        { pl: "skala", ua: "Надпись, которая показывает, во сколько раз на карте уменьшили настоящие расстояния." },
        { pl: "skala liczbowa", ua: "Запись через двоеточие, например 1 : 100 000. Сначала её читают в сантиметрах: 1 см на карте — это столько же сантиметров на местности." },
        { pl: "skala mianowana", ua: "Запись с единицами, например 1 см – 1 км. Слева расстояние на карте, справа — то же расстояние на местности." },
        { pl: "podziałka liniowa", ua: "Масштаб в виде полоски с делениями и числами. Смотри шаг между соседними числами, а не последнее число всей полоски." },
        { pl: "odcinek", ua: "Один кусок полоски от числа до соседнего числа." },
        { pl: "centymetr", ua: "Сантиметр. С него начинают читать числовой масштаб. 100 сантиметров — это 1 метр." },
        { pl: "metr", ua: "Метр. Если после перевода метров меньше 1000, ответ оставляют в метрах." },
        { pl: "kilometr", ua: "Километр. Это 1000 метров, или 100 000 сантиметров." }
      ]
    },
    {
      type: "summary",
      heading: { pl: "28. Co już umiem", ua: "28. Що я вже вмію" },
      visual: img(
        "trzy-100_27.png",
        "Trzy zapisy skali 1 : 100 000",
        "Три записи масштабу 1 : 100 000"
      ),
      items: [
        { pl: "Rozumiem, co pokazuje skala.", ua: "Розумію, що показує масштаб." },
        { pl: "Czytam skalę liczbową.", ua: "Читаю числовий масштаб." },
        { pl: "Zamieniam centymetry na metry i kilometry.", ua: "Переводжу сантиметри на метри і кілометри." },
        { pl: "Rozpoznaję skalę mianowaną.", ua: "Розпізнаю іменований масштаб." },
        { pl: "Odczytuję jeden odcinek podziałki liniowej.", ua: "Читаю один відрізок лінійного масштабу." },
        { pl: "Rozpoznaję trzy zapisy tej samej skali.", ua: "Розпізнаю три записи одного масштабу." }
      ]
    }
  ]
};
