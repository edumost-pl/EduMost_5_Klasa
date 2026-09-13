# Документация исторического содержания

Документ для автора уроков, программиста и для Cursor/AI, который будет менять исторические `content.js`.

Технический контракт плеера — в `docs/PROJECT_TECHNICAL_DOCUMENTATION.md`. Педагогический контракт математики — в `docs/MATH_CONTENT_DOCUMENTATION.md`. **История использует тот же плеер, но не копирует математическую педагогику.** Не выдумывайте новые типы заданий и не ломайте `js/` ради одного экрана.

Эталон письма — переписанные уроки **01–38** (`gh()` с 03, `mark()`, YouTube в `review`, `img/PLIKI.txt`). Уроки **01–02** ещё с прямыми URL GitHub вместо хелпера `gh()`. Уроки **35–38** доведены до того же стандарта, что **07–34**.

---

## 1. Цель исторического курса

Курс даёт ребёнку класса 5a опору, чтобы идти за польским учебником *Wczoraj i dziś*: услышать рассказ, увидеть карту или картинку, запомнить дату и термин, ответить коротко — и потом повторить голосом учителя (фильм).

История в польской школе 5 класса — **предмет устный**. Ребёнок должен уметь *сказать* 2–4 предложения, а не прочитать стену текста. Цель экрана: «это я уже умею рассказать», а не «я пролистал слайды».

Характеристика эталона 07–10 (факт `content.js`):

- есть `intro`, `goal`, несколько сюжетных `visual` / `concept`, `vocabulary`, `mistake`, `problem` (устная опора), `challenge`, `check`, `summary`, `review`;
- задания стоят **на блоке** (`task: {}`), не в `data/tasks.js`;
- живые типы: `single-choice`, `true-false`, `input-number` (год как число), `input-text` (имя / термин);
- картинки — GitHub `Historia/NNN.png` через `gh()` (или тот же URL вручную в 01–02);
- последний экран `review` содержит `visual.kind: "youtube"`, `place: "after"`.

Не цель курса: олимпиадная историография, кровавые реконструкции битв, копирование страниц учебника, отдельный банк `data/tasks.js`.

---

## 2. Класс и источники

- **Класс:** 5 польской szkoły podstawowej (не gimnazjum, не «реформа 2026» для других классов).
- **Класс в хабе:** 5a, SP nr 3 Poznań.
- **Учебник:** *Wczoraj i dziś*, Grzegorz Wojciechowski, Nowa Era, nr dopuszczenia `877/2/2018`.
- **Книга учителя (KN):** *Wczoraj i dziś 5 — książka nauczyciela* (скан, без текстового слоя). Локально вне репозитория, типичный путь: `/Users/marinatarasenko/Desktop/book_EduMost/klasa_5/historia/Wczoraj i dzis 5 ksiazka nauczyciela.pdf`.
- **Оглавление:** `js/curriculum.js` → `historia`, `tocStatus: "confirmed"`, `hidePath: true` (на странице предмета нет математической «ścieżki» książka → dział → temat → ucz się…).
- **Языки:** польский — язык школы; украинский — параллельная помощь. В режиме `ua` плеер показывает **оба** текста.
- **Подстава программowa:** для класса 5 действующая база 2017/2024. Не подменять содержание реформой, которая касается других классов.
- **Фильм:** канал *Krótkie Lekcje* — голос учителя и визуальные тропы. Не источник, который нужно покадрово перенести в плеер.

Порядок правды при написании урока:

1. **KN** (rozkład w książce nauczyciela) — wymagania podstawowe / ponadpodstawowe, pojęcia, postaci, daty, liczba godzin. Это каркас `goal`, словаря, `check` и **Zapamiętaj**.
2. **Материал автора в чате** — cele lekcji, notatki, karta pracy, krzyżówka, презентация. Обязательный источник, не «приложение к фильму». Термины и факты оттуда входят в экраны, если это эта тема (не соседняя).
3. **Учебник** — cele, «to już wiem», блок WSPÓŁCZEŚNIE. **Не копировать** абзацы учебника дословно (авторское право + ребёнок должен слышать *наш* короткий рассказ).
4. **Фильм** — голос учителя в конце + 6–8 кадров под KN. Не каждый слайд YouTube и не единственный список фактов.
5. **Соседние уроки курса** — не тащить Гомера в урок о театре и не подменять KN датами с фильма, если rozkład даёт другие годы.

Локальный PDF учебника у автора может обрываться раньше конца книги (исторически около s. 60). Если страницы темы нет в файле — опираться на KN, вставку автора, оглавление `page` в `curriculum.js` и фильм; не выдумывать другую нумерацию страниц.

---

## 3. Статус курса

| Уроки | Статус | Что это значит |
|---|---|---|
| **01–38** | **эталон** | 01–38 можно детям. **35** Kazimierz 1333/1343/1364; **36** Krewo/Grunwald/Horodło; **37** Warna/1454–1466; **38** Koszyce 1374 / Nihil novi 1505. Картинки 001–319. |
| **01–02** | переписаны, старый хелпер | GitHub URL прописаны вручную; при правке этих файлов лучше ввести `gh()` как в 03–38. |
| **03–38** | **эталон формы** | `em()`, `gh()`, `mark()`, `img/PLIKI.txt`, плейсхолдер до загрузки PNG. Ось: `js/historia-axis.js`. |
| Генератор `_build.py` / `_emit.py` / `_ch*.py` | **удалён** | Не восстанавливать и не запускать: затрёт 01–11. |

Следующий неиспользованный номер картинки после урока 38: **`Historia/320.png`**.

---

## 4. Структура курса

Один учебник, семь разделов, **38** тем. Номер Lekcja N — **префикс папки** `lessons/historia/{nn}-{topicId}/`. Тот же номер рисуют TOC (`subject-page.js` → `folderLessonNum`) и шапка плеера (`lesson-engine.js`).

В книге учителя тема может называться «temat 1» внутри rozdziału II. В хабе это всё равно **Lekcja 7**, если папка `07-demokratyczne-ateny`. Не нумеровать заново с 1 в каждой главе.

Названия ниже — `title.pl` из `curriculum.js`. Страница — поле `page` (начало темы в учебнике).

### I. Pierwsze cywilizacje

| № | Тема | s. | Картинки | YouTube | Статус |
|---|---|---|---|---|---|
| 01 | Życie pierwszych ludzi | 8 | 001–009 | `Dt7GjntKSTs` | переписан |
| 02 | Miasta-państwa Mezopotamii | 14 | 010–017 | `5rJapXuLulg` | переписан |
| 03 | W Egipcie faraonów | 20 | 018–028 | `lqcjlxhDpqc` | эталон |
| 04 | W starożytnym Izraelu | 26 | 029–036 | `KTCY17id5oA` | эталон |
| 05 | Cywilizacje Indii i Chin | 30 | 037–046 | `0J7U824c0Bk` | эталон |
| 06 | Od hieroglifów do alfabetu | 35 | 047–054 | `syLP2UeWk48` | эталон |

### II. Starożytna Grecja

| № | Тема | s. | Картинки | YouTube | Статус |
|---|---|---|---|---|---|
| 07 | Demokratyczne Ateny | 44 | 055–061 | `iv5CEGJPMYY` | эталон |
| 08 | Sparta i wojny z Persami | 49 | 062–068 | `I_eAHK6x1Kk` | эталон |
| 09 | Bogowie i mity | 55 | 069–075 | `1hIloSugaJ8` | эталон |
| 10 | Kultura starożytnej Grecji | 61 | 076–082 | `Gc94esAKRoY` | эталон |
| 11 | Imperium Aleksandra Wielkiego | 67 | 083–091 | `4eaFQIE7za0` | эталон |

### III. Starożytny Rzym

| № | Тема | s. | Картинки | YouTube | Статус |
|---|---|---|---|---|---|
| 12 | Ustrój starożytnego Rzymu | 76 | 092–098 | `0jc9yMPCbgs` | эталон |
| 13 | Imperium Rzymskie | 81 | 099–105 | `9VsKetPq-uQ` | эталон |
| 14 | Życie w Wiecznym Mieście | 86 | 106–116 | `r9x1powmMqo` | эталон |
| 15 | Dokonania starożytnych Rzymian | 90 | 117–127 | `KtoNJ2on3rA` | эталон |
| 16 | Początki chrześcijaństwa | 96 | 128–138 | `eY-fD_rVm2w` | эталон |

### IV. Początki średniowiecza

| № | Тема | s. | Статус |
|---|---|---|---|
| 17 | Bizancjum w czasach świetności | 104 | 139–148 | `F1-1iHSFizw` | эталон |
| 18 | Arabowie i początki islamu | 109 | 149–158 | `Uu0tzK8RNpI` | эталон |
| 19 | Nowe państwa w Europie | 114 | 159–168 | `pi2CMxa8-OY` | эталон |
| 20 | Konflikt papiestwa z cesarstwem | 119 | 169–176 | `U_VC_-jcn7c` | эталон |
| 21 | Wyprawy krzyżowe | 122 | 177–184 | `UT-bn_iWrsw` | эталон |

### V. Społeczeństwo średniowiecza

| № | Тема | s. | Статус |
|---|---|---|---|
| 22 | System feudalny | 132 | 185–191 | `jBcbx55iKNA` | эталон |
| 23 | Epoka rycerzy | 136 | 192–199 | `9MW3pLbcHBE` | эталон |
| 24 | Średniowieczne miasto i wieś | 142 | 200–207 | `7TluSmz9U2Y` | эталон |
| 25 | Kościół w średniowieczu | 148 | 208–215 | `9BYXyPfAqbE` | эталон |
| 26 | Sztuka średniowiecza | 153 | 216–223 | `c8Agr0M5HmM` | эталон |

### VI. Polska pierwszych Piastów

| № | Тема | s. | Картинки | YouTube | Статус |
|---|---|---|---|---|---|
| 27 | Zanim powstała Polska | 160 | 224–231 | `8z9JOBt9kwc` | эталон |
| 28 | Mieszko I i początki Polski | 165 | 232–239 | `vKHCRtgf5pE` | эталон |
| 29 | Polska Bolesława Chrobrego | 170 | 240–247 | `visO-x24dQA` | эталон |
| 30 | Kryzys i odbudowa państwa polskiego | 175 | 248–255 | `1G0vt3I7nAU` | эталон |
| 31 | Rządy Bolesława Krzywoustego | 179 | 256–263 | `VvcTDOmld2M` | эталон |
| 32 | Społeczeństwo w czasach pierwszych Piastów | 183 | 264–271 | `8TMFiQtMxDo` | эталон |

### VII. Polska w XIII–XV wieku

| № | Тема | s. | Картинки | YouTube | Статус |
|---|---|---|---|---|---|
| 33 | Rozbicie dzielnicowe | 192 | 272–279 | `Of8AobU2aW0` | эталон |
| 34 | Zjednoczenie Polski | 198 | 280–287 | `FUALNgKcksw` | эталон |
| 35 | Czasy Kazimierza Wielkiego | 203 | 288–295 | `HJK9YxS9W0o` | эталон |
| 36 | Unia polsko-litewska | 208 | 296–303 | `90UY7Xw3fhw` | эталон |
| 37 | Czasy świetności dynastii Jagiellonów | 216 | 304–311 | `__r0DOKe43E` | эталон |
| 38 | Monarchia stanowa w Polsce | 222 | 312–319 | `_YdY1OZ45jo` | эталон |

После каждого из 7 działów в TOC есть единица **Powtórzenie i sprawdzian** (папка `powtorzenie-…`, без номера урока 39–45). Это не новая историческая тема: синтез раздела + вопросы по KN + мини-конспект перед школьной контрольной. Уроки **01–38** по содержанию не менялись. В этих единицах нет нового YouTube.

| Po lekcjach | Folder / `topic.id` |
|---|---|
| 01–06 | `powtorzenie-pierwsze-cywilizacje` |
| 07–11 | `powtorzenie-starozytna-grecja` |
| 12–16 | `powtorzenie-starozytny-rzym` |
| 17–21 | `powtorzenie-poczatki-sredniowiecza` |
| 22–26 | `powtorzenie-spoleczenstwo-sredniowiecza` |
| 27–32 | `powtorzenie-polska-pierwszych-piastow` |
| 33–38 | `powtorzenie-polska-xiii-xv` |

---

## 5. Чем история не математика

Плеер общий: `blocks[]`, `task` на блоке, A/B/C, PL+UA, `em()`, навигация Wstecz/Dalej.

Не переносить в историю:

| Математика 04–50 | История 07–15 |
|---|---|
| SVG-формулы (`fraction-bar`, `geo-lines`, `net`…) | картинка / карта с GitHub (`image-placeholder` / `map-placeholder`) |
| много `input-number` подряд | 1–2 числа за урок (год), остальное выбор и короткие имена |
| `observe` → `example` + `steps` как алгоритм столбика | рассказ экранами: одно явление — один кадр |
| «Czy już umiem?» часто два `check` | достаточно **одного** `check` |
| `review` без видео | `review` + YouTube |
| путь книги на странице предмета | `hidePath: true` |

Типы блоков `observe`, `algorithm`, `example`, `guided-practice` движок **умеет**. В эталоне 01–38 основной носитель сюжета — `visual` и короткий `concept`. `algorithm` допустим, если это **цепочка причины** (przyczyna → wydarzenie → skutek) или ось жизни, не письменный столбик. Не возвращать каркас «как математика».

---

## 6. Педагогический каркас экрана (эталон 07–10)

Хороший урок — столько экранов, сколько нужно материалу (обычно **15–22**), не фиксированные 17, не 40 слайдов фильма и не 8 абзацев на одном экране.

Типичная последовательность (урок 10 как образец полноты; 07–09 того же семейства):

1. **intro** — крючок + одна дата или формула-подпись в `formula` (`776 p.n.e.`, `demos + kratos`). Два коротких предложения.
2. **goal** — 4 умения в языке «wskazać / powiedzieć / wyjaśnić / opisać», из KN podstawowe.
3. **Сюжетные экраны** (`visual`, иногда `concept`) — по одному явлению. 2–4 коротких предложения. Картинка, если без неё ребёнок не увидит предмет. Задание A/B можно повесить **на тот же блок**, не плодя пустой `practice`.
4. **vocabulary** — термины KN (польский термин + короткое пояснение / украинский эквивалент). Не дублировать всю теорию.
5. **mistake** — ложная «opowieść» (несколько ошибок сразу, как в 10) + разбор. Renderer сам пишет вердикт «Nie.»
6. **problem** — устная опора («powiedz w 3–4 zdaniach») + затем `single-choice` / `true-false`, потому что открытого сочинения в движке нет.
7. **challenge** — KN **ponadpodstawowe** (влияние «do dziś», Archimedes рядом с Pitagorasem, сравнение ustrojów…). Уровень C, не программа liceum.
8. **check** — «Czy już umiem?»: дата + имена / ключевой факт темы.
9. **summary** — пункты «Zapamiętaj» через `mark()`, **одним экраном**. Сначала закрыть KN podstawowe (+ факты из вставки автора), потом сверить формулировки со слайдами Zapamiętaj в фильме. Если фильм даёт два слайда — слить и укоротить. Не писать Zapamiętaj «только по фильму», если KN требует ещё hołd / datę / stan. Не добивать пустыми фразами до трёх.
10. **review** — куда идём дальше + фильм Krótkie Lekcje.

Правила плотности:

- на экране **2–4 коротких предложения**, не страница учебника;
- `em()` — имена, даты, термины, не целое предложение;
- одно новое явление на картинку: вазы без театра, театр без стадиона;
- не делать отдельный экран на каждый кадр фильма (Lidowie / monety, agora, popiersia dramaturgów, Szkoła Ateńska — если это не wymaganie KN этой темы, оставить в фильме).
- **битвы:** не четыре картины рукопашной. Одна карта похода. На оси 5 класса — уже известные годы главы + Issos 333 и 323, не Granik/Indus как даты наизусть. Gore и «ложе смерти» запрещены (§12).
- **три опоры урока:** даты (ось + `formula`), карты (`map-placeholder`), исторические постаті (§6.2). Если в теме есть все три — на экране должно быть видно все три, не только текст.

### 6.1. Ось времени под точками экранов

Одна **нарастающая** ось на все уроки истории, не копия списка в каждом `content.js`. Математика ось не ставит.

Источник тиков: `js/historia-axis.js` (`EduMostHistoriaAxis.forLesson(n)`). Движок берёт номер урока из папки (`01-…` → 1) и показывает точки с `from <= n`. После последнего видимого тика **p.n.e.** всегда стоит ворота **n.e. / nasza era**. С урока **13** справа от ворот рисуются тики **н.э.** (`era: "ce"` в оси). Навигация: `items` (p.n.e.) → spacer → `eraTick` → `itemsCE`.

**Окно, не вся древность сразу.** Уроки **01–06** показывают цепочку от praludzie. С **07** левый край обрезается **только по тикам p.n.e.**: сначала **Indus**, каждый следующий урок сдвигает окно на один тик вправо. Слева подпись `… wcześniej`. С **17** обрезается также самый старый тик **н.э.** (по одному за урок), чтобы ось не распухала.

С **19** ворота **nasza era снимаются**. Окно н.э. с 19: **последний тик до темы + годы этой темы + первый тик после** (уже изученное слева, текущее в середине, ещё впереди справа). Тик текущего урока никогда не обрезается.

Новый тик этой темы — цвет `accent2`; уже изученные — спокойнее; текущий экран — `accent`, если на блоке есть `timelineYear` или `timelineId`.

Канон 01–13 (слева раньше, справа позже; **не в масштабе**):

| Урок | Тик | Подпись | Запомнить |
|---|---|---|---|
| 01 | 4 mln | praludzie | «около», не точная дата |
| 01 | 10 000 | neolit | да |
| 01 | 1200 | żelazo | да |
| 02 | 3500 | Sumer | да |
| 03 | 3000 | Egipt | да |
| 04 | X w. | Izrael | век, не год 1000 |
| 05 | III tys. | Indus | тысячелетие |
| 06 | XI w. | alfabet | век; IV tys. pismo = тот же пояс, что Sumer |
| 07 | VIII w. | polis | век |
| 08 | 490 / 480 | Maraton / Salamina | да; 499 не на ось |
| 09 | — | Homer = VIII w. | подсветка `polis`, новый тик не добавлять |
| 10 | 776 | igrzyska | да; 1896 н.э. на эту ось не ставить |
| 11 | 333 / 323 | Issos / Aleksander | да; Granik / Gaugamela / Indus — места, не годы |
| 12 | 753 / 509 / 44 | Rzym / republika / Cezar | да; 27 Augusta в этой теме не на ось — I w. p.n.e. в тексте |
| 13 | 146 / 395 n.e. / 476 n.e. | Kartagina / podział / upadek | да; 30 p.n.e. начала cesarstwa с презентации на ось не ставить (урок 12 уже дал 44). Hunowie — **IV w. n.e.**, не p.n.e. |
| 14 | 73 p.n.e. / 79 n.e. | Spartakus / Pompeje | да; I–II w. n.e. świetności — в тексте, не как год на оси |
| 15 | V w. p.n.e. / VI w. n.e. | XII tablic (текст) / Justynian | XII tablic **не** на ось (окно уже у 44). На оси только **VI w.** Justynian. 125 Panteonu в тексте, не тик |
| 16 | 33 n.e. / 313 n.e. | Jezus / edykt | да; Teodozjusz (koniec IV w.) в тексте, не тик — слишком близко к 395. Konstantyn уже карта в 13, здесь только эдикт |
| 17 | 395 / 1453 | podział (уже с 13) / Turcy | да; VI w. Justynian уже с 15, не дублировать 527–565. Justynian — без второй карточки |
| 18 | 622 | hidżra | да; 610 objawienie в тексте. Mahomet — без портрета лица |
| 19 | 732 / 751 / 800 / 843 / 962 | Poitiers / Pepin / Karol / Verdun / Otton | да; 496 Chlodwiga и 768–814 в тексте. 800 = коронация |
| 20 | 1054 / 1077 / 1122 | schizma / Canossa / Wormacja | да. Grzegorz VII i Henryk IV — первые карточки |
| 21 | 1095 / 1096 / 1099 | Clermont / krucjata / Jerozolima | да. Urban II — первая карточка. 1291 Akka в тексте, не тик |
| 22 | — | нет года KN | окно как у **21** (нет новых тиков; `ceTopicWindow` берёт предыдущий урок с датами) |
| 23 | — | нет года KN | окно как у **21** (то же, что 22) |
| 24 | — | XIII w. / 1257 в тексте | окно как у **21**; **не** ставить 1257 на ось |
| 25 | — | VI w. Benedykt / XIII w. Franciszek в тексте | окно как у **21**; **не** новый тик |
| 26 | — | V–XV w. / 476–1453 в тексте | окно как у **21**; **не** дублировать 476 и 1453 |
| 27 | IX w. Morawy / X w. Polanie | IV–VI w. wędrówka в тексте (476 уже с 13) | **не** 966 / Cedynia 972 (урок 28) |
| 28 | 966 chrzest / 972 Cedynia | 960 władza / 965 Dobrawa / 968 Poznań в тексте | **не** 1000 / 1025 (урок 29) |
| 29 | 997 Wojciech / 1000 zjazd / 1025 korona | 992 śmierć Mieszka / 1002 Otton / 1003 Praga / 1018 Budziszyn в тексте | **не** kryzys Mieszka II (урок 30) |
| 30 | 1038 kryzys / 1076 Śmiały / 1079 wygnanie | 1031 najazd / 1034 śmierć Mieszka II / 1039 powrót Kazimierza в тексте | **не** 1109 / 1138 (урок 31) |
| 31 | 1109 Głogów / 1138 testament | 1102 śmierć Hermana / 1116 i 1122 Pomorze в тексте | **не** 1226 Krzyżacy (урок 33); społeczeństwo grodu — 32 |
| 32 | — | нет года KN; IX–XII w. «pierwsi Piastowie» в тексте | окно как у **31** (нет новых тиков; `ceTopicWindow` берёт предыдущий урок с датами). **не** 1226 / Legnica (урок 33); turniej / Zawisza — 23 |
| 33 | 1226 Krzyżacy / 1227 Gąsawa / 1241 Legnica | 1177 Kazimierz w Krakowie / 1138–1320 как период в тексте | **не** 1309 Malbork stolicą / 1320 Łokietek (урок 34); Grunwald — 36. 1138 на оси уже с 31, здесь подсветка-рекап |
| 34 | 1295 Przemysł / 1300 Wacław / 1309 Pomorze / 1320 Łokietek / 1331 Płowce | 1296 śmierć Przemysła / 1305–1306 / 1314 Wielkopolska / 1333 śmierć в тексте | **не** 1343 Kalisz / Akademia (урок 35); Grunwald — 36. Henryk Pobożny уже карта в 33 |
| 35 | 1333 koronacja / 1343 Kalisz / 1364 Akademia | 1370 śmierć в тексте; Wierzynek = ponadpodstawowe | **не** 1385 Krewo (урок 36); Pomorze wraca не в 1343 |
| 36 | 1385 Krewo / 1410 Grunwald / 1413 Horodło | 1384 Jadwiga / 1386 chrzest / 1411 I Toruń в тексте | **не** 1444 Warna (37); **не** unia lubelska 1569 |
| 37 | 1444 Warna / 1454 wojna 13-l. / 1466 II Toruń | Nieszawa 1454 как мост в тексте/challenge | **не** 1374/1505 как пара KN (урок 38); **не** 1569 |
| 38 | 1374 Koszyce / 1505 Nihil novi | Nieszawa 1454 только как мост из 37; pańszczyzna в тексте | **не** ставить Nieszawę вместо Koszyc; **не** разделы 1772 |

Окно на экране (после обрезки слева):

| Урок | Видно |
|---|---|
| 01–06 | вся цепочка от praludzie до новой точки + nasza era |
| 07 | Indus → … → polis + nasza era |
| 08 | żelazo → … → Salamina + nasza era |
| 09 | alfabet → … → Salamina (Homer = VIII w.) |
| 10 | Izrael → … → igrzyska / Salamina |
| 11 | polis → … → Aleksander 323 + nasza era |
| 12 | igrzyska → 753 Rzym → 509 → … → 44 Cezar + nasza era |
| 13 | Rzym 753 → … → Kartagina 146 → 44 → **nasza era** → **395** → **476** |
| 14 | **73 Spartakus** → 44 Cezar → **nasza era** → **79 Pompeje** → 395 → 476 |
| 15 | **44 Cezar** → **nasza era** → 79 → 395 → 476 → **VI w. Justynian** |
| 16 | **nasza era** → **33 Jezus** → 79 → **313 edykt** → 395 → 476 → VI w. |
| 17 | **nasza era** → 79 → 313 → 395 → 476 → VI w. → **1453 Turcy** |
| 18 | **nasza era** → 313 → 395 → 476 → VI w. → **622 hidżra** → 1453 |
| 19 | **622 hidżra** → **732 Poitiers** → **751 Pepin** → **800 Karol** → **843 Verdun** → **962 Otton** → 1453 |
| 20 | **962 Otton** → **1054 schizma** → **1077 Canossa** → **1122 Wormacja** → 1453 |
| 21 | **1077 Canossa** → **1095 Clermont** → **1096 krucjata** → **1099 Jerozolima** → **1122 Wormacja** |
| 22 | то же, что **21** (урок без новой даты) |
| 23 | то же, что **21** (урок без новой даты) |
| 24 | то же, что **21** (урок без новой даты) |
| 25 | то же, что **21** (урок без новой даты) |
| 26 | то же, что **21** (урок без новой даты) |
| 27 | **800 Karol** → **IX w. Morawy** → **X w. Polanie** → **962 Otton** |
| 28 | **962 Otton** → **966 chrzest** → **972 Cedynia** → **1054 schizma** |
| 29 | **972 Cedynia** → **997 Wojciech** → **1000 zjazd** → **1025 korona** → **1054 schizma** |
| 30 | **1025 korona** → **1038 kryzys** → **1076 Śmiały** → **1079 wygnanie** → **1095 Clermont** |
| 31 | **1099 Jerozolima** → **1109 Głogów** → **1138 testament** → **1453 Turcy** |
| 32 | то же, что **31** (урок без новой даты) |
| 33 | **1138 testament** → **1226 Krzyżacy** → **1227 Gąsawa** → **1241 Legnica** → **1453 Turcy** |
| 34 | **1241 Legnica** → **1295 Przemysł** → **1300 Wacław** → **1309 Pomorze** → **1320 Łokietek** → **1331 Płowce** → **1453 Turcy** |
| 35 | **1331 Płowce** → **1333 Kazimierz** → **1343 Kalisz** → **1364 Akademia** → **1453 Turcy** |
| 36 | **1364 Akademia** → **1385 Krewo** → **1410 Grunwald** → **1413 Horodło** → **1453 Turcy** |
| 37 | **1413 Horodło** → **1444 Warna** → **1454 wojna 13-l.** → **1466 Toruń** |
| 38 | **1364 Akademia** → **1374 Koszyce** → **1505 Nihil novi** (тики 36–37 между 1374 и 1505 окно не показывает — так устроен `ceTopicWindow`) |

На блоке, который учит эту дату: `timelineYear: 333` или `timelineId: "izrael"`. Клик по году **не** прыгает по экранам.

Свой `EduMostLessonContent.timeline` перекрывает канон — для обычных уроков не нужен.

**Направление:** слева раньше, справа позже. Для **p.n.e.** числа **уменьшаются** (490 → 146 → 44). Потом ворота **n.e. / nasza era**, потом годы н.э. **увеличиваются** (395 → 476). Подпись до урока 13: `timelineBceHint`. С 13, если есть `itemsCE`: `timelineCeHint` («p.n.e. → nasza era → n.e.»). С **19** ворот нет: `timelineCeOnlyHint` («n.e.»).

Эталон подсветки: урок **01** (три первые точки), **08** (490/480), **11** (333/331/323), **13** (146 / 395 / 476), **14** (73 / 79), **15** (`timelineId: "justynian"`), **16** (`timelineYear: 33` / `313`), **17** (`timelineYear: 395` / `1453`, `timelineId: "justynian"`), **18** (`timelineYear: 622`), **19** (`timelineYear: [732, 751]` / `800` / `843` / `962`), **20** (`timelineYear: 1054` / `1077` / `1122`), **21** (`timelineYear: 1095` / `[1096, 1099]`), **27** (`timelineId: "morawy"` / `"plemionaX"`), **28** (`timelineYear: 966` / `972`), **29** (`timelineYear: 997` / `1000` / `1025`), **30** (`timelineYear: 1038` / `1076` / `1079`), **31** (`timelineYear: 1109` / `1138`), **33** (`timelineYear: 1138` / `1226` / `1227` / `1241`), **34** (`timelineYear: 1295` / `1309` / `1320` / `1331`; 1300 на оси), **35** (`timelineYear: 1333` / `1343` / `1364`), **36** (`timelineYear: 1385` / `1410` / `1413`), **37** (`timelineYear: 1444` / `1454` / `1466`), **38** (`timelineYear: 1374` / `1505`). Урок **32** — без `timelineYear` / нового тика.

### 6.2. Historyczne postaci — карточка при первом появлении

Если имя **впервые** входит в курс (Filip II, Aleksander, позже Romulus / Cezar / August…), это не одна строка в абзаце про войско. Отдельный экран `visual`:

- **фото / popiersie** — `image-placeholder` + `gh()`, музейный бюст или спокойная статуя, день, без битвы и без «ложа смерти»;
- в тексте коротко четыре вещи: **kto** · **skąd** · **lata** · **czym się wsławił**;
- те же четыре пункта — в промпте на картинке (подписи PL, как у Peryklesa в уроке 07);
- `formula` — место и/или годы этой постаті, не новая ось из биографии.

Не делать карточку повторно, если человек уже представлен (Arystoteles в 10 — в 11 только отсылка). Не плодить карточку на каждого врага на карте (Dariusz — имя при битве, не отдельная биография). Близнецы / пара на одном слайде (Romulus i Remus) — одна карточка, не две.

Эталон: урок **11**, экраны Filip II (`Historia/090.png`) i Aleksander Wielki (`Historia/091.png`). W lekcji **12**: Romulus i Remus (wilczyca), Cezar, August — nie siedmiu królów jako siedem biografii. W lekcji **13**: Konstantyn Wielki (`Historia/103.png`) — pierwsza karta; Romulus Augustulus tylko imię przy 476, bez drugiego popiersia. W lekcji **14**: Spartakus (`Historia/112.png`) — karta w tunice, bez śmierci i bez nagości; bogowie to schemat par, nie sześć biografii. W lekcji **15**: Wergiliusz, Horacy, Justynian I — trzy pierwsze karty; Konstantyn przy łuku tylko odsyłacz do 13. W lekcji **16**: Piotr i Paweł z Tarsu — pierwsze karty; Jezus jako nauczyciel (nie biografia-ewangelia); Konstantyn przy edykcie 313 tylko odsyłacz do 13. W lekcji **17**: Justynian już z 15 — mapa 550 i zasługi, bez drugiej mozaiki. W lekcji **18**: Mahomet — karta bez twarzy (kaligrafia); nie wklejać obrazów z Wikipedii. W lekcji **19**: Chlodwig, Karol Wielki, Otton I. W lekcji **20**: Grzegorz VII i Henryk IV — pierwsze karty. W lekcji **21**: Urban II — pierwsza karta; nie siedmiu królów krucjat i nie Gotfryd jako druga biografia. W lekcji **23**: Zawisza Czarny — pierwsza karta (portret, nie Matejko); Roland tylko imię przy ideale, bez sceny śmierci. W lekcji **25**: św. Franciszek z Asyżu — pierwsza karta; Benedykt i Dominik tylko przy nazwie zakonu, bez drugiej i trzeciej biografii. W lekcji **27**: Cyryl i Metody — **jedna** karta pary (jak Romulus i Remus); Swaróg / Perun / Świętowit to schemat trzech bogów, nie trzy biografie. W lekcji **28**: Mieszko I i Dobrawa — dwie pierwsze karty; Siemowit / Lestek / Siemomysł i Oda tylko imię; Wojciech i Bolesław Chrobry — lekcja 29. W lekcji **29**: Bolesław Chrobry, biskup Wojciech, Otton III (nie Otton I z 19) — trzy pierwsze karty (Otton III na slajdzie zjazdu, bez drugiego portretu); Henryk II i Jarosław Mądry tylko imię; Mieszko II / Bezprym — lekcja 30. W lekcji **30**: Mieszko II, Kazimierz Odnowiciel, Bolesław Śmiały — trzy pierwsze karty; biskup Stanisław na slajdzie sporu (bez męczeństwa); Bezprym, Rycheza, Brzetysław, Dobroniega tylko imię; Grzegorz VII już z 20; Krzywousty — lekcja 31. W lekcji **31**: Władysław Herman i Bolesław Krzywousty — dwie pierwsze karty; Zbigniew i Sieciech na mapie/imieniu, nie trzecia i czwarta biografia; Henryk V tylko przy 1109. W lekcji **32**: grupy społeczeństwa to schemat (książę · wojowie · rzemieślnicy · kupcy · chłopi), nie pięć biografii; Piast i Rzepicha już z 27; Kazimierz Sprawiedliwy tylko zamyka definicję «pierwszych Piastów», bez karty. W lekcji **33**: Władysław Wygnaniec, Leszek Biały, Konrad Mazowiecki, Henryk Pobożny — cztery pierwsze karty; Bolesław Kędzierzawy / Mieszko III / Henryk Sandomierski i Kazimierz Sprawiedliwy (1177) tylko imię na mapie/schemacie; Krzywousty i Herman już z 31; Łokietek — lekcja 34. W lekcji **34**: Przemysł II, Jakub Świnka, Wacław II, Władysław Łokietek — cztery pierwsze karty; Henryk Pobożny już z 33; Wacław III tylko imię przy 1306; Kazimierz Wielki — lekcja 35.

---

## 7. Картинки и GitHub

### 7.1. Где живёт файл

Репозиторий картинок (отдельный от кода уроков):

`https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images`

Путь файла: `Historia/NNN.png` (три цифры: `076.png`).

В `content.js`:

```js
function gh(n, spec) {
  spec.url = "https://raw.githubusercontent.com/edumost-pl/EduMost-szkola_5-klasa-Images/main/Historia/" + n + ".png";
  spec.file = "Historia/" + n + ".png";
  return spec;
}
```

Вызов:

```js
visual: gh("076", {
  kind: "image-placeholder",   // или "map-placeholder"
  alt: { pl: "…", ua: "…" },
  title: { pl: "…", ua: "…" },
  prompt: { pl: "…", ua: "…" }
})
```

`kind: "image-placeholder"` / `"map-placeholder"` — не «пустая картинка навсегда». Renderer (`js/svg-renderer.js`) грузит `url`. Если PNG на GitHub ещё нет (404) или все кандидаты падают, `onerror` показывает карточку:

- `[IMAGE_PLACEHOLDER]` или `[MAP_PLACEHOLDER]`;
- заголовок;
- `plik / GitHub: Historia/NNN.png`;
- **IMAGE PROMPT** / **MAP PROMPT** из поля `prompt`.

Так автор видит, *что* рисовать, а ребёнок после загрузки видит PNG.

### 7.2. Что не делать с файлами

- Не вставлять скриншоты YouTube / учебника как картинку урока.
- Не коммитить сгенерированные PNG в `lessons/historia/…/img/` **как отображаемый ассет**. Плеер берёт GitHub. В `img/` держите только `PLIKI.txt` (опись номеров и сюжетов).
- Не генерировать картинку «в плеер» из чата так, чтобы она подменила `gh()`.
- Не писать локальный `spec.file: "./img/076.png"` как основной источник эталона 07–11.

### 7.3. Промпт

Промпт — часть урока, не отдельный креатив. Он должен:

- совпадать с **текстом этого экрана** (те же подписи, те же имена);
- быть школьным слайдом 5 класса, 16:9, спокойный свет;
- явно запрещать то, чего на экране нет («Nie pokazuj waz ani teatru», если экран про rzeźbę);
- для карт: польские подписи мест, без спорных современных границ, без gore.

`kind: "map-placeholder"` — когда главный объект **карта**. `image-placeholder` — ваза, храм, схема общества, реконструкция.

### 7.4. Нумерация (занято)

| Lekcja | Файлы |
|---|---|
| 01 | 001–009 |
| 02 | 010–017 |
| 03 | 018–028 |
| 04 | 029–036 |
| 05 | 037–046 |
| 06 | 047–054 |
| 07 | 055–061 |
| 08 | 062–068 |
| 09 | 069–075 |
| 10 | 076–082 |
| 11 | 083–091 |
| 12 | 092–098 |
| 13 | 099–105 |
| 14 | 106–116 |
| 15 | 117–127 |
| 16 | 128–138 |
| 17 | 139–148 |
| 18 | 149–158 |
| 19 | 159–168 |
| 20 | 169–176 |
| 21 | 177–184 |
| 22 | 185–191 |
| 23 | 192–199 |
| 24 | 200–207 |
| 25 | 208–215 |
| 26 | 216–223 |
| 27 | 224–231 |
| 28 | 232–239 |
| 29 | 240–247 |
| 30 | 248–255 |
| 31 | 256–263 |
| 32 | 264–271 |
| 33 | 272–279 |
| 34 | 280–287 |
| 35–38 | **288–319** |
| дальше | **320+**, непрерывный счёт, без дыр «для красоты» |

На урок обычно **6–8** картинок, не 21. Список — `lessons/historia/{folder}/img/PLIKI.txt` в том же виде, что у 03–10.

Автор **сам** рисует/генерирует PNG по промпту и заливает в GitHub. Программист урока только резервирует номер, пишет `gh("083", …)` и строку в `PLIKI.txt`.

---

## 8. YouTube

Только на последнем экране `review`, **после** текста (`place: "after"`), чтобы ребёнок сначала прошёл урок.

```js
visual: {
  kind: "youtube",
  place: "after",
  id: "Gc94esAKRoY",
  title: { pl: "Krótkie Lekcje: …", ua: "Короткі уроки: …" }
}
```

`js/svg-renderer.js` принимает 11-символьный id или URL. В эталоне пишите **id**.

Не встраивать фильм на intro и не делать урок «посмотри видео, потом 2 вопроса». Фильм — повтор голосом учителя.

Идентификаторы 01–10 — в таблице §4. Для 11+ подобрать ролик *той же темы* Krótkie Lekcje, не соседней (урок 10 ≠ «Imperium Aleksandra»).

---

## 9. Хелперы в `content.js`

Копировать шапку с урока 07–10:

```js
function em(text) {
  return { text: text, emphasis: true };
}

function gh(n, spec) { /* см. §7.1 */ }

function mark(pl, plMarks, ua, uaMarks) {
  return {
    pl: { t: pl, mark: plMarks },
    ua: { t: ua, mark: uaMarks }
  };
}
```

- `em("Fidiasz")` — `<strong>` в абзаце.
- `mark(zdanie, ["Fidiasz", "Myron"], …)` — в `summary.items`: renderer подсвечивает вхождения из массива (`class="tx-mark"`). Фрагменты в массиве должны **точно** совпадать с подстрокой предложения (падеж, орфография).
- Массивы в `text.pl`: список строк = несколько абзацев; вложенный массив со `em()` = один абзац.

`lesson.js`:

```js
window.EduMostLessonMeta = {
  id: "his-10-kultura-starozytnej-grecji",
  subject: "historia",
  topicId: "kultura-starozytnej-grecji"
};
```

`topicId` = id темы в `curriculum.js` (без номера папки). `index.html`: `data-subject="historia"` и `data-topic` тот же id. Ссылка «← Historia» ведёт на `subjects/historia.html`.

`assets.js` урока: `window.EduMostLessonAssets = {}`. Картинки истории не через `data/assets.js`.

---

## 10. Задания

Те же живые типы, что в математике (`js/task-types.js` + `js/feedback.js`). В истории их мало, и они **проверяют рассказ**, не вычисление.

| `task.type` | Зачем |
|---|---|
| `true-false` | «jedno państwo jak Egipt?» — ловушка на только что сказанном |
| `single-choice` | A/B/C: факт, причина, «które zdanie najlepiej…» |
| `input-number` | год: `answer: 776`. В поле только число, без `p.n.e.` |
| `input-text` | имя / термин. В `answer` — массив строк: польские падежи, украинские формы, латиница если ребёнок так введёт (`["hipokrates","гіппократ",…]`) |

Уровни — те же бейджи движка:

| Код | Смысл в истории |
|---|---|
| A | прямо с экрана: дата, «polis ≠ jedno państwo», кто rzeźbiarz |
| B | связать два факта, устная опора + выбор лучшего предложения |
| C | `challenge` = KN ponadpodstawowe, влияние «dziś», сравнение, лишнее имя вроде Archimedesa как *узнавание*, не биография |

Не использовать заглушки `match`, `sort`, `drag-drop`, `fill-blanks`. Не заводить `data/tasks.js` для истории: задания inline, id вида `h10-check1`, `h11-map`.

`problem` без рабочего `open-answer`: всегда дайте устную инструкцию **и** закрытый `task`, иначе экран не проверяется.

Не ставить в условие дату, которую тут же просите ввести, если это не сознательное «wpisz jeszcze raz» после жирного числа на том же экране — лучше спросить год, уже показанный **на предыдущем** экране.

---

## 11. PL + UA

Как в математике, §10 MATH-дока:

- смысл, даты, имена, варианты ответа совпадают;
- не облегчать украинскую версию;
- термины — школьный украинский (`поліс`, `амфітеатр`, `Фідій`), не польские слова внутри украинской фразы;
- в режиме `ua` польский текст остаётся на экране (язык школы).

Имена собственные: польская школьная норма учебника (`Aleksander`, `Arystoteles`, `Pitagoras`) в PL; устоявшаяся украинская школьная форма в UA.

---

## 12. Безопасность и тон 5 класса

Урок можно показывать в классе без отдельного предупреждения родителям.

Запрещено на картинках и в тексте-описании кадра:

- gore, кровь, расчленение, казнь крупным планом;
- рукопашная бойня, кадры в духе фильма *300*;
- рабство «с кнутом» как главный визуал (heloci — подпись групп, без пытки);
- сексуализированные мифы.

Допустимые замены (уже принятые в 08–10):

- гидра — сказочно, без крови;
- koń trojański — процессия / макет, не резня;
- Dyskobol — музейная статуя, как в учебнике;
- hoplita / legionista — полный доспех, схема, солдат **стоит**, не падающие трупы и не шаржа;
- niewola / pochód — шествие, не пытки;
- limes — реконструкция ворот (Saalburg), не бой на валу;
- wielka wędrówka — карта со стрелками племён, не sack of Rome и не гравюра Hogartha (dziesiątkowanie);
- gladiatorzy / Koloseum — здание снаружи, люди идут ко входу, не бой на арене;
- Spartakus — портрет в тунике, не «Śmierć Spartakusa» и не обнажённая статуя в цепях;
- Pompeje — карта, Везувий вдали, руины храма; **не** гипсовые слепки тел;
- Koloseum w lekcji 15 — овальная постройка, пустые аркады; не бой и не наумахия;
- Kolumna Trajana — спираль как лента на столбе, не крупный план резни.
- chrześcijaństwo / prześladowania — ryba ICHTHYS, gmina, mapa; **nie** ukrzyżowanie z ciałem, **nie** arena z lwami, **nie** kamienowanie, **nie** Caravaggio (koń nad Szawłem), **nie** śmierć dzieci-męczenników (Tarsycjusz / Sánchez del Río). Fakt śmierci ok. 33 — w tekście, spokojnie.
- 1453 / upadek Konstantynopola — mapa ze strzałkami ląd/morze; **nie** wjazd Mehmeda, **nie** śmierć cesarza w walce na obrazie, **nie** rzeź na murach.
- islam / Mahomet — **nie** twarz proroka (kaligrafia albo zasłona światła); **nie** obrazy z Wikipedii; podboje = mapa, nie jeździec z włócznią. Dżihad — fakt kalifów, nie wezwanie.
- Canossa / ekskomunika — cesarz klęczy spokojnie; **nie** szyderstwo papieża, **nie** piekło, **nie** kara śniegiem jako tortura.
- krucjaty — mapa drogi i państwa; **nie** szturm na mury z ciałami, **nie** Delacroix (wjazd do Konstantynopola), **nie** Matejko w boju, **nie** wyprawa dziecięca na ekranie, **nie** stos templariuszy. Rekonkwista — nie ta lekcja.
- hołd lenny / chłopi — ceremonia (klęczy, dłonie), nie upokorzenie; chłopi przy pracy, **nie** knut i nie nędza-gore.
- epoka rycerzy — rycerz **stoi**; turniej = dwaj jeźdźcy w siodle, **nie** ciała i **nie** krew; pasowanie = pas i ostrogi, **nie** cios w twarz; Zawisza = spokojny portret, **nie** Matejko / Grunwald; Roland = imię, **nie** śmierć pod Roncevaux; polowanie tylko ikoną, **nie** ranne zwierzę; Malbork nie rozciągać na państwo Krzyżaków (to Polska później).
- miasto i wieś — plan miasta i schemat trójpolówki, **nie** zdjęcie Rynku w Krakowie i **nie** akt Goleniowa z Wiki; **nie** chłosta przy pręgierzu; ścieki i epidemie = fakt, **nie** ciała na ulicy; plebs i chata = skromnie, **nie** nędza-gore; Carcassonne nie jako „polskie miasto”. Kościół na planie = budynek, nie lekcja 25.
- kościół w średniowieczu — msza spokojna; religijność = modlitwa i post, **nie** biczowanie; Franciszek = portret, **nie** stygmaty z krwią i **nie** „na wpół ślepy”; **nie** kopiować Monte Cassino / kodeksu z Wiki; inicjał = szkolny rysunek (sztuka ksiąg szerzej w 26); misje współczesne jednym zdaniem, **nie** zdjęcie dzieci.
- sztuka średniowiecza — schemat kościoła, **nie** zdjęcie Notre Dame / Tumu / ołtarza Wita Stwosza; **nie** Sąd Ostateczny z torturami; święci w szatach; miniatura = rysunek szkolny, nie foto kodeksu. Gatunki literackie i alegorie kolorów z liceum / Bryka — nie ta lekcja.
- zanim powstała Polska — Biskupin = rysunek palisady, **nie** zdjęcie skansenu; bogowie w szatach, **nie** ofiary z ludzi; Cyryl i Metody = szkolny rysunek, **nie** ikona; **nie** mapa Polski Mieszka / Cedynia 972 / chrzest 966 (to 28). Lista bogów „dla zainteresowanych” i cytat Prokopiusza — nie kopiować.
- Mieszko I — **nie** Matejko (*Zaprowadzenie chrześcijaństwa*); chrzest = ubrane postacie, **nie** nagość; Cedynia = krzyżyk na mapie, **nie** rzeź; Dagome = rysunek karty, **nie** foto rękopisu; Wojciech **nie** chrzci w 966 (to 29). Popiel / myszy — zdanie, nie obrazek.
- Bolesław Chrobry — **nie** Matejko (portret, koronacja, zjazd); Wojciech = tekst o śmierci, **nie** ścięcie; Drzwi Gnieźnieńskie = schemat paneli (łódź, nauka), **nie** foto Wiki i **nie** panel męczeństwa; wojny = mapa (Milsko, Łużyce, Morawy, Grody Czerwieńskie), **nie** rzeź; relikwie = rysunek włóczni/gwoździa; grobowiec / kryzys po śmierci — lekcja 30; banknot / dąb — zdanie w `challenge`, bez zdjęcia banknotu.
- kryzys i odbudowa — **nie** Matejko (Mieszko II, Kazimierz, Śmiały); **nie** Gerson (*Kazimierz wraca do Polski*); **nie** Knoor (klątwa); Stanisław = tekst o skazaniu, **nie** rozczłonkowanie; bunt = mapa, **nie** widły; insygnia = rysunek replik, **nie** foto korony jako skarbu Chrobrego; **nie** 1138 / Głogów (to 31).
- Krzywousty — **nie** Matejko (Herman, Bolesław); **nie** Peszka (łoże śmierci); Głogów = mapa grodów, **nie** dzieci na murze i **nie** oślepienie brata; wojna braci = mapa, nie rzeź; Psie Pole = zdanie w `challenge`, nie obrazek psów; porty XXI w. — jedna linia WSPÓŁCZEŚNIE; **nie** 1226 / Legnica (to 33).
- społeczeństwo pierwszych Piastów — żarowa = schemat drzew/pola, **nie** pożar-katastrofa; gród = szkolny schemat (wał, podgrodzie, most), **nie** kadr filmu / foto skansenu Gniezna; wojowie **stoją**, **nie** bitwa i **nie** wiki-rycerze w galopie; tarpan / tur = spokojny rysunek, nie polowanie-rzeź; osady służebne dziś = rysunek nazw (Piekary, Kowale, Kobylniki), **nie** zdjęcia tabliczek drogowych jako jedyny pokaz i **nie** lista 40 wsi z Wiki; **nie** eksponować Jadowników (zatrute strzały); **nie** turniej / Zawisza (to 23); **nie** 1226 / Legnica (to 33).
- rozbicie dzielnicowe — **nie** kodeks św. Jadwigi (bitwa, głowy); **nie** Matejko (Gąsawa); Gąsawa = stół zjazdu, **nie** scena morderstwa; Krzyżacy **stoją**, **nie** szarża i **nie** foto Malborka jako jedyny slajd (1309 stolica zakonu = 34); 1241 = mapa punktów (Lublin, Sandomierz, Kraków, Legnica), **nie** pożar z ludźmi i **nie** spadający koń; Sandomierz 1138 = Henryk, nie drugi Władysław; **nie** 1320 / Łokietek (to 34); **nie** Grunwald (to 36).
- zjednoczenie Polski — **nie** Matejko (śmierć Przemysła, portrety); **nie** Gerson (Ojców); Henryk Pobożny = recap z 33, **nie** zwłoki; 1309 = mapa Pomorza, **nie** rzeź Gdańska i **nie** foto Malborka; Płowce = krzyżyk na mapie, **nie** szarża; przydomek Łokietek bez drwiny ze wzrostu; Wacław III — imię i rok, **nie** oskarżenie Łokietka o zamach; Szczerbiec = rysunek/ciekawostka, **nie** rozbiory 1795; **nie** 1343 / Akademia (to 35); **nie** Grunwald (to 36).
- Kazimierz Wielki — **nie** Matejko; **nie** łoże śmierci; Kalisz 1343 = mapa (Kujawy + Dobrzyń wracają, Pomorze zostaje); Akademia = schemat szkoły, **nie** foto UJ; Wierzynek = challenge; **nie** Grunwald / Jadwiga (to 36).
- unia polsko-litewska — **nie** Matejko (*Bitwa pod Grunwaldem*); Grunwald = **jedna mapa kampanii**, nie rzeź; Malbork „nie zdobyto”; **nie** unia lubelska 1569; I pokój toruński 1411 ≠ II pokój 1466.
- Jagiellonowie — **nie** Matejko (Warna, hołd); Warna = mapa, **nie** łoże śmierci; dwa Kazimierze nie mylić; **nie** 1569; Nieszawa = most do 38, nie para KN 37.
- monarchia stanowa — KN = **1374 Koszyce** i **1505 Nihil novi**, nie Nieszawa zamiast nich; pańszczyzna = praca na polu, **nie** bat i nie nędza-gore; **nie** foto Sejmu XXI w.; **nie** rozbiory.

Войны и религия — факты и даты, спокойный язык. Не морализировать за программу и не вырезать тему (Persowie, krzyżowcy, islam) — резать **картинку насилия**, не факт.

---

## 13. Как править урок 01–38

Папка уже существует. Не создавать вторую. Уроки **35–38** переписаны по эталону 07–34; чеклист ниже — если правите их снова.

1. Открыть KN: wymagania, pojęcia, postaci, daty этой темы (не соседней).
2. Взять **вставку автора** (cele, notatki, karta) и сверить с KN — что обязательно на экран.
3. Сверить `curriculum.js`: `page`, `title.pl/ua`, `lesson` = имя папки.
4. Найти фильм Krótkie Lekcje **этой** темы. Отобрать 6–8 кадров под KN, не под каждый слайд.
5. Выписать, что **не** входит (уйдёт в соседний урок или останется только в фильме).
6. Заменить `content.js` целиком: шапка `em` / `gh` / `mark`, каркас §6, задания §10. Число экранов = столько, сколько нужно материалу, не фиксированные 17.
7. Зарезервировать следующие свободные `Historia/NNN.png`. Записать `img/PLIKI.txt`.
8. Промпт каждой картинки = текст её экрана. Safety §12.
9. `review.visual` — YouTube id, `place: "after"`.
10. `node --check lessons/historia/{folder}/content.js`.
11. Открыть через HTTP из корня проекта:  
    `http://127.0.0.1:…/lessons/historia/{folder}/index.html`  
    Проверить: шапка **Lekcja N · «Wczoraj i dziś» · s. …**; число точек = `blocks.length`; до загрузки PNG виден плейсхолдер с промптом; после загрузки — картинка; фильм в конце; PL и UA.
12. Автор заливает PNG на GitHub. Программист не ждёт PNG, чтобы считать текст урока готовым: плейсхолдер — штатное состояние.

`index.html`, `lesson.js`, `assets.js`, записи в `curriculum.js` и `data/lessons.js` для 35–38 уже стоят — не дублировать ключи.

Если когда-нибудь понадобится **новая** тема сверх 38: шаги как в общем техдоке §13, но путь `lessons/historia/{NN}-{topicId}/`, `subject: "historia"`, ключ `"historia/{topicId}"`. Новый номер папки = следующий после 38. Новый номер картинки = следующий после последнего занятого в `PLIKI.txt`.

---

## 14. Контроль качества

Перед тем как считать урок готовым:

1. Каждый пункт `goal` закрыт экраном или заданием.
2. Все pojęcia i postaci z KN podstawowe названы в тексте или словаре. Новая postać — карточка §6.2. Ponadpodstawowe — в `challenge` (или одной фразе), не раздуты в отдельную главу. Факты из вставки автора этой темы — на экране, не только в фильме.
3. Даты совпадают с KN/учебником (`776 p.n.e.`, не «около VIII века» вместо канонической даты, если KN даёт год).
4. Картинка не противоречит абзацу под ней.
5. Нет копипаста абзаца учебника.
6. Нет кадра, который принадлежит соседней теме.
7. Задания: эталон однозначен для validator; имена — массив форм; год — число.
8. `hint` не повторяет дословно правильный вариант выбора без нужды.
9. PL и UA эквивалентны.
10. Нет gore.
11. YouTube — та же тема.
12. Консоль браузера без ошибок; `node --check` проходит.

---

## 15. Что не делать

- Не копировать каркас математики 04–50 (`observe` → столбик → десять `input-number`) на историю.
- Не делать урок из 21 скриншота фильма «один в один».
- Не вставлять учебник verbatim.
- Не генерировать и не коммитить PNG как основной показ в `img/`.
- Не писать промпт, который смешивает три темы на одном слайде.
- Не нумеровать TOC «1, 2, 3» внутри rozdziału II: в хабе это 7, 8, 9.
- Не менять `js/lesson-engine.js`, `svg-renderer.js`, `feedback.js` ради одной карты.
- Не восстанавливать Python-генератор 38 уроков.
- Не считать черновик 35–38 эталоном «потому что папка есть» — **35–38 уже эталон**; не возвращать каркас `observe`/`algorithm`.
- Не копировать кадры фильма как картинки урока: скрины — источник *информации*, промпт описывает школьную карту или схему для понимания.
- Не рисовать четыре батальные картины вместо одной карты похода.
- Не ставить фильм раньше `summary`.
- Не заводить новый `task.type` для устного ответа: устная инструкция + закрытый выбор.

---

## 16. Что нельзя менять без необходимости

То же, что в общем техдоке §16: движок заданий, CSS плеера, контракт `blocks[]`.

Для истории дополнительно не ломать:

- `kind: "image-placeholder"` / `"map-placeholder"` / `"youtube"` в `svg-renderer.js`;
- разбор `mark` в `lesson-renderer.js`;
- нумерацию шапки из префикса папки;
- `hidePath: true` у `historia` в `curriculum.js`;
- схему GitHub `…/main/Historia/NNN.png`.

Новый `visual.kind` — только если GitHub-картинки и YouTube не закрывают потребность, и только функцией в `svg-renderer.js`.

---

## 17. Ограничения (факт кода, те же, что у математики, плюс история)

1. Два ключа прогресса (`edumost-lesson-progress` vs `edumost-progress` на TOC) не синхронизированы.
2. В плеере нет кнопки «следующая тема».
3. Нет рабочего `open-answer`: устная история проверяется выбором / коротким вводом.
4. Пока PNG нет на GitHub, ребёнок видит плейсхолдер с промптом — это ожидаемо.
5. Локальный PDF учебника может не содержать страниц с s. 61+.
6. Книга учителя — скан: требования читать глазами, не grep по PDF.
7. Статический хостинг, без сборщика: HTTP-сервер из корня `EduMost_5_Klasa`.

Эталон визуала и GitHub-потока — уроки **07–38**. Эталон полноты «KN + вставка автора + картинки + Zapamiętaj + YouTube» — урок **10**; уроки **14–38** сознательно дают **больше картинок**. Эталон оси лет под точками — уроки **11–21**, **27–31**, **33–38** (22–26 и **32** без новой даты). Следующий свободный номер картинки — **`Historia/320.png`**.
