# Nawigacja strony Język polski — kurs i assessment

**Status:** architektura nawigacji. **Bez implementacji.**

Nie zmieniono: `subjects/polski.html`, CSS, silnika, `content.js`, folderów lekcji, 50 legacy, zadań kartkówki.

| Dokument | Rola |
|---|---|
| `POLSKI_FULL_COURSE_ARCHITECTURE.md` | **źródło kolejności** roku: U001–U121, GWO 2024 |
| `POLSKI_CONTENT_NAVIGATION.md` | `type` + `category` + kolory |
| `POLSKI_LESSON_ARCHITECTURE.md` | szkielety lekcji, mastery, model assessmentu |
| **ten plik** | jak to pokazać na `subjects/polski.html` |

50 istniejących lekcji = **LEGACY**. Lista kursu = **U001–U121**. Kartkówka nie jest lekcją kursu.

---

## 1. Struktura strony `subjects/polski.html`

Dwie zakładki, nic więcej na pierwszym poziomie.

```
┌─────────────────────────────────────────────┐
│  ← EduMost          🇵🇱 Polski  🇺🇦 Українська │
│                                               │
│  📖 Język polski                               │
│  Między nami 5 · Łuczak / Murdzek · GWO       │
│  867/2/2018                                   │
│                                               │
│  Mój postęp    0 / 121                        │
│  ████░░░░░░░░░░░░░░░░                         │
│                                               │
│  [ KURS ]    [ KARTKÓWKI I SPRAWDZIANY ]      │
│                                               │
│  …treść aktywnej zakładki…                   │
└─────────────────────────────────────────────┘
```

| Element | Zostaje | Zmiana koncepcji |
|---|---|---|
| Nagłówek przedmiotu + metadane podręcznika | tak | bez zmian sensu |
| **Mój postęp** | tak | licznik = jednostki U001–U121, **nie** 50 |
| Lista wg podręcznika | tak | źródło: GWO U001–U121, nie `curriculum.js` |
| Osobne listy Literatura / Gramatyka / … | **nie** | kategoria tylko jako kolor wiersza |
| Zakładka Kartkówki | nowa | osobny system, nie pozycje kursu |

Progres na stronie przedmiotu dziś czyta `edumost-progress` i liczbę tematów z `curriculum.js` (50). W przyszłości `total` = 121 (albo tyle, ile jednostek ma `lessonHref`). Ukończenie lekcji ≠ opanowanie skillu — to osobna warstwa z `POLSKI_LESSON_ARCHITECTURE.md`. Na stronie głównej zostaje prosty pasek „ile jednostek otwartych / zrobionych”.

Kartkówka **nie** zwiększa mianownika 121.

---

## 2. Zakładka KURS

### 2.1. Co dziecko widzi

Kolejność **szkolna GWO**, nie alfabet, nie kategoria:

`U001 → U002 → … → U121`

Grupowanie:

```
CZĘŚĆ I   Dziwny ten świat
  R1  Zachwycający kosmos          U001–U010
  R2  Odpowiedzi na ważne pytania   U011–U021
  R3  W zwykły i niezwykły sposób   U022–U032
CZĘŚĆ II  Gdzie stopy nasze
  R4  Podjąć wyzwanie               U033–U042
  R5  W drodze do celu              U043–U050
  R6  Ocalmy Ziemię!                U051–U061
CZĘŚĆ III Świat ludzkich spraw
  R7  Ważne, ważniejsze…            U062–U071
  R8  Dzień jak co dzień             U072–U082
  R9  Gdy świat staje na głowie     U083–U100
CZĘŚĆ IV  Twórca i dzieło
  R10 Twórcy światów fikcyjnych      U101–U105
  R11 Zapraszamy do świata sztuki    U106–U121
```

U032 / U061 / U099 / U100 / U120 / U121 to jednostki podręcznika *Sprawdzę się!* — zostają **w kursie** (kolor NEUTRAL).  
Szkolne sprawdziany rozdziałowe (`R1-V` …) **nie** są wierszami kursu. Gdy będzie data od nauczyciela, wchodzą do zakładki Kartkówki.

### 2.2. Legenda (na górze listy kursu)

Kolory z `POLSKI_CONTENT_NAVIGATION.md` §2 — **bez nowych barw**.

```
Literatura     Lektury     Gramatyka     Ortografia
Pisanie        Czytanie    Kultura i media
```

Powtórzenie / sprawdzian w kursie = kamień (NEUTRAL). Bez osobnej plakietki koloru dziedziny.

Kliknięcie etykiety legendy **nie filtruje** listy. To tylko objaśnienie paska.

### 2.3. Wiersz jednostki (minimum na stronie)

```
▌kolor  2.  Lechoń, Preludium — apostrofa     s. 10    · otwórz / wkrótce
            Лехонь, Preludium — апострофа
```

| Na stronie | W danych (dziecko nie musi widzieć) |
|---|---|
| pasek `category` | `id` (U002), `gwo` (T2), `type`, `godziny`, `skill` |
| numer kolejności (1–121 = U001–U121) | `czesc`, `rozdzial` |
| tytuł PL | |
| tytuł UA (tryb UA) | |
| `s. XX` (strona GWO) | |
| status postępu (jak dziś: otwórz / wkrótce / zrobione) | `lessonHref` gdy powstanie |

**Nie** na głównej: wymagania PP, can-do, prerequisites, godziny GWO, `type`.

Dopóki nie ma prawdziwego `content.js` nowej jednostki: wiersz istnieje, status **wkrótce**. Legacy 50 nie podmieniamy jako „to jest U002”.

### 2.4. Dane jednej jednostki kursu (przyszły rekord)

```
unit
  id            "U002"
  order         2
  gwo           [2]              // T-numery; [7, 8] gdy GWO łączy godziny
  hours         1
  part          "I"
  chapter       "R1"
  title          { pl, ua }
  page          26              // strona GWO; discrepancy tylko w docs
  type          "WIERSZ"
  category      "LITERATURA"
  skill         "apostrofa"     // główny skill
  lessonHref    null | "…"      // null = jeszcze nie ma lekcji EduMost
```

Źródło pól: `POLSKI_FULL_COURSE_ARCHITECTURE.md` + `POLSKI_CONTENT_NAVIGATION.md`.  
Nie brać tytułu ani strony z legacy 50, gdy GWO się różni.

---

## 3. Kolejność U001–U121 (lista kursu)

Strona = GWO. `category` = tylko kolor.

### Część I · Dziwny ten świat

**R1 Zachwycający kosmos**

| # | ID | category | Tytuł PL | s. |
|---|---|---|---|---|
| 1 | U001 | CZYTANIE | Chcemy wiedzieć więcej | 8 |
| 2 | U002 | LITERATURA | Lechoń, *Preludium* — apostrofa | 10 |
| 3 | U003 | KULTURA_MEDIA | Jakie tajemnice kosmosu czekają na odkrycie? | 12 |
| 4 | U004 | CZYTANIE | Doskonalimy czytanie | 14 |
| 5 | U005 | ORTOGRAFIA | Pisownia ó, rz, ż, ch wymienna | 16 |
| 6 | U006 | LITERATURA | Kim jest podmiot liryczny? Wic, *Noc* | 18 |
| 7 | U007 | ORTOGRAFIA | *rz* niewymienne | 20 |
| 8 | U008 | CZYTANIE | Hawking — fragment | 23 |
| 9 | U009 | LITERATURA | Miłosz, *Przypowieść o maku* | 26 |
| 10 | U010 | KULTURA_MEDIA | O komiksie | 28 |

**R2 Odpowiedzi na ważne pytania**

| # | ID | category | Tytuł PL | s. |
|---|---|---|---|---|
| 11 | U011 | LITERATURA | Jak starożytni Grecy wyobrażali sobie świat? | 31 |
| 12 | U012 | LEKTURY | Jak Bóg stworzył świat? (Księga Rodzaju) | 34 |
| 13 | U013 | KULTURA_MEDIA | Biblia i XIV-wieczna ilustracja | 36 |
| 14 | U014 | LITERATURA | Twardowski, *Który stwarzasz jagody* | 39 |
| 15 | U015 | LITERATURA | *Demeter i Kora* w sztuce teatralnej | 40 |
| 16 | U016 | LITERATURA | Prometeusz | 45 |
| 17 | U017 | GRAMATYKA | Rzeczownik | 50 |
| 18 | U018 | PISANIE | Pałac Posejdona — opis i list | 53 |
| 19 | U019 | CZYTANIE | Słownik wyrazów bliskoznacznych | 56 |
| 20 | U020 | KULTURA_MEDIA | Helios i Faeton — komiks | 58 |
| 21 | U021 | GRAMATYKA | Odmiana rzeczownika; *nie* z rzeczownikiem | 60 |

**R3 W zwykły i niezwykły sposób o zjawiskach**

| # | ID | category | Tytuł PL | s. |
|---|---|---|---|---|
| 22 | U022 | LITERATURA | Tuwim, *Dwa wiatry* | 64 |
| 23 | U023 | KULTURA_MEDIA | Studio telewizyjne / prognoza pogody | 67 |
| 24 | U024 | GRAMATYKA | Przymiotnik | 69 |
| 25 | U025 | LITERATURA | Ratajczak, *Dwa słońca* | 72 |
| 26 | U026 | KULTURA_MEDIA | van Gogh, *Słoneczniki* | 74 |
| 27 | U027 | LITERATURA | Tuwim, *Deszczyk* | 76 |
| 28 | U028 | GRAMATYKA | Stopniowanie przymiotnika; *nie* z przymiotnikiem | 78 |
| 29 | U029 | PISANIE | Relacja / artykuł | 81 |
| 30 | U030 | ORTOGRAFIA | ó, u, rz, ż, ch w zakończeniach | 85 |
| 31 | U031 | LITERATURA | *Pan Tadeusz* — burza | 87 |
| 32 | U032 | NEUTRAL | *Sprawdzę się!* (dział I) | 89 |

### Część II · Gdzie stopy nasze

**R4 Podjąć wyzwanie**

| # | ID | category | Tytuł PL | s. |
|---|---|---|---|---|
| 33 | U033 | CZYTANIE | Precyzyjna informacja | 92 |
| 34 | U034 | LITERATURA | Mamy wspólne cele | 94 |
| 35 | U035 | GRAMATYKA | Liczebnik; *nie* z liczebnikiem | 97 |
| 36 | U036 | LEKTURY | Fileas Fogg / Verne | 100 |
| 37 | U037 | CZYTANIE | Słownik poprawnej polszczyzny | 107 |
| 38 | U038 | PISANIE | Pamiętnik | 109 |
| 39 | U039 | GRAMATYKA | Czasownik; *nie* z czasownikiem | 114 |
| 40 | U040 | LEKTURY | Sienkiewicz — narrator | 117 |
| 41 | U041 | LITERATURA | Mit o Heraklesie | 122 |
| 42 | U042 | GRAMATYKA | Tryby czasownika; pisownia *by* | 131 |

**R5 W drodze do celu**

| # | ID | category | Tytuł PL | s. |
|---|---|---|---|---|
| 43 | U043 | CZYTANIE | Kamiński, *Razem na bieguny* | 134 |
| 44 | U044 | LITERATURA | Beszczyńska, *podróże* | 138 |
| 45 | U045 | LITERATURA | Marjańska, *Słońce – gorąca gwiazda* | 140 |
| 46 | U046 | CZYTANIE | Ceram — Schliemann | 143 |
| 47 | U047 | LITERATURA | Tułaczka Odyseusza | 148 |
| 48 | U048 | GRAMATYKA | Czasowniki dokonane i niedokonane | 158 |
| 49 | U049 | PISANIE | *Skarb Troi* — opowiadanie z dialogiem | 160 |
| 50 | U050 | PISANIE | Oferta biura podróży | 166 |

**R6 Ocalmy Ziemię!**

| # | ID | category | Tytuł PL | s. |
|---|---|---|---|---|
| 51 | U051 | GRAMATYKA | Przysłówek; *nie* z przysłówkiem | 167 |
| 52 | U052 | LITERATURA | Kulmowa — droga bez końca | 169 |
| 53 | U053 | KULTURA_MEDIA | W trosce o naturę | 171 |
| 54 | U054 | GRAMATYKA | Zaimek | 174 |
| 55 | U055 | LITERATURA | Śladewski, *Zieleń* | 176 |
| 56 | U056 | GRAMATYKA | Odmiana zaimków | 179 |
| 57 | U057 | PISANIE | List oficjalny | 181 |
| 58 | U058 | GRAMATYKA | Przyimek | 183 |
| 59 | U059 | KULTURA_MEDIA | Plakat — wspólne dobro / Ziemia | 186 |
| 60 | U060 | GRAMATYKA | Wykrzyknik i partykuła | 188 |
| 61 | U061 | NEUTRAL | *Sprawdzamy nasze umiejętności* (dział II) | 190 |

### Część III · Świat ludzkich spraw

**R7 Ważne, ważniejsze, najważniejsze**

| # | ID | category | Tytuł PL | s. |
|---|---|---|---|---|
| 62 | U062 | CZYTANIE | Jak się zachować? | 194 |
| 63 | U063 | LITERATURA | *Loteria* — fabuła | 196 |
| 64 | U064 | KULTURA_MEDIA | Komiks; wyrazy dźwiękonaśladowcze | 201 |
| 65 | U065 | GRAMATYKA | Wypowiedzenia | 207 |
| 66 | U066 | LITERATURA | Ballada — rytm utworu | 210 |
| 67 | U067 | LEKTURY | Molnár, *Chłopcy z Placu Broni* | 212 |
| 68 | U068 | LITERATURA | Staff, *Czucie niewinne* | 216 |
| 69 | U069 | LITERATURA | Baśń / źródło | 218 |
| 70 | U070 | ORTOGRAFIA | *rz*, *ż*, *ch*, *h* | 221 |
| 71 | U071 | LITERATURA | Jaki utwór nazywamy bajką? | 223 |

**R8 Dzień jak co dzień**

| # | ID | category | Tytuł PL | s. |
|---|---|---|---|---|
| 72 | U072 | GRAMATYKA | Zdanie pojedyncze | 227 |
| 73 | U073 | LITERATURA | Niepełnosprawna Ola | 229 |
| 74 | U074 | LITERATURA | Kołysanka | 236 |
| 75 | U075 | GRAMATYKA | Związki wyrazowe | 238 |
| 76 | U076 | LITERATURA | *Pan Tadeusz* — obyczaje | 241 |
| 77 | U077 | PISANIE | Instrukcja | 244 |
| 78 | U078 | PISANIE | Scenariusz | 250 |
| 79 | U079 | GRAMATYKA | Grupa podmiotu i orzeczenia | 255 |
| 80 | U080 | PISANIE | Przepisy | 257 |
| 81 | U081 | GRAMATYKA | Wykres zdania pojedynczego | 259 |
| 82 | U082 | PISANIE | Streszczenie | 262 |

**R9 Gdy świat staje na głowie**

| # | ID | category | Tytuł PL | s. |
|---|---|---|---|---|
| 83 | U083 | PISANIE | W roli dziennikarzy | 266 |
| 84 | U084 | LITERATURA | Mit o Syzyfie | 268 |
| 85 | U085 | GRAMATYKA | Przydawka | 272 |
| 86 | U086 | LITERATURA | Puszka Pandory | 274 |
| 87 | U087 | LITERATURA | Jeśli zdarzenia ułożą się inaczej… | 277 |
| 88 | U088 | PISANIE | List w imieniu bohaterki | 281 |
| 89 | U089 | LITERATURA | Ulica Pachnących Bzów | 285 |
| 90 | U090 | CZYTANIE | Tekst literacki vs informacyjny | 287 |
| 91 | U091 | GRAMATYKA | Okolicznik i dopełnienie | 291 |
| 92 | U092 | KULTURA_MEDIA | Plakat społeczny | 294 |
| 93 | U093 | LITERATURA | *Jak uniknąć piekła na ziemi?* | 295 |
| 94 | U094 | PISANIE | Dialog o tolerancji | 300 |
| 95 | U095 | LEKTURY | Prus, *Katarynka* | 303 |
| 96 | U096 | LEKTURY | Przypowieść o miłosiernym Samarytaninie | 316 |
| 97 | U097 | KULTURA_MEDIA | Plakaty społeczne | 318 |
| 98 | U098 | KULTURA_MEDIA | Na wystawie | 319 |
| 99 | U099 | NEUTRAL | Jesteśmy ekspertami od mitów | 321 |
| 100 | U100 | NEUTRAL | *Sprawdzę się!* Dedal i Ikar | 325 |

### Część IV · Twórca i dzieło

**R10 Twórcy światów fikcyjnych**

| # | ID | category | Tytuł PL | s. |
|---|---|---|---|---|
| 101 | U101 | KULTURA_MEDIA | Teatr, kino, muzeum — zasady | 328 |
| 102 | U102 | LITERATURA | Herbert, *Pudełko zwane wyobraźnią* | 330 |
| 103 | U103 | KULTURA_MEDIA | Słuchowisko | 332 |
| 104 | U104 | PISANIE | Scenariusz przedstawienia; zaproszenie | 336 |
| 105 | U105 | GRAMATYKA | Rodzaje głosek | 339 |

**R11 Zapraszamy do świata sztuki**

| # | ID | category | Tytuł PL | s. |
|---|---|---|---|---|
| 106 | U106 | KULTURA_MEDIA | Z wizytą w teatrze | 342 |
| 107 | U107 | GRAMATYKA | Akcent; staranna wymowa | 345 |
| 108 | U108 | KULTURA_MEDIA | Jak powstaje film? | 349 |
| 109 | U109 | PISANIE | Wywiad | 352 |
| 110 | U110 | LITERATURA | Poetycka opowieść o muzyce | 357 |
| 111 | U111 | PISANIE | Ogłoszenie | 360 |
| 112 | U112 | KULTURA_MEDIA | Zapraszamy do świata sztuki | 362 |
| 113 | U113 | LITERATURA | Neologizmy (Kulmowa) | 363 |
| 114 | U114 | KULTURA_MEDIA | Chopin | 367 |
| 115 | U115 | ORTOGRAFIA | Cytat | 370 |
| 116 | U116 | KULTURA_MEDIA | Muzeum / ekspozycje | 372 |
| 117 | U117 | KULTURA_MEDIA | *Burmistrz i ogród rzeźb* — adaptacja | 374 |
| 118 | U118 | KULTURA_MEDIA | Zrozumieć artystę i jego dzieło | 376 |
| 119 | U119 | CZYTANIE | *Architektki Warszawy* | 380 |
| 120 | U120 | NEUTRAL | *To już wiemy i potrafimy!* | 383 |
| 121 | U121 | NEUTRAL | *Sprawdzę się!* (finał) | 386 |

Pełne tytuły UA, `type`, GWO T, godziny, skill: `POLSKI_CONTENT_NAVIGATION.md`.

---

## 4. Zakładka KARTKÓWKI I SPRAWDZIANY

Osobny system. **Nie** doklejać kartkówek do listy U001–U121.

```
KURS                    = program GWO (czego uczy szkoła przez rok)
KARTKÓWKI I SPRAWDZIANY = to, co ten nauczyciel sprawdzi w tym terminie
```

Kartkówka:

- nie tworzy nowej jednostki kursu;
- nie zmienia kolejności U001–U121;
- nie zgaduje zakresu z numeru rozdziału;
- łączy **wymaganie od nauczyciela** → **skill** → **U-ID**.

Na razie **nie** tworzyć pełnego kalendarza roku. Zakładka musi umieć przyjąć pustą listę i potem kolejne wpisy od Ciebie.

### 4.1. Lista (gdy pusta / gdy są wpisy)

```
Kartkówki i sprawdziany

  (pusto)
  Tu pojawią się terminy od nauczyciela.
  Nie są częścią listy kursu.

  ── gdy jest wpis ──

  14.09.2026                    Kartkówka
  apostrofa · podmiot liryczny · …
  przygotowanie: jeszcze nie przygotowane
```

Sortowanie listy: **data rosnąco**. Nie sortować po rozdziale GWO.

### 4.2. Wnętrze jednej kartkówki (docelowo A–E)

| Blok | Treść | Skąd |
|---|---|---|
| **A. Co będzie na kartkówce?** | Wymagania **verbatim** od nauczyciela | Ty wpisujesz; EduMost nie dopowiada |
| **B. Z jakich lekcji się przygotować?** | Powiązane U001–U121 | mapowanie §5 |
| **C. Szybkie przygotowanie** | Krótkie przypomnienie skillu | dopiero gdy skill ma treść |
| **D. Ćwiczenia** | Zadania do tych skills | później; nie nowa lekcja kursu |
| **E. Sprawdź się** | Krótki test przed terminem | później; wynik per skill |

Teraz: struktura A–E w modelu danych. **C, D, E puste.** Nie pisać treści, nie wymyślać zadań.

---

## 5. Model danych kartkówki

Przyszły plik (nie tworzyć teraz), np. `data/polski-assessments.js` — osobno od kursu.

```
assessment
  id                 "K-2026-09-14"
  kind               "kartkowka" | "sprawdzian"
  name               { pl: "Kartkówka 1", ua: "Картатка 1" }
  date               "2026-09-14"
  chapterHint        "R1" | null     // tylko kontekst, NIE zakres
  teacherRequirements []             // tekst od nauczyciela, 1:1
  skillIds           []              // dopiero po mapowaniu
  unitIds            []             // U-ID do bloku B
  prepStatus         "not_started" | "in_progress" | "ready"
  blocks
    A  teacherRequirements (wymagane)
    B  unitIds (gdy zmapowane)
    C  skillBriefs[]      // puste aż będzie treść
    D  exerciseIds[]      // puste
    E  checkIds[]         // puste
```

`prepStatus` na makiecie PL:

| Wartość | Etykieta |
|---|---|
| `not_started` | jeszcze nie przygotowane |
| `in_progress` | przygotowuję |
| `ready` | gotowe |

`kind: sprawdzian` = ten sam model (np. sprawdzian rozdziału, gdy będzie data od szkoły). Nie pregenerować R1–R11.

Kartkówka **nie** ma `category` kursu. Nie malujemy jej kolorem LITERATURA/GRAMATYKA.

---

## 6. Wymaganie nauczyciela → skill → U-ID

EduMost **nie** zakłada, że kartkówka = „cały bieżący rozdział”.

```
tekst od nauczyciela
    ↓  (ręcznie / później słownik etykiet)
skillId  albo  unitId (gdy to tytuł tekstu)
    ↓
jednostki kursu, w których ten skill jest wprowadzony lub ćwiczony
    ↓
blok B: lista U…  (link do wiersza kursu, nie nowa lekcja)
```

### 6.1. Trzy rodzaje wymagania

| Co wpisał nauczyciel | Jak łączyć | Czego nie robić |
|---|---|---|
| Termin / skill (`apostrofa`) | `skillId` → jednostki, gdzie skill ma I lub P | Nie dodawać całego R1 |
| Tytuł tekstu (*Przypowieść o maku*) | `unitId` tego tekstu | Nie dopisywać automatycznie wszystkich skills tej jednostki (wers, strofa, rym…), **chyba że** nauczyciel je wymienił |
| „Rozdział 1” bez listy | za mało — czekać na doprecyzowanie | Nie wypełniać U001–U010 „na wszelki wypadek” |

Skills **dostępne** na jednostce (mapa roku) ≠ zakres kartkówki. Zakres = tylko to, co jest w `teacherRequirements`.

### 6.2. Słownik etykiet (rosnący, nie pełny teraz)

Jedna etykieta → jeden `skillId` albo jeden `unitId`. Uzupełniane, gdy dodajesz kartkówkę.

| Etykieta od nauczyciela | Mapowanie | Jednostka (wprowadzenie) |
|---|---|---|
| apostrofa | skill `apostrofa` | U002 |
| podmiot liryczny | skill `podmiot-liryczny` | U006 |
| rz niewymienne | skill `ort-rz-niewymienne` | U007 |
| Przypowieść o maku | unit U009 (tekst) | U009 |

Jeśli nauczyciel dopisze później np. „wers, strofa, rym”, dopiero wtedy dokładamy te `skillId` (też U009). **Nie teraz.**

Prerequisites skillu (np. apostrofa ← nadawca/odbiorca) mogą pojawić się w bloku C jako „najpierw 2 minuty Y”, ale **nie** jako ukryte pozycje zakresu kartkówki.

### 6.3. Blok B — zachowanie

- Kolejność jednostek = kolejność kursu (U002, U006, U007, U009), nie kolejność wpisu nauczyciela, chyba że zdecydujemy inaczej przy implementacji.
- Kliknięcie = skok do jednostki w zakładce Kurs (gdy będzie `lessonHref`) albo „wkrótce”.
- Ta sama jednostka może wracać w wielu kartkówkach.

---

## 7. Makieta jednej kartkówki (bez wymyślania zakresu)

Poniżej **szablon ekranu**. Zakres w ramce to pola, które Ty wypełniasz. EduMost nie dopowiada epitetu, nastroju, wersu itd.

```
┌─────────────────────────────────────────────┐
│  Kartkówka 1                                 │
│  14.09.2026                                  │
│  Status:  ○ jeszcze nie przygotowane          │
│           ○ przygotowuję                    │
│           ○ gotowe                          │
│                                               │
│  A. Co będzie na kartkówce?                 │
│     (tylko tekst od nauczyciela)              │
│     • …                                      │
│                                               │
│  B. Z jakich lekcji się przygotować?           │
│     (powiązane U… po mapowaniu)                │
│     • U…  tytuł                    s. …     │
│                                               │
│  C. Szybkie przygotowanie                    │
│     — puste, aż skill ma treść —             │
│                                               │
│  D. Ćwiczenia                                 │
│     — puste, bez zadań —                     │
│                                               │
│  E. Sprawdź się                              │
│     — puste, bez testu —                     │
└─────────────────────────────────────────────┘
```

### 7.1. Pierwszy wpis od Ciebie (dane, nie treść zadań)

To **nie** jest wymyślony zakres GWO. To rekord, który podałaś. C / D / E zostają puste. Status: jeszcze nie przygotowane.

```
id:                  K-2026-09-14
kind:                kartkowka
name.pl:             Kartkówka 1
name.ua:             Картатка 1
date:                2026-09-14
chapterHint:         R1                 // tylko orientacja, nie zakres
teacherRequirements: [
  "apostrofa",
  "podmiot liryczny",
  "rz niewymienne",
  "Przypowieść o maku"
]
skillIds:            ["apostrofa", "podmiot-liryczny", "ort-rz-niewymienne"]
unitIds:             ["U002", "U006", "U007", "U009"]
prepStatus:          not_started
blocks.C / D / E:    []
```

Dlaczego `przypowiesc` nie jest osobno w `skillIds`: nauczyciel nazwał **tekst**, nie listę środków z U009. U009 jest w `unitIds`. Środki budowy wiersza wejdą tylko po dopisku od nauczyciela.

Makieta listy po tym wpisie:

```
KARTKÓWKI I SPRAWDZIANY

  14.09.2026 · Kartkówka 1
  apostrofa · podmiot liryczny · rz niewymienne · Przypowieść o maku
  lekcje: U002 · U006 · U007 · U009
  ○ jeszcze nie przygotowane
```

Nie implementować. Nie pisać przypomnień ani quizu.

---

## 8. Czego strona nie robi

- Nie pokazuje 50 legacy jako kursu.
- Nie sortuje kursu po `category`.
- Nie wstawia kartkówki między U007 a U008.
- Nie tworzy „lekcji kartkówka” w folderze `lessons/polski/`.
- Nie oznacza U002–U009 jako jedynego materiału roku.
- Nie synchronizuje jeszcze paska postępu ze skill mastery.

---

## 9. Kolejność przyszłej implementacji UI (nie teraz)

1. Dane kursu U001–U121 (bez `content.js`).
2. Zakładka Kurs: legenda + części + rozdziały + wiersze z kolorem.
3. Pasek „Mój postęp” na 121 (same zera / wkrótce).
4. Zakładka Kartkówki: pusta lista + model.
5. Wpis `K-2026-09-14` jako karta A+B, bez C/D/E.
6. Dopiero po akceptacji: lekcje kursu, potem treść przygotowania.

Ten dokument na tym się zatrzymuje. **Brak zmian w HTML/CSS/JS.**
