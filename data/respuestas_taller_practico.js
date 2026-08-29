window.RESPUESTAS_TALLER_PRACTICO = [
  {
    "group": "Circuitos en AC",
    "n": "AC–A",
    "title": "Red de la página 3 · Vm = 200 V",
    "answer": "\\(v_o(t)=0\\,\\mathrm{V}\\) durante todo el ciclo; por tanto, \\(V_{DC}=0\\,\\mathrm{V}\\).",
    "analysis": "<p><b>Semiciclo positivo.</b> Con las orientaciones dibujadas, la fuente no establece una diferencia de potencial entre los dos extremos de la resistencia de salida; ambos nodos quedan al mismo potencial de referencia y \\(v_o=0\\).</p><p><b>Semiciclo negativo.</b> Los diodos superiores que quedan en directa igualan los dos nodos de salida con el terminal superior de la fuente, de modo que nuevamente \\(v_o=0\\).</p><p>Por ello:</p>\\[\\boxed{v_o(t)=0}\\qquad\\boxed{V_{DC}=0\\,\\mathrm{V}}\\]"
  },
  {
    "group": "Circuitos en AC",
    "n": "AC–B",
    "title": "Red de la página 3 · Vm = 240 V",
    "answer": "\\(v_o(t)=\\dfrac{|v_i(t)|}{2}\\), \\(V_{p(out)}=120\\,\\mathrm{V}\\) y \\(V_{DC}\\approx76.39\\,\\mathrm{V}\\).",
    "analysis": "<p>Los dos resistores superiores son de \\(4\\,\\mathrm{k\\Omega}\\), la resistencia de salida también es de \\(4\\,\\mathrm{k\\Omega}\\) y los diodos inferiores son ideales.</p><p>En cada semiciclo uno de los diodos inferiores fija uno de los extremos de la salida a la referencia y los dos resistores de \\(4\\,\\mathrm{k\\Omega}\\) forman un divisor:</p>\\[\\boxed{v_o(t)=\\frac{|v_i(t)|}{2}}\\]<p>Como \\(V_m=240\\,\\mathrm{V}\\):</p>\\[V_{p(out)}=\\frac{240}{2}=120\\,\\mathrm{V}\\]\\[V_{DC}=\\frac{2V_{p(out)}}{\\pi}=\\frac{240}{\\pi}\\approx\\boxed{76.39\\,\\mathrm{V}}\\]"
  },
  {
    "group": "Circuitos en AC",
    "n": "AC–B★",
    "title": "Red de la página 4 · Vm = 100 V",
    "answer": "Semiciclo positivo: \\(v_o=v_i/2\\). Semiciclo negativo: \\(v_o=-v_i\\). \\(V_{DC}\\approx47.75\\,\\mathrm{V}\\).",
    "analysis": "<p>Este ejercicio es asimétrico y por eso los dos semiciclos no producen el mismo pico.</p><p><b>Para \\(v_i>0\\):</b> el diodo superior derecho conduce y aparece un divisor con las dos resistencias de \\(2\\,\\mathrm{k\\Omega}\\):</p>\\[v_o=\\frac{v_i}{2}\\]<p>El pico positivo de salida es \\(50\\,\\mathrm{V}\\).</p><p><b>Para \\(v_i<0\\):</b> conducen las ramas que fijan el nodo izquierdo al terminal superior y el derecho al terminal inferior:</p>\\[v_o=-v_i\\]<p>El segundo semiciclo aparece positivo con pico de \\(100\\,\\mathrm{V}\\).</p><p>El valor medio sobre un periodo es:</p>\\[V_{DC}=\\frac{1}{2\\pi}\\left(\\int_0^\\pi \\frac{V_m}{2}\\sin\\theta\\,d\\theta+\\int_\\pi^{2\\pi}-V_m\\sin\\theta\\,d\\theta\\right)=\\frac{3V_m}{2\\pi}\\]\\[V_{DC}=\\frac{3(100)}{2\\pi}\\approx\\boxed{47.75\\,\\mathrm{V}}\\]"
  },
  {
    "group": "Circuitos en AC",
    "n": "AC–C",
    "title": "Puente ideal de la página 5 · Vm = 170 V",
    "answer": "\\(v_o(t)=|v_i(t)|\\), \\(V_{p(out)}=170\\,\\mathrm{V}\\) y \\(V_{DC}\\approx108.23\\,\\mathrm{V}\\).",
    "analysis": "<p>El puente es ideal. En cada semiciclo conduce un par de diodos distinto, pero la corriente por la resistencia de \\(4\\,\\mathrm{k\\Omega}\\) conserva el mismo sentido.</p>\\[\\boxed{v_o(t)=|v_i(t)|}\\]\\[V_{p(out)}=V_m=170\\,\\mathrm{V}\\]\\[V_{DC}=\\frac{2V_m}{\\pi}=\\frac{340}{\\pi}\\approx\\boxed{108.23\\,\\mathrm{V}}\\]"
  },
  {
    "group": "Circuitos en DC",
    "n": "DC–1",
    "title": "Si + Ge · página 5",
    "answer": "\\(V_{o1}=0.7\\,\\mathrm{V}\\), \\(V_{o2}=0.3\\,\\mathrm{V}\\), \\(I_{D,Ge}\\approx0.851\\,\\mathrm{mA}\\) e \\(I_{D,Si}\\approx18.45\\,\\mathrm{mA}\\).",
    "analysis": "<p>Ambos diodos quedan ON. El Si fija \\(V_{o1}=0.7\\,\\mathrm{V}\\) y el Ge fija \\(V_{o2}=0.3\\,\\mathrm{V}\\).</p>\\[I_{R1}=\\frac{20-0.7}{1\\,\\mathrm{k\\Omega}}=19.30\\,\\mathrm{mA}\\]\\[I_{D,Ge}=\\frac{0.7-0.3}{0.47\\,\\mathrm{k\\Omega}}\\approx0.851\\,\\mathrm{mA}\\]\\[I_{D,Si}=I_{R1}-I_{D,Ge}\\approx19.30-0.851=\\boxed{18.45\\,\\mathrm{mA}}\\]"
  },
  {
    "group": "Circuitos en DC",
    "n": "DC–2",
    "title": "Ge + LED azul + diodos Si · página 6",
    "answer": "No existe una corriente DC finita que pueda determinarse con el modelo de caída constante tal como está dibujado el circuito: hay una trayectoria directa desde la fuente de \\(30\\,\\mathrm{V}\\) hacia tierra sin resistencia limitadora.",
    "analysis": "<p><b>Resultado de la auditoría matemática.</b> Si el Ge, el LED azul \\((V_F=3.2\\,\\mathrm{V})\\) y el diodo Si central están ON, la trayectoria directa fuente–tierra solo contiene caídas de diodos:</p>\\[V_{Ge}+V_{F,azul}+V_{Si}=0.3+3.2+0.7=4.2\\,\\mathrm{V}\\]<p>Esto no puede equilibrar una fuente ideal de \\(30\\,\\mathrm{V}\\) sin una resistencia o impedancia serie. Con el modelo simplificado, la corriente queda <b>indeterminada/no finita</b>.</p><p>Si se simula con modelos reales, la corriente estará limitada por resistencias internas y puede ser destructiva. Por eso AnalogLab no fuerza un valor numérico de \\(I_D\\) para este circuito.</p><p>Esta situación debe interpretarse como una comprobación de diseño: una rama de diodos/LED conectada a una fuente necesita un mecanismo de limitación de corriente.</p>",
    "warning": true
  },
  {
    "group": "Circuitos en DC",
    "n": "DC–3",
    "title": "Dos ramas Si y carga · página 6",
    "answer": "\\(V_o=6.20\\,\\mathrm{V}\\). Ambos diodos Si están ON y la corriente de cada rama es \\(1.55\\,\\mathrm{mA}\\).",
    "analysis": "<p>Los dos diodos Si están orientados desde el nodo de \\(+10\\,\\mathrm{V}\\) hacia las dos ramas, por lo que ambos quedan ON:</p>\\[V_{\\text{después del diodo}}=10-0.7=9.3\\,\\mathrm{V}\\]<p>Las dos resistencias de \\(2\\,\\mathrm{k\\Omega}\\) quedan en paralelo vistas desde la fuente equivalente de \\(9.3\\,\\mathrm{V}\\):</p>\\[2\\,\\mathrm{k\\Omega}\\parallel2\\,\\mathrm{k\\Omega}=1\\,\\mathrm{k\\Omega}\\]<p>Con la carga de \\(2\\,\\mathrm{k\\Omega}\\):</p>\\[V_o=9.3\\frac{2}{1+2}=\\boxed{6.20\\,\\mathrm{V}}\\]\\[I_D=\\frac{9.3-6.2}{2\\,\\mathrm{k\\Omega}}=\\boxed{1.55\\,\\mathrm{mA}}\\quad\\text{(en cada rama)}\\]"
  },
  {
    "group": "Circuitos en DC",
    "n": "DC–4",
    "title": "Dos fuentes de 5 V · Si y Ge · página 6",
    "answer": "\\(V_o=4.70\\,\\mathrm{V}\\). El diodo Ge está ON y el Si está OFF. \\(I_{Ge}\\approx2.14\\,\\mathrm{mA}\\).",
    "analysis": "<p>Si cada rama actuara por separado, el Si intentaría fijar el nodo en \\(5-0.7=4.3\\,\\mathrm{V}\\), mientras que el Ge intentaría fijarlo en \\(5-0.3=4.7\\,\\mathrm{V}\\).</p><p>El Ge establece el mayor potencial y conduce; a \\(V_o=4.7\\,\\mathrm{V}\\), el Si ya no dispone de los \\(0.7\\,\\mathrm{V}\\) requeridos por el modelo.</p>\\[\\boxed{V_o=4.70\\,\\mathrm{V}}\\]\\[I_{Ge}=\\frac{4.7}{2.2\\,\\mathrm{k\\Omega}}\\approx\\boxed{2.14\\,\\mathrm{mA}}\\]"
  },
  {
    "group": "Circuitos en DC",
    "n": "DC–5",
    "title": "+20 V, −5 V y Si · página 6",
    "answer": "\\(V_o=-4.30\\,\\mathrm{V}\\) e \\(I_D\\approx3.57\\,\\mathrm{mA}\\). El diodo está ON.",
    "analysis": "<p>El cátodo está conectado al nodo de \\(-5\\,\\mathrm{V}\\). Si el Si está ON:</p>\\[V_o=V_K+0.7=-5+0.7=\\boxed{-4.3\\,\\mathrm{V}}\\]<p>La resistencia queda entre \\(+20\\,\\mathrm{V}\\) y \\(-4.3\\,\\mathrm{V}\\):</p>\\[I_D=\\frac{20-(-4.3)}{6.8\\,\\mathrm{k\\Omega}}\\approx\\boxed{3.57\\,\\mathrm{mA}}\\]<p>La corriente resulta positiva en el sentido indicado, por lo que la hipótesis ON es consistente.</p>"
  },
  {
    "group": "Circuitos en DC",
    "n": "DC–6a",
    "title": "Fuente de 20 V con polaridad invertida · página 7",
    "answer": "\\(I=96.5\\,\\mathrm{mA}\\) en el sentido ascendente indicado.",
    "analysis": "<p>El terminal positivo de la fuente está conectado a la referencia, por lo que el nodo superior izquierdo queda en \\(-20\\,\\mathrm{V}\\).</p><p>El diodo Si conduce hacia ese nodo. Su ánodo queda en:</p>\\[V_A=-20+0.7=-19.3\\,\\mathrm{V}\\]<p>La resistencia de \\(200\\,\\Omega\\) tiene \\(19.3\\,\\mathrm{V}\\) entre tierra y el ánodo:</p>\\[I=\\frac{19.3}{200}=\\boxed{96.5\\,\\mathrm{mA}}\\]"
  },
  {
    "group": "Circuitos en DC",
    "n": "DC–6b",
    "title": "Dos diodos Si opuestos · página 7",
    "answer": "\\(I=1.00\\,\\mathrm{A}\\) por la resistencia de \\(10\\,\\Omega\\). La rama central de diodos está abierta.",
    "analysis": "<p>Los dos diodos Si de la rama central están en oposición serie. Para cualquier polaridad de la fuente, uno de ellos queda en inversa; por tanto esa rama no conduce en el modelo utilizado.</p><p>La resistencia de \\(10\\,\\Omega\\) queda directamente sobre la fuente de \\(10\\,\\mathrm{V}\\):</p>\\[I=\\frac{10}{10}=\\boxed{1.00\\,\\mathrm{A}}\\]"
  },
  {
    "group": "Circuitos en DC",
    "n": "DC–7",
    "title": "LED rojo, LED verde y Ge · página 7",
    "answer": "LED rojo ON, LED verde OFF; \\(I_{\\text{rojo}}\\approx41.35\\,\\mathrm{mA}\\); \\(I_{\\text{verde}}=0\\); \\(V_o=14.70\\,\\mathrm{V}\\); \\(I_{Ge}=49.0\\,\\mathrm{mA}\\).",
    "analysis": "<p>En el nodo de los LED, el rojo tiene la menor caída directa \\((1.8\\,\\mathrm{V}<2.2\\,\\mathrm{V})\\), por lo que fija el nodo en aproximadamente \\(1.8\\,\\mathrm{V}\\) y el LED verde queda OFF.</p>\\[I_{20V}=\\frac{20-1.8}{5\\,\\mathrm{k\\Omega}}=3.64\\,\\mathrm{mA}\\]\\[I_{15V\\rightarrow nodo}=\\frac{15-1.8}{350\\,\\Omega}\\approx37.71\\,\\mathrm{mA}\\]\\[I_{\\text{rojo}}\\approx3.64+37.71=\\boxed{41.35\\,\\mathrm{mA}}\\]<p>El diodo Ge de la derecha está ON porque su ánodo se encuentra a \\(15\\,\\mathrm{V}\\):</p>\\[V_o=15-0.3=\\boxed{14.70\\,\\mathrm{V}}\\]\\[I_{Ge}=\\frac{14.7}{300\\,\\Omega}=\\boxed{49.0\\,\\mathrm{mA}}\\]<p><b>Observación:</b> las corrientes calculadas son altas para LED comunes; este resultado también permite discutir en clase la importancia de verificar límites de corriente y potencia.</p>"
  }
];
