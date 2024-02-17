---
weight: 5
linkTitle: Pilas
title: Uso de Pilas (stacks) · Bootstrap en Español v5.1
description: Helpers que se basan en nuestras utilidades flexbox para hacer que el diseño de componentes sea más rápido y fácil que nunca.
type: docs
---

# Uso de Pilas (stacks) en Bootstrap

Helpers que se basan en nuestras utilidades flexbox para hacer que el diseño de componentes sea más rápido y fácil que nunca.

{{< content-ads/top-banner >}}

Las pilas ofrecen un atajo para aplicar una serie de propiedades de flexbox para crear diseños rápida y fácilmente en Bootstrap. Todo el crédito por el concepto y la implementación es para el de código abierto [proyecto Pylon](https://almonk.github.io/pylon/).

{{< bootstrap/5-1/callout warning >}}
¡Aviso! La compatibilidad de las utilidades gap con flexbox se agregó recientemente a Safari, así que considera verificar la compatibilidad de tu navegador. El diseño de la cuadrícula no debería tener problemas. [Leer más](https://caniuse.com/flexbox-gap).
{{< /bootstrap/5-1/callout >}}

## Vertical

Usa `.vstack` para crear diseños verticales. Los elementos apilados ocupan el ancho completo de forma predeterminada. Usa las utilidades `.gap-*` para agregar espacio entre elementos.

{{< content-ads/middle-banner-1 >}}

{{< bootstrap/5-1/example >}}
<div class="vstack gap-3">
  <div class="bg-light border">Primer elemento</div>
  <div class="bg-light border">Segundo elemento</div>
  <div class="bg-light border">Tercer elemento</div>
</div>
{{< /bootstrap/5-1/example >}}

## Horizontal

Usa `.hstack` para diseños horizontales. Los elementos apilados están centrados verticalmente de forma predeterminada y solo ocupan el ancho necesario. Usa las utilidades `.gap-*` para agregar espacio entre elementos.

{{< bootstrap/5-1/example >}}
<div class="hstack gap-3">
  <div class="bg-light border">Primer elemento</div>
  <div class="bg-light border">Segundo elemento</div>
  <div class="bg-light border">Tercer elemento</div>
</div>
{{< /bootstrap/5-1/example >}}

{{< content-ads/middle-banner-2 >}}

Usando utilidades de margen horizontal como `.ms-auto` como espaciadores:

{{< bootstrap/5-1/example >}}
<div class="hstack gap-3">
  <div class="bg-light border">Primer elemento</div>
  <div class="bg-light border ms-auto">Segundo elemento</div>
  <div class="bg-light border">Tercer elemento</div>
</div>
{{< /bootstrap/5-1/example >}}

Y con [reglas verticales]({{< bootstrap/5-1/docsref "/helpers/vertical-rule" >}}):

{{< bootstrap/5-1/example >}}
<div class="hstack gap-3">
  <div class="bg-light border">Primer elemento</div>
  <div class="bg-light border ms-auto">Segundo elemento</div>
  <div class="vr"></div>
  <div class="bg-light border">Tercer elemento</div>
</div>
{{< /bootstrap/5-1/example >}}

{{< content-ads/middle-banner-3 >}}

## Ejemplos

Usa `.vstack` para apilar botones y otros elementos:

{{< bootstrap/5-1/example >}}
<div class="vstack gap-2 col-md-5 mx-auto">
  <button type="button" class="btn btn-secondary">Guardar cambios</button>
  <button type="button" class="btn btn-outline-secondary">Cancelar</button>
</div>
{{< /bootstrap/5-1/example >}}

Crea un formulario en línea con `.hstack`:

{{< content-ads/middle-banner-4 >}}

{{< bootstrap/5-1/example >}}
<div class="hstack gap-3">
  <input class="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here...">
  <button type="button" class="btn btn-secondary">Enviar</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-outline-danger">Reiniciar</button>
</div>
{{< /bootstrap/5-1/example >}}

## Sass

{{< bootstrap/5-1/scss-docs name="stacks" file="scss/helpers/_stacks.scss" >}}

{{< content-ads/bottom-banner >}}
