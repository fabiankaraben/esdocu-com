---
weight: 15
linkTitle: Tamaños
title: Uso de las utilidades de Tamaños en Bootstrap · Bootstrap en Español v5.3
description: Haz fácilmente un elemento tan ancho o tan alto con nuestras utilidades de ancho y alto.
noindex: true
---

# Uso de las utilidades de Tamaños en Bootstrap

Haz fácilmente un elemento tan ancho o tan alto con nuestras utilidades de ancho y alto.

{{< content-ads/top-banner >}}

Relativo al padre {#relative-to-the-parent}
--------------------------------------------

Las utilidades de ancho y alto se generan desde la API de utilidades en `_utilities.scss`. Incluye soporte para `25%`, `50%`, `75%`, `100%` y `auto` por defecto. Modifica esos valores según necesites generar diferentes utilidades aquí.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/sizing/relative-to-the-parent-1.html" >}}
```html {filename="HTML"}
    <div class="w-25 p-3">Ancho 25%</div>
    <div class="w-50 p-3">Ancho 50%</div>
    <div class="w-75 p-3">Ancho 75%</div>
    <div class="w-100 p-3">Ancho 100%</div>
    <div class="w-auto p-3">Ancho automático</div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/sizing/relative-to-the-parent-2.html" >}}
```html {filename="HTML"}
    <div style="height: 100px;">
        <div class="h-25 d-inline-block" style="width: 120px;">Altura 25%</div>
        <div class="h-50 d-inline-block" style="width: 120px;">Altura 50%</div>
        <div class="h-75 d-inline-block" style="width: 120px;">Altura 75%</div>
        <div class="h-100 d-inline-block" style="width: 120px;">Altura 100%</div>
        <div class="h-auto d-inline-block" style="width: 120px;">Altura automática</div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-1 >}}

También puedes usar las utilidades `max-width: 100%;` y `max-height: 100%;` según sea necesario.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/sizing/relative-to-the-parent-3.html" >}}
```html {filename="HTML"}
    <div style="width: 50%; height: 100px;">
        <div class="mw-100" style="width: 200%;">Ancho máximo 100%</div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/sizing/relative-to-the-parent-4.html" >}}
```html {filename="HTML"}
    <div style="height: 100px;">
        <div class="mh-100" style="width: 100px; height: 200px;">Altura máxima 100%</div>
    </div>
```
{{< /demo-iframe >}}

Relativo al viewport {#relative-to-the-viewport}
-------------------------------------------------

{{< content-ads/middle-banner-2 >}}

También puedes usar utilidades para establecer el ancho y el alto en relación con el viewport.

```html {filename="HTML"}
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
```

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-3 >}}

### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de tamaño se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"width": (
  property: width,
  class: w,
  values: (
    25: 25%,
    50: 50%,
    75: 75%,
    100: 100%,
    auto: auto
  )
),
"max-width": (
  property: max-width,
  class: mw,
  values: (100: 100%)
),
"viewport-width": (
  property: width,
  class: vw,
  values: (100: 100vw)
),
"min-viewport-width": (
  property: min-width,
  class: min-vw,
  values: (100: 100vw)
),
"height": (
  property: height,
  class: h,
  values: (
    25: 25%,
    50: 50%,
    75: 75%,
    100: 100%,
    auto: auto
  )
),
"max-height": (
  property: max-height,
  class: mh,
  values: (100: 100%)
),
"viewport-height": (
  property: height,
  class: vh,
  values: (100: 100vh)
),
"min-viewport-height": (
  property: min-height,
  class: min-vh,
  values: (100: 100vh)
),
```

{{< content-ads/bottom-banner >}}
