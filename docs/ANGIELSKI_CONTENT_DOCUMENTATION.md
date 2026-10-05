# Dokumentacja angielskiego treści

Dokument dla programisty i dla Cursor/AI, który zmienia `lessons/angielski/*/content.js`.

Pleeer: `docs/PROJECT_TECHNICAL_DOCUMENTATION.md`.  
Matematyka / historia / biologia / polski — osobne kontrakty. Angielski używa **tego samego pleeera**, ale **inną pedagogikę**: dziecko ma **mówić i wybierać po angielsku**, a polski i ukraiński tłumaczą polecenie i wyjaśnienie.

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

## 3. Jak pisać ekran (technika pleeera)

Żywe typy zadań: `single-choice`, `multiple-choice`, `true-false`, `input-text`.  
`input-text`: krótka forma EN; walidator robi `toLowerCase` (`I’m` / `I'm` — trzymaj **prosty apostrof** `'`).

`**słowo**` / `*słowo*` w stringu — jak w biologii.

YouTube: tylko jako **opcjonalne** Extra (`visual.kind: "youtube"`), nigdy zamiast Flash audio i nigdy w każdym lekcji.  
Nie zmieniać wspólnego engine „pod angielski”, dopóki nie ma jasnej decyzji o odtwarzaczu audio Flash.

**Kolejność ekranów** — nie biologiczna „goal → vocab → concept × n”.  
Pełna pedagogika: **§6**. Krótko: najpierw Flash (intro → core vocab → explanation → audio → practice), potem EduMost (deep dive → extra → listening → speaking → check → summary → review).

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
4. `content.js` według **§6** (mapa 10 pytań → dopiero potem bloki).
5. Nie commituj, dopóki autor nie poprosi.

---

## 6. Pedagogiczna model angielskiego kursu EduMost

### 6.0. Główna zasada

EduMost English dla klasy 5 buduje się **na podstawie** podręcznika *Flash 5*, a nie zamiast niego.

Flash zadaje **trasę**. EduMost **pogłębia i rozszerza** tę trasę.

Dziecko ma rozpoznawać w EduMost znajomy materiał z Flash i stopniowo przechodzić od rozumienia do samodzielnego użycia angielskiego.

**Nie zmieniać pedagogicznej kolejności podręcznika bez konieczności.**

Schemat:

```
FLASH
  ↓  znajomość materiału
  ↓  zrozumiałe wyjaśnienie
  ↓  praktyka materiału Flash
  ↓  pogłębienie
  ↓  dodatkowy słownik
  ↓  dodatkowa praktyka gramatyczna
  ↓  listening (Flash)
  ↓  dodatkowy listening / video
  ↓  speaking
  ↓  sprawdzenie
  ↓  powtórzenie
```

### 6.1. Rola podręcznika Flash

Jeśli do lekcji istnieje oryginalne audio Flash, materiał podręcznika jest **głównym źródłem** lekcji.

Zachować:

- temat lekcji;
- kolejność wprowadzania materiału;
- podstawową leksykę;
- temat gramatyczny;
- bohaterów i sytuacje;
- sens tekstów;
- zadania bezpośrednio związane z audio;
- typy umiejętności językowych ćwiczonych na stronie;
- związek między ćwiczeniami a audio.

Nie zastępować materiału Flash w całości własnym materiałem.

EduMost ma dawać uczucie:

> „Pracuję z tym samym materiałem, który mam w podręczniku, ale tu wyjaśniają mi go dokładniej i dają więcej praktyki.”

### 6.2. Prawo autorskie i adaptacja Flash

**Nie kopiować** całych stron podręcznika ani dużych fragmentów tekstu Flash do `content.js`.

Wolno:

- używać tematu;
- używać niezbędnych jednostek językowych;
- używać imion postaci i nazw;
- zachować strukturę nauczania;
- robić własne ćwiczenia na tym samym materiale;
- parafrazować / wyjaśniać własnymi słowami;
- tworzyć własne przykłady;
- używać użytkowych / dozwolonych plików audio Flash, jeśli właściciel projektu je dostarczył.

Dla wyjaśnień: zachować **pedagogiczną ideę** Flash, sformułowanie może być prostsze dla dziecka.

### 6.3. Dwa poziomy materiału

Każda lekcja rozróżnia:

**🟦 Core / Flash vocabulary** — obowiązkowe słowa i zwroty z lekcji.  
**⭐ Extra vocabulary** — dodatkowy słownik tej samej tematyki; rozszerza mówienie, ale **nie** tworzy wrażenia, że trzeba od razu uczyć się dwa razy więcej.

Przykład (lekcja 1):

| CORE | EXTRA |
|---|---|
| get up | brush my teeth |
| get dressed | make my bed |
| have breakfast | leave home |
| catch the bus | arrive at school |
| | relax |
| | hang out with friends |

Extra ma wracać w kolejnych lekcjach, gdy to możliwe.

W `content.js`: dwa bloki `vocabulary` (nagłówki *Core / Flash* i *Extra*) albo wyraźna etykieta MUST KNOW vs GOOD TO KNOW w tekście — dziecko musi widzieć różnicę.

### 6.4. Gramatyka — dwa etapy

**Etap 1 — Flash:** najpierw ta sama idea gramatyczna, która jest w podręczniku. Bez od razu rozszerzonej teorii.

**Etap 2 — EduMost Deep Dive:** po zrozumieniu podstaw — głębsze wyjaśnienie.

Zasada:

```
przykład → obserwacja → proste reguła → porównanie
→ typowy błąd → praktyka → trudniejszy przykład
```

Wyjaśnienie: krótkie części, prosty język, konkretne przykłady, PL + UA, bez trudnych terminów bez tłumaczenia.

Jeśli termin jest potrzebny:

> third person singular  
> PL: trzecia osoba liczby pojedynczej  
> UA: третя особа однини  
> → he / she / it

### 6.5. Języki wyjaśnienia

- **English** — język nauki (wybór, uzupełnianie, mówienie odpowiedzi).
- **Polish** — język polskiej szkoły.
- **Ukrainian** — dodatkowe zrozumienie.

W trybie `ua` polski tekst **nie znika**. Używać `{ pl: "…", ua: "…" }` dla instrukcji i wyjaśnień.

Nie tłumaczyć automatycznie każdego angielskiego zdania, jeśli to przeszkadza samodzielnemu rozumieniu EN.  
Stopniowo zmniejszać ukraińską podporę.

### 6.6. Audio — obowiązkowa część lekcji

Jeśli istnieje audio Flash — **używać**. Nie może być dekoracyjną ikoną.

Każde istotne audio ma zadanie dydaktyczne:

1. **Before listening** — Look at the picture. What do you think they are talking about?  
2. **First listening** — Listen and choose.  
3. **Second listening** — Listen again and find the information.  
4. **After listening** — What does Anna do at 7:45?

Schemat: listen → understand → find information → answer.

### 6.7. Dwa poziomy listening

Gdzie to ma sens:

- **🎧 Flash Listening** — oryginalne audio do podręcznika (materiał lekcji).  
- **🎧 EduMost Listening** — własny krótki materiał na tym samym poziomie leksyki/gramatyki (przeniesienie na nowy kontekst).

Dodatkowe audio **nie** podnosi gwałtownie poziomu trudności.

### 6.8. Wideo

YouTube tylko jako Extra, gdy naprawdę pomaga: żywy EN, znana leksyka, znana sytuacja, trening listening, rozszerzenie tematu.

Po wideo — krótkie zadanie (Watch & Listen + 2–3 pytania).

Nie dodawać wideo „dla zabawy”. Nie obowiązkowe w każdej lekcji.  
Jeśli pleeer nie pokazuje YouTube poprawnie dla angielskiego — **nie** przebudowywać engine; użyć tego, co już działa (`kind: "youtube"` w rendererze).

### 6.9. Praktyka A → D

| Poziom | Sens | Przykłady |
|---|---|---|
| **A** Recognition | rozpoznaje | Choose / Match / Choose the correct word |
| **B** Controlled | stosuje regułę | Complete / Correct the mistake |
| **C** Context | sytuacja | Read and choose / Listen and answer / Complete the dialogue |
| **D / Challenge** | samodzielnie | Write / Say / Compare / Create your own sentence |

Poziomy A/B/C/D w silniku zostają; sens wyznacza **treść** zadania, nie tylko badge.

### 6.10. Speaking — obowiązkowe pogłębienie

Gdzie naturalne: dziecko mówi kilka zdań o sobie.

Przykład:

> I get up at 7 o'clock.  
> I have breakfast at 7:30.  
> I catch the bus at 8 o'clock.

Nie zamieniać całego speakigu na pisemny test.  
Gdy brak auto-oceny — ekran `review` / speaking bez automatycznej oceny.

### 6.11. Powrót starej leksyki

Nowe słowa nie znikają po lekcji. Wracają ze starą leksyką przy nowej gramatyce:

- Lesson 1: get up  
- 1a: Dure gets up at 7.  
- 1b: Does Dure get up at 7?  
- 1e: Dure is getting up.

### 6.12. Nie przeciążać

| Etykieta | Znaczenie |
|---|---|
| **MUST KNOW** | główny materiał Flash |
| **GOOD TO KNOW** | Extra / rozszerzenie |
| **CHALLENGE** | trudniejsze zastosowanie |

Dziecko wie, co jest na szkołę, a co na rozwój.

### 6.13. Typowa struktura jednej lekcji

Liczba ekranów **nie jest zafiksowana** (10 / 12 / 15 — zależy od materiału).

Rekomendowana kolejność:

1. GOAL — co dziś studiujemy  
2. FLASH INTRO — znajomość materiału podręcznika  
3. FLASH VOCABULARY (Core)  
4. EXPLANATION — zrozumiałe wyjaśnienie  
5. FLASH AUDIO + pierwsze zadanie  
6. FLASH PRACTICE  
7. DEEP DIVE — pogłębienie gramatyki / leksyki  
8. EXTRA VOCABULARY  
9. EXTRA PRACTICE  
10. LISTENING (EduMost, na znanym materiale)  
11. VIDEO — tylko jeśli naprawdę pomaga  
12. SPEAKING  
13. CHECK  
14. SUMMARY  
15. REVIEW — powtórzenie na głos  

Nie każda lekcja musi mieć wszystkie 15 punktów.

### 6.14. Nie skakać poziomem trudności

Źle:

> Flash: I get up at 7.  
> EduMost: Describe your morning using five different tenses.

Dobrze:

> I get up at 7. → I have breakfast at 7:30.  
> → What time do you get up?  
> → Tell me about your morning.

### 6.15. Pierwsza lekcja Module 1 (`01-typical-day`)

Oparcie: **Flash s. 4–5**.

Główne tematy: daily routines · telling the time · talking about a typical day · comparison of routines.

Nie zastępować głównego materiału Flash.

Dodatkowo (dopiero po Core):

- Extra vocabulary daily routines;  
- prosto wyjaśnić get / have / go / catch;  
- ćwiczyć at + time;  
- Flash audio;  
- dodatkowy listening na znanej leksyce;  
- speaking o własnym dniu;  
- wracać leksykę w kolejnych lekcjach.

### 6.16. Twarde reguły dla Cursor

Przed pisaniem `content.js` odpowiedzieć na 10 pytań:

1. Co dziecko studiuje w Flash?  
2. Jaki materiał jest obowiązkowy (MUST KNOW)?  
3. Gdzie jest audio?  
4. Co dziecko ma zrozumieć po audio?  
5. Jakie wyjaśnienie daje Flash?  
6. Co trzeba wyjaśnić dodatkowo (Deep Dive)?  
7. Jaką leksykę rozszerzyć (Extra)?  
8. Jakie błędy są typowe dla dziecka ukraińskojęzycznego?  
9. Jakie własne ćwiczenia EduMost są potrzebne?  
10. Co dziecko ma umieć powiedzieć samodzielnie?

**Nie zaczynać `content.js`, dopóki ta mapa nie jest jasna.**

> Nie optymalizuj lekcji pod minimalną liczbę ekranów. Optymalizuj ją pod **zrozumienie przez dziecko materiału Flash**. Nie zastępuj materiału podręcznika własnym kursem. Nie dodawaj materiału dodatkowego, zanim dziecko opanuje główny materiał bieżącej lekcji.

---

## 7. Audyt (stan na 2026-09-15)

### 7.1. Werdykt

| Warstwa | Ocena | Komentarz |
|---|---|---|
| Katalog / Flash mapowanie | **OK** | M1 = 1 / 1a–1f / CLIL / Flash Time / PC1; strony SB zgodne |
| Prawo autorskie (brak kopiowania stron) | **OK** | własne zdania, bohaterowie Flash zachowani |
| PL + UA instrukcje, odpowiedzi EN | **OK** | konsekwentnie w M1 |
| Pedagogika §6 (Flash → Deep Dive → Extra → Audio → Speaking) | **NISKA zgodność** | lekcje = skrócony model biologii/historii |
| Audio Flash + EduMost listening | **BRAK** | zero odtwarzania audio w lekcjach; w docs/tech brak kontraktu audio |
| Core vs Extra | **BRAK** | jedna lista „Słowa na dziś”, CORE i EXTRA zmieszane |
| Speaking jako osobna faza | **CZĘŚCIOWO** | tylko końcowy `review` „Na głos” |
| YouTube Extra | **BRAK** (i to OK na razie) | docs wcześniej zabraniały; §6.8 pozwala opcjonalnie |

**Wniosek:** hub i treść M1 są dobrą **szkicową bazą tematyczną** pod Flash, ale **nie spełniają** jeszcze modelu „Flash + pogłębienie EduMost”. Przebudowa zaczyna się od `01-typical-day` według §6.15, nie od modułu 2.

### 7.2. Co już jest dobre (zachować)

1. **Ziarno lekcji jak w planie wynikowym** — nie 90 godzin „Lekcja 17”, tylko 1 / 1a / 1b…  
2. **Bohaterowie i etykiety Flash** w intro (Anna, Ross, Dure, Sally, Susan, Keith, Carpe Diem, Chalan Beel…).  
3. **Odpowiedzi EN** w zadaniach; wyjaśnienia PL+UA.  
4. **Brak kopiowania** pełnych tekstów SB.  
5. **Spirala leksyki częściowo** — `get up` wraca w Progress Check; 1b buduje na nawykach z 1.  
6. **Progress Check 1** jako powtórka po module — zgodne z SB s. 18–19.

### 7.3. Luki względem §6 (priorytet)

| # | Luka | Gdzie widać | Co zrobić |
|---|---|---|---|
| 1 | Brak Flash audio pipeline | wszystkie `content.js` M1 | decyzja: lokalne pliki audio właściciela + nowy `visual.kind` **albo** tymczasowo „otwórz nagranie w klasie / CD” + zadania before/first/second/after |
| 2 | Brak rozdzielenia Core / Extra | np. `01` ma `hang out` w jednej liście z `get up` | dwa bloki vocabulary; Extra dopiero po Flash practice |
| 3 | Kolejność jak biologia | goal → vocab → intro → concept×n → check | przerobić na §6.13 |
| 4 | Brak Deep Dive po Flash | `03-present-simple` od razu pełna tabela -s/-es | najpierw Flash idea (I listen / she listens), potem Deep Dive |
| 5 | Brak EduMost listening | brak | krótkie własne nagrania lub tekst+„listen in class” na tym samym poziomie |
| 6 | Speaking = 1 ekran na końcu | `review` | osobny ekran Speaking wcześniej + przykłady 3 zdań |
| 7 | MUST / GOOD / CHALLENGE niewidoczne dla dziecka | — | etykiety w headingach i w goal |
| 8 | Stary zakaz YouTube w §3 | stary docs | złagodzony w §6.8; nie dodawać masowo |
| 9 | `master-plan.html` angielski | stary model „3 języki w słowniku” | niespójny z §6; nie używać jako źródła prawdy |
| 10 | Brak mapy 10 pytań przed content | — | obowiązkowy checklist w PR / przed pisaniem |

### 7.4. Audyt lekcji `01-typical-day` vs §6.15

| Wymaganie §6.15 | Stan | |
|---|---|---|
| Oparcie s. 4–5 Flash | Tak (temat, Anna, godziny) | OK |
| Główny materiał Flash nie zastąpiony | Częściowo — własna kolejność ekranów, nie „najpierw Flash spread” | DO POPRAWY |
| Core daily routines | Jest, ale zmieszany z Extra | DO POPRAWY |
| Extra vocabulary osobno | Nie | BRAK |
| get / have / go / catch wyjaśnione prosto | Fragmentarycznie (`have breakfast`) | DO POPRAWY |
| at + time | Jest (zegar) | OK |
| Flash audio | Nie | BRAK |
| Extra listening | Nie | BRAK |
| Speaking o własnym dniu | Tylko `review` | SŁABE |
| Powrót leksyki w 1a/1b/1e | Zaplanowane w tekście review; w 1a/1b częściowo | OK kierunek |

Szacunek ekranów po przebudowie §6: **~12–15** (teraz 11), bez „optymalizacji w dół”.

### 7.5. Technika: audio

W `docs/PROJECT_TECHNICAL_DOCUMENTATION.md` i rendererze **nie ma** gotowego kontraktu HTML5 audio dla angielskiego.  
YouTube (`kind: "youtube"`) już istnieje w `js/svg-renderer.js`.

Rekomendacja audytu (kolejność decyzji, bez zmiany engine „na zapas”):

1. Właściciel projektu dostarcza dozwolone pliki audio Flash (ścieżki lokalne / GitHub).  
2. Dopiero wtedy: minimalny `visual.kind` audio **albo** link + instrukcja „Play Track X” + zadania listening.  
3. Do czasu plików: ekrany Before / First / Second / After listening z poleceniem „odtwórz nagranie z podręcznika / aplikacji nauczyciela” — żeby **pedagogika listening** już była w lekcji.

### 7.6. Plan naprawczy (propozycja kolejności)

1. Zatwierdzić §6 jako kontrakt (ten dokument).  
2. Przebudować **`01-typical-day`** jako złoty wzorzec §6.15.  
3. Skopiować wzorzec na **1a → 1b → … → PC1** (nie przepisywać wszystkich naraz bez mapy 10 pytań).  
4. Decyzja audio (pliki + kind).  
5. Moduł 2 — dopiero po złotym wzorcu M1.

### 7.7. Checklist akceptacji lekcji (Definition of Done)

Lekcja angielska jest „gotowa” dopiero gdy:

- [ ] Odpowiedzi na 10 pytań z §6.16 zapisane (w komentarzu PR / notatce autora)  
- [ ] Flash intro + Core vocab przed Extra  
- [ ] Wyjaśnienie Flash przed Deep Dive  
- [ ] Co najmniej jeden tor listening z zadaniem (Flash lub „play from book”)  
- [ ] Speaking / review na głos z 2–4 zdaniami EN  
- [ ] MUST KNOW vs GOOD TO KNOW widoczne dla dziecka  
- [ ] Brak skoku trudności (pięć czasów na raz itd.)  
- [ ] Brak wklejonego tekstu strony SB  
- [ ] Odpowiedzi zadań po angielsku  

---

*Koniec audytu. Następny krok roboczy po akceptacji: przebudowa `lessons/angielski/01-typical-day/content.js` według §6.15.*
