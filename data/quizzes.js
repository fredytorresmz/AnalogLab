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
  ]
,
  "reactivos":[
    {"q":"En un circuito RC de carga, después de un tiempo igual a una constante de tiempo, el capacitor alcanza aproximadamente:","options":[{"text":"36.8 % del valor final.","feedback":"Ese porcentaje corresponde a lo que falta por alcanzar durante la carga."},{"text":"63.2 % del valor final.","feedback":"Correcto: en t=τ, 1-e^{-1}≈0.632."},{"text":"100 % exactamente.","feedback":"La respuesta exponencial se aproxima asintóticamente al valor final."},{"text":"5 % del valor final.","feedback":"No corresponde a una constante de tiempo."}],"answer":1},
    {"q":"Si R permanece fija y C aumenta diez veces, la constante de tiempo:","options":[{"text":"Disminuye diez veces.","feedback":"τ=RC: aumenta con C."},{"text":"No cambia.","feedback":"τ depende directamente de C."},{"text":"Aumenta diez veces.","feedback":"Correcto."},{"text":"Se hace cero.","feedback":"No."}],"answer":2},
    {"q":"En un transformador ideal reductor, si Np/Ns=8 y Vp=120 V rms, Vs es:","options":[{"text":"960 V rms.","feedback":"Eso invierte la relación."},{"text":"15 V rms.","feedback":"Correcto: Vs=120/8."},{"text":"8 V rms.","feedback":"La relación 8 es adimensional, no el voltaje de salida."},{"text":"120 V rms.","feedback":"Solo ocurriría para relación 1:1."}],"answer":1},
    {"q":"Durante la descarga ideal de un capacitor por una resistencia, su voltaje:","options":[{"text":"Cae linealmente hasta cero.","feedback":"La respuesta RC es exponencial."},{"text":"Sigue una exponencial decreciente.","feedback":"Correcto."},{"text":"Cambia instantáneamente a cero.","feedback":"El voltaje de un capacitor ideal no cambia instantáneamente."},{"text":"Aumenta indefinidamente.","feedback":"No."}],"answer":1}
  ]
};
