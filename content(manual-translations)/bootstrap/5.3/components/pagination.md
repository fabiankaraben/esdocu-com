---
weight: 17
linkTitle: Paginación
title: El componente de Paginación de Bootstrap · Bootstrap en Español v5.3
description: Documentación y ejemplos para mostrar la paginación para indicar que existe una serie de contenido relacionado en varias páginas.
---

# El componente de Paginación de Bootstrap

Documentación y ejemplos para mostrar la paginación para indicar que existe una serie de contenido relacionado en varias páginas.

{{< content-ads/top-banner >}}

Utilizamos un gran bloque de enlaces conectados para nuestra paginación, lo que hace que los enlaces sean difíciles de pasar por alto y fácilmente escalables, y al mismo tiempo proporcionamos grandes áreas de impacto. La paginación se construye con elementos HTML de lista para que los lectores de pantalla puedan anunciar la cantidad de enlaces disponibles. Utiliza un elemento envolvente `<nav>` para identificarlo como una sección de navegación para lectores de pantalla y otras tecnologías de asistencia.

Además, como las páginas probablemente tengan más de una sección de navegación, es recomendable proporcionar una `aria-label` descriptiva para `<nav>` para reflejar su propósito. Por ejemplo, si el componente de paginación se utiliza para navegar entre un conjunto de resultados de búsqueda, una etiqueta adecuada podría ser `aria-label="Search results pages"`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/pagination/overview.html" >}}
```html {filename="HTML"}
<nav aria-label="Ejemplo de navegación de página">
    <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
    </ul>
</nav>
```
{{< /demo-iframe >}}

Trabajar con íconos en el componente de Paginación {#working-with-icons}
------------------------------------------

¿Quieres usar un ícono o símbolo en lugar de texto para algunos enlaces de paginación? Asegúrate de proporcionar compatibilidad adecuada con el lector de pantalla con los atributos `aria`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/pagination/working-with-icons.html" >}}
```html {filename="HTML"}
<nav aria-label="Ejemplo de navegación de página">
    <ul class="pagination">
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Anterior">
                <span aria-hidden="true">«</span>
            </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#" aria-label="Siguiente">
                <span aria-hidden="true">»</span>
            </a>
        </li>
    </ul>
</nav>
```
{{< /demo-iframe >}}

Estados deshabilitados y activos {#disabled-and-active-states}
---------------------------------------------------------------

{{< content-ads/middle-banner-1 >}}

Los enlaces de paginación se pueden personalizar para diferentes circunstancias. Utiliza `.disabled` para enlaces en los que no se puedes hacer clic y `.active` para indicar la página actual.

Mientras que la clase `.disabled` usa `pointer-events: none` para _intentar_ deshabilitar el enlace funcionalidad de `<a>`s, esa propiedad CSS aún no está estandarizada y no tiene en cuenta la navegación con el teclado. Como tal, siempre debes agregar `tabindex="-1"` en los enlaces deshabilitados y usar JavaScript personalizado para deshabilitar completamente su funcionalidad.

{{< demo-iframe path="/demos/bootstrap/5.3/components/pagination/disabled-and-active-states-1.html" >}}
```html {filename="HTML"}
<nav aria-label="...">
    <ul class="pagination">
        <li class="page-item disabled">
            <a class="page-link">Anterior</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#">Siguiente</a>
        </li>
    </ul>
</nav>
```
{{< /demo-iframe >}}

Opcionalmente, puedes cambiar los anclajes activos o deshabilitados por `<span>`, u omitir el anclaje en el caso de las flechas anterior/siguiente, para eliminar haz clic en la funcionalidad y evita el foco del teclado manteniendo los estilos deseados.

{{< demo-iframe path="/demos/bootstrap/5.3/components/pagination/disabled-and-active-states-2.html" >}}
```html {filename="HTML"}
<nav aria-label="...">
    <ul class="pagination">
        <li class="page-item disabled">
            <span class="page-link">Anterior</span>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active" aria-current="page">
            <span class="page-link">2</span>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#">Siguiente</a>
        </li>
    </ul>
</nav>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Tamaños del componente de Paginación {#sizing}
------------------

{{< content-ads/middle-banner-2 >}}

¿Te apetece una paginación más grande o más pequeña? Agrega `.pagination-lg` o `.pagination-sm` para tamaños adicionales.

{{< demo-iframe path="/demos/bootstrap/5.3/components/pagination/sizing-1.html" >}}
```html {filename="HTML"}
<nav aria-label="...">
    <ul class="pagination pagination-lg">
        <li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
        </li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
    </ul>
</nav>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/pagination/sizing-2.html" >}}
```html {filename="HTML"}
<nav aria-label="...">
    <ul class="pagination pagination-sm">
        <li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
        </li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
    </ul>
</nav>
```
{{< /demo-iframe >}}

Alineación del componente de Paginación {#alignment}
------------------------

Cambiar la alineación de los componentes de paginación con [utilidades flexbox](/bootstrap/5.3/utilities/flex). Por ejemplo, con `.justify-content-center`:

{{< demo-iframe path="/demos/bootstrap/5.3/components/pagination/alignment-1.html" >}}
```html {filename="HTML"}
<nav aria-label="Ejemplo de navegación de página">
    <ul class="pagination justify-content-center">
        <li class="page-item disabled">
            <a class="page-link">Anterior</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#">Siguiente</a>
        </li>
    </ul>
</nav>
```
{{< /demo-iframe >}}

O con `.justify-content-end`:

{{< content-ads/middle-banner-3 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/pagination/alignment-2.html" >}}
```html {filename="HTML"}
<nav aria-label="Ejemplo de navegación de página">
    <ul class="pagination justify-content-end">
        <li class="page-item disabled">
            <a class="page-link">Anterior</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#">Siguiente</a>
        </li>
    </ul>
</nav>
```
{{< /demo-iframe >}}

Personalización del CSS del componente {#css}
-----------

### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Como parte del enfoque en evolución de variables CSS de Bootstrap, la paginación ahora usa variables CSS locales en `.pagination` para una personalización mejorada en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_pagination.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_pagination.scss)

```scss {filename="scss/_pagination.scss"}
--#{$prefix}pagination-padding-x: #{$pagination-padding-x};
--#{$prefix}pagination-padding-y: #{$pagination-padding-y};
@include rfs($pagination-font-size, --#{$prefix}pagination-font-size);
--#{$prefix}pagination-color: #{$pagination-color};
--#{$prefix}pagination-bg: #{$pagination-bg};
--#{$prefix}pagination-border-width: #{$pagination-border-width};
--#{$prefix}pagination-border-color: #{$pagination-border-color};
--#{$prefix}pagination-border-radius: #{$pagination-border-radius};
--#{$prefix}pagination-hover-color: #{$pagination-hover-color};
--#{$prefix}pagination-hover-bg: #{$pagination-hover-bg};
--#{$prefix}pagination-hover-border-color: #{$pagination-hover-border-color};
--#{$prefix}pagination-focus-color: #{$pagination-focus-color};
--#{$prefix}pagination-focus-bg: #{$pagination-focus-bg};
--#{$prefix}pagination-focus-box-shadow: #{$pagination-focus-box-shadow};
--#{$prefix}pagination-active-color: #{$pagination-active-color};
--#{$prefix}pagination-active-bg: #{$pagination-active-bg};
--#{$prefix}pagination-active-border-color: #{$pagination-active-border-color};
--#{$prefix}pagination-disabled-color: #{$pagination-disabled-color};
--#{$prefix}pagination-disabled-bg: #{$pagination-disabled-bg};
--#{$prefix}pagination-disabled-border-color: #{$pagination-disabled-border-color};
```

{{< content-ads/middle-banner-4 >}}

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$pagination-padding-y:              .375rem;
$pagination-padding-x:              .75rem;
$pagination-padding-y-sm:           .25rem;
$pagination-padding-x-sm:           .5rem;
$pagination-padding-y-lg:           .75rem;
$pagination-padding-x-lg:           1.5rem;

$pagination-font-size:              $font-size-base;

$pagination-color:                  var(--#{$prefix}link-color);
$pagination-bg:                     var(--#{$prefix}body-bg);
$pagination-border-radius:          var(--#{$prefix}border-radius);
$pagination-border-width:           var(--#{$prefix}border-width);
$pagination-margin-start:           calc(#{$pagination-border-width} * -1); // stylelint-disable-line function-disallowed-list
$pagination-border-color:           var(--#{$prefix}border-color);

$pagination-focus-color:            var(--#{$prefix}link-hover-color);
$pagination-focus-bg:               var(--#{$prefix}secondary-bg);
$pagination-focus-box-shadow:       $focus-ring-box-shadow;
$pagination-focus-outline:          0;

$pagination-hover-color:            var(--#{$prefix}link-hover-color);
$pagination-hover-bg:               var(--#{$prefix}tertiary-bg);
$pagination-hover-border-color:     var(--#{$prefix}border-color); // Todo in v6: remove this?

$pagination-active-color:           $component-active-color;
$pagination-active-bg:              $component-active-bg;
$pagination-active-border-color:    $component-active-bg;

$pagination-disabled-color:         var(--#{$prefix}secondary-color);
$pagination-disabled-bg:            var(--#{$prefix}secondary-bg);
$pagination-disabled-border-color:  var(--#{$prefix}border-color);

$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

$pagination-border-radius-sm:       var(--#{$prefix}border-radius-sm);
$pagination-border-radius-lg:       var(--#{$prefix}border-radius-lg);
```

{{< bootstrap/content-suggestion >}}

### Mixins Sass del componente {#sass-mixins}

[scss/mixins/_pagination.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/mixins/_pagination.scss)

```scss {filename="scss/mixins/_pagination.scss"}
@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {
    --#{$prefix}pagination-padding-x: #{$padding-x};
    --#{$prefix}pagination-padding-y: #{$padding-y};
    @include rfs($font-size, --#{$prefix}pagination-font-size);
    --#{$prefix}pagination-border-radius: #{$border-radius};
}
```

{{< content-ads/bottom-banner >}}
