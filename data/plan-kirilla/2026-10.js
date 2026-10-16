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
    {
      date: "2026-10-06",
      schoolTopics: {
        "informatyka": "Obserwacja po lekcji / sprawdzić Librus po powrocie.",
        "technika": "Obserwacja po lekcji / sprawdzić Librus po powrocie.",
        "matematyka": "Temat lekcji z Librus nie jest wpisany. W domu: krótka diagnoza przed sprawdzianem 7.10.",
        "muzyka": "Obserwacja po lekcji / sprawdzić Librus po powrocie.",
        "j.polski": "Temat lekcji nie jest wpisany. Obserwacja po lekcji / sprawdzić Librus po powrocie. Czytanie Chłopcy z Placu Broni to linia domowa, nie temat lekcji.",
        "wych-fiz": "Ruch w szkole. Poza diagnozą."
      },
      homework: [],
      focus: "Krótka diagnoza matematyki przed sprawdzianem 7.10. Wynik 9022 z 5.10 nie oznacza, że pisemne mnożenie jest opanowane.",
      goal: "Po jednym przykładzie z każdego zakresu. Zatrzymać się po 25–30 minutach. Wieczorem 5–10 minut początku książki, bez pytań na ocenę.",
      childPlan: {
        steps: [
          "Коротка розминка з мамою: один приклад за раз. Це не контрольна.",
          "Chłopcy z Placu Broni: 5–10 хвилин, тільки початок."
        ]
      },
      parentPlan: {
        say: "Jutro w szkole jest praca z matematyki. Dziś sprawdzimy po jednym przykładzie.",
        start: "To nie jest druga wielka historia i nie jest kartkówka.",
        help: "Pokaż tylko ten jeden krok, który się zatrzymał.",
        avoid: "Nie mów, że wczorajsze 9022 już zamyka mnożenie. Nie nazywaj oceny.",
        onError: "Zapisz, na którym kroku stanął. Nie poprawiaj zapisu za niego.",
        onRefusal: "Wtedy jeden przykład i stop.",
        assess: "Liczy się, czy zrobił sam i czy umie powiedzieć, co sprawdzał.",
        stop: "Dwa tematy z rzędu z pomocą albo 25–30 minut: koniec matematyki."
      },
      mission: {
        title: "Diagnoza, nie misja",
        childSteps: [
          "Коротка розминка з мамою.",
          "Chłopcy z Placu Broni: 5–10 хвилин."
        ],
        together: "Mama podaje przykłady po jednym. Odpowiedzi są tylko na jej ekranie."
      }
    },
    eduMostKirillBlankDay("2026-10-07"),
    eduMostKirillBlankDay("2026-10-08"),
    eduMostKirillBlankDay("2026-10-09")
  ]
};
