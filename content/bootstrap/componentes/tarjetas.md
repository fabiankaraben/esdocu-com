---
weight: 7
linkTitle: Tarjetas
title: El componente Tarjeta de Bootstrap · Bootstrap en Español v5.3
description: Las tarjetas de Bootstrap proporcionan un contenedor de contenido flexible y extensible con múltiples variantes y opciones.
---

# El componente Tarjeta de Bootstrap

Las tarjetas de Bootstrap proporcionan un contenedor de contenido flexible y extensible con múltiples variantes y opciones.

{{< content-ads/top-banner >}}

Una **tarjeta** es un contenedor de contenido flexible y extensible. Incluye opciones para encabezados y pies de página, una amplia variedad de contenido, colores de fondo contextuales y potentes opciones de visualización. Si estás familiarizado con Bootstrap 3, las tarjetas reemplazan nuestros paneles, wells y thumbnails. Una funcionalidad similar a esos componentes está disponible como clases modificadoras para tarjetas.

## Ejemplo del componente Tarjeta {#example}

Las tarjetas se crean con la menor cantidad de marcas y estilos posibles, pero aun así logran ofrecer un montón de control y personalización. Construidos con flexbox, ofrecen una fácil alineación y se combinan bien con otros componentes de Bootstrap. No tienen `margin` de forma predeterminada, así que utiliza [utilidades de espaciado](/bootstrap/utilidades/espaciado) según sea necesario.

A continuación se muestra un ejemplo de una tarjeta básica con contenido mixto y un ancho fijo. Las tarjetas no tienen un ancho fijo para comenzar, por lo que naturalmente llenarán todo el ancho de su elemento principal. Esto se personaliza fácilmente con nuestras diversas [opciones de tamaño](#sizing).

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/example.html" >}}
```html {filename="HTML"}
    <div class="card" style="width: 18rem;">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
            aria-label="Marcador de posición: Cap de imagen" focusable="false" preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg">
            <title>Marcador de posición</title>
            <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                dy=".3em">Image cap</text>
        </svg>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
            <a href="#" class="btn btn-primary">Ve a algún lado</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

## Tipos de contenido en una Tarjeta {#content-types}

Las tarjetas admiten una amplia variedad de contenido, incluidas imágenes, texto, grupos de listas, enlaces y más. A continuación se muestran ejemplos de lo que se admite.

### Cuerpo {#body}

El componente básico de una tarjeta es el `.card-body`. Úsalo siempre que necesites una sección espaciada dentro de una tarjeta.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/body.html" >}}
```html {filename="HTML"}
    <div class="card">
        <div class="card-body">
            Este es un texto dentro del cuerpo de una tarjeta.
        </div>
    </div>
```
{{< /demo-iframe >}}

### Títulos, texto y enlaces {#titles-text-and-links}

Los títulos de las tarjetas se usan agregando `.card-title` a una etiqueta `<h*>`. De la misma manera, los enlaces se agregan y se colocan uno al lado del otro agregando `.card-link` a una etiqueta `<a>`.

Los subtítulos se usan agregando un `.card-subtitle` a una etiqueta `<h*>`. Si los elementos `.card-title` y `.card-subtitle` se colocan en un elemento `.card-body`, el título y el subtítulo de la tarjeta se muy bien alineado.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/titles-text-and-links.html" >}}
```html {filename="HTML"}
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Subtítulo de la tarjeta</h6>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
            <a href="#" class="card-link">Enlace de tarjeta</a>
            <a href="#" class="card-link">Otro enlace</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Imágenes {#images}

`.card-img-top` coloca una imagen en la parte superior de la tarjeta. Con `.card-text`, se puede agregar texto a la tarjeta. El texto dentro de `.card-text` también se puede diseñar con las etiquetas HTML estándar.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/images.html" >}}
```html {filename="HTML"}
    <div class="card" style="width: 18rem;">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img" aria-label="Marcador de posición: Cap de imagen" focusable="false" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <title>Marcador de posición</title>
            <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
        </svg>
        <div class="card-body">
            <p class="card-text">
                Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la mayor parte del contenido de la tarjeta.
            </p>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Listar grupos {#list-groups}

Crea listas de contenido en una tarjeta con un grupo de listas de descarga.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/list-groups-1.html" >}}
```html {filename="HTML"}
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Un elemento</li>
            <li class="list-group-item">Un segundo elemento</li>
            <li class="list-group-item">Un tercer elemento</li>
        </ul>
    </div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-1 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/list-groups-2.html" >}}
```html {filename="HTML"}
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            Destacados
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Un elemento</li>
            <li class="list-group-item">Un segundo elemento</li>
            <li class="list-group-item">Un tercer elemento</li>
        </ul>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/list-groups-3.html" >}}
```html {filename="HTML"}
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Un elemento</li>
            <li class="list-group-item">Un segundo elemento</li>
            <li class="list-group-item">Un tercer elemento</li>
        </ul>
        <div class="card-footer">
            Pie de página de la tarjeta
        </div>
    </div>
```
{{< /demo-iframe >}}

### Fregadero de cocina {#kitchen-sink}

Mezcla y combina múltiples tipos de contenido para crear la tarjeta que necesitas, o agrega todo ahí. A continuación se muestran estilos de imagen, bloques, estilos de texto y un grupo de listas, todo ello envuelto en una tarjeta de ancho fijo.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/kitchen-sink.html" >}}
```html {filename="HTML"}
    <div class="card" style="width: 18rem;">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
            aria-label="Marcador de posición: Cap de imagen" focusable="false" preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg">
            <title>Marcador de posición</title>
            <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                dy=".3em">Image cap</text>
        </svg>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Un elemento</li>
            <li class="list-group-item">Un segundo elemento</li>
            <li class="list-group-item">Un tercer elemento</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Enlace de tarjeta</a>
            <a href="#" class="card-link">Otro enlace</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Encabezado y pie de página {#header-and-footer}

Agrega un encabezado y/o pie de página opcional dentro de una tarjeta.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/header-and-footer-1.html" >}}
```html {filename="HTML"}
    <div class="card">
        <div class="card-header">
            Destacados
        </div>
        <div class="card-body">
            <h5 class="card-title">Tratamiento especial del título</h5>
            <p class="card-text">Con el texto de respaldo a continuación como introducción natural al contenido
                adicional.</p>
            <a href="#" class="btn btn-primary">Ve a algún lado</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/header-and-footer-2.html" >}}
```html {filename="HTML"}
    <div class="card">
        <h5 class="card-header">Destacados</h5>
        <div class="card-body">
            <h5 class="card-title">Tratamiento especial del título</h5>
            <p class="card-text">Con el texto de respaldo a continuación como introducción natural al contenido
                adicional.</p>
            <a href="#" class="btn btn-primary">Ve a algún lado</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/header-and-footer-3.html" >}}
```html {filename="HTML"}
    <div class="card">
        <div class="card-header">
            Cita
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>Una cita muy conocida, contenida en un elemento blockquote.</p>
                <footer class="blockquote-footer">
                    Alguien famoso en <cite title="Source Title">Source Title</cite>
                </footer>
            </blockquote>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/header-and-footer-4.html" >}}
```html {filename="HTML"}
    <div class="card text-center">
        <div class="card-header">
            Destacados
        </div>
        <div class="card-body">
            <h5 class="card-title">Tratamiento especial del título</h5>
            <p class="card-text">Con el texto de respaldo a continuación como introducción natural al contenido
                adicional.</p>
            <a href="#" class="btn btn-primary">Ve a algún lado</a>
        </div>
        <div class="card-footer text-body-secondary">
            Hace 2 días
        </div>
    </div>
```
{{< /demo-iframe >}}

## Tamaños del componente Tarjeta {#sizing}

Las tarjetas no asumen ningún `width` específico para comenzar, por lo que tendrán un ancho 100% a menos que se indique lo contrario. Puede cambiar esto según sea necesario con CSS personalizado, clases de cuadrícula, mixins Sass de cuadrícula o utilidades.

### Usar el marcado de cuadrícula {#using-grid-markup}

Usando la cuadrícula, envuelve las tarjetas en columnas y filas según sea necesario.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/using-grid-markup.html" >}}
```html {filename="HTML"}
    <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Tratamiento especial del título</h5>
                    <p class="card-text">Con el texto de respaldo a continuación como introducción natural al
                        contenido adicional.</p>
                    <a href="#" class="btn btn-primary">Ve a algún lado</a>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Tratamiento especial del título</h5>
                    <p class="card-text">Con el texto de respaldo a continuación como introducción natural al
                        contenido adicional.</p>
                    <a href="#" class="btn btn-primary">Ve a algún lado</a>
                </div>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Usar utilidades {#using-utilities}

Utiliza nuestras [utilidades de tamaño disponibles](/bootstrap/utilidades/otras-utilidades) para configurar rápidamente el ancho de una tarjeta.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/using-utilities.html" >}}
```html {filename="HTML"}
    <div class="card w-75 mb-3">
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta</h5>
            <p class="card-text">Con el texto de respaldo a continuación como introducción natural al contenido
                adicional.</p>
            <a href="#" class="btn btn-primary">Botón</a>
        </div>
    </div>

    <div class="card w-50">
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta</h5>
            <p class="card-text">Con el texto de respaldo a continuación como introducción natural al contenido
                adicional.</p>
            <a href="#" class="btn btn-primary">Botón</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Usar CSS personalizado {#using-custom-css}

{{< content-ads/middle-banner-2 >}}

Usa CSS personalizado en tus hojas de estilo o como estilos en línea para establecer un ancho.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/using-custom-css.html" >}}
```html {filename="HTML"}
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Tratamiento especial del título</h5>
            <p class="card-text">Con el texto de respaldo a continuación como introducción natural al contenido
                adicional.</p>
            <a href="#" class="btn btn-primary">Ve a algún lado</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

## Alineación de texto del componente Tarjeta {#text-alignment}

Puedes cambiar rápidamente la alineación del texto de cualquier tarjeta, en su totalidad o en partes específicas, con nuestras [clases de alineación de texto](/bootstrap/utilidades/textos/#text-alignment).

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/text-alignment.html" >}}
```html {filename="HTML"}
    <div class="card mb-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Tratamiento especial del título</h5>
            <p class="card-text">Con el texto de respaldo a continuación como introducción natural al contenido
                adicional.</p>
            <a href="#" class="btn btn-primary">Ve a algún lado</a>
        </div>
    </div>

    <div class="card text-center mb-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Tratamiento especial del título</h5>
            <p class="card-text">Con el texto de respaldo a continuación como introducción natural al contenido
                adicional.</p>
            <a href="#" class="btn btn-primary">Ve a algún lado</a>
        </div>
    </div>

    <div class="card text-end" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Tratamiento especial del título</h5>
            <p class="card-text">Con el texto de respaldo a continuación como introducción natural al contenido
                adicional.</p>
            <a href="#" class="btn btn-primary">Ve a algún lado</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

## Navegación en el componente Tarjeta {#navigation}

Agrega algo de navegación al encabezado (o bloque) de una tarjeta con los [componentes de navegación](/bootstrap/componentes/navs-tabs) de Bootstrap.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/navigation-1.html" >}}
```html {filename="HTML"}
    <div class="card text-center">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="true" href="#">Activo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Enlace</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <h5 class="card-title">Tratamiento especial del título</h5>
            <p class="card-text">Con el texto de respaldo a continuación como introducción natural al contenido
                adicional.</p>
            <a href="#" class="btn btn-primary">Ve a algún lado</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/navigation-2.html" >}}
```html {filename="HTML"}
    <div class="card text-center">
        <div class="card-header">
            <ul class="nav nav-pills card-header-pills">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Activo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Enlace</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Deshabilitado</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <h5 class="card-title">Tratamiento especial del título</h5>
            <p class="card-text">Con el texto de respaldo a continuación como introducción natural al contenido
                adicional.</p>
            <a href="#" class="btn btn-primary">Ve a algún lado</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

## Imágenes en el componente Tarjeta {#images-1}

Las tarjetas incluyen algunas opciones para trabajar con imágenes. Elige entre agregar "caps de imagen" en cualquiera de los extremos de una tarjeta, superponer imágenes con el contenido de la tarjeta o simplemente incrustar la imagen en una tarjeta.

{{< bootstrap/content-suggestion >}}

### Image caps {#image-caps}

Al igual que los encabezados y pies de página, las tarjetas pueden incluir “caps de imagen” superiores e inferiores: imágenes en la parte superior o inferior de una tarjeta.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/image-caps.html" >}}
```html {filename="HTML"}
    <div class="card mb-3">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
            aria-label="Marcador de posición: Cap de imagen" focusable="false" preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg">
            <title>Marcador de posición</title>
            <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                dy=".3em">Image cap</text>
        </svg>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta</h5>
            <p class="card-text">Esta es una tarjeta más amplia con texto de respaldo a continuación como
                introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
            <p class="card-text"><small class="text-body-secondary">Última actualización hace 3 minutos</small></p>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta</h5>
            <p class="card-text">Esta es una tarjeta más amplia con texto de respaldo a continuación como
                introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
            <p class="card-text"><small class="text-body-secondary">Última actualización hace 3 minutos</small></p>
        </div>
        <svg class="bd-placeholder-img card-img-bottom" width="100%" height="180" role="img"
            aria-label="Marcador de posición: Cap de imagen" focusable="false" preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg">
            <title>Marcador de posición</title>
            <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                dy=".3em">Image cap</text>
        </svg>
    </div>
```
{{< /demo-iframe >}}

### Superposiciones de imágenes {#image-overlays}

Convierte una imagen en el fondo de una tarjeta y superpón el texto de tu tarjeta. Dependiendo de la imagen, es posible que necesites o no estilos o utilidades adicionales.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/image-overlays.html" >}}
```html {filename="HTML"}
    <div class="card text-bg-dark">
        <svg class="bd-placeholder-img bd-placeholder-img-lg card-img" width="100%" height="270" role="img"
            aria-label="Marcador de posición: Imagen de tarjeta" focusable="false"
            preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <title>Marcador de posición</title>
            <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                dy=".3em">Imagen de tarjeta</text>
        </svg>
        <div class="card-img-overlay">
            <h5 class="card-title">Título de la tarjeta</h5>
            <p class="card-text">Esta es una tarjeta más amplia con texto de respaldo a continuación como
                introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
            <p class="card-text"><small>Última actualización hace 3 minutos</small></p>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< callout type="info" emoji="" >}}
Ten en cuenta que el contenido no debe ser más grande que la altura de la imagen. Si el contenido es más grande que la imagen, el contenido se mostrará fuera de la imagen.
{{< /callout >}}

## Tarjetas horizontales {#horizontal}

Utilizando una combinación de clases de cuadrícula y utilidades, las tarjetas se pueden hacer horizontales de una manera responsive y compatible con dispositivos móviles. En el siguiente ejemplo, eliminamos los márgenes de la cuadrícula con `.g-0` y usamos las clases `.col-md-*` para hacer que la tarjeta sea horizontal en el punto de interrupción `md`. Es posible que se necesiten más ajustes dependiendo del contenido de tu tarjeta.

{{< content-ads/middle-banner-3 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/horizontal.html" >}}
```html {filename="HTML"}
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="250" role="img"
                    aria-label="Marcador de posición: Imagen" focusable="false" preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Imagen</text>
                </svg>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más amplia con texto de respaldo a continuación como
                        introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
                    <p class="card-text"><small class="text-body-secondary">Última actualización hace 3
                            minutos</small></p>
                </div>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

## Estilos de tarjetas {#card-styles}

Las tarjetas incluyen varias opciones para personalizar sus fondos, bordes y colores.

### Fondo y color {#background-and-color}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Establece un `background-color` con un `color` de primer plano contrastante con [nuestros `.text-bg-{color}` ayudantes](/bootstrap/helpers). Anteriormente era necesario emparejar manualmente tu elección de utilidades para diseñar [`.text-{color}`](/bootstrap/utilidades/colores) y [`.bg-{color}`](/bootstrap/utilidades/background), que aún puedes usar si lo prefieres.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/background-and-color.html" >}}
```html {filename="HTML"}
    <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta principal</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta secundaria</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card text-bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta de éxito</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card text-bg-danger mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta de peligro</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card text-bg-warning mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta de advertencia</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card text-bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta de información</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta clara</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta oscura</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

{{< callout type="info" emoji="" >}}
**Consejo de accesibilidad:** El uso de colores para agregar significado solo proporciona una indicación visual, que no se transmitirá a los usuarios de tecnologías de asistencia como lectores de pantalla. Asegúrate de que el significado sea obvio a partir del contenido mismo (por ejemplo, el texto visible con un [_suficiente_ contraste de color](/bootstrap/comenzando#color-contrast)) o se incluye a través de medios alternativos, como texto adicional oculto con la clase `.visually-hidden`.
{{< /callout >}}

### Bordes del componente Tarjeta {#border}

Usa [utilidades de borde](/bootstrap/utilidades/bordes) para cambiar solo el `border-color` de una tarjeta. Ten en cuenta que puedes colocar clases `.text-{color}` en la `.card` principal o en un subconjunto del contenido de la tarjeta como se muestra a continuación.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/border.html" >}}
```html {filename="HTML"}
    <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body text-primary">
            <h5 class="card-title">Título de la tarjeta principal</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card border-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body text-secondary">
            <h5 class="card-title">Título de la tarjeta secundaria</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body text-success">
            <h5 class="card-title">Título de la tarjeta de éxito</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card border-danger mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body text-danger">
            <h5 class="card-title">Título de la tarjeta de peligro</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card border-warning mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta de advertencia</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card border-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta de información</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card border-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta clara</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <h5 class="card-title">Título de la tarjeta oscura</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Utilidades de Mixins {#mixins-utilities}

También puedes cambiar los bordes en el encabezado y pie de página de la tarjeta según sea necesario, e incluso eliminar su `background-color` con `.bg-transparent`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/mixins-utilities.html" >}}
```html {filename="HTML"}
    <div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success">Encabezado</div>
        <div class="card-body text-success">
            <h5 class="card-title">Título de la tarjeta de éxito</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
        <div class="card-footer bg-transparent border-success">Pie de página</div>
    </div>
```
{{< /demo-iframe >}}

## Diseño de tarjeta {#card-layout}

Además de diseñar el contenido de las tarjetas, Bootstrap incluye algunas opciones para diseñar series de tarjetas. Por el momento, **estas opciones de diseño aún no son responsive**.

### Grupos de tarjetas {#card-groups}

Utiliza grupos de tarjetas para representar las tarjetas como un único elemento adjunto con columnas de igual ancho y alto. Los grupos de tarjetas comienzan apilados y usan `display: flex;` para unirse con dimensiones uniformes comenzando en el punto de interrupción `sm`.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/card-groups-1.html" >}}
```html {filename="HTML"}
    <div class="card-group">
        <div class="card">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
                aria-label="Marcador de posición: Cap de imagen" focusable="false"
                preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <title>Marcador de posición</title>
                <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                    dy=".3em">Image cap</text>
            </svg>
            <div class="card-body">
                <h5 class="card-title">Título de la tarjeta</h5>
                <p class="card-text">Esta es una tarjeta más amplia con texto de respaldo a continuación como
                    introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
                <p class="card-text"><small class="text-body-secondary">Última actualización hace 3 minutos</small>
                </p>
            </div>
        </div>
        <div class="card">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
                aria-label="Marcador de posición: Cap de imagen" focusable="false"
                preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <title>Marcador de posición</title>
                <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                    dy=".3em">Image cap</text>
            </svg>
            <div class="card-body">
                <h5 class="card-title">Título de la tarjeta</h5>
                <p class="card-text">Esta tarjeta tiene un texto de respaldo a continuación como una introducción
                    natural al contenido adicional.</p>
                <p class="card-text"><small class="text-body-secondary">Última actualización hace 3 minutos</small>
                </p>
            </div>
        </div>
        <div class="card">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
                aria-label="Marcador de posición: Cap de imagen" focusable="false"
                preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <title>Marcador de posición</title>
                <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                    dy=".3em">Image cap</text>
            </svg>
            <div class="card-body">
                <h5 class="card-title">Título de la tarjeta</h5>
                <p class="card-text">Esta es una tarjeta más amplia con texto de respaldo a continuación como
                    introducción natural al contenido adicional. Esta tarjeta tiene un contenido aún más largo que
                    la primera para mostrar esa acción de igual altura.</p>
                <p class="card-text"><small class="text-body-secondary">Última actualización hace 3 minutos</small>
                </p>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-4 >}}

Cuando uses grupos de tarjetas con pies de página, su contenido se alineará automáticamente.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/card-groups-2.html" >}}
```html {filename="HTML"}
    <div class="card-group">
        <div class="card">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
                aria-label="Marcador de posición: Cap de imagen" focusable="false"
                preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <title>Marcador de posición</title>
                <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                    dy=".3em">Image cap</text>
            </svg>
            <div class="card-body">
                <h5 class="card-title">Título de la tarjeta</h5>
                <p class="card-text">Esta es una tarjeta más amplia con texto de respaldo a continuación como
                    introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">Última actualización hace 3 minutos</small>
            </div>
        </div>
        <div class="card">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
                aria-label="Marcador de posición: Cap de imagen" focusable="false"
                preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <title>Marcador de posición</title>
                <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                    dy=".3em">Image cap</text>
            </svg>
            <div class="card-body">
                <h5 class="card-title">Título de la tarjeta</h5>
                <p class="card-text">Esta tarjeta tiene un texto de respaldo a continuación como una introducción
                    natural al contenido adicional.</p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">Última actualización hace 3 minutos</small>
            </div>
        </div>
        <div class="card">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
                aria-label="Marcador de posición: Cap de imagen" focusable="false"
                preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <title>Marcador de posición</title>
                <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                    dy=".3em">Image cap</text>
            </svg>
            <div class="card-body">
                <h5 class="card-title">Título de la tarjeta</h5>
                <p class="card-text">Esta es una tarjeta más amplia con texto de respaldo a continuación como
                    introducción natural al contenido adicional. Esta tarjeta tiene un contenido aún más largo que
                    la primera para mostrar esa acción de igual altura.</p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">Última actualización hace 3 minutos</small>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Tarjetas de cuadrícula {#grid-cards}

Usa el sistema de grid de Bootstrap y sus [`.row-cols` (clases)](/bootstrap/grilla/#row-columns) para controlar cuántas columnas de la cuadrícula (envueltas alrededor de tus tarjetas) muestra por fila. Por ejemplo, aquí está `.row-cols-1` colocando las tarjetas en una columna y `.row-cols-md-2` dividiendo cuatro tarjetas para lograr el mismo ancho en varias filas, desde el punto de interrupción medio hacia arriba.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/grid-cards-1.html" >}}
```html {filename="HTML"}
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="140" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más larga con texto de respaldo a continuación como
                        introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="140" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más larga con texto de respaldo a continuación como
                        introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="140" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más larga con texto de respaldo a continuación como
                        introducción natural al contenido adicional.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="140" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más larga con texto de respaldo a continuación como
                        introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
                </div>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

Cámbialo a `.row-cols-3` y verás la cuarta tarjeta con envoltura.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/grid-cards-2.html" >}}
```html {filename="HTML"}
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="140" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más larga con texto de respaldo a continuación como
                        introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="140" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más larga con texto de respaldo a continuación como
                        introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="140" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más larga con texto de respaldo a continuación como
                        introducción natural al contenido adicional.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="140" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más larga con texto de respaldo a continuación como
                        introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
                </div>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

Cuando necesites la misma altura, agrega `.h-100` a las tarjetas. Si deseas alturas iguales de forma predeterminada, puedes configurar `$card-height: 100%` en Sass.

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/grid-cards-3.html" >}}
```html {filename="HTML"}
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card h-100">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="140" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más larga con texto de respaldo a continuación como
                        introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="140" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta corta.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="140" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más larga con texto de respaldo a continuación como
                        introducción natural al contenido adicional.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="140" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más larga con texto de respaldo a continuación como
                        introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
                </div>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

Al igual que con los grupos de tarjetas, los pies de página de las tarjetas se alinearán automáticamente.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/card/grid-cards-4.html" >}}
```html {filename="HTML"}
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card h-100">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más amplia con texto de respaldo a continuación como
                        introducción natural al contenido adicional. Este contenido es un poco más largo.</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Última actualización hace 3 minutos</small>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta tarjeta tiene un texto de respaldo a continuación como una
                        introducción natural al contenido adicional.</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Última actualización hace 3 minutos</small>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
                    aria-label="Marcador de posición: Cap de imagen" focusable="false"
                    preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <title>Marcador de posición</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
                        dy=".3em">Image cap</text>
                </svg>
                <div class="card-body">
                    <h5 class="card-title">Título de la tarjeta</h5>
                    <p class="card-text">Esta es una tarjeta más amplia con texto de respaldo a continuación como
                        introducción natural al contenido adicional. Esta tarjeta tiene un contenido aún más largo
                        que la primera para mostrar esa acción de igual altura.</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Última actualización hace 3 minutos</small>
                </div>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Conseguir el comportamiento Masonry {#masonry}

En `v4` utilizamos una técnica exclusiva de CSS para imitar el comportamiento de [Columnas tipo Masonry](https://masonry.desandro.com), pero esta técnica tenía muchos [efectos secundarios](https://github.com/twbs/bootstrap/pull/28922) desagradables. Si deseas tener este tipo de diseño en `v5` puedes utilizar el complemento Masonry. **Masonry no está incluido en Bootstrap**, pero hemos creado un [ejemplo de demostración](https://getbootstrap.com/docs/5.3/examples/masonry) para ayudarle a comenzar.

## Personalización del CSS del componente {#css}

### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Como parte del enfoque de variables CSS en evolución de Bootstrap, las tarjetas ahora usan variables CSS locales en `.card` para una personalización mejorada en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_card.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_card.scss)

```scss {filename="scss/_card.scss"}
--#{$prefix}card-spacer-y: #{$card-spacer-y};
--#{$prefix}card-spacer-x: #{$card-spacer-x};
--#{$prefix}card-title-spacer-y: #{$card-title-spacer-y};
--#{$prefix}card-title-color: #{$card-title-color};
--#{$prefix}card-subtitle-color: #{$card-subtitle-color};
--#{$prefix}card-border-width: #{$card-border-width};
--#{$prefix}card-border-color: #{$card-border-color};
--#{$prefix}card-border-radius: #{$card-border-radius};
--#{$prefix}card-box-shadow: #{$card-box-shadow};
--#{$prefix}card-inner-border-radius: #{$card-inner-border-radius};
--#{$prefix}card-cap-padding-y: #{$card-cap-padding-y};
--#{$prefix}card-cap-padding-x: #{$card-cap-padding-x};
--#{$prefix}card-cap-bg: #{$card-cap-bg};
--#{$prefix}card-cap-color: #{$card-cap-color};
--#{$prefix}card-height: #{$card-height};
--#{$prefix}card-color: #{$card-color};
--#{$prefix}card-bg: #{$card-bg};
--#{$prefix}card-img-overlay-padding: #{$card-img-overlay-padding};
--#{$prefix}card-group-margin: #{$card-group-margin};
```

{{< content-ads/middle-banner-5 >}}

{{< bootstrap/content-suggestion >}}

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$card-spacer-y:                     $spacer;
$card-spacer-x:                     $spacer;
$card-title-spacer-y:               $spacer * .5;
$card-title-color:                  null;
$card-subtitle-color:               null;
$card-border-width:                 var(--#{$prefix}border-width);
$card-border-color:                 var(--#{$prefix}border-color-translucent);
$card-border-radius:                var(--#{$prefix}border-radius);
$card-box-shadow:                   null;
$card-inner-border-radius:          subtract($card-border-radius, $card-border-width);
$card-cap-padding-y:                $card-spacer-y * .5;
$card-cap-padding-x:                $card-spacer-x;
$card-cap-bg:                       rgba(var(--#{$prefix}body-color-rgb), .03);
$card-cap-color:                    null;
$card-height:                       null;
$card-color:                        null;
$card-bg:                           var(--#{$prefix}body-bg);
$card-img-overlay-padding:          $spacer;
$card-group-margin:                 $grid-gutter-width * .5;
```

{{< content-ads/bottom-banner >}}
