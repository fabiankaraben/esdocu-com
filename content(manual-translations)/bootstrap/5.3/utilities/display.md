---
weight: 5
linkTitle: Display
title: Uso de las utilidades de Propiedad display en Bootstrap · Bootstrap en Español v5.3
description: Alterna de manera rápida y responsive el valor de visualización de los componentes y más con nuestras utilidades de visualización. Incluye soporte para algunos de los valores más comunes, así como algunos extras para controlar la visualización al imprimir.
noindex: true
---

# Uso de las utilidades de Propiedad display en Bootstrap

Alterna de manera rápida y responsive el valor de visualización de los componentes y más con nuestras utilidades de visualización. Incluye soporte para algunos de los valores más comunes, así como algunos extras para controlar la visualización al imprimir.

{{< content-ads/top-banner >}}

Cómo funciona {#how-it-works}
-------------------------------

Cambiar el valor de [`display` (propiedad)](https://developer.mozilla.org/en-US/docs/Web/CSS/display) con nuestras clases de utilidad de visualización responsive. Admitimos deliberadamente solo un subconjunto de todos los valores posibles para `display`. Las clases se pueden combinar para obtener varios efectos según sea necesario.

Notación {#notation}
---------------------

Mostrar clases de utilidad que se aplican a todos los [puntos de interrupción](/bootstrap/5.3/layout/breakpoints), desde `xs` a `xxl`, no tienen abreviaturas de punto de interrupción. Esto se debe a que esas clases se aplican desde `min-width: 0;` en adelante y, por lo tanto, no están vinculadas a una media query. Los puntos de interrupción restantes, sin embargo, incluyen una abreviatura de punto de interrupción.

Como tal, las clases se nombran usando el formato:

* `.d-{value}` para `xs`
* `.d-{breakpoint}-{value}` para `sm`, `md`, `lg`, `xl` y `xxl`.

{{< content-ads/middle-banner-1 >}}

Donde _valor_ es uno de:

* `none`
* `inline`
* `inline-block`
* `block`
* `grid`
* `inline-grid`
* `table`
* `table-cell`
* `table-row`
* `flex`
* `inline-flex`

Los valores de visualización se pueden modificar cambiando los valores de `display` definidos en `$utilities` y recompilando el SCSS.

Las media queries afectan los anchos de pantalla con el punto de interrupción dado _o mayor_. Por ejemplo, `.d-lg-none` establece `display: none;` en pantallas `lg`, `xl` y `xxl`.

Ejemplos {#examples}
---------------------

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/display/examples-1.html" >}}
```html {filename="HTML"}
    <div class="d-inline p-2 text-bg-primary">d-inline</div>
    <div class="d-inline p-2 text-bg-dark">d-inline</div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-2 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/display/examples-2.html" >}}
```html {filename="HTML"}
    <span class="d-block p-2 text-bg-primary">d-block</span>
    <span class="d-block p-2 text-bg-dark">d-block</span>
```
{{< /demo-iframe >}}

Ocultar elementos {#hiding-elements}
-------------------------------------

Para un desarrollo más rápido y compatible con dispositivos móviles, usa clases de visualización responsive para mostrar y ocultar elementos por dispositivo. Evita crear versiones completamente diferentes del mismo sitio; en su lugar, oculta elementos de manera responsive para cada tamaño de pantalla.

Para ocultar elementos simplemente usa la clase `.d-none` o una de las clases `.d-{sm,md,lg,xl,xxl}-none` para cualquier variación de pantalla responsive.

{{< bootstrap/content-suggestion >}}

Para mostrar un elemento solo en un intervalo determinado de tamaños de pantalla, puedes combinar una clase `.d-*-none` con una clase clase `.d-*-*`, por ejemplo `.d-none .d-md-block .d-xl-none .d-xxl-none` ocultará el elemento para todos los tamaños de pantalla excepto en dispositivos medianos y grandes.

{{< content-ads/middle-banner-3 >}}

| Tamaño de pantalla  | Clase                             |
| ------------------- | --------------------------------- |
| Oculto en todos     | `.d-none`                         |
| Oculto solo en xs   | `.d-none .d-sm-block`             |
| Oculto solo en sm   | `.d-sm-none .d-md-block`          |
| Oculto solo en md   | `.d-md-none .d-lg-block`          |
| Oculto solo en lg   | `.d-lg-none .d-xl-block`          |
| Oculto solo en xl   | `.d-xl-none .d-xxl-block`         |
| Oculto solo en xxl  | `.d-xxl-none`                     |
| Visible en todos    | `.d-block`                        |
| Visible solo en xs  | `.d-block .d-sm-none`             |
| Visible solo en sm  | `.d-none .d-sm-block .d-md-none`  |
| Visible solo en md  | `.d-none .d-md-block .d-lg-none`  |
| Visible solo en lg  | `.d-none .d-lg-block .d-xl-none`  |
| Visible solo en xl  | `.d-none .d-xl-block .d-xxl-none` |
| Visible solo en xxl | `.d-none .d-xxl-block`            |

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/display/hiding-elements.html" >}}
```html {filename="HTML"}
    <div class="d-lg-none">ocultar en pantallas lg y más anchas</div>
    <div class="d-none d-lg-block">ocultar en pantallas más pequeñas que lg</div>
```
{{< /demo-iframe >}}

Mostrar en forma impresa {#display-in-print}
---------------------------------------------

Cambia el valor `display` de los elementos al imprimir con nuestras clases de utilidad de visualización de impresión. Incluye soporte para los mismos valores `display` que nuestras utilidades responsive `.d-*`.

* `.d-print-none`
* `.d-print-inline`
* `.d-print-inline-block`
* `.d-print-block`
* `.d-print-grid`
* `.d-print-inline-grid`
* `.d-print-table`
* `.d-print-table-row`
* `.d-print-table-cell`
* `.d-print-flex`
* `.d-print-inline-flex`

Las clases print y display se pueden combinar.

{{< content-ads/middle-banner-4 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/display/display-in-print.html" >}}
```html {filename="HTML"}
    <div class="d-print-none">Solo pantalla (Ocultar solo en impresión)</div>
    <div class="d-none d-print-block">Solo imprimir (Ocultar solo en pantalla)</div>
    <div class="d-none d-lg-block d-print-block">Ocultar en pantalla grande, pero mostrar siempre en impresión</div>
```
{{< /demo-iframe >}}

Personalización del CSS {#css}
-----------

### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de visualización se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"display": (
    responsive: true,
    print: true,
    property: display,
    class: d,
    values: inline inline-block block grid inline-grid table table-row table-cell flex inline-flex none
),
```

{{< content-ads/bottom-banner >}}
