(function (g) {
  /* Canonical ticks for grade-5 Historia. from = first lesson that teaches this point.
     year is a sort key (larger = older BCE). Display is `show`. Equal spacing, not a scale. */
  const TICKS = [
    {
      id: "praludzie",
      from: 1,
      year: "4mln",
      sort: 4000000,
      show: { pl: "4 mln", ua: "4 млн" },
      label: { pl: "praludzie", ua: "пралюди" }
    },
    {
      id: "neolit",
      from: 1,
      year: 10000,
      sort: 10000,
      show: { pl: "10 000", ua: "10 000" },
      label: { pl: "neolit", ua: "неоліт" }
    },
    {
      id: "sumer",
      from: 2,
      year: 3500,
      sort: 3500,
      show: "3500",
      label: { pl: "Sumer", ua: "Шумер" }
    },
    {
      id: "egipt",
      from: 3,
      year: 3000,
      sort: 3000,
      show: "3000",
      label: { pl: "Egipt", ua: "Єгипет" }
    },
    {
      id: "indus",
      from: 5,
      year: 2500,
      sort: 2500,
      show: { pl: "III tys.", ua: "III тис." },
      label: { pl: "Indus", ua: "Інд" }
    },
    {
      id: "zelazo",
      from: 1,
      year: 1200,
      sort: 1200,
      show: "1200",
      label: { pl: "żelazo", ua: "залізо" }
    },
    {
      id: "alfabet",
      from: 6,
      year: 1100,
      sort: 1100,
      show: { pl: "XI w.", ua: "XI ст." },
      label: { pl: "alfabet", ua: "абетка" }
    },
    {
      id: "izrael",
      from: 4,
      year: 1000,
      sort: 1000,
      show: { pl: "X w.", ua: "X ст." },
      label: { pl: "Izrael", ua: "Ізраїль" }
    },
    {
      id: "polis",
      from: 7,
      year: 800,
      sort: 800,
      show: { pl: "VIII w.", ua: "VIII ст." },
      label: { pl: "polis", ua: "поліс" }
    },
    {
      id: "igrzyska",
      from: 10,
      year: 776,
      sort: 776,
      show: "776",
      label: { pl: "igrzyska", ua: "ігри" }
    },
    {
      id: "rzym",
      from: 12,
      year: 753,
      sort: 753,
      show: "753",
      label: { pl: "Rzym", ua: "Рим" }
    },
    {
      id: "republika",
      from: 12,
      year: 509,
      sort: 509,
      show: "509",
      label: { pl: "republika", ua: "республіка" }
    },
    {
      id: "maraton",
      from: 8,
      year: 490,
      sort: 490,
      show: "490",
      label: { pl: "Maraton", ua: "Марафон" }
    },
    {
      id: "salamina",
      from: 8,
      year: 480,
      sort: 480,
      show: "480",
      label: { pl: "Salamina", ua: "Саламін" }
    },
    {
      id: "issos",
      from: 11,
      year: 333,
      sort: 333,
      show: "333",
      label: { pl: "Issos", ua: "Ісс" }
    },
    {
      id: "gaugamela",
      from: 11,
      year: 331,
      sort: 331,
      show: "331",
      label: { pl: "Gaugamela", ua: "Гавгамела" }
    },
    {
      id: "aleksander",
      from: 11,
      year: 323,
      sort: 323,
      show: "323",
      label: { pl: "Aleksander", ua: "Александр" }
    },
    {
      id: "kartagina",
      from: 13,
      year: 146,
      sort: 146,
      show: "146",
      label: { pl: "Kartagina", ua: "Карфаген" }
    },
    {
      id: "spartakus",
      from: 14,
      year: 73,
      sort: 73,
      show: "73",
      label: { pl: "Spartakus", ua: "Спартак" }
    },
    {
      id: "cezar",
      from: 12,
      year: 44,
      sort: 44,
      show: "44",
      label: { pl: "Cezar", ua: "Цезар" }
    },
    {
      id: "jezus",
      from: 16,
      year: 33,
      sort: -33,
      era: "ce",
      show: "33",
      label: { pl: "Jezus", ua: "Ісус" }
    },
    {
      id: "pompeje",
      from: 14,
      year: 79,
      sort: -79,
      era: "ce",
      show: "79",
      label: { pl: "Pompeje", ua: "Помпеї" }
    },
    {
      id: "edykt",
      from: 16,
      year: 313,
      sort: -313,
      era: "ce",
      show: "313",
      label: { pl: "edykt", ua: "едикт" }
    },
    {
      id: "podzial",
      from: 13,
      year: 395,
      sort: -395,
      era: "ce",
      show: "395",
      label: { pl: "podział", ua: "поділ" }
    },
    {
      id: "upadek",
      from: 13,
      year: 476,
      sort: -476,
      era: "ce",
      show: "476",
      label: { pl: "upadek", ua: "упад" }
    },
    {
      id: "justynian",
      from: 15,
      year: 534,
      sort: -534,
      era: "ce",
      show: { pl: "VI w.", ua: "VI ст." },
      label: { pl: "Justynian", ua: "Юстиніан" }
    },
    {
      id: "hidzra",
      from: 18,
      year: 622,
      sort: -622,
      era: "ce",
      show: "622",
      label: { pl: "hidżra", ua: "хіджра" }
    },
    {
      id: "poitiers",
      from: 19,
      year: 732,
      sort: -732,
      era: "ce",
      show: "732",
      label: { pl: "Poitiers", ua: "Пуатьє" }
    },
    {
      id: "pepin",
      from: 19,
      year: 751,
      sort: -751,
      era: "ce",
      show: "751",
      label: { pl: "Pepin", ua: "Піпін" }
    },
    {
      id: "karol800",
      from: 19,
      year: 800,
      sort: -800,
      era: "ce",
      show: "800",
      label: { pl: "Karol", ua: "Карл" }
    },
    {
      id: "morawy",
      from: 27,
      year: 830,
      sort: -830,
      era: "ce",
      show: { pl: "IX w.", ua: "IX ст." },
      label: { pl: "Morawy", ua: "Моравія" }
    },
    {
      id: "verdun",
      from: 19,
      year: 843,
      sort: -843,
      era: "ce",
      show: "843",
      label: { pl: "Verdun", ua: "Верден" }
    },
    {
      id: "plemionaX",
      from: 27,
      year: 950,
      sort: -950,
      era: "ce",
      show: { pl: "X w.", ua: "X ст." },
      label: { pl: "Polanie", ua: "поляни" }
    },
    {
      id: "otton",
      from: 19,
      year: 962,
      sort: -962,
      era: "ce",
      show: "962",
      label: { pl: "Otton", ua: "Оттон" }
    },
    {
      id: "chrzest966",
      from: 28,
      year: 966,
      sort: -966,
      era: "ce",
      show: "966",
      label: { pl: "chrzest", ua: "хрещення" }
    },
    {
      id: "cedynia",
      from: 28,
      year: 972,
      sort: -972,
      era: "ce",
      show: "972",
      label: { pl: "Cedynia", ua: "Цедіня" }
    },
    {
      id: "wojciech997",
      from: 29,
      year: 997,
      sort: -997,
      era: "ce",
      show: "997",
      label: { pl: "Wojciech", ua: "Войцех" }
    },
    {
      id: "zjazd1000",
      from: 29,
      year: 1000,
      sort: -1000,
      era: "ce",
      show: "1000",
      label: { pl: "zjazd", ua: "з’їзд" }
    },
    {
      id: "korona1025",
      from: 29,
      year: 1025,
      sort: -1025,
      era: "ce",
      show: "1025",
      label: { pl: "korona", ua: "корона" }
    },
    {
      id: "kryzys1038",
      from: 30,
      year: 1038,
      sort: -1038,
      era: "ce",
      show: "1038",
      label: { pl: "kryzys", ua: "криза" }
    },
    {
      id: "schizma",
      from: 20,
      year: 1054,
      sort: -1054,
      era: "ce",
      show: "1054",
      label: { pl: "schizma", ua: "схизма" }
    },
    {
      id: "smialy1076",
      from: 30,
      year: 1076,
      sort: -1076,
      era: "ce",
      show: "1076",
      label: { pl: "Śmiały", ua: "Сміливий" }
    },
    {
      id: "canossa",
      from: 20,
      year: 1077,
      sort: -1077,
      era: "ce",
      show: "1077",
      label: { pl: "Canossa", ua: "Каносса" }
    },
    {
      id: "wygnanie1079",
      from: 30,
      year: 1079,
      sort: -1079,
      era: "ce",
      show: "1079",
      label: { pl: "wygnanie", ua: "вигнання" }
    },
    {
      id: "clermont",
      from: 21,
      year: 1095,
      sort: -1095,
      era: "ce",
      show: "1095",
      label: { pl: "Clermont", ua: "Клермон" }
    },
    {
      id: "krucjata",
      from: 21,
      year: 1096,
      sort: -1096,
      era: "ce",
      show: "1096",
      label: { pl: "krucjata", ua: "похід" }
    },
    {
      id: "jerozolima",
      from: 21,
      year: 1099,
      sort: -1099,
      era: "ce",
      show: "1099",
      label: { pl: "Jerozolima", ua: "Єрусалим" }
    },
    {
      id: "glogow1109",
      from: 31,
      year: 1109,
      sort: -1109,
      era: "ce",
      show: "1109",
      label: { pl: "Głogów", ua: "Глогув" }
    },
    {
      id: "wormacja",
      from: 20,
      year: 1122,
      sort: -1122,
      era: "ce",
      show: "1122",
      label: { pl: "Wormacja", ua: "Вормс" }
    },
    {
      id: "testament1138",
      from: 31,
      year: 1138,
      sort: -1138,
      era: "ce",
      show: "1138",
      label: { pl: "testament", ua: "заповіт" }
    },
    {
      id: "krzyzacy1226",
      from: 33,
      year: 1226,
      sort: -1226,
      era: "ce",
      show: "1226",
      label: { pl: "Krzyżacy", ua: "хрестоносці" }
    },
    {
      id: "gasawa1227",
      from: 33,
      year: 1227,
      sort: -1227,
      era: "ce",
      show: "1227",
      label: { pl: "Gąsawa", ua: "Ґонсава" }
    },
    {
      id: "legnica1241",
      from: 33,
      year: 1241,
      sort: -1241,
      era: "ce",
      show: "1241",
      label: { pl: "Legnica", ua: "Легниця" }
    },
    {
      id: "przemysl1295",
      from: 34,
      year: 1295,
      sort: -1295,
      era: "ce",
      show: "1295",
      label: { pl: "Przemysł", ua: "Пшемисл" }
    },
    {
      id: "waclaw1300",
      from: 34,
      year: 1300,
      sort: -1300,
      era: "ce",
      show: "1300",
      label: { pl: "Wacław", ua: "Вацлав" }
    },
    {
      id: "pomorze1309",
      from: 34,
      year: 1309,
      sort: -1309,
      era: "ce",
      show: "1309",
      label: { pl: "Pomorze", ua: "Помор’я" }
    },
    {
      id: "lokietek1320",
      from: 34,
      year: 1320,
      sort: -1320,
      era: "ce",
      show: "1320",
      label: { pl: "Łokietek", ua: "Локетек" }
    },
    {
      id: "plowce1331",
      from: 34,
      year: 1331,
      sort: -1331,
      era: "ce",
      show: "1331",
      label: { pl: "Płowce", ua: "Пловці" }
    },
    {
      id: "kazimierz1333",
      from: 35,
      year: 1333,
      sort: -1333,
      era: "ce",
      show: "1333",
      label: { pl: "Kazimierz", ua: "Казимир" }
    },
    {
      id: "kalisz1343",
      from: 35,
      year: 1343,
      sort: -1343,
      era: "ce",
      show: "1343",
      label: { pl: "Kalisz", ua: "Каліш" }
    },
    {
      id: "akademia1364",
      from: 35,
      year: 1364,
      sort: -1364,
      era: "ce",
      show: "1364",
      label: { pl: "Akademia", ua: "Академія" }
    },
    {
      id: "koszyce1374",
      from: 38,
      year: 1374,
      sort: -1374,
      era: "ce",
      show: "1374",
      label: { pl: "Koszyce", ua: "Кошице" }
    },
    {
      id: "krewo1385",
      from: 36,
      year: 1385,
      sort: -1385,
      era: "ce",
      show: "1385",
      label: { pl: "Krewo", ua: "Крево" }
    },
    {
      id: "grunwald1410",
      from: 36,
      year: 1410,
      sort: -1410,
      era: "ce",
      show: "1410",
      label: { pl: "Grunwald", ua: "Грюнвальд" }
    },
    {
      id: "horodlo1413",
      from: 36,
      year: 1413,
      sort: -1413,
      era: "ce",
      show: "1413",
      label: { pl: "Horodło", ua: "Городло" }
    },
    {
      id: "warna1444",
      from: 37,
      year: 1444,
      sort: -1444,
      era: "ce",
      show: "1444",
      label: { pl: "Warna", ua: "Варна" }
    },
    {
      id: "turcy",
      from: 17,
      year: 1453,
      sort: -1453,
      era: "ce",
      show: "1453",
      label: { pl: "Turcy", ua: "турки" }
    },
    {
      id: "prussy1454",
      from: 37,
      year: 1454,
      sort: -1454,
      era: "ce",
      show: "1454",
      label: { pl: "wojna 13-l.", ua: "13-літня" }
    },
    {
      id: "torun1466",
      from: 37,
      year: 1466,
      sort: -1466,
      era: "ce",
      show: "1466",
      label: { pl: "Toruń", ua: "Торунь" }
    },
    {
      id: "nihil1505",
      from: 38,
      year: 1505,
      sort: -1505,
      era: "ce",
      show: "1505",
      label: { pl: "Nihil novi", ua: "Nihil novi" }
    }
  ];

  const ERA = {
    id: "era",
    kind: "era",
    year: 0,
    sort: 0,
    show: { pl: "n.e.", ua: "н.е." },
    label: { pl: "nasza era", ua: "наша ера" }
  };

  /* From lesson 7 the axis is a sliding window: left edge starts at Indus,
     then each later lesson drops the oldest remaining BCE tick. Right side
     grows with new dates. The nasza era gate stays after the last visible
     BCE tick; CE ticks render to the right of that gate.

     From lesson 14 the window jumps toward the era gate (near the time of
     Jesus) and keeps shifting: one more oldest tick drops every lesson.
     When BCE ticks run out, the left edge is nasza era itself (lessons 16–18).
     From lesson 17 the window also drops the oldest CE tick each lesson.
     From lesson 19 the era gate is gone (everything on screen is n.e.).
     The CE window is: last tick before this topic + this lesson’s years + first tick after
     (neighbours already learned / still to come).
     Lessons 1–6 show the full chain from praludzie. */
  const WINDOW_FROM_LESSON = 7;
  const WINDOW_START_ID = "indus";
  const ERA_PULL_FROM = 14;
  const ERA_PULL_EXTRA = 6;
  const HIDE_ERA_FROM = 19;

  function oldestFirst() {
    return TICKS.filter(function (t) {
      return t.era !== "ce";
    }).sort(function (a, b) {
      return b.sort - a.sort;
    });
  }

  function leftEdgeSort(lesson) {
    if (lesson < WINDOW_FROM_LESSON) return null;
    const order = oldestFirst();
    const start = order.findIndex(function (t) {
      return t.id === WINDOW_START_ID;
    });
    if (start < 0) return null;
    let steps = lesson - WINDOW_FROM_LESSON;
    if (lesson >= ERA_PULL_FROM) {
      steps += ERA_PULL_EXTRA;
    }
    const idx = start + steps;
    let edge;
    if (idx >= order.length) {
      edge = order[order.length - 1].sort - 1;
    } else {
      edge = order[Math.max(0, idx)].sort;
    }
    TICKS.forEach(function (t) {
      if (t.from === lesson && t.era !== "ce" && t.sort > edge) {
        edge = t.sort;
      }
    });
    return edge;
  }

  function ceTopicWindow(itemsCE, lesson) {
    const mine = itemsCE.filter(function (t) {
      return t.from === lesson;
    });
    if (!mine.length) return null;
    const others = itemsCE.filter(function (t) {
      return t.from !== lesson;
    });
    const firstY = Number(mine[0].year);
    const lastY = Number(mine[mine.length - 1].year);
    const before = others.filter(function (t) {
      return Number(t.year) < firstY;
    });
    const after = others.filter(function (t) {
      return Number(t.year) > lastY;
    });
    const out = [];
    if (before.length) out.push(before[before.length - 1]);
    mine.forEach(function (t) {
      out.push(t);
    });
    if (after.length) out.push(after[0]);
    return out;
  }

  function forLesson(n) {
    const lesson = Number(n) || 0;
    const visible = TICKS.filter(function (t) {
      return t.from <= lesson;
    });
    let items = visible.filter(function (t) {
      return t.era !== "ce";
    }).sort(function (a, b) {
      return b.sort - a.sort;
    });
    let itemsCE = visible.filter(function (t) {
      return t.era === "ce";
    }).sort(function (a, b) {
      return Number(a.year) - Number(b.year);
    });
    const edge = leftEdgeSort(lesson);
    let croppedLeft = false;
    if (edge != null) {
      const before = items.length;
      items = items.filter(function (t) {
        return t.sort <= edge;
      });
      croppedLeft = items.length < before;
    }
    const CE_CROP_FROM = 17;
    if (lesson >= HIDE_ERA_FROM) {
      const beforeCE = itemsCE.length;
      let win = ceTopicWindow(itemsCE, lesson);
      if (!win) {
        let prev = lesson - 1;
        while (prev >= HIDE_ERA_FROM && !win) {
          win = ceTopicWindow(itemsCE, prev);
          prev -= 1;
        }
      }
      if (win) {
        itemsCE = win;
        if (itemsCE.length < beforeCE) croppedLeft = true;
      }
    } else if (lesson >= CE_CROP_FROM) {
      let drop = lesson - (CE_CROP_FROM - 1);
      let skipped = 0;
      const beforeCE = itemsCE.length;
      itemsCE = itemsCE.filter(function (t) {
        if (t.from === lesson) return true;
        if (skipped < drop) {
          skipped += 1;
          return false;
        }
        return true;
      });
      if (itemsCE.length < beforeCE) croppedLeft = true;
    }
    const showEra = items.length > 0 || lesson < HIDE_ERA_FROM;
    return {
      lesson: lesson,
      era: showEra
        ? { pl: "p.n.e. → n.e.", ua: "до н.е. → н.е." }
        : { pl: "n.e.", ua: "н.е." },
      items: items,
      itemsCE: itemsCE,
      eraTick: showEra ? ERA : null,
      croppedLeft: croppedLeft
    };
  }

  function forSection(fromLesson, toLesson) {
    const from = Number(fromLesson) || 0;
    const to = Number(toLesson) || 0;
    const ticks = TICKS.filter(function (t) {
      return t.from >= from && t.from <= to;
    });
    const items = ticks.filter(function (t) {
      return t.era !== "ce";
    }).sort(function (a, b) {
      return b.sort - a.sort;
    });
    const itemsCE = ticks.filter(function (t) {
      return t.era === "ce";
    }).sort(function (a, b) {
      return Number(a.year) - Number(b.year);
    });
    const hasBCE = items.length > 0;
    if (!hasBCE && !itemsCE.length) return null;
    return {
      lesson: to,
      era: hasBCE
        ? { pl: "p.n.e. → n.e.", ua: "до н.е. → н.е." }
        : { pl: "n.e.", ua: "н.е." },
      items: items,
      itemsCE: itemsCE,
      eraTick: hasBCE ? ERA : null,
      croppedLeft: false
    };
  }

  g.EduMostHistoriaAxis = { ticks: TICKS, era: ERA, forLesson: forLesson, forSection: forSection };
})(window);
