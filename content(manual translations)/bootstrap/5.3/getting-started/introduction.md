---
weight: 1
linkTitle: Introducción
title: Comienza con Bootstrap en 3 simples pasos · Bootstrap en Español v5.3
description: Bootstrap es un conjunto de herramientas de interfaz potente y repleto de funciones. Construye cualquier cosa, desde el prototipo hasta la producción, en minutos.
---

# Comienza con Bootstrap en 3 simples pasos

Bootstrap es un conjunto de herramientas de interfaz potente y repleto de funciones. Construye cualquier cosa, desde el prototipo hasta la producción, en minutos.

{{< content-ads/top-banner >}}

## Inicio rápido {#quick-start}

Comienza incluyendo CSS y JavaScript listos para producción de Bootstrap a través de CDN sin necesidad de realizar ningún paso de compilación. Velo en la práctica con esta [demo de Bootstrap CodePen](https://codepen.io/team/bootstrap/pen/qBamdLj).

1. **Crea un nuevo archivo `index.html` en la raíz de tu proyecto**. Incluye el `<meta name="viewport">` también para un [comportamiento de respuesta adecuado](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) en dispositivos móviles.

    ```html {filename="HTML"}
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
      </body>
    </html>
    ```

2. **Incluye CSS y JS de Bootstrap.** Coloca la etiqueta `<link>` en el `<head>` para nuestro CSS y la etiqueta `<script>` para nuestro paquete JavaScript (incluido Popper para colocar menús desplegables, poppers y tooltips) antes del `</body>`. Obtén más información sobre nuestros [enlaces CDN](/bootstrap/5.3/getting-started/introduction/#cdn-links).

    ```html {filename="HTML"}
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      </head>
      <body>
        <h1>Hello, world!</h1>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      </body>
    </html>
    ```

    También puedes incluir [Popper](https://popper.js.org) y nuestro JS por separado. Si no planeas usar menús desplegables, ventanas emergentes popovers o tooltips, ahorra algunos kilobytes al no incluir Popper.

    ```html {filename="HTML"}
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
    ```

{{< content-ads/middle-banner-1 >}}

3. **¡Hola mundo!** Abre la página en el navegador de tu elección para ver tu página Bootstrapped. Ahora puedes empezar a construir con Bootstrap creando tu propio [layout](/bootstrap/5.3/layout/grid), agregando docenas de [componentes](/bootstrap/5.3/components/buttons) y utilizando [nuestros ejemplos oficiales](/bootstrap/5.3/getting-started/introduction/#:~:text=nuestros%20ejemplos%20oficiales).

{{< bootstrap/content-suggestion >}}

## Enlaces CDN {#cdn-links}

Como referencia, aquí están nuestros enlaces CDN principales.

| Descripción | URL                                                                          |
| ----------- | ---------------------------------------------------------------------------- |
| CSS         | https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css      |
| JS          | https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js |

También puedes usar la CDN para obtener cualquiera de nuestras [compilaciones adicionales enumeradas en la página Contenidos](/bootstrap/5.3/getting-started/contents).

## Próximos pasos {#next-steps}

- Lee un poco más sobre algunas [configuraciones importantes del entorno global](/bootstrap/5.3/getting-started/introduction/#important-globals) que utiliza Bootstrap.
- Lee sobre lo que se incluye en Bootstrap en nuestra [sección de contenidos](/bootstrap/5.3/getting-started/contents) y la lista de [componentes que requieren JavaScript](/bootstrap/5.3/getting-started/introduction/#js-components) a continuación.
- ¿Necesitas un poco más de potencia? Considera compilar con Bootstrap [incluidos los archivos fuente a través del administrador de paquetes](/bootstrap/5.3/getting-started/download/#package-managers).
- ¿Quieres usar Bootstrap como módulo con `<script type="module">`? Consulta nuestra sección [uso de Bootstrap como módulo](/bootstrap/5.3/getting-started/javascript/#using-bootstrap-as-a-module).

{{< content-ads/middle-banner-2 >}}

## Componentes JS {#js-components}

¿Tienes curiosidad por saber qué componentes requieren explícitamente nuestro JavaScript y Popper? Si no estás seguro acerca de la estructura general de la página, sigue leyendo para ver una plantilla de página de ejemplo.

- Alertas descartables
- Botones para alternar estados y funcionalidad de casilla de verificación/radio
- Carrusel para todos los comportamientos, controles e indicadores de las diapositivas.
- Contraer para alternar la visibilidad del contenido
- Menú desplegables para visualización y posicionamiento (también requiere [Popper](https://popper.js.org))
- Modales para mostrar, posicionar y comportamiento de desplazamiento
- Barra de navegación para extender nuestros complementos Collapse y Offcanvas para implementar comportamientos responsive
- Navs con el complemento Tab para alternar paneles de contenido
- Offcanvases para visualización, posicionamiento y comportamiento de desplazamiento
- Scrollspy para comportamiento de desplazamiento y actualizaciones de navegación
- Toasts para mostrar y descartar
- Tooltips y popovers para mostrar y posicionar (también requiere [Popper](https://popper.js.org))

## Globales importantes {#important-globals}

Bootstrap emplea un puñado de estilos y configuraciones globales importantes, todos los cuales están casi exclusivamente orientados a la normalización de estilos entre navegadores. Vamos a sumergirnos.

{{< bootstrap/content-suggestion >}}

### HTML5 doctype {#html5-doctype}

Bootstrap requiere el uso de HTML5 doctype. Sin él, verás un estilo original e incompleto.

{{< content-ads/middle-banner-3 >}}

```html {filename="HTML"}
<!doctype html>
<html lang="en">
  ...
</html>
```

### Viewport meta {#viewport-meta}

Bootstrap se desarrolla mobile first, una estrategia en la que primero optimizamos el código para dispositivos móviles y luego escalamos los componentes según sea necesario usando media queries CSS. Para garantizar una representación adecuada y un zoom táctil para todos los dispositivos, agrega la metaetiqueta responsive de viewport a tu `<head>`.

```html {filename="HTML"}
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Puedes ver un ejemplo de esto en acción en el [inicio rápido](/bootstrap/5.3/getting-started/introduction/#quick-start).

### Box-sizing {#box-sizing}

Para un dimensionado más sencillo en CSS, cambiamos el valor global `box-sizing` de `content-box` a `border-box`. Esto garantiza que el `padding` no afecte el ancho final calculado de un elemento, pero puede causar problemas con algunos programas de terceros como Google Maps y Google Custom Search Engine.

En las raras ocasiones en que necesites sobrescribirlo, usa algo como lo siguiente:

{{< content-ads/middle-banner-4 >}}

```css {filename="CSS"}
.selector-for-some-widget {
  box-sizing: content-box;
}
```

Con el fragmento anterior, los elementos anidados (incluido el contenido generado mediante `::before` y `::after`) heredarán el `box-sizing` especificado para ese `.selector-for-some-widget`.

Obtén más información sobre [model box y tamaños en CSS Tricks](https://css-tricks.com/box-sizing).

### Reboot {#reboot}

Para mejorar el renderizado entre navegadores, utilizamos [Reboot](/bootstrap/5.3/content/reboot) para corregir inconsistencias entre navegadores y dispositivos mientras proporcionando restablecimientos un poco más obstinados de elementos HTML comunes.

{{< bootstrap/content-suggestion >}}

## Community {#community}

Mantente actualizado sobre el desarrollo de Bootstrap y comunícate con la comunidad con estos útiles recursos.

{{< content-ads/middle-banner-5 >}}

- Lee y suscríbete a [El blog oficial de Bootstrap](https://blog.getbootstrap.com).
- Haz preguntas y explora [nuestras discusiones de GitHub](https://github.com/twbs/bootstrap/discussions).
- Discute, haz preguntas y más en [la comunidad Discord](https://discord.gg/bZUvakRU3M) o el [subreddit de Bootstrap](https://reddit.com/r/bootstrap).
- Chatea con otros Bootstrappers en IRC. En el servidor `irc.libera.chat`, en el canal `#bootstrap`.
- Puedes encontrar ayuda para la implementación en Stack Overflow (etiquetado como [bootstrap-5](https://stackoverflow.com/questions/tagged/bootstrap-5)).
- Los desarrolladores deben usar la palabra clave `bootstrap` en paquetes que modifican o agregan funcionalidad a Bootstrap cuando se distribuyen a través de [npm](https://www.npmjs.com/search?q=keywords:bootstrap) o mecanismos de entrega similares para una máxima visibilidad.

También puedes seguir a [@getbootstrap en Twitter](https://twitter.com/getbootstrap) para conocer los últimos chismes y fantásticos vídeos musicales.

{{< content-ads/bottom-banner >}}
