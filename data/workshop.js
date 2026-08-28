window.ANALOG_WORKSHOP = [
  {
    "n": 1,
    "section": "A · Fundamentos, unión PN y conceptos del diodo",
    "type": "open",
    "prompt": "Explica el funcionamiento de un diodo en un circuito de corriente continua (DC) y menciona dos funciones prácticas que puede cumplir.",
    "hint1": "Piensa en polarización y en las dos situaciones básicas: conducción y bloqueo.",
    "hint2": "Relaciona el estado del diodo con el sentido de la corriente y con aplicaciones como protección, conmutación o rectificación.",
    "guide": "Un diodo es un dispositivo semiconductor no lineal cuya conducción depende de la polarización. En DC puede permitir o bloquear una trayectoria de corriente; también se usa en protección, selección de señales, referencia de tensión y otras aplicaciones."
  },
  {
    "n": 2,
    "section": "A · Fundamentos, unión PN y conceptos del diodo",
    "type": "open",
    "prompt": "Describe qué significa la caída de voltaje en un diodo y explica por qué 0.7 V no debe considerarse un valor exacto para todo diodo de silicio.",
    "hint1": "Distingue entre dispositivo real y modelo de caída constante.",
    "hint2": "Piensa en corriente, temperatura y dispersión entre dispositivos.",
    "guide": "Durante conducción existe un voltaje ánodo-cátodo. Para cálculo manual puede aproximarse, por ejemplo, a 0.7 V en silicio, pero el valor real depende de la corriente, la temperatura y el dispositivo."
  },
  {
    "n": 3,
    "section": "A · Fundamentos, unión PN y conceptos del diodo",
    "type": "open",
    "prompt": "¿Qué es la región de agotamiento de una unión PN y cómo cambia en polarización directa e inversa?",
    "hint1": "Relaciona difusión, recombinación e iones fijos.",
    "hint2": "En directa la barrera efectiva disminuye; en inversa aumenta.",
    "guide": "La región de agotamiento aparece cerca de la unión por difusión y recombinación, dejando iones fijos. En directa se estrecha y la barrera efectiva disminuye; en inversa se ensancha y la barrera aumenta."
  },
  {
    "n": 4,
    "section": "A · Fundamentos, unión PN y conceptos del diodo",
    "type": "open",
    "prompt": "En un análisis con modelo de caída constante, ¿qué ocurre si el voltaje ánodo-cátodo disponible es menor que el valor de umbral adoptado?",
    "hint1": "Calcula V_AK=V_A-V_K.",
    "hint2": "Comprueba si la hipótesis ON puede sostener el voltaje que exige el modelo.",
    "guide": "Si V_AK no alcanza la caída adoptada por el modelo, la hipótesis ON no es consistente y el diodo debe considerarse OFF en ese análisis."
  },
  {
    "n": 5,
    "section": "A · Fundamentos, unión PN y conceptos del diodo",
    "type": "mcq",
    "prompt": "Para un diodo con V_A=0.2 V y V_K=0 V, usando el modelo de 0.7 V, ¿cuál es la hipótesis consistente?",
    "hint1": "Calcula V_AK.",
    "hint2": "Compara 0.2 V con 0.7 V.",
    "guide": "V_AK=0.2 V no alcanza la caída adoptada, por tanto el diodo se considera OFF.",
    "options": [
      "ON",
      "OFF",
      "Ruptura Zener",
      "Indeterminada"
    ],
    "answer": 1
  },
  {
    "n": 6,
    "section": "B · Diodos en AC y rectificación",
    "type": "open",
    "prompt": "Dibuja un rectificador de media onda con un diodo y explica qué efecto tiene sobre una señal senoidal de entrada.",
    "hint1": "Separa el análisis en semiciclo positivo y negativo.",
    "hint2": "En la orientación habitual, el diodo conduce un semiciclo y bloquea el otro.",
    "guide": "El rectificador de media onda deja pasar un semiciclo de la señal y bloquea el otro, produciendo una salida pulsante de una sola polaridad.",
    "diagram": "half_wave"
  },
  {
    "n": 7,
    "section": "B · Diodos en AC y rectificación",
    "type": "open",
    "prompt": "Describe cómo se obtiene rectificación de onda completa y explica por qué la corriente por la carga mantiene el mismo sentido durante ambos semiciclos.",
    "hint1": "Piensa en cambiar la trayectoria de conducción, no la polaridad de la carga.",
    "hint2": "En un puente se alternan dos pares de diodos.",
    "guide": "La red redirige ambos semiciclos para mantener la misma polaridad sobre la carga. En un puente, un par de diodos conduce en el semiciclo positivo y otro par en el negativo."
  },
  {
    "n": 8,
    "section": "B · Diodos en AC y rectificación",
    "type": "open",
    "prompt": "Explica el funcionamiento de un puente rectificador de onda completa y menciona dos ventajas frente al rectificador de media onda.",
    "hint1": "En cada semiciclo conduce un par de diodos.",
    "hint2": "Compara aprovechamiento de la señal y frecuencia de rizado.",
    "guide": "El puente aprovecha ambos semiciclos, no requiere derivación central y produce una frecuencia de rizado doble respecto a la frecuencia de entrada. Como desventaja, aparecen dos caídas directas en la trayectoria de conducción.",
    "diagram": "bridge"
  },
  {
    "n": 9,
    "section": "B · Diodos en AC y rectificación",
    "type": "open",
    "prompt": "En un circuito recortador con diodo y fuente de polarización, ¿qué parámetros determinan el nivel de recorte?",
    "hint1": "Observa orientación del diodo, referencia DC y modelo de caída.",
    "hint2": "El recorte comienza cuando el diodo entra en conducción.",
    "guide": "El nivel de recorte depende de la fuente de polarización, la orientación del diodo y la caída directa adoptada por el modelo. La resistencia limita la corriente cuando el diodo conduce.",
    "diagram": "clipper"
  },
  {
    "n": 10,
    "section": "B · Diodos en AC y rectificación",
    "type": "open",
    "prompt": "Describe el comportamiento de un diodo durante polarización inversa y explica qué puede ocurrir si se supera su tensión de ruptura.",
    "hint1": "Diferencia corriente inversa normal de ruptura.",
    "hint2": "Piensa también en la limitación de corriente.",
    "guide": "En inversa la corriente normal es pequeña. Al superar la tensión de ruptura, la corriente puede crecer intensamente; en un diodo no diseñado para operar allí puede producir daño si no se limita."
  },
  {
    "n": 11,
    "section": "C · Diodos LED",
    "type": "open",
    "prompt": "Explica cómo un LED convierte energía eléctrica en luz y qué factores determinan el color emitido.",
    "hint1": "Relaciona recombinación de portadores con emisión de fotones.",
    "hint2": "El material semiconductor determina una brecha de energía y, por tanto, una longitud de onda característica.",
    "guide": "La recombinación electrón-hueco puede liberar energía en forma de fotones. El material semiconductor, su brecha de energía y la estructura del dispositivo condicionan la longitud de onda y el color."
  },
  {
    "n": 12,
    "section": "C · Diodos LED",
    "type": "open",
    "prompt": "Compara un LED y un diodo rectificador común en términos de propósito, caída directa y límites de operación.",
    "hint1": "No te limites al símbolo.",
    "hint2": "Compara emisión luminosa, corriente/potencia, V_F y tensión inversa permitida.",
    "guide": "El rectificador se optimiza para conducción y bloqueo en aplicaciones eléctricas; el LED para emisión luminosa. Sus caídas directas, corrientes, potencias y límites inversos pueden ser muy diferentes."
  },
  {
    "n": 13,
    "section": "C · Diodos LED",
    "type": "open",
    "prompt": "¿Por qué es importante usar una resistencia en serie con un LED? ¿Qué podría suceder si se omite?",
    "hint1": "Observa la fuerte pendiente de la curva I-V del LED.",
    "hint2": "Una pequeña variación de tensión puede generar una gran variación de corriente.",
    "guide": "La resistencia absorbe parte de la tensión y limita la corriente. Sin limitación, la corriente puede aumentar por encima del valor seguro y dañar el LED o la fuente."
  },
  {
    "n": 14,
    "section": "C · Diodos LED",
    "type": "numeric",
    "prompt": "Un LED requiere 20 mA, presenta una caída de 5.6 V y se alimenta con 12 V. Calcule la resistencia limitadora necesaria.",
    "hint1": "Usa R=(V_S-V_F)/I_F.",
    "hint2": "Convierte 20 mA a 0.020 A.",
    "guide": "R=(12-5.6)/0.020=320 ohm. Un valor comercial de 330 ohm es una elección conservadora.",
    "answer": 320,
    "tolerance": 4,
    "unit": "ohm",
    "diagram": "led"
  },
  {
    "n": 15,
    "section": "C · Diodos LED",
    "type": "open",
    "prompt": "Explica qué sucede cuando un LED se conecta con polaridad inversa. ¿Puede dañarse? Justifica.",
    "hint1": "Revisa que muchos LED admiten poca tensión inversa.",
    "hint2": "Diferencia bloqueo normal de ruptura inversa.",
    "guide": "En inversa el LED bloquea inicialmente, pero muchos LED soportan poca tensión inversa. Si se supera su especificación puede entrar en ruptura y dañarse."
  },
  {
    "n": 16,
    "section": "D · Recortadores y cambiadores de nivel",
    "type": "open",
    "prompt": "¿Qué es un circuito recortador (clipper) y para qué se utiliza en el procesamiento de señales? Menciona una aplicación práctica.",
    "hint1": "Piensa en limitar máximos o mínimos.",
    "hint2": "Una aplicación es proteger entradas sensibles frente a picos.",
    "guide": "Un clipper limita zonas de una señal por encima o por debajo de ciertos niveles. Se emplea para protección, conformación de señales y limitación de amplitud."
  },
  {
    "n": 17,
    "section": "D · Recortadores y cambiadores de nivel",
    "type": "open",
    "prompt": "Describe cómo funciona un recortador de doble extremo y cómo limita los picos positivos y negativos.",
    "hint1": "Se requieren dos ramas que actúen con polaridades opuestas.",
    "hint2": "Cada rama entra en conducción cuando se alcanza su respectivo nivel.",
    "guide": "Un recortador doble utiliza dos ramas opuestas para fijar un límite superior y uno inferior. Cuando la señal intenta superar uno de esos niveles, la rama correspondiente conduce y limita la salida.",
    "diagram": "double_clipper"
  },
  {
    "n": 18,
    "section": "D · Recortadores y cambiadores de nivel",
    "type": "open",
    "prompt": "Explica el concepto de cambiador de nivel (clamper) y cómo puede modificar el nivel DC de una señal AC.",
    "hint1": "El elemento de almacenamiento es el condensador.",
    "hint2": "Idealmente se conserva aproximadamente el valor pico a pico y se desplaza la forma de onda.",
    "guide": "Un clamper combina diodo, capacitor y resistencia para añadir un desplazamiento DC a la señal. En condiciones adecuadas, mantiene aproximadamente el valor pico a pico y cambia su referencia vertical."
  },
  {
    "n": 19,
    "section": "D · Recortadores y cambiadores de nivel",
    "type": "open",
    "prompt": "Dibuja un clamper positivo y explica cómo se desplaza la señal de salida.",
    "hint1": "El extremo negativo se fija cerca de una referencia.",
    "hint2": "La tensión almacenada en el capacitor se suma a la entrada durante parte del ciclo.",
    "guide": "En un clamper positivo, el capacitor se carga durante el semiciclo apropiado y luego su tensión se suma a la señal, desplazándola hacia valores más positivos.",
    "diagram": "clamper"
  },
  {
    "n": 20,
    "section": "D · Recortadores y cambiadores de nivel",
    "type": "mcq",
    "prompt": "¿Cuál afirmación diferencia mejor un recortador y un clamper?",
    "hint1": "Uno limita amplitudes; el otro traslada el nivel.",
    "hint2": "Piensa en si el valor pico a pico cambia idealmente.",
    "guide": "El recortador elimina o limita porciones de la forma de onda; el clamper desplaza la señal y busca conservar aproximadamente su Vpp.",
    "options": [
      "Ambos hacen exactamente lo mismo",
      "El clipper limita; el clamper desplaza el nivel DC",
      "El clamper siempre rectifica onda completa",
      "El clipper siempre necesita un capacitor"
    ],
    "answer": 1
  },
  {
    "n": 21,
    "section": "E · Fundamentos adicionales y modelos del diodo",
    "type": "mcq",
    "prompt": "En un semiconductor tipo N, ¿cuál es el portador mayoritario?",
    "hint1": "El dopaje donador aporta un portador adicional.",
    "hint2": "No confundas ion fijo con portador móvil.",
    "guide": "En material tipo N, los electrones son portadores mayoritarios.",
    "options": [
      "Huecos",
      "Electrones",
      "Protones",
      "Iones positivos móviles"
    ],
    "answer": 1
  },
  {
    "n": 22,
    "section": "E · Fundamentos adicionales y modelos del diodo",
    "type": "mcq",
    "prompt": "¿Qué relación describe la ecuación de Shockley para el diodo?",
    "hint1": "Piensa en la característica I-V.",
    "hint2": "La corriente directa varía fuertemente con el voltaje.",
    "guide": "La ecuación de Shockley modela la relación exponencial entre la corriente del diodo y su voltaje.",
    "options": [
      "Relación lineal I=V/R",
      "Relación exponencial entre I_D y V_D",
      "Relación entre potencia y frecuencia",
      "Relación entre capacitancia y resistencia"
    ],
    "answer": 1
  },
  {
    "n": 23,
    "section": "E · Fundamentos adicionales y modelos del diodo",
    "type": "mcq",
    "prompt": "¿Por qué se emplean modelos ideal, caída constante, lineal por tramos y Shockley?",
    "hint1": "Todos representan el mismo dispositivo con distinta complejidad.",
    "hint2": "Piensa en compromiso entre rapidez y precisión.",
    "guide": "Cada modelo conserva un nivel distinto de detalle. Se elige según el objetivo del análisis y la precisión requerida.",
    "options": [
      "Porque son cuatro diodos diferentes",
      "Para variar la resistencia externa",
      "Para escoger un compromiso entre simplicidad y precisión",
      "Porque la ley de Ohm deja de ser válida"
    ],
    "answer": 2
  },
  {
    "n": 24,
    "section": "F · Análisis de circuitos DC y recta de carga",
    "type": "numeric",
    "prompt": "Para V_S=9 V, R=1.2 kOhm y un diodo de silicio modelado con V_D=0.7 V, calcule I_D en mA.",
    "hint1": "Primero determine V_R.",
    "hint2": "V_R=9-0.7=8.3 V.",
    "guide": "I_D=8.3/1.2 kOhm=6.92 mA.",
    "answer": 6.9167,
    "tolerance": 0.08,
    "unit": "mA",
    "diagram": "series"
  },
  {
    "n": 25,
    "section": "F · Análisis de circuitos DC y recta de carga",
    "type": "numeric",
    "prompt": "Una fuente de 12 V alimenta dos diodos de 0.7 V en serie y R=1 kOhm. Calcule la corriente.",
    "hint1": "Suma primero las dos caídas directas.",
    "hint2": "La resistencia recibe 12-1.4 V.",
    "guide": "I=(12-1.4)/1 kOhm=10.6 mA.",
    "answer": 10.6,
    "tolerance": 0.1,
    "unit": "mA",
    "diagram": "two_diode"
  },
  {
    "n": 26,
    "section": "F · Análisis de circuitos DC y recta de carga",
    "type": "numeric",
    "prompt": "Entre +10 V y -5 V hay R=2.2 kOhm y un diodo ON de 0.7 V. Calcule la corriente en mA.",
    "hint1": "La diferencia total disponible antes del diodo es 15 V.",
    "hint2": "Descuenta la caída del diodo y divide entre R.",
    "guide": "I=(10-(-5)-0.7)/2.2 kOhm=6.50 mA.",
    "answer": 6.5,
    "tolerance": 0.1,
    "unit": "mA",
    "diagram": "two_sources"
  },
  {
    "n": 27,
    "section": "F · Análisis de circuitos DC y recta de carga",
    "type": "mcq",
    "prompt": "Para la recta de carga I_D=(V_S-V_D)/R, ¿cuáles son los dos interceptos?",
    "hint1": "Evalúa primero V_D=0 y después I_D=0.",
    "hint2": "Los interceptos dependen únicamente de V_S y R del circuito externo.",
    "guide": "Los interceptos son I_D=V_S/R cuando V_D=0 y V_D=V_S cuando I_D=0.",
    "options": [
      "(V_D=0,I_D=V_S/R) y (V_D=V_S,I_D=0)",
      "(V_D=0,I_D=0) y (V_D=0.7,I_D=0)",
      "(V_D=R,I_D=V_S)",
      "No existen interceptos"
    ],
    "answer": 0,
    "diagram": "loadline"
  },
  {
    "n": 28,
    "section": "F · Análisis de circuitos DC y recta de carga",
    "type": "numeric",
    "prompt": "Con V_S=10 V, R=1 kOhm y modelo de caída constante V_D=0.7 V, estime la corriente del punto Q.",
    "hint1": "En este modelo, el punto de operación se obtiene sustituyendo V_D=0.7 V.",
    "hint2": "I_D=(V_S-V_D)/R.",
    "guide": "I_D=(10-0.7)/1 kOhm=9.3 mA.",
    "answer": 9.3,
    "tolerance": 0.08,
    "unit": "mA"
  },
  {
    "n": 29,
    "section": "G · Cálculos de rectificación y filtros",
    "type": "numeric",
    "prompt": "Una senoide tiene V_rms=12 V. Calcule su valor pico V_p.",
    "hint1": "Para una senoide, V_p=sqrt(2) V_rms.",
    "hint2": "Use sqrt(2) aproximadamente 1.414.",
    "guide": "V_p=12*sqrt(2)=16.97 V.",
    "answer": 16.9706,
    "tolerance": 0.15,
    "unit": "V"
  },
  {
    "n": 30,
    "section": "G · Cálculos de rectificación y filtros",
    "type": "numeric",
    "prompt": "Un rectificador ideal de media onda recibe V_p=10 V. Calcule el valor medio V_DC.",
    "hint1": "V_DC=V_p/pi.",
    "hint2": "Use 1/pi aproximadamente 0.318.",
    "guide": "V_DC=10/pi=3.18 V.",
    "answer": 3.1831,
    "tolerance": 0.05,
    "unit": "V",
    "diagram": "half_wave"
  },
  {
    "n": 31,
    "section": "G · Cálculos de rectificación y filtros",
    "type": "numeric",
    "prompt": "Un rectificador ideal de onda completa recibe V_p=10 V. Calcule V_DC.",
    "hint1": "V_DC=2V_p/pi.",
    "hint2": "Use 2/pi aproximadamente 0.636.",
    "guide": "V_DC=20/pi=6.37 V.",
    "answer": 6.3662,
    "tolerance": 0.08,
    "unit": "V"
  },
  {
    "n": 32,
    "section": "G · Cálculos de rectificación y filtros",
    "type": "numeric",
    "prompt": "En un puente de silicio con V_p(sec)=18 V y 0.7 V por diodo, estime el pico de salida.",
    "hint1": "En cada semiciclo conducen dos diodos.",
    "hint2": "Resta 1.4 V al pico del secundario.",
    "guide": "V_p(out) aproximadamente 18-1.4=16.6 V.",
    "answer": 16.6,
    "tolerance": 0.1,
    "unit": "V",
    "diagram": "bridge"
  },
  {
    "n": 33,
    "section": "G · Cálculos de rectificación y filtros",
    "type": "mcq",
    "prompt": "Si la entrada de un puente es 60 Hz, ¿cuál es la frecuencia de rizado antes del filtro?",
    "hint1": "La onda completa genera dos pulsos por ciclo.",
    "hint2": "f_r=2f_in.",
    "guide": "La frecuencia de rizado es 120 Hz.",
    "options": [
      "30 Hz",
      "60 Hz",
      "120 Hz",
      "240 Hz"
    ],
    "answer": 2
  },
  {
    "n": 34,
    "section": "G · Cálculos de rectificación y filtros",
    "type": "numeric",
    "prompt": "Para R_L=10 kOhm y C=10 uF, calcule la constante de tiempo tau en ms.",
    "hint1": "tau=R_L C.",
    "hint2": "10 kOhm=10000 ohm y 10 uF=10e-6 F.",
    "guide": "tau=0.1 s=100 ms.",
    "answer": 100,
    "tolerance": 1,
    "unit": "ms",
    "diagram": "filter"
  },
  {
    "n": 35,
    "section": "G · Cálculos de rectificación y filtros",
    "type": "numeric",
    "prompt": "Con I_L=10 mA, f_r=120 Hz y C=1000 uF, estime el rizado pico a pico.",
    "hint1": "V_r(pp) aproximadamente I_L/(f_r C).",
    "hint2": "1000 uF=0.001 F.",
    "guide": "V_r(pp)=0.01/(120*0.001)=0.0833 Vpp.",
    "answer": 0.08333,
    "tolerance": 0.005,
    "unit": "Vpp"
  },
  {
    "n": 36,
    "section": "G · Cálculos de rectificación y filtros",
    "type": "mcq",
    "prompt": "Si se aumenta C manteniendo la misma carga y frecuencia, ¿qué ocurre con el rizado?",
    "hint1": "Observe la expresión I_L/(f_r C).",
    "hint2": "C aparece en el denominador.",
    "guide": "Al aumentar C, el rizado disminuye.",
    "options": [
      "Aumenta",
      "Disminuye",
      "No cambia",
      "Invierte su signo"
    ],
    "answer": 1
  },
  {
    "n": 37,
    "section": "G · Cálculos de rectificación y filtros",
    "type": "open",
    "prompt": "Explica por qué el capacitor del filtro se recarga cerca de los picos y se descarga entre ellos.",
    "hint1": "Compara la tensión rectificada instantánea con v_C.",
    "hint2": "Los diodos solo conducen cuando la fuente supera la tensión almacenada más sus caídas.",
    "guide": "Cerca del pico, la tensión rectificada supera a v_C más las caídas de conducción y el capacitor se recarga. Cuando la fuente cae, los diodos se bloquean y el capacitor alimenta la carga, descargándose y originando el rizado.",
    "diagram": "filter"
  },
  {
    "n": 38,
    "section": "H · PIV, recortadores y clampers",
    "type": "open",
    "prompt": "¿Qué representa la tensión inversa de pico (PIV) y por qué debe verificarse al seleccionar un diodo rectificador?",
    "hint1": "Piensa en el diodo que permanece OFF.",
    "hint2": "La PIV es una exigencia de tensión inversa, no la salida DC.",
    "guide": "La PIV es la máxima tensión inversa que debe soportar el diodo bloqueado. El dispositivo debe seleccionarse con un margen adecuado sobre el peor caso del circuito."
  },
  {
    "n": 39,
    "section": "I · Diodo Zener e integración",
    "type": "open",
    "prompt": "Explica las tres condiciones de operación que conviene distinguir en un regulador Zener: OFF, regulación y sobrecorriente.",
    "hint1": "Compara la tensión disponible y la corriente Zener con sus límites.",
    "hint2": "En regulación debe existir I_Z positiva y dentro de su rango permitido.",
    "guide": "OFF: no se alcanza la ruptura requerida. Regulación: V_L aproximadamente V_Z e I_Z es positiva dentro del rango. Sobrecorriente: I_Z o la potencia exceden el límite seguro.",
    "diagram": "zener"
  },
  {
    "n": 40,
    "section": "I · Diodo Zener e integración",
    "type": "numeric",
    "prompt": "Para V_S=15 V, V_Z=5.1 V y R_S=500 ohm, sin carga, calcule I_Z.",
    "hint1": "I_Z=(V_S-V_Z)/R_S.",
    "hint2": "La caída en R_S es 9.9 V.",
    "guide": "I_Z=9.9/500=19.8 mA.",
    "answer": 19.8,
    "tolerance": 0.2,
    "unit": "mA",
    "diagram": "zener"
  },
  {
    "n": 41,
    "section": "I · Diodo Zener e integración",
    "type": "numeric",
    "prompt": "Con V_Z=5.1 V y R_L=200 ohm, calcule I_L si el Zener regula.",
    "hint1": "I_L=V_Z/R_L.",
    "hint2": "Convierta a mA al final.",
    "guide": "I_L=5.1/200=25.5 mA.",
    "answer": 25.5,
    "tolerance": 0.2,
    "unit": "mA"
  },
  {
    "n": 42,
    "section": "I · Diodo Zener e integración",
    "type": "numeric",
    "prompt": "En un regulador con V_S=20 V, R_S=300 ohm, V_Z=5.1 V y R_L=200 ohm, calcule I_Z suponiendo regulación.",
    "hint1": "Calcule primero I_S y luego I_L.",
    "hint2": "I_S=(20-5.1)/300; I_L=5.1/200.",
    "guide": "I_S=49.67 mA, I_L=25.5 mA, por tanto I_Z aproximadamente 24.17 mA.",
    "answer": 24.1667,
    "tolerance": 0.3,
    "unit": "mA"
  },
  {
    "n": 43,
    "section": "I · Diodo Zener e integración",
    "type": "mcq",
    "prompt": "¿Qué sucede si la carga consume tanta corriente que I_Z se aproxima a cero?",
    "hint1": "La corriente serie se divide entre carga y Zener.",
    "hint2": "Si toda la corriente disponible va a la carga, el Zener deja de sostener su tensión.",
    "guide": "El Zener sale de regulación y la tensión de salida comienza a depender de la red fuente-resistencia-carga.",
    "options": [
      "La regulación mejora",
      "El Zener sale de regulación",
      "La tensión se vuelve infinita",
      "La corriente de carga se hace cero"
    ],
    "answer": 1
  },
  {
    "n": 44,
    "section": "I · Diodo Zener e integración",
    "type": "numeric",
    "prompt": "Un puente de 60 Hz entrega V_p(out)=16.6 V a una carga de 1 kOhm con C=1000 uF. Usando I_L aproximadamente V_p/R_L y V_r(pp) aproximadamente I_L/(120 C), estime V_r(pp).",
    "hint1": "Primero estime I_L=16.6/1000 A.",
    "hint2": "Use f_r=120 Hz y C=0.001 F.",
    "guide": "I_L aproximadamente 16.6 mA; V_r(pp) aproximadamente 0.0166/(120*0.001)=0.138 Vpp.",
    "answer": 0.13833,
    "tolerance": 0.008,
    "unit": "Vpp",
    "diagram": "filter"
  },
  {
    "n": 45,
    "section": "I · Diodo Zener e integración",
    "type": "open",
    "prompt": "Un estudiante obtiene una corriente negativa después de suponer un diodo ON. ¿Qué debe hacer y por qué?",
    "hint1": "No cambies arbitrariamente el signo del resultado.",
    "hint2": "La solución matemática debe ser compatible con la dirección de corriente asumida por el modelo ON.",
    "guide": "Debe revisar la hipótesis de estado. Una corriente incompatible con el sentido supuesto indica que el modelo ON aplicado no representa el estado físico del circuito; se prueba el estado OFF y se resuelve de nuevo."
  }
];