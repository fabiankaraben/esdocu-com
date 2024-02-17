---
weight: 5
linkTitle: JavaScript
title: Utilización de JavaScript en Bootstrap · Bootstrap en Español v5.3
description: Dale vida a Bootstrap con nuestros complementos de JavaScript opcionales. Obtén más información sobre cada complemento, nuestras opciones de API programática y de datos, y más.
---

# Utilización de JavaScript en Bootstrap

Dale vida a Bootstrap con nuestros complementos de JavaScript opcionales. Obtén más información sobre cada complemento, nuestras opciones de API programática y de datos, y más.

{{< content-ads/top-banner >}}

## Individual o compilado {#individual-or-compiled}

Los complementos se pueden incluir individualmente (usando el `js/dist/*.js` individual de Bootstrap), o todos a la vez usando `bootstrap.js` o el `bootstrap.min.js` minimizado (no incluyas ambos).

Si usas un paquete (Webpack, Parcel, Vite…), puedes usar archivos `/js/dist/*.js` que estén preparados para UMD.

## Uso con frameworks JavaScript {#usage-with-javascript-frameworks}

Si bien Bootstrap CSS se puede usar con cualquier framework, **Bootstrap JavaScript no es totalmente compatible con frameworks de JavaScript como React, Vue y Angular** que se suponen completos conocedores del DOM. Tanto Bootstrap como el framework pueden intentar mutar el mismo elemento DOM, lo que genera errores como menús desplegables que se atascan en la posición "open".

Una mejor alternativa para quienes usan este tipo de frameworks es usar un paquete específico del framework **en lugar de** el JavaScript Bootstrap. Estas son algunas de las opciones más populares:

* React: [React Bootstrap](https://react-bootstrap.github.io)
    {{< callout type="info" emoji="" >}}
**¡Pruébalo tú mismo!** Descarga el código fuente y la demostración funcional para usar Bootstrap con React, Next.js y React Bootstrap desde el repositorio [twbs/examples](https://github.com/twbs/examples/tree/main/react-nextjs). También puedes [abrir el ejemplo en StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/react-nextjs?file=src%2Fpages%2Findex.tsx).
    {{< /callout >}}
* Vue: [BootstrapVue](https://bootstrap-vue.org) (Bootstrap 4)
* Vue 3: [BootstrapVueNext](https://bootstrap-vue-next.github.io/bootstrap-vue-next) (Bootstrap 5 , actualmente en alfa)
* Angular: [ng-bootstrap](https://ng-bootstrap.github.io)

## Usar Bootstrap como módulo {#using-bootstrap-as-a-module}

{{< callout type="info" emoji="" >}}
**¡Pruébalo tú mismo!** Descarga el código fuente y la demostración funcional para usar Bootstrap como módulo ES desde el repositorio [twbs/examples](https://github.com/twbs/examples/tree/main/sass-js-esm). También puedes[abrir el ejemplo en StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/sass-js-esm?file=index).
{{< /callout >}}

Proporcionamos una versión de Bootstrap creada como `ESM` (`bootstrap.esm.js` y `bootstrap.esm.min.js`) que te permite utilizar Bootstrap como módulo en el navegador, si tus [navegadores utilizados lo admiten](https://caniuse.com/es6-module).

```html {filename="HTML"}
<script type="module">
    import { Toast } from 'bootstrap.esm.min.js'

    Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
</script>
```

En comparación con los paquetes JS, usar ESM en el navegador requiere que uses la ruta completa y el nombre del archivo en lugar del nombre del módulo. [Lee más sobre los módulos JS en el navegador.](https://v8.dev/features/modules#specifiers) Por eso usamos `'bootstrap.esm.min.js'` en lugar de `'bootstrap'` arriba. Sin embargo, esto se complica aún más por nuestra dependencia de Popper, que importa Popper a nuestro JavaScript de esta manera:

```javascript {filename="JavaScript"}
import * as Popper from "@popperjs/core"
```

Si intentas esto tal como está, verás un error en la consola como el siguiente:

```text {filename="Consola"}
Uncaught TypeError: Failed to resolve module specifier "@popperjs/core". Relative references must start with either "/", "./", or "../".
```    

Para solucionar este problema, puedes usar un `importmap` para resolver los nombres arbitrarios de los módulos para completar las rutas. Si tus [navegadores específicos](https://caniuse.com/?search=importmap) no admiten `importmap`, deberás utilizar el proyecto [es-module-shims](https://github.com/guybedford/es-module-shims). Así es como funciona para Bootstrap y Popper:

{{< content-ads/middle-banner-1 >}}

```html {filename="HTML"}
<!doctype html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Hello, modularity!</title>
    </head>
    <body>
    <h1>Hello, modularity!</h1>
    <button id="popoverButton" type="button" class="btn btn-primary btn-lg" data-bs-toggle="popover" title="ESM in Browser" data-bs-content="Bang!">Popover personalizado</button>

    <script async src="https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js" crossorigin="anonymous"></script>
    <script type="importmap">
    {
        "imports": {
        "@popperjs/core": "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/esm/popper.min.js",
        "bootstrap": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.esm.min.js"
        }
    }
    </script>
    <script type="module">
        import * as bootstrap from 'bootstrap'

        new bootstrap.Popover(document.getElementById('popoverButton'))
    </script>
    </body>
</html>
```    

## Dependencias {#dependencies}

Algunos complementos y componentes CSS dependen de otros complementos. Si incluyes plugins individualmente, asegúrate de comprobar en las docs si existen estas dependencias.

Nuestros menús desplegables, ventanas emergentes popovers tooltips también dependen de [Popper](https://popper.js.org).

## Atributos de datos {#data-attributes}

Casi todos los complementos de Bootstrap se pueden habilitar y configurar solo a través de HTML con atributos de datos (nuestra forma preferida de usar la funcionalidad de JavaScript). Asegúrate de **usar solo un conjunto de atributos de datos en un solo elemento** (por ejemplo, no puedes activar un tooltip y un modal desde el mismo botón).

Como las opciones se pueden pasar a través de atributos de datos o JavaScript, puedes agregar un nombre de opción a `data-bs-`, como en `data-bs-animation="{value}"`. Asegúrate de cambiar el tipo de caso del nombre de la opción de “_camelCase_” a “_kebab-case_” al pasar las opciones a través de atributos de datos. Por ejemplo, utiliza `data-bs-custom-class="beautifier"` en lugar de `data-bs-customClass="beautifier"`.

A partir de Bootstrap 5.2.0, todos los componentes admiten un atributo de datos **experimental** reservado `data-bs-config` que puede albergar datos simples de configuración del componente como una cadena JSON. Cuando un elemento tiene los atributos `data-bs-config='{"delay":0, "title":123}'` y `data-bs-title="456"`, el valor final de `title` será `456` y los atributos de datos separados sobrescribirán los valores proporcionados en `data-bs-config`. Además, los atributos de datos existentes pueden albergar valores JSON como `data-bs-delay='{"show":0,"hide":150}'`.

El objeto de configuración final es el resultado combinado de `data-bs-config`, `data-bs-` y `js object` donde el último valor-clave dado sobrescribe los demás.

{{< bootstrap/content-suggestion >}}

## Selectores {#selectors}

Usamos los métodos nativos `querySelector` y `querySelectorAll` para consultar elementos DOM por razones de rendimiento, por lo que debes usar [selectores válidos](https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier). Si utilizas selectores especiales como `collapse:Example`, asegúrate de evitarlos.

## Eventos {#events}

Bootstrap proporciona eventos personalizados para las acciones únicas de la mayoría de los complementos. Generalmente, estos vienen en forma de infinitivo y participio pasado, donde el infinitivo (ej. `show`) se activa al comienzo de un evento, y su forma de participio pasado (ej. `shown`) se activa al finalizar una acción.

Todos los eventos infinitivos proporcionan la funcionalidad [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault). Esto proporciona la capacidad de detener la ejecución de una acción antes de que comience. Devolver false desde un controlador de eventos también llamará automáticamente a `preventDefault()`.

```javascript {filename="JavaScript"}
const myModal = document.querySelector('#myModal')

myModal.addEventListener('show.bs.modal', event => {
    return event.preventDefault() // stops modal from being shown
})
```    

{{< content-ads/middle-banner-2 >}}

## API programática {#programmatic-api}

Todos los constructores aceptan un objeto de opciones opcional o nada (lo que inicia un complemento con su comportamiento predeterminado):

```javascript {filename="JavaScript"}
const myModalEl = document.querySelector('#myModal')
const modal = new bootstrap.Modal(myModalEl) // initialized with defaults

const configObject = { keyboard: false }
const modal1 = new bootstrap.Modal(myModalEl, configObject) // initialized with no keyboard
```    

Si deseas obtener una instancia de complemento en particular, cada complemento expone un método `getInstance`. Por ejemplo, para recuperar una instancia directamente de un elemento:

```javascript {filename="JavaScript"}
bootstrap.Popover.getInstance(myPopoverEl)
```

Este método devolverá `null` si no se inicia una instancia sobre el elemento solicitado.

Alternativamente, `getOrCreateInstance` se puede usar para obtener la instancia asociada con un elemento DOM, o crear una nueva en caso de que no haya sido inicializada.

```javascript {filename="JavaScript"}
bootstrap.Popover.getOrCreateInstance(myPopoverEl, configObject)
```

En caso de que una instancia no haya sido inicializada, puede aceptar y usar un objeto de configuración opcional como segundo argumento.

### Selectores CSS en constructores {#css-selectors-in-constructors}

Además de los métodos `getInstance` y `getOrCreateInstance`, todos los constructores de complementos pueden aceptar un elemento DOM o un [selector CSS](#selectors) como primer argumento. Los elementos del complemento se encuentran con el método `querySelector` ya que nuestros complementos solo admiten un único elemento.

```javascript {filename="JavaScript"}
const modal = new bootstrap.Modal('#myModal')
const dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]')
const offcanvas = bootstrap.Offcanvas.getInstance('#myOffcanvas')
const alert = bootstrap.Alert.getOrCreateInstance('#myAlert')
```    

### Funciones asincrónicas y transiciones {#asynchronous-functions-and-transitions}

Todos los métodos API programáticos son **asincrónicos** y regresan al invocador del método una vez que se inicia la transición, pero **antes de que finalice** . Para ejecutar una acción una vez completada la transición, puedes escuchar el evento correspondiente.

```javascript {filename="JavaScript"}
const myCollapseEl = document.querySelector('#myCollapse')

myCollapseEl.addEventListener('shown.bs.collapse', event => {
    // Action to execute once the collapsible area is expanded
})
```    

Además, una llamada a un método en un **componente en transición será ignorada**.

{{< content-ads/middle-banner-3 >}}

```javascript {filename="JavaScript"}
const myCarouselEl = document.querySelector('#myCarousel')
const carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance

myCarouselEl.addEventListener('slid.bs.carousel', event => {
    carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

carousel.to('1') // Will start sliding to the slide 1 and returns to the caller
carousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
```    

#### Método `dispose` {#dispose-method}

Si bien puede parecer correcto usar el método `dispose` inmediatamente después de `hide()`, conducirá a resultados incorrectos. A continuación se muestra un ejemplo del uso problemático:

```javascript {filename="JavaScript"}
const myModal = document.querySelector('#myModal')
myModal.hide() // it is asynchronous

myModal.addEventListener('shown.bs.hidden', event => {
    myModal.dispose()
})
```    

### Configuración predeterminada {#default-settings}

Puedes cambiar la configuración predeterminada de un complemento modificando el objeto `Constructor.Default` del complemento:

```javascript {filename="JavaScript"}
// changes default for the modal plugin's `keyboard` option to false
bootstrap.Modal.Default.keyboard = false 
```

{{< bootstrap/content-suggestion >}}

## Métodos y propiedades. {#methods-and-properties}

Cada complemento Bootstrap expone los siguientes métodos y propiedades estáticas.

| Método                | Descripción                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dispose`             | Destruye el modal de un elemento. (Elimina los datos almacenados en el elemento DOM)                                                                |
| `getInstance`         | _Static_ método que te permite obtener la instancia modal asociada con un elemento DOM.                                                             |
| `getOrCreateInstance` | _Static_ método que te permite obtener la instancia modal asociada con un elemento DOM, o crear una nueva en caso de que no haya sido inicializada. |

| Propiedad Static | Descripción                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `NAME`           | Devuelve el nombre del complemento. (Ejemplo: `bootstrap.Tooltip.NAME`)                                                                                                              |
| `VERSION`        | Se puede acceder a la versión de cada uno de los complementos de Bootstrap a través de la propiedad `VERSION` del constructor del complemento (Ejemplo: `bootstrap.Tooltip.VERSION`) |

## Sanear {#sanitizer}

La información sobre herramientas y las ventanas emergentes utilizan nuestro saneador incorporado para sanear las opciones que aceptan HTML.

El valor predeterminado de `allowList` es el siguiente:

[js/src/util/sanitizer.js](https://github.com/twbs/bootstrap/blob/v5.3.2/js/src/util/sanitizer.js)

{{< content-ads/middle-banner-4 >}}

```javascript {filename="js/src/util/sanitizer.js"}
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i

export const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
}
```

Si quieres agregar nuevos valores a esta `allowList` predeterminada, puedes hacer lo siguiente:

```javascript {filename="JavaScript"}
const myDefaultAllowList = bootstrap.Tooltip.Default.allowList

// To allow table elements
myDefaultAllowList.table = []

// To allow td elements and data-bs-option attributes on td elements
myDefaultAllowList.td = ['data-bs-option']

// You can push your custom regex to validate your attributes.
// Be careful about your regular expressions being too lax
const myCustomRegex = /^data-my-app-[\w-]+/
myDefaultAllowList['*'].push(myCustomRegex)
```

Si quieres omitir nuestro saneador porque prefieres usar una biblioteca dedicada, por ejemplo [DOMPurify](https://www.npmjs.com/package/dompurify), debes hacer lo siguiente:

```javascript {filename="JavaScript"}
const yourTooltipEl = document.querySelector('#yourTooltip')
const tooltip = new bootstrap.Tooltip(yourTooltipEl, {
    sanitizeFn(content) {
    return DOMPurify.sanitize(content)
    }
})
```

## Opcionalmente usando jQuery {#optionally-using-jquery}

**No necesitas jQuery en Bootstrap 5**, pero aún es posible usar nuestros componentes con jQuery. Si Bootstrap detecta `jQuery` en el objeto `window`, agregará todos nuestros componentes en el sistema de complementos de jQuery. Esto te permite hacer lo siguiente:

```javascript {filename="JavaScript"}
// to enable tooltips with the default configuration
$('[data-bs-toggle="tooltip"]').tooltip()

// to initialize tooltips with given configuration
$('[data-bs-toggle="tooltip"]').tooltip({
    boundary: 'clippingParents',
    customClass: 'myClass'
})

// to trigger the `show` method
$('#myTooltip').tooltip('show')
```

Lo mismo ocurre con nuestros otros componentes.

### No conflict {#no-conflict}

A veces es necesario usar complementos Bootstrap con otros marcos de UI. En estas circunstancias, ocasionalmente pueden ocurrir colisiones de espacios de nombres. Si esto sucede, puedes llamar a `.noConflict` en el complemento cuyo valor deseas revertir.

{{< bootstrap/content-suggestion >}}

```javascript {filename="JavaScript"}
const bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton // give $().bootstrapBtn the Bootstrap functionality
```

Bootstrap no admite oficialmente bibliotecas de JavaScript de terceros como Prototype o jQuery UI. A pesar de `.noConflict` y los eventos con espacios de nombres, es posible que haya problemas de compatibilidad que debas solucionar por tu cuenta.

### Eventos JQuery {#jquery-events}

Bootstrap detectará jQuery si `jQuery` está presente en el objeto `window` y no hay atributo `data-bs-no-jquery` establecido en `<body>`. Si se encuentra jQuery, Bootstrap emitirá eventos gracias al sistema de eventos de jQuery. Entonces, si deseas escuchar los eventos de Bootstrap, deberás usar los métodos jQuery (`.on`, `.one`) en lugar de `addEventListener`.

```javascript {filename="JavaScript"}
$('#myTab a').on('shown.bs.tab', () => {
    // do something...
})
```

## JavaScript deshabilitado {#disabled-javascript}

Los complementos de Bootstrap no tienen un respaldo especial cuando JavaScript está deshabilitado. Si te importa la experiencia del usuario en este caso, utiliza [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) para explicar la situación (y cómo volver a habilitar JavaScript) a tus usuarios y/o agregar sus propias alternativas personalizadas.

{{< content-ads/bottom-banner >}}
