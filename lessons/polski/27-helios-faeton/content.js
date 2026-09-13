function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
var IMG_STYLE_KOM = "Styl: komiks szkolny GWO klasa 5, złoto-pomarańcz-czerwień, dymki po polsku. Zero znaku wodnego. PNG 16:9.";

function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "goal",
      heading: { pl: "Po tej lekcji umiem", ua: "Після цього уроку вмію" },
      formula: "s. 58–59  ·  Jan Parandowski  ·  Helios i Faeton",
      promptPlace: "before",
      prompt: {
        pl: "To sprawdzian na koniec. Polski mit jest pierwszy. Włącz 🇺🇦. Dziś *czytamy* i oglądamy *6 kadrów*. Komiks, reklamę i bóstwa słońca robimy na lekcji 28. To *nie* Królestwo morza i nie synonimy.",
        ua: "Це перевірка наприкінці. Польський міф перший. Увімкни 🇺🇦. Сьогодні *читаємо* і дивимось *6 кадрів*. Комікс, рекламу і богів сонця — урок 28."
      },
      items: [
        { pl: "zapiszę *pytania o przyrodę*, na które mit próbuje odpowiedzieć;", ua: "запишу *питання про природу*, на які міф намагається відповісти;" },
        { pl: "opowiem treść mitu *Helios i Faeton*;", ua: "розкажу зміст міфу *Helios i Faeton*;" },
        { pl: "wskażę elementy *świata przedstawionego*;", ua: "вкажу елементи *зображеного світу*;" },
        { pl: "odczytam *6 kadrów*: opis, dymki, wykrzykniki.", ua: "прочитаю *6 кадрів*: опис, хмарки, вигуки." }
      ],
      task: {
        id: "t27-s01-umiem",
        type: "multiple-choice",
        question: {
          pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
          ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Opowiedzieć, o co prosił Faeton i czym skończyła się jazda.", ua: "Розповісти, про що просив Фаетон і чим скінчилась їзда." } },
          { id: "b", label: { pl: "Nazwać miejsce, czas i bohaterów świata przedstawionego.", ua: "Назвати місце, час і героїв зображеного світу." } },
          { id: "c", label: { pl: "Od razu narysować reklamę komiksu bez planu.", ua: "Одразу намалювати рекламу коміксу без плану." } },
          { id: "d", label: { pl: "Odczytać kadr: co widać, kto mówi, jaki jest dźwięk.", ua: "Прочитати кадр: що видно, хто говорить, який звук." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Reklama i rysunek własny — lekcja 28, s. 59 zad. 1–2.",
          ua: "Реклама і власний малюнок — урок 28, с. 59."
        },
        explanation: {
          pl: "Dziś: pytania, mit, świat, 6 kadrów. Komiks własny — jutro.",
          ua: "Сьогодні: питання, міф, світ, 6 кадрів. Комікс — завтра."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "W słonecznym królestwie", ua: "У сонячному царстві" },
      formula: "s. 58  ·  po słowniku",
      promptPlace: "before",
      prompt: {
        pl: "To *nie* pałac Posejdona i nie SMS z *dobry*. Autor: *Jan Parandowski*. Tytuł: *Helios i Faeton*. Źródło: *Mitologia. Wierzenia i podania Greków i Rzymian*.",
        ua: "Це *не* палац Посейдона і не SMS зі словом *dobry*. Автор: *Ян Парандовський*. Назва: *Helios i Faeton*."
      },
      text: {
        pl: [
          "Dział: *W słonecznym królestwie.* Program: *Tworzymy komiksową wersję mitu.*",
          "Grecy podzielili królestwo słoneczne między *dwóch* bogów: *Apollo* (potęga słońca) i *Helios* (woźnica wozu).",
          "Czytamy, żeby jutro *narysować komiks* (6 kadrów, dymki, tytuł) i *reklamę*."
        ],
        ua: [
          "Розділ: *W słonecznym królestwie.* Програма: *Творимо коміксну версію міфу.*",
          "Греки поділили сонячне царство між *двома* богами: *Аполлон* і *Геліос* (візниця).",
          "Читаємо, щоб завтра *намалювати комікс* і *рекламу*."
        ]
      },
      task: {
        id: "t27-s02-autor",
        type: "single-choice",
        question: {
          pl: "Kto napisał *Helios i Faeton* z tej lekcji?",
          ua: "Хто написав *Helios i Faeton* з цього уроку?"
        },
        options: [
          { id: "a", label: { pl: "Jan Parandowski (fragment *Mitologii*).", ua: "Ян Парандовський (уривок *Міфології*)." } },
          { id: "b", label: { pl: "Wanda Markowska (*Prometeusz*).", ua: "Ванда Марковська (*Prometeusz*)." } },
          { id: "c", label: { pl: "To SMS mamy ze słowem *dobry*.", ua: "Це SMS мами зі словом *dobry*." } }
        ],
        answer: "a",
        hint: {
          pl: "Ten sam autor co *Królestwo morza*, inny mit.",
          ua: "Той самий автор, що *Królestwo morza*, інший міф."
        },
        explanation: {
          pl: "Parandowski. Prometeusz i synonimy — inne lekcje.",
          ua: "Парандовський. Прометей і синоніми — інші уроки."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Zadanie wstępne · pytania o przyrodę", ua: "Вступне · питання про природу" },
      formula: "s. 58",
      promptPlace: "before",
      prompt: {
        pl: "Zapisz w zeszycie jak najwięcej pytań o *świat przyrody*, na które chcesz znać odpowiedź. Mit *nie* jest lekcją geografii — ale próbuje *wyjaśnić* zjawiska.",
        ua: "Запиши в зошиті питання про *природу*. Міф *не* є уроком географії — але намагається *пояснити* явища."
      },
      items: [
        { pl: "Dlaczego słońce codziennie *jedzie* po niebie od wschodu do zachodu?", ua: "Чому сонце щодня *їде* небом від сходу до заходу?" },
        { pl: "Skąd się wzięły *pustynie* w Afryce?", ua: "Звідки взялися *пустелі* в Африці?" },
        { pl: "Co mit mówi o skórze *Etiopów*? (To wyjaśnienie mityczne, nie naukowe.)", ua: "Що міф каже про шкіру *ефіопів*? (Міфічне пояснення, не наукове.)" },
        { pl: "Co to *widnokrąg*? Gdzie niebo *dotyka* ziemi albo wody?", ua: "Що таке *видимий обрій*? Де небо *дотикається* землі чи води?" }
      ],
      task: {
        id: "t27-s03-pytania",
        type: "multiple-choice",
        question: {
          pl: "Które pytania NA PEWNO pasują do *tego* mitu? Zaznacz wszystkie pewne.",
          ua: "Які питання НАПЕВНО пасують до *цього* міфу? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Dlaczego słońce codziennie wędruje po niebie?", ua: "Чому сонце щодня мандрує небом?" } },
          { id: "b", label: { pl: "Skąd pustynie Afryki i ciemna skóra Etiopów *w micie*?", ua: "Звідки пустелі Африки і темна шкіра ефіопів *у міфі*?" } },
          { id: "c", label: { pl: "Jak odmienić rzeczownik *słońce* przez 7 przypadków?", ua: "Як відмінити іменник *słońce* через 7 відмінків?" } },
          { id: "d", label: { pl: "Co to widnokrąg — linia styku nieba z ziemią lub wodą?", ua: "Що таке widnokrąg — лінія стику неба з землею чи водою?" } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Odmiana jest na s. 60, lekcje 29–31. Dziś przyroda w micie.",
          ua: "Відмінювання на с. 60, уроки 29–31. Сьогодні природа в міфі."
        },
        explanation: {
          pl: "Mit tłumaczy jazdę słońca, pustynie, Etiopów. Nie przypadki.",
          ua: "Міф пояснює рух сонця, пустелі, ефіопів. Не відмінки."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Kadr 1 · złoty pałac", ua: "Кадр 1 · золотий палац" },
      formula: "s. 58  ·  glosa: podwoje, purpura",
      visual: vizGh("t27-kadr1.png", {
        alt: {
          pl: "Kadr 1: Faeton w złotym pałacu, Helios na tronie, dymki",
          ua: "Кадр 1: Фаетон у золотому палаці, Геліос на троні"
        },
        title: { pl: "Kadr 1", ua: "Кадр 1" },
        prompt: {
          pl: IMG_STYLE_KOM + " IMAGE PROMPT: złoty pałac, Helios w purpurze, Faeton w drzwiach, dymki.",
          ua: "Кадр 1. Польські хмарки."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Opis kadru: Faeton wchodzi do pałacu. Na tronie — promienny Helios. Najpierw *tekst Parandowskiego*, potem dymki komiksu.",
        ua: "Опис кадру: Фаетон входить до палацу. На троні — променистий Геліос."
      },
      text: {
        pl: [
          "Miał on pałac cudowny, cały ze *złota*, pełen drogich kamieni i ozdób z kości słoniowej. *Podwoje* srebrne otwierały się ku wielkiej sali, gdzie w *purpurę odziany* siedział na tronie ze złota Helios, w otoczeniu Dni, Miesięcy, Lat i Stuleci, w koronie promienistej, tak jasny, że Faeton nie śmiał mu spojrzeć w oblicze.",
          "Od progu *tedy* przemówił. Na ziemi drwią z niego, mówią, że nie jest synem słońca. Helios odparł, że Faeton jest jego dzieckiem, i przysiągł, że *każde* jego życzenie wypełni.",
          "*Dymek Faeton:* „Ojcze, na Ziemi mówią, że nie jestem Twoim synem! Udowodnij im to!”",
          "*Dymek Helios:* „Przysięgam na rzekę Styks, że spełnię każde Twoje życzenie!”"
        ],
        ua: [
          "Мав чудовий палац, увесь із *золота*. *Двійчасті двері* срібні відчинялися до зали, де в *пурпурі* на золотому троні сидів Геліос серед Днів, Місяців, Років і Століть, у променистій короні — такий ясний, що Фаетон не смів глянути в обличчя.",
          "Від порога *отже* промовив. На землі з нього глузують, кажуть, що він не син сонця. Геліос відповів, що Фаетон його дитина, і присягнув виконати *кожне* бажання.",
          "*Хмарка Фаетон:* «Батьку, на Землі кажуть, що я не Твій син! Доведи їм!»",
          "*Хмарка Геліос:* «Присягаюся рікою Стікс, що виконаю кожне Твоє бажання!»"
        ]
      },
      task: {
        id: "t27-s04-kadr1",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO jest w kadrze 1 i w tekście? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО є в кадрі 1 і в тексті? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Pałac ze złota, srebrne podwoje, Helios w purpurze.", ua: "Палац із золота, срібні двері, Геліос у пурпурі." } },
          { id: "b", label: { pl: "Faeton prosi o dowód, że jest synem; Helios przysięga.", ua: "Фаетон просить доказ, що він син; Геліос присягає." } },
          { id: "c", label: { pl: "Posejdon na tronie z muszli w głębinach.", ua: "Посейдон на троні з мушель у глибинах." } },
          { id: "d", label: { pl: "Faeton nie śmie spojrzeć ojcu w twarz — za jasny.", ua: "Фаетон не сміє глянути батькові в обличчя — заяскраво." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Purpura i podwoje są w polach. Kto siedzi na tronie?",
          ua: "Пурпур і двері — на полях. Хто сидить на троні?"
        },
        explanation: {
          pl: "Złoty pałac Heliosa, przysięga. Muszle — lekcja 24.",
          ua: "Золотий палац Геліоса, присяга. Мушлі — урок 24."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Kadr 2 · prośba i ostrzeżenie", ua: "Кадр 2 · прохання і попередження" },
      formula: "s. 58–59  ·  glosa: przedkładać",
      visual: vizGh("t27-kadr2.png", {
        alt: {
          pl: "Kadr 2: Faeton wskazuje rydwan, Helios chwyta się za głowę",
          ua: "Кадр 2: Фаетон вказує на колісницю, Геліос хапається за голову"
        },
        title: { pl: "Kadr 2", ua: "Кадр 2" },
        prompt: {
          pl: IMG_STYLE_KOM + " IMAGE PROMPT: rydwan, Faeton wskazuje, Helios przerażony.",
          ua: "Кадр 2."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Opis: Faeton z ekscytacją pokazuje ognisty wóz. Helios łapie się za głowę. Pole: *przedkładać* = tłumaczyć, przekonywać.",
        ua: "Опис: Фаетон показує вогняний віз. Геліос хапається за голову. Поле: *przedkładać* = пояснювати, переконувати."
      },
      text: {
        pl: [
          "Wówczas młodzieniec prosił, aby mu zezwolił *raz jeden* wyjechać na wozie słonecznym. Zatroskał się Helios i zaczął *przedkładać* chłopcu, że to rzecz bardzo niebezpieczna, bo kierowanie wozem słońca jest trudem wielkim i wymaga wielkiej siły. Chłopak jednak nie chciał ustąpić. Cofać się było za późno, dał bowiem Helios przysięgę.",
          "*Dymek Faeton:* „Chcę tylko raz poprowadzić Twój słoneczny wóz!”",
          "*Dymek Helios:* „Synu, błagam, zmień zdanie! To zbyt niebezpieczne, nie utrzymasz tych koni!”"
        ],
        ua: [
          "Тоді юнак просив дозволити *хоч раз* виїхати на сонячному возі. Геліос занепокоївся і почав *пояснювати*, що це дуже небезпечно: керувати возом сонця — важка праця і велика сила. Хлопець не відступив. Вертатися було пізно — Геліос уже присягнув.",
          "*Хмарка Фаетон:* «Хочу лише раз повесті Твій сонячний віз!»",
          "*Хмарка Геліос:* «Сину, благаю, передумай! Це занадто небезпечно, не втримаєш цих коней!»"
        ]
      },
      task: {
        id: "t27-s05-kadr2",
        type: "single-choice",
        question: {
          pl: "Dlaczego Helios *musi* zgodzić się na jazdę?",
          ua: "Чому Геліос *мусить* погодитися на їзду?"
        },
        options: [
          { id: "a", label: { pl: "Bo przysiągł wypełnić każde życzenie — cofać się za późno.", ua: "Бо присягнув виконати кожне бажання — вертатися пізно." } },
          { id: "b", label: { pl: "Bo Prometeusz ukradł ogień i każe jechać.", ua: "Бо Прометей украв вогонь і наказує їхати." } },
          { id: "c", label: { pl: "Bo Faeton już umie kierować rumakami.", ua: "Бо Фаетон уже вміє керувати кіньми." } }
        ],
        answer: "a",
        hint: {
          pl: "Ostatnie zdanie kadru: przysięga. Co znaczy przedkładać?",
          ua: "Останнє речення кадру: присяга. Що значить przedkładać?"
        },
        explanation: {
          pl: "Przysięga wiąże Heliosa. Przedkładać = ostrzegać, nie odwołać ślubu.",
          ua: "Присяга в’яже Геліоса. Przedkładać = попереджати, не скасувати клятву."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Kadr 3 · start rydwanu", ua: "Кадр 3 · старт колісниці" },
      formula: "s. 59  ·  glosa: lazurowy, rydwan",
      visual: vizGh("t27-kadr3.png", {
        alt: {
          pl: "Kadr 3: Faeton na rydwanie, iskry, WIOOO, TUPOT KOPYT",
          ua: "Кадр 3: Фаетон на колісниці, іскри, WIOOO"
        },
        title: { pl: "Kadr 3", ua: "Кадр 3" },
        prompt: {
          pl: IMG_STYLE_KOM + " IMAGE PROMPT: rydwan w niebie, WIOOO, TUPOT KOPYT.",
          ua: "Кадр 3."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Opis: Faeton dumny trzyma wodze. Rydwan unosi się. Iskry spod kopyt. W komiksie *wykrzyknik dźwiękonaśladowczy* ożywia kadr.",
        ua: "Опис: Фаетон гордо тримає віжки. Колісниця злітає. Іскри. *Звуконаслідування* оживляє кадр."
      },
      text: {
        pl: [
          "Z promiennego pałacu słońca wyjechał Faeton na wozie ognistym i wzbił się pod *lazurowe* sklepienie.",
          "*Dymek Faeton:* „Wio! Zobaczcie wszyscy na Ziemi, kim jestem!”",
          "*Onomatopeja:* WIOOO!  ·  TUPOT KOPYT!"
        ],
        ua: [
          "З променистого палацу сонця виїхав Фаетон на вогняному возі і знявся під *лазурове* склепіння.",
          "*Хмарка Фаетон:* «Вйо! Подивіться всі на Землі, хто я!»",
          "*Звуконаслідування:* WIOOO!  ·  TUPOT KOPYT!"
        ]
      },
      task: {
        id: "t27-s06-kadr3",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO należy do kadru 3? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО належить до кадру 3? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Wóz ognisty wznosi się pod lazurowe (błękitne) niebo.", ua: "Вогняний віз знімається під лазурове небо." } },
          { id: "b", label: { pl: "Onomatopeja: WIOOO! / TUPOT KOPYT!", ua: "Звуконаслідування: WIOOO! / TUPOT KOPYT!" } },
          { id: "c", label: { pl: "Faeton już spada do Erydanu.", ua: "Фаетон уже падає в Еридан." } },
          { id: "d", label: { pl: "Duma: „Zobaczcie, kim jestem!” — pycha bohatera.", ua: "Гордість: «Подивіться, хто я!» — пиха героя." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Lazurowy = niebieski. Upadek jest w kadrze 6.",
          ua: "Лазуровий = блакитний. Падіння — кадр 6."
        },
        explanation: {
          pl: "Start i pycha. Spadek — jeszcze nie.",
          ua: "Старт і пиха. Падіння — ще ні."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Kadr 4 · katastrofa", ua: "Кадр 4 · катастрофа" },
      formula: "s. 59  ·  glosa: eter, Etiopowie",
      visual: vizGh("t27-kadr4.png", {
        alt: {
          pl: "Kadr 4: rydwan za blisko Ziemi, pożary, TRZASK, OGIEŃ",
          ua: "Кадр 4: колісниця надто низько, пожежі"
        },
        title: { pl: "Kadr 4", ua: "Кадр 4" },
        prompt: {
          pl: IMG_STYLE_KOM + " IMAGE PROMPT: pożary, pustynia, Faeton puszcza wodze, TRZASK, OGIEŃ.",
          ua: "Кадр 4."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Tu mit *odpowiada* na pytania wstępne o przyrodę. Czytaj: eter, rzeki, Etiopowie, Afryka.",
        ua: "Тут міф *відповідає* на вступні питання про природу."
      },
      text: {
        pl: [
          "Wnet poznały rumaki nieśmiertelne, że jakaś miękka i niewprawna dłoń je prowadzi. Zboczyły zaraz ze swej drogi. Raz wznosiły się tak wysoko, że *eter* zaczynał płonąć, to znów opadały tak nisko, że aż rzeki wysychały. Wtedy to *Etiopom* poczerniała skóra, a zielone pola Afryki zmieniły się w pustynię.",
          "*Dymek Faeton:* „Aaa! Pomocy! Nie mam nad nimi kontroli!”",
          "*Onomatopeja:* TRZASK!  ·  OGIEŃ!"
        ],
        ua: [
          "Безсмертні коні збагнули, що ними керує м’яка, невміла рука. Збилися з дороги. То злітали так високо, що *ефір* загорявся, то падали так низько, що ріки висихали. Тоді *ефіопам* почорніла шкіра, а зелені поля Африки стали пустелею.",
          "*Хмарка Фаетон:* «Ааа! Рятуйте! Я не контролюю їх!»",
          "*Звуконаслідування:* TRZASK!  ·  OGIEŃ!"
        ]
      },
      task: {
        id: "t27-s07-kadr4",
        type: "multiple-choice",
        question: {
          pl: "Jak mit *wyjaśnia* przyrodę w kadrze 4? Zaznacz wszystkie pewne.",
          ua: "Як міф *пояснює* природу в кадрі 4? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Za nisko: rzeki wysychają, Afryka staje się pustynią.", ua: "Надто низько: ріки сохнуть, Африка стає пустелею." } },
          { id: "b", label: { pl: "Etiopom poczerniała skóra od żaru wozu.", ua: "Ефіопам почорніла шкіра від жару воза." } },
          { id: "c", label: { pl: "To lekcja geografii z mapą fizyczną — bez mitu.", ua: "Це урок географії з фізичною картою — без міфу." } },
          { id: "d", label: { pl: "Za wysoko: eter (niebo według Greków) zaczyna płonąć.", ua: "Надто високо: ефір (небо за греками) починає горіти." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Pola: eter, Etiopowie. To *mit*, nie podręcznik geografii.",
          ua: "Поля: eter, Etiopowie. Це *міф*, не підручник географії."
        },
        explanation: {
          pl: "Aitiologia: pustynie i skóra Etiopów. Nauka tłumaczy to inaczej.",
          ua: "Аітіологія: пустелі і шкіра ефіопів. Наука пояснює інакше."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Kadr 5 · piorun Dzeusa", ua: "Кадр 5 · блискавка Дзевса" },
      formula: "s. 59  ·  glosa: bożyc, rydwan",
      visual: vizGh("t27-kadr5.png", {
        alt: {
          pl: "Kadr 5: Dzeus na chmurze ciska piorun, BUM, PIUUU",
          ua: "Кадр 5: Дзевс на хмарі кидає блискавку"
        },
        title: { pl: "Kadr 5", ua: "Кадр 5" },
        prompt: {
          pl: IMG_STYLE_KOM + " IMAGE PROMPT: Dzeus, piorun, BUM, PIUUU.",
          ua: "Кадр 5."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Opis: gniewny Dzeus na chmurze. Piorun w rydwan. Pole: *bożyc* = syn boga. *Rydwan* = dwukołowy wóz.",
        ua: "Опис: гнівний Дзевс на хмарі. Блискавка в колісницю. Поле: *bożyc* = син бога."
      },
      text: {
        pl: [
          "Ziemia, której ogień już palił wnętrzności, jęknęła i, podniósłszy ręce do nieba, zaczęła wzywać pomocy *Dzeusa*. Król bogów, widząc *bożyca* pędzącego na zbłąkanym *rydwanie* i konie spłoszone, raził go piorunem.",
          "*Dymek Dzeus:* „Muszę uratować świat przed spaleniem! Wybacz, Faetonie!”",
          "*Onomatopeja:* BUM!  ·  PIUUU!"
        ],
        ua: [
          "Земля, якій вогонь уже палив нутрощі, застогнала і, звівши руки до неба, почала кликати *Дзевса*. Цар богів, побачивши *сина бога* на збитій *колісниці* і сполоханих коней, уразив його блискавкою.",
          "*Хмарка Дзевс:* «Мушу врятувати світ від згоряння! Пробач, Фаетоне!»",
          "*Звуконаслідування:* BUM!  ·  PIUUU!"
        ]
      },
      task: {
        id: "t27-s08-kadr5",
        type: "single-choice",
        question: {
          pl: "Dlaczego Dzeus razi Faetona piorunem?",
          ua: "Чому Дзевс вражає Фаетона блискавкою?"
        },
        options: [
          { id: "a", label: { pl: "Ziemia woła o pomoc: świat płonie. Król bogów ratuje ziemię.", ua: "Земля кличе порятунок: світ горить. Цар богів рятує землю." } },
          { id: "b", label: { pl: "Bo Faeton ukradł ogień jak Prometeusz.", ua: "Бо Фаетон украв вогонь, як Прометей." } },
          { id: "c", label: { pl: "Bo Helios kazał zniszczyć syna z zazdrości.", ua: "Бо Геліос наказав знищити сина із заздрощів." } }
        ],
        answer: "a",
        hint: {
          pl: "Kto podnosi ręce do nieba? Co pali wnętrzności?",
          ua: "Хто зводить руки до неба? Що палить нутрощі?"
        },
        explanation: {
          pl: "Dzeus ratuje świat. To nie mit o kradzieży ognia.",
          ua: "Дзевс рятує світ. Це не міф про крадіжку вогню."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Kadr 6 · Erydan", ua: "Кадр 6 · Еридан" },
      formula: "s. 59  ·  koniec fragmentu",
      visual: vizGh("t27-kadr6.png", {
        alt: {
          pl: "Kadr 6: Faeton spada do rzeki, siostry-topole na brzegu",
          ua: "Кадр 6: Фаетон падає в ріку, сестри-тополі на березі"
        },
        title: { pl: "Kadr 6", ua: "Кадр 6" },
        prompt: {
          pl: IMG_STYLE_KOM + " IMAGE PROMPT: upadek do Erydanu, Heliady-topole.",
          ua: "Кадр 6."
        }
      }),
      promptPlace: "before",
      prompt: {
        pl: "Podręcznik kończy się na rzece. W komiksie wolno dodać *Heliady* (siostry → topole) — to znany ciąg dalszy mitu, nie ten akapit.",
        ua: "Підручник кінчається рікою. У коміксі можна додати *Геліад* (сестри → тополі) — відоме продовження, не цей абзац."
      },
      text: {
        pl: [
          "Faeton spadł z wozu do rzeki *Erydanu*. Tak zakończył swą podróż podniebną syn złotowłosej *Klymeny*.",
          "Fragment książki *Mitologia. Wierzenia i podania Greków i Rzymian*.",
          "*Opis kadru (komiks):* „Ukarany za pychę Faeton runął do Erydanu, a jego siostry z żalu zmieniły się w topole.”"
        ],
        ua: [
          "Фаетон упав із воза в ріку *Еридан*. Так скінчив небесну подорож син золотокосої *Клімени*.",
          "Уривок книжки *Mitologia…*.",
          "*Опис кадру (комікс):* «Покараний за пиху Фаетон упав в Еридан, а сестри з жалю стали тополями.»"
        ]
      },
      task: {
        id: "t27-s09-kadr6",
        type: "multiple-choice",
        question: {
          pl: "Co NA PEWNO jest w *fragmencie podręcznika*? Zaznacz wszystkie pewne.",
          ua: "Що НАПЕВНО є в *уривку підручника*? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Faeton spada do Erydanu; jest synem Klymeny.", ua: "Фаетон падає в Еридан; він син Клімени." } },
          { id: "b", label: { pl: "To koniec podróży podniebnej.", ua: "Це кінець небесної подорожі." } },
          { id: "c", label: { pl: "W *tym* akapicie są dokładnie opisane siostry-topole.", ua: "У *цьому* абзаці докладно описані сестри-тополі." } },
          { id: "d", label: { pl: "Heliady w komiksie to dodatek z mitu, nie z tego zdania.", ua: "Геліади в коміксі — додаток з міфу, не з цього речення." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Ostatnie zdanie podręcznika: Erydan i Klymene. Kto jest *poza* tym zdaniem?",
          ua: "Останнє речення підручника: Еридан і Клімена. Хто *поза* ним?"
        },
        explanation: {
          pl: "Erydan + Klymene = tak. Topole = ciąg dalszy, dobry do kadru 6.",
          ua: "Еридан + Клімена = так. Тополі = продовження, добре для кадру 6."
        }
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa z pól · z przykładem z tekstu", ua: "Слова з полів · з прикладом з тексту" },
      formula: "s. 58–59",
      promptPlace: "before",
      prompt: {
        pl: "Lewa kolumna: polski + krótki przykład z *tego* fragmentu. Nie z Posejdona.",
        ua: "Ліва колонка: польська + короткий приклад з *цього* уривка."
      },
      rows: [
        { pl: "widnokrąg  ·  po drugiej stronie widnokręgu", ua: "обрій; лінія, де небо нібито торкається землі чи води" },
        { pl: "podwoje  ·  Podwoje srebrne otwierały się", ua: "великі двостулкові двері" },
        { pl: "odziany w purpurę  ·  w purpurę odziany Helios", ua: "одягнений у червону шату" },
        { pl: "tedy  ·  Od progu tedy przemówił", ua: "отже, тоді" },
        { pl: "przedkładać  ·  zaczął przedkładać chłopcu", ua: "пояснювати, переконувати" },
        { pl: "lazurowy  ·  pod lazurowe sklepienie", ua: "блакитний" },
        { pl: "eter  ·  eter zaczynał płonąć", ua: "за греками — речовина, що виповнює Всесвіт" },
        { pl: "Etiopowie  ·  Etiopom poczerniała skóra", ua: "народ на південь від Єгипту (уявлення греків)" },
        { pl: "bożyc  ·  widząc bożyca pędzącego", ua: "син бога" },
        { pl: "rydwan  ·  zbłąkany rydwan", ua: "двоколісний візок у давнину" }
      ],
      task: {
        id: "t27-s10-glosy",
        type: "single-choice",
        question: {
          pl: "Co znaczy *przedkładać* w *tym* micie?",
          ua: "Що значить *przedkładać* у *цьому* міфі?"
        },
        options: [
          { id: "a", label: { pl: "Tłumaczyć, przekonywać Heliosa-syna, że jazda jest niebezpieczna.", ua: "Пояснювати, переконувати, що їзда небезпечна." } },
          { id: "b", label: { pl: "Kłaść dach z muszli na pałacu Posejdona.", ua: "Класти дах із мушель на палац Посейдона." } },
          { id: "c", label: { pl: "Zastąpić słowo fajny synonimem.", ua: "Замінити слово fajny синонімом." } }
        ],
        answer: "a",
        hint: {
          pl: "Pole s. 59: tłumaczyć, przekonywać. Kto przedkłada i komu?",
          ua: "Поле с. 59: пояснювати, переконувати. Хто і кому?"
        },
        explanation: {
          pl: "Helios przedkłada Faetonowi groźbę jazdy. Inne lekcje odpadają.",
          ua: "Геліос пояснює Фаетону загрозу їзди."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Świat przedstawiony i relacja", ua: "Зображений світ і переказ" },
      formula: "s. 58–59  ·  program",
      promptPlace: "before",
      prompt: {
        pl: "Program: *opowiadasz o tekście* i *wymieniasz elementy świata przedstawionego*. To materiał do komiksu jutro.",
        ua: "Програма: *переказуєш текст* і *називаєш елементи зображеного світу*."
      },
      items: [
        { pl: "*Miejsce:* pałac słońca; Ocean (rzeka dokoła ziemi); lazurowy eter; Afryka; rzeka Erydan.", ua: "*Місце:* палац сонця; Океан; лазуровий ефір; Африка; ріка Еридан." },
        { pl: "*Czas:* świt i zachód (codzienna jazda Heliosa); jedna zgubna jazda Faetona.", ua: "*Час:* світанок і захід; одна згубна їзда Фаетона." },
        { pl: "*Bohaterowie:* Helios, Faeton, rumaki, Ziemia (uosobiona), Dzeus, Klymene; w tle Apollo.", ua: "*Герої:* Геліос, Фаетон, коні, Земля, Дзевс, Клімена; в тлі Аполлон." },
        { pl: "*Relacja w 4 zdaniach:* prośba → przysięga → jazda → piorun i Erydan.", ua: "*Переказ у 4 реченнях:* прохання → присяга → їзда → блискавка і Еридан." }
      ],
      task: {
        id: "t27-s11-swiat",
        type: "multiple-choice",
        question: {
          pl: "Które elementy NA PEWNO są ze *świata* tego mitu? Zaznacz wszystkie pewne.",
          ua: "Які елементи НАПЕВНО зі *світу* цього міфу? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Złoty pałac Heliosa; rydwan; Erydan.", ua: "Золотий палац Геліоса; колісниця; Еридан." } },
          { id: "b", label: { pl: "Faeton, Helios, Dzeus, rumaki nieśmiertelne.", ua: "Фаетон, Геліос, Дзевс, безсмертні коні." } },
          { id: "c", label: { pl: "Amfitryta, delfin i dach z muszli.", ua: "Амфітріта, дельфін і дах із мушель." } },
          { id: "d", label: { pl: "Czas mityczny: jedna jazda wozu słońca.", ua: "Міфічний час: одна їзда воза сонця." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Amfitryta była w Królestwie morza. Kto tu wozi słońce?",
          ua: "Амфітріта була в Царстві моря. Хто тут возить сонце?"
        },
        explanation: {
          pl: "Pałac, rydwan, Erydan, Helios, Faeton, Dzeus. Morze — T24.",
          ua: "Палац, колісниця, Еридан, Геліос, Фаетон, Дзевс."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zeszyt · co biorę na lekcję 28", ua: "Зошит · що беру на урок 28" },
      formula: "s. 59  ·  most",
      promptPlace: "before",
      prompt: {
        pl: "Jutro: *plan 5–6 punktów*, komiks z dymkami, *tytuł*, reklama, bóstwa słońca, komiks z *innego* mitu.",
        ua: "Завтра: *план 5–6 пунктів*, комікс із хмарками, *назва*, реклама, боги сонця, комікс з *іншого* міфу."
      },
      items: [
        { pl: "6 kadrów: pałac → prośba → start → katastrofa → piorun → Erydan.", ua: "6 кадрів: палац → прохання → старт → катастрофа → блискавка → Еридан." },
        { pl: "Dymki + WIOOO / TRZASK / BUM. Tytuł wymyślisz sam (nie kopiuj okładki).", ua: "Хмарки + WIOOO / TRZASK / BUM. Назву вигадаєш сам." },
        { pl: "Mit tłumaczy przyrodę po swojemu — to nie raport z geografii.", ua: "Міф пояснює природу по-своєму — це не звіт з географії." }
      ],
      task: {
        id: "t27-s12-most",
        type: "single-choice",
        question: {
          pl: "Co zrobisz na lekcji 28?",
          ua: "Що зробиш на уроці 28?"
        },
        options: [
          { id: "a", label: { pl: "Plan, komiks z tytułem, reklamę, bóstwa słońca, komiks z innego mitu.", ua: "План, комікс із назвою, рекламу, богів сонця, комікс з іншого міфу." } },
          { id: "b", label: { pl: "Tylko odmianę rzeczownika przez 7 przypadków.", ua: "Лише відмінювання іменника через 7 відмінків." } },
          { id: "c", label: { pl: "Nowy list Amfitryty od pierwszej linijki.", ua: "Новий лист Амфітріти з першого рядка." } }
        ],
        answer: "a",
        hint: {
          pl: "s. 59–60: zadania 1–3. Odmiana jest T29.",
          ua: "с. 59–60: завдання 1–3. Відмінювання — T29."
        },
        explanation: {
          pl: "28 = komiks i kultura. 29 = gramatyka rzeczownika.",
          ua: "28 = комікс і культура. 29 = граматика іменника."
        }
      }
    }
  ]
};
