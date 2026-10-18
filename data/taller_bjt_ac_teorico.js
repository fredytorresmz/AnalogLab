window.TALLER_BJT_AC_TEORICO = [
  {
    "n": 1,
    "section": "A · Fundamentos y Linealización",
    "type": "open",
    "prompt": "Explique el principio físico de la linealización de pequeña señal en un transistor BJT. ¿Por qué es indispensable haber resuelto previamente el punto de operación en DC (punto Q)?",
    "h1": "Piense en la relación no lineal exponencial de Shockley entre iC y vBE.",
    "h2": "Recuerde la analogía: la pendiente (transconductancia gm) se evalúa estrictamente en el punto de reposo fijado por la continua.",
    "guide": "La característica física de entrada del BJT es exponencial: \\(i_C = I_S \\exp(v_{BE}/V_T)\\). Para amplitudes de señal muy pequeñas (\\(v_{be} \\le 5\\,\\mathrm{mV}\\)), la curva exponencial puede aproximarse con alta precisión mediante la recta tangente a la curva en el punto de reposo \\(Q(V_{BEQ}, I_{CQ})\\). La pendiente de esa tangente es la transconductancia \\(g_m = I_{CQ}/V_T\\). Sin resolver el DC, se desconoce el valor de \\(I_{CQ}\\) y, por tanto, es imposible determinar los parámetros dinámicos (\\(g_m, r_e, r_\\pi\\))."
  },
  {
    "n": 2,
    "section": "A · Fundamentos y Linealización",
    "type": "mcq",
    "prompt": "¿Cuál es la condición fundamental de pequeña señal sobre la amplitud de la tensión alterna base-emisor \\(v_{be}\\) para que la distorsión de segundo armónico (\\(HD_2\\)) sea despreciable (menor al 5%)?",
    "options": [
      "\\(|v_{be}| \\ll V_{CC}\\), típicamente menor a 5 V.",
      "\\(|v_{be}| \\ll 2V_T\\), típicamente menor o igual a 5 mV pico.",
      "Cualquier amplitud, siempre que el transistor no entre en corte.",
      "\\(|v_{be}|\\) debe ser exactamente igual a 0.7 V."
    ],
    "answer": 1,
    "feedback": [
      "Incorrecto. Comparar con VCC no asegura linealidad en la unión base-emisor.",
      "¡Correcto! De la expansión de Taylor, \\(HD_2 = V_p / (4V_T)\\). Para \\(V_p \\le 5\\,\\mathrm{mV}\\) a temperatura ambiente (\\(V_T \\approx 26\\,\\mathrm{mV}\\)), \\(HD_2 < 4.8\\%\\), garantizando operación lineal.",
      "Incorrecto. Aun sin cortar ni saturar, la no linealidad exponencial produce distorsión armónica si la señal es grande.",
      "Incorrecto. 0.7 V es la tensión de polarización DC, no la oscilación alterna de pequeña señal."
    ]
  },
  {
    "n": 3,
    "section": "A · Fundamentos y Linealización",
    "type": "open",
    "prompt": "Demuestre la relación matemática de equivalencia entre el modelo \\(r_e\\) de Boylestad/Malvino y el modelo híbrido-\\(\\pi\\) de Sedra/Smith/Razavi. ¿Por qué ambos producen exactamente los mismos resultados numéricos?",
    "h1": "Exprese la corriente de colector generada por cada modelo: \\(i_c = \\beta i_b\\) vs \\(i_c = g_m v_{be}\\).",
    "h2": "Sustituya \\(v_{be} = i_b r_\\pi\\) y las definiciones de \\(g_m = I_C/V_T\\) y \\(r_e = V_T/I_E\\).",
    "guide": "En el modelo \\(r_e\\), la fuente de colector es controlada por corriente: \\(i_c = \\beta i_b\\), y la resistencia vista desde la base es \\(Z_b = (\\beta+1)r_e\\). En el modelo híbrido-\\(\\pi\\), la fuente es controlada por tensión: \\(i_c = g_m v_{be}\\), con resistencia de base \\(r_\\pi\\). Como \\(g_m = 1/r_e\\) (asumiendo \\(\\alpha \\approx 1\\)) y \\(v_{be} = i_b r_\\pi = i_b (\\beta r_e)\\), al sustituir se tiene: \\(i_c = g_m v_{be} = (1/r_e)(i_b \\beta r_e) = \\beta i_b\\). Ambos modelos representan la misma física linealizada; la elección es solo una preferencia de análisis nodal vs de malla."
  },
  {
    "n": 4,
    "section": "B · Transformación DC a AC",
    "type": "open",
    "prompt": "En el análisis de pequeña señal en banda media, ¿por qué una fuente de alimentación de continua independiente como \\(+V_{CC} = 15\\,\\mathrm{V}\\) se reemplaza por un cortocircuito a tierra (tierra AC)?",
    "h1": "Piense en la definición matemática de variación incremental: \\(v_{cc}(t) = \\Delta V_{CC}\\).",
    "h2": "Un nodo con potencial constante no experimenta variación alterna respecto a la referencia.",
    "guide": "Una fuente DC ideal mantiene un potencial perfectamente constante en el tiempo: \\(v_{fuente}(t) = V_{CC}\\). La componente alterna (incremental) es por definición la derivada o variación temporal: \\(v_{ac} = \\Delta V_{CC} = 0\\,\\mathrm{V}\\). Un nodo con diferencia de potencial alterna igual a cero respecto a la referencia de tierra se comporta dinámicamente como un cortocircuito a tierra para la señal AC (tierra incremental o masa virtual de AC)."
  },
  {
    "n": 5,
    "section": "B · Transformación DC a AC",
    "type": "mcq",
    "prompt": "¿Qué función cumple el condensador de desacoplo de emisor (bypass) \\(C_E\\) conectado en paralelo con \\(R_E\\)?",
    "options": [
      "Filtra el rizado de la fuente de alimentación DC.",
      "Evita que el transistor se caliente en corriente continua.",
      "Proporciona una trayectoria de muy baja impedancia a tierra para la señal AC, maximizando la ganancia en banda media sin desestabilizar el punto Q en DC.",
      "Convierte la etapa de emisor común en un seguidor de emisor."
    ],
    "answer": 2,
    "feedback": [
      "Incorrecto. El filtro de rizado se ubica en la fuente de alimentación, no en el emisor del amplificador.",
      "Incorrecto. El punto térmico y la estabilidad DC los fija RE en continua, no CE.",
      "¡Correcto! En DC, CE es circuito abierto permitiendo que RE estabilice térmicamente el punto Q. En AC de banda media, CE se aproxima a un cortocircuito, enviando el emisor a tierra dinámica para que la ganancia sea \\(A_v \\approx -R_C/r_e\\) en lugar de estar atenuada por RE.",
      "Incorrecto. El seguidor de emisor toma la salida en el emisor; con CE a tierra la salida en emisor sería cero."
    ]
  },
  {
    "n": 6,
    "section": "C · Topologías Fundamentales",
    "type": "open",
    "prompt": "En una etapa Emisor Común (CE), ¿por qué existe un desfase de 180° entre la señal de tensión de entrada en la base y la de salida en el colector?",
    "h1": "Siga la cadena de causa y efecto: aumento de \\(v_{in} \\to\\) corriente \\(i_c \\to\\) caída en \\(R_C \\to\\) voltaje de colector \\(v_c\\).",
    "h2": "Recuerde la ley de tensiones en el colector: \\(v_C(t) = V_{CC} - i_C(t) R_C\\).",
    "guide": "Cuando la señal de entrada \\(v_i\\) sube en su semiciclo positivo, la tensión base-emisor crece, incrementando la corriente de colector \\(i_c\\). Al circular mayor corriente por \\(R_C\\), la caída de tensión \\(i_c R_C\\) aumenta. Por la ecuación del nodo de salida \\(v_C = V_{CC} - i_C R_C\\), un aumento en la caída de \\(R_C\\) provoca una disminución inmediata en el potencial del colector. Por lo tanto, cuando la entrada sube, la salida baja, produciendo una inversión de fase exacta de 180° (signo negativo en la ganancia \\(A_v\\))."
  },
  {
    "n": 7,
    "section": "C · Topologías Fundamentales",
    "type": "open",
    "prompt": "Explique el Teorema de Reflexión de Resistencia de emisor a base. ¿Por qué una resistencia pequeña de degeneración \\(R_E = 220\\,\\Omega\\) eleva tanto la impedancia de entrada vista desde la base?",
    "h1": "Considere la relación entre la corriente de base \\(i_b\\) y la corriente total que atraviesa \\(R_E\\), que es \\(i_e = (\\beta+1)i_b\\).",
    "h2": "La tensión en la base es \\(v_b = v_{be} + i_e R_E\\). Divida por \\(i_b\\).",
    "guide": "La corriente que atraviesa la resistencia de emisor no es la diminuta corriente de base \\(i_b\\), sino la corriente de emisor completa \\(i_e = (\\beta+1)i_b\\). Al aplicar la ley de Ohm para encontrar la resistencia equivalente que 'siente' la fuente conectada a la base: \\(Z_b = v_b / i_b = (i_b r_\\pi + (\\beta+1)i_b R_E) / i_b = r_\\pi + (\\beta+1)R_E = (\\beta+1)(r_e + R_E)\\). Por ello, cualquier resistor colocado en el emisor se refleja en la base magnificado por un factor de \\((\\beta+1)\\). Si \\(\\beta=100\\), un resistor de \\(220\\,\\Omega\\) se percibe desde la base como \\(101 \\times 220\\,\\Omega \\approx 22.2\\,\\mathrm{k\\Omega}\\)."
  },
  {
    "n": 8,
    "section": "C · Topologías Fundamentales",
    "type": "mcq",
    "prompt": "¿Cuáles son las dos características primordiales que justifican el uso de la configuración Colector Común (Seguidor de Emisor) en etapas de salida y buffers?",
    "options": [
      "Alta ganancia de tensión (\\(A_v > 100\\)) e inversión de fase de 180°.",
      "Ganancia de tensión cercana a la unidad (\\(A_v \\approx +1\\)), muy alta impedancia de entrada y muy baja impedancia de salida.",
      "Impedancia de entrada casi nula y alta ganancia de corriente solamente.",
      "Excelente comportamiento en frecuencias de microondas eliminando el efecto Miller."
    ],
    "answer": 1,
    "feedback": [
      "Incorrecto. El seguidor de emisor no invierte fase ni tiene ganancia mayor a 1.",
      "¡Correcto! El seguidor de emisor actúa como un transformador electrónico de impedancias (buffer): toma una señal de un nodo de alta impedancia sin cargarlo (alta Zin) y la entrega a una carga exigente con baja resistencia (baja Zo), manteniendo Av ≈ 1 sin desfase.",
      "Incorrecto. La impedancia de entrada del CC es muy alta, no nula.",
      "Incorrecto. La configuración utilizada comúnmente para anular el efecto Miller en alta frecuencia es la Base Común (CB) o Cascode, no el CC."
    ]
  },
  {
    "n": 9,
    "section": "D · Efectos de Carga y Dinámica",
    "type": "open",
    "prompt": "¿Cuál es la diferencia física y matemática entre la ganancia de voltaje sin carga (\\(A_{vo}\\)), la ganancia con carga (\\(A_v\\)) y la ganancia global del sistema (\\(A_{vs} = v_o/v_s\\))?",
    "h1": "Piense en los dos divisores de tensión: el divisor de entrada formado por \\(R_s\\) y \\(Z_i\\), y el divisor de salida formado por \\(R_C\\) y \\(R_L\\).",
    "h2": "Escriba la cadena de ganancia: \\(A_{vs} = \\frac{v_i}{v_s} \\cdot \\frac{v_o}{v_i}\\).",
    "guide": "1) \\(A_{vo} = v_o/v_i\\) en circuito abierto (sin carga externa, \\(R_L = \\infty\\)): representa la capacidad máxima de ganancia de la etapa aislada: \\(A_{vo} \\approx -R_C/r_e\\).\n2) \\(A_v = v_o/v_i\\) con carga \\(R_L\\) conectada: la resistencia de colector efectiva disminuye a \\(R_C \\parallel R_L\\), reduciendo la ganancia de la etapa: \\(A_v \\approx -(R_C \\parallel R_L)/r_e\\).\n3) \\(A_{vs} = v_o/v_s\\) (ganancia del sistema): toma en cuenta la resistencia interna del sensor/generador \\(R_s\\). Dado que \\(R_s\\) y la impedancia de entrada \\(Z_i\\) forman un divisor resistivo, la tensión real que llega a la base es \\(v_i = v_s \\cdot \\frac{Z_i}{R_s + Z_i}\\). Por tanto: \\(A_{vs} = A_v \\cdot \\frac{Z_i}{R_s + Z_i}\\). Despreciar \\(R_s\\) o \\(R_L\\) conduce a errores severos de sobrestimación en diseño real."
  },
  {
    "n": 10,
    "section": "D · Efectos de Carga y Dinámica",
    "type": "open",
    "prompt": "Defina el concepto de Máxima Excursión Simétrica de Salida (Maximum Symmetrical Swing) y explique qué tipo de distorsión ocurre si la señal supera dicho límite.",
    "h1": "Recuerde los dos límites físicos sobre la recta de carga en AC: la corriente de corte (iC = 0) y el voltaje de saturación (VCE(sat) ≈ 0.2 V).",
    "h2": "Si la señal alterna oscila alrededor de VCEQ, ¿hacia cuál extremo choca primero?",
    "guide": "La máxima excursión simétrica es la mayor amplitud pico a pico de voltaje o corriente que el amplificador puede entregar a la carga en AC sin que la señal sufra recorte (clipping) por saturación o por corte. El límite ascendente de corriente está acotado por la saturación (donde \\(v_{CE} \\approx V_{CE(sat)}\\)) y el límite descendente por el corte (donde \\(i_C = 0\\)). Si el punto Q no está perfectamente centrado en la recta de carga AC, la señal se recortará de forma asimétrica primero por uno de los dos extremos al exceder el límite, generando armónicos de distorsión severos."
  },
  {
    "n": 11,
    "section": "E · Multietapa y Configuraciones Avanzadas",
    "type": "mcq",
    "prompt": "En una conexión de dos etapas en cascada CE–CC (Emisor Común seguido de Colector Común), ¿cuál es el beneficio fundamental frente a usar una sola etapa CE para alimentar un altavoz de baja impedancia?",
    "options": [
      "El seguidor CC duplica la ganancia de tensión total.",
      "El seguidor CC actúa como etapa aisladora de impedancia (buffer), evitando que la baja resistencia de carga destruya la ganancia de la primera etapa CE.",
      "Elimina por completo la necesidad de polarización en corriente continua.",
      "Invierte dos veces la señal para que vuelva a estar en fase."
    ],
    "answer": 1,
    "feedback": [
      "Incorrecto. El seguidor CC tiene ganancia de tensión ligeramente menor a 1; no amplifica tensión.",
      "¡Correcto! Si conectáramos una carga baja (ej. 32 Ω u 8 Ω) directamente al colector del CE, el paralelo RC || RL colapsaría a unos pocos ohmios, reduciendo la ganancia a prácticamente cero. La etapa CC presenta una alta Zin a la etapa CE y transfiere la señal a la carga con baja Zo.",
      "Incorrecto. Toda etapa a transistores requiere polarización DC.",
      "Incorrecto. El CC no invierte la fase; la señal sigue invertida por la primera etapa CE."
    ]
  },
  {
    "n": 12,
    "section": "E · Multietapa y Configuraciones Avanzadas",
    "type": "open",
    "prompt": "Describa la topología Cascode (CE seguido de CB). ¿Por qué es una de las configuraciones más valoradas en circuitos de RF y preamplificadores de banda ancha?",
    "h1": "Analice qué impedancia ve el colector de la primera etapa CE al conectarse al emisor de la segunda etapa CB.",
    "h2": "Piense en el Efecto Miller: la capacitancia parásita base-colector Cbc multiplicada por la ganancia de la etapa.",
    "guide": "La configuración Cascode conecta una etapa en Emisor Común (CE) en cascada directa con una etapa en Base Común (CB). El emisor de la etapa CB presenta una impedancia de entrada diminuta: \\(Z_{in2} \\approx r_{e2}\\). Por tanto, la carga de la primera etapa CE es apenas \\(r_{e2}\\), haciendo que la ganancia de tensión de la primera etapa sea casi unitaria: \\(|A_{v1}| = r_{e2}/r_{e1} \\approx 1\\). Al ser \\(A_{v1} \\approx -1\\), la amplificación de la capacitancia parásita base-colector por Efecto Miller (\\(C_{in,Miller} = C_{\\mu}(1+|A_v|)\\)) queda prácticamente anulada. Toda la ganancia de tensión la aporta la segunda etapa CB sin sufrir el efecto Miller en su base, logrando anchos de banda muy superiores a una etapa CE simple."
  },
  {
    "n": 13,
    "section": "F · Troubleshooting en Laboratorio",
    "type": "mcq",
    "prompt": "Un técnico monta un amplificador CE y mide con el osciloscopio que la ganancia de tensión cayó de su valor de diseño de −120 a apenas −1.5. Sin embargo, al medir los voltajes con el multímetro en DC, comprueba que VBE = 0.7 V y VCEQ = 6.2 V, idénticos a los teóricos. ¿Cuál es la falla más probable?",
    "options": [
      "El transistor se quemó y está en cortocircuito.",
      "La resistencia de colector RC se abrió.",
      "El condensador de desacoplo de emisor CE está desconectado o abierto.",
      "La fuente de alimentación VCC está entregando corriente inversa."
    ],
    "answer": 2,
    "feedback": [
      "Incorrecto. Si el transistor estuviera quemado, los voltajes DC de reposo no serían correctos.",
      "Incorrecto. Si RC estuviera abierta, el voltaje DC de colector sería 0 V o flotante.",
      "¡Correcto! Si CE se abre o no hace contacto, la polarización DC no se altera en absoluto (porque en DC el condensador actúa como circuito abierto). Pero en AC, RE deja de estar puenteada y la ganancia se desploma a \\(A_v \\approx -R_C/(r_e + R_E)\\). Si RE = 1 kΩ y RC = 1.5 kΩ, la ganancia cae a ~1.5.",
      "Incorrecto. La polarización DC verificada descarta un problema con la fuente."
    ]
  },
  {
    "n": 14,
    "section": "F · Troubleshooting en Laboratorio",
    "type": "open",
    "prompt": "¿Cómo se distingue en la pantalla de un osciloscopio si un amplificador en emisor común está recortando la señal por saturación dinámica o por corte?",
    "h1": "Recuerde que el amplificador CE invierte la fase (180°).",
    "h2": "Cuando la entrada está en su cresta positiva máxima, ¿en qué estado entra el BJT y qué valor toma la tensión de salida de colector?",
    "guide": "Debido a la inversión de fase de 180° en Emisor Común:\n1) Cuando la señal de entrada alcanza su cresta positiva, el transistor conduce máxima corriente y se aproxima a la saturación: el colector cae a su tensión mínima (\\(V_{CE(sat)} \\approx 0.2\\,\\mathrm{V}\\)). Por lo tanto, el recorte por saturación aparece en el semiciclo NEGATIVO (valle inferior) de la forma de onda de salida en el osciloscopio.\n2) Cuando la señal de entrada cae a su mínimo negativo, el transistor deja de conducir y entra en corte: la corriente cesa y el colector sube hacia \\(V_{CC}\\). Por lo tanto, el recorte por corte aparece en el semiciclo POSITIVO (cresta superior) de la forma de onda de salida."
  },
  {
    "n": 15,
    "section": "F · Troubleshooting en Laboratorio",
    "type": "open",
    "prompt": "Al diseñar con transistores reales como el 2N3904 o 2N2222A, el fabricante especifica un rango de \\(\\beta\\) muy amplio (por ejemplo, entre 100 y 300). ¿Qué decisiones de diseño en AC debe tomar el ingeniero para garantizar que la ganancia del circuito sea robusta y no cambie con cada transistor?",
    "h1": "Compare la sensibilidad de la ganancia con emisor totalmente bypassado vs con resistencia de emisor dividida (swamping / degeneración de emisor).",
    "h2": "Analice qué ocurre con la fórmula \\(A_v = -R_C / (r_e + R_{E1})\\) cuando \\(R_{E1} \\gg r_e\\).",
    "guide": "Para insensibilizar la ganancia ante la dispersión de \\(\\beta\\) y ante la variación térmica de \\(r_e = 26\\,\\mathrm{mV}/I_E\\), el ingeniero utiliza degeneración de emisor con resistencia partida (swamping): se divide la resistencia de emisor en dos partes en serie \\(R_E = R_{E1} + R_{E2}\\), y se coloca el condensador de bypass \\(C_E\\) únicamente en paralelo con \\(R_{E2}\\). De este modo, en AC la ganancia resulta: \\(A_v \\approx -R_C / (r_e + R_{E1})\\). Si se selecciona \\(R_{E1} \\gg r_e\\) (por ejemplo, \\(R_{E1} = 100\\,\\Omega\\) frente a \\(r_e = 13\\,\\Omega\\)), la ganancia pasa a depender casi exclusivamente de la relación de componentes pasivos externos \\(A_v \\approx -R_C / R_{E1}\\), la cual es extraordinariamente estable, lineal y predecible independientemente del transistor instalado."
  }
];
