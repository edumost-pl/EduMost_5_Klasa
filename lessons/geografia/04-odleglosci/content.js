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
    {
      type: "intro",
      heading: { pl: "1. Misja: odległość w terenie", ua: "1. Місія: відстань на місцевості" },
      visual: img(
        "misja.png",
        "Trzy drogi: prosta, łamana i łuk do nitki",
        "Три дороги: пряма, ламана і дуга для нитки"
      ),
      text: {
        pl: [
          "Na mapie mierzysz centymetry. W terenie odległość może mieć setki metrów albo kilka kilometrów. Jak przejść od jednego pomiaru do drugiego?",
          "W tej misji nauczysz się obliczać odległość w terenie i zapisywać rozwiązanie tak, jak w szkolnym zeszycie.",
          "Trzy zapisy skali już znasz. Dziś używasz ich do drogi."
        ],
        ua: [
          "На карті ти вимірюєш сантиметри. На місцевості відстань може становити сотні метрів або кілька кілометрів. Як перейти від одного вимірювання до іншого?",
          "У цій місії ти навчишся обчислювати відстань на місцевості і записувати розв’язання так, як у шкільному зошиті.",
          "Три записи масштабу ти вже знаєш. Сьогодні ти використовуєш їх для дороги."
        ]
      }
    },
    {
      type: "guided-practice",
      heading: { pl: "2. Dwa rodzaje odległości", ua: "2. Два види відстані" },
      visual: img(
        "karta-3.png",
        "Odcinek 3 cm i skala 1 cm – 100 m",
        "Відрізок 3 см і масштаб 1 см – 100 м"
      ),
      text: {
        pl: [
          [em("Odległość na mapie"), " to centymetry zmierzone linijką na kartce."],
          [em("Odległość w terenie"), " to ta sama droga w rzeczywistości, w metrach albo kilometrach."],
          "Skala łączy te dwie odległości. Bez skali same centymetry z linijki nie mówią, jak daleko jest w terenie."
        ],
        ua: [
          [em("Відстань на карті"), " — це сантиметри, виміряні лінійкою на аркуші."],
          [em("Відстань на місцевості"), " — це та сама дорога насправді, у метрах або кілометрах."],
          "Масштаб з’єднує ці дві відстані. Без масштабу самі сантиметри з лінійки не кажуть, як далеко на місцевості."
        ]
      },
      task: {
        id: "g04-02",
        type: "single-choice",
        question: {
          pl: "Linijka pokazuje 3 cm na mapie. Czy to znaczy, że w terenie są tylko 3 cm?",
          ua: "Лінійка показує 3 см на карті. Чи це означає, що на місцевості лише 3 см?"
        },
        options: [
          { id: "a", label: { pl: "Nie. 3 cm to pomiar na kartce. W terenie decyduje skala.", ua: "Ні. 3 см — це вимір на аркуші. На місцевості вирішує масштаб." } },
          { id: "b", label: { pl: "Tak. Linijka od razu podaje metry terenu.", ua: "Так. Лінійка одразу подає метри місцевості." } },
          { id: "c", label: { pl: "Tak. Każda mapa jest w centymetrach terenu.", ua: "Так. Кожна карта є в сантиметрах місцевості." } }
        ],
        answer: "a",
        hint: {
          pl: "Centymetry leżą na kartce. Skala mówi, czym jest jeden centymetr w terenie.",
          ua: "Сантиметри лежать на аркуші. Масштаб каже, чим є один сантиметр на місцевості."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Linijka mierzy kartkę, nie teren. Wróć do napisu skali nad odcinkiem.",
              ua: "Лінійка міряє аркуш, не місцевість. Повернися до напису масштабу над відрізком."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Centymetr mapy nie jest centymetrem terenu. Wróć do skali: ona zmienia jednostkę.",
              ua: "Сантиметр карти не є сантиметром місцевості. Повернися до масштабу: він змінює одиницю."
            }
          }
        ],
        explanation: {
          pl: "3 cm to odległość na mapie. Odległość w terenie zależy od skali, a nie od samej linijki.",
          ua: "3 см — це відстань на карті. Відстань на місцевості залежить від масштабу, а не від самої лінійки."
        }
      }
    },
    {
      type: "guided-practice",
      heading: { pl: "3. Najpierw odczytaj skalę", ua: "3. Спочатку прочитай масштаб" },
      formula: "1 : 25 000  =  1 cm – 250 m",
      text: {
        pl: [
          "Te dwa zapisy znaczą to samo: 1 cm na mapie odpowiada 250 m w terenie.",
          "Najpierw liczba po dwukropku jest w centymetrach. Potem dzielisz przez 100, bo 100 cm = 1 m."
        ],
        ua: [
          "Ці два записи означають те саме: 1 см на карті відповідає 250 м на місцевості.",
          "Спочатку число після двокрапки є в сантиметрах. Потім ділиш на 100, бо 100 см = 1 м."
        ]
      },
      task: {
        id: "g04-03",
        type: "single-choice",
        question: {
          pl: "Skala mapy to 1 : 50 000. Ile metrów w terenie ma 1 cm na mapie?",
          ua: "Масштаб карти — 1 : 50 000. Скільки метрів на місцевості має 1 см на карті?"
        },
        options: [
          { id: "a", label: { pl: "500 m", ua: "500 м" } },
          { id: "b", label: { pl: "50 000 m", ua: "50 000 м" } },
          { id: "c", label: { pl: "50 m", ua: "50 м" } }
        ],
        answer: "a",
        hint: {
          pl: "Liczba po dwukropku jest w centymetrach. Podziel ją przez 100.",
          ua: "Число після двокрапки є в сантиметрах. Поділи його на 100."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "50 000 zostawiono jako metry. Wróć do centymetrów i podziel przez 100.",
              ua: "50 000 лишили як метри. Повернися до сантиметрів і поділи на 100."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "50 m jest za małe. 50 000 cm dzielisz przez 100, bo 100 cm = 1 m, a nie przez 1 000.",
              ua: "50 м замале. 50 000 см ділиш на 100, бо 100 см = 1 м, а не на 1 000."
            }
          }
        ],
        explanation: {
          pl: "50 000 cm = 500 m. Przy skali 1 : 50 000 jeden centymetr mapy to 500 m w terenie.",
          ua: "50 000 см = 500 м. При масштабі 1 : 50 000 один сантиметр карти — це 500 м на місцевості."
        }
      }
    },
    {
      type: "example",
      heading: { pl: "4. Ile metrów ma 1 cm?", ua: "4. Скільки метрів має 1 см?" },
      reveal: true,
      steps: [
        {
          formula: "1 : 25 000",
          text: {
            pl: ["Zapis czytasz bez zamiany: 1 cm na mapie = 25 000 cm w terenie."],
            ua: ["Запис читаєш без заміни: 1 см на карті = 25 000 см на місцевості."]
          }
        },
        {
          formula: "100 cm = 1 m",
          text: {
            pl: ["Centymetry zamieniasz na metry, dzieląc przez 100. Najpierw sens jednostek, a skracanie zer tylko potem."],
            ua: ["Сантиметри переводиш у метри, ділячи на 100. Спочатку сенс одиниць, а скорочення нулів — лише потім."]
          }
        },
        {
          formula: "25 000 cm = 250 m",
          text: {
            pl: ["25 000 cm ÷ 100 = 250 m."],
            ua: ["25 000 см ÷ 100 = 250 м."]
          }
        },
        {
          formula: "1 cm — 250 m",
          text: {
            pl: ["Od tej pory jeden centymetr mapy liczysz jako 250 m terenu. Dopiero potem mnożysz przez długość z linijki."],
            ua: ["Відтепер один сантиметр карти рахуєш як 250 м місцевості. Лише потім множиш на довжину з лінійки."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "5. Droga prosta", ua: "5. Пряма дорога" },
      visual: img(
        "prosta-3-200.png",
        "Prosty odcinek A–B: linijka 3 cm, skala 1 cm — 200 m",
        "Прямий відрізок A–B: лінійка 3 см, масштаб 1 см — 200 м"
      ),
      text: {
        pl: [
          "Punkty A i B łączy jedna prosta kreska. Linijka pokazuje 3 cm.",
          "Każdy centymetr to 200 m. Centymetrów jest trzy, więc 200 m powtarzasz trzy razy."
        ],
        ua: [
          "Точки A і B з’єднує одна пряма риска. Лінійка показує 3 см.",
          "Кожен сантиметр — це 200 м. Сантиметрів три, тож 200 м повторюєш тричі."
        ]
      },
      task: {
        id: "g04-05",
        type: "single-choice",
        question: {
          pl: "Jaka jest odległość w terenie?",
          ua: "Яка відстань на місцевості?"
        },
        options: [
          { id: "a", label: { pl: "600 m", ua: "600 м" } },
          { id: "b", label: { pl: "200 m", ua: "200 м" } },
          { id: "c", label: { pl: "203 m", ua: "203 м" } }
        ],
        answer: "a",
        hint: {
          pl: "200 m to jeden centymetr. Na mapie są 3 cm. Nie dodawaj 3 do 200.",
          ua: "200 м — це один сантиметр. На карті є 3 см. Не додавай 3 до 200."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "200 m to tylko jeden centymetr. Wróć do trójki z linijki i pomnóż.",
              ua: "200 м — це лише один сантиметр. Повернися до трійки з лінійки і помнож."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "203 m wyszło z dodawania. Skali nie dodajesz do centymetrów. Wróć do mnożenia.",
              ua: "203 м вийшло з додавання. Масштаб не додаєш до сантиметрів. Повернися до множення."
            }
          }
        ],
        explanation: {
          pl: "3 × 200 m = 600 m. Każdy z trzech centymetrów ma w terenie 200 m.",
          ua: "3 × 200 м = 600 м. Кожен із трьох сантиметрів має на місцевості 200 м."
        }
      }
    },
    {
      type: "example",
      heading: { pl: "6. Jak zapisać rozwiązanie w zeszycie?", ua: "6. Як записати розв’язання в зошиті?" },
      text: {
        pl: ["Na mapie między A i B jest 4 cm. Skala: 1 : 25 000. Szukamy odległości w terenie. To wzór zapisu. Jeśli nauczyciel każe inaczej, trzymasz się jego wzoru. Gdy nie wiesz, pisz pełny."],
        ua: ["На карті між A і B є 4 см. Масштаб: 1 : 25 000. Шукаємо відстань на місцевості. Це зразок запису. Якщо вчитель велить інакше, тримаєшся його зразка. Коли не знаєш, пиши повний."]
      },
      reveal: true,
      steps: [
        {
          visual: img(
            "odcinek-4-25000.png",
            "Odcinek A–B ma 4 cm, skala mapy 1 : 25 000",
            "Відрізок A–B має 4 см, масштаб карти 1 : 25 000"
          ),
          formula: "Dane: odległość na mapie 4 cm",
          text: {
            pl: ["Dane to liczby z zadania. Najpierw to, co pokazała linijka."],
            ua: ["Дано — це числа з умови. Спочатку те, що показала лінійка."]
          }
        },
        {
          formula: "Dane: skala 1 : 25 000",
          text: {
            pl: ["Druga dana to skala. Tu jeszcze nic nie liczysz."],
            ua: ["Друге дане — це масштаб. Тут ще нічого не рахуєш."]
          }
        },
        {
          formula: "Szukane: odległość w terenie, ? m",
          text: {
            pl: ["Szukane to pytanie. Wyniku jeszcze nie ma, więc piszesz znak zapytania i jednostkę."],
            ua: ["Шукане — це питання. Результату ще немає, тож пишеш знак питання й одиницю."]
          }
        },
        {
          formula: "1 cm na mapie — 25 000 cm w terenie",
          text: {
            pl: ["Rozwiązanie zaczyna się od jednego centymetra. Skala liczbowa najpierw mówi to samo w centymetrach."],
            ua: ["Розв’язання починається з одного сантиметра. Числовий масштаб спочатку каже те саме в сантиметрах."]
          }
        },
        {
          formula: "25 000 cm = 250 m",
          text: {
            pl: ["100 cm = 1 m, więc 25 000 cm dzielisz przez 100. Wychodzi 250 m na jeden centymetr mapy."],
            ua: ["100 см = 1 м, тож 25 000 см ділиш на 100. Виходить 250 м на один сантиметр карти."]
          }
        },
        {
          formula: "4 × 250 m = 1 000 m",
          text: {
            pl: ["Na mapie są 4 cm, więc 250 m powtarzasz cztery razy."],
            ua: ["На карті є 4 см, тож 250 м повторюєш чотири рази."]
          }
        },
        {
          formula: "1 000 m = 1 km",
          text: {
            pl: ["1 000 m to dokładnie 1 km. Obie jednostki są dobre, gdy zadanie nie każe jednej z nich."],
            ua: ["1 000 м — це рівно 1 км. Обидві одиниці добрі, коли завдання не вимагає однієї з них."]
          }
        },
        {
          formula: "Odpowiedź: Odległość w terenie wynosi 1 km.",
          text: {
            pl: ["Odpowiedź to pełne zdanie o terenie. Na końcu jest jednostka."],
            ua: ["Відповідь — це повне речення про місцевість. У кінці є одиниця."]
          }
        },
        {
          formula: "1 cm — 250 m;  4 cm — x;  x = 4 × 250 m = 1 km",
          text: {
            pl: ["To krótki zapis. x to szukana odległość w terenie. Nie każdy nauczyciel go chce. Pełny zapis jest bezpieczny."],
            ua: ["Це короткий запис. x — це шукана відстань на місцевості. Не кожен учитель його хоче. Повний запис є надійним."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "7. Uzupełnij mnożenie", ua: "7. Доповни множення" },
      visual: img(
        "odcinek-4-25000.png",
        "Odcinek A–B ma 4 cm, skala mapy 1 : 25 000",
        "Відрізок A–B має 4 см, масштаб карти 1 : 25 000"
      ),
      text: {
        pl: ["To samo zadanie: 4 cm i skala 1 : 25 000. Wybierz wiersz rozwiązania."],
        ua: ["Те саме завдання: 4 см і масштаб 1 : 25 000. Вибери рядок розв’язання."]
      },
      task: {
        id: "g04-07",
        type: "single-choice",
        question: {
          pl: "Który wiersz jest rozwiązaniem?",
          ua: "Який рядок є розв’язанням?"
        },
        options: [
          { id: "a", label: { pl: "4 × 250 m = 1 000 m", ua: "4 × 250 м = 1 000 м" } },
          { id: "b", label: { pl: "4 + 250 = 254 m", ua: "4 + 250 = 254 м" } },
          { id: "c", label: { pl: "250 m", ua: "250 м" } }
        ],
        answer: "a",
        hint: {
          pl: "Jeden centymetr to 250 m, a na mapie są 4 cm. Szukaj działania, które powtarza 250 m cztery razy.",
          ua: "Один сантиметр — це 250 м, а на карті є 4 см. Шукай дію, яка повторює 250 м чотири рази."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To dodawanie. Wróć do powtórzenia 250 m tyle razy, ile jest centymetrów.",
              ua: "Це додавання. Повернися до повторення 250 м стільки разів, скільки є сантиметрів."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "250 m to jeden centymetr. Na mapie są 4 cm. Wróć do mnożenia.",
              ua: "250 м — це один сантиметр. На карті є 4 см. Повернися до множення."
            }
          }
        ],
        explanation: {
          pl: "4 × 250 m = 1 000 m. Cztery centymetry mapy dają 1 000 m w terenie.",
          ua: "4 × 250 м = 1 000 м. Чотири сантиметри карти дають 1 000 м на місцевості."
        }
      }
    },
    {
      type: "guided-practice",
      heading: { pl: "8. Uzupełnij odpowiedź", ua: "8. Доповни відповідь" },
      visual: img(
        "odcinek-4-25000.png",
        "Odcinek A–B ma 4 cm, skala mapy 1 : 25 000",
        "Відрізок A–B має 4 см, масштаб карти 1 : 25 000"
      ),
      text: {
        pl: ["To samo zadanie: 4 cm i skala 1 : 25 000. Odpowiedź jest zdaniem o terenie i kończy się jednostką."],
        ua: ["Те саме завдання: 4 см і масштаб 1 : 25 000. Відповідь є реченням про місцевість і закінчується одиницею."]
      },
      task: {
        id: "g04-08",
        type: "single-choice",
        question: {
          pl: "Które zdanie jest odpowiedzią?",
          ua: "Яке речення є відповіддю?"
        },
        options: [
          { id: "a", label: { pl: "Odległość w terenie wynosi 1 km.", ua: "Відстань на місцевості становить 1 км." } },
          { id: "b", label: { pl: "Odległość na mapie wynosi 4 cm.", ua: "Відстань на карті становить 4 см." } },
          { id: "c", label: { pl: "Skala mapy to 1 : 25 000.", ua: "Масштаб карти — 1 : 25 000." } }
        ],
        answer: "a",
        hint: {
          pl: "Zdanie ma mówić o terenie, nie o linijce i nie o samej skali.",
          ua: "Речення має казати про місцевість, не про лінійку і не про сам масштаб."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "4 cm już było w danych. Wróć do zdania o terenie.",
              ua: "4 см уже було в даних. Повернися до речення про місцевість."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Skala też jest w danych. Odpowiedź podaje wynik drogi.",
              ua: "Масштаб теж є в даних. Відповідь подає результат дороги."
            }
          }
        ],
        explanation: {
          pl: "Odpowiedź: Odległość w terenie wynosi 1 km.",
          ua: "Відповідь: відстань на місцевості становить 1 км."
        }
      }
    },
    {
      type: "example",
      heading: { pl: "9. Droga łamana", ua: "9. Ламана дорога" },
      reveal: true,
      steps: [
        {
          visual: img(
            "lamana-2-3-1.png",
            "Droga łamana: odcinki 2 cm, 3 cm i 1 cm, skala 1 cm — 100 m",
            "Ламана дорога: відрізки 2 см, 3 см і 1 см, масштаб 1 см — 100 м"
          ),
          text: {
            pl: ["Droga łamana ma kilka prostych odcinków. Liczysz długość drogi, a nie skok w linii prostej od początku do końca."],
            ua: ["Ламана дорога має кілька прямих відрізків. Рахуєш довжину дороги, а не стрибок по прямій від початку до кінця."]
          }
        },
        {
          formula: "2 cm + 3 cm + 1 cm = 6 cm",
          text: {
            pl: ["Najpierw suma na mapie. Trzy odcinki dają 6 cm."],
            ua: ["Спочатку сума на карті. Три відрізки дають 6 см."]
          }
        },
        {
          formula: "1 cm — 100 m",
          text: {
            pl: ["Skala mówi, ile terenu ma jeden centymetr."],
            ua: ["Масштаб каже, скільки місцевості має один сантиметр."]
          }
        },
        {
          formula: "6 × 100 m = 600 m",
          text: {
            pl: ["Jedno mnożenie po sumie. Droga w terenie ma 600 m."],
            ua: ["Одне множення після суми. Дорога на місцевості має 600 м."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "10. Kiedy przydaje się nitka?", ua: "10. Коли стає в пригоді нитка?" },
      visual: img(
        "nitka-kreta.png",
        "Nitka leży wzdłuż krętej drogi, potem jest wyprostowana przy linijce",
        "Нитка лежить уздовж звивистої дороги, потім випрямлена біля лінійки"
      ),
      text: {
        pl: [
          "Gdy droga się wygina, linijka nie leży na wszystkich zakrętach naraz.",
          "Nitkę układasz wzdłuż zakrętów, potem ją prostujesz i mierzysz linijką. Centymetry mnożysz przez skalę tak samo jak przy prostej drodze."
        ],
        ua: [
          "Коли дорога згинається, лінійка не лягає на всі повороти одразу.",
          "Нитку кладеш уздовж поворотів, потім випрямляєш і міряєш лінійкою. Сантиметри множиш на масштаб так само, як при прямій дорозі."
        ]
      },
      task: {
        id: "g04-10",
        type: "single-choice",
        question: {
          pl: "Kiedy mierzysz drogę nitką?",
          ua: "Коли міряєш дорогу ниткою?"
        },
        options: [
          { id: "a", label: { pl: "Gdy droga się wygina i nie zmierzysz jej jedną prostą linijką.", ua: "Коли дорога згинається і її не виміряєш однією прямою лінійкою." } },
          { id: "b", label: { pl: "Gdy droga jest jednym prostym odcinkiem.", ua: "Коли дорога є одним прямим відрізком." } },
          { id: "c", label: { pl: "Zamiast skali, bo nitka podaje metry.", ua: "Замість масштабу, бо нитка подає метри." } }
        ],
        answer: "a",
        hint: {
          pl: "Linijka mierzy prostą kreskę. Nitka idzie za zakrętami. Skala i tak zostaje.",
          ua: "Лінійка міряє пряму риску. Нитка йде за поворотами. Масштаб усе одно лишається."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Prostą kreskę mierzysz linijką. Wróć do drogi, która się zgina.",
              ua: "Пряму риску міряєш лінійкою. Повернися до дороги, яка згинається."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nitka daje centymetry na mapie, nie metry terenu. Wróć do skali po pomiarze.",
              ua: "Нитка дає сантиметри на карті, не метри місцевості. Повернися до масштабу після виміру."
            }
          }
        ],
        explanation: {
          pl: "Nitki używasz na krzywej drodze. Po wyprostowaniu mierzysz centymetry i mnożysz je przez skalę.",
          ua: "Нитку використовуєш на кривій дорозі. Після випрямлення міряєш сантиметри і множиш їх на масштаб."
        }
      }
    },
    {
      type: "guided-practice",
      heading: { pl: "11. Najpierw mnożę, potem jednostka", ua: "11. Спочатку множу, потім одиниця" },
      visual: img(
        "karta-6-250.png",
        "Odcinek 6 cm i skala 1 cm – 250 m",
        "Відрізок 6 см і масштаб 1 см – 250 м",
        "after"
      ),
      text: {
        pl: [
          "Najpierw mnożysz. Jednostkę bierzesz ze skali, nie z linijki.",
          "1 000 m i 1 km to ta sama długość. Gdy pytanie jest o metry, zostaw metry. Gdy o kilometry, zamień wynik."
        ],
        ua: [
          "Спочатку множиш. Одиницю береш із масштабу, не з лінійки.",
          "1 000 м і 1 км — це та сама довжина. Коли питання про метри, залиш метри. Коли про кілометри, заміни результат."
        ]
      },
      task: {
        id: "g04-11",
        type: "single-choice",
        question: {
          pl: "Zadanie prosi o metry. Który wynik podasz?",
          ua: "Завдання просить метри. Який результат подаси?"
        },
        options: [
          { id: "a", label: { pl: "1 500 m", ua: "1 500 м" } },
          { id: "b", label: { pl: "1,5 km", ua: "1,5 км" } },
          { id: "c", label: { pl: "250 m", ua: "250 м" } }
        ],
        answer: "a",
        hint: {
          pl: "Pomnóż 6 przez 250. Zostaw metry, o które pyta zadanie.",
          ua: "Помнож 6 на 250. Залиш метри, про які питає завдання."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "1,5 km to ta sama długość, ale zadanie prosi o metry. Wróć do wyniku mnożenia w metrach.",
              ua: "1,5 км — це та сама довжина, але завдання просить метри. Повернися до результату множення в метрах."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "250 m to jeden centymetr. Na mapie jest 6 cm. Wróć do mnożenia.",
              ua: "250 м — це один сантиметр. На карті є 6 см. Повернися до множення."
            }
          }
        ],
        explanation: {
          pl: "6 × 250 m = 1 500 m. To samo co 1,5 km, ale w tym zadaniu zostają metry.",
          ua: "6 × 250 м = 1 500 м. Те саме, що 1,5 км, але в цьому завданні лишаються метри."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "12. Błąd: dodawanie", ua: "12. Помилка: додавання" },
      visual: img(
        "odcinek-4-200.png",
        "Odcinek A–B ma 4 cm, skala 1 cm — 200 m",
        "Відрізок A–B має 4 см, масштаб 1 см — 200 м"
      ),
      text: {
        pl: ["Na mapie są 4 cm. Skala: 1 cm — 200 m. Ktoś zapisał „4 + 200 = 204 m”."],
        ua: ["На карті є 4 см. Масштаб: 1 см — 200 м. Хтось записав «4 + 200 = 204 м»."]
      },
      task: {
        id: "g04-12",
        type: "single-choice",
        question: {
          pl: "Który zapis jest dobry?",
          ua: "Який запис є правильним?"
        },
        options: [
          { id: "a", label: { pl: "4 × 200 m = 800 m", ua: "4 × 200 м = 800 м" } },
          { id: "b", label: { pl: "4 + 200 = 204 m", ua: "4 + 200 = 204 м" } },
          { id: "c", label: { pl: "200 m", ua: "200 м" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Dodawanie skleja dwie różne rzeczy. Każdy centymetr ma 200 m, więc wróć do mnożenia.",
              ua: "Додавання зліплює дві різні речі. Кожен сантиметр має 200 м, тож повернися до множення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "200 m to jeden centymetr. Na mapie są 4 cm.",
              ua: "200 м — це один сантиметр. На карті є 4 см."
            }
          }
        ],
        explanation: {
          pl: "4 × 200 m = 800 m. Skalę mnożysz przez centymetry z linijki.",
          ua: "4 × 200 м = 800 м. Масштаб множиш на сантиметри з лінійки."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "13. Błąd: tylko jeden centymetr", ua: "13. Помилка: лише один сантиметр" },
      visual: img(
        "odcinek-3-250.png",
        "Odcinek A–B ma 3 cm, skala 1 cm — 250 m",
        "Відрізок A–B має 3 см, масштаб 1 см — 250 м"
      ),
      text: {
        pl: ["Na mapie są 3 cm. Skala: 1 cm — 250 m. Ktoś podał sam wynik jednego centymetra."],
        ua: ["На карті є 3 см. Масштаб: 1 см — 250 м. Хтось подав сам результат одного сантиметра."]
      },
      task: {
        id: "g04-13",
        type: "single-choice",
        question: {
          pl: "Który zapis liczy całą drogę?",
          ua: "Який запис рахує всю дорогу?"
        },
        options: [
          { id: "a", label: { pl: "3 × 250 m = 750 m", ua: "3 × 250 м = 750 м" } },
          { id: "b", label: { pl: "250 m", ua: "250 м" } },
          { id: "c", label: { pl: "3 + 250 = 253 m", ua: "3 + 250 = 253 м" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "250 m to jeden centymetr. Odcinek ma 3 cm. Wróć do mnożenia.",
              ua: "250 м — це один сантиметр. Відрізок має 3 см. Повернися до множення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "253 m jest z dodawania. Wróć do powtórzenia 250 m trzy razy.",
              ua: "253 м є з додавання. Повернися до повторення 250 м тричі."
            }
          }
        ],
        explanation: {
          pl: "3 × 250 m = 750 m. Samo 250 m nie jest jeszcze całą drogą.",
          ua: "3 × 250 м = 750 м. Самі 250 м ще не є всією дорогою."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "14. Błąd: metry zamiast centymetrów", ua: "14. Помилка: метри замість сантиметрів" },
      formula: "1 : 20 000",
      text: {
        pl: ["Ktoś mówi, że 1 cm odpowiada 20 000 m. Skala liczbowa najpierw jest w centymetrach."],
        ua: ["Хтось каже, що 1 см відповідає 20 000 м. Числовий масштаб спочатку є в сантиметрах."]
      },
      task: {
        id: "g04-14",
        type: "single-choice",
        question: {
          pl: "Ile metrów ma 1 cm przy skali 1 : 20 000?",
          ua: "Скільки метрів має 1 см при масштабі 1 : 20 000?"
        },
        options: [
          { id: "a", label: { pl: "200 m", ua: "200 м" } },
          { id: "b", label: { pl: "20 000 m", ua: "20 000 м" } },
          { id: "c", label: { pl: "2 km", ua: "2 км" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "20 000 to centymetry, nie metry. Wróć do dzielenia przez 100.",
              ua: "20 000 — це сантиметри, не метри. Повернися до ділення на 100."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "2 km to 2 000 m. Z 20 000 cm wychodzi 200 m. Wróć do dzielenia przez 100.",
              ua: "2 км — це 2 000 м. Із 20 000 см виходить 200 м. Повернися до ділення на 100."
            }
          }
        ],
        explanation: {
          pl: "20 000 cm = 200 m. Przy skali 1 : 20 000 jeden centymetr mapy to 200 m.",
          ua: "20 000 см = 200 м. При масштабі 1 : 20 000 один сантиметр карти — це 200 м."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "15. Szkoła i park. Zapis", ua: "15. Школа і парк. Запис" },
      visual: img(
        "odcinek-5-20000.png",
        "Od szkoły do parku na mapie jest 5 cm, skala 1 : 20 000",
        "Від школи до парку на карті є 5 см, масштаб 1 : 20 000"
      ),
      text: {
        pl: ["Na mapie od szkoły do parku jest 5 cm. Skala: 1 : 20 000. Zapisz rozwiązanie w zeszycie, a tu wybierz kompletny wiersz."],
        ua: ["На карті від школи до парку є 5 см. Масштаб: 1 : 20 000. Запиши розв’язання в зошиті, а тут вибери повний рядок."]
      },
      task: {
        id: "g04-15",
        type: "single-choice",
        question: {
          pl: "Który zapis jest kompletny?",
          ua: "Який запис є повним?"
        },
        options: [
          { id: "a", label: { pl: "1 cm — 200 m; 5 × 200 m = 1 000 m = 1 km", ua: "1 см — 200 м; 5 × 200 м = 1 000 м = 1 км" } },
          { id: "b", label: { pl: "5 + 20 000 = 20 005 m", ua: "5 + 20 000 = 20 005 м" } },
          { id: "c", label: { pl: "5 cm = 5 km", ua: "5 см = 5 км" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To dodawanie centymetrów do liczby skali. Wróć do zamiany 20 000 cm na metry, a potem do mnożenia.",
              ua: "Це додавання сантиметрів до числа масштабу. Повернися до заміни 20 000 см на метри, а потім до множення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "5 cm na mapie nie jest 5 km w terenie. Wróć do jednego centymetra: 200 m.",
              ua: "5 см на карті не є 5 км на місцевості. Повернися до одного сантиметра: 200 м."
            }
          }
        ],
        explanation: {
          pl: "1 cm — 200 m, potem 5 × 200 m = 1 000 m = 1 km.",
          ua: "1 см — 200 м, потім 5 × 200 м = 1 000 м = 1 км."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "16. Szkoła i park. Zdanie", ua: "16. Школа і парк. Речення" },
      visual: img(
        "odcinek-5-20000.png",
        "Od szkoły do parku na mapie jest 5 cm, skala 1 : 20 000",
        "Від школи до парку на карті є 5 см, масштаб 1 : 20 000"
      ),
      text: {
        pl: ["To samo zadanie: 5 cm i skala 1 : 20 000. Wybierz zdanie odpowiedzi."],
        ua: ["Те саме завдання: 5 см і масштаб 1 : 20 000. Вибери речення відповіді."]
      },
      task: {
        id: "g04-16",
        type: "single-choice",
        question: {
          pl: "Które zdanie jest odpowiedzią?",
          ua: "Яке речення є відповіддю?"
        },
        options: [
          { id: "a", label: { pl: "Odległość między szkołą a parkiem wynosi 1 km.", ua: "Відстань між школою і парком становить 1 км." } },
          { id: "b", label: { pl: "Odległość na mapie wynosi 5 cm.", ua: "Відстань на карті становить 5 см." } },
          { id: "c", label: { pl: "Odległość wynosi 20 000 m.", ua: "Відстань становить 20 000 м." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "5 cm jest w danych. Odpowiedź mówi o terenie.",
              ua: "5 см є в даних. Відповідь каже про місцевість."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "20 000 m brałoby liczbę skali jako metry. Wróć do 200 m i do mnożenia przez 5.",
              ua: "20 000 м брало б число масштабу як метри. Повернися до 200 м і до множення на 5."
            }
          }
        ],
        explanation: {
          pl: "Odpowiedź: Odległość między szkołą a parkiem wynosi 1 km.",
          ua: "Відповідь: відстань між школою і парком становить 1 км."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "17. Jak w zeszycie. Odcinek prosty", ua: "17. Як у зошиті. Прямий відрізок" },
      visual: img(
        "karta-2-20000.png",
        "Odcinek 2 cm i skala 1 : 20 000",
        "Відрізок 2 см і масштаб 1 : 20 000"
      ),
      task: {
        id: "g04-17",
        type: "single-choice",
        question: {
          pl: "Jaka jest odległość w terenie?",
          ua: "Яка відстань на місцевості?"
        },
        options: [
          { id: "a", label: { pl: "400 m", ua: "400 м" } },
          { id: "b", label: { pl: "200 m", ua: "200 м" } },
          { id: "c", label: { pl: "20 000 m", ua: "20 000 м" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "200 m to jeden centymetr. Na mapie są 2 cm. Wróć do mnożenia.",
              ua: "200 м — це один сантиметр. На карті є 2 см. Повернися до множення."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "20 000 m zostawia liczbę skali jako metry. Najpierw 20 000 cm = 200 m.",
              ua: "20 000 м лишає число масштабу як метри. Спочатку 20 000 см = 200 м."
            }
          }
        ],
        explanation: {
          pl: "1 cm — 200 m. 2 × 200 m = 400 m.",
          ua: "1 см — 200 м. 2 × 200 м = 400 м."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "18. Jak w zeszycie. Droga łamana", ua: "18. Як у зошиті. Ламана дорога" },
      visual: img(
        "lamana-2-5.png",
        "Dwa odcinki: 2 cm i 5 cm, skala 1 cm – 100 m",
        "Два відрізки: 2 см і 5 см, масштаб 1 см – 100 м"
      ),
      task: {
        id: "g04-18",
        type: "single-choice",
        question: {
          pl: "Jaka jest długość całej drogi w terenie?",
          ua: "Яка довжина всієї дороги на місцевості?"
        },
        options: [
          { id: "a", label: { pl: "700 m", ua: "700 м" } },
          { id: "b", label: { pl: "500 m", ua: "500 м" } },
          { id: "c", label: { pl: "200 m", ua: "200 м" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "500 m to tylko odcinek 5 cm. Wróć do sumy 2 cm + 5 cm.",
              ua: "500 м — це лише відрізок 5 см. Повернися до суми 2 см + 5 см."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "200 m to tylko odcinek 2 cm. Droga ma dwa odcinki.",
              ua: "200 м — це лише відрізок 2 см. Дорога має два відрізки."
            }
          }
        ],
        explanation: {
          pl: "2 cm + 5 cm = 7 cm. 7 × 100 m = 700 m.",
          ua: "2 см + 5 см = 7 см. 7 × 100 м = 700 м."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "19. Jak w zeszycie. Skala liczbowa", ua: "19. Як у зошиті. Числовий масштаб" },
      visual: img(
        "karta-4-15000.png",
        "Odcinek 4 cm i skala 1 : 15 000",
        "Відрізок 4 см і масштаб 1 : 15 000"
      ),
      task: {
        id: "g04-19",
        type: "single-choice",
        question: {
          pl: "Jaka jest odległość w terenie?",
          ua: "Яка відстань на місцевості?"
        },
        options: [
          { id: "a", label: { pl: "600 m", ua: "600 м" } },
          { id: "b", label: { pl: "15 000 m", ua: "15 000 м" } },
          { id: "c", label: { pl: "150 m", ua: "150 м" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "15 000 to centymetry jednego centymetra, nie metry drogi. Podziel przez 100, potem pomnóż przez 4.",
              ua: "15 000 — це сантиметри одного сантиметра, не метри дороги. Поділи на 100, потім помнож на 4."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "150 m to jeden centymetr. Na mapie są 4 cm.",
              ua: "150 м — це один сантиметр. На карті є 4 см."
            }
          }
        ],
        explanation: {
          pl: "15 000 cm = 150 m. 4 × 150 m = 600 m.",
          ua: "15 000 см = 150 м. 4 × 150 м = 600 м."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "20. Jak w zeszycie. Pełny zapis", ua: "20. Як у зошиті. Повний запис" },
      visual: img(
        "prosta-praktyka.png",
        "Odcinek 4 cm i skala 1 : 50 000",
        "Відрізок 4 см і масштаб 1 : 50 000"
      ),
      task: {
        id: "g04-20",
        type: "single-choice",
        question: {
          pl: "Który zapis rozwiązania jest dobry?",
          ua: "Який запис розв’язання є правильним?"
        },
        options: [
          { id: "a", label: { pl: "1 cm — 500 m; 4 × 500 m = 2 000 m", ua: "1 см — 500 м; 4 × 500 м = 2 000 м" } },
          { id: "b", label: { pl: "4 × 50 000 m = 200 000 m", ua: "4 × 50 000 м = 200 000 м" } },
          { id: "c", label: { pl: "4 + 500 = 504 m", ua: "4 + 500 = 504 м" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "50 000 m nie jest jednym centymetrem. Najpierw 50 000 cm = 500 m.",
              ua: "50 000 м не є одним сантиметром. Спочатку 50 000 см = 500 м."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "504 m jest z dodawania. Wróć do mnożenia 4 × 500 m.",
              ua: "504 м є з додавання. Повернися до множення 4 × 500 м."
            }
          }
        ],
        explanation: {
          pl: "1 : 50 000 to 1 cm — 500 m. 4 × 500 m = 2 000 m.",
          ua: "1 : 50 000 — це 1 см — 500 м. 4 × 500 м = 2 000 м."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "21. Zapisz samodzielnie. Wiersz", ua: "21. Запиши сам. Рядок" },
      visual: img(
        "odcinek-6-30000.png",
        "Odcinek A–B ma 6 cm, skala 1 : 30 000",
        "Відрізок A–B має 6 см, масштаб 1 : 30 000"
      ),
      text: {
        pl: ["Oblicz odległość w terenie. Tu sprawdzamy wybrany wiersz. Potem przepisz go do zeszytu: program nie sprawdza pisma."],
        ua: ["Обчисли відстань на місцевості. Тут перевіряємо вибраний рядок. Потім перепиши його в зошит: програма не перевіряє письмо."]
      },
      task: {
        id: "g04-21",
        type: "single-choice",
        question: {
          pl: "Który wiersz jest dobry?",
          ua: "Який рядок є правильним?"
        },
        options: [
          { id: "a", label: { pl: "1 cm — 300 m; 6 × 300 m = 1 800 m", ua: "1 см — 300 м; 6 × 300 м = 1 800 м" } },
          { id: "b", label: { pl: "6 × 30 000 m = 180 000 m", ua: "6 × 30 000 м = 180 000 м" } },
          { id: "c", label: { pl: "6 + 300 = 306 m", ua: "6 + 300 = 306 м" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "30 000 m brałoby centymetry skali jako metry. Najpierw podziel 30 000 cm przez 100.",
              ua: "30 000 м брало б сантиметри масштабу як метри. Спочатку поділи 30 000 см на 100."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "306 m jest z dodawania. Wróć do mnożenia.",
              ua: "306 м є з додавання. Повернися до множення."
            }
          }
        ],
        explanation: {
          pl: "30 000 cm = 300 m. 6 × 300 m = 1 800 m.",
          ua: "30 000 см = 300 м. 6 × 300 м = 1 800 м."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "22. Zapisz samodzielnie. Zdanie", ua: "22. Запиши сам. Речення" },
      visual: img(
        "odcinek-6-30000.png",
        "Odcinek A–B ma 6 cm, skala 1 : 30 000",
        "Відрізок A–B має 6 см, масштаб 1 : 30 000"
      ),
      text: {
        pl: ["To samo zadanie: 6 cm i skala 1 : 30 000. Wybierz zdanie odpowiedzi i przepisz je do zeszytu."],
        ua: ["Те саме завдання: 6 см і масштаб 1 : 30 000. Вибери речення відповіді і перепиши його в зошит."]
      },
      task: {
        id: "g04-22",
        type: "single-choice",
        question: {
          pl: "Które zdanie jest odpowiedzią?",
          ua: "Яке речення є відповіддю?"
        },
        options: [
          { id: "a", label: { pl: "Odległość w terenie wynosi 1 800 m.", ua: "Відстань на місцевості становить 1 800 м." } },
          { id: "b", label: { pl: "Odległość w terenie wynosi 6 cm.", ua: "Відстань на місцевості становить 6 см." } },
          { id: "c", label: { pl: "Odległość w terenie wynosi 1 800 km.", ua: "Відстань на місцевості становить 1 800 км." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "6 cm jest pomiarem na mapie. Odpowiedź jest o terenie.",
              ua: "6 см є виміром на карті. Відповідь є про місцевість."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "1 800 km jest tysiąc razy za duże. Wynik mnożenia został w metrach.",
              ua: "1 800 км у тисячу разів завищене. Результат множення лишився в метрах."
            }
          }
        ],
        explanation: {
          pl: "6 × 300 m = 1 800 m. To także 1 km 800 m, a zdanie w metrach jest tu dobre.",
          ua: "6 × 300 м = 1 800 м. Це також 1 км 800 м, а речення в метрах тут є добрим."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "23. Sprawdź się. Dwie odległości", ua: "23. Перевір себе. Дві відстані" },
      visual: img(
        "karta-5.png",
        "Odcinek 5 cm i skala 1 cm – 100 m",
        "Відрізок 5 см і масштаб 1 см – 100 м"
      ),
      task: {
        id: "g04-23",
        type: "single-choice",
        question: {
          pl: "Co oznacza napis 5 cm przy odcinku?",
          ua: "Що означає напис 5 см біля відрізка?"
        },
        options: [
          { id: "a", label: { pl: "Odległość na mapie.", ua: "Відстань на карті." } },
          { id: "b", label: { pl: "Odległość w terenie.", ua: "Відстань на місцевості." } },
          { id: "c", label: { pl: "Skalę mapy.", ua: "Масштаб карти." } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "5 cm leży na kartce. Teren jest w metrach ze skali. Wróć do różnicy tych dwóch napisów.",
              ua: "5 см лежить на аркуші. Місцевість є в метрах із масштабу. Повернися до різниці цих двох написів."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Skala jest w pasku u góry: 1 cm – 100 m. Napis 5 cm mierzy odcinek.",
              ua: "Масштаб є в смужці вгорі: 1 см – 100 м. Напис 5 см міряє відрізок."
            }
          }
        ],
        explanation: {
          pl: "5 cm to odległość na mapie. Skala 1 cm – 100 m mówi, czym jest jeden centymetr w terenie.",
          ua: "5 см — це відстань на карті. Масштаб 1 см – 100 м каже, чим є один сантиметр на місцевості."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "24. Sprawdź się. Jeden centymetr", ua: "24. Перевір себе. Один сантиметр" },
      formula: "1 : 25 000",
      task: {
        id: "g04-24",
        type: "single-choice",
        question: {
          pl: "Ile metrów w terenie ma 1 cm na tej mapie?",
          ua: "Скільки метрів на місцевості має 1 см на цій карті?"
        },
        options: [
          { id: "a", label: { pl: "250 m", ua: "250 м" } },
          { id: "b", label: { pl: "25 000 m", ua: "25 000 м" } },
          { id: "c", label: { pl: "25 m", ua: "25 м" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "25 000 m zostawia centymetry jako metry. Podziel 25 000 cm przez 100.",
              ua: "25 000 м лишає сантиметри як метри. Поділи 25 000 см на 100."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "25 m jest za małe. 25 000 cm dzielisz przez 100, bo 100 cm = 1 m.",
              ua: "25 м замале. 25 000 см ділиш на 100, бо 100 см = 1 м."
            }
          }
        ],
        explanation: {
          pl: "25 000 cm = 250 m. Jeden centymetr tej mapy to 250 m w terenie.",
          ua: "25 000 см = 250 м. Один сантиметр цієї карти — це 250 м на місцевості."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "25. Sprawdź się. Odcinek prosty", ua: "25. Перевір себе. Прямий відрізок" },
      visual: img(
        "odcinek-3-30000.png",
        "Odcinek A–B ma 3 cm, skala 1 : 30 000",
        "Відрізок A–B має 3 см, масштаб 1 : 30 000"
      ),
      task: {
        id: "g04-25",
        type: "single-choice",
        question: {
          pl: "Jaka jest odległość w terenie?",
          ua: "Яка відстань на місцевості?"
        },
        options: [
          { id: "a", label: { pl: "900 m", ua: "900 м" } },
          { id: "b", label: { pl: "300 m", ua: "300 м" } },
          { id: "c", label: { pl: "303 m", ua: "303 м" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "300 m to jeden centymetr. Na odcinku są 3 cm.",
              ua: "300 м — це один сантиметр. На відрізку є 3 см."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "303 m jest z dodawania. Wróć do mnożenia 3 × 300 m.",
              ua: "303 м є з додавання. Повернися до множення 3 × 300 м."
            }
          }
        ],
        explanation: {
          pl: "3 × 300 m = 900 m.",
          ua: "3 × 300 м = 900 м."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "26. Sprawdź się. Droga łamana", ua: "26. Перевір себе. Ламана дорога" },
      visual: img(
        "lamana-2-2-3.png",
        "Trzy odcinki 2 cm, 2 cm i 3 cm, skala 1 cm – 200 m",
        "Три відрізки 2 см, 2 см і 3 см, масштаб 1 см – 200 м"
      ),
      task: {
        id: "g04-26",
        type: "single-choice",
        question: {
          pl: "Jaka jest długość całej drogi w terenie?",
          ua: "Яка довжина всієї дороги на місцевості?"
        },
        options: [
          { id: "a", label: { pl: "1 400 m", ua: "1 400 м" } },
          { id: "b", label: { pl: "600 m", ua: "600 м" } },
          { id: "c", label: { pl: "400 m", ua: "400 м" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "600 m to tylko odcinek 3 cm. Najpierw zsumuj 2 cm + 2 cm + 3 cm.",
              ua: "600 м — це лише відрізок 3 см. Спочатку додай 2 см + 2 см + 3 см."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "400 m to jeden odcinek 2 cm. Droga ma trzy odcinki.",
              ua: "400 м — це один відрізок 2 см. Дорога має три відрізки."
            }
          }
        ],
        explanation: {
          pl: "2 cm + 2 cm + 3 cm = 7 cm. 7 × 200 m = 1 400 m.",
          ua: "2 см + 2 см + 3 см = 7 см. 7 × 200 м = 1 400 м."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "27. Sprawdź się. Zapis", ua: "27. Перевір себе. Запис" },
      text: {
        pl: ["Na mapie są 4 cm. Skala: 1 cm — 100 m."],
        ua: ["На карті є 4 см. Масштаб: 1 см — 100 м."]
      },
      task: {
        id: "g04-27",
        type: "single-choice",
        question: {
          pl: "Który zapis w zeszycie jest dobry?",
          ua: "Який запис у зошиті є правильним?"
        },
        options: [
          { id: "a", label: { pl: "4 × 100 m = 400 m", ua: "4 × 100 м = 400 м" } },
          { id: "b", label: { pl: "4 + 100 = 104 m", ua: "4 + 100 = 104 м" } },
          { id: "c", label: { pl: "100 m", ua: "100 м" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "104 m jest z dodawania. Wróć do mnożenia centymetrów przez metry jednego centymetra.",
              ua: "104 м є з додавання. Повернися до множення сантиметрів на метри одного сантиметра."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "100 m to jeden centymetr. Na mapie są 4 cm.",
              ua: "100 м — це один сантиметр. На карті є 4 см."
            }
          }
        ],
        explanation: {
          pl: "4 × 100 m = 400 m. W odpowiedzi dopisujesz jednostkę.",
          ua: "4 × 100 м = 400 м. У відповіді дописуєш одиницю."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "28. Co już umiem", ua: "28. Що я вже вмію" },
      items: [
        { pl: "Rozpoznaję odległość na mapie i w terenie.", ua: "Розпізнаю відстань на карті і на місцевості." },
        { pl: "Odczytuję skalę.", ua: "Читаю масштаб." },
        { pl: "Obliczam odległość w terenie.", ua: "Обчислюю відстань на місцевості." },
        { pl: "Mierzę drogę łamaną.", ua: "Вимірюю ламану дорогу." },
        { pl: "Prawidłowo zapisuję rozwiązanie.", ua: "Правильно записую розв’язання." },
        { pl: "Podaję odpowiedź z jednostką.", ua: "Подаю відповідь з одиницею." }
      ]
    }
  ]
};
