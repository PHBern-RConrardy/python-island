import { loadPyodide } from './vendor/pyodide.mjs';
let py;
try {
  py = await loadPyodide({indexURL:new URL('./vendor/',import.meta.url).href});
  const response = await fetch(new URL('./validator.py',import.meta.url));
  if(!response.ok) throw new Error('Aufgabenprüfung konnte nicht geladen werden.');
  py.runPython(await response.text());
  postMessage({type:'ready'});
} catch(error) { postMessage({type:'load-error',message:String(error)}); }
self.onmessage = ({data}) => {
  if(!py) return;
  try {
    py.globals.set('student_source',data.code);
    py.globals.set('task_json',JSON.stringify(data.task));
    py.globals.set('task_index',data.index);
    const result = py.runPython('import json\njson.dumps(validate(student_source, json.loads(task_json), task_index))');
    postMessage({type:'result',...JSON.parse(result)});
  } catch(error) {postMessage({type:'result',ok:false,output:'',feedback:'Die Ausführung wurde unterbrochen: '+String(error)});}
};
