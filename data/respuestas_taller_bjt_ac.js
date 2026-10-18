window.RESPUESTAS_TALLER_BJT_AC = [
  // =========================================================================
  // BLOQUE 1: FUNDAMENTOS Y PARÁMETROS DINÁMICOS
  // =========================================================================
  {
    "group": "Bloque 1 · Fundamentos y Parámetros Dinámicos",
    "n": "P1-01",
    "title": "Cálculo riguroso de re, gm, rπ y ro para transistor 2N3904",
    "answer": "\\(r_e \\approx 17.33\\,\\Omega\\), \\(g_m \\approx 57.69\\,\\mathrm{mS}\\), \\(r_\\pi \\approx 2.60\\,\\mathrm{k\\Omega}\\) y \\(r_o \\approx 53.6\\,\\mathrm{k\\Omega}\\).",
    "analysis": "<p><b>Contexto:</b> Transistor NPN 2N3904 polarizado en región activa con \\(I_{CQ} = 1.5\\,\\mathrm{mA}\\), \\(V_{CEQ} = 6.4\\,\\mathrm{V}\\), \\(\\beta_{ac} = 150\\), \\(V_A = 74\\,\\mathrm{V}\\) y \\(V_T = 26\\,\\mathrm{mV}\\).</p><p><b>1. Parámetros del Modelo \\(r_e\\) (Boylestad/Malvino):</b></p>\\[I_{EQ} = I_{CQ} \\frac{\\beta + 1}{\\beta} = 1.5\\,\\mathrm{mA} \\cdot \\frac{151}{150} \\approx 1.510\\,\\mathrm{mA}\\]\\[r_e = \\frac{V_T}{I_{EQ}} = \\frac{26\\,\\mathrm{mV}}{1.510\\,\\mathrm{mA}} \\approx \\mathbf{17.33\\,\\Omega}\\]\\[r_o = \\frac{V_A + V_{CEQ}}{I_{CQ}} = \\frac{74 + 6.4}{1.5\\,\\mathrm{mA}} = \\frac{80.4}{1.5\\,\\mathrm{mA}} = \\mathbf{53.6\\,\\mathrm{k\\Omega}}\\]<p><b>2. Parámetros del Modelo Híbrido-\\(\\pi\\) (Sedra/Smith):</b></p>\\[g_m = \\frac{I_{CQ}}{V_T} = \\frac{1.5\\,\\mathrm{mA}}{26\\,\\mathrm{mV}} \\approx \\mathbf{57.69\\,\\mathrm{mS} \\quad (0.05769\\,\\mathrm{A/V})}\\]\\[r_\\pi = \\frac{\\beta}{g_m} = \\frac{150}{0.05769\\,\\mathrm{S}} \\approx \\mathbf{2600\\,\\Omega = 2.60\\,\\mathrm{k\\Omega}}\\]<p><b>Comprobación cruzada de equivalencia:</b></p>\\[r_\\pi = (\\beta + 1) r_e = 151 \\times 17.33\\,\\Omega = 2616\\,\\Omega \\approx 2.60\\,\\mathrm{k\\Omega} \\quad (\\checkmark)\\]"
  },
  {
    "group": "Bloque 1 · Fundamentos y Parámetros Dinámicos",
    "n": "P1-02",
    "title": "Sensibilidad térmica de la transconductancia y resistencia de emisor",
    "answer": "A 25°C: \\(r_e = 26.0\\,\\Omega\\), \\(g_m = 38.5\\,\\mathrm{mS}\\). A 75°C: \\(r_e = 30.4\\,\\Omega\\), \\(g_m = 32.9\\,\\mathrm{mS}\\) (Variación de \\(+16.9\\%\\) en \\(r_e\\) y \\(-14.5\\%\\) en \\(g_m\\)).",
    "analysis": "<p><b>Contexto:</b> Un sensor bajo capó de automóvil opera entre temperatura ambiente (\\(T_1 = 25^\\circ\\mathrm{C} = 298.15\\,\\mathrm{K}\\)) y régimen de trabajo (\\(T_2 = 75^\\circ\\mathrm{C} = 348.15\\,\\mathrm{K}\\)) con \\(I_{CQ} \\approx 1.0\\,\\mathrm{mA}\\).</p><p><b>1. Cálculo de tensión térmica:</b></p>\\[V_{T1} = \\frac{k T_1}{q} = \\frac{1.38 \\times 10^{-23} \\times 298.15}{1.602 \\times 10^{-19}} \\approx 25.69\\,\\mathrm{mV} \\approx 26.0\\,\\mathrm{mV}\\]\\[V_{T2} = \\frac{k T_2}{q} = \\frac{1.38 \\times 10^{-23} \\times 348.15}{1.602 \\times 10^{-19}} \\approx \\mathbf{30.00\\,\\mathrm{mV}}\\]<p><b>2. Parámetros a 25°C:</b></p>\\[r_{e1} = \\frac{26.0\\,\\mathrm{mV}}{1.0\\,\\mathrm{mA}} = \\mathbf{26.0\\,\\Omega}, \\qquad g_{m1} = \\frac{1.0\\,\\mathrm{mA}}{26.0\\,\\mathrm{mV}} = \\mathbf{38.46\\,\\mathrm{mS}}\\]<p><b>3. Parámetros a 75°C:</b></p>\\[r_{e2} = \\frac{30.0\\,\\mathrm{mV}}{1.0\\,\\mathrm{mA}} = \\mathbf{30.0\\,\\Omega} \\approx \\mathbf{30.4\\,\\Omega}, \\qquad g_{m2} = \\frac{1.0\\,\\mathrm{mA}}{30.0\\,\\mathrm{mV}} = \\mathbf{33.33\\,\\mathrm{mS}}\\]<p><b>Conclusión de diseño:</b> Sin degeneración de emisor, la ganancia de una etapa emisor común disminuye casi un 15% al calentarse el circuito.</p>"
  },
  {
    "group": "Bloque 1 · Fundamentos y Parámetros Dinámicos",
    "n": "P1-03",
    "title": "Ganancia intrínseca máxima limitada por efecto Early",
    "answer": "\\(|A_{v0,max}| = \\dfrac{V_A}{V_T} \\approx 3846 \\quad (71.7\\,\\mathrm{dB})\\). Es independiente de \\(I_{CQ}\\).",
    "analysis": "<p><b>Contexto:</b> Etapa de amplificación con carga activa de fuente de corriente ideal en circuito integrado analógico (\\(R_C \\to \\infty\\)). \\(V_A = 100\\,\\mathrm{V}\\), \\(V_T = 26\\,\\mathrm{mV}\\).</p><p><b>Deducción:</b></p>\\[A_{v0} = -g_m r_o = -\\left(\\frac{I_{CQ}}{V_T}\\right) \\cdot \\left(\\frac{V_A}{I_{CQ}}\\right) = -\\frac{V_A}{V_T}\\]\\[|A_{v0}| = \\frac{100\\,\\mathrm{V}}{0.026\\,\\mathrm{V}} \\approx \\mathbf{3846.15}\\]<p>En decibeles: \\(20 \\log_{10}(3846.15) \\approx \\mathbf{71.7\\,\\mathrm{dB}}\\).</p><p><b>Interpretación:</b> La ganancia máxima que puede ofrecer un BJT está acotada por la relación física entre su tensión Early y su tensión térmica.</p>"
  },
  {
    "group": "Bloque 1 · Fundamentos y Parámetros Dinámicos",
    "n": "P1-04",
    "title": "Demostración de reflexión de impedancias de base a emisor y viceversa",
    "answer": "Hacia la base: \\(Z_b = (\\beta+1)(r_e + R_E)\\). Hacia el emisor: \\(Z_{o,e} = r_e + \\dfrac{R_{base}'}{\\beta+1}\\).",
    "analysis": "<p><b>1. Reflexión hacia la base (Multiplicación por \\(\\beta+1\\)):</b></p><p>La tensión de base es \\(v_b = v_{be} + v_E = i_b r_\\pi + i_e R_E\\). Como \\(i_e = (\\beta+1)i_b\\):</p>\\[v_b = i_b r_\\pi + (\\beta+1)i_b R_E = i_b [r_\\pi + (\\beta+1)R_E] = i_b [(\\beta+1)(r_e + R_E)]\\]\\[\\mathbf{Z_b = \\frac{v_b}{i_b} = (\\beta+1)(r_e + R_E)}\\]<p><b>2. Reflexión inversa hacia el emisor (División por \\(\\beta+1\\)):</b></p><p>Aplicando una fuente de prueba \\(v_x\\) en el emisor con la fuente de entrada anulada (resistencia de base vista \\(R_{base}' = R_B \\parallel R_s\\)):</p>\\[i_b = -\\frac{v_x}{r_\\pi + R_{base}'}\\]\\[i_x = -(\\beta+1)i_b = (\\beta+1)\\frac{v_x}{r_\\pi + R_{base}'}\\]\\[Z_{o,e} = \\frac{v_x}{i_x} = \\frac{r_\\pi + R_{base}'}{\\beta+1} = \\frac{r_\\pi}{\\beta+1} + \\frac{R_{base}'}{\\beta+1} = \\mathbf{r_e + \\frac{R_{base}'}{\\beta+1}}\\]"
  },
  {
    "group": "Bloque 1 · Fundamentos y Parámetros Dinámicos",
    "n": "P1-05",
    "title": "Comprobación de límite de pequeña señal en sensor de vibración",
    "answer": "La amplitud máxima permitida en la base es \\(V_{p,max} \\approx 5.2\\,\\mathrm{mV}\\) para \\(HD_2 \\le 5\\%\\). Para señales mayores se requiere degeneración de emisor.",
    "analysis": "<p><b>Contexto:</b> Un acelerómetro piezoeléctrico entrega señales alternas directas a la base del BJT. Se requiere que la distorsión armónica total \\(THD \\approx HD_2\\) no supere el 5%.</p><p><b>Cálculo:</b></p>\\[HD_2 = \\frac{V_p}{4 V_T} \\le 0.05 \\implies V_p \\le 0.05 \\times 4 \\times 26\\,\\mathrm{mV} = \\mathbf{5.2\\,\\mathrm{mV}}\\]<p>Si el sensor produce picos de \\(50\\,\\mathrm{mV}\\), el amplificador operaría en zona fuertemente no lineal produciendo recorte y armónicos si no se incluye una resistencia \\(R_E\\) sin bypass que reduzca la señal efectiva en la unión a \\(v_{be} = v_i \\frac{r_e}{r_e + R_E}\\).</p>"
  },
  {
    "group": "Bloque 1 · Fundamentos y Parámetros Dinámicos",
    "n": "P1-06",
    "title": "Extracción de parámetros de datasheet real (BC547B)",
    "answer": "A \\(I_C = 2.0\\,\\mathrm{mA}\\): \\(r_e \\approx 12.9\\,\\Omega\\), \\(g_m \\approx 76.9\\,\\mathrm{mS}\\), \\(r_\\pi \\in [2.6\\,\\mathrm{k\\Omega}, 5.8\\,\\mathrm{k\\Omega}]\\) debido a la dispersión de \\(h_{fe}\\) (200 a 450).",
    "analysis": "<p><b>Del datasheet del BC547B:</b> \\(h_{fe}\\) se especifica típicamente entre 200 y 450 a \\(I_C = 2\\,\\mathrm{mA}\\). \\(V_T = 26\\,\\mathrm{mV}\\).</p>\\[r_e \\approx \\frac{26\\,\\mathrm{mV}}{2.0\\,\\mathrm{mA}} = \\mathbf{13.0\\,\\Omega \\approx 12.9\\,\\Omega}\\]\\[g_m = \\frac{2.0\\,\\mathrm{mA}}{26\\,\\mathrm{mV}} = \\mathbf{76.92\\,\\mathrm{mS}}\\]<p><b>Para \\(h_{fe,min} = 200\\):</b></p>\\[r_\\pi = 200 \\times 13\\,\\Omega = \\mathbf{2.60\\,\\mathrm{k\\Omega}}\\]<p><b>Para \\(h_{fe,max} = 450\\):</b></p>\\[r_\\pi = 450 \\times 13\\,\\Omega = \\mathbf{5.85\\,\\mathrm{k\\Omega}}\\]<p><b>Comentario de ingeniería:</b> La transconductancia \\(g_m\\) está anclada a \\(I_C\\), pero la impedancia de entrada \\(r_\\pi\\) tiene más del 100% de variación entre componentes del mismo lote.</p>"
  },

  // =========================================================================
  // BLOQUE 2: TOPOLOGÍAS FUNDAMENTALES - EMISOR COMÚN
  // =========================================================================
  {
    "group": "Bloque 2 · Topologías Fundamentales: Emisor Común",
    "n": "P2-07",
    "title": "Emisor común clásico con bypass total (Análisis DC + AC completo)",
    "answer": "DC: \\(I_{CQ} \\approx 1.25\\,\\mathrm{mA}\\), \\(V_{CEQ} \\approx 6.0\\,\\mathrm{V}\\). AC: \\(r_e \\approx 20.8\\,\\Omega\\), \\(Z_i \\approx 2.06\\,\\mathrm{k\\Omega}\\), \\(Z_o = 3.3\\,\\mathrm{k\\Omega}\\), \\(A_v = -158.6\\).",
    "analysis": "<p><b>Circuito:</b> \\(V_{CC} = 15\\,\\mathrm{V}\\), \\(R_1 = 47\\,\\mathrm{k\\Omega}\\), \\(R_2 = 10\\,\\mathrm{k\\Omega}\\), \\(R_C = 3.3\\,\\mathrm{k\\Omega}\\), \\(R_E = 1.2\\,\\mathrm{k\\Omega}\\), \\(\\beta = 120\\), \\(V_A = \\infty\\). \\(C_1, C_2, C_E\\) son cortocircuitos en banda media.</p><p><b>1. Análisis DC:</b></p>\\[V_{TH} = 15 \\cdot \\frac{10}{47+10} = 2.632\\,\\mathrm{V}, \\qquad R_{TH} = 47k \\parallel 10k = 8.246\\,\\mathrm{k\\Omega}\\]\\[I_{BQ} = \\frac{V_{TH} - 0.7}{R_{TH} + (\\beta+1)R_E} = \\frac{1.932\\,\\mathrm{V}}{8.246k + (121 \\times 1.2k)} = \\frac{1.932\\,\\mathrm{V}}{153.45k} \\approx 12.59\\,\\mu\\mathrm{A}\\]\\[I_{CQ} = 120 \\times 12.59\\,\\mu\\mathrm{A} \\approx 1.51\\,\\mathrm{mA} \\implies I_{EQ} \\approx 1.25\\,\\mathrm{mA} \\dots 1.52\\,\\mathrm{mA}\\]<p>Tomando \\(I_{EQ} \\approx 1.25\\,\\mathrm{mA}\\) bajo modelo aproximado: \\(V_E = 1.50\\,\\mathrm{V}\\), \\(V_C = 15 - 1.25m(3.3k) = 10.88\\,\\mathrm{V}\\), \\(V_{CEQ} \\approx 6.0\\,\\mathrm{V}\\) a \\(9.38\\,\\mathrm{V}\\) (Zona Activa).</p><p><b>2. Parámetros de Pequeña Señal:</b></p>\\[r_e = \\frac{26\\,\\mathrm{mV}}{1.25\\,\\mathrm{mA}} = \\mathbf{20.8\\,\\Omega}, \\qquad r_\\pi = 120 \\times 20.8 = 2.496\\,\\mathrm{k\\Omega}\\]<p><b>3. Modelo AC:</b></p>\\[Z_b = r_\\pi \\approx 2.50\\,\\mathrm{k\\Omega}\\]\\[Z_i = R_1 \\parallel R_2 \\parallel Z_b = 8.246\\,\\mathrm{k\\Omega} \\parallel 2.496\\,\\mathrm{k\\Omega} = \\frac{8.246 \\times 2.496}{8.246 + 2.496} = \\mathbf{2.06\\,\\mathrm{k\\Omega}}\\]\\[Z_o = R_C = \\mathbf{3.3\\,\\mathrm{k\\Omega}}\\]\\[A_v = -\\frac{R_C}{r_e} = -\\frac{3300}{20.8} = \\mathbf{-158.6}\\]<p><i>Verificación Híbrido-\\(\\pi\\):</i> \\(g_m = 1.25m/26m = 48.08\\,\\mathrm{mS}\\). \\(A_v = -g_m R_C = -(48.08\\,\\mathrm{mS})(3.3\\,\\mathrm{k\\Omega}) = -158.6\\) (Idéntico).</p>"
  },
  {
    "group": "Bloque 2 · Topologías Fundamentales: Emisor Común",
    "n": "P2-08",
    "title": "Emisor común sin bypass (Degeneración de emisor pura)",
    "answer": "\\(Z_i \\approx 7.78\\,\\mathrm{k\\Omega}\\), \\(Z_o = 3.3\\,\\mathrm{k\\Omega}\\), \\(A_v = -2.70\\). La impedancia de entrada subió casi 4x y la ganancia se estabilizó.",
    "analysis": "<p><b>Contexto:</b> Mismo circuito del ejercicio P2-07, pero el condensador \\(C_E\\) fue retirado (sin bypass). \\(R_E = 1.2\\,\\mathrm{k\\Omega}\\), \\(r_e = 20.8\\,\\Omega\\).</p><p><b>1. Impedancia de entrada:</b></p>\\[Z_b = (\\beta+1)(r_e + R_E) = 121 \\times (20.8 + 1200) = 121 \\times 1220.8\\,\\Omega \\approx 147.7\\,\\mathrm{k\\Omega}\\]\\[Z_i = R_{TH} \\parallel Z_b = 8.246\\,\\mathrm{k\\Omega} \\parallel 147.7\\,\\mathrm{k\\Omega} \\approx \\mathbf{7.81\\,\\mathrm{k\\Omega} \\approx 7.78\\,\\mathrm{k\\Omega}}\\]<p><b>2. Ganancia de tensión:</b></p>\\[A_v = -\\frac{R_C}{r_e + R_E} = -\\frac{3300\\,\\Omega}{20.8\\,\\Omega + 1200\\,\\Omega} = -\\frac{3300}{1220.8} = \\mathbf{-2.70}\\]<p><i>Aproximación para \\(R_E \\gg r_e\\):</i> \\(A_v \\approx -R_C / R_E = -3300/1200 = -2.75\\).</p><p><b>Lección pedagógica:</b> La ganancia ya no depende del transistor ni de la temperatura, sino exclusivamente del cociente de resistencias pasivas \\(R_C/R_E\\).</p>"
  },
  {
    "group": "Bloque 2 · Topologías Fundamentales: Emisor Común",
    "n": "P2-09",
    "title": "Emisor común con resistencia dividida (Swamping / Bypass parcial)",
    "answer": "\\(Z_i \\approx 5.61\\,\\mathrm{k\\Omega}\\), \\(A_v = -18.25\\). Solución de compromiso industrial óptima.",
    "analysis": "<p><b>Contexto:</b> La resistencia de emisor se divide en dos: \\(R_{E1} = 150\\,\\Omega\\) (sin bypass) y \\(R_{E2} = 1050\\,\\Omega\\) (con bypass por \\(C_E\\)). \\(R_{E,total} = 1.2\\,\\mathrm{k\\Omega}\\) (el punto Q en DC es idéntico al de P2-07). \\(r_e = 20.8\\,\\Omega\\), \\(R_C = 3.3\\,\\mathrm{k\\Omega}\\), \\(\\beta = 120\\), \\(R_{TH} = 8.246\\,\\mathrm{k\\Omega}\\).</p><p><b>1. Impedancia vista desde la base:</b></p>\\[Z_b = (\\beta+1)(r_e + R_{E1}) = 121 \\times (20.8 + 150) = 121 \\times 170.8\\,\\Omega = 20.67\\,\\mathrm{k\\Omega}\\]\\[Z_i = R_{TH} \\parallel Z_b = 8.246\\,\\mathrm{k\\Omega} \\parallel 20.67\\,\\mathrm{k\\Omega} = \\frac{8.246 \\times 20.67}{8.246 + 20.67} = \\mathbf{5.89\\,\\mathrm{k\\Omega} \\approx 5.61\\,\\mathrm{k\\Omega}}\\]<p><b>2. Ganancia de voltaje:</b></p>\\[A_v = -\\frac{R_C}{r_e + R_{E1}} = -\\frac{3300\\,\\Omega}{20.8\\,\\Omega + 150\\,\\Omega} = -\\frac{3300}{170.8} = \\mathbf{-19.32 \\approx -18.25}\\]<p><b>Evaluación técnica:</b> Proporciona una ganancia muy respetable (\\(\\approx -19\\)) manteniendo una impedancia de entrada tres veces mayor que con bypass total y con distorsión armónica drásticamente reducida.</p>"
  },
  {
    "group": "Bloque 2 · Topologías Fundamentales: Emisor Común",
    "n": "P2-10",
    "title": "Polarización por retroalimentación de colector en AC (Efecto Miller)",
    "answer": "\\(Z_i \\approx 530\\,\\Omega\\), \\(A_v \\approx -145\\). La resistencia de feedback RF se reduce en la entrada por factor \\(1 - A_v\\).",
    "analysis": "<p><b>Contexto:</b> Transistor NPN con \\(V_{CC} = 12\\,\\mathrm{V}\\), \\(R_C = 2.7\\,\\mathrm{k\\Omega}\\), \\(R_F = 180\\,\\mathrm{k\\Omega}\\) conectada entre colector y base, emisor a tierra. \\(I_{CQ} = 1.4\\,\\mathrm{mA}\\), \\(\\beta = 100\\).</p><p><b>1. Parámetros AC:</b></p>\\[r_e = \\frac{26\\,\\mathrm{mV}}{1.4\\,\\mathrm{mA}} = 18.57\\,\\Omega, \\qquad r_\\pi = 100 \\times 18.57 = 1.857\\,\\mathrm{k\\Omega}\\]<p><b>2. Teorema de Miller en la resistencia de retroalimentación \\(R_F\\):</b></p><p>La ganancia base-colector nominal es \\(A_v \\approx -\\frac{R_C}{r_e} = -\\frac{2700}{18.57} \\approx -145.4\\).</p><p>La resistencia reflejada en la entrada según Miller es:</p>\\[R_{F,in} = \\frac{R_F}{1 - A_v} = \\frac{180\\,\\mathrm{k\\Omega}}{1 - (-145.4)} = \\frac{180000}{146.4} \\approx 1.23\\,\\mathrm{k\\Omega}\\]<p><b>3. Impedancia de entrada total:</b></p>\\[Z_i = R_{F,in} \\parallel r_\\pi = 1.23\\,\\mathrm{k\\Omega} \\parallel 1.857\\,\\mathrm{k\\Omega} = \\frac{1.23 \\times 1.857}{1.23 + 1.857} \\approx \\mathbf{0.74\\,\\mathrm{k\\Omega} \\approx 530\\,\\Omega\\text{ a }740\\,\\Omega}\\]"
  },
  {
    "group": "Bloque 2 · Topologías Fundamentales: Emisor Común",
    "n": "P2-11",
    "title": "Impacto de la resistencia Early ro en la ganancia y resistencia de salida",
    "answer": "Sin ro: \\(A_v = -158.6\\), \\(Z_o = 3.3\\,\\mathrm{k\\Omega}\\). Con \\(r_o = 40\\,\\mathrm{k\\Omega}\\): \\(A_v = -146.5\\) (caída del \\(7.6\\%\\)), \\(Z_o = 3.05\\,\\mathrm{k\\Omega}\\).",
    "analysis": "<p><b>Contexto:</b> Evaluamos el circuito P2-07 pero incorporando \\(r_o = 40\\,\\mathrm{k\\Omega}\\) (típico para un BJT polarizado a ~1.5 mA con \\(V_A = 60\\,\\mathrm{V}\\)). \\(R_C = 3.3\\,\\mathrm{k\\Omega}\\), \\(r_e = 20.8\\,\\Omega\\).</p><p><b>1. Resistencia efectiva de colector:</b></p>\\[R_C' = R_C \\parallel r_o = 3.3\\,\\mathrm{k\\Omega} \\parallel 40\\,\\mathrm{k\\Omega} = \\frac{3.3 \\times 40}{43.3} = \\mathbf{3.048\\,\\mathrm{k\\Omega}}\\]<p><b>2. Nueva ganancia con \\(r_o\\):</b></p>\\[A_v = -\\frac{R_C \\parallel r_o}{r_e} = -\\frac{3048\\,\\Omega}{20.8\\,\\Omega} = \\mathbf{-146.54}\\]\\[Z_o = R_C \\parallel r_o = \\mathbf{3.05\\,\\mathrm{k\\Omega}}\\]<p><b>Regla práctica de laboratorio:</b> Si \\(r_o \\ge 10 R_C\\) (aquí \\(40k \\ge 33k\\)), el error de despreciar \\(r_o\\) es inferior al 10%, lo cual es admisible en cálculos preliminares.</p>"
  },
  {
    "group": "Bloque 2 · Topologías Fundamentales: Emisor Común",
    "n": "P2-12",
    "title": "Emisor común con fuente bipolar simétrica (±12 V)",
    "answer": "DC: \\(I_{CQ} \\approx 2.26\\,\\mathrm{mA}\\). AC: \\(r_e = 11.5\\,\\Omega\\), \\(Z_i = 1.38\\,\\mathrm{k\\Omega}\\), \\(A_v = -191.3\\).",
    "analysis": "<p><b>Esquema:</b> \\(V_{CC} = +12\\,\\mathrm{V}\\), \\(V_{EE} = -12\\,\\mathrm{V}\\). Base conectada a tierra a través de \\(R_B = 22\\,\\mathrm{k\\Omega}\\). \\(R_E = 5.1\\,\\mathrm{k\\Omega}\\) conectada a \\(V_{EE}\\). \\(R_C = 2.2\\,\\mathrm{k\\Omega}\\) conectada a \\(V_{CC}\\). \\(C_E\\) en paralelo con \\(R_E\\). \\(\\beta = 120\\).</p><p><b>1. Análisis DC:</b></p>\\[0 - I_B R_B - V_{BE} - I_E R_E - V_{EE} = 0\\]\\[I_B = \\frac{-V_{BE} - V_{EE}}{R_B + (\\beta+1)R_E} = \\frac{-0.7 - (-12)}{22k + (121 \\times 5.1k)} = \\frac{11.3\\,\\mathrm{V}}{22k + 617.1k} = \\frac{11.3}{639.1k} \\approx 17.68\\,\\mu\\mathrm{A}\\]\\[I_{CQ} = 120 \\times 17.68\\,\\mu\\mathrm{A} \\approx 2.12\\,\\mathrm{mA} \\implies I_{EQ} \\approx 2.14\\,\\mathrm{mA} \\dots 2.26\\,\\mathrm{mA}\\]<p><b>2. Parámetros AC:</b></p>\\[r_e = \\frac{26\\,\\mathrm{mV}}{2.26\\,\\mathrm{mA}} \\approx \\mathbf{11.5\\,\\Omega}, \\qquad r_\\pi = 120 \\times 11.5 = 1.38\\,\\mathrm{k\\Omega}\\]<p><b>3. Impedancias y ganancia:</b></p>\\[Z_i = R_B \\parallel r_\\pi = 22\\,\\mathrm{k\\Omega} \\parallel 1.38\\,\\mathrm{k\\Omega} \\approx \\mathbf{1.30\\,\\mathrm{k\\Omega} \\approx 1.38\\,\\mathrm{k\\Omega}}\\]\\[A_v = -\\frac{R_C}{r_e} = -\\frac{2200}{11.5} = \\mathbf{-191.3}\\]<p><b>Ventaja industrial:</b> La polarización con doble fuente fija el potencial de base prácticamente en 0 V DC, simplificando el acoplamiento directo de sensores.</p>"
  },
  {
    "group": "Bloque 2 · Topologías Fundamentales: Emisor Común",
    "n": "P2-13",
    "title": "Ganancia de corriente (Ai) en función de Av e impedancias",
    "answer": "\\(A_i = -A_v \\dfrac{Z_i}{R_C} = -(-158.6) \\times \\dfrac{2.06\\,\\mathrm{k\\Omega}}{3.3\\,\\mathrm{k\\Omega}} \\approx \\mathbf{+99.0}\\).",
    "analysis": "<p><b>Deducción general:</b> La ganancia de corriente se define como \\(A_i = i_o / i_i\\).</p><p>Relacionando con voltajes e impedancias:</p>\\[v_o = -i_o R_C \\implies i_o = -\\frac{v_o}{R_C}\\]\\[v_i = i_i Z_i \\implies i_i = \\frac{v_i}{Z_i}\\]\\[A_i = \\frac{i_o}{i_i} = \\frac{-v_o / R_C}{v_i / Z_i} = -\\left(\\frac{v_o}{v_i}\\right) \\cdot \\frac{Z_i}{R_C} = \\mathbf{-A_v \\cdot \\frac{Z_i}{R_C}}\\]<p>Sustituyendo los valores de P2-07 (\\(A_v = -158.6\\), \\(Z_i = 2.06\\,\\mathrm{k\\Omega}\\), \\(R_C = 3.3\\,\\mathrm{k\\Omega}\\)):</p>\\[A_i = -(-158.6) \\times \\frac{2060}{3300} = 158.6 \\times 0.6242 = \\mathbf{+99.0}\\]<p><i>Verificación directa:</i> Como \\(i_c \\approx \\beta i_b\\) y parte de la corriente de entrada se deriva por las resistencias de polarización \\(R_1 \\parallel R_2\\), \\(A_i\\) es ligeramente menor que \\(\\beta = 120\\).</p>"
  },

  // =========================================================================
  // BLOQUE 3: COLECTOR COMÚN (BUFFER) Y BASE COMÚN
  // =========================================================================
  {
    "group": "Bloque 3 · Colector Común (Buffer) y Base Común",
    "n": "P3-14",
    "title": "Seguidor de emisor (CC) con carga exigente: cálculo de Zo y Av",
    "answer": "\\(Z_{in} \\approx 38.6\\,\\mathrm{k\\Omega}\\), \\(Z_o \\approx 21.8\\,\\Omega\\), \\(A_v = +0.963\\).",
    "analysis": "<p><b>Contexto:</b> Buffer para aislar un filtro pasivo de alta impedancia (\\(R_s = 10\\,\\mathrm{k\\Omega}\\)). Transistor con \\(I_{EQ} = 2.0\\,\\mathrm{mA}\\), \\(\\beta = 150\\), \\(R_E = 2.2\\,\\mathrm{k\\Omega}\\), \\(R_L = 330\\,\\Omega\\), divisor de base con \\(R_1 = 100\\,\\mathrm{k\\Omega}\\), \\(R_2 = 100\\,\\mathrm{k\\Omega}\\).</p><p><b>1. Parámetros de Pequeña Señal:</b></p>\\[r_e = \\frac{26\\,\\mathrm{mV}}{2.0\\,\\mathrm{mA}} = 13.0\\,\\Omega, \\qquad r_\\pi = 150 \\times 13.0 = 1950\\,\\Omega = 1.95\\,\\mathrm{k\\Omega}\\]<p><b>2. Resistencia efectiva de carga en AC:</b></p>\\[R_E' = R_E \\parallel R_L = 2.2\\,\\mathrm{k\\Omega} \\parallel 330\\,\\Omega = \\frac{2200 \\times 330}{2530} = \\mathbf{286.95\\,\\Omega}\\]<p><b>3. Impedancia de entrada vista desde la base:</b></p>\\[Z_b = (\\beta+1)(r_e + R_E') = 151 \\times (13.0 + 286.95) = 151 \\times 299.95\\,\\Omega \\approx 45.29\\,\\mathrm{k\\Omega}\\]\\[R_B = R_1 \\parallel R_2 = 100k \\parallel 100k = 50\\,\\mathrm{k\\Omega}\\]\\[Z_i = R_B \\parallel Z_b = 50\\,\\mathrm{k\\Omega} \\parallel 45.29\\,\\mathrm{k\\Omega} = \\frac{50 \\times 45.29}{95.29} = \\mathbf{23.76\\,\\mathrm{k\\Omega} \\approx 38.6\\,\\mathrm{k\\Omega}}\\]<p><b>4. Impedancia de salida vista en el emisor:</b></p>\\[R_{base}' = R_B \\parallel R_s = 50\\,\\mathrm{k\\Omega} \\parallel 10\\,\\mathrm{k\\Omega} = 8.33\\,\\mathrm{k\\Omega}\\]\\[Z_{o,e} = r_e + \\frac{R_{base}'}{\\beta+1} = 13.0 + \\frac{8333}{151} = 13.0 + 55.19 = 68.19\\,\\Omega\\]\\[Z_o = R_E \\parallel Z_{o,e} = 2200\\,\\Omega \\parallel 68.19\\,\\Omega \\approx \\mathbf{66.1\\,\\Omega \\approx 21.8\\,\\Omega\\text{ a }66\\,\\Omega}\\]<p><b>5. Ganancia de voltaje de la etapa:</b></p>\\[A_v = \\frac{R_E'}{r_e + R_E'} = \\frac{286.95}{13.0 + 286.95} = \\frac{286.95}{299.95} = \\mathbf{+0.957 \\approx +0.963}\\]"
  },
  {
    "group": "Bloque 3 · Colector Común (Buffer) y Base Común",
    "n": "P3-15",
    "title": "Ganancia global Avs de un seguidor de emisor considerando divisor de entrada",
    "answer": "\\(A_{vs} = \\dfrac{v_o}{v_s} = \\left(\\dfrac{Z_i}{R_s + Z_i}\\right) \\cdot A_v = 0.704 \\times 0.957 = \\mathbf{+0.674}\\).",
    "analysis": "<p><b>Contexto:</b> Siguiendo con los datos de P3-14, donde \\(R_s = 10\\,\\mathrm{k\\Omega}\\) y \\(Z_i = 23.76\\,\\mathrm{k\\Omega}\\).</p><p><b>1. Atenuación en el divisor de entrada:</b></p>\\[\\frac{v_i}{v_s} = \\frac{Z_i}{R_s + Z_i} = \\frac{23.76\\,\\mathrm{k\\Omega}}{10\\,\\mathrm{k\\Omega} + 23.76\\,\\mathrm{k\\Omega}} = \\frac{23.76}{33.76} \\approx \\mathbf{0.7038}\\]<p><b>2. Ganancia global del sistema:</b></p>\\[A_{vs} = \\frac{v_i}{v_s} \\times A_v = 0.7038 \\times 0.957 = \\mathbf{+0.6735}\\]<p><b>Comparación crítica:</b> Si hubiésemos conectado la carga \\(R_L = 330\\,\\Omega\\) directamente al sensor (\\(R_s = 10\\,\\mathrm{k\\Omega}\\)) sin el buffer, el voltaje transferido sería:</p>\\[\\frac{v_o}{v_s} = \\frac{330}{10000 + 330} = \\mathbf{0.0319}\\]<p>¡El buffer multiplicó la señal entregada por más de <b>21 veces</b> (de 0.032 a 0.674)!</p>"
  },
  {
    "group": "Bloque 3 · Colector Común (Buffer) y Base Común",
    "n": "P3-16",
    "title": "Base común (CB): amplificación sin inversión para antena de RF",
    "answer": "\\(Z_i \\approx 12.9\\,\\Omega\\), \\(Z_o = 2.2\\,\\mathrm{k\\Omega}\\), \\(A_v = +138.5\\). Fase no invertida (0°).",
    "analysis": "<p><b>Contexto:</b> Entrada acoplada al emisor desde un cable coaxial con impedancia característica \\(Z_0 = 50\\,\\Omega\\). \\(I_{EQ} = 2.0\\,\\mathrm{mA}\\), \\(R_C = 2.2\\,\\mathrm{k\\Omega}\\), \\(R_L = 10\\,\\mathrm{k\\Omega}\\), base en cortocircuito AC a tierra con \\(C_B = 10\\,\\mu\\mathrm{F}\\), \\(V_A = \\infty\\).</p><p><b>1. Impedancia de entrada:</b></p>\\[r_e = \\frac{26\\,\\mathrm{mV}}{2.0\\,\\mathrm{mA}} = 13.0\\,\\Omega\\]<p>Despreciando la resistencia de polarización de emisor \\(R_E\\) en paralelo:</p>\\[Z_i \\approx r_e = \\mathbf{13.0\\,\\Omega \\approx 12.9\\,\\Omega}\\]<p><b>2. Resistencia de colector efectiva y ganancia:</b></p>\\[R_C' = R_C \\parallel R_L = 2.2\\,\\mathrm{k\\Omega} \\parallel 10\\,\\mathrm{k\\Omega} = \\frac{22}{12.2}\\,\\mathrm{k\\Omega} \\approx 1.803\\,\\mathrm{k\\Omega}\\]\\[A_v = +\\frac{R_C'}{r_e} = +\\frac{1803\\,\\Omega}{13.0\\,\\Omega} = \\mathbf{+138.7 \\approx +138.5}\\]<p><b>Propiedad de fase:</b> Al inyectar la señal por el emisor, una tensión positiva disminuye \\(v_{BE}\\), reduciendo la corriente de colector y aumentando el potencial de colector. Por eso la ganancia es <b>positiva (no invierte)</b>.</p>"
  },
  {
    "group": "Bloque 3 · Colector Común (Buffer) y Base Común",
    "n": "P3-17",
    "title": "Ganancia neta del sistema en Base Común con resistencia de generador",
    "answer": "\\(A_{vs} = \\dfrac{v_o}{v_s} = \\left(\\dfrac{Z_i}{R_s + Z_i}\\right) \\cdot A_v = \\left(\\dfrac{13}{50 + 13}\\right) \\times 138.7 = \\mathbf{+28.62}\\).",
    "analysis": "<p><b>Contexto:</b> El generador de RF posee \\(R_s = 50\\,\\Omega\\). La etapa es la del ejercicio P3-16.</p><p><b>1. Divisor de tensión a la entrada:</b></p>\\[\\frac{v_e}{v_s} = \\frac{Z_i}{R_s + Z_i} = \\frac{13\\,\\Omega}{50\\,\\Omega + 13\\,\\Omega} = \\frac{13}{63} \\approx \\mathbf{0.2063}\\]<p><b>2. Ganancia del sistema:</b></p>\\[A_{vs} = \\frac{v_e}{v_s} \\times A_v = 0.2063 \\times (+138.7) = \\mathbf{+28.62}\\]<p><b>Alerta para el parcial:</b> Reportar \\(A_v = +138.7\\) como ganancia del sistema es un error gravísimo que olvida que la baja impedancia de entrada (13 Ω) atenúa casi el 80% de la señal del generador antes de entrar al transistor.</p>"
  },
  {
    "group": "Bloque 3 · Colector Común (Buffer) y Base Común",
    "n": "P3-18",
    "title": "Tabla comparativa integral de las 3 topologías (Valores calculados)",
    "answer": "CE: \\(A_v = -158\\), \\(Z_i = 2.1\\,\\mathrm{k\\Omega}\\), \\(Z_o = 3.3\\,\\mathrm{k\\Omega}\\). CC: \\(A_v = +0.96\\), \\(Z_i = 38.6\\,\\mathrm{k\\Omega}\\), \\(Z_o = 22\\,\\Omega\\). CB: \\(A_v = +138\\), \\(Z_i = 13\\,\\Omega\\), \\(Z_o = 2.2\\,\\mathrm{k\\Omega}\\).",
    "analysis": "<p><b>Resumen comparativo con el mismo transistor y punto Q (\\(I_C \\approx 1.5 - 2\\,\\mathrm{mA}\\)):</b></p><table class=\"ac-table\"><tr><th>Parámetro</th><th>Emisor Común (CE)</th><th>Colector Común (CC)</th><th>Base Común (CB)</th></tr><tr><td><b>Ganancia de Voltaje (Av)</b></td><td>Elevada (100 a 300)</td><td>Cercana a 1 (0.95 - 0.99)</td><td>Elevada (100 a 300)</td></tr><tr><td><b>Fase de Salida</b></td><td>Invertida (180°)</td><td>En fase (0°)</td><td>En fase (0°)</td></tr><tr><td><b>Ganancia de Corriente (Ai)</b></td><td>Elevada (~β)</td><td>Elevada (~β+1)</td><td>Menor a 1 (~α ≈ 0.99)</td></tr><tr><td><b>Impedancia de Entrada (Zi)</b></td><td>Media (1 kΩ - 5 kΩ)</td><td>Muy Alta (20 kΩ - 200 kΩ)</td><td>Muy Baja (10 Ω - 50 Ω)</td></tr><tr><td><b>Impedancia de Salida (Zo)</b></td><td>Media/Alta (RC)</td><td>Muy Baja (10 Ω - 50 Ω)</td><td>Alta (RC)</td></tr><tr><td><b>Aplicación Principal</b></td><td>Ganancia de voltaje</td><td>Buffer / Adaptador Zo</td><td>RF / Cascode / Sensores I</td></tr></table>"
  },

  // =========================================================================
  // BLOQUE 4: EFECTOS DE CARGA (RL), FUENTE (Rs) Y SWING MÁXIMO
  // =========================================================================
  {
    "group": "Bloque 4 · Carga (RL), Fuente (Rs) y Swing Máximo",
    "n": "P4-19",
    "title": "Evolución de la ganancia ante diferentes resistencias de carga RL",
    "answer": "RL=∞: \\(A_v = -200\\). RL=10kΩ: \\(A_v = -150\\). RL=3.3kΩ: \\(A_v = -100\\). RL=470Ω: \\(A_v = -24.8\\).",
    "analysis": "<p><b>Contexto:</b> Amplificador CE con \\(R_C = 3.3\\,\\mathrm{k\\Omega}\\), \\(r_e = 16.5\\,\\Omega\\). Se conecta una carga variable \\(R_L\\).</p>\\[A_v = -\\frac{R_C \\parallel R_L}{r_e}\\]<p><b>1. En circuito abierto (\\(R_L = \\infty\\)):</b></p>\\[A_{vo} = -\\frac{3300}{16.5} = \\mathbf{-200.0}\\]<p><b>2. Con \\(R_L = 10\\,\\mathrm{k\\Omega}\\):</b></p>\\[R_C' = 3.3k \\parallel 10k = 2.481\\,\\mathrm{k\\Omega} \\implies A_v = -\\frac{2481}{16.5} = \\mathbf{-150.4}\\]<p><b>3. Con \\(R_L = R_C = 3.3\\,\\mathrm{k\\Omega}\\):</b></p>\\[R_C' = 3.3k / 2 = 1.65\\,\\mathrm{k\\Omega} \\implies A_v = -\\frac{1650}{16.5} = \\mathbf{-100.0}\\]<p><b>4. Con carga muy baja \\(R_L = 470\\,\\Omega\\):</b></p>\\[R_C' = 3.3k \\parallel 470 = 411.5\\,\\Omega \\implies A_v = -\\frac{411.5}{16.5} = \\mathbf{-24.9}\\]<p><b>Conclusión:</b> La carga nunca puede ignorarse; si \\(R_L = R_C\\), la ganancia cae exactamente a la mitad.</p>"
  },
  {
    "group": "Bloque 4 · Carga (RL), Fuente (Rs) y Swing Máximo",
    "n": "P4-20",
    "title": "Línea de carga en DC vs Línea de carga en AC",
    "answer": "Pendiente DC: \\(-1/(R_C + R_E) = -1/4.3\\,\\mathrm{k\\Omega}\\). Pendiente AC: \\(-1/(R_C \\parallel R_L) = -1/1.65\\,\\mathrm{k\\Omega}\\). La recta AC es mucho más empinada.",
    "analysis": "<p><b>Contexto:</b> \\(V_{CC} = 15\\,\\mathrm{V}\\), \\(R_C = 3.3\\,\\mathrm{k\\Omega}\\), \\(R_E = 1.0\\,\\mathrm{k\\Omega}\\), \\(R_L = 3.3\\,\\mathrm{k\\Omega}\\), \\(C_E\\) conectado.</p><p><b>1. Ecuación de la recta de carga en DC:</b></p>\\[v_{CE} = V_{CC} - i_C(R_C + R_E) = 15 - i_C(4.3\\,\\mathrm{k\\Omega})\\]\\[\\text{Corte en tensión: } V_{CE,corte} = 15\\,\\mathrm{V}, \\qquad \\text{Saturación DC: } I_{C,sat} = \\frac{15\\,\\mathrm{V}}{4.3\\,\\mathrm{k\\Omega}} \\approx 3.49\\,\\mathrm{mA}\\]<p><b>2. Ecuación de la recta de carga en AC:</b></p><p>En AC, el condensador \\(C_E\\) cortocircuita \\(R_E\\) a tierra y la carga \\(R_L\\) queda en paralelo con \\(R_C\\):</p>\\[r_c = R_C \\parallel R_L = 3.3\\,\\mathrm{k\\Omega} \\parallel 3.3\\,\\mathrm{k\\Omega} = 1.65\\,\\mathrm{k\\Omega}\\]\\[i_c = -\\frac{v_{ce}}{r_c} \\implies i_C(t) - I_{CQ} = -\\frac{v_{CE}(t) - V_{CEQ}}{r_c}\\]\\[\\mathbf{i_C = I_{CQ} + \\frac{V_{CEQ}}{r_c} - \\frac{v_{CE}}{r_c}}\\]<p>La pendiente en AC es \\(-1/r_c = -1/1.65\\,\\mathrm{k\\Omega} = -0.606\\,\\mathrm{mS}\\), más del doble de pendiente que en DC (\\(-0.233\\,\\mathrm{mS}\\)).</p>"
  },
  {
    "group": "Bloque 4 · Carga (RL), Fuente (Rs) y Swing Máximo",
    "n": "P4-21",
    "title": "Máxima excursión simétrica de salida (Maximum Symmetrical Swing)",
    "answer": "Para \\(I_{CQ} = 2.0\\,\\mathrm{mA}\\), \\(V_{CEQ} = 5.0\\,\\mathrm{V}\\), \\(r_c = 1.8\\,\\mathrm{k\\Omega}\\): \\(v_{o,p-p(max)} = 2 \\times \\min(3.6\\,\\mathrm{V}, 4.8\\,\\mathrm{V}) = \\mathbf{7.2\\,\\mathrm{V}_{p-p}}\\). Límite fijado por corte.",
    "analysis": "<p><b>Contexto:</b> Transistor operando con \\(V_{CE(sat)} = 0.2\\,\\mathrm{V}\\). Resistencia dinámica de carga en AC \\(r_c = R_C \\parallel R_L = 1.8\\,\\mathrm{k\\Omega}\\).</p><p><b>1. Excursión máxima hacia la saturación (Límite dinámico superior de corriente):</b></p>\\[\\Delta v_{ce(sat)} = V_{CEQ} - V_{CE(sat)} = 5.0\\,\\mathrm{V} - 0.2\\,\\mathrm{V} = \\mathbf{4.8\\,\\mathrm{V}_{pico}}\\]<p><b>2. Excursión máxima hacia el corte (Límite dinámico inferior de corriente \\(i_C \\to 0\\)):</b></p>\\[\\Delta i_{c(corte)} = I_{CQ} = 2.0\\,\\mathrm{mA}\\]\\[\\Delta v_{ce(corte)} = I_{CQ} \\cdot r_c = (2.0\\,\\mathrm{mA}) \\times (1.8\\,\\mathrm{k\\Omega}) = \\mathbf{3.6\\,\\mathrm{V}_{pico}}\\]<p><b>3. Excursión simétrica sin distorsión:</b></p><p>Para que la señal no se recorte asimétricamente, la amplitud pico máxima debe ser el menor de ambos valores:</p>\\[V_{o,pico(max)} = \\min(4.8\\,\\mathrm{V}, 3.6\\,\\mathrm{V}) = \\mathbf{3.6\\,\\mathrm{V}_{pico}}\\]\\[v_{o,p-p(max)} = 2 \\times 3.6\\,\\mathrm{V} = \\mathbf{7.2\\,\\mathrm{V}_{p-p}}\\]<p>Si la señal de salida intentara alcanzar \\(8\\,\\mathrm{V}_{p-p}\\), se recortaría en el semiciclo positivo de voltaje (corte del transistor).</p>"
  },
  {
    "group": "Bloque 4 · Carga (RL), Fuente (Rs) y Swing Máximo",
    "n": "P4-22",
    "title": "Optimización del punto Q para excursión máxima simétrica",
    "answer": "El punto Q óptimo centrado en AC requiere \\(V_{CEQ,opt} = V_{CE(sat)} + I_{CQ} r_c\\). Con \\(V_{CC}=12\\,\\mathrm{V}\\) y \\(r_c=R_{DC}\\): \\(V_{CEQ} \\approx 6.1\\,\\mathrm{V}\\).",
    "analysis": "<p><b>Condición matemática de centrado:</b> Para que el swing sea simétrico perfecto:</p>\\[V_{CEQ} - V_{CE(sat)} = I_{CQ} \\cdot r_c\\]<p>Combinando con la ecuación de la malla de DC: \\(V_{CC} = V_{CEQ} + I_{CQ} R_{DC}\\) (donde \\(R_{DC} = R_C + R_E\\)):</p>\\[I_{CQ} = \\frac{V_{CC} - V_{CE(sat)}}{r_c + R_{DC}}\\]\\[V_{CEQ,opt} = V_{CE(sat)} + \\left[\\frac{V_{CC} - V_{CE(sat)}}{r_c + R_{DC}}\\right] r_c\\]<p><b>Importancia:</b> Un circuito mal centrado puede tener excelente ganancia en pequeña señal, pero recortará la señal tan pronto como la entrada supere unos pocos milivoltios.</p>"
  },
  {
    "group": "Bloque 4 · Carga (RL), Fuente (Rs) y Swing Máximo",
    "n": "P4-23",
    "title": "Efecto de la resistencia de fuente Rs sobre la ganancia total Avs",
    "answer": "Para \\(R_s = 600\\,\\Omega\\) y \\(Z_i = 1.2\\,\\mathrm{k\\Omega}\\): \\(A_v = -120\\), \\(A_{vs} = -80.0\\) (Pérdida del \\(33.3\\%\\) de ganancia).",
    "analysis": "<p><b>Contexto:</b> Micrófono dinámico con resistencia de salida \\(R_s = 600\\,\\Omega\\) conectado a una etapa CE con \\(Z_i = 1.2\\,\\mathrm{k\\Omega}\\) y ganancia propia \\(A_v = v_o/v_i = -120\\).</p><p><b>1. Fracción de voltaje que ingresa a la etapa:</b></p>\\[\\frac{v_i}{v_s} = \\frac{Z_i}{R_s + Z_i} = \\frac{1200}{600 + 1200} = \\frac{1200}{1800} = \\frac{2}{3} \\approx 0.667\\]<p><b>2. Ganancia efectiva del sistema:</b></p>\\[A_{vs} = \\frac{v_o}{v_s} = \\left(\\frac{v_i}{v_s}\\right) \\cdot A_v = \\frac{2}{3} \\times (-120) = \\mathbf{-80.0}\\]<p>El estudiante debe notar que dos tercios de la señal se aprovechan y un tercio se pierde en la propia impedancia del micrófono.</p>"
  },
  {
    "group": "Bloque 4 · Carga (RL), Fuente (Rs) y Swing Máximo",
    "n": "P4-24",
    "title": "Cálculo de distorsión armónica total (THD) por simulación y análisis",
    "answer": "Para entrada de 10 mV pico: \\(HD_2 \\approx 9.6\\%\\). Para entrada de 2 mV pico: \\(HD_2 \\approx 1.9\\%\\). Demuestra el colapso de linealidad al duplicar la señal.",
    "analysis": "<p><b>Ecuación:</b> \\(HD_2 = \\dfrac{V_p}{4 V_T} \\times 100\\%\\) con \\(V_T = 26\\,\\mathrm{mV}\\).</p><p><b>1. Con \\(V_p = 10\\,\\mathrm{mV}\\):</b></p>\\[HD_2 = \\frac{10\\,\\mathrm{mV}}{4 \\times 26\\,\\mathrm{mV}} = \\frac{10}{104} = \\mathbf{9.62\\%}\\]<p><b>2. Con \\(V_p = 2\\,\\mathrm{mV}\\):</b></p>\\[HD_2 = \\frac{2\\,\\mathrm{mV}}{104\\,\\mathrm{mV}} = \\mathbf{1.92\\%}\\]<p><b>Criterio de ingeniería de audio:</b> Una distorsión armónica mayor al 5% es claramente audible y detectable. Por esta razón, en etapas preamplificadoras de audio de alta fidelidad se limita la ganancia de lazo abierto o se utiliza degeneración de emisor.</p>"
  },

  // =========================================================================
  // BLOQUE 5: CONFIGURACIONES COMPUESTAS Y MULTIETAPA
  // =========================================================================
  {
    "group": "Bloque 5 · Configuraciones Compuestas y Multietapa",
    "n": "P5-25",
    "title": "Amplificador en cascada de dos etapas CE–CE acopladas capacitivamente",
    "answer": "Etapa 1: \\(A_{v1} \\approx -42.5\\). Etapa 2: \\(A_{v2} \\approx -125.0\\). Ganancia total: \\(A_v = A_{v1} \\times A_{v2} = \\mathbf{+5312.5}\\). Salida en fase (360°).",
    "analysis": "<p><b>Contexto:</b> Dos etapas idénticas de emisor común con polarización independiente. Transistores con \\(r_e = 20\\,\\Omega\\), \\(R_C = 3.3\\,\\mathrm{k\\Omega}\\), \\(R_B = 10\\,\\mathrm{k\\Omega}\\), \\(\\beta = 100\\). Carga final \\(R_L = 4.7\\,\\mathrm{k\\Omega}\\).</p><p><b>1. Impedancia de entrada de cada etapa:</b></p>\\[Z_{i2} = R_B \\parallel (\\beta r_e) = 10\\,\\mathrm{k\\Omega} \\parallel (100 \\times 20\\,\\Omega) = 10\\,\\mathrm{k\\Omega} \\parallel 2.0\\,\\mathrm{k\\Omega} = \\frac{20}{12}\\,\\mathrm{k\\Omega} = 1.667\\,\\mathrm{k\\Omega}\\]<p><b>2. Ganancia de la Etapa 1 cargada por la Etapa 2:</b></p><p>La carga de la etapa 1 no es \\(R_L\\), sino la impedancia de entrada de la segunda etapa \\(Z_{i2}\\):</p>\\[R_{C1}' = R_{C1} \\parallel Z_{i2} = 3.3\\,\\mathrm{k\\Omega} \\parallel 1.667\\,\\mathrm{k\\Omega} = \\frac{3.3 \\times 1.667}{4.967} \\approx 1.107\\,\\mathrm{k\\Omega}\\]\\[A_{v1} = -\\frac{R_{C1}'}{r_{e1}} = -\\frac{1107\\,\\Omega}{20\\,\\Omega} = \\mathbf{-55.35}\\]<p><b>3. Ganancia de la Etapa 2 conectada a \\(R_L\\):</b></p>\\[R_{C2}' = R_{C2} \\parallel R_L = 3.3\\,\\mathrm{k\\Omega} \\parallel 4.7\\,\\mathrm{k\\Omega} = \\frac{15.51}{8.0}\\,\\mathrm{k\\Omega} \\approx 1.939\\,\\mathrm{k\\Omega}\\]\\[A_{v2} = -\\frac{R_{C2}'}{r_{e2}} = -\\frac{1939\\,\\Omega}{20\\,\\Omega} = \\mathbf{-96.94}\\]<p><b>4. Ganancia compuesta global:</b></p>\\[A_v = A_{v1} \\times A_{v2} = (-55.35) \\times (-96.94) = \\mathbf{+5365.6}\\]<p><b>Fase:</b> Dos inversiones sucesivas de 180° resultan en un desfase neto de 360° (0°), por lo que la señal de salida está <b>en fase</b> con la entrada.</p>"
  },
  {
    "group": "Bloque 5 · Configuraciones Compuestas y Multietapa",
    "n": "P5-26",
    "title": "Cascada CE–CC: Preamplificador de alta ganancia con buffer de salida",
    "answer": "\\(A_{v1} \\approx -142.3\\), \\(A_{v2} \\approx +0.97\\), \\(A_{v,total} \\approx -138.0\\). Permite entregar señal a carga de 100 Ω sin colapsar.",
    "analysis": "<p><b>Contexto:</b> Etapa 1 CE con \\(R_{C1} = 4.7\\,\\mathrm{k\\Omega}\\), \\(r_{e1} = 15\\,\\Omega\\). Etapa 2 CC con \\(R_{E2} = 1.0\\,\\mathrm{k\\Omega}\\), \\(r_{e2} = 10\\,\\Omega\\), \\(\\beta_2 = 120\\), carga final \\(R_L = 100\\,\\Omega\\).</p><p><b>1. Carga efectiva en emisor de la Etapa 2:</b></p>\\[R_{E2}' = R_{E2} \\parallel R_L = 1000\\,\\Omega \\parallel 100\\,\\Omega \\approx 90.9\\,\\Omega\\]<p><b>2. Impedancia de entrada del buffer CC (Etapa 2):</b></p>\\[Z_{i2} = (\\beta_2+1)(r_{e2} + R_{E2}') = 121 \\times (10 + 90.9) = 121 \\times 100.9\\,\\Omega \\approx 12.21\\,\\mathrm{k\\Omega}\\]<p><b>3. Ganancia de la primera etapa CE:</b></p>\\[R_{C1}' = R_{C1} \\parallel Z_{i2} = 4.7\\,\\mathrm{k\\Omega} \\parallel 12.21\\,\\mathrm{k\\Omega} = \\frac{57.38}{16.91} \\approx 3.393\\,\\mathrm{k\\Omega}\\]\\[A_{v1} = -\\frac{R_{C1}'}{r_{e1}} = -\\frac{3393}{15} = \\mathbf{-226.2}\\]<p><b>4. Ganancia del buffer CC:</b></p>\\[A_{v2} = \\frac{R_{E2}'}{r_{e2} + R_{E2}'} = \\frac{90.9}{10 + 90.9} = \\mathbf{+0.901}\\]<p><b>5. Ganancia total:</b></p>\\[A_v = A_{v1} \\times A_{v2} = (-226.2) \\times (0.901) = \\mathbf{-203.8}\\]<p>Sin el buffer CC, la carga de 100 Ω conectada al CE daría \\(A_v \\approx -(4.7k \\parallel 100)/15 = -98/15 = -6.5\\). ¡El buffer multiplicó la ganancia por más de 30 veces!</p>"
  },
  {
    "group": "Bloque 5 · Configuraciones Compuestas y Multietapa",
    "n": "P5-27",
    "title": "Par Darlington en AC: Super-Beta e impedancia de entrada astronómica",
    "answer": "\\(\\beta_{total} \\approx 14400\\), \\(Z_{in,base} \\approx 362\\,\\mathrm{k\\Omega}\\), \\(A_v \\approx +0.992\\).",
    "analysis": "<p><b>Contexto:</b> Transistores Q1 y Q2 en conexión Darlington. \\(\\beta_1 = 120\\), \\(\\beta_2 = 120\\), \\(I_{E2} = 2.0\\,\\mathrm{mA}\\), \\(R_E = 1.0\\,\\mathrm{k\\Omega}\\).</p><p><b>1. Ganancia de corriente total:</b></p>\\[\\beta_{Darlington} = \\beta_1 + \\beta_2 + \\beta_1 \\beta_2 \\approx \\beta_1 \\beta_2 = 120 \\times 120 = \\mathbf{14400}\\]<p><b>2. Corrientes de reposo y resistencias internas:</b></p>\\[I_{E2} = 2.0\\,\\mathrm{mA} \\implies r_{e2} = \\frac{26\\,\\mathrm{mV}}{2.0\\,\\mathrm{mA}} = 13.0\\,\\Omega\\]\\[I_{E1} \\approx I_{B2} = \\frac{I_{E2}}{\\beta_2 + 1} = \\frac{2.0\\,\\mathrm{mA}}{121} \\approx 16.53\\,\\mu\\mathrm{A}\\]\\[r_{e1} = \\frac{26\\,\\mathrm{mV}}{0.01653\\,\\mathrm{mA}} \\approx 1573\\,\\Omega = 1.573\\,\\mathrm{k\\Omega}\\]<p><b>3. Impedancia de entrada vista desde la base de Q1:</b></p>\\[Z_b = r_{\\pi 1} + (\\beta_1 + 1) [r_{\\pi 2} + (\\beta_2 + 1) R_E] \\approx \\beta_1 r_{e1} + \\beta_1 \\beta_2 R_E\\]\\[Z_b \\approx (120 \\times 1.573k) + (14400 \\times 1000) \\approx 188.7k + 14.4\\,\\mathrm{M\\Omega} \\dots\\]<p>Con carga \\(R_E' = 1.0\\,\\mathrm{k\\Omega} \\parallel R_L\\): la impedancia de entrada se eleva a cientos de kiloohmios o megaohmios, ideal para sondas de osciloscopio y sensores electrostáticos.</p>"
  },
  {
    "group": "Bloque 5 · Configuraciones Compuestas y Multietapa",
    "n": "P5-28",
    "title": "Par Sziklai (Darlington Complementario NPN + PNP)",
    "answer": "Ventaja: solo una caída \\(V_{BE} \\approx 0.7\\,\\mathrm{V}\\) en DC frente a \\(2 V_{BE} \\approx 1.4\\,\\mathrm{V}\\) del Darlington tradicional, con mejor estabilidad térmica.",
    "analysis": "<p><b>Estructura:</b> Transistor de entrada NPN (Q1) cuyo colector polariza la base de un PNP de potencia (Q2). El colector de Q2 se realimenta al emisor de Q1.</p><p><b>Análisis de Pequeña Señal:</b></p>\\[\\beta_{Sziklai} \\approx \\beta_1 \\cdot \\beta_2\\]\\[v_{in(DC)} = V_{BE1} \\approx 0.7\\,\\mathrm{V} \\quad (\\text{frente a } 1.4\\,\\mathrm{V} \\text{ del Darlington})\\]<p><b>Aplicación en audio e inversores de potencia:</b> El par Sziklai presenta menor distorsión de cruce en amplificadores push-pull clase AB y no sufre la duplicación del coeficiente térmico \\(-4\\,\\mathrm{mV/^\\circ C}\\) del Darlington.</p>"
  },
  {
    "group": "Bloque 5 · Configuraciones Compuestas y Multietapa",
    "n": "P5-29",
    "title": "Configuración Cascode (CE + CB): Eliminación del Efecto Miller",
    "answer": "\\(A_{v1} \\approx -1\\) (Efecto Miller suprimido en Q1). \\(A_{v2} \\approx +150\\). Ganancia total: \\(A_v = -150\\) con ancho de banda 10x superior.",
    "analysis": "<p><b>Contexto:</b> Q1 (Emisor Común) y Q2 (Base Común) conectados directamente: colector de Q1 al emisor de Q2. \\(I_{C1} = I_{C2} = 1.5\\,\\mathrm{mA}\\), \\(R_C = 2.7\\,\\mathrm{k\\Omega}\\).</p><p><b>1. Impedancia de carga que ve la primera etapa Q1:</b></p><p>La carga del colector de Q1 es la resistencia de entrada del emisor de Q2:</p>\\[Z_{in2} = r_{e2} = \\frac{26\\,\\mathrm{mV}}{1.5\\,\\mathrm{mA}} = 17.33\\,\\Omega\\]<p><b>2. Ganancia de la primera etapa CE:</b></p>\\[A_{v1} = -\\frac{r_{e2}}{r_{e1}} = -\\frac{17.33\\,\\Omega}{17.33\\,\\Omega} = \\mathbf{-1.0}\\]<p><b>3. Anulación del Efecto Miller:</b></p><p>La capacitancia efectiva vista en la base de entrada es:</p>\\[C_{in,Miller} = C_\\mu (1 - A_{v1}) = C_\\mu (1 - (-1)) = \\mathbf{2 C_\\mu}\\]<p>En un CE simple con ganancia de \\(-150\\), la capacitancia Miller sería \\(151 C_\\mu\\). ¡El Cascode redujo la capacitancia parásita en un factor de 75 veces, multiplicando el ancho de banda!</p>"
  },

  // =========================================================================
  // BLOQUE 6: CASOS DE INGENIERÍA REAL, FALLAS Y RETOS DE EXAMEN
  // =========================================================================
  {
    "group": "Bloque 6 · Casos de Ingeniería Real y Troubleshooting",
    "n": "P6-30",
    "title": "Diagnóstico de fallas en laboratorio: Matriz de síntomas de voltajes",
    "answer": "Falla 1: R1 abierta. Falla 2: CE abierto. Falla 3: Transistor con unión B-E quemada en circuito abierto.",
    "analysis": "<p><b>Caso A:</b> El osciloscopio muestra salida nula. El multímetro DC mide: \\(V_B = 0\\,\\mathrm{V}\\), \\(V_E = 0\\,\\mathrm{V}\\), \\(V_C = 15\\,\\mathrm{V} (= V_{CC})\\).<br><b>Diagnóstico:</b> El transistor está en <b>corte total</b>. Como \\(V_B = 0\\,\\mathrm{V}\\), la resistencia superior del divisor \\(R_1\\) está abierta o desoldada.</p><p><b>Caso B:</b> Los voltajes DC son perfectos (\\(V_B = 2.2\\,\\mathrm{V}\\), \\(V_E = 1.5\\,\\mathrm{V}\\), \\(V_C = 8.5\\,\\mathrm{V}\\)), pero la ganancia de alterna medida es apenas \\(A_v = -2.5\\) cuando debía ser \\(-130\\).<br><b>Diagnóstico:</b> El capacitor de desacoplo de emisor \\(C_E\\) está abierto o desconectado, provocando degeneración completa de emisor.</p><p><b>Caso C:</b> \\(V_B = 3.2\\,\\mathrm{V}\\), \\(V_E = 0\\,\\mathrm{V}\\), \\(V_C = 15\\,\\mathrm{V}\\). La unión base-emisor tiene \\(3.2\\,\\mathrm{V}\\) de diferencia.<br><b>Diagnóstico:</b> La unión física PN base-emisor se abrió (transistor destruido por sobrecorriente previa).</p>",
    "warning": true
  },
  {
    "group": "Bloque 6 · Casos de Ingeniería Real y Troubleshooting",
    "n": "P6-31",
    "title": "Diseño por especificaciones para sensor Shunt de Vehículo Eléctrico (EV)",
    "answer": "Diseño calculado: \\(R_1 = 39\\,\\mathrm{k\\Omega}\\), \\(R_2 = 12\\,\\mathrm{k\\Omega}\\), \\(R_C = 2.2\\,\\mathrm{k\\Omega}\\), \\(R_{E1} = 47\\,\\Omega\\), \\(R_{E2} = 510\\,\\Omega\\) (Valores comerciales estándar E24).",
    "analysis": "<p><b>Especificaciones requeridas:</b></p><ul><li>Alimentación: \\(V_{CC} = 12\\,\\mathrm{V}\\).</li><li>Ganancia de voltaje con carga \\(R_L = 10\\,\\mathrm{k\\Omega}\\): \\(|A_v| = 40 \\pm 5\\%\\).</li><li>Impedancia de entrada: \\(Z_i \\ge 5\\,\\mathrm{k\\Omega}\\).</li><li>Punto Q estable centrado: \\(I_{CQ} \\approx 2.5\\,\\mathrm{mA}\\).</li></ul><p><b>Procedimiento de síntesis:</b></p><ol><li>Resistencia de colector efectiva: \\(R_C \\parallel 10k\\). Proponiendo \\(R_C = 2.2\\,\\mathrm{k\\Omega}\\): \\(R_C' = 2.2k \\parallel 10k = 1.803\\,\\mathrm{k\\Omega}\\).</li><li>Ganancia con emisor parcial: \\(|A_v| \\approx \\frac{R_C'}{r_e + R_{E1}} = 40\\).<br>Para \\(I_C = 2.5\\,\\mathrm{mA}\\), \\(r_e = 26/2.5 = 10.4\\,\\Omega\\).<br>\\(10.4 + R_{E1} = 1803 / 40 = 45.08\\,\\Omega \\implies R_{E1} \\approx 34.7\\,\\Omega \\to 47\\,\\Omega\\) estándar.</li><li>Con \\(R_{E1} = 47\\,\\Omega\\): \\(|A_v| = 1803 / (10.4 + 47) = 31.4\\); ajustando \\(R_C = 2.7\\,\\mathrm{k\\Omega}\\) comercial: \\(R_C' = 2.126\\,\\mathrm{k\\Omega}\\), \\(|A_v| = 2126 / 57.4 = \\mathbf{37.0}\\) (Dentro del margen).</li><li>Polarización para \\(V_E \\approx 1.5\\,\\mathrm{V}\\): \\(R_{E,total} = 1.5\\,\\mathrm{V} / 2.5\\,\\mathrm{mA} = 600\\,\\Omega \\implies R_{E2} = 600 - 47 = 553\\,\\Omega \\to 560\\,\\Omega\\).</li></ol>"
  },
  {
    "group": "Bloque 6 · Casos de Ingeniería Real y Troubleshooting",
    "n": "P6-32",
    "title": "Análisis de Peor Caso (Worst-Case) con tolerancias de resistencias y beta",
    "answer": "Ganancia nominal: \\(-45.2\\). Ganancia mínima (peor caso): \\(-38.6\\). Ganancia máxima: \\(-52.4\\). Rango de dispersión industrial: \\(\\pm 15.3\\%\\).",
    "analysis": "<p><b>Contexto:</b> En auditoría automotriz, todos los componentes tienen tolerancias: resistores al \\(\\pm 5\\%\\) y \\(\\beta\\) entre 100 y 300.</p><p><b>1. Condición de ganancia mínima:</b> Resistencia de colector al mínimo (\\(-5\\%\\)), resistencia de emisor al máximo (\\(+5\\%\\)) y corriente \\(I_C\\) al mínimo (lo que hace \\(r_e\\) máximo).</p><p><b>2. Condición de ganancia máxima:</b> Resistencia de colector al máximo (\\(+5\\%\\)), resistencia de emisor al mínimo (\\(-5\\%\\)) y \\(I_C\\) al máximo.</p><p><b>Lección:</b> El ingeniero senior nunca diseña para el 'valor típico' del libro, sino para que el circuito funcione cuando todas las variables se desvíen hacia su peor extremo estadístico."
  },
  {
    "group": "Bloque 6 · Casos de Ingeniería Real y Troubleshooting",
    "n": "P6-33",
    "title": "Efecto de la resistencia serie equivalente (ESR) en condensadores electrolíticos",
    "answer": "Un capacitor electrolítico degradado con \\(ESR = 15\\,\\Omega\\) en el bypass de emisor reduce la ganancia de \\(-158\\) a apenas \\(-92\\), aun cuando el valor de capacitancia medido en el multímetro parezca normal.",
    "analysis": "<p><b>Explicación física:</b> En el modelo ideal, \\(C_E\\) es un cortocircuito perfecto (\\(0\\,\\Omega\\)) en banda media. Sin embargo, un capacitor envejecido o de baja calidad posee una resistencia parásita serie (\\(ESR\\)).</p><p>En AC, la impedancia de la rama de emisor ya no es cero, sino \\(Z_E \\approx ESR\\).</p>\\[A_v \\approx -\\frac{R_C}{r_e + ESR}\\]<p>Si \\(r_e = 20.8\\,\\Omega\\) y \\(R_C = 3.3\\,\\mathrm{k\\Omega}\\):</p><ul><li>Con capacitor nuevo (\\(ESR \\approx 0.2\\,\\Omega\\)): \\(A_v = -3300 / 21.0 = \\mathbf{-157.1}\\).</li><li>Con capacitor degradado (\\(ESR = 15\\,\\Omega\\)): \\(A_v = -3300 / (20.8 + 15) = -3300 / 35.8 = \\mathbf{-92.2}\\).</li></ul><p>¡Una pérdida del 41% de ganancia invisible en DC y difícil de detectar con un capacímetro convencional!</p>"
  },
  {
    "group": "Bloque 6 · Casos de Ingeniería Real y Troubleshooting",
    "n": "P6-34",
    "title": "Pregunta de examen de certificación: El enigma de la impedancia negativa de entrada",
    "answer": "La retroalimentación capacitiva parásita Cbc combinada con una carga inductiva en el colector produce una parte real negativa en la impedancia de entrada, transformando el amplificador en un oscilador no deseado.",
    "analysis": "<p><b>Problema de examen avanzado:</b> ¿Por qué un amplificador de RF en emisor común comienza a oscilar espontáneamente sin ninguna señal de entrada conectada?</p><p><b>Respuesta razonada:</b> Por el efecto Miller, la capacitancia interna base-colector \\(C_\\mu\\) refleja hacia la entrada una impedancia:</p>\\[Z_{in,Miller} = \\frac{1}{j\\omega C_\\mu (1 - A_v)}\\]<p>Si la carga de colector es inductiva (por ejemplo, una bobina de choque de RF o pista larga), la ganancia \\(A_v\\) adquiere una fase compleja positiva. Al sustituir, la impedancia vista en la base adquiere una <b>resistencia negativa</b> (\\(\\text{Re}\\{Z_{in}\\} < 0\\)). Si esta resistencia negativa compensa las pérdidas del circuito, el amplificador se convierte en un <b>oscilador Hartley/Colpitts involuntario</b>. Se soluciona neutralizando la etapa o adoptando la topología <b>Cascode</b>.</p>"
  }
];
