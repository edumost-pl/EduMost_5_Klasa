# Pełna architektura kursu Język polski — klasa 5

**Rok szkolny 2026/2027**  
**Status:** model pedagogiczny. Bez implementacji, bez folderów lekcji, bez `content.js`, bez kartkówki, bez `polski-program.js`.

Model lekcji: `docs/POLSKI_LESSON_ARCHITECTURE.md`.  
Klasyfikacja `type` + `category`: `docs/POLSKI_CONTENT_NAVIGATION.md`.  
Strona przedmiotu (Kurs / Kartkówki, bez UI): `docs/POLSKI_COURSE_AND_ASSESSMENT_NAVIGATION.md`.

---

## 0. Podstawa prawna i źródła

### Co obowiązuje klasę 5 w roku 2026/2027

Nowa podstawa programowa 2026 (**Reforma26**) wchodzi **1.09.2026 w klasach I i IV**.  
W klasie **V** w roku 2026/2027 nadal obowiązuje **wcześniejsza podstawa** (2017 z nowelizacją / uszczupleniem **2024**).

Nie wolno:

- brać rozkładu **Między nami 4 (2026)**;
- mieszać treści klasy 4 z klasą 5;
- projektować kursu według PP 2026.

Punkt odniesienia GWO dla klasy 5: dokumenty **2024**.

| Źródło | Miejsce | Rola |
|---|---|---|
| Podręcznik | *Między nami 5*, Łuczak / Murdzek, GWO, **867/2/2018** | teksty, kolejność treści, strony |
| Rozkład materiału | [gwo.pl/rozklad-materialu-5-klasa-nowy](https://gwo.pl/rozklad-materialu-5-klasa-nowy/) | tematy, godziny, materiał, PP |
| Plan wynikowy | [plan-wynikowy-5-klasa-nowy-2](https://gwo.pl/plan-wynikowy-5-klasa-nowy-2/) | wymagania zoperacjonalizowane |
| Kryteria do tematów | [kl-5-kryteria-oceniania-do-poszczegolnych-tematow-nowe-2](https://gwo.pl/kl-5-kryteria-oceniania-do-poszczegolnych-tematow-nowe-2/) | numeracja T1–T177, strony, can-do |
| Materiały GWO kl. 5 | [materialy…/klasa-5](https://gwo.pl/przedmioty/jezyk-polski/materialy-dydaktyczne/szkola-podstawowa/klasa-5/) | 11 rozdziałów, sprawdziany, lektury |
| PP kl. IV–VI | podstawa 2017 + uszczuplenie 2024 (ZPE: obszary I–IV) | kody I.1.x, II.1.x, III.x, IV.x |

Książka w `js/curriculum.js` (nr **867/2/2018**) jest właściwa. Nie zastępować.

### Jak czytana jest numeracja

- **T1** = Temat 1 z kryteriów GWO = **1 godz.** lekcyjna w szkole. Katalog = **T1 → T177**.
- **U001–U121** = wewnętrzne jednostki pedagogiczne (gdy GWO łączy kilka T). Nie są numerem karty lekcji.
- Gdy GWO pisze „Tematy 10 i 11”, w katalogu są **dwie karty** T10 i T11 (po 1 godz.), z tym samym tytułem i stroną, jeśli źródło nie rozdziela godzin.
- Strona w karcie = **strona z GWO / kryteriów**. Strony z `curriculum.js` są tylko w §18 (legacy). Nie zgadujemy „która strona lepsza”.

Ostrzeżenie o OCR: w wyciągu PDF kryteriów **wiersze tabeli czasem się przesuwają** (np. wymagania podmiotu przy T5). Tytuł tematu i strona biorą się z nagłówka GWO; wymagania — z planu wynikowego i z niesprzecznych wierszy. Gdzie treść kryteriów jest ewidentnie pomieszana, pole `uwaga` = `OCR_MIX`.

---

## 1. Struktura roku (GWO)

4 części podręcznika · 11 rozdziałów · **177 tematów GWO (T1–T177)** (+ sprawdziany rozdziałowe poza numeracją T + cykle lektur).

```
CZĘŚĆ I  Dziwny ten świat
  R1  Zachwycający kosmos
  R2  Odpowiedzi na ważne pytania
  R3  W zwykły i niezwykły sposób o zjawiskach
CZĘŚĆ II  Gdzie stopy nasze
  R4  Podjąć wyzwanie
  R5  W drodze do celu
  R6  Ocalmy Ziemię!
CZĘŚĆ III  Świat ludzkich spraw
  R7  Ważne, ważniejsze, najważniejsze
  R8  Dzień jak co dzień
  R9  Gdy świat staje na głowie
CZĘŚĆ IV  Twórca i dzieło
  R10 Twórcy światów fikcyjnych
  R11 Zapraszamy do świata sztuki
```

Po każdym rozdziale GWO przewiduje **sprawdzian 1 i 2**. W EduMost: jednostki **REVIEW** + opcjonalnie **ASSESSMENT** (`R1-S1` …), nie nowa treść podręcznika.

---

## 2. Jak czytać katalog T1–T177

Jednostka wyświetlana = **Temat GWO** (`T1`–`T177`). Każdy T = **1 godz.** szkolna = **jeden wiersz** tabeli.

`U001`–`U121` zostają **wewnętrznymi** jednostkami pedagogicznymi (gdy GWO łączy kilka T w jeden gest). Nie pokazujemy U-ID w wierszu lekcji. Mapa U → T: §3.6.

Kolumny:

| T | Godz. | Część / Rozdział | Kategoria | Temat lekcji | Podręcznik | Skills | Po lekcji |

`Kategoria` jest tylko znacznikiem koloru przyszłej listy. Wartości wyłącznie:

LITERATURA · LEKTURY · GRAMATYKA · ORTOGRAFIA · PISANIE · CZYTANIE · KULTURA_MEDIA · NEUTRAL

**Nie sortujemy** po kategorii. Kolejność zawsze T1 → T177.

Pola wewnętrzne (U-ID, type, PP, Check, Prereq, discrepancy) nie wchodzą do tabeli. Zostają w `POLSKI_CONTENT_NAVIGATION.md`, `POLSKI_LESSON_ARCHITECTURE.md` oraz w aneksie U → T.

Gdy GWO zapisuje „Tematy 10 i 11” jako jeden blok: ten sam tytuł, strona, skills i „Po lekcji” stoją w **obu** wierszach. Nie wymyślamy osobnego tytułu godziny, jeśli źródło go nie rozdziela. Brak danych = **—**.

## 3. Katalog kursu T1–T177

| T | Godz. | Część / Rozdział | Kategoria | Temat lekcji | Podręcznik | Skills | Po lekcji |
|---|---:|---|---|---|---|---|---|
| T1 | 1 | I / R1 | CZYTANIE | Chcemy wiedzieć więcej. | s. 8 | sytuacja-komunikacyjna · nadawca-odbiorca · komunikacja-niewerbalna | Uczeń potrafi nazwać, kto mówi, do kogo, gdzie i po co, oraz odczytać gest i mimikę. |
| T2 | 1 | I / R1 | LITERATURA | Na dobry początek – Jan Lechoń „Preludium”. | s. 10 | nastroj · osoba-mowiaca · apostrofa | Uczeń potrafi zrelacjonować wiersz, określić nastrój i wskazać apostrofę. |
| T3 | 1 | I / R1 | KULTURA_MEDIA | Jakie tajemnice kosmosu czekają na odkrycie? | s. 12 | opis · pytania | Uczeń potrafi opisać zdjęcie i sformułować pytania. |
| T4 | 1 | I / R1 | CZYTANIE | Doskonalimy czytanie. | s. 14 | czytanie-ze-zrozumieniem · fakt-opinia · notatka · glosne-czytanie | Uczeń potrafi znaleźć informacje w tekście, zrobić krótką notatkę i czytać głośno. |
| T5 | 1 | I / R1 | ORTOGRAFIA | Pisownia ó, rz, ż, ch wymienna. | s. 16 | ort-wymiana | Uczeń potrafi uzasadnić pisownię przez wymianę w rodzinie wyrazów. |
| T6 | 1 | I / R1 | LITERATURA | Kim jest podmiot liryczny… Antoni Wic „Noc”. | s. 18 | podmiot-liryczny · autor-vs-podmiot · nastroj | Uczeń potrafi wskazać osobę mówiącą i uzupełnić schemat autor / podmiot. |
| T7 | 1 | I / R1 | ORTOGRAFIA | To się zdarzyło niedaleko Rzeszowa… rz niewymienne. | s. 20 | ort-rz-niewymienne | Uczeń potrafi rozpoznać i zapisać rz niewymienne. |
| T8 | 1 | I / R1 | ORTOGRAFIA | To się zdarzyło niedaleko Rzeszowa… rz niewymienne. | s. 20 | ort-rz-niewymienne | Uczeń potrafi rozpoznać i zapisać rz niewymienne. |
| T9 | 1 | I / R1 | CZYTANIE | Hawking, Jerzy i tajny klucz do Wszechświata. | s. 23 | sens-przenosny · wrazenia-czytelnicze · opowiadanie | Uczeń potrafi podzielić się wrażeniem oraz odróżnić sens dosłowny od przenośnego. |
| T10 | 1 | I / R1 | LITERATURA | Miłosz, Przypowieść o maku. | s. 26 | przypowiesc · wers · strofa · rym · srodki-stylistyczne · sens-przenosny | Uczeń potrafi posługiwać się terminami budowy wiersza i wskazać cechę przypowieści. |
| T11 | 1 | I / R1 | LITERATURA | Miłosz, Przypowieść o maku. | s. 26 | przypowiesc · wers · strofa · rym · srodki-stylistyczne · sens-przenosny | Uczeń potrafi posługiwać się terminami budowy wiersza i wskazać cechę przypowieści. |
| T12 | 1 | I / R1 | KULTURA_MEDIA | Dziwne spotkanie. O komiksie. | s. 28 | komiks · uczucia-w-obrazie | Uczeń potrafi nazwać cechy komiksu i odczytać emocje z kadru. |
| T13 | 1 | I / R1 | KULTURA_MEDIA | Dziwne spotkanie. O komiksie. | s. 28 | komiks · uczucia-w-obrazie | Uczeń potrafi nazwać cechy komiksu i odczytać emocje z kadru. |
| T14 | 1 | I / R2 | LITERATURA | Jak starożytni Grecy wyobrażali sobie świat? | s. 31 | mit · czytanie-ze-zrozumieniem | Uczeń potrafi wskazać cechy mitu i opowiedzieć wyobrażenie początku świata. |
| T15 | 1 | I / R2 | LEKTURY | Jak Bóg stworzył świat? | s. 34 | plan-wydarzen · glosne-czytanie · biblia-oznaczenia | Uczeń potrafi ułożyć etapy stworzenia oraz wie, co to werset i rozdział. |
| T16 | 1 | I / R2 | KULTURA_MEDIA | Biblia i XIV-wieczna ilustracja. | s. 36 | opis · przeklad-intersemiotyczny | Uczeń potrafi opisać ilustrację według schematu i połączyć obraz z wersetem. |
| T17 | 1 | I / R2 | LITERATURA | Twardowski, Który stwarzasz jagody. | s. 39 | interpretacja-wiersza · adresat-utworu · sens-przenosny · recytacja | Uczeń potrafi scharakteryzować adresata i wyjaśnić przenośnię. |
| T18 | 1 | I / R2 | LITERATURA | Twardowski, Który stwarzasz jagody. | s. 39 | interpretacja-wiersza · adresat-utworu · sens-przenosny · recytacja | Uczeń potrafi scharakteryzować adresata i wyjaśnić przenośnię. |
| T19 | 1 | I / R2 | LITERATURA | Demeter i Kora w sztuce teatralnej. | s. 40–41 | mit · dialog-monolog · akt-scena · didaskalia · plan-szczegolowy | Uczeń potrafi odróżnić tekst główny od pobocznego i ułożyć plan wydarzeń. |
| T20 | 1 | I / R2 | LITERATURA | Demeter i Kora w sztuce teatralnej. | s. 40–41 | mit · dialog-monolog · akt-scena · didaskalia · plan-szczegolowy | Uczeń potrafi odróżnić tekst główny od pobocznego i ułożyć plan wydarzeń. |
| T21 | 1 | I / R2 | LITERATURA | Bogowie kontra ludzie — Prometeusz. | s. 45 | mit · ocena-bohatera · plan-wydarzen | Uczeń potrafi opowiedzieć mit oraz ocenić dar i karę. |
| T22 | 1 | I / R2 | GRAMATYKA | Rzeczownik: własne/pospolite, konkretne/abstrakcyjne. | s. 50 | rzeczownik · rzeczownik-podzial | Uczeń potrafi rozpoznać rzeczownik, podzielić go na kategorie i rozpocząć odmianę przez przypadki. |
| T23 | 1 | I / R2 | GRAMATYKA | Rzeczownik: własne/pospolite, konkretne/abstrakcyjne. | s. 50 | rzeczownik · rzeczownik-podzial | Uczeń potrafi rozpoznać rzeczownik, podzielić go na kategorie i rozpocząć odmianę przez przypadki. |
| T24 | 1 | I / R2 | PISANIE | Pałac Posejdona / list Amfitryty. | s. 53 | opis · list · swiat-przedstawiony | Uczeń potrafi zredagować opis i list z elementami gatunku. |
| T25 | 1 | I / R2 | PISANIE | Pałac Posejdona / list Amfitryty. | s. 53 | opis · list · swiat-przedstawiony | Uczeń potrafi zredagować opis i list z elementami gatunku. |
| T26 | 1 | I / R2 | CZYTANIE | Słownik wyrazów bliskoznacznych. | s. 56 | synonimy · slownik | Uczeń potrafi korzystać ze słownika i zamienić wyraz na synonim. |
| T27 | 1 | I / R2 | KULTURA_MEDIA | Komiksowa wersja mitu o Heliosie i Faetonie. | s. 58 | mit · komiks · plan-wydarzen | Uczeń potrafi ułożyć plan mitu i odczytać kadr komiksu. |
| T28 | 1 | I / R2 | KULTURA_MEDIA | Komiksowa wersja mitu o Heliosie i Faetonie. | s. 58 | mit · komiks · plan-wydarzen | Uczeń potrafi ułożyć plan mitu i odczytać kadr komiksu. |
| T29 | 1 | I / R2 | GRAMATYKA | Odmiana rzeczownika; temat i końcówka; nie z rzeczownikami. | s. 60 | przypadki · liczba-rodzaj · temat-koncowka · ort-nie-rzeczownik | Uczeń potrafi odmieniać rzeczownik, oddzielić temat od końcówki i napisać nie z rzeczownikiem. |
| T30 | 1 | I / R2 | GRAMATYKA | Odmiana rzeczownika; temat i końcówka; nie z rzeczownikami. | s. 60 | przypadki · liczba-rodzaj · temat-koncowka · ort-nie-rzeczownik | Uczeń potrafi odmieniać rzeczownik, oddzielić temat od końcówki i napisać nie z rzeczownikiem. |
| T31 | 1 | I / R2 | GRAMATYKA | Odmiana rzeczownika; temat i końcówka; nie z rzeczownikami. | s. 60 | przypadki · liczba-rodzaj · temat-koncowka · ort-nie-rzeczownik | Uczeń potrafi odmieniać rzeczownik, oddzielić temat od końcówki i napisać nie z rzeczownikiem. |
| T32 | 1 | I / R3 | LITERATURA | Tuwim, Dwa wiatry. | s. 64 | epitet · porownanie · metafora · uosobienie · apostrofa · obraz-poetycki · recytacja | Uczeń potrafi rozpoznać środki stylistyczne i wyrecytować wiersz. |
| T33 | 1 | I / R3 | LITERATURA | Tuwim, Dwa wiatry. | s. 64 | epitet · porownanie · metafora · uosobienie · apostrofa · obraz-poetycki · recytacja | Uczeń potrafi rozpoznać środki stylistyczne i wyrecytować wiersz. |
| T34 | 1 | I / R3 | KULTURA_MEDIA | Studio telewizyjne / prognoza pogody. | s. 67 | przekaz-audiowizualny · relacja | Uczeń potrafi nazwać czynności prezentera i wygłosić krótką prognozę. |
| T35 | 1 | I / R3 | KULTURA_MEDIA | Studio telewizyjne / prognoza pogody. | s. 67 | przekaz-audiowizualny · relacja | Uczeń potrafi nazwać czynności prezentera i wygłosić krótką prognozę. |
| T36 | 1 | I / R3 | GRAMATYKA | Przymiotnik (odmiana, związek z rzeczownikiem). | s. 69 | przymiotnik · zgoda-przymiotnik | Uczeń potrafi rozpoznać przymiotnik i uzgodnić jego formę z rzeczownikiem. |
| T37 | 1 | I / R3 | GRAMATYKA | Przymiotnik (odmiana, związek z rzeczownikiem). | s. 69 | przymiotnik · zgoda-przymiotnik | Uczeń potrafi rozpoznać przymiotnik i uzgodnić jego formę z rzeczownikiem. |
| T38 | 1 | I / R3 | LITERATURA | Ratajczak, Dwa słońca. | s. 72 | obraz-poetycki · ozywienie · uosobienie | Uczeń potrafi analizować obrazy poetyckie i rozpoznać ożywienie. |
| T39 | 1 | I / R3 | KULTURA_MEDIA | van Gogh, Słoneczniki. | s. 74 | opis-dziela · nastroj | Uczeń potrafi opisać kompozycję, barwy i nastrój; nie zmyśla biografii. |
| T40 | 1 | I / R3 | LITERATURA | Tuwim, Deszczyk; uosobienie. | s. 76 | epitet · porownanie · uosobienie | Uczeń potrafi wskazać epitet, porównanie i uosobienie oraz powiedzieć, po co zostały użyte. |
| T41 | 1 | I / R3 | LITERATURA | Tuwim, Deszczyk; uosobienie. | s. 76 | epitet · porownanie · uosobienie | Uczeń potrafi wskazać epitet, porównanie i uosobienie oraz powiedzieć, po co zostały użyte. |
| T42 | 1 | I / R3 | GRAMATYKA | Stopniowanie przymiotnika; nie z przymiotnikiem. | s. 78 | stopniowanie-przymiotnik · ort-nie-przymiotnik | Uczeń potrafi tworzyć stopnie przymiotnika i napisać nie z przymiotnikiem. |
| T43 | 1 | I / R3 | GRAMATYKA | Stopniowanie przymiotnika; nie z przymiotnikiem. | s. 78 | stopniowanie-przymiotnik · ort-nie-przymiotnik | Uczeń potrafi tworzyć stopnie przymiotnika i napisać nie z przymiotnikiem. |
| T44 | 1 | I / R3 | PISANIE | Artykuł / relacja (Szczygielski, Podniebna kanonada). | s. 81 | relacja · sprawozdanie · swiat-przedstawiony | Uczeń potrafi zredagować relację według schematu następstwa czasu. |
| T45 | 1 | I / R3 | ORTOGRAFIA | ó, u, rz, ż, ch w zakończeniach. | s. 85 | ort-zakonczenia | Uczeń potrafi stosować reguły zakończeń. |
| T46 | 1 | I / R3 | ORTOGRAFIA | ó, u, rz, ż, ch w zakończeniach. | s. 85 | ort-zakonczenia | Uczeń potrafi stosować reguły zakończeń. |
| T47 | 1 | I / R3 | LITERATURA | Pan Tadeusz — burza. | s. 87 | srodki-stylistyczne · obraz-poetycki · wers-strofa-rym | Uczeń potrafi opowiedzieć przebieg zdarzeń i wskazać środki stylistyczne. |
| T48 | 1 | I / R3 | LITERATURA | Pan Tadeusz — burza. | s. 87 | srodki-stylistyczne · obraz-poetycki · wers-strofa-rym | Uczeń potrafi opowiedzieć przebieg zdarzeń i wskazać środki stylistyczne. |
| T49 | 1 | I / R3 | NEUTRAL | Sprawdzę się! | s. 89 | komunikacja · wiersz · mit · rzeczownik · przymiotnik · srodki-stylistyczne · ortografia | Uczeń potrafi samodzielnie używać poznanych terminów. |
| T50 | 1 | I / R3 | NEUTRAL | Sprawdzę się! | s. 89 | komunikacja · wiersz · mit · rzeczownik · przymiotnik · srodki-stylistyczne · ortografia | Uczeń potrafi samodzielnie używać poznanych terminów. |
| T51 | 1 | II / R4 | CZYTANIE | Precyzyjna informacja / szlaki. | s. 92 | sytuacja-komunikacyjna · informacja-precyzyjna | Uczeń potrafi wskazać, co pomaga i co psuje komunikat. |
| T52 | 1 | II / R4 | LITERATURA | Mamy wspólne cele… | s. 94 | podmiot-zbiorowy · osoba-mowiaca | Uczeń potrafi rozpoznać podmiot zbiorowy. |
| T53 | 1 | II / R4 | GRAMATYKA | Liczebnik; nie z liczebnikiem. | s. 97 | liczebnik · liczebnik-glowny-porzadkowy · ort-nie-liczebnik | Uczeń potrafi rozpoznać liczebnik, odmienić go w zakresie klasy 5 i napisać nie z liczebnikiem. |
| T54 | 1 | II / R4 | GRAMATYKA | Liczebnik; nie z liczebnikiem. | s. 97 | liczebnik · liczebnik-glowny-porzadkowy · ort-nie-liczebnik | Uczeń potrafi rozpoznać liczebnik, odmienić go w zakresie klasy 5 i napisać nie z liczebnikiem. |
| T55 | 1 | II / R4 | GRAMATYKA | Liczebnik; nie z liczebnikiem. | s. 97 | liczebnik · liczebnik-glowny-porzadkowy · ort-nie-liczebnik | Uczeń potrafi rozpoznać liczebnik, odmienić go w zakresie klasy 5 i napisać nie z liczebnikiem. |
| T56 | 1 | II / R4 | LEKTURY | Fileas Fogg / Verne. | s. 100 | swiat-przedstawiony · dziennik · plan-wydarzen | Uczeń potrafi nazwać elementy świata przedstawionego i napisać fragment dziennika bohatera. |
| T57 | 1 | II / R4 | LEKTURY | Fileas Fogg / Verne. | s. 100 | swiat-przedstawiony · dziennik · plan-wydarzen | Uczeń potrafi nazwać elementy świata przedstawionego i napisać fragment dziennika bohatera. |
| T58 | 1 | II / R4 | CZYTANIE | Słownik poprawnej polszczyzny. | s. 107 | slownik · poprawnosc | Uczeń potrafi znaleźć poprawną formę w słowniku. |
| T59 | 1 | II / R4 | PISANIE | Pamiętnik (Robert / Na przykład Małgośka). | s. 109 | pamietnik · dziennik | Uczeń potrafi zredagować kartkę pamiętnika (ja, przeżycia). |
| T60 | 1 | II / R4 | GRAMATYKA | Czasownik; nie z czasownikiem; formy -no/-to. | s. 114 | czasownik · osoba-czas · formy-nieosobowe · ort-nie-czasownik | Uczeń potrafi rozpoznać i odmienić czasownik, napisać nie osobno oraz użyć formy -no/-to. |
| T61 | 1 | II / R4 | GRAMATYKA | Czasownik; nie z czasownikiem; formy -no/-to. | s. 114 | czasownik · osoba-czas · formy-nieosobowe · ort-nie-czasownik | Uczeń potrafi rozpoznać i odmienić czasownik, napisać nie osobno oraz użyć formy -no/-to. |
| T62 | 1 | II / R4 | LEKTURY | Sienkiewicz, W pustyni i w puszczy — narrator. | s. 117 | narrator · narracja-3os · swiat-przedstawiony | Uczeń potrafi rozpoznać narrację trzecioosobową. |
| T63 | 1 | II / R4 | LITERATURA | Mit o Heraklesie. | s. 122 | mit · bohater · charakterystyka | Uczeń potrafi podać kolejność prac i cechy herosa. |
| T64 | 1 | II / R4 | LITERATURA | Mit o Heraklesie. | s. 122 | mit · bohater · charakterystyka | Uczeń potrafi podać kolejność prac i cechy herosa. |
| T65 | 1 | II / R4 | GRAMATYKA | Tryby czasownika; pisownia -bym, -byś, -by. | s. 131 | tryb · ort-by | Uczeń potrafi nazwać tryby, użyć ich w dialogu i napisać cząstkę by. |
| T66 | 1 | II / R4 | GRAMATYKA | Tryby czasownika; pisownia -bym, -byś, -by. | s. 131 | tryb · ort-by | Uczeń potrafi nazwać tryby, użyć ich w dialogu i napisać cząstkę by. |
| T67 | 1 | II / R5 | CZYTANIE | Kamiński, Razem na bieguny. | s. 134 | relacja · dziennik · ocena-bohatera | Uczeń potrafi zrelacjonować wyprawę i napisać fragment dziennika. |
| T68 | 1 | II / R5 | LITERATURA | Beszczyńska, podróże. | s. 138 | wers · strofa · rym · rytm · osoba-mowiaca | Uczeń potrafi analizować budowę wiersza. |
| T69 | 1 | II / R5 | LITERATURA | Marjańska, Słońce – gorąca gwiazda. | s. 140 | obraz-poetycki · zwrotka · interpretacja-wiersza | Uczeń potrafi wyjaśnić tytuł w kontekście treści. |
| T70 | 1 | II / R5 | CZYTANIE | Ceram — Schliemann / skarb Priama. | s. 143 | notatka-biograficzna · fakt-opinia | Uczeń potrafi ułożyć notatkę na osi czasu. |
| T71 | 1 | II / R5 | LITERATURA | Tułaczka Odyseusza. | s. 148 | akcja · watek · mit · przyczyna-skutek | Uczeń potrafi ułożyć mapę wędrówki i posłużyć się terminami akcja / wątek. |
| T72 | 1 | II / R5 | LITERATURA | Tułaczka Odyseusza. | s. 148 | akcja · watek · mit · przyczyna-skutek | Uczeń potrafi ułożyć mapę wędrówki i posłużyć się terminami akcja / wątek. |
| T73 | 1 | II / R5 | GRAMATYKA | Czasowniki dokonane i niedokonane. | s. 158 | aspekt | Uczeń potrafi rozpoznać i tworzyć pary aspektowe; wie, że aspekt to nie odmiana. |
| T74 | 1 | II / R5 | PISANIE | Fritsche, Skarb Troi. | s. 160 | opowiadanie · dialog · swiat-przedstawiony · fantastyczne-realistyczne | Uczeń potrafi ułożyć plan i napisać opowiadanie twórcze z dialogiem. |
| T75 | 1 | II / R5 | PISANIE | Oferta biura podróży. | s. 166 | perswazja · oferta · mowienie-inscenizacja | Uczeń potrafi nazwać elementy oferty i przeprowadzić krótki dialog klient–biuro. |
| T76 | 1 | II / R5 | PISANIE | Oferta biura podróży. | s. 166 | perswazja · oferta · mowienie-inscenizacja | Uczeń potrafi nazwać elementy oferty i przeprowadzić krótki dialog klient–biuro. |
| T77 | 1 | II / R6 | GRAMATYKA | Przysłówek; nie z przysłówkiem. | s. 167 | przyslowek · stopniowanie-przyslowek · ort-nie-przyslowek | Uczeń potrafi zadać pytania jak/gdzie/kiedy, stopniować przysłówek i napisać nie z przysłówkiem. |
| T78 | 1 | II / R6 | GRAMATYKA | Przysłówek; nie z przysłówkiem. | s. 167 | przyslowek · stopniowanie-przyslowek · ort-nie-przyslowek | Uczeń potrafi zadać pytania jak/gdzie/kiedy, stopniować przysłówek i napisać nie z przysłówkiem. |
| T79 | 1 | II / R6 | LITERATURA | Kulmowa — droga bez końca. | s. 169 | interpretacja-wiersza · podmiot-liryczny · tryb | Uczeń potrafi zinterpretować wiersz i nazwać typ podmiotu. |
| T80 | 1 | II / R6 | KULTURA_MEDIA | W trosce o naturę. | s. 171 | plakat · argument | Uczeń potrafi przygotować plakat / dekalog ekologa i podać argumenty. |
| T81 | 1 | II / R6 | GRAMATYKA | Zaimek. | s. 174 | zaimek | Uczeń potrafi rozpoznać zaimek i wie, po co zastępuje inne wyrazy. |
| T82 | 1 | II / R6 | LITERATURA | Śladewski, Zieleń. | s. 176 | nastroj · porownanie · frazeologia · obraz-poetycki | Uczeń potrafi wyjaśnić związki z „zielony” i utworzyć porównanie. |
| T83 | 1 | II / R6 | GRAMATYKA | Odmiana zaimków. | s. 179 | zaimek-odmiana | Uczeń potrafi używać form dłuższych i krótszych zaimków. |
| T84 | 1 | II / R6 | PISANIE | List oficjalny. | s. 181 | list-oficjalny · nadawca-odbiorca | Uczeń potrafi nazwać elementy listu oficjalnego i napisać własny list na temat z podręcznika. |
| T85 | 1 | II / R6 | GRAMATYKA | Przyimek. | s. 183 | przyimek · wyrazenie-przyimkowe | Uczeń potrafi tworzyć wyrażenia przyimkowe i opisać położenie. |
| T86 | 1 | II / R6 | KULTURA_MEDIA | Plakat — wspólne dobro / Ziemia. | s. 186 | plakat · sens-przenosny | Uczeń potrafi odczytać kontrast graficzny. |
| T87 | 1 | II / R6 | GRAMATYKA | Wykrzyknik i partykuła. | s. 188 | wykrzyknik · partykuła · nieodmienne | Uczeń potrafi odróżnić wyrazy odmienne od nieodmiennych i zauważyć zmianę znaczenia po partykule. |
| T88 | 1 | II / R6 | NEUTRAL | Sprawdzamy nasze umiejętności. | s. 190 | czesci-mowy · nie · aspekt · liczebnik · pamietnik | — |
| T89 | 1 | II / R6 | NEUTRAL | Sprawdzamy nasze umiejętności. | s. 190 | czesci-mowy · nie · aspekt · liczebnik · pamietnik | — |
| T90 | 1 | III / R7 | CZYTANIE | Jak się zachować? | s. 194 | sytuacja-komunikacyjna · opis-przezyc | Uczeń potrafi nazwać uczucia i zachowania na planszy. |
| T91 | 1 | III / R7 | LITERATURA | Loteria — zdarzenie, wątek, akcja, fabuła. | s. 196 | zdarzenie · akcja · watek · fabula | Uczeń potrafi ułożyć schemat fabuły na tym tekście. |
| T92 | 1 | III / R7 | LITERATURA | Loteria — zdarzenie, wątek, akcja, fabuła. | s. 196 | zdarzenie · akcja · watek · fabula | Uczeń potrafi ułożyć schemat fabuły na tym tekście. |
| T93 | 1 | III / R7 | KULTURA_MEDIA | Komiks o wampirach; wyrazy dźwiękonaśladowcze. | s. 201 | wyraz-dzwiekonasladowczy · komizm · komiks | Uczeń potrafi wskazać onomatopeje i podać własne. |
| T94 | 1 | III / R7 | KULTURA_MEDIA | Komiks o wampirach; wyrazy dźwiękonaśladowcze. | s. 201 | wyraz-dzwiekonasladowczy · komizm · komiks | Uczeń potrafi wskazać onomatopeje i podać własne. |
| T95 | 1 | III / R7 | GRAMATYKA | Powtórzenie wypowiedzeń. | s. 207 | wypowiedzenie · zdanie · rownowaznik · zdanie-zlozone | Uczeń potrafi nazwać typy wypowiedzeń i zastosować interpunkcję podstawową. |
| T96 | 1 | III / R7 | LITERATURA | Ballada / rytm utworu / szczęście. | s. 210 | wers · strofa · rym · rytm · ballada | Uczeń potrafi sprawdzić, czy wiersz jest rytmiczny. |
| T97 | 1 | III / R7 | LITERATURA | Ballada / rytm utworu / szczęście. | s. 210 | wers · strofa · rym · rytm · ballada | Uczeń potrafi sprawdzić, czy wiersz jest rytmiczny. |
| T98 | 1 | III / R7 | LEKTURY | Molnár, Chłopcy z Placu Broni — miejsce, fragment. | s. 212 | opis-miejsca · lektura-wrazenia · narracja | Uczeń potrafi opisać Plac Broni i zrelacjonować fragment. |
| T99 | 1 | III / R7 | LEKTURY | Molnár, Chłopcy z Placu Broni — miejsce, fragment. | s. 212 | opis-miejsca · lektura-wrazenia · narracja | Uczeń potrafi opisać Plac Broni i zrelacjonować fragment. |
| T100 | 1 | III / R7 | LITERATURA | Staff, Czucie niewinne. | s. 216 | podmiot-liryczny · nastroj · sytuacja-liryczna | Uczeń potrafi nazwać podmiot i uczucia, wskazując fragment. |
| T101 | 1 | III / R7 | LITERATURA | Baśń / źródło (woda). | s. 218 | basn · moral · cechy-gatunkowe | Uczeń potrafi wskazać przesłanie i cechy gatunku w tym utworze. |
| T102 | 1 | III / R7 | LITERATURA | Baśń / źródło (woda). | s. 218 | basn · moral · cechy-gatunkowe | Uczeń potrafi wskazać przesłanie i cechy gatunku w tym utworze. |
| T103 | 1 | III / R7 | ORTOGRAFIA | Król Salomon… rz, ż, ch, h. | s. 221 | ort-rz-z-ch-h | Uczeń potrafi stosować rozszerzone reguły pisowni. |
| T104 | 1 | III / R7 | ORTOGRAFIA | Król Salomon… rz, ż, ch, h. | s. 221 | ort-rz-z-ch-h | Uczeń potrafi stosować rozszerzone reguły pisowni. |
| T105 | 1 | III / R7 | LITERATURA | Jaki utwór nazywamy bajką? | s. 223 | bajka · uosobienie · moral · recytacja | Uczeń potrafi podać cechy bajki, morał i wyrecytować utwór. |
| T106 | 1 | III / R7 | LITERATURA | Jaki utwór nazywamy bajką? | s. 223 | bajka · uosobienie · moral · recytacja | Uczeń potrafi podać cechy bajki, morał i wyrecytować utwór. |
| T107 | 1 | III / R8 | GRAMATYKA | Zdanie pojedyncze rozwinięte / nierozwinięte. | s. 227 | podmiot · orzeczenie · zdanie-rozwiniete | Uczeń potrafi znaleźć orzeczenie i podmiot oraz rozróżnić zdanie rozwinięte. |
| T108 | 1 | III / R8 | GRAMATYKA | Zdanie pojedyncze rozwinięte / nierozwinięte. | s. 227 | podmiot · orzeczenie · zdanie-rozwiniete | Uczeń potrafi znaleźć orzeczenie i podmiot oraz rozróżnić zdanie rozwinięte. |
| T109 | 1 | III / R8 | LITERATURA | Niepełnosprawna Ola. | s. 229 | charakterystyka · wartosci | Uczeń potrafi ocenić postawy wobec Oli. |
| T110 | 1 | III / R8 | LITERATURA | Kołysanka (Osiecka / Krajewski). | s. 236 | nadawca-odbiorca · zdrobnienie · nastroj | Uczeń potrafi wskazać zdrobnienia i relację nadawca–odbiorca. |
| T111 | 1 | III / R8 | GRAMATYKA | Związki wyrazowe. | s. 238 | zwiazki-wyrazowe · nadrzedny-podrzedny · szereg | Uczeń potrafi zadać pytanie od wyrazu nadrzędnego i nazwać związek. |
| T112 | 1 | III / R8 | LITERATURA | Pan Tadeusz — tradycje i obyczaje. | s. 241 | wers-strofa-rym-rytm · srodki-stylistyczne · obyczaj | Uczeń potrafi mówić o tekście terminami liryki i wymienić obyczaje. |
| T113 | 1 | III / R8 | PISANIE | Instrukcja (Kupcio). | s. 244 | instrukcja · motto | Uczeń zna budowę instrukcji i potrafi ją napisać (tekst / rysunek). |
| T114 | 1 | III / R8 | PISANIE | Instrukcja (Kupcio). | s. 244 | instrukcja · motto | Uczeń zna budowę instrukcji i potrafi ją napisać (tekst / rysunek). |
| T115 | 1 | III / R8 | PISANIE | Kassjanowicz, 30 znikających trampolin; scenariusz. | s. 250 | scenariusz · aspekt · adaptacja | Uczeń potrafi napisać fragment scenariusza i przygotować inscenizację. |
| T116 | 1 | III / R8 | PISANIE | Kassjanowicz, 30 znikających trampolin; scenariusz. | s. 250 | scenariusz · aspekt · adaptacja | Uczeń potrafi napisać fragment scenariusza i przygotować inscenizację. |
| T117 | 1 | III / R8 | GRAMATYKA | Grupa podmiotu i orzeczenia. | s. 255 | grupa-podmiotu · grupa-orzeczenia · zwiazek-glowny | Uczeń potrafi oddzielić grupy oraz odróżnić związek główny od pobocznego. |
| T118 | 1 | III / R8 | PISANIE | Zdrowe odżywianie / przepisy. | s. 257 | przepis · instrukcja · czytanie-ze-zrozumieniem | Uczeń potrafi zredagować przepis jako formę bliską instrukcji. |
| T119 | 1 | III / R8 | PISANIE | Zdrowe odżywianie / przepisy. | s. 257 | przepis · instrukcja · czytanie-ze-zrozumieniem | Uczeń potrafi zredagować przepis jako formę bliską instrukcji. |
| T120 | 1 | III / R8 | GRAMATYKA | Wykres zdania pojedynczego. | s. 259 | wykres-zdania · czesci-zdania | Uczeń potrafi narysować krótki wykres i nazwać podmiot, orzeczenie oraz określenia. |
| T121 | 1 | III / R8 | PISANIE | Streszczenie. | s. 262 | streszczenie · plan-wydarzen | Uczeń potrafi wybrać najważniejszą informację i streścić tekst bez zbędnych szczegółów. |
| T122 | 1 | III / R8 | PISANIE | Streszczenie. | s. 262 | streszczenie · plan-wydarzen | Uczeń potrafi wybrać najważniejszą informację i streścić tekst bez zbędnych szczegółów. |
| T123 | 1 | III / R9 | PISANIE | W roli dziennikarzy. | s. 266 | fakt-opinia · artykul · etyka-jezykowa | Uczeń potrafi odróżnić informację od komentarza. |
| T124 | 1 | III / R9 | LITERATURA | Mit o Syzyfie; sąd; relacja. | s. 268 | mit · charakterystyka · relacja · frazeologia | Uczeń potrafi opowiedzieć mit oraz zredagować artykuł/relację z „rozprawy”. |
| T125 | 1 | III / R9 | LITERATURA | Mit o Syzyfie; sąd; relacja. | s. 268 | mit · charakterystyka · relacja · frazeologia | Uczeń potrafi opowiedzieć mit oraz zredagować artykuł/relację z „rozprawy”. |
| T126 | 1 | III / R9 | LITERATURA | Mit o Syzyfie; sąd; relacja. | s. 268 | mit · charakterystyka · relacja · frazeologia | Uczeń potrafi opowiedzieć mit oraz zredagować artykuł/relację z „rozprawy”. |
| T127 | 1 | III / R9 | GRAMATYKA | Przydawka. | s. 272 | przydawka | Uczeń potrafi zadać pytania przydawki oraz użyć przydawki na wykresie i w opisie. |
| T128 | 1 | III / R9 | LITERATURA | Puszka Pandory. | s. 274 | mit · prometeusz-kontynuacja · frazeologia | Uczeń potrafi opowiedzieć treść mitu i związek z Prometeuszem. |
| T129 | 1 | III / R9 | LITERATURA | Jeśli zdarzenia ułożą się inaczej… | s. 277 | swiat-przedstawiony · empatia-tekst | Uczeń potrafi zrelacjonować tekst i nazwać potrzeby w trudnej sytuacji. |
| T130 | 1 | III / R9 | PISANIE | Juniper Berry / samotność. | s. 281 | charakterystyka · list · fabula-vs-akcja | Uczeń potrafi napisać list w imieniu bohaterki. |
| T131 | 1 | III / R9 | LITERATURA | Ulica Pachnących Bzów. | s. 285 | metafora · przyczyna-skutek · opowiadanie | Uczeń potrafi wskazać funkcję metafory i zaproponować zakończenie twórcze. |
| T132 | 1 | III / R9 | CZYTANIE | Świat wirtualny; tekst literacki vs informacyjny. | s. 287 | tekst-literacki-vs-informacyjny · czytanie-ze-zrozumieniem | Uczeń potrafi porównać dwa teksty i wskazać cechy użytkowe oraz literackie. |
| T133 | 1 | III / R9 | CZYTANIE | Świat wirtualny; tekst literacki vs informacyjny. | s. 287 | tekst-literacki-vs-informacyjny · czytanie-ze-zrozumieniem | Uczeń potrafi porównać dwa teksty i wskazać cechy użytkowe oraz literackie. |
| T134 | 1 | III / R9 | GRAMATYKA | Okolicznik i dopełnienie. | s. 291 | dopelnienie · okolicznik | Uczeń potrafi zadać pytania o dopełnienie i okolicznik oraz uzupełnić wykres i instrukcję. |
| T135 | 1 | III / R9 | GRAMATYKA | Okolicznik i dopełnienie. | s. 291 | dopelnienie · okolicznik | Uczeń potrafi zadać pytania o dopełnienie i okolicznik oraz uzupełnić wykres i instrukcję. |
| T136 | 1 | III / R9 | KULTURA_MEDIA | Plakat społeczny. | s. 294 | plakat · perswazja | Uczeń potrafi odczytać hasło i przewidzieć skutek „wykreślenia słowa”. |
| T137 | 1 | III / R9 | LITERATURA | Jak uniknąć piekła na ziemi? | s. 295 | frazeologia · interpretacja | Uczeń potrafi wyjaśnić związki niebo/piekło i ocenić pomysły bohaterów. |
| T138 | 1 | III / R9 | LITERATURA | Jak uniknąć piekła na ziemi? | s. 295 | frazeologia · interpretacja | Uczeń potrafi wyjaśnić związki niebo/piekło i ocenić pomysły bohaterów. |
| T139 | 1 | III / R9 | PISANIE | Tolerancja; dialog. | s. 300 | dialog · argument | Uczeń potrafi napisać dialog perswazyjny o tolerancji. |
| T140 | 1 | III / R9 | LEKTURY | Prus, Katarynka (nowela). | s. 303 | nowela · punkt-kulminacyjny · bohater · wartosci | Uczeń potrafi wskazać cechy noweli i punkt kulminacyjny. |
| T141 | 1 | III / R9 | LEKTURY | Prus, Katarynka (nowela). | s. 303 | nowela · punkt-kulminacyjny · bohater · wartosci | Uczeń potrafi wskazać cechy noweli i punkt kulminacyjny. |
| T142 | 1 | III / R9 | LEKTURY | Przypowieść o miłosiernym Samarytaninie. | s. 316 | przypowiesc · wartosci | Uczeń potrafi sformułować naukę przypowieści (bliźni / miłosierdzie). |
| T143 | 1 | III / R9 | KULTURA_MEDIA | Plakaty społeczne. | s. 318 | plakat · adresat | Uczeń potrafi określić cel i adresata oraz zaprojektować własny plakat. |
| T144 | 1 | III / R9 | KULTURA_MEDIA | Na wystawie (rzeźba / Prometeusz). | s. 319 | opis-dziela · relacja | Uczeń potrafi opisać rzeźbę i zredagować relację z wystawy. |
| T145 | 1 | III / R9 | NEUTRAL | Jesteśmy ekspertami od mitów. | s. 321 | mit · frazeologia-mitologiczna | Uczeń potrafi łączyć mity, cechy gatunku i związki frazeologiczne. |
| T146 | 1 | III / R9 | NEUTRAL | Jesteśmy ekspertami od mitów. | s. 321 | mit · frazeologia-mitologiczna | Uczeń potrafi łączyć mity, cechy gatunku i związki frazeologiczne. |
| T147 | 1 | III / R9 | NEUTRAL | Sprawdzę się! Dedal i Ikar. | s. 325 | fakt-opinia · wykres-zdania · mit | Uczeń potrafi korzystać z faktu i opinii, wykresu oraz mitu w zakresie powtórki działu III. |
| T148 | 1 | III / R9 | NEUTRAL | Sprawdzę się! Dedal i Ikar. | s. 325 | fakt-opinia · wykres-zdania · mit | Uczeń potrafi korzystać z faktu i opinii, wykresu oraz mitu w zakresie powtórki działu III. |
| T149 | 1 | IV / R10 | KULTURA_MEDIA | Teatr, kino, muzeum — zasady. | s. 328 | kultura-zycia · sytuacja-komunikacyjna | Uczeń zna zasady zachowania i potrafi wypowiedzieć się o wydarzeniu. |
| T150 | 1 | IV / R10 | LITERATURA | Herbert, Pudełko zwane wyobraźnią. | s. 330 | obraz-poetycki · interpretacja-wiersza · recytacja | Uczeń potrafi wyjaśnić tytuł i wyrecytować wiersz. |
| T151 | 1 | IV / R10 | KULTURA_MEDIA | Słuchowisko (Rodari). | s. 332 | sluchowisko · interpretacja-glosowa | Uczeń potrafi nazwać cechy słuchowiska i czytać rolami. |
| T152 | 1 | IV / R10 | KULTURA_MEDIA | Słuchowisko (Rodari). | s. 332 | sluchowisko · interpretacja-glosowa | Uczeń potrafi nazwać cechy słuchowiska i czytać rolami. |
| T153 | 1 | IV / R10 | PISANIE | Scenariusz przedstawienia; zaproszenie. | s. 336 | scenariusz · zaproszenie · swiat-przedstawiony | Uczeń potrafi ułożyć plan scen i napisać zaproszenie na przedstawienie. |
| T154 | 1 | IV / R10 | PISANIE | Scenariusz przedstawienia; zaproszenie. | s. 336 | scenariusz · zaproszenie · swiat-przedstawiony | Uczeń potrafi ułożyć plan scen i napisać zaproszenie na przedstawienie. |
| T155 | 1 | IV / R10 | GRAMATYKA | Rodzaje głosek. | s. 339 | gloska-litera · gloski-rodzaje | Uczeń potrafi klasyfikować głoski (dźwięczne/bezdźwięczne, ustne/nosowe, twarde/miękkie). |
| T156 | 1 | IV / R11 | KULTURA_MEDIA | Z wizytą w teatrze. | s. 342 | teatr · afisz · spektakl-elementy | Uczeń potrafi nazwać elementy spektaklu i odczytać afisz. |
| T157 | 1 | IV / R11 | GRAMATYKA | Akcent; staranna wymowa. | s. 345 | akcent · jezyk-mowiony-pisany | Uczeń potrafi postawić akcent paroksytoniczny i zna wyjątki ze słownika. |
| T158 | 1 | IV / R11 | KULTURA_MEDIA | Jak powstaje film? | s. 349 | film · plan-filmowy | Uczeń potrafi podać etapy powstawania filmu i różnicę teatr / film. |
| T159 | 1 | IV / R11 | PISANIE | Wywiad. | s. 352 | wywiad · pytania | Uczeń zna budowę wywiadu, formułuje pytania i zapisuje odpowiedź. |
| T160 | 1 | IV / R11 | LITERATURA | Poetycka opowieść o muzyce. | s. 357 | srodki-stylistyczne · ozywienie | Uczeń potrafi rozpoznać już znane środki stylistyczne w nowych wierszach. |
| T161 | 1 | IV / R11 | PISANIE | Ogłoszenie. | s. 360 | ogloszenie | Uczeń zna niezbędne elementy ogłoszenia i potrafi uzupełnić braki. |
| T162 | 1 | IV / R11 | PISANIE | Ogłoszenie. | s. 360 | ogloszenie | Uczeń zna niezbędne elementy ogłoszenia i potrafi uzupełnić braki. |
| T163 | 1 | IV / R11 | KULTURA_MEDIA | Zapraszamy do świata sztuki. | s. 362 | dziedziny-sztuki · uzasadnienie | Uczeń potrafi wybrać dziedzinę sztuki i uzasadnić wybór. |
| T164 | 1 | IV / R11 | LITERATURA | Neologizmy (Kulmowa). | s. 363 | neologizm · interpretacja-wiersza | Uczeń wie, czym jest neologizm, i potrafi wyjaśnić „słowa walizki”. |
| T165 | 1 | IV / R11 | LITERATURA | Neologizmy (Kulmowa). | s. 363 | neologizm · interpretacja-wiersza | Uczeń wie, czym jest neologizm, i potrafi wyjaśnić „słowa walizki”. |
| T166 | 1 | IV / R11 | KULTURA_MEDIA | Chopin. | s. 367 | notatka-biograficzna · os-czasu | Uczeń potrafi ułożyć fakty z życia na osi czasu. |
| T167 | 1 | IV / R11 | ORTOGRAFIA | Cytat. | s. 370 | cytat · cudzyslow | Uczeń potrafi zapisać cytat i wie, kiedy użyć cudzysłowu. |
| T168 | 1 | IV / R11 | KULTURA_MEDIA | Muzeum / ekspozycje. | s. 372 | muzeum · uzasadnienie | Uczeń potrafi rozróżnić rodzaje ekspozycji i uzasadnić wybór muzeum. |
| T169 | 1 | IV / R11 | KULTURA_MEDIA | Burmistrz i ogród rzeźb — adaptacja. | s. 374 | adaptacja · scenariusz | Uczeń potrafi zaadaptować utwór (scena / komiks / drama). |
| T170 | 1 | IV / R11 | KULTURA_MEDIA | Burmistrz i ogród rzeźb — adaptacja. | s. 374 | adaptacja · scenariusz | Uczeń potrafi zaadaptować utwór (scena / komiks / drama). |
| T171 | 1 | IV / R11 | KULTURA_MEDIA | Burmistrz i ogród rzeźb — adaptacja. | s. 374 | adaptacja · scenariusz | Uczeń potrafi zaadaptować utwór (scena / komiks / drama). |
| T172 | 1 | IV / R11 | KULTURA_MEDIA | Zrozumieć artystę i jego dzieło. | s. 376 | realistyczne-fantastyczne · komiks · opis-dziela | Uczeń potrafi połączyć obraz i komiks; nie zmyśla. |
| T173 | 1 | IV / R11 | CZYTANIE | Dziewit-Meller, Architektki Warszawy. | s. 380 | opis-dziela · czytanie-ze-zrozumieniem | Uczeń potrafi opisać budowlę i znaleźć informacje o jej twórcach. |
| T174 | 1 | IV / R11 | NEUTRAL | To już wiemy i potrafimy! | s. 383 | wypowiedzenia · cytat · ortografia-nie · czesci-mowy · komizm | — |
| T175 | 1 | IV / R11 | NEUTRAL | To już wiemy i potrafimy! | s. 383 | wypowiedzenia · cytat · ortografia-nie · czesci-mowy · komizm | — |
| T176 | 1 | IV / R11 | NEUTRAL | Sprawdzę się! | s. 386 | narrator · argument · zwiazki-wyrazowe · wykres-zdania · przypadki · dyktando | Uczeń potrafi samodzielnie użyć arsenału języka polskiego klasy 5. |
| T177 | 1 | IV / R11 | NEUTRAL | Sprawdzę się! | s. 386 | narrator · argument · zwiazki-wyrazowe · wykres-zdania · przypadki · dyktando | Uczeń potrafi samodzielnie użyć arsenału języka polskiego klasy 5. |

## 3.5. Sprawdziany GWO (poza numeracją T)

GWO po każdym rozdziale przewiduje **sprawdzian 1 i 2**. To nie są tematy T1–T177. Nie wstawiamy ich do numeracji T.

| ID | Rozdział | Co jest w źródle |
|---|---|---|
| R1-V | R1 Zachwycający kosmos | powtórzenie rozdziału; sprawdziany GWO 1 i 2; skills w źródle: komunikacja, apostrofa, podmiot, ort-wymiana, czytanie, komiks, budowa wiersza |
| R2-V | R2 Odpowiedzi na ważne pytania | REVIEW rozdziału 2 |
| R3-V | R3 W zwykły i niezwykły sposób o zjawiskach | sprawdziany GWO rozdz. 3 |
| R4-V | R4 Podjąć wyzwanie | REVIEW rozdz. 4 |
| R5-V | R5 W drodze do celu | REVIEW rozdz. 5 |
| R6-V | R6 Ocalmy Ziemię! | sprawdziany rozdz. 6 |
| R7-V | R7 Ważne, ważniejsze, najważniejsze | REVIEW rozdz. 7 |
| R8-V | R8 Dzień jak co dzień | REVIEW rozdz. 8 |
| R9-V | R9 Gdy świat staje na głowie | sprawdziany rozdz. 9 |
| R10-V | R10 Twórcy światów fikcyjnych | REVIEW rozdz. 10 |
| R11-V | R11 Zapraszamy do świata sztuki | sprawdziany rozdz. 11 |

Temat lekcji / strona / Po lekcji dla sprawdzianów: **—** (źródło nie podaje osobnego tematu podręcznika).

Cykle lektur poza T (`L-SIENKIEWICZ-*`, `L-CHLOPCY-*`, `L-KATARYNKA-*`) pozostają w §7. Wejście do cyklu w podręczniku to T62, T98–T99, T140–T141.

---

## 3.6. Mapa wewnętrzna U001–U121 → T (nie do karty lekcji)

| U | T | category |
|---|---|---|
| U001 | T1 | CZYTANIE |
| U002 | T2 | LITERATURA |
| U003 | T3 | KULTURA_MEDIA |
| U004 | T4 | CZYTANIE |
| U005 | T5 | ORTOGRAFIA |
| U006 | T6 | LITERATURA |
| U007 | T7–T8 | ORTOGRAFIA |
| U008 | T9 | CZYTANIE |
| U009 | T10–T11 | LITERATURA |
| U010 | T12–T13 | KULTURA_MEDIA |
| U011 | T14 | LITERATURA |
| U012 | T15 | LEKTURY |
| U013 | T16 | KULTURA_MEDIA |
| U014 | T17–T18 | LITERATURA |
| U015 | T19–T20 | LITERATURA |
| U016 | T21 | LITERATURA |
| U017 | T22–T23 | GRAMATYKA |
| U018 | T24–T25 | PISANIE |
| U019 | T26 | CZYTANIE |
| U020 | T27–T28 | KULTURA_MEDIA |
| U021 | T29–T31 | GRAMATYKA |
| U022 | T32–T33 | LITERATURA |
| U023 | T34–T35 | KULTURA_MEDIA |
| U024 | T36–T37 | GRAMATYKA |
| U025 | T38 | LITERATURA |
| U026 | T39 | KULTURA_MEDIA |
| U027 | T40–T41 | LITERATURA |
| U028 | T42–T43 | GRAMATYKA |
| U029 | T44 | PISANIE |
| U030 | T45–T46 | ORTOGRAFIA |
| U031 | T47–T48 | LITERATURA |
| U032 | T49–T50 | NEUTRAL |
| U033 | T51 | CZYTANIE |
| U034 | T52 | LITERATURA |
| U035 | T53–T55 | GRAMATYKA |
| U036 | T56–T57 | LEKTURY |
| U037 | T58 | CZYTANIE |
| U038 | T59 | PISANIE |
| U039 | T60–T61 | GRAMATYKA |
| U040 | T62 | LEKTURY |
| U041 | T63–T64 | LITERATURA |
| U042 | T65–T66 | GRAMATYKA |
| U043 | T67 | CZYTANIE |
| U044 | T68 | LITERATURA |
| U045 | T69 | LITERATURA |
| U046 | T70 | CZYTANIE |
| U047 | T71–T72 | LITERATURA |
| U048 | T73 | GRAMATYKA |
| U049 | T74 | PISANIE |
| U050 | T75–T76 | PISANIE |
| U051 | T77–T78 | GRAMATYKA |
| U052 | T79 | LITERATURA |
| U053 | T80 | KULTURA_MEDIA |
| U054 | T81 | GRAMATYKA |
| U055 | T82 | LITERATURA |
| U056 | T83 | GRAMATYKA |
| U057 | T84 | PISANIE |
| U058 | T85 | GRAMATYKA |
| U059 | T86 | KULTURA_MEDIA |
| U060 | T87 | GRAMATYKA |
| U061 | T88–T89 | NEUTRAL |
| U062 | T90 | CZYTANIE |
| U063 | T91–T92 | LITERATURA |
| U064 | T93–T94 | KULTURA_MEDIA |
| U065 | T95 | GRAMATYKA |
| U066 | T96–T97 | LITERATURA |
| U067 | T98–T99 | LEKTURY |
| U068 | T100 | LITERATURA |
| U069 | T101–T102 | LITERATURA |
| U070 | T103–T104 | ORTOGRAFIA |
| U071 | T105–T106 | LITERATURA |
| U072 | T107–T108 | GRAMATYKA |
| U073 | T109 | LITERATURA |
| U074 | T110 | LITERATURA |
| U075 | T111 | GRAMATYKA |
| U076 | T112 | LITERATURA |
| U077 | T113–T114 | PISANIE |
| U078 | T115–T116 | PISANIE |
| U079 | T117 | GRAMATYKA |
| U080 | T118–T119 | PISANIE |
| U081 | T120 | GRAMATYKA |
| U082 | T121–T122 | PISANIE |
| U083 | T123 | PISANIE |
| U084 | T124–T126 | LITERATURA |
| U085 | T127 | GRAMATYKA |
| U086 | T128 | LITERATURA |
| U087 | T129 | LITERATURA |
| U088 | T130 | PISANIE |
| U089 | T131 | LITERATURA |
| U090 | T132–T133 | CZYTANIE |
| U091 | T134–T135 | GRAMATYKA |
| U092 | T136 | KULTURA_MEDIA |
| U093 | T137–T138 | LITERATURA |
| U094 | T139 | PISANIE |
| U095 | T140–T141 | LEKTURY |
| U096 | T142 | LEKTURY |
| U097 | T143 | KULTURA_MEDIA |
| U098 | T144 | KULTURA_MEDIA |
| U099 | T145–T146 | NEUTRAL |
| U100 | T147–T148 | NEUTRAL |
| U101 | T149 | KULTURA_MEDIA |
| U102 | T150 | LITERATURA |
| U103 | T151–T152 | KULTURA_MEDIA |
| U104 | T153–T154 | PISANIE |
| U105 | T155 | GRAMATYKA |
| U106 | T156 | KULTURA_MEDIA |
| U107 | T157 | GRAMATYKA |
| U108 | T158 | KULTURA_MEDIA |
| U109 | T159 | PISANIE |
| U110 | T160 | LITERATURA |
| U111 | T161–T162 | PISANIE |
| U112 | T163 | KULTURA_MEDIA |
| U113 | T164–T165 | LITERATURA |
| U114 | T166 | KULTURA_MEDIA |
| U115 | T167 | ORTOGRAFIA |
| U116 | T168 | KULTURA_MEDIA |
| U117 | T169–T171 | KULTURA_MEDIA |
| U118 | T172 | KULTURA_MEDIA |
| U119 | T173 | CZYTANIE |
| U120 | T174–T175 | NEUTRAL |
| U121 | T176–T177 | NEUTRAL |

## 7. Lektury — cykle (nie pojedyncze lekcje)

GWO na końcu kryteriów podaje lektury uwzględnione w rozkładzie. W podręczniku część to **fragmenty**. EduMost projektuje **cykl**, tempo czytania = szkoła.

| Cykl | Status PP / GWO | Wejście w mapie | Architektura |
|---|---|---|---|
| Biblia (Księga Rodzaju, przypowieści) | lektura obowiązkowa (fragmenty) | U012, U013, U096 | wprowadzenie świętego tekstu → etapy → obraz → przypowieść |
| Mity greckie | obowiązkowe mity | U011, U015, U016, U020, U041, U047, U084, U086, U099, U100 | nie jedna lekcja „mit”; spirala gatunku |
| Sienkiewicz *W pustyni i w puszczy* | PP | U040 + `L-SIENKIEWICZ-*` | narrator, bohaterowie, miejsce, przygoda, wartości |
| Molnár *Chłopcy z Placu Broni* | PP | U067 + `L-CHLOPCY-*` | miejsce, relacje, konflikt, wartości, język |
| Prus *Katarynka* | PP | U095 + `L-KATARYNKA-*` | nowela, kulminacja, przedmiot, miłosierdzie |
| Mickiewicz *Pan Tadeusz* | fragmenty | U031, U076 | obrazy, środki, obyczaj — nie „cały poemat” |
| Verne *W 80 dni…* | w rozkładzie / fragment Fogg | U036 + opcjonalny cykl uzup. | mapa, gatunek podróżniczy |
| Hawking, Fritsche, Kassjanowicz, Beręsewicz, Mull *Baśniobór* | uzup. / fragmenty | U008, U049, U078, U038, aneks GWO | krótsze cykle gdy szkoła czyta |

Szablon cyklu — `POLSKI_LESSON_ARCHITECTURE.md` §4.7. Nie pisać contentu.

---

## 8. Wiersze — która siatka przy którym tekście

| Tekst | Unit | 2 kto | 4 sytuacja | 6–8 budowa | 9 rytm | 10–11 środki | 12 nastrój | 14 interpretacja |
|---|---|---|---|---|---|---|---|---|
| *Preludium* | U002 | tak | tak | nie (jeszcze) | nie | apostrofa | tak | krótka |
| *Noc* | U006 | podmiot vs autor | tak | nie | nie | — | tak | tak |
| Miłosz | U009 | tak | obrazy | **tak** | nieobowiązkowy | znane | — | morał/symbol |
| Twardowski | U014 | adresat | — | wg potrzeby | — | przenośnia | — | **tak** |
| Tuwim *Wiatry* | U022 | bohaterowie | obrazy | — | — | **I.1.4 pełne** | — | przesłanie |
| Ratajczak | U025 | — | obrazy | — | — | ożywienie | — | tak |
| *Deszczyk* | U027 | rola deszczu | tak | — | — | epitet, porównanie, uosobienie+funkcja | — | tak |
| *Pan Tadeusz* burza | U031 | — | zmysły | P | — | środki | — | przebieg |
| Beszczyńska | U044 | osoba | — | **tak** | **tak** | — | — | temat podróży |
| Marjańska | U045 | — | obrazy | zwrotka | — | — | — | tytuł |
| Kulmowa droga | U052 | typ podmiotu | — | terminologia | — | — | — | **tak** |
| *Zieleń* | U055 | — | obrazy | — | — | porównanie | **tak** | frazeologia |
| ballada s. 210 | U066 | bohaterowie | — | **tak** | **tak** | — | — | szczęście |
| Staff | U068 | **tak** | **tak** | — | — | — | **tak** | uczucia |
| Kołysanka | U074 | nadawca/odbiorca | — | — | tempo | zdrobnienie | tak | — |
| *Pan Tadeusz* obyczaj | U076 | — | — | **R** | R | R | — | obyczaj |
| Herbert | U102 | — | wyobraźnia | — | — | obrazy | — | tytuł |
| poezja o muzyce | U110 | — | — | — | — | **V** | — | — |
| Kulmowa neologizmy | U113 | — | — | — | — | neologizm | — | słowa walizki |

---

## 9. Gramatyka jako system (wynik GWO + PP IV–VI)

Kolejność **wprowadzania** = kolejność roku, nie lista alfabetyczna.

| Skill | I | P | R/T | V |
|---|---|---|---|---|
| rzeczownik + podział | U017 | U018 | U021 | U061, U121 |
| przypadki, liczba, rodzaj, temat/końcówka | U021 | list, przyimek | U121 | T176 |
| *nie* z rzeczownikiem | U021 | — | U061 | U120 |
| przymiotnik + zgoda | U024 | epitet U022/U027 | U085 | — |
| stopniowanie przymiotnika | U028 | opis | — | — |
| *nie* z przymiotnikiem | U028 | — | U061 | — |
| liczebnik | U035 | — | U061 | — |
| czasownik, osoba, czas, -no/-to | U039 | U040 narracja | U042 | — |
| *nie* z czasownikiem | U039 | — | U061 | U120 |
| tryb + *by* | U042 | U052 | — | — |
| aspekt | U048 | U078 | — | U061 |
| przysłówek + stopniowanie + *nie* | U051 | U091 | — | — |
| zaimek + odmiana | U054, U056 | — | — | — |
| przyimek | U058 | U091 | — | — |
| wykrzyknik, partykuła | U060 | — | — | — |
| wypowiedzenie, zdanie, równoważnik | U065 | U072 | U120 | U121 |
| podmiot, orzeczenie, zdanie rozwin. | U072 | U079 | U081 | U121 |
| związki wyrazowe | U075 | U079 | — | — |
| grupa podmiotu/orzeczenia | U079 | U081 | — | — |
| wykres zdania | U081 | U085, U091 | U100 | U121 |
| przydawka | U085 | opis | — | — |
| dopełnienie, okolicznik | U091 | instrukcja | U100 | — |
| głoska / akcent | U105, U107 | wymowa | — | — |
| spójnik | w transformacjach U065/U100 | nie osobny T w kryteriach 5 | — | PP II.1.1 |

PP II.1.5 strona bierna: w tym rozkładzie klasy 5 **nie ma osobnego tematu**. Nie dodawać jako jednostka roku 5, chyba że plan szkoły. Zostaje w PP IV–VI na później.

Drabina GRAMMAR: pojęcie → rozpoznanie → rozróżnienie → zastosowanie → transformacja → tekst → wypowiedź → powtórzenie.

---

## 10. Ortografia i interpunkcja

| Blok | Unit | Reguła | Ćwiczyć | Błędy typowe |
|---|---|---|---|---|
| wymiana ó rz ż ch | U005 | rodzina wyrazów | wyrazy z s. 16 | „zawsze ó” |
| rz niewymienne | U007 | brak wymiany / pozycja | s. 20, Rzeszów… | mieszanie z wymiennym |
| zakończenia | U030 | końcówki z ó/u/rz/ż/ch | s. 85 | końcówki „na ucho” |
| *nie* z rzeczownikiem | U021 | łączna/rozdzielna wg GWO | s. 60 | *nie* jak w UA |
| *nie* z przymiotnikiem | U028 | stopnie | s. 78 | *nienaj…* |
| *nie* z liczebnikiem | U035 | wyjątki | s. 97 | |
| *nie* z czasownikiem | U039 | zawsze rozdzielnie (osobowe) | s. 114 | łączna na wzór UA |
| *nie* z przysłówkiem | U051 | | s. 167 | |
| cząstka *by* | U042 | -bym -byś -by | s. 131 | łączna ze wszystkim |
| rz ż ch h (Salomon) | U070 | rozszerzenie | s. 221 | h/ch |
| cytat, cudzysłów | U115 | II.4.2 | s. 370 | brak cudzysłowu |
| interpunkcja wypowiedzeń | U065, U100 | . ? ! | dialog, komiks | |
| przecinek w zdaniach | U100, U121 | w zakresie 5 kl. | wykresy | przecinek „oddechowy” |

Każdy blok ORT: reguła → przykład → rozpoznanie → zastosowanie → wyjątek → mini-kontrola → spirala V.

---

## 11. Formy wypowiedzi

| Forma | I | P/T | Checklista w jednostce |
|---|---|---|---|
| opis (zdjęcie, burza, miejsce) | U003 | U018, U067 | kolejność, słownictwo zmysłów |
| opis dzieła | U026 | U098, U119 | temat, plan, barwy, nastrój, bez zmyśleń |
| opowiadanie (+ dialog) | U008, U049 | U089 | plan, czas, dialog |
| dialog | U049, U094 | teatr | kwestie, myślniki |
| list | U018 | U088 | adresat, ja, cel |
| list oficjalny | U057 | — | nagłówek, zwrot, sprawa, forma |
| dziennik | U036, U043 | — | data, 1. os. |
| pamiętnik | U038 | U061 | przeżycie, dystans czasu |
| relacja / sprawozdanie | U029, U043, U084 | — | następstwo czasu, fakty |
| notatka | U004 | U046, U114 | temat + 2–3 info |
| streszczenie | U082 | lektury | bez szczegółu, kolejność |
| instrukcja / przepis | U077, U080 | U091 | kroki, tryb |
| zaproszenie | U104 | — | kto, kogo, co, kiedy, gdzie |
| ogłoszenie | U111 | — | niezbędne elementy |
| wywiad | U109 | — | pytania, zapis |
| artykuł / komentarz | U083 | — | fakt vs opinia |
| oferta / perswazja | U050 | — | adresat, korzyść |
| recytacja | U022, U071, U102 | SPEAKING | głośno, nie quiz |
| scenariusz | U078, U104, U117 | — | didaskalia, dialog |
| plakat | U053, U092, U097 | — | hasło, adresat, obraz |

Szkielet FORM: CO TO JEST → BUDOWA → MODEL → ELEMENTY → PLAN → WŁASNY TEKST → CHECKLISTA.

---

## 12. Drzewo roku (jedna mapa)

```
I DZIWNY TEN ŚWIAT
  R1 Kosmos
    U001 komunikacja s.8
    U002 Preludium + apostrofa s.10
    U003 zdjęcia s.12
    U004 czytanie s.14
    U005 ort. wymiana s.16
    U006 podmiot Noc s.18
    U007 rz niewym. s.20
    U008 Hawking s.23
    U009 Miłosz + wers/strofa/rym s.26
    U010 komiks s.28
    R1-V
  R2 Odpowiedzi
    U011 mit początku s.31
    U012 Biblia s.34
    U013 ikonografia s.36
    U014 Twardowski s.39
    U015 Demeter teatr s.40
    U016 Prometeusz s.45
    U017 rzeczownik s.50
    U018 opis+list s.53
    U019 słownik s.56
    U020 Helios komiks s.58
    U021 przypadki + nie s.60
    R2-V
  R3 Zjawiska
    U022 Tuwim środki+recytacja s.64
    U023 TV s.67
    U024 przymiotnik s.69
    U025 Ratajczak s.72
    U026 van Gogh s.74
    U027 Deszczyk epitet/funkcja s.76
    U028 stopniowanie s.78
    U029 gazeta s.81
    U030 ort. zakończenia s.85
    U031 Pan Tadeusz burza s.87
    U032 powtórzenie s.89
    R3-V

II GDZIE STOPY NASZE
  R4 Wyzwanie
    U033 informacja s.92 → U034 podmiot zbiorowy s.94
    U035 liczebnik s.97 → U036 Fogg/dziennik s.100
    U037 słownik s.107 → U038 pamiętnik s.109
    U039 czasownik s.114 → U040 Sienkiewicz narrator s.117
    U041 Herakles s.122 → U042 tryby s.131
    R4-V
  R5 Cel
    U043 Kamiński s.134 → U044 Beszczyńska budowa s.138 → U045 Marjańska s.140
    U046 Ceram notatka s.143 → U047 Odyseusz akcja/wątek s.148
    U048 aspekt s.158 → U049 Skarb Troi opowiadanie s.160 → U050 oferta s.166
    R5-V
  R6 Ziemia
    U051 przysłówek s.167 → U052 Kulmowa s.169 → U053 ekologia s.171
    U054 zaimek s.174 → U055 Zieleń s.176 → U056 odmiana zaimków s.179
    U057 list oficjalny s.181 → U058 przyimek s.183 → U059 plakat s.186
    U060 partykuła/wykrzyknik s.188 → U061 powtórzenie s.190
    R6-V

III ŚWIAT LUDZKICH SPRAW
  R7 Ważne…
    U062 plansza s.194 → U063 fabuła Loteria s.196 → U064 onomatopeja s.201
    U065 wypowiedzenia s.207 → U066 ballada rytm s.210
    U067 Chłopcy + cykl L s.212 → U068 Staff s.216
    U069 baśń s.218 → U070 ort. s.221 → U071 bajka s.223
    R7-V
  R8 Dzień…
    U072 zdanie pojedyncze s.227 → U073 Ola s.229 → U074 kołysanka s.236
    U075 związki s.238 → U076 Pan Tadeusz obyczaj s.241
    U077 instrukcja s.244 → U078 scenariusz s.250
    U079 grupy s.255 → U080 przepisy s.257 → U081 wykres s.259 → U082 streszczenie s.262
    R8-V
  R9 Gdy świat…
    U083 dziennikarz s.266 → U084 Syzyf s.268 → U085 przydawka s.272
    U086 Pandora s.274 → U087–U089 teksty s.277–285
    U090 lit. vs inform. s.287 → U091 okolicznik/dopełnienie s.291
    U092–U094 plakat / piekło / tolerancja s.294–300
    U095 Katarynka + cykl L s.303 → U096 Samarytanin s.316 → U097 plakat s.318
    U098 wystawa s.319 → U099 mity powtórka s.321 → U100 Sprawdzę się Dedal s.325
    R9-V

IV TWÓRCA I DZIEŁO
  R10
    U101 miejsca kultury s.328 → U102 Herbert s.330
    U103 słuchowisko s.332 → U104 scenariusz+zaproszenie s.336 → U105 głoski s.339
    R10-V
  R11
    U106 teatr s.342 → U107 akcent s.345 → U108 film s.349 → U109 wywiad s.352
    U110 środki V s.357 → U111 ogłoszenie s.360 → U112 sztuki s.362
    U113 neologizmy s.363 → U114 Chopin s.367 → U115 cytat s.370
    U116 muzeum s.372 → U117 adaptacja s.374 → U118 artysta s.376
    U119 architektki / opis s.380 → U120–U121 powtórzenia s.383–386
    R11-V
```

Suma: **U001–U121** = zgrupowane T1–T177 (godziny GWO zachowane w rekordach) + review rozdziałowe.

---

## 13. Progress i assessment (skrót)

Szczegóły: `POLSKI_LESSON_ARCHITECTURE.md` §5–10.

- Lekcja ukończona ≠ skill mastered.
- Rejestr `skillId`: introduced / practiced / mastered / needs_review.
- Assessment: lista skills + playlist + wynik per skill.
- Kartkówka szkolna = instancja, **nie priorytet implementacji**.

---

## 14. Porównanie z istniejącymi 50 (DOPIERO TERAZ)

Kierunek: **GWO UNIT → EduMost**, nie odwrotnie.

Istniejące 50 = **LEGACY**. Nie są pełnym kursem.

| GWO unit | EduMost ID | Decyzja |
|---|---|---|
| U001 s.8 | 01-sytuacja-komunikacyjna | REWRITE (baza dobra) |
| U002 s.10 | 02-apostrofa | SPLIT + REWRITE (brak apostrofy w content) |
| U003 s.12 | — | MISSING |
| U004 s.14 | 03-tekst-popularnonaukowy | REWRITE |
| U005 s.16 | 04-pisownia-wymienna | REWRITE |
| U006 s.18 | 05-podmiot-liryczny | REWRITE |
| U007 s.20 | 06-pisownia-rz-niewymienne | REWRITE |
| U008 s.23 | — | MISSING |
| U009 s.26/27 | 07-przypowiesc | SPLIT (gatunek vs budowa) |
| U010 s.28/29 | 08-komiks | REWRITE |
| U011 s.31/32 | 09-mit | REWRITE |
| U012 s.34/35 | 10-biblia-stworzenie | REWRITE; popraw tytuł TOC |
| U013 s.36 | — | MISSING |
| U014 s.39 Twardowski | — (11 zajął stronę) | MISSING + MOVE 11 |
| U015 s.40 Demeter | 11-demeter-i-kora | MOVE (strona) + REWRITE |
| U016 s.45 Prometeusz | 12-prometeusz | REWRITE; popraw tytuł TOC |
| U017 s.50/48 | 13-rzeczownik | REWRITE |
| U018 s.53 | 14 (częściowo) | MISSING jako opis+list; SPLIT 14 |
| U019 s.56 | 14-list-i-slownik | SPLIT |
| U020 s.58 | — | MISSING |
| U021 s.60/66 | 15-odmiana-rzeczownika | REWRITE |
| U022 s.64 Tuwim | 16 (zła strona) | MOVE + SPLIT |
| U023–U032 R3 (prawie cały) | tylko 16 na s.72 | MISSING masowo |
| U033 s.92/94 | 17 | REWRITE |
| U034 s.94 | — | MISSING |
| U035 s.97 | 18 | REWRITE |
| U036 s.100 | 19-dziennik | REWRITE etykiety / SPLIT od Verne |
| U037 s.107 | — | MISSING |
| U038 s.109 | 20 | REWRITE |
| U039 s.114 | 21 | SPLIT/REWRITE |
| U040 s.117 | 22 | REWRITE + cykl L |
| U041 s.122 | 23 | REWRITE |
| U042 s.131 | 24 | REWRITE |
| U043 s.134 | 25 | SPLIT |
| U044–U046 | — | MISSING |
| U047 s.148 | 26 | REWRITE (mit, nie gołe terminy) |
| U048 s.158 | 27 | REWRITE |
| U049 s.160 | 28 | REWRITE etykiety |
| U050 s.166 | — | MISSING |
| U051 s.167 | 29 | SPLIT od zaimka |
| U052–U053 | — | MISSING |
| U054–U056 zaimek | 29 | SPLIT |
| U057 s.181 | 30 | SPLIT od przyimka |
| U058 s.183 | 30 | SPLIT |
| U059–U061 | — | MISSING |
| U062 s.194 | 31 | REWRITE |
| U063 s.196 | 32 | MERGE z terminami U047, REWRITE na tekście |
| U064–U066 | 33 tylko wypowiedzenia | MISSING ballada/onomatopeja |
| U067 s.212 | 34 | REWRITE + cykl L |
| U068 | — | MISSING |
| U069–U071 bajka/baśń/ort. | 35 | SPLIT/REWRITE |
| U072 s.227 | 36 | REWRITE |
| U073–U074 | — | MISSING |
| U075 s.238 | 37 | REWRITE |
| U076 s.241 | 38 | REWRITE |
| U077 s.244 | 39 | REWRITE |
| U078 | — | MISSING |
| U079–U081 składnia | 40 | SPLIT |
| U082 s.262 | 41 | REWRITE |
| U083–U094 | 42 tylko s.300 | MISSING większość R9 |
| U095 Katarynka | — | MISSING |
| U096–U100 | — | MISSING |
| U101 s.328 | 43 | REWRITE |
| U102 s.330/331 | 44 | REWRITE |
| U103 | — | MISSING |
| U104 s.336 | 45 | REWRITE (scenariusz+zaproszenie) |
| U105 | — | MISSING |
| U106–U108 teatr/akcent/film | 46+47 | SPLIT |
| U109 wywiad | — | MISSING |
| U110 s.357 | 48 | MOVE: to V środków, nie I epitetu |
| U111–U115 | 49 | SPLIT ogłoszenie/cytat; MISSING reszta |
| U116–U118 | — | MISSING |
| U119 s.380 | 50 | REWRITE |
| U120–U121 | — | MISSING |
| R1-V … R11-V sprawdziany | — | MISSING (wzorzec: biologia `powtorzenie-*`) |
| Cykle L-* | 22, 34, 40 | za cienkie; rozbudować jako cykle |

**KEEP bez przepisu:** zero jednostek.  
**KEEP jako rdzeń do REWRITE:** 01 (najbliżej modelu).  
Nie dopasowywać programu do 50. Dopasować 50 do tej mapy przy implementacji.

---

## 15. Co jest świadomie nieustalone (nie zgadywać)

- Dokładny tytuł utworu baśni U069 vs bajki U071 — wziąć z podręcznika przy implementacji, nie z OCR.
- Godziny T5 vs T6: tytuły pewne, część bulletów kryteriów `OCR_MIX`.
- Czy szkoła realizuje pełne lektury uzup. (*Baśniobór*, cały Verne) — cykl opcjonalny ETAP 1, nie obowiązek ETAP 2.
- Strona bierna (PP II.1.5) — brak tematu w rozkładzie 5.

---

*Koniec modelu. Czekamy na akceptację przed jakąkolwiek implementacją.*
