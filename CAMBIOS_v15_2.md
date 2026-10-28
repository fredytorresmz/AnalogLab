# Cambios de publicación · v15.2

## Pedagogía
- Un mismo patrón por tema: concepto técnico, explicación de aula, ejemplo, verificación y fuente.
- Objetivos de lectura con ruta inicial y recordatorios centrados en decisiones del estudiante.
- Se conserva el foco JFET introductorio y MOSFET aplicado, incluidas polarización DC y pequeña señal.
- Tres problemas tutor nuevos (pérdidas, región y ganancia cargada) además de los existentes.

## Correcciones técnicas
- Gráfica JFET trazada desde Shockley con el punto de ejemplo (-2 V, 2 mA).
- Regiones MOS con condiciones y modelo por tramos coherente con `k`.
- Diferencia entre saturación MOS para amplificación y conducción óhmica para conmutación.
- Se explicitan la limitación del modelo de canal largo y la necesidad de verificar datasheets.
- Esquema claro de divisor, motor de lado bajo y diodo flyback, con notas de alcance.

## Plataforma
- Conserva menú compacto por cursos, rutas de las otras páginas, simulador y cuestionarios.
- `core.js`: muestreo aleatorio sin sesgo de ordenación y mayor diversidad entre intentos.
- Documentación de versión para despliegue GitHub Pages.

## Alcance de validación
Revisiones automáticas de sintaxis de scripts, referencias locales y estructura HTML; ejecución de página de FET en navegador aislado, incluidos MathJax local, simulador, figuras y navegación en anchos 1365 y 390 px. No es una prueba eléctrica de laboratorio ni una auditoría funcional exhaustiva de cada página heredada.
