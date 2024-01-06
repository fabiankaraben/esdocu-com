---
weight: 10
linkTitle: Collapse
title: El componente Collapse de Bootstrap · Bootstrap en Español v5.3
description: Alterna la visibilidad del contenido en tu proyecto con algunas clases y nuestros complementos de JavaScript.
---

# El componente Collapse de Bootstrap

Alterna la visibilidad del contenido en tu proyecto con algunas clases y nuestros complementos de JavaScript.

{{< content-ads/top-banner >}}

Cómo funciona el componente Collapse {#how-it-works}
-------------------------------

El complemento JavaScript para contraer se utiliza para mostrar y ocultar contenido. Los botones o anclajes se utilizan como activadores que se asignan a elementos específicos que alterna. Colapsar un elemento animará el `height` desde su valor actual a `0`. Dado cómo CSS maneja las animaciones, no puedes usar `padding` en un elemento `.collapse`. En su lugar, utiliza la clase como elemento envolvente independiente.

{{< callout type="info" emoji="" >}}
El efecto de animación de este componente depende de la media query `prefers-reduced-motion`. Consulta la [sección de movimiento reducido de nuestra documentación de accesibilidad](/bootstrap/5.3/getting-started/accessibility/#reduced-motion).
{{< /callout >}}

Ejemplo del componente Collapse {#example}
-------------------

Haz clic en los botones a continuación para mostrar y ocultar otro elemento mediante cambios de clase:

* `.collapse` oculta contenido
* `.collapsing` se aplica durante las transiciones
* `.collapse.show` muestra contenido

Generalmente, recomendamos usar un `<button>` con el atributo `data-bs-target`. Aunque no se recomienda desde un punto de vista semántico, también puedes usar un enlace `<a>` con el atributo `href` (y un `role="button"`). En ambos casos, se requiere `data-bs-toggle="collapse"`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/collapse/example.html" >}}
```html {filename="HTML"}
<p class="d-inline-flex gap-1">
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button"
        aria-expanded="false" aria-controls="collapseExample">
        Enlace con href
    </a>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
        aria-expanded="false" aria-controls="collapseExample">
        Botón con data-bs-target
    </button>
</p>
<div class="collapse" id="collapseExample">
    <div class="card card-body">
        Algún contenido de marcador de posición para el componente de colapso. Este panel está oculto de forma
        predeterminada, pero se revela cuando el usuario activa el activador correspondiente.
    </div>
</div>
```
{{< /demo-iframe >}}

Componente Collapse horizontal {#horizontal}
-------------------------

El complemento de colapso admite el colapso horizontal. Agrea la clase modificadora `.collapse-horizontal` para realizar la transición del `width` en lugar de `height` y establece un `width` en el elemento hijo inmediato. Siéntete libre de escribir tu propio Sass personalizado, usar estilos en línea o usar nuestras [utilidades de ancho](/bootstrap/5.3/utilities/sizing).

{{< content-ads/middle-banner-1 >}}

{{< callout type="info" emoji="" >}}
Ten en cuenta que, si bien el siguiente ejemplo tiene un `min-height` configurado para evitar repintados excesivos en nuestra documentación, esto no es un requisito explícito. **Solo se requiere el `width` en el elemento secundario.**
{{< /callout >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/collapse/horizontal.html" >}}
```html {filename="HTML"}
<p>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
        Alternar colapso a lo ancho
    </button>
</p>
<div style="min-height: 120px;">
    <div class="collapse collapse-horizontal" id="collapseWidthExample">
        <div class="card card-body" style="width: 300px;">
            Este es un contenido de marcador de posición para un colapso horizontal. Está oculto de forma
            predeterminada y se muestra cuando se activa.
        </div>
    </div>
</div>
```
{{< /demo-iframe >}}

Múltiples opciones y objetivos {#multiple-toggles-and-targets}
---------------------------------------------------------------

Un elemento `<button>` o `<a>` puede mostrar y ocultar múltiples elementos haciendo referencia a ellos con un selector en su atributo `data-bs-target` o `href`. Por el contrario, varios elementos `<button>` o `<a>` pueden mostrar y ocultar el mismo elemento si cada uno de ellos hace referencia a él con su `data-bs-target` o `href`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/collapse/multiple-toggles-and-targets.html" >}}
```html {filename="HTML"}
    <p class="d-inline-flex gap-1">
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
            aria-expanded="false" aria-controls="multiCollapseExample1">Alternar el primer elemento</a>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample2" aria-expanded="false"
            aria-controls="multiCollapseExample2">Alternar segundo elemento</button>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse"
            aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Alterna ambos
            elementos</button>
    </p>
    <div class="row">
        <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="card card-body">
                    Contenido de marcador de posición para el primer componente de colapso de este ejemplo de
                    colapso múltiple. Este panel está oculto de forma predeterminada, pero se revela cuando el
                    usuario activa el activador correspondiente.
                </div>
            </div>
        </div>
        <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample2">
                <div class="card card-body">
                    Contenido de marcador de posición para el segundo componente de colapso de este ejemplo de
                    colapso múltiple. Este panel está oculto de forma predeterminada, pero se revela cuando el
                    usuario activa el activador correspondiente.
                </div>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Accesibilidad del componente Collapse {#accessibility}
-------------------------------

Asegúrate de agregar `aria-expanded` al elemento de control. Este atributo transmite explícitamente el estado actual del elemento plegable vinculado al control a lectores de pantalla y tecnologías de asistencia similares. Si el elemento plegable está cerrado de forma predeterminada, el atributo del elemento de control debe tener un valor de `aria-expanded="false"`. Si has configurado el elemento plegable para que se abra de forma predeterminada usando la clase `show`, configura `aria-expanded="true"` en el control. El complemento alternará automáticamente este atributo en el control en función de si el elemento plegable se ha abierto o cerrado (a través de JavaScript, o porque el usuario activó otro elemento de control también vinculado al mismo elemento plegable). Si el elemento HTML del elemento de control no es un botón (por ejemplo, un `<a>` o `<div>`), el atributo `role="button"` debe agregarse al elemento.

Si tu elemento de control apunta a un único elemento plegable, es decir, el atributo `data-bs-target` apunta a un selector `id`, debes agregar el atributo `aria-controls` al elemento de control, que contiene el `id` del elemento plegable. Los lectores de pantalla modernos y tecnologías de asistencia similares utilizan este atributo para proporcionar a los usuarios accesos directos adicionales para navegar directamente al elemento plegable.

Ten en cuenta que la implementación actual de Bootstrap no cubre las diversas interacciones de teclado _opcionales_ descritas en [Patrón de acordeón de la Guía de prácticas de creación de ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/accordion), deberás incluirlos tú mismo con JavaScript personalizado.

{{< content-ads/middle-banner-2 >}}

Personalización del CSS del componente {#css}
-----------

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$transition-collapse:         height .35s ease;
$transition-collapse-width:   width .35s ease;
```

### Clases {#classes}

Las clases de transición de collapse se pueden encontrar en `scss/_transitions.scss` ya que se comparten entre múltiples componentes (collapse y accordion).

[scss/_transitions.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_transitions.scss)

```scss {filename="scss/_transitions.scss"}
.collapse {
    &:not(.show) {
    display: none;
    }
}

.collapsing {
    height: 0;
    overflow: hidden;
    @include transition($transition-collapse);

    &.collapse-horizontal {
    width: 0;
    height: auto;
    @include transition($transition-collapse-width);
    }
}
```

Uso del componente Collapse {#usage}
-------------

El complemento de colapso utiliza algunas clases para manejar el trabajo pesado:

{{< content-ads/middle-banner-3 >}}

* `.collapse` oculta el contenido
* `.collapse.show` muestra el contenido
* `.collapsing` se agrega cuando comienza la transición y se elimina cuando finaliza

Estas clases se pueden encontrar en `_transitions.scss`.

### Vía atributos de datos {#via-data-attributes}

Simplemente agrega `data-bs-toggle="collapse"` y un `data-bs-target` al elemento para asignar automáticamente control de uno o más elementos plegables. El atributo `data-bs-target` acepta un selector CSS al que aplicar el colapso. Asegúrate de agregar la clase `collapse` al elemento plegable. Si deseas que se abra de forma predeterminada, agrega la clase adicional `show`.

Para agregar administración de grupos tipo acordeón a un área plegable, agrega el atributo de datos `data-bs-parent="#selector"`. Consulta la [página del acordeón](/bootstrap/5.3/components/accordion) para obtener más información.

### Vía JavaScript {#via-javascript}

Habilitar manualmente con:

```javascript {filename="JavaScript"}
const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
```

### Opciones {#options}

Como las opciones se pueden pasar a través de atributos de datos o JavaScript, puedes agregar un nombre de opción a `data-bs-`, como en `data-bs-animation="{value}"`. Asegúrate de cambiar el tipo de caso del nombre de la opción de “_camelCase_” a “_kebab-case_” al pasar las opciones a través de atributos de datos. Por ejemplo, utiliza `data-bs-custom-class="beautifier"` en lugar de `data-bs-customClass="beautifier"`.

{{< content-ads/middle-banner-4 >}}

A partir de Bootstrap 5.2.0, todos los componentes admiten un atributo de datos **experimental** reservado `data-bs-config` que puede albergar datos simples de configuración del componente como una cadena JSON. Cuando un elemento tiene los atributos `data-bs-config='{"delay":0, "title":123}'` y `data-bs-title="456"`, el valor final de `title` será `456` y los atributos de datos separados sobrescribirán los valores proporcionados en `data-bs-config`. Además, los atributos de datos existentes pueden albergar valores JSON como `data-bs-delay='{"show":0,"hide":150}'`.

El objeto de configuración final es el resultado combinado de `data-bs-config`, `data-bs-` y `js object` donde el último valor-clave dado sobrescribe los demás.

| Nombre   | Tipo                   | Predeterminado | Descripción                                                                                                                                                                                                                                                                                                       |
| -------- | ---------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `parent` | selector, elemento DOM | `null`         | Si se proporciona el elemento padre, todos los elementos plegables bajo el elemento padre especificado se cerrarán cuando se muestre este elemento plegable. (similar al comportamiento tradicional del acordeón; esto depende de la clase `card`). El atributo debe establecerse en el área plegable de destino. |
| `toggle` | boolean                | `true`         | Alterna el elemento plegable al invocarlo.                                                                                                                                                                                                                                                                        |

### Métodos {#methods}

{{< callout type="error" emoji="️" >}}
**Todos los métodos API son asincrónicos e inician una transición.** Regresan al punto de la llamada tan pronto como se inicia la transición, pero antes de que finalice. Además, se ignorará una llamada a un método en un componente en transición. [Obtén más información en nuestra documentación de JavaScript.](/bootstrap/5.3/getting-started/javascript/#asynchronous-functions-and-transitions)
{{< /callout >}}

Activa tu contenido como un elemento plegable. Acepta opciones opcionales `object`.

Puedes crear una instancia colapsada con el constructor, por ejemplo:

```javascript {filename="JavaScript"}
const bsCollapse = new bootstrap.Collapse('#myCollapse', {
    toggle: false
})
```

| Método                | Descripción                                                                                                                                                                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dispose`             | Destruye el collapse de un elemento. (Elimina los datos almacenados en el elemento DOM)                                                                                                                                                       |
| `getInstance`         | Método estático que te permite obtener la instancia de colapso asociada a un elemento DOM, puedes usarlo así: `bootstrap.Collapse.getInstance(element)`.                                                                                      |
| `getOrCreateInstance` | Método estático que devuelve una instancia colapsada asociada a un elemento DOM o crea una nueva en caso de que no haya sido inicializada. Puedes usarlo así: `bootstrap.Collapse.getOrCreateInstance(element)`.                              |
| `hide`                | Oculta un elemento plegable. **Vuelve a la persona que llama antes de que el elemento contraíble se haya ocultado** (por ejemplo, antes de que ocurra el evento `hidden.bs.collapse`).                                                        |
| `show`                | Muestra un elemento plegable. **Vuelve a la persona que llama antes de que el elemento plegable se haya mostrado realmente** (por ejemplo, antes de que ocurra el evento `shown.bs.collapse`).                                                |
| `toggle`              | Cambia un elemento plegable para mostrarlo u ocultarlo. **Vuelve a la persona que llama antes de que el elemento plegable se haya mostrado u ocultado** (es decir, antes de que el evento `shown.bs.collapse` o `hidden.bs.collapse` ocurra). |

### Eventos {#events}

{{< content-ads/middle-banner-5 >}}

La clase de colapso de Bootstrap expone algunos eventos para conectarse a la funcionalidad de colapso.

| Tipo de evento       | Descripción                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `hide.bs.collapse`   | Este evento se activa inmediatamente cuando se llama al método `hide`.                                                                 |
| `hidden.bs.collapse` | Este evento se activa cuando un elemento de colapso se ha ocultado al usuario (esperará a que se completen las transiciones CSS).      |
| `show.bs.collapse`   | Este evento se activa inmediatamente cuando se llama al método de instancia `show`.                                                    |
| `shown.bs.collapse`  | Este evento se activa cuando un elemento colapsado se hace visible para el usuario (esperará a que se completen las transiciones CSS). |

{{< bootstrap/content-suggestion >}}

```javascript {filename="JavaScript"}
const myCollapsible = document.getElementById('myCollapsible')
myCollapsible.addEventListener('hidden.bs.collapse', event => {
    // do something...
})
```

{{< content-ads/bottom-banner >}}
