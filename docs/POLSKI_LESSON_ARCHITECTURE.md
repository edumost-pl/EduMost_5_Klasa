# Architektura lekcji EduMost — Język polski 5

**Status:** model pedagogiczny. Bez implementacji, bez `content.js`, bez zmian silnika.

Mapa roku: `docs/POLSKI_FULL_COURSE_ARCHITECTURE.md`.  
Kolory jednostek: `docs/POLSKI_CONTENT_NAVIGATION.md`.  
Zakładki Kurs / Kartkówki: `docs/POLSKI_COURSE_AND_ASSESSMENT_NAVIGATION.md`.

Odbiorca: dziecko z polską szkołą i językiem domowym UA/RU. Język lekcji: **polski szkolny**. Ukraiński: równoległe zrozumienie, nie zamiennik tekstu.

---

## 1. Zasada nadrzędna

EduMost nie jest podręcznikiem online.

Każda jednostka prowadzi dziecko przez:

**POLSKI → ZROZUMIENIE → ĆWICZENIE → SAMODZIELNE UŻYCIE**

Rozróżniamy zawsze:

- **WIEM, CO TO JEST**
- **UMIEM TO ROZPOZNAĆ / ZASTOSOWAĆ**

Ukończenie lekcji ≠ opanowanie umiejętności.

---

## 2. Typy jednostek

Jedna strona podręcznika może dać kilka jednostek. Kilka godzin GWO może dać jedną jednostkę, jeśli to jeden gest pedagogiczny.

| Typ | Kiedy | Cel | Nie robić |
|---|---|---|---|
| **TEXT** | Konkretny tekst podręcznika (nie wiersz) | Zrozumieć ten tekst | Sama definicja gatunku |
| **WIERSZ** | Utwór poetycki | Czytać + wskazać + interpretować | „Autor + trzy pytania” |
| **SKILL** | Jedno pojęcie literackie/językowe wielokrotnego użytku | Opanować umiejętność na poziomach 1–5 | Przywiązać na zawsze do jednej strony |
| **GRAMMAR** | Zagadnienie językowe | Rozpoznać → zastosować we własnym zdaniu | Lista definicji |
| **ORTHOGRAPHY** | Reguła pisowni / interpunkcji | Pisać poprawnie konkretne wyrazy | Tylko „wymień regułę” |
| **FORM** | Gatunek wypowiedzi użytkowej | Zbudować własny tekst | Zapamiętać listę „elementów” |
| **LEKTURA** | Cykl, nie jedna lekcja | Przejść książkę/fragment jak w szkole | Jedna karta „poznajemy lekturę” |
| **CULTURE** | Obraz, muzeum, plakat, zwyczaj | Odczytać tekst kultury | Historia sztuki dla dorosłych |
| **MEDIA** | Teatr, film, komiks, słuchowisko, TV | Elementy przekazu audiowizualnego | Spoiler całego filmu |
| **READING** | Czytanie ze zrozumieniem (popularnonaukowy, informacyjny) | Selekcja, fakt/opinia, notatka | Kopiowanie artykułu |
| **SPEAKING** | Recytacja, interpretacja głosowa, odpowiedź ustna | Mówić po polsku ze zrozumieniem | Udawać, że wybór a/b/c = recytacja |
| **REVIEW** | Po rozdziale / spirali | Wracać do skills | Nowa treść podręcznika |
| **ASSESSMENT** | Kartkówka / sprawdzian | Zebrać skills, nie „temat nr N” | Równać assessment z jedną stroną |

Jedna jednostka ma **jeden typ wiodący** (`type`) i **jedną kategorię nawigacyjną** (`category`). To dwa niezależne pola.

- `type` mówi, **jak zbudować lekcję** (szkielet ekranów).
- `category` mówi, **jakim kolorem pokazać jednostkę** na `subjects/polski.html`.

Nie mieszamy ich. Przykład: akcent to `type: SPEAKING` i `category: GRAMATYKA`. Recytacja wiersza to `type: WIERSZ` i `category: LITERATURA` — nie ma osobnej kategorii MÓWIENIE.

### Kategorie nawigacyjne (kolor na stronie)

| category | Etykieta PL | Etykieta UA | Kiedy |
|---|---|---|---|
| **LITERATURA** | Literatura | Література | wiersz, mit, baśń, bajka, opowiadanie literackie, skill literacki na tekście |
| **LEKTURY** | Lektury | Лектири | Biblia, Sienkiewicz, Molnár, Prus, Verne jako wejście do cyklu |
| **GRAMATYKA** | Gramatyka | Граматика | części mowy, składnia, głoski, akcent |
| **ORTOGRAFIA** | Ortografia | Орфографія | pisownia **oraz** interpunkcja (cytat, cudzysłów) |
| **PISANIE** | Pisanie | Писання | formy wypowiedzi: list, opis, instrukcja, streszczenie… |
| **CZYTANIE** | Czytanie | Читання | czytanie ze zrozumieniem, słownik, sytuacja komunikacyjna, tekst informacyjny |
| **KULTURA_MEDIA** | Kultura i media | Культура і медіа | obraz, plakat, komiks, teatr, film, słuchowisko, muzeum |
| **NEUTRAL** | Powtórzenie / Sprawdzian | Повторення / Перевірка | tylko `REVIEW` i `ASSESSMENT` — bez kolorowej kategorii |

Mity greckie = `LITERATURA`, nie `LEKTURY`. Fragment *Pana Tadeusza* = `LITERATURA` (`type: WIERSZ`). *Nie* z częścią mowy w bloku gramatycznym = `GRAMATYKA`, nie `ORTOGRAFIA`.

Pełna klasyfikacja U001–U121: `docs/POLSKI_CONTENT_NAVIGATION.md` (do zatwierdzenia przed UI).

---

## 3. Wspólny szkielet (wszystkie typy)

Nie kopiować 12 identycznych ekranów. Wspólne **fazy**, różna realizacja.

| Faza | Pytanie dziecka | Obowiązkowa? |
|---|---|---|
| START | Co dziś robimy i po co? | tak |
| CEL | Co będę umiał na końcu? | tak (1–3 cele, nie 8) |
| POZNAJ | Co to jest po polsku, prosto? | tak |
| ZROZUM | To samo po ukraińsku + jeden przykład | tak w trybie UA |
| ĆWICZ 1 | Rozpoznaję / wybieram | tak |
| ĆWICZ 2 | Wskazuję / rozróżniam | tak, poza czystym REVIEW |
| ZASTOSUJ | Robię sam (zdanie, wskazanie w tekście, plan) | tak dla SKILL/GRAMMAR/FORM/WIERSZ |
| W TEKŚCIE | W podręczniku / w prawdziwym utworze | gdy jest tekst |
| SPRAWDŹ | Krótki test opanowania (nie nowa treść) | tak |
| ZAPAMIĘTAJ | 2–4 zdania + słowa-klucze | tak |
| DALEJ | Co wróci później / co umieć przed następnym | tak |

Zakazane w każdej jednostce:

- trzy dystraktory typu „apostrofa to znak w matematyce”, jeśli temat nie o apostrofie;
- „Wraca do definicji z lekcji” jako jedyna wskazówka;
- ukraiński zamiast czytania polskiego tekstu;
- cytowanie całego utworu z podręcznika (copyright): odsyłać do strony, dawać krótkie fragmenty jako opcje.

Istniejące typy zadań silnika wystarczą na v1: `single-choice`, `multiple-choice`, `true-false`, `input-text`, `open-answer`. Nie projektować nowych typów, dopóki choice/input pokrywa rozpoznanie.

---

## 4. Architektura według typu

### 4.1. SKILL (np. epitet, apostrofa, wers)

Cel: jeden termin, poziomy 1–5.

```
1 START     — po polsku: dziś uczysz się wskazywać X, nie tylko powtarzać definicję
2 CEL       — 3 cele: nazwać / odróżnić / wskazać w tekście
3 POZNAJ    — definicja 1–2 zdań, język 5 klasy
4 ZROZUM    — UA 1:1 + „to NIE jest Y”
5 PRZYKŁAD  — 2 przykłady: jasny + kontrast
6 POZIOM 2  — które zdanie zawiera X?
7 POZIOM 3  — wskaż X w zdaniu (opcje = wyrazy / frazy)
8 POZIOM 4  — wskaż X w wierszu/fragmencie (wiersz w książce, tu opcje-wersy)
9 POZIOM 5  — jaką funkcję pełni? (nastrój, obraz, zwrot do…)
10 SPRAWDŹ  — mix 2–3 zadań bez nowej teorii
11 ZAPAMIĘTAJ
12 SPIRALA  — gdzie to wróci (np. Deszczyk, Pan Tadeusz)
```

Mastery SKILL: poziom 4 zaliczony na prawdziwym tekście, nie tylko na zdaniu-zabawce.

### 4.2. WIERSZ (TEXT poetycki)

Nie każdy wiersz ma wszystkie 15 punktów. Mapa roku oznacza, które są **wymagane** przy tym tekście.

Pełna siatka (używać jako checklisty, nie jako 15 ekranów zawsze):

1. kontekst (dział, po co ten tekst w książce)
2. kto mówi
3. do kogo mówi
4. sytuacja liryczna (gdzie, kiedy, co widzi/słyszy/czuje)
5. budowa wiersza (czy w ogóle budujemy dziś)
6. wers
7. strofa / zwrotka
8. rym
9. rytm (tylko gdy GWO wymaga)
10. środki — które konkretnie (nie „wszystkie środki świata”)
11. funkcja środka
12. nastrój
13. obrazy poetyckie
14. interpretacja (sens dosłowny / przenośny)
15. własna odpowiedź (2–4 zdania ustnie lub plan)

**Lekcja wiersza w EduMost:**

```
START → CEL → CZYTAJ (otwórz książkę, s. N; tu objaśnienie, nie cytat)
→ SŁOWNIK RAMKI (wyrazy z podręcznika)
→ SYTUACJA LIRYCZNA
→ [tylko wymagane:] BUDOWA / ŚRODKI / NASTRÓJ
→ INTERPRETACJA krótka
→ SPRAWDŹ (wskazanie w tekście)
→ ZAPAMIĘTAJ
```

Jeśli GWO na tym wierszu **wprowadza** skill (np. apostrofa przy *Preludium*), po WIERSZU idzie osobna jednostka SKILL albo ta sama lekcja ma wyraźny blok skill. Nie chować skillu w „zadaniu 4 o frazeologizmach”.

### 4.3. TEXT (proza, mit, artykuł w roli tekstu literackiego)

```
START → CEL → CZYTAJ (książka)
→ O CZYM (fabuła / etapy, nie streszczenie-spoiler całej lektury)
→ ŚWIAT PRZEDSTAWIONY (kto, gdzie, kiedy)
→ JĘZYK / GATUNEK tylko jeśli GWO tego wymaga dziś
→ WARTOŚĆ / OCENA BOHATERA (krótko)
→ ZADANIE (plan, kolejność, cytat-wskazanie)
→ ZAPAMIĘTAJ
```

Mit: cechy mitu + ten konkretny mit. Nie „wszystka mitologia Grecji” w jednej lekcji.

### 4.4. GRAMMAR

```
POJĘCIE (proste, PL + UA)
→ ROZPOZNANIE w zdaniu
→ ROZRÓŻNIENIE (X vs Y: rzeczownik/czasownik, dokonany/niedokonany…)
→ ZASTOSOWANIE (wstaw formę)
→ TRANSFORMACJA (zmień liczbę, tryb, rozwiń zdanie)
→ W TEKŚCIE (podręcznik)
→ WE WŁASNYM ZDANIU
→ TYPOWE BŁĘDY
→ SPRAWDŹ
→ KIEDY WRÓCI
```

Nie łączyć dwóch części mowy w jednej jednostce, chyba że GWO naprawdę uczy kontrastu (np. przysłówek od przymiotnika).

### 4.5. ORTHOGRAPHY / INT

```
REGUŁA (1 zdanie)
→ PRZYKŁAD (3–5 wyrazów z podręcznika / rodziny)
→ ROZPOZNANIE (wymienne vs niewymienne)
→ ZASTOSOWANIE (wpisz / wybierz)
→ WYJĄTEK (osobno, nie w pierwszej minucie)
→ BŁĄD TYPOWY (ó/u, rz/ż, nie z…)
→ MINI-KONTROLA (nie pełne dyktando w silniku; dyktando = lista wyrazów + self-check)
→ POWTÓRZENIE (tag spirali)
```

Każdy blok ORT zapisuje: **reguła, zbiór wyrazów, typowe błędy**.

Interpunkcja (cytat, dialog, typy wypowiedzeń): ten sam szkielet, materiałem są zdania, nie wyrazy.

### 4.6. FORM (wypowiedź)

```
CO TO JEST
→ PO CO (sytuacja komunikacyjna)
→ BUDOWA (lista elementów)
→ MODEL z podręcznika (analiza, nie kopiowanie całego listu)
→ ĆWICZENIE ELEMENTÓW (nagłówek, zwrot, zakończenie…)
→ PLAN
→ WŁASNY TEKST (open-answer + checklista; silnik nie ocenia stylu — checklista tak/nie)
→ CHECKLISTA UCZNIA
```

Mówienie: prompt ustny + nagranie w zeszycie/głosie dziecka + wybór podsumowania **tylko jako wsparcie**, nie zamiast mówienia.

### 4.7. LEKTURA (cykl)

Jedna lektura = **seria jednostek**, nie jedna karta.

```
L0  wprowadzenie (o czym książka, jak czytać, czego nie spoilerować)
L1  czytanie / fragment 1
L2  bohaterowie
L3  miejsce i czas
L4  wydarzenia / kolejność
L5  relacje
L6  konflikt / problem
L7  wartości
L8  język / narrator
L9  zadanie (plan, charakterystyka, mapa)
L10 wypowiedź ucznia
L11 powtórzenie
L12 sprawdzenie
```

Nie każdy cykl ma 13 kart. Fragment w podręczniku (Sienkiewicz s. 117) = krótszy cykl (wprowadzenie + narrator + wydarzenie + wypowiedź). Lektura obowiązkowa cała (*Chłopcy*, *Katarynka*) = pełniejszy cykl. To nauczyciel/szkoła ustala tempo czytania; EduMost trzyma **umiejętności i mapę książki**.

### 4.8. CULTURE / MEDIA

Obraz, teatr, film, komiks, plakat, muzeum.

```
CO WIDZĘ / SŁYSZĘ
→ JAK TO JEST ZROBIONE (kadr, dymki, afisz, barwy)
→ CO TO ZNACZY
→ ZWIĄZEK Z TEKSTEM (jeśli GWO łączy)
→ MAŁA PRODUKCJA (dymki, afisz, opis obrazu) według formy
```

Komiks: cechy gatunku + odczytanie emocji z rysunku. Nie tylko definicja.

### 4.9. READING

Tekst popularnonaukowy / informacyjny.

```
CEL CZYTANIA → CZYTAJ W KSIĄŻCE → FAKT VS OPINIA
→ GŁÓWNA MYŚL → SELEKCJA (co ważne)
→ NOTATKA (temat + 2–3 informacje)
→ SPRAWDŹ
```

### 4.10. REVIEW

Tylko skills już wprowadzone. Mieszanka poziomów 3–4. Na końcu: lista „jeszcze słabe”.

### 4.11. ASSESSMENT

```
CO SZKOŁA SPRAWDZA (opis z Librus / rozdział)
→ LISTA SKILLS
→ PREREQUISITES (jeśli dziecko nie umie Y, najpierw Y)
→ ŚCIEŻKA: skill → skill → synteza na tekście
→ WYNIK per skill, nie jedna procentowa gwiazdka
→ CO POWTÓRZYĆ
```

Kartkówka ≠ numer lekcji curriculum.

---

## 5. Progression umiejętności (spirala)

Każdy ważny skill ma stany:

| Stan | Znaczenie | Przykład: epitet |
|---|---|---|
| **INTRODUCTION** | pierwsze pojawienie | Tuwim / Deszczyk (GWO), nie s. 357 |
| **PRACTICE** | ćwiczenie przy tym tekście | wskazanie w wierszu |
| **REINFORCEMENT** | inny tekst, ten sam skill | *Pan Tadeusz*, ballada, Herbert |
| **TRANSFER** | użycie we własnym opisie / wypowiedzi | opis obrazu, własny wiersz |
| **REVIEW** | powtórzenie po czasie | powtórka rozdziału / assessment |

Stany nie są ekranami. Są znacznikami w mapie roku.

---

## 6. Mastery (śledzenie)

Nie: `lesson completed = 100%`.

Dla `skillId`:

| Pole | Wartości |
|---|---|
| `state` | `unknown` · `introduced` · `practiced` · `mastered` · `needs_review` |
| `level` | 0–5 (jak drabina SKILL) |
| `lastOkAt` | data |
| `sourceUnit` | id ostatniej jednostki |

**introduced** — dziecko przeszło POZNAJ + poziom 2.  
**practiced** — poziom 3–4 zaliczony choć raz.  
**mastered** — poziom 4 lub 5 na nowym tekście (nie ten sam, co wprowadzenie) albo dwa zaliczenia z rzędu.  
**needs_review** — błąd na assessment albo przerwa.

Przyszły assessment czyta ten rejestr: „powtórz epitet i rym”.

Istniejący `localStorage` lekcji zostaje dla ekranów. Warstwa skills — osobno, później. Teraz tylko model.

---

## 7. Prerequisites

Dodawać tylko, gdy naprawdę pomagają.

| Skill | Potrzebuje |
|---|---|
| apostrofa | nadawca/odbiorca; intuicja wołacza |
| podmiot liryczny | sytuacja komunikacyjna |
| epitet | przymiotnik (jaki?) |
| porównanie / metafora | odróżnienie „jak” vs tożsamość |
| uosobienie | czasownik + cecha ludzka |
| wers / strofa / rym | że wiersz ma budowę graficzną |
| tryb | czasownik, osoba |
| aspekt | czasownik |
| części zdania | wypowiedzenie; rzeczownik; czasownik |
| przydawka | rzeczownik + przymiotnik |
| dopełnienie / okolicznik | czasownik |
| związki wyrazowe | części mowy |
| list oficjalny | nadawca, odbiorca, cel |
| streszczenie | plan wydarzeń |
| narracja | kto mówi w prozie ≠ autor |

Brak prerequisite nie blokuje otwarcia ETAP 1, ale pokazuje „najpierw 10 minut Y”.

---

## 8. Typy zadań — pedagogika, nie nowe JS

| Potrzeba | Typ silnika | Uwaga |
|---|---|---|
| definicja | single-choice | tylko poziom 1–2 |
| wskazanie w zdaniu | single-choice (opcje = wyrazy) | poziom 3 |
| wskazanie w wierszu | single-choice / multiple-choice (wersy) | poziom 4 |
| funkcja | single-choice lub open-answer | poziom 5 |
| forma gramatyczna | input-text | lista akceptowanych form |
| prawda/fałsz o regule | true-false | z wyjaśnieniem błędu |
| własny tekst | open-answer + checklista | bez automatycznego stylu |
| mówienie | prompt + choice podsumowania | jasno: najpierw głos |

Nie używać `input-number` do polskiego.

---

## 9. Dwujęzyczność

Tryb UA:

1. polski termin  
2. proste zdanie po polsku  
3. ukraińskie objaśnienie  
4. przykład polski  
5. zadanie po polsku (pytanie może mieć UA)

Dziecko ma czytać wiersz **po polsku z książki**. UA nie zastępuje strofy.

---

## 10. Assessment (model, bez implementacji)

```
assessment
  source        (szkoła / rozdział GWO / data)
  skillIds[]
  prerequisites[]
  difficulty    (dopuszczający… celujący ≈ kryteria GWO)
  playlist[]    (jednostki EduMost)
  result        { skillId: introduced|practiced|mastered|needs_review }
```

Kartkówka szkolna jest **instancją** tego modelu, nie osobnym kursem.

---

## 11. Czego nie robić

- 50 legacy lekcji jako „pełny kurs”.
- Jedna strona = jedna lekcja zawsze.
- Lektura = jeden ekran definicji.
- Wiersz = biografia autora.
- Gramatyka = tylko nazwa części mowy.
- Silnik od nowa, zanim dane i treści istnieją.
- Nowa podstawa 2026 dla klasy 5 w roku 2026/2027.

---

## 12. Minimalna przyszła zmiana techniczna (nie teraz)

Gdy przyjdzie implementacja: dane programu + nowe `content.js` w istniejącym formacie `blocks[]`. Typy jednostek to konwencja treści, nie nowe `type` w silniku — z wyjątkiem ewentualnych `heading` / kolejności bloków.

Silnik: bez zmian, dopóki `blocks` wystarczają.
