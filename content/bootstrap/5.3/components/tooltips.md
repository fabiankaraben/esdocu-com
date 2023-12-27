---
weight: 24
linkTitle: Tooltips
title: El componente Tooltip de Bootstrap · Bootstrap en Español v5.3
description: Documentación y ejemplos para agregar tooltips Bootstrap personalizados con CSS y JavaScript usando CSS3 para animaciones y atributos de datos para el almacenamiento de títulos local.
next: /bootstrap/5.3/helpers/clearfix
---

# El componente Tooltip de Bootstrap

Documentación y ejemplos para agregar tooltips Bootstrap personalizados con CSS y JavaScript usando CSS3 para animaciones y atributos de datos para el almacenamiento de títulos local.

{{< content-ads/top-banner >}}

Cosas que debes saber al usar el complemento de tooltips:

* Los tooltips se basan en la biblioteca de terceros [Popper](https://popper.js.org) para su posicionamiento. Debes incluir [popper.min.js](https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js) antes de `bootstrap.js`, o utiliza un `bootstrap.bundle.min.js` que contenga Popper.
* Los tooltips son opcionales por motivos de rendimiento, por lo que **debes inicializarlos tú mismo**.
* Los tooltips con títulos de longitud cero nunca se muestran.
* Especifica `container: 'body'` para evitar problemas de renderizado en componentes más complejos (como nuestros grupos de entrada, grupos de botones, etc.).
* Activar tooltips en elementos ocultos no funcionará.
* Los tooltips para los elementos `.disabled` o `disabled` deben activarse en un elemento contenedor.
* Cuando se activan desde hipervínculos que abarcan varias líneas, los tooltips se centrarán. Utiliza `white-space: nowrap;` en tus `<a>`s para evitar este comportamiento.
* Los tooltips deben ocultarse antes de que sus elementos correspondientes se eliminen del DOM.
* Los tooltips se pueden activar gracias a un elemento dentro de un DOM oculto.

¿Tienes todo eso? Genial, veamos cómo funcionan con algunos ejemplos.

{{< callout type="info" emoji="" >}}
De forma predeterminada, este componente utiliza el desinfectante de contenido integrado, que elimina cualquier elemento HTML que no esté permitido explícitamente. Consulta la [sección de desinfectante en nuestra documentación de JavaScript](/bootstrap/5.3/getting-started/javascript/#sanitizer) para obtener más detalles.
{{< /callout >}}

{{< callout type="info" emoji="" >}}
El efecto de animación de este componente depende de la media query `prefers-reduced-motion`. Consulta la [sección de movimiento reducido de nuestra documentación de accesibilidad](/bootstrap/5.3/getting-started/accessibility/#reduced-motion).
{{< /callout >}}

Ejemplos del componente Tooltip {#examples}
---------------------

### Habilitar tooltips {#enable-tooltips}

Como se mencionó anteriormente, debes inicializar los tooltips antes de poder usarlos. Una forma de inicializar todos los tooltips en una página sería seleccionarlos por su atributo `data-bs-toggle`, así:

```javascript {filename="JavaScript"}
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
```

{{< bootstrap/content-suggestion >}}

### Tooltips en enlaces {#tooltips-on-links}

{{< content-ads/middle-banner-1 >}}

Coloca el cursor sobre los enlaces a continuación para ver tooltips:

{{< demo-iframe path="/demos/bootstrap/5.3/components/tooltips/tooltips-on-links.html" >}}
```html {filename="HTML"}
<p class="muted">
    Texto de marcador de posición para demostrar algunos <a href="#" data-bs-toggle="tooltip"
        data-bs-title="Default tooltip">enlaces en línea</a> con tooltips. Esto ahora es sólo un relleno. El
    contenido colocado aquí solo para imitar la presencia de <a href="#" data-bs-toggle="tooltip"
        data-bs-title="Another tooltip">texto real</a>. Y todo eso sólo para darle una idea de cómo se vería la
    tooltips cuando se usa en situaciones del mundo real. Esperamos que ahora hayas visto cómo <a href="#"
        data-bs-toggle="tooltip" data-bs-title="Another one here too">estas sugerencias sobre enlaces</a> pueden
    funcionar en la práctica una vez que los utilices en <a href="#" data-bs-toggle="tooltip"
        data-bs-title="The last tip!">tu propio</a> sitio o proyecto.
</p>
```
{{< /demo-iframe >}}

{{< callout type="warning" emoji="" >}}
Siéntete libre de utilizar `title` o `data-bs-title` en tu HTML. Cuando se usa `title`, Popper lo reemplazará automáticamente con `data-bs-title` cuando se renderice el elemento.
{{< /callout >}}

### Tooltips personalizado {#custom-tooltips}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Puedes personalizar la apariencia de los tooltips usando [variables CSS](#variables). Configuramos una clase personalizada con `data-bs-custom-class="custom-tooltip"` para definir el alcance de nuestra apariencia personalizada y usarla para sobrescribir una variable CSS local.

[site/assets/scss/_component-examples.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/site/assets/scss/_component-examples.scss)

```scss {filename="site/assets/scss/_component-examples.scss"}
.custom-tooltip {
    --bs-tooltip-bg: var(--bd-violet-bg);
    --bs-tooltip-color: var(--bs-white);
}
```

{{< demo-iframe path="/demos/bootstrap/5.3/components/tooltips/custom-tooltips.html" >}}
```html {filename="HTML"}
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top"
    data-bs-custom-class="custom-tooltip" data-bs-title="This top tooltip is themed via CSS variables.">
    Tooltips personalizados
</button>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

### Direcciones {#directions}

{{< content-ads/middle-banner-2 >}}

Coloca el cursor sobre los botones a continuación para ver las cuatro direcciones de tooltips: arriba, derecha, abajo e izquierda. Las instrucciones se reflejan cuando se usa Bootstrap en RTL.

{{< demo-iframe path="/demos/bootstrap/5.3/components/tooltips/directions-1.html" >}}
```html {filename="HTML"}
<div class="bd-example-tooltips">
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-title="Tooltip on top">Tooltip superior</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right"
        data-bs-title="Tooltip on right">Tooltips a la derecha</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom"
        data-bs-title="Tooltip on bottom">Tooltip inferior</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left"
        data-bs-title="Tooltip on left">Tooltips a la izquierda</button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true"
        data-bs-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltips con HTML</button>
</div>
```
{{< /demo-iframe >}}

Y con HTML personalizado agregado:

```html {filename="HTML"}
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
    Tooltip with HTML
</button>
```

Con un SVG:

{{< demo-iframe path="/demos/bootstrap/5.3/components/tooltips/directions-2.html" >}}
```html {filename="HTML"}
<a href="#" class="d-inline-block" data-bs-toggle="tooltip" data-bs-title="Default tooltip">
    <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#563d7c"></rect>
        <circle cx="50" cy="50" r="30" fill="#007bff"></circle>
    </svg>
</a>
```
{{< /demo-iframe >}}

Personalización del CSS del componente {#css}
-----------

{{< bootstrap/content-suggestion >}}

### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

{{< content-ads/middle-banner-3 >}}

Como parte del enfoque de variables CSS en evolución de Bootstrap, los tooltips ahora usan variables CSS locales en `.tooltip` para mejorar la personalización en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_tooltip.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_tooltip.scss)

```scss {filename="scss/_tooltip.scss"}
--#{$prefix}tooltip-zindex: #{$zindex-tooltip};
--#{$prefix}tooltip-max-width: #{$tooltip-max-width};
--#{$prefix}tooltip-padding-x: #{$tooltip-padding-x};
--#{$prefix}tooltip-padding-y: #{$tooltip-padding-y};
--#{$prefix}tooltip-margin: #{$tooltip-margin};
@include rfs($tooltip-font-size, --#{$prefix}tooltip-font-size);
--#{$prefix}tooltip-color: #{$tooltip-color};
--#{$prefix}tooltip-bg: #{$tooltip-bg};
--#{$prefix}tooltip-border-radius: #{$tooltip-border-radius};
--#{$prefix}tooltip-opacity: #{$tooltip-opacity};
--#{$prefix}tooltip-arrow-width: #{$tooltip-arrow-width};
--#{$prefix}tooltip-arrow-height: #{$tooltip-arrow-height};
```

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$tooltip-font-size:                 $font-size-sm;
$tooltip-max-width:                 200px;
$tooltip-color:                     var(--#{$prefix}body-bg);
$tooltip-bg:                        var(--#{$prefix}emphasis-color);
$tooltip-border-radius:             var(--#{$prefix}border-radius);
$tooltip-opacity:                   .9;
$tooltip-padding-y:                 $spacer * .25;
$tooltip-padding-x:                 $spacer * .5;
$tooltip-margin:                    null; // TODO: remove this in v6

$tooltip-arrow-width:               .8rem;
$tooltip-arrow-height:              .4rem;
// fusv-disable
$tooltip-arrow-color:               null; // Deprecated in Bootstrap 5.2.0 for CSS variables
// fusv-enable
```

Uso del componente Tooltip {#usage}
-------------

El complemento de tooltips genera contenido y marcado a pedido y, de forma predeterminada, coloca tooltips después de su elemento desencadenante. Activa el tooltips a través de JavaScript:

```javascript {filename="JavaScript"}
const exampleEl = document.getElementById('example')
const tooltip = new bootstrap.Tooltip(exampleEl, options)
```

{{< content-ads/middle-banner-4 >}}

{{< callout type="warning" emoji="" >}}
Los tooltips intentan cambiar automáticamente las posiciones cuando un contenedor principal tiene `overflow: auto` o `overflow: scroll`, pero aún conservan el posicionamiento original. Establece [`boundary` (opción)](https://popper.js.org/docs/v2/modifiers/flip/#boundary) (para el modificador de inversión usando la opción `popperConfig`) a cualquier HTMLElement para sobrescribir el valor predeterminado, `'clippingParents'`, como `document.body`:

```javascript {filename="JavaScript"}
const tooltip = new bootstrap.Tooltip('#example', {
    boundary: document.body // or document.querySelector('#boundary')
})
```
{{< /callout >}}

### Markup {#markup}

El marcado requerido para un tooltips es solo un atributo `data` y un `title` en el elemento HTML que deseas tener como tooltips. El marcado generado de un tooltips es bastante simple, aunque requiere una posición (de forma predeterminada, el complemento la establece en `top`).

{{< callout type="warning" emoji="" >}}
**Mantén los tooltips accesibles para los usuarios de teclados y tecnologías de asistencia** agregándolos únicamente a elementos HTML que tradicionalmente son interactivos y enfocables mediante el teclado (como enlaces o controles de formulario). Si bien se pueden enfocar otros elementos HTML agregando `tabindex="0"`, esto puede crear tabulaciones molestas y confusas en elementos no interactivos para los usuarios del teclado, y la mayoría de las tecnologías de asistencia actualmente no anuncian tooltips en esta situación. Además, no confíes únicamente en `hover` como activador de tooltips, ya que esto hará que sea imposible activarlo para los usuarios del teclado.
{{< /callout >}}

```html {filename="HTML"}
<!-- HTML to write -->
<a href="#" data-bs-toggle="tooltip" data-bs-title="Some tooltip text!">Hover over me</a>

<!-- Generated markup by the plugin -->
<div class="tooltip bs-tooltip-auto" role="tooltip">
    <div class="tooltip-arrow"></div>
    <div class="tooltip-inner">
    Some tooltip text!
    </div>
</div>
```

### Elementos deshabilitados {#disabled-elements}

Los elementos con el atributo `disabled` no son interactivos, lo que significa que los usuarios no pueden enfocarse, pasar el cursor o hacer clic en ellos para activar una tooltips (o ventana emergente). Como solución alternativa, querrás activar los tooltips desde un contenedor `<div>` o `<span>`, idealmente considerando al teclado usando `tabindex="0"`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/tooltips/disabled-elements.html" >}}
```html {filename="HTML"}
<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" data-bs-title="Disabled tooltip">
    <button class="btn btn-primary" type="button" disabled="">Botón deshabilitado</button>
</span>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

### Opciones {#options}

{{< content-ads/middle-banner-5 >}}

Como las opciones se pueden pasar a través de atributos de datos o JavaScript, puedes agregar un nombre de opción a `data-bs-`, como en `data-bs-animation="{value}"`. Asegúrate de cambiar el tipo de caso del nombre de la opción de “_camelCase_” a “_kebab-case_” al pasar las opciones a través de atributos de datos. Por ejemplo, utiliza `data-bs-custom-class="beautifier"` en lugar de `data-bs-customClass="beautifier"`.

A partir de Bootstrap 5.2.0, todos los componentes admiten un atributo de datos **experimental** reservado `data-bs-config` que puede albergar datos simples de configuración del componente como una cadena JSON. Cuando un elemento tiene los atributos `data-bs-config='{"delay":0, "title":123}'` y `data-bs-title="456"`, el valor final de `title` será `456` y los atributos de datos separados sobrescribirán los valores proporcionados en `data-bs-config`. Además, los atributos de datos existentes pueden albergar valores JSON como `data-bs-delay='{"show":0,"hide":150}'`.

El objeto de configuración final es el resultado combinado de `data-bs-config`, `data-bs-` y `js object` donde el último valor-clave dado sobrescribe los demás.

{{< callout type="warning" emoji="" >}}
Ten en cuenta que, por motivos de seguridad, las opciones `sanitize`, `sanitizeFn` y `allowList` no se pueden proporcionar mediante atributos de datos.
{{< /callout >}}

| Nombre               | Tipo                      | Predeterminado                                                                                                   | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowList`          | object                    | [Valor predeterminado](/bootstrap/5.3/getting-started/javascript/#sanitizer)                                     | Objeto que contiene atributos y etiquetas permitidos.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `animation`          | boolean                   | `true`                                                                                                           | Aplica una transición de desvanecimiento CSS a tooltips.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `boundary`           | string, element           | `'clippingParents'`                                                                                              | Límite de restricción de desbordamiento de tooltips (se aplica solo al modificador preventOverflow de Popper). De forma predeterminada, es `'clippingParents'` y puede aceptar una referencia HTMLElement (solo a través de JavaScript). Para obtener más información, consulta la [documentación de detectOverflow](https://popper.js.org/docs/v2/utils/detect-overflow/#boundary) de Popper.                                                                                                                                                                                                                                                                                                                                                                                           |
| `container`          | string, element, false    | `false`                                                                                                          | Agrega tooltips a un elemento específico. Ejemplo: `container: 'body'`. Esta opción es particularmente útil porque te permite colocar tooltips en el flujo del documento cerca del elemento desencadenante, lo que evitará que los tooltips se alejen del elemento desencadenante durante el cambio de tamaño de la ventana.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `customClass`        | string, function          | `''`                                                                                                             | Agrega clases a tooltips cuando se muestran. Ten en cuenta que estas clases se agregarán además de cualquier clase especificada en la plantilla. Para agregar varias clases, sepárelas con espacios: `'class-1 class-2'`. También puedes pasar una función que debería devolver una única cadena que contenga nombres de clases adicionales.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `delay`              | number, object            | `0`                                                                                                              | Tiempo de retraso en mostrar y ocultar la tooltips (ms): no se aplica al tipo de disparador manual. Si se proporciona un número, se aplica un retraso tanto para ocultar como para mostrar. La estructura del objeto es: `delay: { "show": 500, "hide": 100 }`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `fallbackPlacements` | array                     | `['top', 'right', 'bottom', 'left']`                                                                             | Define ubicaciones alternativas proporcionando una lista de ubicaciones en una matriz (en orden de preferencia). Para obtener más información, consulta la [documentación de comportamiento](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) de Popper.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `html`               | boolean                   | `false`                                                                                                          | Permitir HTML en tooltips. Si es true, las etiquetas HTML en el `title` de los tooltips se representarán en el tooltips. Si es false, la propiedad `innerText` se utilizará para insertar contenido en el DOM. Utiliza texto si te preocupan los ataques XSS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `offset`             | array, string, function   | `[0, 0]`                                                                                                         | Desplazamiento de tooltips en relación con su objetivo. Puedes pasar una cadena en atributos de datos con valores separados por comas como: `data-bs-offset="10,20"`. Cuando se usa una función para determinar el desplazamiento, se llama con un objeto que contiene la ubicación del popper, la referencia y los rectificadores del popper como primer argumento. El nodo DOM del elemento desencadenante se pasa como segundo argumento. La función debe devolver una matriz con dos números: [skidding](https://popper.js.org/docs/v2/modifiers/offset/#skidding-1), [distance](https://popper.js.org/docs/v2/modifiers/offset/#distance-1). Para obtener más información, consult la [documentación de offset](https://popper.js.org/docs/v2/modifiers/offset/#options) de Popper. |
| `placement`          | string, function          | `'top'`                                                                                                          | Cómo posicionar tooltips: auto, top, bottom, left, right. Cuando se especifica `auto` , reorientará dinámicamente el tooltips. Cuando se utiliza una función para determinar la ubicación, se llama con el nodo DOM de tooltips como primer argumento y el nodo DOM del elemento desencadenante como segundo. El contexto `this` se establece en la instancia de tooltips.                                                                                                                                                                                                                                                                                                                                                                                                               |
| `popperConfig`       | null, object, function    | `null`                                                                                                           | Para cambiar la configuración predeterminada de Popper de Bootstrap, consulta [Configuración de Popper](https://popper.js.org/docs/v2/constructors/#options). Cuando se usa una función para crear la configuración de Popper, se llama con un objeto que contiene la configuración de Popper predeterminada de Bootstrap. Te ayuda a utilizar y fusionar el valor predeterminado con tu propia configuración. La función debe devolver un objeto de configuración para Popper.                                                                                                                                                                                                                                                                                                          |
| `sanitize`           | boolean                   | `true`                                                                                                           | Activa o desactiva la desinfección. Si se activan las opciones `'template'`, `'content'` y `'title'` se desinfectarán.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `sanitizeFn`         | null, function            | `null`                                                                                                           | Aquí puedes proporcionar tu propia función de desinfección. Esto puede resultar útil si prefieres utilizar una biblioteca dedicada para realizar la desinfección.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `selector`           | string, false             | `false`                                                                                                          | Si se proporciona un selector, los objetos de tooltips se delegarán a los objetivos especificados. En la práctica, esto también se utiliza para aplicar tooltips a elementos DOM agregados dinámicamente (compatible con `jQuery.on`). Consulta [este problema](https://github.com/twbs/bootstrap/issues/4215) y [un ejemplo informativo](https://codepen.io/Johann-S/pen/djJYPb). **Nota**: el atributo `title` no debe usarse como selector.                                                                                                                                                                                                                                                                                                                                           |
| `template`           | string                    | `'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'` | HTML base para usar al crear tooltips. El `title` de tooltips se inyectará en `.tooltip-inner`. `.tooltip-arrow` se convertirá en la flecha del tooltips. El elemento contenedor más externo debe tener la clase `.tooltip` y `role="tooltip"`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `title`              | string, element, function | `''`                                                                                                             | El título del tooltips. Si se proporciona una función, se llamará con su referencia `this` establecida en el elemento al que está adjunto el popover.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `trigger`            | string                    | `'hover focus'`                                                                                                  | Cómo se activa el tooltips: click, hover, focus, manual. Puedes pasar varios factores desencadenantes; sepáralos con un espacio. `'manual'` indica que el tooltips se activará mediante programación mediante los métodos `.tooltip('show')`, `.tooltip('hide')` y `.tooltip('toggle')`; este valor no se puede combinar con ningún otro activador. `'hover'` por sí solo generará tooltips que no se puede activar a través del teclado y solo debe usarse si existen métodos alternativos para transmitir la misma información a los usuarios del teclado.                                                                                                                                                                                                                             |

{{< callout type="info" emoji="" >}}
**Atributos de datos para tooltips individuales**

Las opciones para tooltips individuales también se pueden especificar mediante el uso de atributos de datos, como se explicó anteriormente.
{{< /callout >}}

#### Usar la función con `popperConfig` {#using-function-with-popperconfig}

```javascript {filename="JavaScript"}
const tooltip = new bootstrap.Tooltip(element, {
    popperConfig(defaultBsPopperConfig) {
    // const newPopperConfig = {...}
    // use defaultBsPopperConfig if needed...
    // return newPopperConfig
    }
})
```

### Métodos {#methods}

{{< content-ads/middle-banner-6 >}}

{{< callout type="error" emoji="" >}}
**Todos los métodos API son asincrónicos e inician una transición.** Regresan al punto de la llamada tan pronto como se inicia la transición, pero antes de que finalice. Además, se ignorará una llamada a un método en un componente en transición. [Obtén más información en nuestra documentación de JavaScript.](/bootstrap/5.3/getting-started/javascript/#asynchronous-functions-and-transitions)
{{< /callout >}}

| Método                | Descripción                                                                                                                                                                                                                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disable`             | Elimina la capacidad de mostrar la tooltips de un elemento. Los tooltips solo podrán mostrarse si se vuelve a habilitar.                                                                                                                                                                                    |
| `dispose`             | Oculta y destruye tooltips de un elemento (elimina los datos almacenados en el elemento DOM). Los tooltips que utilizan la delegación (que se crea utilizando [la opción `selector`,](#options)) no se puede destruir individualmente en elementos desencadenantes descendientes.                           |
| `enable`              | Da la posibilidad de mostrar tooltips de un elemento. **Los tooltips está habilitados de forma predeterminada.**                                                                                                                                                                                            |
| `getInstance`         | _Static_ método que te permite obtener la instancia de tooltips asociados con un elemento DOM, o crear una nueva en caso de que no haya sido inicializada.                                                                                                                                                  |
| `getOrCreateInstance` | _Static_ método que te permite obtener la instancia de tooltips asociados con un elemento DOM, o crear una nueva en caso de que no haya sido inicializada.                                                                                                                                                  |
| `hide`                | Oculta tooltips de un elemento. **Vuelve al punto de la llamada antes de que el tooltips se haya ocultado** (es decir, antes de que se produzca el evento `hidden.bs.tooltip`). Esto se considera una activación “manual” del tooltips.                                                                     |
| `setContent`          | Proporciona una manera de cambiar el contenido del tooltips después de su inicialización.                                                                                                                                                                                                                   |
| `show`                | Revela el tooltips de un elemento. **Vuelve al punto de la llamada antes de que se haya mostrado realmente el tooltips** (es decir, antes de que ocurra el evento `shown.bs.tooltip`). Esto se considera una activación "manual" del tooltips. Los tooltips con títulos de longitud cero nunca se muestran. |
| `toggle`              | Alterna tooltips de un elemento. **Vuelve al punto de la llamada antes de que el tooltips se haya mostrado u ocultado** (es decir, antes de que el evento `shown.bs.tooltip` o `hidden.bs.tooltip` ocurra). Esto se considera una activación “manual” de tooltips.                                          |
| `toggleEnabled`       | Alterna la capacidad de mostrar u ocultar tooltips de un elemento.                                                                                                                                                                                                                                          |
| `update`              | Actualiza la posición de tooltips de un elemento.                                                                                                                                                                                                                                                           |

```javascript {filename="JavaScript"}
const tooltip = bootstrap.Tooltip.getInstance('#example') // Returns a Bootstrap tooltip instance

// setContent example
tooltip.setContent({ '.tooltip-inner': 'another title' })
```

{{< callout type="info" emoji="" >}}
El método `setContent` acepta un argumento `object`, donde cada clave de propiedad es un selector `string` válido dentro de la plantilla de tooltips, y cada valor de propiedad relacionado puede ser `string` | `element` | `function` | `null`
{{< /callout >}}

{{< bootstrap/content-suggestion >}}

### Eventos {#events}

| Evento                | Descripción                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `hide.bs.tooltip`     | Este evento se activa inmediatamente cuando se llama al método de instancia `hide`.                                          |
| `hidden.bs.tooltip`   | Este evento se activa cuando el tooltips termina de ocultarse al usuario (esperará a que se completen las transiciones CSS). |
| `inserted.bs.tooltip` | Este evento se activa después del evento `show.bs.tooltip` cuando la plantilla de tooltips se ha agregado al DOM.            |
| `show.bs.tooltip`     | Este evento se activa inmediatamente cuando se llama al método de instancia `show`.                                          |
| `shown.bs.tooltip`    | Este evento se activa cuando el tooltips se hace visible para el usuario (esperará a que se completen las transiciones CSS). |

```javascript {filename="JavaScript"}
const myTooltipEl = document.getElementById('myTooltip')
const tooltip = bootstrap.Tooltip.getOrCreateInstance(myTooltipEl)

myTooltipEl.addEventListener('hidden.bs.tooltip', () => {
    // do something...
})

tooltip.hide()
```

{{< content-ads/bottom-banner >}}