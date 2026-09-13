# Szablony lekcji EduMost — Język polski 5

**Status:** mapa metodyczna dla autorów. **Nie** jest to zestaw gotowych lekcji.

**Nie zawiera:** `content.js`, HTML, folderów T, zmian silnika, zmian T1–T177.

**Źródła**

| Dokument | Rola |
|---|---|
| `docs/POLSKI_LESSON_ARCHITECTURE.md` | typy jednostek, fazy, siatka wiersza, cykl lektury |
| `docs/POLSKI_FULL_COURSE_ARCHITECTURE.md` | T1–T177, skills, *Po lekcji* |
| `docs/POLSKI_GWO_TEACHER_MATERIALS_AUDIT.md` | co GWO potwierdza, co jest zamknięte, struktura przyszłej lekcji per T |
| Kryteria / rozkład / plan wynikowy GWO (PUBLIC) | can-do *Temat N* |

Podręcznik: *Między nami 5*, GWO, nr **867/2/2018**.

---

## Oznaczenia GWO / EDUMOST

W całym dokumencie:

| Etykieta | Znaczenie |
|---|---|
| **GWO** | Potwierdzone otwartym źródłem GWO (kryteria *Temat N*, rozkład, plan wynikowy, tytuł załącznika / SPE / scenariusza). Nie zgadujemy treści LOGIN PDF. |
| **EDUMOST** | Nasza rekomendacja pedagogiczna: kolejność ekranów, UA, zeszyt (gdy GWO nie każe zapisu), checklista, typowe błędy, pytania do akapitu. |
| **LOGIN** | Plik GWO istnieje, treść nieotwarta w audycie. Nie wpisywać etapów z pamięci. |

GWO **nie publikuje** scenariusza 1:1 dla T1–T177 (audyt: 0 T). Szablony poniżej **nie udają** podręcznika nauczyciela GWO.

---

# 1. Zasady ogólne EduMost

**EDUMOST** (cel kursu) + **GWO** (czego uczeń ma umieć po godzinie).

1. EduMost **nie** jest podręcznikiem online. Dziecko ma książkę *Między nami 5*. Aplikacja prowadzi pracę: zrozumieć → ćwiczyć → użyć.
2. Język lekcji: **polski szkolny klasy 5**. Ukraiński: podpora, nie zamiennik.
3. Jedna godzina T = jeden wiodący gest (`category` na stronie + `type` szkieletu). Nie mieszać dwóch części mowy w jednej lekcji, chyba że **GWO** uczy kontrastu w tym T.
4. Cele lekcji = 1–3 can-do z **GWO** *Kryteria Temat N* (i kolumna *Po lekcji* / skills w katalogu). Nie osiem celów.
5. Ukończenie ekranów ≠ opanowanie umiejętności.
6. Para godzin o tym samym tytule (T7–T8, T29–T31…): pierwsza godzina **wprowadza**, kolejna **ćwiczy** — **EDUMOST**. Nie dublować definicji.
7. Copyright: nie wklejać całego utworu z podręcznika. Odsyłać do **s. N**. Na ekranie: krótkie fragmenty jako opcje / jeden akapit roboczy.
8. Typy zadań v1 (silnik, bez nowych typów): `single-choice`, `multiple-choice`, `true-false`, `input-text`, `open-answer`. Recytacja i głośne czytanie = zadanie ustne poza choice.
9. Przed pisaniem lekcji: otworzyć wiersz T w audycie (kolumny Text / Notebook / Future Lesson Structure) i PDF kryteriów *Temat N*.

Wspólny szkielet faz (**EDUMOST**; GWO potwierdza cele, nie ekrany):

```
START → CEL → [specyfika szablonu] → SPRAWDŹ → ZAPAMIĘTAJ → DALEJ
```

---

# 2. Dwujęzyczność

**GWO:** materiały *Między nami 5* są jednojęzyczne (PL). Brak oficjalnej wersji UA.

**EDUMOST:** kurs w aplikacji jest dwujęzyczny.

| Warstwa | Język | Zasada |
|---|---|---|
| Polecenie („Wskaż…”, „Napisz…”) | PL; UA jako druga linia / przełącznik | Dziecko uczy się szkolnego polecenia po polsku |
| Pojęcie, reguła, nazwa formy | PL najpierw | UA = 1–2 zdania podpory, nie wykład |
| Tekst literacki / informacyjny | **oryginał PL** | UA **po** akapicie, nie zamiast niego |
| Przykłady gramatyczne i ortograficzne | **zostają PL** | UA tylko przy objaśnieniu reguły |
| Własna wypowiedź dziecka | PL (szkoła) | UA może pomóc zaplanować, nie napisać za dziecko |

Dla tekstu:

```
POLSKI (akapit z podręcznika / krótki fragment na ekranie)
        ↓
UKRAIŃSKA PODPORA (zrozumienie tego akapitu)
        ↓
PRACA Z POLSKIM TEKSTEM (pytanie, wskazanie, słowo w kontekście)
```

**Zakaz EDUMOST:** zrzut całego rozdziału → pełny przekład UA → quiz po ukraińsku.  
Dziecko ma **pracować z polskim oryginałem**.

Nie tłumaczyć automatycznie każdego zdania podręcznika. Tłumaczyć / wspierać:

- akapit, który jest osią zadania;
- ramkę słownikową, której dziecko nie zrozumie z kontekstu;
- definicję i kontrast («to nie jest Y»).

Nie tłumaczyć:

- całego wiersza „na zapas”;
- całego modelu listu, jeśli zadanie jest „wskaż nagłówek”;
- dystraktorów choice (zostają PL).

---

# 3. Praca z tekstem

## 3.1. Kiedy tekst jest osią lekcji

Kolumna **Text** w audycie: `CENT:…` = tak. `supp` / `model` / `mix` = inaczej.

| Sygnał | Gdzie w lekcji jest tekst |
|---|---|
| `CENT:wiersz` / `CENT:mit` / `CENT:proza` / `CENT:gatunek` | LITERATURA |
| `CENT:lektura` | LEKTURY |
| `CENT:informacyjny` / `CENT:hasło słownika` / `CENT:sytuacja/plansza` | CZYTANIE |
| `CENT:tekst kultury` | KULTURA_MEDIA (obiekt, nie zawsze proza) |
| `model w podręczniku` | PISANIE — wzór do analizy, nie lektura |
| `supp:…` | GRAMATYKA / ORTOGRAFIA — zdania-przykłady |

## 3.2. Łańcuch przy tekście CENTRALNYM

**EDUMOST** (GWO potwierdza czasowniki: *relacjonuje, wskazuje, wyszukuje, określa…*, nie ten łańcuch ekranów):

1. Otwórz książkę s. N (**GWO** strona tematu).
2. Podział na **logiczne akapity / strofy** — **EDUMOST**.
3. Dla akapitu roboczego: PL → UA podpora → 1–2 pytania **do tego** fragmentu.
4. Słownik: wyrazy z ramek podręcznika + te, bez których nie ma zrozumienia — **EDUMOST** (GWO nie publikuje słowniczka UA).
5. Szukanie informacji / dowód w tekście (**GWO**, gdy kryteria: *wskazuje, wyszukuje, odwołuje się do fragmentu*).
6. Zrozumienie całości (relacja, plan, nastrój…) — wg **tego** T.
7. Analiza tylko tych środków / cech, które T wymaga.
8. Zastosowanie: własne zdanie, plan, krótka wypowiedź (**GWO** często: *wyraża zdanie, redaguje, tworzy dalszy ciąg*).

## 3.3. Pełny tekst na stronie lekcji vs książka

| Sytuacja | Na ekranie | W książce |
|---|---|---|
| Wiersz, mit, nowela, artykuł, lektura | **odsyłacz s. N**; 1 akapit/strofa robocza **albo** opcje-wersy (copyright) | dziecko czyta utwór |
| Plansza / zdjęcie / komiks w podręczniku | odsyłacz s. N; nie ściągać skanów | obiekt w książce |
| Model listu / instrukcji | 2–4 elementy do wskazania, nie cały list | pełny model s. N |
| Wyrazy ortograficzne, zdania gramatyczne | **wolno** pokazać 3–8 przykładów (krótkie, oryginalne lub z ćwiczeń po transformacji) | podręcznik jako źródło rodzin wyrazów |
| Hasło słownika | schemat budowy hasła (bez kopiowania całego słownika) | ćwiczenie w książce |

**Zasada copyright EDUMOST:** im dłuższy utwór chroniony, tym mocniej „otwórz książkę”. Aplikacja = praca, nie antologia.

---

# 4. Zapisz w zeszycie

Nie zapisywać „bo tak ładnie wygląda lekcja”.

**GWO PUBLIC** rzadko mówi „zapisz w zeszycie”. Mówi *zna regułę / zna zasady / rozpoznaje / redaguje*. Obowiązek zapisu = **EDUMOST**, **chyba że** kryteria *zna zasady / zna regułę* (np. T5, T2 apostrofa) — wtedy zapis jest uzasadniony źródłem.

| Typ zapisu | Kiedy obowiązkowy | Kiedy pożądany | Kiedy nie |
|---|---|---|---|
| **definicja** | GRAMATYKA przy nowym pojęciu; WIERSZ gdy T wprowadza termin (apostrofa, neologizm…) i GWO *zna / posługuje się* | LITERATURA przy cechach gatunku | REVIEW; czyste CZYTANIE informacyjne |
| **reguła** | ORTOGRAFIA; *nie* z częścią mowy w tym T; cytat/cudzysłów (T167) | tryb *by* (T65) jeśli uczone razem z trybami | lektura, obraz |
| **cechy** | mit/baśń/bajka gdy gatunek jest celem T; komiks/teatr gdy GWO *nazywa cechy* | plakat, słuchowisko | mini-check |
| **schemat** | PISANIE (budowa formy); wykres zdania (T120); list oficjalny (układ — GWO T84 *analizuje graficzne rozmieszczenie*) | grupy podmiotu/orzeczenia | wiersz nastroju bez nowej terminologii |
| **przykład** | 1–2 wyrazy/zdania przy regule (obok reguły, nie zamiast niej) | odmiana: 1 rzeczownik przez przypadki | cały dyktando w zeszycie z aplikacji |
| **plan** | lektura / mit gdy GWO *ustala kolejność*; opowiadanie (PISANIE) | streszczenie | ortografia wymiany |
| **własny przykład** | GRAMATYKA (zdanie); PISANIE (rdzeń to własny tekst — często poza „kratkowanym” zeszytem szkolnym, ale plan w zeszycie) | — | choice-only check |
| **podsumowanie** | — | NEUTRAL, koniec rozdziału | każda godzina |

**Para godzin:** zapis na pierwszej godzinie bloku; na drugiej — zastosowanie, nie nowe hasło.

---

# 5. System zadań

Domyślna progresja **EDUMOST**:

```
ROZPOZNAJ → ZROZUM → ĆWICZ → ZASTOSUJ → SAMODZIELNIE
```

Nie wciskać jej, gdy T ma inną logikę:

| Wyjątek | Logika |
|---|---|
| PISANIE | forma i model **przed** samodzielnym tekstem; recognition elementów ≠ „zgadnij gatunek z trzech dystraktorów-żartów” |
| WIERSZ | najpierw **czytanie**, potem termin; nie zaczynać od definicji apostrofy bez wiersza, jeśli T jest o *Preludium* |
| CZYTANIE (T1 plansza) | najpierw **sytuacja**, nie „znajdź fakt w artykule” |
| NEUTRAL | bez ROZPOZNAJ nowej teorii; od razu ĆWICZ/ZASTOSUJ na starych skills |
| Druga godzina pary | start od ĆWICZ, nie od POZNAJ |

Mapa na typy silnika:

| Stopień | Co dziecko robi | Typy v1 |
|---|---|---|
| ROZPOZNAJ | wybiera, co *jest* X | `single-choice`, `true-false` |
| ZROZUM | odróżnia X od Y; „to nie jest…” | `single-choice`, `multiple-choice` |
| ĆWICZ | wstawia formę, wskazuje w zdaniu | `input-text`, `single-choice` |
| ZASTOSUJ | wskazuje w **tekście podręcznika** (opcje = wersy/zdania) | `single-choice`, `multiple-choice` |
| SAMODZIELNIE | zdanie, plan, krótki tekst, uzasadnienie | `open-answer`, `input-text` |

**Zakaz:** dystraktor z innej dziedziny („apostrofa to znak w matematyce”), jeśli temat nie o myleniu pojęć.

---

# 6. System kontroli

Check **nie** jest nową lekcją.

**GWO:** to, co stoi w kryteriach *Temat N* (i *Po lekcji*).  
**EDUMOST:** 2–4 zadania na końcu, te same skills, bez nowej teorii.

| Pytanie | Zasada |
|---|---|
| Co sprawdzamy? | skills T + czasowniki GWO (*wskazuje, stosuje, redaguje…*), nie pamięć biografii autora |
| Jak? | mieszanka: 1 rozpoznanie + 1 zastosowanie w kontekście + (gdy T wymaga) 1 własne użycie |
| Finał | zgodny z szablonem (tabela na końcu dokumentu) |
| Uniknąć samej pamięci | pytanie wymaga **dowodu** (fragment, forma w zdaniu, element listu), nie definicji słowo w słowo |

Ukończenie check ≠ ocena szkolna 1–6. Skala GWO zostaje w PDF dla nauczyciela; dziecko dostaje informację: umiem / ćwiczę.

Sprawdzian rozdziału GWO (**SPR-R1…R11**) jest **poza T** — nie wklejać go jako finału godziny.

---

# 7. Template LITERATURA

Dwa warianty w tej samej kategorii koloru: **WIERSZ** i **TEXT** (mit, baśń, bajka, proza).  
Nie używać siatki wiersza na micie i odwrotnie.

## 7.1. Rdzeń wspólny (oba warianty)

**GWO:** relacja treści; praca z **tym** utworem; to, co skills T wymienia.  
**EDUMOST:** START–CEL, UA, słownik, check, zeszyt według T.

```
START (po polsku: dziś ten tekst, po co)
→ CEL (1–3 can-do z Kryteriów T)
→ CZYTAJ (książka s. N)
→ SŁOWNIK (ramki + konieczne wyrazy)
→ [moduły T — niżej]
→ DOWÓD W TEKŚCIE
→ ODPOWIEDŹ WŁASNA (gdy GWO: wyraża zdanie / w imieniu osoby / dalszy ciąg)
→ SPRAWDŹ
→ ZAPAMIĘTAJ
```

## 7.2. Wariant WIERSZ — modułowy

**Nie** 15 ekranów zawsze. Włączać moduł, gdy:

- jest w **skills** T, **lub**
- kryteria T go nazywają (*określa nastrój, zna zasady apostrofy, analizuje budowę…*), **lub**
- mapa audytu / architektura §8 mówi TAK dla tego utworu.

| Moduł | Włączać gdy | GWO / EDUMOST |
|---|---|---|
| kontekst (dział, po co w książce) | zawsze krótko | EDUMOST |
| **osoba mówiąca / podmiot** | skills `osoba-mowiaca`, `podmiot-liryczny` | GWO gdy kryteria *wskazuje osobę* |
| **adresat** | T17–T18 i gdy kryteria *adresat* | GWO |
| **sytuacja liryczna** | T2, T6, T100 i analogiczne | GWO T2 *sytuacja osoby mówiącej* |
| **nastrój / uczucia** | `nastroj` | GWO często *określa nastrój* |
| **obrazy poetyckie** | `obraz-poetycki` | GWO gdy *analizuje obrazy* |
| **budowa** (wers, strofa, rym) | `wers`, `strofa`, `rym` — **nie** T2 | GWO gdy *posługuje się terminami budowy* |
| **rytm / ballada** | `rytm`, `ballada` (T68, T96–T97) | GWO T96 *analizuje budowę*, rytm |
| **środki** — tylko nazwane | `apostrofa`, `epitet`…; nie „wszystkie środki świata” | GWO *zna zasady / wskazuje* |
| **funkcja środka** | gdy T uczy „po co użyto” (np. Deszczyk) | GWO + EDUMOST pytanie „po co” |
| **interpretacja** (dosłowny / przenośny) | `interpretacja-wiersza`, `sens-przenosny` | GWO |
| **własna odpowiedź** | kryteria *wyraża zdanie*, *w imieniu* | GWO |
| **recytacja** | kryteria *recytuje* / *wyrecytować* | GWO; **EDUMOST:** nie zastępować choice’em |

Moduły **wyłączone**, jeśli mapa mówi NIE (przykład audytu: T2 bez budowy i rytmu).

Gdy T **wprowadza** skill (apostrofa na T2): blok skill w tej samej lekcji albo jasno oddzielony — nie chować w „zadaniu 4 o nastroju”.

**Zeszyt WIERSZ:** obowiązkowy przy nowym terminie (definicja + 1 przykład z **tego** wiersza). Pożądany przy cechach budowy, gdy T ich uczy. Nie przy samym nastroju.

**Tekst:** CENT:wiersz → książka; na ekranie strofa robocza lub opcje-wersy.

**Check:** wskazanie w tekście (nastrój / kto mówi / środek), nie definicja bez wiersza.

**Progresja zadań:** czytać → vocab → (moduły) → evidence → własne → check. ROZPOZNAJ terminu **po** przeczytaniu.

## 7.3. Wariant TEXT (mit, baśń, bajka, opowiadanie)

```
CZYTAJ s. N
→ O CZYM (etapy / plan — jeśli GWO *ustala kolejność* / *relacjonuje*)
→ ŚWIAT (kto, gdzie) 
→ GATUNEK tylko gdy T o micie/baśni/bajce
→ BOHATER / WARTOŚĆ jeśli skills
→ FRAZEOLOGIA jeśli skills (syzyfowa praca…)
→ ZASTOSUJ (plan, ocena, krótka wypowiedź)
→ CHECK
```

Mit: **ten** mit + cechy gatunku, jeśli T je wymaga. Nie „cała mitologia” w jednej godzinie (**EDUMOST**; GWO: konkretny temat).

**Zeszyt:** cechy gatunku gdy cel T; plan wydarzeń gdy GWO kolejność.

---

# 8. Template LEKTURY

To **nie** jest jedna karta „poznajemy książkę”.

**GWO**

- Wejścia w podręczniku: T15 Biblia (fragment), T56–T57 Verne (fragment), T62 Sienkiewicz (narrator), T98–T99 Molnár (miejsce), T140–T141 Prus (nowela), T142 przypowieść.
- Kryteria tych T: relacja, kolejność, świat przedstawiony, narrator 3os (T62), miejsce, kulminacja/nowela, wartości, nauka przypowieści.
- Scenariusze lektur: **LOGIN** (próbki Sienkiewicz, Verne PUBLIC). Nie znamy pełnej sekwencji PDF. Aneks lektur w kryteriach = poza numeracją T.
- SPE 7 (T62), SPE 15 (T140–T141).

**EDUMOST:** cykl L0–L12 jako mapa umiejętności. Szkoła ustala tempo czytania całości. T-wejście ≠ 13 ekranów.

## 8.1. Moduły cyklu

| Moduł | Obowiązek na T-wejściu | Reszta cyklu (poza T) | Źródło |
|---|---|---|---|
| przygotowanie (o czym, jak czytać, bez spoilera) | krótko | pełne L0 | EDUMOST |
| czytanie / fragmenty | **tak** — s. T w książce | kolejne fragmenty | GWO strona T |
| bohaterowie | jeśli kryteria T | L2 | GWO / EDUMOST |
| miejsce i czas | **T98–T99** cel | L3 | GWO |
| wydarzenia / kolejność | **T62** i analogiczne | L4 | GWO |
| relacje | Molnár | L5 | GWO częściowo; EDUMOST w cyklu |
| konflikt / problem | gdy kryteria (kulminacja *Katarynki*) | L6 | GWO nowela; reszta EDUMOST |
| wartości | T140–T141, T142 | L7 | GWO |
| narrator / język | **T62** narracja 3os | L8 | GWO |
| zadania (plan, mapa, charakterystyka) | wg T | L9 | GWO czasowniki + EDUMOST forma zadania |
| własna wypowiedź | GWO *dalszy ciąg*, *wrażenia*, *dziennik* | L10 | GWO |
| powtórzenie | nie na T62 | L11 | EDUMOST |
| sprawdzenie | skills T, nie cała powieść | L12 + SPR rozdziału poza T | GWO kryteria T; SPR LOGIN |

## 8.2. Szkielet godziny T (wejście)

```
START (to fragment / wejście do książki, nie „cała lektura dziś”)
→ CEL z Kryteriów T
→ CZYTAJ s. N
→ SŁOWNIK
→ 1–2 moduły, które T naprawdę wymaga (np. T62: świat + narrator)
→ ZADANIE (kolejność / narrator / miejsce)
→ WŁASNA (krótko, jeśli GWO)
→ CHECK tych skills
→ DALEJ (cykl poza T, jeśli szkoła czyta całość)
```

**Tekst:** książka + odsyłacz; nie wklejać rozdziału powieści.  
**Zeszyt:** plan lub „narrator = …” gdy to cel T.  
**Check:** np. rozpoznać narrację 3os **w tym** fragmencie, nie quiz z 20 rozdziałów.

---

# 9. Template GRAMATYKA

Łańcuch pełny **EDUMOST**. **GWO** potwierdza: *rozpoznaje, nazywa, odmienia, stosuje, tworzy pary…* — nie każdy krok ma osobny plik.

```
POJĘCIE (PL, 1–2 zdania klasy 5)
→ UA + „to NIE jest Y”
→ PRZYKŁADY (2: jasny + kontrast)
→ ROZPOZNANIE w zdaniu
→ ODRÓŻNIANIE (tylko gdy jest realna pomyłka)
→ ZASTOSOWANIE (wstaw formę)
→ FORMY / PRZEKSZTAŁCENIA (gdy T: przypadki, tryb, aspekt, stopniowanie…)
→ ZDANIE
→ TEKST podręcznika (gdy jest)
→ WŁASNY PRZYKŁAD
→ [typowe błędy — EDUMOST; lista GWO PUBLIC = NOT_FOUND]
→ ZESZYT (definicja; + reguła «nie» gdy w T)
→ CHECK
```

**Głębia zależy od T** (audyt §6.3):

| T (przykłady) | Minimum | Nie robić |
|---|---|---|
| T22–T23 rzeczownik | pojęcie + podział + rozpoznanie | pełna odmiana (to T29) |
| T29–T31 odmiana + *nie* | przypadki, temat/końcówka, *nie* | nowy podział z T22 od zera na T30 |
| T73 aspekt | rozpoznanie par; GWO: aspekt ≠ odmiana | mieszać z trybami T65 |
| T120 wykres | schemat + 1 zdanie | nowa część mowy |
| T157 akcent | paroksytoniczny + wyjątki ze słownika (**GWO**) | wykład fonetyki akademickiej |

Załączniki „Listy z podróży z gramatyką w tle”, SPE, schematy cz. I–IV: **LOGIN** (SPE 4, Z11 próbki PUBLIC) — typ ćwiczenia, nie treść do wklejenia.

**Zeszyt:** obowiązkowa definicja na pierwszej godzinie bloku; schemat wykresu / odmiany gdy to cel.  
**Tekst:** `supp` — zdania; wskazanie w tekście podręcznika gdy GWO każe użyć w kontekście.  
**Check:** rozpoznaj + wstaw/przekształć formę, nie sama definicja.  
**Progresja:** ROZPOZNAJ→… pasuje; nie zaczynać od własnego wypracowania.

---

# 10. Template ORTOGRAFIA

Żądany łańcuch:

```
REGUŁA
→ WYJAŚNIENIE
→ PRZYKŁADY
→ ROZPOZNANIE
→ PRAKTYKA
→ ZAPISZ W ZESZYCIE
→ ZASTOSOWANIE
→ MINI-CHECK
```

| Krok | GWO | EDUMOST |
|---|---|---|
| REGUŁA | T5 *zna regułę*; T7 *rozumie regułę*; T167 cytat/cudzysłów w kryteriach | brzmienie 1 zdanie klasy 5, PL |
| WYJAŚNIENIE | T5 *wyjaśnia pisownię* | + UA; „wymiana w rodzinie” vs „zapamiętaj” |
| PRZYKŁADY | nie lista PUBLIC; Z2/Z3 próbki PUBLIC (typ karty) | 3–5 wyrazów z podręcznika / rodziny |
| ROZPOZNANIE | stosuje / wskazuje wyrazy z… | wymienne vs niewymienne, gdy T o tym |
| PRAKTYKA | *pisze poprawnie*; Z2 T5, Z3 T7–T8, Z30 T103, Z42 T167 | ćwiczenia silnika |
| ZESZYT | uzasadnione *zna/rozumie regułę* | obowiązek zapisu **reguły** + 2 przykłady |
| ZASTOSOWANIE | T5/T7 *układa tekst dyktanda* | uzasadnij pisownię; krótkie zdanie |
| MINI-CHECK | kryteria *stosuje* | 4–6 wyrazów; **nie** pełne dyktando szkolne w silniku |
| Wyrazy pamięciowe | T7 *zapamiętuje pisownię niektórych wyrazów* | osobny krok, nie w pierwszej minucie |
| Wyjątki jako tabela | NOT_FOUND w wyciągu PUBLIC | tylko jeśli są w podręczniku s. N |
| Typowe błędy | NOT_FOUND PUBLIC | 1 pułapka (ó/u, rz/ż…) — EDUMOST |
| UA | GWO nie daje | przy wyjaśnieniu, przykłady zostają PL |

**T45–T46** (zakończenia): brak Z CLEAR — ten sam szablon, przykłady tylko z książki.  
**T167:** materiałem są **zdania z cytatem**, nie pojedyncze litery.

**Check:** uzasadnij / wybierz poprawny zapis **tej** reguły, nie mieszanka wszystkich ortografii roku.  
**Progresja:** ROZPOZNAJ po REGULE, nie przed.

---

# 11. Template PISANIE

Warsztat, nie polecenie „napisz list”.

```
CEL (po co ta forma w życiu / w tym T)
→ FORMA (nazwa)
→ BUDOWA (elementy)
→ MODEL (analiza wzoru w książce s. N — nie kopiować całości)
→ PRZYGOTOWANIE (ćwiczenia elementów)
→ PLAN
→ PISANIE
→ REDAKCJA
→ CHECKLISTA
→ WŁASNY TEKST (rdzeń)
→ SAMOOCENA
```

| Krok | GWO | EDUMOST |
|---|---|---|
| CEL / sytuacja | kryteria: *wymienia sytuacje* (T84), temat podręcznika | START lekcji |
| FORMA | tytuł T (*list oficjalny, instrukcja, ogłoszenie…*) | — |
| BUDOWA | T84: nadawca, adresat, temat, cel, układ graficzny; inne T: can-do *zna budowę / redaguje* | lista 4–7 elementów prostym językiem |
| MODEL | podręcznik s. N | wskazanie elementów na wzorze |
| PRZYGOTOWANIE | załączniki Z21, Z24–25 LOGIN; SPE 11 T84 LOGIN | ćwiczenia nagłówka, zwrotu… |
| PLAN | nie opisany publicznie jako faza | obowiązek **EDUMOST** przed pisaniem |
| PISANIE | *redaguje* (kryteria wielu T) | `open-answer` + zeszyt/szkoła |
| REDAKCJA | NOT_FOUND jako faza | krótka: czy jest X? |
| CHECKLISTA | **PDF NOT_FOUND** (audyt) | tak/nie na elementach z kryteriów — **nie** udawać karty GWO |
| WŁASNY TEKST | GWO *redaguje* | rdzeń lekcji |
| SAMOOCENA | skala 1–6 w PDF dla nauczyciela, nie dla dziecka w aplikacji | 3 pytania: mam nadawcę? cel? zwrot? |

Silnik **nie** ocenia stylu. Check listy = czy dziecko **zaznaczyło** elementy; nauczyciel/rodzic widzi tekst.

**Zeszyt:** schemat formy (obowiązkowy). Własny tekst — w zeszycie szkolnym; aplikacja trzyma plan + checklistę.  
**Tekst na ekranie:** model fragmentarycznie + książka.  
**Progresja ROZPOZNAJ…** tylko dla **elementów** formy, potem warsztat. Nie quiz „co to jest list?” jako finał.

Inscenizacja (oferta T75, wywiad T159): **GWO** bywa *przeprowadza dialog* — **EDUMOST:** prompt ustny, nie zastępować samymi a/b/c.

---

# 12. Template CZYTANIE

Dwa warianty (ta sama kategoria koloru):

## 12.1. READING (tekst informacyjny / popularnonaukowy / słownik)

Przykład kierunku: T4, T9, T132–T133, T26/T58 słownik.

```
CEL CZYTANIA (po co czytamy)
→ CZYTAJ s. N
→ SŁOWNIK
→ ZNAJDŹ INFORMACJĘ (dowód w zdaniu)
→ [Fakt vs opinia — gdy skill]
→ [Główna myśl / selekcja]
→ NOTATKA (gdy T4 / kryteria)
→ ZASTOSUJ
→ CHECK
```

**GWO T4:** czytanie, wskazywanie, (katalog) fakt/opinia, notatka, głośne czytanie. Głośne czytanie = ustnie, poza silnikiem.  
**GWO T9:** Z4 LOGIN — nie zgadywać karty.  
**EDUMOST:** łańcuch ekranów, UA akapitów.

**Zeszyt:** T4 — notatka 2–3 informacji (pożądane/obowiązek EDUMOST na bazie katalogu). Słownik — „jak szukać hasła”. Inne T — nie wymuszać notatki.  
**Tekst:** CENT:informacyjny → książka + akapit roboczy.  
**Check:** pytanie z dowodem w tekście, nie „o czym była lekcja”.

## 12.2. COMM (sytuacja komunikacyjna / plansza)

Przykład kierunku: T1, częściowo T51, T90.

**Nie** używać szablonu artykułu.

```
SEE (plansza s. N)
→ KTO / DO KOGO / GDZIE / PO CO
→ GEST / MIMIKA (gdy GWO T1)
→ ZASADY / zakłócenia komunikacji (gdy T)
→ PYTANIA / krótka wypowiedź
→ CHECK
```

**GWO T1:** analizuje sytuację na planszy, cel spotkania, gesty, zasady zajęć, pytania.  
**Zeszyt:** opcjonalnie zasady — EDUMOST.  
**Tekst:** CENT:sytuacja/plansza, nie artykuł.

---

# 13. Template KULTURA_MEDIA

Warianty **CULTURE** (obraz, rzeźba, muzeum, plakat) i **MEDIA** (komiks, teatr, film, słuchowisko, TV).

```
CO WIDZĘ / SŁYSZĘ (obiekt s. N)
→ NA CO ZWRÓCIĆ UWAGĘ (2–4 punkty z skills T)
→ TERMINY (2–5, PL + UA)
→ JAK TO ZROBIONE (kadr, dymki, afisz, barwy, plan filmowy…)
→ CO TO ZNACZY
→ [związek z tekstem literackim — tylko gdy GWO łączy]
→ MAŁA PRODUKCJA (opis, dymki, plakat, afisz)
→ CHECK
```

**GWO:** *nazywa cechy komiksu, odczytuje afisz, etapy filmu, opisuje dzieło* — wg T. Scenariusz „Tajemniczy język filmu” = LOGIN, T UNCERTAIN. Z36, Z39, Z43 CLEAR.  
**EDUMOST:** kolejność; nie wykład historii sztuki.

Reprodukcje: odsyłać do podręcznika; nie hostować skanów bez licencji.

**Zeszyt:** cechy / 3 terminy (pożądane).  
**Check:** nazwij element obiektu + krótki opis lub dobór kadru — nie biografia van Gogha z pamięci (T39: *nie zmyśla biografii* — **GWO**/katalog).

---

# 14. Template NEUTRAL

Tylko *Sprawdzę się!* / powtórka rozdziału (T49–T50, T88–T89, T145–T148, T174–T177 i analogiczne).

```
CO POWTARZAMY (lista skills już uczonych — z T)
→ MIESZANKA ZASTOSOWAŃ (poziom 3–4, nie definicje od zera)
→ MINI-CHECK
→ [odsyłacz: sprawdzian rozdziału w szkole / SPR-R*n* LOGIN poza T]
→ CO JESZCZE SŁABE
```

**GWO:** kryteria powtórki; dyktando / wykres / narrator w T176–T177 jako **zastosowanie starego**.  
**Zakaz:** nowy mit, nowa reguła, nowy wiersz.

**Zeszyt:** opcjonalne podsumowanie — EDUMOST.  
**Tekst:** mix już znanych.  
**Check:** synteza, bez nowej teorii.  
**Progresja:** bez ROZPOZNAJ nowego pojęcia.

Kartkówka / sprawdzian szkolny ≠ ten szablon godziny T. Assessment ma osobny tor w architekturze (`ASSESSMENT`) i **nie** jest kolorem kategorii poza NEUTRAL.

---

# 15. Zasady doboru template dla T1–T177

1. Weź `category` z `data/polski-course.js` / architektury — to **kolor** i **ten** szablon rozdziału 7–14.
2. Weź `type` z audytu (kolumna Type) — wariant wewnątrz kategorii:

| category | type w audycie | Szablon |
|---|---|---|
| LITERATURA | WIERSZ | §7.2 modułowy |
| LITERATURA | TEXT | §7.3 |
| LEKTURY | LEKTURA | §8 (godzina T = wejście; cykl poza T) |
| GRAMATYKA | GRAMMAR | §9; obetnij łańcuch wg T |
| ORTOGRAFIA | ORTHOGRAPHY | §10 |
| PISANIE | FORM | §11 |
| CZYTANIE | READING | §12.1 |
| CZYTANIE | COMM | §12.2 |
| KULTURA_MEDIA | CULTURE / MEDIA | §13 |
| NEUTRAL | REVIEW | §14 |

3. Otwórz wiersz T w audycie: **Skills**, **Future Lesson Structure**, **Notebook**, **Text**, **Notes (GWO-op)**.
4. Otwórz **Kryteria Temat N** (PDF PUBLIC) — 1–3 cele dziecka.
5. Włącz **tylko** moduły, które T potwierdza. Wyłącz resztę.
6. Para godzin: treść szablonu ta sama, głębokość inna (wprowadzenie vs praktyka).
7. Nie zmieniać numeru T i nie łączyć dwóch T w jedną lekcję cyfrową bez decyzji produktowej (architektura dopuszcza jeden gest na kilka godzin GWO — to osobna decyzja; **teraz T1–T177 zostają**).

Akcent (T157) zostaje w **GRAMATYKA** (kolor) mimo mówienia: szablon GRAMATYKA + zadanie ustne, nie nowa kategoria.

---

# 16. Czego NIE robić

- Nie tworzyć jednego uniwersalnego szablonu 12 ekranów na 177 T.
- Nie traktować szablonu jako UI-specyfikacji (to mapa metodyczna).
- Nie kopiować skal ocen 1–6 GWO do dziecka.
- Nie wklejać utworów z podręcznika w całości.
- Nie zastępować polskiego tekstu ukraińskim przekładem.
- Nie wymyślać etapów z LOGIN PDF (KN, scenariusze, pełne Z).
- Nie nazywać checklisty / UA / typowych błędów „materiałem GWO”.
- Nie sprawdzać samej definicji, gdy GWO każe *wskazać w tekście / zastosować / zredagować*.
- Nie robić z T62 / T98 / T140 pełnego cyklu lektury w jednej godzinie.
- Nie stosować siatki wiersza do mitu ani gramatyki do *Preludium*.
- Nie dodawać nowej treści na NEUTRAL.
- Nie projektować nowych typów zadań silnika, dopóki v1 wystarcza.
- Nie pisać `content.js` i nie otwierać folderów lekcji w tym etapie.
- Nie ruszać matematyki, historii, biologii, angielskiego.

---

# 17. Mini-szkielety (nie lekcje)

Poniżej **włączone/wyłączone bloki**, bez treści zadań, bez cytatów, bez `content.js`.  
Numery T tylko jako **kierunek** (audyt). To nie są gotowe lekcje.

### Szkielet A — WIERSZ (kierunek jak T2)

- START / CEL: relacja, nastrój, apostrofa (**GWO T2**).
- CZYTAJ: książka s. 10.
- SŁOWNIK: ramki.
- ON: osoba mówiąca, sytuacja, nastrój, apostrofa (zna zasady + wskaż).
- OFF: wers, strofa, rym, rytm.
- Dowód w tekście + krótka wypowiedź.
- Zeszyt: definicja apostrofy + przykład z **tego** wiersza (**GWO** *zna zasady* → **EDUMOST** zapis).
- Check: wskaż apostrofę / nazwij nastrój na fragmencie — nie „co to wiersz”.

### Szkielet B — ORTOGRAFIA (kierunek jak T5)

- REGUŁA wymiany (**GWO** *zna regułę*).
- Wyjaśnienie PL + UA (**EDUMOST**).
- Przykłady rodzin (**EDUMOST**; typ karty Z2 PUBLIC).
- Rozpoznanie wymienne / niewymienne.
- Praktyka zapisu.
- Zeszyt: reguła.
- Zastosowanie: uzasadnij pisownię; dyktando szkolne ≠ mini-check aplikacji (**GWO** układa dyktando — szkoła).
- OFF: tabela wyjątków (NOT_FOUND PUBLIC).

### Szkielet C — GRAMATYKA (kierunek jak T29)

- Pojęcie: odmiana, temat/końcówka, *nie* z rzeczownikiem.
- Rozpoznanie rzeczownika (już z T22 — nie wykład od zera).
- Kontrast temat vs końcówka; *nie* razem/osobno.
- Formy: przypadki (**GWO** *odmienia*).
- Zdanie + fragment s. 60.
- Własny przykład.
- Zeszyt: definicja + reguła *nie*.
- SPE 4 / Z8–Z9: LOGIN/próbka — nie wklejać karty.
- T30–T31: ten sam szablon, mniej POZNAJ, więcej ĆWICZ.

### Szkielet D — PISANIE (kierunek jak T84)

- Cel i sytuacje listu oficjalnego (**GWO**).
- Elementy: nadawca, adresat, temat, cel, układ (**GWO**).
- Model s. 181 — wskazanie elementów, nie transkrypcja listu.
- Plan (**EDUMOST**).
- Własny list (`open-answer`).
- Checklista tak/nie (**EDUMOST**; PDF GWO NOT_FOUND).
- Porównanie z listem prywatnym jeśli zostaje czas (**GWO**).
- OFF: ocena stylu przez silnik.

### Szkielet E — CZYTANIE (kierunek jak T4)

- Cel: znaleźć informację, odróżnić fakt/opinię, notatka.
- Czytaj s. 14 (książka).
- Akapit PL → UA → pytanie do akapitu.
- Fakt vs opinia.
- Notatka 2–3 informacji.
- Głośne czytanie: instrukcja ustna, nie choice.
- Check: „w którym zdaniu jest informacja X”.
- OFF: analiza środków poetyckich.

### Szkielet F — LEKTURY wejście (kierunek jak T62)

- To **fragment** i narrator, nie cała *W pustyni i w puszczy*.
- Czytaj s. 117.
- Świat przedstawiony + kolejność (**GWO**).
- Narracja trzecioosobowa — rozpoznaj w fragmencie (**GWO**).
- Własna: krótki dalszy ciąg **albo** zostawić na cykl poza T.
- Check: narrator, nie quiz fabuły tomu.
- OFF: L0–L12 w jednym T.

---

# Tabela zbiorcza

| Category | Core template | Optional modules | Notebook | Text | Final check |
|---|---|---|---|---|---|
| **LITERATURA** | WIERSZ: czytaj → vocab → **moduły T** → dowód → własna. TEXT: czytaj → plan/świat → gatunek jeśli T → zastosowanie | WIERSZ: osoba, adresat, sytuacja, nastrój, obrazy, budowa, rytm, środki, interpretacja, recytacja — **tylko gdy T**. TEXT: bohater, frazeologia, cechy gatunku | Obowiązek: nowy termin / cechy gatunku. Nie: sam nastrój | CENT: książka s. N + akapit/strofa robocza; nie cały utwór na ekranie | Wskazanie w **tym** tekście + (gdy GWO) krótka wypowiedź; nie definicja bez utworu |
| **LEKTURY** | Wejście T: fragment + 1–2 can-do T. Cykl L0–L12 **poza** godziną T | przygotowanie, bohaterowie, miejsce, wydarzenia, relacje, konflikt, wartości, narrator, zadania, wypowiedź, powtórka, SPR poza T | Plan / narrator gdy to cel T | CENT:lektura w książce; nie wklejać rozdziałów | Skills **tego** T (np. narrator 3os), nie cała powieść |
| **GRAMATYKA** | pojęcie → przykłady → rozpoznanie → (odróżnianie) → formy → zdanie → (tekst) → własny przykład → check | przekształcenia, *nie*, wykres, typowe błędy (EDUMOST), SPE/Z LOGIN | Obowiązek: definicja (+ reguła *nie* gdy w T). Schemat gdy wykres/odmiana | supp: zdania; podręcznik gdy GWO każe kontekst | Rozpoznaj + zastosuj formę; nie sama pamięć definicji |
| **ORTOGRAFIA** | reguła → wyjaśnienie → przykłady → rozpoznanie → praktyka → zeszyt → zastosowanie → mini-check | wyrazy pamięciowe (GWO T7), dyktando szkolne, wyjątki z książki, typowe błędy (EDUMOST) | **Reguła** obowiązkowa | supp: wyrazy / krótkie zdania (T167: zdania z cytatem) | Poprawny zapis **tej** reguły + uzasadnienie; ≠ dyktando rozdziału |
| **PISANIE** | cel → forma → budowa → model → prep → plan → pisanie → redakcja → checklista → tekst → samoocena | inscenizacja, porównanie gatunków (list oficjalny vs prywatny — GWO T84) | **Schemat** formy obowiązkowy | Model w książce; fragmenty elementów na ekranie | Czy własny tekst ma elementy z kryteriów (checklist EDUMOST); silnik nie ocenia stylu |
| **CZYTANIE** | READING: cel → czytaj → vocab → info → (fakt/opinia) → (notatka) → check. COMM: plansza → kto/do kogo → gest → zasady | głośne czytanie (T4), słownik (T26/T58) | T4: notatka. Słownik: jak szukać. COMM: opcjonalnie zasady. Inne: nie wymuszać | CENT:informacyjny / hasło / plansza — książka | Dowód w tekście lub odczyt sytuacji; nie „streść lekcję” |
| **KULTURA_MEDIA** | widzę/słyszę → na co patrzeć → terminy → jak zrobione → znaczenie → mała produkcja | związek z utworem, adaptacja, scenariusz filmu LOGIN UNCERTAIN | Cechy / terminy pożądane | CENT: obiekt w podręczniku s. N; bez hostowania skanów | Nazwij element + krótki opis/produkcja; nie biografia z pamięci |
| **NEUTRAL** | lista starych skills → zastosowanie → mini-check → co słabe | odsyłacz SPR-R*n* (poza T) | Opcjonalne podsumowanie | Mix już znanych | Synteza uczonych skills; **zero** nowej teorii |

---

*Koniec mapy szablonów. Następny krok (osobna komenda): projekt pierwszej lekcji według szkieletu, nie wcześniej.*
