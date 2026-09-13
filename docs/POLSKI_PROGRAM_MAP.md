# POLSKI 5 — рабочая карта программы

Связка: **Między nami 5 (867/2/2018)** → **oficjalny Rozkład GWO 2024** → **EduMost**.

Полный аудит: `docs/POLSKI_REARCHITECTURE_AUDIT.md`.  
Этот файл — таблица для работы, не энциклопедия.

**Официальные источники GWO (2024):**

- [Rozkład materiału klasa 5](https://gwo.pl/rozklad-materialu-5-klasa-nowy/)
- [Plan wynikowy](https://gwo.pl/plan-wynikowy-5-klasa-nowy-2/)
- [Kryteria do poszczególnych tematów](https://gwo.pl/kl-5-kryteria-oceniania-do-poszczegolnych-tematow-nowe-2/)
- [Materiały dydaktyczne klasa 5](https://gwo.pl/przedmioty/jezyk-polski/materialy-dydaktyczne/szkola-podstawowa/klasa-5/)

Не путать с rozkładem **2026 для klasy 4**.

**Status:** `OK` · `PARTIAL` · `MISSING` · `WRONG` · `DUPLICATE` · `TO_SPLIT` · `TO_MERGE`

**Kategoria:** LIT (literackie) · KULT · GRAM · ORT · INT (interpunkcja) · SLOW · CZYT · WYP (tworzenie wypowiedzi) · MOW · LEKT · POW · TEKST

---

## A. Klaster kartkówki 2026-09-14 (czytać pierwszym)

Librus: **2026-09-14**, lekcja 2, Wawrzyniak Paweł, kartkówka.  
«interpretacja wiersza; epitet, apostrofa, wers, zwrotka (strofa), rym, nastrój».

To **nie jest jeden temat** z `curriculum.js`.

| ID | Dział / rozdział | Temat z podręcznika | Strona | Temat z Rozkładu GWO | Wymaganie / umiejętność | Kategoria | Istniejący EduMost | Status | Assessment tags | Uwagi |
|---|---|---|---|---|---|---|---|---|---|---|
| k-nastroj | I Dziwny ten świat / Zachwycający kosmos | Lechoń, *Preludium* | 10 | Temat 2. Na dobry początek | określa nastrój; nazywa przeżycia osoby mówiącej | LIT | `02-apostrofa` | PARTIAL | interpretacja-wiersza, nastroj | W 02 jest wybór nastroju. Brak skill-unit i poziomu «w nowym wierszu». |
| k-osoba | I / Zachwycający kosmos | *Preludium* | 10 | Temat 2 | sytuacja liryczna: co widzi, słyszy, czuje | LIT | `02-apostrofa` | PARTIAL | interpretacja-wiersza | Jest. Nie zastępuje podmiotu lirycznego. |
| k-apostrofa | I / Zachwycający kosmos | *Preludium* + **ćw. Apostrofa s. 5** | 10 | Temat 2; I.1.4 | zna apostrofę **i wskazuje w wierszu**; funkcja | LIT | folder `02-apostrofa` | **WRONG** | interpretacja-wiersza, srodki-stylistyczne | W `content.js` brak słowa «apostrofa». Draft jest w `_catalog.py`, nie zbudowany. |
| k-podmiot | I / Zachwycający kosmos | Wic, *Noc* | 18 | Temat 6 | podmiot liryczny ≠ autor | LIT | `05-podmiot-liryczny` | PARTIAL | interpretacja-wiersza, podmiot-liryczny | Tylko definicja. Brak schematu i wskazania w *Noc*. |
| k-wers | I / Zachwycający kosmos | Miłosz, *Przypowieść o maku* | 26–27 | Tematy 10–11 | posługuje się terminem **wers** | LIT | — | **MISSING** | interpretacja-wiersza, budowa-wiersza | W 07 uczy gatunku przypowieści, nie budowy. |
| k-strofa | I / Zachwycający kosmos | *Przypowieść o maku* | 26–27 | Tematy 10–11 | **strofa / zwrotka**, długość strofy | LIT | — | **MISSING** | interpretacja-wiersza, budowa-wiersza | W 02 słowo «strofa» przy czytaniu, bez nauki. |
| k-rym | I / Zachwycający kosmos | *Przypowieść o maku* | 26–27 | Tematy 10–11 | **rym** | LIT | — | **MISSING** | interpretacja-wiersza, budowa-wiersza | Później GWO wraca przy balladzie s. 210 i Staff s. 216. |
| k-epitet | I / W zwykły… | Tuwim *Dwa wiatry*; Tuwim *Deszczyk* | 64; 76 | Tuwim I.1.4; Temat Deszczyk: rozpoznaje epitet i funkcję | epitet ≠ zwykły przymiotnik; wskazanie w wierszu | LIT | `48-srodki-stylistyczne` | **WRONG** (miejsce) / PARTIAL (treść) | interpretacja-wiersza, srodki-stylistyczne | GWO uczy epitetu we wrześniu–październiku. EduMost — lekcja 48, s. 357, definicja. |
| k-interp | I (synteza) | dowolny krótki wiersz z podręcznika | 10 / 18 / 26 | na wskroś I.1 | interpretacja: terminy + wskazanie w tekście | LIT | — | **MISSING** | interpretacja-wiersza | To jest assessment set, nie strona książki. |

**Playlist ETAP 1 (proponowany, jeszcze nie istnieje):**

`skill-wers` → `skill-strofa` → `skill-rym` → `skill-epitet` → `skill-apostrofa` → `skill-nastroj` → `prep-interpretacja-wiersza` (tekst: *Preludium* s. 10).

---

## B. Część I — Dziwny ten świat

### B1. Rozdział: Zachwycający kosmos

| ID | Dział / rozdział | Temat z podręcznika | Strona | Temat z Rozkładu GWO | Wymaganie / umiejętność | Kategoria | Istniejący EduMost | Status | Assessment tags | Uwagi |
|---|---|---|---|---|---|---|---|---|---|---|
| gwo-1 | I / Kosmos | Plansza *Dziwny ten świat* | 8 | Temat 1. Chcemy wiedzieć więcej (1 godz.) | sytuacja komunikacyjna; niewerbalne; II.3.3–4 | TEKST | `01-sytuacja-komunikacyjna` | PARTIAL | komunikacja | KEEP. Najlepsza lekcja. Nie kartkówka. |
| gwo-2 | I / Kosmos | Lechoń *Preludium* | 10 | Temat 2 (1 godz.) + ćw. Apostrofa | nastrój, apostrofa, osoba mówiąca | LIT | `02-apostrofa` | WRONG+PARTIAL | interpretacja-wiersza | TO_SPLIT: tekst vs skill apostrofa. |
| gwo-3 | I / Kosmos | Tajemnice kosmosu (zdjęcia) | 12 | Jakie tajemnice kosmosu… (1 godz.) | opis zdjęcia; pytania; III.1 | WYP | — | MISSING | — | Curriculum skacze 10 → 14. |
| gwo-4 | I / Kosmos | *Ziemia we Wszechświecie* | 14 | Doskonalimy czytanie (1 godz.) | czytanie ze zrozumieniem; notatka; fakt | CZYT | `03-tekst-popularnonaukowy` | PARTIAL | czytanie, notatka | REWRITE. |
| gwo-5 | I / Kosmos | Pierwsze lądowanie… ó rz ż ch | 16 | Uzasadniamy pisownię wymienną (1 godz.) | II.4.1 wymiana | ORT | `04-pisownia-wymienna` | PARTIAL | ortografia | Brak dyktanda / sprawdzania wyrazów. |
| gwo-6 | I / Kosmos | Wic *Noc* | 18 | Kim jest podmiot liryczny (1 godz.) | I.1.9 podmiot | LIT | `05-podmiot-liryczny` | PARTIAL | interpretacja-wiersza | REWRITE do poziomów 3–4. |
| gwo-7 | I / Kosmos | Co się zdarzyło rzeźbiarce Katarzynie? | 20 | Tematy 7–8 (2 godz.) rz niewymienne | II.4.1 | ORT | `06-pisownia-rz-niewymienne` | PARTIAL | ortografia | 1 lekcja vs 2 godz. |
| gwo-8 | I / Kosmos | Hawking *Jerzy i tajny klucz…* | 23 | Wszyscy jesteśmy dziećmi gwiazd (1 godz.) | wrażenia; sens przenośny | CZYT | — | MISSING | — | Fragment lektury uzupełniającej. |
| gwo-9 | I / Kosmos | Miłosz *Przypowieść o maku* | 26–27 | Tematy 10–11 (2 godz.) | przypowieść; **wers, strofa, rym**; środki | LIT | `07-przypowiesc` | WRONG (fokus) | interpretacja-wiersza, gatunek | TO_SPLIT. Curriculum s. 27 vs GWO s. 26. |
| gwo-10 | I / Kosmos | Komiks / Asterix | 28–29 | Tematy 12–13 (2 godz.) | I.2.7 komiks | KULT | `08-komiks` | PARTIAL | komiks | Curriculum s. 29. |

### B2. Rozdział: Odpowiedzi na ważne pytania

| ID | Dział / rozdział | Temat z podręcznika | Strona | Temat z Rozkładu GWO | Wymaganie / umiejętność | Kategoria | Istniejący EduMost | Status | Assessment tags | Uwagi |
|---|---|---|---|---|---|---|---|---|---|---|
| gwo-11 | I / Odpowiedzi | Rzehak *Początek świata* | 31 | Jak starożytni Grecy… (1 godz.) | mit (PP) | LIT, LEKT | `09-mit` | PARTIAL | mit | Curriculum s. 32. |
| gwo-12 | I / Odpowiedzi | Księga Rodzaju | 34 | Jak Bóg stworzył świat (1 godz.) | lektura obowiązkowa; werset/rozdział | LEKT | `10-biblia-stworzenie` | PARTIAL | biblia | TOC title **WRONG** (Prometeusz). |
| gwo-13 | I / Odpowiedzi | Biblia + XIV-w. ilustracja | 36 | O stworzeniu człowieka… | ikonografia; opis | KULT | — | MISSING | — | |
| gwo-14 | I / Odpowiedzi | Twardowski *Który stwarzasz jagody* | 39 | Tematy 17–18 (2 godz.) | interpretacja; adresat; autor z PP | LIT | — | MISSING | interpretacja-wiersza | Curriculum oddał s. 39 Demeter. |
| gwo-15 | I / Odpowiedzi | Murdzek *Demeter i Kora* (teatr) | 40–41 | Tematy 19–20 (2 godz.) | mit PP; akt, scena, dialog, didaskalia | LIT, KULT | `11-demeter-i-kora` | PARTIAL | mit, dramat | REORDER strony. |
| gwo-16 | I / Odpowiedzi | Markowska *Prometeusz* | 45 | Temat 21 (1 godz.) | mit; ocena bohatera | LIT | `12-prometeusz` | PARTIAL | mit | TOC title **WRONG** (Królestwo morza). |
| gwo-17 | I / Odpowiedzi | Części mowy – rzeczownik | 48–50 | Tematy 22–23 | własne/pospolite; konkretne/abstrakcyjne | GRAM | `13-rzeczownik` | PARTIAL | rzeczownik | TO_SPLIT. |
| gwo-18 | I / Odpowiedzi | Królestwo morza / list Amfitryty | 53 | Tematy 24–25 | opis; list | WYP | — | MISSING | list, opis | Tytuł w TOC wisi na lekcji 12. |
| gwo-19 | I / Odpowiedzi | Słownik wyrazów bliskoznacznych | 56 | Temat 26 | synonimy; słownik | SLOW | `14-list-i-slownik` | TO_SPLIT | slowictwo | Zlane z listem. |
| gwo-20 | I / Odpowiedzi | Helios i Faeton (komiks) | 58 | Tematy 27–28 | mit → komiks | LIT, KULT | — | MISSING | mit, komiks | |
| gwo-21 | I / Odpowiedzi | Odmiana rzeczownika; nie | 60–66 | Tematy 29–31 (3 godz.) | przypadki; temat/końcówka; nie | GRAM, ORT | `15-odmiana-rzeczownika` | PARTIAL | przypadki | Kluczowy **gap ETAP 3**. Curriculum s. 66. |

### B3. Rozdział: W zwykły i niezwykły sposób o zjawiskach

W `curriculum.js` ten rozdział ma **1 temat**. W GWO to pełny blok (Tuwim, TV, przymiotnik, Ratajczak, van Gogh, Deszczyk, stopniowanie, gazeta, *Pan Tadeusz* burza, powtórzenie).

| ID | Dział / rozdział | Temat z podręcznika | Strona | Temat z Rozkładu GWO | Wymaganie / umiejętność | Kategoria | Istniejący EduMost | Status | Assessment tags | Uwagi |
|---|---|---|---|---|---|---|---|---|---|---|
| gwo-22 | I / Zjawiska | Tuwim *Dwa wiatry* | 64 | poetycka charakterystyka + recytacja | I.1.4 **epitet, porównanie, przenośnia, uosobienie, apostrofa** | LIT, MOW | `16-przymiotnik-i-uosobienie` | WRONG (strona) / TO_SPLIT | srodki-stylistyczne | Curriculum: Tuwim s. **72**. GWO: s. **64**. |
| gwo-23 | I / Zjawiska | Projekt: studio TV / pogoda | 67 | W studiu telewizyjnym (2 godz.) | przekaz audiowizualny | KULT, WYP | — | MISSING | — | |
| gwo-24 | I / Zjawiska | Przymiotnik | 69 | Przypomnienie o przymiotniku (2 godz.) | II.1.1, II.1.4 | GRAM | część 16 | TO_SPLIT | przymiotnik | |
| gwo-25 | I / Zjawiska | Ratajczak *Dwa słońca* | 72 | O dwóch słońcach | obrazy poetyckie; ożywienie | LIT | zajęte przez 16 | MISSING jako tekst | srodki-stylistyczne | |
| gwo-26 | I / Zjawiska | van Gogh *Słoneczniki* | 74 | Opisujemy obraz | opis dzieła; barwy, nastrój | KULT, WYP | — | MISSING | opis-dziela | Opis dzieła w EduMost dopiero lekcja 50. |
| gwo-27 | I / Zjawiska | Tuwim *Deszczyk* | 76 | Czego pragnie deszczyk? Rozpoznajemy uosobienie | **epitet, porównanie, uosobienie + funkcja** | LIT | — | MISSING | interpretacja-wiersza, srodki | Najlepsze miejsce na epitet przed kartkówką, jeśli szkoła już tu jest; we wrześniu — skill niezależny od strony. |
| gwo-28 | I / Zjawiska | Stopniowanie; nie z przymiotnikiem | 78 | 2 godz. | II.1.7 | GRAM, ORT | — | MISSING | przymiotnik | |
| gwo-29 | I / Zjawiska | Szczygielski / artykuł | 81 | Redagujemy tekst do gazety | relacja, sprawozdanie | WYP | — | MISSING | relacja | |
| gwo-30 | I / Zjawiska | ó u rz ż ch w zakończeniach | 85 | Tematy 45–46 (2 godz.) | II.4.1 | ORT | — | MISSING | ortografia | |
| gwo-31 | I / Zjawiska | Mickiewicz *Pan Tadeusz* (burza) | 87 | Tematy 47–48 (2 godz.) | środki; obrazy zmysłów | LIT, LEKT | — | MISSING | pan-tadeusz, srodki | Inny fragment niż lekcja 38 s. 241. |
| gwo-32 | I / Zjawiska | Sprawdzę się! | 89 | Tematy 49–50 | powtórzenie działu I | POW | — | MISSING | powtorzenie-dzial-1 | |

---

## C. Część II — Gdzie stopy nasze

Curriculum spłaszcza 3 rozdziały GWO do jednej listy 17–30.

| ID | Dział / rozdział | Temat z podręcznika | Strona | Temat z Rozkładu GWO | Wymaganie / umiejętność | Kategoria | Istniejący EduMost | Status | Assessment tags | Uwagi |
|---|---|---|---|---|---|---|---|---|---|---|
| gwo-33 | II / Podjąć wyzwanie | Plansza s. 92 | 92 | Precyzyjna informacja / szlaki | komunikacja; znaki | TEKST | `17-precyzyjna-informacja` | PARTIAL | komunikacja | Curriculum s. 94. |
| gwo-34 | II / Podjąć | wiersz o wspólnych celach | 94 | Mamy wspólne cele | podmiot zbiorowy | LIT | część 17? | MISSING jako skill | podmiot-liryczny | |
| gwo-35 | II / Podjąć | Liczebnik; nie | 97 | Tematy 53–55 (3 godz.) | II.1 liczebnik | GRAM, ORT | `18-liczebnik` | PARTIAL | liczebnik | TO_SPLIT nie. |
| gwo-36 | II / Podjąć | Verne / Fileas Fogg | 100 | Tematy 56–57 | lektura; dziennik podróży | LEKT, WYP | `19-dziennik` | WRONG (etykieta) | lektura, dziennik | Gatunek ≠ treść powieści. |
| gwo-37 | II / Podjąć | słowniki / poprawna polszczyzna | ~107 | | IV.5 | SLOW | — | MISSING | slowictwo | |
| gwo-38 | II / Podjąć | Pamiętnik | 109 | Podjąć wyzwanie / pamiętnik | forma | WYP | `20-pamietnik` | PARTIAL | pamietnik | |
| gwo-39 | II / Podjąć | Czasownik | 114 | kilka godzin (osoba, czas, nie) | II.1 czasownik | GRAM | `21-czasownik` | TO_SPLIT | czasownik | Gap ETAP 3. |
| gwo-40 | II / Podjąć | Sienkiewicz *W pustyni i w puszczy* | 117 | Kto opowiada… narracja | narrator; lektura PP | LEKT, LIT | `22-narracja-sienkiewicz` | PARTIAL | lektura, narrator | Za krótko na lekturę. |
| gwo-41 | II / Podjąć | Mit o Heraklesie | 122 | | mit; bohater | LIT | `23-herakles` | PARTIAL | mit | |
| gwo-42 | II / Podjąć | Tryby czasownika | 131 | Tematy 65–66 (2 godz.) | tryby; -bym -byś -by | GRAM, ORT | `24-tryby-czasownika` | PARTIAL | czasownik | |
| gwo-43 | II / W drodze | Kamiński *Razem na bieguny* | 134 | relacja / notatka | formy | WYP | `25-relacja-i-notatka` | TO_SPLIT | relacja, notatka | |
| gwo-44 | II / W drodze | Beszczyńska *podróże* | 138 | | **wers, strofa, rym, rytm** ponownie | LIT | — | MISSING | budowa-wiersza | Drugie oficjalne miejsce budowy wiersza. |
| gwo-45 | II / W drodze | Marjańska *Słońce – gorąca gwiazda* | 140 | | zwrotka; obrazy | LIT | — | MISSING | interpretacja-wiersza | |
| gwo-46 | II / W drodze | Ceram / Schliemann | 143 | notatka biograficzna | notatka; oś czasu | WYP, CZYT | — | MISSING | notatka | |
| gwo-47 | II / W drodze | Tułaczka Odyseusza | 148 | Tematy 71–72 (2 godz.) | mit; **akcja, wątek**; mapa | LIT | `26-akcja-watek-fabula` | PARTIAL | mit, fabula | Terminy bez mitu = za mało. |
| gwo-48 | II / W drodze | Czasowniki dok./niedok. | 158 | Temat 73 | aspekt | GRAM | `27-czasowniki-dokonane` | PARTIAL | czasownik | |
| gwo-49 | II / W drodze | Fritsche *Skarb Troi* | 160 | Temat 74 | lektura uzup.; opowiadanie | LEKT, WYP | `28-opowiadanie-z-dialogiem` | WRONG (etykieta) | lektura, opowiadanie | |
| gwo-50 | II / W drodze | oferta biura podróży | 166 | | forma użytkowa | WYP | — | MISSING | — | |
| gwo-51 | II / Ocalmy | Przysłówek | 167 | | stopniowanie przysłówka | GRAM | `29-przyslowek-i-zaimek` | TO_SPLIT | przyslowek | |
| gwo-52 | II / Ocalmy | Zaimek; odmiana zaimków | 171–176 | załączniki GWO 22–23 | zaimek | GRAM | część 29 | TO_SPLIT | zaimek | |
| gwo-53 | II / Ocalmy | List oficjalny | 181 | Piszemy list oficjalny | III.2.1 list | WYP | `30-list-oficjalny-i-przyimek` | TO_SPLIT | list | |
| gwo-54 | II / Ocalmy | Przyimek | ~183–186 | | przyimek | GRAM | część 30 | TO_SPLIT | przyimek | |
| gwo-55 | II / Ocalmy | Wykrzyknik i partykuła | 188 | Spotkanie z przyjaciółmi | nieodmienne | GRAM | — | MISSING | — | |
| gwo-56 | II | powtórzenie / sprawdziany rozdz. 4–6 | — | GWO sprawdziany 1–2 × 3 | POW | — | MISSING | powtorzenie | |

---

## D. Część III — Świat ludzkich spraw

| ID | Dział / rozdział | Temat z podręcznika | Strona | Temat z Rozkładu GWO | Wymaganie / umiejętność | Kategoria | Istniejący EduMost | Status | Assessment tags | Uwagi |
|---|---|---|---|---|---|---|---|---|---|---|
| gwo-57 | III / Ważne… | Plansza | 194 | Świat ludzkich spraw | intro | TEKST | `31-swiat-ludzkich-spraw` | PARTIAL | — | Słaba jednostka. |
| gwo-58 | III / Ważne… | fabuła utworu | 196 | zdarzenie, wątek, akcja | epika | LIT | `32-fabula-utworu` | DUPLICATE | fabula | MERGE z 26. |
| gwo-59 | III / Ważne… | Loteria / komiks; dźwiękonaślad. | 201 | | onomatopeja; komizm | LIT | — | MISSING | srodki-stylistyczne | |
| gwo-60 | III / Ważne… | Wypowiedzenia | 207 | Powtórzenie wypowiedzeń | zdanie / równoważnik | GRAM | `33-wypowiedzenia` | PARTIAL | wypowiedzenia | |
| gwo-61 | III / Ważne… | Ballada / rytm utworu | 210 | Tematy 96–97 | **wers, strofa, rym, rytm** | LIT | — | MISSING | budowa-wiersza | Trzecie miejsce budowy wiersza. |
| gwo-62 | III / Ważne… | Molnár *Chłopcy z Placu Broni* | 212 | Tematy 98–99 | lektura PP; opis miejsca; narracja | LEKT | `34-chlopcy-z-placu-broni` | PARTIAL | lektura | Za krótko. |
| gwo-63 | III / Ważne… | Staff *Czucie niewinne* | 216 | Temat 100 | podmiot; nastrój | LIT | — | MISSING | interpretacja-wiersza | |
| gwo-64 | III / Ważne… | Bajka / źródło | 218 | Tematy 101–102 | bajka; morał | LIT | `35-bajka` | PARTIAL | bajka | |
| gwo-65 | III / Ważne… | rz ż ch h | 221 | | ortografia | ORT | — | MISSING | ortografia | |
| gwo-66 | III / Dzień… | zdanie pojedyncze | 227 | Tematy 107–108 | rozwinięte / nierozwinięte | GRAM | `36-zdanie-pojedyncze` | PARTIAL | zdanie | |
| gwo-67 | III / Dzień… | grupa podmiotu i orzeczenia | 255 | Moje zainteresowania | składnia | GRAM | część `40` | TO_SPLIT | czesci-zdania | Curriculum 40 = s. 259. |
| gwo-68 | III / Dzień… | Kołysanka Osiecka | 236 | | tekst + muzyka | LIT, KULT | — | MISSING | — | |
| gwo-69 | III / Dzień… | Związki wyrazowe | 238 | O muzyce | związki współrzędne/podrzędne | GRAM | `37-zwiazki-wyrazowe` | PARTIAL | zwiazki | |
| gwo-70 | III / Dzień… | *Pan Tadeusz* (tradycja) | 241 | Temat 112 | lektura; obyczaj | LEKT | `38-pan-tadeusz` | PARTIAL | pan-tadeusz | |
| gwo-71 | III / Dzień… | Instrukcja (Kupcio) | 244 | Tematy 113–114 | instrukcja | WYP | `39-instrukcja` | PARTIAL | instrukcja | |
| gwo-72 | III / Dzień… | scenariusz filmowy | 250 | | forma | WYP, KULT | — | MISSING | — | |
| gwo-73 | III / Dzień… | wykres zdania | 259 | W błędnym kole | części zdania | GRAM | `40-czesci-zdania` | TO_SPLIT | czesci-zdania | Gap ETAP 3. |
| gwo-74 | III / Dzień… | streszczenie | 262 | Tematy 121–122 | streszczenie | WYP | `41-streszczenie` | PARTIAL | streszczenie | |
| gwo-75 | III / Gdy świat… | przydawka | 272 | | części zdania | GRAM | — | MISSING | czesci-zdania | Powinno wyjść z 40. |
| gwo-76 | III / Gdy świat… | Puszka Pandory | 274 | Temat 128 | mit | LIT | — | MISSING | mit | |
| gwo-77 | III / Gdy świat… | okolicznik, dopełnienie | 291 | Tematy 134–135 | części zdania | GRAM | — | MISSING | czesci-zdania | |
| gwo-78 | III / Gdy świat… | świat wirtualny; lit. vs inform. | 287 | Tematy 132–133 | czytanie | CZYT | — | MISSING | czytanie | |
| gwo-79 | III / Gdy świat… | plakat społeczny | 294–318 | Temat 136 | kultura; perswazja | KULT, WYP | — | MISSING | — | |
| gwo-80 | III | dialog i przypowieść | 300 | | dialog; gatunek | LIT, WYP | `42-dialog-i-przypowiesc` | TO_SPLIT / DUPLICATE gatunku | dialog, przypowiesc | Skok stron 262→300. |
| gwo-81 | III | Prus *Katarynka* | 303 | Poznajemy nowelę | **lektura PP** | LEKT | — | **MISSING** | lektura | Krytyczny brak. |
| gwo-82 | III | Dedal | 325 | O Dedalu | mit | LIT | — | MISSING | mit | |
| gwo-83 | III | sprawdziany rozdz. 7–9 | — | GWO | POW | — | MISSING | powtorzenie | |

---

## E. Część IV — Twórca i dzieło

| ID | Dział / rozdział | Temat z podręcznika | Strona | Temat z Rozkładu GWO | Wymaganie / umiejętność | Kategoria | Istniejący EduMost | Status | Assessment tags | Uwagi |
|---|---|---|---|---|---|---|---|---|---|---|
| gwo-84 | IV / Twórcy | Plansza Twórca i dzieło | 328 | | intro | KULT | `43-tworca-i-dzielo` | PARTIAL | — | |
| gwo-85 | IV / Twórcy | Herbert *Pudełko zwane wyobraźnią* | 330–331 | Temat 150 | wyobraźnia; wiersz | LIT | `44-herbert-wyobraznia` | PARTIAL | interpretacja-wiersza | |
| gwo-86 | IV / Twórcy | Rodari *Proces* / przedstawienie | 332–336 | | dramatyzacja | LIT, KULT | część `45` | PARTIAL | teatr | |
| gwo-87 | IV / Sztuka | Zaproszenie | 336 | | zaproszenie | WYP | `45-zaproszenie` | PARTIAL | zaproszenie | |
| gwo-88 | IV / Sztuka | Teatr | 342 | Z wizytą w teatrze | teatr | KULT | `46-teatr-i-film` | TO_SPLIT | teatr | |
| gwo-89 | IV / Sztuka | Akcent / wymowa | 345 | Warsztat aktora | akcent | MOW, GRAM | `47-akcent` | PARTIAL | akcent | |
| gwo-90 | IV / Sztuka | Film | 349 | | film | KULT | część 46 | TO_SPLIT | film | |
| gwo-91 | IV / Sztuka | Wywiad | 352 | Temat 159 | wywiad | WYP | — | MISSING | wywiad | |
| gwo-92 | IV / Sztuka | poezja o muzyce | 357 | Temat 160 | środki; ożywienie | LIT | `48-srodki-stylistyczne` | WRONG (za późno na pierwszy epitet) | srodki-stylistyczne | Zostawić jako **powtórzenie** środków, nie debiut. |
| gwo-93 | IV / Sztuka | Ogłoszenie | 360 | Tematy 161–162 | ogłoszenie | WYP | `49-ogloszenie-i-cytat` | TO_SPLIT | ogloszenie | |
| gwo-94 | IV / Sztuka | Neologizmy / Kulmowa | 363 | Tematy 164–165 | neologizm | SLOW, LIT | — | MISSING | slowictwo | |
| gwo-95 | IV / Sztuka | Chopin | 367 | Temat 166 | kultura; biografia | KULT | — | MISSING | — | |
| gwo-96 | IV / Sztuka | Cytat | 370 | Temat 167 | cytowanie; cudzysłów | INT, WYP | część 49 | TO_SPLIT | cytat | |
| gwo-97 | IV / Sztuka | Muzeum | 372 | Temat 168 | muzeum | KULT | — | MISSING | — | |
| gwo-98 | IV / Sztuka | Burmistrz i ogród rzeźb | 374 | Tematy 169–171 (3 godz.) | adaptacja | KULT, WYP | — | MISSING | — | |
| gwo-99 | IV / Sztuka | Zrozumieć artystę | 376 | Temat 172 | | KULT | — | MISSING | — | |
| gwo-100 | IV / Sztuka | opis dzieła / Architektki Warszawy | 380 | | opis | WYP, KULT | `50-opis-dziela` | PARTIAL | opis-dziela | |
| gwo-101 | IV | retoryka / Co ty mówisz | 386 | | elementy retoryki | WYP | — | MISSING | — | |
| gwo-102 | IV | sprawdziany rozdz. 10–11 | — | GWO | POW | — | MISSING | powtorzenie | |

---

## F. Istniejące 50 lekcji EduMost — decyzje

Skrót do migracji. Szczegóły w audycie §3.

| ID EduMost | Status | Decyzja | Assessment tags (cel) |
|---|---|---|---|
| 01-sytuacja-komunikacyjna | PARTIAL | KEEP + wzmocnić | komunikacja |
| 02-apostrofa | WRONG | SPLIT: tekst Preludium KEEP; skill apostrofa NOWY | interpretacja-wiersza |
| 03-tekst-popularnonaukowy | PARTIAL | REWRITE | czytanie |
| 04-pisownia-wymienna | PARTIAL | REWRITE | ortografia |
| 05-podmiot-liryczny | PARTIAL | REWRITE | interpretacja-wiersza |
| 06-pisownia-rz-niewymienne | PARTIAL | REWRITE | ortografia |
| 07-przypowiesc | WRONG | SPLIT + dodać wers/strofa/rym | gatunek, budowa-wiersza |
| 08-komiks | PARTIAL | REWRITE | komiks |
| 09-mit | PARTIAL | REWRITE | mit |
| 10-biblia-stworzenie | WRONG (tytuł TOC) | KEEP treść; popraw tytuł | lektura |
| 11-demeter-i-kora | WRONG (strona) | REORDER | mit, dramat |
| 12-prometeusz | WRONG (tytuł TOC) | KEEP treść; popraw tytuł | mit |
| 13-rzeczownik | PARTIAL | SPLIT | rzeczownik |
| 14-list-i-slownik | TO_SPLIT | SPLIT | list, slowictwo |
| 15-odmiana-rzeczownika | PARTIAL | SPLIT / ETAP 3 | przypadki |
| 16-przymiotnik-i-uosobienie | WRONG+TO_SPLIT | SPLIT; Tuwim na s. 64 | srodki, przymiotnik |
| 17-precyzyjna-informacja | PARTIAL | REWRITE | komunikacja |
| 18-liczebnik | PARTIAL | REWRITE | liczebnik |
| 19-dziennik | WRONG | rozdziel gatunek i Verne | dziennik, lektura |
| 20-pamietnik | PARTIAL | REWRITE | pamietnik |
| 21-czasownik | TO_SPLIT | SPLIT | czasownik |
| 22-narracja-sienkiewicz | PARTIAL | cykl lektury | lektura, narrator |
| 23-herakles | PARTIAL | REWRITE | mit |
| 24-tryby-czasownika | PARTIAL | REWRITE | czasownik |
| 25-relacja-i-notatka | TO_SPLIT | SPLIT | relacja, notatka |
| 26-akcja-watek-fabula | DUPLICATE | MERGE z 32; tekst = Odyseusz | fabula |
| 27-czasowniki-dokonane | PARTIAL | REWRITE | czasownik |
| 28-opowiadanie-z-dialogiem | WRONG | rozdziel formę i *Skarb Troi* | opowiadanie |
| 29-przyslowek-i-zaimek | TO_SPLIT | SPLIT | przyslowek, zaimek |
| 30-list-oficjalny-i-przyimek | TO_SPLIT | SPLIT | list, przyimek |
| 31-swiat-ludzkich-spraw | PARTIAL | intro rozdziału, nie lekcja-skill | — |
| 32-fabula-utworu | DUPLICATE | MERGE | fabula |
| 33-wypowiedzenia | PARTIAL | REWRITE | wypowiedzenia |
| 34-chlopcy-z-placu-broni | PARTIAL | cykl lektury | lektura |
| 35-bajka | PARTIAL | REWRITE | bajka |
| 36-zdanie-pojedyncze | PARTIAL | REWRITE | zdanie |
| 37-zwiazki-wyrazowe | PARTIAL | REWRITE | zwiazki |
| 38-pan-tadeusz | PARTIAL | + wcześniejszy fragment s. 87 | pan-tadeusz |
| 39-instrukcja | PARTIAL | REWRITE | instrukcja |
| 40-czesci-zdania | TO_SPLIT | SPLIT na 5 skilli | czesci-zdania |
| 41-streszczenie | PARTIAL | REWRITE | streszczenie |
| 42-dialog-i-przypowiesc | TO_SPLIT | SPLIT | dialog |
| 43-tworca-i-dzielo | PARTIAL | intro | — |
| 44-herbert-wyobraznia | PARTIAL | REWRITE | interpretacja-wiersza |
| 45-zaproszenie | PARTIAL | REWRITE | zaproszenie |
| 46-teatr-i-film | TO_SPLIT | SPLIT | teatr, film |
| 47-akcent | PARTIAL | REWRITE | akcent |
| 48-srodki-stylistyczne | WRONG | REORDER jako powtórzenie; epitet wcześniej | srodki-stylistyczne |
| 49-ogloszenie-i-cytat | TO_SPLIT | SPLIT | ogloszenie, cytat |
| 50-opis-dziela | PARTIAL | REWRITE | opis-dziela |

**Licznik 50:** wszystkie foldery istnieją. **OK = 0.** Żadna lekcja 03–50 nie jest gotowa jako skill path.

---

## G. Proponowane jednostki ETAP 2 — tylko początek roku (v1)

Nie numerować jako 51, 52…

| Nowe ID | Rodzaj | Podręcznik | GWO | Skills | Po co |
|---|---|---|---|---|---|
| skill-wers | skill | Miłosz s. 26; też Preludium | I.1 budowa | wers | kartkówka |
| skill-strofa | skill | jw. | jw. | strofa, zwrotka | kartkówka |
| skill-rym | skill | jw. | jw. | rym | kartkówka |
| skill-epitet | skill | Deszczyk s. 76 / Tuwim s. 64; wcześniej na zdaniach | I.1.4 | epitet | kartkówka |
| skill-apostrofa | skill | Preludium s. 10 | Temat 2; I.1.4 | apostrofa | kartkówka |
| skill-nastroj | skill | Preludium | Temat 2 | nastrój | kartkówka |
| prep-interpretacja-wiersza | assessment | s. 10 (+ opcjonalnie s. 18) | synteza | wszystkie k-* | ETAP 1 14.09 |
| text-preludium | text | s. 10 | Temat 2 | nastrój, osoba | migracja z 02 |
| text-noc | text | s. 18 | Temat 6 | podmiot | migracja z 05 |
| text-milosz | text | s. 26 | Tematy 10–11 | przypowieść + budowa | migracja z 07 |

---

## H. ETAP 3 — luki-przesłanki (nie pełny kurs)

Jeśli dziecko nie umie X przed kartkówką / tematem Y:

| Gap (Y) | Najpierw powtórz |
|---|---|
| apostrofa | sytuacja: kto do kogo; wołacz (choćby intuicyjnie) |
| epitet | przymiotnik ≠ ozdoba; «jaki?» |
| podmiot liryczny | nadawca ≠ autor (komunikacja z 01) |
| wers / strofa | że wiersz nie jest «jednym blokiem tekstu» |
| przypadki | rzeczownik (13) |
| części zdania | wypowiedzenie + rzeczownik/czasownik |
| tryby | czasownik (osoba, czas) |

---

## I. Jak używać tej mapy przy realizacji

1. Najpierw wiersze **k-*** (sekcja A).  
2. Potem brakujące **MISSING** w B1–B3 (ten sam dział szkolny).  
3. Nie dodawać lekcji 51 w starym liczniku.  
4. Każda nowa jednostka dostaje wiersz tutaj: ID, strona, GWO, skill, status.  
5. `curriculum.js` książki nie zmieniać (867/2/2018).

---

*Mapa jest robocza. Godziny GWO (1–3) nie muszą równać się liczbie ekranów EduMost.*
