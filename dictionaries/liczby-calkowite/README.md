# MISTRZ LICZB CAŁKOWITYCH — mini HTML

Lokalny podgląd stron słownika (HTML/CSS/JS), 1 plik = 1 strona PDF.

## Format

| | |
|--|--|
| **Wybrane** | **1240 × 1754 px (A4 @ 150 dpi)** |
| Druk 300 dpi | 2480 × 3508 px (skala 2× przy eksporcie) |
| Dlaczego 150 | szybszy podgląd w przeglądarce; źródłowe PNG ~1054×1492 |

## Start

Otwórz `index.html` w przeglądarce (lub lokalny serwer).

## Workflow

1. Dostarczasz kolejną stronę (PNG/PDF).
2. Analiza elementów → assety → skład HTML w `pages/NN.html`.
3. Status w `js/pages.js`: `ready` / `stub`.
4. Strzałki ← → + Spis na dole każdej strony (`js/nav.js`).

## Struktura

```
index.html
css/styles.css
js/pages.js
js/nav.js
assets/
pages/01.html … 14.html
```
