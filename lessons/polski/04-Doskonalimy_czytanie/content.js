function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    // S01
    {
      type: "goal",
      heading: { pl: "Doskonalimy czytanie", ua: "Вдосконалюємо читання" },
      formula: "czytanie ze zrozumieniem  ·  tekst popularnonaukowy  ·  s. 14–15",
      promptPlace: "before",
      prompt: {
        pl: "To lekcja czytania, nie astronomii. Kosmos jest tematem tekstu. Dziś uczysz się czytać i znajdować informacje.",
        ua: "Це урок читання, не астрономії. Космос — тема тексту. Сьогодні вчишся читати і знаходити інформацію."
      },
      items: [
        { pl: "rozumieć trudniejsze słowa;", ua: "розуміти складніші слова;" },
        { pl: "znaleźć informację w tekście;", ua: "знайти інформацію в тексті;" },
        { pl: "odróżnić ważną informację od szczegółu;", ua: "відрізнити важливу інформацію від деталі;" },
        { pl: "odpowiedzieć na pytanie na podstawie tekstu;", ua: "відповісти на питання на основі тексту;" },
        { pl: "wskazać dowód w tekście.", ua: "вказати доказ у тексті." }
      ]
    },
    // S02
    {
      type: "concept",
      heading: { pl: "Zanim zaczniesz czytać", ua: "Перш ніж читати" },
      formula: "Ziemia we Wszechświecie",
      visual: vizGh("t4-obserwatorzy.png", {
        alt: {
          pl: "Dawni obserwatorzy nieba z lunetą",
          ua: "Давні спостерігачі неба з підзорною трубою"
        },
        title: { pl: "Ludzie obserwują niebo", ua: "Люди спостерігають небо" },
        prompt: {
          pl: "Edukacyjna ilustracja 16:9, klasa 5. Dwóch dawnych obserwatorów nieba przy lunecie, noc, gwiazdy, spokojna akwarela. Bez logotypów, bez angielskiego, bez napisów, bez grozy.",
          ua: "Освітня ілюстрація 16:9: давні спостерігачі неба, акварель, без логотипів."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Najpierw tytuł. Jeszcze nie czytasz całego tekstu. Zastanów się, czego się spodziewasz.",
        ua: "Спочатку заголовок. Ще не читай увесь текст. Подумай, чого очікуєш."
      },
      text: {
        pl: [
          "Tytuł: „Ziemia we Wszechświecie”.",
          ["Tekst ", em("popularnonaukowy"), " przekazuje informacje o świecie, nauce lub zjawiskach. Nie jest wierszem ani bajką."]
        ],
        ua: [
          "Заголовок: «Ziemia we Wszechświecie».",
          "Науково-популярний текст передає інформацію про світ або науку. Це не вірш і не казка."
        ]
      },
      task: {
        id: "t4-s02-gatunek",
        type: "single-choice",
        question: {
          pl: "O czym, twoim zdaniem, będzie ten tekst — i jakiego to gatunku?",
          ua: "Про що, на твою думку, буде текст — і якого він жанру?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "O Ziemi i Wszechświecie — tekst popularnonaukowy (informacje, nie wiersz).",
              ua: "Про Землю і Всесвіт — науково-популярний текст (інформація, не вірш)."
            }
          },
          {
            id: "b",
            label: {
              pl: "O przygodach smoka — bajka.",
              ua: "Про пригоди дракона — казка."
            }
          },
          {
            id: "c",
            label: {
              pl: "O uczuciach osoby mówiącej w wierszu — liryka.",
              ua: "Про почуття особи у вірші — лірика."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Spójrz na tytuł. Czy brzmi jak opowieść ze smokiem, czy jak informacja o świecie?",
          ua: "Подивись на заголовок. Це схоже на казку чи на інформацію про світ?"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tytuł mówi o Ziemi i Wszechświecie, nie o smoku. To zapowiedź informacji, nie bajki.",
              ua: "Заголовок про Землю і Всесвіт, не про дракона. Це інформація, не казка."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Wiersz ma osobę mówiącą i nastrój. Tytuł zapowiada informacje o świecie — tekst popularnonaukowy.",
              ua: "Вірш має особу, яка говорить, і настрій. Тут заголовок обіцяє інформацію про світ."
            }
          }
        ],
        explanation: {
          pl: "Z tytułu wnioskujesz temat. Gatunek: tekst popularnonaukowy. Potem sprawdzisz to w lekturze — na razie to przewidywanie.",
          ua: "Із заголовка здогадуєшся тему. Жанр: науково-популярний текст. Потім перевіриш це в читанні."
        }
      }
    },
    // S03
    {
      type: "observe",
      heading: { pl: "Przeczytaj tekst", ua: "Прочитай текст" },
      formula: "Ziemia we Wszechświecie  ·  s. 14",
      visual: vizGh("t4-obserwatorzy.png", {
        place: "after",
        alt: {
          pl: "Obserwatorzy nieba i kula ziemska",
          ua: "Спостерігачі неба і земна куля"
        },
        title: { pl: "Przy tekście", ua: "До тексту" },
        prompt: {
          pl: "Edukacyjna ilustracja 16:9: dawni obserwatorzy nieba, luneta, w tle kula ziemska i gwiazdy. Akwarela, klasa 5, bez logotypów, bez napisów.",
          ua: "Освітня ілюстрація: спостерігачі неба, земна куля, акварель."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Przeczytaj spokojnie. Nie musisz zapamiętać wszystkiego za pierwszym razem. Do tekstu możesz wrócić (Wstecz albo kropki u góry).",
        ua: "Читай спокійно. Не треба запам’ятати все з першого разу. До тексту можна повернутися (Назад або крапки вгорі)."
      },
      text: {
        pl: [
          "Od niepamiętnych czasów ludzie uważnie obserwowali niebo. Pierwsi astronomowie pomagali w nawigacji, układali kalendarze, objaśniali wolę bogów.",
          "Filozofowie i astronomowie starożytnej Grecji na podstawie obserwacji nieba starali się wyjaśnić budowę i historię kosmosu. Tak narodziła się kosmologia – jedna z najstarszych nauk.",
          "Pierwotnie myślano, że mieszkamy na tarczy pływającej pośrodku olbrzymiego oceanu. Jednak już 2500 lat temu stwierdzono, że Ziemia jest kulą. Grecki uczony żyjący na przełomie III i II w. p.n.e. – Eratostenes – określił, że obwód naszej planety wynosi 39690 kilometrów. Wynik, który podał, niewiele się różni od obliczeń współczesnych naukowców.",
          "Dla Eratostenesa, podobnie jak dla większości ówczesnych i późniejszych kosmologów, Ziemia stanowiła środek Wszechświata. Wokół niej po różnych sferach miały się poruszać planety. Zaliczano do nich też Słońce i Księżyc. Wszystko razem otaczała sfera zewnętrzna, do której były przymocowane gwiazdy stałe.",
          "Wierzono, że sfera ta jest kresem Wszechświata. Za nią znajdował się obszar niedostępny dla ludzi. Zamieszkiwali go bogowie.",
          "Takie wyobrażenie świata zburzył w XVI w. Mikołaj Kopernik. W roku śmierci astronoma opublikowano dzieło „O obrotach sfer niebieskich”, w którym polski odkrywca stwierdza, że to Słońce jest w centrum Wszechświata, a Ziemia krąży wokół tej gwiazdy.",
          "Na podstawie książki Ericha Überlackera Kosmos. U granic przestrzeni i czasu, tłumaczenie: Joachim Mader"
        ],
        ua: [
          "Прочитай польською. Весь текст не перекладаємо — допомога буде при словах і завданнях."
        ]
      },
      task: {
        id: "t4-s03-temat",
        type: "single-choice",
        question: {
          pl: "O czym jest ten tekst? (Nie zgaduj — spójrz na cały przebieg.)",
          ua: "Про що цей текст? (Не здогадуйся — подивись на весь хід думки.)"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "O tym, jak zmieniało się wyobrażenie ludzi o Ziemi i Wszechświecie.",
              ua: "Про те, як змінювалося уявлення людей про Землю і Всесвіт."
            }
          },
          {
            id: "b",
            label: {
              pl: "O tym, jak zbudować rakietę w domu.",
              ua: "Про те, як збудувати ракету вдома."
            }
          },
          {
            id: "c",
            label: {
              pl: "O przepisie na ciasto.",
              ua: "Про рецепт тістечка."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Zobacz początek (obserwacja nieba) i koniec (Kopernik). Co się zmienia?",
          ua: "Подивись початок (спостереження неба) і кінець (Коперник). Що змінюється?"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "W tekście nie ma rakiety. Są astronomowie, Eratostenes i Kopernik.",
              ua: "У тексті немає ракети. Є астрономи, Ератосфен і Коперник."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To nie przepis. To informacje o nauce i wyobrażeniach świata.",
              ua: "Це не рецепт. Це інформація про науку і уявлення про світ."
            }
          }
        ],
        explanation: {
          pl: "Tekst opowiada, jak ludzie wyobrażali sobie Ziemię i Wszechświat — od tarczy na oceanie, przez kulę w środku, aż do Kopernika. Szczegóły (liczby, daty) służą tej historii.",
          ua: "Текст розповідає, як люди уявляли Землю і Всесвіт. Деталі (числа, дати) служать цій історії."
        }
      }
    },
    // S04
    {
      type: "concept",
      heading: { pl: "Słowa z marginesu", ua: "Слова з поля сторінки" },
      promptPlace: "before",
      prompt: {
        pl: "Słowniczek ze s. 14. Klikaj „Pokaż następny krok”. Po każdym słowie: znaczenie → UA → przykład.",
        ua: "Словничок зі с. 14. Натискай «Показати наступний крок». Після кожного слова: значення → UA → приклад."
      },
      reveal: true,
      steps: [
        {
          text: {
            pl: [
              [em("astronom"), " — naukowiec, który bada ciała niebieskie (gwiazdy, planety) i to, co dzieje się w kosmosie."],
              "Przykład: Astronom obserwuje gwiazdy."
            ],
            ua: [
              "Астроном — науковець, який досліджує небесні тіла та явища в космосі.",
              "Приклад: Astronom obserwuje gwiazdy."
            ]
          }
        },
        {
          text: {
            pl: [
              [em("nawigacja"), " — pomaga ustalić, gdzie jesteśmy i dokąd mamy się udać (np. na morzu)."],
              "Przykład: Dawniej obserwacja gwiazd pomagała ludziom w nawigacji."
            ],
            ua: [
              "Навігація допомагає визначити, де ми є і куди маємо рухатися.",
              "Приклад: Dawniej obserwacja gwiazd pomagała ludziom w nawigacji."
            ]
          }
        },
        {
          text: {
            pl: [
              [em("kosmologia"), " — nauka o budowie i historii Wszechświata."],
              "Przykład z tekstu: Tak narodziła się kosmologia – jedna z najstarszych nauk."
            ],
            ua: [
              "Космологія — наука про будову і історію Всесвіту.",
              "У тексті: Так narodziła się kosmologia."
            ]
          }
        },
        {
          text: {
            pl: [
              [em("sfery"), " — w tym tekście: wyobrażone kuliste obszary / sklepienia, po których miały poruszać się ciała niebieskie."],
              "Przykład: Wokół Ziemi po różnych sferach miały się poruszać planety."
            ],
            ua: [
              "Сфери тут — уявні кулясті оболонки, якими мали рухатися небесні тіла.",
              "Не плутай із «сферою» як «галуззю» (sfera nauki)."
            ]
          }
        },
        {
          text: {
            pl: [
              [em("kres"), " — koniec, granica."],
              "Przykład: Wierzono, że sfera jest kresem Wszechświata."
            ],
            ua: [
              "Кінець, межа.",
              "Приклад: Wierzono, że sfera jest kresem Wszechświata."
            ]
          }
        }
      ],
      task: {
        id: "t4-s04-astronom",
        type: "single-choice",
        question: {
          pl: "Kto bada gwiazdy i planety?",
          ua: "Хто досліджує зірки і планети?"
        },
        options: [
          { id: "a", label: { pl: "astronom", ua: "astronom" } },
          { id: "b", label: { pl: "kres", ua: "kres" } },
          { id: "c", label: { pl: "nawigacja", ua: "nawigacja" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj słowa na naukowca, nie na „koniec” i nie na „określanie drogi”.",
          ua: "Шукай слово на науковця, не на «кінець» і не на «визначення шляху»."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kres to koniec. Astronom to naukowiec, który bada gwiazdy i planety.",
              ua: "Kres — кінець. Astronom — науковець, який досліджує зірки і планети."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Nawigacja to określanie drogi. Osoba, która bada gwiazdy, to astronom.",
              ua: "Nawigacja — визначення шляху. Той, хто досліджує зірки — astronom."
            }
          }
        ],
        explanation: {
          pl: "Astronom bada ciała niebieskie. Nawigacja = droga. Kosmologia = nauka o Wszechświecie. Sfery (tu) = wyobrażone kule. Kres = koniec.",
          ua: "Astronom досліджує небесні тіла. Nawigacja = шлях. Kosmologia = наука про Всесвіт. Sfery (тут) = уявні кулі. Kres = кінець."
        }
      }
    },
    // S05
    {
      type: "concept",
      heading: { pl: "Trudne słowa w zdaniach", ua: "Складні слова в реченнях" },
      promptPlace: "before",
      prompt: {
        pl: "Nie ucz się listy na pamięć. Zobacz słowo W ZDANIU z tekstu.",
        ua: "Не вчи список напам’ять. Подивись слово В РЕЧЕННІ з тексту."
      },
      items: [
        {
          pl: "*od niepamiętnych czasów* — od bardzo dawna, tak dawno, że nikt nie pamięta początku. Zdanie: „Od niepamiętnych czasów ludzie uważnie obserwowali niebo.”",
          ua: "від незапам’ятних часів — дуже давно."
        },
        {
          pl: "*objaśniali wolę bogów* — tłumaczyli, czego (jak wierzono) chcą bogowie. Zdanie: astronomowie „objaśniali wolę bogów”.",
          ua: "пояснювали волю богів."
        },
        {
          pl: "*stwierdzono* — uznano, powiedziano na podstawie obserwacji. Zdanie: „już 2500 lat temu stwierdzono, że Ziemia jest kulą.”",
          ua: "стверджено, визнано."
        },
        {
          pl: "*przełom III i II w. p.n.e.* — granica między tymi wiekami przed naszą erą. Eratostenes żył wtedy.",
          ua: "перехід III і II ст. до н. е."
        },
        {
          pl: "*zburzył wyobrażenie* — obalił dawny obraz świata, pokazał, że było inaczej. Zdanie: „Takie wyobrażenie świata zburzył w XVI w. Mikołaj Kopernik.”",
          ua: "зруйнував уявлення — показав, що було інакше."
        },
        {
          pl: "*krąży wokół* — porusza się dookoła. Zdanie: „Ziemia krąży wokół tej gwiazdy” (Słońca).",
          ua: "обертається навколо."
        }
      ],
      task: {
        id: "t4-s05-zburzyl",
        type: "single-choice",
        question: {
          pl: "Co znaczy w tekście: „Takie wyobrażenie świata zburzył Kopernik”?",
          ua: "Що означає в тексті: «Takie wyobrażenie świata zburzył Kopernik»?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Kopernik obalił dawny obraz świata i podał inny.",
              ua: "Коперник спростував давню картину світу і дав іншу."
            }
          },
          {
            id: "b",
            label: {
              pl: "Kopernik zniszczył teleskop.",
              ua: "Коперник знищив телескоп."
            }
          },
          {
            id: "c",
            label: {
              pl: "Kopernik zbudował kulę ziemską z gliny.",
              ua: "Коперник зліпив земну кулю з глини."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Wróć do ostatniego akapitu. Co Kopernik stwierdza zamiast dawnego obrazu?",
          ua: "Повернись до останнього абзацу. Що стверджує Коперник замість давньої картини?"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "W tekście nie ma teleskopu Kopernika. „Zburzył wyobrażenie” = obalił dawny obraz świata.",
              ua: "У тексті немає телескопа Коперника. «Zburzył wyobrażenie» = спростував давну картину світу."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To nie o lepieniu kuli. Kopernik zmienił sposób myślenia: Słońce w centrum, Ziemia krąży.",
              ua: "Це не про ліплення кулі. Коперник змінив думку: Сонце в центрі, Земля обертається."
            }
          }
        ],
        explanation: {
          pl: "Zburzyć wyobrażenie = pokazać, że dawny obraz był błędny. Dowód w ostatnim akapicie: Słońce w centrum, Ziemia krąży wokół tej gwiazdy.",
          ua: "Зруйнувати уявлення = показати, що давня картина була хибна. Доказ в останньому абзаці."
        }
      }
    },
    // S06
    {
      type: "guided-practice",
      heading: { pl: "Akapit 1 · co wiemy?", ua: "Абзац 1 · що знаємо?" },
      promptPlace: "before",
      prompt: {
        pl: "Pracujesz TYLKO na pierwszym akapicie. Jeśli nie pamiętasz — wróć do tekstu (Wstecz).",
        ua: "Працюєш ЛИШЕ з першим абзацом. Якщо не пам’ятаєш — повернись до тексту (Назад)."
      },
      text: {
        pl: "Od niepamiętnych czasów ludzie uważnie obserwowali niebo. Pierwsi astronomowie pomagali w nawigacji, układali kalendarze, objaśniali wolę bogów.",
        ua: "Це перший абзац. Відповідь шукай ТУТ, не в голові."
      },
      task: {
        id: "t4-s06-pomagali",
        type: "multiple-choice",
        question: {
          pl: "W czym — według tego akapitu — pomagali pierwsi astronomowie? Zaznacz wszystkie odpowiedzi z tekstu.",
          ua: "У чому — за цим абзацом — допомагали перші астрономи? Познач усі відповіді з тексту."
        },
        options: [
          { id: "a", label: { pl: "w nawigacji", ua: "в навігації" } },
          { id: "b", label: { pl: "układali kalendarze", ua: "складали календарі" } },
          { id: "c", label: { pl: "objaśniali wolę bogów", ua: "пояснювали волю богів" } },
          { id: "d", label: { pl: "budowali rakiety", ua: "будували ракети" } }
        ],
        answer: ["a", "b", "c"],
        hint: {
          pl: "Wróć do pierwszego akapitu. Znajdź zdanie: „Pierwsi astronomowie pomagali…”",
          ua: "Повернись до першого абзацу. Знайди речення: «Pierwsi astronomowie pomagali…»"
        },
        explanation: {
          pl: "W tekście: pomagali w nawigacji, układali kalendarze, objaśniali wolę bogów. Rakiet w tym akapicie nie ma.",
          ua: "У тексті: nawigacja, kalendarze, wola bogów. Ракет у цьому абзаці немає."
        }
      }
    },
    // S07
    {
      type: "practice",
      heading: { pl: "Akapity 2–3 · znajdź informację", ua: "Абзаци 2–3 · знайди інформацію" },
      promptPlace: "before",
      prompt: {
        pl: "Odpowiedź ma być W TEKŚCIE. Nie dopisuj wiedzy z filmu czy z lekcji przyrody.",
        ua: "Відповідь має бути В ТЕКСТІ. Не додавай знань із фільму чи з уроку природознавства."
      },
      text: {
        pl: [
          "Filozofowie i astronomowie starożytnej Grecji na podstawie obserwacji nieba starali się wyjaśnić budowę i historię kosmosu. Tak narodziła się kosmologia – jedna z najstarszych nauk.",
          "Pierwotnie myślano, że mieszkamy na tarczy pływającej pośrodku olbrzymiego oceanu. Jednak już 2500 lat temu stwierdzono, że Ziemia jest kulą. Grecki uczony żyjący na przełomie III i II w. p.n.e. – Eratostenes – określił, że obwód naszej planety wynosi 39690 kilometrów. Wynik, który podał, niewiele się różni od obliczeń współczesnych naukowców."
        ],
        ua: [
          "Абзаци 2–3. Шукай у фрагменті, не з пам’яті."
        ]
      },
      task: {
        id: "t4-s07-ksztalt",
        type: "single-choice",
        question: {
          pl: "Co początkowo sądzono o kształcie Ziemi — i co stwierdzono później (w tych akapitach)?",
          ua: "Що спочатку думали про форму Землі — і що ствердили пізніше (в цих абзацах)?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Najpierw: tarcza na oceanie. Potem (już 2500 lat temu): Ziemia jest kulą. Eratostenes obliczył obwód.",
              ua: "Спочатку: щит на океані. Потім (уже 2500 років тому): Земля — куля. Ератосфен обчислив обвід."
            }
          },
          {
            id: "b",
            label: {
              pl: "Od zawsze wiedziano, że Ziemia jest kulą, a Eratostenes tego nie badał.",
              ua: "Завжди знали, що Земля — куля, а Ератосфен цього не досліджував."
            }
          },
          {
            id: "c",
            label: {
              pl: "Myślano, że Ziemia jest kwadratowa.",
              ua: "Думали, що Земля квадратна."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Znajdź słowa: „Pierwotnie myślano” i „stwierdzono, że Ziemia jest kulą”. Potem nazwisko i liczbę kilometrów.",
          ua: "Знайди: «Pierwotnie myślano» і «Ziemia jest kulą». Потім прізвище і число кілометрів."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tekst mówi: pierwotnie tarcza, potem kula. Eratostenes określił obwód: 39690 kilometrów.",
              ua: "Текст каже: спочатку щит, потім куля. Ератосфен визначив обвід: 39690 кілометрів."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "W tekście jest tarcza pływająca po oceanie — nie kwadrat.",
              ua: "У тексті щит, що плаває в океані — не квадрат."
            }
          }
        ],
        explanation: {
          pl: "Grecy chcieli wyjaśnić budowę i historię kosmosu → kosmologia. Kształt: tarcza → kula. Eratostenes, przełom III i II w. p.n.e., obwód 39690 km.",
          ua: "Греки хотіли пояснити будову космосу → kosmologia. Форма: щит → куля. Ератосфен, 39690 км."
        }
      }
    },
    // S08
    {
      type: "practice",
      heading: { pl: "Liczby, daty, nazwiska", ua: "Числа, дати, прізвища" },
      promptPlace: "before",
      prompt: {
        pl: "Strategia: gdy w tekście są liczby, daty albo nazwiska — zatrzymaj się i sprawdź, DO CZEGO należą.",
        ua: "Стратегія: коли в тексті є числа, дати чи прізвища — зупинись і перевір, ДО ЧОГО вони належать."
      },
      items: [
        { pl: "2500 lat temu — stwierdzono, że Ziemia jest kulą.", ua: "2500 років тому — стверджено, що Земля — куля." },
        { pl: "przełom III i II w. p.n.e. — wtedy żył Eratostenes.", ua: "III–II ст. до н. е. — тоді жив Ератосфен." },
        { pl: "39690 kilometrów — obwód Ziemi według Eratostenesa.", ua: "39690 км — обвід Землі за Ератосфеном." },
        { pl: "XVI w. — Kopernik zburzył dawne wyobrażenie.", ua: "XVI ст. — Коперник зруйнував давнє уявлення." }
      ],
      task: {
        id: "t4-s08-liczba",
        type: "single-choice",
        question: {
          pl: "Do czego w tekście należy liczba 39690 kilometrów?",
          ua: "До чого в тексті належить число 39690 кілометрів?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "do obwodu Ziemi obliczonego przez Eratostenesa",
              ua: "до обводу Землі, обчисленого Ератосфеном"
            }
          },
          {
            id: "b",
            label: {
              pl: "do roku wydania dzieła Kopernika",
              ua: "до року видання твору Коперника"
            }
          },
          {
            id: "c",
            label: {
              pl: "do liczby gwiazd na sferze",
              ua: "до кількості зірок на сфері"
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Znajdź w akapicie 3 słowa „obwód naszej planety wynosi…”.",
          ua: "Знайди в абзаці 3 слова «obwód naszej planety wynosi…»."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kopernik to XVI wiek, nie 39690. Ta liczba to obwód Ziemi (Eratostenes).",
              ua: "Коперник — XVI століття, не 39690. Це число — обвід Землі (Ератосфен)."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Tekst nie podaje liczby gwiazd. 39690 km = obwód planety.",
              ua: "Текст не дає числа зірок. 39690 км = обвід планети."
            }
          }
        ],
        explanation: {
          pl: "Eratostenes → 39690 km (obwód). 2500 lat temu → kula. III/II w. p.n.e. → życie Eratostenesa. XVI w. → Kopernik. XVII w. w tekście nie ma.",
          ua: "Ератосфен → 39690 км. 2500 років тому → куля. XVI ст. → Коперник. XVII ст. у тексті немає."
        }
      }
    },
    // S09
    {
      type: "classification",
      heading: { pl: "Jak zmieniało się wyobrażenie?", ua: "Як змінювалося уявлення?" },
      visual: vizGh("t4-modele-swiata.png", {
        alt: {
          pl: "Trzy wyobrażenia świata: tarcza, Ziemia w środku, Słońce w centrum",
          ua: "Три уявлення світу: щит, Земля в центрі, Сонце в центрі"
        },
        title: { pl: "Trzy obrazy Wszechświata z tekstu", ua: "Три картини Всесвіту з тексту" },
        prompt: {
          pl: "Edukacyjna ilustracja 16:9, klasa 5. Trzy proste schematy obok siebie, podpisane tylko numerami 1 2 3 (bez angielskiego): 1) płaska tarcza na oceanie; 2) kula Ziemi w środku, wokół kręgi planet i Słońce; 3) Słońce w środku, Ziemia na orbicie. Czysta akwarela, bez logotypów, bez watermarków podręcznika.",
          ua: "Три схеми: щит; Земля в центрі; Сонце в центрі. Акварель, без логотипів."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Kolejność TYLKO z tekstu: dawne wyobrażenie → Eratostenes / sfery → Kopernik. Nie dodawaj wiedzy spoza lektury.",
        ua: "Порядок ЛИШЕ з тексту: давнє уявлення → Ератосфен / сфери → Коперник."
      },
      items: [
        { pl: "1. Tarcza pływająca na oceanie.", ua: "1. Щит на океані." },
        { pl: "2. Ziemia-kula w środku; planety (też Słońce i Księżyc) na sferach.", ua: "2. Земля-куля в центрі; планети на сферах." },
        { pl: "3. Słońce w centrum; Ziemia krąży wokół tej gwiazdy (Kopernik, XVI w.).", ua: "3. Сонце в центрі; Земля обертається (Коперник, XVI ст.)." }
      ],
      task: {
        id: "t4-s09-kolejnosc",
        type: "single-choice",
        question: {
          pl: "Która kolejność jest zgodna z tekstem?",
          ua: "Який порядок відповідає тексту?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "tarcza na oceanie → Ziemia w środku Wszechświata (sfery) → Kopernik: Słońce w centrum",
              ua: "щит на океані → Земля в центрі (сфери) → Коперник: Сонце в центрі"
            }
          },
          {
            id: "b",
            label: {
              pl: "Kopernik → tarcza → Eratostenes",
              ua: "Коперник → щит → Ератосфен"
            }
          },
          {
            id: "c",
            label: {
              pl: "od początku Słońce w centrum, potem tarcza",
              ua: "від початку Сонце в центрі, потім щит"
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Czytaj od „Pierwotnie…” do ostatniego akapitu. Co jest NAJPIERW, co PÓŹNIEJ, co w XVI wieku?",
          ua: "Читай від «Pierwotnie…» до останнього абзацу. Що СПОЧАТКУ, що ПОТІМ, що в XVI столітті?"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kopernik jest na końcu tekstu (XVI w.), nie na początku. Najpierw tarcza, potem sfery i środek Ziemi.",
              ua: "Коперник в кінці тексту (XVI ст.), не на початку. Спочатку щит, потім сфери."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Słońce w centrum to dopiero Kopernik. Na początku była tarcza, potem Ziemia jako środek.",
              ua: "Сонце в центрі — це щойно Коперник. На початку був щит, потім Земля як середина."
            }
          }
        ],
        explanation: {
          pl: "Z tekstu: tarcza → kula i Ziemia jako środek (Eratostenes, sfery) → Kopernik zburzył ten obraz. Ilustracje z podręcznika (zad. 2) to te trzy wyobrażenia.",
          ua: "З тексту: щит → куля і Земля в центрі → Коперник зруйнував цей образ."
        }
      }
    },
    // S10
    {
      type: "check",
      heading: { pl: "Czy rozumiesz tekst?", ua: "Чи розумієш текст?" },
      promptPlace: "before",
      prompt: {
        pl: "Nie sprawdzamy pamięci na siłę. Jeśli wahasz się — wróć do tekstu. Zaznacz wszystkie zdania ZGODNE z lekturą.",
        ua: "Це не перевірка пам’яті. Якщо вагаєшся — повернись до тексту. Познач усі речення, ЗГІДНІ з текстом."
      },
      task: {
        id: "t4-s10-prawda",
        type: "multiple-choice",
        question: {
          pl: "Które zdania są prawdziwe według tekstu?",
          ua: "Які речення правдиві за текстом?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Obserwacja nieba pomagała w nawigacji (dotarciu do celu).",
              ua: "Спостереження неба допомагало в навігації."
            }
          },
          {
            id: "b",
            label: {
              pl: "Eratostenes — jak wielu kosmologów — uważał, że Ziemia jest środkiem Wszechświata.",
              ua: "Ератосфен — як багато космологів — вважав, що Земля є серединою Всесвіту."
            }
          },
          {
            id: "c",
            label: {
              pl: "Kopernik stwierdził, że Słońce jest w centrum, a Ziemia krąży wokół tej gwiazdy.",
              ua: "Коперник ствердив, що Сонце в центрі, а Земля обертається навколо цієї зірки."
            }
          },
          {
            id: "d",
            label: {
              pl: "Według tekstu wszyscy starożytni uczeni uważali, że Ziemia jest płaska.",
              ua: "За текстом усі давні вчені вважали, що Земля плоска."
            }
          },
          {
            id: "e",
            label: {
              pl: "Eratostenes żył w III w. n.e.",
              ua: "Ератосфен жив у III ст. н. е."
            }
          }
        ],
        answer: ["a", "b", "c"],
        hint: {
          pl: "Odrzuć to, czego tekst NIE mówi albo mówi inaczej: „wszyscy = płaska”; „n.e.” zamiast p.n.e.",
          ua: "Відкинь те, чого текст НЕ каже або каже інакше: «всі = плоска»; «н. е.» замість до н. е."
        },
        explanation: {
          pl: "Prawda: nawigacja; Ziemia-środek u Eratostenesa; Kopernik i Słońce. Fałsz: nie wszyscy starożytni (już 2500 lat temu kula); Eratostenes: III i II w. p.n.e., nie n.e. W tekście jest XVI w. (Kopernik), nie XVII.",
          ua: "Правда: навігація; Земля-центр в Ератосфена; Коперник і Сонце. Неправда: не всі давні (уже 2500 років тому куля); Ератосфен — до н. е., не н. е."
        }
      }
    },
    // S11
    {
      type: "practice",
      heading: { pl: "Znajdź dowód w tekście", ua: "Знайди доказ у тексті" },
      promptPlace: "before",
      prompt: {
        pl: "Nie wystarczy powiedzieć „Kopernik zmienił wyobrażenie”. Trzeba pokazać, SKĄD to wiemy.",
        ua: "Недостатньо сказати «Коперник змінив уявлення». Треба показати, ЗВІДКИ ми це знаємо."
      },
      text: {
        pl: [
          "Odpowiedź: Kopernik zmienił wyobrażenie o miejscu Ziemi we Wszechświecie.",
          "Teraz wybierz DOWÓD — zdanie, które to potwierdza."
        ],
        ua: [
          "Відповідь: Коперник змінив уявлення про місце Землі у Всесвіті.",
          "Тепер вибери ДОКАЗ — речення, яке це підтверджує."
        ]
      },
      task: {
        id: "t4-s11-dowod",
        type: "single-choice",
        question: {
          pl: "Który fragment jest dowodem?",
          ua: "Який уривок є доказом?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "„…polski odkrywca stwierdza, że to Słońce jest w centrum Wszechświata, a Ziemia krąży wokół tej gwiazdy.”",
              ua: "«…польський відкривач стверджує, що Сонце в центрі Всесвіту, а Земля обертається навколо цієї зірки.»"
            }
          },
          {
            id: "b",
            label: {
              pl: "„Pierwsi astronomowie pomagali w nawigacji, układali kalendarze…”",
              ua: "«Перші астрономи допомагали в навігації, складали календарі…»"
            }
          },
          {
            id: "c",
            label: {
              pl: "„…obwód naszej planety wynosi 39690 kilometrów.”",
              ua: "«…обвід нашої планети становить 39690 кілометрів.»"
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Dowód musi mówić o NOWYM obrazie świata, nie o nawigacji i nie o obwodzie.",
          ua: "Доказ має говорити про НОВУ картину світу, не про навігацію і не про обвід."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To dowód na pracę pierwszych astronomów, nie na zmianę obrazu świata przez Kopernika. Szukaj ostatniego akapitu.",
              ua: "Це доказ про роботу перших астрономів, не про зміну картини світу Коперником. Шукай останній абзац."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To dowód na obliczenie Eratostenesa. Kopernik: ostatni akapit — Słońce w centrum, Ziemia krąży.",
              ua: "Це доказ про обчислення Ератосфена. Коперник: останній абзац."
            }
          }
        ],
        explanation: {
          pl: "Zasada: odpowiedź + dowód. Tu dowód to ostatni akapit (dzieło, Słońce w centrum, Ziemia krąży). Obwód i nawigacja są ważne, ale odpowiadają na inne pytania.",
          ua: "Правило: відповідь + доказ. Тут доказ — останній абзац. Обвід і навігація — на інші питання."
        }
      }
    },
    // S12
    {
      type: "guided-practice",
      heading: { pl: "Przeczytaj jak lektor", ua: "Прочитай як диктор" },
      promptPlace: "before",
      prompt: {
        pl: "W podręczniku (zad. 3): wyobraź sobie, że tekst jest częścią programu telewizyjnego. Czytaj na głos — silnik nie oceni wymowy, ale ty możesz sprawdzić listę.",
        ua: "У підручнику (завд. 3): уяви, що текст — частина телепрограми. Читай уголос — програма не оцінить вимову, але ти можеш перевірити список."
      },
      items: [
        { pl: "Czytam wyraźnie.", ua: "Читаю виразно." },
        { pl: "Nie spieszę się; robię pauzy.", ua: "Не поспішаю; роблю паузи." },
        { pl: "Zwracam uwagę na sens zdania.", ua: "Звертаю увагу на зміст речення." },
        { pl: "Głosem podkreślam ważne informacje (nazwiska, liczby, daty).", ua: "Голосом підкреслюю важливу інформацію." }
      ],
      text: {
        pl: "W zespołach: jeden czyta, drugi słucha, czy tempo i pauzy pomagają zrozumieć.",
        ua: "У парах: один читає, другий слухає, чи темп і паузи допомагають зрозуміти."
      },
      task: {
        id: "t4-s12-glosno",
        type: "multiple-choice",
        question: {
          pl: "Co naprawdę pomaga przy głośnym czytaniu tego tekstu? Zaznacz wszystkie dobre zasady.",
          ua: "Що справді допомагає при голосному читанні? Познач усі добрі правила."
        },
        options: [
          {
            id: "a",
            label: { pl: "czytam wyraźnie i nie za szybko", ua: "читаю виразно і не надто швидко" }
          },
          {
            id: "b",
            label: { pl: "robię pauzy, żeby słuchacz złapał myśl", ua: "роблю паузи, щоб слухач зловив думку" }
          },
          {
            id: "c",
            label: {
              pl: "głosem zaznaczam liczby i nazwiska (Eratostenes, 39690, Kopernik)",
              ua: "голосом позначаю числа і прізвища"
            }
          },
          {
            id: "d",
            label: {
              pl: "czytam jak najszybciej, żeby skończyć pierwszy",
              ua: "читаю якомога швидше, щоб закінчити першим"
            }
          }
        ],
        answer: ["a", "b", "c"],
        hint: {
          pl: "Lektor w telewizji ma być zrozumiały. Szybkość na rekord nie pomaga.",
          ua: "Диктор на телебаченні має бути зрозумілим. Швидкість на рекорд не допомагає."
        },
        explanation: {
          pl: "Wyraźnie, tempo, pauzy, sens, podkreślenie liczb i nazwisk. Nie wyścig. W zeszycie możesz zaznaczyć ołówkiem miejsca pauz.",
          ua: "Виразно, темп, паузи, зміст, наголос на числах і прізвищах. Не перегони."
        }
      }
    },
    // S13
    {
      type: "challenge",
      heading: { pl: "Własna krótka informacja", ua: "Власна коротка інформація" },
      promptPlace: "before",
      prompt: {
        pl: "Na podstawie tekstu powiedz lub napisz 3–4 zdania. Najpierw tu jedno zdanie o Koperniku. Resztę — według planu — w zeszycie.",
        ua: "На основі тексту скажи або напиши 3–4 речення. Спочатку тут одне речення про Коперника. Решту — за планом — у зошиті."
      },
      items: [
        { pl: "Najpierw… (tarcza / ocean)", ua: "Спочатку…" },
        { pl: "Później… (kula, Eratostenes)", ua: "Пізніше…" },
        { pl: "Następnie… (Ziemia w środku, sfery)", ua: "Далі…" },
        { pl: "W XVI wieku… (Kopernik)", ua: "У XVI столітті…" }
      ],
      task: {
        id: "t4-s13-kopernik",
        type: "input-text",
        question: {
          pl: "Dokończ jednym zdaniem: W XVI wieku Kopernik stwierdził, że ______.",
          ua: "Доповни одним реченням: W XVI wieku Kopernik stwierdził, że ______."
        },
        answer: [
          "Słońce jest w centrum Wszechświata",
          "Słońce jest w centrum Wszechświata.",
          "to Słońce jest w centrum Wszechświata",
          "to Słońce jest w centrum Wszechświata.",
          "Słońce jest w centrum Wszechświata, a Ziemia krąży wokół tej gwiazdy",
          "Słońce jest w centrum Wszechświata, a Ziemia krąży wokół tej gwiazdy.",
          "Ziemia krąży wokół Słońca",
          "Ziemia krąży wokół Słońca.",
          "to Słońce jest w centrum, a Ziemia krąży wokół tej gwiazdy",
          "to Słońce jest w centrum, a Ziemia krąży wokół tej gwiazdy."
        ],
        hint: {
          pl: "Ostatni akapit: kto jest w centrum? Co robi Ziemia?",
          ua: "Останній абзац: хто в центрі? Що робить Земля?"
        },
        explanation: {
          pl: "Model z tekstu: Słońce jest w centrum, a Ziemia krąży wokół tej gwiazdy. W zeszycie złóż całość: Najpierw tarcza. Później kula i obwód (Eratostenes). Następnie Ziemia jako środek i sfery. W XVI wieku Kopernik…",
          ua: "Зразок: Сонце в центрі, Земля обертається. У зошиті склади ціле за планом."
        }
      }
    },
    // S14
    {
      type: "check",
      heading: { pl: "Mini-sprawdzenie · nowy fragment", ua: "Міні-перевірка · новий уривок" },
      promptPlace: "before",
      prompt: {
        pl: "Nowy, krótki tekst (EduMost). Strategia ta sama: czytaj → znajdź → odpowiedz → wskaż dowód.",
        ua: "Новий короткий текст (EduMost). Та сама стратегія: читай → знайди → відповідай → вкажи доказ."
      },
      text: {
        pl: [
          "W 1990 roku wyniesiono na orbitę teleskop Hubble’a. Dzięki niemu astronomowie zobaczyli dalekie galaktyki wyraźniej niż wcześniej.",
          "Teleskop nie leci na inną planetę — krąży wokół Ziemi i obserwuje kosmos."
        ],
        ua: [
          "Новий фрагмент. Читай польською. Відповідь шукай у цих двох реченнях."
        ]
      },
      task: {
        id: "t4-s14-hubble",
        type: "single-choice",
        question: {
          pl: "Gdzie — według tego fragmentu — znajduje się teleskop Hubble’a, gdy obserwuje kosmos? Wskaż też dowód.",
          ua: "Де — за цим уривком — перебуває телескоп Габбла, коли спостерігає космос? Вкажи також доказ."
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Krąży wokół Ziemi. Dowód: „krąży wokół Ziemi i obserwuje kosmos.”",
              ua: "Обертається навколо Землі. Доказ: «krąży wokół Ziemi i obserwuje kosmos.»"
            }
          },
          {
            id: "b",
            label: {
              pl: "Leci na Marsa. Dowód: w tekście jest słowo planeta.",
              ua: "Летить на Марс. Доказ: у тексті є слово planeta."
            }
          },
          {
            id: "c",
            label: {
              pl: "Stoi w Grecji obok Eratostenesa. Dowód: z poprzedniego tekstu.",
              ua: "Стоїть у Греції біля Ератосфена. Доказ: з попереднього тексту."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj w DRUGIM zdaniu. Co teleskop robi zamiast lotu na inną planetę?",
          ua: "Шукай у ДРУГОМУ реченні. Що телескоп робить замість польоту на іншу планету?"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tekst mówi wprost: „nie leci na inną planetę”. Słowo „planeta” jest w przeczeniu. Dowód: krąży wokół Ziemi.",
              ua: "Текст каже прямо: «nie leci na inną planetę». Слово «planeta» у запереченні. Доказ: krąży wokół Ziemi."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To inny tekst. Tu nie ma Eratostenesa. Informacji szukasz w TYM fragmencie: krąży wokół Ziemi.",
              ua: "Це інший текст. Тут немає Ератосфена. Інформацію шукаєш У ЦЬОМУ уривку."
            }
          }
        ],
        explanation: {
          pl: "Rok 1990 i Hubble to nowa informacja. Strategia zadziałała: znalazłeś miejsce teleskopu i zdanie-dowód. Nie przenosisz Eratostenesa do nowego tekstu.",
          ua: "1990 і Габбл — нова інформація. Стратегія спрацювала: місце телескопа + речення-доказ."
        }
      }
    },
    // S15
    {
      type: "summary",
      heading: { pl: "Jak czytać tekst informacyjny?", ua: "Як читати інформаційний текст?" },
      items: [
        { pl: "Najpierw przeczytaj całość.", ua: "Спочатку прочитай ціле." },
        { pl: "Zwróć uwagę na tytuł.", ua: "Зверни увагу на заголовок." },
        { pl: "Wyjaśnij trudne słowa.", ua: "Поясни складні слова." },
        { pl: "Szukaj informacji w konkretnych akapitach.", ua: "Шукай інформацію в конкретних абзацах." },
        { pl: "Zwracaj uwagę na nazwiska, liczby i daty.", ua: "Звертай увагу на прізвища, числа і дати." },
        { pl: "Odpowiadaj na podstawie tekstu i — gdy możesz — pokaż dowód.", ua: "Відповідай на основі тексту і — коли можеш — покажи доказ." }
      ],
      promptPlace: "after",
      prompt: {
        pl: "Zeszyt (krótko, nie cały tekst): temat „Ziemia we Wszechświecie”; dawne wyobrażenia; Eratostenes i obwód; Kopernik — Słońce w centrum, Ziemia krąży. Zad. 4 z podręcznika (nowe odkrycia w astronomii) możesz zrobić w domu: jedna krótka notatka.",
        ua: "Зошит (коротко, не весь текст): тема; давні уявлення; Ератосфен і обвід; Коперник. Завд. 4 з підручника можна вдома: одна коротка нотатка."
      },
      task: {
        id: "t4-s15-strategia",
        type: "single-choice",
        question: {
          pl: "Co robić, gdy nie pamiętasz odpowiedzi?",
          ua: "Що робити, коли не пам’ятаєш відповіді?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Wracam do tekstu, znajduję zdanie, rozumiem je i wtedy odpowiadam.",
              ua: "Повертаюся до тексту, знаходжу речення, розумію його і тоді відповідаю."
            }
          },
          {
            id: "b",
            label: {
              pl: "Zgaduję, bo tekstu nie wolno oglądać drugi raz.",
              ua: "Здогадуюсь, бо текст не можна дивитися вдруге."
            }
          },
          {
            id: "c",
            label: {
              pl: "Wymyślam odpowiedź z lekcji astronomii, nawet jeśli jej nie ma w tekście.",
              ua: "Вигадую відповідь з уроку астрономії, навіть якщо її немає в тексті."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Cel lekcji: czytanie, nie pamięć. Gdzie jest informacja?",
          ua: "Мета уроку: читання, не пам’ять. Де інформація?"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wolno wracać do tekstu. Właśnie po to jest czytanie ze zrozumieniem.",
              ua: "Можна повертатися до тексту. Саме для цього є читання з розумінням."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Na tej lekcji odpowiada się na podstawie TEKSTU, nie z innej wiedzy.",
              ua: "На цьому уроці відповідають на основі ТЕКСТУ, не з інших знань."
            }
          }
        ],
        explanation: {
          pl: "Nie musisz znać odpowiedzi z pamięci. Możesz wrócić do tekstu, znaleźć zdanie, zrozumieć je i dopiero wtedy odpowiedzieć. To jest „Doskonalimy czytanie”.",
          ua: "Не треба знати відповідь з пам’яті. Можна повернутися до тексту, знайти речення, зрозуміти і тоді відповісти."
        }
      }
    }
  ]
};
