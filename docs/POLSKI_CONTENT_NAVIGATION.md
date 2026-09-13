# Nawigacja treści — Język polski 5

**Status:** klasyfikacja do zatwierdzenia. **Bez implementacji UI.**  
Nie zmieniono: `lesson-engine.js`, `lesson-renderer.js`, `task-engine.js`, `content.js`, folderów lekcji, kartkówki, `subjects/polski.html`.

Źródło kolejności: `docs/POLSKI_FULL_COURSE_ARCHITECTURE.md` (U001–U121, GWO 2024, *Między nami* 867/2/2018).  
Model lekcji: `docs/POLSKI_LESSON_ARCHITECTURE.md`.  
Struktura strony (Kurs + Kartkówki): `docs/POLSKI_COURSE_AND_ASSESSMENT_NAVIGATION.md`.

---

## 1. Dwa niezależne pola

| Pole | Co oznacza | Co nie oznacza |
|---|---|---|
| **type** | Jak budujemy lekcję (szkielet ekranów) | Koloru na liście |
| **category** | Jakim kolorem jednostka stoi na `subjects/polski.html` | Szkieletu lekcji |

Jedna jednostka = **jeden** `type` + **jedna** `category`.

Nie ma kategorii **MÓWIENIE**. Recytacja, interpretacja głosowa, odpowiedź ustna wchodzą w literaturę, lekturę, pisanie albo kulturę. Wyjątek: `type: SPEAKING` przy akcencie (zagadnienie językowe) — kolor i tak jest `GRAMATYKA`.

`REVIEW` i `ASSESSMENT` mają `category: NEUTRAL` — bez kolorowej etykiety dziedziny.

---

## 2. Legenda kolorów (propozycja, jeszcze nie w CSS)

Kolory dobrane do tła EduMost (`#f6f3ee`). Nie kodować, dopóki lista nie jest zatwierdzona.

| category | Etykieta PL | Etykieta UA | Tło | Tekst | Pasek |
|---|---|---|---|---|---|
| **LITERATURA** | Literatura | Література | `#FCE7F3` | `#9D174D` | róż |
| **LEKTURY** | Lektury | Лектири | `#EDE9FE` | `#5B21B6` | fiolet |
| **GRAMATYKA** | Gramatyka | Граматика | `#CCFBF1` | `#0F766E` | turkus (accent EduMost) |
| **ORTOGRAFIA** | Ortografia | Орфографія | `#FEF3C7` | `#B45309` | bursztyn |
| **PISANIE** | Pisanie | Писання | `#DBEAFE` | `#1D4ED8` | błękit |
| **CZYTANIE** | Czytanie | Читання | `#DCFCE7` | `#15803D` | zieleń |
| **KULTURA_MEDIA** | Kultura i media | Культура і медіа | `#FFEDD5` | `#C2410C` | terakota |
| **NEUTRAL** | *(brak etykiety koloru)* | | `#F5F5F4` | `#57534E` | kamień |

Na liście `REVIEW` pokazuje szary znacznik **Powtórzenie**. `ASSESSMENT` — **Sprawdzian**. W U001–U121 nie ma jeszcze osobnych jednostek ASSESSMENT (sprawdziany rozdziałowe `R1-V`…`R11-V` są poza tą numeracją).

---

## 3. Zasady przypisania (żeby dało się odrzucić regułę, nie 121 wyjątków)

1. **Mit grecki** → `type: TEXT`, `category: LITERATURA`. To gatunek w podręczniku, nie cykl lektury.
2. **Biblia, Sienkiewicz, Molnár, Prus, Verne (wejście)** → `type: LEKTURA`, `category: LEKTURY`.
3. **Fragment *Pana Tadeusza*** → `type: WIERSZ`, `category: LITERATURA`. Nie kolor lektury.
4. **Wiersz, który wprowadza skill** (apostrofa, epitet, wers) → nadal `WIERSZ` + `LITERATURA`. Skill jest wewnątrz lekcji wiersza; nie robimy z tego osobnej szarej karty.
5. **Gramatyka + pisownia *nie* / *by* w jednym T GWO** → `type: GRAMMAR`, `category: GRAMATYKA`. Czyste ó/rz/ż/ch → `ORTHOGRAPHY` + `ORTOGRAFIA`.
6. **Interpunkcja cytatu** (U115) → `ORTHOGRAPHY` + `ORTOGRAFIA` (nie ma osobnego koloru INT).
7. **Słownik / synonimy** → `SKILL` + `CZYTANIE` (nie ma koloru SŁOWNICTWO).
8. **Sytuacja komunikacyjna / plansza** → `SKILL` + `CZYTANIE` (odczytanie sytuacji; nie ma koloru KOMUNIKACJA).
9. **Opis dzieła przy obrazie** → `CULTURE` + `KULTURA_MEDIA` (pisanie jest środkiem, nie kolorem).
10. **Komiks, teatr, film, słuchowisko, plakat** → `MEDIA` albo `CULTURE` + `KULTURA_MEDIA`.
11. **Forma wypowiedzi jako cel godziny** (list, pamiętnik, instrukcja, streszczenie…) → `FORM` + `PISANIE`.
12. **Tekst popularnonaukowy / informacyjny** → `READING` + `CZYTANIE`.
13. **Hawking, Fritsche, Kassjanowicz** nie są lekturą obowiązkową → nie `LEKTURY`.

Jednostki, przy których reguła jest dyskusyjna, są oznaczone **?** w kolumnie *uwaga*. Najpierw te, jeśli zmieniasz klasyfikację.

---

## 4. Katalog U001–U121

Strona = **strona GWO**. Gdzie `curriculum.js` ma inną — w uwadze `DISC`.

Skróty kolumn: **g** = godziny GWO (nie liczba ekranów EduMost).

---

### Część I · Dziwny ten świat

#### R1 Zachwycający kosmos

| ID | T | g | s. | type | category | Tytuł PL | Tytuł UA | Główny skill | Uczeń umie | uwaga |
|---|---|---|---|---|---|---|---|---|---|---|
| U001 | T1 | 1 | 8 | SKILL | CZYTANIE | Chcemy wiedzieć więcej | Хочемо знати більше | `sytuacja-komunikacyjna` | Nazywa kto / do kogo / gdzie / po co; odczytuje gest i mimikę. | **?** brak koloru KOMUNIKACJA |
| U002 | T2 | 1 | 10 | WIERSZ | LITERATURA | Lechoń, *Preludium* — apostrofa | Лехонь, *Preludium* — апострофа | `apostrofa` | Relacjonuje wiersz, określa nastrój, **wskazuje apostrofę**. | |
| U003 | T3 | 1 | 12 | CULTURE | KULTURA_MEDIA | Jakie tajemnice kosmosu czekają na odkrycie? | Які таємниці космосу чекають на відкриття? | `opis` | Opisuje zdjęcie; formułuje pytania. | opis jako środek, kolor = kultura |
| U004 | T4 | 1 | 14 | READING | CZYTANIE | Doskonalimy czytanie | Вдосконалюємо читання | `czytanie-ze-zrozumieniem` | Znajduje informacje; robi krótką notatkę; czyta głośno. | |
| U005 | T5 | 1 | 16 | ORTHOGRAPHY | ORTOGRAFIA | Pisownia ó, rz, ż, ch wymienna | Правопис ó, rz, ż, ch змінний | `ort-wymiana` | Uzasadnia pisownię przez wymianę w rodzinie wyrazów. | |
| U006 | T6 | 1 | 18 | WIERSZ | LITERATURA | Kim jest podmiot liryczny? Wic, *Noc* | Хто такий ліричний суб’єкт? Віц, *Noc* | `podmiot-liryczny` | Wskazuje osobę mówiącą; odróżnia autora od podmiotu. | |
| U007 | T7–T8 | 2 | 20 | ORTHOGRAPHY | ORTOGRAFIA | *rz* niewymienne | *rz* незмінне | `ort-rz-niewymienne` | Rozpoznaje i zapisuje *rz* niewymienne. | |
| U008 | T9 | 1 | 23 | READING | CZYTANIE | Hawking, *Jerzy i tajny klucz do Wszechświata* | Гокінг, фрагмент | `sens-przenosny` | Dzieli się wrażeniem; odróżnia sens dosłowny i przenośny. | fragment uzup., nie LEKTURY |
| U009 | T10–T11 | 2 | 26 | WIERSZ | LITERATURA | Miłosz, *Przypowieść o maku* | Мілош, *Przypowieść o maku* | `wers` | Używa terminów wers / strofa / rym; wskazuje cechę przypowieści. | DISC curriculum s. 27 |
| U010 | T12–T13 | 2 | 28 | MEDIA | KULTURA_MEDIA | O komiksie | Про комікс | `komiks` | Nazywa cechy komiksu; odczytuje emocje z kadru. | DISC curriculum s. 29 |

#### R2 Odpowiedzi na ważne pytania

| ID | T | g | s. | type | category | Tytuł PL | Tytuł UA | Główny skill | Uczeń umie | uwaga |
|---|---|---|---|---|---|---|---|---|---|---|
| U011 | T14 | 1 | 31 | TEXT | LITERATURA | Jak starożytni Grecy wyobrażali sobie świat? | Як давні греки уявляли світ? | `mit` | Wskazuje cechy mitu; opowiada wyobrażenie początku. | mit ≠ LEKTURY; DISC s. 32 |
| U012 | T15 | 1 | 34 | LEKTURA | LEKTURY | Jak Bóg stworzył świat? (Księga Rodzaju) | Як Бог створив світ? (Книга Буття) | `plan-wydarzen` | Układa etapy stworzenia; wie, co to rozdział i werset. | DISC s. 35 |
| U013 | T16 | 1 | 36 | CULTURE | KULTURA_MEDIA | Biblia i XIV-wieczna ilustracja | Біблія і середньовічна ілюстрація | `przeklad-intersemiotyczny` | Opisuje ilustrację; łączy obraz z wersetem. | |
| U014 | T17–T18 | 2 | 39 | WIERSZ | LITERATURA | Twardowski, *Który stwarzasz jagody* | Твардовський, *Który stwarzasz jagody* | `adresat-utworu` | Charakteryzuje adresata; wyjaśnia przenośnię. | curriculum mylnie Demeter |
| U015 | T19–T20 | 2 | 40 | TEXT | LITERATURA | *Demeter i Kora* w sztuce teatralnej | *Деметра і Кора* як драма | `didaskalia` | Odróżnia tekst główny od pobocznego; plan wydarzeń. | **?** dramat: TEXT nie MEDIA; DISC s. 39 |
| U016 | T21 | 1 | 45 | TEXT | LITERATURA | Prometeusz | Прометей | `ocena-bohatera` | Opowiada mit; ocenia dar i karę. | DISC s. 44 + zły tytuł TOC |
| U017 | T22–T23 | 2 | 50 | GRAMMAR | GRAMATYKA | Rzeczownik | Іменник | `rzeczownik` | Rozpoznaje rzeczownik; dzieli własne/pospolite, konkretne/abstrakcyjne. | DISC s. 48 |
| U018 | T24–T25 | 2 | 53 | FORM | PISANIE | Pałac Posejdona — opis i list | Палац Посейдона — опис і лист | `list` | Redaguje opis i list z elementami gatunku. | |
| U019 | T26 | 1 | 56 | SKILL | CZYTANIE | Słownik wyrazów bliskoznacznych | Словник синонімів | `synonimy` | Korzysta ze słownika; zamienia wyraz na synonim. | brak koloru SŁOWNICTWO |
| U020 | T27–T28 | 2 | 58 | MEDIA | KULTURA_MEDIA | Helios i Faeton — komiks | Геліос і Фаетон — комікс | `komiks` | Układa plan mitu; czyta kadr komiksu. | mit w medium |
| U021 | T29–T31 | 3 | 60 | GRAMMAR | GRAMATYKA | Odmiana rzeczownika; *nie* z rzeczownikiem | Відмінювання іменника; *nie* з іменником | `przypadki` | Odmienia; oddziela temat/końcówkę; pisze *nie* z rzeczownikiem. | DISC s. 66; *nie* nie zmienia koloru na ORT |

#### R3 W zwykły i niezwykły sposób o zjawiskach

| ID | T | g | s. | type | category | Tytuł PL | Tytuł UA | Główny skill | Uczeń umie | uwaga |
|---|---|---|---|---|---|---|---|---|---|---|
| U022 | T32–T33 | 2 | 64 | WIERSZ | LITERATURA | Tuwim, *Dwa wiatry* | Тувім, *Dwa wiatry* | `epitet` | Rozpoznaje epitet, porównanie, metaforę, uosobienie; recytuje. | DISC curriculum s. 72; recytacja ≠ osobny kolor |
| U023 | T34–T35 | 2 | 67 | MEDIA | KULTURA_MEDIA | Studio telewizyjne / prognoza pogody | Телестудія / прогноз погоди | `przekaz-audiowizualny` | Nazywa czynności prezentera; wygłasza krótką prognozę. | mówienie w mediach |
| U024 | T36–T37 | 2 | 69 | GRAMMAR | GRAMATYKA | Przymiotnik | Прикметник | `przymiotnik` | Rozpoznaje przymiotnik; uzgadnia formę z rzeczownikiem. | |
| U025 | T38 | 1 | 72 | WIERSZ | LITERATURA | Ratajczak, *Dwa słońca* | Ратайчак, *Dwa słońca* | `ozywienie` | Analizuje obrazy; rozpoznaje ożywienie / uosobienie. | |
| U026 | T39 | 1 | 74 | CULTURE | KULTURA_MEDIA | van Gogh, *Słoneczniki* | ван Гог, *Соняшники* | `opis-dziela` | Opisuje kompozycję, barwy, nastrój; nie zmyśla biografii. | forma opisu, kolor = kultura |
| U027 | T40–T41 | 2 | 76 | WIERSZ | LITERATURA | Tuwim, *Deszczyk* | Тувім, *Deszczyk* | `uosobienie` | Wskazuje epitet, porównanie, uosobienie **i mówi, po co**. | |
| U028 | T42–T43 | 2 | 78 | GRAMMAR | GRAMATYKA | Stopniowanie przymiotnika; *nie* z przymiotnikiem | Ступені прикметника; *nie* з прикметником | `stopniowanie-przymiotnik` | Tworzy stopnie; pisze *nie* z przymiotnikiem. | |
| U029 | T44 | 1 | 81 | FORM | PISANIE | Relacja / artykuł (*Podniebna kanonada*) | Репортаж / стаття | `relacja` | Redaguje relację według następstwa czasu. | |
| U030 | T45–T46 | 2 | 85 | ORTHOGRAPHY | ORTOGRAFIA | ó, u, rz, ż, ch w zakończeniach | ó, u, rz, ż, ch у закінченнях | `ort-zakonczenia` | Stosuje reguły zakończeń. | |
| U031 | T47–T48 | 2 | 87 | WIERSZ | LITERATURA | *Pan Tadeusz* — burza | *Пан Тадеуш* — буря | `srodki-stylistyczne` | Opowiada przebieg; wskazuje środki i obrazy zmysłów. | fragment ≠ cykl LEKTURY |
| U032 | T49–T50 | 2 | 89 | REVIEW | NEUTRAL | *Sprawdzę się!* (dział I) | *Перевірю себе!* (частина I) | mix działu I | Samodzielnie używa poznanych terminów. | bez koloru dziedziny |

---

### Część II · Gdzie stopy nasze

#### R4 Podjąć wyzwanie

| ID | T | g | s. | type | category | Tytuł PL | Tytuł UA | Główny skill | Uczeń umie | uwaga |
|---|---|---|---|---|---|---|---|---|---|---|
| U033 | T51 | 1 | 92 | SKILL | CZYTANIE | Precyzyjna informacja | Точна інформація | `informacja-precyzyjna` | Wskazuje, co pomaga i co psuje komunikat. | DISC s. 94 |
| U034 | T52 | 1 | 94 | WIERSZ | LITERATURA | Mamy wspólne cele | Маємо спільну мету | `podmiot-zbiorowy` | Rozpoznaje podmiot zbiorowy („my”). | |
| U035 | T53–T55 | 3 | 97 | GRAMMAR | GRAMATYKA | Liczebnik; *nie* z liczebnikiem | Числівник; *nie* з числівником | `liczebnik` | Rozpoznaje liczebnik główny i porządkowy; pisze *nie*. | |
| U036 | T56–T57 | 2 | 100 | LEKTURA | LEKTURY | Fileas Fogg / Verne | Філеас Фогг / Верн | `dziennik` | Nazywa elementy świata; pisze fragment dziennika bohatera. | **?** wejście do cyklu uzup. |
| U037 | T58 | 1 | 107 | SKILL | CZYTANIE | Słownik poprawnej polszczyzny | Словник правильної польської | `slownik` | Znajduje poprawną formę w słowniku. | |
| U038 | T59 | 1 | 109 | FORM | PISANIE | Pamiętnik | Щоденник / мемуари | `pamietnik` | Redaguje kartkę pamiętnika (ja, przeżycie). | |
| U039 | T60–T61 | 2 | 114 | GRAMMAR | GRAMATYKA | Czasownik; *nie* z czasownikiem | Дієслово; *nie* з дієсловом | `czasownik` | Rozpoznaje i odmienia; pisze *nie* osobno; zna formy -no/-to. | |
| U040 | T62 | 1 | 117 | LEKTURA | LEKTURY | Sienkiewicz, *W pustyni i w puszczy* — narrator | Сенкевич — оповідач | `narrator` | Rozpoznaje narrację trzecioosobową (kto opowiada ≠ Staś/Nel). | cykl `L-SIENKIEWICZ-*` |
| U041 | T63–T64 | 2 | 122 | TEXT | LITERATURA | Mit o Heraklesie | Міф про Геракла | `charakterystyka` | Podaje kolejność prac; cechy herosa. | |
| U042 | T65–T66 | 2 | 131 | GRAMMAR | GRAMATYKA | Tryby czasownika; pisownia *by* | Способи дієслова; правопис *by* | `tryb` | Nazywa tryby; używa w dialogu; pisze cząstkę *by*. | |

#### R5 W drodze do celu

| ID | T | g | s. | type | category | Tytuł PL | Tytuł UA | Główny skill | Uczeń umie | uwaga |
|---|---|---|---|---|---|---|---|---|---|---|
| U043 | T67 | 1 | 134 | READING | CZYTANIE | Kamiński, *Razem na bieguny* | Камінський, *Razem na bieguny* | `relacja` | Relacjonuje wyprawę; ocenia bohatera; notatka / dziennik. | pisanie wtórne |
| U044 | T68 | 1 | 138 | WIERSZ | LITERATURA | Beszczyńska, *podróże* | Бещинська, *podróże* | `rym` | Analizuje wers, strofę, rym, rytm. | |
| U045 | T69 | 1 | 140 | WIERSZ | LITERATURA | Marjańska, *Słońce – gorąca gwiazda* | Мар’янська, *Słońce – gorąca gwiazda* | `interpretacja-wiersza` | Wyjaśnia tytuł w kontekście treści i ostatniej zwrotki. | |
| U046 | T70 | 1 | 143 | READING | CZYTANIE | Ceram — Schliemann / skarb Priama | Керам — Шліман / скарб Пріама | `notatka-biograficzna` | Układa fakty na osi czasu; odróżnia fakt od opinii. | |
| U047 | T71–T72 | 2 | 148 | TEXT | LITERATURA | Tułaczka Odyseusza | Мандри Одіссея | `akcja` | Mapa wędrówki; używa *akcja* / *wątek*. | |
| U048 | T73 | 1 | 158 | GRAMMAR | GRAMATYKA | Czasowniki dokonane i niedokonane | Доконаний і недоконаний вид | `aspekt` | Rozpoznaje i tworzy pary aspektowe. | |
| U049 | T74 | 1 | 160 | FORM | PISANIE | Fritsche, *Skarb Troi* — opowiadanie z dialogiem | Фрітше — оповідання з діалогом | `opowiadanie` | Pisze plan i opowiadanie twórcze z dialogiem. | **?** tekst uzup. vs forma |
| U050 | T75–T76 | 2 | 166 | FORM | PISANIE | Oferta biura podróży | Пропозиція бюро подорожей | `oferta` | Zna elementy oferty; krótki dialog klient–biuro. | |

#### R6 Ocalmy Ziemię!

| ID | T | g | s. | type | category | Tytuł PL | Tytuł UA | Główny skill | Uczeń umie | uwaga |
|---|---|---|---|---|---|---|---|---|---|---|
| U051 | T77–T78 | 2 | 167 | GRAMMAR | GRAMATYKA | Przysłówek; *nie* z przysłówkiem | Прислівник; *nie* з прислівником | `przyslowek` | Pyta jak/gdzie/kiedy; stopniuje; pisze *nie*. | |
| U052 | T79 | 1 | 169 | WIERSZ | LITERATURA | Kulmowa — droga bez końca | Кульмова — дорога без кінця | `interpretacja-wiersza` | Interpretuje; nazywa typ podmiotu. | |
| U053 | T80 | 1 | 171 | CULTURE | KULTURA_MEDIA | W trosce o naturę | У турботі про природу | `plakat` | Tworzy plakat / dekalog ekologa; podaje argumenty. | |
| U054 | T81 | 1 | 174 | GRAMMAR | GRAMATYKA | Zaimek | Займенник | `zaimek` | Rozpoznaje zaimek; wie, po co zastępuje. | |
| U055 | T82 | 1 | 176 | WIERSZ | LITERATURA | Śladewski, *Zieleń* | Шлядевський, *Zieleń* | `frazeologia` | Wyjaśnia związki z „zielony”; tworzy porównanie. | |
| U056 | T83 | 1 | 179 | GRAMMAR | GRAMATYKA | Odmiana zaimków | Відмінювання займенників | `zaimek-odmiana` | Używa form dłuższych i krótszych. | |
| U057 | T84 | 1 | 181 | FORM | PISANIE | List oficjalny | Офіційний лист | `list-oficjalny` | Zna elementy; pisze własny list oficjalny. | |
| U058 | T85 | 1 | 183 | GRAMMAR | GRAMATYKA | Przyimek | Прийменник | `przyimek` | Tworzy wyrażenia przyimkowe; opisuje położenie. | |
| U059 | T86 | 1 | 186 | CULTURE | KULTURA_MEDIA | Plakat — wspólne dobro / Ziemia | Плакат — спільне добро / Земля | `plakat` | Odczytuje kontrast graficzny i przesłanie. | |
| U060 | T87 | 1 | 188 | GRAMMAR | GRAMATYKA | Wykrzyknik i partykuła | Вигук і частка | `partykuła` | Odróżnia odmienne/nieodmienne; widzi zmianę znaczenia. | |
| U061 | T88–T89 | 2 | 190 | REVIEW | NEUTRAL | *Sprawdzamy nasze umiejętności* (dział II) | *Перевіряємо вміння* (частина II) | mix działu II | Części mowy, *nie*, aspekt, pamiętnik. | |

---

### Część III · Świat ludzkich spraw

#### R7 Ważne, ważniejsze, najważniejsze

| ID | T | g | s. | type | category | Tytuł PL | Tytuł UA | Główny skill | Uczeń umie | uwaga |
|---|---|---|---|---|---|---|---|---|---|---|
| U062 | T90 | 1 | 194 | SKILL | CZYTANIE | Jak się zachować? | Як поводитися? | `sytuacja-komunikacyjna` | Nazywa uczucia i zachowania na planszy. | |
| U063 | T91–T92 | 2 | 196 | TEXT | LITERATURA | *Loteria* — zdarzenie, wątek, akcja, fabuła | *Loteria* — подія, сюжет, дія, фабула | `fabula` | Układa schemat fabuły na tym tekście. | skill na tekście |
| U064 | T93–T94 | 2 | 201 | MEDIA | KULTURA_MEDIA | Komiks o wampirach; wyrazy dźwiękonaśladowcze | Комікс про вампірів; ономатопея | `wyraz-dzwiekonasladowczy` | Wskazuje onomatopeje; podaje własne. | |
| U065 | T95 | 1 | 207 | GRAMMAR | GRAMATYKA | Wypowiedzenia | Висловлення | `wypowiedzenie` | Nazywa typy wypowiedzeń; interpunkcja podstawowa. | INT w gramatyce |
| U066 | T96–T97 | 2 | 210 | WIERSZ | LITERATURA | Ballada — rytm utworu | Балада — ритм твору | `ballada` | Sprawdza, czy wiersz jest rytmiczny; wers, strofa, rym. | |
| U067 | T98–T99 | 2 | 212 | LEKTURA | LEKTURY | Molnár, *Chłopcy z Placu Broni* | Мольнар, *Хлопці з Площі Зброї* | `opis-miejsca` | Opisuje Plac Broni; relacjonuje fragment. | cykl `L-CHLOPCY-*` |
| U068 | T100 | 1 | 216 | WIERSZ | LITERATURA | Staff, *Czucie niewinne* | Стафф, *Czucie niewinne* | `sytuacja-liryczna` | Nazywa podmiot i uczucia; wskazuje bodźce nastroju. | |
| U069 | T101–T102 | 2 | 218 | TEXT | LITERATURA | Baśń / źródło | Казка / джерело | `basn` | Wskazuje cechy gatunku i przesłanie tego utworu. | nie zgadywać tożsamości poza GWO |
| U070 | T103–T104 | 2 | 221 | ORTHOGRAPHY | ORTOGRAFIA | *rz*, *ż*, *ch*, *h* (Król Salomon) | *rz*, *ż*, *ch*, *h* | `ort-rz-z-ch-h` | Stosuje rozszerzone reguły; dyktando. | |
| U071 | T105–T106 | 2 | 223 | TEXT | LITERATURA | Jaki utwór nazywamy bajką? | Який твір називаємо байкою? | `bajka` | Podaje cechy bajki i morał; recytuje. | recytacja w literaturze |

#### R8 Dzień jak co dzień

| ID | T | g | s. | type | category | Tytuł PL | Tytuł UA | Główny skill | Uczeń umie | uwaga |
|---|---|---|---|---|---|---|---|---|---|---|
| U072 | T107–T108 | 2 | 227 | GRAMMAR | GRAMATYKA | Zdanie pojedyncze rozwinięte i nierozwinięte | Просте поширене і непоширене речення | `orzeczenie` | Znajduje orzeczenie i podmiot; rozróżnia zdanie rozwinięte. | |
| U073 | T109 | 1 | 229 | TEXT | LITERATURA | Niepełnosprawna Ola | Оля з інвалідністю | `charakterystyka` | Ocenia postawy wobec Oli; krótka charakterystyka. | |
| U074 | T110 | 1 | 236 | WIERSZ | LITERATURA | Kołysanka (Osiecka / Krajewski) | Колискова | `zdrobnienie` | Wskazuje zdrobnienia; relację nadawca–odbiorca. | piosenka jako wiersz |
| U075 | T111 | 1 | 238 | GRAMMAR | GRAMATYKA | Związki wyrazowe | Словосполучення | `zwiazki-wyrazowe` | Zadaje pytanie od nadrzędnego; nazywa związek. | |
| U076 | T112 | 1 | 241 | WIERSZ | LITERATURA | *Pan Tadeusz* — tradycje i obyczaje | *Пан Тадеуш* — звичаї | `obyczaj` | Mówi o tekście terminami liryki; wymienia obyczaje. | |
| U077 | T113–T114 | 2 | 244 | FORM | PISANIE | Instrukcja | Інструкція | `instrukcja` | Zna budowę; pisze instrukcję (tekst / rysunek). | |
| U078 | T115–T116 | 2 | 250 | FORM | PISANIE | Scenariusz (*30 znikających trampolin*) | Сценарій | `scenariusz` | Pisze fragment scenariusza (didaskalia + dialog). | **?** można MEDIA |
| U079 | T117 | 1 | 255 | GRAMMAR | GRAMATYKA | Grupa podmiotu i orzeczenia | Група підмета і присудка | `grupa-podmiotu` | Oddziela grupy; związek główny vs poboczny. | |
| U080 | T118–T119 | 2 | 257 | FORM | PISANIE | Przepisy / zdrowe odżywianie | Рецепти / здорове харчування | `przepis` | Redaguje przepis (składniki + kroki). | |
| U081 | T120 | 1 | 259 | GRAMMAR | GRAMATYKA | Wykres zdania pojedynczego | Схема простого речення | `wykres-zdania` | Rysuje krótki wykres; nazywa części zdania. | |
| U082 | T121–T122 | 2 | 262 | FORM | PISANIE | Streszczenie | Стислий переказ | `streszczenie` | Oddziela najważniejsze; streszcza bez zbędnych szczegółów. | |

#### R9 Gdy świat staje na głowie

| ID | T | g | s. | type | category | Tytuł PL | Tytuł UA | Główny skill | Uczeń umie | uwaga |
|---|---|---|---|---|---|---|---|---|---|---|
| U083 | T123 | 1 | 266 | FORM | PISANIE | W roli dziennikarzy | У ролі журналістів | `fakt-opinia` | Odróżnia informację od komentarza. | |
| U084 | T124–T126 | 3 | 268 | TEXT | LITERATURA | Mit o Syzyfie; sąd; relacja | Міф про Сізіфа; суд; репортаж | `mit` | Opowiada mit; zna *syzyfową pracę*; relacja z „rozprawy”. | pisanie wtórne |
| U085 | T127 | 1 | 272 | GRAMMAR | GRAMATYKA | Przydawka | Означення | `przydawka` | Pyta o przydawkę; dodaje przydawki na wykresie i w opisie. | |
| U086 | T128 | 1 | 274 | TEXT | LITERATURA | Puszka Pandory | Скринька Пандори | `mit` | Relacjonuje mit; łączy z Prometeuszem. | |
| U087 | T129 | 1 | 277 | TEXT | LITERATURA | Jeśli zdarzenia ułożą się inaczej… | Якщо події складуться інакше… | `empatia-tekst` | Relacjonuje; nazywa potrzeby w trudnej sytuacji. | |
| U088 | T130 | 1 | 281 | FORM | PISANIE | List w imieniu bohaterki (Juniper Berry) | Лист від імені героїні | `list` | Pisze list w imieniu bohaterki. | **?** TEXT vs FORM |
| U089 | T131 | 1 | 285 | TEXT | LITERATURA | Ulica Pachnących Bzów | Вулиця Пахучої Бузку | `metafora` | Wskazuje funkcję metafory; proponuje zakończenie. | |
| U090 | T132–T133 | 2 | 287 | READING | CZYTANIE | Świat wirtualny — tekst literacki vs informacyjny | Віртуальний світ — художній vs інформаційний | `tekst-literacki-vs-informacyjny` | Porównuje dwa teksty; cztery różnice. | |
| U091 | T134–T135 | 2 | 291 | GRAMMAR | GRAMATYKA | Okolicznik i dopełnienie | Обставина і додаток | `okolicznik` | Pyta o dopełnienie i okolicznik; pełny wykres. | |
| U092 | T136 | 1 | 294 | CULTURE | KULTURA_MEDIA | Plakat społeczny | Соціальний плакат | `perswazja` | Odczytuje hasło i adresata. | |
| U093 | T137–T138 | 2 | 295 | TEXT | LITERATURA | *Jak uniknąć piekła na ziemi?* | *Як уникнути пекла на землі?* | `frazeologia` | Wyjaśnia związki niebo/piekło; ocenia pomysły bohaterów. | |
| U094 | T139 | 1 | 300 | FORM | PISANIE | Dialog o tolerancji | Діалог про толерантність | `dialog` | Pisze dialog perswazyjny (kwestie, argument). | |
| U095 | T140–T141 | 2 | 303 | LEKTURA | LEKTURY | Prus, *Katarynka* | Прус, *Катеринка* | `nowela` | Zna cechy noweli; wskazuje punkt kulminacyjny. | cykl `L-KATARYNKA-*`; MISSING w 50 |
| U096 | T142 | 1 | 316 | LEKTURA | LEKTURY | Przypowieść o miłosiernym Samarytaninie | Притча про милосердного самарянина | `przypowiesc` | Relacjonuje trzech podróżnych; formułuje przesłanie. | Biblia |
| U097 | T143 | 1 | 318 | CULTURE | KULTURA_MEDIA | Plakaty społeczne | Соціальні плакати | `plakat` | Określa cel i adresata; projektuje własny plakat. | |
| U098 | T144 | 1 | 319 | CULTURE | KULTURA_MEDIA | Na wystawie (rzeźba / Prometeusz) | На виставці (скульптура) | `opis-dziela` | Opisuje rzeźbę; relacja z wystawy. | |
| U099 | T145–T146 | 2 | 321 | REVIEW | NEUTRAL | Jesteśmy ekspertami od mitów | Ми експерти з міфів | `mit` | Łączy mity, cechy gatunku, związki frazeologiczne. | **?** treść mitologiczna, ale powtórka |
| U100 | T147–T148 | 2 | 325 | REVIEW | NEUTRAL | *Sprawdzę się!* Dedal i Ikar | *Перевірю себе!* Дедал і Ікар | mix działu III | Fakt/opinia, wykres, mit w całości. | **?** nowy mit w powtórce |

---

### Część IV · Twórca i dzieło

#### R10 Twórcy światów fikcyjnych

| ID | T | g | s. | type | category | Tytuł PL | Tytuł UA | Główny skill | Uczeń umie | uwaga |
|---|---|---|---|---|---|---|---|---|---|---|
| U101 | T149 | 1 | 328 | CULTURE | KULTURA_MEDIA | Teatr, kino, muzeum — zasady | Театр, кіно, музей — правила | `kultura-zycia` | Zna zasady zachowania; krótka wypowiedź o wydarzeniu. | |
| U102 | T150 | 1 | 330 | WIERSZ | LITERATURA | Herbert, *Pudełko zwane wyobraźnią* | Герберт, *Pudełko zwane wyobraźnią* | `obraz-poetycki` | Wyjaśnia tytuł; recytuje; wskazuje obrazy. | DISC s. 331 |
| U103 | T151–T152 | 2 | 332 | MEDIA | KULTURA_MEDIA | Słuchowisko (Rodari) | Радіовистава (Родарі) | `sluchowisko` | Nazywa cechy słuchowiska; czyta rolami. | mówienie w mediach |
| U104 | T153–T154 | 2 | 336 | FORM | PISANIE | Scenariusz przedstawienia; zaproszenie | Сценарій вистави; запрошення | `zaproszenie` | Plan scen; zaproszenie na przedstawienie. | |
| U105 | T155 | 1 | 339 | GRAMMAR | GRAMATYKA | Rodzaje głosek | Типи звуків | `gloski-rodzaje` | Klasyfikuje głoski (dźwięczne/bezdźwięczne, ustne/nosowe…). | |

#### R11 Zapraszamy do świata sztuki

| ID | T | g | s. | type | category | Tytuł PL | Tytuł UA | Główny skill | Uczeń umie | uwaga |
|---|---|---|---|---|---|---|---|---|---|---|
| U106 | T156 | 1 | 342 | MEDIA | KULTURA_MEDIA | Z wizytą w teatrze | У театрі | `teatr` | Nazywa elementy spektaklu; czyta afisz. | |
| U107 | T157 | 1 | 345 | SPEAKING | GRAMATYKA | Akcent; staranna wymowa | Наголос; вимова | `akcent` | Stawia akcent paroksytoniczny; zna wyjątki ze słownika. | **type ≠ category** — mówienie, kolor gramatyki |
| U108 | T158 | 1 | 349 | MEDIA | KULTURA_MEDIA | Jak powstaje film? | Як постає фільм? | `film` | Etapy powstawania; różnica teatr / film. | |
| U109 | T159 | 1 | 352 | FORM | PISANIE | Wywiad | Інтерв’ю | `wywiad` | Zna budowę; formułuje pytania; zapisuje odpowiedź. | |
| U110 | T160 | 1 | 357 | WIERSZ | LITERATURA | Poetycka opowieść o muzyce | Поетична розповідь про музику | `srodki-stylistyczne` | Rozpoznaje **już znane** środki w nowych wierszach (review, nie INTRODUCTION epitetu). | |
| U111 | T161–T162 | 2 | 360 | FORM | PISANIE | Ogłoszenie | Оголошення | `ogloszenie` | Zna niezbędne elementy; uzupełnia braki. | |
| U112 | T163 | 1 | 362 | CULTURE | KULTURA_MEDIA | Zapraszamy do świata sztuki | Запрошуємо у світ мистецтва | `dziedziny-sztuki` | Wybiera dziedzinę i uzasadnia. | |
| U113 | T164–T165 | 2 | 363 | WIERSZ | LITERATURA | Neologizmy (Kulmowa) | Неологізми (Кульмова) | `neologizm` | Wie, czym jest neologizm; wyjaśnia „słowa walizki”. | słownictwo w wierszu |
| U114 | T166 | 1 | 367 | CULTURE | KULTURA_MEDIA | Chopin | Шопен | `notatka-biograficzna` | Układa fakty z życia na osi czasu. | |
| U115 | T167 | 1 | 370 | ORTHOGRAPHY | ORTOGRAFIA | Cytat | Цитата | `cytat` | Zapisuje cytat; wie, kiedy cudzysłów. | interpunkcja → ORTOGRAFIA |
| U116 | T168 | 1 | 372 | CULTURE | KULTURA_MEDIA | Muzeum / ekspozycje | Музей / експозиції | `muzeum` | Rozróżnia rodzaje ekspozycji; uzasadnia wybór muzeum. | |
| U117 | T169–T171 | 3 | 374 | MEDIA | KULTURA_MEDIA | *Burmistrz i ogród rzeźb* — adaptacja | *Бурмістр і сад скульптур* — адаптація | `adaptacja` | Adaptuje utwór (scena / komiks / drama). | **?** FORM vs MEDIA |
| U118 | T172 | 1 | 376 | CULTURE | KULTURA_MEDIA | Zrozumieć artystę i jego dzieło | Зрозуміти митця і його твір | `realistyczne-fantastyczne` | Łączy obraz i komiks; nie zmyśla. | |
| U119 | T173 | 1 | 380 | READING | CZYTANIE | Dziewit-Meller, *Architektki Warszawy* | Дзєвіт-Меллер, *Architektki Warszawy* | `opis-dziela` | Czyta tekst informacyjny; plan opisu architektury. | **?** CZYTANIE vs KULTURA_MEDIA |
| U120 | T174–T175 | 2 | 383 | REVIEW | NEUTRAL | *To już wiemy i potrafimy!* | *Це вже знаємо і вміємо!* | mix końca roku | Wypowiedzenia, cytat, *nie*, części mowy, komizm. | |
| U121 | T176–T177 | 2 | 386 | REVIEW | NEUTRAL | *Sprawdzę się!* (finał) | *Перевірю себе!* (фінал) | mix 5 klasy | Narrator, argument, związki, wykres, przypadki, dyktando. | |

---

## 5. Liczby (kontrola kompletności)

**121 jednostek.** Brak dziury w U001–U121.

### Według category (kolor listy)

| category | Liczba | Jednostki |
|---|---|---|
| LITERATURA | 34 | U002, U006, U009, U011, U014, U015, U016, U022, U025, U027, U031, U034, U041, U044, U045, U047, U052, U055, U063, U066, U068, U069, U071, U073, U074, U076, U084, U086, U087, U089, U093, U102, U110, U113 |
| LEKTURY | 6 | U012, U036, U040, U067, U095, U096 |
| GRAMATYKA | 22 | U017, U021, U024, U028, U035, U039, U042, U048, U051, U054, U056, U058, U060, U065, U072, U075, U079, U081, U085, U091, U105, U107 |
| ORTOGRAFIA | 5 | U005, U007, U030, U070, U115 |
| PISANIE | 16 | U018, U029, U038, U049, U050, U057, U077, U078, U080, U082, U083, U088, U094, U104, U109, U111 |
| CZYTANIE | 11 | U001, U004, U008, U019, U033, U037, U043, U046, U062, U090, U119 |
| KULTURA_MEDIA | 21 | U003, U010, U013, U020, U023, U026, U053, U059, U064, U092, U097, U098, U101, U103, U106, U108, U112, U114, U116, U117, U118 |
| NEUTRAL | 6 | U032, U061, U099, U100, U120, U121 |

34+6+22+5+16+11+21+6 = **121**.

### Według type (szkielet lekcji)

| type | Liczba |
|---|---|
| TEXT | 14 |
| WIERSZ | 20 |
| SKILL | 5 |
| GRAMMAR | 21 |
| ORTHOGRAPHY | 5 |
| FORM | 16 |
| LEKTURA | 6 |
| CULTURE | 13 |
| MEDIA | 8 |
| READING | 6 |
| SPEAKING | 1 (U107) |
| REVIEW | 6 |
| ASSESSMENT | 0 w U001–U121 |

14+20+5+21+5+16+6+13+8+6+1+6 = **121**.

Jedyny pełny rozjazd `type` ≠ „oczywisty kolor”: **U107** `SPEAKING` + `GRAMATYKA`.

---

## 6. Jednostki do decyzji (oznaczone **?**)

Jeśli zmieniasz klasyfikację, zacznij od tych. Reszta wynika z §3.

| ID | Teraz | Alternatywa | Dlaczego waha się |
|---|---|---|---|
| U001 | SKILL / CZYTANIE | SKILL / KULTURA_MEDIA | Plansza sytuacyjna nie jest „czytaniem artykułu”. |
| U015 | TEXT / LITERATURA | MEDIA / KULTURA_MEDIA | Uczy aktu, sceny, didaskaliów — ale to mit-dramat w podręczniku, nie wizyta w teatrze (to U106). |
| U036 | LEKTURA / LEKTURY | TEXT / LITERATURA | Verne jest w rozkładzie GWO, ale to fragment, nie obowiązkowa lektura PP. |
| U049 | FORM / PISANIE | TEXT / LITERATURA | GWO to tekst Fritschego; can-do to opowiadanie z dialogiem. |
| U078 | FORM / PISANIE | MEDIA / KULTURA_MEDIA | Scenariusz jest formą pisania **i** adaptacją. |
| U088 | FORM / PISANIE | TEXT / LITERATURA | Czytamy utwór, ale cel godziny = list w imieniu bohaterki. |
| U099 | REVIEW / NEUTRAL | TEXT / LITERATURA | Powtórka mitów + frazeologia; GWO traktuje jako podsumowanie. |
| U100 | REVIEW / NEUTRAL | TEXT / LITERATURA + REVIEW obok | W powtórce jest **nowy** mit Dedala i Ikara. |
| U117 | MEDIA / KULTURA_MEDIA | FORM / PISANIE | Adaptacja = produkcja sceny. |
| U119 | READING / CZYTANIE | READING / KULTURA_MEDIA | Rozdział „świat sztuki”, ale typ lekcji = czytanie tekstu informacyjnego. |

---

## 7. Przykładowy wygląd listy na `subjects/polski.html`

**Nie zakodowane.** To makieta do akceptacji układu.

Kolejność na stronie = kolejność GWO (U001→U121), nie 50 legacy.  
Każdy wiersz: pasek koloru kategorii · tytuł PL · tytuł UA (w trybie UA) · `s. N` · mały szary `type` (dla nas, można schować przed dzieckiem) · godziny nie są obowiązkowe na wierszu.

```
Język polski · klasa 5
Między nami 5 · 867/2/2018
121 jednostek · rok 2026/2027

Legenda
  [róż] Literatura   [fiolet] Lektury   [turkus] Gramatyka
  [bursztyn] Ortografia   [błękit] Pisanie   [zieleń] Czytanie
  [terakota] Kultura i media   [kamień] Powtórzenie

────────────────────────────────────────────
CZĘŚĆ I  Dziwny ten świat
  Rozdział 1  Zachwycający kosmos

  ▌zieleń     U001  Chcemy wiedzieć więcej              s. 8
              Хочемо знати більше
  ▌róż        U002  Lechoń, Preludium — apostrofa       s. 10
              Лехонь, Preludium — апострофа
  ▌terakota   U003  Tajemnice kosmosu (zdjęcia)         s. 12
  ▌zieleń     U004  Doskonalimy czytanie                s. 14
  ▌bursztyn   U005  Pisownia ó, rz, ż, ch wymienna      s. 16
  ▌róż        U006  Podmiot liryczny — Wic, Noc         s. 18
  ▌bursztyn   U007  rz niewymienne                      s. 20
  ▌zieleń     U008  Hawking — fragment                  s. 23
  ▌róż        U009  Miłosz, Przypowieść o maku          s. 26
  ▌terakota   U010  O komiksie                          s. 28
  ▌kamień     —     Powtórzenie rozdziału 1             (R1-V)

  Rozdział 2  Odpowiedzi na ważne pytania

  ▌róż        U011  Mit — początek świata               s. 31
  ▌fiolet     U012  Księga Rodzaju                      s. 34
  ▌terakota   U013  Biblia i ilustracja                 s. 36
  ▌róż        U014  Twardowski                          s. 39
  ▌róż        U015  Demeter i Kora — dramat             s. 40
  ▌róż        U016  Prometeusz                          s. 45
  ▌turkus     U017  Rzeczownik                          s. 50
  ▌błękit     U018  Opis i list (Posejdon)              s. 53
  ▌zieleń     U019  Słownik synonimów                   s. 56
  ▌terakota   U020  Helios i Faeton — komiks            s. 58
  ▌turkus     U021  Przypadki; nie z rzeczownikiem      s. 60

  …
  ▌kamień     U032  Sprawdzę się!                       s. 89

CZĘŚĆ II  …
  ▌fiolet     U040  W pustyni i w puszczy — narrator    s. 117
  ▌fiolet     U067  Chłopcy z Placu Broni               s. 212
  ▌fiolet     U095  Katarynka                           s. 303
```

Zasady makiety:

- Dziecko widzi **kolor + tytuł + stronę**. Nie widzi kodu `U009` jako głównego numeru (można schować albo dać małą szarą etykietę).
- `type` nie musi być na wierszu dziecka. Jest w danych, niekoniecznie w UI.
- Legacy 50 **nie** stanowi tej listy. Po implementacji mapowanie KEEP/REWRITE/MISSING jest osobnym krokiem.
- Kartkówka 14.09 **nie** wisi jako osobna pozycja kursu. Później: assessment nad skills, nie nad „lekcją 02”.

Wiersz dziecka (propozycja HTML, nie do wklejenia teraz):

```
[pasek 6px category]  Tytuł po polsku          s. 10
                       Підзаголовок українською
```

---

## 8. Czego ten dokument nie robi

- Nie zmienia `subjects/polski.html`.
- Nie tworzy `polski-program.js`.
- Nie przepisuje 50 lekcji.
- Nie dodaje folderów U001–U121.
- Nie projektuje kartkówki.

Po akceptacji klasyfikacji (albo po zmianach w tabeli **?**) następnym krokiem UI będzie tylko prezentacja tej listy — nadal bez contentu lekcji, jeśli tak zdecydujesz.

---

## 9. Prośba o decyzję

Do zatwierdzenia:

1. Siedem kolorów + NEUTRAL — bez MÓWIENIA.
2. Reguły §3 (mit = literatura, Biblia/Sienkiewicz/Molnár/Prus = lektury, *Pan Tadeusz* = literatura).
3. Tabela 121 jednostek.
4. Dziesięć wierszy **?** ze §6.

Po Twoim „tak” (z ewentualnymi poprawkami **?**) można projektować CSS listy. Nadal bez `content.js` i bez silnika, dopóki nie poprosisz o implementację lekcji.
