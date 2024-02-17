---
weight: 7
linkTitle: Etiquetas flotantes
title: Uso de Etiquetas flotantes en Bootstrap · Bootstrap en Español v5.3
description: Crea etiquetas de formulario bellamente simples que floten sobre tus campos de entrada.
---

# Uso de Etiquetas flotantes en Bootstrap

Crea etiquetas de formulario bellamente simples que floten sobre tus campos de entrada.

{{< content-ads/top-banner >}}

Ejemplo {#example}
-------------------

Envuelve un par de elementos `<input class="form-control">` y `<label>` en `.form-floating` para habilitar etiquetas flotantes con los campos de formulario textuales de Bootstrap. Se requiere un `placeholder` en cada `<input>` ya que nuestro método de etiquetas flotantes solo CSS utiliza el pseudoelemento `:placeholder-shown`. También ten en cuenta que `<input>` debe ir primero para que podamos utilizar un selector de hermanos (por ejemplo, `~`).

{{< demo-iframe path="/demos/bootstrap/5.3/forms/floating-labels/example-1.html" >}}
```html {filename="HTML"}
    <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Dirección de correo electrónico</label>
    </div>
    <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Contraseña</label>
    </div>
```
{{< /demo-iframe >}}

Cuando ya hay un `value` definido, los `<label>`s se ajustarán automáticamente a su posición flotante.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/floating-labels/example-2.html" >}}
```html {filename="HTML"}
    <form class="form-floating">
        <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com">
        <label for="floatingInputValue">Entrada con valor</label>
    </form>
```
{{< /demo-iframe >}}

Los estilos de validación de formularios también funcionan como se esperaba.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/floating-labels/example-3.html" >}}
```html {filename="HTML"}
    <form class="form-floating">
        <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com">
        <label for="floatingInputInvalid">Entrada no válida</label>
    </form>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-1 >}}

Textareas {#textareas}
-----------------------

Por defecto, `<textarea>`s con `.form-control` tendrán la misma altura que `<input>`s.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/floating-labels/textareas-1.html" >}}
```html {filename="HTML"}
    <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Comentarios</label>
    </div>
```
{{< /demo-iframe >}}

Para establecer una altura personalizada en tu `<textarea>`, no uses el atributo `rows`. En su lugar, establece una `height` explícita (ya sea en línea o mediante CSS personalizado).

{{< demo-iframe path="/demos/bootstrap/5.3/forms/floating-labels/textareas-2.html" >}}
```html {filename="HTML"}
    <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Comentarios</label>
    </div>
```
{{< /demo-iframe >}}

Selects {#selects}
-------------------

Aparte de `.form-control`, las etiquetas flotantes solo están disponibles en `.form-select`. Funcionan de la misma manera, pero a diferencia de los `<input>`, siempre mostrarán el `<label>` en su estado flotante. **No se admiten selects con `size` y `multiple`.**

{{< content-ads/middle-banner-2 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/floating-labels/selects.html" >}}
```html {filename="HTML"}
    <div class="form-floating">
        <select class="form-select" id="floatingSelect" aria-label="Ejemplo de select de etiqueta flotante">
            <option selected="">Abre este menú de selección</option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
        </select>
        <label for="floatingSelect">Funciona con selects</label>
    </div>
```
{{< /demo-iframe >}}

Deshabilitado {#disabled}
--------------------------

Agrega el atributo booleano `disabled` en una entrada, un área de texto o un select para darle una apariencia atenuada, eliminar eventos de puntero y evitar el enfoque.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/floating-labels/disabled.html" >}}
```html {filename="HTML"}
    <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInputDisabled" placeholder="name@example.com" disabled="">
        <label for="floatingInputDisabled">Dirección de correo electrónico</label>
    </div>
    <div class="form-floating mb-3">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextareaDisabled" disabled=""></textarea>
        <label for="floatingTextareaDisabled">Comentarios</label>
    </div>
    <div class="form-floating mb-3">
        <textarea class="form-control" placeholder="Deja un comentario aquí" id="floatingTextarea2Disabled" style="height: 100px" disabled="">Área de texto deshabilitada con algo de texto dentro</textarea>
        <label for="floatingTextarea2Disabled">Comentarios</label>
    </div>
    <div class="form-floating">
        <select class="form-select" id="floatingSelectDisabled" aria-label="Ejemplo de select de etiqueta flotante deshabilitada" disabled="">
            <option selected="">Abre este menú de selección</option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
        </select>
        <label for="floatingSelectDisabled">Funciona con selects</label>
    </div>
```
{{< /demo-iframe >}}

Texto sin formato de solo lectura {#readonly-plaintext}
--------------------------------------------------------

Las etiquetas flotantes también admiten `.form-control-plaintext`, lo que puede ser útil para alternar entre un `<input>` editable a un valor de texto sin formato sin afectar el diseño de la página.

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-3 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/floating-labels/readonly-plaintext.html" >}}
```html {filename="HTML"}
    <div class="form-floating mb-3">
        <input type="email" readonly="" class="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="name@example.com">
        <label for="floatingEmptyPlaintextInput">Entrada vacía</label>
    </div>
    <div class="form-floating mb-3">
        <input type="email" readonly="" class="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="name@example.com">
        <label for="floatingPlaintextInput">Entrada con valor</label>
    </div>
```
{{< /demo-iframe >}}

Grupos de entradas {#input-groups}
-----------------------------------

Las etiquetas flotantes también admiten `.input-group`.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/floating-labels/input-groups-1.html" >}}
```html {filename="HTML"}
    <div class="input-group mb-3">
        <span class="input-group-text">@</span>
        <div class="form-floating">
            <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username">
            <label for="floatingInputGroup1">Nombre de usuario</label>
        </div>
    </div>
```
{{< /demo-iframe >}}

Cuando usas `.input-group` y `.form-floating` junto con la validación del formulario, el `-feedback` debe colocarse fuera de `.form-floating`, pero dentro de `.input-group`. Esto significa que los comentarios deberán mostrarse mediante javascript.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/floating-labels/input-groups-2.html" >}}
```html {filename="HTML"}
    <div class="input-group has-validation">
        <span class="input-group-text">@</span>
        <div class="form-floating is-invalid">
            <input type="text" class="form-control is-invalid" id="floatingInputGroup2" placeholder="Username" required="">
            <label for="floatingInputGroup2">Nombre de usuario</label>
        </div>
        <div class="invalid-feedback">
            Elige un nombre de usuario.
        </div>
    </div>
```
{{< /demo-iframe >}}

Layout {#layout}
-----------------

{{< content-ads/middle-banner-4 >}}

Cuando trabajes con el sistema de cuadrícula Bootstrap, asegúrate de colocar los elementos del formulario dentro de las clases de columnas.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/floating-labels/layout.html" >}}
```html {filename="HTML"}
    <div class="row g-2">
        <div class="col-md">
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com">
                <label for="floatingInputGrid">Dirección de correo electrónico</label>
            </div>
        </div>
        <div class="col-md">
            <div class="form-floating">
                <select class="form-select" id="floatingSelectGrid">
                    <option selected="">Abre este menú de selección</option>
                    <option value="1">Uno</option>
                    <option value="2">Dos</option>
                    <option value="3">Tres</option>
                </select>
                <label for="floatingSelectGrid">Funciona con selects</label>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$form-floating-height:                  add(3.5rem, $input-height-border);
$form-floating-line-height:             1.25;
$form-floating-padding-x:               $input-padding-x;
$form-floating-padding-y:               1rem;
$form-floating-input-padding-t:         1.625rem;
$form-floating-input-padding-b:         .625rem;
$form-floating-label-height:            1.5em;
$form-floating-label-opacity:           .65;
$form-floating-label-transform:         scale(.85) translateY(-.5rem) translateX(.15rem);
$form-floating-label-disabled-color:    $gray-600;
$form-floating-transition:              opacity .1s ease-in-out, transform .1s ease-in-out;
```

{{< content-ads/bottom-banner >}}
