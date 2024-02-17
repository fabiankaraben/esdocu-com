---
weight: 16
linkTitle: Espaciado
title: Uso de las utilidades de Espaciado en Bootstrap · Bootstrap en Español v5.3
description: Bootstrap incluye una amplia gama de clases de utilidad responsive de margen, relleno y espacio gap para modificar la apariencia de un elemento.
---

# Uso de las utilidades de Espaciado en Bootstrap

Bootstrap incluye una amplia gama de clases de utilidad responsive de margen, relleno y espacio gap para modificar la apariencia de un elemento.

{{< content-ads/top-banner >}}

Margen y relleno {#margin-and-padding}
---------------------------------------

Asigna valores responsive `margin` o `padding` a un elemento o un subconjunto de sus lados con clases abreviadas. Incluye soporte para propiedades individuales, todas las propiedades, y propiedades verticales y horizontales. Las clases se crean a partir de un mapa Sass predeterminado que va desde `.25rem` hasta `3rem`.

{{< callout type="info" emoji="" >}}
**¿Usando el módulo de diseño CSS Grid?** Considera usar [la utilidad gap](#gap) en su lugar.
{{< /callout >}}

### Notación {#notation}

Las utilidades de espaciado que se aplican a todos los puntos de interrupción, desde `xs` hasta `xxl`, no tienen abreviaturas de punto de interrupción. Esto se debe a que esas clases se aplican desde `min-width: 0` en adelante y, por lo tanto, no están vinculadas a una media query. Los puntos de interrupción restantes, sin embargo, incluyen una abreviatura de punto de interrupción.

Las clases se nombran usando el formato `{property}{sides}-{size}` para `xs` y `{property}{sides}-{breakpoint}-{size}` para `sm`, `md`, `lg`, `xl` y `xxl`.

Donde _property_ es una de:

* `m` \- para clases que establecen `margin`
* `p` \- para clases que configuran `padding`

{{< content-ads/middle-banner-1 >}}

Donde _sides_ es uno de:

* `t` \- para clases que establecen `margin-top` o `padding-top`
* `b` \- para clases que establecen `margin-bottom` o `padding-bottom`
* `s` \- (start) para clases que establecen `margin-left` o `padding-left` en LTR, `margin-right` o `padding-right` en RTL
* `e` \- (end) para clases que establecen `margin-right` o `padding-right` en LTR, `margin-left` o `padding-left` en RTL
* `x` \- para clases que configuran tanto `*-left` como `*-right`
* `y` \- para clases que configuran tanto `*-top` como `*-bottom`
* en blanco - para clases que establecen un `margin` o `padding` en los 4 lados del elemento

Donde _size_ es uno de:

* `0` \- para clases que eliminan el `margin` o el `padding` configurándolo en `0`
* `1` \- (por defecto) para clases que establecen el `margin` o `padding` en `$spacer * .25`
* `2` \- (por defecto) para clases que establecen el `margin` o `padding` en `$spacer * .5`
* `3` \- (por defecto) para clases que establecen el `margin` o `padding` en `$spacer`
* `4` \- (por defecto) para clases que establecen el `margin` o `padding` en `$spacer * 1.5`
* `5` \- (por defecto) para clases que establecen el `margin` o `padding` en `$spacer * 3`
* `auto` \- para clases que establecen el `margin` en auto

(Puedes agregar más tamaños agregando entradas a la variable de mapa Sass `$spacers`).

### Ejemplos {#examples}

Aquí tienes algunos ejemplos representativos de estas clases:

```scss {filename="SCSS"}
.mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}
```

{{< content-ads/middle-banner-2 >}}

### Centrado horizontal {#horizontal-centering}

Además, Bootstrap también incluye una clase `.mx-auto` para centrar horizontalmente contenido a nivel de bloque de ancho fijo, es decir, contenido que tiene `display: block` y un conjunto de `width`, estableciendo los márgenes horizontales en `auto`.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/spacing/horizontal-centering.html" >}}
```html {filename="HTML"}
    <div class="mx-auto p-2" style="width: 200px;">
        Elemento centrado
    </div>
```
{{< /demo-iframe >}}

Margen negativo {#negative-margin}
-----------------------------------

En CSS, las propiedades `margin` pueden utilizar valores negativos (`padding` no). Estos márgenes negativos están **deshabilitados de forma predeterminada**, pero se pueden habilitar en Sass configurando `$enable-negative-margins: true`.

La sintaxis es casi la misma que la de las utilidades de margen positivo predeterminadas, pero con la adición de `n` antes del tamaño solicitado. Aquí hay una clase de ejemplo que es lo opuesto a `.mt-1`:

```scss {filename="SCSS"}
.mt-n1 {
  margin-top: -0.25rem !important;
}
```

{{< content-ads/middle-banner-3 >}}

Gap {#gap}
-----------

Cuando usas `display: grid` o `display: flex`, puedes hacer uso de las utilidades `gap` en el elemento padre. Esto puede ahorrarte la necesidad de agregar utilidades de margen a elementos secundarios individuales de una cuadrícula o contenedor flexible. Las utilidades Gap son responsive de forma predeterminada y se generan a través de nuestra API de utilidades, basada en el mapa `$spacers` Sass.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/spacing/gap.html" >}}
```html {filename="HTML"}
    <div class="grid gap-3">
        <div class="p-2 g-col-6">Elemento de cuadrícula 1</div>
        <div class="p-2 g-col-6">Elemento de cuadrícula 2</div>
        <div class="p-2 g-col-6">Elemento de cuadrícula 3</div>
        <div class="p-2 g-col-6">Elemento de cuadrícula 4</div>
    </div>
```
{{< /demo-iframe >}}

El soporte incluye opciones responsive para todos los puntos de interrupción de la cuadrícula de Bootstrap, así como seis tamaños del mapa `$spacers` (`0`–`5`). No existe una clase de utilidad `.gap-auto`, ya que en realidad es lo mismo que `.gap-0`.

### row-gap {#row-gap}

`row-gap` establece el espacio vertical entre elementos secundarios en el contenedor especificado.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/spacing/row-gap.html" >}}
```html {filename="HTML"}
    <div class="grid gap-0 row-gap-3">
        <div class="p-2 g-col-6">Elemento de cuadrícula 1</div>
        <div class="p-2 g-col-6">Elemento de cuadrícula 2</div>
        <div class="p-2 g-col-6">Elemento de cuadrícula 3</div>
        <div class="p-2 g-col-6">Elemento de cuadrícula 4</div>
    </div>
```
{{< /demo-iframe >}}

### column-gap {#column-gap}

{{< content-ads/middle-banner-4 >}}

`column-gap` establece el espacio horizontal entre elementos secundarios en el contenedor especificado.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/spacing/column-gap.html" >}}
```html {filename="HTML"}
    <div class="grid gap-0 column-gap-3">
        <div class="p-2 g-col-6">Elemento de cuadrícula 1</div>
        <div class="p-2 g-col-6">Elemento de cuadrícula 2</div>
        <div class="p-2 g-col-6">Elemento de cuadrícula 3</div>
        <div class="p-2 g-col-6">Elemento de cuadrícula 4</div>
    </div>
```
{{< /demo-iframe >}}

Personalización del CSS {#css}
-----------

### Mapas de Sass {#sass-maps}

Las utilidades de espaciado se declaran a través del mapa Sass y luego se generan con nuestra API de utilidades.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$spacer: 1rem;
$spacers: (
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
);
```

### API de utilidades de Sass {#sass-utilities-api}

{{< content-ads/middle-banner-5 >}}

Las utilidades de espaciado se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

{{< bootstrap/content-suggestion >}}

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"margin": (
  responsive: true,
  property: margin,
  class: m,
  values: map-merge($spacers, (auto: auto))
),
"margin-x": (
  responsive: true,
  property: margin-right margin-left,
  class: mx,
  values: map-merge($spacers, (auto: auto))
),
"margin-y": (
  responsive: true,
  property: margin-top margin-bottom,
  class: my,
  values: map-merge($spacers, (auto: auto))
),
"margin-top": (
  responsive: true,
  property: margin-top,
  class: mt,
  values: map-merge($spacers, (auto: auto))
),
"margin-end": (
  responsive: true,
  property: margin-right,
  class: me,
  values: map-merge($spacers, (auto: auto))
),
"margin-bottom": (
  responsive: true,
  property: margin-bottom,
  class: mb,
  values: map-merge($spacers, (auto: auto))
),
"margin-start": (
  responsive: true,
  property: margin-left,
  class: ms,
  values: map-merge($spacers, (auto: auto))
),
// Negative margin utilities
"negative-margin": (
  responsive: true,
  property: margin,
  class: m,
  values: $negative-spacers
),
"negative-margin-x": (
  responsive: true,
  property: margin-right margin-left,
  class: mx,
  values: $negative-spacers
),
"negative-margin-y": (
  responsive: true,
  property: margin-top margin-bottom,
  class: my,
  values: $negative-spacers
),
"negative-margin-top": (
  responsive: true,
  property: margin-top,
  class: mt,
  values: $negative-spacers
),
"negative-margin-end": (
  responsive: true,
  property: margin-right,
  class: me,
  values: $negative-spacers
),
"negative-margin-bottom": (
  responsive: true,
  property: margin-bottom,
  class: mb,
  values: $negative-spacers
),
"negative-margin-start": (
  responsive: true,
  property: margin-left,
  class: ms,
  values: $negative-spacers
),
// Padding utilities
"padding": (
  responsive: true,
  property: padding,
  class: p,
  values: $spacers
),
"padding-x": (
  responsive: true,
  property: padding-right padding-left,
  class: px,
  values: $spacers
),
"padding-y": (
  responsive: true,
  property: padding-top padding-bottom,
  class: py,
  values: $spacers
),
"padding-top": (
  responsive: true,
  property: padding-top,
  class: pt,
  values: $spacers
),
"padding-end": (
  responsive: true,
  property: padding-right,
  class: pe,
  values: $spacers
),
"padding-bottom": (
  responsive: true,
  property: padding-bottom,
  class: pb,
  values: $spacers
),
"padding-start": (
  responsive: true,
  property: padding-left,
  class: ps,
  values: $spacers
),
// Gap utility
"gap": (
  responsive: true,
  property: gap,
  class: gap,
  values: $spacers
),
"row-gap": (
  responsive: true,
  property: row-gap,
  class: row-gap,
  values: $spacers
),
"column-gap": (
  responsive: true,
  property: column-gap,
  class: column-gap,
  values: $spacers
),
```

{{< content-ads/bottom-banner >}}
