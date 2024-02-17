---
weight: 9
linkTitle: Regla vertical
title: Uso de la Regla vertical · Bootstrap en Español v5.1
description: Utiliza el asistente de regla vertical personalizado para crear divisores verticales como el elemento `<hr>`.
next: /bootstrap/5.1/utilities/api
type: docs
noindex: true
---

# La Regla vertical de Bootstrap

Utiliza el asistente de regla vertical personalizado para crear divisores verticales como el elemento `<hr>`.

{{< content-ads/top-banner >}}

## ¿Cómo funciona?

Las reglas verticales están inspiradas en el elemento `<hr>`, lo que te permite crear divisores verticales en diseños comunes. Tienen el mismo estilo que los elementos `<hr>`:

- Son `1px` de ancho
- Tienen `min-height` de `1em`
- Su color se establece a través de `currentColor` y `opacity`

Personalízalos con estilos adicionales según sea necesario.

{{< content-ads/middle-banner-1 >}}

## Ejemplo

{{< bootstrap/5-1/example >}}
<div class="vr"></div>
{{< /bootstrap/5-1/example >}}

Las reglas verticales escalan su altura en diseños flexibles:

{{< bootstrap/5-1/example >}}
<div class="d-flex" style="height: 200px;">
  <div class="vr"></div>
</div>
{{< /bootstrap/5-1/example >}}

{{< content-ads/middle-banner-2 >}}

## Con pilas (stacks)

También se pueden usar en [stacks]({{< bootstrap/5-1/docsref "/helpers/stacks" >}}):

{{< bootstrap/5-1/example >}}
<div class="hstack gap-3">
  <div class="bg-light border">Primer elemento</div>
  <div class="bg-light border ms-auto">Segundo elemento</div>
  <div class="vr"></div>
  <div class="bg-light border">Tercer elemento</div>
</div>
{{< /bootstrap/5-1/example >}}

{{< content-ads/bottom-banner >}}
