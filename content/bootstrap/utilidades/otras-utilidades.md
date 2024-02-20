---
weight: 18
linkTitle: Otras utilidades
title: Uso de otras utilidades de Bootstrap · Bootstrap en Español v5.3
description: "Alterna la flotación de cualquier elemento, su opacidad, desbordamiento, entre otras utilidades responsive."
---

# Otras utilidades interesantes de Bootstrap

{{< content-ads/top-banner >}}

## Uso de las utilidades de Propiedad display en Bootstrap

Alterna de manera rápida y responsive el valor de visualización de los componentes y más con nuestras utilidades de visualización. Incluye soporte para algunos de los valores más comunes, así como algunos extras para controlar la visualización al imprimir.

### Cómo funciona {#how-it-works}

Cambiar el valor de [`display` (propiedad)](https://developer.mozilla.org/en-US/docs/Web/CSS/display) con nuestras clases de utilidad de visualización responsive. Admitimos deliberadamente solo un subconjunto de todos los valores posibles para `display`. Las clases se pueden combinar para obtener varios efectos según sea necesario.

### Notación {#notation}

Mostrar clases de utilidad que se aplican a todos los [puntos de interrupción](/bootstrap/layout), desde `xs` a `xxl`, no tienen abreviaturas de punto de interrupción. Esto se debe a que esas clases se aplican desde `min-width: 0;` en adelante y, por lo tanto, no están vinculadas a una media query. Los puntos de interrupción restantes, sin embargo, incluyen una abreviatura de punto de interrupción.

Como tal, las clases se nombran usando el formato:

* `.d-{value}` para `xs`
* `.d-{breakpoint}-{value}` para `sm`, `md`, `lg`, `xl` y `xxl`.

Donde _valor_ es uno de:

* `none`
* `inline`
* `inline-block`
* `block`
* `grid`
* `inline-grid`
* `table`
* `table-cell`
* `table-row`
* `flex`
* `inline-flex`

Los valores de visualización se pueden modificar cambiando los valores de `display` definidos en `$utilities` y recompilando el SCSS.

Las media queries afectan los anchos de pantalla con el punto de interrupción dado _o mayor_. Por ejemplo, `.d-lg-none` establece `display: none;` en pantallas `lg`, `xl` y `xxl`.

### Ejemplos {#examples}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/display/examples-1.html" >}}
```html {filename="HTML"}
    <div class="d-inline p-2 text-bg-primary">d-inline</div>
    <div class="d-inline p-2 text-bg-dark">d-inline</div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/display/examples-2.html" >}}
```html {filename="HTML"}
    <span class="d-block p-2 text-bg-primary">d-block</span>
    <span class="d-block p-2 text-bg-dark">d-block</span>
```
{{< /demo-iframe >}}

### Ocultar elementos {#hiding-elements}

Para un desarrollo más rápido y compatible con dispositivos móviles, usa clases de visualización responsive para mostrar y ocultar elementos por dispositivo. Evita crear versiones completamente diferentes del mismo sitio; en su lugar, oculta elementos de manera responsive para cada tamaño de pantalla.

Para ocultar elementos simplemente usa la clase `.d-none` o una de las clases `.d-{sm,md,lg,xl,xxl}-none` para cualquier variación de pantalla responsive.

{{< bootstrap/content-suggestion >}}

Para mostrar un elemento solo en un intervalo determinado de tamaños de pantalla, puedes combinar una clase `.d-*-none` con una clase clase `.d-*-*`, por ejemplo `.d-none .d-md-block .d-xl-none .d-xxl-none` ocultará el elemento para todos los tamaños de pantalla excepto en dispositivos medianos y grandes.

| Tamaño de pantalla  | Clase                             |
| ------------------- | --------------------------------- |
| Oculto en todos     | `.d-none`                         |
| Oculto solo en xs   | `.d-none .d-sm-block`             |
| Oculto solo en sm   | `.d-sm-none .d-md-block`          |
| Oculto solo en md   | `.d-md-none .d-lg-block`          |
| Oculto solo en lg   | `.d-lg-none .d-xl-block`          |
| Oculto solo en xl   | `.d-xl-none .d-xxl-block`         |
| Oculto solo en xxl  | `.d-xxl-none`                     |
| Visible en todos    | `.d-block`                        |
| Visible solo en xs  | `.d-block .d-sm-none`             |
| Visible solo en sm  | `.d-none .d-sm-block .d-md-none`  |
| Visible solo en md  | `.d-none .d-md-block .d-lg-none`  |
| Visible solo en lg  | `.d-none .d-lg-block .d-xl-none`  |
| Visible solo en xl  | `.d-none .d-xl-block .d-xxl-none` |
| Visible solo en xxl | `.d-none .d-xxl-block`            |

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/display/hiding-elements.html" >}}
```html {filename="HTML"}
    <div class="d-lg-none">ocultar en pantallas lg y más anchas</div>
    <div class="d-none d-lg-block">ocultar en pantallas más pequeñas que lg</div>
```
{{< /demo-iframe >}}

### Mostrar en forma impresa {#display-in-print}

Cambia el valor `display` de los elementos al imprimir con nuestras clases de utilidad de visualización de impresión. Incluye soporte para los mismos valores `display` que nuestras utilidades responsive `.d-*`.

* `.d-print-none`
* `.d-print-inline`
* `.d-print-inline-block`
* `.d-print-block`
* `.d-print-grid`
* `.d-print-inline-grid`
* `.d-print-table`
* `.d-print-table-row`
* `.d-print-table-cell`
* `.d-print-flex`
* `.d-print-inline-flex`

Las clases print y display se pueden combinar.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/display/display-in-print.html" >}}
```html {filename="HTML"}
    <div class="d-print-none">Solo pantalla (Ocultar solo en impresión)</div>
    <div class="d-none d-print-block">Solo imprimir (Ocultar solo en pantalla)</div>
    <div class="d-none d-lg-block d-print-block">Ocultar en pantalla grande, pero mostrar siempre en impresión</div>
```
{{< /demo-iframe >}}

### Personalización del CSS {#css}

#### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de visualización se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"display": (
    responsive: true,
    print: true,
    property: display,
    class: d,
    values: inline inline-block block grid inline-grid table table-row table-cell flex inline-flex none
),
```

## Uso de las utilidades para comportamiento Float en Bootstrap

Alterna la flotación de cualquier elemento, a través de cualquier punto de interrupción, usando nuestras utilidades flotantes responsive.

### Descripción general {#overview}

Estas clases de utilidad hacen flotar un elemento hacia la izquierda o hacia la derecha, o deshabilitan la flotación, según el tamaño actual del viewport usando [propiedad CSS `float`.](https://developer.mozilla.org/en-US/docs/Web/CSS/float) Se incluye `!important` para evitar problemas de especificidad. Estos utilizan los mismos puntos de interrupción del viewport que nuestro sistema de cuadrícula. Ten en cuenta que las utilidades flotantes no tienen ningún efecto sobre los elementos flexibles.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/float/overview.html" >}}
```html {filename="HTML"}
    <div class="float-start">Float start en todos los tamaños de viewport</div><br>
    <div class="float-end">Float end en todos los tamaños de viewport</div><br>
    <div class="float-none">No flotar en todos los tamaños de viewport</div>
```
{{< /demo-iframe >}}

Utiliza el [ayudante clearfix](/bootstrap/helpers) en un elemento principal para borrar los elementos flotantes.

### Responsive {#responsive}

También existen variaciones responsive para cada valor `float`.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/float/responsive.html" >}}
```html {filename="HTML"}
    <div class="float-sm-end">Float end en viewports de tamaño SM (pequeño) o más ancho.</div><br>
    <div class="float-md-end">Float end en viewports de tamaño MD (mediano) o más ancho.</div><br>
    <div class="float-lg-end">Float end en viewports de tamaño LG (grande) o más anchas.</div><br>
    <div class="float-xl-end">Float end en viewports de tamaño XL (extra grande) o más anchas.</div><br>
    <div class="float-xxl-end">Float end en viewports de tamaño XXL (extra extra grande) o más anchas.</div><br>
```
{{< /demo-iframe >}}

Aquí están todas las clases de apoyo:

* `.float-start`
* `.float-end`
* `.float-none`
* `.float-sm-start`
* `.float-sm-end`
* `.float-sm-none`
* `.float-md-start`
* `.float-md-end`
* `.float-md-none`
* `.float-lg-start`
* `.float-lg-end`
* `.float-lg-none`
* `.float-xl-start`
* `.float-xl-end`
* `.float-xl-none`
* `.float-xxl-start`
* `.float-xxl-end`
* `.float-xxl-none`

{{< content-ads/middle-banner-1 >}}

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

#### API de utilidades de Sass {#sass-utilities-api}

Las utilidades flotantes se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"float": (
  responsive: true,
  property: float,
  values: (
    start: left,
    end: right,
    none: none,
  )
),
```

## Uso de las utilidades de Ajuste de objeto en Bootstrap

Utiliza las utilidades de ajuste de objetos para modificar el contenido de un [elemento reemplazado](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element), como un `<img>` o `<video>`, debe cambiarse de tamaño para que se ajuste a su contenedor.

### Cómo funciona {#how-it-works}

Cambiar el valor de [`object-fit` (propiedad)](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) con nuestras clases de utilidad responsive `object-fit`. Esta propiedad le indica al contenido que llene el contenedor padre de varias maneras, como preservando la relación de aspecto o estirándolo para ocupar tanto espacio como sea posible.

Las clases para el valor de `object-fit` se nombran usando el formato `.object-fit-{value}`. Elige entre los siguientes valores:

* `contain`
* `cover`
* `fill`
* `scale` (para reducir la escala)
* `none`

### Ejemplos {#examples}

Agrega la clase `object-fit-{value}` al [elemento reemplazado](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element):

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/object-fit/examples.html" >}}
```html {filename="HTML"}
    <img src="..." class="object-fit-contain border rounded" alt="...">
    <img src="..." class="object-fit-cover border rounded" alt="...">
    <img src="..." class="object-fit-fill border rounded" alt="...">
    <img src="..." class="object-fit-scale border rounded" alt="...">
    <img src="..." class="object-fit-none border rounded" alt="...">
```
{{< /demo-iframe >}}

### Responsive {#responsive}

También existen variaciones responsive para cada valor de `object-fit` usando el formato `.object-fit-{breakpoint}-{value}`, para las siguientes abreviaturas de puntos de interrupción: `sm`, `md`, `lg`, `xl` y `xxl`. Las clases se pueden combinar para obtener varios efectos según sea necesario.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/object-fit/responsive.html" >}}
```html {filename="HTML"}
    <img src="..." class="object-fit-sm-contain border rounded" alt="...">
    <img src="..." class="object-fit-md-contain border rounded" alt="...">
    <img src="..." class="object-fit-lg-contain border rounded" alt="...">
    <img src="..." class="object-fit-xl-contain border rounded" alt="...">
    <img src="..." class="object-fit-xxl-contain border rounded" alt="...">
```
{{< /demo-iframe >}}

### Video {#video}

Las utilidades `.object-fit-{value}` y responsive `.object-fit-{breakpoint}-{value}` también funciona con elementos `<video>`.

    ```html {filename="HTML"}
    <video src="..." class="object-fit-contain" autoplay></video>
    <video src="..." class="object-fit-cover" autoplay></video>
    <video src="..." class="object-fit-fill" autoplay></video>
    <video src="..." class="object-fit-scale" autoplay></video>
    <video src="..." class="object-fit-none" autoplay></video>
    ```

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

#### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de ajuste de objetos se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"object-fit": (
  responsive: true,
  property: object-fit,
  values: (
    contain: contain,
    cover: cover,
    fill: fill,
    scale: scale-down,
    none: none,
  )
),
```

## Uso de las utilidades de Opacidad en Bootstrap

Controla la opacidad de los elementos.

La propiedad `opacity` establece el nivel de opacidad de un elemento. El nivel de opacidad describe el nivel de transparencia, donde `1` no es transparente en absoluto, `.5` es 50% visible y `0` es completamente transparente.

Establece la `opacity` de un elemento usando las utilidades `.opacity-{value}`.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/opacity/index.html" >}}
```html {filename="HTML"}
    <div class="opacity-100 p-3 m-2 bg-primary text-light fw-bold rounded">100%</div>
    <div class="opacity-75 p-3 m-2 bg-primary text-light fw-bold rounded">75%</div>
    <div class="opacity-50 p-3 m-2 bg-primary text-light fw-bold rounded">50%</div>
    <div class="opacity-25 p-3 m-2 bg-primary text-light fw-bold rounded">25%</div>
    <div class="opacity-0 p-3 m-2 bg-primary text-light fw-bold rounded">0%</div>
```
{{< /demo-iframe >}}

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

#### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de opacidad se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"opacity": (
  property: opacity,
  values: (
    0: 0,
    25: .25,
    50: .5,
    75: .75,
    100: 1,
  )
),
```

## Uso de las utilidades de Overflow en Bootstrap

Usa estas utilidades abreviadas para configurar rápidamente cómo el contenido desborda un elemento.

### Overflow {#overflow}

Ajusta la propiedad `overflow` sobre la marcha con cuatro valores y clases predeterminados. Estas clases no son responsive de forma predeterminada.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/overflow/overflow.html" >}}
```html {filename="HTML"}
    <div class="overflow-auto">...</div>
    <div class="overflow-hidden">...</div>
    <div class="overflow-visible">...</div>
    <div class="overflow-scroll">...</div>
```
{{< /demo-iframe >}}    

{{< content-ads/middle-banner-2 >}}

#### `overflow-x` {#overflow-x}

Ajusta la propiedad `overflow-x` para afectar el desbordamiento del contenido horizontalmente.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/overflow/overflow-x.html" >}}
```html {filename="HTML"}
    <div class="overflow-x-auto">...</div>
    <div class="overflow-x-hidden">...</div>
    <div class="overflow-x-visible">...</div>
    <div class="overflow-x-scroll">...</div>
```
{{< /demo-iframe >}}

#### `overflow-y` {#overflow-y}

Ajusta la propiedad `overflow-y` para afectar el desbordamiento del contenido verticalmente.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/overflow/overflow-y.html" >}}
```html {filename="HTML"}
    <div class="overflow-y-auto">...</div>
    <div class="overflow-y-hidden">...</div>
    <div class="overflow-y-visible">...</div>
    <div class="overflow-y-scroll">...</div>
```
{{< /demo-iframe >}}

Usando variables Sass, puedes personalizar las utilidades de desbordamiento cambiando la variable `$overflows` en `_variables.scss`.

### Personalización del CSS {#css}

#### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de desbordamiento se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

{{< bootstrap/content-suggestion >}}

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"overflow": (
  property: overflow,
  values: auto hidden visible scroll,
),
"overflow-x": (
  property: overflow-x,
  values: auto hidden visible scroll,
),
"overflow-y": (
  property: overflow-y,
  values: auto hidden visible scroll,
),
```

## Uso de las utilidades de Posición en Bootstrap

Usa estas utilidades abreviadas para configurar rápidamente la posición de un elemento.

### Valores de posición {#position-values}

Hay clases de posicionamiento rápido disponibles, aunque no responsive.

```html {filename="HTML"}
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
```

### Organizar elementos {#arrange-elements}

Organiza elementos fácilmente con las utilidades de posicionamiento de bordes. El formato es `{property}-{position}`.

Donde _property_ es una de:

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

### Centrar elementos {#center-elements}

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

### Ejemplos {#examples}

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

### Personalización del CSS {#css}

#### Mapas de Sass {#sass-maps}

Los valores de utilidad de posición predeterminados se declaran en un mapa Sass y luego se usan para generar nuestras utilidades.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$position-values: (
    0: 0,
    50: 50%,
    100: 100%
);
```

{{< content-ads/middle-banner-3 >}}

#### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de posición se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

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

## Uso de las utilidades de Sombras en Bootstrap

Agrega o elimina sombras a elementos con utilidades de sombra box-shadow.

### Ejemplos {#examples}

Si bien las sombras en los componentes están deshabilitadas de forma predeterminada en Bootstrap y se pueden habilitar a través de `$enable-shadows`, también puedes agregar o eliminar rápidamente una sombra con nuestras clases de utilidad `box-shadow`. Incluye soporte para `.shadow-none` y tres tamaños predeterminados (que tienen variables asociadas para coincidir).

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/shadows/examples.html" >}}
```html {filename="HTML"}
    <div class="shadow-none p-3 mb-5 bg-body-tertiary rounded">Sin sombra</div>
    <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">Sombra pequeña</div>
    <div class="shadow p-3 mb-5 bg-body-tertiary rounded">Sombra regular</div>
    <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">Sombra más grande</div>
```
{{< /demo-iframe >}}

### Personalización del CSS {#css}

#### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$box-shadow:                  0 .5rem 1rem rgba($black, .15);
$box-shadow-sm:               0 .125rem .25rem rgba($black, .075);
$box-shadow-lg:               0 1rem 3rem rgba($black, .175);
$box-shadow-inset:            inset 0 1px 2px rgba($black, .075);
```

{{< bootstrap/content-suggestion >}}

#### API de utilidades de Sass {#sass-utilities-api}

Las utilidades Shadow se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"shadow": (
  property: box-shadow,
  class: shadow,
  values: (
    null: var(--#{$prefix}box-shadow),
    sm: var(--#{$prefix}box-shadow-sm),
    lg: var(--#{$prefix}box-shadow-lg),
    none: none,
  )
),
```

## Uso de las utilidades de Tamaños en Bootstrap

Haz fácilmente un elemento tan ancho o tan alto con nuestras utilidades de ancho y alto.

### Relativo al padre {#relative-to-the-parent}

Las utilidades de ancho y alto se generan desde la API de utilidades en `_utilities.scss`. Incluye soporte para `25%`, `50%`, `75%`, `100%` y `auto` por defecto. Modifica esos valores según necesites generar diferentes utilidades aquí.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/sizing/relative-to-the-parent-1.html" >}}
```html {filename="HTML"}
    <div class="w-25 p-3">Ancho 25%</div>
    <div class="w-50 p-3">Ancho 50%</div>
    <div class="w-75 p-3">Ancho 75%</div>
    <div class="w-100 p-3">Ancho 100%</div>
    <div class="w-auto p-3">Ancho automático</div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/sizing/relative-to-the-parent-2.html" >}}
```html {filename="HTML"}
    <div style="height: 100px;">
        <div class="h-25 d-inline-block" style="width: 120px;">Altura 25%</div>
        <div class="h-50 d-inline-block" style="width: 120px;">Altura 50%</div>
        <div class="h-75 d-inline-block" style="width: 120px;">Altura 75%</div>
        <div class="h-100 d-inline-block" style="width: 120px;">Altura 100%</div>
        <div class="h-auto d-inline-block" style="width: 120px;">Altura automática</div>
    </div>
```
{{< /demo-iframe >}}

También puedes usar las utilidades `max-width: 100%;` y `max-height: 100%;` según sea necesario.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/sizing/relative-to-the-parent-3.html" >}}
```html {filename="HTML"}
    <div style="width: 50%; height: 100px;">
        <div class="mw-100" style="width: 200%;">Ancho máximo 100%</div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/sizing/relative-to-the-parent-4.html" >}}
```html {filename="HTML"}
    <div style="height: 100px;">
        <div class="mh-100" style="width: 100px; height: 200px;">Altura máxima 100%</div>
    </div>
```
{{< /demo-iframe >}}

### Relativo al viewport {#relative-to-the-viewport}

También puedes usar utilidades para establecer el ancho y el alto en relación con el viewport.

```html {filename="HTML"}
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
```

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

#### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de tamaño se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"width": (
  property: width,
  class: w,
  values: (
    25: 25%,
    50: 50%,
    75: 75%,
    100: 100%,
    auto: auto
  )
),
"max-width": (
  property: max-width,
  class: mw,
  values: (100: 100%)
),
"viewport-width": (
  property: width,
  class: vw,
  values: (100: 100vw)
),
"min-viewport-width": (
  property: min-width,
  class: min-vw,
  values: (100: 100vw)
),
"height": (
  property: height,
  class: h,
  values: (
    25: 25%,
    50: 50%,
    75: 75%,
    100: 100%,
    auto: auto
  )
),
"max-height": (
  property: max-height,
  class: mh,
  values: (100: 100%)
),
"viewport-height": (
  property: height,
  class: vh,
  values: (100: 100vh)
),
"min-viewport-height": (
  property: min-height,
  class: min-vh,
  values: (100: 100vh)
),
```

## Uso de las utilidades de Alineación vertical en Bootstrap

Cambia fácilmente la alineación vertical de los elementos en línea, bloque en línea, tabla en línea y celda de tabla.

Cambiar la alineación de elementos con utilidades de [`vertical-alignment`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align). Ten en cuenta que la alineación vertical solo afecta a los elementos en línea, en bloque en línea, en tabla en línea y en celdas de tabla.

Elige entre `.align-baseline`, `.align-top`, `.align-middle`, `.align-bottom`, `.align-text-bottom` y `.align-text-top` según sea necesario.

Para centrar verticalmente contenido no en línea (como `<div>`s y más), usa nuestras [utilidades de flexbox](/bootstrap/utilidades/flex/#align-items).

Con elementos en línea:

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/vertical-align/index-1.html" >}}
```html {filename="HTML"}
    <span class="align-baseline">baseline</span>
    <span class="align-top">arriba</span>
    <span class="align-middle">medio</span>
    <span class="align-bottom">abajo</span>
    <span class="align-text-top">texto-arriba</span>
    <span class="align-text-bottom">texto-abajo</span>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-4 >}}

Con celdas de tabla:

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/vertical-align/index-2.html" >}}
```html {filename="HTML"}
    <table style="height: 100px;">
        <tbody>
            <tr>
                <td class="align-baseline">baseline</td>
                <td class="align-top">arriba</td>
                <td class="align-middle">medio</td>
                <td class="align-bottom">abajo</td>
                <td class="align-text-top">texto-arriba</td>
                <td class="align-text-bottom">texto-abajo</td>
            </tr>
        </tbody>
    </table>
```
{{< /demo-iframe >}}

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

#### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de alineación vertical se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"align": (
    property: vertical-align,
    class: align,
    values: baseline top middle bottom text-bottom text-top
),
```

## Uso de las utilidades de Visibilidad en Bootstrap

Controla la visibilidad de los elementos, sin modificar su visualización, con utilidades de visibilidad.

Establece la `visibility` de los elementos con nuestras utilidades de visibilidad. Estas clases de utilidad no modifican el valor `display` en absoluto y no afectan el diseño: los elementos `.invisible` aún ocupan espacio en la página.

{{< callout type="warning" emoji="" >}}
Los elementos con la clase `.invisible` se ocultarán _tanto_ visualmente como para los usuarios de tecnología de asistencia/lectores de pantalla.
{{< /callout >}}

Aplica `.visible` o `.invisible` según sea necesario.

```html {filename="HTML"}
<div class="visible">...</div>
<div class="invisible">...</div>
```

```css {filename="CSS"}
// Class
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}
```

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

#### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de visibilidad se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"visibility": (
  property: visibility,
  class: null,
  values: (
    visible: visible,
    invisible: hidden,
  )
),
```

## Uso de las utilidades de valores z-index en Bootstrap

Utiliza nuestras utilidades z-index de bajo nivel para cambiar rápidamente el nivel de pila de un elemento o componente.

### Ejemplo {#example}

Utiliza las utilidades `z-index` para apilar elementos uno encima del otro. Requiere un valor de `position` distinto de `static`, que se puede configurar con estilos personalizados o usando nuestras [utilidades de posición](/bootstrap/utilidades/otras-utilidades).

{{< callout type="info" emoji="" >}}
A estas las llamamos utilidades `z-index` de “bajo nivel” debido a sus valores predeterminados de `-1` a `3`, que utilizamos para el diseño de componentes superpuestos. Los valores `z-index` de alto nivel se utilizan para componentes superpuestos como modales o tooltips.
{{< /callout >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/z-index/example.html" >}}
```html {filename="HTML"}
    <div class="z-3 position-absolute p-5 rounded-3"><span>z-3</span></div>
    <div class="z-2 position-absolute p-5 rounded-3"><span>z-2</span></div>
    <div class="z-1 position-absolute p-5 rounded-3"><span>z-1</span></div>
    <div class="z-0 position-absolute p-5 rounded-3"><span>z-0</span></div>
    <div class="z-n1 position-absolute p-5 rounded-3"><span>z-n1</span></div>
```
{{< /demo-iframe >}}

### Superposiciones {#overlays}

Los componentes de superposición de Bootstrap (desplegable, modal, offcanvas, popover, toast y tooltips) tienen sus propios valores `z-index` para garantizar una experiencia utilizable con “capas” competitivas de una interfaz.

Lee sobre ellos en la página de [`z-index` (sección layout)](/bootstrap/layout).

### Enfoque de componentes {#component-approach}

En algunos componentes, usamos nuestros valores `z-index` de bajo nivel para administrar elementos repetidos que se superponen entre sí (como botones en un grupo de botones o elementos en un grupo de lista).

Más información sobre nuestro enfoque [`z-index`.](/bootstrap/comenzando/#z-index-scales).

### Personalización del CSS {#css}

#### Mapas de Sass {#sass-maps}

Personaliza este mapa de Sass para cambiar los valores disponibles y las utilidades generadas.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$zindex-levels: (
  n1: -1,
  0: 0,
  1: 1,
  2: 2,
  3: 3
);
```

{{< bootstrap/content-suggestion >}}

#### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de posición se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"z-index": (
  property: z-index,
  class: z,
  values: $zindex-levels,
)
```

{{< content-ads/bottom-banner >}}
