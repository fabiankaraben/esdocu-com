---
weight: 18
linkTitle: Marcadores de posición y paginación
title: Componentes Marcadores de posición de Bootstrap · Bootstrap en Español v5.3
description: Usa marcadores de posición de carga para tus componentes o páginas para indicar que es posible que aún se esté cargando algo.
---

# Marcadores de posición y paginación

{{< content-ads/top-banner >}}

## Componentes Marcadores de posición de Bootstrap

Usa marcadores de posición de carga para tus componentes o páginas para indicar que es posible que aún se esté cargando algo.

Los marcadores de posición se pueden utilizar para mejorar la experiencia de tu aplicación. Están creados únicamente con HTML y CSS, lo que significa que no necesitas JavaScript para crearlos. Sin embargo, necesitarás algo de JavaScript personalizado para alternar su visibilidad. Su apariencia, color y tamaño se pueden personalizar fácilmente con nuestras clases de utilidades.

### Ejemplo del componente Marcador de posición {#example}

En el siguiente ejemplo, tomamos un componente de tarjeta típico y lo recreamos con marcadores de posición aplicados para crear una "tarjeta de carga". El tamaño y las proporciones son los mismos entre los dos.

{{< demo-iframe path="/demos/bootstrap/5.3/components/placeholders/example.html" >}}
```html {filename="HTML"}
<div class="card">
    <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
        aria-label="Marcador de posición" focusable="false" preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg">
        <title>Marcador de posición</title>
        <rect width="100%" height="100%" fill="#20c997"></rect>
    </svg>
    <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
            mayor parte del contenido de la tarjeta.</p>
        <a href="#" class="btn btn-primary">Ve a algún lado</a>
    </div>
</div>
<div class="card" aria-hidden="true">
    <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
        aria-label="Marcador de posición" focusable="false" preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg">
        <title>Marcador de posición</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
    </svg>
    <div class="card-body">
        <div class="h5 card-title placeholder-glow">
            <span class="placeholder col-6"></span>
        </div>
        <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
        </p>
        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
    </div>
</div>
```
{{< /demo-iframe >}}

### Cómo funciona el componente Marcador de posición {#how-it-works}

Crea marcadores de posición con la clase `.placeholder` y una clase de columna de cuadrícula (por ejemplo, `.col-6`) para establecer el `width`. Pueden reemplazar el texto dentro de un elemento o agregarse como una clase modificadora a un componente existente.

Aplicamos estilos adicionales a los `.btn` mediante `::before` para garantizar que la `height` sea respetado. Puedes ampliar este patrón para otras situaciones según sea necesario, o agregar un `&nbsp;` dentro del elemento para reflejar la altura cuando el texto real se representa en su lugar.

{{< demo-iframe path="/demos/bootstrap/5.3/components/placeholders/how-it-works.html" >}}
```html {filename="HTML"}
<p aria-hidden="true">
    <span class="placeholder col-6"></span>
</p>

<a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>
```
{{< /demo-iframe >}}

{{< callout type="info" emoji="" >}}
El uso de `aria-hidden="true"` solo indica que el elemento debe estar oculto para los lectores de pantalla. El comportamiento de _carga_ del marcador de posición depende de cómo los autores utilizarán realmente los estilos del marcador de posición, cómo planean actualizar las cosas, etc. Es posible que se necesite algo de código JavaScript para _intercambiar_ el estado del marcador de posición e informar a los usuarios de AT de la actualización.
{{< /callout >}}

#### Ancho {#width}

Puedes cambiar el `width` mediante clases de columnas de cuadrícula, utilidades de ancho o estilos en línea.

{{< demo-iframe path="/demos/bootstrap/5.3/components/placeholders/width.html" >}}
```html {filename="HTML"}
<span class="placeholder col-6"></span>
<span class="placeholder w-75"></span>
<span class="placeholder" style="width: 25%;"></span>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-1 >}}

#### Color {#color}

De forma predeterminada, el `placeholder` usa `currentColor`. Esto se puede sobrescribir con un color personalizado o una clase de utilidad.

{{< demo-iframe path="/demos/bootstrap/5.3/components/placeholders/color.html" >}}
```html {filename="HTML"}
<span class="placeholder col-12"></span>
<span class="placeholder col-12 bg-primary"></span>
<span class="placeholder col-12 bg-secondary"></span>
<span class="placeholder col-12 bg-success"></span>
<span class="placeholder col-12 bg-danger"></span>
<span class="placeholder col-12 bg-warning"></span>
<span class="placeholder col-12 bg-info"></span>
<span class="placeholder col-12 bg-light"></span>
<span class="placeholder col-12 bg-dark"></span>
```
{{< /demo-iframe >}}

#### Tamaños {#sizing}

El tamaño de los `.placeholder`se basa en el estilo tipográfico del elemento principal. Personalízalos con modificadores de tamaño: `.placeholder-lg`, `.placeholder-sm` o `.placeholder-xs`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/placeholders/sizing.html" >}}
```html {filename="HTML"}
<span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span>
```
{{< /demo-iframe >}}

#### Animación {#animation}

Anima marcadores de posición con `.placeholder-glow` o `.placeholder-wave` para transmitir mejor la percepción de que algo está _activamente_ cargado.

{{< demo-iframe path="/demos/bootstrap/5.3/components/placeholders/animation.html" >}}
```html {filename="HTML"}
<p class="placeholder-glow">
    <span class="placeholder col-12"></span>
</p>

<p class="placeholder-wave">
    <span class="placeholder col-12"></span>
</p>
```
{{< /demo-iframe >}}

### Personalización del CSS del componente {#css}

{{< bootstrap/content-suggestion >}}

#### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$placeholder-opacity-max:           .5;
$placeholder-opacity-min:           .2;
```

## El componente de Paginación de Bootstrap

{{< content-ads/middle-banner-2 >}}

Documentación y ejemplos para mostrar la paginación para indicar que existe una serie de contenido relacionado en varias páginas.

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

### Trabajar con íconos en el componente de Paginación {#working-with-icons}

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

### Estados deshabilitados y activos {#disabled-and-active-states}

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

### Tamaños del componente de Paginación {#sizing}

{{< content-ads/middle-banner-3 >}}

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

### Alineación del componente de Paginación {#alignment}

Cambiar la alineación de los componentes de paginación con [utilidades flexbox](/bootstrap/utilidades/flex). Por ejemplo, con `.justify-content-center`:

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

### Personalización del CSS del componente {#css}

#### Variables Sass del componente {#variables}

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

#### Variables Sass generales relacionadas {#sass-variables}

{{< content-ads/middle-banner-4 >}}

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

#### Mixins Sass del componente {#sass-mixins}

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
