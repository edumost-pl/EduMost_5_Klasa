function em(text) {
  return { text: text, emphasis: true };
}

var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";

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
      formula: "s. 60–61  ·  Lekcja 29  ·  7 przypadków",
      promptPlace: "before",
      prompt: {
        pl: "To sprawdzian na koniec. Polski pierwszy. Włącz 🇺🇦. Dziś *most*: ukraińskie 7 відмінків = polskie 7 przypadków. Uczymy pytań i czterech pierwszych przypadków: *Mianownik, Dopełniacz, Celownik, Biernik*. Rodzaj: *ten / ta / to*. Narzędnik, miejscownik, wołacz — lekcja 30. *Nie* z rzeczownikami — lekcja 31.",
        ua: "Це перевірка наприкінці. Польська перша. Увімкни 🇺🇦. Сьогодні *міст*: українські 7 відмінків = польські 7 przypadków. Питання і перші чотири: *Mianownik, Dopełniacz, Celownik, Biernik*. Рід: *ten / ta / to*. Решта — урок 30. *Nie* з іменниками — урок 31."
      },
      items: [
        { pl: "powiem, że polski rzeczownik ma *7 przypadków* — jak ukraiński;", ua: "скажу, що польський іменник має *7 відмінків* — як український;" },
        { pl: "do *M, D, C, B* dobiorę polskie *pytania*;", ua: "до *M, D, C, B* доберу польські *питання*;" },
        { pl: "wskażę *formę podstawową* (mianownik liczby pojedynczej);", ua: "вкажу *основну форму* (називний однини);" },
        { pl: "określę *rodzaj*: ten / ta / to.", ua: "визначу *рід*: ten / ta / to." }
      ],
      task: {
        id: "t29-s01-umiem",
        type: "multiple-choice",
        question: {
          pl: "Co po tej lekcji musisz umieć NA PEWNO? Zaznacz wszystkie pewne.",
          ua: "Що після уроку маєш вміти НАПЕВНО? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Nazwać 7 przypadków i pytania do M, D, C, B.", ua: "Назвати 7 відмінків і питання до M, D, C, B." } },
          { id: "b", label: { pl: "Określić rodzaj: ten uczeń, ta pielęgniarka, to dziecko.", ua: "Визначити рід: ten uczeń, ta pielęgniarka, to dziecko." } },
          { id: "c", label: { pl: "Od razu napisać dyktando nie z rzeczownikami.", ua: "Одразу написати диктант nie з іменниками." } },
          { id: "d", label: { pl: "Wskazać formę ze słownika (mianownik lp.).", ua: "Вказати форму зі словника (називний однини)." } }
        ],
        answer: ["a", "b", "d"],
        hint: {
          pl: "Pisownia nie i oboczność — lekcja 31, s. 62–63.",
          ua: "Правопис nie і чергування — урок 31, с. 62–63."
        },
        explanation: {
          pl: "Dziś: 7 nazw, pytania M–B, rodzaj, forma podstawowa. Narzędnik i e-mail — 30. Nie — 31.",
          ua: "Сьогодні: 7 назв, питання M–B, рід, основна форма. Орудний і e-mail — 30. Nie — 31."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Most · 7 = 7", ua: "Міст · 7 = 7" },
      formula: "s. 60–61  ·  przypomnienie",
      promptPlace: "before",
      prompt: {
        pl: "To *nie* Helios i nie synonimy. Cykl: *„Listy z podróży z gramatyką w tle”*. Dobry news: w ukraińskim też jest *7 відмінків*. Nie uczysz się nowego świata — tylko *polskich pytań* i *polskich końcówek*. Obrazek jest mapą. Dokładne nazwy — w liście pod spodem (na obrazku bywają literówki).",
        ua: "Це *не* Геліос і не синоніми. Цикл: *„Listy z podróży z gramatyką w tle”*. Добра новина: в українській теж *7 відмінків*. Ти не вчиш новий світ — лише *польські питання* і *польські закінчення*. Малюнок — мапа. Точні назви — в списку (на малюнку інколи є друкарські помилки)."
      },
      visual: vizGh("t29-most.png", {
        prompt: "Infografika: 7 przypadków PL = 7 відмінків UA. Etykiety po polsku i ukraińsku.",
        alt: { pl: "Siedem przypadków polskich obok siedmiu ukraińskich відмінків.", ua: "Сім польських відмінків поруч із сімома українськими." }
      }),
      items: [
        { pl: "*1. Mianownik* — kto? co? — *називний*. Forma ze *słownika*.", ua: "*1. Mianownik* — kto? co? — *називний*. Форма зі *словника*." },
        { pl: "*2. Dopełniacz* — kogo? czego? — *родовий*. Często: nie ma, brak, bez.", ua: "*2. Dopełniacz* — kogo? czego? — *родовий*. Часто: не має, брак, без." },
        { pl: "*3. Celownik* — komu? czemu? — *давальний*. Daję, dziękuję, przyglądam się.", ua: "*3. Celownik* — komu? czemu? — *давальний*. Даю, дякую, придивляюсь." },
        { pl: "*4. Biernik* — kogo? co? — *знахідний*. Widzę, lubię, mam.", ua: "*4. Biernik* — kogo? co? — *знахідний*. Бачу, люблю, маю." },
        { pl: "*5. Narzędnik* — (z) kim? (z) czym? — *орудний*. Jutro.", ua: "*5. Narzędnik* — (z) kim? (z) czym? — *орудний*. Завтра." },
        { pl: "*6. Miejscownik* — (o) kim? (o) czym? — *місцевий*. Zawsze z przyimkiem. Jutro.", ua: "*6. Miejscownik* — (o) kim? (o) czym? — *місцевий*. Завжди з прийменником. Завтра." },
        { pl: "*7. Wołacz* — o! — *кличний*. Wołamy kogoś. Jutro.", ua: "*7. Wołacz* — o! — *кличний*. Кличемо когось. Завтра." }
      ],
      task: {
        id: "t29-s02-most",
        type: "true-false",
        question: {
          pl: "Polski ma 7 przypadków, ukraiński ma inny zestaw (np. tylko 4). Prawda czy fałsz?",
          ua: "Польська має 7 відмінків, українська — інший набір (наприклад лише 4). Правда чи ні?"
        },
        answer: false,
        hint: {
          pl: "Policz: nazywny, rodowy, dawalny, znajidny, orudny, miscewy, klyczny.",
          ua: "Полічи: називний, родовий, давальний, знахідний, орудний, місцевий, кличний."
        },
        explanation: {
          pl: "Fałsz. *7 = 7*. Most jest gotowy. Różnica: pytania i końcówki, nie liczba przypadków.",
          ua: "Ні. *7 = 7*. Міст готовий. Різниця: питання і закінчення, не кількість відмінків."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Mianownik · kto? co?", ua: "Називний · kto? co?" },
      formula: "s. 61  ·  forma podstawowa",
      promptPlace: "before",
      prompt: {
        pl: "Mianownik to *punkt startu*. W słowniku stoi: *piasek*, *uczeń*, *burza* — zawsze mianownik liczby pojedynczej. Pytamy: *kto?* (osoba, zwierzę) albo *co?* (rzecz, zjawisko). Po ukraińsku: *хто? що?* — te same pytania.",
        ua: "Називний — *точка старту*. У словнику стоїть: *piasek*, *uczeń*, *burza* — завжди називний однини. Питаємо: *kto?* (особа, тварина) або *co?* (річ, явище). Українською: *хто? що?* — ті самі питання."
      },
      visual: vizGh("t29-mianownik.png", {
        prompt: "Dziecko pokazuje piasek. Etykieta: kto? co?",
        alt: { pl: "Dziecko wskazuje miskę piasku. Pytanie: kto? co?", ua: "Дитина вказує на миску піску. Питання: kto? co?" }
      }),
      text: {
        pl: [
          "To jest *piasek*. (co?) *piasek* — mianownik, liczba pojedyncza, rodzaj męski.",
          "To jest *uczeń*. (kto?) *uczeń*.",
          "Forma podstawowa = ta, której szukasz w *słowniku*."
        ],
        ua: [
          "Це *piasek*. (co?) *piasek* — називний, однина, чоловічий рід.",
          "Це *uczeń*. (kto?) *uczeń*.",
          "Основна форма = та, яку шукаєш у *словнику*."
        ]
      },
      task: {
        id: "t29-s03-mianownik",
        type: "single-choice",
        question: {
          pl: "Która forma to mianownik liczby pojedynczej wyrazu *piasek* (hasło ze słownika)?",
          ua: "Яка форма — називний однини слова *piasek* (стаття зі словника)?"
        },
        options: [
          { id: "a", label: { pl: "piasek", ua: "piasek" } },
          { id: "b", label: { pl: "piasku", ua: "piasku" } },
          { id: "c", label: { pl: "piaskiem", ua: "piaskiem" } }
        ],
        answer: "a",
        hint: {
          pl: "Słownik nie zaczyna od piasku ani od piaskiem.",
          ua: "Словник не починається з piasku чи piaskiem."
        },
        explanation: {
          pl: "*piasek* = M lp. *piasku* to D albo Ms. *piaskiem* to Narzędnik (lekcja 30).",
          ua: "*piasek* = називний однини. *piasku* — родовий або місцевий. *piaskiem* — орудний (урок 30)."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Dopełniacz · kogo? czego?", ua: "Родовий · kogo? czego?" },
      formula: "s. 61",
      promptPlace: "before",
      prompt: {
        pl: "Dopełniacz lubi *brak* i *nie*. Nie ma (czego?) *piasku*. Potrzebuję (czego?) *piasku*. Bez (kogo?) *ucznia*. Po ukraińsku: *кого? чого?* — znowu most. Pułapka: końcówka jest *polska* (*piasku*, nie *піску* w polskim zdaniu).",
        ua: "Родовий любить *брак* і *не*. Немає (czego?) *piasku*. Потрібен (czego?) *piasku*. Без (kogo?) *ucznia*. Українською: *кого? чого?* — знову міст. Пастка: закінчення *польське* (*piasku*, не *піску* в польському реченні)."
      },
      visual: vizGh("t29-dopelniacz.png", {
        prompt: "Pusta miska. Etykieta: kogo? czego? nie ma piasku.",
        alt: { pl: "Pusta miska — nie ma piasku. Pytanie: kogo? czego?", ua: "Порожня миска — немає піску. Питання: kogo? czego?" }
      }),
      items: [
        { pl: "Nie ma (czego?) *piasku*.", ua: "Немає (чого?) *piasku*." },
        { pl: "Szklanka (czego?) *wody*.", ua: "Склянка (чого?) *wody*." },
        { pl: "Nie było (kogo?) *ludzi*.", ua: "Не було (кого?) *ludzi*." }
      ],
      task: {
        id: "t29-s04-dopelniacz",
        type: "single-choice",
        question: {
          pl: "Nie ma (czego?) ______. Która forma to dopełniacz?",
          ua: "Nie ma (czego?) ______. Яка форма — родовий?"
        },
        options: [
          { id: "a", label: { pl: "piasek", ua: "piasek" } },
          { id: "b", label: { pl: "piasku", ua: "piasku" } },
          { id: "c", label: { pl: "piasekowi", ua: "piasekowi (to nie jest polska forma)" } }
        ],
        answer: "b",
        hint: {
          pl: "Po nie ma stawiamy dopełniacz. Pytanie: czego?",
          ua: "Після nie ma ставимо родовий. Питання: czego?"
        },
        explanation: {
          pl: "*Nie ma piasku.* *piasek* to mianownik. *piasekowi* brzmi jak ukraiński давальний — w polskim celownik to *piaskowi*.",
          ua: "*Nie ma piasku.* *piasek* — називний. *piasekowi* звучить як український давальний — польський цельник: *piaskowi*."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Celownik · komu? czemu?", ua: "Давальний · komu? czemu?" },
      formula: "s. 61",
      promptPlace: "before",
      prompt: {
        pl: "Celownik to *komu dajesz, komu dziękujesz, komu się przyglądasz*. Pytania: *komu? czemu?* Po ukraińsku: *кому? чому?* Uwaga: ukraińskie *чому?* znaczy też *dlaczego?* — w polskim *czemu?* przy rzeczowniku to *nie* „dlaczego”, tylko „jakiej rzeczy”.",
        ua: "Давальний — *кому даєш, кому дякуєш, кому придивляєшся*. Питання: *komu? czemu?* Українською: *кому? чому?* Увага: українське *чому?* означає ще *чому?/навіщо?* — у польському *czemu?* при іменнику це *не* «чому», а «якій речі»."
      },
      visual: vizGh("t29-celownik.png", {
        prompt: "Dziecko wręcza woreczek piasku koledze. Etykieta: komu? czemu?",
        alt: { pl: "Dziecko daje koledze woreczek piasku. Pytanie: komu? czemu?", ua: "Дитина дає другові мішечок піску. Питання: komu? czemu?" }
      }),
      items: [
        { pl: "Daję (komu?) *koledze* pamiątkę.", ua: "Даю (кому?) *koledze* сувенір." },
        { pl: "Przyglądam się (czemu?) *piaskowi*.", ua: "Придивляюсь (чому?) *piaskowi*." },
        { pl: "Nie dziwiłem się (komu?) *handlarzom*. (e-mail Wiktora, lekcja 30)", ua: "Не дивувався (кому?) *handlarzom*. (e-mail Віктора, урок 30)" }
      ],
      task: {
        id: "t29-s05-celownik",
        type: "single-choice",
        question: {
          pl: "Dziękuję (komu?) nauczycielowi. Jaki to przypadek?",
          ua: "Dziękuję (komu?) nauczycielowi. Який це відмінок?"
        },
        options: [
          { id: "a", label: { pl: "Mianownik (kto? co?)", ua: "Називний (kto? co?)" } },
          { id: "b", label: { pl: "Celownik (komu? czemu?)", ua: "Давальний (komu? czemu?)" } },
          { id: "c", label: { pl: "Biernik (kogo? co?)", ua: "Знахідний (kogo? co?)" } }
        ],
        answer: "b",
        hint: {
          pl: "Słowo dziękuję woła: komu?",
          ua: "Слово dziękuję кличе: komu?"
        },
        explanation: {
          pl: "*nauczycielowi* = celownik. Pytanie *komu?* Most: український давальний (*вчителеві*), ale końcówka polska: *-owi*.",
          ua: "*nauczycielowi* = давальний. Питання *komu?* Міст: український давальний (*вчителеві*), але закінчення польське: *-owi*."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Biernik · kogo? co?", ua: "Знахідний · kogo? co?" },
      formula: "s. 61  ·  pułapka M = B",
      promptPlace: "before",
      prompt: {
        pl: "Biernik to *co widzisz, co lubisz, co masz*. Pytania: *kogo? co?* Po ukraińsku: *кого? що?* Duża pułapka (tak samo w ukraińskim!): gdy rzeczownik męski *nieżywotny* (piasek, stół, hotel) — biernik wygląda *jak mianownik*. *Widzę piasek* = M i B brzmią tak samo. Przy osobie: *widzę ucznia* (nie: *uczeń*).",
        ua: "Знахідний — *що бачиш, що любиш, що маєш*. Питання: *kogo? co?* Українською: *кого? що?* Велика пастка (так само в українській!): коли іменник чоловічий *неістота* (пісок, стіл, готель) — знахідний виглядає *як називний*. *Widzę piasek* = M і B звучать однаково. При особі: *widzę ucznia* (не: *uczeń*)."
      },
      visual: vizGh("t29-biernik.png", {
        prompt: "Dziecko patrzy na burzę piaskową. Etykieta: kogo? co?",
        alt: { pl: "Dziecko widzi burzę piaskową za oknem. Pytanie: kogo? co?", ua: "Дитина бачить піщану бурю за вікном. Питання: kogo? co?" }
      }),
      items: [
        { pl: "Widziałem (co?) *burzę* piaskową. (żywotny? nie — ale *burza* jest *żeńska*, więc B = *burzę*)", ua: "Бачив (що?) *burzę* piaskową. (*burza* — *жіночий*, тому B = *burzę*)" },
        { pl: "Zaczął wiać (co?) *wiatr*. (męski nieżywotny → B = M: *wiatr*)", ua: "Почав віяти (що?) *wiatr*. (чоловічий неістота → B = M: *wiatr*)" },
        { pl: "Lubię (kogo?) *kolegę*. (osoba → inna forma niż mianownik *kolega*)", ua: "Люблю (кого?) *kolegę*. (особа → інша форма, ніж називний *kolega*)" }
      ],
      task: {
        id: "t29-s06-biernik",
        type: "multiple-choice",
        question: {
          pl: "Które zdania NA PEWNO mają biernik? Zaznacz wszystkie pewne.",
          ua: "Які речення НАПЕВНО мають знахідний? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Widziałem burzę piaskową.", ua: "Widziałem burzę piaskową." } },
          { id: "b", label: { pl: "To jest piasek.", ua: "To jest piasek." } },
          { id: "c", label: { pl: "Zaczął wiać wiatr.", ua: "Zaczął wiać wiatr." } },
          { id: "d", label: { pl: "Nie ma piasku.", ua: "Nie ma piasku." } }
        ],
        answer: ["a", "c"],
        hint: {
          pl: "Widzieć i wiać (co?) — biernik. To jest — mianownik. Nie ma — dopełniacz.",
          ua: "Widzieć і wiać (co?) — знахідний. To jest — називний. Nie ma — родовий."
        },
        explanation: {
          pl: "*burzę* = B (żeński). *wiatr* = B, choć wygląda jak M. *To jest piasek* = M. *Nie ma piasku* = D.",
          ua: "*burzę* = знахідний (жіночий). *wiatr* = знахідний, хоч виглядає як називний. *To jest piasek* = називний. *Nie ma piasku* = родовий."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Trzy rodzaje · ten, ta, to", ua: "Три роди · ten, ta, to" },
      formula: "s. 61",
      promptPlace: "before",
      prompt: {
        pl: "Rzeczownik ma *rodzaj*. W polskim sprawdzamy go w *mianowniku liczby pojedynczej* słowami *ten / ta / to* — jak ukraińskie *цей / ця / це*, ale tu mówimy po polsku. *Nie* zgaduj z końcówki w liczbie mnogiej!",
        ua: "Іменник має *рід*. У польській перевіряємо його в *називному однини* словами *ten / ta / to* — як українські *цей / ця / це*, але тут говоримо польською. *Не* вгадуй із закінчення в множині!"
      },
      visual: vizGh("t29-rodzaj.png", {
        prompt: "Trzy karty: ten uczeń, ta pielęgniarka, to dziecko.",
        alt: { pl: "Trzy rodzaje: ten uczeń, ta pielęgniarka, to dziecko.", ua: "Три роди: ten uczeń, ta pielęgniarka, to dziecko." }
      }),
      items: [
        { pl: "*ten uczeń* — rodzaj męski (r.m.) — ukraiński *чоловічий*.", ua: "*ten uczeń* — чоловічий рід (r.m.)." },
        { pl: "*ta pielęgniarka* — rodzaj żeński (r.ż.) — *жіночий*.", ua: "*ta pielęgniarka* — жіночий рід (r.ż.)." },
        { pl: "*to dziecko* — rodzaj nijaki (r.n.) — *середній*. *Dziecko* nie jest „ta”!", ua: "*to dziecko* — середній рід (r.n.). *Dziecko* — не «ta»!" },
        { pl: "Uwaga z podręcznika: *krzesłami* → sprawdzamy lp.: *(to) krzesło* → nijaki.", ua: "Увага з підручника: *krzesłami* → перевіряємо однину: *(to) krzesło* → середній." }
      ],
      task: {
        id: "t29-s07-rodzaj",
        type: "single-choice",
        question: {
          pl: "Jaki rodzaj ma wyraz *dziecko*?",
          ua: "Який рід має слово *dziecko*?"
        },
        options: [
          { id: "a", label: { pl: "męski (ten dziecko)", ua: "чоловічий (ten dziecko)" } },
          { id: "b", label: { pl: "żeński (ta dziecko)", ua: "жіночий (ta dziecko)" } },
          { id: "c", label: { pl: "nijaki (to dziecko)", ua: "середній (to dziecko)" } }
        ],
        answer: "c",
        hint: {
          pl: "Podstaw ten / ta / to przed formą ze słownika.",
          ua: "Постав ten / ta / to перед формою зі словника."
        },
        explanation: {
          pl: "*to dziecko* — nijaki. W ukraińskim też *це дитина*? Nie: *ця дитина* jest żeńska. To ważna różnica! W polskim *dziecko* = r.n.",
          ua: "*to dziecko* — середній. В українській *ця дитина* — жіночий. Це важлива різниця! Польською *dziecko* = середній рід."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Liczba pojedyncza i mnoga", ua: "Однина і множина" },
      formula: "s. 61",
      promptPlace: "before",
      prompt: {
        pl: "Odmiana idzie w dwóch kolumnach: *liczba pojedyncza* (lp.) i *liczba mnoga* (lm.). Jeden piasek — wiele piasków. Pytania przypadków są *te same*, zmienia się forma.",
        ua: "Відмінювання йде у двох колонках: *однина* (lp.) і *множина* (lm.). Один пісок — багато пісків. Питання відмінків *ті самі*, змінюється форма."
      },
      items: [
        { pl: "lp.: *piasek* — jeden, *ten* piasek.", ua: "однина: *piasek* — один, *ten* piasek." },
        { pl: "lm.: *piaski* — wiele, *te* piaski.", ua: "множина: *piaski* — багато, *te* piaski." },
        { pl: "Pełną tabelę *piasek* (7 × 2) wypełnimy na lekcji 30.", ua: "Повну таблицю *piasek* (7 × 2) заповнимо на уроці 30." }
      ],
      task: {
        id: "t29-s08-liczba",
        type: "true-false",
        question: {
          pl: "Forma *piaski* to liczba pojedyncza. Prawda czy fałsz?",
          ua: "Форма *piaski* — однина. Правда чи ні?"
        },
        answer: false,
        hint: {
          pl: "Jeden piasek, dwa…?",
          ua: "Один piasek, два…?"
        },
        explanation: {
          pl: "Fałsz. *piasek* = lp. *piaski* = lm. (mianownik mnogi).",
          ua: "Ні. *piasek* = однина. *piaski* = множина (називний множини)."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Pytania to klucz", ua: "Питання — ключ" },
      formula: "ćwiczenie  ·  M D C B",
      promptPlace: "before",
      prompt: {
        pl: "Zanim odmienisz, *zapytaj*. Najpierw pytanie, potem końcówka. Nie wklejaj ukraińskiej końcówki na polski temat.",
        ua: "Перш ніж відмінювати, *запитай*. Спочатку питання, потім закінчення. Не клеї українське закінчення на польську основу."
      },
      items: [
        { pl: "kto? co? → *Mianownik*", ua: "kto? co? → *називний*" },
        { pl: "kogo? czego? → *Dopełniacz*", ua: "kogo? czego? → *родовий*" },
        { pl: "komu? czemu? → *Celownik*", ua: "komu? czemu? → *давальний*" },
        { pl: "kogo? co? → *Biernik* (uwaga: *kogo?* jak w D, *co?* jak w M)", ua: "kogo? co? → *знахідний* (увага: *kogo?* як у родовому, *co?* як у називному)" }
      ],
      task: {
        id: "t29-s09-pytania",
        type: "single-choice",
        question: {
          pl: "Pytania *komu? czemu?* otwierają który przypadek?",
          ua: "Питання *komu? czemu?* відкривають який відмінок?"
        },
        options: [
          { id: "a", label: { pl: "Dopełniacz", ua: "Родовий" } },
          { id: "b", label: { pl: "Celownik", ua: "Давальний" } },
          { id: "c", label: { pl: "Biernik", ua: "Знахідний" } }
        ],
        answer: "b",
        hint: {
          pl: "Daję — komu?",
          ua: "Даю — кому?"
        },
        explanation: {
          pl: "komu? czemu? = *Celownik*. kogo? czego? = Dopełniacz. kogo? co? = Biernik.",
          ua: "komu? czemu? = *давальний*. kogo? czego? = родовий. kogo? co? = знахідний."
        }
      }
    },
    {
      type: "observe",
      heading: { pl: "Pułapki dla ukraińskojęzycznych", ua: "Пастки для україномовних" },
      formula: "most UA → PL",
      promptPlace: "before",
      prompt: {
        pl: "Most pomaga, ale *nie przenosimy* ukraińskiego zdania 1:1. Trzy stałe pułapki na dziś. Zapisz je w zeszycie.",
        ua: "Міст допомагає, але *не переносимо* українське речення 1:1. Три сталі пастки на сьогодні. Запиши їх у зошит."
      },
      items: [
        { pl: "1. *Końcówki są polskie.* Не *піску* w polskim zeszycie, tylko *piasku*. Не *учню / учневі*, tylko *uczniowi*.", ua: "1. *Закінчення польські.* Не *піску* в польському зошиті, а *piasku*. Не *учню / учневі*, а *uczniowi*." },
        { pl: "2. *Biernik nieżywotny męski = mianownik.* Widzę *hotel*, nie *hotela*. (Jak: бачу готель.)", ua: "2. *Знахідний неістоти чоловічого = називний.* Widzę *hotel*, не *hotela*. (Як: бачу готель.)" },
        { pl: "3. *dziecko* w polskim jest *nijakie* (*to dziecko*), choć po ukraińsku *дитина* jest żeńska.", ua: "3. *dziecko* польською — *середній рід* (*to dziecko*), хоч українською *дитина* — жіночий." }
      ],
      task: {
        id: "t29-s10-pulapki",
        type: "multiple-choice",
        question: {
          pl: "Które zdania są po polsku POPRAWNE? Zaznacz wszystkie pewne.",
          ua: "Які речення польською ПРАВИЛЬНІ? Познач усі певні."
        },
        options: [
          { id: "a", label: { pl: "Widzę hotel.", ua: "Widzę hotel." } },
          { id: "b", label: { pl: "Widzę hotela.", ua: "Widzę hotela." } },
          { id: "c", label: { pl: "Daję uczniowi zeszyt.", ua: "Daję uczniowi zeszyt." } },
          { id: "d", label: { pl: "To jest ta dziecko.", ua: "To jest ta dziecko." } }
        ],
        answer: ["a", "c"],
        hint: {
          pl: "Hotel jest nieżywotny. Dziecko — to, nie ta.",
          ua: "Hotel — неістота. Dziecko — to, не ta."
        },
        explanation: {
          pl: "*Widzę hotel* (B = M). *uczniowi* (celownik polski). *hotela* i *ta dziecko* — błędy z mostu UA.",
          ua: "*Widzę hotel* (B = M). *uczniowi* (польський давальний). *hotela* і *ta dziecko* — помилки з мосту UA."
        }
      }
    },
    {
      type: "summary",
      heading: { pl: "Karta na dziś", ua: "Картка на сьогодні" },
      formula: "lekcja 29  ·  koniec godziny",
      promptPlace: "before",
      prompt: {
        pl: "Koniec *tej* godziny. Zapisz w zeszycie cztery pytania: *kto? co?* · *kogo? czego?* · *komu? czemu?* · *kogo? co?* Lekcja 30 jest *osobnym* lekcją: tam dopiero Narzędnik, miejscownik, wołacz i e-mail Wiktora. Dziś ich *nie* ćwiczymy.",
        ua: "Кінець *цієї* години. Запиши в зошиті чотири питання: *kto? co?* · *kogo? czego?* · *komu? czemu?* · *kogo? co?* Урок 30 — *окремий*: там щойно орудний, місцевий, кличний і e-mail Віктора. Сьогодні їх *не* вправляємо."
      },
      items: [
        { pl: "7 przypadków = 7 відмінків (mapę znasz, pełną tabelę złożysz jutro).", ua: "7 відмінків = 7 відмінків (мапу знаєш, повну таблицю складеш завтра)." },
        { pl: "Dziś pewne: M D C B + *ten / ta / to* + forma ze słownika.", ua: "Сьогодні певні: M D C B + *ten / ta / to* + форма зі словника." },
        { pl: "Pułapka: *Widzę hotel* (B = M). *to dziecko* (nijaki).", ua: "Пастка: *Widzę hotel* (B = M). *to dziecko* (середній рід)." }
      ],
      task: {
        id: "t29-s11-karta",
        type: "single-choice",
        question: {
          pl: "Nie ma (czego?) piasku. Jaki to przypadek — NA PEWNO z dzisiejszej lekcji?",
          ua: "Nie ma (czego?) piasku. Який це відмінок — НАПЕВНО з сьогоднішнього уроку?"
        },
        options: [
          { id: "a", label: { pl: "Dopełniacz (kogo? czego?)", ua: "Родовий (kogo? czego?)" } },
          { id: "b", label: { pl: "Miejscownik ((o) kim? czym?)", ua: "Місцевий ((o) kim? czym?)" } },
          { id: "c", label: { pl: "Narzędnik ((z) kim? czym?)", ua: "Орудний ((z) kim? czym?)" } }
        ],
        answer: "a",
        hint: {
          pl: "Po nie ma stawiamy dopełniacz. Miejscownik i narzędnik — lekcja 30.",
          ua: "Після nie ma ставимо родовий. Місцевий і орудний — урок 30."
        },
        explanation: {
          pl: "*Nie ma piasku* = dopełniacz. To dzisiejsza pewna. Miejscownik i narzędnik zostaw na lekcję 30.",
          ua: "*Nie ma piasku* = родовий. Це сьогоднішня певна. Місцевий і орудний залиш на урок 30."
        }
      }
    }
  ]
};
