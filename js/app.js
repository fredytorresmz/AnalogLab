(() => {
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];

  const completed = new Set(JSON.parse(localStorage.getItem('analoglab-completed') || '[]'));
  function updateProgress(){
    $$('.complete-btn').forEach(btn=>{
      const done=completed.has(btn.dataset.complete);
      btn.classList.toggle('done',done);
      btn.textContent=done?'✓ Estudiado':'Marcar como estudiado';
    });
    const pct=Math.round(completed.size/16*100);
    $('#progressText').textContent=pct+'%';
    $('#progressBar').style.width=pct+'%';
  }
  $$('.complete-btn').forEach(btn=>btn.addEventListener('click',()=>{
    const id=btn.dataset.complete;
    completed.has(id)?completed.delete(id):completed.add(id);
    localStorage.setItem('analoglab-completed',JSON.stringify([...completed]));
    updateProgress();
  }));
  updateProgress();

  $('#menuBtn').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
  $$('.chapter-nav a').forEach(a=>a.addEventListener('click',()=>$('#sidebar').classList.remove('open')));
  $('#themeBtn').addEventListener('click',()=>document.body.classList.toggle('dark'));
  $('#classModeBtn').addEventListener('click',()=>{
    document.body.classList.toggle('class-mode');
    $('#classModeBtn').textContent=document.body.classList.contains('class-mode')?'Salir modo clase':'Modo clase';
  });

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        $$('.chapter-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));
      }
    });
  },{rootMargin:'-25% 0px -65% 0px'});
  $$('.chapter').forEach(s=>observer.observe(s));

  function setFeedback(id,msg,good){
    const el=$(id); el.textContent=msg; el.className='feedback '+(good?'good':'bad');
  }
  $$('[data-question="semiconductor"] button').forEach(b=>b.addEventListener('click',()=>setFeedback('#semiconductorFeedback',b.dataset.value==='electrons'?'Correcto. El dopaje donador aporta electrones libres.':'Revisa: en material tipo N, los electrones son mayoritarios.',b.dataset.value==='electrons')));
  $$('[data-question="pn"] button').forEach(b=>b.addEventListener('click',()=>setFeedback('#pnFeedback',b.dataset.value==='decrease'?'Correcto. La polarización directa reduce la barrera efectiva.':'No. En polarización directa la región de agotamiento se estrecha.',b.dataset.value==='decrease')));
  $$('[data-question="onoff"] button').forEach(b=>b.addEventListener('click',()=>setFeedback('#onoffFeedback',b.dataset.value==='off'?'Correcto. 0.2 V es insuficiente para el modelo de 0.7 V.':'No es consistente con el modelo de caída constante.',b.dataset.value==='off')));
  $$('[data-question="slope"] button').forEach(b=>b.addEventListener('click',()=>setFeedback('#slopeFeedback',b.dataset.value==='decrease'?'Correcto: |-1/R| disminuye.':'Recuerda que la pendiente es -1/R.',b.dataset.value==='decrease')));

  function drawAxes(svg,xmax,ymax){
    const W=760,H=430,L=62,R=22,T=22,B=52,gw=W-L-R,gh=H-T-B;
    const x=v=>L+(v/xmax)*gw, y=i=>T+gh-(i/ymax)*gh;
    let h=`<line x1="${L}" y1="${T+gh}" x2="${L+gw}" y2="${T+gh}" stroke="currentColor"/>
      <line x1="${L}" y1="${T}" x2="${L}" y2="${T+gh}" stroke="currentColor"/>`;
    for(let k=0;k<=5;k++){
      const xv=xmax*k/5, xx=x(xv), iv=ymax*k/5, yy=y(iv);
      h+=`<line x1="${xx}" y1="${T+gh}" x2="${xx}" y2="${T+gh+6}" stroke="currentColor"/>
          <text x="${xx}" y="${T+gh+24}" text-anchor="middle" font-size="12" fill="currentColor">${xv.toFixed(2)}</text>
          <line x1="${L-6}" y1="${yy}" x2="${L}" y2="${yy}" stroke="currentColor"/>
          <text x="${L-10}" y="${yy+4}" text-anchor="end" font-size="12" fill="currentColor">${iv.toFixed(1)}</text>`;
    }
    h+=`<text x="${L+gw/2}" y="${H-9}" text-anchor="middle" font-size="14" fill="currentColor">V_D [V]</text>
        <text x="18" y="${T+gh/2}" transform="rotate(-90 18 ${T+gh/2})" text-anchor="middle" font-size="14" fill="currentColor">I_D [mA]</text>`;
    return {W,H,L,R,T,B,gw,gh,x,y,h};
  }

  function shockley(v,Tc,IsPa=1,n=1.8){
    const Is=IsPa*1e-12, Vt=8.617333262e-5*(Tc+273.15);
    return Is*(Math.exp(Math.min(v/(n*Vt),40))-1);
  }
  function renderIV(){
    const T=+$('#ivT').value, Is=+$('#ivIs').value, n=+$('#ivN').value, vd=+$('#ivV').value;
    $('#ivTOut').textContent=T; $('#ivIsOut').textContent=Is.toFixed(1); $('#ivNOut').textContent=n.toFixed(1); $('#ivVOut').textContent=vd.toFixed(3);
    const id=shockley(vd,T,Is,n);
    $('#ivCurrent').textContent=id<1e-3?(id*1e6).toFixed(2)+' µA':(id*1e3).toFixed(2)+' mA';
    const ymax=25, xmax=.9, a=drawAxes($('#ivChart'),xmax,ymax);
    let p=[]; for(let j=0;j<=260;j++){const v=xmax*j/260,im=shockley(v,T,Is,n)*1000;if(im<=ymax*1.15)p.push(`${p.length?'L':'M'}${a.x(v).toFixed(1)},${a.y(Math.min(im,ymax)).toFixed(1)}`)}
    const point=Math.min(id*1000,ymax);
    $('#ivChart').innerHTML=a.h+`<path d="${p.join(' ')}" fill="none" stroke="#d14a61" stroke-width="3"/>
      <circle cx="${a.x(vd)}" cy="${a.y(point)}" r="7" fill="#13a188"/>
      <text x="${a.L+12}" y="${a.T+18}" font-size="13" fill="#d14a61">Shockley</text>`;
  }
  ['#ivT','#ivIs','#ivN','#ivV'].forEach(id=>$(id).addEventListener('input',renderIV)); renderIV();

  const modelText={
    ideal:`<h3>Modelo ideal</h3><p>ON → cortocircuito, OFF → circuito abierto. Es útil para entender topología y estados sin introducir caída directa.</p><p>En conducción: \\(V_D=0\\).</p>`,
    constant:`<h3>Modelo de caída constante</h3><p>Cuando está ON, el diodo se representa por una caída fija \\(V_\\gamma\\). Para silicio suele emplearse 0.7 V en ejercicios introductorios.</p>`,
    piecewise:`<h3>Modelo lineal por tramos</h3><p>Mejora la aproximación incluyendo una resistencia dinámica: \\(V_D=V_\\gamma+I_Dr_d\\).</p>`,
    shockley:`<h3>Modelo exponencial</h3><p>Representa la característica no lineal: \\(I_D=I_S(e^{V_D/(nV_T)}-1)\\). Es el referente de comparación en este módulo.</p>`
  };
  function showModel(k){
    $$('.model-tabs button').forEach(b=>b.classList.toggle('active',b.dataset.modelTab===k));
    $('#modelExplanation').innerHTML=modelText[k];
    if(window.MathJax?.typesetPromise) MathJax.typesetPromise([$('#modelExplanation')]);
  }
  $$('.model-tabs button').forEach(b=>b.addEventListener('click',()=>showModel(b.dataset.modelTab))); showModel('ideal');

  function solveShockleySeries(Vs,R){
    let lo=0,hi=Math.min(Vs,1.5);
    for(let i=0;i<80;i++){let v=(lo+hi)/2,d=shockley(v,25,1,1.8),l=(Vs-v)/R; if(d>l)hi=v;else lo=v;}
    let vd=(lo+hi)/2; return {vd,id:(Vs-vd)/R};
  }
  function renderModelTable(){
    const Vs=Math.max(.01,+$('#cmpVs').value||10), R=Math.max(1,+$('#cmpR').value||1000), Vg=Math.max(0,+$('#cmpVg').value||.7), rd=Math.max(0,+$('#cmpRd').value||10);
    const sh=solveShockleySeries(Vs,R);
    const rows=[
      ['Ideal',0,Vs/R],
      ['Caída constante',Vs>Vg?Vg:Vs,Vs>Vg?(Vs-Vg)/R:0],
      ['Lineal por tramos',0,0],
      ['Shockley',sh.vd,sh.id]
    ];
    const ipw=Vs>Vg?(Vs-Vg)/(R+rd):0; rows[2][2]=ipw; rows[2][1]=Vs>Vg?Vg+ipw*rd:Vs;
    $('#modelTable').innerHTML=rows.map((r,i)=>{
      const err=i===3?0:Math.abs(r[2]-sh.id)/(Math.abs(sh.id)||1)*100;
      return `<tr><td><strong>${r[0]}</strong></td><td>${r[1].toFixed(3)} V</td><td>${(r[2]*1000).toFixed(3)} mA</td><td>${i===3?'Referencia':err.toFixed(2)+' %'}</td></tr>`;
    }).join('');
  }
  ['#cmpVs','#cmpR','#cmpVg','#cmpRd'].forEach(id=>$(id).addEventListener('input',renderModelTable)); renderModelTable();

  const seriesSteps=[
    'Paso 1: aplique KVL: 9 V = V_R + V_D.',
    'Paso 2: con V_D = 0.7 V, entonces V_R = 9 − 0.7 = 8.3 V.',
    'Paso 3: I_D = V_R/R = 8.3 V / 1.2 kΩ = 6.92 mA.',
    'Resultado final: V_D = 0.7 V, V_R = 8.3 V e I_D ≈ 6.92 mA.'
  ];
  let seriesStep=0;
  $('.step-reveal[data-example="series"] button').addEventListener('click',e=>{
    const out=$('.step-reveal[data-example="series"] .reveal-output');
    if(seriesStep>=seriesSteps.length){
      out.innerHTML='';
      seriesStep=0;
      e.target.textContent='Mostrar paso 1';
      return;
    }
    out.innerHTML+=`<p>${seriesSteps[seriesStep]}</p>`;
    seriesStep++;
    e.target.textContent=seriesStep<seriesSteps.length?`Mostrar paso ${seriesStep+1}`:'Reiniciar ejemplo';
  });
  $('#seriesCheck').addEventListener('click',()=>{
    const ans=+$('#seriesAns').value, correct=(15-.7)/2200*1000, ok=Math.abs(ans-correct)<.08;
    setFeedback('#seriesFeedback',ok?`Correcto: I_D ≈ ${correct.toFixed(2)} mA.`:'Revisa V_R=V_S−V_D antes de aplicar I=V_R/R.',ok);
  });
  $('[data-hint="series"]').addEventListener('click',()=>setFeedback('#seriesFeedback','Pista: primero calcule V_R = 15 − 0.7 = 14.3 V.',true));
  $('[data-answer="parallel"]').addEventListener('click',()=>$('#parallelAnswer').classList.toggle('visible'));

  $('#checkBias').addEventListener('click',()=>{
    const va=+$('#vaInput').value,vk=+$('#vkInput').value,vg=Math.max(0,+$('#vgInput').value),vak=va-vk,on=vak>=vg;
    $('#biasResult').innerHTML=`<strong>V_AK = ${vak.toFixed(2)} V</strong><br>${on?`La polarización disponible supera ${vg.toFixed(2)} V: la hipótesis ON puede ser consistente.`:`No alcanza ${vg.toFixed(2)} V: con este modelo el diodo se considera OFF.`}`;
  });

  function renderLed(){
    const Vs=+$('#ledVs').value, I=+$('#ledI').value/1000, Vf=+$('#ledType').value;
    const R=Math.max(0,(Vs-Vf)/I),P=I*I*R;
    $('#ledVsOut').textContent=Vs;$('#ledIOut').textContent=(I*1000).toFixed(0);
    $('#ledR').textContent=R.toFixed(0)+' Ω'; $('#ledP').textContent=(P*1000).toFixed(1)+' mW';
    $('#ledNote').textContent=Vs<=Vf?'La fuente no supera la caída estimada del LED.':'Seleccione un valor comercial igual o ligeramente superior y verifique la corriente real.';
  }
  ['#ledVs','#ledI','#ledType'].forEach(id=>$(id).addEventListener('input',renderLed));renderLed();

  function solveLoad(Vs,Rk,model){
    const R=Rk*1000;
    if(model==='ideal') return {vd:0,id:Vs/R};
    if(model==='constant') return {vd:Vs>.7?.7:Vs,id:Vs>.7?(Vs-.7)/R:0};
    return solveShockleySeries(Vs,R);
  }
  function renderLoad(){
    const Vs=+$('#llVs').value,Rk=+$('#llR').value,m=$('#llModel').value,s=solveLoad(Vs,Rk,m);
    $('#llVsOut').textContent=Vs.toFixed(1);$('#llROut').textContent=Rk.toFixed(2);
    $('#llQ').textContent=`(${s.vd.toFixed(3)} V, ${(s.id*1000).toFixed(2)} mA)`;
    $('#llImax').textContent=(Vs/Rk).toFixed(2)+' mA';
    const xmax=Math.max(1.2,Vs*1.05),ymax=Math.max(2,Vs/Rk*1.15),a=drawAxes($('#loadChart'),xmax,ymax);
    let p=[]; for(let j=0;j<=260;j++){const v=xmax*j/260;let im=m==='ideal'?(v<=0?0:ymax):m==='constant'?(v<.7?0:ymax):shockley(v,25,1,1.8)*1000;if(im<=ymax*1.15)p.push(`${p.length?'L':'M'}${a.x(v).toFixed(1)},${a.y(Math.min(im,ymax)).toFixed(1)}`)}
    $('#loadChart').innerHTML=a.h+`<path d="${p.join(' ')}" fill="none" stroke="#d14a61" stroke-width="3"/>
      <line x1="${a.x(0)}" y1="${a.y(Vs/Rk)}" x2="${a.x(Vs)}" y2="${a.y(0)}" stroke="#2156d8" stroke-width="3"/>
      <circle cx="${a.x(s.vd)}" cy="${a.y(s.id*1000)}" r="7" fill="#14a38b"/>
      <text x="${a.x(s.vd)+10}" y="${a.y(s.id*1000)-10}" fill="currentColor" font-size="13" font-weight="800">Q</text>
      <text x="${a.L+12}" y="${a.T+18}" fill="#d14a61" font-size="13">Curva I–V</text>
      <text x="${a.L+12}" y="${a.T+38}" fill="#2156d8" font-size="13">Recta de carga</text>`;
  }
  ['#llVs','#llR','#llModel'].forEach(id=>$(id).addEventListener('input',renderLoad));renderLoad();

  const exercisePool=[
    {vs:5,r:470,vd:.7},{vs:9,r:1000,vd:.7},{vs:12,r:2200,vd:.7},{vs:15,r:3300,vd:.7},
    {vs:10,r:680,vd:.7},{vs:6,r:820,vd:.7}
  ];
  let currentExercise;
  function newExercise(){
    currentExercise=exercisePool[Math.floor(Math.random()*exercisePool.length)];
    $('#exerciseText').innerHTML=`Una fuente de <strong>${currentExercise.vs} V</strong> alimenta un diodo de silicio mediante <strong>${currentExercise.r} Ω</strong>. Use el modelo de caída constante de ${currentExercise.vd} V. Determine \\(I_D\\) en mA.`;
    $('#exerciseAnswer').value='';$('#exerciseFeedback').textContent='';
    if(window.MathJax?.typesetPromise) MathJax.typesetPromise([$('#exerciseText')]);
  }
  $('#newExercise').addEventListener('click',newExercise);
  $('#exerciseCheck').addEventListener('click',()=>{
    const ans=+$('#exerciseAnswer').value, corr=(currentExercise.vs-currentExercise.vd)/currentExercise.r*1000,ok=Math.abs(ans-corr)<.08;
    setFeedback('#exerciseFeedback',ok?'Correcto. El procedimiento y las unidades son consistentes.':'Todavía no. Verifique primero el voltaje sobre la resistencia.',ok);
  });
  $('#exerciseHint').addEventListener('click',()=>setFeedback('#exerciseFeedback',`Pista: V_R = ${currentExercise.vs} − ${currentExercise.vd} = ${(currentExercise.vs-currentExercise.vd).toFixed(1)} V.`,true));
  $('#exerciseShow').addEventListener('click',()=>setFeedback('#exerciseFeedback',`Respuesta: I_D = ${((currentExercise.vs-currentExercise.vd)/currentExercise.r*1000).toFixed(2)} mA.`,true));
  newExercise();

  let qi=0,score=0,locked=false;
  function renderQuiz(){
    const q=window.ANALOG_QUESTIONS[qi];locked=false;
    $('#quizCount').textContent=`Pregunta ${qi+1} de ${window.ANALOG_QUESTIONS.length}`;
    $('#quizScore').textContent=`Puntaje: ${score}`;
    $('#quizQuestion').textContent=q.q;$('#quizFeedback').textContent='';$('#quizNext').disabled=true;
    $('#quizOptions').innerHTML=q.options.map((o,i)=>`<button data-i="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join('');
    $$('#quizOptions button').forEach(b=>b.addEventListener('click',()=>{
      if(locked)return;locked=true;const ok=+b.dataset.i===q.answer;if(ok)score++;
      setFeedback('#quizFeedback',(ok?'Correcto. ':'Respuesta incorrecta. ')+q.explain,ok);
      $('#quizScore').textContent=`Puntaje: ${score}`;$('#quizNext').disabled=false;
    }));
  }
  $('#quizNext').addEventListener('click',()=>{
    qi++;
    if(qi>=window.ANALOG_QUESTIONS.length){
      $('#quizQuestion').textContent=`Resultado final: ${score}/${window.ANALOG_QUESTIONS.length}`;
      $('#quizOptions').innerHTML='';$('#quizFeedback').textContent=score>=4?'Muy buen dominio del bloque.':'Conviene volver a curva I–V, modelos y análisis ON/OFF.';
      $('#quizNext').textContent='Reiniciar';$('#quizNext').disabled=false;qi=-1;score=0;
    }else{if(qi===0)$('#quizNext').textContent='Siguiente';renderQuiz()}
  });
  renderQuiz();
})();