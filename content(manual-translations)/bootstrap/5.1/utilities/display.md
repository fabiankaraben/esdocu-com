---
weight: 5
linkTitle: Display
title: La propiedad display · Bootstrap en Español v5.1
description: Alterna de manera rápida y responsive el valor de visualización de los componentes y más con nuestras utilidades de visualización. Incluye soporte para algunos de los valores más comunes, así como algunos extras para controlar la visualización al imprimir.
type: docs
---

# La propiedad display en Bootstrap

Alterna de manera rápida y responsive el valor de visualización de los componentes y más con nuestras utilidades de visualización. Incluye soporte para algunos de los valores más comunes, así como algunos extras para controlar la visualización al imprimir.

{{< content-ads/top-banner >}}

## ¿Cómo funciona la propiedad display?

Cambia el valor de la [propiedad `display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) con nuestras clases de utilidad de visualización responsive. Admitimos deliberadamente solo un subconjunto de todos los valores posibles para `display`. Las clases se pueden combinar para varios efectos según lo necesites.

## Notación

Muestra las clases de utilidad que se aplican a todos los [breakpoints]({{< bootstrap/5-1/docsref "/layout/breakpoints" >}}), desde `xs` hasta `xxl`, sin abreviatura de breakpoint. Esto se debe a que esas clases se aplican desde `min-width: 0;` en adelante y, por lo tanto, no están vinculadas a una media query. Sin embargo, los breakpoints restantes sí incluyen una abreviatura de breakpoint.

Como tal, las clases se nombran usando el formato:

{{< content-ads/middle-banner-1 >}}

- `.d-{value}` para `xs`
- `.d-{breakpoint}-{value}` para `sm`, `md`, `lg`, `xl`, y `xxl`.

Donde *value* es uno de:

- `none`
- `inline`
- `inline-block`
- `block`
- `grid`
- `table`
- `table-cell`
- `table-row`
- `flex`
- `inline-flex`

Los valores de visualización se pueden modificar cambiando la variable `$displays` y recompilando el SCSS.

Las media queries afectan los anchos de pantalla con el breakpoint dado *o mayor*. Por ejemplo, `.d-lg-none` establece `display: none;` en las pantallas `lg`, `xl` y `xxl`.

{{< content-ads/middle-banner-2 >}}

## Ejemplos

{{< bootstrap/5-1/example >}}
<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/example >}}
<span class="d-block p-2 bg-primary text-white">d-block</span>
<span class="d-block p-2 bg-dark text-white">d-block</span>
{{< /bootstrap/5-1/example >}}

## Ocultar elementos

Para un desarrollo optimizado para dispositivos móviles más rápido, usa clases de visualización responsive para mostrar y ocultar elementos por dispositivo. Evita crear versiones completamente diferentes del mismo sitio; en su lugar, oculta los elementos de forma que respondan a cada tamaño de pantalla.

{{< content-ads/middle-banner-3 >}}

Para ocultar elementos, simplemente usa la clase `.d-none` o una de las clases `.d-{sm,md,lg,xl,xxl}-none` para cualquier variación de pantalla responsive.

Para mostrar un elemento solo en un intervalo dado de tamaños de pantalla, puedes combinar una clase `.d-*-none` con una clase `.d-*-*`, por ejemplo `.d-none .d-md-block .d-xl-none .d-xxl-none` ocultará el elemento para todos los tamaños de pantalla excepto en dispositivos medianos y grandes.

<table class="table">
  <thead>
    <tr>
      <th>Tamaño de pantalla</th>
      <th>Clase</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Oculto en todos</td>
      <td><code>.d-none</code></td>
    </tr>
    <tr>
      <td>Oculto solo en xs</td>
      <td><code>.d-none .d-sm-block</code></td>
    </tr>
    <tr>
      <td>Oculto solo en sm</td>
      <td><code>.d-sm-none .d-md-block</code></td>
    </tr>
    <tr>
      <td>Oculto solo en md</td>
      <td><code>.d-md-none .d-lg-block</code></td>
    </tr>
    <tr>
      <td>Oculto solo en lg</td>
      <td><code>.d-lg-none .d-xl-block</code></td>
    </tr>
    <tr>
      <td>Oculto solo en xl</td>
      <td><code>.d-xl-none .d-xxl-block</code></td>
    </tr>
    <tr>
      <td>Oculto solo en xxl</td>
      <td><code>.d-xxl-none</code></td>
    </tr>
    <tr>
      <td>Visible en todos</td>
      <td><code>.d-block</code></td>
    </tr>
    <tr>
      <td>Visible solo en xs</td>
      <td><code>.d-block .d-sm-none</code></td>
    </tr>
    <tr>
      <td>Visible solo en sm</td>
      <td><code>.d-none .d-sm-block .d-md-none</code></td>
    </tr>
    <tr>
      <td>Visible solo en md</td>
      <td><code>.d-none .d-md-block .d-lg-none</code></td>
    </tr>
    <tr>
      <td>Visible solo en lg</td>
      <td><code>.d-none .d-lg-block .d-xl-none</code></td>
    </tr>
    <tr>
      <td>Visible solo en xl</td>
      <td><code>.d-none .d-xl-block .d-xxl-none</code></td>
    </tr>
    <tr>
      <td>Visible solo en xxl</td>
      <td><code>.d-none .d-xxl-block</code></td>
    </tr>
  </tbody>
</table>

{{< bootstrap/5-1/example >}}
<div class="d-lg-none">Oculto en lg y pantallas más anchas</div>
<div class="d-none d-lg-block">Oculto en pantallas más pequeñas que lg</div>
{{< /bootstrap/5-1/example >}}

## Display al imprimir

{{< content-ads/middle-banner-4 >}}

Cambia el valor `display` de los elementos al imprimir con nuestras clases de utilidad de visualización de impresión. Incluye soporte para los mismos valores `display` que nuestras utilidades responsive `.d-*`.

- `.d-print-none`
- `.d-print-inline`
- `.d-print-inline-block`
- `.d-print-block`
- `.d-print-grid`
- `.d-print-table`
- `.d-print-table-row`
- `.d-print-table-cell`
- `.d-print-flex`
- `.d-print-inline-flex`

Las clases de impresión y visualización se pueden combinar.

{{< bootstrap/5-1/example >}}
<div class="d-print-none">Solo pantallas (Ocultar solo en impresión)</div>
<div class="d-none d-print-block">Solo imprimir (Ocultar solo en pantallas)</div>
<div class="d-none d-lg-block d-print-block">Ocultar hasta *large* en la pantallas, pero mostrar siempre en la impresión</div>
{{< /bootstrap/5-1/example >}}

## Sass

{{< content-ads/middle-banner-5 >}}

### API de utilidades

Las utilidades de visualización se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< bootstrap/5-1/docsref "/utilities/api#using-the-api" >}})

{{< bootstrap/5-1/scss-docs name="utils-display" file="scss/_utilities.scss" >}}

{{< content-ads/bottom-banner >}}
