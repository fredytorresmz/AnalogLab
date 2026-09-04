(()=>{"use strict";const {$,$$}=window.AL;
const expected={
  "1n4007":{vrrm:[1000,1],io:[1,0.01],ifsm:[30,0.1],vf:[1.1,0.03]},
  "1n4736a":{vz:[6.8,0.03],izt:[37,0.2],zz:[3.5,0.05],pd:[1,0.02]}
};
$$('.datasheet-task').forEach(card=>{
  $('.check-extract',card)?.addEventListener('click',()=>{
    const ref=expected[card.dataset.device],inputs=$$('input[data-key]',card),fb=$('.extract-feedback',card);
    let ok=0,filled=0,details=[];
    inputs.forEach(inp=>{
      const v=parseFloat(inp.value),spec=ref[inp.dataset.key];
      if(Number.isFinite(v)){filled++;const good=Math.abs(v-spec[0])<=spec[1];if(good)ok++;details.push(`${inp.dataset.key}: ${good?'✓':'revisar'}`)}
    });
    if(filled<inputs.length){window.AL.fb(fb,'Completa todos los campos antes de comprobar.',false);return}
    window.AL.fb(fb,`${ok===inputs.length?'Lectura correcta.':'Hay valores por revisar.'} ${details.join(' · ')}`,ok===inputs.length);
  });
});
const ta=$('#datasheetReflection'),btn=$('#showDatasheetGuide'),guide=$('#datasheetGuide');
btn?.addEventListener('click',()=>{
  if((ta?.value.trim().length||0)<30){window.AL.fb(guide,'Escribe primero una explicación de al menos unas pocas líneas.',false);guide.classList.add('show');return}
  guide.innerHTML='<b>Guía de comparación.</b> El valor de 1 A aparece como corriente rectificada promedio bajo condiciones específicas de carga, frecuencia y temperatura. Además deben revisarse caída directa, disipación, temperatura, tensión inversa y margen. Un máximo absoluto o una capacidad nominal no autoriza a ignorar las condiciones de prueba ni el calentamiento.';
  guide.className='guide show';window.AL.typeset(guide);
});
})();