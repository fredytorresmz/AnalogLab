window.ANALOG_QUIZZES={
  "semiconductores": [
    {
      "q": "¿Qué describe mejor a un semiconductor intrínseco?",
      "options": [
        {
          "text": "Un material dopado con impurezas donadoras.",
          "feedback": "Eso corresponde a material tipo N, no intrínseco."
        },
        {
          "text": "Un material semiconductor sin dopaje intencional.",
          "feedback": "Correcto: en el material intrínseco los portadores se originan en el propio material."
        },
        {
          "text": "Un conductor metálico de baja resistencia.",
          "feedback": "Un semiconductor no se modela como un metal; su concentración de portadores es mucho menor y controlable."
        },
        {
          "text": "Un material que nunca puede conducir.",
          "feedback": "Un semiconductor puede conducir y su conductividad cambia con temperatura y dopaje."
        }
      ],
      "answer": 1
    },
    {
      "q": "Al dopar silicio con una impureza pentavalente, el portador mayoritario esperado es:",
      "options": [
        {
          "text": "Hueco.",
          "feedback": "Una impureza pentavalente actúa como donadora; no genera huecos como portadores mayoritarios."
        },
        {
          "text": "Electrón.",
          "feedback": "Correcto: el átomo donador aporta un electrón adicional disponible para conducción."
        },
        {
          "text": "Protón.",
          "feedback": "Los protones permanecen ligados al núcleo y no son los portadores móviles del cristal."
        },
        {
          "text": "Ion positivo móvil.",
          "feedback": "Los iones del dopante quedan esencialmente fijos en la red cristalina."
        }
      ],
      "answer": 1
    },
    {
      "q": "¿Cuál afirmación sobre un hueco es más precisa?",
      "options": [
        {
          "text": "Es un protón que se desplaza por el cristal.",
          "feedback": "No. El hueco no es un protón."
        },
        {
          "text": "Es la ausencia efectiva de un electrón en un enlace y se modela como portador positivo.",
          "feedback": "Correcto."
        },
        {
          "text": "Es un electrón con carga positiva.",
          "feedback": "Un electrón siempre tiene carga negativa."
        },
        {
          "text": "Es una impureza pentavalente.",
          "feedback": "Una impureza pentavalente es donadora y se asocia con material tipo N."
        }
      ],
      "answer": 1
    },
    {
      "q": "Si aumenta la temperatura de un semiconductor intrínseco, en general:",
      "options": [
        {
          "text": "Disminuye la generación de portadores.",
          "feedback": "La energía térmica favorece la generación de pares electrón–hueco."
        },
        {
          "text": "Aumenta la generación de pares electrón–hueco.",
          "feedback": "Correcto."
        },
        {
          "text": "La banda prohibida desaparece completamente.",
          "feedback": "No es la interpretación correcta para el rango normal de operación."
        },
        {
          "text": "Se convierte automáticamente en un metal.",
          "feedback": "No."
        }
      ],
      "answer": 1
    }
  ],
  "unionpn": [
    {
      "q": "La región de agotamiento se origina principalmente por:",
      "options": [
        {
          "text": "Difusión y recombinación de portadores cerca de la unión.",
          "feedback": "Correcto: quedan iones fijos a ambos lados de la frontera."
        },
        {
          "text": "Una resistencia externa.",
          "feedback": "La resistencia externa puede limitar corriente, pero no crea la unión PN."
        },
        {
          "text": "La conexión a tierra.",
          "feedback": "La región existe incluso sin una fuente externa."
        },
        {
          "text": "La corriente de ruptura.",
          "feedback": "La región de agotamiento existe antes de la ruptura."
        }
      ],
      "answer": 0
    },
    {
      "q": "En polarización directa, la región de agotamiento tiende a:",
      "options": [
        {
          "text": "Ensanchase.",
          "feedback": "Eso corresponde a polarización inversa."
        },
        {
          "text": "Estrecharse.",
          "feedback": "Correcto: la fuente externa reduce la barrera efectiva."
        },
        {
          "text": "Mantenerse exactamente igual.",
          "feedback": "La polarización modifica la barrera."
        },
        {
          "text": "Invertir el material P y N.",
          "feedback": "La polarización no cambia el tipo de dopaje."
        }
      ],
      "answer": 1
    },
    {
      "q": "Para decidir la polarización de un diodo, conviene evaluar:",
      "options": [
        {
          "text": "\\(V_{AK}=V_A-V_K\\).",
          "feedback": "Correcto."
        },
        {
          "text": "\\(V_A+V_K\\).",
          "feedback": "La suma de potenciales no determina directamente la polarización del dispositivo."
        },
        {
          "text": "Solo \\(V_A\\).",
          "feedback": "También importa el potencial del cátodo."
        },
        {
          "text": "Solo \\(V_K\\).",
          "feedback": "También importa el potencial del ánodo."
        }
      ],
      "answer": 0
    },
    {
      "q": "En un diodo rectificador común, exceder ampliamente la tensión inversa admisible puede:",
      "options": [
        {
          "text": "No producir ningún efecto.",
          "feedback": "No: puede llevar al dispositivo a ruptura no controlada."
        },
        {
          "text": "Dañar el dispositivo si la corriente no está limitada.",
          "feedback": "Correcto."
        },
        {
          "text": "Garantizar una regulación estable.",
          "feedback": "Eso corresponde a un dispositivo diseñado para ruptura controlada, como el Zener."
        },
        {
          "text": "Hacer \\(V_D=0\\).",
          "feedback": "No."
        }
      ],
      "answer": 1
    }
  ],
  "modelos": [
    {
      "q": "En el modelo ideal, un diodo ON se sustituye por:",
      "options": [
        {
          "text": "Circuito abierto.",
          "feedback": "Eso representa el estado OFF."
        },
        {
          "text": "Cortocircuito.",
          "feedback": "Correcto: VD=0 en conducción ideal."
        },
        {
          "text": "Fuente de 0.7 V.",
          "feedback": "Eso corresponde al modelo de caída constante."
        },
        {
          "text": "Resistencia infinita.",
          "feedback": "Eso representa un circuito abierto."
        }
      ],
      "answer": 1
    },
    {
      "q": "El valor de 0.7 V usado para muchos diodos de silicio debe interpretarse como:",
      "options": [
        {
          "text": "Una constante física exacta e independiente de corriente.",
          "feedback": "No: es una aproximación de análisis."
        },
        {
          "text": "Una aproximación útil de caída directa en determinadas condiciones.",
          "feedback": "Correcto."
        },
        {
          "text": "La tensión de ruptura.",
          "feedback": "No."
        },
        {
          "text": "El valor RMS del diodo.",
          "feedback": "No."
        }
      ],
      "answer": 1
    },
    {
      "q": "El modelo lineal por tramos mejora la caída constante porque incorpora:",
      "options": [
        {
          "text": "Una resistencia dinámica.",
          "feedback": "Correcto."
        },
        {
          "text": "Una inductancia ideal.",
          "feedback": "No."
        },
        {
          "text": "Una fuente AC.",
          "feedback": "No."
        },
        {
          "text": "La tensión RMS.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "La ecuación de Shockley representa una característica principalmente:",
      "options": [
        {
          "text": "Exponencial.",
          "feedback": "Correcto."
        },
        {
          "text": "Lineal.",
          "feedback": "No."
        },
        {
          "text": "Cuadrática.",
          "feedback": "No."
        },
        {
          "text": "Independiente de temperatura.",
          "feedback": "La temperatura aparece a través de VT y otros parámetros."
        }
      ],
      "answer": 0
    }
  ],
  "dc": [
    {
      "q": "El procedimiento más robusto para una red DC con varios diodos es:",
      "options": [
        {
          "text": "Asignar 0.7 V a todos sin revisar polaridad.",
          "feedback": "Eso puede producir estados incompatibles."
        },
        {
          "text": "Suponer estados, sustituir modelos, resolver y verificar.",
          "feedback": "Correcto."
        },
        {
          "text": "Ignorar la dirección de corriente.",
          "feedback": "La dirección es esencial para comprobar la hipótesis."
        },
        {
          "text": "Usar siempre Shockley.",
          "feedback": "No siempre es necesario; depende del nivel de aproximación."
        }
      ],
      "answer": 1
    },
    {
      "q": "Si al suponer un diodo ON obtienes una corriente negativa respecto al sentido asumido:",
      "options": [
        {
          "text": "La hipótesis debe revisarse.",
          "feedback": "Correcto."
        },
        {
          "text": "El resultado siempre se acepta.",
          "feedback": "No."
        },
        {
          "text": "La resistencia cambia de signo.",
          "feedback": "No."
        },
        {
          "text": "El diodo entra automáticamente en ruptura.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Dos elementos conectados exactamente entre los mismos dos nodos comparten:",
      "options": [
        {
          "text": "La misma corriente necesariamente.",
          "feedback": "No, la corriente depende de cada rama."
        },
        {
          "text": "El mismo voltaje.",
          "feedback": "Correcto."
        },
        {
          "text": "La misma potencia.",
          "feedback": "No necesariamente."
        },
        {
          "text": "La misma resistencia.",
          "feedback": "No."
        }
      ],
      "answer": 1
    },
    {
      "q": "En un circuito con varias fuentes, antes de decidir ON/OFF es especialmente útil:",
      "options": [
        {
          "text": "Calcular los potenciales de ánodo y cátodo respecto a una referencia.",
          "feedback": "Correcto."
        },
        {
          "text": "Sumar todas las magnitudes ignorando sus signos.",
          "feedback": "Eso puede invertir la interpretación."
        },
        {
          "text": "Suponer todos los diodos ON.",
          "feedback": "Puede ser una hipótesis inicial, pero no un método suficiente."
        },
        {
          "text": "Convertir las fuentes a RMS.",
          "feedback": "Eso no corresponde a un circuito DC."
        }
      ],
      "answer": 0
    }
  ],
  "rectacarga": [
    {
      "q": "La recta de carga representa:",
      "options": [
        {
          "text": "La característica interna exacta del diodo.",
          "feedback": "Esa es la curva I–V del dispositivo."
        },
        {
          "text": "Las combinaciones VD–ID permitidas por la red externa.",
          "feedback": "Correcto."
        },
        {
          "text": "La potencia máxima del diodo.",
          "feedback": "No."
        },
        {
          "text": "La temperatura de la unión.",
          "feedback": "No."
        }
      ],
      "answer": 1
    },
    {
      "q": "Para ID=(VS-VD)/R, si VD=0 entonces:",
      "options": [
        {
          "text": "ID=VS/R.",
          "feedback": "Correcto: es el intercepto de corriente."
        },
        {
          "text": "ID=0.",
          "feedback": "Eso corresponde al otro intercepto."
        },
        {
          "text": "VD=VS.",
          "feedback": "Eso ocurre cuando ID=0."
        },
        {
          "text": "R=0.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Si aumenta R y VS permanece constante, la magnitud de la pendiente |−1/R|:",
      "options": [
        {
          "text": "Aumenta.",
          "feedback": "Al aumentar R, 1/R disminuye."
        },
        {
          "text": "Disminuye.",
          "feedback": "Correcto."
        },
        {
          "text": "No cambia.",
          "feedback": "Sí cambia."
        },
        {
          "text": "Se hace infinita.",
          "feedback": "No."
        }
      ],
      "answer": 1
    },
    {
      "q": "El punto Q se encuentra:",
      "options": [
        {
          "text": "En la intersección entre la curva del diodo y la recta de carga.",
          "feedback": "Correcto."
        },
        {
          "text": "Siempre en VD=0.7 V.",
          "feedback": "Depende del dispositivo y de la red."
        },
        {
          "text": "Siempre en ID=VS/R.",
          "feedback": "Ese es un intercepto, no el punto Q en general."
        },
        {
          "text": "En la potencia máxima.",
          "feedback": "No necesariamente."
        }
      ],
      "answer": 0
    }
  ],
  "led": [
    {
      "q": "La resistencia serie de un LED se utiliza principalmente para:",
      "options": [
        {
          "text": "Limitar la corriente.",
          "feedback": "Correcto."
        },
        {
          "text": "Aumentar la tensión de alimentación.",
          "feedback": "No."
        },
        {
          "text": "Convertir DC en AC.",
          "feedback": "No."
        },
        {
          "text": "Producir ruptura inversa.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "El color de un LED está relacionado principalmente con:",
      "options": [
        {
          "text": "El material semiconductor y su energía de transición.",
          "feedback": "Correcto."
        },
        {
          "text": "Solo la resistencia externa.",
          "feedback": "La resistencia fija corriente, no determina directamente la longitud de onda emitida."
        },
        {
          "text": "La frecuencia de la red eléctrica.",
          "feedback": "No."
        },
        {
          "text": "El tamaño de la batería.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Conectar un LED a tensión inversa superior a su especificación puede:",
      "options": [
        {
          "text": "Dañarlo.",
          "feedback": "Correcto."
        },
        {
          "text": "Aumentar su brillo normal.",
          "feedback": "No."
        },
        {
          "text": "Convertirlo en una resistencia.",
          "feedback": "No."
        },
        {
          "text": "No tener jamás efecto.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Si VS aumenta manteniendo el mismo LED y la misma resistencia, la corriente idealmente aproximada:",
      "options": [
        {
          "text": "Aumenta.",
          "feedback": "Correcto: aumenta la tensión disponible en la resistencia."
        },
        {
          "text": "Disminuye.",
          "feedback": "No."
        },
        {
          "text": "Se mantiene exacta.",
          "feedback": "No si R permanece fija."
        },
        {
          "text": "Se hace cero.",
          "feedback": "No."
        }
      ],
      "answer": 0
    }
  ],
  "acbasico": [
    {
      "q": "Para una senoide ideal, la relación correcta es:",
      "options": [
        {
          "text": "Vrms=Vp/√2.",
          "feedback": "Correcto."
        },
        {
          "text": "Vrms=Vp.",
          "feedback": "No."
        },
        {
          "text": "Vrms=2Vp.",
          "feedback": "No."
        },
        {
          "text": "Vrms=Vp/π.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "El periodo y la frecuencia se relacionan mediante:",
      "options": [
        {
          "text": "T=1/f.",
          "feedback": "Correcto."
        },
        {
          "text": "T=f.",
          "feedback": "No."
        },
        {
          "text": "T=2πf.",
          "feedback": "No."
        },
        {
          "text": "T=f².",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "El valor medio de una senoide completa ideal en un ciclo es:",
      "options": [
        {
          "text": "Cero.",
          "feedback": "Correcto: las áreas positiva y negativa se cancelan."
        },
        {
          "text": "Vp.",
          "feedback": "No."
        },
        {
          "text": "Vp/π.",
          "feedback": "Eso aparece en media onda rectificada."
        },
        {
          "text": "2Vp/π.",
          "feedback": "Eso aparece en onda completa rectificada."
        }
      ],
      "answer": 0
    },
    {
      "q": "Rectificar significa obtener sobre la carga una señal de:",
      "options": [
        {
          "text": "Polaridad unidireccional a partir de una entrada alterna.",
          "feedback": "Correcto."
        },
        {
          "text": "Frecuencia cero y amplitud constante necesariamente.",
          "feedback": "Un rectificador sin filtro todavía tiene pulsaciones."
        },
        {
          "text": "Amplitud siempre mayor que la entrada.",
          "feedback": "No."
        },
        {
          "text": "Polaridad alternante idéntica a la entrada.",
          "feedback": "Eso no sería rectificación."
        }
      ],
      "answer": 0
    }
  ],
  "mediaonda": [
    {
      "q": "En un rectificador de media onda orientado para semiciclos positivos, durante el semiciclo negativo el diodo:",
      "options": [
        {
          "text": "Conduce.",
          "feedback": "No, queda polarizado en inversa."
        },
        {
          "text": "Se bloquea.",
          "feedback": "Correcto."
        },
        {
          "text": "Duplica el voltaje.",
          "feedback": "No."
        },
        {
          "text": "Invierte la resistencia.",
          "feedback": "No."
        }
      ],
      "answer": 1
    },
    {
      "q": "El valor medio ideal de una media onda rectificada es:",
      "options": [
        {
          "text": "Vp/π.",
          "feedback": "Correcto."
        },
        {
          "text": "2Vp/π.",
          "feedback": "Eso corresponde a onda completa."
        },
        {
          "text": "Vp/√2.",
          "feedback": "Ese es el RMS de la senoide original."
        },
        {
          "text": "0.",
          "feedback": "La señal rectificada ya no tiene áreas simétricas positiva y negativa."
        }
      ],
      "answer": 0
    },
    {
      "q": "La frecuencia de rizado sin filtro de un rectificador de media onda es:",
      "options": [
        {
          "text": "fin.",
          "feedback": "Correcto: aparece un pulso por ciclo."
        },
        {
          "text": "2fin.",
          "feedback": "Eso corresponde a onda completa."
        },
        {
          "text": "fin/2.",
          "feedback": "No."
        },
        {
          "text": "0.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Con el modelo de caída constante, durante conducción la salida se aproxima a:",
      "options": [
        {
          "text": "vi−VD.",
          "feedback": "Correcto."
        },
        {
          "text": "vi+VD.",
          "feedback": "No."
        },
        {
          "text": "VD−vi.",
          "feedback": "No para la orientación usual."
        },
        {
          "text": "0 siempre.",
          "feedback": "Solo sería cercana a cero cuando el diodo está OFF."
        }
      ],
      "answer": 0
    }
  ],
  "ondacompleta": [
    {
      "q": "En un puente rectificador, durante cada semiciclo conducen normalmente:",
      "options": [
        {
          "text": "Dos diodos.",
          "feedback": "Correcto."
        },
        {
          "text": "Uno.",
          "feedback": "Eso no completa la trayectoria del puente."
        },
        {
          "text": "Los cuatro.",
          "feedback": "No simultáneamente en operación normal."
        },
        {
          "text": "Ninguno.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Con diodos de silicio y modelo de 0.7 V, el pico de salida de un puente se aproxima a:",
      "options": [
        {
          "text": "Vp(in)−1.4 V.",
          "feedback": "Correcto: hay dos diodos en serie en la trayectoria."
        },
        {
          "text": "Vp(in)−0.7 V.",
          "feedback": "Eso sería una sola caída."
        },
        {
          "text": "Vp(in)+1.4 V.",
          "feedback": "No."
        },
        {
          "text": "Vp(in)/2.",
          "feedback": "No en un puente normal."
        }
      ],
      "answer": 0
    },
    {
      "q": "El valor medio ideal de una onda completa rectificada es:",
      "options": [
        {
          "text": "2Vp/π.",
          "feedback": "Correcto."
        },
        {
          "text": "Vp/π.",
          "feedback": "Eso corresponde a media onda."
        },
        {
          "text": "0.",
          "feedback": "No."
        },
        {
          "text": "Vp/√2.",
          "feedback": "No es el valor medio rectificado."
        }
      ],
      "answer": 0
    },
    {
      "q": "Si fin=60 Hz, la frecuencia de rizado sin filtro en onda completa es:",
      "options": [
        {
          "text": "120 Hz.",
          "feedback": "Correcto."
        },
        {
          "text": "60 Hz.",
          "feedback": "Eso sería media onda."
        },
        {
          "text": "30 Hz.",
          "feedback": "No."
        },
        {
          "text": "0 Hz.",
          "feedback": "No."
        }
      ],
      "answer": 0
    }
  ],
  "filtro": [
    {
      "q": "En un filtro capacitivo, el condensador se recarga principalmente cuando:",
      "options": [
        {
          "text": "La señal rectificada supera la tensión del condensador más las caídas de conducción.",
          "feedback": "Correcto."
        },
        {
          "text": "La señal rectificada es cero.",
          "feedback": "Entonces normalmente el capacitor se descarga en la carga."
        },
        {
          "text": "El diodo está fuertemente inverso.",
          "feedback": "No."
        },
        {
          "text": "RL es infinita.",
          "feedback": "No es la condición de recarga."
        }
      ],
      "answer": 0
    },
    {
      "q": "Entre picos de la señal rectificada, el condensador:",
      "options": [
        {
          "text": "Se descarga a través de la carga.",
          "feedback": "Correcto."
        },
        {
          "text": "Se carga siempre desde la fuente.",
          "feedback": "No, los diodos pueden estar bloqueados."
        },
        {
          "text": "Se comporta como una fuente AC ideal.",
          "feedback": "No."
        },
        {
          "text": "Invierte su polaridad en cada ciclo.",
          "feedback": "No en el filtro convencional."
        }
      ],
      "answer": 0
    },
    {
      "q": "Si aumenta C manteniendo lo demás constante, el rizado aproximado:",
      "options": [
        {
          "text": "Disminuye.",
          "feedback": "Correcto: Vr(pp)≈IL/(frC)."
        },
        {
          "text": "Aumenta.",
          "feedback": "No."
        },
        {
          "text": "No cambia.",
          "feedback": "Sí depende de C."
        },
        {
          "text": "Cambia de signo.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "En onda completa a 60 Hz, el valor de fr usado en Vr(pp)≈IL/(frC) es:",
      "options": [
        {
          "text": "120 Hz.",
          "feedback": "Correcto."
        },
        {
          "text": "60 Hz.",
          "feedback": "Eso sería media onda."
        },
        {
          "text": "30 Hz.",
          "feedback": "No."
        },
        {
          "text": "1 Hz.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Si se mantiene la carga y se aumenta considerablemente C, ¿qué combinación describe mejor el efecto?",
      "options": [
        {
          "text": "Disminuye el rizado y puede aumentar la corriente pico de recarga.",
          "feedback": "Correcto: la tensión cae menos entre picos, pero la recarga puede concentrarse en un intervalo más corto."
        },
        {
          "text": "Aumentan el rizado y el tiempo de conducción.",
          "feedback": "No. El rizado normalmente disminuye."
        },
        {
          "text": "No cambia el rizado porque la frecuencia es constante.",
          "feedback": "El rizado depende también de C."
        },
        {
          "text": "El capacitor deja de descargarse completamente.",
          "feedback": "Siempre existe descarga si la carga consume corriente."
        }
      ],
      "answer": 0
    },
    {
      "q": "En una descarga libre RC, el tiempo necesario para pasar de V0 a VC se obtiene con:",
      "options": [
        {
          "text": "t=RC ln(V0/VC).",
          "feedback": "Correcto, se obtiene despejando la ecuación exponencial."
        },
        {
          "text": "t=VC/(RC).",
          "feedback": "No conserva ni la forma exponencial ni las unidades."
        },
        {
          "text": "t=1/(RC).",
          "feedback": "Eso tiene unidades de frecuencia, no de tiempo."
        },
        {
          "text": "t=V0·VC.",
          "feedback": "No."
        }
      ],
      "answer": 0
    }
  ],
  "recortadores": [
    {
      "q": "La función de un recortador es principalmente:",
      "options": [
        {
          "text": "Limitar regiones de una forma de onda por encima o debajo de un nivel.",
          "feedback": "Correcto."
        },
        {
          "text": "Desplazar toda la señal manteniendo la forma sin recorte.",
          "feedback": "Eso describe un clamper ideal."
        },
        {
          "text": "Rectificar siempre onda completa.",
          "feedback": "No."
        },
        {
          "text": "Amplificar linealmente.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Agregar una fuente DC al recortador permite:",
      "options": [
        {
          "text": "Cambiar el nivel de recorte.",
          "feedback": "Correcto."
        },
        {
          "text": "Cambiar la frecuencia de entrada.",
          "feedback": "No."
        },
        {
          "text": "Eliminar la necesidad de resistencia.",
          "feedback": "No."
        },
        {
          "text": "Convertirlo en transformador.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Un recortador doble puede establecer:",
      "options": [
        {
          "text": "Un límite superior y uno inferior.",
          "feedback": "Correcto."
        },
        {
          "text": "Solo un valor RMS.",
          "feedback": "No."
        },
        {
          "text": "Una frecuencia de rizado.",
          "feedback": "No."
        },
        {
          "text": "Una ganancia de tensión lineal.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Una aplicación común de recorte es:",
      "options": [
        {
          "text": "Protección de entradas frente a picos.",
          "feedback": "Correcto."
        },
        {
          "text": "Generación de potencia mecánica.",
          "feedback": "No."
        },
        {
          "text": "Transformación de impedancia ideal.",
          "feedback": "No."
        },
        {
          "text": "Aumento ilimitado de corriente.",
          "feedback": "No."
        }
      ],
      "answer": 0
    }
  ],
  "clampers": [
    {
      "q": "Un clamper ideal busca principalmente:",
      "options": [
        {
          "text": "Desplazar el nivel DC conservando aproximadamente Vpp.",
          "feedback": "Correcto."
        },
        {
          "text": "Eliminar los picos de la señal.",
          "feedback": "Eso corresponde a recorte."
        },
        {
          "text": "Duplicar la frecuencia.",
          "feedback": "No."
        },
        {
          "text": "Anular toda componente AC.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "El componente de almacenamiento clave en un clamper básico es:",
      "options": [
        {
          "text": "Condensador.",
          "feedback": "Correcto."
        },
        {
          "text": "Transformador.",
          "feedback": "No."
        },
        {
          "text": "Fusible.",
          "feedback": "No."
        },
        {
          "text": "Inductor exclusivamente.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Para un buen clamper, suele buscarse:",
      "options": [
        {
          "text": "RLC mucho mayor que el periodo.",
          "feedback": "Correcto: así el capacitor pierde poca carga entre ciclos."
        },
        {
          "text": "RLC=0.",
          "feedback": "No."
        },
        {
          "text": "RLC mucho menor que el periodo.",
          "feedback": "Eso produciría descarga significativa."
        },
        {
          "text": "C=0.",
          "feedback": "Sin capacitor no existe el mecanismo de fijación."
        }
      ],
      "answer": 0
    },
    {
      "q": "La diferencia conceptual principal entre clipper y clamper es:",
      "options": [
        {
          "text": "El clipper limita amplitudes; el clamper desplaza el nivel.",
          "feedback": "Correcto."
        },
        {
          "text": "Son exactamente iguales.",
          "feedback": "No."
        },
        {
          "text": "El clamper siempre elimina medio ciclo.",
          "feedback": "No."
        },
        {
          "text": "El clipper siempre usa capacitor.",
          "feedback": "No."
        }
      ],
      "answer": 0
    }
  ],
  "zener": [
    {
      "q": "El Zener se diseña para operar de forma controlada principalmente en:",
      "options": [
        {
          "text": "Ruptura inversa.",
          "feedback": "Correcto."
        },
        {
          "text": "Conducción directa ideal solamente.",
          "feedback": "No."
        },
        {
          "text": "Circuito abierto permanente.",
          "feedback": "No."
        },
        {
          "text": "Zona sin polarización.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Cuando un regulador Zener está regulando, la carga idealmente cumple:",
      "options": [
        {
          "text": "VL≈VZ.",
          "feedback": "Correcto."
        },
        {
          "text": "VL=0.",
          "feedback": "No."
        },
        {
          "text": "VL=VS siempre.",
          "feedback": "La resistencia serie y el Zener fijan la salida."
        },
        {
          "text": "IZ=0 necesariamente.",
          "feedback": "Si IZ=0, el Zener está en el límite o fuera de regulación."
        }
      ],
      "answer": 0
    },
    {
      "q": "En un regulador Zener con carga:",
      "options": [
        {
          "text": "IS=IZ+IL.",
          "feedback": "Correcto: KCL en el nodo."
        },
        {
          "text": "IZ=IS+IL.",
          "feedback": "No."
        },
        {
          "text": "IL=IS+IZ.",
          "feedback": "No."
        },
        {
          "text": "IS=0.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Si la carga exige tanta corriente que IZ cae a cero:",
      "options": [
        {
          "text": "El Zener puede salir de regulación.",
          "feedback": "Correcto."
        },
        {
          "text": "La regulación mejora.",
          "feedback": "No."
        },
        {
          "text": "VZ aumenta sin límite.",
          "feedback": "No."
        },
        {
          "text": "La resistencia serie deja de importar.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Antes de usar \\(V_L\\approx V_Z\\), el primer paso correcto es:",
      "options": [
        {
          "text": "Calcular el voltaje del nodo sin imponer aún la regulación.",
          "feedback": "Correcto: primero se verifica si el circuito puede alcanzar la tensión Zener."
        },
        {
          "text": "Suponer siempre que el Zener está ON.",
          "feedback": "Ese es precisamente uno de los errores más frecuentes."
        },
        {
          "text": "Ignorar \\(R_S\\) porque solo limita corriente.",
          "feedback": "\\(R_S\\) es esencial en el análisis del punto de operación."
        },
        {
          "text": "Calcular únicamente la potencia del Zener.",
          "feedback": "La potencia se verifica después de conocer el estado del circuito."
        }
      ],
      "answer": 0
    },
    {
      "q": "Si \\(V_{TH}<V_Z\\) en el circuito equivalente sin Zener, ¿qué conclusión básica se toma en el modelo introductorio?",
      "options": [
        {
          "text": "El Zener permanece OFF y la salida es el valor del divisor.",
          "feedback": "Correcto."
        },
        {
          "text": "El Zener regula exactamente en \\(V_Z\\).",
          "feedback": "No, no se alcanza la tensión necesaria para entrar en regulación."
        },
        {
          "text": "La corriente del Zener es máxima.",
          "feedback": "No."
        },
        {
          "text": "La carga queda desconectada.",
          "feedback": "La carga sigue formando parte del divisor."
        }
      ],
      "answer": 0
    }
  ],
  "zenercasos": [
    {
      "q": "Con Vi, VZ y RS fijos, si RL disminuye, ¿qué ocurre mientras el Zener sigue regulando?",
      "options": [
        {
          "text": "IL aumenta e IZ disminuye.",
          "feedback": "Correcto: IS es casi fija y se reparte entre carga y Zener."
        },
        {
          "text": "IL disminuye e IZ aumenta.",
          "feedback": "Es el comportamiento opuesto."
        },
        {
          "text": "IS se hace cero.",
          "feedback": "No."
        },
        {
          "text": "VZ aumenta indefinidamente.",
          "feedback": "No dentro del modelo de regulación."
        }
      ],
      "answer": 0
    },
    {
      "q": "El valor máximo de RS está asociado principalmente con:",
      "options": [
        {
          "text": "Mantener al menos IZ,min en la condición más exigente de carga/entrada.",
          "feedback": "Correcto."
        },
        {
          "text": "Evitar que el capacitor explote.",
          "feedback": "No es la relación que define RS,max."
        },
        {
          "text": "Hacer IL igual a cero.",
          "feedback": "No."
        },
        {
          "text": "Aumentar VZ.",
          "feedback": "VZ es propiedad del dispositivo y su punto de operación."
        }
      ],
      "answer": 0
    },
    {
      "q": "Para determinar Vi,min con carga fija se usa:",
      "options": [
        {
          "text": "Vi,min=VZ+RS(IL+IZ,min).",
          "feedback": "Correcto."
        },
        {
          "text": "Vi,min=VZ-RSIL.",
          "feedback": "No."
        },
        {
          "text": "Vi,min=IL/RS.",
          "feedback": "No tiene unidades de voltaje correctamente."
        },
        {
          "text": "Vi,min=VZ solamente.",
          "feedback": "Falta la caída necesaria en RS."
        }
      ],
      "answer": 0
    },
    {
      "q": "En carga muy ligera o circuito sin carga, el riesgo principal del regulador Zener en paralelo es:",
      "options": [
        {
          "text": "Que una fracción mayor de IS circule por el Zener y aumente su disipación.",
          "feedback": "Correcto."
        },
        {
          "text": "Que IZ siempre sea cero.",
          "feedback": "Ocurre lo contrario si la fuente mantiene tensión suficiente."
        },
        {
          "text": "Que VZ se convierta en 0 V.",
          "feedback": "No."
        },
        {
          "text": "Que RS deje de conducir.",
          "feedback": "No necesariamente."
        }
      ],
      "answer": 0
    }
  ],
  "reactivos": [
    {
      "q": "En un circuito RC de carga, después de un tiempo igual a una constante de tiempo, el capacitor alcanza aproximadamente:",
      "options": [
        {
          "text": "36.8 % del valor final.",
          "feedback": "Ese porcentaje corresponde a lo que falta por alcanzar durante la carga."
        },
        {
          "text": "63.2 % del valor final.",
          "feedback": "Correcto: en t=τ, 1-e^{-1}≈0.632."
        },
        {
          "text": "100 % exactamente.",
          "feedback": "La respuesta exponencial se aproxima asintóticamente al valor final."
        },
        {
          "text": "5 % del valor final.",
          "feedback": "No corresponde a una constante de tiempo."
        }
      ],
      "answer": 1
    },
    {
      "q": "Si R permanece fija y C aumenta diez veces, la constante de tiempo:",
      "options": [
        {
          "text": "Disminuye diez veces.",
          "feedback": "τ=RC: aumenta con C."
        },
        {
          "text": "No cambia.",
          "feedback": "τ depende directamente de C."
        },
        {
          "text": "Aumenta diez veces.",
          "feedback": "Correcto."
        },
        {
          "text": "Se hace cero.",
          "feedback": "No."
        }
      ],
      "answer": 2
    },
    {
      "q": "En un transformador ideal reductor, si Np/Ns=8 y Vp=120 V rms, Vs es:",
      "options": [
        {
          "text": "960 V rms.",
          "feedback": "Eso invierte la relación."
        },
        {
          "text": "15 V rms.",
          "feedback": "Correcto: Vs=120/8."
        },
        {
          "text": "8 V rms.",
          "feedback": "La relación 8 es adimensional, no el voltaje de salida."
        },
        {
          "text": "120 V rms.",
          "feedback": "Solo ocurriría para relación 1:1."
        }
      ],
      "answer": 1
    },
    {
      "q": "Durante la descarga ideal de un capacitor por una resistencia, su voltaje:",
      "options": [
        {
          "text": "Cae linealmente hasta cero.",
          "feedback": "La respuesta RC es exponencial."
        },
        {
          "text": "Sigue una exponencial decreciente.",
          "feedback": "Correcto."
        },
        {
          "text": "Cambia instantáneamente a cero.",
          "feedback": "El voltaje de un capacitor ideal no cambia instantáneamente."
        },
        {
          "text": "Aumenta indefinidamente.",
          "feedback": "No."
        }
      ],
      "answer": 1
    }
  ],
  "datasheet": [
    {
      "q": "¿Cuál es la interpretación correcta de una tabla titulada <i>Absolute Maximum Ratings</i>?",
      "options": [
        {
          "text": "Son valores recomendados para operar continuamente sin margen.",
          "feedback": "No. Son límites que no deben excederse; el diseño debe dejar margen."
        },
        {
          "text": "Son límites del dispositivo y no equivalen necesariamente a condiciones normales de operación.",
          "feedback": "Correcto. Deben combinarse con condiciones eléctricas y térmicas."
        },
        {
          "text": "Son únicamente valores típicos de laboratorio.",
          "feedback": "No. La palabra maximum indica límites, no valores típicos."
        },
        {
          "text": "Solo importan si el circuito usa AC.",
          "feedback": "No. Aplican según el parámetro independientemente de que la señal sea AC o DC."
        }
      ],
      "answer": 1
    },
    {
      "q": "En el 1N4736A, los 37 mA asociados a \\(V_Z\\) deben interpretarse como:",
      "options": [
        {
          "text": "La única corriente a la que el Zener puede funcionar.",
          "feedback": "No. Es la corriente de prueba usada para especificar la tensión Zener."
        },
        {
          "text": "La corriente de prueba para la especificación de \\(V_Z\\).",
          "feedback": "Correcto."
        },
        {
          "text": "La corriente máxima de pulso.",
          "feedback": "No. Esa es otra especificación."
        },
        {
          "text": "La corriente de carga obligatoria.",
          "feedback": "No corresponde a la carga externa."
        }
      ],
      "answer": 1
    },
    {
      "q": "¿Por qué no debe usarse \\(I_{ZSM}\\) como si fuera la corriente continua máxima del Zener?",
      "options": [
        {
          "text": "Porque corresponde a una condición de pico no repetitiva.",
          "feedback": "Correcto. La corriente continua debe verificarse con potencia, temperatura y condiciones de operación."
        },
        {
          "text": "Porque está expresada en voltios.",
          "feedback": "No, es una corriente."
        },
        {
          "text": "Porque solo existe en polarización directa.",
          "feedback": "No."
        },
        {
          "text": "Porque es siempre menor que \\(I_Z\\).",
          "feedback": "No necesariamente."
        }
      ],
      "answer": 0
    },
    {
      "q": "Un valor \\(V_F(max)=1.1V\\) especificado a 1 A en el 1N4007 indica que:",
      "options": [
        {
          "text": "Todo diodo de silicio cae exactamente 1.1 V.",
          "feedback": "No. Depende del dispositivo, corriente y temperatura."
        },
        {
          "text": "La caída directa tiene una especificación máxima bajo esa condición de prueba.",
          "feedback": "Correcto."
        },
        {
          "text": "El modelo de aula de 0.7 V es falso y nunca debe usarse.",
          "feedback": "No. Es una aproximación útil para análisis, pero no reemplaza la hoja de datos en diseño."
        },
        {
          "text": "1.1 V es la tensión inversa máxima.",
          "feedback": "No."
        }
      ],
      "answer": 1
    },
    {
      "q": "En un datasheet BJT, \\(h_{FE}\\) debe leerse junto con:",
      "options": [
        {
          "text": "las condiciones de \\(I_C\\), \\(V_{CE}\\) y temperatura asociadas.",
          "feedback": "Correcto."
        },
        {
          "text": "solo el nombre comercial.",
          "feedback": "No."
        },
        {
          "text": "la tensión de red eléctrica.",
          "feedback": "No."
        },
        {
          "text": "ninguna condición; es constante.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "\\(V_{CE(sat)}\\) en una hoja de datos normalmente se especifica con:",
      "options": [
        {
          "text": "una pareja concreta \\(I_C\\) e \\(I_B\\).",
          "feedback": "Correcto."
        },
        {
          "text": "solo VCC.",
          "feedback": "No."
        },
        {
          "text": "la frecuencia de red.",
          "feedback": "No."
        },
        {
          "text": "IB=0 siempre.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Un BJT de potencia indica \\(P_{TOT}\\) a \\(T_C=25^\\circ C\\). ¿Qué debes concluir?",
      "options": [
        {
          "text": "La capacidad de potencia depende de mantener la carcasa en la condición térmica indicada.",
          "feedback": "Correcto."
        },
        {
          "text": "No necesita disipador.",
          "feedback": "No."
        },
        {
          "text": "Puede trabajar a esa potencia a cualquier temperatura.",
          "feedback": "No."
        },
        {
          "text": "PTOT es corriente.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "En un Darlington integrado, ¿qué conviene buscar además de \\(h_{FE}\\)?",
      "options": [
        {
          "text": "\\(V_{BE(on)}\\), \\(V_{CE(sat)}\\), condiciones de corriente, potencia y esquema interno.",
          "feedback": "Correcto."
        },
        {
          "text": "Solo el color del encapsulado.",
          "feedback": "No."
        },
        {
          "text": "Únicamente el nombre TIP.",
          "feedback": "No."
        },
        {
          "text": "Nada más porque es equivalente ideal a un BJT.",
          "feedback": "No."
        }
      ],
      "answer": 0
    }
  ],
  "zeneravanzado": [
    {
      "q": "Un regulador está en regulación. Se disminuye \\(R_L\\) mientras \\(V_i\\), \\(R_S\\) y \\(V_Z\\) permanecen fijos. ¿Cuál secuencia describe mejor lo que ocurre?",
      "options": [
        {
          "text": "\\(I_L\\uparrow\\), \\(I_Z\\downarrow\\), y puede perderse regulación.",
          "feedback": "Correcto. La corriente serie es aproximadamente fija y se redistribuye entre carga y Zener."
        },
        {
          "text": "\\(I_L\\downarrow\\), \\(I_Z\\uparrow\\), y siempre mejora la regulación.",
          "feedback": "Es la tendencia opuesta."
        },
        {
          "text": "\\(I_S\\) se hace cero inmediatamente.",
          "feedback": "No. Mientras exista tensión suficiente, la resistencia serie sigue conduciendo."
        },
        {
          "text": "\\(V_Z\\) aumenta proporcionalmente con la corriente de carga.",
          "feedback": "No dentro del modelo de regulación usado para el análisis."
        }
      ],
      "answer": 0
    },
    {
      "q": "Para calcular \\(R_{S,min}\\) se utiliza \\(I_{Z,max}\\). ¿Cuál es la razón física?",
      "options": [
        {
          "text": "Una resistencia menor produce mayor corriente total y puede llevar al Zener al límite superior.",
          "feedback": "Correcto. Por eso el límite inferior de resistencia se obtiene con la corriente máxima admisible."
        },
        {
          "text": "Una resistencia menor siempre reduce la corriente Zener.",
          "feedback": "Ocurre lo contrario."
        },
        {
          "text": "\\(I_{Z,max}\\) solo sirve para calcular \\(R_L\\).",
          "feedback": "También determina el límite inferior de la resistencia serie."
        },
        {
          "text": "Es una convención matemática sin relación con el circuito.",
          "feedback": "Se deriva directamente de \\(I_S=(V_i-V_Z)/R_S\\)."
        }
      ],
      "answer": 0
    },
    {
      "q": "Con carga fija, ¿qué condición define \\(V_{i,min}\\) si se exige \\(I_Z\\ge I_{Z,min}\\)?",
      "options": [
        {
          "text": "\\(I_S=I_L+I_{Z,min}\\).",
          "feedback": "Correcto: es la frontera inferior para conservar el margen de regulación."
        },
        {
          "text": "\\(I_Z=I_{Z,max}\\).",
          "feedback": "Esa condición corresponde al extremo superior."
        },
        {
          "text": "\\(I_L=0\\).",
          "feedback": "Eso representa carga abierta."
        },
        {
          "text": "\\(V_i=V_Z\\) siempre.",
          "feedback": "Además de \\(V_Z\\), debe existir caída en \\(R_S\\) para suministrar corriente."
        }
      ],
      "answer": 0
    },
    {
      "q": "Un datasheet indica \\(I_{ZT}=37\\,\\mathrm{mA}\\). ¿Cuál interpretación es correcta?",
      "options": [
        {
          "text": "Es la corriente de prueba bajo la cual se especifica la tensión Zener correspondiente.",
          "feedback": "Correcto."
        },
        {
          "text": "Es necesariamente la corriente máxima continua.",
          "feedback": "No. Deben consultarse potencia, límites de corriente y condiciones térmicas."
        },
        {
          "text": "Es la corriente mínima universal de cualquier diseño.",
          "feedback": "No. El criterio de corriente mínima depende del dispositivo y del diseño."
        },
        {
          "text": "Es la corriente de la carga externa.",
          "feedback": "No corresponde a \\(I_L\\)."
        }
      ],
      "answer": 0
    },
    {
      "q": "En el ejemplo base, la carga se desconecta sin cambiar \\(V_i\\) ni \\(R_S\\). ¿Qué variable se vuelve especialmente crítica?",
      "options": [
        {
          "text": "La potencia del Zener, porque una fracción mayor de \\(I_S\\) circula por él.",
          "feedback": "Correcto. Con carga abierta, \\(I_L\\to0\\) y aumenta la corriente disponible para el Zener."
        },
        {
          "text": "La corriente de carga, porque aumenta hasta infinito.",
          "feedback": "Con carga abierta, \\(I_L\\) tiende a cero."
        },
        {
          "text": "La tensión del transformador, que necesariamente cae a cero.",
          "feedback": "No está implicado por la desconexión de la carga."
        },
        {
          "text": "El valor nominal de \\(V_Z\\) deja de existir.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Un estudiante verifica que \\(V_{TH}>V_Z\\) y concluye que el circuito ya está correctamente regulado. ¿Qué falta?",
      "options": [
        {
          "text": "Calcular \\(I_Z\\) y comprobar que cumple los márgenes de corriente y potencia.",
          "feedback": "Correcto. \\(V_{TH}>V_Z\\) solo indica que la hipótesis de conducción es posible."
        },
        {
          "text": "Nada: esa comparación garantiza cualquier condición de diseño.",
          "feedback": "No. La corriente puede ser insuficiente o excesiva."
        },
        {
          "text": "Cambiar siempre \\(R_S\\) por cero ohmios.",
          "feedback": "Eso eliminaría la limitación de corriente."
        },
        {
          "text": "Hacer \\(R_L\\) infinita obligatoriamente.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Una fuente rectificada con capacitor alimenta el regulador Zener. ¿Qué condición es más útil para comprobar que el rizado no provoque pérdida de regulación?",
      "options": [
        {
          "text": "Comparar \\(V_{C,min}\\) con el \\(V_{i,min}\\) requerido por el regulador.",
          "feedback": "Correcto. El valle es el peor punto para mantener la corriente mínima del Zener."
        },
        {
          "text": "Usar únicamente el valor pico del capacitor.",
          "feedback": "El pico no representa el peor caso para mantener regulación."
        },
        {
          "text": "Ignorar el rizado porque el Zener siempre lo elimina por completo.",
          "feedback": "Si el valle es demasiado bajo, el Zener puede salir de regulación."
        },
        {
          "text": "Comparar únicamente la frecuencia de red con \\(V_Z\\).",
          "feedback": "No son magnitudes comparables."
        }
      ],
      "answer": 0
    },
    {
      "q": "En una etapa de referencia Zener se calcula \\(P_Z=0.32\\,\\mathrm{W}\\) y \\(P_{R_S}=0.99\\,\\mathrm{W}\\). ¿Cuál conclusión es técnicamente correcta?",
      "options": [
        {
          "text": "Debe revisarse la selección térmica de ambos componentes; la resistencia serie puede ser tan crítica como el Zener.",
          "feedback": "Correcto."
        },
        {
          "text": "Solo importa la potencia del Zener.",
          "feedback": "La resistencia también disipa potencia real."
        },
        {
          "text": "Una resistencia de \\(1/4\\,\\mathrm{W}\\) es automáticamente suficiente.",
          "feedback": "No: el cálculo supera ampliamente \\(0.25\\,\\mathrm{W}\\)."
        },
        {
          "text": "La potencia no depende de la tensión de entrada.",
          "feedback": "Sí depende del punto de operación."
        }
      ],
      "answer": 0
    },
    {
      "q": "Al elegir un valor comercial de \\(R_S\\) dentro del rango permitido, ¿qué comprobación no debe omitirse?",
      "options": [
        {
          "text": "Recalcular \\(I_Z\\), \\(P_Z\\) y la potencia de \\(R_S\\).",
          "feedback": "Correcto: el valor comercial puede mover el punto de operación."
        },
        {
          "text": "Suponer que cualquier valor intermedio sirve sin verificación.",
          "feedback": "Siempre hay que recalcular el punto real de operación."
        },
        {
          "text": "Reemplazar \\(V_Z\\) por cero.",
          "feedback": "No."
        },
        {
          "text": "Eliminar la carga para simplificar.",
          "feedback": "La carga influye directamente en \\(I_Z\\)."
        }
      ],
      "answer": 0
    },
    {
      "q": "En el caso \\(R_L\\) variable, ¿por qué se obtiene \\(R_{L,min}\\) y no \\(R_{L,max}\\) como condición crítica de regulación?",
      "options": [
        {
          "text": "Porque la carga más pesada ocurre con \\(R_L\\) pequeña, aumentando \\(I_L\\) y reduciendo \\(I_Z\\).",
          "feedback": "Correcto."
        },
        {
          "text": "Porque una \\(R_L\\) grande siempre apaga el Zener.",
          "feedback": "Ocurre lo contrario: una carga más ligera suele dejar más corriente al Zener."
        },
        {
          "text": "Porque \\(R_L\\) no afecta la corriente de carga.",
          "feedback": "Sí la afecta: \\(I_L=V_Z/R_L\\)."
        },
        {
          "text": "Porque la carga variable solo modifica la potencia del transformador.",
          "feedback": "La variable crítica del método es el reparto de corriente en el nodo."
        }
      ],
      "answer": 0
    },
    {
      "q": "Si \\(V_i\\) aumenta pero \\(R_S\\), \\(R_L\\) y \\(V_Z\\) permanecen fijos en regulación, ¿qué magnitud permanece aproximadamente constante?",
      "options": [
        {
          "text": "\\(I_L\\).",
          "feedback": "Correcto: mientras \\(V_L\\approx V_Z\\), la corriente de carga es aproximadamente \\(V_Z/R_L\\)."
        },
        {
          "text": "\\(I_S\\).",
          "feedback": "No, \\(I_S\\) aumenta al subir \\(V_i\\)."
        },
        {
          "text": "\\(P_{R_S}\\) igual a cero.",
          "feedback": "No."
        },
        {
          "text": "\\(I_Z\\) siempre igual a \\(I_{Z,min}\\).",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "¿Cuál afirmación describe mejor el papel de \\(R_S\\) en un regulador Zener?",
      "options": [
        {
          "text": "Limita la corriente total disponible y fija el margen de operación del Zener.",
          "feedback": "Correcto."
        },
        {
          "text": "Solo sirve para bajar voltaje y no afecta la corriente.",
          "feedback": "Sí afecta la corriente: de hecho la limita."
        },
        {
          "text": "Hace innecesario el datasheet.",
          "feedback": "El datasheet sigue siendo indispensable para potencia, tolerancia y límites."
        },
        {
          "text": "Se puede quitar si el Zener es de suficiente potencia.",
          "feedback": "Sin resistencia serie se perdería el control de corriente."
        }
      ],
      "answer": 0
    }
  ],
  "bjt-dc": [
    {
      "q": "En un BJT NPN en región activa, ¿qué combinación de polarización describe las dos uniones?",
      "options": [
        {
          "text": "Base-emisor directa y base-colector inversa.",
          "feedback": "Correcto: es la condición fundamental de la región activa."
        },
        {
          "text": "Ambas uniones en directa.",
          "feedback": "Esa condición corresponde a saturación."
        },
        {
          "text": "Ambas uniones en inversa.",
          "feedback": "Esa condición se asocia al corte."
        },
        {
          "text": "Base-emisor inversa y base-colector directa.",
          "feedback": "No corresponde a la región activa de un NPN."
        }
      ],
      "answer": 0
    },
    {
      "q": "Si \\(I_C=4.5\\,\\mathrm{mA}\\) e \\(I_B=30\\,\\mu\\mathrm{A}\\), ¿cuál es aproximadamente \\(\\beta_{DC}\\)?",
      "options": [
        {
          "text": "15",
          "feedback": "Revisa las unidades: 4.5 mA / 30 µA."
        },
        {
          "text": "150",
          "feedback": "Correcto."
        },
        {
          "text": "0.0067",
          "feedback": "Ese valor no corresponde a beta."
        },
        {
          "text": "4500",
          "feedback": "No: convierte ambas corrientes a las mismas unidades."
        }
      ],
      "answer": 1
    },
    {
      "q": "¿Cuál relación de corrientes es siempre la referencia básica por KCL en un BJT?",
      "options": [
        {
          "text": "\\(I_E=I_C+I_B\\).",
          "feedback": "Correcto."
        },
        {
          "text": "\\(I_C=I_E+I_B\\).",
          "feedback": "La corriente de emisor es la suma."
        },
        {
          "text": "\\(I_B=I_C+I_E\\).",
          "feedback": "No."
        },
        {
          "text": "\\(I_C=I_E\\) exactamente en todos los casos.",
          "feedback": "Es una aproximación útil en algunos contextos, no la identidad KCL exacta."
        }
      ],
      "answer": 0
    },
    {
      "q": "Un cálculo en activa predice \\(I_C^*=12\\,\\mathrm{mA}\\), pero la malla de colector solo permite \\(5\\,\\mathrm{mA}\\). ¿Cuál es la conclusión correcta?",
      "options": [
        {
          "text": "El transistor está necesariamente en corte.",
          "feedback": "No: hay excitación de base."
        },
        {
          "text": "El transistor se encuentra en saturación y la malla de colector limita la corriente.",
          "feedback": "Correcto."
        },
        {
          "text": "Debe circular 12 mA porque \\(\\beta\\) siempre domina el circuito.",
          "feedback": "No. En saturación, \\(I_C=\\beta I_B\\) deja de ser la ecuación de operación."
        },
        {
          "text": "\\(V_{CE}\\) aumenta indefinidamente.",
          "feedback": "No."
        }
      ],
      "answer": 1
    },
    {
      "q": "¿Qué efecto produce disminuir \\(R_B\\) manteniendo las demás variables iguales?",
      "options": [
        {
          "text": "Reduce \\(I_B\\) y lleva hacia corte.",
          "feedback": "Ocurre lo contrario."
        },
        {
          "text": "Aumenta \\(I_B\\) y puede desplazar el transistor hacia saturación.",
          "feedback": "Correcto."
        },
        {
          "text": "No cambia ninguna corriente.",
          "feedback": "RB forma parte directa de la malla de base."
        },
        {
          "text": "Solo modifica \\(V_{CC}\\).",
          "feedback": "No."
        }
      ],
      "answer": 1
    },
    {
      "q": "¿Qué representa \\(h_{FE}\\) en una hoja de datos BJT?",
      "options": [
        {
          "text": "Una ganancia DC de corriente especificada bajo condiciones de prueba.",
          "feedback": "Correcto."
        },
        {
          "text": "La potencia máxima del transistor.",
          "feedback": "No."
        },
        {
          "text": "La tensión exacta base-emisor.",
          "feedback": "No."
        },
        {
          "text": "Una constante idéntica para todos los transistores del mismo número.",
          "feedback": "No: suele aparecer como rango y depende de la condición de prueba."
        }
      ],
      "answer": 0
    },
    {
      "q": "En corte ideal para conmutación, el BJT se aproxima a:",
      "options": [
        {
          "text": "Un interruptor abierto.",
          "feedback": "Correcto."
        },
        {
          "text": "Un cortocircuito colector-emisor.",
          "feedback": "Eso se aproxima más a saturación."
        },
        {
          "text": "Una fuente de corriente ideal.",
          "feedback": "No."
        },
        {
          "text": "Un Zener.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "En saturación, ¿cuál afirmación es más importante?",
      "options": [
        {
          "text": "Siempre se cumple \\(I_C=\\beta I_B\\) con exactitud.",
          "feedback": "No. Esa relación deja de ser la ecuación de operación."
        },
        {
          "text": "Las dos uniones están polarizadas en directa y \\(V_{CE}\\) es pequeño.",
          "feedback": "Correcto."
        },
        {
          "text": "La corriente de base es cero.",
          "feedback": "No."
        },
        {
          "text": "El transistor está listo para amplificación lineal de máxima calidad.",
          "feedback": "No; la saturación es un extremo de conmutación."
        }
      ],
      "answer": 1
    },
    {
      "q": "Para una recta de carga con \\(V_{CC}=12\\,\\mathrm{V}\\) y \\(R_C=2\\,\\mathrm{k}\\Omega\\), ¿cuál es el intercepto aproximado sobre el eje de \\(I_C\\) cuando \\(V_{CE}=0\\)?",
      "options": [
        {
          "text": "2 mA",
          "feedback": "Revisa \\(I_C=V_{CC}/R_C\\)."
        },
        {
          "text": "6 mA",
          "feedback": "Correcto."
        },
        {
          "text": "12 mA",
          "feedback": "No."
        },
        {
          "text": "24 mA",
          "feedback": "No."
        }
      ],
      "answer": 1
    },
    {
      "q": "¿Qué significa el punto Q en análisis DC?",
      "options": [
        {
          "text": "El par \\((V_{CEQ},I_{CQ})\\) que define el punto de operación en reposo.",
          "feedback": "Correcto."
        },
        {
          "text": "La corriente máxima absoluta del datasheet.",
          "feedback": "No."
        },
        {
          "text": "La frecuencia de corte del transistor.",
          "feedback": "No."
        },
        {
          "text": "Solo el valor de \\(\\beta\\).",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Para el 2N3904, que un datasheet indique \\(h_{FE}=100\\) a 300 a cierta condición significa que:",
      "options": [
        {
          "text": "Puede asumirse 300 en cualquier diseño.",
          "feedback": "No: es un rango bajo una condición de prueba."
        },
        {
          "text": "La ganancia DC varía entre dispositivos/condiciones y debe diseñarse con margen.",
          "feedback": "Correcto."
        },
        {
          "text": "La corriente de colector siempre es 100–300 mA.",
          "feedback": "No."
        },
        {
          "text": "\\(V_{CE(sat)}\\) vale entre 100 y 300 V.",
          "feedback": "No."
        }
      ],
      "answer": 1
    },
    {
      "q": "¿Por qué la base del BJT se representa físicamente mucho más delgada que las otras regiones?",
      "options": [
        {
          "text": "Para favorecer que la mayoría de portadores inyectados atraviesen la base y alcancen el colector.",
          "feedback": "Correcto."
        },
        {
          "text": "Para bloquear completamente la corriente de colector.",
          "feedback": "No."
        },
        {
          "text": "Solo por razones mecánicas del encapsulado.",
          "feedback": "No."
        },
        {
          "text": "Para eliminar la unión base-emisor.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Si \\(\\beta=99\\), ¿cuánto vale aproximadamente \\(\\alpha\\)?",
      "options": [
        {
          "text": "0.50",
          "feedback": "No."
        },
        {
          "text": "0.99",
          "feedback": "Correcto: \\(\\alpha=\\beta/(\\beta+1)=99/100\\)."
        },
        {
          "text": "99",
          "feedback": "Alpha es menor que 1."
        },
        {
          "text": "100",
          "feedback": "No."
        }
      ],
      "answer": 1
    },
    {
      "q": "¿Cuál es la mejor interpretación de \\(V_{BE}\\approx0.7\\,\\mathrm{V}\\) en este capítulo?",
      "options": [
        {
          "text": "Una aproximación de análisis DC para un BJT de silicio conduciendo.",
          "feedback": "Correcto."
        },
        {
          "text": "Una constante física exacta para cualquier transistor y temperatura.",
          "feedback": "No."
        },
        {
          "text": "El valor de saturación \\(V_{CE}\\).",
          "feedback": "No."
        },
        {
          "text": "La tensión máxima absoluta de base-emisor.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "En un NPN se supone activa y el cálculo produce \\(V_C<V_B\\). ¿Qué indica esta verificación?",
      "options": [
        {
          "text": "La unión B-C ya no está en inversa; la hipótesis activa debe rechazarse.",
          "feedback": "Correcto. Para activa directa en un NPN la unión base-colector debe estar polarizada en inversa."
        },
        {
          "text": "El transistor está necesariamente en corte.",
          "feedback": "No: con B-E directa, el resultado apunta hacia saturación, no corte."
        },
        {
          "text": "Debe aumentarse β hasta que VC sea mayor.",
          "feedback": "β es un parámetro del transistor, no una variable que se ajuste arbitrariamente."
        },
        {
          "text": "No importa mientras VBE sea 0.7 V.",
          "feedback": "Sí importa: hay que verificar ambas uniones."
        }
      ],
      "answer": 0
    },
    {
      "q": "Para una malla con \\(R_C\\) y \\(R_E\\), usando \\(I_E\\approx I_C\\), ¿cuál es la recta de carga aproximada?",
      "options": [
        {
          "text": "\\(V_{CE}=V_{CC}-I_C(R_C+R_E)\\).",
          "feedback": "Correcto."
        },
        {
          "text": "\\(V_{CE}=V_{CC}+I_C(R_C+R_E)\\).",
          "feedback": "El signo de las caídas es incorrecto."
        },
        {
          "text": "\\(I_C=β/R_C\\).",
          "feedback": "No representa la malla de salida."
        },
        {
          "text": "\\(V_{CE}=V_{BE}\\) siempre.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "¿Qué representa físicamente el intercepto \\(I_C=V_{CC}/R_C\\) de una recta de carga simple?",
      "options": [
        {
          "text": "La corriente aproximada máxima de la malla cuando VCE se aproxima a cero.",
          "feedback": "Correcto."
        },
        {
          "text": "La corriente de base máxima del datasheet.",
          "feedback": "No."
        },
        {
          "text": "La corriente de fuga en corte.",
          "feedback": "No."
        },
        {
          "text": "El valor exacto de IC en cualquier región.",
          "feedback": "No; es un extremo de la recta de carga."
        }
      ],
      "answer": 0
    },
    {
      "q": "En una polarización con divisor, ¿qué ventaja tiene sustituir R1–R2 por su equivalente de Thévenin?",
      "options": [
        {
          "text": "Permite incluir de forma directa la carga que ejerce la corriente de base sobre el divisor.",
          "feedback": "Correcto."
        },
        {
          "text": "Hace que β deje de existir físicamente.",
          "feedback": "No."
        },
        {
          "text": "Garantiza saturación.",
          "feedback": "No."
        },
        {
          "text": "Convierte el BJT en un FET.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Si una red con resistencia de emisor experimenta un aumento de IE, ¿qué mecanismo ayuda a estabilizarla?",
      "options": [
        {
          "text": "Aumenta VE y, con VB aproximadamente fijo, disminuye VBE, oponiéndose al aumento de corriente.",
          "feedback": "Correcto: es realimentación negativa de DC."
        },
        {
          "text": "Aumenta VBE sin límite.",
          "feedback": "No."
        },
        {
          "text": "RE desaparece del circuito.",
          "feedback": "No."
        },
        {
          "text": "β se hace infinito.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "En saturación, el cociente IC/IB calculado con las corrientes reales de conmutación se denomina con frecuencia:",
      "options": [
        {
          "text": "β forzado.",
          "feedback": "Correcto."
        },
        {
          "text": "α térmico.",
          "feedback": "No."
        },
        {
          "text": "hFE máximo garantizado.",
          "feedback": "No; el β forzado lo impone el diseño."
        },
        {
          "text": "resistencia de Early.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Un 2N3904 tiene hFE=100–300 especificado a IC=10 mA y VCE=1 V. ¿Qué conclusión es correcta?",
      "options": [
        {
          "text": "El rango corresponde a esa condición de prueba; hFE puede ser diferente en otros puntos de operación.",
          "feedback": "Correcto."
        },
        {
          "text": "Todos los 2N3904 tienen hFE exactamente 200.",
          "feedback": "No."
        },
        {
          "text": "300 es el valor que siempre debe usarse en diseño.",
          "feedback": "No."
        },
        {
          "text": "hFE es una tensión de saturación.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "En el método de suposición de región, ¿qué debe hacerse si el modelo activo predice una corriente de colector mayor que la permitida por la recta de carga?",
      "options": [
        {
          "text": "Rechazar la hipótesis activa y analizar saturación.",
          "feedback": "Correcto."
        },
        {
          "text": "Aceptar el valor porque βIB siempre domina.",
          "feedback": "No: la red externa limita la corriente."
        },
        {
          "text": "Declarar corte.",
          "feedback": "No si existe fuerte excitación B-E."
        },
        {
          "text": "Cambiar las unidades hasta que coincidan.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "En una polarización fija, si β se duplica y la corriente de base permanece prácticamente igual, ¿qué tendencia tiene IC mientras el transistor siga en activa?",
      "options": [
        {
          "text": "Tiende a duplicarse.",
          "feedback": "Correcto, de ahí la sensibilidad de la polarización fija a β."
        },
        {
          "text": "Permanece exactamente igual.",
          "feedback": "No."
        },
        {
          "text": "Se reduce a la mitad.",
          "feedback": "No."
        },
        {
          "text": "Se hace cero.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "¿Cuál es la mejor secuencia de trabajo para un circuito BJT desconocido en DC?",
      "options": [
        {
          "text": "Identificar topología y polaridades → suponer región → aplicar KVL/KCL → verificar región y límites.",
          "feedback": "Correcto."
        },
        {
          "text": "Aplicar IC=βIB sin revisar ninguna tensión.",
          "feedback": "Ese procedimiento falla en corte y saturación."
        },
        {
          "text": "Buscar primero un valor típico de β y terminar el ejercicio.",
          "feedback": "No es suficiente."
        },
        {
          "text": "Suponer saturación en todos los circuitos.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "¿Cuál ecuación es exacta por KCL independientemente de si el transistor está en activa o saturación, respetando los sentidos definidos?",
      "options": [
        {
          "text": "\\(I_E=I_C+I_B\\).",
          "feedback": "Correcto."
        },
        {
          "text": "\\(I_C=βI_B\\).",
          "feedback": "Esta es una relación de región activa, no universal."
        },
        {
          "text": "\\(V_{CE}=0.2V\\).",
          "feedback": "Es una aproximación de saturación."
        },
        {
          "text": "\\(V_{BE}=0.7V\\) exactamente.",
          "feedback": "Es un modelo aproximado."
        }
      ],
      "answer": 0
    },
    {
      "q": "En el punto Q, la letra Q proviene de la idea de condición:",
      "options": [
        {
          "text": "quiescente o de reposo DC.",
          "feedback": "Correcto."
        },
        {
          "text": "cuántica exclusivamente.",
          "feedback": "No en este contexto."
        },
        {
          "text": "de ruptura.",
          "feedback": "No."
        },
        {
          "text": "de carga máxima.",
          "feedback": "No."
        }
      ],
      "answer": 0
    }
  ],
  "bjt-dc2": [
    {
      "q": "Un Darlington discreto tiene \\(\\beta_1=80\\) y \\(\\beta_2=120\\). ¿Cuál afirmación es más precisa?",
      "options": [
        {
          "text": "La ganancia compuesta simple es \\(\\beta_1\\beta_2+\\beta_1+\\beta_2\\), aproximadamente el producto para ganancias grandes.",
          "feedback": "Correcto."
        },
        {
          "text": "La ganancia siempre es exactamente 200.",
          "feedback": "No se suman simplemente las ganancias."
        },
        {
          "text": "Solo importa \\(\\beta_2\\).",
          "feedback": "La primera etapa amplifica la excitación de la segunda."
        },
        {
          "text": "El Darlington elimina la necesidad de verificar saturación.",
          "feedback": "La región y la malla de salida siempre deben verificarse."
        }
      ],
      "answer": 0
    },
    {
      "q": "¿Qué diferencia práctica importante tiene un Darlington respecto a un BJT individual?",
      "options": [
        {
          "text": "Normalmente presenta dos caídas B-E y puede tener mayor \\(V_{CE(sat)}\\).",
          "feedback": "Correcto."
        },
        {
          "text": "Siempre tiene menor tensión B-E.",
          "feedback": "No; hay dos uniones B-E."
        },
        {
          "text": "No disipa potencia.",
          "feedback": "Sí disipa potencia."
        },
        {
          "text": "No necesita resistencia de base.",
          "feedback": "La excitación de base debe diseñarse."
        }
      ],
      "answer": 0
    },
    {
      "q": "En una red acoplada directamente, la base de la segunda etapa toma corriente del colector de la primera. ¿Qué implica?",
      "options": [
        {
          "text": "El punto DC de la primera etapa puede desplazarse por la carga de la segunda.",
          "feedback": "Correcto."
        },
        {
          "text": "Las etapas siempre son independientes.",
          "feedback": "Eso sería más propio de un capacitor que bloquee DC."
        },
        {
          "text": "La segunda etapa nunca puede saturarse.",
          "feedback": "Sí puede."
        },
        {
          "text": "La corriente de base de Q2 es siempre cero.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "En un espejo de corriente simple con transistores iguales y \\(\\beta\\) finita, ¿por qué \\(I_O<I_{REF}\\)?",
      "options": [
        {
          "text": "Porque parte de \\(I_{REF}\\) alimenta las dos corrientes de base.",
          "feedback": "Correcto."
        },
        {
          "text": "Porque Q2 está necesariamente en corte.",
          "feedback": "No."
        },
        {
          "text": "Porque VBE siempre es cero.",
          "feedback": "No."
        },
        {
          "text": "Porque la resistencia no conduce.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "¿Qué condición puede hacer fallar el comportamiento de un espejo de corriente aunque los BJT estén bien emparejados?",
      "options": [
        {
          "text": "Un voltaje de salida tan bajo que Q2 entre en saturación.",
          "feedback": "Correcto."
        },
        {
          "text": "Aumentar ligeramente \\(\\beta\\).",
          "feedback": "Eso reduce el error de base."
        },
        {
          "text": "Usar una resistencia de referencia.",
          "feedback": "Es necesaria para fijar la corriente."
        },
        {
          "text": "Conectar las bases entre sí.",
          "feedback": "Es parte de la topología."
        }
      ],
      "answer": 0
    },
    {
      "q": "Para un driver BJT de relé, ¿por qué se usa con frecuencia un \\(\\beta\\) forzado menor que el \\(h_{FE}\\) típico?",
      "options": [
        {
          "text": "Para garantizar margen de saturación sin depender de una ganancia activa favorable.",
          "feedback": "Correcto."
        },
        {
          "text": "Porque hFE se mide en voltios.",
          "feedback": "Es una ganancia adimensional."
        },
        {
          "text": "Porque la bobina no consume corriente.",
          "feedback": "Sí consume."
        },
        {
          "text": "Porque así se elimina el diodo flyback.",
          "feedback": "Son problemas diferentes."
        }
      ],
      "answer": 0
    },
    {
      "q": "¿Cuál es la función principal del diodo flyback en una bobina DC?",
      "options": [
        {
          "text": "Dar una trayectoria a la corriente inductiva al apagar el transistor y limitar la sobretensión.",
          "feedback": "Correcto."
        },
        {
          "text": "Aumentar la frecuencia del motor.",
          "feedback": "No."
        },
        {
          "text": "Duplicar la corriente de base.",
          "feedback": "No."
        },
        {
          "text": "Convertir el BJT en PNP.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Un motor consume 0.3 A nominales y 1.2 A de stall. ¿Qué corriente debe considerarse al verificar el semiconductor?",
      "options": [
        {
          "text": "También la corriente de stall/arranque, porque puede ser la condición crítica.",
          "feedback": "Correcto."
        },
        {
          "text": "Solo 0.3 A.",
          "feedback": "Eso puede subdimensionar el diseño."
        },
        {
          "text": "La mitad de 0.3 A.",
          "feedback": "No."
        },
        {
          "text": "Ninguna; el motor limita solo.",
          "feedback": "El transistor debe soportar la condición de carga."
        }
      ],
      "answer": 0
    },
    {
      "q": "Un TIP122 tiene \\(h_{FE}\\ge1000\\) en ciertas condiciones activas. ¿Puede usarse 1000 directamente como \\(\\beta_F\\) garantizado de saturación?",
      "options": [
        {
          "text": "No; deben consultarse las condiciones específicas de \\(V_{CE(sat)}\\) e \\(I_B\\).",
          "feedback": "Correcto."
        },
        {
          "text": "Sí, en cualquier corriente.",
          "feedback": "No."
        },
        {
          "text": "Sí, si VCC es 5 V.",
          "feedback": "La fuente no cambia la naturaleza de la especificación."
        },
        {
          "text": "Solo si no hay carga.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "En un puente H, ¿qué combinación produce shoot-through en una rama?",
      "options": [
        {
          "text": "El transistor high-side y low-side de la misma rama encendidos simultáneamente.",
          "feedback": "Correcto."
        },
        {
          "text": "Los dos transistores diagonales.",
          "feedback": "Esa es la combinación usada para hacer circular corriente por el motor."
        },
        {
          "text": "Los cuatro OFF.",
          "feedback": "Eso deja el motor libre."
        },
        {
          "text": "Un solo transistor ON.",
          "feedback": "No crea por sí solo un corto de fuente a tierra."
        }
      ],
      "answer": 0
    },
    {
      "q": "En avance de un puente H BJT conducen dos transistores saturados. ¿Cuál aproximación de \\(V_M\\) es apropiada?",
      "options": [
        {
          "text": "\\(V_M\\approx V_{CC}-V_{CE(sat),alto}-V_{CE(sat),bajo}\\).",
          "feedback": "Correcto."
        },
        {
          "text": "\\(V_M=0\\) siempre.",
          "feedback": "No."
        },
        {
          "text": "\\(V_M=2V_{CC}\\).",
          "feedback": "No."
        },
        {
          "text": "\\(V_M=V_{BE}\\).",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "¿Por qué un GPIO de 3.3 V no debe conectarse sin análisis a la base de un PNP high-side de 12 V?",
      "options": [
        {
          "text": "Porque los niveles y corrientes de base requieren una interfaz adecuada y pueden exceder el dominio del GPIO.",
          "feedback": "Correcto."
        },
        {
          "text": "Porque los PNP no tienen base.",
          "feedback": "Sí tienen."
        },
        {
          "text": "Porque 3.3 V siempre destruye un PNP.",
          "feedback": "No es una regla universal; el problema es la interfaz y referencia de niveles."
        },
        {
          "text": "Porque un puente H no usa transistores.",
          "feedback": "Sí puede usar BJT."
        }
      ],
      "answer": 0
    },
    {
      "q": "Para un BJT en DC, \\(P_Q\\approx V_{CE}I_C\\). ¿Qué demuestra esto?",
      "options": [
        {
          "text": "Una corriente moderada puede producir mucha potencia si VCE también es grande.",
          "feedback": "Correcto."
        },
        {
          "text": "La potencia solo depende de IB.",
          "feedback": "No."
        },
        {
          "text": "La potencia siempre es cero en región activa.",
          "feedback": "No."
        },
        {
          "text": "IC(max) basta para verificar térmica.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "Un TIP41C indica \\(P_{TOT}=65W\\) a \\(T_C=25^\\circ C\\). ¿Qué interpretación es correcta?",
      "options": [
        {
          "text": "Es una especificación condicionada a la temperatura de la carcasa; no equivale a 65 W sin disipación térmica.",
          "feedback": "Correcto."
        },
        {
          "text": "Puede disipar 65 W siempre en protoboard.",
          "feedback": "No."
        },
        {
          "text": "Es la potencia que consume la base.",
          "feedback": "No."
        },
        {
          "text": "Es la potencia mínima.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "¿Qué es el SOA de un transistor de potencia?",
      "options": [
        {
          "text": "La región de combinaciones de tensión, corriente y duración permitidas de forma segura.",
          "feedback": "Correcto."
        },
        {
          "text": "Solo la corriente máxima absoluta.",
          "feedback": "Es más amplio."
        },
        {
          "text": "El pinout.",
          "feedback": "No."
        },
        {
          "text": "El valor de beta típico.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "En un Darlington, ¿por qué \\(V_{BE(on)}\\) puede ser mayor que 1.4 V en un datasheet real?",
      "options": [
        {
          "text": "Porque las uniones no tienen una caída fija de 0.7 V; depende de corriente, temperatura y dispositivo.",
          "feedback": "Correcto."
        },
        {
          "text": "Porque el datasheet está equivocado.",
          "feedback": "No."
        },
        {
          "text": "Porque no existen dos uniones.",
          "feedback": "Sí existen."
        },
        {
          "text": "Porque hFE tiene unidades de voltio.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "¿Qué debe hacerse antes de usar un BJT de potencia como sustituto de otro?",
      "options": [
        {
          "text": "Comparar polaridad, pinout, tensiones, corriente, potencia/SOA, ganancia, saturación, térmica y encapsulado.",
          "feedback": "Correcto."
        },
        {
          "text": "Comparar solo el nombre.",
          "feedback": "Insuficiente."
        },
        {
          "text": "Comparar solo IC(max).",
          "feedback": "Insuficiente."
        },
        {
          "text": "Elegir siempre el de mayor tamaño.",
          "feedback": "El tamaño no garantiza compatibilidad."
        }
      ],
      "answer": 0
    },
    {
      "q": "¿Cuál afirmación separa correctamente DC II del futuro módulo AC?",
      "options": [
        {
          "text": "Aquí se estudian niveles y regiones DC; la ganancia de pequeña señal y respuesta en frecuencia se dejan para AC.",
          "feedback": "Correcto."
        },
        {
          "text": "Aquí ya se calcula Av con re.",
          "feedback": "Eso corresponde al análisis AC posterior."
        },
        {
          "text": "Aquí se ignora el punto Q.",
          "feedback": "Sigue siendo importante."
        },
        {
          "text": "Aquí no se usan datasheets.",
          "feedback": "Sí se usan."
        }
      ],
      "answer": 0
    },
    {
      "q": "Una bobina almacena energía \\(W=\\tfrac12LI^2\\). ¿Qué ocurre al abrir bruscamente el circuito?",
      "options": [
        {
          "text": "El inductor intenta mantener la corriente y puede elevar mucho su tensión.",
          "feedback": "Correcto."
        },
        {
          "text": "La energía desaparece instantáneamente.",
          "feedback": "No."
        },
        {
          "text": "La corriente cambia instantáneamente sin tensión.",
          "feedback": "Contradice v=Ldi/dt."
        },
        {
          "text": "El BJT se vuelve Zener por definición.",
          "feedback": "No."
        }
      ],
      "answer": 0
    },
    {
      "q": "¿Qué significa que un BJT de potencia cumpla IC(max) pero quede fuera del SOA?",
      "options": [
        {
          "text": "Que la combinación real de corriente y tensión puede producir estrés o disipación no segura.",
          "feedback": "Correcto."
        },
        {
          "text": "Que el datasheet no sirve.",
          "feedback": "No."
        },
        {
          "text": "Que IC(max) es una corriente mínima.",
          "feedback": "No."
        },
        {
          "text": "Que el transistor está necesariamente en corte.",
          "feedback": "No."
        }
      ],
      "answer": 0
    }
  ]
};

window.ANALOG_QUIZZES=window.ANALOG_QUIZZES||{};window.ANALOG_QUIZZES["bjt-ac"]=[{"q":"¿Para qué se calcula primero el punto Q?","options":[{"text":"Para obtener las corrientes DC que determinan los parámetros incrementales","feedback":"El punto de operación determina IEQ, ICQ y la validez del modelo incremental."},{"text":"Para conocer la frecuencia exacta de corte","feedback":"Revisa: El punto de operación determina IEQ, ICQ y la validez del modelo incremental."},{"text":"Para eliminar el transistor","feedback":"Revisa: El punto de operación determina IEQ, ICQ y la validez del modelo incremental."}],"answer":0},{"q":"Al obtener el equivalente AC de una fuente ideal independiente de tensión DC constante:","options":[{"text":"Se sustituye por un circuito abierto","feedback":"Revisa: Su variación AC es cero, por eso se representa como tierra de AC."},{"text":"Se duplica su voltaje","feedback":"Revisa: Su variación AC es cero, por eso se representa como tierra de AC."},{"text":"Se sustituye por un cortocircuito","feedback":"Su variación AC es cero, por eso se representa como tierra de AC."}],"answer":2},{"q":"En el análisis AC de banda media, un capacitor de acoplamiento suficientemente grande:","options":[{"text":"Se trata como una batería","feedback":"Revisa: La aproximación requiere |XC| mucho menor que las resistencias relevantes."},{"text":"Puede aproximarse por un cortocircuito","feedback":"La aproximación requiere |XC| mucho menor que las resistencias relevantes."},{"text":"Se abre siempre","feedback":"Revisa: La aproximación requiere |XC| mucho menor que las resistencias relevantes."}],"answer":1},{"q":"Si no hay bypass en RE, esa resistencia:","options":[{"text":"Permanece en el equivalente AC","feedback":"RE no puenteada produce degeneración de emisor."},{"text":"Desaparece siempre","feedback":"Revisa: RE no puenteada produce degeneración de emisor."},{"text":"Se vuelve una fuente de corriente","feedback":"Revisa: RE no puenteada produce degeneración de emisor."}],"answer":0},{"q":"Si IEQ=2 mA y VT≈26 mV, ¿cuánto vale re?","options":[{"text":"13 kΩ","feedback":"Revisa: 26mV/2mA=13Ω."},{"text":"52 Ω","feedback":"Revisa: 26mV/2mA=13Ω."},{"text":"13 Ω","feedback":"26mV/2mA=13Ω."}],"answer":2},{"q":"Si IEQ aumenta y la temperatura se mantiene, re:","options":[{"text":"No cambia","feedback":"Revisa: La resistencia re es inversamente proporcional a IEQ."},{"text":"Disminuye","feedback":"La resistencia re es inversamente proporcional a IEQ."},{"text":"Aumenta","feedback":"Revisa: La resistencia re es inversamente proporcional a IEQ."}],"answer":1},{"q":"El signo negativo de la ganancia CE indica:","options":[{"text":"Inversión de fase","feedback":"En emisor común la salida de banda media invierte la fase respecto a la entrada."},{"text":"Ganancia de corriente negativa","feedback":"Revisa: En emisor común la salida de banda media invierte la fase respecto a la entrada."},{"text":"Voltaje DC negativo en toda la etapa","feedback":"Revisa: En emisor común la salida de banda media invierte la fase respecto a la entrada."}],"answer":0},{"q":"En CE con emisor bypassado y carga RL, la resistencia efectiva de colector es:","options":[{"text":"RC + RL siempre","feedback":"Revisa: La carga conectada por C2 aparece en paralelo en AC."},{"text":"Solamente RC sin importar RL","feedback":"Revisa: La carga conectada por C2 aparece en paralelo en AC."},{"text":"RC en paralelo con RL","feedback":"La carga conectada por C2 aparece en paralelo en AC."}],"answer":2},{"q":"Con RC=RL=2 kΩ, ¿cuál es RC||RL?","options":[{"text":"2 kΩ","feedback":"Revisa: Dos resistencias iguales en paralelo equivalen a la mitad."},{"text":"1 kΩ","feedback":"Dos resistencias iguales en paralelo equivalen a la mitad."},{"text":"4 kΩ","feedback":"Revisa: Dos resistencias iguales en paralelo equivalen a la mitad."}],"answer":1},{"q":"¿Qué cambio suele provocar aumentar RE sin bypass?","options":[{"text":"Menor magnitud de ganancia y mayor estabilidad","feedback":"La resistencia de emisor sin bypass introduce realimentación negativa local."},{"text":"Ganancia infinita","feedback":"Revisa: La resistencia de emisor sin bypass introduce realimentación negativa local."},{"text":"La desaparición de la polarización DC","feedback":"Revisa: La resistencia de emisor sin bypass introduce realimentación negativa local."}],"answer":0},{"q":"¿Qué parámetro es característico del híbrido-π?","options":[{"text":"Frecuencia PWM del 555","feedback":"Revisa: La fuente controlada del modelo π suele expresarse como gm vπ."},{"text":"Resistencia térmica del disipador","feedback":"Revisa: La fuente controlada del modelo π suele expresarse como gm vπ."},{"text":"Transconductancia gm","feedback":"La fuente controlada del modelo π suele expresarse como gm vπ."}],"answer":2},{"q":"La relación gm≈ICQ/VT utiliza:","options":[{"text":"La corriente alterna de la carga","feedback":"Revisa: gm se evalúa en el punto de operación."},{"text":"La corriente DC de colector","feedback":"gm se evalúa en el punto de operación."},{"text":"La corriente de arranque del motor","feedback":"Revisa: gm se evalúa en el punto de operación."}],"answer":1},{"q":"¿Qué representa rπ?","options":[{"text":"Resistencia incremental de entrada base-emisor","feedback":"El híbrido-π utiliza rπ entre base y emisor."},{"text":"Resistencia externa RC","feedback":"Revisa: El híbrido-π utiliza rπ entre base y emisor."},{"text":"Resistencia del motor","feedback":"Revisa: El híbrido-π utiliza rπ entre base y emisor."}],"answer":0},{"q":"Si βac=100 y gm=0.05 S, rπ vale:","options":[{"text":"5 Ω","feedback":"Revisa: rπ=β/gm=100/0.05=2000Ω."},{"text":"0.5 Ω","feedback":"Revisa: rπ=β/gm=100/0.05=2000Ω."},{"text":"2 kΩ","feedback":"rπ=β/gm=100/0.05=2000Ω."}],"answer":2},{"q":"¿Cuál etapa tiene Av cercana a +1 y alta impedancia de entrada?","options":[{"text":"Rectificador de media onda","feedback":"Revisa: El seguidor de emisor adapta impedancias y presenta Av ligeramente menor que 1."},{"text":"Colector común (seguidor de emisor)","feedback":"El seguidor de emisor adapta impedancias y presenta Av ligeramente menor que 1."},{"text":"Emisor común inversor","feedback":"Revisa: El seguidor de emisor adapta impedancias y presenta Av ligeramente menor que 1."}],"answer":1},{"q":"¿Cuál tiene típicamente impedancia de entrada baja?","options":[{"text":"Base común","feedback":"La entrada de CB se observa desde el emisor, próxima a re."},{"text":"Colector común","feedback":"Revisa: La entrada de CB se observa desde el emisor, próxima a re."},{"text":"Un capacitor desconectado","feedback":"Revisa: La entrada de CB se observa desde el emisor, próxima a re."}],"answer":0},{"q":"¿Qué condición limita el modelo de pequeña señal?","options":[{"text":"Que la fuente esté desconectada","feedback":"Revisa: El modelo es lineal local alrededor del punto Q."},{"text":"Que RC sea cero","feedback":"Revisa: El modelo es lineal local alrededor del punto Q."},{"text":"Que la amplitud no fuerce corte o saturación","feedback":"El modelo es lineal local alrededor del punto Q."}],"answer":2},{"q":"¿Por qué puede variar la ganancia real frente al valor calculado?","options":[{"text":"Porque re no tiene unidades","feedback":"Revisa: Los modelos aproximados omiten aspectos reales como ro y límites de frecuencia."},{"text":"Carga, β, ro, tolerancias y frecuencia","feedback":"Los modelos aproximados omiten aspectos reales como ro y límites de frecuencia."},{"text":"Porque el signo menos es una prohibición","feedback":"Revisa: Los modelos aproximados omiten aspectos reales como ro y límites de frecuencia."}],"answer":1},{"q":"El circuito equivalente AC de banda media sirve para:","options":[{"text":"Calcular la respuesta incremental alrededor de Q","feedback":"Se analiza la variación alrededor del punto establecido por DC."},{"text":"Volver a obtener el voltaje de la batería DC","feedback":"Revisa: Se analiza la variación alrededor del punto establecido por DC."},{"text":"Reemplazar la medición de seguridad","feedback":"Revisa: Se analiza la variación alrededor del punto establecido por DC."}],"answer":0},{"q":"¿Qué debe hacerse con una fuente independiente de corriente DC al obtener el equivalente AC?","options":[{"text":"Cortocircuitarla","feedback":"Revisa: Una corriente DC constante tiene variación AC cero; su equivalente incremental es una fuente de corriente nula, es decir un circuito abierto."},{"text":"Transformarla en un diodo","feedback":"Revisa: Una corriente DC constante tiene variación AC cero; su equivalente incremental es una fuente de corriente nula, es decir un circuito abierto."},{"text":"Abrirla","feedback":"Una corriente DC constante tiene variación AC cero; su equivalente incremental es una fuente de corriente nula, es decir un circuito abierto."}],"answer":2},{"q":"Un sensor tiene Rs=10 kΩ y la etapa tiene Zin=10 kΩ. ¿Qué fracción de vs llega a la entrada de la etapa?","options":[{"text":"1.0","feedback":"Revisa: El divisor de entrada es Zin/(Rs+Zin) = 10/(10+10) = 0.5."},{"text":"0.5","feedback":"El divisor de entrada es Zin/(Rs+Zin) = 10/(10+10) = 0.5."},{"text":"2.0","feedback":"Revisa: El divisor de entrada es Zin/(Rs+Zin) = 10/(10+10) = 0.5."}],"answer":1},{"q":"¿Cuál comparación es correcta para una etapa de emisor común con carga?","options":[{"text":"Av=vout/vbase no es necesariamente vout/vs","feedback":"La resistencia de fuente Rs provoca atenuación previa a la base."},{"text":"Av=vout/vs siempre","feedback":"Revisa: La resistencia de fuente Rs provoca atenuación previa a la base."},{"text":"Rs no influye nunca","feedback":"Revisa: La resistencia de fuente Rs provoca atenuación previa a la base."}],"answer":0},{"q":"Para que un capacitor se aproxime a corto en banda media, su |Xc| debe ser:","options":[{"text":"Igual a cualquier resistencia","feedback":"Revisa: El criterio depende de frecuencia y de las impedancias del circuito."},{"text":"Siempre infinita","feedback":"Revisa: El criterio depende de frecuencia y de las impedancias del circuito."},{"text":"Pequeña frente a las resistencias relevantes","feedback":"El criterio depende de frecuencia y de las impedancias del circuito."}],"answer":2},{"q":"Si C=1 µF y f=100 Hz, ¿qué orden de magnitud tiene |Xc|?","options":[{"text":"16 Ω","feedback":"Revisa: 1/(2πfC) ≈1592 Ω."},{"text":"1.6 kΩ","feedback":"1/(2πfC) ≈1592 Ω."},{"text":"160 kΩ","feedback":"Revisa: 1/(2πfC) ≈1592 Ω."}],"answer":1},{"q":"Al elevar la frecuencia diez veces, la reactancia capacitiva |Xc|:","options":[{"text":"Se divide por diez","feedback":"|Xc|=1/(2πfC) es inversamente proporcional a f."},{"text":"Se multiplica por diez","feedback":"Revisa: |Xc|=1/(2πfC) es inversamente proporcional a f."},{"text":"Permanece constante","feedback":"Revisa: |Xc|=1/(2πfC) es inversamente proporcional a f."}],"answer":0},{"q":"En DC permanente, el capacitor de bypass del emisor se modela como:","options":[{"text":"Fuente ideal","feedback":"Revisa: El capacitor ideal no conduce corriente continua estable."},{"text":"Resistencia negativa","feedback":"Revisa: El capacitor ideal no conduce corriente continua estable."},{"text":"Circuito abierto","feedback":"El capacitor ideal no conduce corriente continua estable."}],"answer":2},{"q":"En un CE, si el capacitor de bypass deja de ser eficaz al bajar f, en general:","options":[{"text":"Se invierte la fase a cero siempre","feedback":"Revisa: RE deja de estar puenteada al aumentar |XCE|."},{"text":"Aumenta la degeneración y disminuye |Av|","feedback":"RE deja de estar puenteada al aumentar |XCE|."},{"text":"Se elimina RC","feedback":"Revisa: RE deja de estar puenteada al aumentar |XCE|."}],"answer":1},{"q":"¿Por qué una señal alterna de 200 mV puede ser demasiado grande si |Av|≈100?","options":[{"text":"Pediría 20 V de salida y podría forzar recorte","feedback":"La amplitud útil está limitada por VCC, el punto Q y la excursión permitida."},{"text":"Un BJT siempre puede entregar 20 V","feedback":"Revisa: La amplitud útil está limitada por VCC, el punto Q y la excursión permitida."},{"text":"Porque re es cero","feedback":"Revisa: La amplitud útil está limitada por VCC, el punto Q y la excursión permitida."}],"answer":0},{"q":"Una etapa CE con RC=4.7 kΩ cargada por la entrada de otra de 10 kΩ ve aproximadamente:","options":[{"text":"14.7 kΩ","feedback":"Revisa: 4.7 kΩ || 10 kΩ ≈ 3.2 kΩ."},{"text":"4.7 kΩ sin cambios","feedback":"Revisa: 4.7 kΩ || 10 kΩ ≈ 3.2 kΩ."},{"text":"3.2 kΩ","feedback":"4.7 kΩ || 10 kΩ ≈ 3.2 kΩ."}],"answer":2},{"q":"Dos etapas en cascada tienen ganancias cargadas Av1=-10 y Av2=+0.9. La ganancia total es:","options":[{"text":"+9","feedback":"Revisa: El producto de las ganancias cargadas es (-10)(+0.9)=-9."},{"text":"-9","feedback":"El producto de las ganancias cargadas es (-10)(+0.9)=-9."},{"text":"-10.9","feedback":"Revisa: El producto de las ganancias cargadas es (-10)(+0.9)=-9."}],"answer":1},{"q":"Si dos etapas CE invierten cada una la señal, la cascada ideal:","options":[{"text":"No invierte globalmente","feedback":"Dos inversiones de 180° equivalen a 360°."},{"text":"Invierte 90°","feedback":"Revisa: Dos inversiones de 180° equivalen a 360°."},{"text":"Anula siempre la salida","feedback":"Revisa: Dos inversiones de 180° equivalen a 360°."}],"answer":0},{"q":"En un CC con ganancia desde la base ≈+0.98, significa:","options":[{"text":"Amplificación de 98 veces","feedback":"Revisa: El seguidor da ganancia de tensión cercana a uno y ayuda a adaptar impedancias."},{"text":"Inversión de fase","feedback":"Revisa: El seguidor da ganancia de tensión cercana a uno y ayuda a adaptar impedancias."},{"text":"Salida casi igual en tensión y en fase","feedback":"El seguidor da ganancia de tensión cercana a uno y ayuda a adaptar impedancias."}],"answer":2},{"q":"¿Cuál configuración toma su entrada de señal por el emisor?","options":[{"text":"Colector común","feedback":"Revisa: En CB, la base es común y la señal se aplica al emisor."},{"text":"Base común","feedback":"En CB, la base es común y la señal se aplica al emisor."},{"text":"Emisor común","feedback":"Revisa: En CB, la base es común y la señal se aplica al emisor."}],"answer":1},{"q":"En CB, una fuente con Rs elevada respecto a re:","options":[{"text":"Pierde gran parte de vs antes de llegar al emisor","feedback":"La entrada baja forma un divisor con Rs."},{"text":"Mejora indefinidamente Av total","feedback":"Revisa: La entrada baja forma un divisor con Rs."},{"text":"Elimina la carga","feedback":"Revisa: La entrada baja forma un divisor con Rs."}],"answer":0},{"q":"En un par de valores IC=2mA e IE≈2.02mA, ¿cuál se utiliza en gm=IC/VT?","options":[{"text":"IE solamente","feedback":"Revisa: gm se obtiene con la corriente DC de colector ICQ."},{"text":"IB","feedback":"Revisa: gm se obtiene con la corriente DC de colector ICQ."},{"text":"IC","feedback":"gm se obtiene con la corriente DC de colector ICQ."}],"answer":2},{"q":"Con IC=2 mA y VT=26 mV, gm aproximada es:","options":[{"text":"13 S","feedback":"Revisa: gm=0.002/0.026≈0.0769 siemens."},{"text":"0.077 S","feedback":"gm=0.002/0.026≈0.0769 siemens."},{"text":"77 Ω","feedback":"Revisa: gm=0.002/0.026≈0.0769 siemens."}],"answer":1},{"q":"Para beta=100 y gm≈0.05 S, rπ es:","options":[{"text":"2 kΩ","feedback":"rπ=beta/gm=100/0.05=2000 Ω."},{"text":"2 Ω","feedback":"Revisa: rπ=beta/gm=100/0.05=2000 Ω."},{"text":"200 kΩ","feedback":"Revisa: rπ=beta/gm=100/0.05=2000 Ω."}],"answer":0},{"q":"¿Por qué re ≠ rπ exactamente?","options":[{"text":"Una es una batería","feedback":"Revisa: re≈VT/IE y rπ=beta/gm; aproximadamente rπ≈(beta+1)re."},{"text":"Ambas representan RE externa","feedback":"Revisa: re≈VT/IE y rπ=beta/gm; aproximadamente rπ≈(beta+1)re."},{"text":"Son resistencias incrementales definidas desde terminales/variables diferentes","feedback":"re≈VT/IE y rπ=beta/gm; aproximadamente rπ≈(beta+1)re."}],"answer":2},{"q":"¿Qué cambio mejora la estabilidad de ganancia de un CE aunque reduzca |Av|?","options":[{"text":"Eliminar todas las resistencias","feedback":"Revisa: La realimentación negativa por RE sin bypass disminuye sensibilidad."},{"text":"Conservar RE sin bypass","feedback":"La realimentación negativa por RE sin bypass disminuye sensibilidad."},{"text":"Elevar arbitrariamente Vs","feedback":"Revisa: La realimentación negativa por RE sin bypass disminuye sensibilidad."}],"answer":1},{"q":"Una hoja de datos informa betaDC a cierta corriente. En pequeña señal, betaac:","options":[{"text":"Puede diferir y depende del punto de operación","feedback":"hfe incremental puede diferir de hFE DC y cambia con corriente y temperatura."},{"text":"Es siempre 1000","feedback":"Revisa: hfe incremental puede diferir de hFE DC y cambia con corriente y temperatura."},{"text":"No se necesita jamás","feedback":"Revisa: hfe incremental puede diferir de hFE DC y cambia con corriente y temperatura."}],"answer":0},{"q":"¿Qué debe comprobarse antes de utilizar el modelo lineal de AC?","options":[{"text":"Que el transistor esté en saturación","feedback":"Revisa: El modelo es una linealización local alrededor del punto de polarización."},{"text":"Que VCE sea siempre cero","feedback":"Revisa: El modelo es una linealización local alrededor del punto de polarización."},{"text":"Que el punto Q permanezca en región activa y la señal sea pequeña","feedback":"El modelo es una linealización local alrededor del punto de polarización."}],"answer":2},{"q":"Un sensor entrega vs=10 mV y un divisor fuente-entrada atenúa a 0.6. ¿Cuál es vi?","options":[{"text":"16 mV","feedback":"Revisa: vi/vs=0.6; 10 mV × 0.6=6 mV."},{"text":"6 mV","feedback":"vi/vs=0.6; 10 mV × 0.6=6 mV."},{"text":"60 mV","feedback":"Revisa: vi/vs=0.6; 10 mV × 0.6=6 mV."}],"answer":1},{"q":"Si Av de etapa=-20 y vi=6 mV pico, ¿cuánto vale vo?","options":[{"text":"-120 mV pico","feedback":"vo=Av×vi=-20×6 mV=-120 mV pico."},{"text":"+120 V","feedback":"Revisa: vo=Av×vi=-20×6 mV=-120 mV pico."},{"text":"-20 mV pico","feedback":"Revisa: vo=Av×vi=-20×6 mV=-120 mV pico."}],"answer":0},{"q":"Si IE aumenta de 1mA a 2mA con la misma temperatura, re:","options":[{"text":"Se duplica a 52Ω","feedback":"Revisa: re≈26 mV/IEQ, de modo que se reduce a la mitad."},{"text":"Permanece igual","feedback":"Revisa: re≈26 mV/IEQ, de modo que se reduce a la mitad."},{"text":"Pasa aproximadamente de 26Ω a 13Ω","feedback":"re≈26 mV/IEQ, de modo que se reduce a la mitad."}],"answer":2},{"q":"Si un estudiante confunde VBE≈0.7V con VT≈26mV:","options":[{"text":"Se obtiene el mismo re","feedback":"Revisa: VT es tensión térmica; VBE es la caída de polarización aproximada."},{"text":"Mezcla polarización DC con pendiente incremental de la unión","feedback":"VT es tensión térmica; VBE es la caída de polarización aproximada."},{"text":"No afecta nada","feedback":"Revisa: VT es tensión térmica; VBE es la caída de polarización aproximada."}],"answer":1},{"q":"En la estimación del valor de entrada Rin de un CE polarizado por divisor, interviene:","options":[{"text":"R1||R2||Zin,base","feedback":"En AC R1 y R2 conectan a tierra y cargan la entrada junto con el transistor."},{"text":"Solo RC","feedback":"Revisa: En AC R1 y R2 conectan a tierra y cargan la entrada junto con el transistor."},{"text":"Solo RL","feedback":"Revisa: En AC R1 y R2 conectan a tierra y cargan la entrada junto con el transistor."}],"answer":0},{"q":"Un resultado numérico de Av=-120 para una señal de entrada grande exige:","options":[{"text":"Declarar que es una ganancia medida","feedback":"Revisa: El cálculo incremental no garantiza linealidad a cualquier amplitud."},{"text":"Ignorar VCC","feedback":"Revisa: El cálculo incremental no garantiza linealidad a cualquier amplitud."},{"text":"Comprobar excursión de salida disponible para evitar recorte","feedback":"El cálculo incremental no garantiza linealidad a cualquier amplitud."}],"answer":2},{"q":"En CC, para RE=RL=1kΩ, la resistencia de emisor efectiva es:","options":[{"text":"2000Ω","feedback":"Revisa: Las resistencias RE y RL aparecen en paralelo a la salida de banda media."},{"text":"500Ω","feedback":"Las resistencias RE y RL aparecen en paralelo a la salida de banda media."},{"text":"1000Ω","feedback":"Revisa: Las resistencias RE y RL aparecen en paralelo a la salida de banda media."}],"answer":1}];

// ==========================================
// BANCOS FET REVISADOS · 2026
window.ANALOG_QUIZZES = window.ANALOG_QUIZZES || {};
window.ANALOG_QUIZZES["fet_fundamentos"] = [
  {
    "q": "¿Qué magnitud controla principalmente la conducción de un FET?",
    "options": [
      {
        "text": "La tensión entre puerta y fuente VGS.",
        "feedback": "VGS modifica el campo y la conducción del canal; la carga y VDS también importan."
      },
      {
        "text": "La corriente del disipador.",
        "feedback": "Revisa la definición y la condición de validez: VGS modifica el campo y la conducción del canal; la carga y VDS también importan."
      },
      {
        "text": "El valor de beta del BJT.",
        "feedback": "Revisa la definición y la condición de validez: VGS modifica el campo y la conducción del canal; la carga y VDS también importan."
      },
      {
        "text": "Únicamente la tensión de red.",
        "feedback": "Revisa la definición y la condición de validez: VGS modifica el campo y la conducción del canal; la carga y VDS también importan."
      }
    ],
    "answer": 0
  },
  {
    "q": "¿Qué distingue a la puerta de un JFET de la de un MOSFET?",
    "options": [
      {
        "text": "El JFET tiene puerta por unión PN; el MOSFET, aislada por dieléctrico.",
        "feedback": "En JFET se polariza una unión PN; en MOSFET se modifica un canal mediante la puerta aislada."
      },
      {
        "text": "Ambos tienen puerta metálica conectada a un LED.",
        "feedback": "Revisa la definición y la condición de validez: En JFET se polariza una unión PN; en MOSFET se modifica un canal mediante la puerta aislada."
      },
      {
        "text": "El JFET no puede amplificar señales.",
        "feedback": "Revisa la definición y la condición de validez: En JFET se polariza una unión PN; en MOSFET se modifica un canal mediante la puerta aislada."
      },
      {
        "text": "El MOSFET siempre tiene puerta abierta a la carga.",
        "feedback": "Revisa la definición y la condición de validez: En JFET se polariza una unión PN; en MOSFET se modifica un canal mediante la puerta aislada."
      }
    ],
    "answer": 0
  },
  {
    "q": "En un JFET canal N, al hacer VGS más negativo dentro de su intervalo válido, ¿qué sucede normalmente con ID?",
    "options": [
      {
        "text": "Disminuye.",
        "feedback": "La región de agotamiento estrecha el canal y reduce la corriente."
      },
      {
        "text": "Se invierte obligatoriamente.",
        "feedback": "Revisa la definición y la condición de validez: La región de agotamiento estrecha el canal y reduce la corriente."
      },
      {
        "text": "Aumenta sin límite.",
        "feedback": "Revisa la definición y la condición de validez: La región de agotamiento estrecha el canal y reduce la corriente."
      },
      {
        "text": "No cambia.",
        "feedback": "Revisa la definición y la condición de validez: La región de agotamiento estrecha el canal y reduce la corriente."
      }
    ],
    "answer": 0
  },
  {
    "q": "¿Qué afirmación es correcta sobre el JFET?",
    "options": [
      {
        "text": "Continúa utilizándose en aplicaciones analógicas y de bajo ruido.",
        "feedback": "No es correcto presentar al JFET como obsoleto; se elige según su función."
      },
      {
        "text": "Todos los JFET están prohibidos por seguridad.",
        "feedback": "Revisa la definición y la condición de validez: No es correcto presentar al JFET como obsoleto; se elige según su función."
      },
      {
        "text": "No existe un JFET de canal P.",
        "feedback": "Revisa la definición y la condición de validez: No es correcto presentar al JFET como obsoleto; se elige según su función."
      },
      {
        "text": "Es un MOSFET con puerta aislada.",
        "feedback": "Revisa la definición y la condición de validez: No es correcto presentar al JFET como obsoleto; se elige según su función."
      }
    ],
    "answer": 0
  },
  {
    "q": "En un MOSFET canal N de enriquecimiento ideal, con VGS=0, ¿cuál es el estado habitual?",
    "options": [
      {
        "text": "Corte.",
        "feedback": "El canal inducido requiere una tensión de puerta apropiada."
      },
      {
        "text": "Conducción plena.",
        "feedback": "Revisa la definición y la condición de validez: El canal inducido requiere una tensión de puerta apropiada."
      },
      {
        "text": "Avalancha obligatoria.",
        "feedback": "Revisa la definición y la condición de validez: El canal inducido requiere una tensión de puerta apropiada."
      },
      {
        "text": "Saturación BJT.",
        "feedback": "Revisa la definición y la condición de validez: El canal inducido requiere una tensión de puerta apropiada."
      }
    ],
    "answer": 0
  },
  {
    "q": "En un MOSFET de canal N de agotamiento, con VGS=0, ¿qué ocurre habitualmente?",
    "options": [
      {
        "text": "Existe canal y puede conducir.",
        "feedback": "La denominación agotamiento indica que un canal preexiste a VGS=0."
      },
      {
        "text": "Está necesariamente en corte.",
        "feedback": "Revisa la definición y la condición de validez: La denominación agotamiento indica que un canal preexiste a VGS=0."
      },
      {
        "text": "Su puerta debe recibir corriente DC de 1 A.",
        "feedback": "Revisa la definición y la condición de validez: La denominación agotamiento indica que un canal preexiste a VGS=0."
      },
      {
        "text": "Solo funciona como diodo.",
        "feedback": "Revisa la definición y la condición de validez: La denominación agotamiento indica que un canal preexiste a VGS=0."
      }
    ],
    "answer": 0
  },
  {
    "q": "Si VG=5 V y VS=2 V, ¿cuánto vale VGS?",
    "options": [
      {
        "text": "3 V.",
        "feedback": "VGS es la diferencia VG−VS, no la tensión de puerta respecto al suelo."
      },
      {
        "text": "7 V.",
        "feedback": "Revisa la definición y la condición de validez: VGS es la diferencia VG−VS, no la tensión de puerta respecto al suelo."
      },
      {
        "text": "5 V.",
        "feedback": "Revisa la definición y la condición de validez: VGS es la diferencia VG−VS, no la tensión de puerta respecto al suelo."
      },
      {
        "text": "2 V.",
        "feedback": "Revisa la definición y la condición de validez: VGS es la diferencia VG−VS, no la tensión de puerta respecto al suelo."
      }
    ],
    "answer": 0
  },
  {
    "q": "Para un JFET canal N con IDSS=8 mA, VGS(off)=−4 V y VGS=−2 V, Shockley predice:",
    "options": [
      {
        "text": "2 mA.",
        "feedback": "8(1−(−2/−4))²=8·0.25=2 mA."
      },
      {
        "text": "8 mA.",
        "feedback": "Revisa la definición y la condición de validez: 8(1−(−2/−4))²=8·0.25=2 mA."
      },
      {
        "text": "4 mA.",
        "feedback": "Revisa la definición y la condición de validez: 8(1−(−2/−4))²=8·0.25=2 mA."
      },
      {
        "text": "0 mA.",
        "feedback": "Revisa la definición y la condición de validez: 8(1−(−2/−4))²=8·0.25=2 mA."
      }
    ],
    "answer": 0
  },
  {
    "q": "¿Qué se comprueba tras usar la ecuación ID=k(VGS−VT)² en un E-MOSFET?",
    "options": [
      {
        "text": "Que VDS sea al menos VGS−VT y VGS>VT.",
        "feedback": "La ecuación cuadrática mostrada presupone región de saturación del modelo analógico."
      },
      {
        "text": "Solo que VG sea positivo.",
        "feedback": "Revisa la definición y la condición de validez: La ecuación cuadrática mostrada presupone región de saturación del modelo analógico."
      },
      {
        "text": "Que VDS sea exactamente cero.",
        "feedback": "Revisa la definición y la condición de validez: La ecuación cuadrática mostrada presupone región de saturación del modelo analógico."
      },
      {
        "text": "Que ID sea mayor que 100 A.",
        "feedback": "Revisa la definición y la condición de validez: La ecuación cuadrática mostrada presupone región de saturación del modelo analógico."
      }
    ],
    "answer": 0
  },
  {
    "q": "En el análisis de pequeña señal FET, ¿qué significa gm?",
    "options": [
      {
        "text": "Variación de corriente de drenador por variación de VGS alrededor de Q.",
        "feedback": "gm es la derivada local dID/dVGS, con unidades A/V o siemens."
      },
      {
        "text": "Ganancia beta de base.",
        "feedback": "Revisa la definición y la condición de validez: gm es la derivada local dID/dVGS, con unidades A/V o siemens."
      },
      {
        "text": "Resistencia exacta del disipador.",
        "feedback": "Revisa la definición y la condición de validez: gm es la derivada local dID/dVGS, con unidades A/V o siemens."
      },
      {
        "text": "Corriente máxima garantizada de puerta.",
        "feedback": "Revisa la definición y la condición de validez: gm es la derivada local dID/dVGS, con unidades A/V o siemens."
      }
    ],
    "answer": 0
  },
  {
    "q": "¿Cuál de las siguientes afirmaciones sobre CMOS es válida?",
    "options": [
      {
        "text": "En el modelo ideal reduce la corriente estática, pero en circuitos reales hay fugas y pérdidas dinámicas.",
        "feedback": "En circuitos reales el consumo dinámico y las fugas son relevantes."
      },
      {
        "text": "En CMOS nunca hay pérdidas.",
        "feedback": "Revisa la definición y la condición de validez: En circuitos reales el consumo dinámico y las fugas son relevantes."
      },
      {
        "text": "En CMOS no existen capacitancias.",
        "feedback": "Revisa la definición y la condición de validez: En circuitos reales el consumo dinámico y las fugas son relevantes."
      },
      {
        "text": "Un CMOS es un JFET de canal N.",
        "feedback": "Revisa la definición y la condición de validez: En circuitos reales el consumo dinámico y las fugas son relevantes."
      }
    ],
    "answer": 0
  },
  {
    "q": "¿Qué ventaja tiene un esquema de estudio con gráfico ID–VGS y punto Q?",
    "options": [
      {
        "text": "Permite relacionar la polarización con el modelo y comprobar la coherencia física.",
        "feedback": "La gráfica es herramienta de análisis; siempre se comprueba su dominio de validez."
      },
      {
        "text": "Sustituye todas las hojas de datos reales.",
        "feedback": "Revisa la definición y la condición de validez: La gráfica es herramienta de análisis; siempre se comprueba su dominio de validez."
      },
      {
        "text": "Garantiza el mismo transistor para cualquier motor.",
        "feedback": "Revisa la definición y la condición de validez: La gráfica es herramienta de análisis; siempre se comprueba su dominio de validez."
      },
      {
        "text": "Evita verificar la región.",
        "feedback": "Revisa la definición y la condición de validez: La gráfica es herramienta de análisis; siempre se comprueba su dominio de validez."
      }
    ],
    "answer": 0
  }
];
window.ANALOG_QUIZZES["fet_aplicaciones"] = [
  {
    "q": "Un ESP32 de 3,3 V va a controlar un IRLZ44N. ¿Qué decisión inicial es correcta?",
    "options": [
      {
        "text": "No aprobarlo automáticamente: verificar RDS(on) a 3,3 V, carga y temperatura.",
        "feedback": "La hoja consultada especifica RDS(on) a 4 V y 5 V, no una garantía general a 3,3 V."
      },
      {
        "text": "Garantizar que opera frío porque dice logic-level.",
        "feedback": "Revisa la definición y la condición de validez: La hoja consultada especifica RDS(on) a 4 V y 5 V, no una garantía general a 3,3 V."
      },
      {
        "text": "Usar VGS(th) como resistencia de conducción.",
        "feedback": "Revisa la definición y la condición de validez: La hoja consultada especifica RDS(on) a 4 V y 5 V, no una garantía general a 3,3 V."
      },
      {
        "text": "Eliminar las protecciones del motor.",
        "feedback": "Revisa la definición y la condición de validez: La hoja consultada especifica RDS(on) a 4 V y 5 V, no una garantía general a 3,3 V."
      }
    ],
    "answer": 0
  },
  {
    "q": "La hoja de datos define VGS(th) para una pequeña corriente ID de ensayo. ¿Qué NO garantiza ese dato?",
    "options": [
      {
        "text": "Una baja RDS(on) a la tensión GPIO disponible.",
        "feedback": "El umbral indica inicio de conducción, no capacidad nominal de potencia."
      },
      {
        "text": "La existencia de un umbral de conducción.",
        "feedback": "Revisa la definición y la condición de validez: El umbral indica inicio de conducción, no capacidad nominal de potencia."
      },
      {
        "text": "Que pueda especificarse una condición de prueba.",
        "feedback": "Revisa la definición y la condición de validez: El umbral indica inicio de conducción, no capacidad nominal de potencia."
      },
      {
        "text": "Que el transistor tiene puerta.",
        "feedback": "Revisa la definición y la condición de validez: El umbral indica inicio de conducción, no capacidad nominal de potencia."
      }
    ],
    "answer": 0
  },
  {
    "q": "Para una conmutación MOSFET de lado bajo, ¿qué debe existir entre microcontrolador y etapa?",
    "options": [
      {
        "text": "Referencia común de tierra y una interfaz de puerta adecuada.",
        "feedback": "Sin referencia común las tensiones GPIO y VGS no están definidas como se supone."
      },
      {
        "text": "Conexión directa entre motor y pin sin transistor.",
        "feedback": "Revisa la definición y la condición de validez: Sin referencia común las tensiones GPIO y VGS no están definidas como se supone."
      },
      {
        "text": "Una unión PN en la puerta del MOSFET.",
        "feedback": "Revisa la definición y la condición de validez: Sin referencia común las tensiones GPIO y VGS no están definidas como se supone."
      },
      {
        "text": "Una fuente flotante sin retorno definida.",
        "feedback": "Revisa la definición y la condición de validez: Sin referencia común las tensiones GPIO y VGS no están definidas como se supone."
      }
    ],
    "answer": 0
  },
  {
    "q": "¿Cuál es la aproximación de pérdidas de conducción de un MOSFET bien encendido?",
    "options": [
      {
        "text": "I²·RDS(on).",
        "feedback": "Se usa P≈I²RDS(on) en las condiciones de especificación de resistencia."
      },
      {
        "text": "I·beta.",
        "feedback": "Revisa la definición y la condición de validez: Se usa P≈I²RDS(on) en las condiciones de especificación de resistencia."
      },
      {
        "text": "VGS(th)·frecuencia únicamente.",
        "feedback": "Revisa la definición y la condición de validez: Se usa P≈I²RDS(on) en las condiciones de especificación de resistencia."
      },
      {
        "text": "IDSS/VGS.",
        "feedback": "Revisa la definición y la condición de validez: Se usa P≈I²RDS(on) en las condiciones de especificación de resistencia."
      }
    ],
    "answer": 0
  },
  {
    "q": "Un motor de 2 A y MOSFET hipotético de 0,025 Ω, ¿qué pérdidas estimas solo por conducción?",
    "options": [
      {
        "text": "0,10 W.",
        "feedback": "(2 A)²×0.025 Ω = 0.1 W; no incluye conmutación ni temperatura."
      },
      {
        "text": "2 W.",
        "feedback": "Revisa la definición y la condición de validez: (2 A)²×0.025 Ω = 0.1 W; no incluye conmutación ni temperatura."
      },
      {
        "text": "0,05 W.",
        "feedback": "Revisa la definición y la condición de validez: (2 A)²×0.025 Ω = 0.1 W; no incluye conmutación ni temperatura."
      },
      {
        "text": "50 W.",
        "feedback": "Revisa la definición y la condición de validez: (2 A)²×0.025 Ω = 0.1 W; no incluye conmutación ni temperatura."
      }
    ],
    "answer": 0
  },
  {
    "q": "En PWM, ¿qué propiedad de la puerta MOSFET influye en el esfuerzo del driver?",
    "options": [
      {
        "text": "La carga total de puerta Qg.",
        "feedback": "El driver entrega pulsos de corriente para cargar y descargar las capacitancias."
      },
      {
        "text": "El color del encapsulado.",
        "feedback": "Revisa la definición y la condición de validez: El driver entrega pulsos de corriente para cargar y descargar las capacitancias."
      },
      {
        "text": "El número de patas del potenciómetro.",
        "feedback": "Revisa la definición y la condición de validez: El driver entrega pulsos de corriente para cargar y descargar las capacitancias."
      },
      {
        "text": "Solo la resistencia del motor.",
        "feedback": "Revisa la definición y la condición de validez: El driver entrega pulsos de corriente para cargar y descargar las capacitancias."
      }
    ],
    "answer": 0
  },
  {
    "q": "En una carga inductiva DC conmutada, ¿qué debes prever?",
    "options": [
      {
        "text": "Una ruta adecuada de corriente cuando se interrumpe la excitación.",
        "feedback": "La topología de supresión depende de la carga, polaridad, velocidad y potencia."
      },
      {
        "text": "Un cable de señal sin protección.",
        "feedback": "Revisa la definición y la condición de validez: La topología de supresión depende de la carga, polaridad, velocidad y potencia."
      },
      {
        "text": "Conectar un 1N4148 de forma universal sin verificar corriente.",
        "feedback": "Revisa la definición y la condición de validez: La topología de supresión depende de la carga, polaridad, velocidad y potencia."
      },
      {
        "text": "Eliminar el GND de referencia.",
        "feedback": "Revisa la definición y la condición de validez: La topología de supresión depende de la carga, polaridad, velocidad y potencia."
      }
    ],
    "answer": 0
  },
  {
    "q": "Si el punto de un MOSFET E cumple VGS>VT pero VDS<VGS−VT, se encuentra en:",
    "options": [
      {
        "text": "Región óhmica/triodo.",
        "feedback": "La condición corresponde a la región de triodo; no uses la ecuación cuadrática de saturación."
      },
      {
        "text": "Corte ideal.",
        "feedback": "Revisa la definición y la condición de validez: La condición corresponde a la región de triodo; no uses la ecuación cuadrática de saturación."
      },
      {
        "text": "Saturación del modelo cuadrático de canal largo.",
        "feedback": "Revisa la definición y la condición de validez: La condición corresponde a la región de triodo; no uses la ecuación cuadrática de saturación."
      },
      {
        "text": "Avalancha inevitable.",
        "feedback": "Revisa la definición y la condición de validez: La condición corresponde a la región de triodo; no uses la ecuación cuadrática de saturación."
      }
    ],
    "answer": 0
  },
  {
    "q": "En un amplificador fuente común con source desacoplada y sin carga, Av≈−gm·RD. ¿Qué indica el signo?",
    "options": [
      {
        "text": "La salida se invierte respecto a la entrada.",
        "feedback": "Un aumento de ID eleva la caída en RD y disminuye VD."
      },
      {
        "text": "La etapa invierte la corriente del disipador.",
        "feedback": "Revisa la definición y la condición de validez: Un aumento de ID eleva la caída en RD y disminuye VD."
      },
      {
        "text": "El transistor es necesariamente PNP.",
        "feedback": "Revisa la definición y la condición de validez: Un aumento de ID eleva la caída en RD y disminuye VD."
      },
      {
        "text": "El voltaje de puerta se vuelve cero.",
        "feedback": "Revisa la definición y la condición de validez: Un aumento de ID eleva la caída en RD y disminuye VD."
      }
    ],
    "answer": 0
  },
  {
    "q": "Si un MOSFET se calienta, ¿por qué hay que revisar el cálculo de RDS(on)?",
    "options": [
      {
        "text": "Porque depende de temperatura y de la polarización de puerta.",
        "feedback": "La resistencia en conducción cambia con condiciones reales de operación."
      },
      {
        "text": "Porque es siempre igual a cero.",
        "feedback": "Revisa la definición y la condición de validez: La resistencia en conducción cambia con condiciones reales de operación."
      },
      {
        "text": "Porque la potencia de conducción desaparece.",
        "feedback": "Revisa la definición y la condición de validez: La resistencia en conducción cambia con condiciones reales de operación."
      },
      {
        "text": "Porque deja de tener terminal fuente.",
        "feedback": "Revisa la definición y la condición de validez: La resistencia en conducción cambia con condiciones reales de operación."
      }
    ],
    "answer": 0
  },
  {
    "q": "Un proyecto quiere cambiar un 2N7000 por un MOSFET de motor de 10 A. ¿Cuál es la postura correcta?",
    "options": [
      {
        "text": "Evaluar otra referencia diseñada para esa corriente y sus límites en datasheet.",
        "feedback": "El 2N7000 es un MOSFET de pequeña señal, no un interruptor de motor de gran potencia."
      },
      {
        "text": "Usar el 2N7000 sin cambiar nada.",
        "feedback": "Revisa la definición y la condición de validez: El 2N7000 es un MOSFET de pequeña señal, no un interruptor de motor de gran potencia."
      },
      {
        "text": "Conectar varios diodos y omitir térmica.",
        "feedback": "Revisa la definición y la condición de validez: El 2N7000 es un MOSFET de pequeña señal, no un interruptor de motor de gran potencia."
      },
      {
        "text": "Considerarlo capaz de 10 A por la etiqueta logic-level.",
        "feedback": "Revisa la definición y la condición de validez: El 2N7000 es un MOSFET de pequeña señal, no un interruptor de motor de gran potencia."
      }
    ],
    "answer": 0
  },
  {
    "q": "¿Cuál es la forma correcta de interpretar una curva ideal de Shockley o parabólica?",
    "options": [
      {
        "text": "Como modelo de estudio sujeto a hipótesis; contrastar con el datasheet.",
        "feedback": "La curva es conceptual y no sustituye datos específicos de fabricación."
      },
      {
        "text": "Como medida certificada de cualquier dispositivo.",
        "feedback": "Revisa la definición y la condición de validez: La curva es conceptual y no sustituye datos específicos de fabricación."
      },
      {
        "text": "Como permiso para ignorar VDS.",
        "feedback": "Revisa la definición y la condición de validez: La curva es conceptual y no sustituye datos específicos de fabricación."
      },
      {
        "text": "Como verificación de temperatura.",
        "feedback": "Revisa la definición y la condición de validez: La curva es conceptual y no sustituye datos específicos de fabricación."
      }
    ],
    "answer": 0
  }
];
