function em(text) {
  return { text: text, emphasis: true };
}

window.EduMostTaskBank = {
  "poteg-guided-iloczyn": {
    id: "poteg-guided-iloczyn",
    type: "single-choice",
    level: "A",
    question: {
      pl: "4³ to:",
      ua: "4³ це:",
    },
    options: [
      { id: "a", label: { pl: "4 · 3", ua: "4 · 3" } },
      { id: "b", label: { pl: "4 · 4 · 4", ua: "4 · 4 · 4" } },
      { id: "c", label: { pl: "3 · 3 · 3 · 3", ua: "3 · 3 · 3 · 3" } },
    ],
    answer: "b",
    hint: {
      pl: "Wykładnik 3 mówi, ile razy zapisujemy podstawę 4.",
      ua: "Показник 3 каже, скільки разів записуємо основу 4.",
    },
    explanation: {
      pl: "4³ = 4 · 4 · 4. Trzy czwórki, nie 4 · 3.",
      ua: "4³ = 4 · 4 · 4. Три четвірки, не 4 · 3.",
    },
    mistakes: [
      {
        answer: "a",
        feedback: {
          pl: "Uwaga! Wykładnik to nie mnożnik. 4³ to 4 · 4 · 4, a nie 4 · 3.",
          ua: "Увага! Показник — це не множник. 4³ це 4 · 4 · 4, а не 4 · 3.",
        },
      },
      {
        answer: "c",
        feedback: {
          pl: "Tu podstawa to 4, a wykładnik to 3. Czynnikami są czwórki, nie trójki.",
          ua: "Тут основа — 4, а показник — 3. Множники — четвірки, не трійки.",
        },
      },
    ],
  },
  "poteg-write-7": {
    id: "poteg-write-7",
    type: "input-text",
    level: "A",
    question: {
      pl: [
        "Zapisz w postaci potęgi: ",
        em("3 · 3 · 3 · 3"),
        ". Wpisz ze znakiem ",
        em("^"),
        ".",
      ],
      ua: [
        "Запиши у вигляді степеня: ",
        em("3 · 3 · 3 · 3"),
        ". Введи зі знаком ",
        em("^"),
        ".",
      ],
    },
    answer: ["7^4", "7⁴", "7**4"],
    hint: {
      pl: "Ile jest siódemek? Tyle wynosi wykładnik.",
      ua: "Скільки сімок? Стільки й показник.",
    },
    explanation: {
      pl: "Cztery siódemki: 7⁴.",
      ua: "Чотири сімки: 7⁴.",
    },
  },
  "poteg-calc-32": {
    id: "poteg-calc-32",
    type: "input-number",
    level: "C",
    question: {
      pl: "Oblicz 2⁵.",
      ua: "Обчисли 2⁵.",
    },
    answer: 32,
    hint: {
      pl: "2⁵ = 2 · 2 · 2 · 2 · 2",
      ua: "2⁵ = 2 · 2 · 2 · 2 · 2",
    },
    explanation: {
      pl: "2 · 2 · 2 · 2 · 2 = 32.",
      ua: "2 · 2 · 2 · 2 · 2 = 32.",
    },
    mistakes: [
      {
        answer: 10,
        feedback: {
          pl: "2⁵ to nie 2 · 5. Zapisz pięć dwójek i pomnóż.",
          ua: "2⁵ — це не 2 · 5. Запиши п’ять двійок і помнож.",
        },
      },
    ],
  },
  "poteg-check-3": {
    id: "poteg-check-3",
    type: "input-text",
    level: "A",
    question: {
      pl: [
        "Zapisz w postaci potęgi: ",
        em("3 · 3 · 3 · 3"),
        ". Wpisz ze znakiem ",
        em("^"),
        ", na przykład ",
        em("7^4"),
        ".",
      ],
      ua: [
        "Запиши у вигляді степеня: ",
        em("3 · 3 · 3 · 3"),
        ". Введи зі знаком ",
        em("^"),
        ", наприклад ",
        em("7^4"),
        ".",
      ],
    },
    answer: ["3^4", "3⁴", "3**4"],
    hint: {
      pl: "Policz czynniki. To wykładnik.",
      ua: "Полічи множники. Це показник.",
    },
    explanation: {
      pl: "Cztery trójki: 3⁴.",
      ua: "Чотири трійки: 3⁴.",
    },
  },

  "dzial-group-pair": {
    id: "dzial-group-pair",
    type: "single-choice",
    level: "A",
    question: {
      pl: [
        "Która para w sumie ",
        em("7 + 18 + 13 + 2"),
        " daje ",
        em("20"),
        "?",
      ],
      ua: ["Яка пара в сумі ", em("7 + 18 + 13 + 2"), " дає ", em("20"), "?"],
    },
    options: [
      { id: "a", label: { pl: "7 + 18", ua: "7 + 18" } },
      { id: "b", label: { pl: "7 + 13", ua: "7 + 13" } },
      { id: "c", label: { pl: "18 + 13", ua: "18 + 13" } },
    ],
    answer: "b",
    hint: {
      pl: "Szukaj liczb, które razem dają 10 albo 20.",
      ua: "Шукай числа, які разом дають 10 або 20.",
    },
    explanation: {
      pl: "7 + 13 = 20. Potem 18 + 2 = 20. Suma 40.",
      ua: "7 + 13 = 20. Потім 18 + 2 = 20. Сума 40.",
    },
    mistakes: [
      {
        answer: "a",
        feedback: {
          pl: "7 + 18 = 25 — da się, ale 7 + 13 = 20 liczy się wygodniej.",
          ua: "7 + 18 = 25 — можна, але 7 + 13 = 20 зручніше.",
        },
      },
    ],
  },

  "dzial-split-12-11": {
    id: "dzial-split-12-11",
    type: "single-choice",
    level: "A",
    question: {
      pl: ["Wybierz wygodny sposób dla ", em("12 · 11"), "."],
      ua: ["Вибери зручний спосіб для ", em("12 · 11"), "."],
    },
    options: [
      { id: "a", label: { pl: "12 · 1 + 12 · 1", ua: "12 · 1 + 12 · 1" } },
      { id: "b", label: { pl: "12 · 10 + 12 · 1", ua: "12 · 10 + 12 · 1" } },
      { id: "c", label: { pl: "12 · 10 + 1", ua: "12 · 10 + 1" } },
    ],
    answer: "b",
    hint: {
      pl: "11 = 10 + 1. Każdą część mnożymy przez 12.",
      ua: "11 = 10 + 1. Кожну частину множимо на 12.",
    },
    explanation: {
      pl: "12 · 11 = 12 · 10 + 12 · 1 = 120 + 12 = 132.",
      ua: "12 · 11 = 12 · 10 + 12 · 1 = 120 + 12 = 132.",
    },
    mistakes: [
      {
        answer: "a",
        feedback: {
          pl: "11 to nie 1 + 1 w tym zapisie. 11 = 10 + 1, więc 12 · 10 + 12 · 1.",
          ua: "11 — це не 1 + 1 у цьому записі. 11 = 10 + 1, отже 12 · 10 + 12 · 1.",
        },
      },
      {
        answer: "c",
        feedback: {
          pl: "Uwaga: 1 też trzeba pomnożyć przez 12. To 12 · 1, nie samo 1.",
          ua: "Увага: 1 теж треба помножити на 12. Це 12 · 1, не саме 1.",
        },
      },
    ],
  },

  "dzial-group-compute": {
    id: "dzial-group-compute",
    type: "input-number",
    level: "A",
    question: {
      pl: [
        "Oblicz: ",
        em("52 + 36 + 18 + 4"),
        ". Pogrupuj liczby, które łatwo dodać. Wpisz tylko wynik.",
      ],
      ua: [
        "Обчисли: ",
        em("52 + 36 + 18 + 4"),
        ". Згрупуй числа, які легко додати. Введи лише результат.",
      ],
    },
    answer: 110,
    hint: {
      pl: "Zgrupuj 36 + 4 i 52 + 18.",
      ua: "Згрупуй 36 + 4 і 52 + 18.",
    },
    explanation: {
      pl: "36 + 4 = 40 i 52 + 18 = 70. Teraz dodaj wyniki: 40 + 70 = 110.",
      ua: "36 + 4 = 40 і 52 + 18 = 70. Тепер додай результати: 40 + 70 = 110.",
    },
  },

  "dzial-fill-23": {
    id: "dzial-fill-23",
    type: "input-number",
    level: "A",
    question: {
      pl: [
        "8 · ",
        em("23"),
        " = 8 · ",
        em("□"),
        " + 8 · 3. Wpisz liczbę zamiast ",
        em("□"),
        ".",
      ],
      ua: [
        "8 · ",
        em("23"),
        " = 8 · ",
        em("□"),
        " + 8 · 3. Впиши число замість ",
        em("□"),
        ".",
      ],
    },
    answer: 20,
    hint: {
      pl: "23 rozbijamy na dziesiątki i jedności.",
      ua: "23 розбиваємо на десятки і одиниці.",
    },
    explanation: {
      pl: "23 = 20 + 3, więc brakuje 20.",
      ua: "23 = 20 + 3, отже бракує 20.",
    },
    mistakes: [
      {
        answer: 2,
        feedback: {
          pl: "Uwaga: rozbijamy 23 na 20 + 3, nie na 2 + 3.",
          ua: "Увага: розбиваємо 23 на 20 + 3, не на 2 + 3.",
        },
      },
    ],
  },

  "dzial-8-23": {
    id: "dzial-8-23",
    type: "input-number",
    level: "C",
    question: {
      pl: [
        "Oblicz: ",
        em("8 · 23"),
        ". Rozbij ",
        em("23"),
        " na części. Wpisz tylko wynik.",
      ],
      ua: [
        "Обчисли: ",
        em("8 · 23"),
        ". Розбий ",
        em("23"),
        " на частини. Введи лише результат.",
      ],
    },
    answer: 184,
    hint: {
      pl: "23 = 20 + 3. Policz 8 · 20 i 8 · 3.",
      ua: "23 = 20 + 3. Полічи 8 · 20 і 8 · 3.",
    },
    explanation: {
      pl: "8 · 20 + 8 · 3 = 160 + 24 = 184.",
      ua: "8 · 20 + 8 · 3 = 160 + 24 = 184.",
    },
    mistakes: [
      {
        answer: 40,
        feedback: {
          pl: "Uwaga: rozbijamy 23 na 20 + 3, nie na 2 + 3. 8 · 2 + 8 · 3 = 40 to za mało.",
          ua: "Увага: розбиваємо 23 на 20 + 3, не на 2 + 3. 8 · 2 + 8 · 3 = 40 — замало.",
        },
      },
      {
        answer: 24,
        feedback: {
          pl: "To tylko 8 · 3. Dodaj jeszcze 8 · 20 = 160.",
          ua: "Це лише 8 · 3. Додай ще 8 · 20 = 160.",
        },
      },
    ],
  },

  "dzial-zero": {
    id: "dzial-zero",
    type: "true-false",
    level: "A",
    question: {
      pl: ["Czy 823 · ", em("0"), " = ", em("0"), "?"],
      ua: ["Чи 823 · ", em("0"), " = ", em("0"), "?"],
    },
    answer: true,
    explanation: {
      pl: "Dowolna liczba razy 0 daje 0.",
      ua: "Будь-яке число, помножене на 0, дає 0.",
    },
  },

  "dzial-trees": {
    id: "dzial-trees",
    type: "input-number",
    level: "B",
    question: {
      pl: [
        em("20"),
        " osób zbiera jabłka z ",
        em("80"),
        " drzew. Ile drzew przypada na osobę?",
      ],
      ua: [
        em("20"),
        " осіб збирають яблука з ",
        em("80"),
        " дерев. Скільки дерев припадає на особу?",
      ],
    },
    answer: 4,
    hint: {
      pl: "80 : 20. Możesz skreślić po jednym zerze: 8 : 2.",
      ua: "80 : 20. Можеш закреслити по одному нулю: 8 : 2.",
    },
    explanation: {
      pl: "80 : 20 = 8 : 2 = 4.",
      ua: "80 : 20 = 8 : 2 = 4.",
    },
    mistakes: [
      {
        answer: 60,
        feedback: {
          pl: "To odejmowanie 80 − 20. Tu trzeba dzielić: drzewa na osoby.",
          ua: "Це віднімання 80 − 20. Тут треба ділити: дерева на осіб.",
        },
      },
    ],
  },

  "dzial-check-sum": {
    id: "dzial-check-sum",
    type: "input-number",
    level: "A",
    question: {
      pl: [
        "Oblicz: ",
        em("27 + 13 + 18 + 2"),
        ". Pogrupuj liczby, które łatwo dodać. Wpisz tylko wynik.",
      ],
      ua: [
        "Обчисли: ",
        em("27 + 13 + 18 + 2"),
        ". Згрупуй числа, які легко додати. Введи лише результат.",
      ],
    },
    answer: 60,
    hint: {
      pl: "27 + 13 = 40, 18 + 2 = 20.",
      ua: "27 + 13 = 40, 18 + 2 = 20.",
    },
    explanation: {
      pl: "40 + 20 = 60.",
      ua: "40 + 20 = 60.",
    },
  },

  "dzial-check-near": {
    id: "dzial-check-near",
    type: "input-number",
    level: "D",
    question: {
      pl: [
        "Oblicz: ",
        em("29 · 6"),
        ". Skorzystaj z tego, że ",
        em("29"),
        " to prawie ",
        em("30"),
        ". Wpisz tylko wynik.",
      ],
      ua: [
        "Обчисли: ",
        em("29 · 6"),
        ". Скористайся тим, що ",
        em("29"),
        " — майже ",
        em("30"),
        ". Введи лише результат.",
      ],
    },
    answer: 174,
    hint: {
      pl: "29 = 30 − 1, więc 30 · 6 − 1 · 6.",
      ua: "29 = 30 − 1, отже 30 · 6 − 1 · 6.",
    },
    explanation: {
      pl: "180 − 6 = 174.",
      ua: "180 − 6 = 174.",
    },
    mistakes: [
      {
        answer: 1740,
        feedback: {
          pl: "Nie dopisuj zera. 30 · 6 = 180, minus 6, nie 1800.",
          ua: "Не дописуй нуль. 30 · 6 = 180, мінус 6, не 1800.",
        },
      },
    ],
  },

  "kolej-guided-234": {
    id: "kolej-guided-234",
    type: "input-number",
    level: "A",
    question: {
      pl: "Oblicz wartość wyrażenia: 2 + 3 · 4",
      ua: "Обчисли wartość wyrażenia: 2 + 3 · 4",
    },
    answer: 14,
    hint: {
      pl: "Nie ma nawiasu. Najpierw mnożenie.",
      ua: "Немає nawiasu. Спочатку mnożenie.",
    },
    explanation: {
      pl: "3 · 4 = 12, potem 2 + 12 = 14.",
      ua: "3 · 4 = 12, потім 2 + 12 = 14.",
    },
    mistakes: [
      {
        answer: 20,
        feedback: {
          pl: "To (2 + 3) · 4. W wyrażeniu nie ma nawiasu, więc najpierw 3 · 4, nie 2 + 3.",
          ua: "Це (2 + 3) · 4. У wyrażeniu немає nawiasu, отже спочатку 3 · 4, не 2 + 3.",
        },
      },
      {
        answer: 9,
        feedback: {
          pl: "To suma 2 + 3 + 4. Tu jest mnożenie: 3 · 4 = 12, potem + 2.",
          ua: "Це сума 2 + 3 + 4. Тут є mnożenie: 3 · 4 = 12, потім + 2.",
        },
      },
    ],
  },

  "kolej-tf-left": {
    id: "kolej-tf-left",
    type: "true-false",
    level: "B",
    question: {
      pl: "Czy 8 : 4 · 2 = 1?",
      ua: "Чи 8 : 4 · 2 = 1?",
    },
    answer: false,
    hint: {
      pl: "· i : są na tym samym piętrze. Idź od lewej do prawej.",
      ua: "· і : на одному поверсі. Йди od lewej do prawej.",
    },
    explanation: {
      pl: "Od lewej: 8 : 4 = 2, potem 2 · 2 = 4. Wynik to 4, nie 1.",
      ua: "Od lewej: 8 : 4 = 2, потім 2 · 2 = 4. Wynik — 4, не 1.",
    },
    mistakes: [
      {
        answer: true,
        feedback: {
          pl: "To byłoby 8 : (4 · 2). Nawiasu nie ma. Od lewej: 8 : 4 = 2, 2 · 2 = 4.",
          ua: "Так було б 8 : (4 · 2). Nawiasu немає. Od lewej: 8 : 4 = 2, 2 · 2 = 4.",
        },
      },
    ],
  },

  "kolej-shop": {
    id: "kolej-shop",
    type: "single-choice",
    level: "D",
    question: {
      pl: "Które wyrażenie liczy resztę Ani?",
      ua: "Яке wyrażenie рахує решту Ані?",
    },
    options: [
      { id: "a", label: { pl: "20 − 2 · (3 + 5)", ua: "20 − 2 · (3 + 5)" } },
      { id: "b", label: { pl: "20 − (2 · 3 + 5)", ua: "20 − (2 · 3 + 5)" } },
      { id: "c", label: { pl: "20 − 2 + 3 + 5", ua: "20 − 2 + 3 + 5" } },
    ],
    answer: "b",
    hint: {
      pl: "Najpierw koszt: dwa bloki i kredki. Potem odejmij od 20.",
      ua: "Спочатку вартість: два bloki і kredki. Потім відніми від 20.",
    },
    explanation: {
      pl: "2 · 3 + 5 = 11, 20 − 11 = 9. Nawias trzyma cały zakup, zanim odejmiesz od 20.",
      ua: "2 · 3 + 5 = 11, 20 − 11 = 9. Nawias тримає всю покупку, перш ніж відняти від 20.",
    },
    mistakes: [
      {
        answer: "a",
        feedback: {
          pl: "20 − 2 · (3 + 5) to dwa razy (blok + kredki). Ania kupiła dwa bloki i jedne kredki.",
          ua: "20 − 2 · (3 + 5) — це двічі (blok + kredki). Аня купила два bloki і одні kredki.",
        },
      },
      {
        answer: "c",
        feedback: {
          pl: "Tu zniknęło mnożenie. Dwa bloki to 2 · 3, nie samo 2.",
          ua: "Тут зникло mnożenie. Два bloki — це 2 · 3, не просто 2.",
        },
      },
    ],
  },

  "kolej-wheels": {
    id: "kolej-wheels",
    type: "single-choice",
    level: "D",
    question: {
      pl: "3 samochody i 1 motocykl. Które wyrażenie liczy koła?",
      ua: "3 samochody і 1 motocykl. Яке wyrażenie рахує koła?",
    },
    options: [
      { id: "a", label: { pl: "3 · 4 + 2", ua: "3 · 4 + 2" } },
      { id: "b", label: { pl: "3 · (4 + 2)", ua: "3 · (4 + 2)" } },
      { id: "c", label: { pl: "3 + 4 + 2", ua: "3 + 4 + 2" } },
    ],
    answer: "a",
    hint: {
      pl: "Każdy samochód ma 4 koła. Motocykl jest osobno.",
      ua: "Кожен samochód має 4 koła. Motocykl окремо.",
    },
    explanation: {
      pl: "3 · 4 + 2 = 12 + 2 = 14. Najpierw koła samochodów, potem motocykl.",
      ua: "3 · 4 + 2 = 12 + 2 = 14. Спочатку кола авто, потім motocykl.",
    },
    mistakes: [
      {
        answer: "b",
        feedback: {
          pl: "3 · (4 + 2) daje 3 pojazdy po 6 kół. Motocykl nie ma 4 kół.",
          ua: "3 · (4 + 2) дає 3 pojazdy по 6 kół. У motocykla немає 4 kół.",
        },
      },
      {
        answer: "c",
        feedback: {
          pl: "3 + 4 + 2 dodaje sztuki, nie koła trzech samochodów.",
          ua: "3 + 4 + 2 додає штуки, не koła трьох samochodów.",
        },
      },
    ],
  },

  "kolej-same": {
    id: "kolej-same",
    type: "single-choice",
    level: "C",
    question: {
      pl: "Bez liczenia: która para ma tę samą wartość?",
      ua: "Без лічби: яка пара має ту саму wartość?",
    },
    options: [
      {
        id: "a",
        label: {
          pl: "23 − 17 − 2  oraz  23 − (17 + 2)",
          ua: "23 − 17 − 2  та  23 − (17 + 2)",
        },
      },
      {
        id: "b",
        label: {
          pl: "23 − 17 − 2  oraz  23 − (17 − 2)",
          ua: "23 − 17 − 2  та  23 − (17 − 2)",
        },
      },
      {
        id: "c",
        label: {
          pl: "23 + 17 − 2  oraz  23 + (17 + 2)",
          ua: "23 + 17 − 2  та  23 + (17 + 2)",
        },
      },
    ],
    answer: "a",
    hint: {
      pl: "Odjąć 17 i potem 2 to to samo, co odjąć ich sumę.",
      ua: "Відняти 17 і потім 2 — те саме, що відняти їхню суму.",
    },
    explanation: {
      pl: "23 − 17 − 2 idzie od lewej i zabiera 17, potem 2. Nawias 23 − (17 + 2) zabiera od razu 19. Ten sam wynik.",
      ua: "23 − 17 − 2 йде od lewej і забирає 17, потім 2. Nawias 23 − (17 + 2) забирає одразу 19. Той самий wynik.",
    },
    mistakes: [
      {
        answer: "b",
        feedback: {
          pl: "23 − (17 − 2) odejmuje tylko 15. Bez nawiasu odejmujesz 17 i jeszcze 2.",
          ua: "23 − (17 − 2) віднімає лише 15. Без nawiasu віднімаєш 17 і ще 2.",
        },
      },
      {
        answer: "c",
        feedback: {
          pl: "Z prawej jest + 2 w nawiasie, z lewej − 2. To już inna historia.",
          ua: "Справа є + 2 у nawiasie, зліва − 2. Це вже інша історія.",
        },
      },
    ],
  },

  "kolej-check-mul": {
    id: "kolej-check-mul",
    type: "input-number",
    level: "A",
    question: {
      pl: "Oblicz: 4 + 3 · 2",
      ua: "Обчисли: 4 + 3 · 2",
    },
    answer: 14,
    hint: {
      pl: "Najpierw mnożenie.",
      ua: "Спочатку mnożenie.",
    },
    explanation: {
      pl: "3 · 2 = 6, 4 + 6 = 14.",
      ua: "3 · 2 = 6, 4 + 6 = 14.",
    },
    mistakes: [
      {
        answer: 10,
        feedback: {
          pl: "To (4 + 3) · 2. Nawiasu nie ma. Najpierw 3 · 2 = 6, potem + 4.",
          ua: "Це (4 + 3) · 2. Nawiasu немає. Спочатку 3 · 2 = 6, потім + 4.",
        },
      },
    ],
  },

  "kolej-check-left": {
    id: "kolej-check-left",
    type: "input-number",
    level: "B",
    question: {
      pl: "Oblicz: 12 − 4 − 1",
      ua: "Обчисли: 12 − 4 − 1",
    },
    answer: 7,
    hint: {
      pl: "+ i − też od lewej do prawej.",
      ua: "+ і − теж od lewej do prawej.",
    },
    explanation: {
      pl: "12 − 4 = 8, 8 − 1 = 7.",
      ua: "12 − 4 = 8, 8 − 1 = 7.",
    },
    mistakes: [
      {
        answer: 9,
        feedback: {
          pl: "To byłoby 12 − (4 − 1). Nawiasu nie ma. Od lewej: 12 − 4 = 8, potem − 1.",
          ua: "Так було б 12 − (4 − 1). Nawiasu немає. Od lewej: 12 − 4 = 8, потім − 1.",
        },
      },
    ],
  },

  "kolej-check-power": {
    id: "kolej-check-power",
    type: "input-number",
    level: "C",
    question: {
      pl: "Oblicz: 50 − 2 · 3² + 1",
      ua: "Обчисли: 50 − 2 · 3² + 1",
    },
    answer: 33,
    hint: {
      pl: "Najpierw potęga, potem mnożenie, potem + i − od lewej.",
      ua: "Спочатку potęga, потім mnożenie, потім + і − od lewej.",
    },
    explanation: {
      pl: "3² = 9, 2 · 9 = 18, 50 − 18 = 32, 32 + 1 = 33.",
      ua: "3² = 9, 2 · 9 = 18, 50 − 18 = 32, 32 + 1 = 33.",
    },
    mistakes: [
      {
        answer: 15,
        feedback: {
          pl: "Policzyłeś (2 · 3)². Potęga dotyczy tylko trójki: 3² = 9, potem 2 · 9.",
          ua: "Ти полічив (2 · 3)². Potęga стосується лише трійки: 3² = 9, потім 2 · 9.",
        },
      },
      {
        answer: 32,
        feedback: {
          pl: "18 odjęte od 50 daje 32. Zostało jeszcze + 1.",
          ua: "18 відняте від 50 дає 32. Лишилось ще + 1.",
        },
      },
      {
        answer: 39,
        feedback: {
          pl: "3² to 3 · 3 = 9, nie 3 · 2. Potem 2 · 9 = 18.",
          ua: "3² — це 3 · 3 = 9, не 3 · 2. Потім 2 · 9 = 18.",
        },
      },
    ],
  },
};

window.EduMostGetTask = function (id) {
  return window.EduMostTaskBank[id] || null;
};
