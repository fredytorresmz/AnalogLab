# AnalogLab — Electrónica Analógica Interactiva

Primera versión del portafolio web para la asignatura **Electrónica Analógica y Laboratorio**.

## Contenido incluido

- Navegación tipo libro por 16 capítulos.
- Progreso de estudio guardado en el navegador.
- Modo clase para proyección.
- Repaso de semiconductores y unión PN.
- Curva I–V interactiva mediante ecuación de Shockley.
- Comparación de cuatro modelos del diodo:
  - ideal,
  - caída constante,
  - lineal por tramos,
  - Shockley.
- Análisis DC y método ON/OFF.
- Ejemplo resuelto de circuito serie.
- Ejercicios autocorregibles.
- Análisis entre dos potenciales.
- Diseñador básico de resistencia para LED.
- Simulador de recta de carga y punto Q.
- Generador de problemas.
- Autoevaluación de 5 preguntas.
- Estructura preparada para añadir Diodos AC.

## Estructura

```text
electronica_analogica_interactiva_v1/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── data/
│   └── questions.js
└── README.md
```

## Publicar en GitHub Pages

1. Cree un repositorio en GitHub, por ejemplo `analoglab`.
2. Suba el contenido de esta carpeta a la raíz del repositorio.
3. En GitHub abra **Settings → Pages**.
4. En **Build and deployment**, seleccione **Deploy from a branch**.
5. Seleccione la rama `main` y la carpeta `/root`.
6. Guarde los cambios.
7. GitHub mostrará la URL pública cuando el sitio esté desplegado.

## Próxima fase recomendada

1. Completar los capítulos 7–11 con circuitos SVG realmente interactivos.
2. Añadir banco de 20–30 ejercicios clasificados por nivel.
3. Añadir modo de laboratorio: valor teórico, valor medido y error porcentual.
4. Crear la Parte II: Diodos en AC.
5. Añadir BJT y polarización usando la misma arquitectura.
