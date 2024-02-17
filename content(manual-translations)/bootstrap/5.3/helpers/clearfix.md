---
weight: 1
linkTitle: Clearfix
title: Uso del ayudante Clearfix en Bootstrap · Bootstrap en Español v5.3
description: Borra rápida y fácilmente el contenido flotante dentro de un contenedor agregando una utilidad clearfix.
prev: /bootstrap/5.3/components/tooltips
noindex: true
---

# Uso del ayudante Clearfix en Bootstrap

Borra rápida y fácilmente el contenido flotante dentro de un contenedor agregando una utilidad clearfix.

{{< content-ads/top-banner >}}

Borra fácilmente los `float` agregando `.clearfix` **al elemento padre**. También se puede utilizar como mixin.

Usar en HTML:

```html {filename="HTML"}
<div class="clearfix">...</div>
```

El código fuente del mixin:

{{< content-ads/middle-banner-1 >}}

[scss/mixins/_clearfix.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/mixins/_clearfix.scss)

```scss {filename="scss/mixins/_clearfix.scss"}
@mixin clearfix() {
  &::after {
    display: block;
    clear: both;
    content: "";
  }
}
```

{{< bootstrap/content-suggestion >}}

Usa el mixin en SCSS:

{{< content-ads/middle-banner-2 >}}

```scss {filename="SCSS"}
.element {
  @include clearfix;
}
```

El siguiente ejemplo muestra cómo se puede usar clearfix. Sin clearfix, el div envolvente no abarcaría los botones, lo que provocaría un diseño roto.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/clearfix/index.html" >}}
```html {filename="HTML"}
    <div class="bg-info clearfix">
        <button type="button" class="btn btn-secondary float-start">Ejemplo de botón flotando hacia la
            izquierda</button>
        <button type="button" class="btn btn-secondary float-end">El botón de ejemplo flotando hacia la
            derecha</button>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/bottom-banner >}}
