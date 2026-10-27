function em(text) {
  return { text: text, emphasis: true };
}

function img(file, altPl, altRu, place) {
  const spec = {
    kind: "image",
    file: "./img/" + file,
    alt: { pl: altPl, ru: altRu },
    title: { pl: altPl, ru: altRu },
  };
  if (place) spec.place = place;
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: {
        pl: "1. Misja: od czego mierzymy wysokość?",
        ru: "1. Миссия: от чего измеряют высоту?",
      },
      content: [
        {
          type: "text",
          text: {
            pl: [
              "Wyobraź sobie, że jesteś w górach. Stoisz u podnóża wysokiej góry i patrzysz na jej szczyt.",
              "Chcesz dowiedzieć się czegoś o tej górze. Geograf zadaje Ci dwa pytania.",
            ],
            ru: [
              "Представь, что ты в горах. Ты стоишь у подножия высокой горы и смотришь на её вершину.",
              "Ты хочешь узнать кое-что об этой горе. Географ задаёт тебе два вопроса.",
            ],
          },
        },
        {
          type: "image",
          visual: img(
            "wysokosc-bezwzgledna-wzgledna.png",
            "Góra i dwa możliwe punkty odniesienia",
            "Гора и две возможные точки отсчёта",
          ),
        },
        {
          type: "question",
          task: {
            id: "g05-01a",
            type: "single-choice",
            question: {
              pl: "Na jakiej wysokości nad poziomem morza znajduje się szczyt góry? Co chcemy ustalić?",
              ru: "На какой высоте над уровнем моря находится вершина горы? Что мы хотим узнать?",
            },
            options: [
              {
                id: "a",
                label: {
                  pl: "Wysokość szczytu nad poziomem morza",
                  ru: "Высоту вершины над уровнем моря",
                },
              },
              {
                id: "b",
                label: {
                  pl: "Różnicę między szczytem a miejscem, w którym stoję",
                  ru: "Разницу между вершиной и местом, где я стою",
                },
              },
              {
                id: "c",
                label: {
                  pl: "Odległość od góry do morza",
                  ru: "Расстояние от горы до моря",
                },
              },
            ],
            answer: "a",
            hint: {
              pl: "Zwróć uwagę na słowa „nad poziomem morza”.",
              ru: "Обрати внимание на слова «над уровнем моря».",
            },
            mistakes: [
              {
                answer: "b",
                feedback: {
                  pl: "To byłoby pytanie o różnicę wysokości między dwoma miejscami.",
                  ru: "Это был бы вопрос о разнице высот между двумя местами.",
                },
              },
              {
                answer: "c",
                feedback: {
                  pl: "Nie szukamy odległości w terenie. Pytanie dotyczy wysokości szczytu.",
                  ru: "Мы не ищем расстояние на местности. Вопрос касается высоты вершины.",
                },
              },
            ],
            explanation: {
              pl: "Pytamy o wysokość szczytu mierzoną od poziomu morza.",
              ru: "Мы спрашиваем о высоте вершины, измеренной от уровня моря.",
            },
          },
        },
        {
          type: "question",
          task: {
            id: "g05-01b",
            type: "single-choice",
            question: {
              pl: "O ile metrów szczyt góry znajduje się wyżej niż miejsce, w którym stoisz? Co chcemy ustalić?",
              ru: "На сколько метров вершина горы выше места, где ты стоишь? Что мы хотим узнать?",
            },
            options: [
              {
                id: "a",
                label: {
                  pl: "Wysokość szczytu nad poziomem morza",
                  ru: "Высоту вершины над уровнем моря",
                },
              },
              {
                id: "b",
                label: {
                  pl: "Różnicę wysokości między szczytem a miejscem, w którym stoję",
                  ru: "Разницу высот между вершиной и местом, где я стою",
                },
              },
              { id: "c", label: { pl: "Wysokość morza", ru: "Высоту моря" } },
            ],
            answer: "b",
            hint: {
              pl: "Słowa „o ile metrów wyżej” pytają o różnicę.",
              ru: "Слова «на сколько метров выше» спрашивают о разнице.",
            },
            mistakes: [
              {
                answer: "a",
                feedback: {
                  pl: "To była treść pierwszego pytania. Tutaj porównujemy dwa miejsca.",
                  ru: "Это было содержание первого вопроса. Здесь мы сравниваем два места.",
                },
              },
              {
                answer: "c",
                feedback: {
                  pl: "Nie badamy morza. Porównujemy wysokość dwóch miejsc.",
                  ru: "Мы не изучаем море. Мы сравниваем высоты двух мест.",
                },
              },
            ],
            explanation: {
              pl: "Pytamy, o ile metrów jedno miejsce jest wyżej od drugiego.",
              ru: "Мы спрашиваем, на сколько метров одно место выше другого.",
            },
          },
        },
        {
          type: "text",
          text: {
            pl: [
              "Oba pytania dotyczą tej samej góry, ale pytają o coś innego.",
              "Zapamiętaj: możemy pytać o wysokość szczytu nad poziomem morza albo o to, o ile szczyt jest wyżej niż inne miejsce. To dwa różne pytania.",
            ],
            ru: [
              "Оба вопроса относятся к одной и той же горе, но спрашивают о разном.",
              "Запомни: можно спросить о высоте вершины над уровнем моря или о том, на сколько вершина выше другого места. Это два разных вопроса.",
            ],
          },
        },
      ],
    },
    {
      type: "intro",
      heading: {
        pl: "2. 🌊 Co to jest poziom morza?",
        ru: "2. 🌊 Представь, что мы измеряем высоту Земли",
      },
      content: [
        {
          type: "text",
          text: {
            pl: [
              "Spójrz na rysunek. Widzimy morze, równinę, podnóże góry i jej szczyt.",
              "Jak możemy określić wysokość każdego miejsca? Z czym ją porównać?",
            ],
            ru: [
              "Посмотри на рисунок. Здесь есть море, равнина, подножие горы и её вершина.",
              "Но как узнать, на какой высоте находится каждое место? С чем его сравнивать?",
            ],
          },
        },
        {
          type: "image",
          visual: img(
            "co-znaczy-npm.png",
            "Poziom morza oznaczony jako 0 m i punkt położony wyżej",
            "Уровень моря обозначен как 0 м, выше него находится точка",
          ),
        },
        {
          type: "text",
          text: {
            pl: [
              "W geografii przyjmujemy poziom morza jako wspólny punkt odniesienia. Umownie oznaczamy go jako 0 metrów (0 m).",
              "Wyobraź sobie poziomą linię biegnącą wzdłuż powierzchni morza. To nasza linia zerowa.",
            ],
            ru: [
              "Для начала запомни только одно: уровень моря принимают за 0 м.",
              [em("м над ур. м."), " означает «метров над уровнем моря»."],
              "Если вершина находится на высоте 720 м над уровнем моря, значит, она расположена на 720 м выше уровня моря. Мы измеряем не от дороги и не от подножия горы.",
            ],
          },
        },
        {
          type: "items",
          items: [
            {
              pl: "🌊 **Poziom morza — 0 m.**",
              ru: "🌊 **Уровень моря — 0 м.** Это наша точка отсчёта.",
            },
            {
              pl: "🌿 **Równina — 100 m n.p.m.**",
              ru: "🌿 **Равнина — 100 м над уровнем моря.** Она находится на 100 метров выше уровня моря.",
            },
            {
              pl: "⛰️ **Podnóże góry — 300 m n.p.m.**",
              ru: "⛰️ **Подножие горы — 300 м над уровнем моря.**",
            },
            {
              pl: "🏔️ **Szczyt góry — 1200 m n.p.m.**",
              ru: "🏔️ **Вершина горы — 1200 м над уровнем моря.**",
            },
          ],
        },
        {
          type: "text",
          text: {
            pl: "Zapamiętaj: poziom morza przyjmujemy umownie za 0 metrów. Od tej wartości mierzymy wysokość innych miejsc.",
            ru: "Запомни: уровень моря условно принимают за 0 метров. От этой отметки измеряют высоту других мест.",
          },
        },
        {
          type: "rule",
          rule: {
            pl: [
              "Poziom morza przyjmujemy umownie za 0 metrów.",
              "Od tej wartości mierzymy wysokość innych miejsc.",
            ],
            ru: [
              "Уровень моря условно принимают за 0 метров.",
              "От этой отметки измеряют высоту других мест.",
            ],
          },
        },
      ],
    },
    {
      type: "intro",
      heading: {
        pl: "3. 📏 Co oznacza m n.p.m.?",
        ru: "3. 📏 Что означает m n.p.m.?",
      },
      content: [
        {
          type: "text",
          text: {
            pl: [
              "Na mapach często spotkasz zapis **m n.p.m.**. To skrót, który informuje nas, na jakiej wysokości nad poziomem morza znajduje się dane miejsce.",
              "Rozszyfrujmy go krok po kroku!",
            ],
            ru: [
              "На картах часто встречается запись **m n.p.m.** Она показывает, на какой высоте над уровнем моря находится данное место.",
              "Давай разберём эту запись по частям!",
            ],
          },
        },
        {
          type: "image",
          visual: img(
            "co-znaczy-mnpm.png",
            "Poziom morza oznaczony jako 0 m i punkt położony wyżej",
            "Уровень моря обозначен как 0 м, выше него находится точка",
          ),
        },
        {
          type: "items",
          items: [
            {
              pl: "📏 **m — metry**",
              ru: "📏 **m — метры**",
            },
            {
              pl: "🌊 **n.p.m. — nad poziomem morza**",
              ru: "🌊 **n.p.m. — над уровнем моря**",
            },
            {
              pl: "🔎 **250 m n.p.m.** oznacza, że miejsce znajduje się 250 metrów nad poziomem morza.",
              ru: "🔎 **250 m n.p.m.** означает, что место находится на 250 метров выше уровня моря.",
            },
          ],
        },
        {
          type: "text",
          text: {
            pl: [
              "### ⚠️ Uwaga! Nie pomyl dwóch różnych wysokości.",
              "Wysokość nad poziomem morza mierzymy od poziomu morza, a nie od podnóża góry.",
            ],
            ru: [
              "### ⚠️ Внимание! Не перепутай две разные высоты.",
              "Высоту над уровнем моря измеряют от уровня моря, а не от подножия горы.",
            ],
          },
        },
        {
          type: "items",
          items: [
            {
              pl: "🌊 Poziom morza — **0 m**.",
              ru: "🌊 Уровень моря — **0 м**.",
            },
            {
              pl: "⛰️ Podnóże góry — **300 m n.p.m.**",
              ru: "⛰️ Подножие горы — **300 м над уровнем моря**.",
            },
            {
              pl: "🏔️ Szczyt góry — **1200 m n.p.m.**",
              ru: "🏔️ Вершина горы — **1200 м над уровнем моря**.",
            },
            {
              pl: "🧮 Różnica wysokości między podnóżem a szczytem wynosi **900 m**.",
              ru: "🧮 Разница высот между подножием и вершиной составляет **900 м**.",
            },
          ],
        },
        {
          type: "rule",
          rule: {
            pl: [
              "m n.p.m. oznacza metry nad poziomem morza.",
              "Wysokość zawsze odczytujemy względem poziomu morza, a nie od podnóża góry.",
            ],
            ru: [
              "m n.p.m. означает метры над уровнем моря.",
              "Высоту всегда отсчитывают относительно уровня моря, а не от подножия горы.",
            ],
          },
        },
      ],
    },
    {
      type: "intro",
      heading: {
        pl: "4. 📏 Wysokość bezwzględna i względna",
        ru: "4. 📏 Абсолютная и относительная высота",
      },
      content: [
        {
          type: "text",
          text: {
            pl: [
              "Każdy punkt na powierzchni Ziemi może znajdować się na innej wysokości. W geografii rozróżniamy **dwa rodzaje wysokości: bezwzględną i względną**.",
              "Zobaczmy, czym się różnią!",
            ],
            ru: [
              "Каждая точка на поверхности Земли может находиться на разной высоте. В географии различают **два вида высоты: абсолютную и относительную**.",
              "Давай разберёмся, чем они отличаются!",
            ],
          },
        },
        {
          type: "text",
          text: {
            pl: [
              "**1. Wysokość bezwzględna**",
              "To wysokość danego miejsca **nad poziomem morza**. Odczytujemy ją w metrach nad poziomem morza — **m n.p.m.**",
            ],
            ru: [
              "**1. Абсолютная высота (wysokość bezwzględna)**",
              "Это высота определённого места **над уровнем моря**. Её указывают в метрах над уровнем моря — **m n.p.m.**",
            ],
          },
        },
        {
          type: "items",
          items: [
            {
              pl: "🏔️ Szczyt góry — **720 m n.p.m.** To jego wysokość bezwzględna.",
              ru: "🏔️ Вершина горы — **720 м над уровнем моря**. Это её абсолютная высота.",
            },
            {
              pl: "⛰️ Podnóże góry — **200 m n.p.m.** To jego wysokość bezwzględna.",
              ru: "⛰️ Подножие горы — **200 м над уровнем моря**. Это его абсолютная высота.",
            },
          ],
        },
        {
          type: "text",
          text: {
            pl: [
              "**2. Wysokość względna**",
              "To **różnica wysokości między dwoma punktami**. Pokazuje, o ile jeden punkt znajduje się wyżej lub niżej od drugiego.",
            ],
            ru: [
              "**2. Относительная высота (wysokość względna)**",
              "Это **разница высот между двумя точками**. Она показывает, насколько одна точка выше или ниже другой.",
            ],
          },
        },
        {
          type: "image",
          visual: img(
            "bezwzględna_względna.png",
            "Poziom morza oznaczony jako 0 m i punkt położony wyżej",
            "Уровень моря обозначен как 0 м, выше него находится точка",
          ),
        },
        {
          type: "text",
          text: {
            pl: "Szczyt znajduje się **520 m wyżej niż podnóże**. To wysokość względna między tymi punktami.",
            ru: "Вершина находится **на 520 м выше подножия**. Это относительная высота между этими точками.",
          },
        },
        {
          type: "rule",
          rule: {
            pl: [
              "Wysokość bezwzględna — wysokość miejsca nad poziomem morza (m n.p.m.).",
              "Wysokość względna — różnica wysokości między dwoma punktami.",
            ],
            ru: [
              "Абсолютная высота — высота места над уровнем моря (m n.p.m.).",
              "Относительная высота — разница высот между двумя точками.",
            ],
          },
        },
      ],
    },
    {
      type: "intro",
      heading: {
        pl: "5. 🎯 Dwa pytania — dwie różne wysokości",
        ru: "5. 🎯 Два вопроса — две разные высоты",
      },
      content: [
        {
          type: "text",
          text: {
            pl: [
              "Spójrz na rysunek z poprzedniego ekranu. Szczyt góry znajduje się na wysokości **720 m n.p.m.**, a podnóże na wysokości **200 m n.p.m.**",
              "Teraz przeczytaj uważnie dwa pytania. Zauważ, że każde z nich pyta o coś innego.",
            ],
            ru: [
              "Посмотри на рисунок с предыдущего экрана. Вершина горы находится на высоте **720 м над уровнем моря**, а подножие — на высоте **200 м над уровнем моря**.",
              "Теперь внимательно прочитай два вопроса. Обрати внимание: каждый из них спрашивает о разном.",
            ],
          },
        },
        {
          type: "image",
          visual: img(
            "ekran5.png",
            "Poziom morza oznaczony jako 0 m i punkt położony wyżej",
            "Уровень моря обозначен как 0 м, выше него находится точка",
          ),
        },
        {
          type: "items",
          items: [
            {
              pl: "🔵 **Pytanie 1.** Na jakiej wysokości nad poziomem morza znajduje się szczyt góry?",
              ru: "🔵 **Вопрос 1.** На какой высоте над уровнем моря находится вершина горы?",
            },
            {
              pl: "✅ Odpowiedź: **720 m n.p.m.**",
              ru: "✅ Ответ: **720 м над уровнем моря**.",
            },
            {
              pl: "🟢 **Pytanie 2.** O ile metrów szczyt góry znajduje się wyżej niż jej podnóże?",
              ru: "🟢 **Вопрос 2.** На сколько метров вершина горы выше её подножия?",
            },
            {
              pl: "🤔 Zastanów się: czy pytamy o wysokość szczytu nad poziomem morza, czy o różnicę wysokości między dwoma punktami?",
              ru: "🤔 Подумай: нас спрашивают о высоте вершины над уровнем моря или о разнице высот между двумя точками?",
            },
          ],
        },
        {
          type: "text",
          text: {
            pl: [
              "### 🔎 Jak rozpoznać, o co pyta zadanie?",
              "**„Na jakiej wysokości nad poziomem morza?”** — szukamy wysokości bezwzględnej.",
              "**„O ile metrów wyżej lub niżej?”** — szukamy wysokości względnej, czyli różnicy wysokości.",
            ],
            ru: [
              "### 🔎 Как понять, что спрашивает задача?",
              "**«На какой высоте над уровнем моря?»** — ищем абсолютную высоту.",
              "**«На сколько метров выше или ниже?»** — ищем относительную высоту, то есть разницу высот.",
            ],
          },
        },
        {
          type: "rule",
          rule: {
            pl: [
              "Najpierw ustal, o co pyta zadanie.",
              "Wysokość nad poziomem morza i różnica wysokości to dwie różne informacje.",
            ],
            ru: [
              "Сначала определи, о чём спрашивает задача.",
              "Высота над уровнем моря и разница высот — это две разные величины.",
            ],
          },
        },
      ],
    },
    {
      type: "intro",
      heading: {
        pl: "6. 🧮 Jak obliczyć wysokość względną?",
        ru: "6. 🧮 Как вычислить относительную высоту?",
      },
      content: [
        {
          type: "text",
          text: {
            pl: [
              "Wiemy już, że szczyt góry znajduje się na wysokości **720 m n.p.m.**, a jej podnóże na wysokości **200 m n.p.m.**",
              "Jak obliczyć, o ile metrów szczyt znajduje się wyżej niż podnóże? Wykonajmy obliczenia krok po kroku.",
            ],
            ru: [
              "Мы уже знаем, что вершина горы находится на высоте **720 м над уровнем моря**, а её подножие — на высоте **200 м над уровнем моря**.",
              "Как вычислить, на сколько метров вершина выше подножия? Выполним вычисления по шагам.",
            ],
          },
        },
        {
          type: "items",
          items: [
            {
              pl: "🔴 **Krok 1.** Znajdź większą wysokość: **720 m n.p.m.** — wysokość szczytu.",
              ru: "🔴 **Шаг 1.** Найди большую высоту: **720 м над уровнем моря** — высота вершины.",
            },
            {
              pl: "🟠 **Krok 2.** Znajdź mniejszą wysokość: **200 m n.p.m.** — wysokość podnóża.",
              ru: "🟠 **Шаг 2.** Найди меньшую высоту: **200 м над уровнем моря** — высота подножия.",
            },
            {
              pl: "🟢 **Krok 3.** Odejmij mniejszą wysokość od większej.",
              ru: "🟢 **Шаг 3.** Вычти меньшую высоту из большей.",
            },
          ],
        },
        {
          type: "formula",
          value: {
            pl: "720 m − 200 m = 520 m",
            ru: "720 м − 200 м = 520 м",
          },
        },
        {
          type: "text",
          text: {
            pl: [
              "🔵 **Krok 4. Zapisz odpowiedź pełnym zdaniem.**",
              "Szczyt góry znajduje się **520 m wyżej niż jej podnóże**. Wysokość względna między tymi punktami wynosi 520 m.",
            ],
            ru: [
              "🔵 **Шаг 4. Запиши ответ полным предложением.**",
              "Вершина горы находится **на 520 м выше её подножия**. Относительная высота между этими точками составляет 520 м.",
            ],
          },
        },
        {
          type: "rule",
          rule: {
            pl: [
              "Wysokość względną obliczamy, odejmując mniejszą wysokość bezwzględną od większej.",
              "Odpowiedź zapisz pełnym zdaniem i podaj jednostkę — metry (m).",
            ],
            ru: [
              "Относительную высоту вычисляем, вычитая меньшую абсолютную высоту из большей.",
              "Ответ записывай полным предложением и указывай единицу измерения — метры (м).",
            ],
          },
        },
      ],
    },   
{
  type: "practice",
  heading: {
    pl: "7. 🧩 Teraz policz samodzielnie",
    ru: "7. 🧩 Теперь посчитай самостоятельно",
  },
  text: {
    pl: "Szczyt góry znajduje się na wysokości 650 m n.p.m., a jej podnóże — 150 m n.p.m. O ile metrów szczyt znajduje się wyżej niż podnóże?",
    ru: "Вершина горы находится на высоте 650 м над уровнем моря, а подножие — 150 м над уровнем моря. На сколько метров вершина выше подножия?",
  },
  task: {
    id: "g05-07",
    type: "single-choice",
    question: {
      pl: "Wybierz prawidłową odpowiedź.",
      ru: "Выбери правильный ответ.",
    },
    options: [
      {
        id: "a",
        label: {
          pl: "800 m",
          ru: "800 м",
        },
      },
      {
        id: "b",
        label: {
          pl: "500 m",
          ru: "500 м",
        },
      },
      {
        id: "c",
        label: {
          pl: "150 m",
          ru: "150 м",
        },
      },
    ],
    answer: "b",
    hint: {
      pl: "Wysokość względną obliczamy, odejmując mniejszą wysokość od większej.",
      ru: "Относительную высоту вычисляем, вычитая меньшую высоту из большей.",
    },
    mistakes: [
      {
        answer: "a",
        feedback: {
          pl: "Nie dodajemy wysokości. Szukamy różnicy między nimi.",
          ru: "Высоты не складываем. Мы ищем разницу между ними.",
        },
      },
      {
        answer: "c",
        feedback: {
          pl: "150 m to wysokość podnóża nad poziomem morza, a nie różnica wysokości.",
          ru: "150 м — это абсолютная высота подножия, а не разница высот.",
        },
      },
    ],
    explanation: {
      pl: "650 m − 150 m = 500 m. Wysokość względna wynosi 500 m.",
      ru: "650 м − 150 м = 500 м. Относительная высота составляет 500 м.",
    },
  },
},   
{
  type: "practice",
  heading: {
    pl: "8. 🤔 Jakie działanie wybierzesz?",
    ru: "8. 🤔 Какое действие выберешь?",
  },
  text: {
    pl: "Szczyt góry znajduje się na wysokości 840 m n.p.m., a podnóże na wysokości 340 m n.p.m. Chcemy obliczyć wysokość względną.",
    ru: "Вершина горы находится на высоте 840 м над уровнем моря, а подножие — на высоте 340 м над уровнем моря. Мы хотим вычислить относительную высоту.",
  },
  task: {
    id: "g05-08",
    type: "single-choice",
    question: {
      pl: "Jakie działanie pozwoli nam obliczyć, o ile metrów szczyt jest wyżej niż podnóże?",
      ru: "Какое действие поможет узнать, на сколько метров вершина выше подножия?",
    },
    options: [
      {
        id: "a",
        label: {
          pl: "840 + 340",
          ru: "840 + 340",
        },
      },
      {
        id: "b",
        label: {
          pl: "840 − 340",
          ru: "840 − 340",
        },
      },
      {
        id: "c",
        label: {
          pl: "840 × 340",
          ru: "840 × 340",
        },
      },
    ],
    answer: "b",
    hint: {
      pl: "Szukamy różnicy między większą i mniejszą wysokością.",
      ru: "Мы ищем разницу между большей и меньшей высотой.",
    },
    mistakes: [
      {
        answer: "a",
        feedback: {
          pl: "Dodawanie nie pokazuje różnicy wysokości między szczytem a podnóżem.",
          ru: "Сложение не показывает разницу высот между вершиной и подножием.",
        },
      },
      {
        answer: "c",
        feedback: {
          pl: "Nie mnożymy wysokości. Musimy znaleźć różnicę między nimi.",
          ru: "Высоты не умножаем. Нам нужно найти разницу между ними.",
        },
      },
    ],
    explanation: {
      pl: "Wysokość względną obliczamy przez odejmowanie: 840 − 340 = 500 m.",
      ru: "Относительную высоту вычисляем вычитанием: 840 − 340 = 500 м.",
    },
  },
}, 
{
  type: "practice",
  heading: {
    pl: "9. 🏔️ Dwie wysokości — dwie odpowiedzi",
    ru: "9. 🏔️ Две высоты — два ответа",
  },
  text: {
    pl: "Szczyt góry znajduje się na wysokości 920 m n.p.m., a jej podnóże na wysokości 420 m n.p.m. Uważnie przeczytaj pytanie i rozróżnij oba rodzaje wysokości.",
    ru: "Вершина горы находится на высоте 920 м над уровнем моря, а подножие — на высоте 420 м над уровнем моря. Внимательно прочитай вопрос и различи два вида высоты.",
  },
  task: {
    id: "g05-09",
    type: "single-choice",
    question: {
      pl: "Która odpowiedź prawidłowo podaje oba rodzaje wysokości?",
      ru: "В каком варианте правильно указаны оба вида высоты?",
    },
    options: [
      {
        id: "a",
        label: {
          pl: "Bezwzględna: 500 m; względna: 920 m",
          ru: "Абсолютная: 500 м; относительная: 920 м",
        },
      },
      {
        id: "b",
        label: {
          pl: "Bezwzględna: 920 m; względna: 500 m",
          ru: "Абсолютная: 920 м; относительная: 500 м",
        },
      },
      {
        id: "c",
        label: {
          pl: "Bezwzględna: 920 m; względna: 420 m",
          ru: "Абсолютная: 920 м; относительная: 420 м",
        },
      },
    ],
    answer: "b",
    hint: {
      pl: "Wysokość bezwzględna jest podana w m n.p.m. Wysokość względną obliczamy, odejmując wysokości.",
      ru: "Абсолютная высота указана в метрах над уровнем моря. Относительную высоту вычисляем вычитанием.",
    },
    mistakes: [
      {
        answer: "a",
        feedback: {
          pl: "Zamieniono oba rodzaje wysokości miejscami.",
          ru: "Здесь перепутаны местами два вида высоты.",
        },
      },
      {
        answer: "c",
        feedback: {
          pl: "420 m to wysokość bezwzględna podnóża. Aby znaleźć wysokość względną, odejmij 420 od 920.",
          ru: "420 м — абсолютная высота подножия. Чтобы найти относительную высоту, вычти 420 из 920.",
        },
      },
    ],
    explanation: {
      pl: "Wysokość bezwzględna szczytu wynosi 920 m n.p.m. Wysokość względna: 920 − 420 = 500 m.",
      ru: "Абсолютная высота вершины — 920 м над уровнем моря. Относительная высота: 920 − 420 = 500 м.",
    },
  },
},
    {
      type: "check",
      heading: {
        pl: "10. Sprawdź się: dwa krótkie pytania",
        ru: "10. Проверь себя: два коротких вопроса",
      },
      text: {
        pl: [
          "Przeczytaj pytanie do końca. Najpierw zdecyduj, czy chodzi o wysokość nad poziomem morza, czy o różnicę.",
        ],
        ru: [
          "Прочитай вопрос до конца. Сначала реши, спрашивают о высоте над уровнем моря или о разнице.",
        ],
      },
      task: {
        id: "g05-08",
        type: "single-choice",
        question: {
          pl: "Które zdanie opisuje wysokość względną?",
          ru: "Какое утверждение описывает относительную высоту?",
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Różnica wysokości między dwoma punktami",
              ru: "Разница высот между двумя точками",
            },
          },
          {
            id: "b",
            label: {
              pl: "Wysokość punktu nad poziomem morza",
              ru: "Высота точки над уровнем моря",
            },
          },
          {
            id: "c",
            label: {
              pl: "Odległość na mapie w centymetrach",
              ru: "Расстояние на карте в сантиметрах",
            },
          },
        ],
        answer: "a",
        hint: {
          pl: "Wysokość względna porównuje dwa punkty.",
          ru: "Относительная высота сравнивает две точки.",
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To wysokość bezwzględna.",
              ru: "Это абсолютная высота.",
            },
          },
          {
            answer: "c",
            feedback: {
              pl: "Centymetry na mapie służą do mierzenia odległości.",
              ru: "Сантиметры на карте используют для измерения расстояния.",
            },
          },
        ],
        explanation: {
          pl: "Wysokość względna to różnica wysokości między dwoma punktami.",
          ru: "Относительная высота — это разница высот между двумя точками.",
        },
      },
    },
    {
      type: "intro",
      heading: {
        pl: "Zapamętaj",
        ru: "Запомни",
      },
      content: [        
        {
          type: "image",
          visual: img(
            "ekran12.png",
            "Góra i dwa możliwe punkty odniesienia",
            "Гора и две возможные точки отсчёта",
          ),
        },
      ],
    },
  ],
};
