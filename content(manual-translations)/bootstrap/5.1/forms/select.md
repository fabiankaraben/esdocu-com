---
weight: 3
linkTitle: Select
title: Uso de Select · Bootstrap en Español v5.1
description: Personaliza los `<select>` nativos con CSS personalizado que cambia la apariencia inicial del elemento.
type: docs
---

# Uso de Select en Bootstrap

Personaliza los `<select>` nativos con CSS personalizado que cambia la apariencia inicial del elemento.

{{< content-ads/top-banner >}}

## Por defecto

Los menús `<select>` personalizados solo necesitan una clase personalizada, `.form-select` para activar los estilos personalizados. Los estilos personalizados están limitados a la apariencia inicial de `<select>` y no pueden modificar `<option>` debido a las limitaciones del navegador.

{{< bootstrap/5-1/example >}}
<select class="form-select" aria-label="Default select example">
  <option selected>Abre este menú select</option>
  <option value="1">Uno</option>
  <option value="2">Dos</option>
  <option value="3">Tres</option>
</select>
{{< /bootstrap/5-1/example >}}

## Dimensionamiento

{{< content-ads/middle-banner-1 >}}

También puedes elegir entre selects pequeñas y grandes para que coincidan con nuestras entradas de texto de tamaño similar.

{{< bootstrap/5-1/example >}}
<select class="form-select form-select-lg mb-3" aria-label="Ejemplo de .form-select-lg">
  <option selected>Abre este menú select</option>
  <option value="1">Uno</option>
  <option value="2">Dos</option>
  <option value="3">Tres</option>
</select>

<select class="form-select form-select-sm" aria-label="Ejemplo de .form-select-sm">
  <option selected>Abre este menú select</option>
  <option value="1">Uno</option>
  <option value="2">Dos</option>
  <option value="3">Tres</option>
</select>
{{< /bootstrap/5-1/example >}}

El atributo `multiple` también es compatible:

{{< bootstrap/5-1/example >}}
<select class="form-select" multiple aria-label="Ejemplo de multiple select">
  <option selected>Abre este menú select</option>
  <option value="1">Uno</option>
  <option value="2">Dos</option>
  <option value="3">Tres</option>
</select>
{{< /bootstrap/5-1/example >}}

{{< content-ads/middle-banner-2 >}}

Al igual que el atributo `size`:

{{< bootstrap/5-1/example >}}
<select class="form-select" size="3" aria-label="Ejemplo de select de tamaño 3">
  <option selected>Abre este menú select</option>
  <option value="1">Uno</option>
  <option value="2">Dos</option>
  <option value="3">Tres</option>
</select>
{{< /bootstrap/5-1/example >}}

## Deshabilitado

Agrega el atributo booleano `disabled` en un select para darle una apariencia atenuada y eliminar los eventos de puntero.

{{< content-ads/middle-banner-3 >}}

{{< bootstrap/5-1/example >}}
<select class="form-select" aria-label="Ejemplo de select deshabilitado" disabled>
  <option selected>Abre este menú select</option>
  <option value="1">Uno</option>
  <option value="2">Dos</option>
  <option value="3">Tres</option>
</select>
{{< /bootstrap/5-1/example >}}

## Sass

### Variables

{{< bootstrap/5-1/scss-docs name="form-select-variables" file="scss/_variables.scss" >}}

{{< content-ads/bottom-banner >}}
