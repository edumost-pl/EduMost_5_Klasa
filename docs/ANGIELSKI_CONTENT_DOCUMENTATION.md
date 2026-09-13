# Dokumentacja angielskiego treści

Dokument dla programisty i dla Cursor/AI, który zmienia `lessons/angielski/*/content.js`.

Płeer: `docs/PROJECT_TECHNICAL_DOCUMENTATION.md`.  
Matematyka / historia / biologia — osobne kontrakty. Angielski używa **tego samego pleeera**, ale **inną pedagogikę**: dziecko ma **mówić i wybierać po angielsku**, a polski i ukraiński tłumaczą polecenie.

Nie kopiować stron podręcznika *Flash* do `content.js` (prawo autorskie). Temat, słownik i gramatyka — z książki; zdania i mini-teksty — własne.

---

## 1. Kurs

- **Klasa:** 5 szkoły podstawowej (kontynuacja z klas 4).
- **Podręcznik:** *Flash* Student's Book, Jenny Dooley, Express Publishing, nr **866/2/2018** (w rozkładzie: EGIS / Express Publishing).
- **Źródła audytu:** Student's Book (`flash5_pu.txt`) + **plan wynikowy** EGIS 2024 (`pw_flash-kl.5_podstawa_2024.pdf` — to, czego nauczyciel używa przy ocenie i sprawdzianie). Rozkład 90h (`eng5_topics.json`) to **inne** ziarno (godziny lekcyjne, nie spread SB) — w hubie **nie** numerujemy jak RM.
- **Ogloszenie:** `js/curriculum.js` → `angielski`, `tocStatus: "confirmed"`.
- **Ziarno lekcji:** jak w planie wynikowym i SB: **1 / 1a / 1b / 1c / 1d / 1e / 1f / CLIL / Flash Time / Progress Check** (potem 2 / 2a …). Nie 90 godzin szkolnych i nie „Lekcja 1–8” jak biologia.
- **Nawyk:** pytania i wyjaśnienia **PL + UA**; odpowiedzi w zadaniach — **angielski**.
- **Słownik:** kolumna `pl` = **termin EN**; kolumna `ua` = `polski · українська` (tabela pleeera ma tylko dwie kolumny).

Moduły SB (s. 4–99 + Festivities 101–106):

| | Moduł | Strony | Status w hubie |
|---|---|---|---|
| I | My World | 4–17 + PC 18–19 | **1 / 1a–1f / CLIL / Flash Time / Progress Check 1** |
| II | Round we go! | 20–35 | katalog `2 / 2a…`, na razie Wkrótce |
| III | Back in time | 36–51 | Wkrótce |
| IV | Celebrities | 52–67 | Wkrótce |
| V | What an adventure! | 68–83 | Wkrótce |
| VI | Let's celebrate! | 84–99 | Wkrótce |
| — | Festivities | 101–106 | Wkrótce (Halloween, New Year’s Eve, St Patrick’s Day, Easter, Mother’s Day) |

Kody w katalogu jak w planie wynikowym: `1`, `1a`… `CLIL`, `Flash Time`. Progress Check **bez** `num` (żeby nie powstało „9.”).  
Nie dodawać lekcji organizacyjnej, Module Testu ani „omówienia sprawdzianu” jako osobnego `content.js`.

Nie numerować 1–48 jak biologia. Festivities bez kodu SB typu `1a`.

---

## 2. Pliki lekcji

```
lessons/angielski/{folder}/
  index.html      # data-subject="angielski" data-topic="{topicId}"
  lesson.js       # id: "eng-NN-…"
  content.js
  assets.js       # {}
  img/PLIKI.txt
```

`data/lessons.js`: klucz `"angielski/" + topicId`.  
Strona przedmiotu: `subjects/angielski.html` ładuje `data/lessons.js`.

Obrazki: GitHub `Angielski/{FOLDER}/images/{file}.png?raw=true` (jak biologia). Na etykietach **wolno angielski** (to ten przedmiot). Pleeer do wrzucenia plików nie zmieniać.

Heler w numerowanej lekcji:

```js
function em(text) { return { text: text, emphasis: true }; }
var ENG_IMG = "https://github.com/edumost-pl/EduMost-szkola_5-klasa-Images/blob/main/Angielski/L01_Typical_day/images/";
function vizGh(file, spec) { /* ENG_IMG + file + ?raw=true */ }
```

Powtórka: `vizGh(folder, file, spec)` z nazwą folderu GitHub.

---

## 3. Jak pisać ekran

Kolejność jak biologia: `goal` → `vocabulary` → `intro` → `concept` × n z `task` → `check` → `summary` → `review` (na głos).

Żywe typy: `single-choice`, `multiple-choice`, `true-false`, `input-text`.  
`input-text`: krótka forma EN; walidator robi `toLowerCase` (`I’m` / `I'm` — trzymaj **prosty apostrof** `'`).

`**słowo**` / `*słowo*` w stringu — jak w biologii.

Nie dodawać YouTube, osi czasu historii ani nowych `task` types.

---

## 4. Moduł 1 (otwarty)

Plan wynikowy: poziom podstawowy ≈ ocena **dostateczna**, rozszerzony ≈ co najmniej **dobra**. Po module — Progress Check / sprawdzian z tych umiejętności.

| Kod | Temat | Folder | GitHub | SB | Bohaterowie / etykiety (swoimi słowami) |
|---|---|---|---|---|---|
| 1 | What's your typical day? | `01-typical-day` | `L01_Typical_day` | 4–5 | daily routines, zegar, Anna 7:45 / I 7:15 |
| 1a | Teen World | `02-teen-world` | `L02_Teen_World` | 6–7 | Ross, Dure, Sámi, Hennet, reindeer, Sáhkku, like+-ing |
| 1b | Present Simple | `03-present-simple` | `L03_Present_Simple` | 8–9 | Keith, Sally, -s/-es, always–never, don’t/doesn’t |
| 1c | School areas and subjects | `04-school` | `L04_School` | 10 | 3A/3B/3C, Sally, Susan, Maths, canteen |
| 1d | Directions | `05-directions` | `L05_Directions` | 11 | Keith, Mr Smith, 3C, see/look/watch |
| 1e | Present Continuous | `06-present-continuous` | `L06_Present_Continuous` | 12–13 | knitting, stative like/need/know |
| 1f | Special Schools | `07-special-schools` | `L07_Special_Schools` | 14–15 | Carpe Diem, Chalan Beel, Tom, Charlie, Summerhill |
| CLIL | Good Students | `08-good-students` | `L08_Good_Students` | 16 | Look after yourself / Watch the clock / Good relationships |
| Flash Time | My perfect school | `flash-time-perfect-school` | `L_Flash_Time` | 17 | nagłówki Where…, mapa, Confucius |
| — | Progress Check 1 | `powtorzenie-my-world` | obrazki L01… | 18–19 | Jeremy, get/catch/hang/have, sale, Everyday English |

`topic.num` steruje numerem w katalogu i w nagłówku pleeera (nie cyfra z nazwy folderu `02-…`). CLIL / Flash Time: `num` tekstowy, separator ` · ` a nie `8.`

Gramatyka M1 z PW/SB: Present Simple, adverbs of frequency, prepositions of movement, Present Continuous, stative verbs, like + -ing, see/look/watch.

---

## 5. Podłączenie kolejnego modułu

1. Dodać `lesson:` i `num` w `curriculum.js`.
2. Wpis w `data/lessons.js`.
3. Skopiować `index.html` z M1.
4. `content.js` z własnymi zdaniami; słownik z `eng5_topics.json` / SB.
5. Nie commituj, dopóki autor nie poprosi.
