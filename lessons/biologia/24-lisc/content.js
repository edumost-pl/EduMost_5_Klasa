function em(text) {
  return { text: text, emphasis: true };
}

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L24_Lisc/images/";

function viz(file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  return spec;
}

function vizGh(file, spec) {
  spec = viz(file, spec);
  spec.url = BIO_IMG + file + "?raw=true";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Misja: wytwórnia pokarmu", ua: "Місія: фабрика поживи" },
      visual: vizGh("l24-zacznijmy.png", {
        alt: { pl: "Zielone liście w słońcu", ua: "Зелені листки на сонці" },
        title: { pl: "Liść łapie światło.", ua: "Листок ловить світло." },
        prompt: { pl: "Plansza lekcji 24: liść w słońcu." }
      }),
      text: {
        pl: [
          "To lekcja 24: liść. Na lekcji 23 wyrastał z węzła pędu. Dziś sam organ: części, unerwienie, warstwy blaszki i trzy funkcje.",
          "Równanie fotosyntezy znasz z lekcji 9. Światło i chlorofil stoją przy strzałce.",
          "W każdej części kolejność jest ta sama: trudne słowo, przykład, krótkie pytanie, typowy błąd, zadanie samodzielne.",
          "Na końcu jest sprawdzian bez podpowiedzi."
        ],
        ua: [
          "Це урок 24: листок. На уроці 23 він виростав із вузла пагона. Сьогодні сам орган: частини, жилкування, шари пластинки і три функції.",
          "Рівняння фотосинтезу знаєш з уроку 9. Світло і хлорофіл стоять біля стрілки.",
          "У кожній частині один порядок: складне слово, приклад, коротке питання, типова помилка, самостійне завдання.",
          "Наприкінці — перевірка без підказок."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa, które łatwo pomylić", ua: "Слова, які легко сплутати" },
      rows: [
        { pl: "blaszka liściowa", ua: "пластинка листка — плоска частина до світла" },
        { pl: "ogonek", ua: "черешок — місток до стебла" },
        { pl: "liść pojedynczy", ua: "простий листок — одна пластинка" },
        { pl: "liść złożony", ua: "складний листок — листочки на одному черешку" },
        { pl: "unerwienie siatkowate", ua: "сітчасте жилкування — сітка, як у липи" },
        { pl: "unerwienie równoległe", ua: "паралельне жилкування — лінії, як у трави" },
        { pl: "miękisz palisadowy", ua: "палісадна паренхіма — хлоропласти біля світла" },
        { pl: "transpiracja", ua: "транспірація — випаровування води з продихів" }
      ]
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Blaszka i ogonek", ua: "Поняття. Пластинка і черешок" },
      visual: vizGh("l24-czesci.png", {
        alt: { pl: "Blaszka, ogonek i nasada liścia", ua: "Пластинка, черешок і основа листка" },
        title: { pl: "Płaska część i most do łodygi.", ua: "Плоска частина і місток до стебла." },
        prompt: { pl: "Plansza lekcji 24: części liścia." }
      }),
      text: {
        pl: [
          ["", em("Blaszka liściowa"), " to płaska, zwykle zielona część. Ma dużą powierzchnię, więc łapie światło do fotosyntezy."],
          ["", em("Ogonek"), " łączy blaszkę z łodygą i ustawia ją do słońca. U traw ogonek bywa bardzo krótki: blaszka siedzi prawie na łodydze."],
          ["", em("Nasada"), " to miejsce połączenia z pędem. Liść wyrasta z węzła, jak na lekcji 23."]
        ],
        ua: [
          ["", em("Пластинка листка"), " — плоска, зазвичай зелена частина. Має велику поверхню, тож ловить світло для фотосинтезу."],
          ["", em("Черешок"), " з’єднує пластинку зі стеблом і скеровує її до сонця. У трав черешок буває дуже коротким: пластинка сидить майже на стеблі."],
          ["", em("Основа"), " — місце з’єднання з пагоном. Листок виростає з вузла, як на уроці 23."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Lipa i trawa", ua: "Приклад. Липа і трава" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["U lipy szeroka blaszka łapie światło."],
            ua: ["У липи широка пластинка ловить світло."]
          }
        },
        {
          text: {
            pl: ["Ogonek prowadzi do łodygi. Nasada spotyka się z węzłem."],
            ua: ["Черешок веде до стебла. Основа сходиться з вузлом."]
          }
        },
        {
          text: {
            pl: ["U trawy blaszka siedzi prawie na łodydze. Liść i tak jest liściem."],
            ua: ["У трави пластинка сидить майже на стеблі. Листок усе одно є листком."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Dwie części", ua: "Коротке питання. Дві частини" },
      task: {
        id: "l24-g1",
        type: "single-choice",
        question: {
          pl: "Do czego służy blaszka, a do czego ogonek?",
          ua: "Для чого служить пластинка, а для чого черешок?"
        },
        options: [
          { id: "a", label: { pl: "blaszka łapie światło; ogonek łączy liść z łodygą", ua: "пластинка ловить світло; черешок з’єднує листок зі стеблом" } },
          { id: "b", label: { pl: "ogonek łapie światło, a blaszka jest korzeniem", ua: "черешок ловить світло, а пластинка є коренем" } },
          { id: "c", label: { pl: "obie części są słojami pnia", ua: "обидві частини є річними кільцями стовбура" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj płaskiej zielonej części i wąskiego mostu.",
          ua: "Шукай плоску зелену частину і вузький місток."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Światło łapie szeroka blaszka. Ogonek łączy ją z łodygą. Korzeń jest organem pod ziemią.",
              ua: "Світло ловить широка пластинка. Черешок з’єднує її зі стеблом. Корінь є органом під землею."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Słoje są pierścieniami drewna w pniu. Blaszka łapie światło, a ogonek łączy liść z łodygą.",
              ua: "Кільця є кільцями деревини в стовбурі. Пластинка ловить світло, а черешок з’єднує листок зі стеблом."
            }
          }
        ],
        explanation: {
          pl: "Blaszka łapie światło. Ogonek łączy liść z łodygą.",
          ua: "Пластинка ловить світло. Черешок з’єднує листок зі стеблом."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Most łapie światło", ua: "Типова помилка. Місток ловить світло" },
      claim: {
        pl: "„Ogonek łapie światło, a blaszka tylko trzyma liść przy łodydze.”",
        ua: "«Черешок ловить світло, а пластинка лише тримає листок біля стебла.»"
      },
      text: {
        pl: [
          "Szeroka blaszka ma dużą powierzchnię i łapie światło.",
          "Ogonek jest mostem: łączy blaszkę z łodygą i ustawia ją do słońca."
        ],
        ua: [
          "Широка пластинка має велику поверхню і ловить світло.",
          "Черешок є містком: з’єднує пластинку зі стеблом і скеровує її до сонця."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Trawa bez mostu", ua: "Сам. Трава без містка" },
      task: {
        id: "l24-p1",
        type: "single-choice",
        question: {
          pl: "Uczeń patrzy na trawę i mówi, że nie ma liścia, bo nie widać ogonka. Co poprawić?",
          ua: "Учень дивиться на траву і каже, що листка немає, бо не видно черешка. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "u traw blaszka siedzi prawie na łodydze; to nadal liść", ua: "у трав пластинка сидить майже на стеблі; це все одно листок" } },
          { id: "b", label: { pl: "tak — bez ogonka roślina nie ma liścia", ua: "так — без черешка рослина не має листка" } },
          { id: "c", label: { pl: "tak — blaszka trawy jest włośnikiem korzenia", ua: "так — пластинка трави є кореневим волоском" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Ogonek bywa bardzo krótki. Liść poznajesz po blaszce, która łapie światło.",
              ua: "Черешок буває дуже коротким. Листок пізнаєш за пластинкою, яка ловить світло."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Włośnik pobiera wodę na korzeniu. Blaszka trawy jest liściem, nawet gdy ogonek jest krótki.",
              ua: "Кореневий волосок вбирає воду на корені. Пластинка трави є листком, навіть коли черешок короткий."
            }
          }
        ],
        explanation: {
          pl: "U traw blaszka siedzi prawie na łodydze. To nadal liść.",
          ua: "У трав пластинка сидить майже на стеблі. Це все одно листок."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Pojedynczy i złożony", ua: "Поняття. Простий і складний" },
      visual: vizGh("l24-pojedynczy-zlozony.png", {
        alt: { pl: "Jedna blaszka i listki na wspólnym ogonku", ua: "Одна пластинка і листочки на спільному черешку" },
        title: { pl: "Jedna blaszka albo kilka listków.", ua: "Одна пластинка або кілька листочків." },
        prompt: { pl: "Plansza lekcji 24: liść pojedynczy i złożony." }
      }),
      text: {
        pl: [
          ["", em("Liść pojedynczy"), " ma jedną blaszkę. Tak jest u dębu, lipy i jabłoni."],
          ["", em("Liść złożony"), " ma kilka listków na wspólnym ogonku. Tak jest u kasztanowca, robinii i koniczyny."],
          "Listki opadają razem, z jednym ogonkiem. Jeden listek nie jest osobnym liściem."
        ],
        ua: [
          ["", em("Простий листок"), " має одну пластинку. Так у дуба, липи і яблуні."],
          ["", em("Складний листок"), " має кілька листочків на спільному черешку. Так у каштана, робінії і конюшини."],
          "Листочки опадають разом, з одним черешком. Один листочок не є окремим листком."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Dąb i kasztanowiec", ua: "Приклад. Дуб і каштан" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Dąb ma jedną blaszkę na ogonku. To liść pojedynczy."],
            ua: ["Дуб має одну пластинку на черешку. Це простий листок."]
          }
        },
        {
          text: {
            pl: ["Kasztanowiec ma kilka listków na wspólnym ogonku. To liść złożony."],
            ua: ["Каштан має кілька листочків на спільному черешку. Це складний листок."]
          }
        },
        {
          text: {
            pl: ["Te listki odpadają razem. Nie są osobnymi liśćmi."],
            ua: ["Ці листочки опадають разом. Вони не є окремими листками."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Jedna czy kilka", ua: "Коротке питання. Одна чи кілька" },
      task: {
        id: "l24-g2",
        type: "single-choice",
        question: {
          pl: "Czym liść złożony różni się od pojedynczego?",
          ua: "Чим складний листок відрізняється від простого?"
        },
        options: [
          { id: "a", label: { pl: "złożony ma listki na wspólnym ogonku; pojedynczy ma jedną blaszkę", ua: "складний має листочки на спільному черешку; простий має одну пластинку" } },
          { id: "b", label: { pl: "złożony to wiele osobnych liści, bo każdy listek ma czubek", ua: "складний — це багато окремих листків, бо кожен листочок має кінчик" } },
          { id: "c", label: { pl: "pojedynczy poznajesz po równoległych liniach, a złożony po korzeniu", ua: "простий пізнаєш за паралельними лініями, а складний за коренем" } }
        ],
        answer: "a",
        hint: {
          pl: "Policz blaszki na jednym ogonku.",
          ua: "Полічи пластинки на одному черешку."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wspólny ogonek trzyma listki jako jeden liść. Odpadają razem, więc listek nie jest osobnym liściem.",
              ua: "Спільний черешок тримає листочки як один листок. Вони опадають разом, тож листочок не є окремим листком."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Linie nerwów to unerwienie, a korzeń jest pod ziemią. Liść pojedynczy ma jedną blaszkę, złożony ma listki na jednym ogonku.",
              ua: "Лінії жилок — це жилкування, а корінь є під землею. Простий листок має одну пластинку, складний має листочки на одному черешку."
            }
          }
        ],
        explanation: {
          pl: "Liść pojedynczy ma jedną blaszkę. Złożony ma listki na wspólnym ogonku.",
          ua: "Простий листок має одну пластинку. Складний має листочки на спільному черешку."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Każdy listek", ua: "Типова помилка. Кожен листочок" },
      claim: {
        pl: "„Każdy listek kasztanowca to osobny liść, bo ma własną blaszkę.”",
        ua: "«Кожен листочок каштана — це окремий листок, бо має власну пластинку.»"
      },
      text: {
        pl: [
          "Listki siedzą na jednym ogonku i opadają razem.",
          "To jeden liść złożony, nie kilka liści pojedynczych."
        ],
        ua: [
          "Листочки сидять на одному черешку і опадають разом.",
          "Це один складний листок, не кілька простих."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Koniczyna", ua: "Сам. Конюшина" },
      task: {
        id: "l24-p2",
        type: "single-choice",
        question: {
          pl: "Koniczyna ma kilka zielonych kawałków na jednym ogonku. Uczeń mówi, że to liście pojedyncze, bo każdy kawałek jest mały. Co poprawić?",
          ua: "Конюшина має кілька зелених шматків на одному черешку. Учень каже, що це прості листки, бо кожен шматок малий. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "to liść złożony: listki na wspólnym ogonku", ua: "це складний листок: листочки на спільному черешку" } },
          { id: "b", label: { pl: "tak — mały kawałek jest zawsze liściem pojedynczym", ua: "так — малий шматок завжди є простим листком" } },
          { id: "c", label: { pl: "tak — te kawałki są pąkami bocznymi", ua: "так — ці шматки є бічними бруньками" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wielkość nie wybiera typu. Kilka listków na jednym ogonku to liść złożony.",
              ua: "Розмір не вибирає тип. Кілька листочків на одному черешку — це складний листок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Pąk boczny siedzi w kącie liścia. Zielone kawałki koniczyny są listkami jednego liścia złożonego.",
              ua: "Бічна брунька сидить у пазусі листка. Зелені шматки конюшини є листочками одного складного листка."
            }
          }
        ],
        explanation: {
          pl: "Koniczyna ma liść złożony: listki na wspólnym ogonku.",
          ua: "Конюшина має складний листок: листочки на спільному черешку."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Unerwienie", ua: "Поняття. Жилкування" },
      visual: vizGh("l24-unerwienie.png", {
        alt: { pl: "Siatka nerwów i nerwy równoległe", ua: "Сітка жилок і паралельні жилки" },
        title: { pl: "Siatka albo linie obok siebie.", ua: "Сітка або лінії поряд." },
        prompt: { pl: "Plansza lekcji 24: unerwienie." }
      }),
      text: {
        pl: [
          ["", em("Unerwienie"), " to układ nerwów w blaszce. Nerwy są wiązkami przewodzącymi z lekcji 21 i 23: drewno i łyko w liściu."],
          ["", em("Unerwienie siatkowate"), " wygląda jak siatka. Tak bywa u dębu, lipy i jabłoni."],
          ["", em("Unerwienie równoległe"), " to linie biegnące obok siebie. Tak bywa u traw i kukurydzy."]
        ],
        ua: [
          ["", em("Жилкування"), " — це уклад жилок у пластинці. Жилки є провідними пучками з уроків 21 і 23: деревина і луб у листку."],
          ["", em("Сітчасте жилкування"), " виглядає як сітка. Так буває в дуба, липи і яблуні."],
          ["", em("Паралельне жилкування"), " — це лінії, що йдуть поряд. Так буває в трав і кукурудзи."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Lipa i trawa", ua: "Приклад. Липа і трава" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["W liściu lipy nerwy rozgałęziają się i schodzą. To siatka."],
            ua: ["У листку липи жилки галузяться і сходяться. Це сітка."]
          }
        },
        {
          text: {
            pl: ["W liściu trawy linie biegną obok siebie. To unerwienie równoległe."],
            ua: ["У листку трави лінії йдуть поряд. Це паралельне жилкування."]
          }
        },
        {
          text: {
            pl: ["W obu liściach nerw jest wiązką: drewno i łyko."],
            ua: ["В обох листках жилка є пучком: деревина і луб."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Siatka czy linie", ua: "Коротке питання. Сітка чи лінії" },
      task: {
        id: "l24-g3",
        type: "single-choice",
        question: {
          pl: "Czym unerwienie siatkowate różni się od równoległego?",
          ua: "Чим сітчасте жилкування відрізняється від паралельного?"
        },
        options: [
          { id: "a", label: { pl: "siatkowate jest siatką, jak u lipy; równoległe to linie obok siebie, jak u trawy", ua: "сітчасте є сіткою, як у липи; паралельне — це лінії поряд, як у трави" } },
          { id: "b", label: { pl: "równoległe też jest siatką, tylko liść jest węższy", ua: "паралельне теж є сіткою, лише листок вужчий" } },
          { id: "c", label: { pl: "nerwy są włośnikami, więc unerwienie jest na korzeniu", ua: "жилки є волосками, тож жилкування є на корені" } }
        ],
        answer: "a",
        hint: {
          pl: "Po lewej siatka. Po prawej linie obok siebie.",
          ua: "Ліворуч сітка. Праворуч лінії поряд."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Wąski liść nie robi siatki. Linie obok siebie to unerwienie równoległe. Siatka się rozgałęzia, jak u lipy.",
              ua: "Вузький листок не робить сітки. Лінії поряд — це паралельне жилкування. Сітка галузиться, як у липи."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Włośniki są na korzeniu. Nerw w blaszce jest wiązką przewodzącą: drewno i łyko.",
              ua: "Кореневі волоски є на корені. Жилка в пластинці є провідним пучком: деревина і луб."
            }
          }
        ],
        explanation: {
          pl: "Siatkowate unerwienie jest siatką. Równoległe to linie obok siebie.",
          ua: "Сітчасте жилкування є сіткою. Паралельне — це лінії поряд."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Nerw jako rysunek", ua: "Типова помилка. Жилка як малюнок" },
      claim: {
        pl: "„Nerwy tylko zdobią blaszkę. Woda idzie skórką.”",
        ua: "«Жилки лише прикрашають пластинку. Вода йде шкіркою.»"
      },
      text: {
        pl: [
          "Nerw jest wiązką przewodzącą.",
          "Drewno w nerwie niesie wodę. Łyko niesie cukry. Skórka okrywa blaszkę."
        ],
        ua: [
          "Жилка є провідним пучком.",
          "Деревина в жилці несе воду. Луб несе цукри. Шкірка вкриває пластинку."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Kukurydza", ua: "Сам. Кукурудза" },
      task: {
        id: "l24-p3",
        type: "single-choice",
        question: {
          pl: "Liść kukurydzy ma linie obok siebie. Uczeń mówi, że to unerwienie siatkowate, bo liść jest długi. Co poprawić?",
          ua: "Листок кукурудзи має лінії поряд. Учень каже, що це сітчасте жилкування, бо листок довгий. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "linie obok siebie to unerwienie równoległe; siatka się rozgałęzia, jak u lipy", ua: "лінії поряд — це паралельне жилкування; сітка галузиться, як у липи" } },
          { id: "b", label: { pl: "tak — długi liść ma zawsze siatkę", ua: "так — довгий листок завжди має сітку" } },
          { id: "c", label: { pl: "tak — linie kukurydzy są słojami rocznymi", ua: "так — лінії кукурудзи є річними кільцями" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Długość liścia nie wybiera unerwienia. Linie obok siebie to unerwienie równoległe.",
              ua: "Довжина листка не вибирає жилкування. Лінії поряд — це паралельне жилкування."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Słoje są w drewnie pnia. Linie w blaszce kukurydzy to unerwienie równoległe.",
              ua: "Кільця є в деревині стовбура. Лінії в пластинці кукурудзи — це паралельне жилкування."
            }
          }
        ],
        explanation: {
          pl: "Kukurydza ma unerwienie równoległe. Siatka rozgałęzia się, jak u lipy.",
          ua: "Кукурудза має паралельне жилкування. Сітка галузиться, як у липи."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Warstwy blaszki", ua: "Поняття. Шари пластинки" },
      visual: vizGh("l24-przekroj.png", {
        alt: { pl: "Skórka, miękisz palisadowy, gąbczasty i szparka", ua: "Шкірка, палісадна і губчаста паренхіма та продих" },
        title: { pl: "Od światła w dół do szparki.", ua: "Від світла вниз до продиху." },
        prompt: { pl: "Plansza lekcji 24: przekrój blaszki." }
      }),
      text: {
        pl: [
          "Na przekroju blaszki widać tkanki z lekcji 21, ułożone warstwami.",
          ["Górna ", em("skórka"), " chroni. Pod nią jest ", em("miękisz palisadowy"), ": wydłużone komórki pełne chloroplastów, blisko światła."],
          ["Niżej jest ", em("miękisz gąbczasty"), ": luźniejszy, z przestrzeniami na powietrze. W nerwach biegną wiązki, drewno i łyko."],
          "Dolna skórka ma szparki, zwykle na spodzie blaszki. Tędy idą gazy i para wodna. Szparki znasz z lekcji 7 i 21."
        ],
        ua: [
          "На перерізі пластинки видно тканини з уроку 21, укладені шарами.",
          ["Верхня ", em("шкірка"), " захищає. Під нею є ", em("палісадна паренхіма"), ": видовжені клітини, повні хлоропластів, близько до світла."],
          ["Нижче є ", em("губчаста паренхіма"), ": рихліша, з проміжками для повітря. У жилках ідуть пучки, деревина і луб."],
          "Нижня шкірка має продихи, зазвичай на споді пластинки. Туди йдуть гази і водяна пара. Продихи знаєш з уроків 7 і 21."
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Od góry na dół", ua: "Приклад. Згори вниз" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na górze jest skórka. Zaraz pod nią wydłużone komórki z chloroplastami. To miękisz palisadowy."],
            ua: ["Згори є шкірка. Одразу під нею видовжені клітини з хлоропластами. Це палісадна паренхіма."]
          }
        },
        {
          text: {
            pl: ["Niżej komórki leżą luźniej. Między nimi jest powietrze. To miękisz gąbczasty."],
            ua: ["Нижче клітини лежать вільніше. Між ними є повітря. Це губчаста паренхіма."]
          }
        },
        {
          text: {
            pl: ["Na dole skórka ma szparkę. W nerwie obok idą drewno i łyko."],
            ua: ["Знизу шкірка має продих. У жилці поряд ідуть деревина і луб."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Przy świetle", ua: "Коротке питання. Біля світла" },
      task: {
        id: "l24-g4",
        type: "single-choice",
        question: {
          pl: "Gdzie w blaszce są wydłużone komórki pełne chloroplastów?",
          ua: "Де в пластинці є видовжені клітини, повні хлоропластів?"
        },
        options: [
          { id: "a", label: { pl: "w miękiszu palisadowym, pod górną skórką, blisko światła", ua: "у палісадній паренхімі, під верхньою шкіркою, близько до світла" } },
          { id: "b", label: { pl: "tylko w miękiszu gąbczastym, bo powietrze jest zielone", ua: "лише в губчастій паренхімі, бо повітря зелене" } },
          { id: "c", label: { pl: "w dolnej skórce, bo szparka trzyma chloroplasty zamiast gazów", ua: "у нижній шкірці, бо продих тримає хлоропласти замість газів" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj wydłużonych komórek tuż pod górną skórką.",
          ua: "Шукай видовжені клітини одразу під верхньою шкіркою."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Miękisz gąbczasty ma przestrzenie na powietrze. Wydłużone komórki z chloroplastami to miękisz palisadowy, blisko światła.",
              ua: "Губчаста паренхіма має проміжки для повітря. Видовжені клітини з хлоропластами — це палісадна паренхіма, близько до світла."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szparka w dolnej skórce przepuszcza gazy i parę. Chloroplasty w wydłużonych komórkach są w miękiszu palisadowym.",
              ua: "Продих у нижній шкірці пропускає гази і пару. Хлоропласти у видовжених клітинах є в палісадній паренхімі."
            }
          }
        ],
        explanation: {
          pl: "Wydłużone komórki z chloroplastami tworzą miękisz palisadowy, blisko światła.",
          ua: "Видовжені клітини з хлоропластами утворюють палісадну паренхіму, близько до світла."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Szparka od słońca", ua: "Типова помилка. Продих від сонця" },
      claim: {
        pl: "„Szparki są na górnej skórce, bo tam jest słońce.”",
        ua: "«Продихи є на верхній шкірці, бо там сонце.»"
      },
      text: {
        pl: [
          "Szparki są zwykle w dolnej skórce, na spodzie blaszki.",
          "Blisko światła, pod górną skórką, leży miękisz palisadowy."
        ],
        ua: [
          "Продихи зазвичай є в нижній шкірці, на споді пластинки.",
          "Близько до світла, під верхньою шкіркою, лежить палісадна паренхіма."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Powietrze w środku", ua: "Сам. Повітря всередині" },
      task: {
        id: "l24-p4",
        type: "single-choice",
        question: {
          pl: "Uczeń widzi luźne komórki z przestrzeniami powietrza i nazywa je miękiszem palisadowym, bo do fotosyntezy trzeba powietrza. Co poprawić?",
          ua: "Учень бачить пухкі клітини з проміжками повітря і називає їх палісадною паренхімою, бо для фотосинтезу потрібне повітря. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "przestrzenie powietrza ma miękisz gąbczasty; palisadowy to wydłużone komórki z chloroplastami", ua: "проміжки повітря має губчаста паренхіма; палісадна — це видовжені клітини з хлоропластами" } },
          { id: "b", label: { pl: "tak — każda zielona warstwa jest palisadowa", ua: "так — кожен зелений шар є палісадним" } },
          { id: "c", label: { pl: "tak — przestrzenie powietrza to słoje pnia", ua: "так — проміжки повітря це кільця стовбура" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zielony kolor nie skleja warstw. Palisadowy miękisz ma wydłużone komórki przy świetle. Gąbczasty ma przestrzenie powietrza.",
              ua: "Зелений колір не склеює шари. Палісадна паренхіма має видовжені клітини біля світла. Губчаста має проміжки повітря."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Słoje są w pniu. Przestrzenie powietrza w blaszce należą do miękiszu gąbczastego.",
              ua: "Кільця є в стовбурі. Проміжки повітря в пластинці належать до губчастої паренхіми."
            }
          }
        ],
        explanation: {
          pl: "Przestrzenie powietrza ma miękisz gąbczasty. Miękisz palisadowy to wydłużone komórki z chloroplastami.",
          ua: "Проміжки повітря має губчаста паренхіма. Палісадна паренхіма — це видовжені клітини з хлоропластами."
        }
      }
    },

    {
      type: "concept",
      heading: { pl: "Pojęcie. Trzy funkcje", ua: "Поняття. Три функції" },
      visual: vizGh("l24-funkcje.png", {
        alt: { pl: "Fotosynteza, wymiana gazów i transpiracja", ua: "Фотосинтез, обмін газів і транспірація" },
        title: { pl: "Cukier, gazy i para wodna.", ua: "Цукор, гази і водяна пара." },
        prompt: { pl: "Plansza lekcji 24: funkcje liścia." }
      }),
      text: {
        pl: [
          ["", em("Fotosynteza"), " z lekcji 9: dwutlenek węgla + woda → glukoza + tlen. Światło i chlorofil są przy strzałce. Praca idzie głównie w miękiszu palisadowym."],
          "Szparki wpuszczają dwutlenek węgla i wypuszczają tlen. To wymiana gazów.",
          ["", em("Transpiracja"), " to parowanie wody ze szparek. Woda z korzenia idzie drewnem w górę, a liść trochę się chłodzi. W upale szparki potrafią się zamknąć, bo zbyt mocne parowanie suszy roślinę."]
        ],
        ua: [
          ["", em("Фотосинтез"), " з уроку 9: вуглекислий газ + вода → глюкоза + кисень. Світло і хлорофіл є біля стрілки. Робота йде здебільшого в палісадній паренхімі."],
          "Продихи впускають вуглекислий газ і випускають кисень. Це обмін газів.",
          ["", em("Транспірація"), " — це випаровування води з продихів. Вода з кореня йде деревиною вгору, а листок трохи охолоджується. У спеку продихи можуть закритися, бо надто сильне випаровування сушить рослину."]
        ]
      }
    },
    {
      type: "example",
      heading: { pl: "Przykład. Trzy kadry", ua: "Приклад. Три кадри" },
      reveal: true,
      steps: [
        {
          text: {
            pl: ["Na świetle z dwutlenku węgla i wody powstają glukoza i tlen."],
            ua: ["На світлі з вуглекислого газу і води постають глюкоза і кисень."]
          }
        },
        {
          text: {
            pl: ["Szparka wpuszcza dwutlenek węgla i wypuszcza tlen."],
            ua: ["Продих впускає вуглекислий газ і випускає кисень."]
          }
        },
        {
          text: {
            pl: ["Z tej samej szparki uchodzi para wodna. To transpiracja."],
            ua: ["З того самого продиху виходить водяна пара. Це транспірація."]
          }
        }
      ]
    },
    {
      type: "guided-practice",
      heading: { pl: "Krótkie pytanie. Para", ua: "Коротке питання. Пара" },
      task: {
        id: "l24-g5",
        type: "single-choice",
        question: {
          pl: "Czym jest transpiracja?",
          ua: "Що таке транспірація?"
        },
        options: [
          { id: "a", label: { pl: "parowaniem wody ze szparek; pomaga ciągnąć wodę w górę i chłodzi liść", ua: "випаровуванням води з продихів; допомагає тягти воду вгору і охолоджує листок" } },
          { id: "b", label: { pl: "powstawaniem glukozy z dwutlenku węgla i wody", ua: "утворенням глюкози з вуглекислого газу і води" } },
          { id: "c", label: { pl: "umocowaniem rośliny w glebie", ua: "закріпленням рослини в ґрунті" } }
        ],
        answer: "a",
        hint: {
          pl: "Szukaj pary wodnej, nie cukru i nie korzenia.",
          ua: "Шукай водяну пару, не цукор і не корінь."
        },
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Glukoza powstaje w fotosyntezie. Transpiracja to para wodna, która uchodzi ze szparek.",
              ua: "Глюкоза постає у фотосинтезі. Транспірація — це водяна пара, яка виходить із продихів."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Roślinę w glebie umacnia korzeń. Transpiracja jest parowaniem wody z liścia.",
              ua: "Рослину в ґрунті закріплює корінь. Транспірація є випаровуванням води з листка."
            }
          }
        ],
        explanation: {
          pl: "Transpiracja to parowanie wody ze szparek. Pomaga ciągnąć wodę w górę i chłodzi liść.",
          ua: "Транспірація — це випаровування води з продихів. Допомагає тягти воду вгору і охолоджує листок."
        }
      }
    },
    {
      type: "mistake",
      heading: { pl: "Typowy błąd. Jedna praca szparki", ua: "Типова помилка. Одна робота продиху" },
      claim: {
        pl: "„Szparka robi tylko jedno: albo gazy, albo wodę.”",
        ua: "«Продих робить лише одне: або гази, або воду.»"
      },
      text: {
        pl: [
          "Ta sama szparka przepuszcza gazy i parę wodną.",
          "Wymiana gazów i transpiracja są dwiema funkcjami liścia. Fotosynteza jest trzecią."
        ],
        ua: [
          "Той самий продих пропускає гази і водяну пару.",
          "Обмін газів і транспірація є двома функціями листка. Фотосинтез є третьою."
        ]
      }
    },
    {
      type: "practice",
      heading: { pl: "Sam. Upalny dzień", ua: "Сам. Спекотний день" },
      task: {
        id: "l24-p5",
        type: "single-choice",
        question: {
          pl: "W upale liść więdnie. Uczeń mówi, że szparki mają zostać szeroko otwarte, żeby roślina napiła się więcej wody. Co poprawić?",
          ua: "У спеку листок в’яне. Учень каже, що продихи мають лишитися широко відкритими, щоб рослина напилася більше води. Що виправити?"
        },
        options: [
          { id: "a", label: { pl: "przez otwarte szparki ucieka para; w upale szparki potrafią się zamknąć, żeby roślina nie usychała", ua: "через відкриті продихи виходить пара; у спеку продихи можуть закритися, щоб рослина не сохла" } },
          { id: "b", label: { pl: "tak — szersza szparka magazynuje więcej wody w blaszce", ua: "так — ширший продих запасає більше води в пластинці" } },
          { id: "c", label: { pl: "tak — więdnięcie znaczy, że liść stał się korzeniem", ua: "так — в’янення означає, що листок став коренем" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szparka nie magazynuje wody. Transpiracja to para, która uchodzi. W upale szparki potrafią się zamknąć.",
              ua: "Продих не запасає воду. Транспірація — це пара, яка виходить. У спеку продихи можуть закритися."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Więdnięcie pokazuje utratę wody z liścia. Korzeń zostaje pod ziemią. Szparki potrafią się zamknąć, żeby ograniczyć transpirację.",
              ua: "В’янення показує втрату води з листка. Корінь лишається під землею. Продихи можуть закритися, щоб обмежити транспірацію."
            }
          }
        ],
        explanation: {
          pl: "W upale szparki potrafią się zamknąć, bo zbyt mocna transpiracja suszy roślinę.",
          ua: "У спеку продихи можуть закритися, бо надто сильна транспірація сушить рослину."
        }
      }
    },

    {
      type: "goal",
      heading: { pl: "Sprawdzian bez podpowiedzi", ua: "Перевірка без підказок" },
      text: {
        pl: [
          "Pięć pytań jak w szkole. Przycisku podpowiedzi nie ma.",
          "Jeśli odpowiedź będzie nietrafiona, zobaczysz, który krok sprawdziłeś nie tym słowem."
        ],
        ua: [
          "П’ять питань як у школі. Кнопки підказки немає.",
          "Якщо відповідь не підійде, побачиш, який крок ти перевірив не тим словом."
        ]
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 1. Most lipy", ua: "Перевірка 1. Місток липи" },
      task: {
        id: "l24-t1",
        type: "single-choice",
        question: {
          pl: "Liść lipy ma szeroką zieloną część i wąski most do gałęzi. Most spotyka łodygę przy węźle. Jak nazywają się te miejsca?",
          ua: "Листок липи має широку зелену частину і вузький місток до гілки. Місток сходиться зі стеблом біля вузла. Як називаються ці місця?"
        },
        options: [
          { id: "a", label: { pl: "szeroka część to blaszka, most to ogonek, spotkanie ze łodygą to nasada przy węźle", ua: "широка частина — пластинка, місток — черешок, сходження зі стеблом — основа біля вузла" } },
          { id: "b", label: { pl: "szeroka część to ogonek, a most to czepiec korzenia", ua: "широка частина — черешок, а місток — кореневий чохлик" } },
          { id: "c", label: { pl: "obie części są międzywęźlami z lekcji 23", ua: "обидві частини є міжвузлями з уроку 23" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Szeroka część łapie światło, więc jest blaszką. Czepiec jest na czubku korzenia. Wąski most to ogonek.",
              ua: "Широка частина ловить світло, тож є пластинкою. Чохлик є на кінчику кореня. Вузький місток — це черешок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Międzywęźle jest gołym odcinkiem łodygi między węzłami. Tu szeroka część to blaszka, a most to ogonek.",
              ua: "Міжвузля є голим відрізком стебла між вузлами. Тут широка частина — пластинка, а місток — черешок."
            }
          }
        ],
        explanation: {
          pl: "Blaszka łapie światło, ogonek łączy ją z łodygą, a nasada jest przy węźle.",
          ua: "Пластинка ловить світло, черешок з’єднує її зі стеблом, а основа є біля вузла."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 2. Robinia i dąb", ua: "Перевірка 2. Робінія і дуб" },
      task: {
        id: "l24-t2",
        type: "single-choice",
        question: {
          pl: "Robinia ma kilka zielonych kawałków na jednym ogonku, który odpada w całości. Dąb obok ma jedną blaszkę. Który liść jest który?",
          ua: "Робінія має кілька зелених шматків на одному черешку, який опадає цілком. Дуб поряд має одну пластинку. Який листок який?"
        },
        options: [
          { id: "a", label: { pl: "robinia ma liść złożony, dąb liść pojedynczy", ua: "робінія має складний листок, дуб — простий" } },
          { id: "b", label: { pl: "oba są pojedyncze, bo oba są zielone", ua: "обидва прості, бо обидва зелені" } },
          { id: "c", label: { pl: "dąb jest złożony, bo jego blaszka jest szeroka", ua: "дуб складний, бо його пластинка широка" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Zielony kolor nie wybiera typu. Kilka listków na jednym ogonku to liść złożony. Jedna blaszka dębu to liść pojedynczy.",
              ua: "Зелений колір не вибирає тип. Кілька листочків на одному черешку — це складний листок. Одна пластинка дуба — це простий листок."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Szeroka blaszka dębu jest jedna, więc liść jest pojedynczy. Złożony ma kilka listków na wspólnym ogonku, jak robinia.",
              ua: "Широка пластинка дуба одна, тож листок простий. Складний має кілька листочків на спільному черешку, як робінія."
            }
          }
        ],
        explanation: {
          pl: "Robinia ma liść złożony. Dąb ma liść pojedynczy.",
          ua: "Робінія має складний листок. Дуб має простий листок."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 3. Jabłoń i kukurydza", ua: "Перевірка 3. Яблуня і кукурудза" },
      task: {
        id: "l24-t3",
        type: "single-choice",
        question: {
          pl: "Liść jabłoni ma rozgałęzioną siatkę. Liść kukurydzy ma linie obok siebie. Jak nazywasz oba unerwienia?",
          ua: "Листок яблуні має розгалужену сітку. Листок кукурудзи має лінії поряд. Як називаєш обидва жилкування?"
        },
        options: [
          { id: "a", label: { pl: "jabłoń — siatkowate, kukurydza — równoległe; nerwy są wiązkami", ua: "яблуня — сітчасте, кукурудза — паралельне; жилки є пучками" } },
          { id: "b", label: { pl: "oba równoległe, bo oba liście są zielone", ua: "обидва паралельні, бо обидва листки зелені" } },
          { id: "c", label: { pl: "kukurydza jest siatkowata, bo nie ma długiego ogonka", ua: "кукурудза сітчаста, бо не має довгого черешка" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Kolor nie wybiera unerwienia. Siatka jabłoni jest siatkowata. Linie kukurydzy są równoległe.",
              ua: "Колір не вибирає жилкування. Сітка яблуні є сітчастою. Лінії кукурудзи є паралельними."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Krótki ogonek nie robi siatki. Linie obok siebie to unerwienie równoległe. Siatka jabłoni jest siatkowata.",
              ua: "Короткий черешок не робить сітки. Лінії поряд — це паралельне жилкування. Сітка яблуні є сітчастою."
            }
          }
        ],
        explanation: {
          pl: "Jabłoń ma unerwienie siatkowate. Kukurydza ma unerwienie równoległe. Nerwy są wiązkami.",
          ua: "Яблуня має сітчасте жилкування. Кукурудза має паралельне жилкування. Жилки є пучками."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 4. Od góry", ua: "Перевірка 4. Згори" },
      task: {
        id: "l24-t4",
        type: "single-choice",
        question: {
          pl: "Jaka jest kolejność warstw blaszki od góry w dół?",
          ua: "Яка послідовність шарів пластинки згори вниз?"
        },
        options: [
          { id: "a", label: { pl: "skórka górna, miękisz palisadowy, miękisz gąbczasty, skórka dolna ze szparkami; w nerwach wiązki", ua: "верхня шкірка, палісадна паренхіма, губчаста паренхіма, нижня шкірка з продихами; у жилках пучки" } },
          { id: "b", label: { pl: "skórka dolna, słoje, walec osiowy, skórka górna", ua: "нижня шкірка, кільця, центральний циліндр, верхня шкірка" } },
          { id: "c", label: { pl: "ogonek, listek, węzeł, pąk", ua: "черешок, листочок, вузол, брунька" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Słoje są w pniu, a walec osiowy w korzeniu. W blaszce od góry: skórka, miękisz palisadowy, miękisz gąbczasty, dolna skórka ze szparkami.",
              ua: "Кільця є в стовбурі, а центральний циліндр у корені. У пластинці згори: шкірка, палісадна паренхіма, губчаста паренхіма, нижня шкірка з продихами."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Ogonek, węzeł i pąk opisują pęd. Warstwy blaszki od góry to skórka, palisada, gąbka i dolna skórka ze szparkami.",
              ua: "Черешок, вузол і брунька описують пагін. Шари пластинки згори — це шкірка, палісада, губка і нижня шкірка з продихами."
            }
          }
        ],
        explanation: {
          pl: "Od góry: skórka, miękisz palisadowy, miękisz gąbczasty, skórka dolna ze szparkami. W nerwach są wiązki.",
          ua: "Згори: шкірка, палісадна паренхіма, губчаста паренхіма, нижня шкірка з продихами. У жилках є пучки."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzian 5. Trzy prace", ua: "Перевірка 5. Три роботи" },
      task: {
        id: "l24-t5",
        type: "single-choice",
        question: {
          pl: "Liść na świetle pobiera dwutlenek węgla i oddaje tlen. Ze szparek uchodzi też para wodna, a woda idzie drewnem w górę. Które funkcje tu widać?",
          ua: "Листок на світлі бере вуглекислий газ і віддає кисень. Із продихів виходить ще водяна пара, а вода йде деревиною вгору. Які функції тут видно?"
        },
        options: [
          { id: "a", label: { pl: "fotosyntezę, wymianę gazów i transpirację", ua: "фотосинтез, обмін газів і транспірацію" } },
          { id: "b", label: { pl: "tylko umocowanie i zapas, jak u marchwi", ua: "лише закріплення і запас, як у моркви" } },
          { id: "c", label: { pl: "tylko słoje roczne, bo para rysuje pierścienie", ua: "лише річні кільця, бо пара малює кільця" } }
        ],
        answer: "a",
        mistakes: [
          {
            answer: "b",
            feedback: {
              pl: "Umocowanie i zapas marchwi należą do korzenia. Liść na świetle prowadzi fotosyntezę, wymienia gazy i transpiruje.",
              ua: "Закріплення і запас моркви належать до кореня. Листок на світлі веде фотосинтез, обмінює гази і транспірує."
            }
          },
          {
            answer: "c",
            feedback: {
              pl: "Słoje dodaje kambium w pniu. Para ze szparek to transpiracja, a gazy i cukier to dwie pozostałe funkcje liścia.",
              ua: "Кільця додає камбій у стовбурі. Пара з продихів — це транспірація, а гази і цукор — це дві інші функції листка."
            }
          }
        ],
        explanation: {
          pl: "Liść prowadzi fotosyntezę, wymienia gazy przez szparki i transpiruje.",
          ua: "Листок веде фотосинтез, обмінює гази через продихи і транспірує."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("l24-przekroj.png", {
        alt: { pl: "Warstwy blaszki od górnej skórki do szparki", ua: "Шари пластинки від верхньої шкірки до продиху" },
        title: { pl: "Blaszka, nerwy i trzy prace.", ua: "Пластинка, жилки і три роботи." },
        prompt: { pl: "Ta sama plansza przekroju blaszki." }
      }),
      text: {
        pl: [
          "Blaszka łapie światło. Ogonek łączy ją z łodygą. Nasada jest przy węźle.",
          "Liść pojedynczy ma jedną blaszkę. Złożony ma listki na wspólnym ogonku.",
          "Unerwienie siatkowate jest siatką, równoległe to linie. Nerwy są wiązkami.",
          "Od góry: skórka, palisada, gąbka, dolna skórka ze szparkami. Liść fotosyntetyzuje, wymienia gazy i transpiruje."
        ],
        ua: [
          "Пластинка ловить світло. Черешок з’єднує її зі стеблом. Основа є біля вузла.",
          "Простий листок має одну пластинку. Складний має листочки на спільному черешку.",
          "Сітчасте жилкування є сіткою, паралельне — це лінії. Жилки є пучками.",
          "Згори: шкірка, палісада, губка, нижня шкірка з продихами. Листок фотосинтезує, обмінює гази і транспірує."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Co już umiem", ua: "Що я вже вмію" },
      items: [
        { pl: "Wskażę blaszkę, ogonek i nasadę.", ua: "Вкажу пластинку, черешок і основу." },
        { pl: "Odróżnię liść pojedynczy od złożonego.", ua: "Відрізню простий листок від складного." },
        { pl: "Porównam unerwienie siatkowate i równoległe.", ua: "Порівняю сітчасте і паралельне жилкування." },
        { pl: "Opiszę warstwy blaszki od góry do szparki.", ua: "Опишу шари пластинки згори до продиху." },
        { pl: "Wyjaśnię fotosyntezę, wymianę gazów i transpirację.", ua: "Поясню фотосинтез, обмін газів і транспірацію." },
        { pl: "Jeśli któraś odpowiedź nie siadła, wracam do tej części, a nie do całego działu.", ua: "Якщо якась відповідь не сіла, повертаюся до тієї частини, а не до всього розділу." }
      ]
    }
  ]
};
