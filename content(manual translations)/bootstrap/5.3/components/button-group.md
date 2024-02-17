---
weight: 6
linkTitle: Grupo de botones
title: El componente Grupo de botones de Bootstrap · Bootstrap en Español v5.3
description: Agrupa una serie de botones en una sola línea o apílalos en una columna vertical.
---

# El componente Grupo de botones de Bootstrap

Agrupa una serie de botones en una sola línea o apílalos en una columna vertical.

{{< content-ads/top-banner >}}

Ejemplo básico del componente Grupo de botones {#basic-example}
--------------------------------

Envuelve una serie de botones con `.btn` en `.btn-group`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/button-group/basic-example-1.html" >}}
```html {filename="HTML"}
    <div class="btn-group" role="group" aria-label="Ejemplo básico">
        <button type="button" class="btn btn-primary">Izquierda</button>
        <button type="button" class="btn btn-primary">Medio</button>
        <button type="button" class="btn btn-primary">Derecha</button>
    </div>
```
{{< /demo-iframe >}}

{{< callout type="info" emoji="" >}}
Los grupos de botones requieren un atributo `role` apropiado y una etiqueta explícita para garantizar que las tecnologías de asistencia, como los lectores de pantalla, identifiquen los botones como agrupados y los anuncien. Utiliza `role="group"` para grupos de botones o `role="toolbar"` para barras de herramientas de botones. Luego usa `aria-label` o `aria-labelledby` para etiquetarlos.
{{< /callout >}}

Estas clases también se pueden agregar a grupos de enlaces, como alternativa al [`.nav` componentes de navegación](/bootstrap/5.3/components/navs-tabs).

{{< demo-iframe path="/demos/bootstrap/5.3/components/button-group/basic-example-2.html" >}}
```html {filename="HTML"}
    <div class="btn-group">
        <a href="#" class="btn btn-primary active" aria-current="page">Enlace activo</a>
        <a href="#" class="btn btn-primary">Enlace</a>
        <a href="#" class="btn btn-primary">Enlace</a>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-1 >}}

Estilos mixtos del componente Grupo de botones {#mixed-styles}
-------------------------------

{{< demo-iframe path="/demos/bootstrap/5.3/components/button-group/mixed-styles.html" >}}
```html {filename="HTML"}
    <div class="btn-group" role="group" aria-label="Ejemplo básico de estilos mixtos">
        <button type="button" class="btn btn-danger">Izquierda</button>
        <button type="button" class="btn btn-warning">Medio</button>
        <button type="button" class="btn btn-success">Derecha</button>
    </div>
```
{{< /demo-iframe >}}

Estilos outlined del componente Grupo de botones {#outlined-styles}
------------------------------------

{{< demo-iframe path="/demos/bootstrap/5.3/components/button-group/outlined-styles.html" >}}
```html {filename="HTML"}
    <div class="btn-group" role="group" aria-label="Ejemplo básico outlined">
        <button type="button" class="btn btn-outline-primary">Izquierda</button>
        <button type="button" class="btn btn-outline-primary">Medio</button>
        <button type="button" class="btn btn-outline-primary">Derecha</button>
    </div>
```
{{< /demo-iframe >}}

Grupos de casillas de verificación y botones de opción {#checkbox-and-radio-button-groups}
-------------------------------------------------------------------------------------------

Combina botones de casilla de verificación y radio con forma de [botones de alternancia](/bootstrap/5.3/forms/checks-radios) en un grupo de botones de apariencia perfecta.

{{< content-ads/middle-banner-2 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/button-group/checkbox-and-radio-button-groups-1.html" >}}
```html {filename="HTML"}
    <div class="btn-group" role="group" aria-label="Grupo de botones de alternancia de casilla de verificación básico">
        <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
        <label class="btn btn-outline-primary" for="btncheck1">Casilla 1</label>

        <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
        <label class="btn btn-outline-primary" for="btncheck2">Casilla 2</label>

        <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
        <label class="btn btn-outline-primary" for="btncheck3">Casilla 3</label>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/button-group/checkbox-and-radio-button-groups-2.html" >}}
```html {filename="HTML"}
    <div class="btn-group" role="group" aria-label="Grupo básico de botones de alternancia de radio">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked="">
        <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
    </div>
```
{{< /demo-iframe >}}

Barra de herramientas de botones {#button-toolbar}
---------------------------------------------------

Combina conjuntos de grupos de botones en barras de herramientas de botones para obtener componentes más complejos. Utiliza clases de utilidad según sea necesario para espaciar grupos, botones y más.

{{< demo-iframe path="/demos/bootstrap/5.3/components/button-group/button-toolbar-1.html" >}}
```html {filename="HTML"}
    <div class="btn-toolbar" role="toolbar" aria-label="Barra de herramientas con grupos de botones">
        <div class="btn-group me-2" role="group" aria-label="Primer grupo">
            <button type="button" class="btn btn-primary">1</button>
            <button type="button" class="btn btn-primary">2</button>
            <button type="button" class="btn btn-primary">3</button>
            <button type="button" class="btn btn-primary">4</button>
        </div>
        <div class="btn-group me-2" role="group" aria-label="Segundo grupo">
            <button type="button" class="btn btn-secondary">5</button>
            <button type="button" class="btn btn-secondary">6</button>
            <button type="button" class="btn btn-secondary">7</button>
        </div>
        <div class="btn-group" role="group" aria-label="Tercer grupo">
            <button type="button" class="btn btn-info">8</button>
        </div>
    </div>
```
{{< /demo-iframe >}}

Siéntete libre de mezclar grupos de entrada con grupos de botones en tus barras de herramientas. Al igual que en el ejemplo anterior, es probable que necesites algunas utilidades para espaciar las cosas correctamente.

{{< content-ads/middle-banner-3 >}}

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/button-group/button-toolbar-2.html" >}}
```html {filename="HTML"}
    <div class="btn-toolbar mb-3" role="toolbar" aria-label="Barra de herramientas con grupos de botones">
        <div class="btn-group me-2" role="group" aria-label="Primer grupo">
            <button type="button" class="btn btn-outline-secondary">1</button>
            <button type="button" class="btn btn-outline-secondary">2</button>
            <button type="button" class="btn btn-outline-secondary">3</button>
            <button type="button" class="btn btn-outline-secondary">4</button>
        </div>
        <div class="input-group">
            <div class="input-group-text" id="btnGroupAddon">@</div>
            <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon">
        </div>
    </div>

    <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Barra de herramientas con grupos de botones">
        <div class="btn-group" role="group" aria-label="Primer grupo">
            <button type="button" class="btn btn-outline-secondary">1</button>
            <button type="button" class="btn btn-outline-secondary">2</button>
            <button type="button" class="btn btn-outline-secondary">3</button>
            <button type="button" class="btn btn-outline-secondary">4</button>
        </div>
        <div class="input-group">
            <div class="input-group-text" id="btnGroupAddon2">@</div>
            <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2">
        </div>
    </div>
```
{{< /demo-iframe >}}

Tamaños del componente Grupo de botones {#sizing}
------------------

En lugar de aplicar clases de tamaño de botones a cada botón de un grupo, simplemente agrega `.btn-group-*` a cada `.btn-group`, incluyendo cada uno cuando se anidan varios grupos.

{{< demo-iframe path="/demos/bootstrap/5.3/components/button-group/sizing.html" >}}
```html {filename="HTML"}
    <div class="btn-group btn-group-lg" role="group" aria-label="Grupo de botones grandes">
        <button type="button" class="btn btn-outline-primary">Izquierda</button>
        <button type="button" class="btn btn-outline-primary">Medio</button>
        <button type="button" class="btn btn-outline-primary">Derecha</button>
    </div>
    <br>
    <div class="btn-group" role="group" aria-label="Grupo de botones predeterminado">
        <button type="button" class="btn btn-outline-primary">Izquierda</button>
        <button type="button" class="btn btn-outline-primary">Medio</button>
        <button type="button" class="btn btn-outline-primary">Derecha</button>
    </div>
    <br>
    <div class="btn-group btn-group-sm" role="group" aria-label="Grupo de botones pequeños">
        <button type="button" class="btn btn-outline-primary">Izquierda</button>
        <button type="button" class="btn btn-outline-primary">Medio</button>
        <button type="button" class="btn btn-outline-primary">Derecha</button>
    </div>
```
{{< /demo-iframe >}}

Anidamiento del componente Grupo de botones {#nesting}
-----------------------

{{< content-ads/middle-banner-4 >}}

Coloca un `.btn-group` dentro de otro `.btn-group` cuando quieras menús desplegables mezclados con una serie de botones.

{{< demo-iframe path="/demos/bootstrap/5.3/components/button-group/nesting.html" >}}
```html {filename="HTML"}
    <div class="btn-group" role="group" aria-label="Grupo de botones con menú desplegable anidado">
        <button type="button" class="btn btn-primary">1</button>
        <button type="button" class="btn btn-primary">2</button>

        <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false">
                Desplegable
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Enlace desplegable</a></li>
                <li><a class="dropdown-item" href="#">Enlace desplegable</a></li>
            </ul>
        </div>
    </div>
```
{{< /demo-iframe >}}

Variación vertical del componente Grupo de botones {#vertical-variation}
-----------------------------------------

Haz que un conjunto de botones aparezcan apilados verticalmente en lugar de horizontalmente. **Aquí no se admiten menús desplegables de botones divididos.**

{{< demo-iframe path="/demos/bootstrap/5.3/components/button-group/vertical-variation-1.html" >}}
```html {filename="HTML"}
    <div class="btn-group-vertical" role="group" aria-label="Grupo de botones verticales">
        <button type="button" class="btn btn-primary">Botón</button>
        <button type="button" class="btn btn-primary">Botón</button>
        <button type="button" class="btn btn-primary">Botón</button>
        <button type="button" class="btn btn-primary">Botón</button>
    </div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-5 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/button-group/vertical-variation-2.html" >}}
```html {filename="HTML"}
    <div class="btn-group-vertical" role="group" aria-label="Grupo de botones verticales">
        <button type="button" class="btn btn-primary">Botón</button>
        <button type="button" class="btn btn-primary">Botón</button>
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Desplegable
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Enlace desplegable</a></li>
                <li><a class="dropdown-item" href="#">Enlace desplegable</a></li>
            </ul>
        </div>
        <div class="btn-group dropstart" role="group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Desplegable
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Enlace desplegable</a></li>
                <li><a class="dropdown-item" href="#">Enlace desplegable</a></li>
            </ul>
        </div>
        <div class="btn-group dropend" role="group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Desplegable
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Enlace desplegable</a></li>
                <li><a class="dropdown-item" href="#">Enlace desplegable</a></li>
            </ul>
        </div>
        <div class="btn-group dropup" role="group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Desplegable
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Enlace desplegable</a></li>
                <li><a class="dropdown-item" href="#">Enlace desplegable</a></li>
            </ul>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/button-group/vertical-variation-3.html" >}}
```html {filename="HTML"}
    <div class="btn-group-vertical" role="group" aria-label="Grupo de botones de alternancia vertical">
        <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked="">
        <label class="btn btn-outline-danger" for="vbtn-radio1">Radio 1</label>
        <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
        <label class="btn btn-outline-danger" for="vbtn-radio2">Radio 2</label>
        <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off">
        <label class="btn btn-outline-danger" for="vbtn-radio3">Radio 3</label>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/bottom-banner >}}
