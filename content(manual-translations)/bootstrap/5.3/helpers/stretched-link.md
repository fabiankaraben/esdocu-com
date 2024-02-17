---
weight: 9
linkTitle: Enlace estirado
title: Uso del ayudante para Enlaces estirados en Bootstrap · Bootstrap en Español v5.3
description: Haz que se pueda hacer clic en cualquier elemento HTML o componente Bootstrap &quot;estirando&quot; un enlace anidado a través de CSS.
noindex: true
---

# Uso del ayudante para Enlaces estirados en Bootstrap

Haz que se pueda hacer clic en cualquier elemento HTML o componente Bootstrap "estirando" un enlace anidado a través de CSS.

{{< content-ads/top-banner >}}

Agrega `.stretched-link` a un enlace para que sea [bloque contenedor](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) en el que se puede hacer clic mediante un pseudoelemento `::after`. En la mayoría de los casos, esto significa que se puede hacer clic en un elemento con `position: relative;` que contiene un enlace con la clase `.stretched-link`. Ten en cuenta [cómo funciona `position` (CSS)](https://www.w3.org/TR/CSS21/visuren.html#propdef-position), `.stretched-link` no se puede mezclar con la mayoría de los elementos de la tabla.

Las tarjetas tienen `position: relative` de forma predeterminada en Bootstrap, por lo que en este caso puedes agregar de forma segura la clase `.stretched-link` a un enlace en la tarjeta sin ningún otro cambio de HTML.

No se recomiendan múltiples enlaces y objetivos táctiles con enlaces extendidos. Sin embargo, algunos estilos de `position` y `z-index` pueden ayudar si fuera necesario.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stretched-link/index-1.html" >}}
```html {filename="HTML"}
    <div class="card" style="width: 18rem;">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
            aria-label="Cap de imagen de tarjeta" focusable="false" preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg">
            <title>Cap de imagen de tarjeta</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <div class="card-body">
            <h5 class="card-title">Tarjeta con enlace estirado</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
            <a href="#" class="btn btn-primary stretched-link">Ve a algún lado</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-1 >}}

La mayoría de los componentes personalizados no tienen `position: relative` de forma predeterminada, por lo que debemos agregar `.position-relative` aquí para evitar que el enlace se extienda fuera del elemento padre.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stretched-link/index-2.html" >}}
```html {filename="HTML"}
    <div class="d-flex position-relative">
        <svg class="bd-placeholder-img flex-shrink-0 me-3" width="144" height="144" role="img"
            aria-label="Imagen de marcador de posición genérico" focusable="false"
            preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <title>Imagen de marcador de posición genérico</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <div>
            <h5 class="mt-0">Componente personalizado con enlace estirado</h5>
            <p>Este es un contenido de marcador de posición para el componente personalizado. Su objetivo es imitar
                cómo se vería algún contenido del mundo real, y lo estamos usando aquí para darle al componente un
                poco de cuerpo y tamaño.</p>
            <a href="#" class="stretched-link">Ve a algún lado</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stretched-link/index-3.html" >}}
```html {filename="HTML"}
    <div class="row g-0 bg-body-secondary position-relative">
        <div class="col-md-6 mb-md-0 p-md-4">
            <svg class="bd-placeholder-img w-100" width="100%" height="200" role="img"
                aria-label="Imagen de marcador de posición genérico" focusable="false"
                preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <title>Imagen de marcador de posición genérico</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>
        </div>
        <div class="col-md-6 p-4 ps-md-0">
            <h5 class="mt-0">Columnas con enlace estirado</h5>
            <p>Otra instancia de contenido de marcador de posición para este otro componente personalizado. Su
                objetivo es imitar cómo se vería algún contenido del mundo real, y lo estamos usando aquí para darle
                al componente un poco de cuerpo y tamaño.</p>
            <a href="#" class="stretched-link">Ve a algún lado</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

Identificar el bloque contenedor {#identifying-the-containing-block}
---------------------------------------------------------------------

{{< content-ads/middle-banner-2 >}}

Si el enlace extendido no parece funcionar, el [bloque contenedor](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block) probablemente será la causa. Las siguientes propiedades CSS convertirán a un elemento en el bloque contenedor:

{{< bootstrap/content-suggestion >}}

* Un valor de `position` distinto de `static`
* Un valor de `transform` o `perspective` distinto de `none`
* Un valor `will-change` de `transform` o `perspective`
* Un valor de `filter` distinto de `none` o un valor `will-change` de `filter` (sólo funciona en Firefox)

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stretched-link/identifying-the-containing-block.html" >}}
```html {filename="HTML"}
    <div class="card" style="width: 18rem;">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
            aria-label="Cap de imagen de tarjeta" focusable="false" preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg">
            <title>Cap de imagen de tarjeta</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <div class="card-body">
            <h5 class="card-title">Tarjeta con enlaces estirados</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
            <p class="card-text">
                <a href="#" class="stretched-link text-danger" style="position: relative;">El enlace extendido no
                    funcionará aquí, porque <code>position: relative</code> se agrega al enlace</a>
            </p>
            <p class="card-text bg-body-tertiary" style="transform: rotate(0);">
                Este <a href="#" class="text-warning stretched-link">enlace extendido</a> solo se distribuirá en la
                etiqueta <code>p</code>, porque se le aplica una transformación.
            </p>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/bottom-banner >}}
