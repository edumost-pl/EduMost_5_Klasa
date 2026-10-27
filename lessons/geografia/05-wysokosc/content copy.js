function em(text) {
  return { text: text, emphasis: true };
}

function img(file, altPl, altRu, place) {
  const spec = {
    kind: "image",
    file: "./img/" + file,
    alt: { pl: altPl, ru: altRu },
    title: { pl: altPl, ru: altRu }
  };
  if (place) spec.place = place;
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "Misja 1. Poznajemy górę",
        ru: "Миссия 1. Знакомимся с горой"
      },
     
      text: {
        pl: [
          "Wyobraź sobie, że jesteś w górach. Stoisz u podnóża wysokiej góry i patrzysz na jej szczyt.",
          "Chcesz dowiedzieć się czegoś o tej górze. Geograf zadaje Ci dwa pytania."
        ],
        ru: [
          "Представь, что ты находишься в горах. Ты стоишь у подножия высокой горы и смотришь на её вершину.",
          "Ты хочешь узнать кое-что об этой горе. Географ задаёт тебе два вопроса."
        ]
      },
       visual: img(
        "wysokosc-bezwzgledna-wzgledna.svg",
        "Góra i dwa możliwe punkty odniesienia",
        "Гора и две возможные точки отсчёта"
      )
    },
    {
      type: "guided-practice",
      heading: {
        pl: "2. Pierwszy punkt odniesienia: poziom morza",
        ru: "2. Первая точка отсчёта: уровень моря"
      },
      visual: img(
        "co-znaczy-npm.svg",
        "Poziom morza oznaczony jako 0 m i punkt położony wyżej",
        "Уровень моря обозначен как 0 м, выше него находится точка"
      ),
      text: {
        pl: [
          "Na początek zapamiętaj jedną rzecz: poziom morza przyjmujemy jako 0 m.",
          ["Skrót ", em("m n.p.m."), " oznacza „metry nad poziomem morza”."],
          "Jeśli szczyt leży 720 m n.p.m., oznacza to, że znajduje się 720 m nad poziomem morza. Nie mierzymy od drogi ani od podnóża góry."
        ],
        ru: [
          "Для начала запомни только одно: уровень моря принимают за 0 м.",
          [em("м над ур. м."), " означает «метров над уровнем моря»."],
          "Если вершина находится на высоте 720 м над уровнем моря, значит, она расположена на 720 м выше уровня моря. Мы измеряем не от дороги и не от подножия горы."
        ]
      },
      task: {
        id: "g05-02",
        type: "single-choice",
        question: {
          pl: "Punkt ma wysokość 250 m n.p.m. Od czego mierzymy tę wysokość?",
          ru: "Точка находится на высоте 250 м над уровнем моря. От чего измеряют эту высоту?"
        },
        options: [
          { id: "a", label: { pl: "Od poziomu morza", ru: "От уровня моря" } },
          { id: "b", label: { pl: "Od podnóża góry", ru: "От подножия горы" } },
          { id: "c", label: { pl: "Od drogi", ru: "От дороги" } }
        ],
        answer: "a",
        hint: {
          pl: "Podpowiedź jest w skrócie n.p.m.",
          ru: "Подсказка находится в сокращении «над уровнем моря»."
        },
        mistakes: [
          { answer: "b", feedback: {
            pl: "Podnóże przyda nam się przy drugim rodzaju wysokości. Tutaj punktem odniesienia jest poziom morza.",
            ru: "Подножие пригодится нам при изучении второго вида высоты. Здесь точка отсчёта — уровень моря."
          }},
          { answer: "c", feedback: {
            pl: "Droga nie jest punktem odniesienia w zapisie m n.p.m.",
            ru: "Дорога не является точкой отсчёта в записи «м над уровнем моря»."
          }}
        ],
        explanation: {
          pl: "m n.p.m. oznacza metry nad poziomem morza.",
          ru: "«М над ур. м.» означает метры над уровнем моря."
        }
      }
    },
    {
      type: "guided-practice",
      heading: {
        pl: "3. Wysokość bezwzględna: wysokość od morza",
        ru: "3. Абсолютная высота: высота от уровня моря"
      },
      visual: img(
        "wysokosc-bezwzgledna-wzgledna.svg",
        "Szczyt ma 720 m n.p.m., a podnóże 200 m n.p.m.",
        "Вершина находится на высоте 720 м, а подножие — 200 м над уровнем моря"
      ),
      text: {
        pl: [
          [em("Wysokość bezwzględna"), " to wysokość punktu mierzona od poziomu morza."],
          "Na rysunku szczyt ma 720 m n.p.m. To jego wysokość bezwzględna. Podnóże ma 200 m n.p.m. To także wysokość bezwzględna — tylko innego punktu.",
          "Ważne: na razie nie odejmujemy. Po prostu odczytujemy wysokość punktu nad poziomem morza."
        ],
        ru: [
          [em("Абсолютная высота"), " — это высота точки, измеренная от уровня моря."],
          "На рисунке вершина находится на высоте 720 м над уровнем моря. Это её абсолютная высота. Подножие находится на высоте 200 м над уровнем моря. Это тоже абсолютная высота, но другой точки.",
          "Важно: пока ничего не вычитаем. Просто определяем высоту точки над уровнем моря."
        ]
      },
      task: {
        id: "g05-03",
        type: "single-choice",
        question: {
          pl: "Szczyt ma 720 m n.p.m. Jaka jest jego wysokość bezwzględna?",
          ru: "Вершина находится на высоте 720 м над уровнем моря. Какова её абсолютная высота?"
        },
        options: [
          { id: "a", label: { pl: "720 m", ru: "720 м" } },
          { id: "b", label: { pl: "520 m", ru: "520 м" } },
          { id: "c", label: { pl: "200 m", ru: "200 м" } }
        ],
        answer: "a",
        hint: {
          pl: "Odczytaj liczbę przy szczycie. Nie obliczaj jeszcze różnicy.",
          ru: "Посмотри на число у вершины. Пока не вычисляй разницу."
        },
        mistakes: [
          { answer: "b", feedback: {
            pl: "520 m może być różnicą wysokości, ale nie wysokością szczytu nad poziomem morza.",
            ru: "520 м может быть разницей высот, но не высотой вершины над уровнем моря."
          }},
          { answer: "c", feedback: {
            pl: "200 m n.p.m. to wysokość podnóża, a pytanie dotyczy szczytu.",
            ru: "200 м над уровнем моря — это высота подножия, а вопрос о вершине."
          }}
        ],
        explanation: {
          pl: "Szczyt ma 720 m n.p.m., więc jego wysokość bezwzględna wynosi 720 m.",
          ru: "Вершина находится на высоте 720 м над уровнем моря, поэтому её абсолютная высота — 720 м."
        }
      }
    },
    {
      type: "example",
      heading: {
        pl: "4. Drugie pytanie: o ile szczyt jest wyżej?",
        ru: "4. Второй вопрос: на сколько вершина выше?"
      },
      reveal: true,
      visual: img(
        "obliczamy-roznice-wysokosci.svg",
        "Różnica wysokości: 720 m minus 200 m równa się 520 m",
        "Разница высот: 720 м минус 200 м равно 520 м"
      ),
      steps: [
        {
          formula: "Szczyt: 720 m n.p.m.",
          text: {
            pl: ["Najpierw odczytujemy wysokość szczytu nad poziomem morza."],
            ru: ["Сначала определяем высоту вершины над уровнем моря."]
          }
        },
        {
          formula: "Podnóże: 200 m n.p.m.",
          text: {
            pl: ["Potem odczytujemy wysokość podnóża nad poziomem morza."],
            ru: ["Затем определяем высоту подножия над уровнем моря."]
          }
        },
        {
          formula: "720 − 200 = 520 m",
          text: {
            pl: ["Pytanie brzmi „o ile wyżej?”, czyli szukamy różnicy. Od większej liczby odejmujemy mniejszą."],
            ru: ["Вопрос звучит «на сколько выше?», значит, ищем разницу. Из большего числа вычитаем меньшее."]
          }
        },
        {
          formula: "Wysokość względna = 520 m",
          text: {
            pl: ["To wysokość względna szczytu względem podnóża."],
            ru: ["Это относительная высота вершины относительно подножия."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: {
        pl: "5. Wysokość względna: różnica między punktami",
        ru: "5. Относительная высота: разница между точками"
      },
      visual: img(
        "obliczamy-roznice-wysokosci.svg",
        "Od podnóża do szczytu: różnica wysokości wynosi 520 m",
        "От подножия до вершины: разница высот составляет 520 м"
      ),
      text: {
        pl: [
          [em("Wysokość względna"), " to różnica wysokości między dwoma punktami."],
          "Możemy porównać szczyt i podnóże, wzgórze i dolinę albo dwa punkty na mapie.",
          "Sposób liczenia: większa wysokość bezwzględna − mniejsza wysokość bezwzględna = wysokość względna."
        ],
        ru: [
          [em("Относительная высота"), " — это разница высот между двумя точками."],
          "Можно сравнить вершину и подножие, холм и долину или две точки на карте.",
          "Как считать: большая абсолютная высота − меньшая абсолютная высота = относительная высота."
        ]
      },
      task: {
        id: "g05-05",
        type: "single-choice",
        question: {
          pl: "Szczyt ma 720 m n.p.m., a podnóże 200 m n.p.m. Jaka jest wysokość względna?",
          ru: "Вершина находится на высоте 720 м над уровнем моря, а подножие — 200 м. Какова относительная высота?"
        },
        options: [
          { id: "a", label: { pl: "520 m", ru: "520 м" } },
          { id: "b", label: { pl: "920 m", ru: "920 м" } },
          { id: "c", label: { pl: "720 m", ru: "720 м" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukamy różnicy. Zapisz działanie: 720 − 200.",
          ru: "Ищем разницу. Запиши действие: 720 − 200."
        },
        mistakes: [
          { answer: "b", feedback: {
            pl: "Dodawanie nie pokazuje różnicy. Odejmij mniejszą wysokość od większej.",
            ru: "Сложение не показывает разницу. Вычти меньшую высоту из большей."
          }},
          { answer: "c", feedback: {
            pl: "720 m n.p.m. to wysokość bezwzględna szczytu. Pytamy o różnicę między szczytem a podnóżem.",
            ru: "720 м над уровнем моря — абсолютная высота вершины. Мы спрашиваем о разнице между вершиной и подножием."
          }}
        ],
        explanation: {
          pl: "720 − 200 = 520 m. Wysokość względna wynosi 520 m.",
          ru: "720 − 200 = 520 м. Относительная высота равна 520 м."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "6. Naucz się rozpoznawać oba pojęcia",
        ru: "6. Учимся различать два понятия"
      },
      text: {
        pl: [
          "Mała podpowiedź: „n.p.m.” oznacza wysokość bezwzględną. Pytanie „o ile wyżej?” oznacza, że szukamy różnicy, czyli wysokości względnej."
        ],
        ru: [
          "Подсказка: «над уровнем моря» — это абсолютная высота. Вопрос «на сколько выше?» означает, что нужно найти разницу, то есть относительную высоту."
        ]
      },
      task: {
        id: "g05-06",
        type: "single-choice",
        question: {
          pl: "Wzgórze leży na wysokości 340 m n.p.m. Jaki rodzaj wysokości podano?",
          ru: "Холм находится на высоте 340 м над уровнем моря. Какой вид высоты указан?"
        },
        options: [
          { id: "a", label: { pl: "Wysokość bezwzględną", ru: "Абсолютная высота" } },
          { id: "b", label: { pl: "Wysokość względną", ru: "Относительная высота" } },
          { id: "c", label: { pl: "Długość stoku", ru: "Длина склона" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj słów „m n.p.m.”.",
          ru: "Ищи запись «м над уровнем моря»."
        },
        mistakes: [
          { answer: "b", feedback: {
            pl: "Nie podano różnicy między dwoma punktami. Podano wysokość nad poziomem morza.",
            ru: "Здесь не указана разница между двумя точками. Указана высота над уровнем моря."
          }},
          { answer: "c", feedback: {
            pl: "Długość stoku mierzymy wzdłuż zbocza. To nie jest wysokość n.p.m.",
            ru: "Длину склона измеряют вдоль склона. Это не высота над уровнем моря."
          }}
        ],
        explanation: {
          pl: "340 m n.p.m. to wysokość bezwzględna.",
          ru: "340 м над уровнем моря — это абсолютная высота."
        }
      }
    },
    {
      type: "practice",
      heading: {
        pl: "7. Teraz policz samodzielnie",
        ru: "7. Теперь посчитай самостоятельно"
      },
      visual: img(
        "obliczamy-roznice-wysokosci.svg",
        "Dwa punkty na wysokościach 120 m i 370 m n.p.m.",
        "Две точки на высотах 120 м и 370 м над уровнем моря"
      ),
      task: {
        id: "g05-07",
        type: "single-choice",
        question: {
          pl: "Punkt A leży na wysokości 120 m n.p.m., a punkt B na 370 m n.p.m. Jaka jest różnica wysokości?",
          ru: "Точка A находится на высоте 120 м над уровнем моря, а точка B — 370 м. Какова разница высот?"
        },
        options: [
          { id: "a", label: { pl: "250 m", ru: "250 м" } },
          { id: "b", label: { pl: "490 m", ru: "490 м" } },
          { id: "c", label: { pl: "370 m", ru: "370 м" } }
        ],
        answer: "a",
        hint: {
          pl: "Odejmij mniejszą wysokość od większej: 370 − 120.",
          ru: "Вычти меньшую высоту из большей: 370 − 120."
        },
        mistakes: [
          { answer: "b", feedback: {
            pl: "To wynik dodawania. Szukamy różnicy, więc odejmujemy.",
            ru: "Это результат сложения. Мы ищем разницу, поэтому вычитаем."
          }},
          { answer: "c", feedback: {
            pl: "370 m n.p.m. to wysokość punktu B, a nie różnica wysokości.",
            ru: "370 м над уровнем моря — высота точки B, а не разница высот."
          }}
        ],
        explanation: {
          pl: "370 − 120 = 250 m.",
          ru: "370 − 120 = 250 м."
        }
      }
    },
    {
      type: "check",
      heading: {
        pl: "8. Sprawdź się: dwa krótkie pytania",
        ru: "8. Проверь себя: два коротких вопроса"
      },
      text: {
        pl: ["Przeczytaj pytanie do końca. Najpierw zdecyduj, czy chodzi o wysokość nad poziomem morza, czy o różnicę."],
        ru: ["Прочитай вопрос до конца. Сначала реши, спрашивают о высоте над уровнем моря или о разнице."]
      },
      task: {
        id: "g05-08",
        type: "single-choice",
        question: {
          pl: "Które zdanie opisuje wysokość względną?",
          ru: "Какое утверждение описывает относительную высоту?"
        },
        options: [
          { id: "a", label: { pl: "Różnica wysokości między dwoma punktami", ru: "Разница высот между двумя точками" } },
          { id: "b", label: { pl: "Wysokość punktu nad poziomem morza", ru: "Высота точки над уровнем моря" } },
          { id: "c", label: { pl: "Odległość na mapie w centymetrach", ru: "Расстояние на карте в сантиметрах" } }
        ],
        answer: "a",
        hint: {
          pl: "Wysokość względna porównuje dwa punkty.",
          ru: "Относительная высота сравнивает две точки."
        },
        mistakes: [
          { answer: "b", feedback: {
            pl: "To wysokość bezwzględna.",
            ru: "Это абсолютная высота."
          }},
          { answer: "c", feedback: {
            pl: "Centymetry na mapie służą do mierzenia odległości.",
            ru: "Сантиметры на карте используют для измерения расстояния."
          }}
        ],
        explanation: {
          pl: "Wysokość względna to różnica wysokości między dwoma punktami.",
          ru: "Относительная высота — это разница высот между двумя точками."
        }
      }
    },
    {
      type: "summary",
      heading: {
        pl: "9. Zapamiętaj przed kartkówką",
        ru: "9. Запомни перед проверочной"
      },
      items: [
        { pl: "Wysokość bezwzględna — wysokość punktu nad poziomem morza.", ru: "Абсолютная высота — высота точки над уровнем моря." },
        { pl: "m n.p.m. — metry nad poziomem morza.", ru: "м над ур. м. — метры над уровнем моря." },
        { pl: "Wysokość względna — różnica wysokości dwóch punktów.", ru: "Относительная высота — разница высот двух точек." },
        { pl: "Aby obliczyć różnicę, odejmij mniejszą wysokość od większej.", ru: "Чтобы вычислить разницу, вычти меньшую высоту из большей." },
        { pl: "Bezwzględna: od poziomu morza. Względna: między punktami.", ru: "Абсолютная: от уровня моря. Относительная: между точками." }
      ]
    }
  ]
};
