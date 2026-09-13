function em(text) {
  return { text: text, emphasis: true };
}

function mark(pl, plMarks, ua, uaMarks) {
  return {
    pl: { t: pl, mark: plMarks },
    ua: { t: ua, mark: uaMarks }
  };
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Co dziś zrobisz?", ua: "Що сьогодні зробиш?" },
      promptPlace: "before",
      prompt: {
        pl: "Przeczytaj trzy punkty. Potem kliknij Dalej.",
        ua: "Прочитай три пункти. Потім натисни Далі."
      },
      text: {
        pl: [
          "Najpierw przeczytasz tekst, potem odpowiesz, o czym on jest, potem nauczymy się słów z ramki i zasady.",
          ["W podręczniku «Między nami» jest ", em("plansza"), " na s. 8. Tu masz krótki tekst do nauki — ten sam temat."]
        ],
        ua: [
          "Спочатку прочитаєш текст, потім відповіси, про що він, потім вивчимо слова з рамки і правило.",
          ["У підручнику «Między nami» є ", em("плакат-ситуація"), " на с. 8. Тут короткий текст до навчання — та сама тема."]
        ]
      },
      items: [
        { pl: "1. Przeczytasz na głos krótki opis sytuacji.", ua: "1. Прочитаєш уголос короткий опис ситуації." },
        { pl: "2. Odpowiesz, kto z kim mówi i po co.", ua: "2. Відповіси, хто з ким говорить і навіщо." },
        { pl: "3. Zapamiętasz słowa z ramki i cztery pytania: kto? do kogo? gdzie? po co?", ua: "3. Запам’ятаєш слова з рамки і чотири питання: хто? до кого? де? навіщо?" }
      ]
    },
    {
      type: "observe",
      heading: { pl: "Tekst · opis sytuacji", ua: "Текст · опис ситуації" },
      formula: "gatunek: opis sytuacji  ·  podręcznik s. 8",
      promptPlace: "before",
      prompt: {
        pl: "Zrób teraz: przeczytaj na głos po polsku. Ukraiński jest pod spodem — jak słownik, nie zamiast czytania.",
        ua: "Зроби зараз: прочитай уголос польською. Українська внизу — як словник, не замість читання."
      },
      text: {
        pl: [
          "Na korytarzu szkolnej biblioteki stoi pani Anna, bibliotekarka. Obok niej stoi Ola z klasy 5a.",
          "Ola mówi cicho: „Gdzie są książki o kosmosie?”",
          "Pani Anna uśmiecha się i pokazuje ręką w lewo — na półkę przy oknie. Ola kiwa głową.",
          "Za nimi dwóch chłopców głośno się śmieje. Pani Anna przykłada palec do ust. Chłopcy cichną.",
          "Ola szepcze „dziękuję” i idzie do półki."
        ],
        ua: [
          "У коридорі шкільної бібліотеки стоїть пані Анна, бібліотекарка. Поруч стоїть Оля з класу 5a.",
          "Оля каже тихо: «Де книжки про космос?»",
          "Пані Анна усміхається і показує рукою ліворуч — на полицю біля вікна. Оля киває.",
          "Позаду двоє хлопців голосно сміються. Пані Анна прикладає палець до вуст. Хлопці стихають.",
          "Оля шепоче «дякую» і йде до полиці."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Po tekście", ua: "Після тексту" },
      promptPlace: "before",
      prompt: {
        pl: "Zrób teraz: odpowiedz na pytanie o tekście, który właśnie przeczytałeś. Nie zgaduj — wróć wzrokiem do zdań.",
        ua: "Зроби зараз: відповідай на питання про текст, який щойно прочитав. Не вгадуй — повернись очима до речень."
      },
      task: {
        id: "p01-text1",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Kto pierwszy coś mówi i po co?",
          ua: "Хто перший щось каже і навіщо?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Ola pyta panią Annę, gdzie są książki o kosmosie",
              ua: "Оля питає пані Анну, де книжки про космос"
            }
          },
          {
            id: "b",
            label: {
              pl: "Chłopcy pytają Olę o dyktando",
              ua: "Хлопці питають Олю про диктант"
            }
          },
          {
            id: "c",
            label: {
              pl: "Pani Anna recytuje wiersz o gwiazdach",
              ua: "Пані Анна декламує вірш про зорі"
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Drugie zdanie tekstu: Ola mówi cicho…",
          ua: "Друге речення тексту: Оля каже тихо…"
        },
        explanation: {
          pl: "Nadawca: Ola. Odbiorca: pani Anna. Cel: znaleźć książki.",
          ua: "Адресант: Оля. Адресат: пані Анна. Мета: знайти книжки."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Bez słów", ua: "Без слів" },
      promptPlace: "before",
      prompt: {
        pl: "Zrób teraz: wskaż gest z tekstu.",
        ua: "Зроби зараз: вкажи жест із тексту."
      },
      task: {
        id: "p01-text2",
        type: "single-choice",
        level: "A",
        question: {
          pl: "Który gest pani Anny znaczy „cisza”?",
          ua: "Який жест пані Анни означає «тиша»?"
        },
        options: [
          {
            id: "a",
            label: { pl: "uśmiech do Oli", ua: "усмішка до Олі" }
          },
          {
            id: "b",
            label: { pl: "palec przy ustach", ua: "палець біля вуст" }
          },
          {
            id: "c",
            label: { pl: "wskazanie półki ręką", ua: "вказівка рукою на полицю" }
          }
        ],
        answer: "b",
        hint: {
          pl: "Po śmiechu chłopców.",
          ua: "Після сміху хлопців."
        },
        explanation: {
          pl: "Palec przy ustach to gest. Uśmiech to mimika. Ręka w lewo to też gest, ale znaczy „tam”.",
          ua: "Палець біля вуст — жест. Усмішка — міміка. Рука ліворуч — теж жест, але означає «там»."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Nowe słowa", ua: "Нові слова" },
      promptPlace: "before",
      prompt: {
        pl: "Zrób teraz: przeczytaj ramkę na głos. Potem powiedz każde polskie słowo jeszcze raz.",
        ua: "Зроби зараз: прочитай рамку вголос. Потім скажи кожне польське слово ще раз."
      },
      rows: [
        { pl: "nadawca — kto mówi lub pisze", ua: "адресант — хто говорить або пише" },
        { pl: "odbiorca — kto słucha lub czyta", ua: "адресат — хто слухає або читає" },
        { pl: "komunikat — to, co chcemy przekazać", ua: "повідомлення — те, що хочемо передати" },
        { pl: "gest — ruch ręki, głowy, ciała", ua: "жест — рух руки, голови, тіла" },
        { pl: "mimika — wyraz twarzy", ua: "міміка — вираз обличчя" },
        { pl: "sytuacja komunikacyjna — kto, do kogo, gdzie, po co", ua: "комунікативна ситуація — хто, до кого, де, навіщо" }
      ]
    },
    {
      type: "algorithm",
      heading: { pl: "Zasada", ua: "Правило" },
      formula: "kto?  ·  do kogo?  ·  gdzie?  ·  po co?",
      promptPlace: "before",
      prompt: {
        pl: "Zrób teraz: zapamiętaj cztery pytania. Bez nich rozmowa jest mglista.",
        ua: "Зроби зараз: запам’ятай чотири питання. Без них розмова розмита."
      },
      text: {
        pl: [
          ["", em("Sytuacja komunikacyjna"), " to okoliczności wypowiedzi."],
          ["W naszym tekście: ", em("kto"), " — Ola i pani Anna; ", em("gdzie"), " — korytarz biblioteki; ", em("po co"), " — znaleźć książki / uciszyć chłopców."],
          ["Słowa to nie wszystko. ", em("Gest"), " i ", em("mimika"), " też niosą komunikat: uśmiech pomaga, śmiech za plecami przeszkadza."]
        ],
        ua: [
          ["", em("Комунікативна ситуація"), " — обставини висловлювання."],
          ["У нашому тексті: ", em("хто"), " — Оля і пані Анна; ", em("де"), " — коридор бібліотеки; ", em("навіщо"), " — знайти книжки / втихомирити хлопців."],
          ["Слова — не все. ", em("Жест"), " і ", em("міміка"), " теж несуть повідомлення: усмішка допомагає, сміх за спиною заважає."]
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Ćwiczenie", ua: "Вправа" },
      promptPlace: "before",
      prompt: {
        pl: "Zrób teraz: wpisz jedno polskie słowo z ramki.",
        ua: "Зроби зараз: впиши одне польське слово з рамки."
      },
      task: {
        id: "p01-write",
        type: "input-text",
        level: "B",
        question: {
          pl: "Jak nazywamy osobę, która mówi lub pisze?",
          ua: "Як називаємо особу, яка говорить або пише?"
        },
        answer: ["nadawca", "адресант"],
        hint: {
          pl: "Pierwsze słowo w ramce.",
          ua: "Перше слово в рамці."
        },
        explanation: {
          pl: "Nadawca. W tekście nadawcą jest najpierw Ola, potem pani Anna.",
          ua: "Nadawca (адресант). У тексті спочатку Оля, потім пані Анна."
        }
      }
    },
    {
      type: "problem",
      heading: { pl: "Powiedz na głos", ua: "Скажи вголос" },
      promptPlace: "before",
      prompt: {
        pl: "Zrób teraz: powiedz 3 zdania o tekście — kto, gdzie, po co. Potem wybierz podsumowanie.",
        ua: "Зроби зараз: скажи 3 речення про текст — хто, де, навіщо. Потім вибери підсумок."
      },
      text: {
        pl: ["Możesz patrzeć na tekst. Nie musisz mówić idealnie — ważne, żeby były cztery pytania."],
        ua: ["Можна дивитись на текст. Не треба говорити ідеально — важливі чотири питання."]
      },
      task: {
        id: "p01-oral",
        type: "single-choice",
        level: "B",
        question: {
          pl: "Które zdanie dobrze zbiera sytuację z tekstu?",
          ua: "Яке речення добре збирає ситуацію з тексту?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "W bibliotece Ola pyta bibliotekarkę o książki; gesty pomagają, hałas przeszkadza",
              ua: "У бібліотеці Оля питає бібліотекарку про книжки; жести допомагають, галас заважає"
            }
          },
          {
            id: "b",
            label: {
              pl: "To wiersz o gwiazdach z apostrofą",
              ua: "Це вірш про зорі з апострофою"
            }
          },
          {
            id: "c",
            label: {
              pl: "Nadawca to zawsze tylko nauczyciel",
              ua: "Адресант — завжди лише вчитель"
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Złóż: miejsce + kto + cel.",
          ua: "Склади: місце + хто + мета."
        },
        explanation: {
          pl: "Cztery pytania z zasady mieszczą się w jednym zdaniu.",
          ua: "Чотири питання з правила вміщаються в одному реченні."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      items: [
        mark(
          "Sytuacja komunikacyjna: kto mówi, do kogo, gdzie i po co.",
          ["Sytuacja komunikacyjna", "kto", "do kogo", "gdzie", "po co"],
          "Комунікативна ситуація: хто говорить, до кого, де і навіщо.",
          ["Комунікативна ситуація", "хто", "до кого", "де", "навіщо"]
        ),
        mark(
          "Nadawca tworzy komunikat, odbiorca go odbiera.",
          ["Nadawca", "komunikat", "odbiorca"],
          "Адресант творить повідомлення, адресат його сприймає.",
          ["Адресант", "повідомлення", "адресат"]
        ),
        mark(
          "Gest i mimika też coś mówią: pomagają albo przeszkadzają w odbiorze.",
          ["Gest", "mimika"],
          "Жест і міміка теж щось кажуть: допомагають або заважають сприйняттю.",
          ["Жест", "міміка"]
        )
      ]
    },
    {
      type: "review",
      heading: { pl: "Wrócimy do tego", ua: "Ми до цього повернемось" },
      text: {
        pl: [
          "W klasie otwórz «Między nami» na s. 8: plansza. Nazwij osoby, cel spotkania i to, co widać bez słów.",
          "Następna lekcja: apostrofa — wiersz, który woła."
        ],
        ua: [
          "У класі відкрий «Między nami» на с. 8: плакат. Назви осіб, мету зустрічі і те, що видно без слів.",
          "Наступний урок: апострофа — вірш, який кличе."
        ]
      }
    }
  ]
};
