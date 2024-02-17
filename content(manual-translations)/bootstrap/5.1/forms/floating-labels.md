---
weight: 7
linkTitle: Etiquetas flotantes
title: Uso de Etiquetas flotantes · Bootstrap en Español v5.1
description: Crea etiquetas de formulario hermosamente simples que floten sobre tus campos de entrada.
type: docs
---

# Uso de Etiquetas flotantes en Bootstrap

Crea etiquetas de formulario hermosamente simples que floten sobre tus campos de entrada.

{{< content-ads/top-banner >}}

## Ejemplo

Envuelve un par de elementos `<input class="form-control">` y `<label>` en `.form-floating` para habilitar las etiquetas flotantes con los campos de formulario de texto de Bootstrap. Se requiere un `placeholder` en cada `<input>` ya que nuestro método de etiquetas flotantes solo utiliza CSS con el pseudoelemento `:placeholder-shown`. También ten en cuenta que `<input>` debe ir primero para que podamos utilizar un selector de hermanos (por ejemplo, `~`).

{{< bootstrap/5-1/example >}}
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Correo electrónico</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña">
  <label for="floatingPassword">Contraseña</label>
</div>
{{< /bootstrap/5-1/example >}}

Cuando ya hay un `value` definido, el `<label>` se ajustará automáticamente a su posición flotante.

{{< content-ads/middle-banner-1 >}}

{{< bootstrap/5-1/example >}}
<form class="form-floating">
  <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com">
  <label for="floatingInputValue">Input con value</label>
</form>
{{< /bootstrap/5-1/example >}}

Los estilos de validación de formularios también funcionan como se espera.

{{< bootstrap/5-1/example >}}
<form class="form-floating">
  <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com">
  <label for="floatingInputInvalid">Entrada inválida</label>
</form>
{{< /bootstrap/5-1/example >}}

## Textareas

{{< content-ads/middle-banner-2 >}}

Por defecto, `<textarea>`s con `.form-control` tendrán la misma altura que `<input>`s.

{{< bootstrap/5-1/example >}}
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comentarios</label>
</div>
{{< /bootstrap/5-1/example >}}

Para establecer una altura personalizada en tu `<textarea>`, no uses el atributo `rows`. En su lugar, establece un `height` explícita (ya sea en línea o a través de CSS personalizado).

{{< bootstrap/5-1/example >}}
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Comentarios</label>
</div>
{{< /bootstrap/5-1/example >}}

{{< content-ads/middle-banner-3 >}}

## Selects

Aparte de `.form-control`, las etiquetas flotantes solo están disponibles en `.form-select`s. Funcionan de la misma manera, pero a diferencia de los `<input>`s, siempre mostrarán su `<label>` en su estado flotante. **Las selecciones con `size` y `multiple` no son compatibles.**

{{< bootstrap/5-1/example >}}
<div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Abre este menú</option>
    <option value="1">Uno</option>
    <option value="2">Dos</option>
    <option value="3">Tres</option>
  </select>
  <label for="floatingSelect">Funciona con selects</label>
</div>
{{< /bootstrap/5-1/example >}}

## Layout

{{< content-ads/middle-banner-4 >}}

Cuando trabajes con el sistema de cuadrícula de Bootstrap, asegúrate de colocar elementos de formulario dentro de las clases de columna.

{{< bootstrap/5-1/example >}}
<div class="row g-2">
  <div class="col-md">
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com">
      <label for="floatingInputGrid">Correo electrónico</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid">
        <option selected>Abre este menú</option>
        <option value="1">Uno</option>
        <option value="2">Dos</option>
        <option value="3">Tres</option>
      </select>
      <label for="floatingSelectGrid">Funciona con selects</label>
    </div>
  </div>
</div>
{{< /bootstrap/5-1/example >}}

## Sass

### Variables

{{< bootstrap/5-1/scss-docs name="form-floating-variables" file="scss/_variables.scss" >}}

{{< content-ads/bottom-banner >}}
