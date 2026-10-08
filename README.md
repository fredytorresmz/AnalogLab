# AnalogLab v14.3 · Acuerdo de laboratorio 10–12 V y atribución

- **Motor:** alimentación de laboratorio propuesta de 10 a 12 V DC solo para motores cuya ficha admita el voltaje seleccionado. Se requiere corriente nominal/de bloqueo y fuente limitada; no se autoriza ningún circuito solo por presentar una tensión nominal compatible.
- **Temporizador:** a 10–12 V, la rama original con resistencia 470 Ω y zener 15 V **no regula a 15 V**. El 555 y su etapa de mando deben alimentarse mediante una solución revisada y estable, con tierras comunes y compatibilidad eléctrica comprobada. No construir sin adaptación supervisada.
- **Autoría:** se localizó el artículo de **Jean-Bernard Guiot**, *Circuit Provides Bidirectional, Variable-Speed Motor Control*, EDN / RadioLocman: https://www.radiolocman.com/shem/schematics.html?di=648713. La edición pública enlaza la publicación original, sin incorporar/copiar el JPG ni los recortes de terceros.
- **Evaluación:** 98 preguntas en cuatro modalidades, 10 por intento, calificación de 0 a 5; mejores notas guardadas solo localmente en el navegador.
- **Alcance:** siguen pendientes las corrientes por grupo, la especificación del fusible de 3 A, las características de los diodos, el diseño final de alimentación del 555, excitación, disipación y estado seguro de las entradas antes de energizar.

---

# AnalogLab

## Electrónica Analógica y Laboratorio

**AnalogLab** es un recurso universitario abierto de apoyo para el estudio de Electrónica Analógica y Laboratorio. Está pensado para conectar teoría, análisis matemático, simulación, lectura de datasheets y práctica de laboratorio, sin depender de una institución o curso específico.

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

Los materiales de clase pueden utilizarse como insumo pedagógico, pero antes de incorporarlos al sitio las expresiones, ejemplos y modelos se contrastan con las referencias guía y se presentan con notación matemática normalizada.

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

La actividad integradora de fuente regulada se presenta públicamente como **Trabajo propuesto opcional** y puede utilizarse como ejercicio complementario de diseño. El sitio conserva la ruta `proyecto1.html` para no romper enlaces anteriores.

La actividad incorpora comprobación interactiva de resultados y preguntas abiertas para relacionar cálculo, simulación y comportamiento físico.

## Módulo Zener ampliado (v10)

El módulo Zener se reorganizó como capítulo de estudio autónomo:

1. fundamentos breves;
2. datos esenciales del datasheet;
3. método universal ON/OFF;
4. punto de operación con valores fijos;
5. diseño con resistencia serie variable;
6. diseño con carga variable;
7. diseño con fuente variable;
8. potencia y peores condiciones;
9. simulador por casos;
10. aplicación industrial de baja potencia;
11. verificación numérica, pregunta abierta y selección múltiple razonada.

Las deducciones parten de KCL/KVL y del procedimiento de comprobar primero el estado del Zener. La página distingue explícitamente entre parámetros de prueba del datasheet y límites de diseño.


## v10.2
- Refuerzo pedagógico del módulo Zener: nuevas gráficas conceptuales, cuadro resumen de fórmulas por caso, bancos ampliados de preguntas y enunciados abiertos aleatorios para estudio autónomo.


## BJT en DC (v11)
Nuevo capítulo universitario de estudio autónomo: construcción NPN/PNP, operación física, corrientes, alpha/beta, modelo DC, regiones de operación, curvas características, procedimiento de análisis por regiones, conmutación, recta de carga, punto Q, lectura de datasheet 2N3904, simulador y evaluación aleatoria.


## v12 · BJT DC completo
- El sitio se presenta explícitamente como recurso universitario abierto, no ligado a una evaluación o institución concreta.
- El capítulo BJT DC integra fundamentos físicos, modelos, regiones, curvas, recta de carga, punto Q, ejemplos revisados, polarización fija, resistencia de emisor, divisor de tensión, formulario de configuraciones, conmutación, datasheet, simuladores y problemas aplicados.
- Se ampliaron los ejercicios aleatorios, el diseño de punto Q y el banco de selección múltiple.


## v12.1
- El capítulo BJT DC refuerza la recta de carga como primer mapa de la malla de salida antes de validar una hipótesis activa.
- La presentación general del sitio se mantiene abierta a estudiantes universitarios de cualquier institución.
- Se eliminan referencias públicas a exámenes o evaluación de un curso específico.


## v13.1 · BJT DC II

Se incorpora un segundo capítulo BJT de corriente continua dedicado a redes compuestas, Darlington, par complementario/Sziklai, acoplamiento directo, espejos de corriente, drivers de relé y motor, puente H, protección inductiva, potencia/SOA, selección por datasheet y comparación teoría-simulación.

La revisión v13.1 fortalece el enfoque pedagógico: diagramas funcionales simplificados para las redes complejas, separación visual de etapas, guía paso a paso y problemas con pistas progresivas, comprobaciones y criterios de decisión. La práctica no se limita a obtener un resultado numérico: cada ejercicio conduce por esquema, malla de carga, excitación, región de operación, potencia/protección, simulación y conclusión.

La página de datasheets se amplía con 2N3904, TIP41C/TIP42C y TIP122. El capítulo mantiene fuera el análisis de pequeña señal y respuesta en frecuencia, que se desarrollará posteriormente en BJT AC.

Referencias de estudio: Boylestad & Nashelsky (11th ed.); Malvino, Bates & Hoppe (2025 Release como referencia editorial actual); Pleite Guerra et al.; datasheets de onsemi y STMicroelectronics.


## v14 · BJT en AC y preparación de práctica PWM
- `bjt-ac.html`: guía de análisis en AC a pequeña señal, modelo r_e primero, introducción a híbrido-π, configuración CE/CC/CB, equivalentes dibujados, calculadoras de parámetros, ejercicios con pistas y autoevaluación de 20 preguntas (10 por intento). Basado en el cap. 5 de Boylestad (10.ª ed.); capítulos 9–11 de Malvino; tema 3 de Pleite Guerra y colaboradores como base conceptual.
- `practica-pwm555.html`: módulo **preparatorio** de 555+PWM+puente H, pinout, gráfico PWM interactivo, diagrama funcional de puente H, criterios de reemplazo, procedimiento seguro y cuestionario de 40 preguntas (10 por intento), selección múltiple, V/F, numéricas y respuestas breves, nota 0–5 con mejor resultado por grupo guardado localmente en navegador.
- **Pendiente obligatorio de docente:** esquemático descargado de internet. Cuando se adjunte, se debe auditar transistores, pines, circuito 555 concreto, redes temporizadoras, diodos, interruptores, condiciones térmicas, corriente de arranque, inventario exacto, valores y reemplazos. Los diagramas de bloques de la práctica NO sustituyen un esquema de cableado.
- Fuentes de fabricante: [Texas Instruments NE555](https://www.ti.com/lit/ds/symlink/ne555.pdf) y [ST TIP41C/TIP42C](https://www.st.com/resource/en/datasheet/tip41c.pdf) como ejemplo de lectura de hoja de datos, sin afirmar que sean los transistores del esquema original.
- Licencia del código MIT y del contenido propio CC BY 4.0. Los libros guía no se redistribuyen.

## Novedades v14 · BJT AC y práctica PWM 555

- `bjt-ac.html`: análisis AC del BJT a partir del punto Q, conversión al equivalente de banda media, modelo `r_e`, híbrido-π, configuraciones CE/CC/CB, simulador, ejercicios progresivos y cuestionario. Los ejemplos y diagramas son elaboración didáctica propia basada en los capítulos citados de Boylestad, Malvino y Pleite Guerra.
- `practica-pwm555.html`: guía preliminar para controlar un motor DC con PWM generado por 555 y puente H de transistores. **No es un esquema de montaje validado**: aún se requiere el diagrama original del docente para inventario, valores, conexiones y sustituciones.
- La evaluación de práctica selecciona **10 preguntas de un banco de 40**, con selección múltiple, verdadero/falso, ejercicios numéricos y respuestas breves. La calificación es **0–5** y la mejor nota por grupo se conserva solo en el navegador local. No hay envío automático de resultados al docente.
- `pwm555-puenteh.html` es un enlace de compatibilidad que redirige a `practica-pwm555.html`; **no** constituye otra evaluación.

### Antes del montaje real de la práctica

1. Adjuntar el esquema fuente del puente H/555 con referencia o URL de origen.
2. Revisar correspondencia entre pinout, límites eléctricos, corriente de arranque del motor, disipación y protecciones.
3. Validar etapas por separado con fuente limitada en corriente antes de conectar al motor.
4. Confirmar las referencias sustitutas exclusivamente contra los datasheets de los elementos del montaje real.

### Publicación

Sube **el contenido de la raíz del ZIP** a la raíz del repositorio de GitHub Pages, preservando las carpetas `css/`, `js/`, `data/`, `vendor/` y `assets/`. En GitHub Pages el archivo inicial es `index.html`.


## Complemento octubre 2026 · Esquemático real de PWM 555 y puente H

Actualización v14.3: la edición pública enlaza la obra atribuida a Jean-Bernard Guiot; las imágenes JPG de terceros no se incluyen. El material original de AnalogLab conserva su licencia según `LICENSE-CONTENT.md`.

La página diferencia componentes identificados de datos aún pendientes. El circuito NO se declara aprobado para montaje de potencia. 555, control BC546/BC556, Darlington, fusible 3 A y BYV26E requieren las comprobaciones descritas en la guía.

## v14.4 · Guía de laboratorio progresiva (8 octubre 2026)

Se reestructura `practica-pwm555.html` con un diseño didáctico propio, inspirado solamente en la **idea organizativa general** de la guía institucional proporcionada por el docente (objetivos, materiales, procedimiento, mediciones y comparación). No reproduce texto, figuras, numeración, encabezados ni las actividades de esa guía previa.

- Presenta **once apartados**: visión del sistema, PWM/NE555, selección del motor 6/9/12 V, puente H, función de las etapas, materiales accesibles en Colombia, **nueve fases de trabajo**, ejercicios tutor resueltos, tablas de resultados, cuestionario y bibliografía.
- El apartado de materiales incluye referencias originales y candidatos observados en catálogos colombianos, especialmente Didácticas Electrónicas I+D y Suconel. Existencias y precios no están garantizados; los reemplazos de dispositivos de potencia exigen comparar hojas de datos.
- Incorpora hoja de mediciones editable por el estudiante y opción para copiar un resumen, con guardado local cuando el navegador lo permite (`js/lab-report.js`). No envía datos a un servidor.
- El cuestionario mantiene preguntas aleatorias, nota de 0 a 5 y repetición; se agregan reactivos del procedimiento y se reduce la presencia de cuestiones editoriales.
- La figura de Jean-Bernard Guiot se **enlaza** a RadioLocman en lugar de redistribuirse. El SVG propio presente es un **mapa de funcionamiento**, no un esquema eléctrico de cableado.
- Se diferencia de forma expresa entre prueba segura del 555, interfaz de mando y ensayo de potencia. Con 10–12 V de entrada, la red del circuito original **470 Ω + zener 15 V no puede regular a 15 V** y necesita adaptación antes de construir el montaje completo.
- La fuente utilizada debe ser compatible con cada motor: para un motor 6 V o 9 V es necesario usar alimentación que no exceda lo que admite, no conectar 10–12 V directamente.

**Nota técnica**: el HTML enseña la secuencia de laboratorio y permite registrar resultados; no constituye homologación eléctrica de todas las posibles combinaciones motor–transistores–diodos. Para pasar de esquema publicado a montaje concreto se debe contrastar con las hojas de datos y medir las condiciones de trabajo.
