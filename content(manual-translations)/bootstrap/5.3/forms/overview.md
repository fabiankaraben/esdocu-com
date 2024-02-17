---
weight: 1
linkTitle: Descripción general
title: Uso de Formularios en Bootstrap · Bootstrap en Español v5.3
description: Ejemplos y pautas de uso para estilos de control de formularios, opciones de diseño y componentes personalizados para crear una amplia variedad de formularios.
prev: /bootstrap/5.3/content/figures
noindex: true
---

# Uso de Formularios en Bootstrap

Ejemplos y pautas de uso para estilos de control de formularios, opciones de diseño y componentes personalizados para crear una amplia variedad de formularios.

{{< content-ads/top-banner >}}

| <span class="mx-16">Tópico</span>                               | Descripción                                                                                                                       |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [**Control de formularios**](/bootstrap/5.3/forms/form-control) | Diseñar entradas de texto y áreas de texto con soporte para múltiples estados.                                                    |
| [**Select**](/bootstrap/5.3/forms/select)                       | Mejora los elementos de selección predeterminados del navegador con una apariencia inicial personalizada.                         |
| [**Checks y radios**](/bootstrap/5.3/forms/checks-radios)       | Usa nuestros botones de opción y casillas de verificación personalizados en los formularios para seleccionar opciones de entrada. |
| [**Rango**](/bootstrap/5.3/forms/range)                         | Reemplaza las entradas del rango predeterminado del navegador con nuestra versión personalizada.                                  |
| [**Grupo de entrada**](/bootstrap/5.3/forms/input-group)        | Adjunta etiquetas y botones a tus entradas para aumentar el valor semántico.                                                      |
| [**Etiquetas flotantes**](/bootstrap/5.3/forms/floating-labels) | Crea etiquetas de formulario bellamente simples que floten sobre tus campos de entrada.                                           |
| [**Layout**](/bootstrap/5.3/forms/layout)                       | Crea diseños en línea, horizontales o complejos basados en cuadrículas con tus formularios.                                       |
| [**Validación**](/bootstrap/5.3/forms/validation)               | Valida tus formularios con comportamientos y estilos de validación personalizados o nativos.                                      |

Descripción general {#overview}
--------------------------------

Los controles de formulario de Bootstrap amplían [nuestros estilos de formulario reiniciados (Reboot)](/bootstrap/5.3/content/reboot/#forms) con clases. Utiliza estas clases para optar por sus pantallas personalizadas y obtener una representación más consistente en todos los navegadores y dispositivos.

Asegúrate de usar un atributo `type` apropiado en todas las entradas (por ejemplo, `email` para la dirección de correo electrónico o `number` para obtener información numérica) para aprovechar los controles de entrada más nuevos, como verificación de correo electrónico, selección de números y más.

Aquí tienes un ejemplo rápido para demostrar los estilos de formulario de Bootstrap. Continúa leyendo para obtener documentación sobre las clases requeridas, el diseño de formularios y más.

{{< content-ads/middle-banner-1 >}}

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

Formularios deshabilitados {#disabled-forms}
---------------------------------------------

Agrega el atributo booleano `disabled` en una entrada para evitar interacciones del usuario y hacer que parezca más ligera.

```html {filename="HTML"}
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
```

Agrega el atributo `disabled` a un `<fieldset>` para deshabilitar todos los controles que contiene. Los navegadores tratan todos los controles de formulario nativos (elementos`<input>`, `<select>` y `<button>`) dentro de un `<fieldset disabled>` como deshabilitado, lo que impide la interacción con el teclado y el mouse.

{{< content-ads/middle-banner-2 >}}

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

Accesibilidad {#accessibility}
-------------------------------

Asegúrate de que todos los controles de formulario tengan un nombre accesible apropiado para que su propósito pueda transmitirse a los usuarios de tecnologías de asistencia. La forma más sencilla de lograr esto es utilizar un elemento `<label>` o, en el caso de los botones, incluir texto suficientemente descriptivo como parte del `<button>...</button>` contenido.

Para situaciones en las que no es posible incluir un `<label>` visible o contenido de texto apropiado, existen formas alternativas de proporcionar un nombre accesible, como como:

{{< content-ads/middle-banner-3 >}}

* `<label>` elementos ocultos usando `.visually-hidden` (clase)
* Apuntar a un elemento existente que puede actuar como etiqueta usando `aria-labelledby`
* Proporcionar un `title` (atributo)
* Establecer explícitamente el nombre accesible en un elemento usando `aria-label`

Si ninguno de estos está presente, las tecnologías de asistencia pueden recurrir al uso del atributo `placeholder` como alternativa para el nombre accesible en `<input>` y `<textarea>`. Los ejemplos de esta sección proporcionan algunos enfoques sugeridos para casos específicos.

Al usar contenido visualmente oculto (`.visually-hidden`, `aria-label` e incluso contenido `placeholder`, que desaparece una vez que un campo de formulario tiene contenido) beneficiará a los usuarios de tecnología de asistencia, la falta de texto de etiqueta visible aún puede ser problemático para ciertos usuarios. Por lo general, el mejor enfoque es algún tipo de etiqueta visible, tanto por motivos de accesibilidad como de usabilidad.

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-4 >}}

Muchas variables de formulario se configuran a nivel general para ser reutilizadas y ampliadas por componentes de formulario individuales. Los verás con mayor frecuencia como variables `$input-btn-*` y `$input-*`.

### Variables Sass generales relacionadas {#sass-variables}

`$input-btn-*` son variables globales compartidas entre nuestros [botones](/bootstrap/5.3/components/buttons) y nuestros componentes de formulario. Los encontrará frecuentemente reasignados como valores a otras variables específicas de componentes.

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

{{< content-ads/bottom-banner >}}
