---
weight: 9
linkTitle: Opacidad
title: Utilidades de Opacidad · Bootstrap en Español v5.1
description: Controla la opacidad de los elementos.
type: docs
---

# Utilidades de Opacidad de Bootstrap

Controla la opacidad de los elementos.

{{< content-ads/top-banner >}}

La propiedad `opacity` establece el nivel de opacidad de un elemento. El nivel de opacidad describe el nivel de transparencia, donde `1` no es transparente en absoluto, `.5` es 50% visible y `0` es completamente transparente.

Establece la `opacity` de un elemento usando las utilidades `.opacity-{value}`.

{{< bootstrap/5-1/example show_markup="false" class="d-sm-flex" >}}
  <div class="opacity-100 p-3 m-2 bg-primary text-light fw-bold rounded">100%</div>
  <div class="opacity-75 p-3 m-2 bg-primary text-light fw-bold rounded">75%</div>
  <div class="opacity-50 p-3 m-2 bg-primary text-light fw-bold rounded">50%</div>
  <div class="opacity-25 p-3 m-2 bg-primary text-light fw-bold rounded">25%</div>
{{< /bootstrap/5-1/example >}}

```html
<div class="opacity-100">...</div>
<div class="opacity-75">...</div>
<div class="opacity-50">...</div>
<div class="opacity-25">...</div>
```

{{< content-ads/middle-banner-1 >}}

### API de utilidades

Las utilidades de opacidad se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< bootstrap/5-1/docsref "/utilities/api#using-the-api" >}})

{{< bootstrap/5-1/scss-docs name="utils-opacity" file="scss/_utilities.scss" >}}

{{< content-ads/bottom-banner >}}
