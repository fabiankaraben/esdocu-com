---
weight: 5
linkTitle: Botones
title: Componentes de Botones de Bootstrap · Bootstrap en Español v5.3
description: Usa los estilos de botones personalizados de Bootstrap para acciones en formularios, cuadros de diálogo y más con soporte para múltiples tamaños, estados y más.
---

# Componentes de Botones de Bootstrap

Usa los estilos de botones personalizados de Bootstrap para acciones en formularios, cuadros de diálogo y más con soporte para múltiples tamaños, estados y más.

{{< content-ads/top-banner >}}

Clase base de Botones {#base-class}
-------------------------

Bootstrap tiene una clase base `.btn` que configura estilos básicos como relleno y alineación de contenido. De forma predeterminada, los controles `.btn` tienen un borde transparente y un color de fondo, y carecen de enfoque explícito y estilos de desplazamiento.

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/base-class.html" >}}
```html {filename="HTML"}
    <button type="button" class="btn">Clase base</button>
```
{{< /demo-iframe >}}

La clase `.btn` está diseñada para usarse junto con nuestras variantes de botones o para servir como base para tus propios estilos personalizados.

{{< callout type="warning" emoji="" >}}
Si estás utilizando la clase `.btn` por sí sola, recuerda definir al menos algunos estilos explícitos `:focus` y/o `:focus-visible` .
{{< /callout >}}

Variantes para estilos de Botones {#variants}
----------------------

Bootstrap incluye varias variantes de botones, cada una con su propio propósito semántico, con algunos extras agregados para mayor control.

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/variants.html" >}}
```html {filename="HTML"}
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Enlace</button>
```
{{< /demo-iframe >}}

{{< callout type="info" emoji="" >}}
**Consejo de accesibilidad:** El uso de colores para agregar significado solo proporciona una indicación visual, que no se transmitirá a los usuarios de tecnologías de asistencia como lectores de pantalla. Asegúrate de que el significado sea obvio a partir del contenido mismo (por ejemplo, el texto visible con un [_suficiente_ contraste de color](/bootstrap/5.3/getting-started/accessibility#color-contrast)) o se incluye a través de medios alternativos, como texto adicional oculto con la clase `.visually-hidden`.
{{< /callout >}}

Desactivar el ajuste de texto {#disable-text-wrapping}
----------------------------------------------------

Si no quieres que el texto del botón se ajuste, puedes agregar la clase `.text-nowrap` al botón. En Sass, puedes configurar `$btn-white-space: nowrap` para deshabilitar el ajuste de texto para cada botón.

Otras etiquetas con estilos de botones {#button-tags}
------------------------------------

Las clases `.btn` están diseñadas para usarse con el elemento `<button>`. Sin embargo, también puedes utilizar estas clases en elementos `<a>` o `<input>` (aunque algunos navegadores pueden aplicar una representación ligeramente diferente).

Cuando usas clases de botones en elementos `<a>` que se usan para activar la funcionalidad en la página (como contraer contenido), en lugar de vincular a páginas nuevas o secciones dentro de la página actual, a estos enlaces se les debe asignar un `role="button"` para transmitir adecuadamente su propósito a tecnologías de asistencia como lectores de pantalla.

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/button-tags.html" >}}
```html {filename="HTML"}
    <a class="btn btn-primary" href="#" role="button">Enlace</a>
    <button class="btn btn-primary" type="submit">Botón</button>
    <input class="btn btn-primary" type="button" value="Input">
    <input class="btn btn-primary" type="submit" value="Submit">
    <input class="btn btn-primary" type="reset" value="Reset">
```
{{< /demo-iframe >}}

Botones con estilo de contorno {#outline-buttons}
---------------------------------------

¿Necesitas un botón, pero no los fuertes colores de fondo que traen? Reemplaza las clases modificadoras predeterminadas con las `.btn-outline-*` para eliminar todas las imágenes de fondo y colores en cualquier botón.

{{< content-ads/middle-banner-1 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/outline-buttons.html" >}}
```html {filename="HTML"}
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark">Dark</button>
```
{{< /demo-iframe >}}

{{< callout type="info" emoji="" >}}
Algunos de los estilos de botones usan un color de primer plano relativamente claro y solo deben usarse sobre un fondo oscuro para tener suficiente contraste.
{{< /callout >}}

Tamaños de Botones {#sizes}
-----------------

¿Te apetece botones más grandes o más pequeños? Agrega `.btn-lg` o `.btn-sm` para tamaños adicionales.

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/sizes-1.html" >}}
```html {filename="HTML"}
    <button type="button" class="btn btn-primary btn-lg">Botón grande</button>
    <button type="button" class="btn btn-secondary btn-lg">Botón grande</button>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/sizes-2.html" >}}
```html {filename="HTML"}
    <button type="button" class="btn btn-primary btn-sm">Botón pequeño</button>
    <button type="button" class="btn btn-secondary btn-sm">Botón pequeño</button>
```
{{< /demo-iframe >}}

Incluso puedes crear tu propio tamaño personalizado con variables CSS:

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/sizes-3.html" >}}
```html {filename="HTML"}
    <button type="button" class="btn btn-primary" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
        Botón personalizado
    </button>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Estado deshabilitado de Botones {#disabled-state}
---------------------------------------

Haz que los botones parezcan inactivos agregando el atributo booleano `disabled` a cualquier elemento `<button>`. Los botones deshabilitados tienen `pointer-events: none` aplicados, lo que evita que se activen los estados active y hover.

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/disabled-state-1.html" >}}
```html {filename="HTML"}
    <button type="button" class="btn btn-primary" disabled="">Botón principal</button>
    <button type="button" class="btn btn-secondary" disabled="">Botón</button>
    <button type="button" class="btn btn-outline-primary" disabled="">Botón principal</button>
    <button type="button" class="btn btn-outline-secondary" disabled="">Botón</button>
```
{{< /demo-iframe >}}

Los botones deshabilitados que usan el elemento `<a>` se comportan un poco diferente:

* `<a>` no admite el atributo `disabled`, por lo que debes agregar la clase `.disabled` para que parezca visualmente deshabilitado.
* Se incluyen algunos estilos aptos para el futuro para deshabilitar todos los `pointer-events` en los botones de anclaje.
* Los botones deshabilitados que usan `<a>` deben incluir el atributo `aria-disabled="true"` para indicar el estado del elemento a las tecnologías de asistencia.
* Los botones deshabilitados que usan `<a>` _no deben_ incluir el atributo `href`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/disabled-state-2.html" >}}
```html {filename="HTML"}
    <a class="btn btn-primary disabled" role="button" aria-disabled="true">Enlace principal</a>
    <a class="btn btn-secondary disabled" role="button" aria-disabled="true">Enlace</a>
```
{{< /demo-iframe >}}

### Advertencia sobre la funcionalidad del enlace {#link-functionality-caveat}

Para cubrir casos en los que tienes que mantener el atributo `href` en un enlace deshabilitado, la clase `.disabled` usa `pointer-events: none` para intentar deshabilitar la funcionalidad de enlace de `<a>`s. Ten en cuenta que esta propiedad CSS aún no está estandarizada para HTML, pero todos los navegadores modernos la admiten. Además, incluso en los navegadores que admiten `pointer-events: none`, la navegación con el teclado no se ve afectada, lo que significa que los usuarios de teclados videntes y los usuarios de tecnologías de asistencia aún podrán activar estos enlaces. Por lo tanto, para estar seguro, además de `aria-disabled="true"`, incluya también un atributo `tabindex="-1"` en estos enlaces para evitar que reciban el foco del teclado y utiliza JavaScript personalizado para desactivar su funcionalidad por completo.

{{< content-ads/middle-banner-2 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/link-functionality-caveat.html" >}}
```html {filename="HTML"}
    <a href="#" class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Enlace principal</a>
    <a href="#" class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Enlace</a>
```
{{< /demo-iframe >}}

Bloque de botones {#block-buttons}
----------------------------------

Crea pilas responsive de “botones de bloque” de ancho completo como los de Bootstrap 4 con una combinación de nuestras utilidades de visualización y espacios. Al utilizar utilidades en lugar de clases específicas de botones, tenemos mucho mayor control sobre el espaciado, la alineación y los comportamientos responsive.

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/block-buttons-1.html" >}}
```html {filename="HTML"}
    <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">Botón</button>
        <button class="btn btn-primary" type="button">Botón</button>
    </div>
```
{{< /demo-iframe >}}

Aquí creamos una variación responsive, comenzando con botones apilados verticalmente hasta el punto de interrupción `md`, donde `.d-md-block` reemplaza la clase `.d-grid`, sobrescribendo así la utilidad `gap-2`. Cambia el tamaño de tu navegador para verlos cambiar.

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/block-buttons-2.html" >}}
```html {filename="HTML"}
    <div class="d-grid gap-2 d-md-block">
        <button class="btn btn-primary" type="button">Botón</button>
        <button class="btn btn-primary" type="button">Botón</button>
    </div>
```
{{< /demo-iframe >}}

Puedes ajustar el ancho de tus botones de bloque con clases de ancho de columna de la cuadrícula. Por ejemplo, para un "botón de bloqueo" de ancho medio, utilice `.col-6`. Céntralo también horizontalmente con `.mx-auto`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/block-buttons-3.html" >}}
```html {filename="HTML"}
    <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button">Botón</button>
        <button class="btn btn-primary" type="button">Botón</button>
    </div>
```
{{< /demo-iframe >}}

Se pueden usar utilidades adicionales para ajustar la alineación de los botones cuando están horizontales. Aquí tomamos nuestro ejemplo responsive anterior y agregamos algunas utilidades flexibles y una utilidad de margen en el botón para alinear los botones a la derecha cuando ya no están apilados.

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/block-buttons-4.html" >}}
```html {filename="HTML"}
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary me-md-2" type="button">Botón</button>
        <button class="btn btn-primary" type="button">Botón</button>
    </div>
```
{{< /demo-iframe >}}

Complemento de botón {#button-plugin}
--------------------------------------

El complemento de botones te permite crear botones simples de activación/desactivación.

{{< callout type="info" emoji="" >}}
Visualmente, estos botones de alternancia son idénticos a los [botones de alternancia de casilla de verificación](/bootstrap/5.3/forms/checks-radios/#checkbox-toggle-buttons). Sin embargo, las tecnologías de asistencia los transmiten de manera diferente: los lectores de pantalla anunciarán las casillas de verificación como “marcadas”/“no marcadas” (ya que, a pesar de su apariencia, siguen siendo fundamentalmente casillas de verificación), mientras que estos botones de alternancia se anunciarán como “botón”/“botón presionado”. La elección entre estos dos enfoques dependerá del tipo de alternancia que esté creando y de si la alternancia tendrá sentido para los usuarios cuando se anuncie como una casilla de verificación o como un botón real.
{{< /callout >}}

{{< bootstrap/content-suggestion >}}

### Alternar estados {#toggle-states}

Agrega `data-bs-toggle="button"` para alternar el estado `active` de un botón. Si está alternando previamente un botón, debes agregar manualmente `.active` (clase) **y** `aria-pressed="true"` para garantizar que se transmite adecuadamente a las tecnologías de asistencia.

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/toggle-states-1.html" >}}
```html {filename="HTML"}
    <p class="d-inline-flex gap-1">
        <button type="button" class="btn" data-bs-toggle="button">Botón de alternar</button>
        <button type="button" class="btn active" data-bs-toggle="button" aria-pressed="true">Botón de alternancia activo</button>
        <button type="button" class="btn" disabled="" data-bs-toggle="button">Botón de alternancia deshabilitado</button>
    </p>
    <p class="d-inline-flex gap-1">
        <button type="button" class="btn btn-primary" data-bs-toggle="button">Botón de alternar</button>
        <button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Botón de alternancia activo</button>
        <button type="button" class="btn btn-primary" disabled="" data-bs-toggle="button">Botón de alternancia deshabilitado</button>
    </p>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-3 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/toggle-states-2.html" >}}
```html {filename="HTML"}
    <p class="d-inline-flex gap-1">
        <a href="#" class="btn" role="button" data-bs-toggle="button">Enlace de alternar</a>
        <a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Enlace de alternancia activo</a>
        <a class="btn disabled" aria-disabled="true" role="button" data-bs-toggle="button">Enlace de alternancia deshabilitado</a>
    </p>
    <p class="d-inline-flex gap-1">
        <a href="#" class="btn btn-primary" role="button" data-bs-toggle="button">Enlace de alternar</a>
        <a href="#" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Enlace de alternancia activo</a>
        <a class="btn btn-primary disabled" aria-disabled="true" role="button" data-bs-toggle="button">Enlace de alternancia deshabilitado</a>
    </p>
```
{{< /demo-iframe >}}

### Métodos {#methods}

Puedes crear una instancia de botón con el constructor de botones, por ejemplo:

```javascript {filename="JavaScript"}
const bsButton = new bootstrap.Button('#myButton')
```

| Método                | Descripción                                                                                                                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dispose`             | Destruye el botón de un elemento. (Elimina los datos almacenados en el elemento DOM)                                                                                                                            |
| `getInstance`         | Método estático que te permite obtener la instancia del botón asociada con un elemento DOM, puedes usarlo así: `bootstrap.Button.getInstance(element)`.                                                         |
| `getOrCreateInstance` | Método estático que devuelve una instancia de botón asociada con un elemento DOM o crea uno nuevo en caso de que no haya sido inicializado. Puedes usarlo así: `bootstrap.Button.getOrCreateInstance(element)`. |
| `toggle`              | Cambia el estado de presionado. Le da al botón la apariencia de que ha sido activado.                                                                                                                           |

Por ejemplo, para alternar todos los botones

```javascript {filename="JavaScript"}
document.querySelectorAll('.btn').forEach(buttonElement => {
    const button = bootstrap.Button.getOrCreateInstance(buttonElement)
    button.toggle()
})
```

Personalización del CSS del componente {#css}
-----------

### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Como parte del enfoque de variables CSS en evolución de Bootstrap, los botones ahora usan variables CSS locales en `.btn` para una personalización mejorada en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_buttons.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_buttons.scss)

```scss {filename="scss/_buttons.scss"}
--#{$prefix}btn-padding-x: #{$btn-padding-x};
--#{$prefix}btn-padding-y: #{$btn-padding-y};
--#{$prefix}btn-font-family: #{$btn-font-family};
@include rfs($btn-font-size, --#{$prefix}btn-font-size);
--#{$prefix}btn-font-weight: #{$btn-font-weight};
--#{$prefix}btn-line-height: #{$btn-line-height};
--#{$prefix}btn-color: #{$btn-color};
--#{$prefix}btn-bg: transparent;
--#{$prefix}btn-border-width: #{$btn-border-width};
--#{$prefix}btn-border-color: transparent;
--#{$prefix}btn-border-radius: #{$btn-border-radius};
--#{$prefix}btn-hover-border-color: transparent;
--#{$prefix}btn-box-shadow: #{$btn-box-shadow};
--#{$prefix}btn-disabled-opacity: #{$btn-disabled-opacity};
--#{$prefix}btn-focus-box-shadow: 0 0 0 #{$btn-focus-width} rgba(var(--#{$prefix}btn-focus-shadow-rgb), .5);
```

Cada clase modificadora `.btn-*` actualiza las variables CSS apropiadas para minimizar reglas CSS adicionales con nuestros mixins `button-variant()`, `button-outline-variant()` y `button-size()`.

Aquí tienes un ejemplo de cómo crear una clase modificadora `.btn-*` personalizada como lo hacemos para los botones exclusivos de nuestros documentación reasignando las variables CSS de Bootstrap con una mezcla de nuestras propias variables CSS y Sass.

{{< demo-iframe path="/demos/bootstrap/5.3/components/buttons/variables.html" >}}
{{< /demo-iframe >}}

[site/assets/scss/_buttons.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/site/assets/scss/_buttons.scss)

{{< content-ads/middle-banner-4 >}}

```scss {filename="site/assets/scss/_buttons.scss"}
.btn-bd-primary {
    --bs-btn-font-weight: 600;
    --bs-btn-color: var(--bs-white);
    --bs-btn-bg: var(--bd-violet-bg);
    --bs-btn-border-color: var(--bd-violet-bg);
    --bs-btn-hover-color: var(--bs-white);
    --bs-btn-hover-bg: #{shade-color($bd-violet, 10%)};
    --bs-btn-hover-border-color: #{shade-color($bd-violet, 10%)};
    --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
    --bs-btn-active-color: var(--bs-btn-hover-color);
    --bs-btn-active-bg: #{shade-color($bd-violet, 20%)};
    --bs-btn-active-border-color: #{shade-color($bd-violet, 20%)};
}
```

### Variables Sass generales relacionadas {#sass-variables}

{{< bootstrap/content-suggestion >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$btn-color:                   var(--#{$prefix}body-color);
$btn-padding-y:               $input-btn-padding-y;
$btn-padding-x:               $input-btn-padding-x;
$btn-font-family:             $input-btn-font-family;
$btn-font-size:               $input-btn-font-size;
$btn-line-height:             $input-btn-line-height;
$btn-white-space:             null; // Set to `nowrap` to prevent text wrapping

$btn-padding-y-sm:            $input-btn-padding-y-sm;
$btn-padding-x-sm:            $input-btn-padding-x-sm;
$btn-font-size-sm:            $input-btn-font-size-sm;

$btn-padding-y-lg:            $input-btn-padding-y-lg;
$btn-padding-x-lg:            $input-btn-padding-x-lg;
$btn-font-size-lg:            $input-btn-font-size-lg;

$btn-border-width:            $input-btn-border-width;

$btn-font-weight:             $font-weight-normal;
$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075);
$btn-focus-width:             $input-btn-focus-width;
$btn-focus-box-shadow:        $input-btn-focus-box-shadow;
$btn-disabled-opacity:        .65;
$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125);

$btn-link-color:              var(--#{$prefix}link-color);
$btn-link-hover-color:        var(--#{$prefix}link-hover-color);
$btn-link-disabled-color:     $gray-600;
$btn-link-focus-shadow-rgb:   to-rgb(mix(color-contrast($link-color), $link-color, 15%));

// Allows for customizing button radius independently from global border radius
$btn-border-radius:           var(--#{$prefix}border-radius);
$btn-border-radius-sm:        var(--#{$prefix}border-radius-sm);
$btn-border-radius-lg:        var(--#{$prefix}border-radius-lg);

$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

$btn-hover-bg-shade-amount:       15%;
$btn-hover-bg-tint-amount:        15%;
$btn-hover-border-shade-amount:   20%;
$btn-hover-border-tint-amount:    10%;
$btn-active-bg-shade-amount:      20%;
$btn-active-bg-tint-amount:       20%;
$btn-active-border-shade-amount:  25%;
$btn-active-border-tint-amount:   10%;
```

### Mixins Sass del componente {#sass-mixins}

Hay tres combinaciones para botones: combinación de botón y variante de contorno de botón (ambas basadas en `$theme-colors`), además de una combinación de tamaño de botón.

[scss/mixins/_buttons.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/mixins/_buttons.scss)

```scss {filename="scss/mixins/_buttons.scss"}
@mixin button-variant(
    $background,
    $border,
    $color: color-contrast($background),
    $hover-background: if($color == $color-contrast-light, shade-color($background, $btn-hover-bg-shade-amount), tint-color($background, $btn-hover-bg-tint-amount)),
    $hover-border: if($color == $color-contrast-light, shade-color($border, $btn-hover-border-shade-amount), tint-color($border, $btn-hover-border-tint-amount)),
    $hover-color: color-contrast($hover-background),
    $active-background: if($color == $color-contrast-light, shade-color($background, $btn-active-bg-shade-amount), tint-color($background, $btn-active-bg-tint-amount)),
    $active-border: if($color == $color-contrast-light, shade-color($border, $btn-active-border-shade-amount), tint-color($border, $btn-active-border-tint-amount)),
    $active-color: color-contrast($active-background),
    $disabled-background: $background,
    $disabled-border: $border,
    $disabled-color: color-contrast($disabled-background)
) {
    --#{$prefix}btn-color: #{$color};
    --#{$prefix}btn-bg: #{$background};
    --#{$prefix}btn-border-color: #{$border};
    --#{$prefix}btn-hover-color: #{$hover-color};
    --#{$prefix}btn-hover-bg: #{$hover-background};
    --#{$prefix}btn-hover-border-color: #{$hover-border};
    --#{$prefix}btn-focus-shadow-rgb: #{to-rgb(mix($color, $border, 15%))};
    --#{$prefix}btn-active-color: #{$active-color};
    --#{$prefix}btn-active-bg: #{$active-background};
    --#{$prefix}btn-active-border-color: #{$active-border};
    --#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};
    --#{$prefix}btn-disabled-color: #{$disabled-color};
    --#{$prefix}btn-disabled-bg: #{$disabled-background};
    --#{$prefix}btn-disabled-border-color: #{$disabled-border};
}
```

[scss/mixins/_buttons.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/mixins/_buttons.scss)

```scss {filename="scss/mixins/_buttons.scss"}
@mixin button-outline-variant(
    $color,
    $color-hover: color-contrast($color),
    $active-background: $color,
    $active-border: $color,
    $active-color: color-contrast($active-background)
) {
    --#{$prefix}btn-color: #{$color};
    --#{$prefix}btn-border-color: #{$color};
    --#{$prefix}btn-hover-color: #{$color-hover};
    --#{$prefix}btn-hover-bg: #{$active-background};
    --#{$prefix}btn-hover-border-color: #{$active-border};
    --#{$prefix}btn-focus-shadow-rgb: #{to-rgb($color)};
    --#{$prefix}btn-active-color: #{$active-color};
    --#{$prefix}btn-active-bg: #{$active-background};
    --#{$prefix}btn-active-border-color: #{$active-border};
    --#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};
    --#{$prefix}btn-disabled-color: #{$color};
    --#{$prefix}btn-disabled-bg: transparent;
    --#{$prefix}btn-disabled-border-color: #{$color};
    --#{$prefix}gradient: none;
}
```

[scss/mixins/_buttons.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/mixins/_buttons.scss)

```scss {filename="scss/mixins/_buttons.scss"}
@mixin button-size($padding-y, $padding-x, $font-size, $border-radius) {
    --#{$prefix}btn-padding-y: #{$padding-y};
    --#{$prefix}btn-padding-x: #{$padding-x};
    @include rfs($font-size, --#{$prefix}btn-font-size);
    --#{$prefix}btn-border-radius: #{$border-radius};
}
```

{{< bootstrap/content-suggestion >}}

### Bucles Sass del componente {#sass-loops}

Las variantes de botones (para botones regulares y de contorno) usan sus respectivos mixins con nuestro mapa `$theme-colors` para generar las clases modificadoras en `scss/_buttons.scss`.

[scss/_buttons.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_buttons.scss)

{{< content-ads/middle-banner-5 >}}

```scss {filename="scss/_buttons.scss"}
@each $color, $value in $theme-colors {
    .btn-#{$color} {
    @if $color == "light" {
        @include button-variant(
        $value,
        $value,
        $hover-background: shade-color($value, $btn-hover-bg-shade-amount),
        $hover-border: shade-color($value, $btn-hover-border-shade-amount),
        $active-background: shade-color($value, $btn-active-bg-shade-amount),
        $active-border: shade-color($value, $btn-active-border-shade-amount)
        );
    } @else if $color == "dark" {
        @include button-variant(
        $value,
        $value,
        $hover-background: tint-color($value, $btn-hover-bg-tint-amount),
        $hover-border: tint-color($value, $btn-hover-border-tint-amount),
        $active-background: tint-color($value, $btn-active-bg-tint-amount),
        $active-border: tint-color($value, $btn-active-border-tint-amount)
        );
    } @else {
        @include button-variant($value, $value);
    }
    }
}

@each $color, $value in $theme-colors {
    .btn-outline-#{$color} {
    @include button-outline-variant($value);
    }
}
```

{{< content-ads/bottom-banner >}}
