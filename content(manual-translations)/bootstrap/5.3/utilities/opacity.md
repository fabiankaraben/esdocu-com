---
weight: 11
linkTitle: Opacidad
title: Uso de las utilidades de Opacidad en Bootstrap · Bootstrap en Español v5.3
description: Controla la opacidad de los elementos.
noindex: true
---

# Uso de las utilidades de Opacidad en Bootstrap

Controla la opacidad de los elementos.

{{< content-ads/top-banner >}}

La propiedad `opacity` establece el nivel de opacidad de un elemento. El nivel de opacidad describe el nivel de transparencia, donde `1` no es transparente en absoluto, `.5` es 50% visible y `0` es completamente transparente.

Establece la `opacity` de un elemento usando las utilidades `.opacity-{value}`.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/opacity/index.html" >}}
```html {filename="HTML"}
    <div class="opacity-100 p-3 m-2 bg-primary text-light fw-bold rounded">100%</div>
    <div class="opacity-75 p-3 m-2 bg-primary text-light fw-bold rounded">75%</div>
    <div class="opacity-50 p-3 m-2 bg-primary text-light fw-bold rounded">50%</div>
    <div class="opacity-25 p-3 m-2 bg-primary text-light fw-bold rounded">25%</div>
    <div class="opacity-0 p-3 m-2 bg-primary text-light fw-bold rounded">0%</div>
```
{{< /demo-iframe >}}

Personalización del CSS {#css}
-----------

{{< content-ads/middle-banner-1 >}}

{{< bootstrap/content-suggestion >}}

### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de opacidad se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

{{< content-ads/middle-banner-2 >}}

```scss {filename="scss/_utilities.scss"}
"opacity": (
  property: opacity,
  values: (
    0: 0,
    25: .25,
    50: .5,
    75: .75,
    100: 1,
  )
),
```

{{< content-ads/bottom-banner >}}
