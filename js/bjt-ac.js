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