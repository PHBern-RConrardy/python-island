export const tasks = [
  {
    "title": "Ein Lebenszeichen",
    "concept": "print()",
    "who": "Mira",
    "story": "Du strandest auf der Wetterinsel Numa. Im alten Terminal blinkt noch ein Cursor. Vielleicht hört dich jemand.",
    "example": "print(\"Hallo, Welt!\")",
    "explain": "print() gibt den Text zwischen den Anführungszeichen aus. Die Anführungszeichen selbst erscheinen nicht.",
    "mission": "Sende ein Lebenszeichen. Gib genau Hallo, Numa! aus.",
    "setup": "",
    "starter": "# Schreibe hier dein Lebenszeichen\n",
    "check": "assert out.strip() == \"Hallo, Numa!\", \"Dein Funkspruch soll genau Hallo, Numa! lauten.\"",
    "solution": "print(\"Hallo, Numa!\")",
    "hints": [
      "Beginne mit print(...).",
      "Setze den Funkspruch in Anführungszeichen."
    ]
  },
  {
    "title": "Dein Rufname",
    "concept": "Variablen",
    "who": "Mira",
    "story": "Die Funkanlage braucht einen Rufnamen für dich. Wir nennen dich Nova.",
    "example": "name = \"Mira\"\nprint(name)",
    "explain": "Eine Variable merkt sich einen Wert. Bei print(name) wird der gespeicherte Text ausgegeben.",
    "mission": "Speichere Nova in der Variablen rufname und gib rufname aus.",
    "setup": "",
    "starter": "",
    "check": "assert g.get(\"rufname\") == \"Nova\" and out.strip() == \"Nova\", \"Speichere Nova in rufname und gib den Wert aus.\"",
    "solution": "rufname = \"Nova\"\nprint(rufname)",
    "hints": [
      "Eine Zuweisung sieht so aus: variable = \"Text\".",
      "Verwende danach print(rufname)."
    ]
  },
  {
    "title": "Energie zählen",
    "concept": "Rechnen",
    "who": "Bo",
    "story": "Ich bin Bo, der Wartungsroboter. Zwei Batterien liegen am Steg. Reicht ihre Energie?",
    "example": "energie = 12 + 8\nprint(energie)",
    "explain": "Mit + addierst du Zahlen. Zahlen stehen ohne Anführungszeichen im Code.",
    "mission": "Die Batterien haben 17 und 25 Einheiten. Berechne ihre Summe in energie und gib sie aus.",
    "setup": "",
    "starter": "",
    "check": "assert g.get(\"energie\") == 42 and out.strip() == \"42\", \"energie und deine Ausgabe sollen 42 sein.\"",
    "solution": "energie = 17 + 25\nprint(energie)",
    "hints": [
      "Ersetze die Zahlen aus Bos Beispiel.",
      "Speichere 17 + 25 in energie."
    ]
  },
  {
    "title": "Das Tor erwacht",
    "concept": "Werte verändern",
    "who": "Bo",
    "story": "Das Hafentor verbraucht beim Öffnen Energie. Aktualisiere unsere Anzeige.",
    "example": "wasser = 30\nwasser = wasser - 7\nprint(wasser)",
    "explain": "Rechts vom = wird zuerst gerechnet. Danach ersetzt das Ergebnis den bisherigen Wert.",
    "mission": "energie ist bereits 42. Ziehe 9 ab und gib den neuen Wert aus.",
    "setup": "energie = 42",
    "starter": "# energie ist bereits vorhanden\n",
    "check": "assert g.get(\"energie\") == 33 and out.strip() == \"33\", \"Nach dem Öffnen sollen 33 Energieeinheiten übrig sein.\"",
    "solution": "energie = energie - 9\nprint(energie)",
    "hints": [
      "Verwende energie auf beiden Seiten der Zuweisung.",
      "Rechne energie - 9."
    ]
  },
  {
    "title": "Nachricht vom Leuchtturm",
    "concept": "Texte verbinden",
    "who": "Mira",
    "story": "Am anderen Ende der Insel antwortet jemand. Schick unseren Standort.",
    "example": "ort = \"Hafen\"\nprint(\"Treffpunkt: \" + ort)",
    "explain": "Mit + kannst du auch Texte verbinden. Leerzeichen müssen im Text enthalten sein.",
    "mission": "ort enthält Leuchtturm. Gib Standort: Leuchtturm aus und verwende dabei ort.",
    "setup": "ort = \"Leuchtturm\"",
    "starter": "",
    "check": "assert out.strip() == \"Standort: Leuchtturm\", \"Die Ausgabe soll Standort: Leuchtturm lauten.\"",
    "solution": "print(\"Standort: \" + ort)",
    "hints": [
      "Der erste Text lautet \"Standort: \".",
      "Verbinde diesen Text mit + ort."
    ]
  },
  {
    "title": "Vorräte für den Weg",
    "concept": "Multiplikation",
    "who": "Bo",
    "story": "Wir brechen zum Leuchtturm auf. Für jede Person brauchen wir zwei Wasserflaschen.",
    "example": "kisten = 3\ninhalt = kisten * 4\nprint(inhalt)",
    "explain": "Das Sternchen * bedeutet multiplizieren. Auch gespeicherte Zahlen lassen sich damit verrechnen.",
    "mission": "personen ist 4. Berechne in flaschen je 2 Flaschen pro Person und gib flaschen aus.",
    "setup": "personen = 4",
    "starter": "",
    "check": "assert g.get(\"flaschen\") == 8 and out.strip() == \"8\", \"Vier Personen brauchen insgesamt 8 Flaschen.\"",
    "solution": "flaschen = personen * 2\nprint(flaschen)",
    "hints": [
      "Multipliziere personen mit 2.",
      "Speichere das Ergebnis in flaschen."
    ]
  },
  {
    "title": "Ein Blick in den Rucksack",
    "concept": "Listen",
    "who": "Ada",
    "story": "Ich bin Ada, die Stationswartin. Mein Rucksack liegt am Weg. Schau hinein.",
    "example": "farben = [\"rot\", \"blau\", \"grün\"]\nprint(farben[0])",
    "explain": "Eine Liste sammelt mehrere Werte. Die Zählung beginnt bei 0: [0] liefert den ersten Eintrag.",
    "mission": "Gib das erste Werkzeug aus der vorhandenen Liste werkzeuge aus.",
    "setup": "werkzeuge = [\"Seil\", \"Lampe\", \"Kompass\"]",
    "starter": "",
    "check": "assert out.strip() == \"Seil\", \"Gib den ersten Eintrag der Werkzeugliste aus.\"",
    "solution": "print(werkzeuge[0])",
    "hints": [
      "Verwende eckige Klammern hinter dem Listennamen.",
      "Der erste Index ist 0."
    ]
  },
  {
    "title": "Licht im Tunnel",
    "concept": "Listenindex",
    "who": "Ada",
    "story": "Ein Tunnel führt durch den Felsen. Nimm die Lampe aus dem Rucksack.",
    "example": "farben = [\"rot\", \"blau\", \"grün\"]\nprint(farben[2])",
    "explain": "[2] liefert den dritten Eintrag. Position und Index unterscheiden sich um eins.",
    "mission": "Gib den zweiten Eintrag aus werkzeuge aus.",
    "setup": "werkzeuge = [\"Seil\", \"Lampe\", \"Kompass\"]",
    "starter": "",
    "check": "assert out.strip() == \"Lampe\", \"Gesucht ist der zweite Eintrag: Lampe.\"",
    "solution": "print(werkzeuge[1])",
    "hints": [
      "Der zweite Eintrag hat den Index 1.",
      "Verwende werkzeuge[1]."
    ]
  },
  {
    "title": "Die Karte einpacken",
    "concept": "append()",
    "who": "Ada",
    "story": "An der Tunnelwand hängt eine Karte. Pack sie zu den anderen Gegenständen.",
    "example": "tasche = [\"Brot\"]\ntasche.append(\"Apfel\")\nprint(tasche)",
    "explain": "append() hängt einen Wert am Ende einer Liste an. Die Liste wird dabei verändert.",
    "mission": "Hänge Karte an inventar an und gib die ganze Liste aus.",
    "setup": "inventar = [\"Seil\", \"Lampe\"]",
    "starter": "",
    "check": "assert g.get(\"inventar\") == [\"Seil\", \"Lampe\", \"Karte\"] and out.strip() == str(g[\"inventar\"]), \"Hänge Karte hinten an und gib inventar aus.\"",
    "solution": "inventar.append(\"Karte\")\nprint(inventar)",
    "hints": [
      "Die Methode steht direkt hinter dem Listennamen: inventar.append(...).",
      "Karte ist Text und braucht Anführungszeichen."
    ]
  },
  {
    "title": "Alles dabei?",
    "concept": "len()",
    "who": "Bo",
    "story": "Vor dem Aufstieg prüfen wir, wie viele Gegenstände wir tragen.",
    "example": "namen = [\"Mira\", \"Ada\"]\nanzahl = len(namen)\nprint(anzahl)",
    "explain": "len() liefert die Anzahl der Einträge einer Liste.",
    "mission": "Speichere die Länge von inventar in anzahl und gib anzahl aus.",
    "setup": "inventar = [\"Seil\", \"Lampe\", \"Karte\", \"Wasser\"]",
    "starter": "",
    "check": "assert g.get(\"anzahl\") == 4 and out.strip() == \"4\", \"Die Liste enthält vier Gegenstände.\"",
    "solution": "anzahl = len(inventar)\nprint(anzahl)",
    "hints": [
      "Setze inventar in die Klammern von len().",
      "Gib danach anzahl aus."
    ]
  },
  {
    "title": "Die Zugangskontrolle",
    "concept": "if",
    "who": "Ada",
    "story": "Das Tor zur Wetterstation lässt sich nur bei ausreichender Energie öffnen.",
    "example": "alter = 18\nif alter >= 16:\n    print(\"Zutritt\")",
    "explain": "if prüft eine Bedingung. >= bedeutet grösser oder gleich. Nach dem Doppelpunkt folgt eingerückter Code.",
    "mission": "Wenn energie mindestens 20 ist, gib Tor offen aus.",
    "setup": "energie = 24",
    "starter": "",
    "check": "assert out.strip() == \"Tor offen\", \"Bei energie >= 20 soll Tor offen erscheinen.\"",
    "solution": "if energie >= 20:\n    print(\"Tor offen\")",
    "hints": [
      "Übertrage alter >= 16 auf energie >= 20.",
      "Die print-Zeile muss unter if eingerückt sein."
    ]
  },
  {
    "title": "Ein Plan für wenig Energie",
    "concept": "else",
    "who": "Bo",
    "story": "Eine zweite Tür hat einen schwächeren Akku. Wir brauchen einen Plan für beide Fälle.",
    "example": "if temperatur > 25:\n    print(\"warm\")\nelse:\n    print(\"kühl\")",
    "explain": "else wird ausgeführt, wenn die if-Bedingung nicht erfüllt ist. Es steht auf derselben Einrückungsebene wie if.",
    "mission": "Gib bei energie >= 20 Tor offen aus, sonst Akku laden.",
    "setup": "energie = 12",
    "starter": "",
    "check": "assert out.strip() == \"Akku laden\", \"Bei 12 Energieeinheiten soll Akku laden erscheinen.\"",
    "solution": "if energie >= 20:\n    print(\"Tor offen\")\nelse:\n    print(\"Akku laden\")",
    "hints": [
      "Übernimm die if-Bedingung aus der letzten Aufgabe.",
      "Unter else gehört die Ausgabe \"Akku laden\"."
    ]
  },
  {
    "title": "Das richtige Ersatzteil",
    "concept": "in",
    "who": "Ada",
    "story": "Im Lager gibt es viele Teile. Prüfe, ob eine Sicherung dabei ist.",
    "example": "obst = [\"Apfel\", \"Birne\"]\nif \"Apfel\" in obst:\n    print(\"Gefunden\")",
    "explain": "in prüft, ob ein Wert in einer Liste vorkommt. Textvergleiche beachten Gross- und Kleinschreibung.",
    "mission": "Wenn Sicherung in teile vorkommt, gib Ersatzteil gefunden aus.",
    "setup": "teile = [\"Kabel\", \"Sicherung\", \"Schraube\"]",
    "starter": "",
    "check": "assert out.strip() == \"Ersatzteil gefunden\", \"Prüfe die Teileliste und melde Ersatzteil gefunden.\"",
    "solution": "if \"Sicherung\" in teile:\n    print(\"Ersatzteil gefunden\")",
    "hints": [
      "Prüfe \"Sicherung\" in teile.",
      "Vergiss Doppelpunkt und Einrückung nicht."
    ]
  },
  {
    "title": "Bestandsaufnahme",
    "concept": "for",
    "who": "Mira",
    "story": "Die Funkleitung steht wieder. Übermittle jeden Gegenstand einzeln.",
    "example": "for farbe in [\"rot\", \"blau\"]:\n    print(farbe)",
    "explain": "for führt den eingerückten Code für jeden Eintrag aus. Die Schleifenvariable erhält nacheinander die Werte.",
    "mission": "Gib jeden Eintrag von inventar auf einer eigenen Zeile aus.",
    "setup": "inventar = [\"Seil\", \"Lampe\", \"Karte\"]",
    "starter": "",
    "check": "assert out.strip().splitlines() == [\"Seil\", \"Lampe\", \"Karte\"], \"Gib die drei Gegenstände in Listenreihenfolge untereinander aus.\"",
    "solution": "for ding in inventar:\n    print(ding)",
    "hints": [
      "Verwende for ding in inventar:.",
      "Gib innerhalb der Schleife ding aus."
    ]
  },
  {
    "title": "Die kaputten Sensoren",
    "concept": "for und if",
    "who": "Ada",
    "story": "Drei Sensoren liefern Messwerte. Negative Werte markieren einen Defekt.",
    "example": "for zahl in [2, 8, 4]:\n    if zahl > 5:\n        print(zahl)",
    "explain": "Eine Bedingung kann innerhalb einer Schleife stehen. Die Ausgabe ist dann zweimal eingerückt.",
    "mission": "Gib nur die negativen Werte aus messwerte aus, jeweils auf einer eigenen Zeile.",
    "setup": "messwerte = [18, -1, 22, -3, 19]",
    "starter": "",
    "check": "assert out.strip().splitlines() == [\"-1\", \"-3\"], \"Nur -1 und -3 sollen untereinander erscheinen.\"",
    "solution": "for wert in messwerte:\n    if wert < 0:\n        print(wert)",
    "hints": [
      "Die Bedingung lautet wert < 0.",
      "Die print-Zeile steht innerhalb von if und for."
    ]
  },
  {
    "title": "Vier Lichtsignale",
    "concept": "range()",
    "who": "Bo",
    "story": "Der Leuchtturm braucht vier Testsignale. Wir können eine Schleife zählen lassen.",
    "example": "for nummer in range(3):\n    print(\"Test\")",
    "explain": "range(3) liefert 0, 1, 2. Die Schleife läuft dreimal.",
    "mission": "Gib mit einer Schleife viermal Blink aus, jeweils auf einer neuen Zeile.",
    "setup": "",
    "starter": "",
    "check": "assert out.strip().splitlines() == [\"Blink\"] * 4, \"Sende genau vier Blink-Signale.\"",
    "solution": "for nummer in range(4):\n    print(\"Blink\")",
    "hints": [
      "Verwende range(4).",
      "In der Schleife steht print(\"Blink\")."
    ]
  },
  {
    "title": "Energie einsammeln",
    "concept": "Summieren",
    "who": "Bo",
    "story": "Die Solarmodule melden ihre Erträge. Zähle sie zusammen.",
    "example": "summe = 0\nfor zahl in [2, 3, 4]:\n    summe = summe + zahl\nprint(summe)",
    "explain": "Ein Sammelwert startet bei 0. Jeder Schleifendurchlauf addiert einen weiteren Wert. Die Ausgabe folgt nach der Schleife.",
    "mission": "Addiere alle Werte aus ertraege in gesamt und gib gesamt aus.",
    "setup": "ertraege = [6, 8, 5, 7]",
    "starter": "",
    "check": "assert g.get(\"gesamt\") == 26 and out.strip() == \"26\", \"Die vier Module liefern zusammen 26 Einheiten.\"",
    "solution": "gesamt = 0\nfor ertrag in ertraege:\n    gesamt = gesamt + ertrag\nprint(gesamt)",
    "hints": [
      "Beginne vor der Schleife mit gesamt = 0.",
      "Die letzte print-Zeile ist nicht eingerückt."
    ]
  },
  {
    "title": "Nur funktionierende Werte",
    "concept": "Listen aufbauen",
    "who": "Ada",
    "story": "Defekte Messungen dürfen nicht in den Wetterbericht gelangen.",
    "example": "gross = []\nfor zahl in [2, 8, 4]:\n    if zahl > 5:\n        gross.append(zahl)\nprint(gross)",
    "explain": "Du kannst passende Werte in einer neuen Liste sammeln. Die leere Liste entsteht vor der Schleife.",
    "mission": "Sammle alle Werte >= 0 aus messwerte in gueltig und gib die Liste aus.",
    "setup": "messwerte = [18, -1, 22, -3, 0]",
    "starter": "",
    "check": "assert g.get(\"gueltig\") == [18, 22, 0] and out.strip() == str(g[\"gueltig\"]), \"gueltig soll [18, 22, 0] enthalten. Auch 0 ist gültig.\"",
    "solution": "gueltig = []\nfor wert in messwerte:\n    if wert >= 0:\n        gueltig.append(wert)\nprint(gueltig)",
    "hints": [
      "Beginne mit gueltig = [].",
      "Hänge einen Wert nur an, wenn wert >= 0 gilt."
    ]
  },
  {
    "title": "Der Stationsausweis",
    "concept": "Dictionaries",
    "who": "Mira",
    "story": "Auf dem Terminal findest du einen digitalen Stationsausweis.",
    "example": "person = {\"name\": \"Ada\", \"beruf\": \"Technikerin\"}\nprint(person[\"name\"])",
    "explain": "Ein Dictionary ordnet Schlüsseln Werte zu. Hier wird statt eines Zahlenindex der Schlüssel \"name\" verwendet.",
    "mission": "Gib den Wert zum Schlüssel code aus station aus.",
    "setup": "station = {\"name\": \"Numa\", \"code\": \"N-42\", \"aktiv\": False}",
    "starter": "",
    "check": "assert out.strip() == \"N-42\", \"Lies den Wert beim Schlüssel code aus.\"",
    "solution": "print(station[\"code\"])",
    "hints": [
      "Nutze station[...].",
      "Der Schlüssel ist der Text \"code\"."
    ]
  },
  {
    "title": "Station online",
    "concept": "Dictionary ändern",
    "who": "Ada",
    "story": "Jetzt können wir den Status der Wetterstation ändern.",
    "example": "geraet = {\"aktiv\": False}\ngeraet[\"aktiv\"] = True\nprint(geraet[\"aktiv\"])",
    "explain": "Mit einer Zuweisung änderst du den Wert eines Schlüssels. True und False sind Wahrheitswerte ohne Anführungszeichen.",
    "mission": "Setze aktiv in station auf True und gib diesen Wert aus.",
    "setup": "station = {\"name\": \"Numa\", \"aktiv\": False}",
    "starter": "",
    "check": "assert g.get(\"station\", {}).get(\"aktiv\") is True and out.strip() == \"True\", \"Setze den Eintrag aktiv auf den Wahrheitswert True.\"",
    "solution": "station[\"aktiv\"] = True\nprint(station[\"aktiv\"])",
    "hints": [
      "Verwende station[\"aktiv\"] = True.",
      "Gib anschliessend denselben Dictionary-Eintrag aus."
    ]
  },
  {
    "title": "Ein eigener Funkspruch",
    "concept": "Funktionen",
    "who": "Mira",
    "story": "Wir brauchen denselben Funkspruch mehrmals. Gib ihm einen Namen.",
    "example": "def gruesse():\n    print(\"Guten Morgen!\")\n\ngruesse()",
    "explain": "def definiert eine Funktion. Der eingerückte Code läuft erst, wenn du die Funktion mit ihrem Namen und () aufrufst.",
    "mission": "Definiere die Funktion funken. Sie soll Numa ist online ausgeben. Rufe sie einmal auf.",
    "setup": "",
    "starter": "",
    "check": "assert callable(g.get(\"funken\")) and out.strip() == \"Numa ist online\", \"Definiere funken() und rufe sie einmal auf.\"",
    "solution": "def funken():\n    print(\"Numa ist online\")\n\nfunken()",
    "hints": [
      "Die Definition beginnt mit def funken():.",
      "Der Aufruf funken() steht danach ohne Einrückung."
    ]
  },
  {
    "title": "Nachrichten mit Ziel",
    "concept": "Parameter",
    "who": "Mira",
    "story": "Der Rettungsdienst braucht Nachrichten für verschiedene Empfänger.",
    "example": "def gruesse(name):\n    print(\"Hallo \" + name)\n\ngruesse(\"Ada\")",
    "explain": "Ein Parameter macht eine Funktion flexibel. Beim Aufruf erhält name den übergebenen Wert.",
    "mission": "Definiere melde(ort). Die Funktion soll Bereit: gefolgt von einem Leerzeichen und ort ausgeben. Rufe sie mit Hafen auf.",
    "setup": "",
    "starter": "",
    "check": "assert callable(g.get(\"melde\")) and out.strip() == \"Bereit: Hafen\", \"Definiere melde(ort) und rufe sie mit Hafen auf.\"",
    "solution": "def melde(ort):\n    print(\"Bereit: \" + ort)\n\nmelde(\"Hafen\")",
    "hints": [
      "Der Parameter heisst ort.",
      "Verbinde \"Bereit: \" mit ort."
    ]
  },
  {
    "title": "Die Reichweite berechnen",
    "concept": "return",
    "who": "Bo",
    "story": "Der Rettungsdrohne fehlt noch eine Berechnung. Sie schafft drei Kilometer pro Energieeinheit.",
    "example": "def verdoppeln(zahl):\n    return zahl * 2\n\nergebnis = verdoppeln(5)\nprint(ergebnis)",
    "explain": "return gibt einen Wert an den aufrufenden Code zurück. Anders als print() zeigt return selbst nichts an.",
    "mission": "Definiere reichweite(energie), die energie * 3 zurückgibt. Speichere reichweite(8) in strecke und gib strecke aus.",
    "setup": "",
    "starter": "",
    "check": "assert callable(g.get(\"reichweite\")) and g[\"reichweite\"](5) == 15 and g.get(\"strecke\") == 24 and out.strip() == \"24\", \"Die Funktion soll die dreifache Energie zurückgeben; strecke soll 24 sein.\"",
    "solution": "def reichweite(energie):\n    return energie * 3\n\nstrecke = reichweite(8)\nprint(strecke)",
    "hints": [
      "In der Funktion brauchst du return statt print.",
      "Nach der Definition: strecke = reichweite(8)."
    ]
  },
  {
    "title": "Numa sendet wieder",
    "concept": "Abschlussmission",
    "who": "Ada",
    "story": "Alles ist vorbereitet. Wähle nun alle Ziele aus, die unsere Rettungsdrohne erreichen kann. Dann senden wir das Signal.",
    "example": "def passende_werte(werte, grenze):\n    passend = []\n    for wert in werte:\n        if wert <= grenze:\n            passend.append(wert)\n    return passend",
    "explain": "Die Funktion verbindet Parameter, Liste, Schleife, Bedingung und Rückgabewert. Übertrage das Muster auf die Entfernungen.",
    "mission": "Definiere erreichbare(ziele, reichweite). Gib darin eine Liste aller Entfernungen <= reichweite zurück. Speichere erreichbare(entfernungen, 24) in rettung und gib rettung aus.",
    "setup": "entfernungen = [12, 30, 24, 18, 40]",
    "starter": "",
    "check": "assert callable(g.get(\"erreichbare\")) and g[\"erreichbare\"]([1, 9, 4], 4) == [1, 4] and g.get(\"rettung\") == [12, 24, 18] and out.strip() == str(g[\"rettung\"]), \"Deine Funktion soll passende Entfernungen auswählen. Für die Insel sind das [12, 24, 18].\"",
    "solution": "def erreichbare(ziele, reichweite):\n    passend = []\n    for ziel in ziele:\n        if ziel <= reichweite:\n            passend.append(ziel)\n    return passend\n\nrettung = erreichbare(entfernungen, 24)\nprint(rettung)",
    "hints": [
      "Benenne die Funktion und Parameter passend zum Auftrag um.",
      "Prüfe in der Schleife ziel <= reichweite und sammle mit append()."
    ]
  }
];
