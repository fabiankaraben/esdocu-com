---
weight: 2
linkTitle: Controles de formularios
title: Uso de Controles de formularios en Bootstrap · Bootstrap en Español v5.3
description: Actualiza los controles de formularios textuales como <input>s y <textarea>s con estilos, tamaños, estados de enfoque personalizados y más.
---

# Uso de Controles de formularios en Bootstrap

Otorga a controles de texto como `<input>`s y `<textarea>`s una actualización con estilos, tamaños, estados de enfoque personalizados y más.

{{< content-ads/top-banner >}}

Ejemplo {#example}
-------------------

Los controles de formulario están diseñados con una combinación de variables Sass y CSS, lo que les permite adaptarse a los modos de color y admitir cualquier método de personalización.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/example.html" >}}
```html {filename="HTML"}
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Dirección de correo electrónico</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Ejemplo de área de texto</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
```
{{< /demo-iframe >}}

Tamaños {#sizing}
------------------

Establece alturas usando clases como `.form-control-lg` y `.form-control-sm`.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/sizing.html" >}}
```html {filename="HTML"}
    <div class="bd-example m-0 border-0">
        <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg ejemplo">
        <input class="form-control" type="text" placeholder="Entrada predeterminada" aria-label="ejemplo de entrada predeterminada">
        <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label="ejemplo .form-control-sm">
    </div>
```
{{< /demo-iframe >}}

Texto del formulario {#form-text}
----------------------------------

Se puede crear texto de formulario a nivel de bloque o a nivel de línea usando `.form-text`.

{{< callout type="warning" emoji="" >}}
El texto del formulario debe asociarse explícitamente con el control de formulario con el que se relaciona utilizando el atributo `aria-describedby`. Esto garantizará que las tecnologías de asistencia, como los lectores de pantalla, anuncien el texto de este formulario cuando el usuario se concentre o entre en control.
{{< /callout >}}

{{< content-ads/middle-banner-1 >}}

El texto del formulario debajo de las entradas se puede diseñar con `.form-text`. Si se utilizará un elemento a nivel de bloque, se agrega un margen superior para facilitar el espaciado de las entradas anteriores.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/form-text-1.html" >}}
```html {filename="HTML"}
    <label for="inputPassword5" class="form-label">Contraseña</label>
    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
    <div id="passwordHelpBlock" class="form-text">
        Tu contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios,
        caracteres especiales ni emoji.
    </div>
```
{{< /demo-iframe >}}

El texto en línea puede usar cualquier elemento HTML en línea típico (ya sea `<span>`, `<small>`, o algo más) con nada más que la clase `.form-text`.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/form-text-2.html" >}}
```html {filename="HTML"}
    <div class="row g-3 align-items-center">
        <div class="col-auto">
            <label for="inputPassword6" class="col-form-label">Contraseña</label>
        </div>
        <div class="col-auto">
            <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
        </div>
        <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
                Debe tener entre 8 y 20 caracteres.
            </span>
        </div>
    </div>
```
{{< /demo-iframe >}}

Deshabilitado {#disabled}
--------------------------

Agrega el atributo booleano `disabled` en una entrada para darle una apariencia atenuada, eliminar eventos de puntero y evitar el enfoque.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/disabled.html" >}}
```html {filename="HTML"}
    <input class="form-control" type="text" placeholder="Entrada deshabilitada" aria-label="Ejemplo de entrada deshabilitada" disabled="">
    <input class="form-control" type="text" value="Disabled readonly input" aria-label="Ejemplo de entrada deshabilitada" disabled="" readonly="">
```
{{< /demo-iframe >}}

Solo lectura {#readonly}
-------------------------

Agrega el atributo booleano `readonly` en una entrada para evitar la modificación del valor de la entrada. Las entradas `readonly` aún se pueden enfocar y seleccionar, mientras que las entradas `disabled` no.

{{< content-ads/middle-banner-2 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/readonly.html" >}}
```html {filename="HTML"}
    <input class="form-control" type="text" value="Readonly input here..." aria-label="ejemplo de entrada de solo lectura" readonly="">
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Texto plano de solo lectura {#readonly-plain-text}
---------------------------------------------------

Si quieres que los elementos `<input readonly>` en tu formulario tengan el estilo de texto sin formato, reemplaza `.form-control` con `.form-control-plaintext` para eliminar el estilo predeterminado del campo del formulario y preservar el `margin` y el `padding` correctos.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/readonly-plain-text-1.html" >}}
```html {filename="HTML"}
    <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value="email@example.com">
        </div>
    </div>
    <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Contraseña</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword">
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/readonly-plain-text-2.html" >}}
```html {filename="HTML"}
    <form class="row g-3">
        <div class="col-auto">
            <label for="staticEmail2" class="visually-hidden">Email</label>
            <input type="text" readonly="" class="form-control-plaintext" id="staticEmail2" value="email@example.com">
        </div>
        <div class="col-auto">
            <label for="inputPassword2" class="visually-hidden">Contraseña</label>
            <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Confirmar identidad</button>
        </div>
    </form>
```
{{< /demo-iframe >}}

Entrada de archivo {#file-input}
---------------------------------

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/file-input.html" >}}
```html {filename="HTML"}
    <div class="mb-3">
        <label for="formFile" class="form-label">Ejemplo de entrada de archivo predeterminado</label>
        <input class="form-control" type="file" id="formFile">
    </div>
    <div class="mb-3">
        <label for="formFileMultiple" class="form-label">Ejemplo de entrada de varios archivos</label>
        <input class="form-control" type="file" id="formFileMultiple" multiple="">
    </div>
    <div class="mb-3">
        <label for="formFileDisabled" class="form-label">Ejemplo de entrada de archivo deshabilitado</label>
        <input class="form-control" type="file" id="formFileDisabled" disabled="">
    </div>
    <div class="mb-3">
        <label for="formFileSm" class="form-label">Ejemplo de entrada de archivo pequeño</label>
        <input class="form-control form-control-sm" id="formFileSm" type="file">
    </div>
    <div>
        <label for="formFileLg" class="form-label">Ejemplo de entrada de archivo grande</label>
        <input class="form-control form-control-lg" id="formFileLg" type="file">
    </div>
```
{{< /demo-iframe >}}

Color {#color}
---------------

{{< content-ads/middle-banner-3 >}}

Establece el `type="color"` y agrega `.form-control-color` al `<input>`. Usamos la clase modificadora para establecer `height` fijo y sobrescribir algunas inconsistencias entre navegadores.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/color.html" >}}
```html {filename="HTML"}
    <label for="exampleColorInput" class="form-label">Selector de color</label>
    <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
```
{{< /demo-iframe >}}

Listas de datos {#datalists}
-----------------------------

Las listas de datos te permiten crear un grupo de `<option>` a los que se puede acceder (y autocompletar) desde un `<input>`. Estos son similares a los elementos `<select>`, pero vienen con más limitaciones y diferencias en el estilo del menú. Si bien la mayoría de los navegadores y sistemas operativos incluyen cierto soporte para elementos `<datalist>`, su estilo es, en el mejor de los casos, inconsistente.

Obtén más información sobre [soporte para elementos de lista de datos](https://caniuse.com/datalist).

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/datalists.html" >}}
```html {filename="HTML"}
    <label for="exampleDataList" class="form-label">Ejemplo de lista de datos</label>
    <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
    <datalist id="datalistOptions">
        <option value="San Francisco">
        </option>
        <option value="New York">
        </option>
        <option value="Seattle">
        </option>
        <option value="Los Angeles">
        </option>
        <option value="Chicago">
        </option>
    </datalist>
```
{{< /demo-iframe >}}

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

### Variables Sass generales relacionadas {#sass-variables}

{{< content-ads/middle-banner-4 >}}

`$input-*` se comparten en la mayoría de nuestros controles de formulario (y no en los botones).

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$input-padding-y:                       $input-btn-padding-y;
$input-padding-x:                       $input-btn-padding-x;
$input-font-family:                     $input-btn-font-family;
$input-font-size:                       $input-btn-font-size;
$input-font-weight:                     $font-weight-base;
$input-line-height:                     $input-btn-line-height;

$input-padding-y-sm:                    $input-btn-padding-y-sm;
$input-padding-x-sm:                    $input-btn-padding-x-sm;
$input-font-size-sm:                    $input-btn-font-size-sm;

$input-padding-y-lg:                    $input-btn-padding-y-lg;
$input-padding-x-lg:                    $input-btn-padding-x-lg;
$input-font-size-lg:                    $input-btn-font-size-lg;

$input-bg:                              var(--#{$prefix}body-bg);
$input-disabled-color:                  null;
$input-disabled-bg:                     var(--#{$prefix}secondary-bg);
$input-disabled-border-color:           null;

$input-color:                           var(--#{$prefix}body-color);
$input-border-color:                    var(--#{$prefix}border-color);
$input-border-width:                    $input-btn-border-width;
$input-box-shadow:                      var(--#{$prefix}box-shadow-inset);

$input-border-radius:                   var(--#{$prefix}border-radius);
$input-border-radius-sm:                var(--#{$prefix}border-radius-sm);
$input-border-radius-lg:                var(--#{$prefix}border-radius-lg);

$input-focus-bg:                        $input-bg;
$input-focus-border-color:              tint-color($component-active-bg, 50%);
$input-focus-color:                     $input-color;
$input-focus-width:                     $input-btn-focus-width;
$input-focus-box-shadow:                $input-btn-focus-box-shadow;

$input-placeholder-color:               var(--#{$prefix}secondary-color);
$input-plaintext-color:                 var(--#{$prefix}body-color);

$input-height-border:                   calc(#{$input-border-width} * 2); // stylelint-disable-line function-disallowed-list

$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2);
$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y);
$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y * .5);

$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false));
$input-height-sm:                       add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false));
$input-height-lg:                       add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false));

$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out;

$form-color-width:                      3rem;
```

`$form-label-*` y `$form-text-*` son para nuestro `<label>`s y componente `.form-text`.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$form-label-margin-bottom:              .5rem;
$form-label-font-size:                  null;
$form-label-font-style:                 null;
$form-label-font-weight:                null;
$form-label-color:                      null;
```

{{< bootstrap/content-suggestion >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$form-text-margin-top:                  .25rem;
$form-text-font-size:                   $small-font-size;
$form-text-font-style:                  null;
$form-text-font-weight:                 null;
$form-text-color:                       var(--#{$prefix}secondary-color);
```

{{< content-ads/middle-banner-5 >}}

`$form-file-*` son para entrada de archivos.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$form-file-button-color:          $input-color;
$form-file-button-bg:             var(--#{$prefix}tertiary-bg);
$form-file-button-hover-bg:       var(--#{$prefix}secondary-bg);
```

{{< content-ads/bottom-banner >}}
