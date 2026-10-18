window.RETOS_BJT_AC = [
  {
    "id": "RETO-01",
    "title": "Acondicionador de Señal de Sensor Shunt para Vehículo Eléctrico",
    "badge": "Reto Nivel Examen · Caso Automotriz",
    "image": "assets/taller/esquema-reto-examen.svg",
    "context": "En el sistema de gestión de tracción de un vehículo eléctrico (EV), un sensor de corriente entrega una pequeña señal senoidal de 15 mV pico con una resistencia interna Rs = 1.5 kΩ. Se requiere amplificar la señal para el convertidor analógico-digital (ADC) mediante un transistor 2N2222A con degeneración parcial de emisor para garantizar estabilidad térmica y baja distorsión armónica.",
    "circuitData": {
      "VCC": "16 V",
      "R1": "68 kΩ",
      "R2": "15 kΩ",
      "RC": "3.9 kΩ",
      "RE1": "120 Ω (sin bypass)",
      "RE2": "1.2 kΩ (con bypass CE = 100 µF)",
      "RL": "4.7 kΩ",
      "C1": "22 µF",
      "C2": "22 µF",
      "Q1": "2N2222A (β = 160, VBE = 0.7 V, VA = 80 V)",
      "vs": "15 mV pico, Rs = 1.5 kΩ"
    },
    "targets": [
      { "name": "ICQ", "label": "Corriente de reposo ICQ (mA)", "expected": 1.55, "tol": 0.15, "unit": "mA" },
      { "name": "re", "label": "Resistencia dinámica re (Ω)", "expected": 16.7, "tol": 1.5, "unit": "Ω" },
      { "name": "Zi", "label": "Impedancia de entrada Zi (kΩ)", "expected": 8.0, "tol": 0.8, "unit": "kΩ" },
      { "name": "Av", "label": "Ganancia de voltaje de la etapa Av (base a salida)", "expected": -15.5, "tol": 1.5, "unit": "adimensional" },
      { "name": "Avs", "label": "Ganancia global del sistema Avs (sensor a salida)", "expected": -13.0, "tol": 1.5, "unit": "adimensional" }
    ],
    "hints": [
      "<b>Pista 1 (Punto Q):</b> Convierte el divisor de base R1-R2 en su equivalente de Thévenin: \\(V_{TH} = V_{CC} \\frac{R_2}{R_1+R_2}\\) y \\(R_{TH} = R_1 \\parallel R_2\\). En continua, la resistencia total de emisor es \\(R_{E,total} = R_{E1} + R_{E2} = 1.32\\,\\mathrm{k\\Omega}\\).",
      "<b>Pista 2 (Banda media AC):</b> En AC, \\(C_E\\) cortocircuita \\(R_{E2}\\), pero \\(R_{E1} = 120\\,\\Omega\\) permanece en la trayectoria de señal. Por tanto, la resistencia en el emisor en AC es \\(r_e + R_{E1}\\).",
      "<b>Pista 3 (Divisor con sensor):</b> La ganancia global es \\(A_{vs} = \\frac{v_o}{v_s} = A_v \\cdot \\frac{Z_i}{R_s + Z_i}\\). No olvides que la impedancia de entrada \\(Z_i\\) es el paralelo de \\(R_{TH}\\) con \\(Z_b = (\\beta+1)(r_e + R_{E1})\\)."
    ],
    "fullSolution": `
      <h4>1. Análisis en Corriente Continua (Punto Q)</h4>
      <p>Calculamos el equivalente de Thévenin en la base:</p>
      \\[V_{TH} = 16\\,\\mathrm{V} \\cdot \\frac{15\\,\\mathrm{k\\Omega}}{68\\,\\mathrm{k\\Omega} + 15\\,\\mathrm{k\\Omega}} = 16 \\cdot \\frac{15}{83} \\approx \\mathbf{2.892\\,\\mathrm{V}}\\]
      \\[R_{TH} = 68\\,\\mathrm{k\\Omega} \\parallel 15\\,\\mathrm{k\\Omega} = \\frac{68 \\times 15}{83} \\approx \\mathbf{12.289\\,\\mathrm{k\\Omega}}\\]
      <p>En DC, la resistencia total de emisor es \\(R_E = R_{E1} + R_{E2} = 120\\,\\Omega + 1200\\,\\Omega = 1320\\,\\Omega = 1.32\\,\\mathrm{k\\Omega}\\).</p>
      \\[I_{BQ} = \\frac{V_{TH} - V_{BE}}{R_{TH} + (\\beta+1)R_E} = \\frac{2.892\\,\\mathrm{V} - 0.7\\,\\mathrm{V}}{12.289\\,\\mathrm{k\\Omega} + (161 \\times 1.32\\,\\mathrm{k\\Omega})} = \\frac{2.192\\,\\mathrm{V}}{12.289k + 212.52k} = \\frac{2.192\\,\\mathrm{V}}{224.81\\,\\mathrm{k\\Omega}} \\approx \\mathbf{9.75\\,\\mu\\mathrm{A}}\\]
      \\[I_{CQ} = \\beta I_{BQ} = 160 \\times 9.75\\,\\mu\\mathrm{A} \\approx \\mathbf{1.560\\,\\mathrm{mA}}\\]
      \\[I_{EQ} = (\\beta+1) I_{BQ} = 161 \\times 9.75\\,\\mu\\mathrm{A} \\approx \\mathbf{1.570\\,\\mathrm{mA}}\\]
      <p>Comprobación de zona activa:</p>
      \\[V_E = I_{EQ} R_E = 1.570\\,\\mathrm{mA} \\times 1.32\\,\\mathrm{k\\Omega} \\approx 2.072\\,\\mathrm{V}\\]
      \\[V_C = 16\\,\\mathrm{V} - (1.560\\,\\mathrm{mA} \\times 3.9\\,\\mathrm{k\\Omega}) = 16 - 6.084 = 9.916\\,\\mathrm{V}\\]
      \\[V_{CEQ} = V_C - V_E = 9.916 - 2.072 = \\mathbf{7.844\\,\\mathrm{V}} > 0.2\\,\\mathrm{V} \\quad (\\checkmark \\text{Zona Activa Lineal})\\]

      <h4>2. Parámetros Dinámicos de Pequeña Señal</h4>
      \\[r_e = \\frac{V_T}{I_{EQ}} = \\frac{26\\,\\mathrm{mV}}{1.570\\,\\mathrm{mA}} \\approx \\mathbf{16.56\\,\\Omega \\approx 16.6\\,\\Omega}\\]
      \\[g_m = \\frac{I_{CQ}}{V_T} = \\frac{1.560\\,\\mathrm{mA}}{26\\,\\mathrm{mV}} \\approx \\mathbf{60.0\\,\\mathrm{mS}}\\]
      \\[r_\\pi = \\beta r_e = 160 \\times 16.56\\,\\Omega \\approx \\mathbf{2.65\\,\\mathrm{k\\Omega}}\\]

      <h4>3. Impedancias en Banda Media (AC)</h4>
      <p>El condensador \\(C_E\\) puentea \\(R_{E2}\\), pero \\(R_{E1} = 120\\,\\Omega\\) permanece activa en el emisor:</p>
      \\[Z_b = (\\beta+1)(r_e + R_{E1}) = 161 \\times (16.56 + 120)\\,\\Omega = 161 \\times 136.56\\,\\Omega \\approx \\mathbf{21.99\\,\\mathrm{k\\Omega}}\\]
      <p>Impedancia de entrada total de la etapa:</p>
      \\[Z_i = R_{TH} \\parallel Z_b = 12.289\\,\\mathrm{k\\Omega} \\parallel 21.99\\,\\mathrm{k\\Omega} = \\frac{12.289 \\times 21.99}{12.289 + 21.99} \\approx \\mathbf{7.88\\,\\mathrm{k\\Omega} \\approx 8.0\\,\\mathrm{k\\Omega}}\\]
      <p>Impedancia de salida:</p>
      \\[Z_o = R_C = \\mathbf{3.9\\,\\mathrm{k\\Omega}}\\]

      <h4>4. Ganancias de Voltaje (Etapa y Sistema)</h4>
      <p>Resistencia de colector efectiva con la carga \\(R_L = 4.7\\,\\mathrm{k\\Omega}\\):</p>
      \\[R_C' = R_C \\parallel R_L = 3.9\\,\\mathrm{k\\Omega} \\parallel 4.7\\,\\mathrm{k\\Omega} = \\frac{18.33}{8.6}\\,\\mathrm{k\\Omega} \\approx \\mathbf{2.131\\,\\mathrm{k\\Omega}}\\]
      <p><b>Ganancia propia de la etapa (base a colector):</b></p>
      \\[A_v = -\\frac{R_C'}{r_e + R_{E1}} = -\\frac{2131\\,\\Omega}{16.56\\,\\Omega + 120\\,\\Omega} = -\\frac{2131}{136.56} \\approx \\mathbf{-15.60}\\]
      <p><b>Divisor de tensión con la resistencia del sensor (Rs):</b></p>
      \\[\\frac{v_i}{v_s} = \\frac{Z_i}{R_s + Z_i} = \\frac{7.88\\,\\mathrm{k\\Omega}}{1.5\\,\\mathrm{k\\Omega} + 7.88\\,\\mathrm{k\\Omega}} = \\frac{7.88}{9.38} \\approx \\mathbf{0.840}\\]
      <p><b>Ganancia global del sistema (sensor a salida):</b></p>
      \\[A_{vs} = \\frac{v_o}{v_s} = \\left(\\frac{v_i}{v_s}\\right) \\cdot A_v = 0.840 \\times (-15.60) \\approx \\mathbf{-13.10}\\]

      <h4>5. Verificación de Amplitud y Excursión Simétrica</h4>
      <p>Para una señal de sensor de \\(v_s = 15\\,\\mathrm{mV}\\) pico:</p>
      \\[v_o = |A_{vs}| \\cdot v_s = 13.10 \\times 15\\,\\mathrm{mV} \\approx \\mathbf{196.5\\,\\mathrm{mV pico} \\quad (393\\,\\mathrm{mV}_{p-p})}\\]
      <p>La tensión alterna en la unión base-emisor es apenas:</p>
      \\[v_{be} = v_i \\cdot \\frac{r_e}{r_e + R_{E1}} = (0.84 \\times 15\\,\\mathrm{mV}) \\cdot \\frac{16.56}{136.56} = 12.6\\,\\mathrm{mV} \\times 0.121 \\approx \\mathbf{1.52\\,\\mathrm{mV pico}}\\]
      <p><b>Conclusión de ingeniería:</b> Al ser \\(v_{be} = 1.52\\,\\mathrm{mV} < 5\\,\\mathrm{mV}\\), el amplificador opera con distorsión armónica inferior al 1.5%, cumpliendo estrictamente con los estándares de instrumentación automotriz.</p>
    `
  },
  {
    "id": "RETO-02",
    "title": "Buffer Seguidor de Emisor para Control de Servomotor",
    "badge": "Reto Nivel Examen · Robótica",
    "image": "assets/taller/esquema-colector-comun.svg",
    "context": "Un microcontrolador con salida analógica de alta impedancia debe excitar una etapa de potencia con resistencia de entrada de apenas RL = 330 Ω. Si se conectara directamente, la señal colapsaría. Diseñe el buffer seguidor de emisor (Colector Común) mostrado en el esquemático para transferir al menos el 70% de la tensión sin distorsión.",
    "circuitData": {
      "VCC": "12 V",
      "R1": "100 kΩ",
      "R2": "100 kΩ",
      "RE": "2.2 kΩ",
      "RL": "330 Ω",
      "Rs": "5.0 kΩ",
      "Q1": "NPN con β = 150, VBE = 0.7 V"
    },
    "targets": [
      { "name": "IEQ", "label": "Corriente de emisor IEQ (mA)", "expected": 2.25, "tol": 0.25, "unit": "mA" },
      { "name": "re", "label": "Resistencia dinámica re (Ω)", "expected": 11.6, "tol": 1.5, "unit": "Ω" },
      { "name": "Zo", "label": "Impedancia de salida Zo vista en la carga (Ω)", "expected": 41.5, "tol": 6.0, "unit": "Ω" },
      { "name": "Av", "label": "Ganancia de voltaje de la etapa Av (base a emisor)", "expected": 0.96, "tol": 0.03, "unit": "adimensional" },
      { "name": "Avs", "label": "Ganancia total del sistema Avs", "expected": 0.84, "tol": 0.05, "unit": "adimensional" }
    ],
    "hints": [
      "<b>Pista 1:</b> El Colector Común no tiene resistencia en el colector en AC (colector a tierra AC). La salida se toma directamente del emisor.",
      "<b>Pista 2:</b> La impedancia vista hacia atrás desde el emisor es \\(Z_{o,e} = r_e + \\frac{R_B \\parallel R_s}{\\beta+1}\\). Recuerda que la impedancia de salida final \\(Z_o\\) es el paralelo de \\(R_E\\) con \\(Z_{o,e}\\).",
      "<b>Pista 3:</b> La ganancia es positiva y ligeramente menor que +1."
    ],
    "fullSolution": `
      <h4>1. Análisis DC</h4>
      \\[V_{TH} = 12 \\cdot \\frac{100k}{100k+100k} = 6.0\\,\\mathrm{V}, \\qquad R_{TH} = 100k \\parallel 100k = 50\\,\\mathrm{k\\Omega}\\]
      \\[I_{EQ} = \\frac{V_{TH} - V_{BE}}{R_E + \\frac{R_{TH}}{\\beta+1}} = \\frac{6.0 - 0.7}{2200 + \\frac{50000}{151}} = \\frac{5.3\\,\\mathrm{V}}{2200 + 331.1} = \\frac{5.3}{2531.1} \\approx \\mathbf{2.094\\,\\mathrm{mA} \\approx 2.1\\,\\mathrm{mA}}\\]
      \\[V_E = I_{EQ} R_E = 2.094\\,\\mathrm{mA} \\times 2.2\\,\\mathrm{k\\Omega} \\approx 4.61\\,\\mathrm{V}\\]
      \\[V_{CEQ} = V_{CC} - V_E = 12 - 4.61 = \\mathbf{7.39\\,\\mathrm{V}} > 0.2\\,\\mathrm{V} \\quad (\\checkmark \\text{Zona Activa})\\]

      <h4>2. Parámetros de Pequeña Señal</h4>
      \\[r_e = \\frac{26\\,\\mathrm{mV}}{2.094\\,\\mathrm{mA}} \\approx \\mathbf{12.4\\,\\Omega}\\]

      <h4>3. Resistencia Efectiva de Carga e Impedancias</h4>
      \\[R_E' = R_E \\parallel R_L = 2200\\,\\Omega \\parallel 330\\,\\Omega = \\frac{726000}{2530} \\approx \\mathbf{286.95\\,\\Omega}\\]
      <p>Impedancia vista desde la base:</p>
      \\[Z_b = (\\beta+1)(r_e + R_E') = 151 \\times (12.4 + 286.95) = 151 \\times 299.35 \\approx \\mathbf{45.2\\,\\mathrm{k\\Omega}}\\]
      \\[Z_i = R_{TH} \\parallel Z_b = 50\\,\\mathrm{k\\Omega} \\parallel 45.2\\,\\mathrm{k\\Omega} \\approx \\mathbf{23.75\\,\\mathrm{k\\Omega}}\\]
      <p>Impedancia de salida mirando hacia el emisor con \\(R_s = 5.0\\,\\mathrm{k\\Omega}\\):</p>
      \\[R_{base}' = R_{TH} \\parallel R_s = 50\\,\\mathrm{k\\Omega} \\parallel 5\\,\\mathrm{k\\Omega} \\approx 4.545\\,\\mathrm{k\\Omega}\\]
      \\[Z_{o,e} = r_e + \\frac{R_{base}'}{\\beta+1} = 12.4 + \\frac{4545}{151} = 12.4 + 30.1 = \\mathbf{42.5\\,\\Omega}\\]
      \\[Z_o = R_E \\parallel Z_{o,e} = 2200 \\parallel 42.5 \\approx \\mathbf{41.7\\,\\Omega}\\]

      <h4>4. Ganancias de Tensión</h4>
      \\[A_v = \\frac{R_E'}{r_e + R_E'} = \\frac{286.95}{12.4 + 286.95} = \\frac{286.95}{299.35} \\approx \\mathbf{+0.959}\\]
      <p>Divisor con la impedancia interna de la fuente:</p>
      \\[\\frac{v_i}{v_s} = \\frac{Z_i}{R_s + Z_i} = \\frac{23.75}{5.0 + 23.75} = \\frac{23.75}{28.75} \\approx \\mathbf{0.826}\\]
      \\[A_{vs} = \\frac{v_o}{v_s} = 0.826 \\times (+0.959) \\approx \\mathbf{+0.792 \\approx +0.80}\\]
      <p><b>Conclusión:</b> El buffer transfiere el 80% del voltaje a una carga de solo 330 Ω. Sin el buffer, la transferencia directa sería de solo \\(330 / (5000+330) \\approx 6.2\\%\\).</p>
    `
  },
  {
    "id": "RETO-03",
    "title": "Diagnóstico y Corrección de Falla en Laboratorio",
    "badge": "Reto Nivel Examen · Troubleshooting",
    "image": "assets/taller/esquema-ce-bypass.svg",
    "context": "Un grupo de estudiantes montó el circuito de Emisor Común de la figura para su entrega final. Al conectar el generador con vs = 10 mVp, el osciloscopio muestra una salida distorsionada: el semiciclo superior de colector se aplana violentamente a 15 V, mientras que el semiciclo inferior desciende limpiamente. El multímetro mide en DC: VB = 1.1 V, VE = 0.4 V, VC = 13.8 V.",
    "circuitData": {
      "VCC": "15 V",
      "Síntoma 1": "Semiciclo superior recortado plano en 15 V (corte)",
      "Síntoma 2": "VC(DC) = 13.8 V (cercano a VCC)",
      "Valores medidos": "VB = 1.1 V, VE = 0.4 V"
    },
    "targets": [
      { "name": "diagnostico", "label": "Escribe el componente culpable o fallo (R1 desvalorizada / R2 desvalorizada / Transistor quemado)", "expected": 1, "isText": true, "guideWord": "R2" }
    ],
    "hints": [
      "<b>Pista 1:</b> El voltaje de reposo de colector medido es \\(V_C = 13.8\\,\\mathrm{V}\\). Para una fuente de 15 V, eso significa que por \\(R_C = 3.3\\,\\mathrm{k\\Omega}\\) apenas circula \\((15 - 13.8)/3.3k \\approx 0.36\\,\\mathrm{mA}\\).",
      "<b>Pista 2:</b> El transistor está operando peligrosamente cerca del CORTE (corriente de reposo demasiado baja).",
      "<b>Pista 3:</b> ¿Qué resistencia del divisor hace que \\(V_B\\) caiga de los 2.6 V calculados a solo 1.1 V? O bien \\(R_1\\) subió de valor, o \\(R_2\\) se colocó de un valor mucho menor (por ejemplo, 2.2 kΩ en vez de 10 kΩ)."
    ],
    "fullSolution": `
      <h4>Diagnóstico Técnico de Laboratorio</h4>
      <p><b>1. Análisis del síntoma en osciloscopio:</b></p>
      <p>El recorte plano ocurre en la cresta superior de la forma de onda de salida (a \\(15\\,\\mathrm{V} = V_{CC}\\)). Como el amplificador CE invierte la fase (180°), la cresta positiva de salida corresponde a la corriente mínima de colector (\\(i_C \\to 0\\)). Por lo tanto, el circuito está sufriendo <b>recorte por corte dinámico</b>.</p>
      
      <p><b>2. Análisis de las lecturas en DC:</b></p>
      <ul>
        <li>En el diseño nominal con \\(R_1 = 47\\,\\mathrm{k\\Omega}\\) y \\(R_2 = 10\\,\\mathrm{k\\Omega}\\), la tensión de base debía ser \\(V_B \\approx 2.6\\,\\mathrm{V}\\) y la de emisor \\(V_E \\approx 1.9\\,\\mathrm{V}\\).</li>
        <li>La lectura real es \\(V_B = 1.1\\,\\mathrm{V}\\) y \\(V_E = 0.4\\,\\mathrm{V}\\). La corriente de reposo real es apenas:
        \\[I_{CQ} \\approx \\frac{V_E}{R_E} = \\frac{0.4\\,\\mathrm{V}}{1.2\\,\\mathrm{k\\Omega}} \\approx 0.33\\,\\mathrm{mA}\\]</li>
        <li>Con \\(0.33\\,\\mathrm{mA}\\), la excursión máxima de corriente hacia el corte es de solo \\(0.33\\,\\mathrm{mA}\\). Una pequeña señal en la entrada que demande más de \\(0.33\\,\\mathrm{mA}\\) de variación apagará por completo el transistor.</li>
      </ul>

      <p><b>3. Localización de la causa raíz:</b></p>
      <p>Al inspeccionar la protoboard, se encuentra que por error en el código de colores se colocó como \\(R_2\\) una resistencia de <b>\\(3.3\\,\\mathrm{k\\Omega}\\)</b> (naranja-naranja-rojo) en lugar de <b>\\(10\\,\\mathrm{k\\Omega}\\)</b> (marrón-negro-naranja). Con \\(3.3\\,\\mathrm{k\\Omega}\\), el divisor entrega: \\(15 \\times \\frac{3.3}{47+3.3} \\approx 0.98\\,\\mathrm{V}\\), coincidente con la medición anómala.</p>

      <p><b>4. Corrección:</b></p>
      <p>Reemplazar \\(R_2\\) por el valor correcto de \\(10\\,\\mathrm{k\\Omega}\\). El punto de operación regresa a \\(I_{CQ} \\approx 1.5\\,\\mathrm{mA}\\), \\(V_C \\approx 10\\,\\mathrm{V}\\), y la señal alterna oscila sin recorte simétricamente.</p>
    `
  }
];
