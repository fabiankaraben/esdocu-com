---
weight: 11
linkTitle: Regla vertical
title: Uso del ayudante de Regla vertical en Bootstrap · Bootstrap en Español v5.3
description: Usa el asistente de regla vertical personalizado para crear divisores verticales como el elemento <hr>.
noindex: true
---

# Uso del ayudante de Regla vertical en Bootstrap

Utiliza el asistente de regla vertical personalizado para crear divisores verticales como el elemento `<hr>`.

{{< content-ads/top-banner >}}

Cómo funciona {#how-it-works}
-------------------------------

Las reglas verticales están inspiradas en el elemento `<hr>` , lo que te permite crear divisores verticales en diseños comunes. Tienen el mismo estilo que los elementos `<hr>`:

* Miden `1px` de ancho
* Tienen `min-height` de `1em`
* Su color se establece mediante `currentColor` y `opacity`

Personalízalos con estilos adicionales según sea necesario.

{{< content-ads/middle-banner-1 >}}

Ejemplo {#example}
-------------------

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/vertical-rule/example-1.html" >}}
```html {filename="HTML"}
    <div class="vr"></div>
```
{{< /demo-iframe >}}

Las reglas verticales escalan su altura en diseños flex:

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/vertical-rule/example-2.html" >}}
```html {filename="HTML"}
    <div class="d-flex" style="height: 200px;">
        <div class="vr"></div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-2 >}}

Con pilas {#with-stacks}
-------------------------

También se pueden usar en [pilas](/bootstrap/5.3/helpers/stacks):

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/vertical-rule/with-stacks.html" >}}
```html {filename="HTML"}
    <div class="hstack gap-3">
        <div class="p-2">Primer elemento</div>
        <div class="p-2 ms-auto">Segundo elemento</div>
        <div class="vr"></div>
        <div class="p-2">Tercer elemento</div>
    </div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-3 >}}

Personalización del CSS {#css}
-----------

### Variables Sass generales relacionadas {#sass-variables}

Personaliza la variable Sass de regla vertical para cambiar su ancho.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

{{< content-ads/middle-banner-4 >}}

```scss {filename="scss/_variables.scss"}
$vr-border-width:             var(--#{$prefix}border-width);
```

{{< content-ads/bottom-banner >}}
