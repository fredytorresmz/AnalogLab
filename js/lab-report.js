/* AnalogLab · Hoja de resultados de laboratorio · v14.4 */
(()=>{
  'use strict';
  const prefix='analoglab_pwm_lab_v144_';
  const inputs=[...document.querySelectorAll('[data-lab-field]')];
  const checks=[...document.querySelectorAll('[data-lab-check]')];
  const status=document.getElementById('labReportStatus');
  if(!status || !inputs.length)return;
  const all=[...inputs,...checks];
  const fieldKey=(e)=>prefix+(e.dataset.labField||e.dataset.labCheck);
  all.forEach(e=>{
    try{const val=localStorage.getItem(fieldKey(e));if(val!==null){if(e.type==='checkbox')e.checked=val==='true';else e.value=val;}}catch(_){/* storage may be disabled */}
    e.addEventListener(e.type==='checkbox'?'change':'input',()=>{
      try{localStorage.setItem(fieldKey(e),e.type==='checkbox'?String(e.checked):e.value)}catch(_){/* local privacy mode */}
    });
  });
  const labels=[
    ['Posición REG mínima',1],['Posición REG intermedia',2],['Posición REG máxima',3]
  ];
  const get=id=>document.querySelector(`[data-lab-field="${id}"]`)?.value?.trim()||'—';
  const report=()=>{
    const data=[
      'ANALOGLAB · PRÁCTICA NE555 + PUENTE H',
      'Registro de resultados (valores aportados por el grupo)',
      '',
      'A. PWM: posición | f (Hz) | T (ms) | D (%) | método',
      ...labels.map(([lab,i])=>`${lab} | ${get('freq'+i)} | ${get('period'+i)} | ${get('duty'+i)} | ${get('method'+i)}`),
      '',
      'B. Motor: ensayo | V (V) | I (A) | D (%) | observación',
      ...[['Baja conducción',1],['Media conducción',2],['Alta conducción',3]].map(([lab,i])=>`${lab} | ${get('v'+i)} | ${get('i'+i)} | ${get('dm'+i)} | ${get('obs'+i)}`),
      '',
      'Conclusiones:',get('conclusion'),
      '',
      'Nota: «—» significa dato no registrado. No se debe afirmar que un dato simulado fue medido.'
    ];
    return data.join('\n');
  };
  document.getElementById('labCopy')?.addEventListener('click',async()=>{
    const txt=report();
    try{
      await navigator.clipboard.writeText(txt);
      status.textContent='Informe copiado. Pégalo en el documento de resultados de tu grupo.';
    }catch(_){
      const ta=document.createElement('textarea');ta.value=txt;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();
      let ok=false;try{ok=document.execCommand('copy')}catch(_){}ta.remove();
      status.textContent=ok?'Informe copiado.':'No se pudo copiar automáticamente. Selecciona y copia las tablas manualmente.';
    }
  });
  document.getElementById('labClear')?.addEventListener('click',()=>{
    if(!confirm('¿Vaciar las mediciones y conclusiones guardadas en este navegador?'))return;
    inputs.forEach(e=>{e.value='';try{localStorage.removeItem(fieldKey(e))}catch(_){}});
    status.textContent='Se borraron las mediciones y conclusiones. Las casillas de las fases y la nota del cuestionario se mantienen.';
  });
})();
