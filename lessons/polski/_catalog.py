# -*- coding: utf-8 -*-
"""Draft TOC + teaching notes for Między nami, klasa 5 (nr 867/2/2018)."""

CHAPTERS = [
    ("dziwny-ten-swiat", "I", "Dziwny ten świat", "Дивний цей світ"),
    ("gdzie-stopy-nasze", "II", "Gdzie stopy nasze", "Куди ступають наші стопи"),
    ("swiat-ludzkich-spraw", "III", "Świat ludzkich spraw", "Світ людських справ"),
    ("tworca-i-dzielo", "IV", "Twórca i dzieło", "Творець і твір"),
]


def T(pl, ua):
    return {"pl": pl, "ua": ua}


def goals(*pairs):
    return [T(a, b) for a, b in pairs]


def concept(h_pl, h_ua, pl, ua):
    return {"h": T(h_pl, h_ua), "pl": pl, "ua": ua}


def choice(n, q_pl, q_ua, opts, ans, why_pl, why_ua, hint_pl=None, hint_ua=None):
    letters = "abcde"
    return {
        "id": "p%02d-check" % n,
        "type": "single-choice",
        "level": "A",
        "question": T(q_pl, q_ua),
        "options": [{"id": letters[i], "label": T(p, u)} for i, (p, u) in enumerate(opts)],
        "answer": ans,
        "hint": T(hint_pl or "Wraca do definicji z lekcji.", hint_ua or "Повернись до означення з уроку."),
        "explanation": T(why_pl, why_ua),
    }


def fill(n, q_pl, q_ua, answers, why_pl, why_ua, hint_pl=None, hint_ua=None):
    return {
        "id": "p%02d-write" % n,
        "type": "input-text",
        "level": "B",
        "question": T(q_pl, q_ua),
        "answer": answers,
        "hint": T(hint_pl or "Jedno słowo z lekcji.", hint_ua or "Одне слово з уроку."),
        "explanation": T(why_pl, why_ua),
    }


def oral(n, prompt_pl, prompt_ua, q_pl, q_ua, opts, ans, why_pl, why_ua):
    letters = "abc"
    return {
        "prompt": T(prompt_pl, prompt_ua),
        "pl": ["Powiedz na głos 2–3 zdania, potem wybierz podsumowanie."],
        "ua": ["Скажи вголос 2–3 речення, потім вибери підсумок."],
        "task": {
            "id": "p%02d-oral" % n,
            "type": "single-choice",
            "level": "B",
            "question": T(q_pl, q_ua),
            "options": [{"id": letters[i], "label": T(p, u)} for i, (p, u) in enumerate(opts)],
            "answer": ans,
            "hint": T("To samo, co mówiłeś na głos.", "Те саме, що казав уголос."),
            "explanation": T(why_pl, why_ua),
        },
    }


def wrong(claim_pl, claim_ua, pl, ua):
    return {"claim": T(claim_pl, claim_ua), "pl": pl, "ua": ua}


def L(n, page, ch, slug, title, formula, intro_h, intro, g, teach, chs, fil, wr, ora, rem):
    return {
        "n": n,
        "page": page,
        "ch": ch,
        "id": slug,
        "title": T(*title),
        "formula": formula,
        "intro_h": T(*intro_h),
        "intro_pl": intro[0],
        "intro_ua": intro[1],
        "goals": g,
        "teach": teach,
        "choice": chs,
        "fill": fil,
        "wrong": wr,
        "oral": ora,
        "remember": rem,
    }


CH1 = "dziwny-ten-swiat"
CH2 = "gdzie-stopy-nasze"
CH3 = "swiat-ludzkich-spraw"
CH4 = "tworca-i-dzielo"

LESSONS = [
    L(
        1, 8, CH1, "sytuacja-komunikacyjna",
        ("Sytuacja komunikacyjna", "Комунікативна ситуація"),
        "kto? do kogo? po co?",
        ("Żeby się zrozumieć", "Щоб зрозуміти одне одного"),
        (
            [
                "Rozmowa to nie tylko słowa. Liczy się, **kto** mówi, **do kogo**, **gdzie** i **po co**.",
                "Dziś: sytuacja komunikacyjna i to, co widać bez słów — gest, mimika, postawa.",
            ],
            [
                "Розмова — це не лише слова. Важливо, **хто** говорить, **до кого**, **де** і **навіщо**.",
                "Сьогодні: комунікативна ситуація і те, що видно без слів — жест, міміка, постава.",
            ],
        ),
        goals(
            ("nazwać elementy sytuacji komunikacyjnej", "назвати елементи комунікативної ситуації"),
            ("odróżnić nadawcę od odbiorcy", "відрізнити адресанта від адресата"),
            ("podać przykład gestu lub mimiki", "навести приклад жесту або міміки"),
        ),
        [
            concept(
                "Z czego składa się rozmowa?",
                "З чого складається розмова?",
                [
                    "**Sytuacja komunikacyjna** to okoliczności wypowiedzi: nadawca, odbiorca, miejsce, czas, cel.",
                    "**Nadawca** mówi lub pisze. **Odbiorca** słucha albo czyta.",
                    "Ten sam komunikat brzmi inaczej na boisku i w gabinecie dyrektora.",
                ],
                [
                    "**Комунікативна ситуація** — обставини висловлювання: адресант, адресат, місце, час, мета.",
                    "**Адресант** говорить або пише. **Адресат** слухає або читає.",
                    "Той самий текст звучить інакше на полі і в кабінеті директора.",
                ],
            ),
            concept(
                "Bez słów też coś mówimy",
                "Без слів теж щось кажемо",
                [
                    "Komunikacja **niewerbalna**: gest, mimika, postawa ciała, odległość.",
                    "Kiwnięcie głową może znaczyć „tak”, ale w innej kulturze — coś innego. W szkole patrzymy na kontekst.",
                ],
                [
                    "**Невербальна** комунікація: жест, міміка, постава, відстань.",
                    "Кивок може значити «так», але в іншій культурі — щось інше. У школі дивимось на контекст.",
                ],
            ),
        ],
        choice(1, "Co należy do sytuacji komunikacyjnej?", "Що входить до комунікативної ситуації?",
               [("Nadawca, odbiorca, cel i miejsce rozmowy", "Адресант, адресат, мета і місце розмови"),
                ("Tylko liczba liter w wyrazie", "Лише кількість літер у слові"),
                ("Tylko rym w wierszu", "Лише рима у вірші")],
               "a", "Sytuacja = kto, do kogo, gdzie, po co.", "Ситуація = хто, до кого, де, навіщо."),
        fill(1, "Jak nazywamy osobę, która mówi lub pisze?", "Як називаємо особу, яка говорить або пише?",
             ["nadawca", "адресант"],
             "Nadawca (adresant) tworzy komunikat.", "Адресант (nadawca) творить повідомлення."),
        wrong("„Wystarczy znać słowa. Gest i mimika nic nie znaczą.”",
              "«Достатньо знати слова. Жест і міміка нічого не значать.»",
              ["To błąd. Komunikacja niewerbalna pomaga albo przeszkadza w odbiorze."],
              ["Це помилка. Невербальна комунікація допомагає або заважає сприйняттю."]),
        oral(1, "Opowiedz krótką sytuację: kto do kogo mówi i po co.",
             "Розкажи коротку ситуацію: хто до кого говорить і навіщо.",
             "Które zdanie dobrze opisuje sytuację komunikacyjną?",
             "Яке речення добре описує комунікативну ситуацію?",
             [("Lekarz mówi do pacjenta w gabinecie, żeby wyjaśnić wynik badania",
               "Лікар говорить до пацієнта в кабінеті, щоб пояснити результат обстеження"),
              ("Rzeczownik zawsze stoi na końcu zdania", "Іменник завжди стоїть у кінці речення"),
              ("Apostrofa to znak przestankowy w matematyce", "Апострофа — розділовий знак у математиці")],
             "a", "Trzeba wskazać osoby, miejsce i cel.", "Треба вказати осіб, місце і мету."),
        [
            ("Sytuacja komunikacyjna to: kto mówi, do kogo, gdzie, kiedy i po co.",
             ["Sytuacja komunikacyjna", "kto", "do kogo", "po co"],
             "Комунікативна ситуація: хто говорить, до кого, де, коли і навіщо.",
             ["Комунікативна ситуація", "хто", "до кого", "навіщо"]),
            ("Nadawca tworzy komunikat, odbiorca go odbiera. Pomagają też gest, mimika i postawa.",
             ["Nadawca", "odbiorca", "gest", "mimika"],
             "Адресант творить повідомлення, адресат його сприймає. Допомагають також жест, міміка і постава.",
             ["Адресант", "адресат", "жест", "міміка"]),
        ],
    ),
    L(
        2, 10, CH1, "apostrofa",
        ("Apostrofa", "Апострофа"),
        "O + wołacz",
        ("Wołanie w wierszu", "Звертання у вірші"),
        (
            [
                "Wiersz potrafi **wołać**: gwiazdę, rzekę, nieobecną osobę.",
                "To nie znak ' w alfabecie. **Apostrofa** to zwrot do kogoś lub czegoś.",
            ],
            [
                "Вірш уміє **кликати**: зорю, річку, відсутню особу.",
                "Це не знак ' в абетці. **Апострофа** — звертання до когось або чогось.",
            ],
        ),
        goals(
            ("rozpoznać apostrofę w zdaniu", "розпізнати апострофу в реченні"),
            ("odróżnić apostrofę od zwykłego opisu", "відрізнити апострофу від звичайного опису"),
            ("ułożyć własny krótki zwrot", "скласти власне коротке звертання"),
        ),
        [
            concept("Co to jest apostrofa?", "Що таке апострофа?",
                    ["**Apostrofa** to bezpośredni zwrot do osoby, rzeczy, pojęcia albo zjawiska.",
                     "Często zaczyna się od **O** i używa wołacza: O rzeko!, Przyjacielu!",
                     "W podręczniku ćwiczysz to na wierszu Jana Lechonia «Preludium»."],
                    ["**Апострофа** — пряме звертання до особи, речі, поняття або явища.",
                     "Часто починається з **O** і має кличний відмінок: O rzeko!, Przyjacielu!",
                     "У підручнику це на вірші Яна Лехоня «Preludium»."]),
            concept("Po co poeta woła?", "Навіщо поет кличе?",
                    ["Apostrofa zbliża mówiącego do tego, co woła — nawet jeśli to gwiazda albo cisza.",
                     "To środek stylistyczny, nie błąd „rozmowy z przedmiotem”."],
                    ["Апострофа наближає мовця до того, кого кличе — навіть якщо це зоря чи тиша.",
                     "Це стилістичний засіб, а не помилка «розмови з предметом»."]),
        ],
        choice(2, "Które zdanie zawiera apostrofę?", "Яке речення містить апострофу?",
               [("Słońce grzeje dach.", "Сонце гріє дах."),
                ("O słońce, ogrzej nas!", "О сонце, зігрій нас!"),
                ("Autor opisuje pogodę.", "Автор описує погоду.")],
               "b", "Wołanie do słońca = apostrofa.", "Звертання до сонця = апострофа."),
        fill(2, "Jak nazywa się zwrot do kogoś lub czegoś w utworze?", "Як називається звертання до когось або чогось у творі?",
             ["apostrofa", "апострофа"],
             "Apostrofa.", "Апострофа."),
        wrong("„Apostrofa to tylko apostrof w wyrazie: ktoś'.”",
              "«Апострофа — це лише апостроф у слові: ktoś'.»",
              ["W klasie 5 apostrofa na lekcji polskiego to zwrot w tekście, nie znak w alfabecie."],
              ["У 5 класі апострофа на уроці польської — звертання в тексті, не знак в абетці."]),
        oral(2, "Powiedz na głos apostrofę do książki albo do rzeki.",
             "Скажи вголос апострофу до книжки або до річки.",
             "Która wypowiedź to apostrofa?",
             "Яке висловлювання є апострофою?",
             [("Książko, otwórz mi inny świat!", "Книжко, відкрий мені інший світ!"),
              ("Książka leży na stole.", "Книжка лежить на столі."),
              ("Lubię czytać książki.", "Люблю читати книжки.")],
             "a", "Wołacz i zwrot do książki.", "Кличний відмінок і звертання до книжки."),
        [
            ("Apostrofa to zwrot do osoby, rzeczy lub zjawiska w utworze.",
             ["Apostrofa", "zwrot"],
             "Апострофа — звертання до особи, речі або явища у творі.",
             ["Апострофа", "звертання"]),
            ("Często używa wołacza i wykrzyknika: O rzeko!",
             ["wołacza", "O rzeko"],
             "Часто має кличний відмінок і знак оклику: O rzeko!",
             ["кличний", "O rzeko"]),
        ],
    ),
    L(
        3, 14, CH1, "tekst-popularnonaukowy",
        ("Tekst popularnonaukowy", "Науково-популярний текст"),
        "fakt ≠ opinia",
        ("Czytamy o kosmosie", "Читаємо про космос"),
        (
            [
                "Nie każdy tekst to wiersz. **Tekst popularnonaukowy** tłumaczy fakty prostym językiem.",
                "Uczysz się wybierać informacje i robić krótką notatkę — np. o Ziemi we Wszechświecie.",
            ],
            [
                "Не кожен текст — вірш. **Науково-популярний текст** пояснює факти простою мовою.",
                "Вчишся вибирати інформацію і робити коротку нотатку — напр. про Землю у Всесвіті.",
            ],
        ),
        goals(
            ("odróżnić fakt od opinii", "відрізнити факт від думки"),
            ("wskazać główną myśl akapitu", "вказати головну думку абзацу"),
            ("zrobić krótką notatkę", "зробити коротку нотатку"),
        ),
        [
            concept("Jak czytać taki tekst?", "Як читати такий текст?",
                    ["Szukasz **faktów**: da się sprawdzić. Opinia to czyjeś zdanie.",
                     "Notatka: temat + 2–3 najważniejsze informacje, bez ozdobników."],
                    ["Шукаєш **факти**: можна перевірити. Думка — чиясь оцінка.",
                     "Нотатка: тема + 2–3 найважливіші інформації, без прикрас."]),
        ],
        choice(3, "Które zdanie jest faktem, a nie opinią?", "Яке речення є фактом, а не думкою?",
               [("Księżyc krąży wokół Ziemi", "Місяць обертається навколо Землі"),
                ("Kosmos jest nudny", "Космос нудний"),
                ("Najładniejsza planeta to Ziemia", "Найкрасивіша планета — Земля")],
               "a", "Krążenie Księżyca da się sprawdzić.", "Обертання Місяця можна перевірити."),
        fill(3, "Jak nazywamy krótki zapis najważniejszych informacji z tekstu?",
             "Як називаємо короткий запис найважливішої інформації з тексту?",
             ["notatka", "нотатка", "notatke", "notatkę"],
             "Notatka.", "Нотатка."),
        wrong("„W tekście popularnonaukowym wolno wymyślać liczby, byle ładnie brzmiało.”",
              "«У науково-популярному тексті можна вигадувати числа, аби гарно звучало.»",
              ["Nie. Taki tekst opiera się na faktach. Opinie odróżniasz od danych."],
              ["Ні. Такий текст спирається на факти. Думки відрізняєш від даних."]),
        oral(3, "Powiedz jedną informację o Ziemi i jedną opinię o kosmosie.",
             "Скажи одну інформацію про Землю і одну думку про космос.",
             "Co jest notatką z tekstu popularnonaukowego?",
             "Що є нотаткою з науково-популярного тексту?",
             [("Ziemia krąży wokół Słońca; Księżyc — satelita Ziemi",
               "Земля обертається навколо Сонця; Місяць — супутник Землі"),
              ("Kosmos jest super i tyle", "Космос супер і все"),
              ("O gwiazdo, zaświeć!", "О зоре, засвіти!")],
             "a", "Fakty, krótko, bez ozdób.", "Факти, коротко, без прикрас."),
        [
            ("Tekst popularnonaukowy wyjaśnia wiedzę prostym językiem i opiera się na faktach.",
             ["popularnonaukowy", "faktach"],
             "Науково-популярний текст пояснює знання простою мовою і спирається на факти.",
             ["Науково-популярний", "факти"]),
            ("Notatka zbiera temat i najważniejsze informacje.",
             ["Notatka"],
             "Нотатка збирає тему і найважливішу інформацію.",
             ["Нотатка"]),
        ],
    ),
    L(
        4, 16, CH1, "pisownia-wymienna",
        ("Pisownia wymienna: ó, rz, ż, ch", "Заміна в письмі: ó, rz, ż, ch"),
        "ó→o  rz→r  ż→g  ch→sz",
        ("Sprawdzamy wymianę", "Перевіряємо заміну"),
        (
            [
                "Wiele wyrazów „udaje”, że nie wiadomo, jak je zapisać. Pomaga **wymiana** w rodzinie wyrazów.",
                "ó bywa wymieniane na **o**, rz na **r**, ż na **g**, **dz**, **z**, **ź**, **s**, ch na **sz**.",
            ],
            [
                "Багато слів «удають», ніби не відомо, як їх записати. Допомагає **заміна** в родині слів.",
                "ó інколи міняється на **o**, rz на **r**, ż на **g**, **dz**, **z**, **ź**, **s**, ch на **sz**.",
            ],
        ),
        goals(
            ("wskazać wymianę ó–o, rz–r, ż–g, ch–sz", "вказати заміну ó–o, rz–r, ż–g, ch–sz"),
            ("odróżnić wymienne od niewymiennego", "відрізнити змінне від незмінного"),
            ("sprawdzić wyraz w słowniku, gdy trzeba", "перевірити слово в словнику, коли треба"),
        ),
        [
            concept("Jak sprawdzić ó, rz, ż, ch?", "Як перевірити ó, rz, ż, ch?",
                    ["Szukasz **pokrewnego** wyrazu: góra → góra / góry / **górzysty**? Lepiej: **góra** — **góra**… **mróz** → **mrozu** (ó→o).",
                     "**Rzeka** → **rzeka** / **rzeczka**; sprawdzasz, czy jest **r**: **morze** → **morski**? Tu rz niewymienne bywa wyjątkiem — to następna lekcja.",
                     "Przykłady wymiany: **mróz–mrozu**, **może–mogę**, **mucha–musze** (ch–sz)."],
                    ["Шукаєш **споріднене** слово: **mróz** → **mrozu** (ó→o).",
                     "**może** → **mogę** (ż→g). **mucha** → **musze** (ch–sz).",
                     "Якщо родини немає — słownik ortograficzny."]),
        ],
        choice(4, "Która para pokazuje wymianę ó → o?", "Яка пара показує заміну ó → o?",
               [("król – królowa", "król – królowa"),
                ("mróz – mrozu", "mróz – mrozu"),
                ("rzecz – rzeczka", "rzecz – rzeczka")],
               "b", "mróz / mrozu: ó wymienia się na o.", "mróz / mrozu: ó міняється на o."),
        fill(4, "Na jaką literę często wymieniamy ó w pokrewnym wyrazie? (jedna litera)",
             "На яку літеру часто міняємо ó в спорідненому слові? (одна літера)",
             ["o"], "ó → o, np. mróz – mrozu.", "ó → o, напр. mróz – mrozu."),
        wrong("„Jeśli nie znam wymiany, zgaduję albo stawiam h, bo ładniej wygląda.”",
              "«Якщо не знаю заміни, вгадую або ставлю h, бо гарніше виглядає.»",
              ["Nie zgadujemy. Szukamy rodziny wyrazów albo słownika."],
              ["Не вгадуємо. Шукаємо родину слів або словник."]),
        oral(4, "Podaj na głos jedną parę z wymianą (np. mróz – mrozu).",
             "Назви вголос одну пару із заміною (напр. mróz – mrozu).",
             "Która zasada jest poprawna?",
             "Яке правило правильне?",
             [("Szukam wyrazu pokrewnego i sprawdzam wymianę",
               "Шукаю споріднене слово і перевіряю заміну"),
              ("Zawsze piszę u, nigdy ó", "Завжди пишу u, ніколи ó"),
              ("ch i h to to samo, losuję", "ch і h — те саме, кидаю жереб")],
             "a", "Wymiana w rodzinie wyrazów.", "Заміна в родині слів."),
        [
            ("Pisownię ó, rz, ż, ch często sprawdzamy wymianą w wyrazach pokrewnych.",
             ["wymianą", "pokrewnych"],
             "Написання ó, rz, ż, ch часто перевіряємо заміною в споріднених словах.",
             ["заміною", "споріднених"]),
            ("Typowe wymiany: ó→o, rz→r, ż→g (także dz, z, ź, s), ch→sz.",
             ["ó→o", "rz→r", "ż→g", "ch→sz"],
             "Типові заміни: ó→o, rz→r, ż→g (також dz, z, ź, s), ch→sz.",
             ["ó→o", "rz→r", "ż→g", "ch→sz"]),
        ],
    ),
    L(
        5, 18, CH1, "podmiot-liryczny",
        ("Podmiot liryczny", "Ліричний суб’єкт"),
        "ja ≠ autor",
        ("Kto mówi w wierszu?", "Хто говорить у вірші?"),
        (
            [
                "W wierszu ktoś mówi „ja” — ale to nie zawsze poeta z dowodu osobistego.",
                "**Podmiot liryczny** to osoba mówiąca w utworze. Autora odróżniamy od tej roli.",
            ],
            [
                "У вірші хтось каже «я» — але це не завжди поет з паспорта.",
                "**Ліричний суб’єкт** — особа, яка говорить у творі. Автора відрізняємо від цієї ролі.",
            ],
        ),
        goals(
            ("odróżnić autora od podmiotu lirycznego", "відрізнити автора від ліричного суб’єкта"),
            ("wskazać, kto mówi w wierszu", "вказати, хто говорить у вірші"),
            ("nazwać nastrój wypowiedzi", "назвати настрій висловлювання"),
        ),
        [
            concept("Autor i osoba mówiąca", "Автор і особа, яка говорить",
                    ["**Autor** napisał tekst. **Podmiot liryczny** to głos wewnątrz wiersza.",
                     "Czasem podmiot jest bliski autorowi, ale nie musimy tego zakładać.",
                     "W podręczniku: wiersz Antoniego Wica «Noc»."],
                    ["**Автор** написав текст. **Ліричний суб’єкт** — голос усередині вірша.",
                     "Інколи суб’єкт близький до автора, але цього не треба припускати.",
                     "У підручнику: вірш Антонія Віца «Noc»."]),
        ],
        choice(5, "Kim jest podmiot liryczny?", "Хто такий ліричний суб’єкт?",
               [("Zawsze nauczyciel od polskiego", "Завжди вчитель польської"),
                ("Osoba mówiąca w wierszu, niekoniecznie autor",
                 "Особа, яка говорить у вірші, не обов’язково автор"),
                ("Tytuł książki", "Назва книжки")],
               "b", "Głos w utworze ≠ biografia autora.", "Голос у творі ≠ біографія автора."),
        fill(5, "Jak nazywamy osobę mówiącą w wierszu? (dwa słowa)",
             "Як називаємо особу, яка говорить у вірші? (два слова)",
             ["podmiot liryczny", "podmiot", "ліричний суб’єкт", "суб’єкт"],
             "Podmiot liryczny.", "Ліричний суб’єкт."),
        wrong("„Jeśli w wierszu jest «ja», to na pewno autor opowiada o swoim wczorajszym dniu.”",
              "«Якщо у вірші є «я», то точно автор розповідає про свій учорашній день.»",
              ["«Ja» należy do podmiotu lirycznego. To rola w tekście."],
              ["«Я» належить ліричному суб’єкту. Це роль у тексті."]),
        oral(5, "Powiedz, czym różni się autor od podmiotu lirycznego.",
             "Скажи, чим автор відрізняється від ліричного суб’єкта.",
             "Które zdanie jest najtrafniejsze?",
             "Яке речення найточніше?",
             [("Autor pisze utwór; podmiot liryczny mówi wewnątrz wiersza",
               "Автор пише твір; ліричний суб’єкт говорить усередині вірша"),
              ("To zawsze ta sama osoba z dokumentu", "Це завжди та сама особа з документа"),
              ("Podmiot liryczny to rym na końcu wersu", "Ліричний суб’єкт — рима в кінці рядка")],
             "a", "Pisarz vs głos w tekście.", "Письменник проти голосу в тексті."),
        [
            ("Podmiot liryczny to osoba mówiąca w wierszu.",
             ["Podmiot liryczny"],
             "Ліричний суб’єкт — особа, яка говорить у вірші.",
             ["Ліричний суб’єкт"]),
            ("Autora utworu odróżniamy od podmiotu: «ja» w wierszu to rola, nie dowód osobisty.",
             ["Autora", "roli"],
             "Автора твору відрізняємо від суб’єкта: «я» у вірші — роль, не паспорт.",
             ["Автора", "роль"]),
        ],
    ),
]

from _catalog_more import MORE  # noqa: E402
from _catalog_rest import REST  # noqa: E402

LESSONS.extend(MORE)
LESSONS.extend(REST)

