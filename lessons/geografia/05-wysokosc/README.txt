EduMost — Geografia, klasa 5
Lekcja 5: Wysokość bezwzględna i względna

Struktura zgodna z przykładową lekcją 04-odleglosci:
- index.html — ładowanie współdzielonych styli i skryptów EduMost
- lesson.js — metadane lekcji
- content.js — treść w języku polskim i rosyjskim
- assets.js — rejestr zasobów lekcji
- img/ — cztery schematy SVG

Ważne:
1. Folder powinien znajdować się obok folderu 04-odleglosci w katalogu lekcji geografia, aby ścieżki ../../../css, ../../../js i ../../../data pozostały poprawne.
2. topicId ustawiony w lesson.js i data-topic to "wysokosc-bezwzgledna-wzgledna". Jeśli geografia-toc.js używa innego identyfikatora dla tematu 5, podmień go w obu miejscach na istniejący identyfikator.
3. Wersja używa przełącznika Polski/Rosyjski. Ogólny i18n.js projektu już obsługuje ru; nie trzeba zmieniać globalnego silnika. Jeśli zapisanym językiem był ukraiński, strona tej lekcji przełączy go na polski, ponieważ w tej lekcji dostępne są tylko PL/RU; ustawienie języka jest wspólne dla strony EduMost.
4. Obrazy używają ścieżek lokalnych ./img/*.svg, zgodnie z formatem EduMostLessonRenderer / EduMostSvg.
