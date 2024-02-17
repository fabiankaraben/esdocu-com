---
weight: 3
linkTitle: Select
title: Uso de elementos Select en Bootstrap · Bootstrap en Español v5.3
description: Personaliza los <select> nativos con CSS personalizado que cambia la apariencia inicial del elemento.
noindex: true
---

# Uso de elementos Select en Bootstrap

Personaliza los `<select>`s nativos con CSS personalizado que cambia la apariencia inicial del elemento.

{{< content-ads/top-banner >}}

Predeterminado {#default}
--------------------------

Los menús `<select>` personalizados solo necesitan una clase personalizada, `.form-select` para activar los estilos personalizados. Los estilos personalizados se limitan a la apariencia inicial de `<select>` y no pueden modificar los `<option>` debido a limitaciones del navegador.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/select/default.html" >}}
```html {filename="HTML"}
    <select class="form-select" aria-label="Ejemplo de select predeterminado">
        <option selected="">Abre este menú de selección</option>
        <option value="1">Uno</option>
        <option value="2">Dos</option>
        <option value="3">Tres</option>
    </select>
```
{{< /demo-iframe >}}

Tamaños {#sizing}
------------------

{{< content-ads/middle-banner-1 >}}

También puedes elegir entre selects personalizados pequeños y grandes para que coincidan con nuestras entradas de texto de tamaño similar.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/select/sizing-1.html" >}}
```html {filename="HTML"}
    <select class="form-select form-select-lg mb-3" aria-label="Ejemplo de select grande">
        <option selected="">Abre este menú de selección</option>
        <option value="1">Uno</option>
        <option value="2">Dos</option>
        <option value="3">Tres</option>
    </select>

    <select class="form-select form-select-sm" aria-label="Ejemplo de select pequeño">
        <option selected="">Abre este menú de selección</option>
        <option value="1">Uno</option>
        <option value="2">Dos</option>
        <option value="3">Tres</option>
    </select>
```
{{< /demo-iframe >}}

El atributo `multiple` también es compatible:

{{< demo-iframe path="/demos/bootstrap/5.3/forms/select/sizing-2.html" >}}
```html {filename="HTML"}
    <select class="form-select" multiple="" aria-label="Ejemplo de selección múltiple">
        <option selected="">Abre este menú de selección</option>
        <option value="1">Uno</option>
        <option value="2">Dos</option>
        <option value="3">Tres</option>
    </select>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-2 >}}

Cómo es el atributo `size`:

{{< demo-iframe path="/demos/bootstrap/5.3/forms/select/sizing-3.html" >}}
```html {filename="HTML"}
    <select class="form-select" size="3" aria-label="Ejemplo de select tamaño 3">
        <option selected="">Abre este menú de selección</option>
        <option value="1">Uno</option>
        <option value="2">Dos</option>
        <option value="3">Tres</option>
    </select>
```
{{< /demo-iframe >}}

Deshabilitado {#disabled}
--------------------------

Agrega el atributo booleano `disabled` en una selección para darle una apariencia atenuada y eliminar eventos de puntero.

{{< content-ads/middle-banner-3 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/select/disabled.html" >}}
```html {filename="HTML"}
    <select class="form-select" aria-label="Ejemplo de select deshabilitado" disabled="">
        <option selected="">Abre este menú de selección</option>
        <option value="1">Uno</option>
        <option value="2">Dos</option>
        <option value="3">Tres</option>
    </select>
```
{{< /demo-iframe >}}

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

### Variables Sass generales relacionadas {#sass-variables}

{{< content-ads/middle-banner-4 >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$form-select-padding-y:             $input-padding-y;
$form-select-padding-x:             $input-padding-x;
$form-select-font-family:           $input-font-family;
$form-select-font-size:             $input-font-size;
$form-select-indicator-padding:     $form-select-padding-x * 3; // Extra padding for background-image
$form-select-font-weight:           $input-font-weight;
$form-select-line-height:           $input-line-height;
$form-select-color:                 $input-color;
$form-select-bg:                    $input-bg;
$form-select-disabled-color:        null;
$form-select-disabled-bg:           $input-disabled-bg;
$form-select-disabled-border-color: $input-disabled-border-color;
$form-select-bg-position:           right $form-select-padding-x center;
$form-select-bg-size:               16px 12px; // In pixels because image dimensions
$form-select-indicator-color:       $gray-800;
$form-select-indicator:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>");

$form-select-feedback-icon-padding-end: $form-select-padding-x * 2.5 + $form-select-indicator-padding;
$form-select-feedback-icon-position:    center right $form-select-indicator-padding;
$form-select-feedback-icon-size:        $input-height-inner-half $input-height-inner-half;

$form-select-border-width:        $input-border-width;
$form-select-border-color:        $input-border-color;
$form-select-border-radius:       $input-border-radius;
$form-select-box-shadow:          var(--#{$prefix}box-shadow-inset);

$form-select-focus-border-color:  $input-focus-border-color;
$form-select-focus-width:         $input-focus-width;
$form-select-focus-box-shadow:    0 0 0 $form-select-focus-width $input-btn-focus-color;

$form-select-padding-y-sm:        $input-padding-y-sm;
$form-select-padding-x-sm:        $input-padding-x-sm;
$form-select-font-size-sm:        $input-font-size-sm;
$form-select-border-radius-sm:    $input-border-radius-sm;

$form-select-padding-y-lg:        $input-padding-y-lg;
$form-select-padding-x-lg:        $input-padding-x-lg;
$form-select-font-size-lg:        $input-font-size-lg;
$form-select-border-radius-lg:    $input-border-radius-lg;

$form-select-transition:          $input-transition;
```

{{< content-ads/bottom-banner >}}
