window.TALLER_BJT_AC_TEORICO = [
  {
    "n": 1,
    "section": "A · Fundamentos y Linealización",
    "type": "open",
    "prompt": "¿Por qué antes de analizar o calcular un amplificador con transistor BJT en corriente alterna (AC) es obligatorio calcular primero su punto de trabajo en continua (punto Q en DC)?",
    "h1": "Muchachos, recuerden que la resistencia interna del transistor (re) depende directamente de la corriente continua de emisor (IE).",
    "h2": "Fórmula clave de Boylestad: re = 26 mV / IE. ¡Sin continua es imposible conocer los parámetros de alterna!",
    "guide": "Para analizar el transistor en alterna necesitamos calcular su resistencia dinámica interna: \\(r_e = \\frac{26\\,\\mathrm{mV}}{I_E}\\). Como \\(I_E\\) es la corriente continua fijada por la polarización en DC, es imposible conocer \\(r_e\\), la impedancia de entrada (\\(Z_i\\)) o la ganancia de voltaje (\\(A_v\\)) sin haber resuelto primero el punto Q. En resumen: la corriente continua le da la 'energía y el punto de reposo' al transistor para que la señal alterna pueda oscilar limpiamente sin cortarse ni deformarse."
  },
  {
    "n": 2,
    "section": "A · Fundamentos y Linealización",
    "type": "mcq",
    "prompt": "¿Qué significa en la práctica que una señal sea de 'pequeña señal' en la unión base-emisor de un transistor BJT?",
    "options": [
      "Que el voltaje de la fuente de alimentación VCC debe ser menor a 5 V.",
      "Que la señal alterna en la unión base-emisor debe ser muy pequeña (típicamente menor a 5 mV o 10 mV pico) para que el transistor amplifique de forma lineal sin distorsionar.",
      "Que el transistor debe trabajar apagado en la región de corte.",
      "Que la ganancia del circuito debe ser siempre menor a 1."
    ],
    "answer": 1,
    "h1": "Piensen en qué tan pequeña debe ser la señal de un micrófono o sensor que entra al transistor para no deformar la onda.",
    "h2": "A temperatura ambiente el voltaje térmico es VT ≈ 26 mV; amplitudes de pocos milivoltios se mantienen en el tramo casi recto de la curva exponencial.",
    "feedback": [
      "Cuidado: VCC es el voltaje grande de continua de la fuente, no la señal alterna.",
      "¡Excelente respuesta! La unión base-emisor es exponencial. Si la señal es diminuta (vbe ≤ 5 mV pico), el transistor opera sobre un tramo casi perfectamente recto (lineal), garantizando que la salida sea una copia fiel y limpia de la entrada.",
      "Ojo: si el transistor entra en corte, se apaga y no amplifica la señal.",
      "No: los amplificadores de pequeña señal en emisor común suelen tener ganancias muy altas (Av > 100)."
    ],
    "guide": "<b>Respuesta correcta (B):</b> La unión base-emisor se comporta como un diodo exponencial: \\(i_C = I_S e^{v_{BE}/V_T}\\). Para que el transistor funcione como un amplificador lineal (donde la señal de salida es idéntica en forma a la de entrada pero más grande), las variaciones de voltaje \\(v_{be}\\) no deben superar unos pocos milivoltios (típicamente \\(|v_{be}| \\le 5\\,\\mathrm{mV}\\) pico). Si la señal es mayor, la curvatura exponencial deforma la onda senoidal y genera distorsión armónica."
  },
  {
    "n": 3,
    "section": "A · Fundamentos y Linealización",
    "type": "open",
    "prompt": "En los libros encontramos dos formas de representar el transistor en pequeña señal: el modelo re (Boylestad y Malvino) y el modelo híbrido-π (Sedra y Smith). ¿En qué se diferencian y por qué ambos dan exactamente el mismo resultado al resolver un circuito?",
    "h1": "Boylestad modela el colector como una fuente controlada por corriente (ic = β·ib) y usa re. Sedra lo modela con una fuente controlada por voltaje (ic = gm·vbe).",
    "h2": "Recuerden que la transconductancia gm es simplemente el inverso de re: gm ≈ 1 / re.",
    "guide": "La diferencia es puramente de notación y preferencia de análisis:<br>1) En el modelo \\(r_e\\) de Boylestad y Malvino, el colector se modela como una fuente de corriente controlada por corriente: \\(i_c = \\beta i_b\\), y la resistencia vista desde la base es \\(Z_b = \\beta r_e\\).<br>2) En el modelo híbrido-\\(\\pi\\) de Sedra/Smith, esa misma corriente se expresa en función del voltaje de entrada: \\(i_c = g_m v_{be}\\), donde \\(g_m = I_C / V_T \\approx 1 / r_e\\), y la resistencia de entrada se llama \\(r_\\pi = \\beta r_e\\).<br>Como \\(g_m v_{be} = (1/r_e)(i_b \\beta r_e) = \\beta i_b\\), ambas representaciones son matemáticamente idénticas. Puedes usar cualquiera de las dos; ambas arrojan exactamente los mismos voltajes, ganancias e impedancias."
  },
  {
    "n": 4,
    "section": "B · Transformación DC a AC",
    "type": "open",
    "prompt": "Al dibujar el circuito equivalente para corriente alterna (AC), ¿por qué las fuentes de voltaje continuo como +VCC se conectan directamente a tierra?",
    "h1": "Una fuente de continua ideal entrega un voltaje constante que no cambia en el tiempo (su variación en alterna es cero voltios: ΔV = 0).",
    "h2": "Si entre un nodo y tierra el voltaje de señal alterna es cero, para la señal alterna ese nodo equivale a estar a tierra.",
    "guide": "Una fuente DC ideal mantiene un potencial completamente constante en el tiempo: \\(v(t) = V_{CC}\\). Para la señal de alterna (que está formada por las variaciones, subidas y bajadas en el tiempo), el voltaje de la fuente no oscila en absoluto: \\(\\Delta V_{CC} = 0\\,\\mathrm{V}\\). Por eso, desde el punto de vista dinámico de la señal alterna, el terminal positivo de la fuente equivale a un cortocircuito a tierra (se le conoce como 'tierra de señal' o 'tierra AC'). Esto simplifica el circuito, ya que todas las resistencias conectadas a \\(+V_{CC}\\) pasan a conectarse a tierra en el modelo de alterna."
  },
  {
    "n": 5,
    "section": "B · Transformación DC a AC",
    "type": "mcq",
    "prompt": "¿Cuál es el propósito principal de colocar un condensador en paralelo con la resistencia de emisor (CE, conocido como condensador de desacoplo o bypass)?",
    "options": [
      "Permitir que la resistencia de emisor RE estabilice el circuito en continua (DC), y puentearla a tierra en alterna (AC) para lograr una ganancia de voltaje mucho más alta.",
      "Evitar que la corriente continua pase hacia el colector del transistor.",
      "Disminuir la ganancia de voltaje para que el transistor no se caliente.",
      "Convertir la fuente de alimentación continua en una señal senoidal."
    ],
    "answer": 0,
    "h1": "Piensen en el condensador como un circuito abierto en DC y como un camino de bajísima resistencia (un puente a tierra) en AC.",
    "h2": "Sin CE, la ganancia es baja: Av ≈ -RC / RE. Con CE, la ganancia se dispara a Av ≈ -RC / re.",
    "feedback": [
      "¡Correcto! En DC el condensador está abierto y RE trabaja estabilizando el punto Q frente al calor. En AC, el condensador se vuelve un cortocircuito que 'puentea' RE a tierra, eliminando su freno y disparando la ganancia de voltaje.",
      "Incorrecto: los condensadores de emisor no tienen esa función; el aislamiento de continua lo hacen los condensadores de acople en serie.",
      "Al revés: el condensador de emisor busca AUMENTAR la ganancia de voltaje, no disminuirla.",
      "Incorrecto: un condensador pasivo no puede generar una señal senoidal por sí solo."
    ],
    "guide": "<b>Respuesta correcta (A):</b> En continua (DC), el condensador está abierto y toda la corriente pasa por \\(R_E\\), asegurando que el punto de operación Q se mantenga firme y no se mueva con la temperatura. Pero en alterna (AC), el condensador ofrece un camino de bajísima impedancia a tierra (hace un 'bypass' o puente), dejando a \\(R_E\\) fuera del camino de la señal. Esto hace que la ganancia de voltaje suba de un valor modesto \\(A_v \\approx -R_C / R_E\\) a una ganancia muy grande \\(A_v \\approx -R_C / r_e\\)."
  },
  {
    "n": 6,
    "section": "C · Topologías Fundamentales",
    "type": "open",
    "prompt": "En un amplificador en configuración Emisor Común (CE), ¿por qué la señal de salida en el colector sale invertida (desfasada 180°) respecto a la señal de entrada en la base?",
    "h1": "Analicen qué le pasa a la corriente de colector cuando el voltaje en la base sube en su semiciclo positivo.",
    "h2": "Acuérdense de la ley de Kirchhoff en el colector: vC = VCC - iC·RC. Si iC sube, ¿qué le pasa a vC?",
    "guide": "Es una consecuencia directa de la ley de Kirchhoff en el colector:<br>1) Cuando la señal de entrada en la base sube (semiciclo positivo), la unión base-emisor se polariza más y el transistor conduce más corriente de colector (\\(i_C\\) aumenta).<br>2) Al circular más corriente por la resistencia de colector \\(R_C\\), la caída de voltaje en esa resistencia se hace mayor.<br>3) Como el voltaje en el terminal de colector es \\(v_C = V_{CC} - i_C R_C\\), al restar una caída más grande, el voltaje en el colector cae hacia abajo.<br>Por lo tanto: cuando la entrada sube, la salida baja. Esto produce una inversión de 180° que en las fórmulas se representa con el signo negativo de la ganancia: \\(A_v = -\\frac{R_C}{r_e}\\)."
  },
  {
    "n": 7,
    "section": "C · Topologías Fundamentales",
    "type": "open",
    "prompt": "Si un amplificador en Emisor Común no tiene condensador de desacoplo en el emisor, la resistencia RE queda visible en alterna. ¿Por qué al mirarla desde la base esa resistencia parece multiplicarse por (β+1) (efecto de reflexión al emisor)?",
    "h1": "Muchachos, comparen la pequeñísima corriente que entra por la base (ib) con la corriente mucho mayor que atraviesa el emisor: ie = (β+1)ib.",
    "h2": "La impedancia vista desde la base es Zb = vb / ib. Al sustituir vb ≈ ie·RE, el factor (β+1) queda multiplicando a RE.",
    "guide": "Por la base del transistor solo entra una corriente muy pequeña (\\(i_b\\)), pero por el resistor de emisor \\(R_E\\) circula la corriente completa del emisor: \\(i_e = (\\beta + 1) i_b\\).<br>Por ley de Ohm, el voltaje alterno generado en el emisor es \\(v_e = i_e R_E = (\\beta+1)i_b R_E\\). Al calcular la impedancia vista desde el terminal de base (\\(Z_b = v_b / i_b\\)), la corriente \\(i_b\\) se simplifica y queda:<br>\\[Z_b \\approx (\\beta + 1)(r_e + R_E)\\]<br>Esto significa que la base 've' una resistencia enorme. Por ejemplo, con \\(\\beta = 100\\), una modesta resistencia de emisor de \\(220\\,\\Omega\\) es percibida desde la entrada como si fuera de más de \\(22\\,\\mathrm{k\\Omega}\\) (\\(101 \\times 220\\,\\Omega \\approx 22.2\\,\\mathrm{k\\Omega}\\)). ¡Eleva notablemente la impedancia de entrada del amplificador!"
  },
  {
    "n": 8,
    "section": "C · Topologías Fundamentales",
    "type": "mcq",
    "prompt": "¿Para qué se utiliza principalmente la configuración Colector Común (también llamada Seguidor de Emisor) en audio e instrumentación?",
    "options": [
      "Para lograr una altísima ganancia de voltaje (Av > 200) e invertir la señal 180°.",
      "Como adaptador de impedancias (buffer): tiene una alta impedancia de entrada y una muy baja impedancia de salida, entregando corriente a la carga sin perder nivel de voltaje (Av ≈ +1).",
      "Para apagar el transistor y dejarlo permanentemente en corte.",
      "Para amplificar únicamente señales de corriente continua sin admitir frecuencias de audio."
    ],
    "answer": 1,
    "h1": "Recuerden que en esta configuración la salida se toma en el emisor, por lo que el voltaje de salida 'sigue' casi idéntico al de la base.",
    "h2": "Es el circuito ideal para conectar un sensor delicado a un parlante o carga de baja resistencia sin ahogar la señal.",
    "feedback": [
      "No: el seguidor de emisor no amplifica voltaje ni invierte la fase.",
      "¡Exacto! El seguidor de emisor actúa como un buffer: no amplifica voltaje (Av ≈ +1), pero tiene alta impedancia de entrada (no carga la etapa previa) y baja impedancia de salida (entrega toda la corriente necesaria a la carga sin que el voltaje se caiga).",
      "Incorrecto: el transistor opera normalmente en la región activa lineal.",
      "Falso: se usa ampliamente para audiofrecuencias y señales rápidas de instrumentación."
    ],
    "guide": "<b>Respuesta correcta (B):</b> El Colector Común o Seguidor de Emisor se caracteriza por no amplificar voltaje (su ganancia es ligeramente menor a 1, típicamente \\(A_v \\approx +0.98\\) y en fase), pero posee una gran ganancia de corriente. Su gran utilidad es servir de adaptador o 'buffer': presenta una alta impedancia de entrada (no le roba señal a la etapa anterior) y una bajísima impedancia de salida (unos pocos ohmios), permitiendo alimentar cargas difíciles (como un parlante de 8 Ω o un cable largo) sin que el voltaje se caiga."
  },
  {
    "n": 9,
    "section": "D · Efectos de Carga y Dinámica",
    "type": "open",
    "prompt": "¿Cuál es la diferencia práctica entre la ganancia de un amplificador sin carga (Avo), la ganancia cuando le conectamos una carga (Av) y la ganancia total del sistema (Avs) que incluye la resistencia de la fuente?",
    "h1": "Piensen en un amplificador de audio: una cosa es medir el voltaje con los terminales al aire y otra cuando conectamos los parlantes.",
    "h2": "La resistencia interna del generador o sensor (Rs) forma un divisor de voltaje con la entrada del amplificador (Zi).",
    "guide": "En el diseño real de circuitos se distinguen tres ganancias:<br>1) **Ganancia sin carga (\\(A_{vo} = v_o/v_i\\)):** Se mide en circuito abierto (sin nada conectado a la salida, \\(R_L = \\infty\\)). Es el valor máximo teórico de la etapa sola: \\(A_{vo} \\approx -R_C/r_e\\).<br>2) **Ganancia con carga (\\(A_v = v_o/v_i\\)):** Al conectar la carga \\(R_L\\), esta queda en paralelo con \\(R_C\\) en alterna (\\(r_L = R_C \\parallel R_L\\)), haciendo que la ganancia disminuya: \\(A_v \\approx -r_L/r_e\\).<br>3) **Ganancia total del sistema (\\(A_{vs} = v_o/v_s\\)):** Tiene en cuenta que el generador o sensor tiene una resistencia interna \\(R_s\\). Al conectarse a la entrada del amplificador (\\(Z_i\\)), se forma un divisor de voltaje a la entrada (\\(v_i = v_s \\frac{Z_i}{R_s + Z_i}\\)), por lo que solo una fracción de la señal llega al transistor. La ganancia neta es:<br>\\[A_{vs} = A_v \\cdot \\left(\\frac{Z_i}{R_s + Z_i}\\right)\\]"
  },
  {
    "n": 10,
    "section": "D · Efectos de Carga y Dinámica",
    "type": "open",
    "prompt": "¿Qué significa la 'máxima excursión simétrica' de salida en un amplificador y qué pasa con la forma de onda si le exigimos más señal de la que puede entregar?",
    "h1": "Visualicen la onda senoidal en el osciloscopio oscilando alrededor del punto de reposo VCEQ.",
    "h2": "El voltaje no puede subir más allá de la fuente VCC ni bajar más allá del voltaje de saturación (aprox. 0.2 V).",
    "guide": "La **máxima excursión simétrica** es el mayor voltaje pico a pico que el amplificador puede entregar a la salida de forma limpia, sin deformar ni 'cortar' la onda senoidal.<br>El transistor tiene dos límites físicos insuperables:<br>- Hacia abajo: el voltaje colector-emisor no puede ser menor a su voltaje de saturación (\\(V_{CE(sat)} \\approx 0.2\\,\\mathrm{V}\\)).<br>- Hacia arriba: la corriente no puede ser negativa (en corte, \\(i_C = 0\\)), por lo que el colector no puede subir más allá del voltaje de alimentación \\(+V_{CC}\\).<br>Para lograr que la onda oscile lo más grande posible de forma simétrica, el punto de reposo \\(V_{CEQ}\\) debe diseñarse en el centro de la recta de carga. Si la señal de entrada supera ese rango, las crestas o los valles de la onda se 'aplanan' (recorte o clipping), generando un sonido distorsionado en audio o errores de medición en instrumentación."
  },
  {
    "n": 11,
    "section": "E · Multietapa y Configuraciones Avanzadas",
    "type": "mcq",
    "prompt": "Si queremos amplificar la señal débil de un micrófono y conectarla a un parlante de baja impedancia, ¿por qué es una gran solución usar dos etapas en cascada: Emisor Común (CE) seguido de Colector Común (CC)?",
    "options": [
      "La primera etapa (CE) aporta la ganancia de voltaje necesaria y la segunda (CC) actúa como buffer de corriente, evitando que la baja resistencia del parlante ahogue la ganancia.",
      "La segunda etapa duplica la ganancia de voltaje para que suene el doble de fuerte.",
      "El Colector Común elimina por completo la necesidad de polarizar los transistores en continua.",
      "Para invertir la señal dos veces y que vuelva a ser positiva."
    ],
    "answer": 0,
    "h1": "Recuerden las fortalezas de cada etapa: el Emisor Común es el rey del voltaje, y el Colector Común es el rey de la corriente.",
    "h2": "Si conectan el parlante de pocos ohmios directo al Emisor Común, su baja resistencia queda en paralelo con RC y destruye la ganancia.",
    "feedback": [
      "¡Excelente! El Emisor Común amplifica la débil tensión del micrófono a varios voltios. Luego, el Colector Común recibe ese voltaje y lo entrega con suficiente corriente al parlante gracias a su baja impedancia de salida, sin perder voltaje.",
      "Incorrecto: el Colector Común no amplifica voltaje (Av ≈ +1), solo aporta corriente.",
      "Falso: todos los transistores bipolares requieren polarización en DC para operar en zona activa.",
      "Cuidado: el Colector Común no invierte la fase (Av tiene signo positivo)."
    ],
    "guide": "<b>Respuesta correcta (A):</b> Es una de las combinaciones más útiles en electrónica analógica:<br>1) La primera etapa en **Emisor Común (CE)** toma la diminuta señal del micrófono (unos pocos milivoltios) y la amplifica a varios voltios gracias a su alta ganancia de voltaje.<br>2) Sin embargo, si conectáramos un parlante de 8 Ω directamente al colector de esa etapa, la resistencia efectiva sería \\(R_C \\parallel 8\\,\\Omega \\approx 8\\,\\Omega\\), haciendo que la ganancia se desplome casi a cero.<br>3) Por eso se coloca la segunda etapa en **Colector Común (CC)**: recibe el voltaje amplificado, no lo reduce (\\(A_v \\approx +1\\)) y, al tener una impedancia de salida de unos pocos ohmios, es capaz de entregar toda la corriente que el parlante necesita para sonar fuerte y claro."
  },
  {
    "n": 12,
    "section": "E · Multietapa y Configuraciones Avanzadas",
    "type": "open",
    "prompt": "¿Qué es la configuración en cascada Cascode (un Emisor Común conectado directamente a una Base Común) y cuál es su gran ventaja para trabajar con señales de alta frecuencia?",
    "h1": "El primer transistor (CE) tiene como carga el emisor del segundo transistor (CB), cuya resistencia de entrada es pequeñísima (re).",
    "h2": "Al tener la primera etapa una ganancia de voltaje cercana a 1, las capacitancias internas del transistor no se multiplican y la respuesta en frecuencia no se frena.",
    "guide": "La configuración Cascode conecta dos transistores en cascada directa: el primero en **Emisor Común (abajo)** y el segundo en **Base Común (arriba)**.<br>Su gran ventaja radica en cómo resuelve el problema de la velocidad en alta frecuencia:<br>- En un Emisor Común tradicional, las pequeñas capacitancias parásitas internas del transistor se multiplican por la ganancia de voltaje (fenómeno conocido en los libros como Efecto Miller), frenando la respuesta del circuito cuando la frecuencia sube.<br>- En el Cascode, la carga que 've' el primer transistor es simplemente el emisor del segundo, cuya resistencia es pequeñísima (apenas \\(r_e\\)). Por lo tanto, la ganancia de voltaje de la primera etapa es casi unitaria (\\(|A_{v1}| \\approx r_e/r_e = 1\\)).<br>- Al no haber ganancia de voltaje en el primer transistor, las capacitancias parásitas no se multiplican y el circuito no se frena. Toda la ganancia de voltaje la produce limpiamente el segundo transistor (Base Común), logrando un ancho de banda mucho mayor, ideal para radiofrecuencia y telecomunicaciones."
  },
  {
    "n": 13,
    "section": "F · Troubleshooting en Laboratorio",
    "type": "mcq",
    "prompt": "Un estudiante monta en el protoboard un amplificador en Emisor Común. Al medir con el multímetro en continua (DC), todas las tensiones están perfectas (VBE = 0.7 V, VCEQ = 6.2 V). Sin embargo, al conectar la señal alterna, el osciloscopio muestra que la ganancia de voltaje cayó de −120 a apenas −1.5. ¿Cuál es la falla más probable?",
    "options": [
      "El transistor se quemó y está en cortocircuito.",
      "La resistencia de colector RC se abrió o se desconectó.",
      "El condensador de desacoplo de emisor (CE) está desconectado, abierto o con falso contacto en el protoboard.",
      "La fuente de alimentación VCC se quedó sin voltaje."
    ],
    "answer": 2,
    "h1": "Si los voltajes de continua están perfectos, las resistencias y el transistor están bien polarizados en DC.",
    "h2": "La ganancia cayó de -RC/re a -RC/RE. ¿Qué componente es el encargado de puentear RE en alterna?",
    "feedback": [
      "No: si el transistor estuviera quemado, los voltajes en continua VBE y VCEQ no darían 0.7 V y 6.2 V.",
      "Incorrecto: si RC estuviera abierta, el voltaje de colector sería 0 V o flotante, no 6.2 V.",
      "¡Exacto! El condensador de emisor no interviene en DC, por lo que el multímetro mide tensiones normales. Pero en AC, al estar abierto o desconectado, RE deja de estar puenteada y la ganancia se desploma de -RC/re a -RC/RE.",
      "Falso: si la fuente no tuviera voltaje, todas las mediciones de continua darían cero."
    ],
    "guide": "<b>Respuesta correcta (C):</b> ¡Es una de las fallas más comunes en las prácticas de laboratorio!<br>Como las mediciones en continua (DC) son exactamente las esperadas (\\(V_{BE} = 0.7\\,\\mathrm{V}\\) y \\(V_{CEQ} = 6.2\\,\\mathrm{V}\\)), confirmamos que la fuente, el transistor y las resistencias \\(R_1, R_2, R_C, R_E\\) están en perfecto estado.<br>El único componente que no afecta la continua pero sí define la ganancia en alterna es el **condensador de desacoplo de emisor (\\(C_E\\))**. Si este condensador tiene una patica suelta, un falso contacto en el protoboard o está dañado por dentro, \\(R_E\\) queda sin puentear en alterna, haciendo que la ganancia caiga drásticamente de \\(A_v \\approx -R_C/r_e\\) (por ejemplo \\(-120\\)) a \\(A_v \\approx -R_C/R_E\\) (por ejemplo \\(-1.5\\))."
  },
  {
    "n": 14,
    "section": "F · Troubleshooting en Laboratorio",
    "type": "open",
    "prompt": "Cuando observas la señal de salida de un amplificador en Emisor Común en el osciloscopio, ¿cómo sabes si la onda se está recortando (aplanando) por saturación o por corte?",
    "h1": "Recuerda que el Emisor Común invierte la fase (180°): lo que en la entrada es positivo, en la salida es negativo.",
    "h2": "Saturación significa máxima corriente y el voltaje de colector cae casi a cero (VCE ≈ 0.2 V). Corte significa corriente cero y el colector sube hacia +VCC.",
    "guide": "Debido a la inversión de fase de 180° propia del Emisor Común:<br>1) **Recorte por saturación:** Ocurre cuando el transistor conduce su máxima corriente y el voltaje entre colector y emisor cae a su valor mínimo (\\(V_{CE(sat)} \\approx 0.2\\,\\mathrm{V}\\)). Por la inversión de fase, este aplanamiento se ve en el **semiciclo inferior (el valle de abajo)** de la onda senoidal en la pantalla del osciloscopio.<br>2) **Recorte por corte:** Ocurre cuando el transistor se apaga por completo (corriente de colector cero) y el voltaje de colector sube hasta el nivel de la fuente \\(+V_{CC}\\). Este aplanamiento se ve en el **semiciclo superior (la cresta de arriba)** de la onda en el osciloscopio."
  },
  {
    "n": 15,
    "section": "F · Troubleshooting en Laboratorio",
    "type": "open",
    "prompt": "Al comprar transistores comerciales (como el 2N3904), el fabricante indica que el factor β puede variar ampliamente (por ejemplo, entre 100 y 300), y además la resistencia interna re cambia con la temperatura. ¿Cómo ayuda la técnica de 'emisor dividido' (resistencia partida RE1 + RE2) a que la ganancia del amplificador sea estable y predecible?",
    "h1": "Si dejamos una pequeña parte de la resistencia de emisor (RE1) sin condensador de desacoplo, la ganancia pasa a depender de resistencias externas y no del transistor.",
    "h2": "Compara la fórmula Av ≈ -RC / re frente a Av ≈ -RC / RE1 cuando elegimos RE1 mucho mayor que re.",
    "guide": "La técnica de **emisor dividido** (conocida en los textos como *swamping* o degeneración parcial) consiste en dividir la resistencia de emisor en dos resistencias en serie: \\(R_E = R_{E1} + R_{E2}\\), y colocar el condensador de desacoplo \\(C_E\\) exclusivamente en paralelo con \\(R_{E2}\\).<br>De esta forma:<br>- La ganancia de voltaje en alterna queda regida por: \\(A_v \\approx -\\frac{R_C}{r_e + R_{E1}}\\).<br>- Si elegimos \\(R_{E1}\\) para que sea notablemente mayor que \\(r_e\\) (por ejemplo, \\(R_{E1} \\ge 10 r_e\\)), la resistencia interna del transistor \\(r_e\\) queda prácticamente despreciada, y la ganancia pasa a ser simplemente el cociente de dos resistencias fijas:<br>\\[A_v \\approx -\\frac{R_C}{R_{E1}}\\]<br>Como \\(R_C\\) y \\(R_{E1}\\) son componentes comerciales fijos con tolerancias conocidas (1% o 5%), el circuito mantendrá exactamente la misma ganancia aunque cambies de transistor por otro con distinto \\(\\beta\\) o la temperatura del chasis suba varios grados en el laboratorio."
  }
];
