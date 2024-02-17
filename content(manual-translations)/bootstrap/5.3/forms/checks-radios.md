---
weight: 4
linkTitle: Checks y radios
title: Uso de Checks y radios en Bootstrap · Bootstrap en Español v5.3
description: Crea casillas de verificación y radios consistentes en todos los navegadores y dispositivos con nuestro componente de verificación completamente reescrito.
---

# Uso de Checks y radios en Bootstrap

Crea casillas de verificación y radios consistentes en todos los navegadores y dispositivos con nuestro componente de verificación completamente reescrito.

{{< content-ads/top-banner >}}

Las casillas de verificación y radios predeterminadas del navegador se reemplazan con la ayuda de `.form-check`, una serie de clases para ambos tipos de entrada que mejora el diseño y el comportamiento de tus elementos HTML, que proporcionan una mayor personalización y coherencia entre navegadores. Las casillas de verificación sirven para seleccionar una o varias opciones en una lista, mientras que las radios sirven para seleccionar una opción entre muchas.

Estructuralmente, nuestros `<input>`s y `<label>`s son elementos hermanos en lugar de un `<input>` dentro de un `<label>`. Esto es un poco más detallado ya que debes especificar los atributos `id` y `for` para relacionar los `<input>` y `<label>`. Usamos el selector de hermanos (`~`) para todos nuestros estados `<input>`, como `:checked` o `:disabled`. Cuando se combina con la clase `.form-check-label`, podemos diseñar fácilmente el texto de cada elemento según el estado del `<input>`.

Nuestras comprobaciones utilizan íconos Bootstrap personalizados para indicar estados marcados o indeterminados.

Checks {#checks}
-----------------

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/checks.html" >}}
```html {filename="HTML"}
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
            Casilla de verificación predeterminada
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="">
        <label class="form-check-label" for="flexCheckChecked">
            Casilla marcada
        </label>
    </div>
```
{{< /demo-iframe >}}

### Indeterminado {#indeterminate}

Las casillas de verificación pueden utilizar la pseudoclase `:indeterminate` cuando se configuran manualmente a través de JavaScript (no hay ningún atributo HTML disponible para especificarlo).

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/indeterminate.html" >}}
```html {filename="HTML"}
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
        <label class="form-check-label" for="flexCheckIndeterminate">
            Casilla de verificación indeterminada
        </label>
    </div>
```
{{< /demo-iframe >}}

### Deshabilitado {#disabled}

Agrega el atributo `disabled` y los `<label>` asociados reciben un estilo automático para que coincida con un color más claro para ayudar a indicar el estado de la entrada.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/disabled.html" >}}
```html {filename="HTML"}
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminateDisabled" disabled="">
        <label class="form-check-label" for="flexCheckIndeterminateDisabled">
            Casilla de verificación indeterminada deshabilitada
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled="">
        <label class="form-check-label" for="flexCheckDisabled">
            Casilla de verificación deshabilitada
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked=""
            disabled="">
        <label class="form-check-label" for="flexCheckCheckedDisabled">
            Casilla de verificación marcada deshabilitada
        </label>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-1 >}}

Radios {#radios}
-----------------

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/radios.html" >}}
```html {filename="HTML"}
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
            Radio predeterminada
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked="">
        <label class="form-check-label" for="flexRadioDefault2">
            Radio marcada por defecto
        </label>
    </div>
```
{{< /demo-iframe >}}

### Deshabilitado {#disabled-1}

Agrega el atributo `disabled` y los `<label>` asociados reciben un estilo automático para que coincida con un color más claro para ayudar a indicar el estado de la entrada.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/disabled-1.html" >}}
```html {filename="HTML"}
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled="">
        <label class="form-check-label" for="flexRadioDisabled">
            Radio deshabilitada
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled"
            checked="" disabled="">
        <label class="form-check-label" for="flexRadioCheckedDisabled">
            Radio marcada deshabilitada
        </label>
    </div>
```
{{< /demo-iframe >}}

Switches {#switches}
---------------------

Un interruptor (switch) tiene el marcado de una casilla de verificación personalizada pero usa la clase `.form-switch` para representar un interruptor de palanca. Considera utilizar `role="switch"` para transmitir con mayor precisión la naturaleza del control a las tecnologías de asistencia que respaldan esta función. En tecnologías de asistencia más antiguas, simplemente se anunciará como una casilla de verificación normal. Estos conmutadores también admiten el atributo `disabled`.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/switches.html" >}}
```html {filename="HTML"}
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Entrada de casilla de verificación de interruptor predeterminada</label>
    </div>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked="">
        <label class="form-check-label" for="flexSwitchCheckChecked">Entrada de casilla de verificación de interruptor marcada</label>
    </div>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled="">
        <label class="form-check-label" for="flexSwitchCheckDisabled">Entrada de casilla de verificación de interruptor deshabilitada</label>
    </div>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked="" disabled="">
        <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Entrada de casilla de verificación de interruptor marcada deshabilitada</label>
    </div>
```
{{< /demo-iframe >}}

Predeterminado (apilado) {#default-stacked}
--------------------------------------------

De forma predeterminada, cualquier número de casillas de verificación y radios que sean hermanos inmediatos se apilarán verticalmente y se espaciarán adecuadamente con `.form-check`.

{{< content-ads/middle-banner-2 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/default-stacked-1.html" >}}
```html {filename="HTML"}
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
            Casilla de verificación predeterminada
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled="">
        <label class="form-check-label" for="defaultCheck2">
            Casilla de verificación deshabilitada
        </label>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/default-stacked-2.html" >}}
```html {filename="HTML"}
    <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
            checked="">
        <label class="form-check-label" for="exampleRadios1">
            Radio predeterminada
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
        <label class="form-check-label" for="exampleRadios2">
            Segunda radio predeterminada
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"
            disabled="">
        <label class="form-check-label" for="exampleRadios3">
            Radio deshabilitada
        </label>
    </div>
```
{{< /demo-iframe >}}

Inline {#inline}
-----------------

Agrupa casillas de verificación o radios en la misma fila horizontal agregando `.form-check-inline` a cualquier `.form-check`.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/inline-1.html" >}}
```html {filename="HTML"}
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        <label class="form-check-label" for="inlineCheckbox1">1</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">2</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled="">
        <label class="form-check-label" for="inlineCheckbox3">3 (deshabilitado)</label>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/inline-2.html" >}}
```html {filename="HTML"}
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">1</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">2</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"
            disabled="">
        <label class="form-check-label" for="inlineRadio3">3 (deshabilitado)</label>
    </div>
```
{{< /demo-iframe >}}

Reverso {#reverse}
-------------------

Pon tus casillas de verificación, radios e interruptores en el lado opuesto con la clase modificadora `.form-check-reverse`.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/reverse.html" >}}
```html {filename="HTML"}
        <div class="form-check form-check-reverse">
            <input class="form-check-input" type="checkbox" value="" id="reverseCheck1">
            <label class="form-check-label" for="reverseCheck1">
                Casilla de verificación inversa
            </label>
        </div>
        <div class="form-check form-check-reverse">
            <input class="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled="">
            <label class="form-check-label" for="reverseCheck2">
                Casilla de verificación inversa deshabilitada
            </label>
        </div>

        <div class="form-check form-switch form-check-reverse">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse">
            <label class="form-check-label" for="flexSwitchCheckReverse">Entrada de casilla de verificación switch inverso</label>
        </div>
```
{{< /demo-iframe >}}

Sin etiquetas {#without-labels}
--------------------------------

{{< content-ads/middle-banner-3 >}}

Omite el ajuste `.form-check` para casillas de verificación y radios que no tienen texto de etiqueta. Recuerde proporcionar algún tipo de nombre accesible para las tecnologías de asistencia (por ejemplo, usando `aria-label`). Consulta la sección [accesibilidad general de formularios](/bootstrap/5.3/forms/overview/#accessibility) para obtener más detalles.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/without-labels.html" >}}
```html {filename="HTML"}
    <div>
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
    </div>

    <div>
        <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="...">
    </div>
```
{{< /demo-iframe >}}

Botones de alternancia {#toggle-buttons}
-----------------------------------------

Crea casillas de verificación y botones de opción similares a botones usando estilos `.btn` en lugar de `.form-check-label` en los elementos `<label>`. Estos botones de alternancia se pueden agrupar además en un [grupo de botones](/bootstrap/5.3/components/button-group) si es necesario.

### Botones de alternancia de casilla de verificación {#checkbox-toggle-buttons}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/toggle-buttons-1.html" >}}
```html {filename="HTML"}
    <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
    <label class="btn btn-primary" for="btn-check">Alternancia única</label>

    <input type="checkbox" class="btn-check" id="btn-check-2" checked="" autocomplete="off">
    <label class="btn btn-primary" for="btn-check-2">Marcado</label>

    <input type="checkbox" class="btn-check" id="btn-check-3" autocomplete="off" disabled="">
    <label class="btn btn-primary" for="btn-check-3">Deshabilitado</label>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/toggle-buttons-2.html" >}}
```html {filename="HTML"}
    <input type="checkbox" class="btn-check" id="btn-check-4" autocomplete="off">
    <label class="btn" for="btn-check-4">Alternancia única</label>

    <input type="checkbox" class="btn-check" id="btn-check-5" checked="" autocomplete="off">
    <label class="btn" for="btn-check-5">Marcado</label>

    <input type="checkbox" class="btn-check" id="btn-check-6" autocomplete="off" disabled="">
    <label class="btn" for="btn-check-6">Deshabilitado</label>
```
{{< /demo-iframe >}}

{{< callout type="info" emoji="" >}}
Visualmente, estos botones de alternancia de casillas de verificación son idénticos a los [botones de alternancia del complemento de botones](/bootstrap/5.3/components/buttons/#button-plugin). Sin embargo, las tecnologías de asistencia los transmiten de manera diferente: los lectores de pantalla anunciarán las casillas de verificación como "marcadas"/"no marcadas" (ya que, a pesar de su apariencia, siguen siendo fundamentalmente casillas de verificación), mientras que los botones de alternancia del complemento de botones serán anunciado como “botón”/“botón presionado”. La elección entre estos dos enfoques dependerá del tipo de alternancia que estés creando y de si la alternancia tendrá sentido para los usuarios cuando se anuncie como una casilla de verificación o como un botón real.
{{< /callout >}}

### Botones de alternancia de radio {#radio-toggle-buttons}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/radio-toggle-buttons-1.html" >}}
```html {filename="HTML"}
    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked="">
    <label class="btn btn-secondary" for="option1">Marcado</label>

    <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
    <label class="btn btn-secondary" for="option2">Radio</label>

    <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled="">
    <label class="btn btn-secondary" for="option3">Deshabilitado</label>

    <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
    <label class="btn btn-secondary" for="option4">Radio</label>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/radio-toggle-buttons-2.html" >}}
```html {filename="HTML"}
    <input type="radio" class="btn-check" name="options-base" id="option5" autocomplete="off" checked="">
    <label class="btn" for="option5">Marcado</label>

    <input type="radio" class="btn-check" name="options-base" id="option6" autocomplete="off">
    <label class="btn" for="option6">Radio</label>

    <input type="radio" class="btn-check" name="options-base" id="option7" autocomplete="off" disabled="">
    <label class="btn" for="option7">Deshabilitado</label>

    <input type="radio" class="btn-check" name="options-base" id="option8" autocomplete="off">
    <label class="btn" for="option8">Radio</label>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-4 >}}

### Estilos outlined {#outlined-styles}

Se admiten diferentes variantes de `.btn`, como los distintos estilos descritos.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/checks-radios/outlined-styles.html" >}}
```html {filename="HTML"}
    <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
    <label class="btn btn-outline-primary" for="btn-check-outlined">Alternancia única</label><br>

    <input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked="" autocomplete="off">
    <label class="btn btn-outline-secondary" for="btn-check-2-outlined">Marcado</label><br>

    <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off"
        checked="">
    <label class="btn btn-outline-success" for="success-outlined">Radio de éxito marcado.</label>

    <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off">
    <label class="btn btn-outline-danger" for="danger-outlined">Radio de peligro</label>
```
{{< /demo-iframe >}}

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

### Variables Sass generales relacionadas {#sass-variables}

Variables para checks:

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$form-check-input-width:                  1em;
$form-check-min-height:                   $font-size-base * $line-height-base;
$form-check-padding-start:                $form-check-input-width + .5em;
$form-check-margin-bottom:                .125rem;
$form-check-label-color:                  null;
$form-check-label-cursor:                 null;
$form-check-transition:                   null;

$form-check-input-active-filter:          brightness(90%);

$form-check-input-bg:                     $input-bg;
$form-check-input-border:                 var(--#{$prefix}border-width) solid var(--#{$prefix}border-color);
$form-check-input-border-radius:          .25em;
$form-check-radio-border-radius:          50%;
$form-check-input-focus-border:           $input-focus-border-color;
$form-check-input-focus-box-shadow:       $focus-ring-box-shadow;

$form-check-input-checked-color:          $component-active-color;
$form-check-input-checked-bg-color:       $component-active-bg;
$form-check-input-checked-border-color:   $form-check-input-checked-bg-color;
$form-check-input-checked-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-checked-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/></svg>");
$form-check-radio-checked-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#{$form-check-input-checked-color}'/></svg>");

$form-check-input-indeterminate-color:          $component-active-color;
$form-check-input-indeterminate-bg-color:       $component-active-bg;
$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color;
$form-check-input-indeterminate-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-indeterminate-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>");

$form-check-input-disabled-opacity:        .5;
$form-check-label-disabled-opacity:        $form-check-input-disabled-opacity;
$form-check-btn-check-disabled-opacity:    $btn-disabled-opacity;

$form-check-inline-margin-end:    1rem;
```

Variables para interruptores:

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

{{< content-ads/middle-banner-5 >}}

```scss {filename="scss/_variables.scss"}
$form-switch-color:               rgba($black, .25);
$form-switch-width:               2em;
$form-switch-padding-start:       $form-switch-width + .5em;
$form-switch-bg-image:            url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color}'/></svg>");
$form-switch-border-radius:       $form-switch-width;
$form-switch-transition:          background-position .15s ease-in-out;

$form-switch-focus-color:         $input-focus-border-color;
$form-switch-focus-bg-image:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-focus-color}'/></svg>");

$form-switch-checked-color:       $component-active-color;
$form-switch-checked-bg-image:    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-checked-color}'/></svg>");
$form-switch-checked-bg-position: right center;
```

{{< content-ads/bottom-banner >}}
