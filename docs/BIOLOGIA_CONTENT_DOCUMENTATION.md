# Документация биологического содержания

Документ для программиста и для Cursor/AI, который меняет биологические `content.js`.

Технический контракт плеера — в `docs/PROJECT_TECHNICAL_DOCUMENTATION.md`.  
Математика — `docs/MATH_CONTENT_DOCUMENTATION.md`.  
История — `docs/HISTORIA_CONTENT_DOCUMENTATION.md`.

Биология использует **тот же плеер**, но не копирует педагогику математики и не копирует YouTube/ось времени истории. Не выдумывать новые типы заданий и не ломать `js/` ради одного экрана.

Поурочные markdown-файлы `BIOLOGIA_LNN_*.md` / `BIOLOGIA_R*_*.md` / шаблон автора **удалены**. Истина урока — `lessons/biologia/*/content.js` плюс этот документ.

---

## 1. Курс

- **Класс:** 5 польской szkoły podstawowej.
- **Учебник:** *Puls życia*, Marian Sęktas, Joanna Stawarz, Nowa Era, nr dopuszczenia **844/1/2018**.
- **Оглавление:** `js/curriculum.js` → `biologia`, `tocStatus: "confirmed"`.
- **Язык курса:** польский. Украинский — полный параллельный текст 1:1 (`pl` / `ua`). В режиме `ua` плеер показывает оба.
- **Нумерованные уроки:** **1–34**. Не создавать «лекcję 35».
- **После каждого działu** — единица **Powtórzenie i sprawdzian** (папка `powtorzenie-*`, **без** поля `num`). Это не новая тема учебника.

Каталог показывает **Otwórz**, только если у темы есть `lesson:` в `curriculum.js` **и** запись в `data/lessons.js`.

---

## 2. Файлы одного урока

```
lessons/biologia/{folder}/
  index.html      # data-subject="biologia" data-topic="{topicId}"
  lesson.js       # EduMostLessonMeta
  content.js      # EduMostLessonContent.blocks
  assets.js       # window.EduMostLessonAssets = {}
  img/PLIKI.txt   # имя PNG, IMAGE PROMPT, URL GitHub (не бинарники)
```

`topicId` в `index.html` / `lesson.js` = `id` темы в `curriculum.js`.

Нумерованный урок:

```js
window.EduMostLessonMeta = {
  id: "bio-20-grzyby-i-porosty",
  subject: "biologia",
  topicId: "grzyby-i-porosty"
};
```

Повторение działu: `id: "bio-r1-powtorzenie-nauka-o-zyciu"`, `topicId` без номера.

Карта папки: `data/lessons.js` ключ `"biologia/" + topicId` → `folder`.

Новый урок: копировать `index.html` с L30+ (`lesson-blocks.css?v=ct1`, `svg-renderer.js?v=ct1`), чтобы работали схемы `class-tree`. Урок 1 специально без `?v=ct1` — не «выравнивать» его без нужды.

---

## 3. Как пишется `content.js`

Хелперы в файле урока (нумерованные L2+):

```js
function em(text) { return { text: text, emphasis: true }; }

var BIO_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Biologia/L20_Grzyby_i_porosty/images/";

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
function tree(spec) {
  spec.kind = "class-tree";
  return spec;
}
```

Повторения (`powtorzenie-*`) передают **папку GitHub** первым аргументом, потому что картинки берутся из разных уроков działu:

```js
function vizGh(folder, file, spec) { /* .../Biologia/{folder}/images/{file}?raw=true */ }
```

Экспорт: `window.EduMostLessonContent = { blocks: [ ... ] }`.

### Текст и выделение

Абзацы — массивы `pl` / `ua` **одинаковой длины**. Смешанная строка с `em()` тоже массив кусков — длины внешних массивов всё равно 1:1.

В обычной строке:

- `**słowo**` — жирный + акцентный цвет (`tx-mark`, как `em()`);
- `*słowo*` — только жирный (`tx-bold`, как `b()`).

`em()` / `b()` по-прежнему работают. Звёздочки вне пар не парсятся.

Язык ученика — польский. Украинский — полный параллельный перевод, не глоссы. Орфографию терминов копировать из соседних уроков. Абзацы учебника *Puls życia* не копировать дословно.

### Картинка на экране

```js
visual: vizGh("l20-owocnik.png", {
  alt: { pl: "...", ua: "..." },
  title: { pl: "...", ua: "..." },
  prompt: { pl: "Edukacyjny schemat 16:9. ... Bez angielskiego, bez logotypów." }
})
```

Плеер грузит `spec.url`. Пока файла нет на GitHub — плейсхолдер с `prompt`. Сырой URL ученику не показывать.

Схемы классификации — `tree({ layout: "fork" | "nested" | "ladder", ... })`, не новая картинка. Подписи вилок короткие (иначе SVG режет текст).

### Задания

Стоят **на блоке** (`task: {}`), не в `data/tasks.js`.

Живые типы: `single-choice`, `multiple-choice`, `true-false`, `input-text`.

Вариант всегда `{ id: "a", label: { pl, ua } }`.  
`multiple-choice`: `answer: ["a", "c"]` (массив id).  
`single-choice` / `true-false`: одно значение.

Не добавлять новые типы ради биологии.

---

## 4. Каркас экранов

### Нумерованный урок (1–34)

Типичный порядок:

1. `goal` — «Paszport lekcji», обычно 5 пунктов.
2. `vocabulary` — «Najważniejsze pojęcia».
3. `intro` — «Zacznijmy» + визуал.
4. Несколько `concept` / `classification` / `comparison` с заданием на блоке.
5. Несколько `check`.
6. `summary` — «Zapamiętaj».
7. `review` — «Sprawdź się» / указатель на соседние уроки.

Один экран — одна идея. Сначала объект (фото, схема), потом термин. Не тащить тему следующего урока.

### Powtórzenie i sprawdzian

Не нумеровать. Типичный порядок:

1. `intro` — «это не новый урок, повторяешь cały dział…»
2. `goal` — 4 пункта «Co umiesz po tym dziale?»
3. Короткие `concept` / `classification` с картинками **уже существующих** уроков działu.
4. `vocabulary`
5. **7 × `check`**
6. `summary`
7. `review` — «Przed szkolnym sprawdzianem»

В TOC нет `num` — иначе появится «35.».

| Dział | Уроки | Папка / topicId |
|---|---|---|
| I | 1–3 | `powtorzenie-nauka-o-zyciu` |
| II | 4–14 | `powtorzenie-budowa-i-czynnosci` |
| III | 15–20 | `powtorzenie-wirusy-bakterie-protisty-grzyby` |
| IV | 21–24 | `powtorzenie-tkanki-i-organy` |
| V | 25–34 | `powtorzenie-roznorodnosc-roslin` |

---

## 5. Список уроков и GitHub

Картинки: репозиторий `edumost-pl/EduMost-szkola_5-klasa-Images`, путь

`Biologia/{FOLDER}/images/{file}.png?raw=true`

Локальный пакет для загрузки L19–L34 (если на GitHub ещё нет папки): `github-upload/Biologia/`. **Загрузку в `content.js` не менять** — после переноса файлов те же URL начнут отдавать PNG.

Имя `{FOLDER}` должно совпасть с `BIO_IMG` в `content.js`.

### I. Biologia — nauka o życiu

| № | Тема | Папка урока | GitHub |
|---|---|---|---|
| 1 | Biologia jako nauka | `01-biologia-jako-nauka` | `L01_Biologia_jako_nauka` |
| 2 | Jak poznawać biologię? | `02-jak-poznawac-biologie` | `L02_Jak_poznawac_biologie` |
| 3 | Obserwacje mikroskopowe | `03-obserwacje-mikroskopowe` | `L03_Obserwacje_mikroskopowe` |
| — | Powtórzenie · nauka o życiu | `powtorzenie-nauka-o-zyciu` | картинки L01–L03 |

### II. Budowa i czynności życiowe organizmów

| № | Тема | Папка | GitHub |
|---|---|---|---|
| 4 | Składniki organizmów | `04-skladniki-organizmow` | `L04_Skladniki_chemiczne_organizmow` |
| 5 | Hierarchiczna budowa organizmów | `05-hierarchiczna-budowa` | `L05_Hierarchiczna_budowa_organizmow` |
| 6 | Komórka zwierzęca | `06-komorka-zwierzecia` | `L06_Komorka_zwierzecia` |
| 7 | Komórka roślinna | `07-komorka-roslinna` | `L07_Komorka_roslinna` |
| 8 | Porównujemy komórki | `08-porownujemy-komorki` | `L08_Porownujemy_komorki` |
| 9 | Samożywność i fotosynteza | `09-fotosynteza` | `L09_Samozywnosc_i_fotosynteza` |
| 10 | Doświadczenie: fotosynteza | `10-doswiadczenie-fotosynteza` | `L10_Doswiadczenie_fotosynteza` |
| 11 | Cudzożywność | `11-cudzozywnosc` | `L11_Cudzozywnosc` |
| 12 | Oddychanie tlenowe i fermentacja | `12-oddychanie-i-fermentacja` | `L12_Oddychanie_tlenowe_i_fermentacja` |
| 13 | Doświadczenie: fermentacja | `13-doswiadczenie-drozdze` | `L13_Doswiadczenie_fermentacja` |
| 14 | Czynności życiowe organizmów | `14-czynnosci-zyciowe` | `L14_Czynnosci_zyciowe_organizmow` |
| — | Powtórzenie · budowa i czynności | `powtorzenie-budowa-i-czynnosci` | картинки L04–L14 |

### III. Wirusy, bakterie, protisty i grzyby

| № | Тема | Папка | GitHub |
|---|---|---|---|
| 15 | Klasyfikacja organizmów | `15-klasyfikacja-organizmow` | `L15_Klasyfikacja_organizmow` |
| 16 | Wirusy | `16-wirusy` | `L16_Wirusy` |
| 17 | Jak żyją bakterie | `17-bakterie` | `L17_Jak_zyja_bakterie` |
| 18 | Bakterie — znaczenie i zdrowie | `18-bakterie-znaczenie` | `L18_Bakterie_znaczenie_i_zdrowie` |
| 19 | Protisty | `19-protisty` | `L19_Protisty` |
| 20 | Grzyby i porosty | `20-grzyby-i-porosty` | `L20_Grzyby_i_porosty` |
| — | Powtórzenie · wirusy… | `powtorzenie-wirusy-bakterie-protisty-grzyby` | картинки L15–L20 |

### IV. Tkanki i organy roślinne

| № | Тема | Папка | GitHub |
|---|---|---|---|
| 21 | Tkanki roślinne | `21-tkanki-roslinne` | `L21_Tkanki_roslinne` |
| 22 | Korzeń | `22-korzen` | `L22_Korzen` |
| 23 | Łodyga | `23-lodyga` | `L23_Lodyga` |
| 24 | Liść | `24-lisc` | `L24_Lisc` |
| — | Powtórzenie · tkanki i organy | `powtorzenie-tkanki-i-organy` | картинки L21–L24 |

### V. Różnorodność roślin

| № | Тема | Папка | GitHub |
|---|---|---|---|
| 25 | Mchy | `25-mchy` | `L25_Mchy` |
| 26 | Paprociowe | `26-paprociowe` | `L26_Paprociowe` |
| 27 | Rośliny nagonasienne | `27-nagonasienne` | `L27_Nagonasienne` |
| 28 | Drzewa iglaste | `28-drzewa-iglaste` | `L28_Drzewa_iglaste` |
| 29 | Rośliny okrytonasienne | `29-okrytonasienne` | `L29_Okrytonasienne` |
| 30 | Kwiat | `30-kwiat` | `L30_Kwiat` |
| 31 | Jak rozsiewają się nasiona | `31-rozsiewanie-nasion` | `L31_Rozsiewanie_nasion` |
| 32 | Doświadczenie: kiełkowanie | `32-doswiadczenie-kielkowanie` | `L32_Doswiadczenie_kielkowanie` |
| 33 | Drzewa liściaste i znaczenie roślin | `33-drzewa-lisciaste` | `L33_Drzewa_lisciaste` |
| 34 | Rozpoznajemy grupy roślin | `34-rozpoznajemy-grupy-roslin` | `L34_Rozpoznajemy_grupy_roslin` |
| — | Powtórzenie · różnorodność roślin | `powtorzenie-roznorodnosc-roslin` | картинки L25–L34 |

---

## 6. Подключение к каталогу

1. Тема в `js/curriculum.js` (поле `lesson`, для нумерованных — `num` и `page`).
2. Запись в `data/lessons.js`.
3. Папка урока с четырьмя JS/HTML файлами.
4. PNG на GitHub с **точным** именем из `vizGh`. Список имён и промптов — `img/PLIKI.txt`.

Не трогать плеер (`js/lesson-*.js`), если можно решить экраном. Не коммитить секреты. Коммит — только по просьбе автора.

Проверка перед сдачей:

- `node --check content.js lesson.js`
- `pl.length === ua.length` у каждого `text`
- у `multiple-choice` у каждого option есть `id` и `label`
- каталог: **Otwórz**, у повторения нет номера «35.»
- плеер: польский intro, Dalej, одно задание
---
