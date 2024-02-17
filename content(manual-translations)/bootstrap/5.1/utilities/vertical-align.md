---
weight: 16
linkTitle: Alineación vertical
title: Utilidades de Alineación vertical · Bootstrap en Español v5.1
description: Cambia fácilmente la alineación vertical de los elementos en línea, de bloque en línea, de tabla en línea y de celda de tabla.
type: docs
---

# Utilidades de Alineación vertical de Bootstrap

Cambia fácilmente la alineación vertical de los elementos en línea, de bloque en línea, de tabla en línea y de celda de tabla.

{{< content-ads/top-banner >}}

Cambia la alineación de los elementos con las utilidades [`vertical-alignment`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align). Ten en cuenta que la alineación vertical solo afecta a los elementos en línea (inline), bloque en línea (inline-block), tabla en línea (inline-table) y celda de tabla.

Elije entre `.align-baseline`, `.align-top`, `.align-middle`, `.align-bottom`, `.align-text-bottom` y `.align-text-top` según sea necesario .

Para centrar verticalmente el contenido que no está en línea (como `<div>`s y más), usa nuestras [utilidades de cuadro flexible]({{< bootstrap/5-1/docsref "/utilities/flex#align-items" >}}).

Con elementos en línea:

{{< content-ads/middle-banner-1 >}}

{{< bootstrap/5-1/example >}}
<span class="align-baseline">baseline</span>
<span class="align-top">superior</span>
<span class="align-middle">medio</span>
<span class="align-bottom">inferior</span>
<span class="align-text-top">texto-superior</span>
<span class="align-text-bottom">texto-inferior</span>
{{< /bootstrap/5-1/example >}}

Con celdas de tabla:

{{< bootstrap/5-1/example >}}
<table style="height: 100px;">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">superior</td>
      <td class="align-middle">medio</td>
      <td class="align-bottom">inferior</td>
      <td class="align-text-top">texto-superior</td>
      <td class="align-text-bottom">texto-inferior</td>
    </tr>
  </tbody>
</table>
{{< /bootstrap/5-1/example >}}

## Sass

{{< content-ads/middle-banner-2 >}}

### API de utilidades

Las utilidades de alineación vertical se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< bootstrap/5-1/docsref "/utilities/api#using-the-api" >}})

{{< bootstrap/5-1/scss-docs name="utils-vertical-align" file="scss/_utilities.scss" >}}

{{< content-ads/bottom-banner >}}
