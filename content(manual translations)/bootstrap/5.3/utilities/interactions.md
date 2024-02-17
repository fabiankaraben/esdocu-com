---
weight: 8
linkTitle: Interacciones
title: Uso de las utilidades de Interacciones en Bootstrap · Bootstrap en Español v5.3
description: Clases de utilidad que cambian la forma en que los usuarios interactúan con los contenidos de un sitio web.
noindex: true
---

# Uso de las utilidades de Interacciones en Bootstrap

Clases de utilidad que cambian la forma en que los usuarios interactúan con los contenidos de un sitio web.

{{< content-ads/top-banner >}}

Selección de texto {#text-selection}
-------------------------------------

Cambiar la forma en la que se selecciona el contenido cuando el usuario interactúa con él.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/interactions/text-selection.html" >}}
```html {filename="HTML"}
    <p class="user-select-all">Este párrafo quedará completamente seleccionado cuando el usuario haga clic en él.</p>
    <p class="user-select-auto">Este párrafo tiene un comportamiento de selección predeterminado.</p>
    <p class="user-select-none">Este párrafo no será seleccionable cuando el usuario haga clic en él.</p>
```
{{< /demo-iframe >}}

Eventos de puntero {#pointer-events}
-------------------------------------

{{< content-ads/middle-banner-1 >}}

Bootstrap proporciona las clases `.pe-none` y `.pe-auto` para evitar o agregar interacciones de elementos.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/interactions/pointer-events.html" >}}
```html {filename="HTML"}
    <p><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">No se puede hacer clic en este enlace</a>.</p>
    <p><a href="#" class="pe-auto">Se puede hacer clic en este enlace</a> (este es el comportamiento predeterminado).</p>
    <p class="pe-none"><a href="#" tabindex="-1" aria-disabled="true">No se puede hacer clic en este enlace</a> porque la propiedad <code>pointer-events</code> se hereda de su padre. Sin embargo, <a href="#" class="pe-auto">este enlace</a> tiene una clase <code>pe-auto</code> y se puede hacer clic en el.</p>
```
{{< /demo-iframe >}}

La clase `.pe-none` (y la propiedad CSS `pointer-events` que establece) solo previene las interacciones con un puntero (ratón, lápiz óptico, touch). Los enlaces y controles con `.pe-none` son, de forma predeterminada, aún enfocables y procesables para los usuarios del teclado. Para garantizar que estén completamente neutralizados incluso para los usuarios de teclado, es posible que debas agregar atributos adicionales como `tabindex="-1"` (para evitar que reciban el foco del teclado) y `aria-disabled="true"` (para transmitir el hecho de que están efectivamente deshabilitados para tecnologías de asistencia) y posiblemente usar JavaScript para evitar por completo que sean procesables.

Si es posible, la solución más sencilla es:

{{< content-ads/middle-banner-2 >}}

* Para controles de formulario, agrega el atributo HTML `disabled`.
* Para enlaces, elimina el atributo `href`, convirtiéndolo en un enlace ancla o marcador de posición no interactivo.

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

### API de utilidades de Sass {#sass-utilities-api}

{{< content-ads/middle-banner-3 >}}

Las utilidades de interacción se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"user-select": (
  property: user-select,
  values: all auto none
),
"pointer-events": (
  property: pointer-events,
  class: pe,
  values: none auto,
),
```

{{< content-ads/bottom-banner >}}
