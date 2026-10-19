# Numa – Die Python-Insel

Ein vollständiger erster spielbarer Stand mit 24 aufeinander aufbauenden Missionen, drei eigenen Figuren und einer illustrierten Insel. Lernprinzip: erklärtes Beispiel → Transfer auf andere Daten → Rückmeldung → nächste Mission. Zwei gestufte Hinweise und eine Musterlösung pro Mission.

## Auf deinem Server

Den gesamten Ordner (einschliesslich `vendor/`) auf einen normalen Webserver kopieren, zum Beispiel unter `/numa/`. Danach `https://deine-domain.ch/numa/` öffnen. Kein Python-Prozess, Node.js, Docker, Datenbank oder Build-Schritt ist nötig. Der Webserver muss `.js` und `.mjs` als JavaScript, `.wasm` als `application/wasm` und `validator.py` als Text ausliefern. `validator.py` wird heruntergeladen und im Browser ausgeführt; der Server soll diese Datei nicht als serverseitiges Skript behandeln.

HTTPS verwenden (auf localhost funktioniert HTTP). Alle Laufzeitdateien sind enthalten, es gibt keine CDN-, Schrift- oder Bildabhängigkeiten. Unterordner funktionieren dank relativer URLs. Beim ersten Aufruf lädt der Browser ungefähr 14 MB Laufzeitdaten; die tatsächliche Übertragung hängt von der Kompression und dem Browsercache ab.

Für eine lokale Vorschau im Ordner:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Dann `http://127.0.0.1:8765/` öffnen. Ein Doppelklick auf `index.html` reicht wegen Browserregeln für WebAssembly und Module nicht.

## Daten und Betrieb

- Schülercode wird lokal in einem Web Worker ausgeführt und nicht an den Server geschickt.
- Aufgaben, Entwürfe und Fortschritt bleiben ausschliesslich im Arbeitsspeicher. Neuladen oder Schliessen setzt alles zurück.
- Keine Cookies, Local Storage, IndexedDB, Konten, Telemetrie oder Analysetools durch diese Anwendung. Der normale HTTP-Cache kann unveränderte Programmdateien zwischenspeichern. Übliche Zugriffsprotokolle des eigenen Webservers werden durch das Spiel nicht konfiguriert.
- Jeder Codelauf erhält frische Aufgabendaten. «Zurücksetzen» leert den Code der aktuellen Aufgabe. Frühere Entwürfe bleiben bis zum Neuladen beim Aufgabenwechsel erhalten.
- Endlosschleifen: manuell abbrechen oder automatischer Abbruch nach acht Sekunden. Danach wird Python neu gestartet. Die Oberfläche bleibt bedienbar.
- Maximal 12 000 Ausgabezeichen pro Lauf. Der Browser verwaltet den verfügbaren Speicher; eine gesonderte feste Speicherquote wird nicht gesetzt.
- Keine manipulationssichere Prüfung oder Notenvergabe: Lösungen und Prüfungen werden mit der Webseite ausgeliefert. Das ist ein Übungsspiel.
- Schülercode besitzt die Browserrechte der Seite. Für den öffentlichen Betrieb eine eigene Subdomain ohne vertrauliche Anwendungen oder Sitzungscookies vorsehen. Es besteht kein serverseitiger Ausführungskanal.

## Aufgaben ändern

`tasks.js` enthält Geschichten, Beispiele, Erklärungen, Aufträge, Ausgangsdaten, Hinweise und Musterlösungen. `validator.py` enthält die Ergebnisprüfung, einfache Strukturprüfungen und zusätzliche Eingabefälle. Alternative Variablennamen werden akzeptiert, sofern der Auftrag keine konkreten Namen fordert. Die Aufgabenübersicht lässt alle Missionen direkt öffnen.

`app.js`, `style.css`, `index.html` und `icon.svg` enthalten Oberfläche, Figuren und Inselgrafik. Die Figuren und Karte sind eigene Vektorgrafiken ohne Bilddienste oder externe Assets.

## Geprüft

- Alle 24 Musterlösungen in echtem Pyodide im Browser ausgeführt.
- Pro Aufgabe falsche und leere Eingaben zurückgewiesen (72 Browserprüfungen insgesamt).
- Zusätzlich alternative Daten, Grenzwerte, leere Listen und direkt eingetragene Ausgaben geprüft.
- Aufgabenwechsel, erste richtige Lösung und automatischer Abbruch einer Endlosschleife in der Oberfläche geprüft.
- Die didaktische Abfolge ist ein erster Entwurf; Erprobung mit Lernenden steht noch aus. Keine Freigabe auf einem externen Server durchgeführt.

## Laufzeit und Lizenzen

Unverändertes Pyodide 0.27.7, bezogen aus dem offiziellen npm-Paket `pyodide`. Herkunft: https://registry.npmjs.org/pyodide/-/pyodide-0.27.7.tgz ; Quellcode: https://github.com/pyodide/pyodide/tree/0.27.7 . Lizenz MPL-2.0, enthalten in `vendor/LICENSE-pyodide`. Python-Lizenz in `vendor/LICENSE-python`. Pyodide-Dateien und Lizenzhinweise beim Weitergeben beibehalten. Für neue Anwendungen wurden keine Fremdgrafiken oder Fremdschriften eingebunden.
