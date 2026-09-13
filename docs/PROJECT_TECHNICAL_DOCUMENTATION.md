# Техническая документация EduMost

Документ для программиста. Описывает **фактическое** устройство репозитория `EduMost_5_Klasa` после завершения курса математики 01–50 и появления интерактивных истории и биологии. Не проектирует новую архитектуру.

Источник правды — код в `js/`, `data/`, `lessons/matematyka/`, `lessons/historia/`, `lessons/biologia/`, `lessons/angielski/`, `css/`.

Содержание уроков:

- математика — `docs/MATH_CONTENT_DOCUMENTATION.md`;
- история — `docs/HISTORIA_CONTENT_DOCUMENTATION.md` (тот же плеер, другая педагогика и картинки GitHub);
- биология — `docs/BIOLOGIA_CONTENT_DOCUMENTATION.md` (тот же плеер; 34 нумерованных урока + 5 повторений działów; картинки GitHub `Biologia/`);
- английский — `docs/ANGIELSKI_CONTENT_DOCUMENTATION.md` (тот же плеер; *Flash* 5; модуль I открыт).

---

## 1. Назначение проекта

EduMost — статический учебный хаб для класса **5a** (SP nr 3, Poznań). Интерфейс двуязычный: польский (язык школы) и украинский (помощь ребёнку).

На главной (`index.html`) есть карточки предметов. **Интерактивные уроки с плеером есть у математики (50 тем), истории (38 тем), биологии (34 + 5 повторений) и английского (модуль I *Flash*: 8 уроков + Progress Check 1; модули II–VI в TOC без ссылки).** Остальные предметы в `js/curriculum.js` имеют `tocStatus: "pending"` и пустой `parts` — на странице предмета заглушка «Wkrótce».

Курс математики следует *Matematyka z kluczem* (Nowa Era, Braun / Mańkowska / Paszyńska, nr 875/2/2018): Część 1 и Część 2, разделы I–VII, **50 тем**.

Курс истории следует *Wczoraj i dziś* (Grzegorz Wojciechowski, Nowa Era, nr 877/2/2018): разделы I–VII, **38 тем**, `hidePath: true`. Уроки 01–10 переписаны; 11–38 пока черновик — см. документ истории.

Курс биологии следует *Puls życia* (Marian Sęktas, Joanna Stawarz, Nowa Era, nr 844/1/2018): разделы I–V, **уроки 1–34** плюс **Powtórzenie i sprawdzian** после каждого działu (без номера «35.»). Как писать `content.js` — `docs/BIOLOGIA_CONTENT_DOCUMENTATION.md`.

Курс английского следует *Flash* (Jenny Dooley, Express Publishing, nr 866/2/2018): шесть модулей Student's Book. В плеере открыт **My World** (уроки 1–8 + Progress Check 1). Модули II–VI и Festivities стоят в каталоге без поля `lesson`. Как писать `content.js` — `docs/ANGIELSKI_CONTENT_DOCUMENTATION.md`.

Как ребёнок проходит урок:

1. Главная → `subjects/matematyka.html`, `subjects/historia.html`, `subjects/biologia.html` или `subjects/angielski.html`.
2. Тема с полем `lesson` открывается как ссылка на `lessons/{subject}/{folder}/index.html`.
3. Урок — последовательность **экранов** (`blocks[]`). На экране один блок: теория, схема или задание.
4. Навигация: «Wstecz» / «Dalej» и точки прогресса. Вперёд можно только на уже посещённый экран или на **следующий** (`index + 1`).
5. Переключение языка перерисовывает текущий экран (`событие edumost:lang`).

Бэкенда нет. Прогресс урока пишется в `localStorage`.

---

## 2. Структура проекта

Фактическое дерево (без `node_modules`; репозиторий — набор статических файлов):

```
EduMost_5_Klasa/
  index.html                 # главная: предметы, ссылки для родителей
  schedule.html
  master-plan.html
  etap-1-5.html
  dictionaries-index.html
  css/
    edumost.css              # общая тема хаба
    index.css
    lesson.css               # оболочка урока (topbar, pager, identity)
    lesson-blocks.css        # карточки блоков теории
    tasks.css                # карточка задания
    schedule.css
  js/
    i18n.js                  # язык UI + событие edumost:lang
    curriculum.js            # оглавление предметов и тем
    home.js                  # сетка предметов на главной
    subject-page.js          # страница предмета (TOC)
    subject-shell.js         # init страницы предмета
    lesson-engine.js         # плеер урока: индекс экрана, header, redraw
    lesson-renderer.js       # HTML одного блока
    lesson-navigation.js     # точки + Wstecz/Dalej; oś czasu истории из historia-axis.js
    historia-axis.js         # канонические тики p.n.e. + nasza era (только Historia)
    task-engine.js           # карточка задания, кнопки, вызов проверки
    task-types.js            # рендер полей ввода / вариантов
    feedback.js              # сравнение ответа (validator)
    svg-renderer.js          # схемы visual.kind
    progress.js              # localStorage прогресса урока
  data/
    lessons.js               # карта topicId → folder урока
    tasks.js                 # банк заданий уроков 01–03 + EduMostGetTask
    assets.js                # ключи картинок (URL сейчас пустые строки)
  lessons/matematyka/
    01-dzialania-pamieciowe/
    …
    50-siatki-graniastoslupow/
      index.html
      lesson.js
      content.js
      assets.js
  lessons/historia/
    01-zycie-pierwszych-ludzi/
    …
    38-monarchia-stanowa-w-polsce/
      index.html
      lesson.js
      content.js
      assets.js
      img/PLIKI.txt          # опись GitHub Historia/NNN.png (эталон 03–10)
  lessons/biologia/
    01-biologia-jako-nauka/
    …
    34-rozpoznajemy-grupy-roslin/
    powtorzenie-nauka-o-zyciu/   # и ещё 4 powtorzenie-* после działów II–V
      index.html
      lesson.js
      content.js
      assets.js
      img/PLIKI.txt          # имя PNG, промпт, URL GitHub Biologia/
  lessons/angielski/
    01-typical-day/ … 08-good-students/
    flash-time-perfect-school/
    powtorzenie-my-world/    # Progress Check 1; модули II–VI пока только в TOC (коды 2/2a… как в planie wynikowym)
      index.html
      lesson.js
      content.js
      assets.js
      img/PLIKI.txt
  subjects/                  # по HTML на предмет
  dictionaries/              # отдельные словари/мини-сайты, не плеер урока
  topics/matematyka/         # устаревшая/отдельная страница potegowanie.html
  docs/                      # эта документация
```

Плеер урока **не** использует `dictionaries/` и `topics/matematyka/potegowanie.html`. Это соседние материалы хаба.

---

## 3. Архитектура урока

### 3.1. Файлы одной темы

Каждая тема — папка `lessons/{subject}/{folder}/` (`matematyka`, `historia` или `biologia`). Нумерованные уроки — `{NN}-{topicId}`; повторения биологии — `powtorzenie-*` без цифрового префикса:

| Файл | Роль |
|---|---|
| `index.html` | Оболочка: CSS, слоты DOM, порядок скриптов |
| `lesson.js` | `window.EduMostLessonMeta` (`id`, `subject`, `topicId`) |
| `content.js` | `window.EduMostLessonContent = { blocks: [...] }` |
| `assets.js` | `window.EduMostLessonAssets` (локальные ключи; у 04–50 обычно `{}`) |

Порядок скриптов в `index.html` (факт):

`i18n.js` → `historia-axis.js` (только уроки `lessons/historia/`) → `curriculum.js` → `data/lessons.js` → `data/assets.js` → `data/tasks.js` → `progress.js` → `feedback.js` → `svg-renderer.js` → `task-types.js` → `task-engine.js` → `lesson-renderer.js` → `lesson-navigation.js` → `./lesson.js` → `./content.js` → `./assets.js` → `lesson-engine.js`.

`lesson-engine.js` стартует последним: читает meta, content и вешает обработчики.

### 3.2. Где контент и где задания

- Текст экранов — всегда `content.js`, массив `blocks`.
- Задания уроков **01–03** лежат в `data/tasks.js` (`window.EduMostTaskBank`). Блок ссылается через `taskId`.
- Задания уроков **04–50**, **всех исторических** и **всех биологических** встроены в блок: поле `task: { ... }`. `data/tasks.js` для них не используется.

Резолв в `js/task-engine.js`:

```javascript
if (block.taskId) return window.EduMostGetTask(block.taskId);
return block.task || null;
```

Оба способа совместимы с одним движком.

### 3.3. Подключение к приложению

1. В `js/curriculum.js` у темы должно быть поле `lesson` (строка-имя папки, например `"04-cyfry-rzymskie"`). Без него в TOC статус «Wkrótce», ссылки нет.
2. В `data/lessons.js` запись `"{subject}/{topicId}"` с `folder`. Функция `EduMostLessonHref(subjectId, topic)` строит URL `../lessons/{subject}/{folder}/index.html` (со страницы предмета).
3. `body` урока: `data-subject="{subject}"` и `data-topic="{topicId}"`. Meta в `lesson.js` дублирует `subject` и `topicId`.

Порядок тем на странице предмета = порядок массивов `parts → chapters → topics` в `curriculum.js`, не алфавит папок.

### 3.4. Язык PL/UA

- Хранение: `localStorage` ключ `edumost-lang`, значения `"pl"` | `"ua"`.
- Если ключа нет, `EduMostI18n.getLang()` возвращает **`"ua"`**.
- Кнопки `.lang-toggle [data-lang]` вызывают `setLang`, диспатчится `edumost:lang`, плеер вызывает `show()` — полный перерисов текущего блока.

Учебный текст в блоках и в `task.question` — объекты `{ pl, ua }` (или массив абзацев / частей с `em()`).

Поведение рендера (`prose` в `lesson-renderer.js`, `dual` в `task-types.js`):

- режим **pl**: только польский (`tx-pl`);
- режим **ua**: польский **и** украинский (`tx-pl` + `tx-ua`).

Заголовок блока: польский всегда; украинский — `<span class="name-ua">` только при `lang === "ua"`.

Строки хрома (кнопки «Sprawdź», уровни, «Dalej») — словари `UI.pl` / `UI.ua` в `i18n.js`.

---

## 4. Архитектура задания

Объект задания — обычный JS-объект. Схемы TypeScript в проекте нет; поля выводятся из кода `task-types.js`, `task-engine.js`, `feedback.js` и фактических уроков.

### 4.1. Поля

| Поле | Обязательность | Смысл |
|---|---|---|
| `id` | practically да | прогресс (`recordTask`); имя radio-группы |
| `type` | да | ключ в `TYPES` |
| `question` | да для живых типов | условие; `{ pl, ua }` или строка |
| `answer` | да, если нужна проверка | эталон; `undefined`/`null` → проверка не ставит верно/неверно |
| `level` | нет | A / B / C / D / `challenge`; без поля бейдж не рисуется |
| `hint` | нет | кнопка «Podpowiedź» появляется только если поле есть |
| `explanation` | нет | показывается **после верного** ответа |
| `options` | для choice | `{ id, label: { pl, ua } }` |
| `mistakes` | нет | `{ answer, feedback: { pl, ua } }` — текст при конкретном неверном ответе |

Других полей движок не читает.

### 4.2. Живые типы (`task-types.js`)

Реализованы полностью:

- `single-choice` — radio, ответ = `option.id` (строка);
- `multiple-choice` — checkbox, ответ = массив id (в текущих уроках математики **не используется**);
- `input-number` — текстовое поле, `inputmode="decimal"`; `getAnswer` даёт `Number` после замены `,` → `.`, либо сырую строку, если `NaN`;
- `input-text` — строка `trim()`;
- `true-false` — radio `true`/`false`, `getAnswer` возвращает **boolean**;
- `open-answer` — textarea; в курсе математики **не используется**. Если `answer` не задан, `evaluate` возвращает `ok: null`.

Зарегистрированы как **заглушка** (`taskStub`, `getAnswer` → `null`):  
`sort`, `match`, `fill-blanks`, `order`, `drag-drop`, `select-on-image`, `build-expression`, `number-line`, `geometry`.  
Их нельзя ставить в урок: поля ввода нет, проверка не работает.

### 4.3. Формат `question` и выделение

`dual()`:

- строка → один абзац;
- `{ pl, ua }` как строки → по абзацу;
- плоский массив частей (строки + `{ text, emphasis: true }`) → **один** абзац с `<strong>`;
- массив массивов → несколько абзацев.

В `content.js` принят хелпер:

```javascript
function em(text) {
  return { text: text, emphasis: true };
}
```

Пример из `data/tasks.js` (урок 01):

```javascript
"dzial-group-compute": {
  id: "dzial-group-compute",
  type: "input-number",
  level: "A",
  question: {
    pl: ["Oblicz: ", em("52 + 36 + 18 + 4"), ". Wpisz tylko wynik."],
    ua: ["Обчисли: ", em("52 + 36 + 18 + 4"), ". Введи лише результат."]
  },
  answer: 110,
  hint: { pl: "…", ua: "…" },
  explanation: { pl: "…", ua: "…" }
}
```

Пример inline (урок 04): блок `practice` с полем `task: { id, type, level, question, answer, hint, explanation }`.

### 4.4. Ответы

- Число: `answer: 14` (тип number). Ввод `14` и `14,0` совпадут через `Number`.
- Несколько текстовых вариантов: массив строк, **первый элемент не number**:

```javascript
answer: ["IV", "iv"]
```

`evaluate` делает `.some(eq)`. Регистр не важен (`norm` → `toLowerCase()`).

- Выбор: `answer: "b"` как `options[].id`.
- Верно/неверно: `answer: true` или `false` (boolean, как `getAnswer`).

Массив **чисел** как список альтернатив **не** обрабатывается веткой `.some`: условие `typeof task.answer[0] !== "number"`. Для чисел указывайте одно число или не используйте numeric-array.

### 4.5. hint и explanation

- Hint: по кнопке, класс `is-hint`, текст без проверки ответа.
- Explanation: только при `ok === true`, под заголовком «Dobrze!».
- Неверный ответ без попадания в `mistakes`: заголовок «Jeszcze raz.», пустой detail.

### 4.6. Уровни

`task-engine.js` → подписи `i18n`:

| `level` | PL | UA |
|---|---|---|
| A | Poziom A · Podstawy | Рівень A · Основи |
| B | Poziom B · Ćwiczę | Рівень B · Тренуюсь |
| C | Poziom C · Myślę | Рівень C · Думаю |
| D | Poziom D · Zastosowanie | Рівень D · Застосування |
| challenge | Wyzwanie | Виклик |

В `data/tasks.js` у 01–03 встречаются A, B, C и **D** (три задания: `dzial-check-near`, `kolej-shop`, `kolej-wheels`). В `content.js` уроков 04–50 в коде стоят A, B, C (по состоянию репозитория: порядка 153 A, 183 B, 51 C).

---

## 5. Task engine

Файл: `js/task-engine.js`. Публичный API: `EduMostTaskEngine.mount`, `EduMostTaskEngine.resolve`.

Поток:

1. `lesson-renderer` вызывает `resolve(block)` → объект task.
2. `mount(el, task, ctx)`:
   - `EduMostTaskTypes.render(task)` → `{ html, getAnswer }`;
   - собирает `.task-card`: бейдж уровня → `.task-body` (вопрос + поле) → кнопки → `.task-feedback`;
   - «Sprawdź»: `getAnswer(el)` → `EduMostFeedback.evaluate(task, answer)` → классы `is-ok` / `is-bad` / `is-hint`;
   - при `result.ok !== null` вызывается `ctx.onResult` → в плеере `EduMostProgress.recordTask`.
3. Переход на другой экран — не задача engine: это `lesson-engine.go`. Проверка ответа **не** открывает следующий экран автоматически.

Карточка **не** содержит заголовок урока: заголовок рисует renderer **над** `.task-slot`.

Порядок в DOM карточки (факт CSS/HTML):

1. `.task-level` (если есть `level`);
2. вопрос и поле (`dual(question)` внутри body);
3. кнопки Sprawdź / Podpowiedź;
4. feedback.

Если часть условия положить в `block.text`, а часть в `task.question`, между ними окажется бейдж уровня. Эталон 01–03 для practice/check держит действие в `question`. У `problem` история часто в `block.text`, короткий вопрос — в `task.question` (так в 03).

---

## 6. Renderer

Файл: `js/lesson-renderer.js`. API: `EduMostLessonRenderer.render(mount, block, ctx)`.

Один вызов = один экран. Корневой тег: `<article class="lesson-block" data-type="…">`.

Типы из `META` (иконка + ключ i18n заголовка, если нет `block.heading`):

`intro`, `lesson-intro`, `goal`, `observe`, `concept`, `visual`, `example`, `algorithm`, `guided-practice`, `practice`, `task`, `mistake`, `comparison`, `classification`, `problem`, `challenge`, `check`, `summary`, `reflection`, `review`, `vocabulary`.

В курсе 01–50 реально встречаются как `block.type` среди прочего: intro, goal, observe, concept, visual, example, algorithm, guided-practice, practice, mistake, comparison, classification, problem, challenge, check, summary, review, vocabulary. Типы `reflection` и `task` в META есть; в текущих `content.js` как тип блока почти не используются.

Общий порядок тела (не goal/vocabulary/mistake):

`visual` (если нет `steps`) → `formula` (класс `.math-line`) → `text` → `prompt` (зелёный `.prompt`) → `items` (список) → `steps` / reveal → слот задания.

Особые ветки:

- `goal` — список `items` с чекбоксами-декором;
- `vocabulary` — таблица `rows: [{ pl, ua }]` и `phrases`;
- `mistake` — `claim`, вердикт «Nie.», visual, text;
- `reveal: true` на `steps` — кнопка «Pokaż następny krok».

Схемы: `block.visual.kind` → `EduMostSvg.render` (`js/svg-renderer.js`).

Виды `kind` в renderer:

`asset`/`image`, `power`, `power-grow`, `power-labeled`, `power-false`, `add-reorder`, `add-groups`, `split-rect`, `near-multiply`, `split-divide`, `zeros-scale`, `ops-queue`, `expr-pair`, `fraction-bar`, `angle`, `number-line`, `grid`, `geo-lines`, `triangle`, `quad`, `net`.

Неизвестный `kind` даёт пустую строку.

---

## 7. Validator

Отдельного файла `validator.js` нет. Проверка — `js/feedback.js`, функция `EduMostFeedback.evaluate`.

`norm(v)` для строк: `trim`, `,` → `.`, `toLowerCase`, надстрочные `¹…⁹⁰` → `^1`…`^0`.

`eq(a, b)`:

- пустые / `null` / `undefined` эталона или ответа → ложь;
- если хотя бы один операнд числовой (или эталон число) — сравнение через `Number` после замены запятой;
- иначе сравнение `norm`.

Ветки `evaluate`:

1. нет `answer` → `{ ok: null, headline: placeholder }` (плейсхолдер i18n);
2. `answer` — массив не-чисел, пользователь не массив → OR по элементам;
3. оба массива → мультивыбор: сортировка `norm`, склейка `|`;
4. иначе `eq(answer, userAnswer)`.

Особенности:

- `7⁴` и `7^4` совпадут после `norm`;
- `7**4` **не** превращается в `7^4` автоматически — только если явно перечислено в `answer`;
- дроби как текст: `"3/4"` ≠ `"6/8"` (нет канонизации дроби);
- `input-number` отдаёт number: `0,2` и `0.2` и `0.20` обычно равны;
- boolean true-false сравнивается как boolean, не как строка `"true"`.

---

## 8. UI

Оболочка урока (`index.html` + `lesson.css`):

- `.topbar` — ссылка назад на предмет, переключатель языка;
- `#lesson-identity` — раздел, название темы, учебник и страница (`s. N` из curriculum);
- `#lesson-progress` — `N / total` и точки экранов; у истории под точками ось из `js/historia-axis.js` (тики `from <=` номер урока + справа **nasza era**; с урока 7 — скользящее окно, левый край от Indus). Математика скрипт не грузит — оси нет.
- `#lesson-stage` — текущий блок;
- `#lesson-nav` — Wstecz / Dalej.

Теория: `.lesson-block`, заголовок `.block-title`, формулы `.math-line`, акцент `.prompt`, схема `.viz`.

Задание: см. §5. Кнопки не блокируют «Dalej»: можно уйти с экрана без верного ответа.

Визуальные правила эталонов 01–03, которые 04–50 повторяют:

- короткий заголовок PL (+ UA в режиме ua);
- мало абзацев, вертикальная иерархия;
- `em()` только на числах и формулах;
- на интерактиве: заголовок блока → (текст/пример если есть) → уровень → инструкция → поле → кнопки;
- не резать одну инструкцию бейджем уровня.

---

## 9. Система уровней

Движок только **рисует подпись**. Смысл A/B/C в контенте не кодируется.

Фактически в 04–50: A — одношаговый навык, B — контекст / несколько шагов, C — ошибка, невозможный вариант, свойство. D есть в движке и в трёх заданиях 01/03.

---

## 10. Навигация

Вход: TOC предмета → `EduMostLessonHref`.

Внутри урока: `lesson-engine.go`. Нельзя перескочить через непосещённый экран (кроме строго следующего).

Старт: индекс из `EduMostProgress.get` (`saved.index`).

Выхода «урок завершён» как отдельного экрана-роута нет: последний блок — обычно `review`. Назад к списку тем — ссылка в topbar.

Перехода «следующая тема курса» в плеере **нет**. Ключи i18n `prevTopic` / `nextTopic` нигде в JS плеера не вызываются.

Между предметами: главная и `subjects/*.html`.

---

## 11. Данные курса

Источник оглавления: `js/curriculum.js` → `EduMostCurriculum`.

Поля (факт файла):

- Предмет: `id`, `icon`, `name.pl/ua`, `book`, `tocStatus`. У истории дополнительно `hidePath: true`.
- Часть: `parts[].id` (`cz1`/`cz2` у математики, `podrecznik` у истории), `title.pl/ua`.
- Раздел: `chapters[].roman` (I–VII), `id`, `title`.
- Тема: `id` (slug), `page`, `lesson` (папка), `title.pl/ua`. У биологии нумерованные темы ещё имеют `num` (1–34); повторения działu — **без** `num`.

Номер урока у математики и истории — префикс папки. TOC и шапка плеера берут его из `topic.lesson` (`folderLessonNum` / `lesson-engine.js`): папка `07-…` = «Lekcja 7», даже если в книге это «temat 1» rozdziału II. У биологии каталог рисует `topic.num`, если поле есть; папка без цифр (`powtorzenie-*`) номера в каталоге не получает.

Карта папок: `data/lessons.js` (ключи `"matematyka/{topicId}"`, `"historia/{topicId}"`, `"biologia/{topicId}"`, `"angielski/{topicId}"`). Список id предметов на главной: `EduMostSubjects`.

Интерактивные TOC: `matematyka`, `historia`, `biologia`, `angielski` (confirmed). У английского поле `lesson` пока только у модуля I. Остальные предметы: `bookOnly(...)`, `tocStatus: "pending"`, `parts: []`.

---

## 12. Мультиязычность

Слои:

1. Хром UI — `i18n.js` / `data-i18n`.
2. Учебный текст — `{ pl, ua }` в content и tasks.
3. Подписи SVG — иногда `{ pl, ua }` через `vizText` в `svg-renderer.js`.

Язык по умолчанию: **ua**. Польский в режиме ua не прячется (см. §3.4).

---

## 13. Как добавить новый урок

1. Выбрать `topicId` и папку в `lessons/matematyka/`, `lessons/historia/` или `lessons/biologia/` (нумерованные папки уже есть: математика 01–50, история 01–38, биология 01–34 + `powtorzenie-*`).
2. Скопировать `index.html` соседнего урока: поправить `data-subject` и `data-topic`. Для биологии L30+ брать `index.html` с `lesson-blocks.css?v=ct1` и `svg-renderer.js?v=ct1` (схемы `class-tree`).
3. `lesson.js`: `id`, `subject` (`"matematyka"` / `"historia"` / `"biologia"`), `topicId`.
4. `assets.js`: хотя бы `window.EduMostLessonAssets = {}`.
5. `content.js`: `em`, `EduMostLessonContent.blocks`. Задания — поле `task` на блоке (как математика 04–50, вся история и вся биология) **или** `taskId` + запись в `data/tasks.js` (только математика 01–03). История: хелперы `gh()` / `mark()` — документ истории. Биология: `vizGh()` / `tree()` — `docs/BIOLOGIA_CONTENT_DOCUMENTATION.md`.
6. В `curriculum.js` у темы: `lesson: "{folder}"`. Нумерованная биология — ещё `num`; повторение działu — без `num`.
7. В `data/lessons.js`: ключ `"{subject}/{topicId}"` с `folder`.
8. Открыть `subjects/{subject}.html` — должна появиться «Otwórz».
9. Открыть `lessons/{subject}/{folder}/index.html` через локальный HTTP (не обязательно `file://`, из-за относительных путей удобнее `python3 -m http.server` из корня EduMost).

Не добавляйте новые ключи в `task-types.js`, пока хватает живых типов.

---

## 14. Как добавить новое задание

В существующий урок 04–50:

1. Экран `guided-practice` / `practice` / `problem` / `challenge` / `check`.
2. Поле `task` с уникальным `id` (прогресс пишется по `task.id`).
3. `type` только из живых шести.
4. `question` целиком содержит то, что нужно сделать после бейджа уровня.
5. `answer` в формате, который отдаёт `getAnswer` этого типа.
6. При необходимости `hint`, `explanation`, `mistakes`.

В уроки 01–03: новый ключ в `data/tasks.js` и `taskId` в `content.js`. Не переписывайте эталоны без необходимости.

---

## 15. Как проверить новый урок

- Страница предмета: ссылка «Otwórz», верный URL.
- Урок грузится, header: раздел, название, `s. N`.
- Точки: число = `blocks.length`.
- PL: только польский текст условий; UA: польский + украинский.
- Верный ответ → «Dobrze!» + explanation.
- Типичная ошибка → текст из `mistakes`, если задан.
- Hint не подставляет ответ в поле.
- `node --check path/to/content.js`.
- Консоль браузера без ошибок.
- Карточка: уровень не режет инструкцию.
- Для `^`: ввод `7^4` принимается, если так задан `answer` (и/или надстрочная форма после `norm`).

---

## 16. Что нельзя менять без необходимости

- `js/task-engine.js`, `js/task-types.js`, `js/feedback.js`, `js/lesson-renderer.js`;
- общую сетку CSS (`lesson.css`, `lesson-blocks.css`, `tasks.css`);
- содержательно уроки `01-dzialania-pamieciowe`, `02-potegowanie`, `03-kolejnosc-wykonywania-dzialan`;
- контракт `blocks[]` + `resolve(taskId | task)`;
- для истории: `image-placeholder` / `map-placeholder` / `youtube` в `svg-renderer.js` и схему GitHub `Historia/NNN.png` (см. документ истории);
- для биологии: загрузку PNG с GitHub `Biologia/{FOLDER}/images/` и `visual.kind: "class-tree"` (см. документ биологии).

Новый тип задания или новый `visual.kind` — только если существующие не закрывают потребность. Новый kind добавляется в `svg-renderer.js` функцией + веткой в `render`, без смены engine.

---

## 17. Известные ограничения (из кода)

1. **Два ключа прогресса.** Урок пишет `edumost-lesson-progress` (`progress.js`). Счётчик «Mój postęp» на странице предмета читает `edumost-progress` (`subject-page.js`). Они **не синхронизированы**: прохождение урока не отмечает тему как `done` в TOC.
2. **Нет перехода к следующей теме** в плеере.
3. **Заглушки типов** (`match`, `sort`, …) нельзя использовать как рабочие задания.
4. `multiple-choice` и `open-answer` реализованы, но в математических `content.js` / `tasks.js` сейчас не встречаются.
5. `data/assets.js`: значения URL — пустые строки; `kind: "asset"` без URL ничего не покажет. Математика опирается на SVG `kind`. История — на GitHub PNG через `image-placeholder` / `map-placeholder` (`gh()`); пока файла нет, виден плейсхолдер с промптом. YouTube: `kind: "youtube"`. Биология — GitHub PNG через `vizGh()` (`image-placeholder`) и схемы `class-tree`.
6. Альтернативные **числовые** ответы массивом numbers validator не OR-ит.
7. Дроби как текст не сокращаются автоматически.
8. `7**4` не нормализуется в `7^4`.
9. В режиме ua польский текст условий остаётся на экране.
10. Словари в `dictionaries/` — отдельные HTML, не этот плеер.
11. Номер в TOC и в шапке урока у математики и истории — префикс папки (Lekcja 11 = `11-…`, даже если в главе II это первая тема). Не путать с нумерацией «temat 1» внутри rozdziału в книге учителя. У биологии номер в каталоге — поле `num`; повторение działu без `num` не должно выглядеть как «35.».

Статический хостинг, без сборщика: достаточно HTTP-сервера из корня проекта.
