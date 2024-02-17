---
weight: 5
linkTitle: Figuras
title: Uso de Figures con Bootstrap · Bootstrap en Español v5.3
description: Documentación y ejemplos para mostrar imágenes y texto relacionados con el componente de figura en Bootstrap.
next: /bootstrap/5.3/forms/overview
noindex: true
---

# Uso de Figures con Bootstrap

Documentación y ejemplos para mostrar imágenes y texto relacionados con el componente de figura en Bootstrap.

{{< content-ads/top-banner >}}

Cada vez que necesites mostrar un contenido, como una imagen con un título opcional, considera usar una `<figure>`.

Utiliza las clases `.figure`, `.figure-img` y `.figure-caption` incluidas para proporcione algunos estilos básicos para los elementos HTML5 `<figure>` y `<figcaption>`. Las imágenes en las figuras no tienen un tamaño explícito, así que asegúrate de agregar la clase `.img-fluid` a tu `<img>` para hacerla responsive.

{{< demo-iframe path="/demos/bootstrap/5.3/content/figures/index-1.html" >}}
```html {filename="HTML"}
    <figure class="figure">
        <img src="..." class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption">Un título para la imagen de arriba.</figcaption>
    </figure>
```
{{< /demo-iframe >}}

Alinear el título de la figura es fácil con nuestras [utilidades de texto](/bootstrap/5.3/utilities/text/#text-alignment).

{{< content-ads/middle-banner-1 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/content/figures/index-2.html" >}}
```html {filename="HTML"}
    <figure class="figure">
        <img src="..." class="figure-img img-fluid rounded" alt="...">
        <figcaption class="figure-caption text-end">Un título para la imagen de arriba.</figcaption>
    </figure>
```
{{< /demo-iframe >}}

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

### Variables Sass generales relacionadas {#sass-variables}

{{< content-ads/middle-banner-2 >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$figure-caption-font-size:          $small-font-size;
$figure-caption-color:              var(--#{$prefix}secondary-color);
```

{{< content-ads/bottom-banner >}}
