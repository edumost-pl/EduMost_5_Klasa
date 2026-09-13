# T2 — wizualny prototyp / wireframe

**STATUS:**  
VISUAL PROTOTYPE — DO NOT IMPLEMENT

Ten dokument **nie** jest `content.js`, nie jest lekcją i nie jest kodem.

Źródło metodyczne: `docs/POLSKI_T2_LESSON_DESIGN.md`.  
Źródło UI: istniejący chrome lekcji EduMost (`css/lesson.css`, `css/lesson-blocks.css`, `css/tasks.css`, `js/lesson-engine.js`, `js/task-engine.js`) — **bez nowej design-systemy**.

Opcje z podręcznika s. 10 = **TO VERIFY**. Nie zgadujemy nastroju ani adresata apostrofy.

---

## Jak czytać ten mockup

Chrome lekcji (stały na każdym ekranie), jak w historia/biologia:

| Element | Jak jest teraz w EduMost |
|---|---|
| Szerokość | `.lesson-shell` max **760px**, wyśrodkowane |
| Góra | `.topbar`: `← Język polski` + `🇵🇱 Polski` / `🇺🇦 Українська` |
| Tożsamość | kicker rozdziału → `h1` tytułu → linia podręcznika |
| Postęp | tekst `n / 12` + kropki `.lesson-dots` (szara / teal „teraz” / jasna „widziane”) |
| Treść | `.lesson-block` karta, lewy pasek, ikona typu bloku |
| PL | `.tx-pl` — większy, ciemny |
| UA | `.tx-ua` — mniejszy, kolor `--accent2` (#b45309), **pod** PL, nie obok |
| Zadanie | `.task-opt` prostokąty; `[ Sprawdź ]` teal; `[ Podpowiedź ]` obrys |
| Feedback | zielony OK `#dcfce7` · błąd `#ffedd5` · hint `#e0f2fe` |
| Dół | `[ Wstecz ]` `[ Dalej ]` — Dalej wypełniony accent |

Kolor LITERATURA z katalogu (`#9D174D` / tło `#FCE7F3`) jest na **liście T**, nie wewnątrz silnika lekcji. W protototypie kicker może dostać mały chip — **do decyzji** (pytanie UX). Accent przycisków zostaje teal EduMost (`#0f766e`), jak inne lekcje.

Historia ma oś czasu. **T2 nie ma osi** (silnik pokazuje ją przy `historia`).

---

## Chrome — szkielet (wszystkie ekrany)

```
┌──────────────────────────────────────────────────────────┐
│  ← Język polski                    [🇵🇱 Polski] [🇺🇦]    │  topbar
├──────────────────────────────────────────────────────────┤
│  R1 · Zachwycający kosmos                                │  kicker
│  Na dobry początek – Jan Lechoń „Preludium”.             │  h1
│  Lekcja T2 · «Między nami 5» · s. 10                     │  .lesson-book
├──────────────────────────────────────────────────────────┤
│              3 / 12                                      │
│     ● ● ● ○ ○ ○ ○ ○ ○ ○ ○ ○                              │  dots
│     (widziane) (teraz) (jeszcze nie)                     │
├──────────────────────────────────────────────────────────┤
│                                                          │
│   [  TREŚĆ EKRANU — lesson-block(s)  ]                   │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  [ Wstecz ]                          [ Dalej → ]         │  pager
└──────────────────────────────────────────────────────────┘
```

Dalej: w obecnym silniku można iść do następnego bloku bez zaliczenia zadania. Czy T2 ma **blokować** Dalej do czasu Sprawdź — **pytanie UX**, nie zmiana kodu teraz.

Poniżej chrome powtarzam w skrócie, żeby było widać kompozycję każdego ekranu.

---

# S01 — Start + cel

**Nazwa dla dziecka:** Dziś pracujemy z wierszem  
**Bloki silnika:** `intro` + `goal` (dwa karty, jeden scroll)

### Desktop

```
┌──────────────────────────────────────────────────────────┐
│  ← Język polski                    [🇵🇱 Polski] [🇺🇦]    │
│  R1 · Zachwycający kosmos                                │
│  Na dobry początek – Jan Lechoń „Preludium”.             │
│  Lekcja T2 · «Między nami 5» · s. 10                     │
│              1 / 12                                      │
│     ● ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○                              │
│                                                          │
│  ┌─ intro ─────────────────────────────────────────────┐ │
│  │ 👋  Dziś pracujemy z wierszem                       │ │
│  │                                                     │ │
│  │  Przeczytasz utwór Jana Lechonia w podręczniku      │ │
│  │  na stronie 10. Nie musisz znać całego życia        │ │
│  │  poety. Ważny jest głos w wierszu.                  │ │
│  │                                                     │ │
│  │  🇺🇦 Сьогодні читаємо вірш у книжці, сторінка 10.    │ │
│  │     Не біографія — голос у тексті.                  │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─ goal ──────────────────────────────────────────────┐ │
│  │ 🎯  Czego się nauczysz?                             │ │
│  │                                                     │ │
│  │  ✓  Wiem, kto mówi w wierszu                        │ │
│  │     🇺🇦 Хто говорить у вірші                         │ │
│  │  ✓  Potrafię powiedzieć, jaki jest nastrój,         │ │
│  │     i pokazać to w tekście                          │ │
│  │     🇺🇦 Настрій — і доказ у тексті                   │ │
│  │  ✓  Wiem, czym jest apostrofa, i znajduję ją        │ │
│  │     w „Preludium”                                   │ │
│  │     🇺🇦 Що таке апострофа і де вона в вірші          │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  [ Wstecz ]                              [ Dalej → ]     │
│   (disabled)                                             │
└──────────────────────────────────────────────────────────┘
```

**Góra:** topbar + tożsamość T2.  
**Za nagłówkiem kart:** krótki PL, pod spodem UA (nie dominuje).  
**Karty:** dwie, jak w lekcjach historii (intro, potem goal-list).  
**Przyciski:** tylko pager; brak Sprawdź.  
**Pole odpowiedzi:** brak.  
**Po „odpowiedzi”:** n/d.  
**Poniżej:** Dalej.  
**UA:** pod każdym celem, `.tx-ua`.

Brak zadania — dziecko czyta i idzie dalej.

---

# S02 — Przeczytaj s. 10

**Nazwa dla dziecka:** Otwórz książkę  
**Blok:** `observe` (w polskim CSS ten typ ma większy PL)

### Desktop — przed zadaniem

```
┌──────────────────────────────────────────────────────────┐
│  …chrome T2…                          2 / 12  ●●○○…     │
│                                                          │
│  ┌─ observe ───────────────────────────────────────────┐ │
│  │ 👀  Otwórz podręcznik                                │ │
│  │                                                     │ │
│  │  ┌───────────────────────────────────────────────┐  │ │
│  │  │  📖  Między nami 5                             │  │ │
│  │  │      strona 10                                 │  │ │
│  │  │      Jan Lechoń  ·  „Preludium”                │  │ │
│  │  │                                               │  │ │
│  │  │  Przeczytaj CAŁY wiersz w książce.            │  │ │
│  │  │  Tu na ekranie tekstu utworu NIE MA.          │  │ │
│  │  └───────────────────────────────────────────────┘  │ │
│  │                                                     │ │
│  │  Możesz czytać szeptem. To nie recytacja.           │ │
│  │  🇺🇦 Прочитай вірш у книжці. На екрані його немає.   │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─ task ──────────────────────────────────────────────┐ │
│  │ 🧩  O czym jest ten wiersz?                         │ │
│  │     🇺🇦 Про що цей вірш? (вибери після читання)      │ │
│  │                                                     │ │
│  │  ┌─────────────────────────────────────────────┐    │ │
│  │  │ ○  [ OPCJA 1 — TO VERIFY Z S. 10 ]          │    │ │
│  │  └─────────────────────────────────────────────┘    │ │
│  │  ┌─────────────────────────────────────────────┐    │ │
│  │  │ ○  [ OPCJA 2 — TO VERIFY Z S. 10 ]          │    │ │
│  │  └─────────────────────────────────────────────┘    │ │
│  │  ┌─────────────────────────────────────────────┐    │ │
│  │  │ ○  [ OPCJA 3 — TO VERIFY Z S. 10 ]          │    │ │
│  │  └─────────────────────────────────────────────┘    │ │
│  │                                                     │ │
│  │  [ Sprawdź ]     [ Podpowiedź ]                     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  [ Wstecz ]                              [ Dalej → ]     │
└──────────────────────────────────────────────────────────┘
```

Karta książki = istniejący `.prompt` (jasnozielone tło) — **wyraźnie inna** niż zwykły akapit.

**Po Sprawdź OK:** zielony pasek pod przyciskami, potem Dalej.

```
│  ┌─────────────────────────────────────────────────────┐ │
│  │ ✓  Dobrze — umiesz powiedzieć, o czym jest wiersz. │ │
│  │    Idziemy dalej w głąb tekstu.                    │ │
│  └─────────────────────────────────────────────────────┘ │  .task-feedback.is-ok
```

**Po błędzie:** patrz wzorzec hint w S04 (ten sam mechanizm silnika).

---

# S03 — Słowa

**Nazwa dla dziecka:** Słowa, które pomogą  
**Blok:** `vocabulary` + `task`

```
┌──────────────────────────────────────────────────────────┐
│  …chrome…                             3 / 12            │
│                                                          │
│  ┌─ vocabulary ────────────────────────────────────────┐ │
│  │ 🇵🇱  Słowa, które pomogą                             │ │
│  │                                                     │ │
│  │  Nie ucz się ich na pamięć. Wrócą przy nastroju     │ │
│  │  i apostrofie.                                      │ │
│  │  🇺🇦 Коротко. Не весь вірш українською.              │ │
│  │                                                     │ │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐    │ │
│  │  │ wyraz PL   │  │ wyraz PL   │  │ wyraz PL   │    │ │
│  │  │ [TO VERIFY │  │ [TO VERIFY │  │ [TO VERIFY │    │ │
│  │  │  ramka     │  │  ramka     │  │  ramka     │    │ │
│  │  │  s. 10]    │  │  s. 10]    │  │  s. 10]    │    │ │
│  │  │ 🇺🇦 …       │  │ 🇺🇦 …       │  │ 🇺🇦 …       │    │ │
│  │  └────────────┘  └────────────┘  └────────────┘    │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─ task ──────────────────────────────────────────────┐ │
│  │  W tym miejscu wiersza wyraz znaczy:                │ │
│  │  „[KRÓTKI FRAGMENT — TO VERIFY S. 10]”              │ │
│  │                                                     │ │
│  │  ○  [znaczenie A — TO VERIFY]                       │ │
│  │  ○  [znaczenie B — TO VERIFY]                       │ │
│  │                                                     │ │
│  │  [ Sprawdź ]     [ Podpowiedź ]                     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  [ Wstecz ]                              [ Dalej → ]     │
└──────────────────────────────────────────────────────────┘
```

Karty wyrazów: na desktopie 3 w rzędzie; na telefonie **jedna pod drugą** (patrz mobile).  
UA tylko przy wyrazie, nie pod całym wierszem.

---

# S04 — Kto mówi?

**Nazwa dla dziecka:** Kto mówi w wierszu?  
**Blok:** `concept` (1 zdanie) + `task` (kto) + drugi `task` (dowód)  
Żeby nie przeładować: **dwa pytania na jednym ekranie**, jedno pod drugim, oba z Sprawdź.

## A. Przed odpowiedzią

```
┌──────────────────────────────────────────────────────────┐
│  …chrome…                             4 / 12            │
│                                                          │
│  ┌─ concept ───────────────────────────────────────────┐ │
│  │ 🧠  Osoba mówiąca                                   │ │
│  │                                                     │ │
│  │  Autor napisał wiersz. W wierszu ktoś mówi —        │ │
│  │  to osoba mówiąca. Czasem to nie jest to samo.      │ │
│  │  🇺🇦 Хто говорить у вірші — не завжди сам автор.     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─ task 1 ────────────────────────────────────────────┐ │
│  │ 🧩  Kto mówi w tym wierszu?                         │ │
│  │     🇺🇦 Хто говорить у цьому вірші?                  │ │
│  │                                                     │ │
│  │  ○  [ OPCJA — TO VERIFY Z S. 10 ]                   │ │
│  │  ○  Jan Lechoń, bo on napisał wiersz                │ │
│  │  ○  [ OPCJA — TO VERIFY Z S. 10 ]                   │ │
│  │                                                     │ │
│  │  [ Sprawdź ]     [ Podpowiedź ]                     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─ task 2 ────────────────────────────────────────────┐ │
│  │ 🧩  Który fragment to potwierdza?                   │ │
│  │     Otwórz stronę 10.                               │ │
│  │     🇺🇦 Який уривок це підтверджує?                  │ │
│  │                                                     │ │
│  │  ○  [KRÓTKI FRAGMENT — TO VERIFY S. 10]             │ │
│  │  ○  [KRÓTKI FRAGMENT — TO VERIFY S. 10]             │ │
│  │  ○  [KRÓTKI FRAGMENT — TO VERIFY S. 10]             │ │
│  │                                                     │ │
│  │  [ Sprawdź ]     [ Podpowiedź ]                     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  [ Wstecz ]                              [ Dalej → ]     │
└──────────────────────────────────────────────────────────┘
```

Opcja „Lechoń, bo napisał” jest **celowym dystraktorem** (design T2), nie zgadywaniem s. 10.

## B. Błąd + hint (task 1)

```
│  ○  Jan Lechoń, bo on napisał wiersz     ← wybrane     │
│  [ Sprawdź ]     [ Podpowiedź ]                        │
│  ┌───────────────────────────────────────────────────┐ │
│  │ !  Nie pytamy, kto napisał książkę.               │ │
│  │    Pytamy, czyj głos słychać w wierszu.           │ │
│  │    🇺🇦 Не автор на обкладинці — голос у тексті.    │ │
│  └───────────────────────────────────────────────────┘ │  .is-bad  (pomarańcz)
│  po 2. błędzie / Podpowiedź:                           │
│  ┌───────────────────────────────────────────────────┐ │
│  │ 💡  Zobacz pierwsze linie na stronie 10.          │ │
│  └───────────────────────────────────────────────────┘ │  .is-hint  (błękit)
```

Dziecko **zostaje na tym samym pytaniu** (silnik: ponowne Sprawdź). Klucza nie pokazujemy.

## C. OK

```
│  ┌───────────────────────────────────────────────────┐ │
│  │ ✓  Tak — to osoba mówiąca. Autora (Lechonia)      │ │
│  │    poznasz na okładce; głos czytamy w tekście.    │ │
│  └───────────────────────────────────────────────────┘ │  .is-ok  (zieleń)
```

Potem dziecko schodzi do task 2 (fragment).

---

# S05 — Sytuacja

**Nazwa dla dziecka:** Co wiemy o sytuacji?

```
┌──────────────────────────────────────────────────────────┐
│  …chrome…                             5 / 12            │
│                                                          │
│  ┌─ observe ───────────────────────────────────────────┐ │
│  │ 👀  Co się dzieje w wierszu?                        │ │
│  │                                                     │ │
│  │  Odpowiadaj TYLKO na podstawie strony 10.           │ │
│  │  Nie zgaduj „ładnej” historii.                      │ │
│  │  🇺🇦 Не вигадуй. Шукай у вірші.                      │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─ task ──────────────────────────────────────────────┐ │
│  │  Zaznacz, co wynika z tekstu:                       │ │
│  │                                                     │ │
│  │  ☐  [ INFORMACJA — TO VERIFY Z S. 10 ]              │ │
│  │  ☐  [ INFORMACJA — TO VERIFY Z S. 10 ]              │ │
│  │  ☐  [ INFORMACJA — TO VERIFY Z S. 10 ]              │ │
│  │                                                     │ │
│  │  Potem: który fragment to potwierdza?               │ │
│  │  ○  [KRÓTKI FRAGMENT — TO VERIFY S. 10]             │ │
│  │  ○  [KRÓTKI FRAGMENT — TO VERIFY S. 10]             │ │
│  │                                                     │ │
│  │  [ Sprawdź ]     [ Podpowiedź ]                     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  [ Wstecz ]                              [ Dalej → ]     │
└──────────────────────────────────────────────────────────┘
```

`multiple-choice` = checkboxy (istniejący typ). Na ekranie **nie** piszemy „sytuacja liryczna”.

---

# S06 — Nastrój + „ponieważ”

**Nazwa dla dziecka:** Jaki jest nastrój?

## A. Przed odpowiedzią (desktop)

```
┌──────────────────────────────────────────────────────────┐
│  …chrome…                             6 / 12            │
│                                                          │
│  ┌─ task ──────────────────────────────────────────────┐ │
│  │ 🧩  Jaki jest nastrój tej wypowiedzi?               │ │
│  │                                                     │ │
│  │  Wybierz słowo z podręcznika (s. 10).               │ │
│  │  🇺🇦 Який настрій? Слово зі сторінки 10, не з голови.│ │
│  │                                                     │ │
│  │  ┌─────────────────────────────────────────────┐    │ │
│  │  │ ○  [ SŁOWO 1 — TO VERIFY „podane słownictwo”│    │ │
│  │  └─────────────────────────────────────────────┘    │ │
│  │  ┌─────────────────────────────────────────────┐    │ │
│  │  │ ○  [ SŁOWO 2 — TO VERIFY s. 10 ]            │    │ │
│  │  └─────────────────────────────────────────────┘    │ │
│  │  ┌─────────────────────────────────────────────┐    │ │
│  │  │ ○  [ SŁOWO 3 — TO VERIFY s. 10 ]            │    │ │
│  │  └─────────────────────────────────────────────┘    │ │
│  │                                                     │ │
│  │  ── gdy wybrane słowo, pojawia się krok 2: ──       │ │
│  │                                                     │ │
│  │  Ponieważ w wierszu jest:                           │ │
│  │  🇺🇦 Бо у вірші є:                                   │ │
│  │  ○  [KRÓTKI FRAGMENT — TO VERIFY S. 10]             │ │
│  │  ○  [KRÓTKI FRAGMENT — TO VERIFY S. 10]             │ │
│  │  ○  [KRÓTKI FRAGMENT — TO VERIFY S. 10]             │ │
│  │                                                     │ │
│  │  [ Sprawdź ]     [ Podpowiedź ]                     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─ (po OK, drugi mały blok, nie obowiązkowy) ─────────┐ │
│  │  A jaki nastrój masz TY po przeczytaniu?            │ │
│  │  (to nie jest ocena)                                │ │
│  │  ○ ta sama lista  /  lub pole 1 zdania              │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  [ Wstecz ]                              [ Dalej → ]     │
└──────────────────────────────────────────────────────────┘
```

Krok 2 „Ponieważ…” może być **drugim zadaniem** na tym samym ekranie (jak S04), jeśli silnik nie umie dwustopniowego choice bez dwóch `task`. **Nie zmieniamy silnika** — prototyp zakłada dwa `task` pod sobą: (1) słowo (2) fragment.

## B. Błąd (wybrane słowo bez sensu / zły fragment)

```
│  ┌─ pomarańcz .is-bad ─────────────────────────────────┐ │
│  │ !  Nastrój bez „ponieważ” to zgadywanie.            │ │
│  │    Wróć do strony 10 i do listy słów w książce.     │ │
│  └─────────────────────────────────────────────────────┘ │
│  ┌─ błękit .is-hint ───────────────────────────────────┐ │
│  │ 💡  Które słowa na s. 10 brzmią jak uczucie?        │ │
│  └─────────────────────────────────────────────────────┘ │
```

## C. OK

```
│  ┌─ zieleń .is-ok ─────────────────────────────────────┐ │
│  │ ✓  Masz dowód w tekście.                            │ │
│  └─────────────────────────────────────────────────────┘ │
```

---

# S07 — Apostrofa: zobacz → zrozum → nazwij

**Nazwa dla dziecka:** Zobacz ten zwrot  
**Jeden ekran, trzy mini-kroki w jednej karcie** (scroll, bez trzech pagerów — 45 min).

```
┌──────────────────────────────────────────────────────────┐
│  …chrome…                             7 / 12            │
│                                                          │
│  ┌─ example ───────────────────────────────────────────┐ │
│  │ ✏️  1. Zobacz                                       │ │
│  │                                                     │ │
│  │  W wierszu na stronie 10 jest taki zwrot:           │ │
│  │                                                     │ │
│  │      „ [KRÓTKI FRAGMENT — TO VERIFY S. 10] ”        │ │
│  │                                                     │ │
│  │  Czy ktoś mówi DO kogoś albo DO czegoś?             │ │
│  │  🇺🇦 Чи це звертання — до когось / до чогось?        │ │
│  │                                                     │ │
│  │  ○  Tak, to zwrot                                   │ │
│  │  ○  Nie, to tylko opowiadanie o kimś                │ │
│  │  [ Sprawdź ]                                        │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─ concept ───────────────────────────────────────────┐ │
│  │ 🧠  2. Zrozum  ·  3. Nazwij                         │ │
│  │     (blok widoczny po OK w kroku 1                  │ │
│  │      ALBO od razu pod spodem — pytanie UX)          │ │
│  │                                                     │ │
│  │  Osoba mówiąca nie tylko opowiada — zwraca się.     │ │
│  │                                                     │ │
│  │  Takie zwrócenie się nazywamy:                      │ │
│  │                                                     │ │
│  │      apostrofa                                      │ │
│  │                                                     │ │
│  │  Apostrofa to zwrot osoby mówiącej                  │ │
│  │  do kogoś lub do czegoś.                            │ │
│  │  [definicja TO VERIFY vs ramka s. 10]               │ │
│  │                                                     │ │
│  │  🇺🇦 Апострофа тут = поетичне звертання              │ │
│  │     (не знак «’» у прізвищах).                      │ │
│  │                                                     │ │
│  │  Dzięki apostrofie wiemy, do kogo idzie głos.       │ │
│  │  (Tyle funkcji na T2 — bez wykładu.)                │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  [ Wstecz ]                              [ Dalej → ]     │
└──────────────────────────────────────────────────────────┘
```

Słowo **apostrofa** pojawia się **po** zwrocie, dużą czcionką jak `.math-line` / formula w innych lekcjach — jedno pojęcie na środku karty.

**Pytanie UX:** czy krok 2–3 pokazywać od razu (dziecko może spojrzeć na nazwę za wcześnie), czy dopiero po Sprawdź. Design T2 chciał przykład **przed** etykietą.

---

# S08 — Apostrofa: rozpoznaj

**Nazwa dla dziecka:** Które zdanie ma apostrofę?  
Zdania **EduMost** (nie cytat Lechonia).

## A. Przed

```
┌──────────────────────────────────────────────────────────┐
│  …chrome…                             8 / 12            │
│                                                          │
│  ┌─ task ──────────────────────────────────────────────┐ │
│  │ 🧩  Które zdanie zawiera apostrofę?                 │ │
│  │     (zwrot do kogoś lub czegoś)                     │ │
│  │  🇺🇦 Де є звертання?                                 │ │
│  │                                                     │ │
│  │  ┌─────────────────────────────────────────────┐    │ │
│  │  │ ○  Noc była cicha i długa.                  │    │ │
│  │  └─────────────────────────────────────────────┘    │ │
│  │  ┌─────────────────────────────────────────────┐    │ │
│  │  │ ○  O nocy, zostań jeszcze chwilę!           │    │ │
│  │  └─────────────────────────────────────────────┘    │ │
│  │  ┌─────────────────────────────────────────────┐    │ │
│  │  │ ○  Dzieci bały się ciemności.               │    │ │
│  │  └─────────────────────────────────────────────┘    │ │
│  │                                                     │ │
│  │  [ Sprawdź ]     [ Podpowiedź ]                     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  [ Wstecz ]                              [ Dalej → ]     │
└──────────────────────────────────────────────────────────┘
```

(Przykładowe zdania są **nasze**, nie z s. 10. Można wymienić przy implementacji.)

## B. Błąd (wybrane „Noc była cicha…”)

```
│  ┌─ .is-bad ───────────────────────────────────────────┐ │
│  │ !  Tu ktoś opowiada O nocy, nie mówi DO nocy.       │ │
│  └─────────────────────────────────────────────────────┘ │
│  ┌─ .is-hint ──────────────────────────────────────────┐ │
│  │ 💡  Czy ktoś mówi *do* kogoś, czy tylko *o* kimś?   │ │
│  └─────────────────────────────────────────────────────┘ │
```

## C. OK

```
│  ┌─ .is-ok ────────────────────────────────────────────┐ │
│  │ ✓  Rozpoznajesz zasadę. Teraz wracamy              │ │
│  │    do „Preludium”.                                  │ │
│  └─────────────────────────────────────────────────────┘ │
```

---

# S09 — Apostrofa w „Preludium”

**Nazwa dla dziecka:** Znajdź apostrofę w wierszu

## A. Przed

```
┌──────────────────────────────────────────────────────────┐
│  …chrome…                             9 / 12            │
│                                                          │
│  ┌─ observe ───────────────────────────────────────────┐ │
│  │ 📖  Znowu strona 10                                 │ │
│  │  🇺🇦 Знову підручник, не екран з цілим віршем.       │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─ task 1 ────────────────────────────────────────────┐ │
│  │ 🧩  Wskaż fragment z apostrofą                      │ │
│  │                                                     │ │
│  │  ○  [KRÓTKI FRAGMENT — TO VERIFY S. 10]             │ │
│  │  ○  [KRÓTKI FRAGMENT — TO VERIFY S. 10]             │ │
│  │  ○  [KRÓTKI FRAGMENT — TO VERIFY S. 10]             │ │
│  │                                                     │ │
│  │  [ Sprawdź ]     [ Podpowiedź ]                     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─ task 2 ────────────────────────────────────────────┐ │
│  │ 🧩  Do kogo lub do czego jest ten zwrot?            │ │
│  │  🇺🇦 До кого / до чого звертання?                    │ │
│  │                                                     │ │
│  │  ○  [ TO VERIFY Z S. 10 ]                           │ │
│  │  ○  [ TO VERIFY Z S. 10 ]                           │ │
│  │  ○  [ TO VERIFY Z S. 10 ]                           │ │
│  │                                                     │ │
│  │  [ Sprawdź ]     [ Podpowiedź ]                     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  [ Wstecz ]                              [ Dalej → ]     │
└──────────────────────────────────────────────────────────┘
```

## B. Błąd

```
│  ┌─ .is-bad ───────────────────────────────────────────┐ │
│  │ !  Apostrofa to zwrot. Gdzie w wierszu ktoś         │ │
│  │    kogoś woła albo do kogoś mówi?                   │ │
│  └─────────────────────────────────────────────────────┘ │
│  ┌─ .is-hint ──────────────────────────────────────────┐ │
│  │ 💡  Szukaj na początku utworu na s. 10.             │ │
│  │     [lokalizacja TO VERIFY — nie zgadywać layoutu]  │ │
│  └─────────────────────────────────────────────────────┘ │
```

## C. OK

```
│  ┌─ .is-ok ────────────────────────────────────────────┐ │
│  │ ✓  To zastosowanie: nie tylko definicja,            │ │
│  │    ale miejsce w „Preludium”.                       │ │
│  └─────────────────────────────────────────────────────┘ │
```

---

# S10 — Twoja odpowiedź

**Nazwa dla dziecka:** Dokończ wypowiedź  
**Typ:** `open-answer` → `.task-area` (istniejące pole wieloliniowe)

```
┌──────────────────────────────────────────────────────────┐
│  …chrome…                            10 / 12            │
│                                                          │
│  ┌─ task ──────────────────────────────────────────────┐ │
│  │ 🎮  Dokończ w imieniu osoby mówiącej                │ │
│  │                                                     │ │
│  │  Napisz 2–3 zdania po polsku, tak jakbyś był        │ │
│  │  osobą z wiersza. Zacznij od „Ja…”.                 │ │
│  │                                                     │ │
│  │  🇺🇦 Можна подумати українською. Пиши по-польськи.   │ │
│  │                                                     │ │
│  │  ┌─────────────────────────────────────────────┐    │ │
│  │  │ Ja …                                        │    │ │
│  │  │                                             │    │ │
│  │  │                                             │    │ │
│  │  └─────────────────────────────────────────────┘    │ │
│  │           pole .task-area  (min. ~5 wierszy)        │ │
│  │                                                     │ │
│  │  [ Sprawdź ]                                        │ │
│  │  (silnik nie ocenia stylu — komunikat self-check)   │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  po „Sprawdź”:                                         │
│  ┌─ .is-hint / info ───────────────────────────────────┐ │
│  │  Sprawdź sam: czy pisałeś JAK osoba z wiersza      │ │
│  │  (ja), a nie jak recenzent?                         │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  [ Wstecz ]                              [ Dalej → ]     │
└──────────────────────────────────────────────────────────┘
```

Brak auto-klucza. To najtrudniejszy ekran wizualnie: dużo pustego pola. **Pytanie UX:** czy starter „Ja…” w polu zmniejsza lęk.

---

# S11 — Sprawdź

**Nazwa dla dziecka:** Sprawdź się  
**Blok:** `check` + trzy `task` (krótko)

## A. Przed (cały ekran — scroll)

```
┌──────────────────────────────────────────────────────────┐
│  …chrome…                            11 / 12            │
│                                                          │
│  ┌─ check ─────────────────────────────────────────────┐ │
│  │ 🏆  Sprawdź się                                     │ │
│  │                                                     │ │
│  │  Możesz patrzeć do książki, strona 10.              │ │
│  │  🇺🇦 Це не іспит на пам’ять.                         │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  1/3  Kto mówi w wierszu?                              │
│       ○ … TO VERIFY   ○ Jan Lechoń, bo autor           │
│       [ Sprawdź ]                                      │
│                                                          │
│  2/3  Nastrój wypowiedzi, ponieważ:                    │
│       ○ słowo+fragment TO VERIFY s. 10                 │
│       ○ …                                              │
│       [ Sprawdź ]                                      │
│                                                          │
│  3/3  Apostrofa w „Preludium” to fragment:             │
│       ○ [KRÓTKI FRAGMENT — TO VERIFY S. 10]            │
│       [ Sprawdź ]                                      │
│                                                          │
│  [ Wstecz ]                              [ Dalej → ]     │
└──────────────────────────────────────────────────────────┘
```

Trzy osobne `task` jak w powtórkach przedmiotów — każdy ma swój Sprawdź / feedback.

## B. Błąd (przykład 3/3)

```
│  ┌─ .is-bad ───────────────────────────────────────────┐ │
│  │ !  Wróć do s. 10. Apostrofa = zwrot.                │ │
│  └─────────────────────────────────────────────────────┘ │
```

## C. Wszystkie trzy OK — zielony pasek na górze check

```
│  ┌─ .is-ok ────────────────────────────────────────────┐ │
│  │ ✓  Potrafisz czytać ten wiersz: kto mówi,           │ │
│  │    jaki nastrój, gdzie jest apostrofa.              │ │
│  └─────────────────────────────────────────────────────┘ │
```

Nie 20 pytań. Brak rymu / wersu.

---

# S12 — Zapamiętaj + zeszyt + dalej

**Nazwa dla dziecka:** Zapisz i zapamiętaj  
**Blok:** `summary` (żółte tło — już jest w CSS)

```
┌──────────────────────────────────────────────────────────┐
│  …chrome…                            12 / 12            │
│                                                          │
│  ┌─ summary  (tło ciepłe żółte, jak inne lekcje) ──────┐ │
│  │ 🧠  Potrafię                                        │ │
│  │                                                     │ │
│  │  • W wierszu mówi osoba mówiąca.                    │ │
│  │  • Nastrój biorę z tekstu.                          │ │
│  │  • Apostrofa = zwrot do kogoś / czegoś.             │ │
│  │                                                     │ │
│  │  🇺🇦 Коротко те саме українською під пунктами.       │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌─ observe / zeszyt ──────────────────────────────────┐ │
│  │ 📓  Do zeszytu  (JEDEN raz w lekcji)                │ │
│  │                                                     │ │
│  │  Zapisz tylko to:                                   │ │
│  │                                                     │ │
│  │   1. co to apostrofa                                │ │
│  │      (definicja jak na s. 10 / z S07)               │ │
│  │   2. jeden zwrot z „Preludium”                      │ │
│  │      — przepisujesz 1 linię ze strony 10            │ │
│  │                                                     │ │
│  │  🇺🇦 У зошит: дефініція + один приклад, не весь вірш.│ │
│  │                                                     │ │
│  │  ☐  Zapisałem w zeszycie                            │ │
│  │      (checkbox — TO VERIFY czy silnik ma taki       │ │
│  │       task; jeśli nie: samo polecenie, bez tick)    │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  Później: lekcja o podmiocie lirycznym (T6).           │
│  Bez spoilera „Nocy”.                                  │
│                                                          │
│  [ Wstecz ]                    [ Koniec lekcji ]       │
│                                  (Dalej na ostatnim    │
│                                   bloku = powrót do    │
│                                   przedmiotu — jak     │
│                                   w istniejącym pager) │
└──────────────────────────────────────────────────────────┘
```

Zeszyt = **jedna** karta, nie pasek po każdym ekranie.

---

# Stany — szybka mapa

| Ekran | A przed | B błąd+hint | C OK |
|---|---|---|---|
| S04 | § wyżej | pomarańcz + błękit, ponów | zieleń, zejdź do fragmentu |
| S06 | słowo → ponieważ | „wróć do s. 10” | zieleń, opcjonalnie nastrój ucznia |
| S08 | 3 zdania | *do* vs *o* | zieleń, zapowiedź S09 |
| S09 | fragmenty s. 10 | szukaj zwrotu | zieleń „zastosowanie” |
| S11 | 3 krótkie taski | per zadanie | podsumowanie 3 skills |

S01, S03 (część vocab), S07 (część definicji), S10, S12 — mniej stanów błędu (S10 = self-check).

---

# Mobile (~360px) — 3 ekrany

Telefon: **jedna kolumna**. Przyciski pager na pełną szerokość, jeden pod drugim jeśli ciasno (istniejący `.lesson-pager` to `flex` — na wąskim dwa przyciski obok siebie nadal OK). UA pod PL, nie obok. Kropki mogą się zawijać (`.lesson-dots` ma `flex-wrap`).

## S01 mobile

```
┌─────────────────────────────┐
│ ← Polski     [🇵🇱][🇺🇦]     │
│ R1 · Zachwycający kosmos    │
│ Preludium                   │
│ T2 · s. 10                  │
│         1 / 12              │
│    ● ○ ○ ○ ○ ○ …            │
│                             │
│ ┌─────────────────────────┐ │
│ │ 👋 Dziś z wierszem      │ │
│ │ 2–3 zdania PL           │ │
│ │ 🇺🇦 2 krótkie zdania     │ │
│ └─────────────────────────┘ │
│ ┌─────────────────────────┐ │
│ │ 🎯 Czego się nauczysz?  │ │
│ │ ✓ kto mówi              │ │
│ │   🇺🇦 …                  │ │
│ │ ✓ nastrój + tekst       │ │
│ │ ✓ apostrofa             │ │
│ └─────────────────────────┘ │
│                             │
│ [ Wstecz ]                  │
│ [        Dalej →        ]   │
└─────────────────────────────┘
```

H1 na mobile: `clamp` już zmniejsza tytuł. Nie duplikować długiego tytułu w karcie.

## S06 mobile

```
┌─────────────────────────────┐
│ T2 · 6 / 12                 │
│                             │
│ Jaki jest nastrój?          │
│ 🇺🇦 Який настрій?            │
│                             │
│ ┌─────────────────────────┐ │
│ │ ○ [SŁOWO — s. 10]       │ │
│ └─────────────────────────┘ │
│ ┌─────────────────────────┐ │
│ │ ○ [SŁOWO — s. 10]       │ │
│ └─────────────────────────┘ │
│ ┌─────────────────────────┐ │
│ │ ○ [SŁOWO — s. 10]       │ │
│ └─────────────────────────┘ │
│                             │
│ Ponieważ:                   │
│ ┌─────────────────────────┐ │
│ │ ○ [FRAGMENT s. 10]      │ │
│ └─────────────────────────┘ │
│ ┌─────────────────────────┐ │
│ │ ○ [FRAGMENT s. 10]      │ │
│ └─────────────────────────┘ │
│                             │
│ [ Sprawdź ]                 │
│ [ Podpowiedź ]              │
│                             │
│ (feedback pod spodem,       │
│  pełna szerokość)           │
│                             │
│ [ Wstecz ]  [ Dalej ]       │
└─────────────────────────────┘
```

Max **3+3 opcji**. Nie siatka 2×2 — na palcu łatwiej stos.

## S09 mobile

```
┌─────────────────────────────┐
│ T2 · 9 / 12                 │
│                             │
│ ┌─────────────────────────┐ │
│ │ 📖 Strona 10            │ │
│ │ Otwórz książkę.         │ │
│ │ 🇺🇦 Знову книжка.        │ │
│ └─────────────────────────┘ │
│                             │
│ Wskaż apostrofę             │
│ ┌─────────────────────────┐ │
│ │ ○ [FRAGMENT]            │ │
│ └─────────────────────────┘ │
│ ┌─────────────────────────┐ │
│ │ ○ [FRAGMENT]            │ │
│ └─────────────────────────┘ │
│ ┌─────────────────────────┐ │
│ │ ○ [FRAGMENT]            │ │
│ └─────────────────────────┘ │
│ [ Sprawdź ] [ Podpowiedź ]  │
│                             │
│ ─── scroll ───              │
│                             │
│ Do kogo / do czego?         │
│ ┌─────────────────────────┐ │
│ │ ○ [TO VERIFY]           │ │
│ └─────────────────────────┘ │
│ …                           │
│ [ Sprawdź ]                 │
│                             │
│ [ Wstecz ]  [ Dalej ]       │
└─────────────────────────────┘
```

Dwa taski = scroll. Nie ściskać obu above-the-fold kosztem czytelności.

---

## Mapa przycisków (cały T2)

| Ekran | Sprawdź | Podpowiedź | Dalej | Inne |
|---|---|---|---|---|
| S01 | nie | nie | tak | Wstecz off |
| S02–S06, S08–S09, S11 | tak | tak | tak | — |
| S07 | tak (krok 1) | opcjonalnie | tak | — |
| S10 | tak (self-check) | nie / krótki starter | tak | textarea |
| S12 | nie | nie | Koniec | checkbox zeszyt TO VERIFY |

Feedback **zawsze pod** przyciskami zadania, nie jako modal (tak działa `task-engine` dziś).

---

## MOJA OCENA UX — DO DECYZJI

Nie oceniam zamiast Ciebie. Pytania do Twojej oceny:

1. Czy któryś ekran jest przeładowany? (kandydaci: **S04** dwa taski, **S06** słowo+fragment, **S11** trzy taski na scrollu)
2. Czy dziecko od razu wie, co ma zrobić? (szczególnie S02: książka vs ekran)
3. Czy UA pod PL jest wystarczająco widoczne, ale nie dominuje? (`.tx-ua` pomarańcz — tak jest w całym EduMost)
4. Czy para `[ Sprawdź ]` / `[ Dalej ]` jest jasna, czy dziecko klika Dalej bez sprawdzenia? (silnik dziś na to pozwala)
5. Czy `.task-opt` wystarczająco wyglądają jak zadanie, a nie jak zwykły tekst?
6. Czy zielona karta 📖 „strona 10” wystarczy, żeby dziecko wzięło książkę?
7. Czy S07 (zwrot → wielkie słowo APOSTROFA → 1 zdanie) naprawdę tłumaczy, czy nazwa spadnie za wcześnie jeśli koncept jest od razu pod spodem?
8. Czy S10 (puste pole 2–3 zdań) nie jest zbyt trudne / puste na telefonie?
9. Czy S12 z zeszytem jest jasny, czy checkbox bez wsparcia silnika zmyli?
10. Czy 12 kropek + stały h1 „Preludium” spina lekcję w jedną sekwencję, czy tytuł na każdym ekranie jest za długi i lepiej skracać h1 do „T2 · Preludium”?

Dodatkowo (z prototypu, nie z listy 1–10):

- Chip koloru LITERATURA w kickerze — tak / nie (nowy element vs katalog)?
- S07: chować definicję do po Sprawdź?
- S06 krok 2: osobny task czy jeden ekran z dwoma pytaniami?

---

*Koniec prototypu. Nie pisać content.js. Nie kodować lekcji. Nie przechodzić do T3.*
