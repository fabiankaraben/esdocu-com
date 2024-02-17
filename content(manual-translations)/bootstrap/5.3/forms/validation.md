---
weight: 9
linkTitle: Validación
title: Validación de formularios en Bootstrap · Bootstrap en Español v5.3
description: Brinda comentarios valiosos y prácticos a tus usuarios con la validación de formularios HTML5, a través de comportamientos predeterminados del navegador o estilos personalizados y JavaScript.
next: /bootstrap/5.3/components/accordion
---

# Validación de formularios en Bootstrap

Brinda comentarios valiosos y prácticos a tus usuarios con la validación de formularios HTML5, a través de comportamientos predeterminados del navegador o estilos personalizados y JavaScript.

{{< content-ads/top-banner >}}

{{< callout type="warning" emoji="" >}}
Somos conscientes de que actualmente los estilos de validación personalizados y los tooltips del lado del cliente no son accesibles, ya que no están expuestos a tecnologías de asistencia. Mientras trabajamos en una solución, recomendamos utilizar la opción del lado del servidor o el método de validación del navegador predeterminado.
{{< /callout >}}

Cómo funciona {#how-it-works}
-------------------------------

Así es como funciona la validación de formularios con Bootstrap:

* La validación de formularios HTML se aplica a través de dos pseudoclases de CSS, `:invalid` y `:valid`. Se aplica a los elementos `<input>`, `<select>` y `<textarea>`.
* Bootstrap aplica los estilos `:invalid` y `:valid` a la clase padre `.was-validated`, generalmente se aplica al `<form>`. De lo contrario, cualquier campo obligatorio sin un valor aparecerá como no válido al cargar la página. De esta manera, puedes elegir cuándo activarlos (normalmente después de intentar enviar el formulario).
* Para restablecer la apariencia del formulario (por ejemplo, en el caso de envíos de formularios dinámicos usando Ajax), elimina la clase `.was-validated` del `<form>` nuevamente después del envío.
* Como alternativa, se pueden usar las clases `.is-invalid` y `.is-valid` en lugar de las pseudoclases para [validación del lado del servidor](#server-side). No requieren una clase padre `.was-validated`.
* Debido a limitaciones en el funcionamiento de CSS, no podemos (actualmente) aplicar estilos a un `<label>` que viene antes de un control de formulario en el DOM sin la ayuda de JavaScript personalizado.
* Todos los navegadores modernos admiten [API de validación de restricciones](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api), una serie de métodos JavaScript para validar controles de formulario.
* Los feedback pueden utilizar los [valores predeterminados del navegador](#browser-defaults) (diferentes para cada navegador y sin estilo mediante CSS) o nuestros estilos de feedback personalizados con HTML y CSS adicionales.
* Puedes proporcionar mensajes de validez personalizados con `setCustomValidity` en JavaScript.

Con eso en mente, considera las siguientes demostraciones de nuestros estilos de validación de formularios personalizados, clases opcionales del lado del servidor y valores predeterminados del navegador.

Estilos personalizados {#custom-styles}
----------------------------------------

Para mensajes de validación de formularios Bootstrap personalizados, necesitarás agregar el atributo booleano `novalidate` a tu `<form>`. Esto deshabilita los tooltips de comentarios predeterminados del navegador, pero aún proporciona acceso a las API de validación de formularios en JavaScript. Intenta enviar el formulario a continuación; nuestro JavaScript interceptará el botón de enviar y te transmitirá sus comentarios. Al intentar enviar, verás los estilos `:invalid` y `:valid` aplicados a tus controles de formulario.

Los estilos de comentarios personalizados aplican colores, bordes, estilos de enfoque e íconos de fondo personalizados para comunicar mejor los comentarios. Los iconos de fondo para `<select>`s solo están disponibles con `.form-select`, y no con `.form-control`.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/validation/custom-styles.html" >}}
```html {filename="HTML"}
    <form class="row g-3 needs-validation" novalidate="">
        <div class="col-md-4">
            <label for="validationCustom01" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="validationCustom01" value="Mark" required="">
            <div class="valid-feedback">
                ¡Se ve bien!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="validationCustom02" value="Otto" required="">
            <div class="valid-feedback">
                ¡Se ve bien!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">Nombre de usuario</label>
            <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" class="form-control" id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend" required="">
                <div class="invalid-feedback">
                    Elige un nombre de usuario.
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationCustom03" class="form-label">Ciudad</label>
            <input type="text" class="form-control" id="validationCustom03" required="">
            <div class="invalid-feedback">
                Proporciona una ciudad válida.
            </div>
        </div>
        <div class="col-md-3">
            <label for="validationCustom04" class="form-label">Estado</label>
            <select class="form-select" id="validationCustom04" required="">
                <option selected="" disabled="" value="">Elige...</option>
                <option>...</option>
            </select>
            <div class="invalid-feedback">
                Selecciona un estado válido.
            </div>
        </div>
        <div class="col-md-3">
            <label for="validationCustom05" class="form-label">Zip</label>
            <input type="text" class="form-control" id="validationCustom05" required="">
            <div class="invalid-feedback">
                Proporciona un código postal válido.
            </div>
        </div>
        <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required="">
                <label class="form-check-label" for="invalidCheck">
                    Acepta los términos y condiciones
                </label>
                <div class="invalid-feedback">
                    Debes aceptar antes de enviar.
                </div>
            </div>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="submit">Enviar formulario</button>
        </div>
    </form>
```
{{< /demo-iframe >}}

```javascript {filename="JavaScript"}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
    })
})()
```

Valores predeterminados del navegador {#browser-defaults}
----------------------------------------------------------

{{< content-ads/middle-banner-1 >}}

¿No te interesan los mensajes de validación personalizados o escribir JavaScript para cambiar el comportamiento de los formularios? Todo bien, puedes usar los valores predeterminados del navegador. Intenta enviar el formulario a continuación. Dependiendo de gu navegador y sistema operativo, verás un estilo de comentarios ligeramente diferente.

Si bien estos estilos de comentarios no se pueden diseñar con CSS, aún puedes personalizar el texto de los comentarios a través de JavaScript.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/validation/browser-defaults.html" >}}
```html {filename="HTML"}
    <form class="row g-3">
        <div class="col-md-4">
            <label for="validationDefault01" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="validationDefault01" value="Mark" required="">
        </div>
        <div class="col-md-4">
            <label for="validationDefault02" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="validationDefault02" value="Otto" required="">
        </div>
        <div class="col-md-4">
            <label for="validationDefaultUsername" class="form-label">Nombre de usuario</label>
            <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                <input type="text" class="form-control" id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2" required="">
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationDefault03" class="form-label">Ciudad</label>
            <input type="text" class="form-control" id="validationDefault03" required="">
        </div>
        <div class="col-md-3">
            <label for="validationDefault04" class="form-label">Estado</label>
            <select class="form-select" id="validationDefault04" required="">
                <option selected="" disabled="" value="">Elige...</option>
                <option>...</option>
            </select>
        </div>
        <div class="col-md-3">
            <label for="validationDefault05" class="form-label">Zip</label>
            <input type="text" class="form-control" id="validationDefault05" required="">
        </div>
        <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required="">
                <label class="form-check-label" for="invalidCheck2">
                    Acepta los términos y condiciones
                </label>
            </div>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="submit">Enviar formulario</button>
        </div>
    </form>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Del lado del servidor {#server-side}
-------------------------------------

Recomendamos usar la validación del lado del cliente, pero en caso de que requieras validación del lado del servidor, puedes indicar campos de formulario válidos y no válidos con `.is-invalid` y `.is-valid`. Ten en cuenta que `.invalid-feedback` también es compatible con estas clases.

Para campos no válidos, asegúrate de que el mensaje de error o comentario no válido esté asociado con el campo de formulario relevante usando `aria-describedby` (ten en cuenta que este atributo permite más de un `id` al que se hará referencia, en caso de que el campo ya apunte a texto de formulario adicional).

Para solucionar [problemas con el radio del borde](https://github.com/twbs/bootstrap/issues/25110), los grupos de entradas requieren uns clase `.has-validation`.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/validation/server-side.html" >}}
```html {filename="HTML"}
    <form class="row g-3">
        <div class="col-md-4">
            <label for="validationServer01" class="form-label">Nombre</label>
            <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required="">
            <div class="valid-feedback">
                ¡Se ve bien!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationServer02" class="form-label">Apellido</label>
            <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required="">
            <div class="valid-feedback">
                ¡Se ve bien!
            </div>
        </div>
        <div class="col-md-4">
            <label for="validationServerUsername" class="form-label">Nombre de usuario</label>
            <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend3">@</span>
                <input type="text" class="form-control is-invalid" id="validationServerUsername"
                    aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required="">
                <div id="validationServerUsernameFeedback" class="invalid-feedback">
                    Elige un nombre de usuario.
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationServer03" class="form-label">Ciudad</label>
            <input type="text" class="form-control is-invalid" id="validationServer03"
                aria-describedby="validationServer03Feedback" required="">
            <div id="validationServer03Feedback" class="invalid-feedback">
                Proporciona una ciudad válida.
            </div>
        </div>
        <div class="col-md-3">
            <label for="validationServer04" class="form-label">Estado</label>
            <select class="form-select is-invalid" id="validationServer04"
                aria-describedby="validationServer04Feedback" required="">
                <option selected="" disabled="" value="">Elige...</option>
                <option>...</option>
            </select>
            <div id="validationServer04Feedback" class="invalid-feedback">
                Selecciona un estado válido.
            </div>
        </div>
        <div class="col-md-3">
            <label for="validationServer05" class="form-label">Zip</label>
            <input type="text" class="form-control is-invalid" id="validationServer05"
                aria-describedby="validationServer05Feedback" required="">
            <div id="validationServer05Feedback" class="invalid-feedback">
                Proporciona un código postal válido.
            </div>
        </div>
        <div class="col-12">
            <div class="form-check">
                <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3"
                    aria-describedby="invalidCheck3Feedback" required="">
                <label class="form-check-label" for="invalidCheck3">
                    Acepta los términos y condiciones
                </label>
                <div id="invalidCheck3Feedback" class="invalid-feedback">
                    Debes aceptar antes de enviar.
                </div>
            </div>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="submit">Enviar formulario</button>
        </div>
    </form>
```
{{< /demo-iframe >}}

Elementos soportados {#supported-elements}
-------------------------------------------

Los estilos de validación están disponibles para los siguientes controles y componentes de formulario:

{{< content-ads/middle-banner-2 >}}

* `<input>`s y `<textarea>`s con `.form-control` ( incluyendo hasta un `.form-control` en grupos de entrada)
* `<select>`s con `.form-select`
* `.form-check`s

{{< demo-iframe path="/demos/bootstrap/5.3/forms/validation/supported-elements.html" >}}
```html {filename="HTML"}
    <form class="was-validated">
        <div class="mb-3">
            <label for="validationTextarea" class="form-label">Textarea</label>
            <textarea class="form-control" id="validationTextarea" placeholder="Ejemplo de textarea required"
                required=""></textarea>
            <div class="invalid-feedback">
                Ingresa un mensaje en el área de texto.
            </div>
        </div>

        <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="validationFormCheck1" required="">
            <label class="form-check-label" for="validationFormCheck1">Marca esta casilla de verificación</label>
            <div class="invalid-feedback">Ejemplo de texto de comentario no válido</div>
        </div>

        <div class="form-check">
            <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required="">
            <label class="form-check-label" for="validationFormCheck2">Alternar este radio</label>
        </div>
        <div class="form-check mb-3">
            <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required="">
            <label class="form-check-label" for="validationFormCheck3">O alternar este otro radio</label>
            <div class="invalid-feedback">Más ejemplos de texto de comentarios no válidos</div>
        </div>

        <div class="mb-3">
            <select class="form-select" required="" aria-label="Ejemplo de select">
                <option value="">Abre este menú de selección</option>
                <option value="1">Uno</option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
            </select>
            <div class="invalid-feedback">Ejemplo de comentario de selección no válido</div>
        </div>

        <div class="mb-3">
            <input type="file" class="form-control" aria-label="file example" required="">
            <div class="invalid-feedback">Ejemplo de comentario sobre un archivo de formulario no válido</div>
        </div>

        <div class="mb-3">
            <button class="btn btn-primary" type="submit" disabled="">Enviar formulario</button>
        </div>
    </form>
```
{{< /demo-iframe >}}

Tooltips {#tooltips}
---------------------

Si el diseño de tu formulario lo permite, puedes intercambiar las clases `.{valid|invalid}-feedback` por `.{valid|invalid}-tooltip` para mostrar comentarios de validación en un tooltips con estilo. Asegúrate de tener un elemento padre con `position: relative` para el posicionamiento del tooltips. En el siguiente ejemplo, nuestras clases de columnas ya tienen esto, pero es posible que tu proyecto requiera una configuración alternativa.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/validation/tooltips.html" >}}
```html {filename="HTML"}
    <form class="row g-3 needs-validation" novalidate="">
        <div class="col-md-4 position-relative">
            <label for="validationTooltip01" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="validationTooltip01" value="Mark" required="">
            <div class="valid-tooltip">
                ¡Se ve bien!
            </div>
        </div>
        <div class="col-md-4 position-relative">
            <label for="validationTooltip02" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="validationTooltip02" value="Otto" required="">
            <div class="valid-tooltip">
                ¡Se ve bien!
            </div>
        </div>
        <div class="col-md-4 position-relative">
            <label for="validationTooltipUsername" class="form-label">Nombre de usuario</label>
            <div class="input-group has-validation">
                <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                <input type="text" class="form-control" id="validationTooltipUsername"
                    aria-describedby="validationTooltipUsernamePrepend" required="">
                <div class="invalid-tooltip">
                    Elige un nombre de usuario único y válido.
                </div>
            </div>
        </div>
        <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">Ciudad</label>
            <input type="text" class="form-control" id="validationTooltip03" required="">
            <div class="invalid-tooltip">
                Proporciona una ciudad válida.
            </div>
        </div>
        <div class="col-md-3 position-relative">
            <label for="validationTooltip04" class="form-label">Estado</label>
            <select class="form-select" id="validationTooltip04" required="">
                <option selected="" disabled="" value="">Elige...</option>
                <option>...</option>
            </select>
            <div class="invalid-tooltip">
                Selecciona un estado válido.
            </div>
        </div>
        <div class="col-md-3 position-relative">
            <label for="validationTooltip05" class="form-label">Zip</label>
            <input type="text" class="form-control" id="validationTooltip05" required="">
            <div class="invalid-tooltip">
                Proporciona un código postal válido.
            </div>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="submit">Enviar formulario</button>
        </div>
    </form>
```
{{< /demo-iframe >}}

Personalización del CSS {#css}
-----------

### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.3.0</span>

Como parte del enfoque de variables CSS en evolución de Bootstrap, los formularios ahora usan variables CSS locales para la validación y mejorar la personalización en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_root.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_root.scss)

{{< content-ads/middle-banner-3 >}}

```scss {filename="scss/_root.scss"}
--#{$prefix}form-valid-color: #{$form-valid-color};
--#{$prefix}form-valid-border-color: #{$form-valid-border-color};
--#{$prefix}form-invalid-color: #{$form-invalid-color};
--#{$prefix}form-invalid-border-color: #{$form-invalid-border-color};
```

Estas variables también son adaptables al modo de color, lo que significa que cambian de color mientras están en modo oscuro.

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$form-feedback-margin-top:          $form-text-margin-top;
$form-feedback-font-size:           $form-text-font-size;
$form-feedback-font-style:          $form-text-font-style;
$form-feedback-valid-color:         $success;
$form-feedback-invalid-color:       $danger;

$form-feedback-icon-valid-color:    $form-feedback-valid-color;
$form-feedback-icon-valid:          url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>");
$form-feedback-icon-invalid-color:  $form-feedback-invalid-color;
$form-feedback-icon-invalid:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>");
```

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$form-valid-color:                  $form-feedback-valid-color;
$form-valid-border-color:           $form-feedback-valid-color;
$form-invalid-color:                $form-feedback-invalid-color;
$form-invalid-border-color:         $form-feedback-invalid-color;
```

[scss/_variables-dark.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables-dark.scss)

```scss {filename="scss/_variables-dark.scss"}
$form-valid-color-dark:             $green-300;
$form-valid-border-color-dark:      $green-300;
$form-invalid-color-dark:           $red-300;
$form-invalid-border-color-dark:    $red-300;
```

### Sass mixins {#sass-mixins}

Se combinan dos mixins, a través de nuestro [bucle](#sass-loops), para generar nuestros estilos de comentarios de validación de formulario.

{{< content-ads/middle-banner-4 >}}

[scss/mixins/_forms.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/mixins/_forms.scss)

```scss {filename="scss/mixins/_forms.scss"}
@mixin form-validation-state-selector($state) {
    @if ($state == "valid" or $state == "invalid") {
    .was-validated #{if(&, "&", "")}:#{$state},
    #{if(&, "&", "")}.is-#{$state} {
        @content;
    }
    } @else {
    #{if(&, "&", "")}.is-#{$state} {
        @content;
    }
    }
}

@mixin form-validation-state(
    $state,
    $color,
    $icon,
    $tooltip-color: color-contrast($color),
    $tooltip-bg-color: rgba($color, $form-feedback-tooltip-opacity),
    $focus-box-shadow: 0 0 $input-btn-focus-blur $input-focus-width rgba($color, $input-btn-focus-color-opacity),
    $border-color: $color
) {
    .#{$state}-feedback {
    display: none;
    width: 100%;
    margin-top: $form-feedback-margin-top;
    @include font-size($form-feedback-font-size);
    font-style: $form-feedback-font-style;
    color: $color;
    }

    .#{$state}-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%; // Contain to parent when possible
    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;
    margin-top: .1rem;
    @include font-size($form-feedback-tooltip-font-size);
    line-height: $form-feedback-tooltip-line-height;
    color: $tooltip-color;
    background-color: $tooltip-bg-color;
    @include border-radius($form-feedback-tooltip-border-radius);
    }

    @include form-validation-state-selector($state) {
    ~ .#{$state}-feedback,
    ~ .#{$state}-tooltip {
        display: block;
    }
    }

    .form-control {
    @include form-validation-state-selector($state) {
        border-color: $border-color;

        @if $enable-validation-icons {
        padding-right: $input-height-inner;
        background-image: escape-svg($icon);
        background-repeat: no-repeat;
        background-position: right $input-height-inner-quarter center;
        background-size: $input-height-inner-half $input-height-inner-half;
        }

        &:focus {
        border-color: $border-color;
        box-shadow: $focus-box-shadow;
        }
    }
    }

    // stylelint-disable-next-line selector-no-qualifying-type
    textarea.form-control {
    @include form-validation-state-selector($state) {
        @if $enable-validation-icons {
        padding-right: $input-height-inner;
        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;
        }
    }
    }

    .form-select {
    @include form-validation-state-selector($state) {
        border-color: $border-color;

        @if $enable-validation-icons {
        &:not([multiple]):not([size]),
        &:not([multiple])[size="1"] {
            --#{$prefix}form-select-bg-icon: #{escape-svg($icon)};
            padding-right: $form-select-feedback-icon-padding-end;
            background-position: $form-select-bg-position, $form-select-feedback-icon-position;
            background-size: $form-select-bg-size, $form-select-feedback-icon-size;
        }
        }

        &:focus {
        border-color: $border-color;
        box-shadow: $focus-box-shadow;
        }
    }
    }

    .form-control-color {
    @include form-validation-state-selector($state) {
        @if $enable-validation-icons {
        width: add($form-color-width, $input-height-inner);
        }
    }
    }

    .form-check-input {
    @include form-validation-state-selector($state) {
        border-color: $border-color;

        &:checked {
        background-color: $color;
        }

        &:focus {
        box-shadow: $focus-box-shadow;
        }

        ~ .form-check-label {
        color: $color;
        }
    }
    }
    .form-check-inline .form-check-input {
    ~ .#{$state}-feedback {
        margin-left: .5em;
    }
    }

    .input-group {
    > .form-control:not(:focus),
    > .form-select:not(:focus),
    > .form-floating:not(:focus-within) {
        @include form-validation-state-selector($state) {
        @if $state == "valid" {
            z-index: 3;
        } @else if $state == "invalid" {
            z-index: 4;
        }
        }
    }
    }
}
```

### Mapas de Sass {#sass-maps}

Este es el mapa Sass de validación de `_variables.scss`. Sobrescribe o extiende esto para generar estados diferentes o adicionales.

{{< bootstrap/content-suggestion >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$form-validation-states: (
    "valid": (
    "color": var(--#{$prefix}form-valid-color),
    "icon": $form-feedback-icon-valid,
    "tooltip-color": #fff,
    "tooltip-bg-color": var(--#{$prefix}success),
    "focus-box-shadow": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}success-rgb), $input-btn-focus-color-opacity),
    "border-color": var(--#{$prefix}form-valid-border-color),
    ),
    "invalid": (
    "color": var(--#{$prefix}form-invalid-color),
    "icon": $form-feedback-icon-invalid,
    "tooltip-color": #fff,
    "tooltip-bg-color": var(--#{$prefix}danger),
    "focus-box-shadow": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}danger-rgb), $input-btn-focus-color-opacity),
    "border-color": var(--#{$prefix}form-invalid-border-color),
    )
);
```

Los mapas de `$form-validation-states` pueden contener tres parámetros opcionales para sobrescribir tooltips y estilos de enfoque.

### Sass loops {#sass-loops}

Se utiliza para iterar sobre los valores del mapa `$form-validation-states` para generar nuestros estilos de validación. Cualquier modificación al mapa Sass anterior se reflejará en tu CSS compilado a través de este bucle.

[scss/forms/_validation.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/forms/_validation.scss)

```scss {filename="scss/forms/_validation.scss"}
@each $state, $data in $form-validation-states {
    @include form-validation-state($state, $data...);
}
```

### Personalización {#customizing}

Los estados de validación se pueden personalizar a través de Sass con el mapa `$form-validation-states`. Ubicado en nuestro archivo `_variables.scss`, este mapa Sass es cómo generamos los estados de validación predeterminados `valid`/`invalid`. Se incluye un mapa anidado para personalizar el color, el icono, el color del tooltips y la sombra de enfoque de cada estado. Si bien los navegadores no admiten otros estados, aquellos que usan estilos personalizados pueden agregar fácilmente comentarios a formularios más complejos.

{{< content-ads/bottom-banner >}}
