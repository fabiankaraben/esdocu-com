---
weight: 16
linkTitle: Offcanvas
title: El componente Offcanvas de Bootstrap · Bootstrap en Español v5.3
description: Crea barras laterales ocultas en tu proyecto para navegación, carritos de compras y más con algunas clases y nuestro complemento JavaScript.
---

# El componente Offcanvas de Bootstrap

Crea barras laterales ocultas en tu proyecto para navegación, carritos de compras y más con algunas clases y nuestro complemento JavaScript.

<TopBanner />

## Cómo funciona el componente Offcanvas {#how-it-works}

Offcanvas es un componente de la barra lateral que se puede alternar mediante JavaScript para que aparezca desde el borde izquierdo, derecho, superior o inferior del viewport. Los botones o anclajes se utilizan como activadores que se adjuntan a elementos específicos que alterna, y los atributos `data` se utilizan para invocar nuestro JavaScript.

* Offcanvas comparte parte del mismo código JavaScript que los modales. Conceptualmente son bastante similares, pero son complementos separados.
* Del mismo modo, algunas variables [fuente Sass](#sass-variables) para los estilos y dimensiones de offcanvas se heredan de las variables del modal.
* Cuando se muestra, offcanvas incluye un fondo predeterminado en el que se puede hacer clic para ocultar el offcanvas.
* Similar a los modales, solo se puede mostrar un lienzo a la vez.

**¡Atención!** Dado cómo CSS maneja las animaciones, no puedes usar `margin` o `translate` en un elemento `.offcanvas`. En su lugar, utiliza la clase como elemento envolvente independiente.

{{< callout type="info" emoji="" >}}
El efecto de animación de este componente depende de la media query `prefers-reduced-motion`. Consulta la [sección de movimiento reducido de nuestra documentación de accesibilidad](/bootstrap/comenzando/#reduced-motion).
{{< /callout >}}

## Ejemplos del componente Offcanvas {#examples}

### Componentes Offcanvas {#offcanvas-components}

A continuación se muestra un ejemplo offcanvas que se muestra de forma predeterminada (a través de `.show` en `.offcanvas`). Offcanvas incluye soporte para un encabezado con un botón de cierre y una clase de cuerpo opcional para algún `padding` inicial. Te sugerimos que incluyas encabezados offcanvas con acciones para descartar (cerrar) siempre que sea posible o proporciones una acción para descartar explícitamente.

{{< demo-iframe path="/demos/bootstrap/5.3/components/offcanvas/offcanvas-components.html" >}}
```html {filename="HTML"}
<div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        El contenido del offcanvas va aquí. Puedes colocar aquí casi cualquier componente Bootstrap o elementos personalizados.
    </div>
</div>
```
{{< /demo-iframe >}}

### Demostración en vivo {#live-demo}

Utiliza los siguientes botones para mostrar y ocultar un elemento offcanvas mediante JavaScript que alterna la clase `.show` en un elemento con la clase `.offcanvas`.

* `.offcanvas` oculta contenido (predeterminado)
* `.offcanvas.show` muestra contenido

Puedes usar un enlace con el atributo `href`, o un botón con el atributo `data-bs-target`. En ambos casos, se requiere el `data-bs-toggle="offcanvas"`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/offcanvas/live-demo.html" >}}
```html {filename="HTML"}
<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
    aria-controls="offcanvasExample">
    Enlace con href
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
    aria-controls="offcanvasExample">
    Botón con data-bs-target
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="">
            Algún texto como marcador de posición. En la vida real podrás disponer de los elementos que hayas
            elegido. Me gusta, texto, imágenes, listas, etc.
        </div>
        <div class="dropdown mt-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Botón desplegable
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Acción</a></li>
                <li><a class="dropdown-item" href="#">Otra acción</a></li>
                <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
            </ul>
        </div>
    </div>
</div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

<MiddleBannerOne />

### Desplazamiento del body {#body-scrolling}

El desplazamiento del elemento `<body>` está deshabilitado cuando un offcanvas y su fondo son visibles. Utiliza el atributo `data-bs-scroll` para habilitar el desplazamiento de `<body>`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/offcanvas/body-scrolling.html" >}}
```html {filename="HTML"}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Habilitar el desplazamiento del body</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas con desplazamiento del body</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <p>Intenta desplazarte por el resto de la página para ver esta opción en acción.</p>
    </div>
</div>
```
{{< /demo-iframe >}}

### Desplazamiento del body y fondo {#body-scrolling-and-backdrop}

También puedes habilitar el desplazamiento de `<body>` con un fondo visible.

{{< demo-iframe path="/demos/bootstrap/5.3/components/offcanvas/body-scrolling-and-backdrop.html" >}}
```html {filename="HTML"}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Habilita tanto el
    desplazamiento como el fondo
</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Fondo con desplazamiento</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <p>Intenta desplazarte por el resto de la página para ver esta opción en acción.</p>
    </div>
</div>
```
{{< /demo-iframe >}}

### Fondo estático {#static-backdrop}

Cuando el fondo está configurado como estático, el offcanvas no se cerrará al hacer clic fuera de él.

{{< demo-iframe path="/demos/bootstrap/5.3/components/offcanvas/static-backdrop.html" >}}
```html {filename="HTML"}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
    Alternar estática offcanvas
</button>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div>
            No cerraré si haces clic fuera de mí.
        </div>
    </div>
</div>
```
{{< /demo-iframe >}}

## Versión Dark del componente Offcanvas {#dark-offcanvas}

<span class="py-1 px-3 text-yellow-600 border border-yellow-600 rounded-md">Obsoleto en v5.3.0</span>
&nbsp;
<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Cambia la apariencia de los lienzos con utilidades para que coincidan mejor con diferentes contextos, como barras de navegación oscuras. Aquí agregamos `.text-bg-dark` al `.offcanvas` y `.btn-close-white` a `.btn-close` para un estilo adecuado con un lienzo oscuro. Si tienes menús desplegables, considera agregar también `.dropdown-menu-dark` a `.dropdown-menu`.

{{< callout type="warning" emoji="" >}}
¡Aviso! Las variantes oscuras para componentes quedaron obsoletas en la versión 5.3.0 con la introducción de modos de color. En lugar de agregar manualmente las clases mencionadas anteriormente, configura `data-bs-theme="dark"` en el elemento raíz, un contenedor padre o el componente mismo.
{{< /callout >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/offcanvas/dark-offcanvas.html" >}}
```html {filename="HTML"}
<div class="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkLabel">Offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvasDark" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <p>Coloca contenido offcanvas aquí.</p>
    </div>
</div>
```
{{< /demo-iframe >}}

## Comportamiento responsive del componente {#responsive}

<MiddleBannerTwo />

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Las clases responsive offcanvas ocultan el contenido fuera del viewport desde un punto de interrupción específico hacia abajo. Por encima de ese punto de interrupción, el contenido se comportará como de costumbre. Por ejemplo, `.offcanvas-lg` oculta el contenido en un offcanvas debajo del punto de interrupción `lg`, pero muestra el contenido encima del punto de interrupción `lg`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/offcanvas/responsive.html" >}}
```html {filename="HTML"}
<button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Desactivar offcanvas</button>

<div class="alert alert-info d-none d-lg-block">
    Cambia el tamaño de tu navegador para mostrar la opción de respuesta offcanvas.
</div>

<div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Offcanvas responsive</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <p class="mb-0">Este es el contenido dentro de un <code>.offcanvas-lg</code>.</p>
    </div>
</div>
```
{{< /demo-iframe >}}

Las clases responsive offcanvas están disponibles para cada punto de interrupción.

* `.offcanvas`
* `.offcanvas-sm`
* `.offcanvas-md`
* `.offcanvas-lg`
* `.offcanvas-xl`
* `.offcanvas-xxl`

## Ubicación del componente Offcanvas {#placement}

No hay una ubicación predeterminada para los componentes offcanvas, por lo que debes agregar una de las clases modificadoras a continuación.

* `.offcanvas-start` coloca offcanvas a la izquierda del viewport (como se muestra arriba)
* `.offcanvas-end` coloca offcanvas a la derecha del viewport
* `.offcanvas-top` coloca offcanvas en la parte superior del viewport
* `.offcanvas-bottom` coloca offcanvas en la parte inferior del viewport

Prueba los ejemplos superior, derecho e inferior a continuación.

{{< demo-iframe path="/demos/bootstrap/5.3/components/offcanvas/placement-1.html" >}}
```html {filename="HTML"}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Alternar offcanvas superior</button>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas superior</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        ...
    </div>
</div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/offcanvas/placement-2.html" >}}
```html {filename="HTML"}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Alternar offcanvas a la derecha</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas a la derecha</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        ...
    </div>
</div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/offcanvas/placement-3.html" >}}
```html {filename="HTML"}
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Alternar offcanvas inferior</button>

<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas inferior</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body small">
        ...
    </div>
</div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

## Accesibilidad del componente Offcanvas {#accessibility}

Dado que el panel offcanvas es conceptualmente un cuadro de diálogo modal, asegúrate de agregar `aria-labelledby="..."`, que hace referencia al título de offcanvas, a `.offcanvas`. Ten en cuenta que no necesitas agregar `role="dialog"` ya que ya lo agregamos a través de JavaScript.

<MiddleBannerThree />

## Personalización del CSS del componente {#css}

### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Como parte del enfoque de variables CSS en evolución de Bootstrap, offcanvas ahora usa variables CSS locales en `.offcanvas` para una personalización mejorada en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_offcanvas.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_offcanvas.scss)

```scss {filename="scss/_offcanvas.scss"}
--#{$prefix}offcanvas-zindex: #{$zindex-offcanvas};
--#{$prefix}offcanvas-width: #{$offcanvas-horizontal-width};
--#{$prefix}offcanvas-height: #{$offcanvas-vertical-height};
--#{$prefix}offcanvas-padding-x: #{$offcanvas-padding-x};
--#{$prefix}offcanvas-padding-y: #{$offcanvas-padding-y};
--#{$prefix}offcanvas-color: #{$offcanvas-color};
--#{$prefix}offcanvas-bg: #{$offcanvas-bg-color};
--#{$prefix}offcanvas-border-width: #{$offcanvas-border-width};
--#{$prefix}offcanvas-border-color: #{$offcanvas-border-color};
--#{$prefix}offcanvas-box-shadow: #{$offcanvas-box-shadow};
--#{$prefix}offcanvas-transition: #{transform $offcanvas-transition-duration ease-in-out};
--#{$prefix}offcanvas-title-line-height: #{$offcanvas-title-line-height};
```

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$offcanvas-padding-y:               $modal-inner-padding;
$offcanvas-padding-x:               $modal-inner-padding;
$offcanvas-horizontal-width:        400px;
$offcanvas-vertical-height:         30vh;
$offcanvas-transition-duration:     .3s;
$offcanvas-border-color:            $modal-content-border-color;
$offcanvas-border-width:            $modal-content-border-width;
$offcanvas-title-line-height:       $modal-title-line-height;
$offcanvas-bg-color:                var(--#{$prefix}body-bg);
$offcanvas-color:                   var(--#{$prefix}body-color);
$offcanvas-box-shadow:              $modal-content-box-shadow-xs;
$offcanvas-backdrop-bg:             $modal-backdrop-bg;
$offcanvas-backdrop-opacity:        $modal-backdrop-opacity;
```

## Uso del componente Offcanvas {#usage}

El complemento offcanvas utiliza algunas clases y atributos para manejar el trabajo pesado:

* `.offcanvas` oculta el contenido
* `.offcanvas.show` muestra el contenido
* `.offcanvas-start` oculta el offcanvas a la izquierda
* `.offcanvas-end` oculta el offcanvas a la derecha
* `.offcanvas-top` oculta el offcanvas en la parte superior
* `.offcanvas-bottom` oculta el offcanvas en la parte inferior

Agrega un botón para descartar (cerrar) con el atributo `data-bs-dismiss="offcanvas"`, que activa la funcionalidad de JavaScript. Asegúrate de utilizar el elemento `<button>` para lograr un comportamiento adecuado en todos los dispositivos.

### Vía atributos de datos {#via-data-attributes}

#### Alternar {#toggle}

<MiddleBannerFour />

Agrega `data-bs-toggle="offcanvas"` y un `data-bs-target` o `href` al elemento para asignar automáticamente el control de un elemento offcanvas. El atributo `data-bs-target` acepta un selector CSS al que aplicar el offcanvas. Asegúrate de agregar la clase `offcanvas` al elemento offcanvas. Si deseas que se abra de forma predeterminada, agrega la clase adicional `show`.

#### Descartar {#dismiss}

El cierre se puede lograr con el atributo `data-bs-dismiss` en un botón **dentro del offcanvas** como se muestra a continuación:

```html {filename="HTML"}
<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
```

o en un botón **offcanvas** usando el `data-bs-target` adicional como se muestra a continuación:

```html {filename="HTML"}
<button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#my-offcanvas" aria-label="Close"></button>
```

{{< callout type="warning" emoji="" >}}
Si bien se admiten ambas formas de descartar un offcanvas, ten en cuenta que descartar un offcanvas desde fuera no coincide con el [Patrón de diálogo (modal) de la Guía de prácticas de creación de ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal). Haz esto bajo tu propio riesgo.
{{< /callout >}}

### Vía JavaScript {#via-javascript}

Habilitar manualmente con:

```javascript {filename="JavaScript"}
const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))
```

### Opciones {#options}

Como las opciones se pueden pasar a través de atributos de datos o JavaScript, puedes agregar un nombre de opción a `data-bs-`, como en `data-bs-animation="{value}"`. Asegúrate de cambiar el tipo de caso del nombre de la opción de “_camelCase_” a “_kebab-case_” al pasar las opciones a través de atributos de datos. Por ejemplo, utiliza `data-bs-custom-class="beautifier"` en lugar de `data-bs-customClass="beautifier"`.

A partir de Bootstrap 5.2.0, todos los componentes admiten un atributo de datos **experimental** reservado `data-bs-config` que puede albergar datos simples de configuración del componente como una cadena JSON. Cuando un elemento tiene los atributos `data-bs-config='{"delay":0, "title":123}'` y `data-bs-title="456"`, el valor final de `title` será `456` y los atributos de datos separados sobrescribirán los valores proporcionados en `data-bs-config`. Además, los atributos de datos existentes pueden albergar valores JSON como `data-bs-delay='{"show":0,"hide":150}'`.

El objeto de configuración final es el resultado combinado de `data-bs-config`, `data-bs-` y `js object` donde el último valor-clave dado sobrescribe los demás.

| Nombre     | Tipo                         | Predeterminado | Descripción                                                                                                                                                          |
| ---------- | ---------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `backdrop` | boolean o la cadena `static` | `true`         | Aplica un fondo en el cuerpo mientras el lienzo está abierto. Alternativamente, especifica `static` para un fondo que no cierre el lienzo cuando se haga clic en él. |
| `keyboard` | boolean                      | `true`         | Cierra el lienzo cuando se presiona la tecla Escape.                                                                                                                 |
| `scroll`   | boolean                      | `false`        | Permitir el desplazamiento del cuerpo mientras el lienzo está abierto.                                                                                               |

<MiddleBannerFive />

### Métodos {#methods}

{{< callout type="error" emoji="" >}}
**Todos los métodos API son asincrónicos e inician una transición.** Regresan al punto de la llamada tan pronto como se inicia la transición, pero antes de que finalice. Además, se ignorará una llamada a un método en un componente en transición. [Obtén más información en nuestra documentación de JavaScript.](/bootstrap/comenzando/#asynchronous-functions-and-transitions)
{{< /callout >}}

Activa tu contenido como un elemento offcanvas. Acepta opciones opcionales `object`.

Puedes crear una instancia offcanvas con el constructor, por ejemplo:

```javascript {filename="JavaScript"}
const bsOffcanvas = new bootstrap.Offcanvas('#myOffcanvas')
```

| Método                | Descripción                                                                                                                                                                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getInstance`         | _Static_ método que te permite obtener la instancia offcanvas asociada con un elemento DOM.                                                                                                                                                   |
| `getOrCreateInstance` | _Static_ método que te permite obtener la instancia offcanvas asociada con un elemento DOM, o crear una nueva en caso de que no haya sido inicializada.                                                                                       |
| `hide`                | Oculta un elemento offcanvas. **Vuelve al punto de la llamada antes de que el elemento offcanvas se haya ocultado** (es decir, antes de que ocurra el evento `hidden.bs.offcanvas`).                                                          |
| `show`                | Muestra un elemento offcanvas. **Vuelve al punto de la llamada antes de que el elemento offcanvas se haya mostrado realmente** (es decir, antes de que ocurra el evento `shown.bs.offcanvas`).                                                |
| `toggle`              | Cambia un elemento offcanvas para mostrarlo u ocultarlo. **Vuelve al punto de la llamada antes de que el elemento offcanvas se haya mostrado u ocultado** (es decir, antes de el evento `shown.bs.offcanvas` o `hidden.bs.offcanvas` ocurra). |

{{< bootstrap/content-suggestion >}}

### Eventos {#events}

La clase offcanvas de Bootstrap expone algunos eventos para conectarse a la funcionalidad offcanvas.

| Tipo de evento               | Descripción                                                                                                                                                                                                                             |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hide.bs.offcanvas`          | Este evento se activa inmediatamente cuando se llama al método `hide`.                                                                                                                                                                  |
| `hidden.bs.offcanvas`        | Este evento se activa cuando un elemento offcanvas se ha ocultado al usuario (esperará a que se completen las transiciones CSS).                                                                                                        |
| `hidePrevented.bs.offcanvas` | Este evento se activa cuando se muestra el offcanvas, su fondo es `static` y se realiza un clic fuera del offcanvas. El evento también se activa cuando se presiona la tecla Escape y la opción `keyboard` está configurada en `false`. |
| `show.bs.offcanvas`          | Este evento se activa inmediatamente cuando se llama al método de instancia `show`.                                                                                                                                                     |
| `shown.bs.offcanvas`         | Este evento se activa cuando un elemento offcanvas se ha hecho visible para el usuario (esperará a que se completen las transiciones CSS).                                                                                              |

```javascript {filename="JavaScript"}
const myOffcanvas = document.getElementById('myOffcanvas')
myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
    // do something...
})
```

<BottomBanner />
