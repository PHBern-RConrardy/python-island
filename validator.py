import ast
import contextlib
import io
import traceback

class LimitedOutput(io.StringIO):
    def write(self, text):
        if self.tell() + len(text) > 12000:
            raise RuntimeError('Zu viel Ausgabe. Prüfe deine Schleife; maximal 12 000 Zeichen pro Lauf.')
        return super().write(text)

# Andere Eingaben prüfen, ob das gelernte Muster übertragen wurde.
VARIANTS = {
    3: [('energie = 50', '41')],
    4: [('ort = "Hafen"', 'Standort: Hafen')],
    5: [('personen = 7', '14')],
    6: [('werkzeuge = ["Karte", "Seil"]', 'Karte')],
    7: [('werkzeuge = ["Karte", "Seil", "Lampe"]', 'Seil')],
    8: [('inventar = ["Wasser"]', "['Wasser', 'Karte']")],
    9: [('inventar = ["Seil"]', '1')],
    10: [('energie = 19', ''), ('energie = 20', 'Tor offen')],
    11: [('energie = 20', 'Tor offen'), ('energie = 0', 'Akku laden')],
    12: [('teile = ["Kabel"]', ''), ('teile = ["Sicherung"]', 'Ersatzteil gefunden')],
    13: [('inventar = ["Wasser", "Brot"]', 'Wasser\nBrot')],
    14: [('messwerte = [0, -5, 4, -2]', '-5\n-2'), ('messwerte = [1, 0]', '')],
    16: [('ertraege = [2, 0, 9]', '11'), ('ertraege = []', '0')],
    17: [('messwerte = [-2, 0, 4]', '[0, 4]'), ('messwerte = [-3]', '[]')],
    18: [('station = {"code": "S-7"}', 'S-7')],
}
REQUIRED = {0: ast.Call, 1: ast.Assign, 2: ast.BinOp, 3: ast.BinOp, 4: ast.BinOp,
5: ast.BinOp, 6: ast.Subscript, 7: ast.Subscript, 8: ast.Call, 9: ast.Call,
10: ast.If, 11: ast.If, 12: ast.In, 13: ast.For, 14: ast.For, 15: ast.For,
16: ast.For, 17: ast.For, 18: ast.Subscript, 19: ast.Assign, 20: ast.FunctionDef,
21: ast.FunctionDef, 22: ast.Return, 23: ast.FunctionDef}

def run_program(source, setup):
    namespace = {'__name__': '__main__'}
    stream = LimitedOutput()
    with contextlib.redirect_stdout(stream), contextlib.redirect_stderr(stream):
        exec(compile(setup, '<Vorhandene Daten>', 'exec'), namespace)
        exec(compile(source, '<Dein Code>', 'exec'), namespace)
    return namespace, stream.getvalue()

def validate(source, task, index):
    output = ''
    try:
        tree = ast.parse(source)
        if not tree.body:
            return {'ok': False, 'output': '', 'feedback': 'Schreibe zuerst deinen Code in das Eingabefeld.'}
        g, output = run_program(source, task['setup'])
        required = REQUIRED[index]
        assert any(isinstance(node, required) for node in ast.walk(tree)), 'Verwende das neue Werkzeug aus dem Beispiel, damit du es selbst ausprobierst.'
        exec(task['check'], {'g': g, 'out': output})
        for setup, expected in VARIANTS.get(index, []):
            _, other = run_program(source, setup)
            assert other.strip() == expected, 'Mit anderen Eingabedaten klappt es noch nicht. Verwende die vorhandenen Variablen und übertrage das Muster, statt das Ergebnis direkt einzutragen.'
        if index == 20:
            with contextlib.redirect_stdout(io.StringIO()) as stream:
                g['funken']()
            assert stream.getvalue().strip() == 'Numa ist online', 'Die Ausgabe muss innerhalb deiner Funktion stehen.'
        if index == 21:
            with contextlib.redirect_stdout(io.StringIO()) as stream:
                g['melde']('Station')
            assert stream.getvalue().strip() == 'Bereit: Station', 'Verwende den Parameter ort in deiner Funktion.'
        if index == 22:
            assert g['reichweite'](0) == 0 and g['reichweite'](11) == 33, 'Deine Funktion muss mit jeder Energiezahl rechnen können.'
        if index == 23:
            for values, limit in [([], 5), ([0, 5, 6], 5), ([8, 9], 2)]:
                assert g['erreichbare'](values, limit) == [x for x in values if x <= limit], 'Deine Funktion soll auch mit anderen Zielen und Reichweiten funktionieren.'
        return {'ok': True, 'output': output, 'feedback': 'Geschafft! Dein Code löst die Mission.'}
    except SyntaxError as error:
        tip = 'Prüfe Klammern, Anführungszeichen und Doppelpunkte.'
        if isinstance(error, IndentationError):
            tip = 'Nach if, else, for und def muss der zugehörige Code eingerückt sein. Mit Tab fügst du vier Leerzeichen ein.'
        return {'ok': False, 'output': output, 'feedback': f'In Zeile {error.lineno} stimmt die Schreibweise noch nicht. {tip}\nPython: {error.msg}'}
    except AssertionError as error:
        return {'ok': False, 'output': output, 'feedback': str(error) or 'Das Ergebnis passt noch nicht zum Auftrag. Vergleiche die Ausgabe mit dem Beispiel.'}
    except Exception as error:
        tips = {NameError: 'Dieser Name ist noch nicht bekannt. Prüfe die Schreibweise und ob du die Variable vorher angelegt hast.', TypeError: 'Diese Werte passen für die gewählte Operation nicht zusammen. Prüfe, ob du Zahlen oder Texte verwendest.', IndexError: 'Diesen Listenplatz gibt es nicht. Die Zählung beginnt bei 0.', KeyError: 'Diesen Schlüssel gibt es im Dictionary nicht. Prüfe die Schreibweise.', RecursionError: 'Die Funktion ruft sich zu oft selbst auf. Prüfe deinen Funktionsaufruf.'}
        location = ''
        for frame in traceback.extract_tb(error.__traceback__):
            if frame.filename == '<Dein Code>':
                location = f' (Zeile {frame.lineno})'
        return {'ok': False, 'output': output, 'feedback': tips.get(type(error), 'Der Code konnte noch nicht fertig ausgeführt werden.') + f'\n{type(error).__name__}{location}: {error}'}
