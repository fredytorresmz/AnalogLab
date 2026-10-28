# AnalogLab

**Electrónica Analógica y Laboratorio** · Versión **15.2**

AnalogLab es una plataforma educativa gratuita para aprender y practicar electrónica analógica. Reúne explicaciones claras, circuitos, gráficas, ejercicios resueltos paso a paso, simuladores y cuestionarios de repaso.

Está dirigida a estudiantes que quieren complementar sus clases, recuperar un tema o estudiar a su propio ritmo.

**[Abrir AnalogLab](https://fredytorresmz.github.io/AnalogLab/)**

## ¿Qué puedes estudiar?

| Tema | Contenido | Abrir |
| --- | --- | --- |
| Diodos en DC | Unión PN, polarización, modelos y análisis de circuitos | [Ir al módulo](dc.html) |
| Diodos en AC | Rectificación, filtros y señales alternas | [Ir al módulo](ac.html) |
| Diodo Zener | Regulación, diseño y límites de funcionamiento | [Ir al módulo](zener.html) |
| BJT en DC I y II | Polarización, punto Q, redes compuestas y conmutación | [Parte I](bjt-dc.html) · [Parte II](bjt-dc2.html) |
| BJT en AC | Modelos \(r_e\) e híbrido-π, configuraciones y ganancia | [Ir al módulo](bjt-ac.html) |
| FET, JFET y MOSFET | Familias, funcionamiento, polarización y aplicaciones | [Ir al módulo](fet.html) |
| Prácticas y talleres | Actividades experimentales, problemas y autoevaluación | [PWM y puente H](practica-pwm555.html) · [Taller BJT AC](taller-bjt-ac.html) |
| Herramientas de apoyo | Interpretación de hojas de datos y trabajo integrador | [Datasheets](datasheet.html) · [Proyecto](proyecto1.html) |

## Cómo utilizar AnalogLab

1. **Elige un módulo** desde el menú de la página.
2. **Lee el concepto** y su explicación con ejemplos sencillos.
3. **Sigue los ejercicios resueltos** antes de intentar los propuestos.
4. **Explora las gráficas y los simuladores** para observar qué cambia al modificar los valores.
5. **Resuelve las preguntas de repaso** y revisa la retroalimentación.

No necesitas crear una cuenta para navegar por el sitio. Algunas actividades guardan tu avance en el mismo navegador; no envían automáticamente tus resultados a un docente.

## Cómo obtener una copia

Puedes usar **Code → Download ZIP** en GitHub y descomprimir el proyecto, o clonarlo con Git:

```bash
git clone https://github.com/fredytorresmz/AnalogLab.git
cd AnalogLab
```

Para abrirlo localmente, puedes iniciar un servidor estático con Python:

```bash
python3 -m http.server 8000
```

Después entra a `http://localhost:8000/`. En Windows también puedes usar `py -m http.server 8000`.

El proyecto está desarrollado con **HTML, CSS y JavaScript**. No requiere instalación de paquetes, compilación ni base de datos para consultar sus módulos.

## Publicar tu propia copia con GitHub Pages

1. Usa **Fork** para crear una copia del repositorio en tu cuenta de GitHub.
2. En tu copia, abre **Settings → Pages**.
3. Selecciona **Deploy from a branch**, la rama principal y la carpeta **/(root)**.
4. Guarda la configuración. GitHub mostrará la dirección pública de tu página cuando termine la publicación.

Conserva la estructura de archivos y carpetas al modificar el sitio.

## Organización del proyecto

```text
AnalogLab/
├── index.html       # Página principal
├── *.html           # Módulos y actividades
├── css/             # Estilos
├── js/              # Interactividad y simuladores
├── data/            # Preguntas y datos de apoyo
├── assets/          # Diagramas e ilustraciones
└── vendor/          # Bibliotecas utilizadas por el sitio
```

## Referencias y uso responsable

Los contenidos se apoyan en textos de electrónica como los de **Boylestad y Nashelsky**, **Malvino y Bates** y **Pleite Guerra y colaboradores**, además de hojas de datos de fabricantes. Las fórmulas y simulaciones explican modelos de estudio: al construir un circuito real, comprueba siempre las conexiones, la alimentación y las especificaciones de los componentes.

**Licencias:** código bajo [MIT](LICENSE), contenido académico original bajo [CC BY 4.0](LICENSE-CONTENT.md). Los materiales y bibliotecas de terceros mantienen sus propias condiciones de uso.

**Autor:** Fredy Torres · 2026.
