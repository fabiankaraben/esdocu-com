---
weight: 7
linkTitle: Float
title: Utilidades de Float · Bootstrap en Español v5.1
description: Configura la flotabilidad en cualquier elemento, a través de cualquier breakpoint, utilizando nuestras utilidades flotantes responsive.
type: docs
---

# Utilidades de Float de Bootstrap

Configura la flotabilidad en cualquier elemento, a través de cualquier breakpoint, utilizando nuestras utilidades flotantes responsive.

{{< content-ads/top-banner >}}

## Descripción general

Estas clases de utilidad hacen flotar un elemento a la izquierda o a la derecha, o deshabilitan la flotación, en función del tamaño actual del viewport mediante la [propiedad `float` de CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/float). Se incluye `!important` para evitar problemas de especificidad. Estos utilizan los mismos breakpoints de viewport que nuestro sistema de cuadrícula. Ten en cuenta que las utilidades flotantes no tienen efecto en los elementos flexibles.

{{< bootstrap/5-1/example >}}
<div class="float-start">Float start en todos los tamaños de viewport</div><br>
<div class="float-end">Float end en todos los tamaños de viewport</div><br>
<div class="float-none">Don't float en todos los tamaños de viewport</div>
{{< /bootstrap/5-1/example >}}

## Responsive

{{< content-ads/middle-banner-1 >}}

También existen variaciones responsive para cada valor `float`.

{{< bootstrap/5-1/example >}}
<div class="float-sm-start">Float start en viewports de tamaño SM (small) o superior</div><br>
<div class="float-md-start">Float start en viewports de tamaño MD (medium) o superior</div><br>
<div class="float-lg-start">Float start en viewports de tamaño LG (large) o superior</div><br>
<div class="float-xl-start">Float start en viewports de tamaño XL (extra-large) o superior</div><br>
{{< /bootstrap/5-1/example >}}

Aquí están todas las clases soportadas:

{{< bootstrap/5-1/markdown >}}
{{< float.inline >}}
{{- range $.Site.Data.bootstrap_5_1_breakpoints }}
- `.float{{ .abbr }}-start`
- `.float{{ .abbr }}-end`
- `.float{{ .abbr }}-none`
{{- end -}}
{{< /float.inline >}}
{{< /bootstrap/5-1/markdown >}}

{{< content-ads/middle-banner-2 >}}

## Sass

### API de utilidades

Las utilidades flotantes se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< bootstrap/5-1/docsref "/utilities/api#using-the-api" >}})

{{< bootstrap/5-1/scss-docs name="utils-float" file="scss/_utilities.scss" >}}

{{< content-ads/bottom-banner >}}
