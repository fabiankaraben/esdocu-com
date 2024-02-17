---
weight: 10
linkTitle: Ajuste de objeto
title: Uso de las utilidades de Ajuste de objeto en Bootstrap · Bootstrap en Español v5.3
description: Usa las utilidades de ajuste de objetos para modificar cómo se debe cambiar el tamaño del contenido de un elemento reemplazado, como <img> o <video>, para que se ajuste a su contenedor.
noindex: true
---

# Uso de las utilidades de Ajuste de objeto en Bootstrap

Utiliza las utilidades de ajuste de objetos para modificar el contenido de un [elemento reemplazado](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element), como un `<img>` o `<video>`, debe cambiarse de tamaño para que se ajuste a su contenedor.

{{< content-ads/top-banner >}}

Cómo funciona {#how-it-works}
-------------------------------

Cambiar el valor de [`object-fit` (propiedad)](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) con nuestras clases de utilidad responsive `object-fit`. Esta propiedad le indica al contenido que llene el contenedor padre de varias maneras, como preservando la relación de aspecto o estirándolo para ocupar tanto espacio como sea posible.

Las clases para el valor de `object-fit` se nombran usando el formato `.object-fit-{value}`. Elige entre los siguientes valores:

* `contain`
* `cover`
* `fill`
* `scale` (para reducir la escala)
* `none`

{{< content-ads/middle-banner-1 >}}

Ejemplos {#examples}
---------------------

Agrega la clase `object-fit-{value}` al [elemento reemplazado](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element):

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/object-fit/examples.html" >}}
```html {filename="HTML"}
    <img src="..." class="object-fit-contain border rounded" alt="...">
    <img src="..." class="object-fit-cover border rounded" alt="...">
    <img src="..." class="object-fit-fill border rounded" alt="...">
    <img src="..." class="object-fit-scale border rounded" alt="...">
    <img src="..." class="object-fit-none border rounded" alt="...">
```
{{< /demo-iframe >}}

Responsive {#responsive}
-------------------------

{{< content-ads/middle-banner-2 >}}

También existen variaciones responsive para cada valor de `object-fit` usando el formato `.object-fit-{breakpoint}-{value}`, para las siguientes abreviaturas de puntos de interrupción: `sm`, `md`, `lg`, `xl` y `xxl`. Las clases se pueden combinar para obtener varios efectos según sea necesario.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/object-fit/responsive.html" >}}
```html {filename="HTML"}
    <img src="..." class="object-fit-sm-contain border rounded" alt="...">
    <img src="..." class="object-fit-md-contain border rounded" alt="...">
    <img src="..." class="object-fit-lg-contain border rounded" alt="...">
    <img src="..." class="object-fit-xl-contain border rounded" alt="...">
    <img src="..." class="object-fit-xxl-contain border rounded" alt="...">
```
{{< /demo-iframe >}}

Video {#video}
---------------

Las utilidades `.object-fit-{value}` y responsive `.object-fit-{breakpoint}-{value}` también funciona con elementos `<video>`.

{{< content-ads/middle-banner-3 >}}

    ```html {filename="HTML"}
    <video src="..." class="object-fit-contain" autoplay></video>
    <video src="..." class="object-fit-cover" autoplay></video>
    <video src="..." class="object-fit-fill" autoplay></video>
    <video src="..." class="object-fit-scale" autoplay></video>
    <video src="..." class="object-fit-none" autoplay></video>
    ```

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

### API de utilidades de Sass {#sass-utilities-api}

{{< content-ads/middle-banner-4 >}}

Las utilidades de ajuste de objetos se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"object-fit": (
  responsive: true,
  property: object-fit,
  values: (
    contain: contain,
    cover: cover,
    fill: fill,
    scale: scale-down,
    none: none,
  )
),
```

{{< content-ads/bottom-banner >}}
