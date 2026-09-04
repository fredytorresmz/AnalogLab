# AnalogLab

## Electrónica Analógica y Laboratorio

**AnalogLab** es un recurso interactivo de apoyo académico para complementar las clases, facilitar el repaso independiente y conectar teoría, análisis matemático, simulación y práctica de laboratorio.

## Ruta de aprendizaje

La plataforma sigue la secuencia **teoría → interpretación física → modelo matemático → ejemplo resuelto → visualización/interacción → práctica → autoevaluación**.

## Contenido actual

### Diodos en DC
- semiconductores, dopaje y unión PN;
- polarización y curva I–V;
- modelos del diodo;
- análisis ON/OFF;
- redes serie, paralelo y mixtas;
- recta de carga y punto Q;
- LED y diseño de resistencia.

### Diodos en AC y fuentes
- capacitor: carga, descarga, energía y constante de tiempo;
- inductor y transformador ideal;
- señal sinusoidal;
- media onda, onda completa y puente;
- filtro capacitivo, rizado, Vmax, Vmin y VDC;
- comparación entre capacitores pequeños y grandes;
- PIV;
- recortadores polarizados;
- cambiadores de nivel (clampers).

### Diodo Zener
- curva y ruptura controlada;
- método para determinar ON/OFF;
- caso fijo;
- resistencia serie variable;
- carga variable;
- fuente variable;
- potencia y condición sin carga;
- parámetros de hoja de datos;
- simulador de límites.

### Taller #1
La teoría y la práctica conceptual se desarrollan en AnalogLab. Los circuitos extensos del taller práctico se distribuyen por Teams para conservar la simbología original. La página incluye convenciones, orientaciones y respuestas de comprobación.

### Proyecto 1 · Fuente regulada con Zener
Actividad integradora de refuerzo que exige:
1. transformador aislado;
2. puente rectificador;
3. capacitor pequeño/moderado para obtener rizado visible;
4. análisis de carga y descarga;
5. selección de un Zener comercial;
6. diseño de RS y RL;
7. casos de RS, RL y Vi variables;
8. simulación, montaje y sustentación.

El objetivo didáctico del filtro no es eliminar completamente el rizado: se busca un compromiso entre **rizado visible** y **margen de regulación Zener**.

## Convenciones del Taller #1
- Si: VD = 0.7 V.
- Ge: VD = 0.3 V.
- Diodo sin material indicado: ideal.
- En señales senoidales del taller, Vm = Vp salvo indicación contraria.

## Referencias académicas de apoyo
- Boylestad, R. L. & Nashelsky, L. *Electronic Devices and Circuit Theory* / *Electrónica: teoría de circuitos y dispositivos electrónicos*.
- Malvino, A. & Bates, D. *Principios de Electrónica*.
- Pleite Guerra, J.; Vergaz Benito, R.; Ruiz de Marcos, J. M. *Electrónica Analógica para Ingenieros*.

Los apuntes del docente se utilizan como insumo para conservar la secuencia de clase; antes de incorporarlos al sitio, las expresiones y ejemplos se revisan y se presentan con notación matemática normalizada.

## Tecnologías
HTML5 · CSS3 · JavaScript · SVG · MathJax · GitHub Pages

## Licencia
- Código: MIT (`LICENSE`).
- Contenido académico original: CC BY 4.0 (`LICENSE-CONTENT.md`).
- Dependencias de terceros: conservan sus propias licencias.

## Enfoque de estudio autónomo

AnalogLab no pretende sustituir la interacción presencial de la asignatura. Se diseña como un recurso complementario suficientemente desarrollado para que un estudiante pueda:

- ponerse al día después de una ausencia;
- reconstruir un procedimiento matemático con ejemplos;
- estudiar con apoyo de los textos guía;
- experimentar con parámetros antes de resolver un ejercicio;
- practicar y autoevaluarse desde computador, tableta o teléfono;
- comparar teoría, simulación y medición.

La secuencia recomendada es:

**teoría → interpretación física → matemática → ejemplo resuelto → interacción → ejercicio → retroalimentación.**

En el bloque de fuentes se utiliza deliberadamente un capacitor pequeño o moderado como configuración didáctica inicial, de forma que la carga, descarga, \(t_1\), el tiempo total de descarga y el rizado sean claramente visibles antes de estudiar la regulación Zener.

## Lectura de hojas de datos

La versión 9 incorpora un módulo específico de **lectura e interpretación de datasheets** orientado al laboratorio y a la selección práctica de componentes. Utiliza como ejemplos:

- la familia rectificadora **1N4001–1N4007**;
- la familia Zener **1N4728A–1N4758A**, con énfasis en el **1N4736A**.

El estudiante aprende a diferenciar:

- límites absolutos;
- condiciones de prueba;
- valores mínimo, típico y máximo;
- corriente promedio frente a corriente de pulso;
- potencia y reducción térmica;
- impedancia Zener y corriente de rodilla;
- encapsulado, marcación y polaridad.

## Trabajo propuesto opcional

La actividad integradora de fuente regulada se presenta públicamente como **Trabajo propuesto opcional**. Las condiciones de valoración o uso dentro de la asignatura se comunican en clase. El sitio conserva la ruta `proyecto1.html` para no romper enlaces anteriores.

La actividad incorpora comprobación interactiva de resultados y preguntas abiertas para relacionar cálculo, simulación y comportamiento físico.
