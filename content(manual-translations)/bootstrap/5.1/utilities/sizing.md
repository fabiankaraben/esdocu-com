---
weight: 13
linkTitle: Tamaño
title: Utilidades de Tamaño · Bootstrap en Español v5.1
description: Crea fácilmente un elemento del mismo ancho o alto con nuestras utilidades de ancho y alto.
type: docs
---

# Utilidades de Tamaño de Bootstrap

Crea fácilmente un elemento del mismo ancho o alto con nuestras utilidades de ancho y alto.

{{< content-ads/top-banner >}}

## Relativo al padre

Las utilidades de ancho y alto se generan a partir de la API de utilidades en `_utilities.scss`. Incluye soporte para `25%`, `50%`, `75%`, `100%` y `auto` por defecto. Modifica esos valores según necesites para generar diferentes utilidades.

{{< bootstrap/5-1/example >}}
<div class="w-25 p-3" style="background-color: #eee;">Ancho de 25%</div>
<div class="w-50 p-3" style="background-color: #eee;">Ancho de 50%</div>
<div class="w-75 p-3" style="background-color: #eee;">Ancho de 75%</div>
<div class="w-100 p-3" style="background-color: #eee;">Ancho de 100%</div>
<div class="w-auto p-3" style="background-color: #eee;">Ancho de auto</div>
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/example >}}
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
  <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Alto de 25%</div>
  <div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Alto de 50%</div>
  <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Alto de 75%</div>
  <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Alto de 100%</div>
  <div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Alto de auto</div>
</div>
{{< /bootstrap/5-1/example >}}

{{< content-ads/middle-banner-1 >}}

También puedes usar las utilidades `max-width: 100%;` y `max-height: 100%;` según sea necesario.

{{< bootstrap/5-1/example >}}
{{< bootstrap/5-1/placeholder width="100%" height="100" class="mw-100" text="Max-width 100%" >}}
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/example >}}
<div style="height: 100px; background-color: rgba(255,0,0,.1);">
  <div class="mh-100" style="width: 100px; height: 200px; background-color: rgba(0,0,255,.1);">Max-height 100%</div>
</div>
{{< /bootstrap/5-1/example >}}

## Relativo al viewport

{{< content-ads/middle-banner-2 >}}

También puedes usar utilidades para establecer el ancho y la altura en relación con el viewport.

```html
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
```

## Sass

### API de utilidades

{{< content-ads/middle-banner-3 >}}

Las utilidades de dimensionamiento se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprenda a usar la API de utilidades.]({{< bootstrap/5-1/docsref "/utilities/api#using-the-api" >}})

{{< bootstrap/5-1/scss-docs name="utils-sizing" file="scss/_utilities.scss" >}}

{{< content-ads/bottom-banner >}}
