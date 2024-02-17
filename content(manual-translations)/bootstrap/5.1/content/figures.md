---
weight: 5
linkTitle: Figuras
title: Uso de Figures · Bootstrap en Español v5.1
description: Documentación y ejemplos para mostrar imágenes y texto relacionados con el componente de figure en Bootstrap.
next: /bootstrap/5.1/forms/overview
type: docs
noindex: true
---

# Uso de Figures en Bootstrap

Documentación y ejemplos para mostrar imágenes y texto relacionados con el componente de figure en Bootstrap.

{{< content-ads/top-banner >}}

Cada vez que necesites mostrar una parte del contenido, como una imagen con un título opcional, considera usar `<figure>`.

Utiliza las clases incluidas `.figure`, `.figure-img` y `.figure-caption` para proporcionar algunos estilos básicos para los elementos HTML5 `<figure>` y `<figcaption>`. Las imágenes en las figuras no tienen un tamaño explícito, así que asegúrate de agregar la clase `.img-fluid` a tu `<img>` para que sea responsive.

{{< bootstrap/5-1/example >}}
<figure class="figure">
  {{< bootstrap/5-1/placeholder width="400" height="300" class="figure-img img-fluid rounded" >}}
  <figcaption class="figure-caption">Un título para la imagen de arriba.</figcaption>
</figure>
{{< /bootstrap/5-1/example >}}

Alinear el título de la figura es fácil con nuestras [utilidades de texto]({{< bootstrap/5-1/docsref "/utilities/text#text-alignment" >}}).

{{< content-ads/middle-banner-1 >}}

{{< bootstrap/5-1/example >}}
<figure class="figure">
  {{< bootstrap/5-1/placeholder width="400" height="300" class="figure-img img-fluid rounded" >}}
  <figcaption class="figure-caption text-end">Un título para la imagen de arriba.</figcaption>
</figure>
{{< /bootstrap/5-1/example >}}

## Sass

### Variables

{{< bootstrap/5-1/scss-docs name="figure-variables" file="scss/_variables.scss" >}}

{{< content-ads/bottom-banner >}}
