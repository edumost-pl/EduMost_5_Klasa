# Документация математического содержания

Документ для автора уроков, программиста и для Cursor/AI, который будет менять математические `content.js`.

Технический контракт плеера — в `docs/PROJECT_TECHNICAL_DOCUMENTATION.md`. Здесь — **педагогическая логика** курса 01–50 *Matematyka z kluczem* (klasa 5) в том виде, в каком она уже собрана в репозитории. История — отдельный контракт: `docs/HISTORIA_CONTENT_DOCUMENTATION.md` (тот же плеер, не копировать этот каркас).

Не выдумывайте новые типы заданий и не ломайте `js/feedback.js` ради одной задачи.

---

## 1. Цель математического курса

Курс даёт ребёнку класса 5a опору, чтобы идти за польским учебником: понять термин, увидеть пример, сделать навык руками, затем применить его в ситуации и проверить себя.

Это не олимпиадный сборник и не курс 7–8 класса. Цель экрана — чтобы после урока ребёнок мог сказать: «это я уже умею», а не «я нащёлкал похожие примеры».

Характеристика готового курса 04–50 (факт структуры `content.js`):

- у всех 50 тем есть `intro`, `goal`, `observe`, `vocabulary`, `summary`, `review`;
- у 49 есть `mistake` (нет у урока 01);
- у 48 есть `problem` и `challenge` (нет у 01 и 02);
- у всех 50 есть блоки `check` («Czy już umiem?»);
- живые задания: `input-number`, `input-text`, `single-choice`, `true-false`.

---

## 2. Класс и образовательная система

- **Класс:** 5 польской школы (szkoła podstawowa).
- **Класс в хабе:** 5a, SP nr 3 Poznań.
- **Учебник:** *Matematyka z kluczem*, Marcin Braun, Agnieszka Mańkowska, Małgorzata Paszyńska, Nowa Era, nr dopuszczenia `875/2/2018`.
- **Оглавление:** `js/curriculum.js`, `tocStatus: "confirmed"`.
- **Языки:** польский — язык школы; украинский — параллельная помощь. В режиме `ua` плеер показывает **оба** текста.

За рамками этого курса (не отдельные темы TOC): NWD как отдельный навык программы 6+, koło/okrąg с π, równania, twierdzenie Pitagorasa, pełny procent как глава. Проценты и масштаб вшиты точечно в уроки 25 и 41, не как отдельные позиции оглавления.

---

## 3. Структура курса

Две части учебника, семь разделов, **50** тем. Номер 01–50 — префикс папки `lessons/matematyka/{nn}-{id}/`. Названия ниже — `title.pl` из `curriculum.js`.

Навыки в таблице — сжатие пунктов `goal.items` соответствующих `content.js`. Уровни: в 04–50 в коде стоят A/B/C; в банке `data/tasks.js` (уроки 01–03) есть также D.

### Część 1 · I. Liczby naturalne

| № | Раздел | Тема | Основные навыки | Уровни | Особенности |
|---|---|---|---|---|---|
| 01 | I Liczby naturalne | Działania pamięciowe | commutatywność dodawania, grupowanie, mnożenie i dzielenie «po kawałku», zera na końcu | A, B, C, D (в `data/tasks.js`) | Эталон. Задания через `taskId`. Нет блоков `problem` / `challenge` / `mistake`. |
| 02 | I Liczby naturalne | Potęgowanie | podstawa, wykładnik, potęga jako iloczyn, zapis `a^n` | A, B, C | Эталон. SVG `power*`. Ввод степени: `7^4` / `7⁴` / иногда `7**4` в массиве `answer`. |
| 03 | I Liczby naturalne | Kolejność wykonywania działań | nawiasy → potęgi → · : → + −, kolejność na tym samym piętrze | A, B, C, D | Эталон. Есть `problem`. SVG `ops-queue`, `expr-pair`. |
| 04 | I Liczby naturalne | Cyfry rzymskie | I V X L C D M, odczyt do 3000, odejmowanie IV/IX/…, niemożliwy zapis | A, B, C | `input-text` для zapisu rzymskiego (`["IV","iv"]`). |
| 05 | I Liczby naturalne | Obliczenia przybliżone | zaokrąglenie do 10/100/1000, oszacowanie, czy wynik ma sens | A, B, C | Szacunek, nie nowa algebra. |
| 06 | I Liczby naturalne | Dodawanie i odejmowanie pisemne | przeniesienie, pożyczka, zero w odjemnej | A, B, C | Algorytm pisemny, nie tylko wynik. |
| 07 | I Liczby naturalne | Mnożenie pisemne | przez 1–2 cyfry, zera na końcu iloczynu | A, B, C | |
| 08 | I Liczby naturalne | Dzielenie i podzielność | a = b·q + r, reszta < dzielnik, cechy 2,3,4,5,9,10,100 | A, B, C | Logika «czy dzieli się». |
| 09 | I Liczby naturalne | Liczby pierwsze i liczby złożone | 1 nie jest pierwsza ani złożona, rozkład na czynniki | A, B, C | Klasyfikacja, nie sito Eratostenesa jako теория 7 класса. |
| 10 | I Liczby naturalne | Dzielenie pisemne | przez 1–2 cyfry, zero w ilorazie, sprawdzenie mnożeniem | A, B, C | |

### Część 1 · II. Figury geometryczne

| № | Раздел | Тема | Основные навыки | Уровни | Особенности |
|---|---|---|---|---|---|
| 11 | II Figury geometryczne | Płaszczyzna, proste i półproste | punkt, prosta, półprosta, odcinek, ∥ | A, B, C | SVG `geo-lines`. Не сводить к арифметике. |
| 12 | II Figury geometryczne | Kąty. Rodzaje kątów | wierzchołek, ramiona, ostry/prosty/rozwarty, kąty przyległe 180° | A, B, C | SVG `angle`. |
| 13 | II Figury geometryczne | Mierzenie kątów | odczyt do 1°, kąty < 180°, skala kątomierza | A, B, C | |
| 14 | II Figury geometryczne | Rodzaje i własności trójkątów | klasyfikacja wg kątów i boków, suma 180° | A, B, C | SVG `triangle`. Есть блок `classification`. |
| 15 | II Figury geometryczne | Własności niektórych trójkątów | równoramienny, równoboczny (60°) | A, B, C | |
| 16 | II Figury geometryczne | Wysokość trójkąta | prostopadła z wierzchołka, trzy wysokości, wysokość na zewnątrz | A, B, C | |
| 17 | II Figury geometryczne | Równoległoboki | boki równoległe, kąty naprzeciwległe, prostokąt/romb/kwadrat | A, B, C | SVG `quad`. Есть блок `classification`. |
| 18 | II Figury geometryczne | Wysokość równoległoboku | wysokość do wybranego boku, para bok–wysokość | A, B, C | Ещё без формулы pola (она в 36). |
| 19 | II Figury geometryczne | Trapezy | jedna para równoległych, podstawy, ramiona | A, B, C | |
| 20 | II Figury geometryczne | Klasyfikacja czworokątów | diagram włączeń, «każdy A jest B», osie symetrii | A, B, C | Есть блок `classification`. |

### Część 1 · III. Ułamki zwykłe

| № | Раздел | Тема | Основные навыки | Уровни | Особенности |
|---|---|---|---|---|---|
| 21 | III Ułamki zwykłe | Ułamek jako część i jako iloraz | licznik, mianownik, część całości, rysunek | A, B, C | SVG `fraction-bar`. Дробь вводится текстом `3/4`. |
| 22 | III Ułamki zwykłe | Rozszerzanie i skracanie ułamków | ×/∶ tę samą liczbę, równe ułamki | A, B, C | Validator **не** сокращает сам: в `answer` перечислите допустимые записи. |
| 23 | III Ułamki zwykłe | Dodawanie i odejmowanie ułamków o tych samych mianownikach | +/−, liczby mieszane | A, B, C | Смешанные: `["3/2","1 1/2"]`. |
| 24 | III Ułamki zwykłe | Dodawanie i odejmowanie ułamków o różnych mianownikach | wspólny mianownik | A, B, C | |
| 25 | III Ułamki zwykłe | Mnożenie ułamka przez liczbę naturalną. Ułamek liczby | a/b · n, ułamek liczby, most 1/2 ↔ 50% | A, B, C | Процент — мост, не глава «Procenty». |
| 26 | III Ułamki zwykłe | Mnożenie ułamków | iloczyn, prostokąt, skracanie przed mnożeniem | A, B, C | |
| 27 | III Ułamki zwykłe | Odwrotności liczb | odwrotność a/b i n, iloczyn = 1 | A, B, C | |
| 28 | III Ułamki zwykłe | Dzielenie ułamków | : = · odwrotność, ile razy się mieści | A, B, C | |
| 29 | III Ułamki zwykłe | Działania na ułamkach | kolejność działań na ułamkach | A, B, C | Повтор навыка урока 03. |

### Część 2 · IV. Ułamki dziesiętne

| № | Раздел | Тема | Основные навыки | Уровни | Особенности |
|---|---|---|---|---|---|
| 30 | IV Ułamki dziesiętne | Ułamek dziesiętny | dziesiąte/setne, 3/10 = 0,3, 0,5 = 1/2 | A, B, C | Запятая в польской записи; validator принимает `,` и `.`. |
| 31 | IV Ułamki dziesiętne | Dodawanie i odejmowanie ułamków dziesiętnych | przecinek pod przecinkiem, pieniądze | A, B, C | |
| 32 | IV Ułamki dziesiętne | Mnożenie ułamków dziesiętnych | przecinek po iloczynie, ×10 / ×100 | A, B, C | |
| 33 | IV Ułamki dziesiętne | Dzielenie ułamków dziesiętnych | :10 / :100, przesunięcie przecinka | A, B, C | |
| 34 | IV Ułamki dziesiętne | Zamiana jednostek | mm–km, g–t, 0,5 m = 50 cm | A, B, C | Практика единиц + десятичные. |

### Część 2 · V. Pola figur

| № | Раздел | Тема | Основные навыки | Уровни | Особенности |
|---|---|---|---|---|---|
| 35 | V Pola figur | Pole figury | kratki, pole ≠ obwód, P = a · b | A, B, C | SVG `grid`. Сначала смысл площади, потом формула. |
| 36 | V Pola figur | Pole równoległoboku i rombu | P = a · h, dosunięcie do prostokąta | A, B, C | Связь с уроками 17–18, не дублировать их теорию. |
| 37 | V Pola figur | Pole trójkąta | P = a · h / 2 | A, B, C | Связь с 16. |
| 38 | V Pola figur | Pole trapezu | P = (a + b) · h / 2 | A, B, C | Связь с 19. |
| 39 | V Pola figur | Różne jednostki pola | cm², m², ar, ha; 1 m² = 10 000 cm² | A, B, C | Без длинных цепочек единиц в одном расчёте. |

### Część 2 · VI. Matematyka i my

| № | Раздел | Тема | Основные навыки | Уровни | Особенности |
|---|---|---|---|---|---|
| 40 | VI Matematyka i my | Kalendarz i zegar | h/min/s, przejście przez pełną godzinę i północ | A, B, C | |
| 41 | VI Matematyka i my | Miary, wagi i pieniądze | zł/gr, reszta, skala mapy | A, B, C | Практическая математика; масштаб точечно. |
| 42 | VI Matematyka i my | Średnia arytmetyczna | suma / n, tabela, wpływ skrajnej wartości | A, B, C | Не статистика gimnazjum. |
| 43 | VI Matematyka i my | Liczby dodatnie i ujemne | +, −, 0, oś, −8 < −3 | A, B, C | SVG `number-line`. Введение, не полный курс liczb całkowitych 7 класса. |
| 44 | VI Matematyka i my | Dodawanie liczb całkowitych | skoki na osi, 5 + (−8) | A, B, C | Без уравнений. |
| 45 | VI Matematyka i my | O ile różnią się liczby | odległość na osi, przez zero, «o ile» ≠ «ile razy» | A, B, C | |

### Część 2 · VII. Figury przestrzenne

| № | Раздел | Тема | Основные навыки | Уровни | Особенности |
|---|---|---|---|---|---|
| 46 | VII Figury przestrzenne | Figury przestrzenne – bryły | prostopadłościan, sześcian, graniastosłup, ostrosłup, walec, stożek, kula; ściany/krawędzie/wierzchołki | A, B, C | Наблюдение и классификация, не формулы всех тел. |
| 47 | VII Figury przestrzenne | Objętość i pojemność | objętość ≠ pojemność, cm³/dm³/l, 1 l = 1 dm³ | A, B, C | |
| 48 | VII Figury przestrzenne | Objętość prostopadłościanu | V = a · b · c, sześcian a³ | A, B, C | Степень как запись, навык урока 02. |
| 49 | VII Figury przestrzenne | Siatki prostopadłościanów | 6 prostokątów, fałszywa siatka | A, B, C | SVG `net`. |
| 50 | VII Figury przestrzenne | Siatki graniastosłupów | 2 podstawy + boki, vs siatka ostrosłupa | A, B, C | |

Итого **50** тем, не 51. Отдельных уроков «Procenty», «Skala», «Droga–prędkość» в TOC нет.

---

## 4. Педагогический принцип

Хороший урок в этом проекте — последовательность **экранов**, а не длинная страница.

Фактический каркас 04–50 (см. последовательности `block.type` в `content.js`):

1. **intro** — зачем тема, короткий крючок (часы, чек, сетка), не определение из словаря.
2. **goal** — 4–6 конкретных умений («rozpoznać…», «obliczyć…», «odrzucić…»).
3. **observe** — посмотреть, ещё не считать.
4. **concept** + **example** (часто с `reveal: true` и `steps`) — правило и разобранный пример.
5. **visual** — схема, если правило видно глазами (`fraction-bar`, `geo-lines`, `grid`, `net`, …).
6. **vocabulary** — польский термин и украинский эквивалент в таблице.
7. **guided-practice** — одно задание «вместе», уровень A.
8. **mistake** — типичная ошибка; renderer всегда пишет вердикт «Nie.»
9. **practice** — A/B навык.
10. **problem** — сюжет / применение (часто B).
11. **challenge** — C, мышление.
12. Два **check** — «Czy już umiem?»
13. **summary** — что умеем.
14. **review** — «Wrócimy do tego»: куда навык вернётся позже.

Эталоны 01–03 ближе к «несколько concept + visual + practice», без обязательного `challenge`. Их структуру не унифицировать под 04–50.

Логика внутри темы: сначала смысл, потом алгоритм, потом применение, потом проверка. Не начинать урок с десяти однотипных `input-number`.

---

## 5. Уровни сложности

Подписи движка (`js/task-engine.js` + `js/i18n.js`):

| Код | PL | Смысл в курсе |
|---|---|---|
| A | Poziom A · Podstawy | Один шаг, прямо по только что показанному правилу. |
| B | Poziom B · Ćwiczę | Контекст, два шага, выбор стратегии, типичная школьная задача. |
| C | Poziom C · Myślę | Рассуждение: ошибка, невозможный случай, сравнение, «czy może tak być?». |
| D | Poziom D · Zastosowanie | Есть в движке и в трёх заданиях 01/03. В 04–50 **не используется**. |
| challenge | Wyzwanie | Есть в движке; в 04–50 уровень C обычно стоит на блоке `challenge`, без `level: "challenge"`. |

**C не означает программу 7–8 класса.** Нельзя на уровне C вводить уравнения, π, теорему Пифагора, трёхэтажную алгебру или «просто очень большие числа». Усложнение — в **типе вопроса**, не в возрасте программы.

Примеры допустимого C: невозможная римская запись; «czy każdy romb jest kwadratem?»; одна и та же площадь при разных сторонах; ложная siatka; сравнение «o ile» и «ile razy».

---

## 6. Логические задачи

**Правило:** в каждом математическом уроке должны быть задания, где недостаточно подставить в формулу. Нужно рассуждение.

В готовом курсе это обычно:

- блок `mistake` (поиск ошибки);
- `true-false` / `single-choice` на свойство;
- `challenge` уровня C;
- сюжетный `problem`, где данные нужно сначала отобрать.

Допустимые виды (использовать по теме, не все сразу):

- закономерности (что дальше / какое правило);
- поиск ошибки (как `mistake` и как задание «gdzie błąd»);
- восстановление числа или пропущенного данного;
- восстановление условия по результату;
- сравнение стратегий (сгруппировать иначе, оценить, потом точно);
- несколько решений, если validator принимает массив строк (не массив чисел — см. технический документ);
- «может ли такое быть?» / `true-false`;
- классификация (уроки 09, 14, 17, 20, 46);
- головоломка в рамках темы (ложная siatka, невозможный угол);
- ограничения («reszta mniejsza od dzielnika»);
- объяснение способа — в `explanation` после верного ответа; отдельного типа `open-answer` в курсе нет, не требуйте сочинение в поле числа.

Для **геометрии** (11–20, 35–39, 46–50) логика должна быть геометрической:

- что имеет конец, а что нет;
- «każdy A jest B» vs обратное;
- можно ли сложить siatkę;
- где высота (внутри / снаружи);
- pole ≠ obwód, objętość ≠ pojemność.

Не превращать урок о prostych в десять примеров «посчитай 3+5». Схему даёт `visual.kind`, ответ — выбор или короткое число/слово, которое уже умеет validator.

---

## 7. Повторение

Интервальное возвращение заложено так:

1. Блок **review** в конце каждого урока («Wrócimy do tego») называет, *куда* навык вернётся. Это педагогический якорь, не отдельный квиз.
2. Поздние темы **используют** ранние навыки, не объявляя новую главу: урок 29 — kolejność z 03; 32–33 — zera i przecinek; 36–38 — фигуры 17–19; 48 — potęga `a³` из 02; 34 и 41 — десятичные и единицы.
3. В практике новой темы допустимо одно задание, которое требует старого умения (kolejność, zaokrąglenie, ułamek liczby), если оно не перетягивает урок.

Не делать «урок-повторение всего I раздела» вместо новой темы учебника.

---

## 8. Математическое оформление

Правило эталонов 01–03 и уроков 04–50:

**Жирным (`em("…")` → `<strong>`) выделяются математически значимые числа, выражения, формулы и ключевые символы.**

Пример:

`["Oblicz: ", em("52 + 36 + 18 + 4"), ". Wpisz tylko wynik."]`

Не выделять жирным целую инструкцию («Oblicz i wpisz wynik»).

В теории то же: формула часто в `block.formula` (класс `.math-line`) **и** повтор ключевых кусков через `em()` внутри абзаца.

| Объект | Как писать в тексте урока |
|---|---|
| Умножение | знак `·` (как в учебнике и эталонах), не `*` в условии |
| Деление | знак `: ` в условии; в ответе — число или дробь `a/b` |
| Обыкновенная дробь | в тексте можно `3/4` или слова; в ответе строка `3/4` |
| Смешанное число | в `answer` оба вида, если оба верны: `["3/2","1 1/2"]` |
| Степень | в условии `7⁴` или `7^4`; в ответе см. §9 |
| Единицы | `cm`, `m²`, `zł`, `h` — выделять вместе с числом, если это часть выражения: `em("0,5 m")` |
| Символы | `∥`, `⊥`, `°`, `−` для отрицательных — как в теме, единообразно в PL и UA |

Массивы в `text.pl`: плоский список строк = несколько абзацев; вложенный массив со `em()` = один абзац с жирными фрагментами.

---

## 9. Ввод с клавиатуры

Описывается только то, что делает `js/feedback.js` и `getAnswer` живых типов.

### Числа (`input-number`)

- Поле — `type="text"`, `inputmode="decimal"`.
- Запятая заменяется на точку; `14`, `14,0`, `14.0` совпадут с `answer: 14`.
- Если ввод не парсится как Number, сравнивается как строка (`norm`).
- Отрицательные: `−8` в условии; в поле обычно `-8` (ASCII hyphen), если так задан эталон.

### Текст (`input-text`)

- `trim`, нижний регистр, `,` → `.`.
- Надстрочные `⁰¹²³⁴⁵⁶⁷⁸⁹` → `^0`…`^9`. Поэтому `7⁴` равно `7^4`.
- `7**4` **не** превращается в `7^4`. Так принимают только задания, где `7**4` явно есть в массиве `answer` (урок 02).
- Дроби — строки. `3/4` не считается равным `6/8`, пока оба не перечислены.
- Римские цифры: перечисляйте регистры (`["IV","iv"]`).

### Выбор

- `single-choice`: ответ — `options[].id` (строка `"a"`, `"b"`…).
- `true-false`: эталон **boolean** `true` / `false`, не строка `"true"`.

Не обещайте в условии LaTeX, корни `√`, дроби-стек и drag-and-drop: соответствующих рабочих типов нет.

---

## 10. PL + UA

Требования к переводу:

- **Смысл** условия, hint и explanation совпадает.
- **Числа, выражения, варианты ответа** совпадают. Нельзя в UA заменить 36 на 40 «для удобства».
- **Сложность** не меняется.
- **Термины** — естественный украинский школьный язык (`степінь`, `знаменник`, `прямокутний паралелепіпед`), а не подстрочник с польскими словами внутри украинской фразы.

Плеер в режиме `ua` всё равно показывает польский текст первым. Украинский — помощь, не замена школьного языка.

`vocabulary.rows` — место для пары термин PL / термин UA. Не дублируйте всю теорию в таблице.

---

## 11. Типы математических задач

Сначала **движок** (`js/task-types.js`). Живые типы, реально стоящие в курсе:

| `task.type` | Где | Педагогический смысл |
|---|---|---|
| `input-number` | 01–50, основной объём | вычисление, мера угла, площадь, время в минутах |
| `input-text` | 04–50 + 2 задания в `tasks.js` | римская запись, дробь `a/b`, степень `a^n`, короткое слово |
| `single-choice` | 01–50 | классификация, выбор свойства, «która siatka» |
| `true-false` | 01–50 | «czy może tak być?», свойство фигуры |

Реализованы, но **в математических уроках не встречаются:** `multiple-choice`, `open-answer`.

Заглушки (не использовать): `sort`, `match`, `fill-blanks`, `order`, `drag-drop`, `select-on-image`, `build-expression`, `number-line` (тип задания; ось как SVG `kind: "number-line"` — другое), `geometry`.

Педагогические роли задаёт **`block.type`**, не отдельный task type:

| Блок | Роль |
|---|---|
| `guided-practice` | первый контакт с полем ввода |
| `practice` | тренировка навыка |
| `problem` | текстовая / практическая ситуация |
| `challenge` | логика, уровень C |
| `check` | итог «Czy już umiem?» |
| `mistake` | разбор ошибки (часто без поля ввода) |
| `classification` / `comparison` | редкие; есть в курсе (напр. 20 и несколько comparison) |

Word problem в коде — это обычный `problem` + `input-number`/`single-choice`, а не тип `word-problem`.

Геометрическая задача — тот же живой тип + `visual` (`triangle`, `quad`, `geo-lines`, `net`, `angle`, `grid`).

---

## 12. Арифметика

Методика разделов I, III, IV (и счёт в VI):

- **Натуральные числа** — действия в уме (01), письменные алгоритмы (06, 07, 10), оценка (05), делимость (08–09), римская запись (04) как другой алфавит, не как «новая арифметика».
- **Порядок действий** — отдельный урок 03, затем возврат в 29 и в выражениях с десятичными.
- **Делимость** — признаки и остаток, без теории сравнений.
- **Обыкновенные дроби** — часть и частное → равенство → +/− → · → обратные → : → выражения. Не прыгать к сложению с разными знаменателями, пока нет 22.
- **Десятичные** — сначала чтение и связь с `a/10`, потом действия, потом единицы (34).
- **Практический счёт** — короткие числа; в 31 в целях урока явно ограничение на «короткие zapisy».

Письменный алгоритм показывайте `example` + `steps`, а в задании просите **результат** (validator не разбирает запись «в столбик»).

---

## 13. Алгебра

Допустимый уровень — **подготовка**, не алгебра gimnazjum:

- буквы в формулах площади/объёма (`P = a · h / 2`, `V = a · b · c`) как подписи сторон, не как тождества для доказательства;
- отрицательные числа на оси и сложение (43–45);
- «неизвестное» только как пропуск в числе или стороне, который находится одним действием;
- степень как повторное умножение (02, 48).

Не вводить: уравнения с `x` по обе стороны, раскрытие скобок как тему, системы, функции, неравенства как главу.

Уровень C в 43–45 — сравнение на оси и расстояние, не «реши уравнение».

---

## 14. Геометрия

Разделы II, V, VII методически отдельны от арифметики.

- **Плоскость и линии** (11) — объекты и отношения, не формулы.
- **Углы** (12–13) — вид, затем измерение.
- **Треугольники** (14–16) — классификация, свойства, высота; площадь — в 37.
- **Четырёхугольники** (17–20) — свойства и включения; площади — 35–38.
- **Площади** (35–39) — сначала клетки и отличие от обвода, потом формулы уже известных фигур, потом единицы.
- **Пространство** (46–50) — узнавание тел → объём/вместимость → формула простым прямоугольным параллелепипедом → siatki. Нет объёма конуса/шара как обязательного навыка 5 класса в этом курсе.

Не смешивать без нужды: урок о `∥` не должен быть десятком примеров на письменное умножение «чтобы было задание». Число в геометрии — мера угла, длина стороны, площадь, объём, число рёбер.

---

## 15. Практическая математика

Раздел VI и пересечения:

- время и календарь — 40;
- деньги, масса, длина, масштаб — 41, плюс десятичные 31;
- единицы длины/массы — 34;
- единицы площади — 39;
- объём и литры — 47–48;
- среднее — 42 как чтение данных, не как «статистика».

Сюжеты держите школьными: покупка, расписание, карта, коробка, siatka модели. Не тащите физику 7 класса (скорость как отдельная тема); если скорость появляется, это одно применение уже известных действий, как намекает review урока 41, а не новый раздел TOC.

---

## 16. Контроль качества задания

Перед тем как считать задание готовым:

1. Условие однозначно: один вопрос, понятно, *что* вводить.
2. Эталон однозначен *для validator*: если возможны `3/4` и `6/8` — оба в массиве строк.
3. Математика верна (пересчитайте).
4. Уровень совпадает с A/B/C из §5.
5. Верный ответ принимается (запятая, `^`, регистр римских).
6. Близкий неверный отвергается; при типичной ошибке — `mistakes[].feedback`.
7. `hint` подталкивает к шагу, не выдаёт ответ целиком без нужды.
8. `explanation` совпадает с реальным решением, те же числа, что в условии.
9. PL и UA эквивалентны (§10).
10. `em()` только на математике; инструкция целиком в `task.question`, чтобы бейдж уровня её не разрезал.

Проверка в браузере: см. технический документ, §15.

---

## 17. Что не делать

- Не превращать урок в десять однотипных вычислений без observe / mistake / логики.
- Не делать весь абзац жирным.
- Не раздувать C до программы 7–8 класса.
- Не ставить `true-false` «для галочки», если ответ читается с формулы без мысли.
- Не менять числа и сложность при переводе.
- Не создавать новые `task.type` и не включать заглушки `match` / `sort` / …
- Не менять `js/feedback.js` / `task-engine.js`, чтобы принять экзотический формат одной задачи: перечислите варианты в `answer` или смените формулировку.
- Не переписывать эталоны 01–03 «под шаблон 04–50».
- Не требовать от ребёнка набор `7**4`, если в условии показана обычная степень — канон ввода: `7^4` (и надстрочная форма через `norm`).

---

## 18. Как создавать новый математический урок

Это **шаблон**. Порядок экранов можно сдвинуть под тему (геометрия начнёт с observe/SVG; письменный алгоритм — с example+steps). Не копируйте число блоков слепо.

1. **Цель.** Одна тема учебника, 4–6 пунктов `goal` в языке «уметь…».
2. **Prerequisite.** Что уже было (номер урока). Не объяснять заново весь прошлый раздел.
3. **Новое.** `intro` → `observe` → `concept`. Одно новое правило за раз.
4. **Простой пример.** `example` с `steps` / `reveal`.
5. **Словарь.** `vocabulary` — термины этой темы.
6. **A.** `guided-practice`, затем `practice` уровня A.
7. **Ошибка.** `mistake` с типичным школьным сбоем.
8. **B.** `practice` / `problem`: применение, сюжет, два шага.
9. **Логическая задача.** Свойство, невозможность, классификация, ложная схема — не десятый такой же пример.
10. **C.** Обычно блок `challenge`. Мышление в рамках класса 5.
11. **Практика жизни.** Если тема это позволяет (pieniądze, czas, siatka) — `problem`, не отдельный «проект».
12. **Повтор старого.** Одно включение прежнего навыка или честный `review` о будущем возврате.
13. **Итог.** Два `check` + `summary` + `review`.

Дальше — шаги программиста из технического документа §13–15: папка, `curriculum.js`, `data/lessons.js`, живые `task.type`, не трогать engine.

Эталон визуальной и двуязычной формы — уроки **01–03**. Эталон полноты курса (логика, mistake, challenge, check) — уроки **04–50**.
