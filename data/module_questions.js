window.ANALOG_V3_BANKS = {
  semiconductors: [
    {t:'mcq',q:'¿Qué caracteriza a un semiconductor intrínseco?',o:['Dopaje donador','Dopaje aceptor','Ausencia de dopaje intencional','Conductividad metálica'],a:2,e:'Intrínseco significa material esencialmente puro; sus portadores se generan en el propio semiconductor.'},
    {t:'mcq',q:'En material tipo N, los portadores mayoritarios son:',o:['Huecos','Electrones','Protones','Iones móviles'],a:1,e:'El dopaje donador aporta electrones disponibles para conducción.'},
    {t:'mcq',q:'Una impureza trivalente en silicio produce principalmente:',o:['Un electrón adicional','Un hueco','Una unión PN completa','Ruptura'],a:1,e:'La impureza aceptora deja una vacante efectiva en los enlaces.'},
    {t:'mcq',q:'Al aumentar la temperatura de un semiconductor intrínseco, normalmente:',o:['Disminuyen los portadores','Aumenta la generación electrón-hueco','Se vuelve aislante perfecto','Desaparece la banda prohibida'],a:1,e:'La energía térmica favorece la generación de pares electrón-hueco.'},
    {t:'mcq',q:'¿Por qué resulta útil comparar Si, Ge y GaAs?',o:['Porque son idénticos','Porque relaciona material, propiedades y aplicaciones','Porque todos son metales','Porque solo GaAs forma diodos'],a:1,e:'Las propiedades del material condicionan parámetros eléctricos y aplicaciones.'}
  ],
  pn: [
    {t:'mcq',q:'La región de agotamiento aparece por:',o:['Difusión y recombinación cerca de la unión','Un cortocircuito','Solo polarización inversa','Calentamiento del resistor'],a:0,e:'La difusión deja iones fijos cerca de la unión y aparece una barrera interna.'},
    {t:'mcq',q:'En polarización directa la barrera efectiva:',o:['Aumenta','Disminuye','No cambia','Se hace infinita'],a:1,e:'La tensión externa favorece el cruce de portadores y estrecha la región de agotamiento.'},
    {t:'mcq',q:'En polarización inversa la región de agotamiento:',o:['Se estrecha','Se ensancha','Desaparece','Cambia el tipo N por P'],a:1,e:'La polarización inversa aleja portadores de la unión.'},
    {t:'mcq',q:'Para decidir la polarización conviene calcular:',o:['VA+VK','VA−VK','VA·VK','Solo VA'],a:1,e:'VAK=VA−VK establece la polaridad efectiva sobre el dispositivo.'},
    {t:'mcq',q:'Si VA=0.2 V y VK=0 V con modelo de 0.7 V, la hipótesis ON es:',o:['Consistente','No consistente','Ruptura','Indeterminada'],a:1,e:'VAK=0.2 V no sostiene el modelo ON de 0.7 V.'}
  ],
  curve: [
    {t:'mcq',q:'En la ecuación de Shockley, la relación entre corriente directa y voltaje es principalmente:',o:['Lineal','Exponencial','Cuadrática','Constante'],a:1,e:'La característica directa del diodo es fuertemente no lineal y se modela exponencialmente.'},
    {t:'mcq',q:'El voltaje térmico V_T depende directamente de:',o:['La resistencia de carga','La temperatura absoluta','El color del diodo','La fuente DC únicamente'],a:1,e:'V_T=kT/q, por lo que aumenta con la temperatura absoluta.'},
    {t:'mcq',q:'La resistencia dinámica aproximada r_d=nV_T/I_D indica:',o:['La pendiente local de pequeña señal','La resistencia serie externa','La potencia máxima','La tensión Zener'],a:0,e:'r_d representa la pendiente incremental alrededor de un punto de operación.'},
    {t:'mcq',q:'Si I_D aumenta mientras n y T permanecen aproximadamente constantes, r_d tiende a:',o:['Aumentar','Disminuir','No cambiar','Hacerse infinita'],a:1,e:'Como r_d≈nV_T/I_D, una corriente mayor produce una resistencia dinámica menor.'},
    {t:'mcq',q:'¿Por qué no debe interpretarse 0.7 V como una propiedad exacta de todo diodo de silicio?',o:['Porque V_D depende de corriente, temperatura y dispositivo','Porque el silicio no conduce','Porque la ley de Shockley es lineal','Porque solo aplica en AC'],a:0,e:'La caída directa real varía; 0.7 V es una aproximación conveniente para ciertos análisis.'}
  ],
  models: [
    {t:'mcq',q:'En el modelo ideal, un diodo ON se reemplaza por:',o:['Circuito abierto','Cortocircuito','Fuente de 0.7 V','Resistencia infinita'],a:1,e:'En conducción ideal VD=0.'},
    {t:'mcq',q:'El valor 0.7 V para silicio debe entenderse como:',o:['Una ley exacta','Una aproximación de análisis','La tensión Zener','El PIV'],a:1,e:'La caída real depende de corriente, temperatura y dispositivo.'},
    {t:'mcq',q:'El modelo lineal por tramos incorpora:',o:['Vγ y una resistencia dinámica','Una inductancia','Solo una fuente AC','Un transformador'],a:0,e:'Aproxima VD≈Vγ+ID·rd.'},
    {t:'mcq',q:'La ecuación de Shockley relaciona ID y VD de forma:',o:['Lineal','Exponencial','Cuadrática','Constante'],a:1,e:'La característica directa del diodo es fuertemente no lineal.'},
    {t:'mcq',q:'¿Por qué comparar varios modelos en el mismo circuito?',o:['Para obtener cuatro circuitos distintos','Para visualizar el compromiso entre simplicidad y precisión','Porque Ohm deja de funcionar','Para cambiar la fuente'],a:1,e:'Cada modelo conserva diferente nivel de detalle.'}
  ],
  dcnet: [
    {t:'num',q:'VS=9 V, R=1.2 kΩ y VD=0.7 V. Calcule ID.',ans:6.9167,tol:.08,u:'mA',h:'VR=VS−VD.',e:'VR=8.3 V e ID≈6.92 mA.'},
    {t:'num',q:'VS=12 V, R=1 kΩ y dos diodos de 0.7 V en serie. Calcule I.',ans:10.6,tol:.1,u:'mA',h:'La caída total es 1.4 V.',e:'I=(12−1.4)/1 kΩ=10.6 mA.'},
    {t:'mcq',q:'Si una hipótesis ON produce corriente negativa respecto al sentido supuesto:',o:['Se acepta','Debe revisarse','Se cambia R de signo','El diodo entra en Zener'],a:1,e:'El resultado no es consistente con el estado supuesto.'},
    {t:'num',q:'Entre +10 V y −5 V hay R=2.2 kΩ y un diodo ON de 0.7 V. Calcule I.',ans:6.5,tol:.1,u:'mA',h:'La diferencia disponible antes del diodo es 15 V.',e:'I=(15−0.7)/2.2 kΩ≈6.50 mA.'},
    {t:'mcq',q:'En redes mixtas el método más robusto es:',o:['Asignar 0.7 V a todos','Suponer estados, resolver y verificar','Ignorar polaridades','Usar RMS'],a:1,e:'La verificación evita soluciones físicamente incompatibles.'}
  ],
  loadline: [
    {t:'mcq',q:'La recta de carga representa:',o:['Solo el diodo','La restricción del circuito externo','La temperatura','La potencia máxima'],a:1,e:'Se obtiene de la ecuación de la red.'},
    {t:'mcq',q:'Para ID=(VS−VD)/R, el intercepto de corriente es:',o:['VS','VS/R','R/VS','0.7/R'],a:1,e:'Al fijar VD=0 resulta ID=VS/R.'},
    {t:'mcq',q:'El intercepto de voltaje se obtiene para:',o:['VD=0','ID=0','R=0','VS=0'],a:1,e:'Cuando ID=0, VD=VS.'},
    {t:'mcq',q:'Si R aumenta con VS constante, |−1/R|:',o:['Aumenta','Disminuye','No cambia','Se hace infinita'],a:1,e:'La magnitud de la pendiente disminuye.'},
    {t:'mcq',q:'El punto Q es:',o:['La intersección de característica y recta de carga','Siempre ID=0','Siempre VD=VS','El valor RMS'],a:0,e:'Q satisface simultáneamente dispositivo y red.'}
  ],
  led: [
    {t:'num',q:'LED: VS=12 V, VF=2.0 V, IF=20 mA. Calcule R.',ans:500,tol:5,u:'Ω',h:'R=(VS−VF)/IF.',e:'R=500 Ω; un valor comercial cercano puede elegirse sin exceder la corriente.'},
    {t:'num',q:'VS=5 V, LED rojo VF=1.8 V y R=220 Ω. Calcule IF.',ans:14.545,tol:.2,u:'mA',h:'VR=5−1.8 V.',e:'IF≈14.55 mA.'},
    {t:'mcq',q:'La resistencia serie de un LED sirve principalmente para:',o:['Aumentar VF','Limitar corriente','Invertir polaridad','Generar AC'],a:1,e:'La fuerte pendiente I–V exige limitar la corriente.'},
    {t:'mcq',q:'Aplicar tensión inversa excesiva a un LED puede:',o:['No afectar nunca','Dañarlo','Convertirlo en rectificador ideal','Duplicar brillo'],a:1,e:'Muchos LED admiten tensiones inversas relativamente bajas.'},
    {t:'num',q:'LED del taller: VS=12 V, VF=5.6 V e I=20 mA. Calcule R.',ans:320,tol:4,u:'Ω',h:'R=(12−5.6)/0.020.',e:'R=320 Ω; 330 Ω es una elección comercial conservadora.'}
  ],
  halfwave: [
    {t:'mcq',q:'En media onda ideal orientada al semiciclo positivo, durante el semiciclo negativo:',o:['Conduce','Se bloquea','Duplica el pico','Invierte la carga'],a:1,e:'El diodo queda polarizado inversamente.'},
    {t:'mcq',q:'El valor medio ideal de media onda es:',o:['Vp/π','2Vp/π','Vp/2','0'],a:0,e:'VDC=Vp/π≈0.318Vp.'},
    {t:'num',q:'Media onda ideal con Vp=10 V. Calcule VDC.',ans:3.183,tol:.05,u:'V',h:'VDC=Vp/π.',e:'VDC≈3.18 V.'},
    {t:'mcq',q:'En segunda aproximación, mientras conduce:',o:['vo≈vi+0.7','vo≈vi−0.7','vo=0 siempre','vo≈−vi'],a:1,e:'La caída directa reduce la tensión disponible en la carga.'},
    {t:'mcq',q:'La frecuencia de rizado de media onda sin filtro es:',o:['fin/2','fin','2fin','0'],a:1,e:'Hay un pulso por ciclo de entrada.'}
  ],
  fullwave: [
    {t:'mcq',q:'En un puente rectificador conducen normalmente por semiciclo:',o:['1 diodo','2 diodos','3 diodos','4 diodos'],a:1,e:'Cada semiciclo establece una ruta por un par de diodos.'},
    {t:'mcq',q:'En un puente de silicio, la caída total aproximada en conducción es:',o:['0.7 V','1.4 V','2.1 V','0 V'],a:1,e:'Conducen dos diodos en serie.'},
    {t:'mcq',q:'El valor medio ideal de onda completa es:',o:['Vp/π','2Vp/π','Vp/2','√2Vp'],a:1,e:'VDC=2Vp/π≈0.636Vp.'},
    {t:'num',q:'Onda completa ideal con Vp=10 V. Calcule VDC.',ans:6.366,tol:.08,u:'V',h:'VDC=2Vp/π.',e:'VDC≈6.37 V.'},
    {t:'mcq',q:'Si fin=60 Hz, la frecuencia de rizado es:',o:['30 Hz','60 Hz','120 Hz','240 Hz'],a:2,e:'La onda completa produce dos pulsos por ciclo.'}
  ],
  filters: [
    {t:'mcq',q:'Cuando la señal rectificada supera a la tensión del capacitor más las caídas de conducción:',o:['El capacitor se recarga','Se descarga más rápido','La carga se abre','El rizado es cero'],a:0,e:'Los diodos conducen cerca del pico y reponen la carga.'},
    {t:'mcq',q:'Entre picos, el capacitor principalmente:',o:['Se carga desde la fuente','Se descarga por la carga','Invierte polaridad','Se cortocircuita'],a:1,e:'Con los diodos bloqueados, el capacitor suministra corriente a RL.'},
    {t:'mcq',q:'Una aproximación útil del rizado pico a pico es:',o:['Vr≈IL/(frC)','Vr≈ILfrC','Vr≈RL/IL','Vr≈VpC'],a:0,e:'Supone descarga aproximadamente lineal entre recargas.'},
    {t:'num',q:'IL=10 mA, fr=120 Hz, C=1000 µF. Estime Vr(pp).',ans:.08333,tol:.005,u:'Vpp',h:'1000 µF=0.001 F.',e:'Vr≈0.01/(120·0.001)=0.0833 Vpp.'},
    {t:'num',q:'RL=10 kΩ y C=10 µF. Calcule τ.',ans:100,tol:1,u:'ms',h:'10000·10e−6 s.',e:'τ=0.1 s=100 ms. Comprueba siempre la conversión de kΩ y µF antes de calcular la constante de tiempo.'}
  ],
  clippers: [
    {t:'mcq',q:'Un recortador se utiliza para:',o:['Desplazar toda la señal sin limitarla','Limitar partes de la forma de onda','Convertir DC en AC','Cambiar solo frecuencia'],a:1,e:'El clipper limita zonas que exceden uno o más niveles.'},
    {t:'mcq',q:'Añadir una fuente DC en serie con el diodo de un clipper permite:',o:['Cambiar el nivel de recorte','Cambiar la frecuencia','Eliminar R','Crear un puente'],a:0,e:'La polarización desplaza el umbral de conducción.'},
    {t:'mcq',q:'Un recortador de doble extremo puede:',o:['Limitar picos positivos y negativos','Solo rectificar media onda','Solo sumar DC','Generar senoide'],a:0,e:'Dos ramas opuestas fijan límites superior e inferior.'},
    {t:'mcq',q:'Una aplicación típica del recortador es:',o:['Protección de entradas','Aumento ilimitado de potencia','Transformación ideal de impedancia','Generar campo magnético'],a:0,e:'El recorte se usa en protección y conformación de señales.'}
  ],
  clampers: [
    {t:'mcq',q:'Un clamper ideal busca:',o:['Recortar amplitud','Desplazar nivel DC conservando aproximadamente Vpp','Rectificar completa','Eliminar AC'],a:1,e:'El cambiador de nivel traslada verticalmente la señal.'},
    {t:'mcq',q:'El elemento de almacenamiento esencial en un clamper es:',o:['Inductor','Condensador','Transformador','Fusible'],a:1,e:'El capacitor conserva una tensión que se suma o resta a la entrada.'},
    {t:'mcq',q:'Para buen funcionamiento conviene que RLC sea:',o:['Mucho menor que T','Mucho mayor que T','Cero','1 Ω'],a:1,e:'Una constante de tiempo grande reduce la descarga entre ciclos.'},
    {t:'mcq',q:'Diferencia principal clipper/clamper:',o:['Clipper limita; clamper desplaza','Son idénticos','Clamper siempre destruye señal','Clipper siempre requiere capacitor'],a:0,e:'El primero limita amplitud; el segundo añade nivel DC.'}
  ],
  zener: [
    {t:'mcq',q:'El Zener se diseña para trabajar de forma controlada en:',o:['Conducción ideal directa','Ruptura inversa','Circuito abierto','Sin polarización'],a:1,e:'La región Zener permite mantener una tensión aproximadamente constante.'},
    {t:'mcq',q:'Cuando un regulador Zener ideal regula, VL es aproximadamente:',o:['0','VZ','VS','RS'],a:1,e:'La carga está en paralelo con el Zener.'},
    {t:'mcq',q:'La resistencia serie sirve para:',o:['Limitar corriente','Aumentar VZ','Eliminar carga','Crear AC'],a:0,e:'Protege al Zener y fija la corriente disponible.'},
    {t:'mcq',q:'Con carga, la relación correcta es:',o:['IS=IZ+IL','IZ=IS+IL','IL=IS+IZ','IS=0'],a:0,e:'La corriente serie se divide entre Zener y carga.'},
    {t:'num',q:'VS=15 V, VZ=5.1 V, RS=500 Ω y sin carga. Calcule IZ.',ans:19.8,tol:.2,u:'mA',h:'IZ=(VS−VZ)/RS.',e:'IZ=19.8 mA.'}
  ]
};
