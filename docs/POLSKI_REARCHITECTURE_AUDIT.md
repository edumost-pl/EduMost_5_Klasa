# Аудит і нова архітектура курсу Język polski 5

**Статус:** лише аудит, карта і план. Уроки, `content.js`, `curriculum.js` і спільний lesson engine **не змінювались**.

**Дата:** 2026-09-10  
**Предмет:** Język polski, klasa 5, проект EduMost_5_Klasa  
**Робоча карта:** `docs/POLSKI_PROGRAM_MAP.md`

---

## 0. Джерела (офіційні)

Використано **офіційні матеріали GWO**, не сторонні «розбори підручника».

| Документ | Офіційне місце | Версія |
|---|---|---|
| Rozkład materiału – język polski – klasa 5 | [gwo.pl → Dokumenty oświatowe](https://gwo.pl/przedmioty/jezyk-polski/dokumenty-oswiatowe/) → [Rozkład (2024)](https://gwo.pl/rozklad-materialu-5-klasa-nowy/) | 2024 |
| Plan wynikowy | [Plan wynikowy (2024)](https://gwo.pl/plan-wynikowy-5-klasa-nowy-2/) | 2024 |
| Kryteria oceniania do poszczególnych tematów | [Kryteria do tematów](https://gwo.pl/kl-5-kryteria-oceniania-do-poszczegolnych-tematow-nowe-2/) | 2024 |
| Materiały dydaktyczne klasa 5 | [gwo.pl/…/klasa-5](https://gwo.pl/przedmioty/jezyk-polski/materialy-dydaktyczne/szkola-podstawowa/klasa-5/) | актуальні |
| Program nauczania *Między nami* | [gwo.pl/miedzy-nami-program-2024](https://gwo.pl/miedzy-nami-program-2024/) | 2024 |

**Не замінювати** підручник 5 класу виданням 2026. На сайті GWO **klasa 4** уже має rozkład 2026 (нове видання), **klasa 5** — rozkład **2024** до чинного *Między nami 5*.

**Підручник у `js/curriculum.js` перевірено і залишається правильним:**

- *Między nami*, podręcznik do klasy 5  
- Agnieszka Łuczak, Anna Murdzek  
- Gdańskie Wydawnictwo Oświatowe  
- nr dopuszczenia **867/2/2018**

Порядок прізвищ у curriculum (`Anna Murdzek, Agnieszka Łuczak`) не змінює ідентифікацію книги. Книгу **не видаляти і не замінювати**.

---

## 1. Стан поточного польського курсу

EduMost зараз має **рівно 50** тем польської в `js/curriculum.js` і **50** папок `lessons/polski/{NN}-…`. Усі 50 мають `content.js`, `lesson.js`, `index.html`, `assets.js`.

Це **не** повний шкільний курс 5 класу. Це вибірка сторінок підручника, стиснута під шаблон «50 уроків як у математики».

### 1.1. Як курс зібраний

| Шар | Файл | Що насправді є |
|---|---|---|
| Оглавление | `js/curriculum.js` → `polski` | 50 тем, 6 «розділів», `tocStatus: "confirmed"`, `hidePath: true` |
| Карта папок | `data/lessons.js` | `polski/{topicId}` → folder |
| Генератор | `lessons/polski/_catalog.py`, `_catalog_more.py`, `_catalog_rest.py`, `_build.py` | чернетки 1–50; `_build.py` **не перезаписує** 01 і 02 |
| Реальний контент | `lessons/polski/*/content.js` | 01–02 написані вручну; **03–50 згенеровані одним шаблоном** |
| Сторінка предмета | `subjects/polski.html` | звичайний TOC; етапів 1/2/3 немає |
| Спільний плеєр | `js/lesson-engine.js` тощо | працює; польський його не ламає |

Технічна документація хаба (`docs/PROJECT_TECHNICAL_DOCUMENTATION.md`) **ще не описує польський як інтерактивний курс** нарівні з математикою / історією / біологією / англійською. Польський уже відкритий у TOC, але архітектурно це «математична сітка 50», накладена на *Między nami*.

### 1.2. Головний висновок одним реченням

**50 уроків ≠ програма GWO.** Офіційний rozkład — це **близько 170 одиниць занять** (Temat 1 … ~172 у kryteriach), згрупованих у **4 частини підручника і 11 rozdziałów**. EduMost узяв ~50 сторінок і зробив з них 50 «уроків-визначень». Через це дитина **не може підготуватись до kartkówki**, яка перевіряє **набір умінь**, а не «урок №2».

### 1.3. Два шари якості контенту

| Група | Уроки | Розмір `content.js` | Завдання | Педагогіка |
|---|---|---|---|---|
| Ручні | 01, 02 | 14–17 KB | 4–5 завдань, прив’язка до сторінки підручника | близька до моделі POLSKI → ZROZUMIENIE → ĆWICZENIE |
| Шаблон | 03–50 | ~6–8 KB | завжди 3: single-choice + input-text + «усне» як ще один single-choice | «WIEM, CO TO JEST», майже без «UMIEM WSKAZAĆ» |

Шаблон генератора завжди такий:

1. intro + formula  
2. goal (3 пункти)  
3. concept  
4. check (визначення)  
5. practice (вписати термін)  
6. mistake  
7. problem / oral (знову вибір)  
8. summary  
9. review («у класі відкрий підручник»)

UA є скрізь (паралельний `pl`/`ua`). Це плюс. Мінус: українською часто стисло переказане визначення, без сходинки «польський термін → просте польське пояснення → українське пояснення → приклад → розпізнавання в тексті».

---

## 2. Повний список поточних уроків

Роздрібнення `curriculum.js` **не збігається** з частинами підручника GWO.

Офіційно GWO:

1. **Dziwny ten świat**  
   - Zachwycający kosmos  
   - Odpowiedzi na ważne pytania  
   - W zwykły i niezwykły sposób o zjawiskach  
2. **Gdzie stopy nasze**  
   - Podjąć wyzwanie  
   - W drodze do celu  
   - Ocalmy Ziemię!  
3. **Świat ludzkich spraw**  
   - Ważne, ważniejsze, najważniejsze  
   - Dzień jak co dzień  
   - Gdy świat staje na głowie  
4. **Twórca i dzieło**  
   - Twórcy światów fikcyjnych  
   - Zapraszamy do świata sztuki  

У curriculum зараз: I.1 Zachwycający kosmos (8 тем), I.2 Odpowiedzi… (7), I.3 W zwykły… (**1 тема**), потім увесь dział II як один список з 14 тем, III — 12, IV — 8.

Каталог генератора (`_catalog.py`) називає частину I **«Dziwny ten świat»**, curriculum — **«Zachwycający kosmos»**. Це різні рівні: część vs rozdział.

| № | ID | Назва в curriculum | С. | Папка | content.js |
|---|---|---|---|---|---|
| 01 | sytuacja-komunikacyjna | Na początek… | 8 | 01-sytuacja-komunikacyjna | так, ручний |
| 02 | apostrofa | Jan Lechoń, Preludium | 10 | 02-apostrofa | так, ручний; **апострофи в тексті немає** |
| 03 | tekst-popularnonaukowy | Ziemia we Wszechświecie | 14 | 03-tekst-popularnonaukowy | шаблон |
| 04 | pisownia-wymienna | Pierwsze lądowanie… ó, rz, ż, ch | 16 | 04-pisownia-wymienna | шаблон |
| 05 | podmiot-liryczny | Antoni Wic, Noc | 18 | 05-podmiot-liryczny | шаблон |
| 06 | pisownia-rz-niewymienne | Co się zdarzyło rzeźbiarce Katarzynie? | 20 | 06-pisownia-rz-niewymienne | шаблон |
| 07 | przypowiesc | Miłosz, Przypowieść o maku | 27 | 07-przypowiesc | шаблон |
| 08 | komiks | Goscinny, Uderzo | 29 | 08-komiks | шаблон |
| 09 | mit | Rzehak, Początek świata | 32 | 09-mit | шаблон |
| 10 | biblia-stworzenie | **Wanda Markowska, Prometeusz** ← помилка назви | 35 | 10-biblia-stworzenie | шаблон, зміст про Біблію |
| 11 | demeter-i-kora | Demeter i Kora | 39 | 11-demeter-i-kora | шаблон; с. 39 у GWO — **Twardowski** |
| 12 | prometeusz | **Jan Parandowski, Królestwo morza** ← помилка назви | 44 | 12-prometeusz | шаблон, зміст про Прометея |
| 13 | rzeczownik | Części mowy – rzeczownik | 48 | 13-rzeczownik | шаблон |
| 14 | list-i-slownik | Pracujemy ze słownikami | 54 | 14-list-i-slownik | шаблон, злито list+słownik |
| 15 | odmiana-rzeczownika | Odmiana… Pisownia nie | 66 | 15-odmiana-rzeczownika | шаблон; у GWO відмінювання з с. 60 |
| 16 | przymiotnik-i-uosobienie | Tuwim, Dwa wiatry | 72 | 16-przymiotnik-i-uosobienie | шаблон; с. 72 у GWO — **Ratajczak**, Tuwim — **с. 64** |
| 17 | precyzyjna-informacja | Precyzyjna informacja | 94 | 17-precyzyjna-informacja | шаблон |
| 18 | liczebnik | Liczebnik | 97 | 18-liczebnik | шаблон |
| 19 | dziennik | Dziennik | 100 | 19-dziennik | шаблон |
| 20 | pamietnik | Pamiętnik | 109 | 20-pamietnik | шаблон |
| 21 | czasownik | Czasownik | 114 | 21-czasownik | шаблон |
| 22 | narracja-sienkiewicz | Narracja. W pustyni i w puszczy | 117 | 22-narracja-sienkiewicz | шаблон |
| 23 | herakles | Mit o Heraklesie | 122 | 23-herakles | шаблон |
| 24 | tryby-czasownika | Tryby czasownika | 131 | 24-tryby-czasownika | шаблон |
| 25 | relacja-i-notatka | Relacja i notatka | 134 | 25-relacja-i-notatka | шаблон |
| 26 | akcja-watek-fabula | Akcja, wątek, fabuła | 148 | 26-akcja-watek-fabula | шаблон |
| 27 | czasowniki-dokonane | Czasowniki dokonane i niedokonane | 158 | 27-czasowniki-dokonane | шаблон |
| 28 | opowiadanie-z-dialogiem | Opowiadanie z dialogiem | 160 | 28-opowiadanie-z-dialogiem | шаблон |
| 29 | przyslowek-i-zaimek | Przysłówek i zaimek | 167 | 29-przyslowek-i-zaimek | шаблон, злито дві частини мови |
| 30 | list-oficjalny-i-przyimek | List oficjalny i przyimek | 181 | 30-list-oficjalny-i-przyimek | шаблон, злито форма+граматика |
| 31 | swiat-ludzkich-spraw | Świat ludzkich spraw | 194 | 31-swiat-ludzkich-spraw | шаблон |
| 32 | fabula-utworu | Zdarzenie, wątek, akcja, fabuła | 196 | 32-fabula-utworu | шаблон; **дубль 26** |
| 33 | wypowiedzenia | Wypowiedzenia… | 207 | 33-wypowiedzenia | шаблон |
| 34 | chlopcy-z-placu-broni | Chłopcy z Placu Broni | 212 | 34-chlopcy-z-placu-broni | шаблон |
| 35 | bajka | Bajka | 218 | 35-bajka | шаблон |
| 36 | zdanie-pojedyncze | Zdanie pojedyncze | 227 | 36-zdanie-pojedyncze | шаблон |
| 37 | zwiazki-wyrazowe | Związki wyrazowe | 238 | 37-zwiazki-wyrazowe | шаблон |
| 38 | pan-tadeusz | Pan Tadeusz (fragment) | 241 | 38-pan-tadeusz | шаблон |
| 39 | instrukcja | Instrukcja | 244 | 39-instrukcja | шаблон |
| 40 | czesci-zdania | Części zdania | 259 | 40-czesci-zdania | шаблон, занадто укрупнено |
| 41 | streszczenie | Streszczenie | 262 | 41-streszczenie | шаблон |
| 42 | dialog-i-przypowiesc | Dialog i przypowieść | 300 | 42-dialog-i-przypowiesc | шаблон; частковий дубль 07 |
| 43 | tworca-i-dzielo | Twórca i dzieło | 328 | 43-tworca-i-dzielo | шаблон |
| 44 | herbert-wyobraznia | Wyobraźnia. Herbert | 331 | 44-herbert-wyobraznia | шаблон |
| 45 | zaproszenie | Zaproszenie | 336 | 45-zaproszenie | шаблон |
| 46 | teatr-i-film | Teatr i film | 342 | 46-teatr-i-film | шаблон |
| 47 | akcent | Akcent | 345 | 47-akcent | шаблон |
| 48 | srodki-stylistyczne | Środki stylistyczne | 357 | 48-srodki-stylistyczne | шаблон; **занадто пізно для епітета** |
| 49 | ogloszenie-i-cytat | Ogłoszenie i cytat | 360 | 49-ogloszenie-i-cytat | шаблон, злито |
| 50 | opis-dziela | Opis dzieła | 380 | 50-opis-dziela | шаблон |

---

## 3. Аналіз кожного урока

Оцінка змісту: **A / B / C / D**.  
Рішення щодо структури: **KEEP / SPLIT / MERGE / REORDER / REWRITE / REMOVE / MISSING**.

Критерії A: коректна польська 5 класу, відповідність підручнику і GWO, сходинки вміння, UA, практика розпізнавання, зворотний зв’язок, придатність до kartkówki.

### 3.1. Уроки 01–16 (перший dział підручника)

| ID | Оц. | Рішення | Знання зараз | Навички зараз | Типи tasks | Відповідність підручнику | Відповідність GWO | Нотатки |
|---|---|---|---|---|---|---|---|---|
| 01 | **B** | KEEP + REWRITE (посилити) | ситуація комунікаційна, надawca/odbiorca, gest/mimika | назвати елементи; відрізнити надawcę | SC, input | так, с. 8 | так, Temat 1; PP II.3.2–4 | Найкращий урок курсу. Не покриває kartkówkę. |
| 02 | **C** | **SPLIT + REWRITE** | nastrój, osoba mówiąca, preludium, frazeologizми | nastrój у виборі; **апострофи немає** | 5× SC | так як урок *Preludium* | GWO Temat 2 вимагає **ідентифікувати apostrofę** | Папка `apostrofa`, а в `content.js` слова «apostrofa» **немає**. Чернетка апострофи лежить у `_catalog.py` і **не зібрана** (`SKIP` у `_build.py`). |
| 03 | C | REWRITE | факт vs opinia, notatka | запам’ятати терміни | SC, input | частково с. 14 | Temat 4; пропущено с. 12 | Немає читання зі зрозумінням реального тексту. |
| 04 | C | KEEP тему, REWRITE | ó/rz/ż/ch wymiennie | вписати назву явища | шаблон | сторінка ок | Temat 5 | Немає вправ «перевір написання конкретного слова». |
| 05 | C | KEEP + REWRITE | podmiot ≠ autor | рівень 1 визначення | шаблон | с. 18 ок | Temat 6 | Немає схеми автор/podmiot/bohater; немає вказівки в *Noc*. |
| 06 | C | KEEP + REWRITE | rz niewymienne | визначення | шаблон | с. 20 ок | Tematy 7–8 (2 год) | Одна година EduMost на дві шкільні. |
| 07 | C | **SPLIT** | przypowieść, morał | жанр, не будова вірша | шаблон | жанр ок | Tematy 10–11: обов’язково **wers, strofa, rym** | Саме тут GWO вводить будову вірша. В уроці цього немає. |
| 08 | C | KEEP + REWRITE | cechy komiksu | визначення | шаблон | с. 28–29 | Tematy 12–13 | Немає читання кадрів / почуттів з малюнка. |
| 09 | C | KEEP + REWRITE | mit як gatunek | визначення | шаблон | с. 31–32 | Temat 14; міт з PP | Пропущено порівняння виображень світу. |
| 10 | C | KEEP + виправити назву в TOC | Biblia, Księga Rodzaju | шана до святого тексту | шаблон | зміст ближче до с. 34 | Temat 15 | **Назва в TOC = Prometeusz — WRONG.** |
| 11 | C | **REORDER** | Demeter i Kora, pory roku | міт | шаблон | прив’язка до с. 39 хибна | с. 39 = Twardowski; Demeter = с. 40 | Пропущено обов’язковий вірш Twardowskiego. |
| 12 | C | KEEP + виправити назву | Prometeusz, ogień, kara | сюжет міту | шаблон | Markowska ок | Temat 21 с. 45 | **Назва в TOC = Królestwo morza — WRONG.** Królestwo morza в GWO — окремий блок (список, опис палацу). |
| 13 | C | **SPLIT** | rzeczownik, własne/pospolite | визначення | шаблон | грубо с. 48–50 | Tematy 22–23 | Немає concretne/abstrakcyjne як окремої практики. |
| 14 | C | **SPLIT** | słownik, list | два вміння в одному | шаблон | с. 54–56 змішано | GWO розділяє słownik і list (Amfitryta) | TO_SPLIT. |
| 15 | C | **SPLIT** | przypadki, temat/końcówka, nie | визначення | шаблон | с. 66 vs GWO с. 60 | Tematy 29–31 (3 год) | Занадто стисло для відмінка — ключовий **gap ETAP 3**. |
| 16 | C | **SPLIT + REORDER** | przymiotnik + uosobienie | визначення, відрізнити від apostrofy | шаблон | Tuwim помилково на с. 72 | Tuwim с. 64: **epitet, porównanie, przenośnia, uosobienie, apostrofa** (I.1.4) | Епітет мав з’явитись **тут**, не в уроці 48. |

### 3.2. Уроки 17–30 (Gdzie stopy nasze)

| ID | Оц. | Рішення | Проблема |
|---|---|---|---|
| 17 | C | REWRITE | GWO Temat 51 с. 92; curriculum с. 94 | пропущено planszę с. 92 і вірш «спільні цілі» |
| 18 | C | KEEP + REWRITE | liczebnik + nie | немає відмінювання liczebników |
| 19 | C | REWRITE | «Dziennik» — у GWO тут **Verne / Fileas Fogg** (с. 100) | жанр щоденника змішано з лектурою |
| 20 | C | REWRITE | pamiętnik с. 109 | ок як форма; мало практики писання |
| 21 | C | **SPLIT** | czasownik | GWO кілька годин (osoba, czas, nie z czasownikiem) |
| 22 | C | KEEP + REWRITE | Sienkiewicz, narracja | лектура обов’язкова; урок-визначення narratora недостатнє |
| 23 | C | KEEP + REWRITE | Herakles | ок як міт; мало праці з текстом |
| 24 | C | KEEP + REWRITE | tryby + -bym/-byś/-by | GWO 2 год |
| 25 | C | **SPLIT** | relacja і notatka — різні formy | Kamiński с. 134 |
| 26 | C | **MERGE з 32** після переписування | akcja/wątek/fabuła на Одисеї | GWO Tematy 71–72 с. 148 — **Одисей**, не абстрактні терміни |
| 27 | C | KEEP + REWRITE | aspekt | ок тема, слабка практика |
| 28 | C | REWRITE | opowiadanie z dialogiem | у GWO с. 160 це **Skarb Troi** (Fritsche), не «форма заради форми» |
| 29 | C | **SPLIT** | przysłówek ≠ zaimek | два шкільні блоки |
| 30 | C | **SPLIT** | list oficjalny + przyimek | різні категорії |

### 3.3. Уроки 31–42 (Świat ludzkich spraw)

| ID | Оц. | Рішення | Проблема |
|---|---|---|---|
| 31 | C | REWRITE / можливо REMOVE як окремий «вступний» | plansza с. 194 | майже порожній концепт |
| 32 | C | MERGE з 26 | повтор fabuły | DUPLICATE |
| 33 | C | KEEP + REWRITE | zdanie / równoważnik | ок; GWO має ще powtórzenie |
| 34 | C | KEEP + REWRITE | Chłopcy z Placu Broni | обов’язкова лектура; один урок-визначення **недостатній** |
| 35 | C | KEEP + REWRITE | bajka | ок gatunek; мало моралі в тексті |
| 36 | C | KEEP + REWRITE | zdanie rozwinięte/nierozwinięte | ок |
| 37 | C | KEEP + REWRITE | związki wyrazowe | ок |
| 38 | C | KEEP + REWRITE | Pan Tadeusz с. 241 | GWO має **ще** фрагмент бурі с. 87 у I działі — пропущено |
| 39 | C | KEEP + REWRITE | instrukcja | ок форма |
| 40 | C | **SPLIT** | podmiot, orzeczenie, przydawka, dopełnienie, okolicznik | у GWO це кілька тем (с. 255, 259, 272, 291) |
| 41 | C | KEEP + REWRITE | streszczenie | ок форма |
| 42 | C | SPLIT | dialog + przypowieść | сторінка 300; великий стрибок сторінок 262→300 |

### 3.4. Уроки 43–50 (Twórca i dzieło)

| ID | Оц. | Рішення | Проблема |
|---|---|---|---|
| 43 | C | REWRITE | вступна plansza | мало вміння |
| 44 | C | KEEP + REWRITE | Herbert | ок текст; немає інтерпретації |
| 45 | C | KEEP + REWRITE | zaproszenie | ок форма |
| 46 | C | **SPLIT** | teatr і film | GWO розділяє |
| 47 | C | KEEP + REWRITE | akcent | ок; не плутати з apostrofą — у шаблоні це вже є |
| 48 | C | **SPLIT + REORDER** | epitet, porównanie, metafora | **WRONG місце в році** | епітет у GWO з Tuwim с. 64 і Deszczyk с. 76 |
| 49 | C | **SPLIT** | ogłoszenie ≠ cytat | різні форми |
| 50 | C | KEEP + REWRITE | opis dzieła | ок форма; с. 380 |

**Жодного урока 03–50 немає оцінки A.**  
**Оцінки D немає** — файли існують, але це не повноцінні уроки 5 класу.

---

## 4. Między nami 5 ↔ Rozkład GWO

Правило з’єднання (не два списки):

```
сторінка / текст підручника
        ↓
Temat zajęć GWO (години, PP, вміння)
        ↓
одиниця EduMost (текст і/або вміння)
        ↓
assessment tag (kartkówka / sprawdzian)
```

Один матеріал підручника може дати **кілька** уроків EduMost. Один урок EduMost може зібрати **кілька коротких пунктів** rozkładu, якщо це один педагогічний жест (наприклад «nie з rzeczownikiem» як частина відмінювання).

### 4.1. Перший rozdział — детально (kartkówka)

Офіційний GWO, *Zachwycający kosmos*:

| Год. | Temat GWO | Підручник | PP / вміння | EduMost зараз |
|---|---|---|---|---|
| 1 | Chcemy wiedzieć więcej | plansza с. 8 | II.3.3–4 ситуація, niewerbalne | 01 PARTIAL (добре, але не шкільна plansza 1:1) |
| 1 | Na dobry początek – Lechoń *Preludium* | с. 10 + **ćw. Apostrofa** | I.1.4 apostrofa; nastrój; sytuacja liryczna | 02 **WRONG щодо апострофи**; PARTIAL nastrój |
| 1 | Tajemnice kosmosu | zdjęcia с. 12 | III.1 мовлення, opis zdjęcia | **MISSING** |
| 1 | Doskonalimy czytanie | *Ziemia we Wszechświecie* с. 14 | III.1.5 selekcja; notatka; IV.1 głośne czytanie | 03 PARTIAL |
| 1 | Pisownia ó, rz, ż, ch wymienne | с. 16 | II.4.1 | 04 PARTIAL |
| 1 | Kim jest podmiot liryczny – Wic *Noc* | с. 18 + ćw. osoba mówiąca | I.1.9 podmiot; II.3.2 nadawca ≠ autor | 05 PARTIAL |
| 2 | rz niewymienne | с. 20 | II.4.1 | 06 PARTIAL (1 замість 2) |
| 1 | Hawking *Jerzy i tajny klucz…* | с. 23 | I.1.14–15 wrażenia, sens przenośny | **MISSING** |
| 2 | Miłosz *Przypowieść o maku* | с. 26–27 | **strofa, wers, rym**; przypowieść; środki | 07 **WRONG фокус** (лише gatunek) |
| 2 | O komiksie | Kaczkowski / Asterix с. 28 | I.2.7 komiks | 08 PARTIAL |

**Висновок для kartkówki 14.09.2026:** учитель перевіряє вміння, які в GWO лежать на **с. 10 (apostrofa, nastrój)**, **с. 18 (podmiot)** і **с. 26 (wers, strofa, rym)** плюс **epitet**, який GWO формально відпрацьовує на **Tuwim с. 64 / Deszczyk с. 76**, але вже в I.1.4 як вимога до читання поезії. У EduMost ці вміння **не зібрані в один preparation set**.

### 4.2. Типові розриви далі по книзі

| Підручник / GWO | EduMost |
|---|---|
| Twardowski *Który stwarzasz jagody* с. 39 (автор з PP) | MISSING (с. 39 зайняв Demeter) |
| Królestwo morza / list Amfitryty / Helios i Faeton | MISSING (назва «Królestwo morza» помилково висить на Прометеї) |
| Tuwim *Dwa wiatry* с. 64 + recytacja | зміщено на 16 / с. 72 |
| Ratajczak *Dwa słońca* с. 72 | змішано з Tuwim |
| van Gogh *Słoneczniki* с. 74 | MISSING |
| Tuwim *Deszczyk* с. 76 **epitet, porównanie, uosobienie** | MISSING як урок; епітет відкладено на 48 |
| Stopniowanie przymiotnika с. 78 | MISSING |
| *Pan Tadeusz* — буря с. 87 | MISSING (є лише пізніший фрагмент с. 241) |
| Verne / Fileas Fogg с. 100 | схований під «Dziennik» |
| Odyseusz с. 148 | схований під абстрактну фабулу |
| Fritsche *Skarb Troi* с. 160 | схований під «opowiadanie z dialogiem» |
| Ballada / rytm utworu с. 210 | MISSING (у kryteriach змішано з wypowiedzeniami) |
| Staff *Czucie niewinne* с. 216 | MISSING |
| Prus *Katarynka* с. 303 | **MISSING** (лектура з PP) |
| Puszka Pandory с. 274 | MISSING |
| Dedal / Ikar с. 325 | MISSING |
| Wywiad с. 352 | MISSING |
| Neologizmy с. 363 | MISSING |
| Chopin с. 367 | MISSING |
| Powtórzenia і sprawdziany 11 rozdziałów | MISSING як одиниці EduMost |

---

## 5. Обов’язкові теми / вміння GWO (класа 5)

З rozkładu, planu wynikowego і програми *Między nami* (підстава 2017/2024). Це **вміння**, не список сторінок.

### 5.1. Kształcenie literackie

- wyodrębnia obrazy poetyckie  
- rozpoznaje **apostrofę, epitet, porównanie, przenośnię, uosobienie** і **określa funkcje** (I.1.4)  
- **wers, strofa (zwrotka), rym, rytm**  
- podmiot liryczny ≠ autor  
- nastrój, przeżycia osoby mówiącej  
- sens dosłowny / przenośny  
- gatunki: mit, przypowieść, bajka, ballada, nowela, komiks  
- narrator, bohater, akcja, wątek, fabuła  
- dialog / monolog; akt, scena, didaskalia  

### 5.2. Kształcenie kulturowe

- teatr, film, obraz, muzeum, plakat  
- przekład intersemiotyczny  
- lektury з PP (див. 5.10)

### 5.3. Nauka o języku / gramatyka

- części mowy: rzeczownik, przymiotnik, czasownik, liczebnik, przysłówek, zaimek, przyimek, wykrzyknik, partykuła  
- przypadki, liczba, rodzaj; temat i końcówka  
- tryby; aspekt dokonany/niedokonany  
- wypowiedzenie: zdanie / równoważnik  
- zdanie pojedyncze rozwinięte / nierozwinięte  
- związki wyrazowe; grupa podmiotu / orzeczenia  
- części zdania: podmiot, orzeczenie, przydawka, dopełnienie, okolicznik  

### 5.4. Ortografia

- ó, rz, ż, ch wymienne / niewymienne  
- nie з різними częściami mowy  
- wyjąтки; słownik ortograficzny  

### 5.5. Interpunkcja

- cytat, dialog, різні типи wypowiedzeń  

### 5.6. Słownictwo

- synonimy, antonimy, słowniki  
- neologizmy  
- frazeologizми (уже в *Preludium*)  

### 5.7. Czytanie ze zrozumieniem

- selekcja informacji  
- tekst popularnonaukowy vs literacki vs informacyjny  

### 5.8. Tworzenie wypowiedzi

- opis, opowiadanie (z dialogiem), list (w tym oficjalny), dziennik/pamiętnik, relacja, notatka, ogłoszenie, zaproszenie, instrukcja, streszczenie, wywiad, recytacja  

### 5.9. Mówienie / odpowiedź ustna

- recytacja, interpretacja głosowa, rozmowa, uzasadnienie zdania  

### 5.10. Lektury / teksty (мінімум з GWO + PP для класу 5 у цьому підручнику)

Обов’язкові / зазначені в rozkładzie як lektura / mit з PP:

- fragmenty Biblii (Księga Rodzaju)  
- міти: початок світу, Demeter i Kora, Prometeusz, Herakles, Odyseusz, Puszka Pandory, Dedal  
- Sienkiewicz *W pustyni i w puszczy*  
- Molnár *Chłopcy z Placu Broni*  
- Prus *Katarynka*  
- Mickiewicz *Pan Tadeusz* (фрагменти)  
- автори з PP в підручнику: Lechoń, Miłosz, Twardowski, Tuwim, Herbert та ін.

У GWO є сценарії до: *Za niebieskimi drzwiami*, *Baśniobór*, *Harry Potter…*, *Tajemniczy ogród* тощо — це **uzupełniające**, не ядро EduMost ETAP 2, але ETAP 1 може на них спертись, якщо так іде школа.

### 5.11. Powtórzenia

GWO дає **sprawdzian 1 і 2** на кожен з 11 rozdziałów. У EduMost **немає** жодного `powtorzenie-*` для польської (на відміну від біології).

---

## 6. Чого немає в EduMost

### 6.1. Немає як окремих умінь (критично для вересня)

| Уміння | Де в GWO | Де в EduMost |
|---|---|---|
| **apostrofa** (розпізнати в вірші) | с. 10 + ćw. | папка є, **змісту немає** |
| **wers** | Miłosz с. 26, далі ballada с. 210, Staff… | немає урока; слово лише в дистракторах |
| **strofa / zwrotka** | те саме | немає |
| **rym** | те саме | немає як уміння |
| **epitet** | Tuwim с. 64, Deszczyk с. 76 | лише урок 48 (кінець року), рівень визначення |
| **interpretacja wiersza** як синтез | наскрізно I.1 | немає |
| podmiot liryczny на реальному *Noc* | с. 18 | лише визначення |

### 6.2. Немає текстів / тем

Повний перелік — у карті. Найважливіші: с. 12, Hawking, Twardowski, van Gogh, Deszczyk, stopniowanie, Fileas Fogg, Odyseusz як міт, *Katarynka*, Puszka Pandory, wywiad, neologizmy, Chopin, powtórzenia.

### 6.3. Немає продуктових режимів

- ETAP 1 «Teraz w szkole» / Librus  
- assessment set  
- ETAP 3 діагностика прогалин  
- граф передумов (przypadki → apostrofa в wołaczu тощо)

---

## 7. Що дублюється

| Пара | Чому |
|---|---|
| 26-akcja-watek-fabula і 32-fabula-utworu | той самий набір термінів на різних сторінках |
| 07-przypowiesc і частина 42 | gatunek przypowieści двічі, без поглиблення |
| «środki stylistyczne» | розкидані як дистрактори в 11, 12, 16, 33, 36, 47, 48 — ніде як система вмінь |
| Apostrofa | назва урока 02, чернетка в catalog, згадки в 16/38/47, **жодної вправи на вказівку в вірші** |

---

## 8. Що занадто укрупнено

- 14 list + słownik  
- 16 przymiotnik + uosobienie (+ фактично мав би бути epitet)  
- 21 cały czasownik  
- 29 przysłówek + zaimek  
- 30 list oficjalny + przyimek  
- 40 wszystkie części zdania  
- 46 teatr + film  
- 48 trzy środki в одному визначенні  
- 49 ogłoszenie + cytat  
- 34 *Chłopcy z Placu Broni* як **один** урок  
- 22 *W pustyni i w puszczy* як **один** урок  

---

## 9. Що треба розділити

Див. §8. Додатково:

- урок 02 → (a) читання *Preludium* / nastrój / osoba mówiąca; (b) **skill: apostrofa**  
- урок 07 → (a) przypowieść як gatunek; (b) **skill: wers / strofa / rym** на тому ж тексті  
- урок 40 → podmiot, orzeczenie, przydawka, dopełnienie, okolicznik як окремі skill-одиниці з спільним текстом  

---

## 10. Нова структура повного курсу

Не «сторінка = урок» і не «172 шкільні години = 172 екрани».

Три типи одиниць:

1. **TEXT UNIT** — праця з конкретним текстом підручника (*Preludium*, *Noc*, міт, лектура).  
2. **SKILL UNIT** — одне вміння зі сходинками 1–5. Може входити в кілька текстів і в кілька kartkówek.  
3. **ASSESSMENT / REVIEW** — збірка вмінь під перевірку або powtórzenie rozdziału.

### 10.1. Частини ETAP 2 (програма класу 5)

Зберегти **4 części підручника** як навігацію для батьків («де ми в книжці»), всередині — **11 rozdziałów GWO**, а не 6 штучних блоків curriculum.

Всередині rozdziału чергувати TEXT і SKILL, як у школі: спочатку вірш, одразу вміння, яке цей вірш несе.

Чорновий обсяг ETAP 2: **близько 70–90 одиниць EduMost**, не 50 і не 170. Лектури обов’язкові — цикли по 3–5 екранів, не один «визначеннєвий» урок.

### 10.2. Каталог умінь (наскрізний)

Мінімальний skill graph для польської 5:

**Liryka / interpretacja:** wers, strofa, rym, nastrój, podmiot-liryczny, apostrofa, epitet, porownanie, metafora, uosobienie, interpretacja-wiersza  

**Epika:** narrator, bohater, akcja, watek, fabula, mit, bajka, przypowiesc, nowela  

**Dramat / kultura:** dialog, didaskalia, teatr, film, obraz  

**Język:** rzeczownik, przypadki, przymiotnik, czasownik, tryby, aspekt, liczebnik, przyslowek, zaimek, przyimek, wypowiedzenie, czesci-zdania  

**Ortografia / interpunkcja:** wymiana, rz-niewymienne, nie-z-…, cytat  

**Formy:** opis, opowiadanie, list, dziennik, relacja, notatka, ogloszenie, zaproszenie, instrukcja, streszczenie, wywiad  

Кожне вміння: рівні 1 визначення → 2 вибір → 3 вказівка в реченні → 4 вказівка в тексті підручника → 5 функція / самостійне вживання.

---

## 11. ETAP 1 / ETAP 2 / ETAP 3

### ETAP 1 — Teraz w szkole

Джерело: Librus, слова вчителя, «kartkówka в понеділок», сторінки «на цей тиждень».

Це **не номер урока curriculum**. Це `assessmentSet`:

- дата, учитель, вид (kartkówka / sprawdzian)  
- вільний опис з Librus  
- список `skillId`  
- playlist уроків/екранів  
- тексти з підручника для вправи  

Пріоритет UI: якщо є найближча перевірка — показувати її **над** програмою.

На старті: ручне введення батьком (форма «додай kartkówkę»). Автопарсинг Librus не потрібен у v1.

### ETAP 2 — Program klasy 5

Повна послідовність TEXT+SKILL за GWO + *Między nami*, незалежно від того, чи вчитель щось перескочив.

### ETAP 3 — Uzupełnij braki

Якщо дитина в ETAP 2 або 1 падає на рівні 2–3 вміння Y, система пропонує skill unit Y (і його передумови). Приклад: apostrofa потребує розуміння wołacza / звертання; epitet — відрізнити від «звичайного» przymiotnika.

Прогрес: існуючий `localStorage` уроків + новий шар `skills[skillId] = {level, lastOk}`.

---

## 12. Пропонована data model

Новий файл (статичний JS, як `curriculum.js`):

`data/polski-program.js` → `window.EduMostPolskiProgram`

Не замінює `EduMostCurriculum` у v1. Curriculum лишається TOC «підручник». Новий файл — зв’язки.

```js
window.EduMostPolskiProgram = {
  meta: {
    bookId: "miedzy-nami-5",
    nr: "867/2/2018",
    gwoRozklad: "2024",
    gwoUrl: "https://gwo.pl/rozklad-materialu-5-klasa-nowy/"
  },

  skills: [
    {
      id: "apostrofa",
      category: "KSZTALCENIE_LITERACKIE",
      title: { pl: "Apostrofa", ua: "Апострофа" },
      levels: [
        { n: 1, can: "definiuje apostrofę" },
        { n: 2, can: "odróżnia apostrofę od opisu i od znaku '" },
        { n: 3, can: "wskazuje apostrofę w zdaniu" },
        { n: 4, can: "wskazuje apostrofę w wierszu z podręcznika" },
        { n: 5, can: "wyjaśnia funkcję apostrofy" }
      ],
      prerequisites: ["sytuacja-komunikacyjna"],
      textbook: [{ page: 10, textId: "lehon-preludium" }, { page: 64, textId: "tuwim-dwa-wiatry" }],
      gwo: [{ temat: "2", hours: 1, pp: ["I.1.4"] }],
      lessons: ["02-apostrofa" /* після переписування */, "skill-apostrofa"],
      assessmentTags: ["interpretacja-wiersza", "srodki-stylistyczne"]
    }
  ],

  texts: [
    {
      id: "lehon-preludium",
      page: 10,
      title: "Jan Lechoń, Preludium",
      chapter: "zachwycajacy-kosmos",
      skillsTaught: ["nastroj", "osoba-mowiaca", "apostrofa"],
      gwoTematy: ["2"]
    }
  ],

  units: [
    {
      id: "u-preludium",
      kind: "text",           // text | skill | form | lektura | review | assessment
      etap2Order: 2,
      folder: "02-apostrofa", // існуюча папка або нова
      textId: "lehon-preludium",
      skillIds: ["nastroj", "osoba-mowiaca"]
    },
    {
      id: "u-skill-apostrofa",
      kind: "skill",
      etap2Order: 3,
      folder: "skill-apostrofa",
      skillIds: ["apostrofa"]
    }
  ],

  assessmentSets: [
    {
      id: "kartkowka-interpretacja-wiersza-2026-09-14",
      etap: 1,
      date: "2026-09-14",
      source: {
        librus: true,
        teacher: "Wawrzyniak Paweł",
        nrLekcji: 2,
        rodzaj: "kartkowka"
      },
      prompt: "interpretacja wiersza; epitet, apostrofa, wers, zwrotka (strofa), rym, nastrój",
      skillIds: [
        "wers", "strofa", "rym", "epitet", "apostrofa", "nastroj", "interpretacja-wiersza"
      ],
      playlist: [
        "skill-wers",
        "skill-strofa",
        "skill-rym",
        "skill-epitet",
        "skill-apostrofa",
        "skill-nastroj",
        "prep-interpretacja-wiersza"
      ]
    }
  ]
};
```

Чому не один об’єкт «тема = урок»: kartkówka **не дорівнює** одній темі. Skills — первинні; уроки і сторінки — носії.

Сумісність зі статичним проектом: файл підключається лише на `subjects/polski.html` і в польських `index.html` за потреби. Плеєр як і раніше читає `EduMostLessonContent.blocks`.

---

## 13. Які файли змінювати (пізніше, не зараз)

| Файл | Навіщо |
|---|---|
| `data/polski-program.js` | **новий** — skills, texts, units, assessmentSets |
| `js/curriculum.js` | три `parts` (ETAP 1/2/3) або додаткові chapters; виправити помилкові назви; не масово чіпати 50 id, поки не мігруємо |
| `data/lessons.js` | нові folder (skill-*, przygotowanie-*) |
| `subjects/polski.html` | вкладки етапів (після появи даних) |
| `js/subject-page.js` | мінімально: рендер трьох parts / бейдж «kartkówka» |
| `js/i18n.js` | підписи етапів |
| `lessons/polski/skill-*/` | нові короткі skill-уроки |
| `lessons/polski/prep-interpretacja-wiersza/` | перший assessment playlist |
| `lessons/polski/01…50/content.js` | **поетапно**, не всі одразу |
| `lessons/polski/_catalog*.py`, `_build.py` | або вивести з експлуатації, або перестати вважати джерелом істини |
| `docs/PROJECT_TECHNICAL_DOCUMENTATION.md` | після реалізації — згадати polski |
| `docs/POLSKI_CONTENT_DOCUMENTATION.md` | новий, за зразком біології — **після** перших переписаних уроків |

---

## 14. Які файли НЕ змінювати

Без необхідності **не чіпати** спільний движок:

- `js/lesson-engine.js`  
- `js/lesson-renderer.js`  
- `js/lesson-navigation.js`  
- `js/task-engine.js`  
- `js/task-types.js`  
- `js/feedback.js`  

Також не чіпати: математику, історію, біологію, англійську, їхні `content.js`.

Типів завдань для польської **вистачає**: `single-choice`, `multiple-choice`, `input-text`, `true-false`, `open-answer`. Новий тип «вкажи в тексті» можна імітувати вибором фрагмента (як варіанти a/b/c з рядків вірша), без нового engine.

Assessment v1 = **звичайний урок** (папка з `content.js`) або список посилань на skill-уроки. Плеєр не треба переписувати, щоб склеїти playlist.

---

## 15. План міграції існуючих 50

Не видаляти папки одразу: прогрес у `localStorage` прив’язаний до `topicId`.

1. Залишити 50 id як **legacy aliases** у `polski-program.js`.  
2. Виправити TOC-назви (10, 12, 16) — дрібна правка, окремим кроком реалізації.  
3. Переписати **спочатку кластер kartkówki**, не весь рік.  
4. Далі розбирати dział I за GWO, потім граматику як ETAP 3 skills, потім лектури.  
5. Уроки-дублі (26/32) злити на рівні програми, папки залишити редіректом або review.

| Дія | Скільки з 50 |
|---|---|
| KEEP як ядро (після дописування) | ~20 тем, що збігаються з GWO |
| SPLIT | ~10 |
| MERGE | 26+32, частково 07+42 |
| REORDER | 11, 16, 48 і майже весь dział I.3 |
| REWRITE | 03–50 усі; 02 (додати апострофу або розділити) |
| REMOVE як окрему «тему підручника» | 31 (plansza) можна зробити intro rozdziału |
| MISSING → нові | див. §16 |

---

## 16. План створення нових уроків

Перша хвиля (після окремої задачі «реалізуй»):

1. `skill-wers`, `skill-strofa`, `skill-rym`  
2. `skill-epitet` (не чекати с. 357)  
3. `skill-apostrofa` (зібрати те, що вже є в `_catalog.py`, і довести до рівнів 3–5 на *Preludium*)  
4. `skill-nastroj` (винести з 02)  
5. `prep-interpretacja-wiersza` (синтез)  
6. Дописати 02 як TEXT UNIT *Preludium*  
7. Переписати 05 як TEXT UNIT *Noc* + skill podmiot  
8. TEXT UNIT Miłosz з реальною будовою вірша  

Друга хвиля: Twardowski, Tuwim *Dwa wiatry* / *Deszczyk*, van Gogh, Hawking, с. 12.

Третя: лектури PP (Sienkiewicz, Molnár, *Katarynka*) як цикли.

Четверта: решта GWO + `powtorzenie` після кожного rozdziału.

**Не створювати «урок 51» як продовження фейкової нумерації 50.** Нові id: `skill-*`, `prep-*`, `powtorzenie-*`, далі TEXT за slug тексту.

---

## 17. План assessment sets

v1 — один тестовий сет (сьогоднішня kartkówka).

v2 — шаблон: батько вводить дату + список тегів (чебокси: epitet, apostrofa, wers…).

v3 — перевірка rozdziału = GWO sprawdzian 1/2 (11×2), як `powtorzenie` у біології.

Теги (мінімум):

`interpretacja-wiersza`, `srodki-stylistyczne`, `budowa-wiersza`, `podmiot-liryczny`, `mit`, `lektura`, `czesci-mowy`, `czesci-zdania`, `ortografia`, `forma-wypowiedzi`

---

## 18. Приклад повної структури для kartkówki 2026-09-14

**Librus:** 2026-09-14, lekcja 2, Wawrzyniak Paweł, kartkówka, Język polski  
**Опис:** interpretacja wiersza; znajomość terminów i umiejętność wskazania ich w wierszu: epitet, apostrofa, wers, zwrotka (strofa), rym, nastrój.

Це **не** «відкрий урок 02».

```
ASSESSMENT: interpretacja-wiersza
│
├─ SKILL wers          (MISSING → створити)
├─ SKILL strofa       (MISSING → створити)
├─ SKILL rym          (MISSING → створити)
├─ SKILL epitet       (зараз 48, пізно і слабо → новий skill)
├─ SKILL apostrofa   (чернетка в catalog; у 02 немає)
├─ SKILL nastrój     (є в 02, винести/посилити)
└─ SYNTEZA interpretacja prostego wiersza
      тексти: Preludium (с. 10), за бажанням Noc (с. 18)
      без опори на zeszyt
```

Педагогічна послідовність екранів (модель EPITET з ТЗ, те саме для кожного терміна):

1. Co to jest? (PL просто)  
2. Пояснення українською  
3. Приклад  
4. Znajdź w zdaniu  
5. Odróżnij від «звичайного» слова / опису  
6. Znajdź у реальному вірші з *Między nami* (не цитувати весь вірш у додатку — відсилати до с. 10, давати **рядки як варіанти**)  
7. Jaką funkcję pełni?

Останній блок: короткий вірш (або 4–6 рядків, дозволених як приклад, не повний copyright підручника) → «вкажи strofę», «який настрій», «де apostrofa».

Дитина **не потребує конспекту з зошита**, бо EduMost тримає визначення + розпізнавання + функцію + той самий шкільний текст (читає зі с. 10).

---

## 19. Перший dział — kartkówka cluster

| Елемент | Є в проекті? | Де | Зв’язок | Що додати |
|---|---|---|---|---|
| sytuacja komunikacyjna | так, B | 01 | передумова «хто говорить» | KEEP |
| apostrofa | **ні в контенті** | назва 02; catalog | GWO с. 10 | новий skill + вправа на *Preludium* |
| podmiot liryczny | PARTIAL | 05 | GWO с. 18 | переписати; зв’язати з «osoba mówiąca» з 02 |
| środki stylistyczne | PARTIAL / пізно | 16 згадка, 48 визначення | I.1.4 з початку року | epitet окремо і рано |
| wers | немає | — | GWO с. 26 | новий skill |
| strofa / zwrotka | немає | слово «strofa» в 02 як «дві строфи вірша», без визначення | GWO с. 26 | новий skill |
| rym | немає як уміння | дистрактори | GWO с. 26 | новий skill |
| nastrój | так, у 02 | 02 | GWO Temat 2 | посилити як skill |
| interpretacja | немає синтезу | — | kartkówka | prep-урок |

Як зібрати підготовку: **Assessment / Preparation Set**, не один topicId.

---

## 20. Відповіді на контрольні питання

1. **Czy obecne 50 lekcji odpowiadają rzeczywistemu przebiegowi programu GWO?**  
   Ні. Це вибірка ~50 сторінок з ~170 занять. Порядок rozdziałów зламаний (I.3 має 1 тему). Назви 10, 12, 16 роз’їхались зі сторінками.

2. **Czy obejmują wszystkie wymagane obszary?**  
   Ні. Найслабші: будова вірша, засоби (як уміння), лектури PP, форми висловлювання як продукування тексту, powtórzenia, мовлення.

3. **Czego brakuje?**  
   Див. §6. Для найближчого тижня: apostrofa, wers, strofa, rym, epitet, interpretacja як сет.

4. **Co jest źle rozłożone?**  
   Епітет у кінці року. Апострофа в назві, не в змісті. Фабула двічі. I.3 порожній. Граматика злита. Лектури стиснуті до ярлика.

5. **Czy podręcznik i Rozkład GWO są poprawnie połączone?**  
   Ні. Curriculum ≈ «цікаві сторінки книги». GWO = години + PP + ćw. Apostrofa стоїть у **ćwiczeniach до с. 10**, не як окрема «сторінка 10 = апострофа».

6. **Jak połączyć program z bieżącymi kartkówkami?**  
   Assessment tags на skills. ETAP 1 читає теги, не номери уроків. Той самий skill входить і в ETAP 2 (біля свого тексту), і в kartkówkę.

7. **Jak przygotować dziecko do kartkówki bez notatek w zeszycie?**  
   Не сканувати зошит. Дати skill path + той самий вірш зі с. 10. Zeszyt у школі — наслідок урока, не джерело істини для дитини, яка ним не може користуватись.

8. **Jak nie zrobić z EduMost elektronicznego podręcznika?**  
   Не копіювати тексти творів. Не йти сторінка за сторінкою. Вести **вміннями** і **шкільною перевіркою**. Підручник — джерело тексту і порядку; EduMost — розуміння, практика, прогалини.

9. **Jak zachować istniejący lesson engine?**  
   Нові одиниці = ті самі `blocks[]`. Assessment = папка урока або список посилань. Дані в `data/polski-program.js`. Движок не розширювати, поки вистачає choice/input.

10. **Jaka jest minimalna zmiana techniczna?**  
    Один новий data-файл + кілька skill/prep папок + опційно третій `part` у curriculum. Без змін `lesson-engine.js`.

---

## 21. Порядок наступної роботи (після окремої задачі)

Не починати реалізацію в цій сесії.

Запропонована черга, коли прийде «Тепер реалізуй»:

1. `data/polski-program.js` — каркас skills + assessment 14.09  
2. Skill-уроки кластера вірша (wers, strofa, rym, epitet, apostrofa, nastrój)  
3. `prep-interpretacja-wiersza` як ETAP 1  
4. Переписати 02 і 05 під TEXT+skill  
5. Вкладки етапів на `subjects/polski.html`  
6. Решта działu I за картою  
7. Граматика як ETAP 3  
8. Лектури і powtórzenia  

---

*Кінець аудиту. Реалізацію не розпочато.*
