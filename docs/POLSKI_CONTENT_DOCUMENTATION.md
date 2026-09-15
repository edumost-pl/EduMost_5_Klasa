# Документация польского содержания

Документ для программиста и для Cursor/AI, который пишет `lessons/polski/*/content.js`.

Плеер: `docs/PROJECT_TECHNICAL_DOCUMENTATION.md`.  
Этот файл — **единственный** документ по сборке уроков польского в репозитории (факт практики T53+).

---

## 1. Курс

- **Класс:** 5 szkoły podstawowej.
- **Подручник:** *Między nami 5*, Agnieszka Łuczak / Anna Murdzek, GWO, nr **867/2/2018**.
- **Нумерация:** каталог GWO **T1–T177** (= 1 школьный час на тему). В хабе открыты интерактивные папки по мере сборки (`lessons/polski/NN-…`).
- **Не путать** с rozkładem **Między nami 4 (2026)** и PP Reforma26 для классов I/IV — для класса 5 в 2026/27 опора **GWO 2024**.
- **Оглавление:** `js/curriculum.js` (части I–III, темы с `lesson`).  
- **Каталог карточек:** `data/polski-course.js` (T1–T177: title, page, skills, outcome, category).  
- **Страница предмета:** `subjects/polski.html` + `js/polski-page.js` (`LESSON_HREF`).

Официальные источники GWO (для целей / сторон / can-do, не копировать таблицы оценок 1–6 в код):

- [Rozkład materiału kl. 5](https://gwo.pl/rozklad-materialu-5-klasa-nowy/)
- [Plan wynikowy](https://gwo.pl/plan-wynikowy-5-klasa-nowy-2/)
- [Kryteria do tematów](https://gwo.pl/kl-5-kryteria-oceniania-do-poszczegolnych-tematow-nowe-2/)

**Педагогика (кратко):** EduMost — не онлайн-подручник. Ребёнок работает с книгой; приложение ведёт: **понятие → упражнение → самостоятельное использование**. Язык урока — **польский школьный**; украинский — параллельная опора, **не** замена текста произведения.

---

## 2. Жёсткие запреты

Не менять (даже «для удобства» урока):

- `js/lesson-engine.js`
- `js/lesson-renderer.js`
- `js/lesson-navigation.js`
- `js/task-engine.js`
- `js/task-types.js`
- `js/feedback.js`

Не переписывать объекты **чужих** T в `data/polski-course.js` (только текущий T#).  
Не склеивать два урока на одну страницу.  
Не выдумывать новые типы заданий в движке.

---

## 3. Файлы урока

```
lessons/polski/{NN}-{slug}/
  index.html      # data-subject="polski" data-topic="{topicId}"
  lesson.js       # EduMostLessonMeta
  content.js      # EduMostLessonContent.blocks
  assets.js       # галерея / scroll-reader / {} 
  tNN-*.jpg|png   # сканы и задания (локально + URL GitHub)
```

`data/lessons.js`: ключ `"polski/" + topicId` → `folder`.  
`js/curriculum.js`: тема с `id: topicId`, `lesson: "NN-slug"`.  
`js/polski-page.js`: `TNN: "../lessons/polski/NN-slug/index.html"`.

`lesson.js` (пример):

```js
window.EduMostLessonMeta = {
  id: "pol-71-tulaczka-odyseusza",
  subject: "polski",
  topicId: "tulaczka-odyseusza"
};
```

Хелперы в `content.js`:

```js
function emT71(text) { return { text: text, emphasis: true }; }
var POL_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/polska/";
function vizGh(file, spec) {
  spec = spec || {};
  spec.kind = "image-placeholder";
  spec.file = "./" + file;
  spec.url = POL_IMG + file + "?raw=true";
  return spec;
}
```

**Общие картинки между соседними уроками:** один набор файлов (например в T71), второй урок ссылается путём `../71-…/t71-tekst-148.jpg`. Не дублировать и не плодить `t72-tekst-*` копии/симлинки «для красоты дерева».

---

## 4. Экран = один блок + одно задание

Плеер: **один `block` = один экран**, у блока обычно одно поле `task`.

Рабочие `task.type` (v1):

| type | Когда |
|---|---|
| `single-choice` | один верный вариант |
| `multiple-choice` | несколько верных (`answer: ["a","c"]`) |
| `true-false` | правда / ложь |
| `input-text` / `input-number` | короткая форма |
| `open-answer` | развёрнутый ответ (оценка человеком / ключ в explanation) |

`sort` / `match` / `order` в движке — заглушки: **не использовать**. Вместо порядка — MC с правильной последовательностью как вариантом.

Типы блоков, которые реально пишем:

`goal` · `observe` · `concept` · `example` · `practice` · `summary`  
(плюс при необходимости `vocabulary` / другие из META плеера — без новых типов.)

Каждый осмысленный экран: `heading` {pl, ua}, `formula` (строка страницы / этапа), `prompt`, `items` и/или `text`, `task`.

Порядок типичной лекции:

1. `goal` — «Po tej lekcji umiem»
2. `observe` — контекст / герои / burza mózgów
3. чтение текста / wiersza (сканы)
4. `example` или `concept` — глосы / правило (рамка)
5. `practice` × n — задания з podręcznika
6. `summary` — нотатка + проверка

---

## 5. PL / UA

- Польский — первый, полноценный.
- Украинский — под каждым блоком (`tx-ua`), короче; термины польские можно оставлять курсивом с пояснением.
- **Художественный текст / wiersz / длинный прозаический фрагмент не переводим дословно** на UA — даём опору (кто, где, трудные слова).
- В `items` не спойлерить ключ до *Sprawdź* (см. §7).

---

## 6. Картинки и чтение

### Обычная иллюстрация / задание

```js
visual: vizGh("t70-zad1.png", {
  alt: { pl: "…", ua: "…" },
  place: "after"
})
```

`kind: "image-placeholder"` + локальный `./file` + GitHub `?raw=true`.  
Клик по `img.viz-img` открывает lightbox (уже в `svg-renderer.js`).

### Важно: `block.visual` игнорируется, если есть `block.steps`

Несколько страниц текста **не** класть в `steps` с `reveal` «как галерею чтения».  
Для длинного текста: **`assets.js`** вставляет галерею / reader, когда в `formula` есть ключ (например `fragment` или `wiersz`).

### Многостраничное чтение (эталон T70 / T71)

В одном блоке:

1. превью — **каждая страница отдельно** (карточки);
2. клик или кнопка **↗** → полноэкранное увеличение;
3. **прокрутка только после увеличения** (все страницы в lightbox).

CSS классов `.em-read-*` уже завязан на топики (`ceram-schliemann`, `tulaczka-odyseusza`, …). Новый топик с reader — добавить в `:is(...)` в `css/lesson-blocks.css`.

### Рамки podręczника

- Правило / определение → `type: "concept"` + `block.text`
- Словарик / примеры → `type: "example"` + `block.text`
- Новый `data-topic` — добавить во все списки `:is([data-topic=…])` для `concept` / `example` в `lesson-blocks.css`, иначе текст рамки может не показаться.
- Глобальный CSS иногда прячет 6–7-й `.tx-pl` в observe — для топика нужен override `nth-of-type(6|7) { display: block !important; }` (как у соседних T).

---

## 7. Ответы без спойлеров

До нажатия *Sprawdź*:

- в `items` / `prompt` **нет** полного ключа;
- ключ — в `explanation` (и при необходимости в `hint` без готового ответа).

Плохо: список «poniedziałek = Himalaje…» над заданием.  
Хорошо: «ułoż w zeszycie; klucz po Sprawdź» + варианты в MC.

---

## 8. Wiring нового T#

1. Скопировать сканы в `lessons/polski/NN-slug/`.
2. `content.js`, `index.html`, `lesson.js`, `assets.js`.
3. Записи: `data/polski-course.js` (этот T), `js/curriculum.js`, `data/lessons.js`, `js/polski-page.js` `LESSON_HREF`.
4. CSS: топик в списках concept/example + блок topic CSS в конце `lesson-blocks.css`.
5. Jump-nav: предыдущий урок → ссылка на новый; версии `?v=` у `content.js`, `curriculum`, `polski-page`, `polski-course`, `lesson-blocks.css`.
6. `node --check …/content.js` и HTTP smoke `http://127.0.0.1:8765/lessons/polski/NN-slug/index.html`.

Локальный сервер: из корня репо  
`python3 -m http.server 8765 --bind 127.0.0.1`.

---

## 9. Категории на карточке курса (справка)

Из каталога / навигации (цвет на `subjects/polski.html`, не внутри плеера):

| category | Примеры |
|---|---|
| LITERATURA | wiersz, mit, analiza |
| CZYTANIE | dłuższy tekst, relacja |
| GRAMATYKA | części mowy, tryby… |
| ORTOGRAFIA | pisownia |
| PISANIE | list, dziennik, notatka |
| LEKTURY / KULTURA_MEDIA | по каталогу |

`type` скелета (TEXT / WIERSZ / GRAMMAR / …) — методическая метка при планировании; в `content.js` это не отдельное поле движка, а выбор экранов.

---

## 10. Чеклист перед сдачей урока

- [ ] Один T# = одна папка; jump-nav на соседей.
- [ ] Каждый экран имеет `task` рабочего типа.
- [ ] PL полный, UA под ним; художественный текст не переведён дословно.
- [ ] Ключи только после *Sprawdź*.
- [ ] Картинки: `./` + GitHub; читання wielostronicowe — отдельные страницы + enlarge → scroll.
- [ ] Нет копий одних и тех же сканов в двух папках.
- [ ] Топик в CSS concept/example + override 6/7 абзаца.
- [ ] Версии скриптов bump; `node --check`; страница открывается (HTTP 200).
- [ ] Движки из §2 не трогались.

---

## 11. Что не входит в этот документ

- Статусы «какой T ещё не собран» — смотреть `js/curriculum.js` и папки `lessons/polski/`.
- Контракт плеера (движки, localStorage) — `PROJECT_TECHNICAL_DOCUMENTATION.md`.
- Таблицы оценок GWO 1–6 и закрытые PDF SPE — не копировать в код; цели брать из plan wynikowy / podręcznika.
