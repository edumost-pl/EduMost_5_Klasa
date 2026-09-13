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
    {
      type: "goal",
      heading: { pl: "Rz niewymienne", ua: "Rz незмінне" },
      formula: "Co zrobić, gdy rz nie wymienia się na r?  ·  s. 20–21",
      promptPlace: "before",
      prompt: {
        pl: "Pamiętasz? W wyrazach z rz wymiennym szukaliśmy wyrazu pokrewnego, w którym rz zmienia się na r. Dzisiaj poznasz przypadki rz niewymiennego — z opowieści o rzeźbiarce Katarzynie. Ćwiczenia ze s. 22 są w następnej lekcji.",
        ua: "Пам’ятаєш? При rz змінному шукали споріднене слово, де rz → r. Сьогодні — rz незмінне. Вправи зі с. 22 — на наступному уроці."
      },
      items: [
        { pl: "przypomnę rz wymienne (para + rz → r);", ua: "пригадаю rz змінне (пара + rz → r);" },
        { pl: "zobaczę, że nie zawsze jest taka wymiana;", ua: "побачу, що не завжди є така заміна;" },
        { pl: "przeczytam opowieść i wyróżnione wyrazy z rz niewymiennym;", ua: "прочитаю оповідання і виділені слова з rz незмінним;" },
        { pl: "nauczę się zapamiętywać pisownię tych wyrazów z podręcznika.", ua: "навчуся запам’ятовувати написання цих слів з підручника." }
      ]
    },
    {
      type: "concept",
      heading: { pl: "Przypomnienie: rz wymienne", ua: "Нагадування: rz змінне" },
      formula: "ORZEŁ    ↓    ORLI     rz → r",
      promptPlace: "before",
      prompt: {
        pl: "To mechanizm z lekcji o pisowni wymiennej. Szukamy wyrazu pokrewnego albo innej formy.",
        ua: "Механізм з уроку про змінний правопис. Шукаємо споріднене слово або іншу форму."
      },
      items: [
        { pl: "orzeł → orli / orła   (rz → r)", ua: "orzeł → orli" },
        { pl: "morze → morski   (rz → r)", ua: "morze → morski" }
      ],
      task: {
        id: "t7-s02-wymienne",
        type: "single-choice",
        question: {
          pl: "Czy potrafisz znaleźć wymianę w wyrazie orzeł?",
          ua: "Чи вмієш знайти заміну в слові orzeł?"
        },
        options: [
          { id: "a", label: { pl: "Tak: orzeł → orli (rz → r).", ua: "Так: orzeł → orli (rz → r)." } },
          { id: "b", label: { pl: "Nie ma żadnej pary. Zawsze zgaduję.", ua: "Немає пари. Завжди вгадую." } },
          { id: "c", label: { pl: "rz wymienia się na o, jak w stoły.", ua: "rz змінюється на o, як у stoły." } }
        ],
        answer: "a",
        hint: {
          pl: "Zatrzymaj się. Czy możesz znaleźć wyraz pokrewny, w którym rz wymienia się na r?",
          ua: "Зупинись. Чи є споріднене слово, де rz → r?"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zatrzymaj się. Dla orzeł para jest: orli / orła. Tam widać r.",
              ua: "Для orzeł є пара: orli. Там видно r."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "ó → o to inna wymiana. Tu: rz → r (orzeł → orli).",
              ua: "ó → o — інша заміна. Тут rz → r."
            }
          }
        ],
        explanation: {
          pl: "Rz wymienne: znajdujesz parę i widzisz rz → r. Dziś zobaczysz wyrazy, w których takiej pary nie używamy.",
          ua: "Rz змінне: пара і rz → r. Сьогодні — слова без такої пари."
        }
      }
    },
    {
      type: "concept",
      heading: { pl: "A jeśli nie ma wymiany?", ua: "А якщо немає заміни?" },
      formula: "RZESZÓW    ·    RZADKO",
      promptPlace: "before",
      prompt: {
        pl: "Weź wyraz z tytułu opowieści. Najpierw spróbuj: czy znajdziesz wyraz pokrewny, w którym rz wymienia się na r?",
        ua: "Візьми слово з заголовка. Спочатку спробуй: чи є споріднене, де rz → r?"
      },
      text: {
        pl: [
          "Tytuł lekcji w podręczniku: „To się zdarzyło niedaleko Rzeszowa…”",
          "Porównaj z orzeł → orli. Czy w rodzinie wyrazu Rzeszów pojawia się r zamiast rz?"
        ],
        ua: [
          "Заголовок: недалеко від Rzeszowa.",
          "Порівняй з orzeł → orli."
        ]
      },
      task: {
        id: "t7-s03-rzeszow",
        type: "single-choice",
        question: {
          pl: "Czy w wyrazie Rzeszów korzystamy z wymiany rz → r?",
          ua: "Чи в слові Rzeszów користуємось заміною rz → r?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Nie. Tu nie ma pary z r. To przykład rz niewymiennego — zapamiętujemy pisownię.",
              ua: "Ні. Немає пари з r. Це rz незмінне — запам’ятовуємо написання."
            }
          },
          {
            id: "b",
            label: {
              pl: "Tak, jak w orzeł → orli. Zawsze jest r.",
              ua: "Так, як у orzeł → orli. Завжди є r."
            }
          },
          {
            id: "c",
            label: {
              pl: "Nie ma wymiany, więc KAŻDE trudne słowo piszę przez rz.",
              ua: "Немає заміни, тож КОЖНЕ важке слово пишу через rz."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Zatrzymaj się. Czy możesz znaleźć wyraz pokrewny do Rzeszów, w którym rz wymienia się na r?",
          ua: "Зупинись. Чи є до Rzeszów споріднене з r замість rz?"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "orzeł ma parę orli. Rzeszów takiej pary z r nie daje. To inny przypadek.",
              ua: "orzeł має пару orli. Rzeszów такої пари не дає."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To byłoby błędne uproszczenie. Nie każde słowo bez wymiany piszemy przez rz. Dziś uczymy się wyrazów z opowieści w podręczniku.",
              ua: "Це хибне спрощення. Не кожне слово без заміни пишемо через rz."
            }
          }
        ],
        explanation: {
          pl: "W tym przypadku nie korzystamy z wymiany rz → r. To rz niewymienne. Zapamiętaj poprawną pisownię wyrazu z podręcznika — nie zgaduj reguły „zawsze rz”.",
          ua: "Тут не користуємось rz → r. Це rz незмінне. Запам’ятай написання з підручника."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · okolice Rzeszowa", ua: "Читаємо · околиці Жешува" },
      formula: "s. 20  ·  USTNIE + rysunek",
      visual: vizGh("t7-okolice-rzeszowa.png", {
        alt: {
          pl: "Rzeka, wierzby, wędkarz, tablica Rzeszów 15 km, rzeźbiarka przy laptopie",
          ua: "Річка, верби, рибалка, вказівник Rzeszów, скульпторка"
        },
        title: { pl: "Slajd · początek opowieści", ua: "Слайд · початок оповідання" },
        prompt: {
          pl: "Wstaw kadr ze s. 20: dwie węgorze, rzeka, wierzba, wędkarz, drogowskaz «Rzeszów 15 km», domy, rzeźbiarka przy laptopie w ogródku, skrzynka z warzywami. Podświetlone w tekście: Rzeszowa, wierzb, jarzębin, rzeką, węgorze, rzeźbiarka; rzeszach, rzadko, rzeczy, narzędzia, warzywa. PNG, kadr szeroki. Przytnij znak wodny.",
          ua: "Встав ілюстрацію початку оповідання: річка, Rzeszów, скульпторка в городі."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "USTNIE: nauczyciel czyta — ty patrzysz na rysunek (zad. 1 ze s. 22). Potem przeczytaj fragment. Turkusowe wyrazy: rz niewymienne.",
        ua: "УСНО: слухай і дивись на малюнок. Бірюзові слова — rz незмінне."
      },
      text: {
        pl: [
          "W okolicach **Rzeszowa**, wśród starych **wierzb** i pięknych **jarzębin**, nad niewielką **rzeką**, w której można było łowić dorodne **węgorze**, miała swoją pracownię **rzeźbiarka** Katarzyna.",
          "Artystka mieszkała na uboczu, ponieważ nie lubiła zgiełku i hałasu. Z przerażeniem myślała też o **rzeszach** ludzi tłoczących się zwykle w autobusach czy sklepach. Dlatego **rzadko** jeździła do miasta. Wszystkie **rzeczy**, zwłaszcza **narzędzia** potrzebne do pracy, kupowała przez internet, a w ogródku od wczesnej wiosny do późnej jesieni uprawiała **warzywa**.",
          ["**rzesza** — wielka liczba ludzi. (glosa ze s. 20)"]
        ],
        ua: [
          "Біля Rzeszowa, верби, горобина, річка, вугри, скульпторка Катажина.",
          "rzesza — велика кількість людей."
        ]
      },
      task: {
        id: "t7-s04-gdzie",
        type: "single-choice",
        question: {
          pl: "Gdzie mieszka i pracuje Katarzyna?",
          ua: "Де живе і працює Катажина?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "W okolicach Rzeszowa, nad rzeką, na uboczu.",
              ua: "Біля Rzeszowa, над річкою, осторонь."
            }
          },
          {
            id: "b",
            label: {
              pl: "W centrum wielkiego miasta, w autobusie.",
              ua: "У центрі великого міста, в автобусі."
            }
          },
          {
            id: "c",
            label: {
              pl: "Na Księżycu, nad Morzem Spokoju.",
              ua: "На Місяці, над Морем Спокою."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Pierwsze zdanie opowieści: okolice… nad niewielką rzeką.",
          ua: "Перше речення: околиці… над річкою."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Właśnie unika rzesz ludzi. Mieszka na uboczu.",
              ua: "Вона уникає натовпу. Живе осторонь."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To była inna lekcja (komiks o Księżycu). Tu: Rzeszów i rzeka.",
              ua: "То був інший урок. Тут Rzeszów і річка."
            }
          }
        ],
        explanation: {
          pl: "Kontekst: okolice Rzeszowa. Wyróżnione rz niewymienne m.in.: Rzeszowa, wierzba, jarzębina, rzeka, węgorze, rzeźbiarka, rzadko, narzędzia, warzywa.",
          ua: "Контекст: околиці Rzeszowa. Виділені слова — rz незмінне."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · rzeźba i kuchnia", ua: "Читаємо · скульптура і кухня" },
      formula: "s. 20  ·  USTNIE",
      visual: vizGh("t7-rzezba-kuchnia.png", {
        alt: {
          pl: "Katarzyna w kuchni i przy oknie; surówka, rzepa, porzeczki",
          ua: "Катажина на кухні і біля вікна"
        },
        title: { pl: "Slajd · zlecenie i surówka", ua: "Слайд · замовлення і салат" },
        prompt: {
          pl: "Wstaw kadr ze s. 20: Katarzyna kroi warzywa (rzepa, porzeczki, orzechy); druga scena — otwarte okno, burzowe niebo. W tekście wyróżnione: rzetelnie, narzekała, rzeźba, narzeczonej Małgorzaty, rzemieślnik, rzemyków, zwierząt, rzepy, rzeżuchy, porzeczek, orzechów, rzepakowego, orzeźwiający, korzeniem, rzęsy, macierzanki, burzę. PNG. Przytnij znak wodny.",
          ua: "Встав кадр кухні та вікна з оповідання."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Przeczytaj. Kto zamówił rzeźbę? Co Katarzyna je rano? USTNIE odpowiedz zanim klikniesz.",
        ua: "Прочитай. Хто замовив скульптуру? Що Катажина їсть зранку?"
      },
      text: {
        pl: [
          "Od kilku miesięcy całymi dniami **rzetelnie** pracowała nad nowym zleceniem. Zadanie nie należało do łatwych, ale Katarzyna nie **narzekała**. Miała to być **rzeźba** przedstawiająca piękną czarnoskórą dziewczynę. Pracę tę zamówił dla swej **narzeczonej Małgorzaty** bogaty **rzemieślnik** produkujący z kolorowych **rzemyków** zabawki dla **zwierząt**.",
          "Pewnego ranka Katarzyna zrobiła swoją ulubioną surówkę z **rzepy**, **rzeżuchy**, **porzeczek** i **orzechów** skropioną odrobiną oleju **rzepakowego**. Pijąc **orzeźwiający** napój z **korzeniem** imbiru, myślała, jak misternie uformować **rzęsy** rzeźbionej dziewczyny. Wyjrzała przez okno. W powietrzu unosił się silny zapach **macierzanki**. Miała wrażenie, że zbiera się na **burzę**…"
        ],
        ua: [
          "Вона старанно робить скульптуру для нареченої ремісника.",
          "Зранку — салат із ріпи, крес-салату, порічок."
        ]
      },
      task: {
        id: "t7-s05-zlecenie",
        type: "single-choice",
        question: {
          pl: "Kto zamówił rzeźbę?",
          ua: "Хто замовив скульптуру?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Bogaty rzemieślnik — dla narzeczonej Małgorzaty.",
              ua: "Багатий ремісник — для нареченої Малгожати."
            }
          },
          {
            id: "b",
            label: {
              pl: "Tłum z rzesz autobusowych.",
              ua: "Натовп з автобусів."
            }
          },
          {
            id: "c",
            label: {
              pl: "Leonardo da Vinci osobiście.",
              ua: "Леонардо да Вінчі особисто."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Drugie zdanie akapitu o zleceniu: zamówił dla swej narzeczonej…",
          ua: "Речення про замовлення: для нареченої…"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Rzesze ludzi Katarzyna omija. Zamówienie składa rzemieślnik.",
              ua: "Натовпу вона уникає. Замовляє ремісник."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Leonardo pojawi się później — jako malarz „Mony Lisy”, nie jako klient.",
              ua: "Леонардо з’явиться пізніше як автор «Мони Лізи», не як клієнт."
            }
          }
        ],
        explanation: {
          pl: "Rz niewymienne z tego fragmentu m.in.: rzetelnie, narzekała, rzeźba, rzemieślnik, rzepa, rzęsy. Ćwiczenie z czasownikami będzie w lekcji 8.",
          ua: "Rz незмінне з цього уривка. Дієслова — на уроці 8."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · niezwykłe zjawisko", ua: "Читаємо · дивне явище" },
      formula: "s. 21  ·  USTNIE",
      visual: vizGh("t7-zjawisko.png", {
        alt: {
          pl: "Katarzyna i posąg, kolory zorzy, oko, kuchenne przybory",
          ua: "Катажина і статуя, кольори зорі"
        },
        title: { pl: "Slajd · posąg i zorza", ua: "Слайд · статуя і зоря" },
        prompt: {
          pl: "Wstaw kadr ze s. 21: Katarzyna i ciemny posąg kobiety, plamy zieleni/żółci/bieli jak zorza, wielkie oko; wokół łyżka, widelec, miska. W tekście wyróżnione: rzeczywiście, Rzuciła, porządku, zorzy. PNG. Przytnij znak wodny.",
          ua: "Встав кадр явища: статуя і кольори зорі."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Przeczytaj. Co Katarzyna robi z kuchennymi przyborami? Co widzi na tarasie?",
        ua: "Прочитай. Що вона робить з посудом? Що бачить на терасі?"
      },
      text: {
        pl: [
          "Wtem ujrzała niezwykłe zjawisko. Nie była pewna, czy to złudzenie, czy **rzeczywiście** posąg wygląda inaczej. **Rzuciła** wszystkie kuchenne przybory i nie zrobiwszy **porządku** na kuchennym stole, wybiegła na taras. Figura mieniła się to na zielono, to na żółto, to znów na biało, a barwy tworzyły pasma jak w **zorzy**."
        ],
        ua: [
          "Вона кидає прибори і біжить на терасу. Постать міниться як зоря."
        ]
      },
      task: {
        id: "t7-s06-zorza",
        type: "single-choice",
        question: {
          pl: "Co robi Katarzyna, gdy widzi zjawisko?",
          ua: "Що робить Катажина, коли бачить явище?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Rzuca przybory, nie robi porządku, wybiega na taras.",
              ua: "Кидає прибори, не прибирає, біжить на терасу."
            }
          },
          {
            id: "b",
            label: {
              pl: "Najpierw zmywa stół i jedzie autobusem do miasta.",
              ua: "Спочатку миє стіл і їде автобусом до міста."
            }
          },
          {
            id: "c",
            label: {
              pl: "Udaje, że nic nie widziała.",
              ua: "Вдає, що нічого не бачила."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Czasownik z rz: Rzuciła… i nie zrobiwszy porządku…",
          ua: "Дієслово з rz: Rzuciła…"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wręcz przeciwnie: nie zrobiła porządku i wybiegła.",
              ua: "Навпаки: не прибрала і вибігла."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Idzie sprawdzić posąg. Czyta dalej na następnym ekranie.",
              ua: "Вона йде перевірити статую."
            }
          }
        ],
        explanation: {
          pl: "Rz niewymienne: rzeczywiście, rzuciła, porządku, zorzy. Czasownik rzuciła wróci w zadaniu 4 (lekcja 8).",
          ua: "rzuciła — дієслово з rz незмінним. Завдання 4 — урок 8."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Czytamy · tajemnica i goście", ua: "Читаємо · таємниця і гості" },
      formula: "s. 21  ·  USTNIE",
      visual: vizGh("t7-goscie-rzeszow.png", {
        alt: {
          pl: "Warsztat z posągiem; ulica Rzeszowa, Muzeum Sztuki Współczesnej",
          ua: "Майстерня зі статуєю; вулиця Жешува"
        },
        title: { pl: "Slajd · warsztat i Rzeszów", ua: "Слайд · майстерня і Жешув" },
        prompt: {
          pl: "Wstaw dwa kadry ze s. 21: 1) warsztat, młotek, dłuto, posąg, myśl o Monie Lisie; 2) ulica, czerwony samochód, napis Muzeum Sztuki Współczesnej, malarz przy ścianie. W tekście wyróżnione: zdarzenie, twarzy, wyrzec, wydarzyło, tchórzy, Grzegorzem, Marzanną, towarzystwo, kojarzy. Glosy: Mona Lisa — czyt. Mona Liza; Leonardo da Vinci — czyt. Leonardo da Winczi. PNG. Przytnij znak wodny.",
          ua: "Встав кадри майстерні та вулиці Rzeszowa."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Dokończ opowieść. USTNIE: z kim przychodzi rzemieślnik? Z czym kojarzy im się twarz rzeźby?",
        ua: "УСНО: з ким приходить ремісник? З чим асоціюється обличчя скульптури?"
      },
      text: {
        pl: [
          "Całe **zdarzenie** trwało zaledwie chwilę, ale gdy Katarzyna stanęła przed swoim dziełem, zobaczyła delikatne rzęsy na **twarzy** wyrzeźbionej kobiety. Jeszcze raz się przyjrzała niedokończonej pracy i wprost nie mogła uwierzyć w to, co widzi. O tak pięknym dziele marzyłby każdy artysta! Ze zdumienia o mało nie zemdlała i nie mogła **wyrzec** ani słowa. Była przekonana, że nikt nie uwierzy w jej opowieść, zwłaszcza że sama nie do końca umiała wyjaśnić, co się właściwie **wydarzyło**. Choć nie należała do **tchórzy**, postanowiła zachować wszystko w tajemnicy.",
          "Gdy rzemieślnik wraz z pomocnikiem **Grzegorzem** oraz przyjaciółką Małgorzaty — **Marzanną** — ujrzeli rzeźbę, oniemieli z zachwytu. Całe **towarzystwo** zgodnie uznało, że twarz murzyńskiej piękności **kojarzy** się ze słynnym obrazem „Mona Lisa” Leonarda da Vinci i na pewno stanie się sensacją wśród rzesz turystów przybywających do Rzeszowa.",
          "Mona Lisa — czytaj: Mona Liza. Leonardo da Vinci — czytaj: Leonardo da Winczi. (glosy ze s. 21)"
        ],
        ua: [
          "Вона не може вимовити слова і ховає таємницю.",
          "Ремісник, Гжегож і Марзанна бачать скульптуру. Асоціація з Моною Лізою."
        ]
      },
      task: {
        id: "t7-s07-mona",
        type: "single-choice",
        question: {
          pl: "Z czym kojarzy się twarz rzeźby całemu towarzystwu?",
          ua: "З чим асоціюється обличчя скульптури?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Z obrazem „Mona Lisa” Leonarda da Vinci.",
              ua: "З картиною «Мона Ліза» Леонардо да Вінчі."
            }
          },
          {
            id: "b",
            label: {
              pl: "Z komiksem o lądowaniu na Księżycu.",
              ua: "З коміксом про посадку на Місяці."
            }
          },
          {
            id: "c",
            label: {
              pl: "Z wierszem „Noc” Antoniego Wica.",
              ua: "З віршем «Noc»."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Ostatni akapit: kojarzy się ze słynnym obrazem…",
          ua: "Останній абзац: kojarzy się зі славетною картиною…"
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To T5. Tu: Mona Lisa i Rzeszów.",
              ua: "Це був T5. Тут Мона Ліза."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "To T6. Tu malarstwo i rzeźba.",
              ua: "Це був T6. Тут живопис і скульптура."
            }
          }
        ],
        explanation: {
          pl: "Rz niewymienne m.in.: zdarzenie, twarzy, wyrzec, wydarzyło, tchórzy, Grzegorzem, Marzanną, towarzystwo, kojarzy. Uwaga: marzyłby ma ż (nie rz) — nie bierzemy go do tej grupy.",
          ua: "marzyłby має ż, не rz — не до цієї групи."
        }
      }
    },
    {
      type: "classification",
      heading: { pl: "Zobacz i zapamiętaj", ua: "Подивись і запам’ятай" },
      formula: "małe grupy z opowieści  ·  nie cała lista",
      promptPlace: "before",
      prompt: {
        pl: "Nie wkuwamy ściany słów. Dwie krótkie grupy z podręcznika. USTNIE: powiedz trzy wyrazy na głos.",
        ua: "Не вчимо стіну слів. Дві короткі групи. УСНО: три слова вголос."
      },
      items: [
        { pl: "Miejsce i przyroda: Rzeszów, rzeka, wierzba, jarzębina, węgorze, warzywa, zorza, burza", ua: "Місце і природа: Rzeszów, rzeka, wierzba…" },
        { pl: "Ludzie i praca: rzeźbiarka, rzemieślnik, rzeźba, narzędzia, rzesza (wielka liczba ludzi)", ua: "Люди і робота: rzeźbiarka, rzemieślnik, rzeźba…" }
      ],
      task: {
        id: "t7-s08-grupa",
        type: "single-choice",
        question: {
          pl: "Który wyraz z opowieści należy do rz niewymiennego?",
          ua: "Яке слово з оповідання належить до rz незмінного?"
        },
        options: [
          { id: "a", label: { pl: "rzeka (nie ma pary rz → r)", ua: "rzeka" } },
          { id: "b", label: { pl: "orzeł (to rz wymienne: orli)", ua: "orzeł (rz змінне)" } },
          { id: "c", label: { pl: "marzyłby (tu jest ż, nie rz)", ua: "marzyłby (це ż)" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj wyrazu z opowieści o Katarzynie, nie z lekcji o orle.",
          ua: "Шукай слово з оповідання про Катажину."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "orzeł → orli to rz wymienne. Tu: rzeka z opowieści.",
              ua: "orzeł — rz змінне. Тут rzeka."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "marzyłby piszemy przez ż. Nie mieszaj z rz niewymiennym.",
              ua: "marzyłby — ż. Не змішуй з rz."
            }
          }
        ],
        explanation: {
          pl: "Rz niewymiennego nie uzasadniamy wymianą rz → r. Zapamiętujemy pisownię wyrazów z tej opowieści. orzeł i marzyłby nie należą do tej grupy.",
          ua: "rz незмінне не обґрунтовуємо заміною. orzeł і marzyłby — не ця група."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Rozpoznaj rz", ua: "Розпізнай rz" },
      formula: "wymienne  czy  niewymienne",
      promptPlace: "before",
      prompt: {
        pl: "Nie zgaduj. Najpierw: czy znajdę parę rz → r? Jeśli tak — wymienne. Jeśli to wyraz z opowieści bez takiej pary — niewymienne.",
        ua: "Спочатку: чи є пара rz → r? Так — змінне. Слово з оповідання без пари — незмінне."
      },
      task: {
        id: "t7-s09-rozpoznaj",
        type: "multiple-choice",
        question: {
          pl: "Które wyrazy to rz niewymienne z tej lekcji? Zaznacz wszystkie pewne.",
          ua: "Які слова — rz незмінне з цього уроку? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "rzadko (opowieść; brak wymiany rz → r)", ua: "rzadko" } },
          { id: "b", label: { pl: "rzeźba (opowieść; brak wymiany rz → r)", ua: "rzeźba" } },
          { id: "c", label: { pl: "orzeł (wymienne: orli)", ua: "orzeł (змінне)" } },
          { id: "d", label: { pl: "morze (wymienne: morski)", ua: "morze (змінне)" } }
        ],
        answer: ["a", "b"],
        hint: {
          pl: "Zatrzymaj się. Czy możesz znaleźć wyraz pokrewny z r? orzeł i morze — tak. rzadko i rzeźba — nie w ten sposób.",
          ua: "orzeł і morze мають пару з r. rzadko і rzeźba — ні."
        },
        explanation: {
          pl: "Jeśli wymienne: sprawdź parę (orzeł–orli, morze–morski). Jeśli niewymienne: nie korzystamy z wymiany rz → r. Zapamiętaj zapis z opowieści (rzadko, rzeźba).",
          ua: "Змінне — пара. Незмінне — запам’ятай написання з оповідання."
        }
      }
    },
    {
      type: "practice",
      heading: { pl: "Słowo w zdaniu", ua: "Слово в реченні" },
      formula: "niedaleko Rzeszowa",
      promptPlace: "before",
      prompt: {
        pl: "To nie lista — to zdanie z tytułu. Wybierz poprawną pisownię.",
        ua: "Це не список — речення з заголовка."
      },
      text: {
        pl: "To się zdarzyło niedaleko ______.",
        ua: "Це сталося недалеко від ______."
      },
      task: {
        id: "t7-s10-rzeszowa",
        type: "single-choice",
        question: {
          pl: "Która forma pasuje do tytułu opowieści?",
          ua: "Яка форма пасує до заголовка?"
        },
        options: [
          { id: "a", label: { pl: "Rzeszowa", ua: "Rzeszowa" } },
          { id: "b", label: { pl: "Żeszowa", ua: "Żeszowa" } },
          { id: "c", label: { pl: "Rzesowa (bez rz)", ua: "Rzesowa" } }
        ],
        answer: "a",
        hint: {
          pl: "Nazwa miasta z podręcznika zaczyna się od Rz-.",
          ua: "Назва міста з підручника: Rz-."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Tu nie korzystamy z ż. Sprawdź zapis w tytule: Rzeszowa.",
              ua: "Тут не ż. У заголовку: Rzeszowa."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "W tym wyrazie jest rz. Porównaj z podręcznikiem.",
              ua: "У цьому слові є rz."
            }
          }
        ],
        explanation: {
          pl: "„To się zdarzyło niedaleko Rzeszowa…” — rz niewymienne w nazwie. Nie uzasadniamy jej wymianą rz → r.",
          ua: "Rzeszowa — rz незмінне в назві."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Mini-kontrola", ua: "Міні-контроль" },
      formula: "bez oceny szkolnej",
      promptPlace: "before",
      prompt: {
        pl: "Sprawdź, czy odróżniasz mechanizm. Ćwiczenia z rysunków i czasowników — lekcja 8 (s. 22).",
        ua: "Перевір механізм. Вправи з малюнків — урок 8."
      },
      items: [
        { pl: "🟢 Potrafię rozpoznać rz niewymienne w wyrazach z opowieści.", ua: "🟢 Впізнаю rz незмінне в словах з оповідання." },
        { pl: "🟡 Muszę jeszcze poćwiczyć — gdy mylę z orzeł / morze albo z ż.", ua: "🟡 Ще треба попрактикуватись." }
      ],
      task: {
        id: "t7-s11-mini",
        type: "single-choice",
        question: {
          pl: "Co jest prawdą o rz niewymiennym?",
          ua: "Що правда про rz незмінне?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Nie uzasadniamy go wymianą rz → r. Uczymy się pisowni konkretnych wyrazów z podręcznika.",
              ua: "Не обґрунтовуємо заміною rz → r. Вчимо написання конкретних слів з підручника."
            }
          },
          {
            id: "b",
            label: {
              pl: "Jeśli nie znajdę wymiany, ZAWSZE piszę rz — w każdym wyrazie.",
              ua: "Якщо немає заміни, ЗАВЖДИ пишу rz."
            }
          },
          {
            id: "c",
            label: {
              pl: "To to samo co orzeł → orli.",
              ua: "Це те саме, що orzeł → orli."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Cel T7: rozpoznawać przypadki z opowieści, nie wymyślać uniwersalnej reguły „zawsze rz”.",
          ua: "Мета: впізнавати випадки з оповідання, не правило «завжди rz»."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Błędne uproszczenie. Są też ż, sz… Dziś tylko wyrazy z tej opowieści.",
              ua: "Хибне спрощення. Є ще ż, sz. Сьогодні лише слова з оповідання."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "orzeł → orli to rz wymienne. Tu brak takiej wymiany.",
              ua: "orzeł → orli — rz змінне."
            }
          }
        ],
        explanation: {
          pl: "Rz wymienne: para i rz → r. Rz niewymienne: nie korzystamy z tej wymiany; zapamiętujemy zapis z materiału s. 20–21.",
          ua: "Змінне — пара. Незмінне — запам’ятовуємо запис зі с. 20–21."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Notatka do zeszytu", ua: "Нотатка до зошита" },
      promptPlace: "after",
      prompt: {
        pl: "Zeszyt, krótko: Rz niewymienne. Nie uzasadniamy wymianą rz → r. Przykłady ze s. 20–21: Rzeszów, rzeka, rzeźbiarka, rzadko, rzeźba. (Nie dopisuj własnej reguły „zawsze rz”.) Następna lekcja: ćwiczenia ze s. 22 — rysunki, czasowniki, opowiadanie.",
        ua: "Зошит коротко: rz незмінне. Без заміни rz → r. Приклади зі с. 20–21. Далі — вправи зі с. 22."
      },
      items: [
        { pl: "Rz wymienne → szukam pary → rz → r (orzeł–orli).", ua: "Rz змінне → пара → rz → r." },
        { pl: "Rz niewymienne → nie ma tej wymiany → uczę się pisowni wyrazu z opowieści.", ua: "Rz незмінне → немає заміни → вчу написання з оповідання." }
      ],
      task: {
        id: "t7-s12-strategia",
        type: "single-choice",
        question: {
          pl: "Jaką notatkę zostawiasz w zeszycie?",
          ua: "Яку нотатку лишаєш у зошиті?"
        },
        options: [
          {
            id: "a",
            label: {
              pl: "Rz niewymiennego nie uzasadniam wymianą rz → r. Uczę się wyrazów z opowieści o Katarzynie.",
              ua: "Незмінне rz не обґрунтовую заміною. Вчу слова з оповідання."
            }
          },
          {
            id: "b",
            label: {
              pl: "Wszystko, czego nie umiem, piszę przez rz.",
              ua: "Все, чого не вмію, пишу через rz."
            }
          },
          {
            id: "c",
            label: {
              pl: "Nie potrzebuję zeszytu — zgaduję na sprawdzianie.",
              ua: "Зошит не потрібен — вгадаю."
            }
          }
        ],
        answer: "a",
        hint: {
          pl: "Trzy klocki: brak wymiany + konkretne wyrazy z podręcznika + nie „zawsze rz”.",
          ua: "Немає заміни + конкретні слова з підручника."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "To nie jest zasada tej lekcji. Wróć do Rzeszów, rzeka, rzadko.",
              ua: "Це не правило цього уроку."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Krótka notatka pomaga. Pięć wyrazów ze s. 20 wystarczy.",
              ua: "Коротка нотатка допомагає."
            }
          }
        ],
        explanation: {
          pl: "Gotowe. Lekcja 8: zadania 2–7 ze s. 22 (rysunki, czasowniki, opowiadanie, zapis z pamięci).",
          ua: "Далі урок 8: вправи 2–7 зі с. 22."
        }
      }
    }
  ]
};
