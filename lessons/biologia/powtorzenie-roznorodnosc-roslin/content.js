function em(text) {
  return { text: text, emphasis: true };
}

function vizGh(folder, file, spec) {
  spec.kind = spec.kind || "image-placeholder";
  spec.file = file;
  spec.url = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/" +
    folder + "/images/" + file + "?raw=true";
  return spec;
}

function tree(spec) {
  spec.kind = "class-tree";
  return spec;
}

window.EduMostLessonContent = {
  blocks: [
    {
      type: "intro",
      heading: { pl: "Powtórzenie i sprawdzian", ua: "Повторення і перевірка" },
      text: {
        pl: [
          "To nie nowa lekcja biologii. Powtarzasz cały dział V: Różnorodność roślin (lekcje 25–34).",
          "Najpierw krótka powtórka. Potem zadania jak w podręczniku „Wiesz czy nie wiesz?”. Na końcu mini-notatka przed szkolnym sprawdzianem."
        ],
        ua: [
          "Це не новий урок біології. Ти повторюєш увесь розділ V: Різноманітність рослин (уроки 25–34).",
          "Спочатку коротке повторення. Потім завдання як у підручнику «Знаєш чи не знаєш?». Наприкінці міні-нотатка перед шкільною перевіркою."
        ]
      }
    },
    {
      type: "goal",
      heading: { pl: "Co umiesz po tym dziale?", ua: "Що вмієш після цього розділу?" },
      items: [
        { pl: "Rozpoznasz mech, paproć, nagonasienne i okrytonasienne.", ua: "Розпізнаєш мох, папороть, голонасінні і покритонасінні." },
        { pl: "Odróżnisz zarodniki od nasion oraz szyszkę od kwiatu i owocu.", ua: "Відрізниш спори від насіння та шишку від квітки і плоду." },
        { pl: "Powiesz, jak rozsiewają się nasiona i czego potrzeba do kiełkowania.", ua: "Скажеш, як поширюється насіння і що потрібно до проростання." },
        { pl: "Rozpoznasz dąb, buk, brzozę, klon, lipę i podasz znaczenie roślin.", ua: "Розпізнаєш дуб, бук, березу, клен, липу і назвеш значення рослин." }
      ]
    },
    {
      type: "classification",
      heading: { pl: "Cztery grupy roślin", ua: "Чотири групи рослин" },
      visual: tree({
        layout: "nested",
        root: { pl: "rośliny", ua: "рослини" },
        groups: [
          {
            title: { pl: "mchy", ua: "мохи" },
            items: [{ pl: "puszka", ua: "коробочка" }]
          },
          {
            title: { pl: "paprocie", ua: "папороті" },
            items: [{ pl: "kupki", ua: "купки" }]
          },
          {
            title: { pl: "nagonasienne", ua: "голонасінні" },
            items: [{ pl: "szyszka", ua: "шишка" }]
          },
          {
            title: { pl: "okrytonasienne", ua: "покритонасінні" },
            items: [{ pl: "owoc", ua: "плід" }]
          }
        ]
      }),
      items: [
        { pl: "mchy i paprocie — zarodniki", ua: "мохи і папороті — спори" },
        { pl: "nagonasienne i okrytonasienne — nasiona", ua: "голонасінні і покритонасінні — насіння" }
      ],
      text: {
        pl: [
          "Mech: chwytniki (nie korzeń), listki, puszka z zarodnikami.",
          "Paproć: korzenie, liście, kupki zarodników na spodzie liścia.",
          "Nagonasienne: nasiona gołe na łusce szyszki (sosna, świerk).",
          "Okrytonasienne: kwiat, nasiona w owocu (jabłoń, dąb)."
        ],
        ua: [
          "Мох: ризоїди (не корінь), листочки, коробочка зі спорами.",
          "Папороть: корені, листки, купки спор на споді листка.",
          "Голонасінні: голе насіння на лусці шишки (сосна, ялина).",
          "Покритонасінні: квітка, насіння в плоді (яблуня, дуб)."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Mech i paproć", ua: "Мох і папороть" },
      visual: vizGh("L25_Mchy", "l25-budowa.png", {
        alt: { pl: "Budowa mchu: chwytniki, łodyżka, puszka", ua: "Будова моху: ризоїди, стебельце, коробочка" },
        title: { pl: "Mech trzyma się chwytnikami. Paproć ma korzenie.", ua: "Мох тримається ризоїдами. Папороть має корені." },
        prompt: { pl: "Istniejący schemat lekcji 25: budowa mchu." }
      }),
      text: {
        pl: [
          "Mchy lubią wilgoć. Chwytniki przytwierdzają, ale nie są korzeniem z włośnikami.",
          "Torfowiec tworzy torf. Nie myl puszki z owocem.",
          "Paproć ma korzenie i duże liście. Kupki na spodzie to zarodniki, nie nasiona.",
          "Przedrośle paproci jest osobnym, małym pokoleniem — nie kwiat."
        ],
        ua: [
          "Мохи люблять вологу. Ризоїди прикріплюють, але не є коренем із волосками.",
          "Сфагнум творить торф. Не плутай коробочку з плодом.",
          "Папороть має корені і великі листки. Купки на споді — спори, не насіння.",
          "Заросток папороті — окреме мале покоління, не квітка."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Nasiona: nago i w owocu", ua: "Насіння: голе і в плоді" },
      visual: vizGh("L29_Okrytonasienne", "l29-owoc.png", {
        alt: { pl: "Owoc z nasionami", ua: "Плід із насінням" },
        title: { pl: "Szyszka — nasiona na łusce. Owoc — nasiona w środku.", ua: "Шишка — насіння на лусці. Плід — насіння всередині." },
        prompt: { pl: "Istniejący schemat lekcji 29: owoc z nasionami." }
      }),
      text: {
        pl: [
          ["U nagonasiennych nasiono leży ", em("nago"), " na łusce szyszki. Pyłek często niesie wiatr."],
          ["U okrytonasiennych ", em("kwiat"), " ma pręciki i słupek. Po zapyleniu z zalążni powstaje ", em("owoc"), " z nasionami."],
          "Nasiona rozsiewa wiatr, zwierzęta, woda albo sama roślina.",
          "Do kiełkowania potrzeba wody, powietrza i odpowiedniej temperatury. Światło nie zawsze jest konieczne na starcie."
        ],
        ua: [
          ["У голонасінних насінина лежить ", em("голою"), " на лусці шишки. Пилок часто несе вітер."],
          ["У покритонасінних ", em("квітка"), " має тичинки і маточку. Після запилення із зав’язі виникає ", em("плід"), " із насінням."],
          "Насіння поширює вітер, тварини, вода або сама рослина.",
          "До проростання потрібні вода, повітря і відповідна температура. Світло не завжди потрібне на старті."
        ]
      }
    },
    {
      type: "concept",
      heading: { pl: "Drzewa i znaczenie roślin", ua: "Дерева і значення рослин" },
      visual: vizGh("L33_Drzewa_lisciaste", "l33-znaczenie.png", {
        alt: { pl: "Znaczenie roślin: pokarm, tlen, drewno", ua: "Значення рослин: пожива, кисень, деревина" },
        title: { pl: "Pokarm, tlen, drewno, schronienie. Liście pomagają rozpoznać drzewo.", ua: "Пожива, кисень, деревина, сховок. Листки допомагають розпізнати дерево." },
        prompt: { pl: "Istniejąca plansza lekcji 33: znaczenie roślin." }
      }),
      text: {
        pl: [
          "Szkolny klucz liściastych: dąb (klapowany liść, żołądź), buk (gładka kora, orzeszki), brzoza (biała kora), klon (owoc skrzydełko), lipa (sercowaty liść).",
          "Iglaste (sosna, świerk) — dział V, nagonasienne: igły i szyszki.",
          "Rośliny dają pokarm i tlen, drewno, schronienie. Las to też gleba i wilgoć.",
          "To nie nowa grupa roślin — składka całego działu."
        ],
        ua: [
          "Шкільний ключ листяних: дуб (лопатевий листок, жолудь), бук (гладка кора, горішки), береза (біла кора), клен (плід-крилатка), липа (серцеподібний листок).",
          "Хвойні (сосна, ялина) — розділ V, голонасінні: хвоя і шишки.",
          "Рослини дають поживу і кисень, деревину, сховок. Ліс — це також ґрунт і волога.",
          "Це не нова група рослин — збірка всього розділу."
        ]
      }
    },
    {
      type: "vocabulary",
      heading: { pl: "Słowa działu", ua: "Слова розділу" },
      rows: [
        { pl: "chwytniki / puszka", ua: "ризоїди / коробочка" },
        { pl: "kupki zarodników", ua: "купки спор" },
        { pl: "szyszka", ua: "шишка" },
        { pl: "kwiat / owoc", ua: "квітка / плід" },
        { pl: "nasiono", ua: "насінина" },
        { pl: "kiełkowanie", ua: "проростання" },
        { pl: "okrytonasienne", ua: "покритонасінні" }
      ]
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 1. Cztery grupy", ua: "Перевірка 1. Чотири групи" },
      text: {
        pl: ["Jak w podręczniku: wrzuć roślinę do właściwej szufladki."],
        ua: ["Як у підручнику: поклади рослину у правильну шухляду."]
      },
      task: {
        id: "bio-r5-s1",
        type: "single-choice",
        question: { pl: "Który zestaw to cztery grupy działu V?", ua: "Який набір — чотири групи розділу V?" },
        options: [
          { id: "a", label: { pl: "wirusy, bakterie, protisty, grzyby", ua: "віруси, бактерії, протисти, гриби" } },
          { id: "b", label: { pl: "mchy, paprociowe, nagonasienne, okrytonasienne", ua: "мохи, папоротеві, голонасінні, покритонасінні" } },
          { id: "c", label: { pl: "korzeń, łodyga, liść, tkanka twórcza", ua: "корінь, стебло, листок, твірна тканина" } }
        ],
        answer: "b",
        explanation: {
          pl: "A to dział III. C to organy i tkanki działu IV.",
          ua: "A — розділ III. C — органи і тканини розділу IV."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 2. Mech", ua: "Перевірка 2. Мох" },
      task: {
        id: "bio-r5-s2",
        type: "single-choice",
        question: { pl: "Po czym poznasz mech?", ua: "По чому впізнаєш мох?" },
        options: [
          { id: "a", label: { pl: "chwytniki, listki, puszka z zarodnikami — nie korzeń i nie nasiono", ua: "ризоїди, листочки, коробочка зі спорами — не корінь і не насінина" } },
          { id: "b", label: { pl: "kwiat i owoc z nasionami", ua: "квітка і плід із насінням" } },
          { id: "c", label: { pl: "igły i szyszka", ua: "хвоя і шишка" } }
        ],
        answer: "a",
        explanation: {
          pl: "Kwiat to okrytonasienne. Igły i szyszka — nagonasienne.",
          ua: "Квітка — покритонасінні. Хвоя і шишка — голонасінні."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 3. Paproć", ua: "Перевірка 3. Папороть" },
      task: {
        id: "bio-r5-s3",
        type: "true-false",
        question: { pl: "Paproć ma korzenie. Kupki na spodzie liścia to zarodniki, nie nasiona.", ua: "Папороть має корені. Купки на споді листка — спори, не насіння." },
        answer: true,
        explanation: {
          pl: "To odróżnia paproć od mchu (mech: chwytniki) i od drzewa z owocem.",
          ua: "Це відрізняє папороть від моху (мох: ризоїди) і від дерева з плодом."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 4. Nagonasienne", ua: "Перевірка 4. Голонасінні" },
      task: {
        id: "bio-r5-s4",
        type: "single-choice",
        question: { pl: "Gdzie leżą nasiona sosny?", ua: "Де лежить насіння сосни?" },
        options: [
          { id: "a", label: { pl: "nago na łusce szyszki", ua: "голо на лусці шишки" } },
          { id: "b", label: { pl: "w owocu jak żołądź w miseczce dębu", ua: "у плоді, як жолудь у плюсці дуба" } },
          { id: "c", label: { pl: "w puszce mchu", ua: "у коробочці моху" } }
        ],
        answer: "a",
        explanation: {
          pl: "Stąd nazwa: nagonasienne. Żołądź to owoc okrytonasiennego.",
          ua: "Звідси назва: голонасінні. Жолудь — плід покритонасінного."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 5. Kwiat i owoc", ua: "Перевірка 5. Квітка і плід" },
      task: {
        id: "bio-r5-s5",
        type: "single-choice",
        question: { pl: "Co jest prawdą o roślinach okrytonasiennych?", ua: "Що правда про покритонасінні рослини?" },
        options: [
          { id: "a", label: { pl: "mają kwiat; nasiona są w owocu", ua: "мають квітку; насіння в плоді" } },
          { id: "b", label: { pl: "nigdy nie mają korzenia", ua: "ніколи не мають кореня" } },
          { id: "c", label: { pl: "rozmnażają się tylko zarodnikami jak mech", ua: "розмножуються лише спорами, як мох" } }
        ],
        answer: "a",
        explanation: {
          pl: "Dąb, jabłoń, trawa — okrytonasienne. Mech nie ma kwiatu.",
          ua: "Дуб, яблуня, трава — покритонасінні. Мох не має квітки."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 6. Porównanie", ua: "Перевірка 6. Порівняння" },
      task: {
        id: "bio-r5-s6",
        type: "multiple-choice",
        question: { pl: "Zaznacz zdania prawdziwe.", ua: "Познач правдиві речення." },
        options: [
          { id: "a", label: { pl: "Mech ma chwytniki; paproć ma korzenie.", ua: "Мох має ризоїди; папороть має корені." } },
          { id: "b", label: { pl: "Nagonasienne: nasiona na szyszce; okrytonasienne: nasiona w owocu.", ua: "Голонасінні: насіння на шишці; покритонасінні: насіння в плоді." } },
          { id: "c", label: { pl: "Wirus grypy to czwarta grupa roślin.", ua: "Вірус грипу — четверта група рослин." } },
          { id: "d", label: { pl: "Do kiełkowania nasiona zwykle potrzebują wody, powietrza i odpowiedniej temperatury.", ua: "До проростання насінню зазвичай потрібні вода, повітря і відповідна температура." } }
        ],
        answer: ["a", "b", "d"],
        explanation: {
          pl: "Wirus nie jest rośliną. Kiełkowanie ćwiczyliście w doświadczeniu z działu V.",
          ua: "Вірус не є рослиною. Проростання ви робили в досліді розділу V."
        }
      }
    },
    {
      type: "check",
      heading: { pl: "Sprawdzenie 7. Drzewo i znaczenie", ua: "Перевірка 7. Дерево і значення" },
      task: {
        id: "bio-r5-s7",
        type: "single-choice",
        question: { pl: "Które połączenie jest w całości poprawne?", ua: "Яке поєднання повністю правильне?" },
        options: [
          { id: "a", label: { pl: "dąb — żołądź i klapowany liść; rośliny — pokarm, tlen, drewno", ua: "дуб — жолудь і лопатевий листок; рослини — пожива, кисень, деревина" } },
          { id: "b", label: { pl: "brzoza — szyszka jak u sosny; rośliny nic nie dają", ua: "береза — шишка, як у сосни; рослини нічого не дають" } },
          { id: "c", label: { pl: "buk — igły; mech ma żołądź", ua: "бук — хвоя; мох має жолудь" } }
        ],
        answer: "a",
        explanation: {
          pl: "Brzoza ma białą korę i drobne skrzydełka nasion, nie szyszkę. Buk — liście i orzeszki.",
          ua: "Береза має білу кору і дрібні крильця насіння, не шишку. Бук — листки і горішки."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Zapamiętaj", ua: "Запам’ятай" },
      visual: vizGh("L34_Rozpoznajemy_grupy_roslin", "l34-zacznijmy.png", {
        alt: { pl: "Cztery grupy roślin", ua: "Чотири групи рослин" },
        title: { pl: "Mech, paproć, szyszka, kwiat. Cztery szufladki.", ua: "Мох, папороть, шишка, квітка. Чотири шухляди." },
        prompt: { pl: "Istniejący kolaż lekcji 34: cztery grupy roślin." }
      }),
      text: {
        pl: [
          "Mech: chwytniki, puszka. Paproć: korzenie, kupki.",
          "Nagonasienne: nasiona na łusce szyszki. Okrytonasienne: kwiat i owoc.",
          "Rozsiew: wiatr, zwierzęta, woda. Kiełkowanie: woda, powietrze, temperatura.",
          "Dąb, buk, brzoza, klon, lipa. Rośliny: pokarm, tlen, drewno."
        ],
        ua: [
          "Мох: ризоїди, коробочка. Папороть: корені, купки.",
          "Голонасінні: насіння на лусці шишки. Покритонасінні: квітка і плід.",
          "Поширення: вітер, тварини, вода. Проростання: вода, повітря, температура.",
          "Дуб, бук, береза, клен, липа. Рослини: пожива, кисень, деревина."
        ]
      }
    },
    {
      type: "review",
      heading: { pl: "Przed szkolnym sprawdzianem", ua: "Перед шкільною перевіркою" },
      items: [
        { pl: "Jeśli coś było trudne — wróć do lekcji 25–34.", ua: "Якщо щось було важко — повернись до уроків 25–34." },
        { pl: "Potrafię wrzucić nieznaną roślinę do jednej z czterech grup.", ua: "Можу покласти невідому рослину в одну з чотирьох груп." },
        { pl: "Potrafię odróżnić zarodnik od nasiona i szyszkę od owocu.", ua: "Можу відрізнити спору від насінини і шишку від плоду." },
        { pl: "Potrafię rozpoznać kilka drzew liściastych i podać znaczenie roślin.", ua: "Можу розпізнати кілька листяних дерев і назвати значення рослин." },
        { pl: "To koniec klasy 5 z biologii roślin — nie ma lekcji 35.", ua: "Це кінець 5 класу з біології рослин — уроку 35 немає." }
      ]
    }
  ]
};
