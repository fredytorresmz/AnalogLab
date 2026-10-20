window.TALLER_BJT_AC_TEORICO = [
  {
    "n": 1,
    "section": "A · Fundamentos y Linealización",
    "type": "open",
    "prompt": "Explique el principio físico de la linealización de pequeña señal en un transistor BJT. ¿Por qué es indispensable haber resuelto previamente el punto de operación en DC (punto Q)?",
    "h1": "Muchachos, piensen en la relación física exponencial de Shockley entre iC y vBE.",
    "h2": "Recuerden la analogía que vimos en el tablero: la pendiente (transconductancia gm) se evalúa estrictamente en el punto de reposo fijado por la continua.",
    "guide": "La característica física de entrada del BJT es estrictamente exponencial: \\(i_C = I_S \\exp(v_{BE}/V_T)\\). Para amplitudes de señal muy pequeñas (\\(v_{be} \\le 5\\,\\mathrm{mV}\\)), la curva exponencial puede aproximarse con altísima precisión mediante la recta tangente evaluada en el punto de reposo \\(Q(V_{BEQ}, I_{CQ})\\). La pendiente de esa tangente es la transconductancia \\(g_m = I_{CQ}/V_T\\). Sin resolver primero el circuito en DC, desconocemos \\(I_{CQ}\\) y, por lo tanto, es físicamente imposible calcular los parámetros dinámicos de pequeña señal (\\(g_m, r_e, r_\\pi\\))."
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
      "Ojo: comparar con VCC no asegura linealidad en la unión base-emisor.",
      "¡Excelente! De la serie de Taylor, la distorsión de segundo armónico es \\(HD_2 = V_p / (4V_T)\\). Con \\(V_p \\le 5\\,\\mathrm{mV}\\) a temperatura ambiente (\\(V_T \\approx 26\\,\\mathrm{mV}\\)), \\(HD_2 < 4.8\\%\\), garantizando que el transistor opere de forma puramente lineal.",
      "Cuidado: aun sin entrar en corte ni saturación, la curvatura exponencial distorsiona la señal si la amplitud supera los 5 mV.",
      "Ojo con el concepto: 0.7 V es la polarización estática DC, no la pequeña señal alterna."
    ]
  },
  {
    "n": 3,
    "section": "A · Fundamentos y Linealización",
    "type": "open",
    "prompt": "Demuestre la relación matemática de equivalencia entre el modelo \\(r_e\\) de Boylestad/Malvino y el modelo híbrido-\\(\\pi\\) de Sedra/Smith/Razavi. ¿Por qué ambos producen exactamente los mismos resultados numéricos?",
    "h1": "Muchachos, expresen la corriente de colector generada por cada modelo: \\(i_c = \\beta i_b\\) frente a \\(i_c = g_m v_{be}\\).",
    "h2": "Sustituyan \\(v_{be} = i_b r_\\pi\\) recordando que \\(g_m = I_C/V_T\\) y \\(r_e = V_T/I_E\\).",
    "guide": "En el modelo \\(r_e\\), la fuente de colector se modela como controlada por corriente: \\(i_c = \\beta i_b\\), y la resistencia vista desde la base es \\(Z_b = (\\beta+1)r_e\\). En el modelo híbrido-\\(\\pi\\), la fuente es controlada por tensión: \\(i_c = g_m v_{be}\\), con resistencia de base \\(r_\\pi\\). Como \\(g_m = 1/r_e\\) (asumiendo \\(\\alpha \\approx 1\\)) y \\(v_{be} = i_b r_\\pi = i_b (\\beta r_e)\\), al sustituir tenemos: \\(i_c = g_m v_{be} = (1/r_e)(i_b \\beta r_e) = \\beta i_b\\). Ambos modelos describen exactamente la misma física linealizada; usar uno u otro es simplemente preferencia entre análisis de mallas o análisis nodal."
  },
  {
    "n": 4,
    "section": "B · Transformación DC a AC",
    "type": "open",
    "prompt": "En el análisis de pequeña señal en banda media, ¿por qué una fuente de alimentación de continua independiente como \\(+V_{CC} = 15\\,\\mathrm{V}\\) se reemplaza por un cortocircuito a tierra (tierra AC)?",
    "h1": "Piensen en la definición matemática de variación incremental: \\(v_{cc}(t) = \\Delta V_{CC}\\).",
    "h2": "Un nodo con potencial constante en el tiempo no experimenta ninguna variación alterna respecto a tierra.",
    "guide": "Una fuente DC ideal mantiene un potencial rigurosamente constante en el tiempo: \\(v_{fuente}(t) = V_{CC}\\). La componente alterna (señal incremental) es por definición la derivada o variación temporal: \\(v_{ac} = \\Delta V_{CC} = 0\\,\\mathrm{V}\\). Un nodo eléctrico cuya diferencia de potencial alterna respecto a tierra es 0 V se comporta dinámicamente como un cortocircuito a tierra para la señal AC (masa virtual o tierra de señal)."
  },
  {
    "n": 5,
    "section": "B · Transformación DC a AC",
    "type": "mcq",
    "prompt": "¿Qué función cumple el condensador de desacoplo de emisor \\(C_E\\) (llamado frecuentemente condensador de bypass en los manuales de laboratorio y datasheets) conectado en paralelo con \\(R_E\\)?",
    "options": [
      "Filtra el rizado de la fuente de alimentación DC.",
      "Evita que el transistor se caliente en corriente continua.",
      "Proporciona una autopista de muy baja impedancia a tierra para la señal AC, disparando la ganancia en banda media sin desestabilizar el punto Q en DC.",
      "Convierte la etapa de emisor común en un seguidor de emisor."
    ],
    "answer": 2,
    "feedback": [
      "No: el condensador de filtro de rizado va en la fuente de poder, no en el emisor de la etapa amplificadora.",
      "No: la estabilidad térmica en continua la fija la resistencia RE, no el condensador.",
      "¡Totalmente correcto! Como vimos con la analogía de Malvino, en DC el condensador actúa como circuito abierto para que RE fije el punto Q con estabilidad térmica. En AC de banda media, CE se vuelve un cortocircuito hacia tierra dinámica, haciendo que la ganancia sea \\(A_v \\approx -R_C/r_e\\) en lugar de verse reducida por RE.",
      "Cuidado: el seguidor de emisor toma la salida en el emisor; si pusieras CE a tierra allí, anularías la señal de salida."
    ]
  },
  {
    "n": 6,
    "section": "C · Topologías Fundamentales",
    "type": "open",
    "prompt": "En una etapa Emisor Común (CE), ¿por qué existe un desfase de 180° entre la señal de tensión de entrada en la base y la de salida en el colector?",
    "h1": "Sigan la cadena física que dedujimos en el tablero: sube v_in -> aumenta i_c -> crece la caída en R_C -> cae el potencial de colector v_c.",
    "h2": "Recuerden la ley de tensiones en el lazo de colector: \\(v_C(t) = V_{CC} - i_C(t) R_C\\).",
    "guide": "Cuando la señal de entrada en la base \\(v_i\\) experimenta su semiciclo positivo, la tensión base-emisor aumenta y el transistor conduce más corriente de colector \\(i_c\\). Al circular más corriente por \\(R_C\\), la caída de tensión en esa resistencia aumenta proporcionalmente. Por la ley de Kirchhoff en el nodo de salida, \\(v_C = V_{CC} - i_C R_C\\); por tanto, al aumentar la caída en \\(R_C\\), el potencial instantáneo de colector cae en picada. Cuando la entrada sube, la salida baja: una inversión física exacta de 180° (signo negativo en \\(A_v\\))."
  },
  {
    "n": 7,
    "section": "C · Topologías Fundamentales",
    "type": "open",
    "prompt": "Explique el Teorema de Reflexión de Resistencia de emisor a base (Boylestad Sec. 5.5). ¿Por qué una resistencia en el emisor sin desacoplar de apenas \\(R_E = 220\\,\\Omega\\) eleva tanto la impedancia de entrada vista desde la base?",
    "h1": "Muchachos, comparen la corriente que entra por la base (i_b) con la corriente que realmente atraviesa R_E: \\(i_e = (\\beta+1)i_b\\).",
    "h2": "La tensión en base es \\(v_b = v_{be} + i_e R_E\\). Apliquen la ley de Ohm dividiendo todo entre \\(i_b\\).",
    "guide": "La corriente que atraviesa el resistor de emisor no es la diminuta corriente de base \\(i_b\\), sino la corriente total del emisor: \\(i_e = (\\beta+1)i_b\\). Al aplicar la ley de Ohm vista desde la base: \\(Z_b = v_b / i_b = [i_b r_\\pi + (\\beta+1)i_b R_E] / i_b = r_\\pi + (\\beta+1)R_E = (\\beta+1)(r_e + R_E)\\). Cualquier resistor en el emisor se 'refleja' en la base multiplicado por \\((\\beta+1)\\). Si \\(\\beta=100\\), un modesto resistor de \\(220\\,\\Omega\\) es percibido desde la base como \\(101 \\times 220\\,\\Omega \\approx 22.2\\,\\mathrm{k\\Omega}\\). ¡Una palanca de impedancias fenomenal!"
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
      "No: el seguidor de emisor no invierte la fase ni amplifica tensión.",
      "¡Exacto! El seguidor de emisor funciona como un transformador electrónico de impedancias: toma la señal de un nodo de alta impedancia sin drenarle corriente (alta Zi) y la entrega a una carga exigente con baja resistencia (baja Zo), manteniendo Av ≈ 1 en fase.",
      "Cuidado: la impedancia de entrada del CC es muy alta, nunca nula.",
      "Incorrecto: la configuración que anula el efecto Miller en alta frecuencia es la Base Común (CB) o Cascode, no el CC."
    ]
  },
  {
    "n": 9,
    "section": "D · Efectos de Carga y Dinámica",
    "type": "open",
    "prompt": "¿Cuál es la diferencia física y matemática entre la ganancia de voltaje sin carga (\\(A_{vo}\\)), la ganancia con carga (\\(A_v\\)) y la ganancia global del sistema (\\(A_{vs} = v_o/v_s\\))?",
    "h1": "Muchachos, fíjense en los dos divisores de tensión: el de entrada (Rs con Zi) y el de salida (RC con RL).",
    "h2": "Escriban la cadena de transferencia completa: \\(A_{vs} = \\frac{v_i}{v_s} \\cdot \\frac{v_o}{v_i}\\).",
    "guide": "1) \\(A_{vo} = v_o/v_i\\) en circuito abierto (sin carga, \\(R_L = \\infty\\)): representa el techo máximo intrínseco de ganancia de la etapa aislada: \\(A_{vo} \\approx -R_C/r_e\\).\n2) \\(A_v = v_o/v_i\\) con carga \\(R_L\\) conectada: la resistencia dinámica en el colector se reduce al paralelo \\(R_C \\parallel R_L\\), bajando la ganancia a \\(A_v \\approx -(R_C \\parallel R_L)/r_e\\).\n3) \\(A_{vs} = v_o/v_s\\) (ganancia neta del sistema): toma en cuenta la resistencia interna del sensor o generador \\(R_s\\). Dado que \\(R_s\\) y \\(Z_i\\) forman un divisor a la entrada, a la base solo llega \\(v_i = v_s \\cdot \\frac{Z_i}{R_s + Z_i}\\). Por tanto: \\(A_{vs} = A_v \\cdot \\frac{Z_i}{R_s + Z_i}\\). En el diseño real de ingeniería, olvidar este peaje conduce a errores de cálculo de más del 50%."
  },
  {
    "n": 10,
    "section": "D · Efectos de Carga y Dinámica",
    "type": "open",
    "prompt": "Defina el concepto de Máxima Excursión Simétrica de Salida (Maximum Symmetrical Swing) y explique qué tipo de distorsión ocurre si la señal supera dicho límite.",
    "h1": "Recuerden los dos topes sobre la recta de carga de AC: la corriente de corte (iC = 0) y el voltaje de saturación (VCE(sat) ≈ 0.2 V).",
    "h2": "Si la señal alterna oscila alrededor de VCEQ, ¿hacia qué extremo recortará primero si el punto Q no está centrado?",
    "guide": "La máxima excursión simétrica es la mayor oscilación pico a pico de voltaje o corriente que el amplificador puede entregar a la carga en AC sin recortar la forma de onda (clipping) ni por saturación ni por corte. El límite superior de corriente lo fija la saturación (donde \\(v_{CE} \\approx V_{CE(sat)}\\)) y el límite inferior el corte (donde \\(i_C = 0\\)). Si el punto Q no se diseña en el centro óptimo de la recta de carga de AC, la señal sufrirá un recorte asimétrico cuando se le exija gran amplitud, destruyendo la fidelidad acústica o de medición con armónicos indeseados."
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
      "No: recuerden que el seguidor CC tiene ganancia de tensión Av ≈ 1; no aporta ganancia de voltaje.",
      "¡Excelente respuesta de ingeniería! Si conectamos una carga baja (como 32 Ω u 8 Ω) directo al colector del CE, el paralelo RC || RL colapsaría a unos pocos ohmios y la ganancia se iría al suelo. El seguidor CC le muestra alta impedancia al CE y excita la carga con una impedancia de salida bajísima.",
      "Falso: toda etapa a transistores requiere siempre polarización en continua.",
      "Cuidado: el seguidor CC no desfasa la señal (0°), por lo que la señal total sigue invertida 180° por la primera etapa CE."
    ]
  },
  {
    "n": 12,
    "section": "E · Multietapa y Configuraciones Avanzadas",
    "type": "open",
    "prompt": "Describa la arquitectura Cascode (conexión directa de una etapa en Emisor Común seguida de una en Base Común — Boylestad Sec. 5.17). ¿Por qué es una de las configuraciones maestras para eliminar el Efecto Miller en alta frecuencia?",
    "h1": "Muchachos, analicen qué impedancia 've' el colector de la etapa CE al conectarse directamente al emisor de la etapa CB.",
    "h2": "Recuerden la trampa del Efecto Miller: la capacitancia parásita base-colector Cbc multiplicada por la ganancia de la etapa.",
    "guide": "La configuración Cascode conecta una etapa en Emisor Común (CE) en cascada directa con una etapa en Base Común (CB). El emisor de la segunda etapa CB presenta una impedancia de entrada sumamente baja: \\(Z_{i2} \\approx r_{e2}\\). Por consiguiente, la carga de la primera etapa CE es apenas \\(r_{e2}\\), reduciendo la ganancia de tensión de la primera etapa a prácticamente la unidad: \\(|A_{v1}| = r_{e2}/r_{e1} \\approx 1\\). Al no haber ganancia en la primera etapa, el Efecto Miller que multiplica la capacitancia parásita base-colector (\\(C_{in,Miller} = C_{\\mu}(1+|A_v|)\\)) queda casi completamente neutralizado. Toda la ganancia de tensión la produce la segunda etapa CB, logrando anchos de banda descomunales ideales para radiofrecuencia e instrumentación rápida."
  },
  {
    "n": 13,
    "section": "F · Troubleshooting en Laboratorio",
    "type": "mcq",
    "prompt": "Un estudiante monta en el laboratorio un amplificador CE y mide con el osciloscopio que la ganancia de tensión cayó de su valor de diseño de −120 a apenas −1.5. Sin embargo, al medir los voltajes con el multímetro en DC, comprueba que VBE = 0.7 V y VCEQ = 6.2 V, idénticos a los teóricos. ¿Cuál es la falla más probable?",
    "options": [
      "El transistor se quemó y está en cortocircuito.",
      "La resistencia de colector RC se abrió.",
      "El condensador de desacoplo de emisor CE está desconectado o abierto.",
      "La fuente de alimentación VCC está entregando corriente inversa."
    ],
    "answer": 2,
    "feedback": [
      "No: si el transistor estuviera dañado, las medidas de tensión en DC estarían totalmente alteradas.",
      "No: si RC se abriera, el voltaje DC de colector sería 0 V o flotante.",
      "¡Ojo clínico en el laboratorio! Si CE se desconecta o se abre, la polarización DC no cambia en nada (porque en continua los condensadores son circuito abierto). Pero en AC, RE queda activa en la señal y la ganancia se desploma a \\(A_v \\approx -R_C/(r_e + R_E)\\). Con RE = 1 kΩ y RC = 1.5 kΩ, la ganancia cae a ~1.5. ¡Un clásico de laboratorio!",
      "Descartado: la polarización DC ya fue comprobada y está en sus valores normales."
    ]
  },
  {
    "n": 14,
    "section": "F · Troubleshooting en Laboratorio",
    "type": "open",
    "prompt": "¿Cómo se distingue en la pantalla de un osciloscopio si un amplificador en emisor común está recortando la señal por saturación dinámica o por corte?",
    "h1": "Muchachos, recuerden que el amplificador en Emisor Común invierte la fase (180°).",
    "h2": "¿Qué le ocurre al voltaje de colector cuando la entrada alcanza su cresta positiva máxima?",
    "guide": "Debido a la inversión de fase de 180° propia del Emisor Común:\n1) Cuando la señal de entrada alcanza su cresta máxima positiva, el transistor se polariza con máxima corriente y se acerca a la saturación: el colector cae a su tensión más baja (\\(V_{CE(sat)} \\approx 0.2\\,\\mathrm{V}\\)). En consecuencia, el recorte por SATURACIÓN aparece en el semiciclo NEGATIVO (valle inferior) de la forma de onda en la pantalla del osciloscopio.\n2) Cuando la señal de entrada cae a su mínimo negativo, el transistor se apaga y entra en corte: la corriente cesa y el potencial de colector sube hacia \\(+V_{CC}\\). En consecuencia, el recorte por CORTE aparece en el semiciclo POSITIVO (cresta superior) de la forma de onda."
  },
  {
    "n": 15,
    "section": "F · Troubleshooting en Laboratorio",
    "type": "open",
    "prompt": "Al diseñar con transistores reales como el 2N3904 o 2N2222A, el fabricante especifica un rango de \\(\\beta\\) muy amplio (entre 100 y 300). ¿Cómo se aplica la técnica de emisor dividido o swamping (Boylestad Sec. 5.6) para asegurar que la ganancia sea inmune a la dispersión de transistores y al calor?",
    "h1": "Muchachos, comparen la sensibilidad de la ganancia cuando el emisor está totalmente puenteado frente a cuando usamos degeneración parcial (resistencia partida o swamping).",
    "h2": "Analicen qué pasa con la ecuación \\(A_v = -R_C / (r_e + R_{E1})\\) cuando elegimos \\(R_{E1} \\gg r_e\\).",
    "guide": "Para insensibilizar la ganancia ante la dispersión de \\(\\beta\\) y ante la variación térmica de \\(r_e = 26\\,\\mathrm{mV}/I_E\\), el ingeniero recurre a la técnica de emisor dividido (swamping o degeneración parcial): se divide la resistencia de emisor en dos partes en serie \\(R_E = R_{E1} + R_{E2}\\), y se coloca el condensador de bypass \\(C_E\\) exclusivamente en paralelo con \\(R_{E2}\\). Así, en AC la ganancia de la etapa queda regida por: \\(A_v \\approx -R_C / (r_e + R_{E1})\\). Si elegimos \\(R_{E1} \\ge 10 r_e\\), la ganancia pasa a depender casi al 100% del cociente de resistencias externas \\(A_v \\approx -R_C / R_{E1}\\). Esto hace que el amplificador mantenga exactamente la misma ganancia aunque cambies de transistor o la temperatura suba 40°C en el chasis del equipo."
  }
];
