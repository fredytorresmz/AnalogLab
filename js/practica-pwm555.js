/* AnalogLab · Actividad de preparación PWM 555 + puente H · 2026 */
(()=>{'use strict';
const $=(id)=>document.getElementById(id);
const norm=(s)=>String(s||'').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9 .,+-]/g,' ').replace(/\s+/g,' ');
const data={
 mc:[
 ['¿Qué hace el 555 en esta práctica?',['Produce una señal PWM periódica','Suministra por sí solo toda la corriente del motor','Invierte directamente los cables físicos del motor'],0,'El 555 genera la señal de control temporal. La potencia corresponde a la etapa de conmutación.'],
 ['Si la frecuencia se mantiene y aumenta el ciclo útil, ¿qué cambia?',['El tiempo encendido por período aumenta','Se invierte automáticamente el giro','Desaparecen las pérdidas de los transistores'],0,'El ciclo útil D=TON/T.'],
 ['¿Cuál es el objetivo principal de un puente H?',['Invertir la polaridad aplicada al motor','Convertir corriente DC en corriente de red','Elevar siempre la tensión del motor'],0,'Se controlan diagonalmente las ramas para invertir la tensión en el motor.'],
 ['¿Qué significa shoot-through?',['Conducción simultánea de los interruptores alto y bajo de un mismo brazo','Motor girando demasiado lento','Medición de la corriente nominal'],0,'Es un cortocircuito potencial entre los rieles de alimentación.'],
 ['¿Qué dato del motor es crítico al seleccionar transistores?',['La corriente de bloqueo o arranque','El color del encapsulado','Solo las revoluciones nominales'],0,'El arranque o rotor bloqueado puede exigir más corriente que el régimen normal.'],
 ['¿Cuál es la forma correcta de elegir un reemplazo de transistor?',['Verificar tipo, polaridad, VCEO, IC, potencia, saturación y pines','Elegir el que tenga la mayor letra final','Cambiar cualquiera por un LED'],0,'La equivalencia es eléctrica y mecánica, no solo de un parámetro máximo.'],
 ['¿Qué se hace antes de conectar el puente H al motor?',['Probar primero el 555 y la lógica de control, con corriente limitada','Alimentar todo a la tensión máxima sin comprobar','Eliminar los diodos de protección'],0,'Las pruebas deben aislar los subsistemas y limitar riesgos.'],
 ['¿Para qué sirve el desacoplo de alimentación cerca del temporizador?',['Atenuar perturbaciones de la fuente','Modificar el número de pines del 555','Conmutar el giro'],0,'El desacoplo reduce transitorios y ruido que afectan la temporización.'],
 ['¿Qué caracteriza la salida pin 3 del 555?',['Es una salida de temporización/control','Es la entrada de tensión de red','Es el emisor de un BJT de potencia'],0,'La salida (OUT) del 555 es el pin 3.'],
 ['¿Cuál frase describe correctamente la relación entre PWM y giro?',['PWM regula la conducción; el sentido depende de la selección de diagonales','PWM por sí solo cambia siempre el sentido','El sentido depende solo del capacitor del 555'],0,'Las funciones de velocidad y dirección requieren señales y lógica apropiadas.']
 ],
 tf:[
 ['Para un NE555 estándar de TI, un diseño a 3,3 V queda por debajo del mínimo operativo recomendado de 4,5 V.',true,'El rango recomendado de la familia NE555 de TI empieza en 4,5 V.'],
 ['El ciclo útil D es la fracción del período en que la señal está en nivel alto.',true,'D=tON/T.'],
 ['En un puente H es seguro encender el transistor superior e inferior de la misma rama al mismo tiempo.',false,'Puede crear una trayectoria de cortocircuito.'],
 ['El transistor de potencia puede seleccionarse solo a partir de su hFE típico en activa.',false,'Para conmutación se verifica saturación, corriente, tensión, disipación y accionamiento.'],
 ['La corriente del motor puede ser mayor al arrancar que una vez alcanza su velocidad.',true,'La fuerza contraelectromotriz aumenta con la velocidad; el pico de arranque puede ser elevado.'],
 ['En PWM, duplicar el ciclo útil implica necesariamente duplicar la velocidad exacta del motor.',false,'La respuesta no es ideal: intervienen carga, fricción, pérdidas y características del motor.'],
 ['Un reemplazo del transistor debe revisarse también por su disposición de terminales.',true,'Dos componentes de igual encapsulado pueden tener pinout distinto.'],
 ['Es recomendable invertir el sentido con el motor a plena carga y sin ninguna precaución.',false,'Conviene reducir o eliminar conducción antes de invertir e incorporar tiempo de seguridad.'],
 ['En un motor DC, el diodo flyback o las rutas de recirculación se estudian porque la carga es inductiva.',true,'La energía almacenada necesita un camino seguro de circulación.'],
 ['La gráfica PWM representa el ciclo útil y no garantiza por sí sola una velocidad concreta.',true,'La velocidad depende también de las características del motor y su carga.']
 ],
 num:[
 ['Una señal permanece alta 4 ms de un período de 10 ms. Escribe el ciclo útil en %.',40,1,'D=4/10·100=40%.'],
 ['Una señal de 500 Hz tiene un período de cuántos ms.',2,0.1,'T=1/f=1/500 s=2 ms.'],
 ['A 1 kHz y ciclo útil 25%, ¿cuánto dura tON en ms?',0.25,0.03,'T=1 ms; tON=0,25 ms.'],
 ['Para D=60%, ¿qué porcentaje del período es tOFF?',40,1,'tOFF%=100−60=40%.'],
 ['A 200 Hz, ¿cuál es el período en ms?',5,0.15,'T=1/200 s=5 ms.'],
 ['Si tON=3 ms y tOFF=7 ms, ¿cuál es el ciclo útil en %?',30,1,'T=10 ms; D=3/10·100=30%.'],
 ['Si el motor consume 0,2 A nominal y 1,0 A al bloquearse, ¿cuántas veces mayor es la corriente de bloqueo?',5,0.15,'1,0/0,2=5.'],
 ['A 250 Hz y D=50%, ¿cuántos ms dura tON?',2,0.1,'T=4 ms; tON=2 ms.'],
 ['Una etapa entrega 8 V nominales y tiene caída total de conmutación de 1 V. ¿Cuántos voltios recibe la carga al estar ON?',7,0.2,'8−1=7 V (aproximación estática).'],
 ['¿Cuántos terminales tiene el temporizador NE555 en encapsulado estándar DIP?',8,0,'El 555 estándar se presenta en DIP-8.']
 ],
 text:[
 ['Escribe las siglas de la modulación por ancho de pulso (tres letras).',['pwm'],'PWM = Pulse Width Modulation.'],
 ['¿Qué pin del 555 es la salida OUT? Escribe solo el número.',['3'],'OUT está en el pin 3.'],
 ['¿Qué nombre recibe el porcentaje del período que una señal PWM permanece alta?',['ciclo util','duty cycle','duty'],'Se llama ciclo útil.'],
 ['En el puente H, ¿qué tipo de pares de transistores se activa para hacer girar el motor en un sentido? Una palabra.',['diagonal','diagonales'],'Se activa una diagonal; no ambos interruptores del mismo brazo.'],
 ['¿Qué palabra describe la situación en la que el rotor no gira y la corriente puede llegar a ser crítica?',['bloqueo','bloqueado','atasco','stall'],'Se conoce como condición de bloqueo o rotor bloqueado.'],
 ['¿Qué documento del fabricante permite verificar pinout y límites de un semiconductor?',['datasheet','hoja de datos','ficha tecnica'],'La hoja de datos o datasheet.'],
 ['¿Qué dispositivo de protección se utiliza habitualmente en antiparalelo con una bobina de relé?',['diodo','diodo flyback','flyback'],'Diodo de rueda libre, flyback o recirculación.'],
 ['¿En qué unidad se expresa la frecuencia de PWM?',['hz','hercios','hertz'],'En hertz o hercios (Hz).'],
 ['Escribe el nombre del fallo en el que ambos transistores del mismo brazo de un puente conducen a la vez.',['shoot through','shoot-through','cortocircuito'],'Shoot-through o conducción cruzada.'],
 ['¿Qué magnitud, aparte de VCEO e IC, debe verificarse para determinar si el transistor se calienta demasiado?',['potencia','disipacion','temperatura','potencia disipada'],'Potencia, temperatura y condiciones térmicas.']
 ]};
// Preguntas adicionales ancladas en el esquema TIP142/TIP147 + NE555 aportado en clase.
// Los detalles sin referencia se preguntan como incertidumbres, no como datos confirmados.
data.mc.push(
 ['En el dibujo original, ¿qué par ocupa las posiciones superiores del puente?',['Dos TIP142 NPN Darlington','Dos BC546 PNP','Dos TIP147 PNP'],0,'Los dos TIP142 son NPN y se dibujan arriba.'],
 ['¿Qué par ocupa las posiciones inferiores del puente H de la imagen?',['Dos TIP147 PNP Darlington','Dos TIP142 NPN','Dos NE555'],0,'Los dos TIP147 son PNP y se dibujan abajo.'],
 ['¿Cuál es la función visible del BC546 conectado al pin 3 mediante 4,7 kΩ?',['Adaptar o conmutar la señal de control PWM','Soportar por sí mismo los 3 A del motor','Hacer de capacitor de 22 nF'],0,'Es una etapa de mando de baja potencia; el motor lo controla el puente.'],
 ['En la imagen, ¿qué componente regula el ajuste de PWM?',['Potenciómetro REG de 10 kΩ','Zener de 15 V','Dispositivo marcado 3 A'],0,'REG 10 kΩ forma parte de la red de temporización.'],
 ['¿Qué representa el valor de 15 V próximo al riel del 555?',['Un zener nominal en la fuente del temporizador','La tensión obligatoria del motor','La corriente máxima del puente'],0,'El zener de 15 V alimenta el riel local cuando las condiciones permiten regular.'],
 ['¿Qué dato no puede establecerse con certeza desde la imagen?',['La corriente de bloqueo del motor','El número de TIP142','La presencia de un NE555'],0,'El dato «3 A» no establece la corriente de bloqueo del motor.'],
 ['¿Qué conclusión es correcta sobre los diodos BYV26E?',['Tienen 1 A promedio declarado; hay que verificar su régimen de pulsos','Como son de 1000 V soportan cualquier corriente del motor','No necesitan verificación porque son de protección'],0,'La corriente promedio de 1 A no se sustituye por el valor de tensión inversa.'],
 ['¿Cuál es la acción correcta si no se consigue el TIP147?',['Buscar un Darlington PNP candidato y comprobar todas sus condiciones','Colocar TIP142 porque tiene los mismos amperios','Reemplazarlo por un NE555'],0,'La polaridad y estructura Darlington deben conservarse.'],
 ['¿Cuál opción conserva una alternativa complementaria con mayor corriente nominal, pendiente de revisión?',['MJH6284 NPN y MJH6287 PNP','BC546 NPN y BC556 PNP como transistores de potencia','TIP142 y BC546 en ambas ramas'],0,'El fabricante documenta el par MJH6284/MJH6287 como Darlington 100 V, 20 A.'],
 ['¿Qué afirma mejor el papel del 470 Ω y del zener?',['Limitación y regulación local del riel del NE555','Resistencia en serie con cada fase del motor','Medición de velocidad en RPM'],0,'Forma con el zener una fuente derivada; debe comprobarse con el consumo del 555.'],
 ['Antes de comprar el diodo DS del temporizador, ¿qué debes hacer?',['Confirmar el tipo, ya que la imagen solo indica DS','Usar cualquier BYV26E sin mirar su valor','Eliminarlo porque no afecta la carga del capacitor'],0,'La referencia exacta DS no está determinada.'],
 ['¿Cuál es el procedimiento correcto para la práctica?',['Validar fuente y protección; medir el 555 aislado y después verificar mando/potencia','Montar primero el motor de 3 A con +B máxima','Probar el puente sin disipadores ni diodos'],0,'La validación gradual reduce el riesgo de dañar componentes.']
);
data.tf.push(
 ['El esquema muestra dos TIP142 arriba y dos TIP147 abajo.',true,'Distribución de los cuatro Darlington.'],
 ['La imagen confirma que la tensión +B es siempre 15 V.',false,'El zener de 15 V pertenece al riel local del 555; +B no está definido.'],
 ['En el dibujo aparece un potenciómetro REG de 10 kΩ.',true,'Está en la red del pin 7 del NE555.'],
 ['El valor «3 A» sobre un dispositivo en serie define exactamente la corriente de bloqueo del motor.',false,'Es un marcado de un elemento; no sustituye la placa del motor.'],
 ['Los cuatro diodos de la zona de potencia están rotulados BYV26E.',true,'En el esquema se ven cuatro BYV26E.'],
 ['Es seguro cambiar TIP147 por TIP142 porque ambos llegan a 10 A.',false,'Uno es PNP y el otro NPN; no son intercambiables.'],
 ['El 15 V del zener asegura siempre 15 V, aunque +B sea menor y la carga consuma toda la corriente.',false,'Un zener requiere margen y corriente de regulación.'],
 ['El NE555 recibe alimentación entre los pines 8 y 1.',true,'VCC es 8 y GND es 1.'],
 ['Los dos transistores de mando inferiores A/B están etiquetados como BC546 en el original.',false,'Sus referencias no aparecen en esa zona de la imagen.'],
 ['Un BYV26E de 1 A promedio no garantiza por sí solo servir para toda corriente de recirculación de un motor.',true,'El comportamiento pulsado y térmico debe analizarse.']
);
data.num.push(
 ['¿Cuántos TIP142 están dibujados en el puente?',2,0,'Hay dos TIP142 en las posiciones superiores.'],
 ['¿Cuántos TIP147 están dibujados en el puente?',2,0,'Hay dos TIP147 en las posiciones inferiores.'],
 ['¿Cuántos BYV26E están dibujados alrededor del motor?',4,0,'Se ven cuatro BYV26E.'],
 ['¿Cuál es el valor nominal en voltios del zener de alimentación del NE555?',15,0,'El zener de la fuente local está marcado 15 V.'],
 ['¿Cuántos nF tiene el capacitor de temporización conectado a pines 2 y 6?',22,0,'Capacitor de 22 nF en el nodo 2/6.'],
 ['¿Cuál es el valor del potenciómetro REG en kΩ?',10,0,'REG es 10 kΩ.'],
 ['Ejemplo hipotético: +B=24 V y zener=15 V. ¿Cuánto cae en la resistencia de 470 Ω, en V?',9,0,'24−15=9 V, si el zener efectivamente está regulando.'],
 ['Ejemplo hipotético: 9 V sobre 470 Ω. ¿Cuántos mA conducen aproximadamente?',19.15,0.25,'I=9/470=0,01915 A=19,15 mA.'],
 ['Ejemplo hipotético: 9 V sobre 470 Ω. ¿Cuántos W disipa aproximadamente?',0.1723,0.015,'P=9²/470≈0,172 W.'],
 ['A 250 Hz, ¿cuántos milisegundos dura un período PWM?',4,0.1,'T=1000/250=4 ms.']
);
data.text.push(
 ['¿Qué código de transistor Darlington NPN aparece en las dos ramas superiores?',['tip142'],'TIP142 NPN.'],
 ['¿Qué código de transistor Darlington PNP aparece en las dos ramas inferiores?',['tip147'],'TIP147 PNP.'],
 ['¿Qué código de diodo de protección aparece cuatro veces en el puente?',['byv26e'],'BYV26E, 1 A promedio en la hoja de datos.'],
 ['¿Qué referencia de transistor NPN acompaña al pin 3 del 555?',['bc546'],'BC546.'],
 ['¿Qué referencia de transistor PNP aparece en la etapa de mando superior?',['bc556'],'BC556.'],
 ['¿Qué letras nombran los dos puntos de mando inferiores?',['a b','a y b','ab'],'Son A y B.'],
 ['¿Con qué dos referencias están rotulados los interruptores de dirección?',['s1 s2','s1 y s2','s1,s2'],'S1 y S2.'],
 ['¿Qué documento se consulta antes de reemplazar TIP142 o TIP147?',['datasheet','hoja de datos','ficha tecnica'],'La hoja del fabricante detalla pinout, VCEO, corriente, SOA y disipación.'],
 ['¿Qué valor en nF tiene el capacitor del pin 5 del NE555? Escribe solo el número.',['10'],'Está rotulado 10 nF.'],
 ['¿Qué componente identificado como REG cambia el duty? Una palabra.',['potenciometro','resistencia variable','pot'],'Potenciómetro REG de 10 kΩ.']
);

// Refuerzo v14.3: fuente propuesta 10-12 V, compatibilidad y atribución.
data.mc.push(
 ['Con una fuente +B de 12 V y zener de 15 V en el circuito original, ¿qué ocurre?',['El zener no puede regular a 15 V','El zener entrega 15 V por sí solo','El 555 duplica el voltaje'],0,'Un zener en derivación no eleva el voltaje; la rama original debe revisarse.'],
 ['Un equipo trae un motor de 6 V y el laboratorio dispone de 12 V. ¿Qué procede?',['Usar fuente compatible con el motor o cambiar el motor','Conectar a 12 V y bajar PWM sin más comprobaciones','Quitar el fusible'],0,'La tensión máxima del motor debe verificarse antes de energizar.'],
 ['¿Qué dato no es suficiente para autorizar una prueba con motor rotulado 12 V?',['Solo su tensión nominal','La corriente de bloqueo junto con la nominal','Los límites eléctricos de transistores y diodos'],0,'El voltaje es un filtro inicial; el arranque, la fuente y la protección también importan.'],
 ['¿Cuál es la mejor forma de reconocer autoría del esquema en la plataforma?',['Atribuir a Jean-Bernard Guiot y enlazar su publicación','Presentar el circuito como propio','Copiar el JPG sin fuente'],0,'La publicación del circuito está atribuida a Jean-Bernard Guiot; citar no concede licencia de copia.']
);
data.tf.push(
 ['El zener de 15 V eleva automáticamente una alimentación de 10 V hasta 15 V.',false,'Un zener no actúa como convertidor elevador.'],
 ['Un motor nominal de 12 V queda automáticamente autorizado para conectarlo al puente sin conocer su corriente.',false,'Hace falta evaluar corriente de arranque, protecciones y excitación.'],
 ['El artículo de referencia atribuye el diseño a Jean-Bernard Guiot.',true,'La autoría figura en la publicación del circuito.'],
 ['Citar el autor del circuito da permiso automático para publicar su imagen completa con licencia CC BY.',false,'Reconocer la autoría no reemplaza la autorización de reproducción.']
);
data.num.push(
 ['¿Cuántos voltios faltan entre una fuente de 12 V y un zener nominal de 15 V?',3,0,'15−12 = 3 V: no se alcanza regulación.'],
 ['¿Cuántos voltios faltan entre una fuente de 10 V y un zener nominal de 15 V?',5,0,'15−10 = 5 V.'],
 ['Un motor admite máximo 6 V y se plantea +B de 12 V. ¿Cuántos voltios excede la fuente el máximo?',6,0,'12−6 = 6 V: no conectarlo.'],
 ['Motor nominal de 12 V y fuente de 10 V: ¿cuántos voltios por debajo del nominal está la fuente?',2,0,'12−10 = 2 V; aun así debe verificarse el comportamiento con carga.']
);
data.text.push(
 ['¿Qué componente de 15 V no puede regular con una alimentación de 12 V?',['zener','diodo zener','diodo'],'Es el diodo zener de la alimentación del 555.'],
 ['¿Qué documento debes consultar si el motor llega sin datos de corriente?',['datasheet','hoja de datos','ficha tecnica','hoja tecnica'],'Consultar la hoja de datos del motor o pedir otro motor con especificaciones conocidas.'],
 ['¿Cuál es el apellido del autor atribuido al circuito de referencia?',['guiot'],'Jean-Bernard Guiot, referido en EDN/RadioLocman.'],
 ['¿Qué protección de 3 A identifica el artículo original?',['fusible','fuse'],'El artículo identifica el elemento como fusible F1.']
);

// v14.4: repaso orientado a las etapas y actividades que sí se realizan en esta guía.
data.mc.push(
 ['¿Qué debes hacer primero con el motor del grupo?',['Leer su tensión nominal y elegir una fuente compatible','Poner la fuente siempre a 12 V','Bloquear el eje para medir corriente'],0,'Los motores de 6, 9 y 12 V requieren fuente compatible.'],
 ['¿Por qué se mide primero el pin 3 del NE555 sin motor?',['Para comprobar el PWM sin cargar aún la etapa de potencia','Para medir la resistencia del motor','Para invertir automáticamente el giro'],0,'Se comprueba primero la generación y después la potencia.'],
 ['¿Cuál componente del esquema modifica el ciclo útil?',['Potenciómetro de 10 kΩ (REG)','Capacitor de filtrado de 100 µF','Fusible del motor'],0,'REG interviene en los tiempos de carga y descarga.'],
 ['¿Dónde debes colocar los datos de frecuencia, período y duty?',['Tabla A de la guía','Tabla de velocidad nominal del motor','Directamente en los datasheets'],0,'La Tabla A documenta tres posiciones de REG.'],
 ['¿Qué diferencia hay entre las tablas A y B?',['A caracteriza el NE555 y B registra el comportamiento del motor','A mide la masa del motor y B cuenta transistores','Son iguales'],0,'Se estudia primero la señal y luego la respuesta de la carga.'],
 ['¿Qué indica un promedio de tensión leído con multímetro en la salida PWM?',['Un promedio de una señal que alterna alto y bajo','Un nivel DC idéntico al valor instantáneo','Que el puente está en reversa'],0,'Para ver la forma temporal se prefiere osciloscopio.'],
 ['¿Qué significa la referencia BC556 en la etapa de mando?',['Transistor PNP de pequeña señal','Darlington NPN de potencia','Regulador de 12 V'],0,'El BC556 se utiliza como transistor PNP de señal.'],
 ['¿Cuál sería una compra razonable si no se encuentra BYV26E?',['Un diodo rápido candidato y revisar su hoja de datos para el motor','Cualquier 1N4148 usado como diodo de potencia','Eliminar los diodos'],0,'FR307/HER308 son candidatos locales para comparar; no reemplazos automáticos.'],
 ['¿Qué debe hacer el grupo si no dispone de osciloscopio?',['Simular la etapa y declarar que los datos son simulados','Inventar una medición','Afirmar que el voltaje promedio es el duty exacto'],0,'No se debe confundir un dato simulado con uno medido.'],
 ['Si el motor no gira durante una prueba, ¿qué debes comprobar antes que nada?',['Interrumpir alimentación y revisar fuente, polaridad, mando y conexiones','Aumentar ilimitadamente la corriente de fuente','Puentear el fusible'],0,'Primero se detiene y se revisan las condiciones eléctricas.'],
 ['¿Qué unidad corresponde a la capacitancia de temporización 22 nF?',['Nanofaradios','Microamperios','Vatios'],0,'El componente señalado es un capacitor de 22 nF.'],
 ['¿Qué dato debe explicar tu conclusión final?',['Relación entre PWM, dirección y respuesta del motor','Solo el nombre comercial del motor','Únicamente un puntaje del cuestionario'],0,'La práctica busca interpretar funcionamiento y mediciones.']
);
data.tf.push(
 ['La etapa de control NE555 debe estudiarse antes de unirla a la carga de potencia.',true,'El montaje por etapas permite localizar errores con mayor seguridad.'],
 ['Un motor de 6 V puede conectarse directamente a 12 V por utilizar duty de 50 %, sin más comprobaciones.',false,'Los pulsos siguen pudiendo llegar a la amplitud de la fuente.'],
 ['Una resistencia de 470 Ω y un zener de 15 V regulan automáticamente a 15 V con fuente de 12 V.',false,'La entrada es insuficiente para regular a 15 V.'],
 ['El fusible reemplaza las rutas de recirculación del motor.',false,'Son protecciones distintas.'],
 ['Un capacitor de 100 nF y uno de 100 µF tienen la misma capacitancia.',false,'Son mil veces diferentes.'],
 ['La tabla de medición permite comparar resultados medidos o simulados con los cálculos.',true,'Se debe indicar claramente el origen del valor.'],
 ['El pin 7 del NE555 participa en la descarga del capacitor de temporización.',true,'La descarga está asociada con la generación de pulsos.'],
 ['Cambiar sentido de giro y cambiar ciclo útil son exactamente la misma operación.',false,'El sentido depende del mando del puente y el duty regula la conducción.']
);
data.num.push(
 ['Si tON=3 ms y tOFF=9 ms, calcula el duty en %.',25,1,'T=12 ms y D=3/12·100=25%.'],
 ['Si la frecuencia es 400 Hz, ¿cuál es T en ms?',2.5,0.1,'T=1000/400=2,5 ms.'],
 ['Una caída de 2 V a 1 A en un Darlington implica potencia instantánea de cuántos W?',2,0.05,'P=V·I=2·1=2 W.'],
 ['Con fuente de 12 V y motor con tensión máxima de 6 V, ¿cuántos voltios excede la fuente?',6,0,'12−6=6 V; no conectarlo directamente.']
);
data.text.push(
 ['¿Qué pin del NE555 debes comprobar para observar el PWM? Solo número.',['3'],'El pin 3 es OUT.'],
 ['¿Cómo se llama la tabla de caracterización del NE555: A o B?',['a'],'La Tabla A registra f, T y D.'],
 ['¿Qué dispositivo del circuito cambia la polaridad sobre el motor? Responde con dos palabras.',['puente h','puenteh'],'El puente H invierte la polaridad mediante la conmutación de sus ramas.']
);

// Prioridad formativa: el cuestionario evalúa lo que se aprende en la práctica,
// no la procedencia editorial del dibujo ni los pendientes de documentación.
for(const type of ['mc','tf','num','text']){
 data[type]=data[type].filter(entry=> !/(autor|atribuci[oó]n|propiedad intelectual|publicar su imagen|copiar el jpg|art[ií]culo de referencia atribuye|dise[nñ]o a Jean|apellido del autor|autor[ií]a del esquema)/i.test(entry[0]));
}
const seenInCurrentSession={};
function pickFresh(type,k){
  const n=data[type].length,key='analoglab_pwm555_v144_seen_'+type;
  let seen=Array.isArray(seenInCurrentSession[type]) ? [...seenInCurrentSession[type]] : [];
  if(!seen.length)try{const saved=JSON.parse(localStorage.getItem(key)||'[]');if(Array.isArray(saved))seen=saved.filter(i=>Number.isInteger(i)&&i>=0&&i<n)}catch(e){}
  // Al agotarse el banco de esta categoría comienza un nuevo ciclo sin repetir en el mismo intento.
  if(n-seen.length<k)seen=[];
  const options=Array.from({length:n},(_,i)=>i).filter(i=>!seen.includes(i));
  for(let i=options.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[options[i],options[j]]=[options[j],options[i]]}
  const selected=options.slice(0,k);
  seenInCurrentSession[type]=[...seen,...selected];
  try{localStorage.setItem(key,JSON.stringify(seenInCurrentSession[type]))}catch(e){}
  return selected;
}
let questions=[],idx=0,correct=0,answered=false;
function randomSet(){const schema={mc:3,tf:3,num:2,text:2};let arr=[];
  for(const [type,n] of Object.entries(schema))for(const id of pickFresh(type,n))arr.push({type,id,entry:data[type][id]});
  for(let i=arr.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}
  return arr;
}
function fmt(n){return String(n.toFixed(2)).replace('.',',')}
function drawing(){const d=Math.max(5,Math.min(95,Number($('pwmDuty').value)));const f=Math.max(10,Math.min(10000,Number($('pwmFreq').value)));const period=1000/f; $('pwmDutyVal').textContent=d+' %'; $('pwmFreqVal').textContent=f+' Hz'; $('pwmOn').textContent=fmt(period*d/100)+' ms'; $('pwmOff').textContent=fmt(period*(100-d)/100)+' ms';$('pwmPeriod').textContent=fmt(period)+' ms';
let path='';for(let k=0;k<4;k++){const x=40+k*180,mid=x+d*1.8,ex=x+180;path+=`M${x} 147 V62 H${mid} V147 H${ex} `;}$('pwmTrace').setAttribute('d',path);$('pwmDLabel').textContent='D = '+d+' %';}
function render(){const q=questions[idx];$('quizIndex').textContent=`Pregunta ${idx+1} de ${questions.length}`;$('quizCorrect').textContent=`Aciertos: ${correct}`;$('quizQuestion').textContent=q.entry[0];$('quizFeedback').textContent='';$('quizFeedback').className='practice-feedback';$('quizNext').disabled=true;answered=false;const target=$('quizAnswer');target.innerHTML='';const btn=(txt,v)=>{const b=document.createElement('button');b.type='button';b.className='practice-choice';b.textContent=txt;b.addEventListener('click',()=>grade(v));target.appendChild(b);};
if(q.type==='mc'){const a=q.entry[1].map((s,i)=>({s,i}));for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}a.forEach(o=>btn(o.s,o.i));}else if(q.type==='tf'){btn('Verdadero',true);btn('Falso',false);}else{const inp=document.createElement('input');inp.type='text';inp.id='quizFree';inp.placeholder=q.type==='num'?'Número (usa punto o coma)':'Respuesta breve';inp.setAttribute('aria-label','Escribe tu respuesta');inp.autocomplete='off';const b=document.createElement('button');b.type='button';b.className='btn primary';b.textContent='Comprobar';b.addEventListener('click',()=>grade(inp.value));inp.addEventListener('keydown',e=>{if(e.key==='Enter')grade(inp.value);});target.append(inp,b);}
}
function grade(v){if(answered)return;const q=questions[idx],a=q.entry;let ok=false;if(q.type==='mc')ok=v===a[2];else if(q.type==='tf')ok=v===a[1];else if(q.type==='num'){const n=Number(String(v).trim().replace(',','.').replace('%',''));ok=String(v).trim()!==''&&Number.isFinite(n)&&Math.abs(n-a[1])<=a[2];}else ok=a[1].some(x=>norm(x)===norm(v));answered=true;if(ok)correct++;$('quizCorrect').textContent=`Aciertos: ${correct}`;$('quizFeedback').className='practice-feedback '+(ok?'success':'retry');$('quizFeedback').textContent=(ok?'✓ Correcto. ':'✗ Por revisar. ')+a[a.length-1];Array.from($('quizAnswer').querySelectorAll('button,input')).forEach(x=>x.disabled=true);$('quizNext').disabled=false;}
function safeKey(s){return norm(s).slice(0,56)||'sin-grupo'}
function finish(){const note=correct/questions.length*5,grp=$('groupId').value.trim();let best=null;try{if(!grp)throw new Error('group not identified');const key='analoglab_pwm555_mejor_'+safeKey(grp);const old=Number(localStorage.getItem(key));const actual=Number.isFinite(old)?old:0;best=Math.max(actual,note);localStorage.setItem(key,String(best));}catch(e){};$('quizIndex').textContent='Prueba completada';$('quizQuestion').textContent=`Calificación: ${fmt(note)} / 5,00`;$('quizAnswer').innerHTML='';$('quizFeedback').className='practice-feedback success';$('quizFeedback').textContent=`Aciertos ${correct}/${questions.length}. ${best===null?'Escribe el nombre del grupo para conservar la mejor nota en este dispositivo.':'Mejor nota guardada para este grupo en este navegador: '+fmt(best)+' / 5,00.'} Puedes repetir con otra combinación de preguntas.`;$('quizNext').disabled=true;$('quizNext').textContent='Finalizado';}
function start(){questions=randomSet();idx=0;correct=0;$('quizNext').textContent='Siguiente';render();}
function next(){if(!answered)return;idx++;if(idx>=questions.length)finish();else render();}
function checkMotor(){
 const out=$('motorResult');
 if(!out)return;
 const read=id=>{const v=$(id).value.trim();return v===''?NaN:Number(v.replace(',','.'));};
 const vs=read('motorSupply'), vm=read('motorMaxVolt'), ir=read('motorRatedCurrent'), is=read('motorStallCurrent');
 if(!Number.isFinite(vs)||vs<6||vs>12){out.textContent='Ajusta la fuente a una tensión compatible con el motor (en el formulario: 6–12 V).';return;}
 if(!Number.isFinite(vm)||vm<=0){out.textContent='Falta la máxima tensión permitida del motor: todavía no se debe energizar.';return;}
 if(vs>vm+0.000001){out.textContent=`NO conectar: la fuente de ${vs} V supera el límite indicado para el motor (${vm} V). Utiliza una fuente apropiada o cambia de motor.`;return;}
 if(!Number.isFinite(ir)||ir<=0||!Number.isFinite(is)||is<=0){out.textContent='El voltaje puede ser compatible, pero faltan la corriente nominal y/o la de arranque de la ficha técnica: solo análisis/simulación.';return;}
 if(is<ir){out.textContent='Revisa los datos: la corriente indicada de bloqueo/arranque es menor que la corriente nominal. No energizar sin aclarar la ficha.';return;}
 out.textContent=`Preverificación documental: ${vs} V no exceden los ${vm} V indicados; corriente nominal ${ir} A, arranque/bloqueo ${is} A. NO es aprobación de montaje: falta comprobar el límite de la fuente, el fusible, los diodos, disipadores y la alimentación adaptada del 555.`;
}
function init(){['pwmDuty','pwmFreq'].forEach(id=>$(id).addEventListener('input',drawing));drawing();$('quizNext').addEventListener('click',next);$('quizRepeat').addEventListener('click',start);const mc=$('motorCheck');if(mc)mc.addEventListener('click',checkMotor);start();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
