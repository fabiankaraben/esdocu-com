---
weight: 12
linkTitle: Overflow
title: Uso de las utilidades de Overflow en Bootstrap · Bootstrap en Español v5.3
description: Usa estas utilidades abreviadas para configurar rápidamente cómo el contenido desborda un elemento.
noindex: true
---

# Uso de las utilidades de Overflow en Bootstrap

Usa estas utilidades abreviadas para configurar rápidamente cómo el contenido desborda un elemento.

{{< content-ads/top-banner >}}

Overflow {#overflow}
---------------------

Ajusta la propiedad `overflow` sobre la marcha con cuatro valores y clases predeterminados. Estas clases no son responsive de forma predeterminada.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/overflow/overflow.html" >}}
```html {filename="HTML"}
    <div class="overflow-auto">...</div>
    <div class="overflow-hidden">...</div>
    <div class="overflow-visible">...</div>
    <div class="overflow-scroll">...</div>
```
{{< /demo-iframe >}}    

### `overflow-x` {#overflow-x}

{{< content-ads/middle-banner-1 >}}

Ajusta la propiedad `overflow-x` para afectar el desbordamiento del contenido horizontalmente.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/overflow/overflow-x.html" >}}
```html {filename="HTML"}
    <div class="overflow-x-auto">...</div>
    <div class="overflow-x-hidden">...</div>
    <div class="overflow-x-visible">...</div>
    <div class="overflow-x-scroll">...</div>
```
{{< /demo-iframe >}}

### `overflow-y` {#overflow-y}

Ajusta la propiedad `overflow-y` para afectar el desbordamiento del contenido verticalmente.

{{< content-ads/middle-banner-2 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/overflow/overflow-y.html" >}}
```html {filename="HTML"}
    <div class="overflow-y-auto">...</div>
    <div class="overflow-y-hidden">...</div>
    <div class="overflow-y-visible">...</div>
    <div class="overflow-y-scroll">...</div>
```
{{< /demo-iframe >}}

Usando variables Sass, puedes personalizar las utilidades de desbordamiento cambiando la variable `$overflows` en `_variables.scss`.

Personalización del CSS {#css}
-----------

### API de utilidades de Sass {#sass-utilities-api}

{{< content-ads/middle-banner-3 >}}

Las utilidades de desbordamiento se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

{{< bootstrap/content-suggestion >}}

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"overflow": (
  property: overflow,
  values: auto hidden visible scroll,
),
"overflow-x": (
  property: overflow-x,
  values: auto hidden visible scroll,
),
"overflow-y": (
  property: overflow-y,
  values: auto hidden visible scroll,
),
```

{{< content-ads/bottom-banner >}}
