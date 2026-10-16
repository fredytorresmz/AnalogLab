(()=>{'use strict';
function val(id){return Number(document.getElementById(id)?.value||0)}
const f=(n,d=2)=>Number(n).toFixed(d);
function updateRe(){const ie=val('acIE'),vt=val('acTemp'),r=vt/ie;
document.getElementById('acIEText').textContent=f(ie,2);document.getElementById('acVTText').textContent=vt;document.getElementById('acREValue').textContent=f(r,2)+' Ω';
document.getElementById('acREMeaning').textContent=ie<=1?'Corriente pequeña: la resistencia interna aumenta.':ie>=5?'Corriente grande: la resistencia interna disminuye.':'Al duplicar IE, la resistencia re se reduce aproximadamente a la mitad.';}
function updateSim(){let ie=val('simIe'),rc=val('simRc'),rl=val('simRl'),rex=val('simRe');let re=26/ie,r=1000*rc*rl/(rc+rl),a=-r/(re+rex);
for(const [id,s] of Object.entries({simIeLabel:f(ie,2)+' mA',simRcLabel:f(rc,1)+' kΩ',simRlLabel:f(rl,1)+' kΩ',simReLabel:f(rex,0)+' Ω',simDynamicRe:f(re,1)+' Ω',simEffectiveRc:f(r/1000,2)+' kΩ',simAv:f(a,1)})){const e=document.getElementById(id);if(e)e.textContent=s;}
document.getElementById('simObservation').textContent=rex>0?'La resistencia no puenteada en el emisor reduce la ganancia en magnitud.':'Sin degeneración de emisor, la ganancia calculada puede ser grande; revisa la amplitud admisible para evitar recorte.';}
['acIE','acTemp'].forEach(id=>document.getElementById(id)?.addEventListener('input',updateRe));['simIe','simRc','simRl','simRe'].forEach(id=>document.getElementById(id)?.addEventListener('input',updateSim));updateRe();updateSim();
})();

/* v14.5: evaluación formativa con cuatro ejercicios numéricos aleatorizados */
(()=>{'use strict';
const host=document.getElementById('ac145Challenge'),grade=document.getElementById('ac145Grade');
if(!host||!grade)return;
const choose=(a)=>a[Math.floor(Math.random()*a.length)];
const fmt=n=>Number(n).toFixed(2);
const para=(r,c)=>r*c/(r+c);
let questions=[];
function generate(){
const ie1=choose([0.5,1,1.25,2,2.5,4,5]);
const rc=choose([2.2,3.3,4.7]); const rl=choose([4.7,10,15]);
const ie2=choose([1,1.3,2,2.6,4]);const rc2=choose([2.2,3.3,4.7]);const rl2=choose([4.7,10,15]);
const ie3=choose([1,1.5,2,2.5,4]); const re=choose([0.68,1,2.2]);const rl3=choose([1,2.2,4.7]);
questions=[
 {name:'1 · Resistencia dinámica',q:`A 25 °C, si I<sub>EQ</sub> = ${ie1} mA, calcula r<sub>e</sub>.`,unit:'Ω',a:26/ie1,hint:'Divide 26 mV entre I<sub>EQ</sub> en mA; el resultado queda en ohmios.',tol:.035},
 {name:'2 · Carga en paralelo',q:`Para R<sub>C</sub> = ${rc} kΩ y R<sub>L</sub> = ${rl} kΩ, calcula R<sub>C</sub> || R<sub>L</sub>.`,unit:'kΩ',a:para(rc,rl),hint:'Usa R<sub>eq</sub> = R<sub>C</sub>R<sub>L</sub>/(R<sub>C</sub>+R<sub>L</sub>).',tol:.04},
 {name:'3 · Emisor común (fase)',q:`CE con emisor puenteado: I<sub>EQ</sub> = ${ie2} mA, R<sub>C</sub> = ${rc2} kΩ y R<sub>L</sub> = ${rl2} kΩ. Calcula A<sub>v</sub> desde la base (con signo).`,unit:'V/V',a:-(1000*para(rc2,rl2))/(26/ie2),hint:'r<sub>e</sub>=26/I<sub>E</sub> en Ω; incluye R<sub>C</sub>||R<sub>L</sub>. La ganancia CE es negativa.',tol:.04},
 {name:'4 · Seguidor de emisor',q:`CC: I<sub>EQ</sub> = ${ie3} mA, R<sub>E</sub> = ${re} kΩ, R<sub>L</sub> = ${rl3} kΩ. Calcula A<sub>v</sub> desde la base.`,unit:'V/V',a:1000*para(re,rl3)/(1000*para(re,rl3)+26/ie3),hint:"Primero R′E=R<sub>E</sub>||R<sub>L</sub>. A<sub>v</sub>=R′E/(R′E+r<sub>e</sub>), positivo y menor que 1.",tol:.025}
];
host.innerHTML=questions.map((q,i)=>`<div class="ac145-task"><h4>${q.name}</h4><p>${q.q}</p><label for="ac145Input${i}">Tu respuesta (${q.unit})</label><input inputmode="decimal" autocomplete="off" id="ac145Input${i}" aria-describedby="ac145Feedback${i}" placeholder="Escribe un número"/><div class="ac145-result" id="ac145Feedback${i}"></div></div>`).join('');
grade.textContent='Resuelve los cuatro apartados y pulsa “Calificar los 4 cálculos”. Se admiten decimales con coma o punto.';
if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([host]).catch(()=>{});
}
function check(){let ok=0;questions.forEach((q,i)=>{
 const inp=document.getElementById('ac145Input'+i),out=document.getElementById('ac145Feedback'+i);
 const v=Number(inp.value.trim().replace(',','.')); const valid=inp.value.trim()!==''&&Number.isFinite(v);
 const hit=valid&&Math.abs(v-q.a)<=Math.max(Math.abs(q.a)*q.tol,0.03);
 if(hit)ok++;out.className='ac145-result '+(hit?'good':'bad');
 out.innerHTML=hit?`✓ Correcto. Valor aproximado: <b>${fmt(q.a)} ${q.unit}</b>.`:`Revisa el procedimiento. ${q.hint} Resultado orientativo: <b>${fmt(q.a)} ${q.unit}</b>.`;
});grade.textContent=`Resultado: ${ok}/4 · Nota formativa ${(5*ok/4).toFixed(2)} / 5,00. Puedes realizar otro intento con datos nuevos.`;}
document.getElementById('ac145New')?.addEventListener('click',generate);
document.getElementById('ac145Check')?.addEventListener('click',check);
generate();
})();
