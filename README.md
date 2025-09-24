# Portfolio von Marten Kirschenhofer

Kurzanleitung, wie man das Projekt lokal baut und testet.

Voraussetzungen

- Node.js (für das `sass` npm-Paket) oder die `sass`-Binary (Dart Sass).

Installieren

```
npm install
```

CSS kompilieren

```
npm run sass
```

Oder während der Entwicklung

```
npm run sass:watch
```

- `index.html` — Hauptseite
- `scss/styles.scss` — SASS-Quelle
- `css/styles.css` — kompiliertes CSS
- `js/script.js` — kleines JS für Zugänglichkeit
- `projekte.html` — eigenständige Seite mit Projektübersicht
- `kontakt.html` — eigenständige Kontaktseite mit Formular
- `ueber-mich.html` — eigenständige Seite "Über mich"
