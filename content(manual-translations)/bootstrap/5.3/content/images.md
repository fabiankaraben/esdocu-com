---
weight: 3
linkTitle: Imágenes
title: Uso de Imágenes con Bootstrap · Bootstrap en Español v5.3
description: Documentación y ejemplos para optar por imágenes para que tengan un comportamiento responsive (para que nunca sean más anchas que sus padres) y agregarles estilos livianos, todo a través de clases.
noindex: true
---

# Uso de Imágenes con Bootstrap

Documentación y ejemplos para optar por imágenes para que tengan un comportamiento responsive (para que nunca sean más anchas que sus padres) y agregarles estilos livianos, todo a través de clases.

{{< content-ads/top-banner >}}

Imágenes responsive {#responsive-images}
-----------------------------------------

Las imágenes en Bootstrap responden con `.img-fluid`. Esto aplica `max-width: 100%;` y `height: auto;` a la imagen para que se escale con el ancho principal.

{{< demo-iframe path="/demos/bootstrap/5.3/content/images/responsive-images.html" >}}
```html {filename="HTML"}
    <img src="..." class="img-fluid" alt="...">
```
{{< /demo-iframe >}}

Miniaturas de imágenes {#image-thumbnails}
-------------------------------------------

{{< content-ads/middle-banner-1 >}}

Además de nuestras [utilidades de radio de borde](/bootstrap/5.3/utilities/borders), puedes usar `.img-thumbnail` para darle a una imagen una apariencia de borde redondeado de 1px.

Una imagen genérica de marcador de posición cuadrado con un borde blanco alrededor, lo que la hace parecerse a una fotografía tomada con una vieja cámara instantánea.

{{< demo-iframe path="/demos/bootstrap/5.3/content/images/image-thumbnails.html" >}}
```html {filename="HTML"}
    <img src="..." class="img-thumbnail" alt="...">
```
{{< /demo-iframe >}}

Alinear imágenes {#aligning-images}
------------------------------------

{{< content-ads/middle-banner-2 >}}

Alinear imágenes con las [clases flotantes auxiliares](/bootstrap/5.3/utilities/float) o [clases de alineación de texto](/bootstrap/5.3/utilities/text/#text-alignment). Las imágenes a nivel de `block` se pueden centrar usando [utilidad de margen `.mx-auto` (clase)](/bootstrap/5.3/utilities/spacing/#horizontal-centering) .

{{< demo-iframe path="/demos/bootstrap/5.3/content/images/aligning-images-1.html" >}}
```html {filename="HTML"}
    <img src="..." class="rounded float-start" alt="...">
    <img src="..." class="rounded float-end" alt="...">
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/content/images/aligning-images-2.html" >}}
```html {filename="HTML"}
    <img src="..." class="rounded mx-auto d-block" alt="...">
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/content/images/aligning-images-3.html" >}}
```html {filename="HTML"}
    <div class="text-center">
        <img src="..." class="rounded" alt="...">
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-3 >}}

Picture {#picture}
-------------------

Si estás usando el elemento `<picture>` para especificar múltiples elementos `<source>` para un `<img>`, asegúrate de agregar las clases `.img-*` al `<img>` y no al `<picture>`.

```html {filename="HTML"}
<picture>
    <source srcset="..." type="image/svg+xml">
    <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
```    

Personalización del CSS {#css}
-----------

{{< content-ads/middle-banner-4 >}}

{{< bootstrap/content-suggestion >}}

### Variables Sass generales relacionadas {#sass-variables}

Hay variables disponibles para miniaturas de imágenes.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

{{< content-ads/middle-banner-5 >}}

```scss {filename="scss/_variables.scss"}
$thumbnail-padding:                 .25rem;
$thumbnail-bg:                      var(--#{$prefix}body-bg);
$thumbnail-border-width:            var(--#{$prefix}border-width);
$thumbnail-border-color:            var(--#{$prefix}border-color);
$thumbnail-border-radius:           var(--#{$prefix}border-radius);
$thumbnail-box-shadow:              var(--#{$prefix}box-shadow-sm);
```

{{< content-ads/bottom-banner >}}
