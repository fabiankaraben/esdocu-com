---
weight: 8
linkTitle: Interacciones
title: Utilidades de Interacciones · Bootstrap en Español v5.1
description: Clases de utilidad que cambian la forma en la que los usuarios interactúan con los contenidos de un sitio web.
type: docs
---

# Utilidades de Interacciones de Bootstrap

Clases de utilidad que cambian la forma en la que los usuarios interactúan con los contenidos de un sitio web.

{{< content-ads/top-banner >}}

## Selección de texto

Cambiar la forma en que se selecciona el contenido cuando el usuario interactúa con él.

{{< bootstrap/5-1/example >}}
<p class="user-select-all">Este párrafo se seleccionará por completo cuando el usuario haga clic.</p>
<p class="user-select-auto">Este párrafo tiene un comportamiento de selección predeterminado.</p>
<p class="user-select-none">Este párrafo no se podrá seleccionar cuando el usuario haga clic en él.</p>
{{< /bootstrap/5-1/example >}}

## Eventos de puntero

{{< content-ads/middle-banner-1 >}}

Bootstrap proporciona las clases `.pe-none` y `.pe-auto` para evitar o agregar interacciones de elementos.

{{< bootstrap/5-1/example >}}
<p>No se puede hacer clic en <a href="#" class="pe-none" tabindex="-1" aria-disabled="true">este enlace</a>.</p>
<p><a href="#" class="pe-auto">Este enlace</a> se puede hacer clic (este es el comportamiento predeterminado).</p>
<p class="pe-none">No se puede hacer clic en <a href="#" tabindex="-1" aria-disabled="true">este enlace</a> porque la propiedad <code>pointer-events</code> se hereda de su padre. Sin embargo, <a href="#" class="pe-auto">este enlace</a> tiene una clase <code>pe-auto</code> y se puede hacer clic en él.</p>
{{< /bootstrap/5-1/example >}}

La clase `.pe-none` (y la propiedad CSS `pointer-events` que establece) solo evita las interacciones con un puntero (mouse, lápiz óptico, toque). Los enlaces y controles con `.pe-none` son, de forma predeterminada, aún enfocables y procesables para los usuarios del teclado. Para asegurarse de que estén completamente neutralizados, incluso para los usuarios de teclado, es posible que debas agregar más atributos como `tabindex="-1"` (para evitar que reciban el foco del teclado) y `aria-disabled="true"` (para transmitir el hecho de que están efectivamente deshabilitados para las tecnologías de asistencia) y posiblemente usar JavaScript para evitar que sean accionables.

Si es posible, la solución más simple es:

{{< content-ads/middle-banner-2 >}}

- Para los controles de formulario, agrega el atributo HTML `disabled`.
* Para los enlaces, elimina el atributo `href`, convirtiéndolo en un enlace no interactivo o enlace placeholder.

## Sass

### API de utilidades

Las utilidades de interacción se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< bootstrap/5-1/docsref "/utilities/api#using-the-api" >}})

{{< bootstrap/5-1/scss-docs name="utils-interaction" file="scss/_utilities.scss" >}}

{{< content-ads/bottom-banner >}}
