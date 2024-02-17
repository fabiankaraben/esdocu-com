---
weight: 8
linkTitle: Layout
title: Diseño de Layout de formularios en Bootstrap · Bootstrap en Español v5.3
description: Dale a tus formularios cierta estructura, desde implementaciones en línea hasta horizontales y de cuadrícula personalizadas, con nuestras opciones de diseño de formulario.
---

# Diseño de Layout de formularios en Bootstrap

Dale a tus formularios cierta estructura, desde implementaciones en línea hasta horizontales y de cuadrícula personalizadas, con nuestras opciones de diseño de formulario.

{{< content-ads/top-banner >}}

Formularios {#forms}
---------------------

Cada grupo de campos de formulario debe residir en un elemento `<form>`. Bootstrap no proporciona ningún estilo predeterminado para el elemento `<form>`, pero hay algunas potentes funciones del navegador que se proporcionan de forma predeterminada.

* ¿Eres nuevo en los formularios del navegador? Considera revisar [la documentación de formularios MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) para obtener una descripción general y una lista completa de los atributos disponibles.
* `<button>`s dentro de un `<form>` por defecto es `type="submit"`, así que esfuézate por ser específico e incluye siempre un `type`.

Dado que Bootstrap aplica `display: block` y `width: 100%` a casi todos nuestros controles de formulario, los formularios se apilarán verticalmente de forma predeterminada. Se pueden utilizar clases adicionales para variar este diseño según el rendimiento.

Utilidades {#utilities}
------------------------

[Las utilidades de margen](/bootstrap/5.3/utilities/spacing) son la forma más fácil de agregar algo de estructura a los formularios. Proporcionan agrupación básica de etiquetas, controles, texto de formulario opcional y mensajes de validación de formulario. Recomendamos ceñirse a las utilidades `margin-bottom` y utilizar una única dirección en todo el formulario para mantener la coherencia.

Siéntete libre de crear tus formularios como quieras, con `<fieldset>`s, `<div>`s, o casi cualquier otro elemento.

{{< content-ads/middle-banner-1 >}}

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

Cuadrícula de formularios {#form-grid}
---------------------------------------

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

Gutters {#gutters}
-------------------

Al agregar [clases modificadoras de gutter](/bootstrap/5.3/layout/gutters), puedes tener control sobre el ancho del gutter tanto en línea como en bloque. **También requiere que la variable Sass `$enable-grid-classes` esté habilitada** (activada de forma predeterminada).

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

{{< content-ads/middle-banner-2 >}}

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

Formulario horizontal {#horizontal-form}
-----------------------------------------

Crea formularios horizontales con el grid agregando la clase `.row` para formar grupos y usando las clases `.col-*-*` para especificar el ancho de tus etiquetas y controles. Asegúrate de agregar `.col-form-label` a tus `<label>`s también para que queden centrados verticalmente con tus controles de formulario asociados.

{{< bootstrap/content-suggestion >}}

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

{{< content-ads/middle-banner-3 >}}

### Tamaño de etiqueta de formulario horizontal {#horizontal-form-label-sizing}

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

Tamaño de columna {#column-sizing}
-----------------------------------

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

Autodimensionamiento {#auto-sizing}
------------------------------------

{{< content-ads/middle-banner-4 >}}

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

Formularios en línea {#inline-forms}
-------------------------------------

Usa las clases `.row-cols-*` para crear diseños horizontales responsive. Al agregar [clases modificadoras de gutters](/bootstrap/5.3/layout/gutters), tendremos gutters en direcciones horizontales y verticales. En viewports móviles estrechos, `.col-12` ayuda a apilar los controles del formulario y más. `.align-items-center` alinea los elementos del formulario en el medio, haciendo que `.form-check` se alinee correctamente.

{{< content-ads/middle-banner-5 >}}

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

{{< content-ads/bottom-banner >}}
