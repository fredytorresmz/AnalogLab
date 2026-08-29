(()=>{"use strict";
const {$,$$}=window.AL,wrap=$('#tallerList');

window.TALLER_TEORICO.forEach(item=>{
  let el=document.createElement('article');
  el.className='taller-item';
  let input=item.type==='open'
    ? '<textarea class="response" placeholder="Escribe una idea, explicación o procedimiento..."></textarea>'
    : item.type==='numeric'
      ? `<div class="grid2"><input class="num" type="number" step="any" placeholder="Resultado"><div class="panel"><b>Unidad:</b> ${item.unit}</div></div>`
      : `<div class="options">${item.options.map((o,i)=>`<button data-i="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}</div>`;

  el.innerHTML=`<span class="eyebrow">${item.section} · ${item.n}</span><h3>${item.prompt}</h3>${input}
  <div class="buttons"><button class="btn small h1">Pista 1</button><button class="btn small h2">Pista 2</button>
  <button class="btn small primary attempt">Registrar / comprobar</button><button class="btn small guideBtn" disabled>Respuesta orientativa</button></div>
  <p class="feedback"></p><div class="hint hint1"></div><div class="hint hint2"></div><div class="guide"></div>`;

  let attempted=false,fb=$('.feedback',el),g=$('.guide',el),gb=$('.guideBtn',el);

  $('.h1',el).addEventListener('click',()=>{
    let e=$('.hint1',el);e.innerHTML=item.h1||'Revisa el concepto principal del módulo.';
    window.AL.typeset(e);e.classList.toggle('show')
  });
  $('.h2',el).addEventListener('click',()=>{
    let e=$('.hint2',el);e.innerHTML=item.h2||'Vuelve al ejemplo resuelto del módulo.';
    window.AL.typeset(e);e.classList.toggle('show')
  });

  if(item.type==='mcq'){
    $$('.options button',el).forEach(b=>b.addEventListener('click',()=>{
      el.dataset.choice=b.dataset.i;
      fb.innerHTML=item.feedback[+b.dataset.i];
      window.AL.typeset(fb);
      fb.className='feedback '+(+b.dataset.i===item.answer?'ok':'bad')
    }))
  }

  $('.attempt',el).addEventListener('click',()=>{
    let okAttempt=false;
    if(item.type==='open') okAttempt=$('.response',el).value.trim().length>=8;
    else if(item.type==='numeric'){
      let x=parseFloat($('.num',el).value);
      okAttempt=Number.isFinite(x);
      if(okAttempt){
        let ok=Math.abs(x-item.answer)<=item.tol;
        window.AL.fb(fb,(ok?'Resultado correcto. ':'Revisa el cálculo. ')+item.guide,ok)
      }
    } else okAttempt=el.dataset.choice!==undefined;

    if(!okAttempt){
      window.AL.fb(fb,'Registra primero una respuesta o un procedimiento.',false);
      return;
    }
    attempted=true;gb.disabled=false;$('.attempt',el).textContent='✓ Intento registrado'
  });

  gb.addEventListener('click',()=>{
    if(!attempted)return;
    g.innerHTML=item.guide;window.AL.typeset(g);g.classList.toggle('show')
  });

  wrap.appendChild(el);window.AL.typeset(el)
});

const pa=$('#practicalAnswers');
const answers=window.RESPUESTAS_TALLER_PRACTICO||[];

if(answers.length){
  const groups=[...new Set(answers.map(x=>x.group))];
  pa.innerHTML=groups.map(group=>{
    const items=answers.filter(x=>x.group===group).map(x=>`
      <details class="${x.warning?'answer-warning':''}">
        <summary>Ejercicio ${x.n} · ${x.title}</summary>
        <div class="answer-detail">
          <p><b>Resultado de referencia</b></p>
          <div class="formula">${x.answer}</div>
          <details class="analysis-detail">
            <summary>Ver análisis matemático</summary>
            <div>${x.analysis||''}</div>
          </details>
        </div>
      </details>`).join('');
    return `<div class="answer-group"><h3>${group}</h3>${items}</div>`;
  }).join('');
  window.AL.typeset(pa);
}else{
  pa.innerHTML='<p class="muted">No hay respuestas cargadas.</p>';
}
})();