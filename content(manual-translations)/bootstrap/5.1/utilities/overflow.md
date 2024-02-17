---
weight: 10
linkTitle: Desbordamiento
title: Utilidades de Desbordamiento · Bootstrap en Español v5.1
description: Utiliza estas utilidades para configurar rápidamente cómo el contenido desborda un elemento.
type: docs
---

# Utilidades de Desbordamiento de Bootstrap

Utiliza estas utilidades para configurar rápidamente cómo el contenido desborda un elemento.

{{< content-ads/top-banner >}}

Ajusta la propiedad `overflow` sobre la marcha con cuatro valores y clases predeterminados. Estas clases no son responsive de forma predeterminada.

{{< bootstrap/5-1/example show_markup="false" class="d-md-flex" >}}
  <div class="overflow-auto p-3 mb-3 mb-md-0 me-md-3 bg-light" style="max-width: 260px; max-height: 100px;">
    Este es un ejemplo del uso de <code>.overflow-auto</code> en un elemento con dimensiones establecidas de ancho y alto. Por diseño, este contenido se desplazará verticalmente.
  </div>
  <div class="overflow-hidden p-3 mb-3 mb-md-0 me-md-3 bg-light" style="max-width: 260px; max-height: 100px;">
    Este es un ejemplo del uso de <code>.overflow-hidden</code> en un elemento con dimensiones establecidas de ancho y alto.
  </div>
  <div class="overflow-visible p-3 mb-3 mb-md-0 me-md-3 bg-light" style="max-width: 260px; max-height: 100px;">
    Este es un ejemplo del uso de <code>.overflow-visible</code> en un elemento con dimensiones establecidas de ancho y alto.
  </div>
  <div class="overflow-scroll p-3 bg-light" style="max-width: 260px; max-height: 100px;">
    Este es un ejemplo del uso de <code>.overflow-scroll</code> en un elemento con dimensiones establecidas de ancho y alto.
  </div>
{{< /bootstrap/5-1/example >}}

```html
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-visible">...</div>
<div class="overflow-scroll">...</div>
```

Con las variables de Sass, puedes personalizar las utilidades de desbordamiento cambiando la variable `$overflows` en `_variables.scss`.

{{< content-ads/middle-banner-1 >}}

## Sass

### API de utilidades

Las utilidades de desbordamiento se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< bootstrap/5-1/docsref "/utilities/api#using-the-api" >}})

{{< bootstrap/5-1/scss-docs name="utils-overflow" file="scss/_utilities.scss" >}}

{{< content-ads/bottom-banner >}}
