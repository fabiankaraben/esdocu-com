---
weight: 7
linkTitle: Ratio
title: Uso del ayudante de Ratios en Bootstrap · Bootstrap en Español v5.3
description: Usa pseudoelementos generados para hacer que un elemento mantenga la relación de aspecto que elijas. Perfecto para manejar de manera responsive incrustaciones de videos o presentaciones de diapositivas según el ancho del elemento principal.
noindex: true
---

# Uso del ayudante de Ratios en Bootstrap

Usa pseudoelementos generados para hacer que un elemento mantenga la relación de aspecto que elijas. Perfecto para manejar de manera responsive incrustaciones de videos o presentaciones de diapositivas según el ancho del elemento principal.

{{< content-ads/top-banner >}}

Acerca de {#about}
-------------------

Utiliza el asistente de proporciones para administrar las proporciones de contenido externo como `<iframe>`s, `<embed>`s, `<video>`s y `<object>`s. Estos ayudantes también se pueden utilizar en cualquier elemento secundario HTML estándar (por ejemplo, un `<div>` o `<img>`). Los estilos se aplican desde la clase padre `.ratio` directamente al hijo.

Las relaciones de aspecto se declaran en un mapa Sass y se incluyen en cada clase a través de una variable CSS, que también permite [relaciones de aspecto personalizadas](#custom-ratios).

{{< callout type="info" emoji="" >}}
**¡Consejo profesional!** No necesitas `frameborder="0"` en tus `<iframe>`s, ya que lo sobrescribimos en [Reboot](/bootstrap/5.3/content/reboot).
{{< /callout >}}

{{< content-ads/middle-banner-1 >}}

Ejemplo {#example}
-------------------

Envuelve cualquier incrustación, como un `<iframe>`, en un elemento padre con `.ratio` y una clase de relación de aspecto. El tamaño del elemento hijo inmediato se ajusta automáticamente gracias a nuestro selector universal `.ratio > *`.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/ratio/example.html" >}}
```html {filename="HTML"}
    <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/mUxzKVrSAjs?rel=0" title="Video de YouTube"
            allowfullscreen=""></iframe>
    </div>
```
{{< /demo-iframe >}}

Relaciones de aspecto {#aspect-ratios}
---------------------------------------

{{< content-ads/middle-banner-2 >}}

Las relaciones de aspecto se pueden personalizar con clases de modificadores. De forma predeterminada, se proporcionan las siguientes clases de relación:

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/ratio/aspect-ratios.html" >}}
```html {filename="HTML"}
    <div class="ratio ratio-1x1">
        <div>1x1</div>
    </div>
    <div class="ratio ratio-4x3">
        <div>4x3</div>
    </div>
    <div class="ratio ratio-16x9">
        <div>16x9</div>
    </div>
    <div class="ratio ratio-21x9">
        <div>21x9</div>
    </div>
```
{{< /demo-iframe >}}

Proporciones personalizadas {#custom-ratios}
---------------------------------------------

Cada clase `.ratio-*` incluye una propiedad personalizada CSS (o variable CSS) en el selector. Puedes sobrescribir esta variable CSS para crear relaciones de aspecto personalizadas sobre la marcha con algunos cálculos rápidos de tu parte.

{{< content-ads/middle-banner-3 >}}

Por ejemplo, para crear una relación de aspecto de 2x1, establece `--bs-aspect-ratio: 50%` en `.ratio`.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/ratio/custom-ratios-1.html" >}}
```html {filename="HTML"}
    <div class="ratio" style="--bs-aspect-ratio: 50%;">
        <div>2x1</div>
    </div>
```
{{< /demo-iframe >}}

Esta variable CSS facilita la modificación de la relación de aspecto entre puntos de interrupción. Lo siguiente es 4x3 para comenzar, pero cambia a un 2x1 personalizado en el punto de interrupción medio.

```scss {filename="SCSS"}
.ratio-4x3 {
    @include media-breakpoint-up(md) {
    --bs-aspect-ratio: 50%; // 2x1
    }
}
```

{{< content-ads/middle-banner-4 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/ratio/custom-ratios-2.html" >}}
```html {filename="HTML"}
    <div class="ratio ratio-4x3">
        <div>4x3, luego 2x1</div>
    </div>
```
{{< /demo-iframe >}}

Mapas de Sass {#sass-maps}
---------------------------

{{< bootstrap/content-suggestion >}}

Dentro de `_variables.scss`, puedes cambiar las relaciones de aspecto que deseas usar. Aquí está nuestro mapa `$ratio-aspect-ratios` predeterminado. Modifica el mapa como quieras y vuelve a compilar tu Sass para usarlo.

{{< content-ads/middle-banner-5 >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$aspect-ratios: (
    "1x1": 100%,
    "4x3": calc(3 / 4 * 100%),
    "16x9": calc(9 / 16 * 100%),
    "21x9": calc(9 / 21 * 100%)
);
```

{{< content-ads/bottom-banner >}}
