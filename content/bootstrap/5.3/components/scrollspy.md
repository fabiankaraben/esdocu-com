---
weight: 21
linkTitle: Scrollspy
title: El componente Scrollspy de Bootstrap · Bootstrap en Español v5.3
description: Actualiza automáticamente la navegación de Bootstrap o enumera los componentes del grupo según la posición de desplazamiento para indicar qué enlace está activo actualmente en el viewport.
---

# El componente Scrollspy de Bootstrap

Actualiza automáticamente la navegación de Bootstrap o enumera los componentes del grupo según la posición de desplazamiento para indicar qué enlace está activo actualmente en el viewport.

{{< content-ads/top-banner >}}

Cómo funciona el componente Scrollspy {#how-it-works}
-------------------------------

Scrollspy alterna la clase `.active` en elementos ancla (`<a>`) cuando el elemento con el `id` al que hace referencia el `href` del ancla se desplaza a la vista. Scrollspy se utiliza mejor junto con un [componente nav](/bootstrap/5.3/components/navs-tabs) o [grupo de lista](/bootstrap/5.3/components/list-group), pero también funcionará con cualquier elemento ancla en la página actual. Así es como funciona.

* Para comenzar, scrollspy requiere dos cosas: una navegación, un grupo de listas o un simple conjunto de enlaces, además de un contenedor desplazable. El contenedor desplazable puede ser `<body>` o un elemento personalizado con un conjunto `height` y `overflow-y: scroll`.
    
* En el contenedor desplazable, agrega `data-bs-spy="scroll"` y `data-bs-target="#navId"` donde `navId` es el `id` único de la navegación asociada. Si no hay ningún elemento enfocable dentro del elemento, asegúrate de incluir también un `tabindex="0"` para garantizar el acceso al teclado.
    
* A medida que te desplazas por el contenedor "espiado", se agrega y elimina una clase `.active` en los enlaces dentro de la navegación asociada. Los enlaces deben tener objetivos `id` que se puedan resolver; de lo contrario, se ignorarán. Por ejemplo, un `<a href="#home">home</a>` debe corresponder a algo en el DOM como `<div id="home"></div>`
    
* Se ignorarán los elementos de destino que no sean visibles. Consulta la sección [Elementos no visibles](#non-visible-elements) a continuación.
    
Ejemplos del componente Scrollspy {#examples}
---------------------

### Barra de navegación {#navbar}

Desplázate por el área debajo de la barra de navegación y observa cómo cambia la clase activa. Abre el menú desplegable y observa cómo se resaltan también los elementos desplegables.

{{< demo-iframe path="/demos/bootstrap/5.3/components/scrollspy/navbar.html" >}}
```html {filename="HTML"}
<nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
<a class="navbar-brand" href="#">Navbar</a>
<ul class="nav nav-pills">
    <li class="nav-item">
    <a class="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
    </ul>
    </li>
</ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
    <h4 id="scrollspyHeading1">First heading</h4>
    <p>...</p>
    <h4 id="scrollspyHeading2">Second heading</h4>
    <p>...</p>
    <h4 id="scrollspyHeading3">Third heading</h4>
    <p>...</p>
    <h4 id="scrollspyHeading4">Fourth heading</h4>
    <p>...</p>
    <h4 id="scrollspyHeading5">Fifth heading</h4>
    <p>...</p>
</div>
```
{{< /demo-iframe >}}

### Navegación anidada {#nested-nav}

Scrollspy también funciona con `.nav` anidados. Si un `.nav` anidado está `.active`, sus padres también estarán `.active`. Desplázate por el área junto a la barra de navegación y observa cómo cambia la clase activa.

{{< demo-iframe path="/demos/bootstrap/5.3/components/scrollspy/nested-nav.html" >}}
```html {filename="HTML"}
<div class="row">
    <div class="col-4">
        <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
        <nav class="nav nav-pills flex-column">
            <a class="nav-link" href="#item-1">Item 1</a>
            <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
            <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
            </nav>
            <a class="nav-link" href="#item-2">Item 2</a>
            <a class="nav-link" href="#item-3">Item 3</a>
            <nav class="nav nav-pills flex-column">
            <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
            <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
            </nav>
        </nav>
        </nav>
    </div>

    <div class="col-8">
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
        <div id="item-1">
            <h4>Item 1</h4>
            <p>...</p>
        </div>
        <div id="item-1-1">
            <h5>Item 1-1</h5>
            <p>...</p>
        </div>
        <div id="item-1-2">
            <h5>Item 1-2</h5>
            <p>...</p>
        </div>
        <div id="item-2">
            <h4>Item 2</h4>
            <p>...</p>
        </div>
        <div id="item-3">
            <h4>Item 3</h4>
            <p>...</p>
        </div>
        <div id="item-3-1">
            <h5>Item 3-1</h5>
            <p>...</p>
        </div>
        <div id="item-3-2">
            <h5>Item 3-2</h5>
            <p>...</p>
        </div>
        </div>
    </div>
</div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

### Grupo de lista {#list-group}

Scrollspy también funciona con `.list-group`. Desplázate por el área junto al grupo de la lista y observa cómo cambia la clase activa.

{{< demo-iframe path="/demos/bootstrap/5.3/components/scrollspy/list-group.html" >}}
```html {filename="HTML"}
<div class="row">
    <div class="col-4">
        <div id="list-example" class="list-group">
            <a class="list-group-item list-group-item-action active" href="#list-item-1">Item 1</a>
            <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
            <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
            <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
        </div>
    </div>
    <div class="col-8">
        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true"
            class="scrollspy-example" tabindex="0">
            <h4 id="list-item-1">Item 1</h4>
            <p>Este es un contenido de marcador de posición para la página de scrollspy. Ten en cuenta que a
                medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación apropiado.
                Se repite a lo largo del ejemplo del componente. Seguimos agregando más copias de ejemplo aquí
                para enfatizar el desplazamiento y el resaltado.</p>
            <h4 id="list-item-2">Item 2</h4>
            <p>Este es un contenido de marcador de posición para la página de scrollspy. Ten en cuenta que a
                medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación apropiado.
                Se repite a lo largo del ejemplo del componente. Seguimos agregando más copias de ejemplo aquí
                para enfatizar el desplazamiento y el resaltado.</p>
            <h4 id="list-item-3">Item 3</h4>
            <p>Este es un contenido de marcador de posición para la página de scrollspy. Ten en cuenta que a
                medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación apropiado.
                Se repite a lo largo del ejemplo del componente. Seguimos agregando más copias de ejemplo aquí
                para enfatizar el desplazamiento y el resaltado.</p>
            <h4 id="list-item-4">Item 4</h4>
            <p>Este es un contenido de marcador de posición para la página de scrollspy. Ten en cuenta que a
                medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación apropiado.
                Se repite a lo largo del ejemplo del componente. Seguimos agregando más copias de ejemplo aquí
                para enfatizar el desplazamiento y el resaltado.</p>
        </div>
    </div>
</div>
```
{{< /demo-iframe >}}

### Anclajes simples {#simple-anchors}

Scrollspy no se limita a componentes de nav y grupos de listas, por lo que funcionará en cualquier elemento de anclaje `<a>` en el documento actual. Desplázate por el área y observa cómo cambia la clase `.active`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/scrollspy/simple-anchors.html" >}}
```html {filename="HTML"}
<div class="row">
    <div class="col-4">
        <div id="simple-list-example"
            class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
            <a class="p-1 rounded active" href="#simple-list-item-1">Item 1</a>
            <a class="p-1 rounded" href="#simple-list-item-2">Item 2</a>
            <a class="p-1 rounded" href="#simple-list-item-3">Item 3</a>
            <a class="p-1 rounded" href="#simple-list-item-4">Item 4</a>
            <a class="p-1 rounded" href="#simple-list-item-5">Item 5</a>
        </div>
    </div>
    <div class="col-8">
        <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0"
            data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
            <h4 id="simple-list-item-1">Item 1</h4>
            <p>Este es un contenido de marcador de posición para la página de scrollspy. Ten en cuenta que a
                medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación apropiado.
                Se repite a lo largo del ejemplo del componente. Seguimos agregando más copias de ejemplo aquí
                para enfatizar el desplazamiento y el resaltado.</p>
            <h4 id="simple-list-item-2">Item 2</h4>
            <p>Este es un contenido de marcador de posición para la página de scrollspy. Ten en cuenta que a
                medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación apropiado.
                Se repite a lo largo del ejemplo del componente. Seguimos agregando más copias de ejemplo aquí
                para enfatizar el desplazamiento y el resaltado.</p>
            <h4 id="simple-list-item-3">Item 3</h4>
            <p>Este es un contenido de marcador de posición para la página de scrollspy. Ten en cuenta que a
                medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación apropiado.
                Se repite a lo largo del ejemplo del componente. Seguimos agregando más copias de ejemplo aquí
                para enfatizar el desplazamiento y el resaltado.</p>
            <h4 id="simple-list-item-4">Item 4</h4>
            <p>Este es un contenido de marcador de posición para la página de scrollspy. Ten en cuenta que a
                medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación apropiado.
                Se repite a lo largo del ejemplo del componente. Seguimos agregando más copias de ejemplo aquí
                para enfatizar el desplazamiento y el resaltado.</p>
            <h4 id="simple-list-item-5">Item 5</h4>
            <p>Este es un contenido de marcador de posición para la página de scrollspy. Ten en cuenta que a
                medida que te desplazas hacia abajo en la página, se resalta el enlace de navegación apropiado.
                Se repite a lo largo del ejemplo del componente. Seguimos agregando más copias de ejemplo aquí
                para enfatizar el desplazamiento y el resaltado.</p>
        </div>
    </div>
</div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Elementos de destino no visibles {#non-visible-elements}
----------------------------------------------

Los elementos de destino que no son visibles se ignorarán y sus elementos de nav correspondientes no recibirán una clase `.active` .Las instancias de Scrollspy inicializadas en un contenedor no visible ignorarán todos los elementos de destino. Utiliza el método `refresh` para comprobar si hay elementos observables una vez que el contenedor se vuelva visible.

```javascript {filename="JavaScript"}
document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
    el.addEventListener('shown.bs.tab', () => {
    const target = el.getAttribute('data-bs-target')
    const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
    bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
    })
})
```

Uso del componente Scrollspy {#usage}
-------------

### Vía atributos de datos {#via-data-attributes}

Para agregar fácilmente el comportamiento de desplazamiento de scrollspy a tu barra de navegación superior, agrega `data-bs-spy="scroll"` al elemento que deseas espiar (generalmente este sería el `<body>`). Luego agrega el atributo `data-bs-target` con el `id` o nombre de clase del elemento principal de cualquier componente Bootstrap `.nav`.

```html {filename="HTML"}
<body data-bs-spy="scroll" data-bs-target="#navbar-example">
    ...
    <div id="navbar-example">
    <ul class="nav nav-tabs" role="tablist">
        ...
    </ul>
    </div>
    ...
</body>
```

### Vía JavaScript {#via-javascript}

```javascript {filename="JavaScript"}
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
})
```

### Opciones {#options}

Como las opciones se pueden pasar a través de atributos de datos o JavaScript, puedes agregar un nombre de opción a `data-bs-`, como en `data-bs-animation="{value}"`. Asegúrate de cambiar el tipo de caso del nombre de la opción de “_camelCase_” a “_kebab-case_” al pasar las opciones a través de atributos de datos. Por ejemplo, utiliza `data-bs-custom-class="beautifier"` en lugar de `data-bs-customClass="beautifier"`.

A partir de Bootstrap 5.2.0, todos los componentes admiten un atributo de datos **experimental** reservado `data-bs-config` que puede albergar datos simples de configuración del componente como una cadena JSON. Cuando un elemento tiene los atributos `data-bs-config='{"delay":0, "title":123}'` y `data-bs-title="456"`, el valor final de `title` será `456` y los atributos de datos separados sobrescribirán los valores proporcionados en `data-bs-config`. Además, los atributos de datos existentes pueden albergar valores JSON como `data-bs-delay='{"show":0,"hide":150}'`.

El objeto de configuración final es el resultado combinado de `data-bs-config`, `data-bs-` y `js object` donde el último valor-clave dado sobrescribe los demás.

| Nombre         | Tipo                | Predeterminado  | Descripción                                                                                                                                                                                        |
| -------------- | ------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rootMargin`   | string              | `0px 0px -25%`  | Intersection Observer [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) válido unidades, al calcular la posición de desplazamiento.                   |
| `smoothScroll` | boolean             | `false`         | Permite un desplazamiento suave cuando un usuario hace clic en un enlace que hace referencia a los observables de ScrollSpy.                                                                       |
| `target`       | string, DOM element | `null`          | Especifica el elemento para aplicar el complemento Scrollspy.                                                                                                                                      |
| `threshold`    | array               | `[0.1, 0.5, 1]` | `IntersectionObserver` [umbral](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#threshold) de entrada válido al calcular la posición de desplazamiento. |

{{< callout type="warning" emoji="" >}}
**Opciones obsoletas**

Hasta la versión 5.1.3 usábamos `offset` & Opciones de `method`, que ahora están obsoletas y reemplazadas por `rootMargin`. Para mantener la compatibilidad con versiones anteriores, continuaremos analizando un `offset` determinado en `rootMargin`, pero esta característica se eliminará en la **v6**.
{{< /callout >}}

{{< bootstrap/content-suggestion >}}

### Métodos {#methods}

| Método                | Descripción                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dispose`             | Destruye el scrollspy de un elemento. (Elimina los datos almacenados en el elemento DOM)                                                              |
| `getInstance`         | _Static_ método para obtener la instancia de scrollspy asociada con un elemento DOM.                                                                  |
| `getOrCreateInstance` | _Static_ método para obtener la instancia de scrollspy asociada con un elemento DOM, o para crear una nueva en caso de que no haya sido inicializada. |
| `refresh`             | Al agregar o eliminar elementos en el DOM, necesitarás llamar al método refresh.                                                                      |

Aquí tienes un ejemplo que utiliza el método refresh:

```javascript {filename="JavaScript"}
const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
dataSpyList.forEach(dataSpyEl => {
    bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()
})
```

### Eventos {#events}

| Evento                  | Descripción                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| `activate.bs.scrollspy` | Este evento se activa en el elemento de desplazamiento cada vez que scrollspy activa un ancla. |

```javascript {filename="JavaScript"}
const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', () => {
    // do something...
})
```

{{< content-ads/bottom-banner >}}