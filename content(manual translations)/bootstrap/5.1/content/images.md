---
weight: 3
linkTitle: Imágenes
title: Uso de Imágenes · Bootstrap en Español v5.1
description: Documentación y ejemplos para optar por que las imágenes tengan un comportamiento responsive (para que nunca se vuelvan más anchas que sus padres) y agregarles estilos livianos, todo a través de clases.
type: docs
---

# Uso de Imágenes en Bootstrap

Documentación y ejemplos para optar por que las imágenes tengan un comportamiento responsive (para que nunca se vuelvan más anchas que sus padres) y agregarles estilos livianos, todo a través de clases.

{{< content-ads/top-banner >}}

## Imágenes responsive

Las imágenes en Bootstrap se hacen responsive con `.img-fluid`. Esto aplica `max-width: 100%;` y `height: auto;` a la imagen para que se escale con el ancho de su elemento padre.

{{< bootstrap/5-1/example >}}
{{< bootstrap/5-1/placeholder width="100%" height="250" class="bd-placeholder-img-lg img-fluid" text="Responsive image" >}}
{{< /bootstrap/5-1/example >}}

## Miniaturas de imágenes

{{< content-ads/middle-banner-1 >}}

Además de nuestras [utilidades border-radius]({{< bootstrap/5-1/docsref "/utilities/borders" >}}), puedes usar `.img-thumbnail` para darle a una imagen una apariencia de borde redondeado de 1px.

{{< bootstrap/5-1/example >}}
{{< bootstrap/5-1/placeholder width="200" height="200" class="img-thumbnail" title="Una imagen placeholder cuadrada genérica con un borde blanco alrededor, lo que la hace parecerse a una fotografía tomada con una cámara instantánea antigua" >}}
{{< /bootstrap/5-1/example >}}

## Alinear imágenes

Alinea las imágenes con las [clases flotantes auxiliares]({{< bootstrap/5-1/docsref "/utilities/float" >}}) o [clases de alineación de texto]({{< bootstrap/5-1/docsref "/utilities/text#text-alignment" >}}). Las imágenes a nivel de `block` se pueden centrar usando [la clase de utilidad de margen `.mx-auto`]({{< bootstrap/5-1/docsref "/utilities/spacing#horizontal-centering" >}}).

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/5-1/example >}}
{{< bootstrap/5-1/placeholder width="200" height="200" class="rounded float-start" >}}
{{< bootstrap/5-1/placeholder width="200" height="200" class="rounded float-end" >}}
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/example >}}
{{< bootstrap/5-1/placeholder width="200" height="200" class="rounded mx-auto d-block" >}}
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/example >}}
<div class="text-center">
  {{< bootstrap/5-1/placeholder width="200" height="200" class="rounded" >}}
</div>
{{< /bootstrap/5-1/example >}}

## Picture

{{< content-ads/middle-banner-3 >}}

Si estás utilizando el elemento `<picture>` para especificar múltiples elementos `<source>` para un `<img>` específico, asegúrate de agregar las clases `.img-*` a `<img>` y no a la etiqueta `<picture>`.

```html
<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
```

## Sass

### Variables

{{< content-ads/middle-banner-4 >}}

Las variables están disponibles para las miniaturas de imágenes.

{{< bootstrap/5-1/scss-docs name="thumbnail-variables" file="scss/_variables.scss" >}}

{{< content-ads/bottom-banner >}}
