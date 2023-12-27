---
weight: 14
linkTitle: Barra de navegación
title: El componente Barra de navegación de Bootstrap · Bootstrap en Español v5.3
description: Documentación y ejemplos para el potente encabezado de navegación responsive de Bootstrap, la barra de navegación. Incluye soporte para marca, navegación y más, incluido soporte para nuestro complemento collapse.
---

# El componente Barra de navegación de Bootstrap

Documentación y ejemplos para el potente encabezado de navegación responsive de Bootstrap, la barra de navegación. Incluye soporte para marca, navegación y más, incluido soporte para nuestro complemento collapse.

{{< content-ads/top-banner >}}

Cómo funciona el componente Barra de navegación {#how-it-works}
-------------------------------

Esto es lo que necesitas saber antes de comenzar con la barra de navegación:

* Las barras de navegación requieren un ajuste `.navbar` con `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` para un colapsamiento responsive y clases de [esquema de colores](#color-schemes) .
* Las barras de navegación y sus contenidos son fluid de forma predeterminada. Cambia el [contenedor](#containers) para limitar su ancho horizontal de diferentes maneras.
* Usa nuestro [espaciado](/bootstrap/5.3/utilities/spacing) y clases [flex](/bootstrap/5.3/utilities/flex) de utilidad para controlar el espaciado y la alineación dentro de las barras de navegación.
* Las barras de navegación responden de manera predeterminada, pero puedes modificarlas fácilmente para cambiar eso. El comportamiento responsive depende de nuestro complemento Collapse JavaScript.
* Asegura la accesibilidad usando un elemento `<nav>` o, si usas un elemento más genérico como un `<div>`, agrega un `role="navigation"` a cada barra de navegación para identificarla explícitamente como una región emblemática para los usuarios de tecnologías de asistencia.
* Indica el elemento actual usando `aria-current="page"` para la página actual o `aria-current="true"` para el elemento actual en un conjunto.
* **Nuevo en v5.2.0:** las barras de navegación pueden tener un tema con variables CSS que tienen como ámbito la clase base `.navbar`. `.navbar-light` ha quedado obsoleto y `.navbar-dark` se ha reescrito para sobrescribir las variables CSS en lugar de agregar estilos adicionales.

{{< callout type="info" emoji="" >}}
El efecto de animación de este componente depende de la media query `prefers-reduced-motion`. Consulta la [sección de movimiento reducido de nuestra documentación de accesibilidad](/bootstrap/5.3/getting-started/accessibility/#reduced-motion).
{{< /callout >}}

Contenido soportado {#supported-content}
-----------------------------------------

Las barras de navegación vienen con soporte integrado para un puñado de subcomponentes. Elige entre los siguientes según sea necesario:

* `.navbar-brand` para el nombre de tu empresa, producto o proyecto.
* `.navbar-nav` para una navegación liviana y de altura completa (incluida la compatibilidad con menús desplegables).
* `.navbar-toggler` para usarlo con nuestro complemento de colapso y otros comportamientos de [alternancia de navegación](#responsive-behaviors).
* Utilidades flex y espaciado para cualquier control y acción de formulario.
* `.navbar-text` para agregar cadenas de texto centradas verticalmente.
* `.collapse.navbar-collapse` para agrupar y ocultar contenidos de la barra de navegación según un punto de interrupción principal.
* Agrega un `.navbar-scroll` opcional para establecer un `max-height` y un [desplazamiento de contenido de la barra de navegación ampliada](#scrolling).

Aquí tienes un ejemplo de todos los subcomponentes incluidos en una barra de navegación responsive con tema claro que colapsa automáticamente en el punto de interrupción `lg` (grande).

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/supported-content.html" >}}
```html {filename="HTML"}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Barra de navegación</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Alternar navegación">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Enlace</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Desplegable
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Acción</a></li>
                        <li><a class="dropdown-item" href="#">Otra acción</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
    </div>
</nav>
```
{{< /demo-iframe >}}

Este ejemplo usa las clases de utilidad [fondo](/bootstrap/5.3/utilities/background) (`bg-body-tertiary`) y [espaciado](/bootstrap/5.3/utilities/spacing) (`me-auto`, `mb-2`, `mb-lg-0`, `me-2`).

### Marca {#brand}

El `.navbar-brand` se puede aplicar a la mayoría de los elementos, pero un ancla (enlace) funciona mejor, ya que algunos elementos pueden requerir clases de utilidad o estilos personalizados.

{{< bootstrap/content-suggestion >}}

#### Texto {#text}

Agrega tu texto dentro de un elemento con la clase `.navbar-brand`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/text.html" >}}
```html {filename="HTML"}
<!-- As a link -->
<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Barra de navegación</a>
    </div>
</nav>

<!-- As a heading -->
<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Barra de navegación</span>
    </div>
</nav>
```
{{< /demo-iframe >}}

#### Imagen {#image}

Puedes reemplazar el texto dentro de `.navbar-brand` con un `<img>`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/image.html" >}}
```html {filename="HTML"}
<nav class="navbar bg-body-tertiary">
    <div class="container">
        <a class="navbar-brand" href="#">
            <img src="/bootstrap/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24">
        </a>
    </div>
</nav>
```
{{< /demo-iframe >}}

#### Imagen y texto. {#image-and-text}

También puedes hacer uso de algunas utilidades adicionales para agregar una imagen y texto al mismo tiempo. Ten en cuenta la adición de `.d-inline-block` y `.align-text-top` en `<img>`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/image-and-text.html" >}}
```html {filename="HTML"}
<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="/bootstrap/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24"
                class="d-inline-block align-text-top">
            Bootstrap
        </a>
    </div>
</nav>
```
{{< /demo-iframe >}}

### Nav {#nav}

Los enlaces de navegación de la barra de navegación se basan en nuestras opciones `.nav` con su propia clase modificadora y requieren el uso de [clases de alternancia](#toggler) para un estilo responsive adecuado. **La navegación en las barras de navegación también crecerá para ocupar tanto espacio horizontal como sea posible** para mantener el contenido de la barra de navegación alineado de forma segura.

Agrega la clase `.active` en `.nav-link` para indicar la página actual.

Ten en cuenta que también debes agregar el atributo `aria-current` en el `.nav-link`activo.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/nav-1.html" >}}
```html {filename="HTML"}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Barra de navegación</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegación">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Características</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Precios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```
{{< /demo-iframe >}}

Y debido a que usamos clases para nuestra navegación, puedes evitar por completo el enfoque basado en listas si lo deseas.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/nav-2.html" >}}
```html {filename="HTML"}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Barra de navegación</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Alternar navegación">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                <a class="nav-link" href="#">Características</a>
                <a class="nav-link" href="#">Precios</a>
                <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
            </div>
        </div>
    </div>
</nav>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

También puedes usar menús desplegables en tu barra de navegación. Los menús desplegables requieren un elemento envolvente para su posicionamiento, así que asegúrate de utilizar elementos separados y anidados para `.nav-item` y `.nav-link` como se muestra a continuación.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/nav-3.html" >}}
```html {filename="HTML"}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Barra de navegación</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
            aria-label="Alternar navegación">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Características</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Precios</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Enlace desplegable
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Acción</a></li>
                        <li><a class="dropdown-item" href="#">Otra acción</a></li>
                        <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
```
{{< /demo-iframe >}}

### Formularios {#forms}

Coloca varios controles y componentes de formulario dentro de una barra de navegación:

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/forms-1.html" >}}
```html {filename="HTML"}
<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    </div>
</nav>
```
{{< /demo-iframe >}}

Los elementos secundarios inmediatos de `.navbar` usan diseño flex y por defecto serán `justify-content: space-between`. Utiliza [utilidades flex](/bootstrap/5.3/utilities/flex) adicionales según sea necesario para ajustar este comportamiento.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/forms-2.html" >}}
```html {filename="HTML"}
<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand">Barra de navegación</a>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    </div>
</nav>
```
{{< /demo-iframe >}}

Los grupos de entrada también funcionan. Si tu barra de navegación es un formulario completo, o principalmente un formulario, puedes usar el elemento `<form>` como contenedor y guardar algo de HTML.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/forms-3.html" >}}
```html {filename="HTML"}
<nav class="navbar bg-body-tertiary">
    <form class="container-fluid">
        <div class="input-group">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>
    </form>
</nav>
```
{{< /demo-iframe >}}

Varios botones también son compatibles como parte de estos formularios de la barra de navegación. Esto también es un gran recordatorio de que las utilidades de alineación vertical se pueden utilizar para alinear elementos de diferentes tamaños.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/forms-4.html" >}}
```html {filename="HTML"}
<nav class="navbar bg-body-tertiary">
    <form class="container-fluid justify-content-start">
        <button class="btn btn-outline-success me-2" type="button">Botón principal</button>
        <button class="btn btn-sm btn-outline-secondary" type="button">Botón más pequeño</button>
    </form>
</nav>
```
{{< /demo-iframe >}}

### Texto {#text-1}

Las barras de navegación pueden contener fragmentos de texto con la ayuda de `.navbar-text`. Esta clase ajusta la alineación vertical y el espaciado horizontal de cadenas de texto.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/text-1-1.html" >}}
```html {filename="HTML"}
<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <span class="navbar-text">
            Texto de la barra de navegación con un elemento en línea
        </span>
    </div>
</nav>
```
{{< /demo-iframe >}}

Mezcla y combina con otros componentes y utilidades según sea necesario.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/text-1-2.html" >}}
```html {filename="HTML"}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar c/ texto</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Alternar navegación">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Características</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Precios</a>
                </li>
            </ul>
            <span class="navbar-text">
                Texto de la barra de navegación con un elemento en línea
            </span>
        </div>
    </div>
</nav>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Esquemas de colores del componente Barra de navegación {#color-schemes}
-------------------------------------

{{< callout type="warning" emoji="" >}}
**Nuevas barras de navegación oscuras en v5.3.0 —** Hemos dejado de usar `.navbar-dark` en favor del nuevo `data-bs-theme="dark"`. Agrega `data-bs-theme="dark"` al `.navbar` para habilitar un modo de color específico del componente. [Obtén más información sobre nuestros modos de color.](/bootstrap/5.3/customize/color-modes)

* * *

**Nuevo en v5.2.0:** el tema de la barra de navegación ahora funciona con variables CSS y `.navbar-light` ha quedado obsoleto. Las variables CSS se aplican a `.navbar`, de forma predeterminada tienen la apariencia "clara" y se pueden sobrescribir con `.navbar-dark`.
{{< /callout >}}

Los temas de la barra de navegación son más fáciles que nunca gracias a la combinación de variables Sass y CSS de Bootstrap. El valor predeterminado es nuestra “barra de navegación clara” para usar con colores de fondo claros, pero también puedes aplicar `data-bs-theme="dark"` al padre `.navbar` para colores colores de fondo oscuros. Luego, personalízalo con `.bg-*` y utilidades adicionales.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/color-schemes.html" >}}
```html {filename="HTML"}
<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <!-- Navbar content -->
</nav>

<nav class="navbar bg-primary" data-bs-theme="dark">
    <!-- Navbar content -->
</nav>

<nav class="navbar" style="background-color: #e3f2fd;">
    <!-- Navbar content -->
</nav>
```
{{< /demo-iframe >}}

Contenedores para el componente Barra de navegación {#containers}
---------------------------

Aunque no es obligatorio, puedes envolver una barra de navegación en un `.container` para centrarla en una página, aunque ten en cuenta que aún se requiere un contenedor interno. O puedes agregar un contenedor dentro de `.navbar` para centrar solo el contenido de una [barra de navegación superior fija o estática](#placement).

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/containers-1.html" >}}
```html {filename="HTML"}
<div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Barra de navegación</a>
        </div>
    </nav>
</div>
```
{{< /demo-iframe >}}

Usa cualquiera de los contenedores responsive para cambiar el ancho de presentación del contenido en tu barra de navegación.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/containers-2.html" >}}
```html {filename="HTML"}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-md">
        <a class="navbar-brand" href="#">Barra de navegación</a>
    </div>
</nav>
```
{{< /demo-iframe >}}

Ubicación del componente Barra de navegación {#placement}
-----------------------

Utiliza nuestras [utilidades de posición](/bootstrap/5.3/utilities/position) para colocar barras de navegación en posiciones no estáticas. Elige entre fijo en la parte superior, fijo en la parte inferior, pegado en la parte superior (se desplaza con la página hasta que llega a la parte superior y luego permanece allí) o pegado en la parte inferior (se desplaza con la página hasta que llega al final y luego permanece allí).

Las barras de navegación fijas usan `position: fixed`, lo que significa que se extraen del flujo normal del DOM y pueden requerir CSS personalizado (por ejemplo, relleno `padding-top` en `<body>`) para evitar la superposición con otros elementos.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/placement-1.html" >}}
```html {filename="HTML"}
<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Predeterminado</a>
    </div>
</nav>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/placement-2.html" >}}
```html {filename="HTML"}
<nav class="navbar fixed-top bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Fijo parte superior</a>
    </div>
</nav>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/placement-3.html" >}}
```html {filename="HTML"}
<nav class="navbar fixed-bottom bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Fijo parte inferior</a>
    </div>
</nav>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/placement-4.html" >}}
```html {filename="HTML"}
<nav class="navbar sticky-top bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Pegajoso parte superior</a>
    </div>
</nav>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/placement-5.html" >}}
```html {filename="HTML"}
<nav class="navbar sticky-bottom bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Pegajoso parte inferior</a>
    </div>
</nav>
```
{{< /demo-iframe >}}

Desplazamiento del contenido del componente Barra de navegación {#scrolling}
----------------------------

Agrega `.navbar-nav-scroll` a un `.navbar-nav` (u otro subcomponente de la barra de navegación) para habilitar la vertical desplazándose dentro del contenido alternable de una barra de navegación contraída. De forma predeterminada, el desplazamiento se inicia en `75vh` (o el 75% de la altura del viewport), pero puedes sobrescribirlo con la propiedad personalizada CSS local `--bs-navbar-height` o estilos personalizados. En viewports más grandes, cuando se expande la barra de navegación, el contenido aparecerá como aparece en la barra de navegación predeterminada.

Ten en cuenta que este comportamiento conlleva un posible inconveniente de `overflow`: al configurar `overflow-y: auto` (obligatorio para desplazar el contenido aquí), `overflow-x` es el equivalente a `auto`, que recortará parte del contenido horizontal.

Aquí tienes una barra de navegación de ejemplo que usa `.navbar-nav-scroll` con `style="--bs-scroll-height: 100px;"`, con algunas utilidades de margen adicionales para un espaciado óptimo.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/scrolling.html" >}}
```html {filename="HTML"}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Desplazamiento de la barra de navegación</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
            aria-controls="navbarScroll" aria-expanded="false" aria-label="Alternar navegación">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Enlace</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Enlace
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Acción</a></li>
                        <li><a class="dropdown-item" href="#">Otra acción</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Enlace</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
    </div>
</nav>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Comportamientos responsive {#responsive-behaviors}
---------------------------------------------------

Las barras de navegación pueden usar `.navbar-toggler`, `.navbar-collapse` y `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` clases para determinar cuándo su contenido colapsa detrás de un botón. En combinación con otras utilidades, puedes elegir fácilmente cuándo mostrar u ocultar elementos concretos.

Para barras de navegación que nunca colapsan, agrega la clase `.navbar-expand` en la barra de navegación. Para las barras de navegación que siempre colapsan, no agregues ninguna clase `.navbar-expand`.

### Toggler {#toggler}

Los alternadores de la barra de navegación están alineados a la izquierda de forma predeterminada, pero si siguen a un elemento hermano como `.navbar-brand`, se alinearán automáticamente con el más a la derecha. Revertir su marcado invertirá la ubicación del conmutador. A continuación se muestran ejemplos de diferentes estilos de alternancia.

Sin `.navbar-brand` mostrado en el punto de interrupción más pequeño:

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/toggler-1.html" >}}
```html {filename="HTML"}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
            aria-label="Alternar navegación">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Marca oculta</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Enlace</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
    </div>
</nav>
```
{{< /demo-iframe >}}

Con un nombre de marca que se muestra a la izquierda y un interruptor a la derecha:

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/toggler-2.html" >}}
```html {filename="HTML"}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Barra de navegación</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
            aria-label="Alternar navegación">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Enlace</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
    </div>
</nav>
```
{{< /demo-iframe >}}

Con un interruptor a la izquierda y el nombre de la marca a la derecha:

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/toggler-3.html" >}}
```html {filename="HTML"}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
            aria-label="Alternar navegación">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Barra de navegación</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Enlace</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
    </div>
</nav>
```
{{< /demo-iframe >}}

### Contenido externo {#external-content}

A veces quieres usar el complemento de colapso para activar un elemento contenedor para contenido que estructuralmente se encuentra fuera de `.navbar` . Debido a que nuestro complemento funciona con la coincidencia de `id` y `data-bs-target`, ¡es fácil de hacer!

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/external-content.html" >}}
```html {filename="HTML"}
<div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
    <div class="bg-dark p-4">
        <h5 class="text-body-emphasis h4">Contenido colapsado</h5>
        <span class="text-body-secondary">Conmutable a través de la marca de la barra de navegación.</span>
    </div>
</div>
<nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
            aria-expanded="false" aria-label="Alternar navegación">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>
```
{{< /demo-iframe >}}

Cuando hagas esto, te recomendamos incluir JavaScript adicional para mover el foco mediante programación al contenedor cuando se abra. De lo contrario, los usuarios de teclados y de tecnologías de asistencia probablemente tendrán dificultades para encontrar el contenido recién revelado, especialmente si el contenedor que se abrió aparece _antes_ del conmutador en la estructura del documento. También recomendamos asegurarse de que el conmutador tenga el atributo `aria-controls`, apuntando al `id` del contenedor de contenido. En teoría, esto permite a los usuarios de tecnología de asistencia saltar directamente desde el conmutador al contenedor que controla, pero actualmente la compatibilidad con esto es bastante irregular.

### Offcanvas {#offcanvas}

Transforma tu barra de navegación desplegable y contraíble en un cajón offcanvas con el [componente offcanvas](/bootstrap/5.3/components/offcanvas). Ampliamos los estilos predeterminados offcanvas y utilizamos nuestras clases `.navbar-expand-*` para crear una barra lateral de navegación dinámica y flexible.

En el siguiente ejemplo, para crear una barra de navegación offcanvas que siempre esté colapsada en todos los puntos de interrupción, omite la clase `.navbar-expand-*` por completo.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/offcanvas-1.html" >}}
```html {filename="HTML"}
<nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Barra de navegación Offcanvas</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Alternar navegación">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Enlace</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Desplegable
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Acción</a></li>
                            <li><a class="dropdown-item" href="#">Otra acción</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex mt-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </div>
</nav>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Para crear una barra de navegación offcanvas que se expanda a una barra de navegación normal en un punto de interrupción específico como `lg`, usa `.navbar-expand-lg`.

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <a class="navbar-brand" href="#">Offcanvas navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
    ...
    </div>
</nav>
```

Cuando uses offcanvas en una barra de navegación oscura, ten en cuenta que es posible que necesites tener un fondo oscuro en el contenido offcanvas para evitar que el texto se vuelva ilegible. En el siguiente ejemplo, agregamos `.navbar-dark` y `.bg-dark` a `.navbar`, `.text-bg-dark` al `.offcanvas`, `.dropdown-menu-dark` al `.dropdown-menu` y `.btn-close-white` a `.btn-close` para un estilo adecuado con un lienzo oscuro.

{{< demo-iframe path="/demos/bootstrap/5.3/components/navbar/offcanvas-2.html" >}}
```html {filename="HTML"}
<nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Barra de navegación oscura Offcanvas</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
            aria-label="Alternar navegación">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Enlace</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Desplegable
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a class="dropdown-item" href="#">Acción</a></li>
                            <li><a class="dropdown-item" href="#">Otra acción</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex mt-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-success" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </div>
</nav>
```
{{< /demo-iframe >}}

Personalización del CSS del componente {#css}
-----------

### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Como parte del enfoque de evolución de variables CSS de Bootstrap, las barras de navegación ahora usan variables CSS locales en `.navbar` para una personalización mejorada en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_navbar.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_navbar.scss)

```scss {filename="scss/_navbar.scss"}
--#{$prefix}navbar-padding-x: #{if($navbar-padding-x == null, 0, $navbar-padding-x)};
--#{$prefix}navbar-padding-y: #{$navbar-padding-y};
--#{$prefix}navbar-color: #{$navbar-light-color};
--#{$prefix}navbar-hover-color: #{$navbar-light-hover-color};
--#{$prefix}navbar-disabled-color: #{$navbar-light-disabled-color};
--#{$prefix}navbar-active-color: #{$navbar-light-active-color};
--#{$prefix}navbar-brand-padding-y: #{$navbar-brand-padding-y};
--#{$prefix}navbar-brand-margin-end: #{$navbar-brand-margin-end};
--#{$prefix}navbar-brand-font-size: #{$navbar-brand-font-size};
--#{$prefix}navbar-brand-color: #{$navbar-light-brand-color};
--#{$prefix}navbar-brand-hover-color: #{$navbar-light-brand-hover-color};
--#{$prefix}navbar-nav-link-padding-x: #{$navbar-nav-link-padding-x};
--#{$prefix}navbar-toggler-padding-y: #{$navbar-toggler-padding-y};
--#{$prefix}navbar-toggler-padding-x: #{$navbar-toggler-padding-x};
--#{$prefix}navbar-toggler-font-size: #{$navbar-toggler-font-size};
--#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-light-toggler-icon-bg)};
--#{$prefix}navbar-toggler-border-color: #{$navbar-light-toggler-border-color};
--#{$prefix}navbar-toggler-border-radius: #{$navbar-toggler-border-radius};
--#{$prefix}navbar-toggler-focus-width: #{$navbar-toggler-focus-width};
--#{$prefix}navbar-toggler-transition: #{$navbar-toggler-transition};
```

Algunas variables CSS adicionales también están presentes en `.navbar-nav`:

[scss/_navbar.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_navbar.scss)

```scss {filename="scss/_navbar.scss"}
--#{$prefix}nav-link-padding-x: 0;
--#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};
@include rfs($nav-link-font-size, --#{$prefix}nav-link-font-size);
--#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};
--#{$prefix}nav-link-color: var(--#{$prefix}navbar-color);
--#{$prefix}nav-link-hover-color: var(--#{$prefix}navbar-hover-color);
--#{$prefix}nav-link-disabled-color: var(--#{$prefix}navbar-disabled-color);
```

La personalización a través de variables CSS se puede ver en la clase `.navbar-dark` donde sobrescribimos valores específicos sin agregar selectores CSS duplicados.

[scss/_navbar.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_navbar.scss)

```scss {filename="scss/_navbar.scss"}
--#{$prefix}navbar-color: #{$navbar-dark-color};
--#{$prefix}navbar-hover-color: #{$navbar-dark-hover-color};
--#{$prefix}navbar-disabled-color: #{$navbar-dark-disabled-color};
--#{$prefix}navbar-active-color: #{$navbar-dark-active-color};
--#{$prefix}navbar-brand-color: #{$navbar-dark-brand-color};
--#{$prefix}navbar-brand-hover-color: #{$navbar-dark-brand-hover-color};
--#{$prefix}navbar-toggler-border-color: #{$navbar-dark-toggler-border-color};
--#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-dark-toggler-icon-bg)};
```

### Variables Sass generales relacionadas {#sass-variables}

Variables para todas las barras de navegación:

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$navbar-padding-y:                  $spacer * .5;
$navbar-padding-x:                  null;

$navbar-nav-link-padding-x:         .5rem;

$navbar-brand-font-size:            $font-size-lg;
// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link
$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2;
$navbar-brand-height:               $navbar-brand-font-size * $line-height-base;
$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) * .5;
$navbar-brand-margin-end:           1rem;

$navbar-toggler-padding-y:          .25rem;
$navbar-toggler-padding-x:          .75rem;
$navbar-toggler-font-size:          $font-size-lg;
$navbar-toggler-border-radius:      $btn-border-radius;
$navbar-toggler-focus-width:        $btn-focus-width;
$navbar-toggler-transition:         box-shadow .15s ease-in-out;

$navbar-light-color:                rgba(var(--#{$prefix}emphasis-color-rgb), .65);
$navbar-light-hover-color:          rgba(var(--#{$prefix}emphasis-color-rgb), .8);
$navbar-light-active-color:         rgba(var(--#{$prefix}emphasis-color-rgb), 1);
$navbar-light-disabled-color:       rgba(var(--#{$prefix}emphasis-color-rgb), .3);
$navbar-light-icon-color:           rgba($body-color, .75);
$navbar-light-toggler-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-icon-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
$navbar-light-toggler-border-color: rgba(var(--#{$prefix}emphasis-color-rgb), .15);
$navbar-light-brand-color:          $navbar-light-active-color;
$navbar-light-brand-hover-color:    $navbar-light-active-color;
```

Variables para la [barra de navegación oscura](#color-schemes):

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$navbar-dark-color:                 rgba($white, .55);
$navbar-dark-hover-color:           rgba($white, .75);
$navbar-dark-active-color:          $white;
$navbar-dark-disabled-color:        rgba($white, .25);
$navbar-dark-icon-color:            $navbar-dark-color;
$navbar-dark-toggler-icon-bg:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-icon-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
$navbar-dark-toggler-border-color:  rgba($white, .1);
$navbar-dark-brand-color:           $navbar-dark-active-color;
$navbar-dark-brand-hover-color:     $navbar-dark-active-color;
```

{{< bootstrap/content-suggestion >}}

### Bucles Sass del componente {#sass-loops}

[Clases de expansión/contraer de la barra de navegación responsive](#responsive-behaviors) (por ejemplo, `.navbar-expand-lg`) se combinan con el mapa `$breakpoints` y se generan a través de un bucle en `scss/_navbar.scss`.

[scss/_navbar.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_navbar.scss)

```scss {filename="scss/_navbar.scss"}
// Generate series of `.navbar-expand-*` responsive classes for configuring
// where your navbar collapses.
.navbar-expand {
    @each $breakpoint in map-keys($grid-breakpoints) {
    $next: breakpoint-next($breakpoint, $grid-breakpoints);
    $infix: breakpoint-infix($next, $grid-breakpoints);

    // stylelint-disable-next-line scss/selector-no-union-class-name
    &#{$infix} {
        @include media-breakpoint-up($next) {
        flex-wrap: nowrap;
        justify-content: flex-start;

        .navbar-nav {
            flex-direction: row;

            .dropdown-menu {
            position: absolute;
            }

            .nav-link {
            padding-right: var(--#{$prefix}navbar-nav-link-padding-x);
            padding-left: var(--#{$prefix}navbar-nav-link-padding-x);
            }
        }

        .navbar-nav-scroll {
            overflow: visible;
        }

        .navbar-collapse {
            display: flex !important; // stylelint-disable-line declaration-no-important
            flex-basis: auto;
        }

        .navbar-toggler {
            display: none;
        }

        .offcanvas {
            // stylelint-disable declaration-no-important
            position: static;
            z-index: auto;
            flex-grow: 1;
            width: auto !important;
            height: auto !important;
            visibility: visible !important;
            background-color: transparent !important;
            border: 0 !important;
            transform: none !important;
            @include box-shadow(none);
            @include transition(none);
            // stylelint-enable declaration-no-important

            .offcanvas-header {
            display: none;
            }

            .offcanvas-body {
            display: flex;
            flex-grow: 0;
            padding: 0;
            overflow-y: visible;
            }
        }
        }
    }
    }
}
```

{{< content-ads/bottom-banner >}}