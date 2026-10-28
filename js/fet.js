/** AnalogLab FET: modelo de canal largo por tramos. La curva es formativa, no hoja de datos. */
(() => {
'use strict';
const $=(s)=>document.querySelector(s);
const set=(id,value)=>{const e=$('#'+id);if(e)e.textContent=value};
const num=(id,def)=>{const e=$('#'+id); return e?Number(e.value):def};
function parameters(){return {Vdd:num('fetVdd',24),R1:num('fetR1',22),R2:num('fetR2',10),Rd:num('fetRd',1.8),Rs:num('fetRs',.82),Vth:num('fetVth',2.5),k:num('fetK',.8)}};
function solve(p){
  // V en voltios, I en mA, resistencias de drenador y fuente en kΩ.
  const Vg=p.Vdd*p.R2/(p.R1+p.R2),x=Vg-p.Vth;
  let rejectedRoot=null;
  if(x<=0)return {Vg,Vgs:Vg,Id:0,Vds:p.Vdd,frontier:0,gm:0,region:'corte',rejectedRoot};
  // Ecuación intrínseca: región de saturación ID=k*Vov²; triodo ID=k*(2Vov VDS-VDS²).
  // ID = Idispositivo(ID) con KVL: VGS=VG-ID*RS, VDS=VDD-ID*(RD+RS).
  function intrinsic(i){const ov=Vg-i*p.Rs-p.Vth,ds=p.Vdd-i*(p.Rd+p.Rs);
    if(ov<=0||ds<=0)return 0;
    return ds>=ov?p.k*ov*ov:p.k*(2*ov*ds-ds*ds);
  }
  let lo=0,hi=p.Vdd/(p.Rd+p.Rs);
  for(let it=0;it<110;it++){
    const mid=(lo+hi)/2;
    if(mid<intrinsic(mid))lo=mid;else hi=mid;
  }
  const Id=(lo+hi)/2,Vgs=Vg-Id*p.Rs,Vds=p.Vdd-Id*(p.Rd+p.Rs);
  const frontier=Math.max(0,Vgs-p.Vth);
  const region=Vds+1e-8>=frontier?'saturacion':'triodo';
  // Transconductancia incremental de la rama intrínseca a VDS constante.
  const gm=region==='saturacion'?2*p.k*frontier:2*p.k*Vds;
  // Ambas raíces de la hipótesis de saturación, sin asumir que esta región se verifica.
  if(p.Rs>0){
    const a=p.k*p.Rs*p.Rs,b=-(1+2*p.k*p.Rs*x),c=p.k*x*x,delta=Math.max(0,b*b-4*a*c);
    const r1=(-b+Math.sqrt(delta))/(2*a),r2=(-b-Math.sqrt(delta))/(2*a);
    const upper=Math.max(r1,r2),vgsUpper=Vg-upper*p.Rs;
    rejectedRoot={id:upper,vgs:vgsUpper,reason:vgsUpper<p.Vth?'VGS cae por debajo del umbral':'requiere verificar el régimen de operación'};
  }
  return {Vg,Vgs,Id,Vds,frontier,gm,region,rejectedRoot};
}
function plot(p,q){const el=$('#fetCurveChart');if(!el)return;
 const W=720,H=390,L=75,R=28,T=45,B=75,maxX=Math.max(8,p.Vdd*.5),maxY=Math.max(8,p.k*Math.max(0,maxX-p.Vth)**2*.28,q.Id*1.55),w=W-L-R,h=H-T-B;
 const xx=v=>L+v/maxX*w,yy=i=>T+h-i/maxY*h;
 const line=[];for(let n=0;n<=220;n++){const v=p.Vth+(maxX-p.Vth)*n/220,id=p.k*(v-p.Vth)**2;if(id<=maxY)line.push([xx(v),yy(id)]);}
 const path=line.map((pt,i)=>(i?'L':'M')+pt[0].toFixed(2)+','+pt[1].toFixed(2)).join(' ');
 const ticks=[];for(let i=0;i<=4;i++){const v=i*maxX/4,ii=i*maxY/4;ticks.push(`<text x="${xx(v)}" y="${T+h+25}" text-anchor="middle" fill="currentColor" font-size="13">${v.toFixed(1)}</text><text x="${L-12}" y="${yy(ii)+4}" text-anchor="end" fill="currentColor" font-size="13">${ii.toFixed(1)}</text>`)}
 let ref=`<rect width="${W}" height="${H}" rx="12" fill="var(--paper)"/><text x="25" y="27" fill="currentColor" font-size="17" font-weight="bold">I_D–V_GS: modelo cuadrático ilustrativo</text><path d="M${L} ${T}V${T+h}H${W-R}" fill="none" stroke="currentColor" stroke-width="2"/>${ticks.join('')}<text x="20" y="51" fill="currentColor" font-size="14">I_D (mA)</text><text x="${W/2}" y="${H-16}" fill="currentColor" font-size="14" text-anchor="middle">V_GS (V)</text><path d="${path}" fill="none" stroke="var(--blue)" stroke-width="3.5"/><path d="M${xx(p.Vth)} ${T}V${T+h}" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="5 5"/><text x="${xx(p.Vth)+8}" y="${T+20}" fill="var(--red)" font-size="13">Vth=${p.Vth.toFixed(2)} V</text>`;
 if(p.Rs>0){let pts=[];for(let i=0;i<=120;i++){const v=i*maxX/120,id=(q.Vg-v)/p.Rs;if(id>=0&&id<=maxY)pts.push([xx(v),yy(id)]);}ref+=`<path d="${pts.map((z,i)=>(i?'L':'M')+z[0].toFixed(1)+','+z[1].toFixed(1)).join(' ')}" fill="none" stroke="var(--amber)" stroke-width="2.5" stroke-dasharray="7 5"/>`}
 if(q.Id>0&&q.Vgs>=0&&q.Vgs<=maxX&&q.Id<=maxY){ref+=`<circle cx="${xx(q.Vgs)}" cy="${yy(q.Id)}" r="7" fill="var(--red)"/><path d="M${xx(q.Vgs)} ${yy(q.Id)}V${T+h} M${xx(q.Vgs)} ${yy(q.Id)}H${L}" stroke="var(--red)" stroke-width="1.3" stroke-dasharray="4 4"/><text x="${Math.min(W-160,xx(q.Vgs)+12)}" y="${Math.max(40,yy(q.Id)-12)}" fill="var(--red)" font-size="14" font-weight="700">Q = ${q.Id.toFixed(2)} mA</text>`;}
 ref+=`<text x="${L+12}" y="${T+h+52}" fill="currentColor" font-size="12">Azul: modelo de saturación · Amarillo: línea de polarización · Rojo: punto Q</text>`;
 el.innerHTML=`<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Gráfica de transferencia del modelo ideal MOSFET con punto Q y línea de polarización">${ref}</svg>`;
}
function update(){const p=parameters(),q=solve(p);
 [['fetVddTxt',p.Vdd,1],['fetR1Txt',p.R1,1],['fetR2Txt',p.R2,1],['fetRdTxt',p.Rd,2],['fetRsTxt',p.Rs,2],['fetVthTxt',p.Vth,2],['fetKTxt',p.k,2]].forEach(([id,v,n])=>set(id,v.toFixed(n)));
 set('fetResVg',q.Vg.toFixed(2)+' V');set('fetResVgs',q.Vgs.toFixed(2)+' V');set('fetResId',q.Id.toFixed(3)+' mA');set('fetResVds',q.Vds.toFixed(2)+' V');set('fetResVdssat',q.frontier.toFixed(2)+' V');set('fetResGm',q.gm.toFixed(2)+' mS');
 const av=q.region==='saturacion'?-q.gm*p.Rd/(1+q.gm*p.Rs):null;
 set('fetResAv',av===null?'No aplicable en corte/triodo':av.toFixed(2)+' V/V (sin carga, ro→∞)');
 const st=$('#fetState');if(st){st.className='status-card '+(q.region==='saturacion'?'ok':q.region==='triodo'?'danger':'off');st.innerHTML=`<b>${q.region==='saturacion'?'REGIÓN DE SATURACIÓN (MODELO ANALÓGICO)':q.region==='triodo'?'REGIÓN ÓHMICA / TRIODO':'CORTE'}</b><span>${q.region==='saturacion'?'Se cumple VDS ≥ VGS − Vth. La estimación de ganancia ideal es aplicable bajo las hipótesis indicadas.':q.region==='triodo'?'No se puede usar ID=k(VGS−Vth)² ni la fórmula de ganancia de saturación; se calculó ID con el modelo por tramos.':'En el modelo ideal VGS≤Vth; la corriente de drenador se aproxima a cero.'}</span>`;}
 const root=$('#fetRootExplanation');if(root){root.textContent=q.rejectedRoot?`La ecuación cuadrática en saturación produce también la raíz ID=${q.rejectedRoot.id.toFixed(3)} mA, que implicaría VGS=${q.rejectedRoot.vgs.toFixed(2)} V: ${q.rejectedRoot.reason}. El punto mostrado se obtiene comprobando primero las regiones y resolviendo el modelo por tramos.`:'El transistor está en corte para estos parámetros: no es válido aplicar la ecuación de saturación como si existiera corriente de canal.';}
 plot(p,q);
}
['fetVdd','fetR1','fetR2','fetRd','fetRs','fetVth','fetK'].forEach(id=>$('#'+id)?.addEventListener('input',update));
function power(){const I=num('pwrCurrent',10),pB=I*.8,pS=I*I*.025,pM=I*I*.015;set('pwrCurrentTxt',I.toFixed(1)+' A');set('pwrBjt',pB.toFixed(2)+' W');set('pwrMosStd',pS.toFixed(2)+' W');set('pwrMosMod',pM.toFixed(2)+' W');const d=$('#pwrThermalDiag');if(d)d.textContent='Comparación didáctica: se supuso VCE(sat)=0,8 V, RDS(on)=25 mΩ y 15 mΩ. Las pérdidas de PWM y el aumento térmico no están incluidos. Ninguna de estas cifras autoriza un montaje sin revisar la hoja de datos.';}
$('#pwrCurrent')?.addEventListener('input',power);
function compatibility(){const m=$('#mcuSelect')?.value||'esp32', f=$('#mosSelect')?.value||'irlz44n';const voltage=m==='arduino'?5:3.3;const names={irfz44n:'IRFZ44N',irlz44n:'IRLZ44N','2n7000':'2N7000',irf540n:'IRF540N'};let msg='',cl='danger';
if(f==='irlz44n'&&voltage===5){cl='ok';msg='El IRLZ44N cuenta con RDS(on) especificado a VGS=5 V (y también 4 V): la tensión de puerta es prometedora. No implica aprobación automática; comprueba corriente, temperatura, pérdidas, SOA, Qg y corriente del GPIO/driver.'}
else if(f==='2n7000'&&voltage===5){cl='ok';msg='El 2N7000 puede servir para señal y cargas pequeñas según la hoja de datos, pero no se debe asignar aquí una corriente universal ni considerarlo un MOSFET de motor de potencia. La corriente y RDS(on) garantizadas dependen de las condiciones de ensayo.'}
else if(f==='irlz44n'&&voltage===3.3){cl='danger';msg='El datasheet consultado no proporciona un máximo de RDS(on) garantizado exactamente a 3,3 V. Por tanto, no se puede certificar una carga de potencia con este selector: busca otro MOSFET especificado a 2,5/3,3 V o emplea un driver que entregue una tensión de puerta garantizada.'}
else if(f==='2n7000'&&voltage===3.3){msg='VGS(th) no garantiza conducción suficiente. El 2N7000 se especifica para condiciones concretas (por ejemplo 4,5/10 V) y corrientes limitadas. Verifica si puede accionar esa carga o utiliza otro componente.'}
else{msg='Este dispositivo suele tener sus valores bajos de RDS(on) especificados alrededor de VGS=10 V. No presupongas funcionamiento eficiente a 3,3/5 V; utiliza un controlador o elige un MOSFET con especificaciones apropiadas.'}
const el=$('#mcuDiagOut');if(el){el.className='status-card '+cl;el.innerHTML=`<b>${voltage.toFixed(1)} V GPIO → ${names[f]}: ${cl==='ok'?'dato de puerta utilizable':'requiere verificación'}</b><span>${msg}</span>`}}
$('#mcuSelect')?.addEventListener('change',compatibility);$('#mosSelect')?.addEventListener('change',compatibility);
update();power();compatibility();
})();
