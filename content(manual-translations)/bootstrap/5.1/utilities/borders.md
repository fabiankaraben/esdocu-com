---
weight: 3
linkTitle: Bordes
title: Utilidades de Bordes · Bootstrap en Español v5.1
description: Utiliza las utilidades de borde para diseñar rápidamente el borde y el radio del borde de un elemento. Ideal para imágenes, botones o cualquier otro elemento.
type: docs
---

# Utilidades de Bordes de Bootstrap

Utiliza las utilidades de borde para diseñar rápidamente el borde y el radio del borde de un elemento. Ideal para imágenes, botones o cualquier otro elemento.

{{< content-ads/top-banner >}}

## Bordes

Utiliza las utilidades de borde para agregar o eliminar los bordes de un elemento. Elije entre, todos los bordes o uno a la vez.

### Aditivo

{{< bootstrap/5-1/example class="bd-example-border-utils" >}}
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>
{{< /bootstrap/5-1/example >}}

### Sustractivo

{{< content-ads/middle-banner-1 >}}

{{< bootstrap/5-1/example class="bd-example-border-utils bd-example-border-utils-0" >}}
<span class="border-0"></span>
<span class="border-top-0"></span>
<span class="border-end-0"></span>
<span class="border-bottom-0"></span>
<span class="border-start-0"></span>
{{< /bootstrap/5-1/example >}}

## Color del borde

Cambia el color del borde usando utilidades basadas en nuestros colores temáticos.

{{< bootstrap/5-1/example class="bd-example-border-utils" >}}
{{< border.inline >}}
{{- range (index $.Site.Data "bootstrap_5_1_theme-colors") }}
<span class="border border-{{ .name }}"></span>
{{- end -}}
{{< /border.inline >}}
<span class="border border-white"></span>
{{< /bootstrap/5-1/example >}}

## Ancho del borde

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/5-1/example class="bd-example-border-utils" >}}
<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>
{{< /bootstrap/5-1/example >}}

## Radio del borde

Agrega clases a un elemento para redondear fácilmente tus esquinas.

{{< bootstrap/5-1/example class="bd-example-rounded-utils" >}}
{{< bootstrap/5-1/placeholder width="75" height="75" class="rounded" title="Example rounded image" >}}
{{< bootstrap/5-1/placeholder width="75" height="75" class="rounded-top" title="Example top rounded image" >}}
{{< bootstrap/5-1/placeholder width="75" height="75" class="rounded-end" title="Example right rounded image" >}}
{{< bootstrap/5-1/placeholder width="75" height="75" class="rounded-bottom" title="Example bottom rounded image" >}}
{{< bootstrap/5-1/placeholder width="75" height="75" class="rounded-start" title="Example left rounded image" >}}
{{< bootstrap/5-1/placeholder width="75" height="75" class="rounded-circle" title="Completely round image" >}}
{{< bootstrap/5-1/placeholder width="150" height="75" class="rounded-pill" title="Rounded pill image" >}}
{{< /bootstrap/5-1/example >}}

### Tamaños

{{< content-ads/middle-banner-3 >}}

Utiliza las clases de escala para esquinas redondeadas más grandes o más pequeñas. Los tamaños varían de `0` a `3` y se pueden configurar modificando la API de utilidades.

{{< bootstrap/5-1/example class="bd-example-rounded-utils" >}}
{{< bootstrap/5-1/placeholder width="75" height="75" class="rounded-0" title="Example non-rounded image" >}}
{{< bootstrap/5-1/placeholder width="75" height="75" class="rounded-1" title="Example small rounded image" >}}
{{< bootstrap/5-1/placeholder width="75" height="75" class="rounded-2" title="Example default rounded image" >}}
{{< bootstrap/5-1/placeholder width="75" height="75" class="rounded-3" title="Example large rounded image" >}}
{{< /bootstrap/5-1/example >}}

## Sass

### Variables

{{< bootstrap/5-1/scss-docs name="border-variables" file="scss/_variables.scss" >}}

{{< content-ads/middle-banner-4 >}}

{{< bootstrap/5-1/scss-docs name="border-radius-variables" file="scss/_variables.scss" >}}

### Mixins

{{< bootstrap/5-1/scss-docs name="border-radius-mixins" file="scss/mixins/_border-radius.scss" >}}

### API de utilidades

Las utilidades de borde se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< bootstrap/5-1/docsref "/utilities/api#using-the-api" >}})

{{< bootstrap/5-1/scss-docs name="utils-borders" file="scss/_utilities.scss" >}}

{{< bootstrap/5-1/scss-docs name="utils-border-radius" file="scss/_utilities.scss" >}}

{{< content-ads/bottom-banner >}}
