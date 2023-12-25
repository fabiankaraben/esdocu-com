---
weight: 15
linkTitle: Navegación y pestañas
title: Componentes de Navs y pestañas de Bootstrap · Bootstrap en Español v5.3
description: Documentación y ejemplos sobre cómo usar los componentes de navegación incluidos en Bootstrap.
---

# Componentes de Navs y pestañas de Bootstrap

Documentación y ejemplos sobre cómo usar los componentes de navegación incluidos en Bootstrap.

{{< bootstrap/main-banner >}}

Navegación base del componente {#base-nav}
----------------------------

La navegación disponible en Bootstrap comparte marcas y estilos generales, desde la clase base `.nav` hasta los estados activo y deshabilitado. Intercambia clases de modificadores para cambiar entre cada estilo.

El componente base `.nav` está construido con flexbox y proporciona una base sólida para construir todo tipo de componentes de navegación. Incluye algunas sobrescrituras de estilo (para trabajar con listas), algo de relleno de enlaces para áreas de visita más grandes y un estilo básico deshabilitado.

{{< callout type="info" emoji="" >}}
El componente base `.nav` no incluye ningún estado `.active`. Los siguientes ejemplos incluyen la clase, principalmente para demostrar que esta clase en particular no activa ningún estilo especial.

Para transmitir el estado activo a las tecnologías de asistencia, usa el atributo `aria-current`, usando el valor `page` para la página actual o `true` para el elemento actual en un conjunto.
{{< /callout >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/base-nav-1.html" >}}
```html {filename="HTML"}
<ul class="nav">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Activo</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
    </li>
</ul>
```
{{< /demo-iframe >}}

Las clases se utilizan en todo momento, por lo que tu marcado puede ser súper flexible. Utiliza `<ul>` como arriba, `<ol>` si el orden de tus items es importante, o crea el tuyo propio con un elemento `<nav>`. Debido a que `.nav` usa `display: flex`, los enlaces de navegación se comportan igual que los elementos de navegación, pero sin el marcado adicional.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/base-nav-2.html" >}}
```html {filename="HTML"}
<nav class="nav">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
    <a class="nav-link" href="#">Enlace</a>
    <a class="nav-link" href="#">Enlace</a>
    <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
</nav>
```
{{< /demo-iframe >}}

Estilos disponibles para el componente {#available-styles}
----------------------------------------

Cambiar el estilo del componente `.nav` con modificadores y utilidades. Mezcla y combina según sea necesario o crea el tuyo propio.

### Alineación horizontal {#horizontal-alignment}

Cambia la alineación horizontal de tu navegación con [utilidades flexbox](/bootstrap/5.3/utilities/flex/#justify-content). De forma predeterminada, los navegadores están alineados a la izquierda, pero puedes cambiarlos fácilmente al centro o a la derecha.

Centrado con `.justify-content-center`:

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/horizontal-alignment-1.html" >}}
```html {filename="HTML"}
<ul class="nav justify-content-center">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Activo</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
    </li>
</ul>
```
{{< /demo-iframe >}}

Alineado a la derecha con `.justify-content-end`:

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/horizontal-alignment-2.html" >}}
```html {filename="HTML"}
<ul class="nav justify-content-end">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Activo</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
    </li>
</ul>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

### Vertical {#vertical}

Apila tu navegación cambiando la dirección del elemento flexible con la utilidad `.flex-column`. ¿Necesitas apilarlos en algunas viewports pero no en otras? Utiliza las versiones responsive (por ejemplo, `.flex-sm-column`).

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/vertical-1.html" >}}
```html {filename="HTML"}
<ul class="nav flex-column">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Activo</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
    </li>
</ul>
```
{{< /demo-iframe >}}

Como siempre, la navegación vertical también es posible sin `<ul>`s.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/vertical-2.html" >}}
```html {filename="HTML"}
<nav class="nav flex-column">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
    <a class="nav-link" href="#">Enlace</a>
    <a class="nav-link" href="#">Enlace</a>
    <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
</nav>
```
{{< /demo-iframe >}}

### Pestañas {#tabs}

Toma la navegación básica de arriba y agrega la clase `.nav-tabs` para generar una interfaz con pestañas. Utilízalos para crear regiones con pestañas con nuestro [complemento JavaScript para pestañas](#javascript-behavior).

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/tabs.html" >}}
```html {filename="HTML"}
<ul class="nav nav-tabs">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Activo</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
    </li>
</ul>
```
{{< /demo-iframe >}}

### Pastillas {#pills}

Toma el mismo HTML, pero usa `.nav-pills` en su lugar:

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/pills.html" >}}
```html {filename="HTML"}
<ul class="nav nav-pills">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Activo</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
    </li>
</ul>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

### Subrayado {#underline}

Toma el mismo HTML, pero usa `.nav-underline` en su lugar:

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/underline.html" >}}
```html {filename="HTML"}
<ul class="nav nav-underline">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Activo</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
    </li>
</ul>
```
{{< /demo-iframe >}}

### Completar y justificar {#fill-and-justify}

Fuerza el contenido de tu `.nav` a extender todo el ancho disponible con una de dos clases de modificador. Para llenar proporcionalmente todo el espacio disponible con tus `.nav-item`, utiliza `.nav-fill`. Observa que todo el espacio horizontal está ocupado, pero no todos los elementos de navegación tienen el mismo ancho.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/fill-and-justify-1.html" >}}
```html {filename="HTML"}
<ul class="nav nav-pills nav-fill">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Activo</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace de navegación mucho más largo.</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
    </li>
</ul>
```
{{< /demo-iframe >}}

Cuando usas una navegación basada en `<nav>`, puedes omitir con seguridad `.nav-item` como solo `.nav-link` para aplicar estilo a los elementos `<a>`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/fill-and-justify-2.html" >}}
```html {filename="HTML"}
<nav class="nav nav-pills nav-fill">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
    <a class="nav-link" href="#">Enlace de navegación mucho más largo.</a>
    <a class="nav-link" href="#">Enlace</a>
    <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
</nav>
```
{{< /demo-iframe >}}

Para elementos de igual ancho, usa `.nav-justified`. Todo el espacio horizontal estará ocupado por enlaces de navegación, pero a diferencia del `.nav-fill` anterior, cada elemento de navegación tendrá el mismo ancho.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/fill-and-justify-3.html" >}}
```html {filename="HTML"}
<ul class="nav nav-pills nav-justified">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Activo</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace de navegación mucho más largo.</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
    </li>
</ul>
```
{{< /demo-iframe >}}

Similar al ejemplo de `.nav-fill` usando una navegación basada en `<nav>`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/fill-and-justify-4.html" >}}
```html {filename="HTML"}
<nav class="nav nav-pills nav-justified">
    <a class="nav-link active" aria-current="page" href="#">Activo</a>
    <a class="nav-link" href="#">Enlace de navegación mucho más largo.</a>
    <a class="nav-link" href="#">Enlace</a>
    <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
</nav>
```
{{< /demo-iframe >}}

Trabajar con utilidades flexibles {#working-with-flex-utilities}
-----------------------------------------------------------------

Si necesitas variaciones de nav responsive, considera usar una serie de [utilidades flexbox](/bootstrap/5.3/utilities/flex). Si bien son más detalladas, estas utilidades ofrecen una mayor personalización en los puntos de interrupción responsive. En el siguiente ejemplo, nuestra navegación se apilará en el punto de interrupción más bajo y luego se adaptará a un diseño horizontal que llena el ancho disponible a partir del punto de interrupción pequeño.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/working-with-flex-utilities.html" >}}
```html {filename="HTML"}
<nav class="nav nav-pills flex-column flex-sm-row">
    <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Activo</a>
    <a class="flex-sm-fill text-sm-center nav-link" href="#">Enlace de nav más largo</a>
    <a class="flex-sm-fill text-sm-center nav-link" href="#">Enlace</a>
    <a class="flex-sm-fill text-sm-center nav-link disabled" aria-disabled="true">Deshabilitado</a>
</nav>
```
{{< /demo-iframe >}}

Respecto a la accesibilidad {#regarding-accessibility}
-------------------------------------------------------

Si estás usando navs para proporcionar una barra de navegación, asegúrate de agregar un `role="navigation"` al contenedor padre más lógico del `<ul>`, o envuelve un elemento `<nav>` alrededor de toda la navegación. No agregues el rol al `<ul>` en sí, ya que esto evitaría que las tecnologías de asistencia lo anuncien como una lista real.

Ten en cuenta que las barras de navegación, incluso si están diseñadas visualmente como pestañas con la clase `.nav-tabs`, **no** deben darse `role="tablist"`, `role="tab"` o `role="tabpanel"`. Estos solo son apropiados para interfaces dinámicas con pestañas, como se describe en el [patrón de pestañas de la Guía de prácticas de creación de ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel). Consulta [comportamiento de JavaScript](#javascript-behavior) para interfaces dinámicas con pestañas en esta sección para ver un ejemplo. El atributo `aria-current` no es necesario en interfaces dinámicas con pestañas ya que nuestro JavaScript maneja el estado seleccionado agregando `aria-selected="true"` en la pestaña activa.

{{< bootstrap/content-suggestion >}}

Usar menús desplegables {#using-dropdowns}
-------------------------------------------

Agrega menús desplegables con un poco más de HTML y el [complemento JavaScript desplegable](/bootstrap/5.3/components/dropdowns/#usage).

### Pestañas con menús desplegables {#tabs-with-dropdowns}

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/tabs-with-dropdowns.html" >}}
```html {filename="HTML"}
<ul class="nav nav-tabs">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Activo</a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
            aria-expanded="false">Desplegable</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Enlace separado</a></li>
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
    </li>
</ul>
```
{{< /demo-iframe >}}

### Pastillas con menús desplegables {#pills-with-dropdowns}

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/pills-with-dropdowns.html" >}}
```html {filename="HTML"}
<ul class="nav nav-pills">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Activo</a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
            aria-expanded="false">Desplegable</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Enlace separado</a></li>
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Enlace</a>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
    </li>
</ul>
```
{{< /demo-iframe >}}

Personalización del CSS del componente {#css}
-----------

### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Como parte del enfoque de evolución de variables CSS de Bootstrap, los navegadores ahora usan variables CSS locales en `.nav`, `.nav-tabs`, y `.nav-pills` para una personalización mejorada en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

En la clase base `.nav`:

[scss/_nav.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_nav.scss)

```scss {filename="scss/_nav.scss"}
--#{$prefix}nav-link-padding-x: #{$nav-link-padding-x};
--#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};
@include rfs($nav-link-font-size, --#{$prefix}nav-link-font-size);
--#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};
--#{$prefix}nav-link-color: #{$nav-link-color};
--#{$prefix}nav-link-hover-color: #{$nav-link-hover-color};
--#{$prefix}nav-link-disabled-color: #{$nav-link-disabled-color};
```

En la clase modificadora `.nav-tabs`:

[scss/_nav.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_nav.scss)

```scss {filename="scss/_nav.scss"}
--#{$prefix}nav-tabs-border-width: #{$nav-tabs-border-width};
--#{$prefix}nav-tabs-border-color: #{$nav-tabs-border-color};
--#{$prefix}nav-tabs-border-radius: #{$nav-tabs-border-radius};
--#{$prefix}nav-tabs-link-hover-border-color: #{$nav-tabs-link-hover-border-color};
--#{$prefix}nav-tabs-link-active-color: #{$nav-tabs-link-active-color};
--#{$prefix}nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg};
--#{$prefix}nav-tabs-link-active-border-color: #{$nav-tabs-link-active-border-color};
```

En la clase modificadora `.nav-pills`:

[scss/_nav.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_nav.scss)

```scss {filename="scss/_nav.scss"}
--#{$prefix}nav-pills-border-radius: #{$nav-pills-border-radius};
--#{$prefix}nav-pills-link-active-color: #{$nav-pills-link-active-color};
--#{$prefix}nav-pills-link-active-bg: #{$nav-pills-link-active-bg};
```

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.3.0</span>

En la clase modificadora `.nav-underline`:

[scss/_nav.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_nav.scss)

```scss {filename="scss/_nav.scss"}
--#{$prefix}nav-underline-gap: #{$nav-underline-gap};
--#{$prefix}nav-underline-border-width: #{$nav-underline-border-width};
--#{$prefix}nav-underline-link-active-color: #{$nav-underline-link-active-color};
```

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$nav-link-padding-y:                .5rem;
$nav-link-padding-x:                1rem;
$nav-link-font-size:                null;
$nav-link-font-weight:              null;
$nav-link-color:                    var(--#{$prefix}link-color);
$nav-link-hover-color:              var(--#{$prefix}link-hover-color);
$nav-link-transition:               color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;
$nav-link-disabled-color:           var(--#{$prefix}secondary-color);
$nav-link-focus-box-shadow:         $focus-ring-box-shadow;

$nav-tabs-border-color:             var(--#{$prefix}border-color);
$nav-tabs-border-width:             var(--#{$prefix}border-width);
$nav-tabs-border-radius:            var(--#{$prefix}border-radius);
$nav-tabs-link-hover-border-color:  var(--#{$prefix}secondary-bg) var(--#{$prefix}secondary-bg) $nav-tabs-border-color;
$nav-tabs-link-active-color:        var(--#{$prefix}emphasis-color);
$nav-tabs-link-active-bg:           var(--#{$prefix}body-bg);
$nav-tabs-link-active-border-color: var(--#{$prefix}border-color) var(--#{$prefix}border-color) $nav-tabs-link-active-bg;

$nav-pills-border-radius:           var(--#{$prefix}border-radius);
$nav-pills-link-active-color:       $component-active-color;
$nav-pills-link-active-bg:          $component-active-bg;

$nav-underline-gap:                 1rem;
$nav-underline-border-width:        .125rem;
$nav-underline-link-active-color:   var(--#{$prefix}emphasis-color);
```

Comportamiento JavaScript del componente {#javascript-behavior}
-------------------------------------------------------------------------------------

Utiliza el complemento JavaScript de pestañas (inclúyelo individualmente o mediante el archivo `bootstrap.js` compilado) para ampliar nuestras pestañas y píldoras de navegación para crear paneles con pestañas de paneles con contenido local.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/javascript-behavior-1.html" >}}
```html {filename="HTML"}
<ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
    </li>
    <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
    </li>
    <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
    </li>
    <li class="nav-item" role="presentation">
    <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
    </li>
</ul>
<div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
</div>
```
{{< /demo-iframe >}}

Para ayudarte a satisfacer tus necesidades, esto funciona con el marcado basado en `<ul>`, como se muestra arriba, o con cualquier marcado arbitrario "roll your own". Ten en cuenta que si estás utilizando `<nav>`, no debes agregarle `role="tablist"` directamente, ya que esto sobrescribiría la función nativa del elemento como hito de navegación. En su lugar, cambia a un elemento alternativo (en el ejemplo siguiente, un `<div>` simple) y envuélvelo con `<nav>`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/javascript-behavior-2.html" >}}
```html {filename="HTML"}
<nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
    </div>
</nav>
<div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
</div>
```
{{< /demo-iframe >}}

El complemento de pestañas también funciona con pastillas.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/javascript-behavior-3.html" >}}
```html {filename="HTML"}
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
    </li>
    <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
    </li>
    <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
    </li>
    <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
    </li>
</ul>
<div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
</div>
```
{{< /demo-iframe >}}

Y con pastillas verticales. Idealmente, para pestañas verticales, también deberías agregar `aria-orientation="vertical"` al contenedor de la lista de pestañas.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navs-tabs/javascript-behavior-4.html" >}}
```html {filename="HTML"}
<div class="d-flex align-items-start">
    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
    </div>
    <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
    </div>
</div>
```
{{< /demo-iframe >}}

### Accesibilidad {#accessibility}

Interfaces dinámicas con pestañas, como se describe en las [Prácticas de Creación de Patrón de pestañas de ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel), requiere `role="tablist"`, `role="tab"`, `role="tabpanel"` y adicionales atributos `aria-` para transmitir su estructura, funcionalidad y estado actual a los usuarios de tecnologías de asistencia (como lectores de pantalla). Como práctica recomendada, recomendamos utilizar elementos `<button>` para las pestañas, ya que son controles que desencadenan un cambio dinámico, en lugar de enlaces que navegan a una nueva página o ubicación.

De acuerdo con el patrón ARIA Authoring Practices, solo la pestaña actualmente activa recibe el foco del teclado. Cuando se inicializa el complemento JavaScript, establecerá `tabindex="-1"` en todos los controles de pestañas inactivas. Una vez que la pestaña actualmente activa tiene el foco, las teclas del cursor activan la pestaña anterior/siguiente. Las teclas Inicio y Fin activan la primera y la última pestaña, respectivamente. El complemento cambiará el [roving `tabindex`](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface) en consecuencia. Sin embargo, ten en cuenta que el complemento JavaScript no distingue entre listas de pestañas horizontales y verticales cuando se trata de interacciones con las teclas del cursor: independientemente de la orientación de la lista de pestañas, tanto el cursor arriba _como_ izquierdo van a la pestaña anterior y abajo _y_ el cursor derecho va a la siguiente pestaña.

{{< callout type="warning" emoji="" >}}
En general, para facilitar la navegación con el teclado, se recomienda hacer que los paneles de pestañas también sean enfocables, a menos que el primer elemento que contenga contenido significativo dentro del panel de pestañas ya sea enfocable. El complemento de JavaScript no intenta manejar este aspecto; cuando corresponda, deberás hacer que tus paneles de pestañas sean enfocables explícitamente agregando `tabindex="0"` en tu marcado.
{{< /callout >}}

{{< callout type="error" emoji="️" >}}
El complemento JavaScript con pestañas **no** admite interfaces con pestañas que contengan menús desplegables, ya que causan problemas de usabilidad y accesibilidad. Desde una perspectiva de usabilidad, el hecho de que el elemento desencadenante de la pestaña que se muestra actualmente no sea visible inmediatamente (ya que está dentro del menú desplegable cerrado) puede causar confusión. Desde el punto de vista de la accesibilidad, actualmente no existe una forma sensata de asignar este tipo de construcción a un patrón WAI ARIA estándar, lo que significa que no puede hacerse comprensible fácilmente para los usuarios de tecnologías de asistencia.
{{< /callout >}}

### Usar atributos de datos {#using-data-attributes}

Puedes activar una pestaña o píldora de navegación sin escribir ningún JavaScript simplemente especificando `data-bs-toggle="tab"` o `data-bs-toggle="pill"` en un elemento. Utiliza estos atributos de datos en `.nav-tabs` o `.nav-pills`.

```html {filename="HTML"}
<!-- Nav tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
    </li>
    <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
    </li>
    <li class="nav-item" role="presentation">
    <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
    </li>
    <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
    </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
    <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
    <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
    <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
    <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
</div>
```

### Vía JavaScript {#via-javascript}

Habilita las pestañas a través de JavaScript (cada pestaña debe activarse individualmente):

```javascript {filename="JavaScript"}
const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
    })
})
```

Puedes activar pestañas individuales de varias maneras:

```javascript {filename="JavaScript"}
const triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

const triggerFirstTabEl = document.querySelector('#myTab li:first-child button')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab
```

{{< bootstrap/content-suggestion >}}

### Efecto desvanecimiento {#fade-effect}

Para hacer que las pestañas aparezcan gradualmente, agrega `.fade` a cada `.tab-pane`. El primer panel de pestañas también debe tener `.show` para que el contenido inicial sea visible.

```html {filename="HTML"}
<div class="tab-content">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
</div>
```

### Métodos {#methods}

{{< callout type="error" emoji="️" >}}
**Todos los métodos API son asincrónicos e inician una transición.** Regresan al punto de la llamada tan pronto como se inicia la transición, pero antes de que finalice. Además, se ignorará una llamada a un método en un componente en transición. [Obtén más información en nuestra documentación de JavaScript.](/bootstrap/5.3/getting-started/javascript/#asynchronous-functions-and-transitions)
{{< /callout >}}

Activa tu contenido como elemento de pestaña.

Puedes crear una instancia de pestaña con el constructor, por ejemplo:

```javascript {filename="JavaScript"}
const bsTab = new bootstrap.Tab('#myTab')
```

| Método                | Descripción                                                                                                                                                                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dispose`             | Destruye la pestaña de un elemento.                                                                                                                                                                                                                                                                                                         |
| `getInstance`         | Método estático que te permite obtener la instancia de pestaña asociada con un elemento DOM, puedes usarlo así: `bootstrap.Tab.getInstance(element)`.                                                                                                                                                                                       |
| `getOrCreateInstance` | Método estático que devuelve una instancia de pestaña asociada a un elemento DOM o crea una nueva en caso de que no haya sido inicializada. Puedes usarlo así: `bootstrap.Tab.getOrCreateInstance(element)`.                                                                                                                                |
| `show`                | Selecciona la pestaña dada y muestra su panel asociado. Cualquier otra pestaña que se haya seleccionado previamente deja de estar seleccionada y su panel asociado se oculta. **Vuelve a la persona que llama antes de que se haya mostrado realmente el panel de pestañas** (es decir, antes de que se produzca el evento `shown.bs.tab`). |

### Eventos {#events}

Cuando se muestra una nueva pestaña, los eventos se activan en el siguiente orden:

1.  `hide.bs.tab` (en la pestaña activa actual)
2.  `show.bs.tab` (en la pestaña para mostrar)
3.  `hidden.bs.tab` (en la pestaña activa anterior, la misma que para el evento `hide.bs.tab`)
4.  `shown.bs.tab` (en la pestaña recién mostrada recién activa, la misma que para el evento `show.bs.tab`)

Si ninguna pestaña ya estaba activa, entonces los eventos `hide.bs.tab` y `hidden.bs.tab` no se activarán.

| Tipo de evento  | Descripción                                                                                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `hide.bs.tab`   | Este evento se activa cuando se va a mostrar una nueva pestaña (y, por lo tanto, la pestaña activa anterior se va a ocultar). Utiliza `event.target` y `event.relatedTarget` para apuntar a la pestaña activa actual y a la nueva pestaña que pronto estará activa, respectivamente. |
| `hidden.bs.tab` | Este evento se activa después de que se muestra una nueva pestaña (y, por lo tanto, la pestaña activa anterior está oculta). Utiliza `event.target` y `event.relatedTarget` para apuntar a la pestaña activa anterior y a la nueva pestaña activa, respectivamente.                  |
| `show.bs.tab`   | Este evento se activa al mostrar la pestaña, pero antes de que se muestre la nueva pestaña. Utiliza `event.target` y `event.relatedTarget` para apuntar a la pestaña activa y a la pestaña activa anterior (si está disponible) respectivamente.                                     |
| `shown.bs.tab`  | Este evento se activa al mostrar una pestaña después de que se haya mostrado una pestaña. Utiliza `event.target` y `event.relatedTarget` para apuntar a la pestaña activa y a la pestaña activa anterior (si está disponible) respectivamente.                                       |

```javascript {filename="JavaScript"}
const tabEl = document.querySelector('button[data-bs-toggle="tab"]')
tabEl.addEventListener('shown.bs.tab', event => {
    event.target // newly activated tab
    event.relatedTarget // previous active tab
})
```

{{< bootstrap/content-suggestion >}}
