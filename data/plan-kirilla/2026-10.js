/* Каркас жовтня. Теми й домашку з Librus вписуйте вручну в день.
   schoolTopics: "DO UZUPEŁNIENIA" або { "matematyka": "тема з Librus" }.
   homework: [] означає «ще не внесено» (на екрані DO UZUPEŁNIENIA).
   Фази підготовки сюди не писати. */
function eduMostKirillBlankDay(date) {
  return {
    date: date,
    schoolTopics: "DO UZUPEŁNIENIA",
    homework: [],
    focus: "",
    goal: "",
    childPlan: {
      steps: []
    },
    parentPlan: {
      say: "",
      start: "",
      help: "",
      avoid: "",
      onError: "",
      onRefusal: "",
      assess: ""
    },
    mission: {
      title: "",
      childSteps: [],
      together: ""
    }
  };
}

window.EduMostKirillMonth = {
  id: "2026-10",
  days: [
    // 2026-10-05
    {
      date: "2026-10-05",
      schoolTopics: {
        "psycholog": "Окрема зустріч. Не перетворювати на завдання місії.",
        "j.polski": "Rzeczownik: rodzaj, odmiana, pisownia „nie”.",
        "historia": "Podsumowanie działu I: starożytne cywilizacje.",
        "plastyka": "Необов’язковий бонус: символ капсули. Поза обов’язковою місією.",
        "j.ang": "Round we go: means of transport, London.",
        "matematyka": "Mnożenie i dzielenie pisemne. У місії: Znajdź błąd, потім ключ замка.",
        "wych-fiz": "Рух поза комп’ютером. Не екран місії."
      },
      homework: [],
      focus: "Кабінет мами: як провести 5 жовтня. Дитяча місія відкривається окремо в Dop_zadania.",
      goal: "Одна місія на математику, польську, англійську й історію. Кирилл заходить у неї зі свого екрана.",
      childPlan: { steps: [] },
      parentPlan: {
        say: "",
        start: "",
        help: "",
        avoid: "",
        onError: "",
        onRefusal: "",
        assess: "",
        stop: ""
      },
      mission: {
        title: "Misja: zaszyfrowana kapsuła",
        childSteps: [],
        together: ""
      }
    },
    // 2026-10-06

    // 2026-10-07

    // 2026-10-08
    eduMostKirillBlankDay("2026-10-06"),
    eduMostKirillBlankDay("2026-10-07"),
    eduMostKirillBlankDay("2026-10-08"),
    eduMostKirillBlankDay("2026-10-09")
  ]
};
