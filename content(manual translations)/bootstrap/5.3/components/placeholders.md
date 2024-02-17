---
weight: 18
linkTitle: Marcadores de posición
title: Componentes Marcadores de posición de Bootstrap · Bootstrap en Español v5.3
description: Usa marcadores de posición de carga para tus componentes o páginas para indicar que es posible que aún se esté cargando algo.
---

# Componentes Marcadores de posición de Bootstrap

Usa marcadores de posición de carga para tus componentes o páginas para indicar que es posible que aún se esté cargando algo.

{{< content-ads/top-banner >}}

Los marcadores de posición se pueden utilizar para mejorar la experiencia de tu aplicación. Están creados únicamente con HTML y CSS, lo que significa que no necesitas JavaScript para crearlos. Sin embargo, necesitarás algo de JavaScript personalizado para alternar su visibilidad. Su apariencia, color y tamaño se pueden personalizar fácilmente con nuestras clases de utilidades.

Ejemplo del componente Marcador de posición {#example}
-------------------

En el siguiente ejemplo, tomamos un componente de tarjeta típico y lo recreamos con marcadores de posición aplicados para crear una "tarjeta de carga". El tamaño y las proporciones son los mismos entre los dos.

{{< demo-iframe path="/demos/bootstrap/5.3/components/placeholders/example.html" >}}
```html {filename="HTML"}
<div class="card">
    <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
        aria-label="Marcador de posición" focusable="false" preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg">
        <title>Marcador de posición</title>
        <rect width="100%" height="100%" fill="#20c997"></rect>
    </svg>
    <div class="card-body">
        <h5 class="card-title">Título de la tarjeta</h5>
        <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
            mayor parte del contenido de la tarjeta.</p>
        <a href="#" class="btn btn-primary">Ve a algún lado</a>
    </div>
</div>
<div class="card" aria-hidden="true">
    <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
        aria-label="Marcador de posición" focusable="false" preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg">
        <title>Marcador de posición</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
    </svg>
    <div class="card-body">
        <div class="h5 card-title placeholder-glow">
            <span class="placeholder col-6"></span>
        </div>
        <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
        </p>
        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
    </div>
</div>
```
{{< /demo-iframe >}}

Cómo funciona el componente Marcador de posición {#how-it-works}
-------------------------------

{{< content-ads/middle-banner-1 >}}

Crea marcadores de posición con la clase `.placeholder` y una clase de columna de cuadrícula (por ejemplo, `.col-6`) para establecer el `width`. Pueden reemplazar el texto dentro de un elemento o agregarse como una clase modificadora a un componente existente.

Aplicamos estilos adicionales a los `.btn` mediante `::before` para garantizar que la `height` sea respetado. Puedes ampliar este patrón para otras situaciones según sea necesario, o agregar un `&nbsp;` dentro del elemento para reflejar la altura cuando el texto real se representa en su lugar.

{{< demo-iframe path="/demos/bootstrap/5.3/components/placeholders/how-it-works.html" >}}
```html {filename="HTML"}
<p aria-hidden="true">
    <span class="placeholder col-6"></span>
</p>

<a class="btn btn-primary disabled placeholder col-4" aria-disabled="true"></a>
```
{{< /demo-iframe >}}

{{< callout type="info" emoji="" >}}
El uso de `aria-hidden="true"` solo indica que el elemento debe estar oculto para los lectores de pantalla. El comportamiento de _carga_ del marcador de posición depende de cómo los autores utilizarán realmente los estilos del marcador de posición, cómo planean actualizar las cosas, etc. Es posible que se necesite algo de código JavaScript para _intercambiar_ el estado del marcador de posición e informar a los usuarios de AT de la actualización.
{{< /callout >}}

### Ancho {#width}

{{< content-ads/middle-banner-2 >}}

Puedes cambiar el `width` mediante clases de columnas de cuadrícula, utilidades de ancho o estilos en línea.

{{< demo-iframe path="/demos/bootstrap/5.3/components/placeholders/width.html" >}}
```html {filename="HTML"}
<span class="placeholder col-6"></span>
<span class="placeholder w-75"></span>
<span class="placeholder" style="width: 25%;"></span>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

### Color {#color}

De forma predeterminada, el `placeholder` usa `currentColor`. Esto se puede sobrescribir con un color personalizado o una clase de utilidad.

{{< content-ads/middle-banner-3 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/placeholders/color.html" >}}
```html {filename="HTML"}
<span class="placeholder col-12"></span>
<span class="placeholder col-12 bg-primary"></span>
<span class="placeholder col-12 bg-secondary"></span>
<span class="placeholder col-12 bg-success"></span>
<span class="placeholder col-12 bg-danger"></span>
<span class="placeholder col-12 bg-warning"></span>
<span class="placeholder col-12 bg-info"></span>
<span class="placeholder col-12 bg-light"></span>
<span class="placeholder col-12 bg-dark"></span>
```
{{< /demo-iframe >}}

### Tamaños {#sizing}

El tamaño de los `.placeholder`se basa en el estilo tipográfico del elemento principal. Personalízalos con modificadores de tamaño: `.placeholder-lg`, `.placeholder-sm` o `.placeholder-xs`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/placeholders/sizing.html" >}}
```html {filename="HTML"}
<span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span>
```
{{< /demo-iframe >}}

### Animación {#animation}

{{< content-ads/middle-banner-4 >}}

Anima marcadores de posición con `.placeholder-glow` o `.placeholder-wave` para transmitir mejor la percepción de que algo está _activamente_ cargado.

{{< demo-iframe path="/demos/bootstrap/5.3/components/placeholders/animation.html" >}}
```html {filename="HTML"}
<p class="placeholder-glow">
    <span class="placeholder col-12"></span>
</p>

<p class="placeholder-wave">
    <span class="placeholder col-12"></span>
</p>
```
{{< /demo-iframe >}}

Personalización del CSS del componente {#css}
-----------

{{< bootstrap/content-suggestion >}}

### Variables Sass generales relacionadas {#sass-variables}

{{< content-ads/middle-banner-5 >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$placeholder-opacity-max:           .5;
$placeholder-opacity-min:           .2;
```

{{< content-ads/bottom-banner >}}
