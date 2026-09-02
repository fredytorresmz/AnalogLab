(()=>{"use strict";const {$}=window.AL;
function circuit(){const el=$('#projectCircuit');if(!el)return;el.innerHTML=`<rect width="1280" height="610" rx="18" fill="var(--paper)"/><text x="640" y="42" text-anchor="middle" class="svglabel">Fuente regulada: transformador → puente → filtro → regulador Zener</text><circle cx="90" cy="315" r="42" class="source"/><path d="M65 315 C75 278 85 352 95 315 S115 278 125 315" class="thin"/><text x="42" y="383" class="svgtext">120 V rms</text><line x1="132" y1="280" x2="220" y2="280" class="wire"/><line x1="132" y1="350" x2="220" y2="350" class="wire"/><path d="M220 245 q-30 18 0 36 q-30 18 0 36 q-30 18 0 36 q-30 18 0 36" class="coil"/><path d="M350 245 q30 18 0 36 q30 18 0 36 q30 18 0 36 q30 18 0 36" class="coil"/><line x1="283" y1="230" x2="283" y2="397" stroke="var(--muted)" stroke-width="5"/><line x1="296" y1="230" x2="296" y2="397" stroke="var(--muted)" stroke-width="5"/><text x="235" y="210" class="svgtext">Primario</text><text x="335" y="210" class="svgtext">Secundario</text><line x1="350" y1="280" x2="420" y2="240" class="wire"/><line x1="350" y1="350" x2="420" y2="390" class="wire"/><rect x="420" y="205" width="190" height="220" rx="18" class="soft-block"/><text x="515" y="245" text-anchor="middle" class="svglabel">Puente Si</text><text x="515" y="278" text-anchor="middle" class="svgtext">D1–D4</text><text x="515" y="318" text-anchor="middle" class="svgtext">2 diodos ON</text><text x="515" y="350" text-anchor="middle" class="svgtext">por semiciclo</text><line x1="610" y1="255" x2="1180" y2="255" class="wire"/><line x1="610" y1="425" x2="1180" y2="425" class="wire"/><line x1="735" y1="255" x2="735" y2="300" class="wire"/><line x1="690" y1="305" x2="780" y2="305" class="cap"/><line x1="690" y1="342" x2="780" y2="342" class="cap"/><line x1="735" y1="342" x2="735" y2="425" class="wire"/><text x="790" y="330" class="svglabel">C</text><line x1="650" y1="255" x2="650" y2="290" class="wire"/><polyline points="650,290 625,312 675,334 625,356 675,378 650,400" class="res"/><line x1="650" y1="400" x2="650" y2="425" class="wire"/><text x="605" y="350" class="svgtext">R_B</text><polyline points="825,255 850,232 875,278 900,232 925,278 950,232 975,255" class="res"/><text x="885" y="210" class="svglabel">R_S</text><line x1="975" y1="255" x2="1100" y2="255" class="wire"/><line x1="1035" y1="255" x2="1035" y2="310" class="wire"/><polygon points="1000,342 1070,342 1035,382" class="zener-symbol"/><line x1="1002" y1="326" x2="1068" y2="326" class="wire"/><line x1="1035" y1="382" x2="1035" y2="425" class="wire"/><text x="980" y="372" class="svglabel">Z</text><line x1="1140" y1="255" x2="1140" y2="290" class="wire"/><polyline points="1140,290 1115,312 1165,334 1115,356 1165,378 1140,400" class="res"/><line x1="1140" y1="400" x2="1140" y2="425" class="wire"/><text x="1180" y="352" class="svglabel">R_L</text><text x="720" y="470" class="svgtext">Vraw(t)</text><text x="1080" y="470" class="svgtext">Vo ≈ VZ</text>`}
function simulate(){
const Vrms=+$('#pVrms').value,Cuf=+$('#pC').value,Rb=+$('#pRb').value*1000,Vz=+$('#pVz').value,Rs=+$('#pRs').value,RL=+$('#pRl').value,Imin=+$('#pImin').value/1000,C=Cuf*1e-6,f=60,Vp=Vrms*Math.SQRT2,Vmax=Math.max(0,Vp-1.4),
dt=1/(f*5000),cycles=14,total=cycles/f,steps=Math.floor(total/dt),Tline=1/f,quarter=Tline/4;

// Modelo teórico por tramos mientras Zener regula
const Req=Rb*Rs/(Rb+Rs),tau=Req*C,Vinf=Vz*Rb/(Rb+Rs);
const rectRise=t=>Math.max(0,Vp*Math.sin(2*Math.PI*f*t)-1.4);
const capReg=t1=>Vinf+(Vmax-Vinf)*Math.exp(-(quarter+t1)/tau);
let lo=0,hi=quarter,t1Theo=quarter;
if(rectRise(hi)>=capReg(hi)){
  for(let n=0;n<80;n++){let mid=(lo+hi)/2;if(rectRise(mid)>=capReg(mid))hi=mid;else lo=mid}
  t1Theo=(lo+hi)/2;
}
const tdTheo=quarter+t1Theo,VminTheo=capReg(t1Theo);

let vc=0,data=[],minSteady=1e9,maxSteady=0,minIz=1e9,maxPz=0,maxPr=0;
let prevOn=false,t1Sim=NaN,zeroRef=total-1/(2*f);
for(let k=0;k<=steps;k++){
  let t=k*dt,rect=Math.max(0,Math.abs(Vp*Math.sin(2*Math.PI*f*t))-1.4),threshold=Vz*(1+Rs/RL);
  let vcBefore=vc;
  if(vc>0){
    if(vc>=threshold){
      let ReqOn=Rb*Rs/(Rb+Rs),vinf=Vz*Rb/(Rb+Rs);
      vc=vinf+(vc-vinf)*Math.exp(-dt/(ReqOn*C));
    }else{
      let Re=1/(1/Rb+1/(Rs+RL));
      vc=vc*Math.exp(-dt/(Re*C));
    }
  }
  let on=rect>vc && rect>0;
  if(on)vc=rect;
  if(t>=zeroRef && t<=zeroRef+quarter && on && !prevOn && !Number.isFinite(t1Sim)) t1Sim=t-zeroRef;
  prevOn=on;
  let regulating=vc>=threshold,vo=regulating?Vz:vc*RL/(Rs+RL),is=regulating?Math.max(0,(vc-Vz)/Rs):vc/(Rs+RL),il=vo/RL,iz=regulating?Math.max(0,is-il):0,pz=Vz*iz,pr=regulating?is*is*Rs:(vc/(Rs+RL))**2*Rs;
  if(t>total-4/f){
    minSteady=Math.min(minSteady,vc);maxSteady=Math.max(maxSteady,vc);minIz=Math.min(minIz,iz);maxPz=Math.max(maxPz,pz);maxPr=Math.max(maxPr,pr);
    if(k%12===0)data.push([t-(total-4/f),rect,vc,vo]);
  }
}
const tdSim=Number.isFinite(t1Sim)?quarter+t1Sim:NaN,ripple=maxSteady-minSteady;

$('#pVrmsTxt').textContent=Vrms.toFixed(1);$('#pRbTxt').textContent=(Rb/1000).toFixed(1);$('#pVzTxt').textContent=Vz.toFixed(1);$('#pRsTxt').textContent=Rs;$('#pRlTxt').textContent=RL;$('#pIminTxt').textContent=(Imin*1000).toFixed(0);
$('#pVmax').textContent=maxSteady.toFixed(2)+' V';$('#pVmin').textContent=minSteady.toFixed(2)+' V';$('#pRipple').textContent=ripple.toFixed(2)+' Vpp';$('#pIZ').textContent=(minIz*1000).toFixed(2)+' mA';$('#pPZ').textContent=(maxPz*1000).toFixed(0)+' mW';$('#pPR').textContent=(maxPr*1000).toFixed(0)+' mW';
$('#pT1Theo').textContent=(t1Theo*1000).toFixed(2)+' ms';$('#pTdTheo').textContent=(tdTheo*1000).toFixed(2)+' ms';$('#pVminTheo').textContent=VminTheo.toFixed(2)+' V';
$('#pT1Sim').textContent=Number.isFinite(t1Sim)?(t1Sim*1000).toFixed(2)+' ms':'—';$('#pTdSim').textContent=Number.isFinite(tdSim)?(tdSim*1000).toFixed(2)+' ms':'—';$('#pQuarter').textContent=(quarter*1000).toFixed(2)+' ms';

let state,cls,msg;
if(minIz<Imin-1e-7){state='CAPACITOR / MARGEN INSUFICIENTE';cls='off';msg='En el valle del rizado la corriente Zener cae por debajo del mínimo seleccionado. Aumenta C, reduce carga o rediseña Rs.';}
else if(ripple<0.5){state='REGULA, PERO EL RIZADO CASI NO SE APRECIA';cls='knee';msg='El diseño puede ser eléctricamente válido, pero el capacitor es grande para el objetivo didáctico de esta práctica.';}
else if(ripple>7.5){state='REGULA CON RIZADO MUY ALTO';cls='knee';msg='El fenómeno es muy visible. Comprueba que el valle, la potencia y la calidad de la fuente sigan siendo aceptables.';}
else{state='ZONA DIDÁCTICA RECOMENDADA';cls='ok';msg='El rizado es visible, se distinguen carga y descarga y el valle conserva la corriente Zener mínima elegida.';}
$('#pState').className='status-card '+cls;$('#pState').innerHTML=`<b>${state}</b><span>${msg}</span>`;
draw(data,Vmax,t1Sim,quarter);
}
function draw(data,Vmax,t1Sim,quarter){
const el=$('#projectWave'),W=760,H=430,L=58,R=18,T=25,B=48,gw=W-L-R,gh=H-T-B,dur=4/60,maxY=Math.max(Vmax*1.12,1),x=t=>L+t/dur*gw,y=v=>T+gh-v/maxY*gh,a1=data.map(d=>[d[0],d[1]]),a2=data.map(d=>[d[0],d[2]]),a3=data.map(d=>[d[0],d[3]]);
let shade='',marks='';
if(Number.isFinite(t1Sim)){
  const zero=dur-1/(2*60),prevPeak=zero-quarter,recharge=zero+t1Sim,nextPeak=zero+quarter;
  shade=`<rect x="${x(prevPeak)}" y="${T}" width="${Math.max(0,x(recharge)-x(prevPeak))}" height="${gh}" class="discharge-zone"/><rect x="${x(recharge)}" y="${T}" width="${Math.max(0,x(nextPeak)-x(recharge))}" height="${gh}" class="recharge-zone"/>`;
  marks=`<line x1="${x(zero)}" y1="${T}" x2="${x(zero)}" y2="${T+gh}" class="marker-line"/><line x1="${x(recharge)}" y1="${T}" x2="${x(recharge)}" y2="${T+gh}" class="marker-line strong"/><text x="${(x(zero)+x(recharge))/2}" y="${T+20}" class="svgtext">t₁</text><text x="${(x(prevPeak)+x(recharge))/2}" y="${T+43}" class="svgtext">t_d</text>`;
}
el.innerHTML=`<rect width="${W}" height="${H}" rx="14" fill="var(--paper)"/>${shade}<line x1="${L}" y1="${T+gh}" x2="${L+gw}" y2="${T+gh}" class="axis"/><path d="${a1.map((p,i)=>`${i?'L':'M'}${x(p[0])},${y(p[1])}`).join(' ')}" class="wave rect-wave"/><path d="${a2.map((p,i)=>`${i?'L':'M'}${x(p[0])},${y(p[1])}`).join(' ')}" class="wave cap-wave"/><path d="${a3.map((p,i)=>`${i?'L':'M'}${x(p[0])},${y(p[1])}`).join(' ')}" class="wave output-wave"/>${marks}`;
}
circuit();['#pVrms','#pC','#pRb','#pVz','#pRs','#pRl','#pImin'].forEach(s=>$(s)?.addEventListener('input',simulate));simulate();})();