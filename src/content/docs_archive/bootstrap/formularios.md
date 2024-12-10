---
weight: 10
linkTitle: Formularios con Bootstrap
title: Uso de Formularios en Bootstrap · Bootstrap en Español v5.3
description: Ejemplos y pautas de uso para estilos de control de formularios, opciones de diseño y componentes personalizados para crear una amplia variedad de formularios.
next: /bootstrap/componentes/acordion
---

# Uso de Formularios en Bootstrap

Ejemplos y pautas de uso para estilos de control de formularios, opciones de diseño y componentes personalizados para crear una amplia variedad de formularios.

<TopBanner />

| <span class="mx-16">Tópico</span>                    | Descripción                                                                                                                       |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [**Control de formularios**](/bootstrap/formularios) | Diseñar entradas de texto y áreas de texto con soporte para múltiples estados.                                                    |
| [**Select**](/bootstrap/formularios)                 | Mejora los elementos de selección predeterminados del navegador con una apariencia inicial personalizada.                         |
| [**Checks y radios**](/bootstrap/formularios)        | Usa nuestros botones de opción y casillas de verificación personalizados en los formularios para seleccionar opciones de entrada. |
| [**Rango**](/bootstrap/formularios)                  | Reemplaza las entradas del rango predeterminado del navegador con nuestra versión personalizada.                                  |
| [**Grupo de entrada**](/bootstrap/formularios)       | Adjunta etiquetas y botones a tus entradas para aumentar el valor semántico.                                                      |
| [**Etiquetas flotantes**](/bootstrap/formularios)    | Crea etiquetas de formulario bellamente simples que floten sobre tus campos de entrada.                                           |
| [**Layout**](/bootstrap/formularios)                 | Crea diseños en línea, horizontales o complejos basados en cuadrículas con tus formularios.                                       |
| [**Validación**](/bootstrap/formularios)             | Valida tus formularios con comportamientos y estilos de validación personalizados o nativos.                                      |

### Descripción general {#overview}

Los controles de formulario de Bootstrap amplían [nuestros estilos de formulario reiniciados (Reboot)](/bootstrap/reboot/#forms) con clases. Utiliza estas clases para optar por sus pantallas personalizadas y obtener una representación más consistente en todos los navegadores y dispositivos.

Asegúrate de usar un atributo `type` apropiado en todas las entradas (por ejemplo, `email` para la dirección de correo electrónico o `number` para obtener información numérica) para aprovechar los controles de entrada más nuevos, como verificación de correo electrónico, selección de números y más.

Aquí tienes un ejemplo rápido para demostrar los estilos de formulario de Bootstrap. Continúa leyendo para obtener documentación sobre las clases requeridas, el diseño de formularios y más.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/overview/overview.html" >}}
```html {filename="HTML"}
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Dirección de correo electrónico</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Échame un vistazo</label>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
```
{{< /demo-iframe >}}

### Formularios deshabilitados {#disabled-forms}

Agrega el atributo booleano `disabled` en una entrada para evitar interacciones del usuario y hacer que parezca más ligera.

```html {filename="HTML"}
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
```

Agrega el atributo `disabled` a un `<fieldset>` para deshabilitar todos los controles que contiene. Los navegadores tratan todos los controles de formulario nativos (elementos`<input>`, `<select>` y `<button>`) dentro de un `<fieldset disabled>` como deshabilitado, lo que impide la interacción con el teclado y el mouse.

Sin embargo, si tu formulario también incluye elementos personalizados tipo botón como `<a class="btn btn-*">...</a>`, a estos solo se les dará un estilo de `pointer-events: none`, lo que significa que aún se pueden enfocar y operar usando el teclado. En este caso, debes modificar manualmente estos controles agregando `tabindex="-1"` para evitar que reciban el foco y `aria-disabled="disabled"` para señalar su estado a las tecnologías de asistencia.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/overview/disabled-forms.html" >}}
```html {filename="HTML"}
    <form>
        <fieldset disabled="">
            <legend>Ejemplo de conjunto de campos deshabilitado</legend>
            <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Entrada deshabilitada</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
            </div>
            <div class="mb-3">
                <label for="disabledSelect" class="form-label">Menú de selección deshabilitado</label>
                <select id="disabledSelect" class="form-select">
                    <option>Select deshabilitado</option>
                </select>
            </div>
            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled="">
                    <label class="form-check-label" for="disabledFieldsetCheck">
                        No puedo marcar esto
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </fieldset>
    </form>
```
{{< /demo-iframe >}}

### Accesibilidad {#accessibility}

Asegúrate de que todos los controles de formulario tengan un nombre accesible apropiado para que su propósito pueda transmitirse a los usuarios de tecnologías de asistencia. La forma más sencilla de lograr esto es utilizar un elemento `<label>` o, en el caso de los botones, incluir texto suficientemente descriptivo como parte del `<button>...</button>` contenido.

Para situaciones en las que no es posible incluir un `<label>` visible o contenido de texto apropiado, existen formas alternativas de proporcionar un nombre accesible, como como:

<MiddleBannerOne />

* `<label>` elementos ocultos usando `.visually-hidden` (clase)
* Apuntar a un elemento existente que puede actuar como etiqueta usando `aria-labelledby`
* Proporcionar un `title` (atributo)
* Establecer explícitamente el nombre accesible en un elemento usando `aria-label`

Si ninguno de estos está presente, las tecnologías de asistencia pueden recurrir al uso del atributo `placeholder` como alternativa para el nombre accesible en `<input>` y `<textarea>`. Los ejemplos de esta sección proporcionan algunos enfoques sugeridos para casos específicos.

Al usar contenido visualmente oculto (`.visually-hidden`, `aria-label` e incluso contenido `placeholder`, que desaparece una vez que un campo de formulario tiene contenido) beneficiará a los usuarios de tecnología de asistencia, la falta de texto de etiqueta visible aún puede ser problemático para ciertos usuarios. Por lo general, el mejor enfoque es algún tipo de etiqueta visible, tanto por motivos de accesibilidad como de usabilidad.

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

Muchas variables de formulario se configuran a nivel general para ser reutilizadas y ampliadas por componentes de formulario individuales. Los verás con mayor frecuencia como variables `$input-btn-*` y `$input-*`.

#### Variables Sass generales relacionadas {#sass-variables}

`$input-btn-*` son variables globales compartidas entre nuestros [botones](/bootstrap/componentes/botones) y nuestros componentes de formulario. Los encontrará frecuentemente reasignados como valores a otras variables específicas de componentes.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$input-btn-padding-y:         .375rem;
$input-btn-padding-x:         .75rem;
$input-btn-font-family:       null;
$input-btn-font-size:         $font-size-base;
$input-btn-line-height:       $line-height-base;

$input-btn-focus-width:         $focus-ring-width;
$input-btn-focus-color-opacity: $focus-ring-opacity;
$input-btn-focus-color:         $focus-ring-color;
$input-btn-focus-blur:          $focus-ring-blur;
$input-btn-focus-box-shadow:    $focus-ring-box-shadow;

$input-btn-padding-y-sm:      .25rem;
$input-btn-padding-x-sm:      .5rem;
$input-btn-font-size-sm:      $font-size-sm;

$input-btn-padding-y-lg:      .5rem;
$input-btn-padding-x-lg:      1rem;
$input-btn-font-size-lg:      $font-size-lg;

$input-btn-border-width:      var(--#{$prefix}border-width);
```

## Uso de Controles de formularios en Bootstrap

Otorga a controles de texto como `<input>`s y `<textarea>`s una actualización con estilos, tamaños, estados de enfoque personalizados y más.

### Ejemplo {#example}

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

<MiddleBannerTwo />

### Tamaños {#sizing}

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

### Texto del formulario {#form-text}

Se puede crear texto de formulario a nivel de bloque o a nivel de línea usando `.form-text`.

{{< callout type="warning" emoji="" >}}
El texto del formulario debe asociarse explícitamente con el control de formulario con el que se relaciona utilizando el atributo `aria-describedby`. Esto garantizará que las tecnologías de asistencia, como los lectores de pantalla, anuncien el texto de este formulario cuando el usuario se concentre o entre en control.
{{< /callout >}}

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

### Deshabilitado {#disabled}

Agrega el atributo booleano `disabled` en una entrada para darle una apariencia atenuada, eliminar eventos de puntero y evitar el enfoque.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/disabled.html" >}}
```html {filename="HTML"}
    <input class="form-control" type="text" placeholder="Entrada deshabilitada" aria-label="Ejemplo de entrada deshabilitada" disabled="">
    <input class="form-control" type="text" value="Disabled readonly input" aria-label="Ejemplo de entrada deshabilitada" disabled="" readonly="">
```
{{< /demo-iframe >}}

### Solo lectura {#readonly}

Agrega el atributo booleano `readonly` en una entrada para evitar la modificación del valor de la entrada. Las entradas `readonly` aún se pueden enfocar y seleccionar, mientras que las entradas `disabled` no.

<MiddleBannerThree />

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/readonly.html" >}}
```html {filename="HTML"}
    <input class="form-control" type="text" value="Readonly input here..." aria-label="ejemplo de entrada de solo lectura" readonly="">
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

### Texto plano de solo lectura {#readonly-plain-text}

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

### Entrada de archivo {#file-input}

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

### Color {#color}

Establece el `type="color"` y agrega `.form-control-color` al `<input>`. Usamos la clase modificadora para establecer `height` fijo y sobrescribir algunas inconsistencias entre navegadores.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/form-control/color.html" >}}
```html {filename="HTML"}
    <label for="exampleColorInput" class="form-label">Selector de color</label>
    <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
```
{{< /demo-iframe >}}

### Listas de datos {#datalists}

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

<MiddleBannerFour />

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

#### Variables Sass generales relacionadas {#sass-variables}

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

`$form-file-*` son para entrada de archivos.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$form-file-button-color:          $input-color;
$form-file-button-bg:             var(--#{$prefix}tertiary-bg);
$form-file-button-hover-bg:       var(--#{$prefix}secondary-bg);
```

<MiddleBannerFive />

## Uso de elementos Select en Bootstrap

Personaliza los `<select>`s nativos con CSS personalizado que cambia la apariencia inicial del elemento.

### Predeterminado {#default}

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

### Tamaños {#sizing}

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

### Deshabilitado {#disabled}

Agrega el atributo booleano `disabled` en una selección para darle una apariencia atenuada y eliminar eventos de puntero.

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

<MiddleBannerSix />

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

#### Variables Sass generales relacionadas {#sass-variables}

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

## Uso de Checks y radios en Bootstrap

Crea casillas de verificación y radios consistentes en todos los navegadores y dispositivos con nuestro componente de verificación completamente reescrito.

Las casillas de verificación y radios predeterminadas del navegador se reemplazan con la ayuda de `.form-check`, una serie de clases para ambos tipos de entrada que mejora el diseño y el comportamiento de tus elementos HTML, que proporcionan una mayor personalización y coherencia entre navegadores. Las casillas de verificación sirven para seleccionar una o varias opciones en una lista, mientras que las radios sirven para seleccionar una opción entre muchas.

Estructuralmente, nuestros `<input>`s y `<label>`s son elementos hermanos en lugar de un `<input>` dentro de un `<label>`. Esto es un poco más detallado ya que debes especificar los atributos `id` y `for` para relacionar los `<input>` y `<label>`. Usamos el selector de hermanos (`~`) para todos nuestros estados `<input>`, como `:checked` o `:disabled`. Cuando se combina con la clase `.form-check-label`, podemos diseñar fácilmente el texto de cada elemento según el estado del `<input>`.

Nuestras comprobaciones utilizan íconos Bootstrap personalizados para indicar estados marcados o indeterminados.

### Checks {#checks}

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

#### Indeterminado {#indeterminate}

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

<MiddleBannerSeven />

#### Deshabilitado {#disabled}

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

### Radios {#radios}

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

#### Deshabilitado {#disabled-1}

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

### Switches {#switches}

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

### Predeterminado (apilado) {#default-stacked}

De forma predeterminada, cualquier número de casillas de verificación y radios que sean hermanos inmediatos se apilarán verticalmente y se espaciarán adecuadamente con `.form-check`.

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

<MiddleBannerEight />

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

### Inline {#inline}

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

### Reverso {#reverse}

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

### Sin etiquetas {#without-labels}

Omite el ajuste `.form-check` para casillas de verificación y radios que no tienen texto de etiqueta. Recuerde proporcionar algún tipo de nombre accesible para las tecnologías de asistencia (por ejemplo, usando `aria-label`). Consulta la sección [accesibilidad general de formularios](/bootstrap/formularios/#accessibility) para obtener más detalles.

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

### Botones de alternancia {#toggle-buttons}

Crea casillas de verificación y botones de opción similares a botones usando estilos `.btn` en lugar de `.form-check-label` en los elementos `<label>`. Estos botones de alternancia se pueden agrupar además en un [grupo de botones](/bootstrap/componentes/botones) si es necesario.

#### Botones de alternancia de casilla de verificación {#checkbox-toggle-buttons}

<MiddleBannerNine />

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
Visualmente, estos botones de alternancia de casillas de verificación son idénticos a los [botones de alternancia del complemento de botones](/bootstrap/componentes/botones/#button-plugin). Sin embargo, las tecnologías de asistencia los transmiten de manera diferente: los lectores de pantalla anunciarán las casillas de verificación como "marcadas"/"no marcadas" (ya que, a pesar de su apariencia, siguen siendo fundamentalmente casillas de verificación), mientras que los botones de alternancia del complemento de botones serán anunciado como “botón”/“botón presionado”. La elección entre estos dos enfoques dependerá del tipo de alternancia que estés creando y de si la alternancia tendrá sentido para los usuarios cuando se anuncie como una casilla de verificación o como un botón real.
{{< /callout >}}

#### Botones de alternancia de radio {#radio-toggle-buttons}

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

#### Estilos outlined {#outlined-styles}

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

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

#### Variables Sass generales relacionadas {#sass-variables}

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

<MiddleBannerOne />

Variables para interruptores:

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

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

## Uso de elementos Range en Bootstrap

Utiliza nuestras entradas de rango personalizada para lograr un estilo consistente en todos los navegadores y una personalización integrada.

### Descripción general {#overview}

Crea controles `<input type="range">` personalizados con `.form-range`. La pista (el fondo) y el thumb (el valor) tienen el mismo estilo en todos los navegadores. Como solo Firefox admite "rellenar" su pista desde la izquierda o la derecha del thumb como forma de indicar visualmente el progreso, actualmente no lo admitimos.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/range/overview.html" >}}
```html {filename="HTML"}
    <label for="customRange1" class="form-label">Rango de ejemplo</label>
    <input type="range" class="form-range" id="customRange1">
```
{{< /demo-iframe >}}

### Deshabilitado {#disabled}

Agrega el atributo booleano `disabled` en una entrada para darle una apariencia atenuada, eliminar eventos de puntero y evitar el enfoque.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/range/disabled.html" >}}
```html {filename="HTML"}
    <label for="disabledRange" class="form-label">Rango deshabilitado</label>
    <input type="range" class="form-range" id="disabledRange" disabled="">
```
{{< /demo-iframe >}}

### Min y max {#min-and-max}

Las entradas de rango tienen valores implícitos para `min` y `max`—`0` y `100`, respectivamente. Puedes especificar nuevos valores para aquellos que usan los atributos `min` y `max`.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/range/min-and-max.html" >}}
```html {filename="HTML"}
    <label for="customRange2" class="form-label">Rango de ejemplo</label>
    <input type="range" class="form-range" min="0" max="5" id="customRange2">
```
{{< /demo-iframe >}}

### Pasos {#steps}

<MiddleBannerTwo />

De forma predeterminada, las entradas de rango se “ajustan” a valores enteros. Para cambiar esto, puedes especificar un valor de `step`. En el siguiente ejemplo, duplicamos el número de pasos usando `step="0.5"`.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/range/steps.html" >}}
```html {filename="HTML"}
    <label for="customRange3" class="form-label">Rango de ejemplo</label>
    <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
```
{{< /demo-iframe >}}

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

#### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

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

## Uso de Grupo de entradas en Bootstrap

Extiende fácilmente los controles de formulario agregando texto, botones o grupos de botones a ambos lados de las entradas de texto, selects personalizados y entradas de archivos personalizados.

### Ejemplo básico {#basic-example}

Coloca un complemento o botón a cada lado de una entrada. También puedes colocar uno a ambos lados de una entrada. Recuerda colocar `<label>`s fuera del grupo de entradas.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/input-group/basic-example.html" >}}
```html {filename="HTML"}
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">@ejemplo.com</span>
    </div>

    <div class="mb-3">
        <label for="basic-url" class="form-label">Tu URL personalizada</label>
        <div class="input-group">
            <span class="input-group-text" id="basic-addon3">https://ejemplos.com/usuarios/</span>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
        </div>
        <div class="form-text" id="basic-addon4">El texto de ayuda de ejemplo sale del grupo de entradas.</div>
    </div>

    <div class="input-group mb-3">
        <span class="input-group-text">$</span>
        <input type="text" class="form-control" aria-label="Monto (al dólar más cercano)">
        <span class="input-group-text">.00</span>
    </div>

    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Username" aria-label="Username">
        <span class="input-group-text">@</span>
        <input type="text" class="form-control" placeholder="Server" aria-label="Server">
    </div>

    <div class="input-group">
        <span class="input-group-text">Con textarea</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>
```
{{< /demo-iframe >}}

### Envolver {#wrapping}

Los grupos de entradas se ajustan de forma predeterminada mediante `flex-wrap: wrap` para acomodar la validación de campos de formulario personalizados dentro de un grupo de entradas. Puedes desactivar esto con `.flex-nowrap`.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/input-group/wrapping.html" >}}
```html {filename="HTML"}
    <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
    </div>
```
{{< /demo-iframe >}}

<MiddleBannerThree />

### Tamaños {#sizing}

Agrega las clases de tamaño de formulario relativo al `.input-group` y el contenido dentro cambiará de tamaño automáticamente; no es necesario repetir las clases de tamaño de control de formulario en cada elemento.

**No se admite el tamaño de los elementos individuales del grupo de entradas.**

{{< demo-iframe path="/demos/bootstrap/5.3/forms/input-group/sizing.html" >}}
```html {filename="HTML"}
    <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Pequeño</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>

    <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Predeterminado</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>

    <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">Grande</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
    </div>
```
{{< /demo-iframe >}}

### Checkboxes y radios {#checkboxes-and-radios}

Coloca cualquier casilla de verificación u opción de radio dentro del complemento de un grupo de entradas en lugar de texto. Recomendamos agregar `.mt-0` al `.form-check-input` cuando no haya texto visible al lado de la entrada.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/input-group/checkboxes-and-radios.html" >}}
```html {filename="HTML"}
    <div class="input-group mb-3">
        <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Casilla de verificación para la siguiente entrada de texto">
        </div>
        <input type="text" class="form-control" aria-label="Entrada de texto con casilla de verificación">
    </div>

    <div class="input-group">
        <div class="input-group-text">
            <input class="form-check-input mt-0" type="radio" value="" aria-label="Botón de opción para la siguiente entrada de texto">
        </div>
        <input type="text" class="form-control" aria-label="Entrada de texto con botón de opción">
    </div>
```
{{< /demo-iframe >}}

### Múltiples entradas {#multiple-inputs}

Si bien se admiten visualmente varios `<input>`, los estilos de validación solo están disponibles para grupos de entrada con un único `<input>`.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/input-group/multiple-inputs.html" >}}
```html {filename="HTML"}
    <div class="input-group">
        <span class="input-group-text">Nombre y apellido</span>
        <input type="text" aria-label="First name" class="form-control">
        <input type="text" aria-label="Last name" class="form-control">
    </div>
```
{{< /demo-iframe >}}

### Múltiples complementos {#multiple-addons}

Se admiten múltiples complementos y se pueden combinar con versiones de casilla de verificación y entrada de radio.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/input-group/multiple-addons.html" >}}
```html {filename="HTML"}
    <div class="input-group mb-3">
        <span class="input-group-text">$</span>
        <span class="input-group-text">0.00</span>
        <input type="text" class="form-control" aria-label="Monto en dólares (con punto y dos decimales)">
    </div>

    <div class="input-group">
        <input type="text" class="form-control" aria-label="Monto en dólares (con punto y dos decimales)">
        <span class="input-group-text">$</span>
        <span class="input-group-text">0.00</span>
    </div>
```
{{< /demo-iframe >}}

### Complementos de botones {#button-addons}

<MiddleBannerFour />

{{< demo-iframe path="/demos/bootstrap/5.3/forms/input-group/button-addons.html" >}}
```html {filename="HTML"}
    <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" id="button-addon1">Botón</button>
        <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
    </div>

    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Botón</button>
    </div>

    <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button">Botón</button>
        <button class="btn btn-outline-secondary" type="button">Botón</button>
        <input type="text" class="form-control" placeholder="" aria-label="Texto de ejemplo con complementos de dos botones">
    </div>

    <div class="input-group">
        <input type="text" class="form-control" placeholder="Nombre de usuario del destinatario" aria-label="Nombre de usuario del destinatario con complementos de dos botones">
        <button class="btn btn-outline-secondary" type="button">Botón</button>
        <button class="btn btn-outline-secondary" type="button">Botón</button>
    </div>
```
{{< /demo-iframe >}}

### Botones con desplegables {#buttons-with-dropdowns}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/input-group/buttons-with-dropdowns.html" >}}
```html {filename="HTML"}
    <div class="input-group mb-3">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Desplegable</button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Enlace separado</a></li>
        </ul>
        <input type="text" class="form-control" aria-label="Entrada de texto con botón desplegable">
    </div>

    <div class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Entrada de texto con botón desplegable">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Desplegable</button>
        <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Enlace separado</a></li>
        </ul>
    </div>

    <div class="input-group">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Desplegable</button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Acción antes</a></li>
            <li><a class="dropdown-item" href="#">Otra acción antes</a></li>
            <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Enlace separado</a></li>
        </ul>
        <input type="text" class="form-control" aria-label="Entrada de texto con 2 botones desplegables">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Desplegable</button>
        <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Enlace separado</a></li>
        </ul>
    </div>
```
{{< /demo-iframe >}}

### Botones segmentados {#segmented-buttons}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/input-group/segmented-buttons.html" >}}
```html {filename="HTML"}
    <div class="input-group mb-3">
        <button type="button" class="btn btn-outline-secondary">Acción</button>
        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Enlace separado</a></li>
        </ul>
        <input type="text" class="form-control" aria-label="Entrada de texto con botón desplegable segmentado">
    </div>

    <div class="input-group">
        <input type="text" class="form-control" aria-label="Entrada de texto con botón desplegable segmentado">
        <button type="button" class="btn btn-outline-secondary">Acción</button>
        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Enlace separado</a></li>
        </ul>
    </div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

### Formularios personalizados {#custom-forms}

Los grupos de entradas incluyen soporte para selects personalizados y entradas de archivos personalizados. Las versiones predeterminadas del navegador de estos no son compatibles.

#### Selects personalizada {#custom-select}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/input-group/custom-select.html" >}}
```html {filename="HTML"}
    <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01">Opciones</label>
        <select class="form-select" id="inputGroupSelect01">
            <option selected="">Elige...</option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
        </select>
    </div>

    <div class="input-group mb-3">
        <select class="form-select" id="inputGroupSelect02">
            <option selected="">Elige...</option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
        </select>
        <label class="input-group-text" for="inputGroupSelect02">Opciones</label>
    </div>

    <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button">Botón</button>
        <select class="form-select" id="inputGroupSelect03" aria-label="Ejemplo de selección con complemento de botón">
            <option selected="">Elige...</option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
        </select>
    </div>

    <div class="input-group">
        <select class="form-select" id="inputGroupSelect04" aria-label="Ejemplo de selección con complemento de botón">
            <option selected="">Elige...</option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
        </select>
        <button class="btn btn-outline-secondary" type="button">Botón</button>
    </div>
```
{{< /demo-iframe >}}

#### Entrada de archivo personalizado {#custom-file-input}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/input-group/custom-file-input.html" >}}
```html {filename="HTML"}
    <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01">Subir</label>
        <input type="file" class="form-control" id="inputGroupFile01">
    </div>

    <div class="input-group mb-3">
        <input type="file" class="form-control" id="inputGroupFile02">
        <label class="input-group-text" for="inputGroupFile02">Subir</label>
    </div>

    <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Botón</button>
        <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload">
    </div>

    <div class="input-group">
        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Botón</button>
    </div>
```
{{< /demo-iframe >}}

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

#### Variables Sass generales relacionadas {#sass-variables}

<MiddleBannerFive />

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$input-group-addon-padding-y:           $input-padding-y;
$input-group-addon-padding-x:           $input-padding-x;
$input-group-addon-font-weight:         $input-font-weight;
$input-group-addon-color:               $input-color;
$input-group-addon-bg:                  var(--#{$prefix}tertiary-bg);
$input-group-addon-border-color:        $input-border-color;
```

## Uso de Etiquetas flotantes en Bootstrap

Crea etiquetas de formulario bellamente simples que floten sobre tus campos de entrada.

### Ejemplo {#example}

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

### Textareas {#textareas}

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

<MiddleBannerSix />

{{< demo-iframe path="/demos/bootstrap/5.3/forms/floating-labels/textareas-2.html" >}}
```html {filename="HTML"}
    <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Comentarios</label>
    </div>
```
{{< /demo-iframe >}}

### Selects {#selects}

Aparte de `.form-control`, las etiquetas flotantes solo están disponibles en `.form-select`. Funcionan de la misma manera, pero a diferencia de los `<input>`, siempre mostrarán el `<label>` en su estado flotante. **No se admiten selects con `size` y `multiple`.**

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

### Deshabilitado {#disabled}

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

### Texto sin formato de solo lectura {#readonly-plaintext}

Las etiquetas flotantes también admiten `.form-control-plaintext`, lo que puede ser útil para alternar entre un `<input>` editable a un valor de texto sin formato sin afectar el diseño de la página.

{{< bootstrap/content-suggestion >}}

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

### Grupos de entradas {#input-groups}

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

<MiddleBannerSeven />

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

### Layout {#layout}

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

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

#### Variables Sass generales relacionadas {#sass-variables}

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

## Diseño de Layout de formularios en Bootstrap

Dale a tus formularios cierta estructura, desde implementaciones en línea hasta horizontales y de cuadrícula personalizadas, con nuestras opciones de diseño de formulario.

### Formularios {#forms}

Cada grupo de campos de formulario debe residir en un elemento `<form>`. Bootstrap no proporciona ningún estilo predeterminado para el elemento `<form>`, pero hay algunas potentes funciones del navegador que se proporcionan de forma predeterminada.

* ¿Eres nuevo en los formularios del navegador? Considera revisar [la documentación de formularios MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) para obtener una descripción general y una lista completa de los atributos disponibles.
* `<button>`s dentro de un `<form>` por defecto es `type="submit"`, así que esfuézate por ser específico e incluye siempre un `type`.

Dado que Bootstrap aplica `display: block` y `width: 100%` a casi todos nuestros controles de formulario, los formularios se apilarán verticalmente de forma predeterminada. Se pueden utilizar clases adicionales para variar este diseño según el rendimiento.

<MiddleBannerEight />

### Utilidades {#utilities}

[Las utilidades de margen](/bootstrap/utilidades/espaciado) son la forma más fácil de agregar algo de estructura a los formularios. Proporcionan agrupación básica de etiquetas, controles, texto de formulario opcional y mensajes de validación de formulario. Recomendamos ceñirse a las utilidades `margin-bottom` y utilizar una única dirección en todo el formulario para mantener la coherencia.

Siéntete libre de crear tus formularios como quieras, con `<fieldset>`s, `<div>`s, o casi cualquier otro elemento.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/layout/utilities.html" >}}
```html {filename="HTML"}
    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Etiqueta de ejemplo</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
    </div>
    <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">Otra etiqueta</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
    </div>
```
{{< /demo-iframe >}}

### Cuadrícula de formularios {#form-grid}

Se pueden crear formularios más complejos usando nuestras clases de cuadrícula. Úsalos para diseños de formularios que requieran múltiples columnas, anchos variados y opciones de alineación adicionales. **Requiere que la variable Sass `$enable-grid-classes` esté habilitada** (activada de forma predeterminada).

{{< demo-iframe path="/demos/bootstrap/5.3/forms/layout/form-grid.html" >}}
```html {filename="HTML"}
    <div class="row">
        <div class="col">
            <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="Apellido" aria-label="Apellido">
        </div>
    </div>
```
{{< /demo-iframe >}}

### Gutters {#gutters}

Al agregar [clases modificadoras de gutter](/bootstrap/layout), puedes tener control sobre el ancho del gutter tanto en línea como en bloque. **También requiere que la variable Sass `$enable-grid-classes` esté habilitada** (activada de forma predeterminada).

{{< demo-iframe path="/demos/bootstrap/5.3/forms/layout/gutters-1.html" >}}
```html {filename="HTML"}
    <div class="row g-3">
        <div class="col">
            <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="Apellido" aria-label="Apellido">
        </div>
    </div>
```
{{< /demo-iframe >}}

También se pueden crear diseños más complejos con el sistema de cuadrícula.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/layout/gutters-2.html" >}}
```html {filename="HTML"}
    <form class="row g-3">
        <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4">
        </div>
        <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="inputPassword4">
        </div>
        <div class="col-12">
            <label for="inputAddress" class="form-label">Dirección</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
        </div>
        <div class="col-12">
            <label for="inputAddress2" class="form-label">Dirección 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
        </div>
        <div class="col-md-6">
            <label for="inputCity" class="form-label">Ciudad</label>
            <input type="text" class="form-control" id="inputCity">
        </div>
        <div class="col-md-4">
            <label for="inputState" class="form-label">Estado</label>
            <select id="inputState" class="form-select">
                <option selected="">Elige...</option>
                <option>...</option>
            </select>
        </div>
        <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip">
        </div>
        <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                    Échame un vistazo
                </label>
            </div>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Iniciar sesión</button>
        </div>
    </form>
```
{{< /demo-iframe >}}

### Formulario horizontal {#horizontal-form}

Crea formularios horizontales con el grid agregando la clase `.row` para formar grupos y usando las clases `.col-*-*` para especificar el ancho de tus etiquetas y controles. Asegúrate de agregar `.col-form-label` a tus `<label>`s también para que queden centrados verticalmente con tus controles de formulario asociados.

{{< bootstrap/content-suggestion >}}

<MiddleBannerNine />

A veces, tal vez necesites usar utilidades de margen o relleno para crear la alineación perfecta que necesitas. Por ejemplo, hemos eliminado el `padding-top` de nuestra etiqueta de entradas de radio apiladas para alinear mejor la línea base del texto.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/layout/horizontal-form.html" >}}
```html {filename="HTML"}
    <form>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3">
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Contraseña</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3">
            </div>
        </div>
        <fieldset class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
            <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"
                        checked="">
                    <label class="form-check-label" for="gridRadios1">
                        Primer radio
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    <label class="form-check-label" for="gridRadios2">
                        Segundo radio
                    </label>
                </div>
                <div class="form-check disabled">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"
                        disabled="">
                    <label class="form-check-label" for="gridRadios3">
                        Tercero radio deshabilitado
                    </label>
                </div>
            </div>
        </fieldset>
        <div class="row mb-3">
            <div class="col-sm-10 offset-sm-2">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1">
                    <label class="form-check-label" for="gridCheck1">
                        Casilla de verificación de ejemplo
                    </label>
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Iniciar sesión</button>
    </form>
```
{{< /demo-iframe >}}

#### Tamaño de etiqueta de formulario horizontal {#horizontal-form-label-sizing}

Asegúrate de usar `.col-form-label-sm` o `.col-form-label-lg` en tu `<label>`s o `<legend>`s para seguir correctamente el tamaño de `.form-control-lg` y `.form-control-sm`.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/layout/horizontal-form-label-sizing.html" >}}
```html {filename="HTML"}
    <div class="row mb-3">
        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
        </div>
    </div>
    <div class="row mb-3">
        <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
        </div>
    </div>
    <div class="row">
        <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
        </div>
    </div>
```
{{< /demo-iframe >}}

### Tamaño de columna {#column-sizing}

Como se muestra en los ejemplos anteriores, nuestro sistema de cuadrícula te permite colocar cualquier número de `.col` dentro de un `.row`. Dividirán el ancho disponible en partes iguales entre ellos. También puedes elegir un subconjunto de tus columnas para que ocupe más o menos espacio, mientras que los `.col` restantes dividen equitativamente el resto, con clases de columnas específicas como `.col-sm-7`.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/layout/column-sizing.html" >}}
```html {filename="HTML"}
    <div class="row g-3">
        <div class="col-sm-7">
            <input type="text" class="form-control" placeholder="Ciudad" aria-label="Ciudad">
        </div>
        <div class="col-sm">
            <input type="text" class="form-control" placeholder="Estado" aria-label="Estado">
        </div>
        <div class="col-sm">
            <input type="text" class="form-control" placeholder="Zip" aria-label="Zip">
        </div>
    </div>
```
{{< /demo-iframe >}}

### Autodimensionamiento {#auto-sizing}

El siguiente ejemplo utiliza una utilidad flexbox para centrar verticalmente el contenido y cambia `.col` a `.col-auto` para que tus columnas solo ocupen tanto espacio como sea necesario. Dicho de otra manera, el tamaño de la columna se basa en el contenido.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/layout/auto-sizing-1.html" >}}
```html {filename="HTML"}
    <form class="row gy-2 gx-3 align-items-center">
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput">Nombre</label>
            <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInputGroup">Nombre de usuario</label>
            <div class="input-group">
                <div class="input-group-text">@</div>
                <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username">
            </div>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingSelect">Preferencia</label>
            <select class="form-select" id="autoSizingSelect">
                <option selected="">Elige...</option>
                <option value="1">Uno</option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
            </select>
        </div>
        <div class="col-auto">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="autoSizingCheck">
                <label class="form-check-label" for="autoSizingCheck">
                    Recuérdame
                </label>
            </div>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
    </form>
```
{{< /demo-iframe >}}

Luego puedes remezclarlo una vez más con clases de columna de tamaño específico.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/forms/layout/auto-sizing-2.html" >}}
```html {filename="HTML"}
    <form class="row gx-3 gy-2 align-items-center">
        <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeInputName">Nombre</label>
            <input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe">
        </div>
        <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeInputGroupUsername">Nombre de usuario</label>
            <div class="input-group">
                <div class="input-group-text">@</div>
                <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Username">
            </div>
        </div>
        <div class="col-sm-3">
            <label class="visually-hidden" for="specificSizeSelect">Preferencia</label>
            <select class="form-select" id="specificSizeSelect">
                <option selected="">Elige...</option>
                <option value="1">Uno</option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
            </select>
        </div>
        <div class="col-auto">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
                <label class="form-check-label" for="autoSizingCheck2">
                    Recuérdame
                </label>
            </div>
        </div>
        <div class="col-auto">
            <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
    </form>
```
{{< /demo-iframe >}}

### Formularios en línea {#inline-forms}

<MiddleBannerOne />

Usa las clases `.row-cols-*` para crear diseños horizontales responsive. Al agregar [clases modificadoras de gutters](/bootstrap/layout), tendremos gutters en direcciones horizontales y verticales. En viewports móviles estrechos, `.col-12` ayuda a apilar los controles del formulario y más. `.align-items-center` alinea los elementos del formulario en el medio, haciendo que `.form-check` se alinee correctamente.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/layout/inline-forms.html" >}}
```html {filename="HTML"}
    <form class="row row-cols-lg-auto g-3 align-items-center">
        <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">Nombre de usuario</label>
            <div class="input-group">
                <div class="input-group-text">@</div>
                <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
            </div>
        </div>

        <div class="col-12">
            <label class="visually-hidden" for="inlineFormSelectPref">Preferencia</label>
            <select class="form-select" id="inlineFormSelectPref">
                <option selected="">Elige...</option>
                <option value="1">Uno</option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
            </select>
        </div>

        <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                <label class="form-check-label" for="inlineFormCheck">
                    Recuérdame
                </label>
            </div>
        </div>

        <div class="col-12">
            <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
    </form>
```
{{< /demo-iframe >}}

## Validación de formularios en Bootstrap

Brinda comentarios valiosos y prácticos a tus usuarios con la validación de formularios HTML5, a través de comportamientos predeterminados del navegador o estilos personalizados y JavaScript.

{{< callout type="warning" emoji="" >}}
Somos conscientes de que actualmente los estilos de validación personalizados y los tooltips del lado del cliente no son accesibles, ya que no están expuestos a tecnologías de asistencia. Mientras trabajamos en una solución, recomendamos utilizar la opción del lado del servidor o el método de validación del navegador predeterminado.
{{< /callout >}}

### Cómo funciona {#how-it-works}

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

### Estilos personalizados {#custom-styles}

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

### Valores predeterminados del navegador {#browser-defaults}

<MiddleBannerTwo />

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

### Del lado del servidor {#server-side}

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

### Elementos soportados {#supported-elements}

Los estilos de validación están disponibles para los siguientes controles y componentes de formulario:

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

### Tooltips {#tooltips}

Si el diseño de tu formulario lo permite, puedes intercambiar las clases `.{valid|invalid}-feedback` por `.{valid|invalid}-tooltip` para mostrar comentarios de validación en un tooltips con estilo. Asegúrate de tener un elemento padre con `position: relative` para el posicionamiento del tooltips. En el siguiente ejemplo, nuestras clases de columnas ya tienen esto, pero es posible que tu proyecto requiera una configuración alternativa.

<MiddleBannerThree />

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

### Personalización del CSS {#css}

#### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.3.0</span>

Como parte del enfoque de variables CSS en evolución de Bootstrap, los formularios ahora usan variables CSS locales para la validación y mejorar la personalización en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_root.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_root.scss)

```scss {filename="scss/_root.scss"}
--#{$prefix}form-valid-color: #{$form-valid-color};
--#{$prefix}form-valid-border-color: #{$form-valid-border-color};
--#{$prefix}form-invalid-color: #{$form-invalid-color};
--#{$prefix}form-invalid-border-color: #{$form-invalid-border-color};
```

Estas variables también son adaptables al modo de color, lo que significa que cambian de color mientras están en modo oscuro.

#### Variables Sass generales relacionadas {#sass-variables}

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

<MiddleBannerFour />

```scss {filename="scss/_variables-dark.scss"}
$form-valid-color-dark:             $green-300;
$form-valid-border-color-dark:      $green-300;
$form-invalid-color-dark:           $red-300;
$form-invalid-border-color-dark:    $red-300;
```

#### Sass mixins {#sass-mixins}

Se combinan dos mixins, a través de nuestro [bucle](#sass-loops), para generar nuestros estilos de comentarios de validación de formulario.

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

#### Mapas de Sass {#sass-maps}

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

#### Sass loops {#sass-loops}

Se utiliza para iterar sobre los valores del mapa `$form-validation-states` para generar nuestros estilos de validación. Cualquier modificación al mapa Sass anterior se reflejará en tu CSS compilado a través de este bucle.

[scss/forms/_validation.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/forms/_validation.scss)

```scss {filename="scss/forms/_validation.scss"}
@each $state, $data in $form-validation-states {
    @include form-validation-state($state, $data...);
}
```

#### Personalización {#customizing}

Los estados de validación se pueden personalizar a través de Sass con el mapa `$form-validation-states`. Ubicado en nuestro archivo `_variables.scss`, este mapa Sass es cómo generamos los estados de validación predeterminados `valid`/`invalid`. Se incluye un mapa anidado para personalizar el color, el icono, el color del tooltips y la sombra de enfoque de cada estado. Si bien los navegadores no admiten otros estados, aquellos que usan estilos personalizados pueden agregar fácilmente comentarios a formularios más complejos.

<BottomBanner />
