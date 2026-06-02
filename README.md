# Portafolio Digital de Ciencias de la Vida

Esta carpeta contiene una versión profesional y editable del portafolio digital.

## Archivos principales

- `index.html`: estructura general del sitio y secciones principales.
- `style.css`: diseño visual, colores, tarjetas, responsive y animaciones.
- `style.js`: funciones que insertan contenido, crean tarjetas y controlan navegación.
- `portfolio-data.js`: textos, reflexiones, datos y enlaces a evidencias.
- `assets/`: carpeta recomendada para imágenes, capturas y recursos propios.

## Cómo abrirlo

Abre `index.html` directamente en el navegador. No necesita servidor ni instalación.

## Cómo editar textos

La forma más fácil es editar `portfolio-data.js`.

Para cambiar una reflexión:

```js
body: "Escribe aquí tu nueva reflexión."
```

Para agregar una evidencia:

```js
evidence: [
  { label: "Nombre visible del archivo", href: "assets/archivo.pdf" }
]
```

Para agregar una tarjeta nueva, copia un bloque como este dentro del arreglo correspondiente:

```js
{
  label: "Favorita 4",
  title: "Nombre de la actividad",
  body: "Explica por qué fue importante o qué aprendiste.",
  evidence: [{ label: "Documento", href: "assets/documento.pdf" }]
}
```

## Dónde agregar información según la guía

- Inicio: `profile`, `homeBlocks` y `finalReflection`.
- Casos integradores: `theory.integrativeCases`.
- Actividades favoritas: `theory.favoriteActivities`.
- Actividades no llamativas: `theory.leastFavoriteActivities`.
- Cortos de teoría: `theory.theoryShorts`.
- Pasaportes: `lab.passports`.
- Cortos de laboratorio: `lab.labShorts`.
- Laboratorios: `lab.labs`.
- CSI: `lab.csi`.

## Evidencias pendientes recomendadas

La estructura ya está lista, pero conviene agregar:

- Evidencia del Caso 3.
- Capturas o entregas de cortos de teoría.
- Capturas o entregas de cortos de laboratorio.
- Evidencia visual o entrega del CSI.
- Dos actividades no llamativas adicionales si quieres cumplir la guía al máximo.

## Nota importante

El sitio está pensado para ser fácil de actualizar. Si solo quieres cambiar contenido, edita `portfolio-data.js`. Si quieres cambiar el diseño, edita `style.css`. Si quieres agregar una sección nueva, crea la sección en `index.html`, agrega sus datos en `portfolio-data.js` y llama el render correspondiente en `style.js`.
