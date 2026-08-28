# AnalogLab

## Electrónica Analógica y Laboratorio

**AnalogLab** es un recurso interactivo de apoyo académico para complementar las clases de **Electrónica Analógica y Laboratorio**, facilitar el estudio independiente y servir como material de repaso antes de talleres y evaluaciones.

La plataforma integra teoría, análisis matemático, ejemplos resueltos, circuitos, formas de onda, actividades interactivas y autoevaluaciones. Su propósito es permitir que el estudiante pueda volver sobre los temas vistos en clase y revisar el procedimiento de análisis de manera organizada.

---

## Ruta de estudio

Se recomienda trabajar cada módulo en el siguiente orden:

1. **Leer la explicación teórica.**
2. **Revisar las ideas clave, recordatorios y errores frecuentes.**
3. **Interpretar las ecuaciones y las variables utilizadas.**
4. **Estudiar los ejemplos resueltos paso a paso.**
5. **Utilizar las gráficas, circuitos y simulaciones interactivas.**
6. **Resolver los ejercicios propuestos.**
7. **Realizar la comprobación o autoevaluación del módulo.**
8. **Aplicar lo estudiado en el taller práctico de la asignatura.**

---

## 1. Diodos en corriente continua — DC

Esta parte desarrolla los fundamentos necesarios para analizar el comportamiento del diodo en circuitos de corriente continua.

### Contenidos

- Materiales semiconductores.
- Electrones de valencia y enlace covalente.
- Semiconductor intrínseco y extrínseco.
- Dopaje.
- Material tipo N y tipo P.
- Portadores mayoritarios y minoritarios.
- Unión PN.
- Región de agotamiento.
- Barrera de potencial.
- Polarización directa e inversa.
- Curva característica corriente–voltaje del diodo.
- Modelos del diodo: ideal, caída constante, lineal por tramos y ecuación de Shockley.
- Análisis ON/OFF.
- Circuitos con diodos en serie, paralelo y redes mixtas.
- Circuitos con varias fuentes.
- Recta de carga y punto de operación \(Q\).
- Diodo LED y resistencia limitadora.

En los temas de análisis se incluyen ejemplos resueltos, verificación de hipótesis y ejercicios de práctica.

---

## 2. Diodos en corriente alterna — AC

Esta sección estudia el comportamiento del diodo cuando la señal de entrada cambia con el tiempo.

### Contenidos

- Señal sinusoidal.
- Valor pico \(V_m\) o \(V_p\).
- Periodo y frecuencia.
- Valor RMS.
- Valor medio.
- Rectificación de media onda.
- Rectificación de onda completa.
- Rectificador en puente.
- Estados de conducción durante cada semiciclo.
- Formas de onda de entrada y salida.
- Valor DC de la señal rectificada.
- Frecuencia de rizado.
- Tensión inversa de pico — PIV.
- Filtro capacitivo.
- Carga y descarga del condensador.
- Constante de tiempo:

\[
\tau = R_L C
\]

- Descarga exponencial:

\[
v_C(t)=V_0e^{-t/(R_LC)}
\]

- Voltaje de rizado y su aproximación:

\[
V_{r(pp)} \approx \frac{I_L}{f_r C}
\]

- Recortadores.
- Cambiadores de nivel — clampers.

Las gráficas permiten relacionar el estado del diodo con la forma de onda obtenida y observar el efecto de modificar diferentes parámetros del circuito.

---

## 3. Diodo Zener

El módulo de **diodo Zener** está disponible como contenido de estudio posterior y **no corresponde a la evaluación actual**.

Incluye:

- característica del Zener;
- región de ruptura controlada;
- tensión \(V_Z\);
- resistencia serie;
- corriente Zener;
- regulación sin carga y con carga;
- condición OFF;
- condición de regulación;
- condición de sobrecorriente;
- límites básicos de operación.

Este módulo se utilizará cuando el tema sea desarrollado formalmente en clase.

---

## 4. Taller #1

El **Taller #1** se divide en dos componentes complementarios.

### Parte interactiva en AnalogLab

En la página se encuentran las preguntas teóricas y algunos circuitos básicos de práctica relacionados con:

- semiconductores;
- unión PN;
- polarización;
- modelos del diodo;
- análisis básico en DC;
- LED;
- rectificación básica en AC.

Las actividades pueden incluir preguntas conceptuales, selección múltiple, resultados numéricos, pistas progresivas, retroalimentación y respuestas orientativas.

La finalidad es estudiar y comprobar conceptos antes de realizar los ejercicios prácticos.

### Taller práctico entregado por el docente

Los ejercicios con circuitos gráficos más extensos se entregan en un documento independiente para conservar exactamente la simbología, las polaridades y la configuración utilizada en clase.

AnalogLab incorporará una sección de **comprobación de resultados**, de modo que después de resolver el taller el estudiante pueda comparar sus respuestas con los valores de referencia.

---

## Convenciones del Taller #1

Salvo que en un ejercicio se indique expresamente algo diferente:

- **Si** sobre un diodo significa **silicio**:

\[
V_D = 0.7\text{ V}
\]

- **Ge** sobre un diodo significa **germanio**:

\[
V_D = 0.3\text{ V}
\]

- Si el diodo **no tiene indicado material**, debe analizarse como **diodo ideal**. Cuando está en conducción:

\[
V_D = 0\text{ V}
\]

- El valor indicado sobre una señal sinusoidal corresponde al **valor máximo o valor pico**:

\[
V_m = V_p
\]

- En circuitos AC se recomienda analizar separadamente cada semiciclo y determinar qué diodos están **ON** y cuáles están **OFF**.

- En circuitos DC debe verificarse que el resultado matemático sea coherente con la polaridad y el sentido de corriente supuestos.

### LED

Cuando un ejercicio con LED requiera un valor específico de caída directa \(V_F\), dicho valor deberá aparecer en el enunciado o haber sido definido previamente para el ejercicio.

---

## Matemáticas y nomenclatura

Las ecuaciones principales de AnalogLab se presentan con notación matemática mediante **MathJax/LaTeX**.

Cada expresión debe interpretarse junto con el significado de las variables, sus unidades, las condiciones de aplicación y el modelo de diodo utilizado.

Por ejemplo:

\[
I_D=\frac{V_S-V_D}{R}
\]

donde:

- \(I_D\): corriente del diodo;
- \(V_S\): tensión de alimentación;
- \(V_D\): tensión ánodo–cátodo;
- \(R\): resistencia serie.

El objetivo no es únicamente obtener un resultado numérico, sino comprender la relación entre el circuito, el modelo utilizado y el comportamiento físico del dispositivo.

---

## Elementos interactivos

Dependiendo del módulo, AnalogLab puede incluir:

- circuitos con estados ON/OFF;
- representación del sentido de corriente;
- modificación de valores mediante controles;
- curvas \(I-V\);
- recta de carga;
- formas de onda de entrada y salida;
- comportamiento del filtro capacitivo;
- comparación entre modelos;
- ejercicios con retroalimentación;
- preguntas de autoevaluación.

La interacción complementa la explicación teórica y no sustituye el desarrollo realizado en clase.

---

## Referencias académicas de apoyo

El contenido se desarrolla tomando como referencia principal la metodología del curso y los siguientes textos:

- Boylestad, R. L. & Nashelsky, L. *Electrónica: teoría de circuitos y dispositivos electrónicos*.
- Malvino, A. & Bates, D. *Principios de Electrónica*.

Los apuntes preparados para las clases se utilizan como insumo para construir y revisar los módulos de AnalogLab, pero no se distribuyen como archivos desde la plataforma.

---

## Tecnologías utilizadas

HTML5 · CSS3 · JavaScript · SVG · MathJax · GitHub Pages
