---
weight: 6
linkTitle: Grupo de entradas
title: Uso de Grupo de entradas en Bootstrap · Bootstrap en Español v5.3
description: Extiende fácilmente los controles de formulario agregando texto, botones o grupos de botones a ambos lados de las entradas de texto, selects personalizados y entradas de archivos personalizados.
---

# Uso de Grupo de entradas en Bootstrap

Extiende fácilmente los controles de formulario agregando texto, botones o grupos de botones a ambos lados de las entradas de texto, selects personalizados y entradas de archivos personalizados.

{{< content-ads/top-banner >}}

Ejemplo básico {#basic-example}
--------------------------------

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

Envolver {#wrapping}
---------------------

Los grupos de entradas se ajustan de forma predeterminada mediante `flex-wrap: wrap` para acomodar la validación de campos de formulario personalizados dentro de un grupo de entradas. Puedes desactivar esto con `.flex-nowrap`.

{{< demo-iframe path="/demos/bootstrap/5.3/forms/input-group/wrapping.html" >}}
```html {filename="HTML"}
    <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
    </div>
```
{{< /demo-iframe >}}

Tamaños {#sizing}
------------------

{{< content-ads/middle-banner-1 >}}

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

Checkboxes y radios {#checkboxes-and-radios}
---------------------------------------------

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

Múltiples entradas {#multiple-inputs}
--------------------------------------

{{< content-ads/middle-banner-2 >}}

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

Múltiples complementos {#multiple-addons}
------------------------------------------

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

Complementos de botones {#button-addons}
-----------------------------------------

{{< content-ads/middle-banner-3 >}}

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

Botones con desplegables {#buttons-with-dropdowns}
---------------------------------------------------

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

Botones segmentados {#segmented-buttons}
-----------------------------------------

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

Formularios personalizados {#custom-forms}
-------------------------------------------

{{< content-ads/middle-banner-4 >}}

Los grupos de entradas incluyen soporte para selects personalizados y entradas de archivos personalizados. Las versiones predeterminadas del navegador de estos no son compatibles.

### Selects personalizada {#custom-select}

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

### Entrada de archivo personalizado {#custom-file-input}

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

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-5 >}}

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$input-group-addon-padding-y:           $input-padding-y;
$input-group-addon-padding-x:           $input-padding-x;
$input-group-addon-font-weight:         $input-font-weight;
$input-group-addon-color:               $input-color;
$input-group-addon-bg:                  var(--#{$prefix}tertiary-bg);
$input-group-addon-border-color:        $input-border-color;
```

{{< content-ads/bottom-banner >}}
