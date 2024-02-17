---
weight: 7
linkTitle: Float
title: Uso de las utilidades para comportamiento Float en Bootstrap · Bootstrap en Español v5.3
description: content="Alterna la flotación de cualquier elemento, a través de cualquier punto de interrupción, usando nuestras utilidades flotantes responsive."
noindex: true
---

# Uso de las utilidades para comportamiento Float en Bootstrap

Alterna la flotación de cualquier elemento, a través de cualquier punto de interrupción, usando nuestras utilidades flotantes responsive.

{{< content-ads/top-banner >}}

Descripción general {#overview}
--------------------------------

Estas clases de utilidad hacen flotar un elemento hacia la izquierda o hacia la derecha, o deshabilitan la flotación, según el tamaño actual del viewport usando [propiedad CSS `float`.](https://developer.mozilla.org/en-US/docs/Web/CSS/float) Se incluye `!important` para evitar problemas de especificidad. Estos utilizan los mismos puntos de interrupción del viewport que nuestro sistema de cuadrícula. Ten en cuenta que las utilidades flotantes no tienen ningún efecto sobre los elementos flexibles.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/float/overview.html" >}}
```html {filename="HTML"}
    <div class="float-start">Float start en todos los tamaños de viewport</div><br>
    <div class="float-end">Float end en todos los tamaños de viewport</div><br>
    <div class="float-none">No flotar en todos los tamaños de viewport</div>
```
{{< /demo-iframe >}}

Utiliza el [ayudante clearfix](/bootstrap/5.3/helpers/clearfix) en un elemento principal para borrar los elementos flotantes.

{{< content-ads/middle-banner-1 >}}

Responsive {#responsive}
-------------------------

También existen variaciones responsive para cada valor `float`.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/float/responsive.html" >}}
```html {filename="HTML"}
    <div class="float-sm-end">Float end en viewports de tamaño SM (pequeño) o más ancho.</div><br>
    <div class="float-md-end">Float end en viewports de tamaño MD (mediano) o más ancho.</div><br>
    <div class="float-lg-end">Float end en viewports de tamaño LG (grande) o más anchas.</div><br>
    <div class="float-xl-end">Float end en viewports de tamaño XL (extra grande) o más anchas.</div><br>
    <div class="float-xxl-end">Float end en viewports de tamaño XXL (extra extra grande) o más anchas.</div><br>
```
{{< /demo-iframe >}}

Aquí están todas las clases de apoyo:

{{< content-ads/middle-banner-2 >}}

* `.float-start`
* `.float-end`
* `.float-none`
* `.float-sm-start`
* `.float-sm-end`
* `.float-sm-none`
* `.float-md-start`
* `.float-md-end`
* `.float-md-none`
* `.float-lg-start`
* `.float-lg-end`
* `.float-lg-none`
* `.float-xl-start`
* `.float-xl-end`
* `.float-xl-none`
* `.float-xxl-start`
* `.float-xxl-end`
* `.float-xxl-none`

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

### API de utilidades de Sass {#sass-utilities-api}

{{< content-ads/middle-banner-3 >}}

Las utilidades flotantes se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"float": (
  responsive: true,
  property: float,
  values: (
    start: left,
    end: right,
    none: none,
  )
),
```

{{< content-ads/bottom-banner >}}
