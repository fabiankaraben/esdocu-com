---
weight: 5
linkTitle: Rango
title: Uso de elementos Range en Bootstrap · Bootstrap en Español v5.3
description: Utiliza nuestras entradas de rango personalizada para lograr un estilo consistente en todos los navegadores y una personalización integrada.
noindex: true
---

# Uso de elementos Range en Bootstrap

Utiliza nuestras entradas de rango personalizada para lograr un estilo consistente en todos los navegadores y una personalización integrada.

{{< content-ads/top-banner >}}

Descripción general {#overview}
--------------------------------

Crea controles `<input type="range">` personalizados con `.form-range`. La pista (el fondo) y el thumb (el valor) tienen el mismo estilo en todos los navegadores. Como solo Firefox admite "rellenar" su pista desde la izquierda o la derecha del thumb como forma de indicar visualmente el progreso, actualmente no lo admitimos.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/range/overview.html" >}}
```html {filename="HTML"}
    <label for="customRange1" class="form-label">Rango de ejemplo</label>
    <input type="range" class="form-range" id="customRange1">
```
{{< /demo-iframe >}}

Deshabilitado {#disabled}
--------------------------

{{< content-ads/middle-banner-1 >}}

Agrega el atributo booleano `disabled` en una entrada para darle una apariencia atenuada, eliminar eventos de puntero y evitar el enfoque.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/range/disabled.html" >}}
```html {filename="HTML"}
    <label for="disabledRange" class="form-label">Rango deshabilitado</label>
    <input type="range" class="form-range" id="disabledRange" disabled="">
```
{{< /demo-iframe >}}

Min y max {#min-and-max}
-------------------------

Las entradas de rango tienen valores implícitos para `min` y `max`—`0` y `100`, respectivamente. Puedes especificar nuevos valores para aquellos que usan los atributos `min` y `max`.

{{< content-ads/middle-banner-2 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/range/min-and-max.html" >}}
```html {filename="HTML"}
    <label for="customRange2" class="form-label">Rango de ejemplo</label>
    <input type="range" class="form-range" min="0" max="5" id="customRange2">
```
{{< /demo-iframe >}}

Pasos {#steps}
---------------

De forma predeterminada, las entradas de rango se “ajustan” a valores enteros. Para cambiar esto, puedes especificar un valor de `step`. En el siguiente ejemplo, duplicamos el número de pasos usando `step="0.5"`.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/range/steps.html" >}}
```html {filename="HTML"}
    <label for="customRange3" class="form-label">Rango de ejemplo</label>
    <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-3 >}}

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

{{< content-ads/middle-banner-4 >}}

```scss {filename="scss/_variables.scss"}
$form-range-track-width:          100%;
$form-range-track-height:         .5rem;
$form-range-track-cursor:         pointer;
$form-range-track-bg:             var(--#{$prefix}secondary-bg);
$form-range-track-border-radius:  1rem;
$form-range-track-box-shadow:     var(--#{$prefix}box-shadow-inset);

$form-range-thumb-width:                   1rem;
$form-range-thumb-height:                  $form-range-thumb-width;
$form-range-thumb-bg:                      $component-active-bg;
$form-range-thumb-border:                  0;
$form-range-thumb-border-radius:           1rem;
$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1);
$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow;
$form-range-thumb-focus-box-shadow-width:  $input-focus-width; // For focus box shadow issue in Edge
$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%);
$form-range-thumb-disabled-bg:             var(--#{$prefix}secondary-color);
$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
```

{{< content-ads/bottom-banner >}}
