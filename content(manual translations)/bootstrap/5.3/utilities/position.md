---
weight: 13
linkTitle: Posición
title: Uso de las utilidades de Posición en Bootstrap · Bootstrap en Español v5.3
description: Usa estas utilidades abreviadas para configurar rápidamente la posición de un elemento.
---

# Uso de las utilidades de Posición en Bootstrap

Usa estas utilidades abreviadas para configurar rápidamente la posición de un elemento.

{{< content-ads/top-banner >}}

Valores de posición {#position-values}
---------------------------------------

Hay clases de posicionamiento rápido disponibles, aunque no responsive.

```html {filename="HTML"}
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
```

Organizar elementos {#arrange-elements}
----------------------------------------

Organiza elementos fácilmente con las utilidades de posicionamiento de bordes. El formato es `{property}-{position}`.

Donde _property_ es una de:

{{< content-ads/middle-banner-1 >}}

* `top` \- para la posición vertical `top`.
* `start` \- para la posición horizontal `left` (en LTR).
* `bottom` \- para la posición vertical `bottom`.
* `end` \- para la posición horizontal `right` (en LTR).

Donde _posición_ es una de:

* `0` \- para `0` posición del borde.
* `50` \- para `50%` posición del borde.
* `100` \- para `100%` posición del borde.

(Puedes agregar más valores de posición agregando entradas a la variable de mapa Sass `$position-values`).

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/position/arrange-elements.html" >}}
```html {filename="HTML"}
    <div class="position-relative">
        <div class="position-absolute top-0 start-0"></div>
        <div class="position-absolute top-0 end-0"></div>
        <div class="position-absolute top-50 start-50"></div>
        <div class="position-absolute bottom-50 end-50"></div>
        <div class="position-absolute bottom-0 start-0"></div>
        <div class="position-absolute bottom-0 end-0"></div>
    </div>
```
{{< /demo-iframe >}}

Centrar elementos {#center-elements}
-------------------------------------

{{< content-ads/middle-banner-2 >}}

Además, también puedes centrar los elementos con la clase de utilidad de transformación `.translate-middle`.

Esta clase aplica las transformaciones `translateX(-50%)` y `translateY(-50%)` al elemento que, en La combinación con las utilidades de posicionamiento de bordes te permite centrar absolutamente un elemento.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/position/center-elements-1.html" >}}
```html {filename="HTML"}
    <div class="position-relative">
        <div class="position-absolute top-0 start-0 translate-middle"></div>
        <div class="position-absolute top-0 start-50 translate-middle"></div>
        <div class="position-absolute top-0 start-100 translate-middle"></div>
        <div class="position-absolute top-50 start-0 translate-middle"></div>
        <div class="position-absolute top-50 start-50 translate-middle"></div>
        <div class="position-absolute top-50 start-100 translate-middle"></div>
        <div class="position-absolute top-100 start-0 translate-middle"></div>
        <div class="position-absolute top-100 start-50 translate-middle"></div>
        <div class="position-absolute top-100 start-100 translate-middle"></div>
    </div>
```
{{< /demo-iframe >}}

Al agregar las clases `.translate-middle-x` o `.translate-middle-y`, los elementos solo se pueden colocar en horizontal o en dirección vertical.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/position/center-elements-2.html" >}}
```html {filename="HTML"}
    <div class="position-relative">
        <div class="position-absolute top-0 start-0"></div>
        <div class="position-absolute top-0 start-50 translate-middle-x"></div>
        <div class="position-absolute top-0 end-0"></div>
        <div class="position-absolute top-50 start-0 translate-middle-y"></div>
        <div class="position-absolute top-50 start-50 translate-middle"></div>
        <div class="position-absolute top-50 end-0 translate-middle-y"></div>
        <div class="position-absolute bottom-0 start-0"></div>
        <div class="position-absolute bottom-0 start-50 translate-middle-x"></div>
        <div class="position-absolute bottom-0 end-0"></div>
    </div>
```
{{< /demo-iframe >}}

Ejemplos {#examples}
---------------------

{{< content-ads/middle-banner-3 >}}

Aquí tienes algunos ejemplos de la vida real de estas clases:

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/position/examples-1.html" >}}
```html {filename="HTML"}
    <button type="button" class="btn btn-primary position-relative">
        Correos <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99
            <span class="visually-hidden">mensajes no leídos</span></span>
    </button>

    <div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
        Marcador <svg width="1em" height="1em" class="position-absolute top-100 start-50 translate-middle mt-1"
            fill="var(--bs-secondary)" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z">
            </path>
        </svg>
    </div>

    <button type="button" class="btn btn-primary position-relative">
        Alertas <span
            class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span
                class="visually-hidden">mensajes no leídos</span></span>
    </button>
```
{{< /demo-iframe >}}

Puedes usar estas clases con componentes existentes para crear otros nuevos. Recuerda que puedes ampliar su funcionalidad agregando entradas a la variable `$position-values`.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/position/examples-2.html" >}}
```html {filename="HTML"}
    <div class="position-relative m-4">
        <div class="progress" role="progressbar" aria-label="Progreso" aria-valuenow="50" aria-valuemin="0"
            aria-valuemax="100" style="height: 1px;">
            <div class="progress-bar" style="width: 50%"></div>
        </div>
        <button type="button"
            class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
            style="width: 2rem; height:2rem;">1</button>
        <button type="button"
            class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
            style="width: 2rem; height:2rem;">2</button>
        <button type="button"
            class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
            style="width: 2rem; height:2rem;">3</button>
    </div>
```
{{< /demo-iframe >}}

Personalización del CSS {#css}
-----------

{{< content-ads/middle-banner-4 >}}

### Mapas de Sass {#sass-maps}

Los valores de utilidad de posición predeterminados se declaran en un mapa Sass y luego se usan para generar nuestras utilidades.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$position-values: (
    0: 0,
    50: 50%,
    100: 100%
);
```

### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de posición se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

{{< content-ads/middle-banner-5 >}}

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"position": (
    property: position,
    values: static relative absolute fixed sticky
),
"top": (
    property: top,
    values: $position-values
),
"bottom": (
    property: bottom,
    values: $position-values
),
"start": (
    property: left,
    class: start,
    values: $position-values
),
"end": (
    property: right,
    class: end,
    values: $position-values
),
"translate-middle": (
    property: transform,
    class: translate-middle,
    values: (
    null: translate(-50%, -50%),
    x: translateX(-50%),
    y: translateY(-50%),
    )
),
```

{{< content-ads/bottom-banner >}}
