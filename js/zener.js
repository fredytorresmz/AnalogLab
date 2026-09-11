(()=>{"use strict";const {$,$$}=window.AL;

function solvePoint(Vi,Rs,Vz,RL,Imin,Imax){
  const Vth=Vi*RL/(Rs+RL);
  if(Vth<Vz){
    const I=Vi/(Rs+RL);
    return {Vth,VL:Vth,Is:I,IL:I,Iz:0,state:"OFF",cls:"off",
      msg:"La tensión del divisor sin Zener no alcanza VZ."};
  }
  let Is=(Vi-Vz)/Rs,IL=Vz/RL,Iz=Is-IL;
  if(Iz<0){
    const I=Vi/(Rs+RL);
    return {Vth,VL:Vth,Is:I,IL:I,Iz:0,state:"OFF",cls:"off",
      msg:"La carga exige más corriente de la disponible; la hipótesis de regulación no es válida."};
  }
  if(Iz<Imin) return {Vth,VL:Vz,Is,IL,Iz,state:"MARGEN INSUFICIENTE",cls:"knee",
      msg:"El Zener conduce, pero la corriente es menor que el mínimo de diseño seleccionado."};
  if(Iz>Imax) return {Vth,VL:Vz,Is,IL,Iz,state:"SOBRECORRIENTE",cls:"danger",
      msg:"La corriente Zener supera el máximo de diseño seleccionado."};
  return {Vth,VL:Vz,Is,IL,Iz,state:"REGULACIÓN",cls:"ok",
      msg:"La corriente Zener está dentro del intervalo de diseño seleccionado."};
}

function drawCurve(vz=6.8,iz=24,imin=5,imax=50){
  const el=$('#zCurve');if(!el)return;
  const W=760,H=420,L=70,R=25,T=30,B=55,gw=W-L-R,gh=H-T-B;
  const x=v=>L+(v+12)/16*gw,y=i=>T+gh-(i+12)/90*gh;
  let h=`<rect width="${W}" height="${H}" rx="12" fill="var(--paper)"/>
  <line x1="${L}" y1="${y(0)}" x2="${L+gw}" y2="${y(0)}" stroke="currentColor"/>
  <line x1="${x(0)}" y1="${T}" x2="${x(0)}" y2="${T+gh}" stroke="currentColor"/>`;
  let pts=[];
  for(let v=-12;v<=0;v+=.08){
    let a=Math.abs(v),i=a<vz?-.15:-(Math.min(78,(a-vz)*45+1));
    pts.push([v,i]);
  }
  for(let v=0;v<=4;v+=.05){
    let i=v<.62?0:Math.min(70,Math.exp((v-.62)*6)*.45);pts.push([v,i]);
  }
  const p=pts.map((q,i)=>`${i?'L':'M'}${x(q[0]).toFixed(1)},${y(q[1]).toFixed(1)}`).join(' ');
  h+=`<rect x="${x(-vz-.65)}" y="${y(-imax)}" width="${Math.max(5,x(-vz+.1)-x(-vz-.65))}" height="${Math.abs(y(-imin)-y(-imax))}" fill="var(--green2)" opacity=".9"/>
  <path d="${p}" fill="none" stroke="var(--blue)" stroke-width="4"/>
  <line x1="${x(-vz)}" y1="${T}" x2="${x(-vz)}" y2="${T+gh}" stroke="var(--amber)" stroke-dasharray="7 7"/>
  <circle cx="${x(-vz)}" cy="${y(-iz)}" r="7" fill="var(--red)"/>
  <text x="${x(-vz)+8}" y="${y(-iz)-10}" fill="var(--red)" font-size="13">Q</text>
  <text x="${x(-vz)}" y="${H-18}" text-anchor="middle" fill="var(--amber)" font-size="13">−VZ</text>
  <text x="${L+10}" y="${T+18}" fill="var(--muted)" font-size="12">I</text>
  <text x="${L+gw-8}" y="${y(0)-10}" text-anchor="end" fill="var(--muted)" font-size="12">V</text>`;
  el.innerHTML=h;
}

function values(){
  return {
    mode:$('#zMode')?.value||'fixed',
    Vi:+$('#zVi').value,Rs:+$('#zRs').value,Vz:+$('#zVz').value,RL:+$('#zRl').value,
    Imin:+$('#zImin').value/1000,Imax:+$('#zImax').value/1000
  };
}

function updateText(v){
  $('#zViTxt').textContent=v.Vi.toFixed(1);
  $('#zRsTxt').textContent=v.Rs.toFixed(0);
  $('#zVzTxt').textContent=v.Vz.toFixed(1);
  $('#zRlTxt').textContent=v.RL.toFixed(0);
  $('#zIminTxt').textContent=(v.Imin*1000).toFixed(0);
  $('#zImaxTxt').textContent=(v.Imax*1000).toFixed(0);
}

function renderPoint(v){
  const p=solvePoint(v.Vi,v.Rs,v.Vz,v.RL,v.Imin,v.Imax);
  $('#zVL').textContent=p.VL.toFixed(2)+' V';
  $('#zIS').textContent=(p.Is*1000).toFixed(2)+' mA';
  $('#zIL').textContent=(p.IL*1000).toFixed(2)+' mA';
  $('#zIZ').textContent=(Math.max(0,p.Iz)*1000).toFixed(2)+' mA';
  $('#zP').textContent=(v.Vz*Math.max(0,p.Iz)*1000).toFixed(1)+' mW';
  $('#zTH').textContent=p.Vth.toFixed(2)+' V';
  $('#zState').className='status-card '+p.cls;
  $('#zState').innerHTML=`<b>${p.state}</b><span>${p.msg}</span>`;
  drawCurve(v.Vz,Math.max(0,p.Iz)*1000,v.Imin*1000,v.Imax*1000);
  return p;
}

function chartAxes(xmin,xmax,ymin,ymax,xlab,ylab){
  return window.AL.axes(xmin,xmax,ymin,ymax,xlab,ylab);
}
function path(points,x,y){
  return points.map((p,i)=>`${i?'L':'M'}${x(p[0]).toFixed(1)},${y(p[1]).toFixed(1)}`).join(' ');
}

function drawCase(v,p){
  const el=$('#zCaseChart');if(!el)return;
  let a,pts=[],summary='',mode=v.mode;
  if(mode==='fixed'){
    a=chartAxes(0,3,0,Math.max(60,v.Imax*1000*1.25),'corrientes','mA');
    const vals=[p.IL*1000,Math.max(0,p.Iz)*1000,p.Is*1000];
    let h=a.h+`<text x="${a.L}" y="20" fill="var(--navy)" font-size="16" font-weight="700">Balance de corriente en el punto actual</text>`;
    vals.forEach((val,i)=>{
      const bx=a.x(i+.55),bw=70,yy=a.y(val),base=a.y(0);
      const col=i===0?'var(--amber)':i===1?'var(--green)':'var(--blue)';
      h+=`<rect x="${bx-bw/2}" y="${yy}" width="${bw}" height="${base-yy}" rx="8" fill="${col}" opacity=".86"/>
      <text x="${bx}" y="${base+25}" text-anchor="middle" fill="var(--muted)" font-size="12">${['IL','IZ','IS'][i]}</text>
      <text x="${bx}" y="${yy-8}" text-anchor="middle" fill="${col}" font-size="12">${val.toFixed(1)}</text>`;
    });
    el.innerHTML=h;
    summary=`KCL: <b>I<sub>S</sub> ≈ ${(p.Is*1000).toFixed(2)} mA</b> y <b>I<sub>Z</sub>+I<sub>L</sub> ≈ ${((Math.max(0,p.Iz)+p.IL)*1000).toFixed(2)} mA</b>.`;
  }else if(mode==='r'){
    const IL=v.Vz/v.RL;
    const rmin=(v.Vi-v.Vz)/(IL+v.Imax),rmax=(v.Vi-v.Vz)/(IL+v.Imin);
    a=chartAxes(100,1000,0,Math.max(80,v.Imax*1000*1.25),'RS (Ω)','IZ (mA)');
    for(let R=100;R<=1000;R+=5){
      const q=solvePoint(v.Vi,R,v.Vz,v.RL,v.Imin,v.Imax);
      pts.push([R,Math.max(0,q.Iz)*1000]);
    }
    let h=a.h+`<rect x="${a.x(Math.max(100,rmin))}" y="${a.T}" width="${Math.max(0,a.x(Math.min(1000,rmax))-a.x(Math.max(100,rmin)))}" height="${a.gh}" fill="var(--green2)" opacity=".7"/>
    <path d="${path(pts,a.x,a.y)}" fill="none" stroke="var(--blue)" stroke-width="4"/>
    <line x1="${a.x(v.Rs)}" y1="${a.T}" x2="${a.x(v.Rs)}" y2="${a.T+a.gh}" stroke="var(--red)" stroke-width="3"/>
    <text x="${a.L}" y="20" fill="var(--navy)" font-size="16" font-weight="700">IZ frente a la resistencia serie</text>`;
    el.innerHTML=h;
    summary=`Rango calculado: <b>${rmin.toFixed(1)} Ω ≤ R<sub>S</sub> ≤ ${rmax.toFixed(1)} Ω</b>. Al aumentar R<sub>S</sub>, I<sub>Z</sub> disminuye.`;
  }else if(mode==='rl'){
    const Is=(v.Vi-v.Vz)/v.Rs;
    const ilmax=Is-v.Imin;
    const rlmin=ilmax>0?v.Vz/ilmax:Infinity;
    a=chartAxes(100,3000,0,Math.max(80,v.Imax*1000*1.25),'RL (Ω)','IZ (mA)');
    for(let RL=100;RL<=3000;RL+=15){
      const q=solvePoint(v.Vi,v.Rs,v.Vz,RL,v.Imin,v.Imax);
      pts.push([RL,Math.max(0,q.Iz)*1000]);
    }
    let h=a.h+`<rect x="${a.x(Math.max(100,rlmin))}" y="${a.T}" width="${Math.max(0,a.x(3000)-a.x(Math.max(100,rlmin)))}" height="${a.gh}" fill="var(--green2)" opacity=".7"/>
    <path d="${path(pts,a.x,a.y)}" fill="none" stroke="var(--blue)" stroke-width="4"/>
    <line x1="${a.x(v.RL)}" y1="${a.T}" x2="${a.x(v.RL)}" y2="${a.T+a.gh}" stroke="var(--red)" stroke-width="3"/>
    <text x="${a.L}" y="20" fill="var(--navy)" font-size="16" font-weight="700">IZ frente a la carga</text>`;
    el.innerHTML=h;
    summary=Number.isFinite(rlmin)?`Carga mínima para conservar I<sub>Z,min</sub>: <b>R<sub>L,min</sub> ≈ ${rlmin.toFixed(0)} Ω</b>. Menor R<sub>L</sub> significa mayor corriente de carga y menor corriente Zener.`:'No existe margen de corriente suficiente para el criterio actual.';
  }else{
    const IL=v.Vz/v.RL;
    const vmin=v.Vz+v.Rs*(IL+v.Imin),vmax=v.Vz+v.Rs*(IL+v.Imax);
    a=chartAxes(5,35,0,Math.max(90,v.Imax*1000*1.3),'Vi (V)','IZ (mA)');
    for(let Vi=5;Vi<=35;Vi+=.15){
      const q=solvePoint(Vi,v.Rs,v.Vz,v.RL,v.Imin,v.Imax);
      pts.push([Vi,Math.max(0,q.Iz)*1000]);
    }
    let h=a.h+`<rect x="${a.x(Math.max(5,vmin))}" y="${a.T}" width="${Math.max(0,a.x(Math.min(35,vmax))-a.x(Math.max(5,vmin)))}" height="${a.gh}" fill="var(--green2)" opacity=".7"/>
    <path d="${path(pts,a.x,a.y)}" fill="none" stroke="var(--blue)" stroke-width="4"/>
    <line x1="${a.x(v.Vi)}" y1="${a.T}" x2="${a.x(v.Vi)}" y2="${a.T+a.gh}" stroke="var(--red)" stroke-width="3"/>
    <text x="${a.L}" y="20" fill="var(--navy)" font-size="16" font-weight="700">IZ frente a la tensión de entrada</text>`;
    el.innerHTML=h;
    summary=`Rango de entrada: <b>${vmin.toFixed(2)} V ≤ V<sub>i</sub> ≤ ${vmax.toFixed(2)} V</b>.`;
  }
  $('#zRangeSummary').innerHTML=summary;
}

const predConfig={
  fixed:{title:"Punto fijo",text:"En este modo la gráfica compara IL, IZ e IS. ¿Qué debe cumplirse por KCL?",answer:"same"},
  r:{title:"Antes de mover RS",text:"Si aumentas RS manteniendo lo demás fijo, ¿qué ocurre con IZ?",answer:"down"},
  rl:{title:"Antes de mover RL",text:"Si aumentas RL manteniendo lo demás fijo, ¿qué ocurre con IZ?",answer:"up"},
  vi:{title:"Antes de mover Vi",text:"Si aumentas Vi manteniendo lo demás fijo, ¿qué ocurre con IZ?",answer:"up"}
};

function updatePrediction(){
  const mode=$('#zMode').value,c=predConfig[mode];
  $('#zPredictionTitle').textContent=c.title;
  $('#zPredictionText').textContent=c.text;
  $('#zPredictionFb').textContent='';
  $('#zPredictionFb').className='feedback';
}
$$('#zPrediction .prediction-buttons button').forEach(b=>b.addEventListener('click',()=>{
  const mode=$('#zMode').value,c=predConfig[mode],ok=b.dataset.pred===c.answer;
  let msg;
  if(mode==='fixed') msg=ok?'En el punto fijo debe verificarse IS = IZ + IL.':'En este modo no se busca una tendencia: comprueba la igualdad IS = IZ + IL.';
  else if(mode==='r') msg=ok?'Correcto: RS mayor limita más la corriente total y reduce IZ.':'Revisa IS=(Vi−VZ)/RS.';
  else if(mode==='rl') msg=ok?'Correcto: RL mayor reduce IL y deja más corriente para el Zener.':'Revisa IL=VZ/RL y KCL.';
  else msg=ok?'Correcto: Vi mayor aumenta IS y, con IL fija, aumenta IZ.':'Revisa IS=(Vi−VZ)/RS.';
  window.AL.fb($('#zPredictionFb'),msg,ok);
}));

function calc(){
  const v=values();updateText(v);
  const p=renderPoint(v);
  drawCase(v,p);
}

['zVi','zRs','zVz','zRl','zImin','zImax'].forEach(id=>$('#'+id)?.addEventListener('input',calc));
$('#zMode')?.addEventListener('change',()=>{updatePrediction();calc();});
updatePrediction();calc();

const answers={
  zcIs:[33.94,.12],zcIl:[10,.08],zcIz:[23.94,.12],zcPz:[162.8,1.5],
  zcRmin:[186.7,1.2],zcRmax:[746.7,2.5],zcRlmin:[235,2],
  zcVimin:[11.75,.06],zcVimax:[26.60,.08]
};
$('#zCheckNumbers')?.addEventListener('click',()=>{
  let filled=true,ok=0,parts=[];
  Object.entries(answers).forEach(([id,[target,tol]])=>{
    const val=parseFloat($('#'+id)?.value);
    if(!Number.isFinite(val)){filled=false;return}
    const good=Math.abs(val-target)<=tol;
    if(good)ok++;
    parts.push(`${id.replace('zc','')}: ${good?'✓':'revisar'}`);
  });
  if(!filled){window.AL.fb($('#zCheckFb'),'Completa los nueve resultados antes de comprobar.',false);return}
  window.AL.fb($('#zCheckFb'),(ok===9?'Todos los cálculos coinciden. ':'Hay resultados por revisar. ')+parts.join(' · '),ok===9);
});

const openPrompts=[
  {
    prompt:'<b>Situación:</b> el regulador funciona correctamente y luego \(R_L\) disminuye. Explica, sin comenzar por una fórmula, por qué el Zener puede perder regulación aunque \(V_i\) permanezca igual.',
    guide:'<b>Guía de comparación.</b> Mientras el Zener regula y \(V_i\), \(R_S\) y \(V_Z\) permanecen fijos, la corriente serie \(I_S\) es aproximadamente constante. Al disminuir \(R_L\), la carga demanda más corriente porque \(I_L=V_Z/R_L\). Como \(I_S=I_Z+I_L\), el aumento de \(I_L\) deja menos corriente para \(I_Z\). Si \(I_Z\) cae por debajo del mínimo necesario, el Zener abandona la región de regulación y la salida deja de mantenerse aproximadamente en \(V_Z\).'
  },
  {
    prompt:'<b>Situación:</b> un estudiante aumenta \(R_S\) pensando que así “protege mejor” al Zener. Explica qué ventaja y qué riesgo aparecen al aumentar demasiado \(R_S\).',
    guide:'<b>Guía de comparación.</b> Aumentar \(R_S\) reduce la corriente total \(I_S\), lo cual puede ayudar a limitar la corriente máxima del Zener. Sin embargo, si \(R_S\) se hace demasiado grande, la corriente disponible para la rama de salida disminuye y el Zener puede quedar con una corriente menor que \(I_{Z,min}\), perdiéndose la regulación. En resumen: más protección frente a sobrecorriente, pero menos margen de regulación.'
  },
  {
    prompt:'<b>Situación:</b> la carga se desconecta mientras la fuente permanece igual. Explica por qué esta condición suele ser crítica para la potencia del Zener.',
    guide:'<b>Guía de comparación.</b> Cuando la carga se desconecta, \(I_L	o0\). La corriente serie no desaparece automáticamente; en un modelo de regulación se mantiene aproximadamente \(I_S=(V_i-V_Z)/R_S\). Como \(I_S=I_Z+I_L\), al hacerse \(I_L\) casi cero, una fracción mayor de la corriente pasa por el Zener. Eso incrementa \(I_Z\) y, por tanto, la potencia \(P_Z=V_ZI_Z\), por lo que esta condición es crítica para la verificación térmica.'
  },
  {
    prompt:'<b>Situación:</b> en una fuente rectificada con capacitor, el estudiante solo verifica el valor pico del capacitor. Explica por qué también debe revisar el valor valle \(V_{C,min}\) antes del regulador Zener.',
    guide:'<b>Guía de comparación.</b> El valor pico del capacitor no representa el peor caso para conservar la regulación. Cuando el capacitor se descarga entre recargas, la tensión cae hasta un valor valle \(V_{C,min}\). Si ese valle queda por debajo de la tensión mínima requerida por el regulador, la corriente del Zener puede ser insuficiente y el circuito salir de regulación. Por eso se verifica tanto el máximo para potencia como el mínimo para margen de corriente.'
  }
];
let currentOpen=0;
function setOpenPrompt(force){
  let next=Math.floor(Math.random()*openPrompts.length);
  if(force!==true && openPrompts.length>1){while(next===currentOpen)next=Math.floor(Math.random()*openPrompts.length)}
  currentOpen=next;
  const p=openPrompts[currentOpen];
  $('#zOpenPrompt').innerHTML=p.prompt;
  $('#zOpen').value='';
  const g=$('#zOpenGuide');
  g.innerHTML='';
  g.className='guide';
  window.AL.typeset($('#zOpenPrompt'));
}
$('#zOpenNew')?.addEventListener('click',()=>setOpenPrompt(false));
$('#zOpenGuideBtn')?.addEventListener('click',()=>{
  const ta=$('#zOpen'),g=$('#zOpenGuide');
  if((ta?.value.trim().length||0)<45){
    g.innerHTML='Escribe primero una explicación completa: menciona el comportamiento físico del circuito y luego compara con la guía.';
    g.className='guide show';return;
  }
  g.innerHTML=openPrompts[currentOpen].guide;
  g.className='guide show';window.AL.typeset(g);
});
setOpenPrompt(true);
})();