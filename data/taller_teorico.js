window.TALLER_TEORICO=[
  {
    "n": 1,
    "section": "A · Fundamentos y unión PN",
    "type": "open",
    "prompt": "Explique con sus palabras qué diferencia a un conductor, un semiconductor y un aislante desde el punto de vista de disponibilidad de portadores y niveles de energía.",
    "h1": "No se limite a decir “conduce mucho o poco”. Relacione estructura y portadores.",
    "h2": "Use las ideas de banda de valencia, banda de conducción y brecha de energía.",
    "guide": "Un conductor dispone de gran cantidad de portadores móviles y bandas favorables para conducción; un aislante posee una brecha energética grande que dificulta excitar electrones; un semiconductor ocupa una situación intermedia y su concentración de portadores puede modificarse por temperatura, luz y dopaje."
  },
  {
    "n": 2,
    "section": "A · Fundamentos y unión PN",
    "type": "open",
    "prompt": "Describa cómo el dopaje produce material tipo N y material tipo P e identifique el portador mayoritario en cada caso.",
    "h1": "Donador → piense en un electrón adicional. Aceptor → piense en un enlace incompleto.",
    "h2": "N no significa “negativo” en conjunto; P no significa “positivo” en conjunto. El cristal sigue siendo globalmente neutro.",
    "guide": "El dopaje donador produce material tipo N con electrones mayoritarios. El dopaje aceptor produce material tipo P con huecos mayoritarios. El cristal completo conserva neutralidad eléctrica."
  },
  {
    "n": 3,
    "section": "A · Fundamentos y unión PN",
    "type": "open",
    "prompt": "Explique cómo se forma la región de agotamiento al poner en contacto material P y N.",
    "h1": "Empiece por difusión de portadores mayoritarios.",
    "h2": "Después considere recombinación y la carga fija que queda cerca de la frontera.",
    "guide": "Electrones y huecos difunden hacia la región opuesta y se recombinan. Cerca de la unión quedan iones fijos sin portadores móviles, generando una región de agotamiento y un campo eléctrico interno que se opone a difusión adicional."
  },
  {
    "n": 4,
    "section": "A · Fundamentos y unión PN",
    "type": "mcq",
    "prompt": "¿Qué ocurre con la región de agotamiento al aplicar polarización directa?",
    "options": [
      "Se ensancha.",
      "Se estrecha.",
      "Permanece exactamente igual.",
      "El material P se convierte en N."
    ],
    "answer": 1,
    "feedback": [
      "La polarización inversa es la que tiende a ensanchar la región.",
      "Correcto: la fuente externa reduce la barrera efectiva y facilita el cruce de portadores.",
      "La fuente modifica la barrera y el ancho de la región.",
      "La polarización no cambia el tipo de dopaje."
    ]
  },
  {
    "n": 5,
    "section": "A · Fundamentos y unión PN",
    "type": "open",
    "prompt": "Explique por qué “un diodo de silicio tiene 0.7 V” debe interpretarse como una aproximación y no como una regla exacta.",
    "h1": "Piense en la curva I–V, no en una batería ideal de 0.7 V.",
    "h2": "Considere corriente, temperatura y dispersión del componente.",
    "guide": "La tensión directa real depende de la corriente, temperatura y dispositivo. El valor de 0.7 V es una aproximación práctica utilizada en un modelo de análisis para muchos diodos de silicio."
  },
  {
    "n": 6,
    "section": "B · Análisis de diodos en DC",
    "type": "open",
    "prompt": "Describa el procedimiento de hipótesis ON/OFF para resolver una red DC con uno o varios diodos.",
    "h1": "Orden recomendado: suponer → sustituir → resolver → verificar.",
    "h2": "La solución debe ser compatible con polaridad y sentido de corriente.",
    "guide": "Se supone un estado para cada diodo, se sustituye por el modelo correspondiente, se resuelve la red con KVL/KCL y ley de Ohm, y finalmente se verifica que voltajes y corrientes sean compatibles con los estados supuestos."
  },
  {
    "n": 7,
    "section": "B · Análisis de diodos en DC",
    "type": "numeric",
    "prompt": "Para una fuente de 9 V, R=1.2 kΩ y un diodo de silicio modelado con VD=0.7 V en conducción, calcule ID.",
    "unit": "mA",
    "answer": 6.92,
    "tol": 0.1,
    "h1": "Primero calcule la tensión en la resistencia.",
    "h2": "VR=9−0.7 V; luego use I=V/R.",
    "guide": "VR=8.3 V, por lo que ID=8.3/1.2 kΩ≈6.92 mA. La corriente positiva confirma la hipótesis de conducción para la orientación usual."
  },
  {
    "n": 8,
    "section": "B · Análisis de diodos en DC",
    "type": "numeric",
    "prompt": "Una fuente de 12 V alimenta dos diodos de silicio en serie, cada uno modelado con 0.7 V, y una resistencia de 1 kΩ. Calcule la corriente.",
    "unit": "mA",
    "answer": 10.6,
    "tol": 0.12,
    "h1": "Sume las dos caídas directas.",
    "h2": "La resistencia recibe 12−1.4 V.",
    "guide": "La caída total de los diodos es 1.4 V. Entonces I=(12−1.4)/1 kΩ=10.6 mA."
  },
  {
    "n": 9,
    "section": "B · Análisis de diodos en DC",
    "type": "mcq",
    "prompt": "Al suponer un diodo ON, el cálculo produce una corriente negativa respecto al sentido elegido. ¿Qué debe hacerse?",
    "options": [
      "Aceptar el resultado sin revisar.",
      "Cambiar el signo de R.",
      "Revisar la hipótesis de estado y la orientación del análisis.",
      "Suponer ruptura inversa automáticamente."
    ],
    "answer": 2,
    "feedback": [
      "No: una solución incompatible requiere verificación.",
      "La resistencia física no cambia de signo.",
      "Correcto: la verificación forma parte esencial del método ON/OFF.",
      "La ruptura no se deduce automáticamente de un signo de corriente."
    ]
  },
  {
    "n": 10,
    "section": "B · Análisis de diodos en DC",
    "type": "open",
    "prompt": "Explique qué representa físicamente la recta de carga y cómo se obtiene el punto Q.",
    "h1": "Diferencie la información de la red externa de la característica del dispositivo.",
    "h2": "Una recta y una curva deben cumplirse simultáneamente.",
    "guide": "La recta de carga reúne las combinaciones VD–ID permitidas por la fuente y la resistencia de la red externa. La curva I–V reúne las combinaciones permitidas por el diodo. Su intersección es el punto de operación Q."
  },
  {
    "n": 11,
    "section": "C · LED",
    "type": "open",
    "prompt": "Explique por qué un LED suele requerir una resistencia serie y qué riesgo existe si se omite.",
    "h1": "Observe la fuerte pendiente de la característica I–V en conducción.",
    "h2": "Una pequeña variación de tensión puede generar un incremento grande de corriente.",
    "guide": "La resistencia limita la corriente a un valor seguro. Sin limitación, la corriente puede aumentar rápidamente y superar la capacidad del LED o de la fuente."
  },
  {
    "n": 12,
    "section": "C · LED",
    "type": "numeric",
    "prompt": "Un LED opera a 20 mA y, para la condición dada, presenta VF=5.6 V. Se alimenta con 12 V. Calcule la resistencia serie.",
    "unit": "Ω",
    "answer": 320,
    "tol": 4,
    "h1": "Use R=(VS−VF)/IF.",
    "h2": "Convierta 20 mA a 0.020 A.",
    "guide": "R=(12−5.6)/0.020=320 Ω. En práctica puede seleccionarse 330 Ω para mantener una corriente ligeramente menor."
  },
  {
    "n": 13,
    "section": "C · LED",
    "type": "open",
    "prompt": "¿Qué debe considerarse al conectar un LED en polaridad inversa?",
    "h1": "Consulte el concepto de tensión inversa máxima.",
    "h2": "Un LED común no debe tratarse como un dispositivo de ruptura controlada.",
    "guide": "Muchos LED soportan tensiones inversas relativamente pequeñas. Si se supera la especificación del fabricante, el dispositivo puede entrar en ruptura y dañarse; debe respetarse la hoja de datos."
  },
  {
    "n": 14,
    "section": "D · Rectificación básica en AC",
    "type": "open",
    "prompt": "Explique qué significa rectificar una señal AC y cómo el estado ON/OFF del diodo genera una señal de media onda.",
    "h1": "Analice por separado semiciclo positivo y negativo.",
    "h2": "La salida no se “dibuja de memoria”: se obtiene del estado instantáneo del diodo.",
    "guide": "Rectificar significa obtener una salida unidireccional a partir de una entrada alterna. En media onda, el diodo conduce durante el semiciclo que lo polariza directamente y se bloquea durante el opuesto, por lo que solo una parte del ciclo aparece sobre la carga."
  },
  {
    "n": 15,
    "section": "D · Rectificación básica en AC",
    "type": "numeric",
    "prompt": "Un rectificador ideal de media onda tiene Vp=10 V. Calcule el valor medio VDC.",
    "unit": "V",
    "answer": 3.18,
    "tol": 0.05,
    "h1": "Para media onda ideal: VDC=Vp/π.",
    "h2": "Sustituya Vp=10 V.",
    "guide": "VDC=10/π≈3.18 V."
  },
  {
    "n": 16,
    "section": "D · Rectificación básica en AC",
    "type": "open",
    "prompt": "Explique por qué en un puente rectificador la corriente por la carga mantiene el mismo sentido durante ambos semiciclos.",
    "h1": "En cada semiciclo conduce un par diferente de diodos.",
    "h2": "Siga el recorrido desde un terminal de la fuente, a través de la carga, hasta regresar al otro terminal.",
    "guide": "El puente conmuta la trayectoria: durante un semiciclo conduce un par de diodos y durante el otro conduce el par complementario. Ambos recorridos obligan a que la corriente atraviese la carga con la misma polaridad."
  },
  {
    "n": 17,
    "section": "D · Rectificación básica en AC",
    "type": "mcq",
    "prompt": "Si la frecuencia de entrada de un puente rectificador es 60 Hz, ¿cuál es la frecuencia de la señal rectificada sin filtro?",
    "options": [
      "30 Hz",
      "60 Hz",
      "120 Hz",
      "240 Hz"
    ],
    "answer": 2,
    "feedback": [
      "No: hay dos pulsos por ciclo, no medio pulso.",
      "Eso corresponde a media onda.",
      "Correcto: onda completa produce dos pulsos por ciclo, por tanto fr=2fin=120 Hz.",
      "No: no se cuadruplica la frecuencia."
    ]
  },
  {
    "n": 18,
    "section": "D · Rectificación básica en AC",
    "type": "numeric",
    "prompt": "Un rectificador ideal de onda completa recibe Vp=10 V. Calcule VDC.",
    "unit": "V",
    "answer": 6.37,
    "tol": 0.06,
    "h1": "Para onda completa ideal: VDC=2Vp/π.",
    "h2": "Sustituya Vp=10 V.",
    "guide": "VDC=20/π≈6.37 V."
  },
  {
    "n": 19,
    "section": "D · Rectificación básica en AC",
    "type": "open",
    "prompt": "Compare media onda y onda completa respecto al aprovechamiento de la entrada, valor medio y frecuencia de pulsación.",
    "h1": "Uno aprovecha un semiciclo; el otro, ambos.",
    "h2": "Relacione esa diferencia con VDC y fr.",
    "guide": "Media onda aprovecha un semiciclo, tiene menor valor medio y fr=fin. Onda completa utiliza ambos semiciclos, tiene mayor valor medio y fr=2fin, lo que también favorece el filtrado posterior."
  },
  {
    "n": 20,
    "section": "D · Rectificación básica en AC",
    "type": "open",
    "prompt": "En un puente con segunda aproximación de silicio, ¿por qué se restan aproximadamente dos caídas de diodo al pico de entrada?",
    "h1": "Cuente cuántos diodos forman la trayectoria de conducción en cada semiciclo.",
    "h2": "Cada uno se modela con aproximadamente 0.7 V.",
    "guide": "En un puente la corriente atraviesa dos diodos en serie durante cada semiciclo. Con el modelo de 0.7 V por diodo, la pérdida aproximada es 1.4 V."
  }
];
