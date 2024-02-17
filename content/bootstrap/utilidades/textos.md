---
weight: 17
linkTitle: Utilidades para textos
title: Uso de las utilidades de Texto en Bootstrap · Bootstrap en Español v5.3
description: Documentación y ejemplos de utilidades de texto comunes para controlar la alineación, el ajuste, el peso y más.
---

# Uso de las utilidades de Texto en Bootstrap

Documentación y ejemplos de utilidades de texto comunes para controlar la alineación, el ajuste, el peso y más.

{{< content-ads/top-banner >}}

## Alineación de texto {#text-alignment}

Realinea fácilmente el texto a los componentes con clases de alineación de texto. Para la alineación start, end, y center, hay clases responsive disponibles que utilizan los mismos puntos de interrupción del ancho del viewport que el sistema de cuadrícula.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/text/text-alignment.html" >}}
```html {filename="HTML"}
    <p class="text-start">Comienza a alinear el texto en todos los tamaños de viewport.</p>
    <p class="text-center">Texto alineado al centro en todos los tamaños de viewport.</p>
    <p class="text-end">Texto alineado al final en todos los tamaños de viewport.</p>

    <p class="text-sm-end">Texto alineado al final en viewports de tamaño SM (pequeño) o más ancho.</p>
    <p class="text-md-end">Texto alineado al final en viewports de tamaño MD (mediano) o más ancho.</p>
    <p class="text-lg-end">Texto alineado al final en viewports de tamaño LG (grande) o más anchas.</p>
    <p class="text-xl-end">Texto alineado al final en viewports de tamaño XL (extra grande) o más anchas.</p>
    <p class="text-xxl-end">Texto alineado al final en viewports de tamaño XXL (extra extra grande) o más anchas.</p>
```
{{< /demo-iframe >}}

{{< callout type="info" emoji="" >}}
Ten en cuenta que no proporcionamos clases de utilidad para texto justificado. Si bien estéticamente el texto justificado puede parecer más atractivo, hace que el espaciado entre palabras sea más aleatorio y, por lo tanto, más difícil de leer.
{{< /callout >}}

## Ajuste y desbordamiento de texto {#text-wrapping-and-overflow}

Ajustar texto con una clase `.text-wrap`.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/text/text-wrapping-and-overflow-1.html" >}}
```html {filename="HTML"}
    <div class="badge bg-primary text-wrap" style="width: 6rem;">
        Este texto debe ajustarse.
    </div>
```
{{< /demo-iframe >}}

Evita que el texto se ajuste con una clase `.text-nowrap`.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/text/text-wrapping-and-overflow-2.html" >}}
```html {filename="HTML"}
    <div class="text-nowrap bg-body-secondary border" style="width: 8rem;">
        Este texto debe desbordar al padre.
    </div>
```
{{< /demo-iframe >}}

## Salto de palabra {#word-break}

{{< content-ads/middle-banner-1 >}}

Evita que largas cadenas de texto rompan el diseño de tus componentes usando `.text-break` para configurar `word-wrap: break-word` y `word-break: break-word`. Usamos `word-wrap` en lugar del más común `overflow-wrap` para una mayor compatibilidad con el navegador, y agregamos el obsoleto `word-break: break-word` para evitar problemas con los contenedores flex.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/text/word-break.html" >}}
```html {filename="HTML"}
    <p class="text-break">
        mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
    </p>
```
{{< /demo-iframe >}}

{{< callout type="warning" emoji="" >}}
Ten en cuenta que [no es posible dividir palabras en árabe](https://rtlstyling.com/posts/rtl-styling#3.-line-break), que es el idioma RTL más utilizado. Por lo tanto, `.text-break` se elimina de nuestro CSS compilado RTL.
{{< /callout >}}

## Transformación de texto {#text-transform}

Transforma texto en componentes con clases de capitalización de texto.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/text/text-transform.html" >}}
```html {filename="HTML"}
    <p class="text-lowercase">Texto en minúsculas.</p>
    <p class="text-uppercase">Texto en mayúsculas.</p>
    <p class="text-capitalize">Texto capiTaliZado.</p>
```
{{< /demo-iframe >}}

Observa cómo `.text-capitalize` solo cambia la primera letra de cada palabra, sin afectar el caso de cualquier otra letra.

## Tamaño de fuente {#font-size}

Cambia rápidamente el `font-size` del texto. Mientras que nuestras clases de encabezado (por ejemplo, `.h1`–`.h6`) aplican `font-size`, `font-weight`, y `line-height`, estas utilidades _solo_ aplican `font-size`. El tamaño de estas utilidades coincide con los elementos de encabezado de HTML, por lo que a medida que aumenta el número, su tamaño disminuye.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/text/font-size.html" >}}
```html {filename="HTML"}
    <p class="fs-1">texto .fs-1</p>
    <p class="fs-2">texto .fs-2</p>
    <p class="fs-3">texto .fs-3</p>
    <p class="fs-4">texto .fs-4</p>
    <p class="fs-5">texto .fs-5</p>
    <p class="fs-6">texto .fs-6</p>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/content-suggestion >}}

Personaliza tus `font-size` disponibles modificando el mapa `$font-sizes` de Sass.

## Peso de fuente y cursiva {#font-weight-and-italics}

Cambia rápidamente el `font-weight` o el `font-style` del texto con estas utilidades. Las utilidades `font-style` se abrevian como `.fst-*` y las utilidades `font-weight` se abrevian como `.fw-*`.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/text/font-weight-and-italics.html" >}}
```html {filename="HTML"}
    <p class="fw-bold">Texto en negrita.</p>
    <p class="fw-bolder">Texto con peso en negrita (en relación con el elemento principal).</p>
    <p class="fw-semibold">Texto de peso en seminegrita.</p>
    <p class="fw-medium">Texto de peso medio.</p>
    <p class="fw-normal">Texto de peso normal.</p>
    <p class="fw-light">Texto liviano.</p>
    <p class="fw-lighter">Texto más liviano (en relación con el elemento principal).</p>
    <p class="fst-italic">Texto en cursiva.</p>
    <p class="fst-normal">Texto con estilo de fuente normal</p>
```
{{< /demo-iframe >}}

## Alto de línea {#line-height}

Cambia la altura de la línea con las utilidades `.lh-*`.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/text/line-height.html" >}}
```html {filename="HTML"}
    <p class="lh-1">Este es un párrafo largo escrito para mostrar cómo nuestras utilidades afectan la altura de línea de un elemento. Las clases se aplican al elemento mismo o, a veces, al elemento principal. Estas clases se pueden personalizar según sea necesario con nuestra API de utilidad.</p>
    <p class="lh-sm">Este es un párrafo largo escrito para mostrar cómo nuestras utilidades afectan la altura de línea de un elemento. Las clases se aplican al elemento mismo o, a veces, al elemento principal. Estas clases se pueden personalizar según sea necesario con nuestra API de utilidad.</p>
    <p class="lh-base">Este es un párrafo largo escrito para mostrar cómo nuestras utilidades afectan la altura de línea de un elemento. Las clases se aplican al elemento mismo o, a veces, al elemento principal. Estas clases se pueden personalizar según sea necesario con nuestra API de utilidad.</p>
    <p class="lh-lg">Este es un párrafo largo escrito para mostrar cómo nuestras utilidades afectan la altura de línea de un elemento. Las clases se aplican al elemento mismo o, a veces, al elemento principal. Estas clases se pueden personalizar según sea necesario con nuestra API de utilidad.</p>
```
{{< /demo-iframe >}}

## Monospace {#monospace}

Cambiar una selección a nuestra pila de fuentes monoespaciadas con `.font-monospace`.

{{< content-ads/middle-banner-3 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/text/monospace.html" >}}
```html {filename="HTML"}
    <p class="font-monospace">Esto es en monoespacio.</p>
```
{{< /demo-iframe >}}

## Restablecer color {#reset-color}

Restablecer el color de un texto o enlace con `.text-reset`, para que herede el color de su padre.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/text/reset-color.html" >}}
```html {filename="HTML"}
    <p class="text-body-secondary">
        Texto del cuerpo secundario con un <a href="#" class="text-reset">enlace de restablecimiento</a>.
    </p>
```
{{< /demo-iframe >}}

## Decoración de texto {#text-decoration}

Decora texto en componentes con clases de decoración de texto.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/text/text-decoration.html" >}}
```html {filename="HTML"}
    <p class="text-decoration-underline">Este texto tiene una línea debajo.</p>
    <p class="text-decoration-line-through">Este texto tiene una línea que lo atraviesa.</p>
    <a href="#" class="text-decoration-none">Este enlace tiene su decoración de texto eliminada</a>
```
{{< /demo-iframe >}}

## Personalización del CSS {#css}

### Variables Sass generales relacionadas {#sass-variables}

Tipo predeterminado y variables Sass relacionadas con la fuente:

{{< content-ads/middle-banner-4 >}}

{{< bootstrap/content-suggestion >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
// stylelint-disable value-keyword-case
$font-family-sans-serif:      system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
// stylelint-enable value-keyword-case
$font-family-base:            var(--#{$prefix}font-sans-serif);
$font-family-code:            var(--#{$prefix}font-monospace);

// $font-size-root affects the value of `rem`, which is used for as well font sizes, paddings, and margins
// $font-size-base affects the font size of the body text
$font-size-root:              null;
$font-size-base:              1rem; // Assumes the browser default, typically `16px`
$font-size-sm:                $font-size-base * .875;
$font-size-lg:                $font-size-base * 1.25;

$font-weight-lighter:         lighter;
$font-weight-light:           300;
$font-weight-normal:          400;
$font-weight-medium:          500;
$font-weight-semibold:        600;
$font-weight-bold:            700;
$font-weight-bolder:          bolder;

$font-weight-base:            $font-weight-normal;

$line-height-base:            1.5;
$line-height-sm:              1.25;
$line-height-lg:              2;

$h1-font-size:                $font-size-base * 2.5;
$h2-font-size:                $font-size-base * 2;
$h3-font-size:                $font-size-base * 1.75;
$h4-font-size:                $font-size-base * 1.5;
$h5-font-size:                $font-size-base * 1.25;
$h6-font-size:                $font-size-base;
```

### Mapas de Sass {#sass-maps}

Las utilidades de tamaño de fuente se generan a partir de este mapa, en combinación con nuestra API de utilidades.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$font-sizes: (
  1: $h1-font-size,
  2: $h2-font-size,
  3: $h3-font-size,
  4: $h4-font-size,
  5: $h5-font-size,
  6: $h6-font-size
);
```

[scss/_maps.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_maps.scss)

```scss {filename="scss/_maps.scss"}
$theme-colors-text: (
  "primary": $primary-text-emphasis,
  "secondary": $secondary-text-emphasis,
  "success": $success-text-emphasis,
  "info": $info-text-emphasis,
  "warning": $warning-text-emphasis,
  "danger": $danger-text-emphasis,
  "light": $light-text-emphasis,
  "dark": $dark-text-emphasis,
);
```

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-5 >}}

### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de fuentes y texto se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"font-family": (
  property: font-family,
  class: font,
  values: (monospace: var(--#{$prefix}font-monospace))
),
"font-size": (
  rfs: true,
  property: font-size,
  class: fs,
  values: $font-sizes
),
"font-style": (
  property: font-style,
  class: fst,
  values: italic normal
),
"font-weight": (
  property: font-weight,
  class: fw,
  values: (
    lighter: $font-weight-lighter,
    light: $font-weight-light,
    normal: $font-weight-normal,
    medium: $font-weight-medium,
    semibold: $font-weight-semibold,
    bold: $font-weight-bold,
    bolder: $font-weight-bolder
  )
),
"line-height": (
  property: line-height,
  class: lh,
  values: (
    1: 1,
    sm: $line-height-sm,
    base: $line-height-base,
    lg: $line-height-lg,
  )
),
"text-align": (
  responsive: true,
  property: text-align,
  class: text,
  values: (
    start: left,
    end: right,
    center: center,
  )
),
"text-decoration": (
  property: text-decoration,
  values: none underline line-through
),
"text-transform": (
  property: text-transform,
  class: text,
  values: lowercase uppercase capitalize
),
"white-space": (
  property: white-space,
  class: text,
  values: (
    wrap: normal,
    nowrap: nowrap,
  )
),
"word-wrap": (
  property: word-wrap word-break,
  class: text,
  values: (break: break-word),
  rtl: false
),
```

{{< content-ads/bottom-banner >}}
