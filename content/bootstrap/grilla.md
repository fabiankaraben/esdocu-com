---
weight: 4
linkTitle: Sistema de grilla
title: El sistema de cuadrícula de Bootstrap · Bootstrap en Español v5.3
description: Utiliza nuestra poderosa grilla flexbox para dispositivos móviles para crear diseños de todas las formas y tamaños gracias a un sistema de doce columnas, seis niveles responsive predeterminados, variables y mixins Sass, y docenas de clases predefinidas.
---

# El sistema de cuadrícula de Bootstrap

Utiliza nuestra poderosa grilla flexbox para dispositivos móviles para crear diseños de todas las formas y tamaños gracias a un sistema de doce columnas, seis niveles responsive predeterminados, variables y mixins Sass, y docenas de clases predefinidas.

{{< content-ads/top-banner >}}

## Ejemplo {#example}

El sistema de cuadrícula de Bootstrap utiliza una serie de contenedores, filas y columnas para diseñar y alinear el contenido. Está construido con [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) y es totalmente responsive. A continuación se muestra un ejemplo y una explicación detallada de cómo se integra el sistema de cuadrícula.

{{< callout type="info" emoji="" >}}
**¿Eres nuevo o no está familiarizado con Flexbox?** [Lee esta guía CSS de trucos de Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) para obtener información general, terminología, pautas y fragmentos de código.
{{< /callout >}}

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/example.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row">
            <div class="col">
                Columna
            </div>
            <div class="col">
                Columna
            </div>
            <div class="col">
                Columna
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

El ejemplo anterior crea tres columnas de igual ancho en todos los dispositivos y viewports utilizando nuestras clases de cuadrícula predefinidas. Esas columnas están centradas en la página con el `.container` principal.

## Cómo funciona {#how-it-works}

Desglosándolo, así es como se integra el sistema de grilla:

* **Nuestra grilla admite [seis puntos de interrupción responsive](/bootstrap/layout).** Los puntos de interrupción se basan en la `min-width` media queries, lo que significa que afectan ese punto de interrupción y todos los que están por encima de él (por ejemplo, `.col-sm-4` se aplica a `sm`, `md`, `lg`, `xl` y `xxl`). Esto significa que puedes controlar el tamaño y el comportamiento del contenedor y la columna según cada punto de interrupción.
    
* **Los contenedores centran y rellenan horizontalmente su contenido.** Utiliza `.container` para un ancho de píxel responsive, `.container-fluid` para un ancho de `width: 100%` en todas los viewports y dispositivos, o un contenedor responsive (por ejemplo, `.container-md`) para una combinación de anchos fluidos y de píxeles.
    
* **Las filas son envoltorios para las columnas.** Cada columna tiene un `padding` horizontal (llamado gutter) para controlar el espacio entre ellas. Este `padding` luego se contrarresta en las filas con márgenes negativos para garantizar que el contenido de las columnas esté visualmente alineado hacia el lado izquierdo. Las filas también admiten clases modificadoras para [aplicar uniformemente el tamaño de las columnas](#row-columns) y [clases de gutter](/bootstrap/layout) para cambiar el espaciado de su contenido.
    
* **Las columnas son increíblemente flexibles.** Hay 12 columnas de plantilla disponibles por fila, lo que te permite crear diferentes combinaciones de elementos que abarcan cualquier número de columnas. Las clases de columnas indican el número de columnas de plantilla que se abarcan (por ejemplo, `col-4` abarca cuatro). Los `width` se establecen en porcentajes para que siempre tengas el mismo tamaño relativo.
    
* **Los gutters también son responsive y personalizables.** [Las clases de gutters están disponibles](/bootstrap/layout) en todos los puntos de interrupción, con todos los mismos tamaños. como nuestro [espaciado de margin y padding](/bootstrap/utilidades/espaciado). Cambia los gutteres horizontales con clases `.gx-*`, los gutteres verticales con `.gy-*` o todos los gutteres con clases `.g-*`. `.g-0` también está disponible para eliminar gutters.
    
* **Las variables, mapas y mixins de Sass alimentan la grilla.** Si no deseas utilizar las clases de grilla predefinidas en Bootstrap, puedes usar nuestro [código fuente de Grid en Sass](#sass-variables) para crear el tuyo propio con un marcado más semántico. También incluimos algunas propiedades personalizadas de CSS para consumir estas variables Sass para brindarte una flexibilidad aún mayor.
    

Ten en cuenta las limitaciones y [errores alrededor de flexbox](https://github.com/philipwalton/flexbugs), como la [imposibilidad de utilizar algunos elementos HTML como contenedores flexibles](https://github.com/philipwalton/flexbugs#flexbug-9).

## Opciones de grilla {#grid-options}

El sistema de cuadrícula de Bootstrap puede adaptarse a los seis puntos de interrupción predeterminados y a cualquier punto de interrupción que personalices. Los seis niveles de cuadrícula predeterminados son los siguientes:

{{< content-ads/middle-banner-1 >}}

* Extra pequeño (xs)
* Pequeño (sm)
* Mediano (md)
* Grande (lg)
* Extra grande (xl)
* Extra extra grande (xxl)

Como se señaló anteriormente, cada uno de estos puntos de interrupción tiene su propio contenedor, prefijo de clase único y modificadores. Así es como cambia la cuadrícula en estos puntos de interrupción:

|                        | xs  <br />\<576px                     | sm  <br />≥576px | md  <br />≥768px | lg  <br />≥992px | xl  <br />≥1200px | xxl  <br />≥1400px |
| ---------------------- | ------------------------------------- | ---------------- | ---------------- | ---------------- | ----------------- | ------------------ |
| Container `max-width`  | Ninguno (auto)                        | 540px            | 720px            | 960px            | 1140px            | 1320px             |
| Prefijo de clase       | `.col-`                               | `.col-sm-`       | `.col-md-`       | `.col-lg-`       | `.col-xl-`        | `.col-xxl-`        |
| \# de columnas         | 12                                    |                  |                  |                  |                   |                    |
| Ancho del gutter       | 1.5rem (.75rem a izquierda y derecha) |                  |                  |                  |                   |                    |
| Gutters personalizados | [Sí](/bootstrap/layout)               |                  |                  |                  |                   |                    |
| Anidable               | [Sí](#nesting)                        |                  |                  |                  |                   |                    |
| Orden de columnas      | [Sí](/bootstrap/columnas/#reordering) |                  |                  |                  |                   |                    |

## Columnas auto-layout {#auto-layout-columns}

Utiliza clases de columnas específicas de puntos de interrupción para facilitar el tamaño de las columnas sin una clase numerada explícita como `.col-sm-6`.

### Anchos iguales {#equal-width}

Por ejemplo, aquí hay dos diseños de cuadrícula que se aplican a cada dispositivo y viewport, desde `xs` hasta `xxl`. Agrega cualquier cantidad de clases sin unidades para cada punto de interrupción que necesites y cada columna tendrá el mismo ancho.

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/equal-width.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row">
            <div class="col">
                1 de 2
            </div>
            <div class="col">
                2 de 2
            </div>
        </div>
        <div class="row">
            <div class="col">
                1 de 3
            </div>
            <div class="col">
                2 de 3
            </div>
            <div class="col">
                3 de 3
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Establecer un ancho de columna {#setting-one-column-width}

El diseño automático para las columnas de la cuadrícula Flexbox también significa que puedes establecer el ancho de una columna y hacer que las columnas hermanas cambien de tamaño automáticamente a su alrededor. Puedes utilizar clases de cuadrícula predefinidas (como se muestra a continuación), combinaciones de cuadrícula o anchos en línea. Ten en cuenta que las otras columnas cambiarán de tamaño sin importar el ancho de la columna central.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/setting-one-column-width.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row">
            <div class="col">
                1 de 3
            </div>
            <div class="col-6">
                2 de 3 (más amplio)
            </div>
            <div class="col">
                3 de 3
            </div>
        </div>
        <div class="row">
            <div class="col">
                1 de 3
            </div>
            <div class="col-5">
                2 de 3 (más amplio)
            </div>
            <div class="col">
                3 de 3
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Contenido de ancho variable {#variable-width-content}

Usa las clases `col-{breakpoint}-auto` para dimensionar las columnas según el ancho natural de su contenido.

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/variable-width-content.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row justify-content-md-center">
            <div class="col col-lg-2">
                1 de 3
            </div>
            <div class="col-md-auto">
                Contenido de ancho variable
            </div>
            <div class="col col-lg-2">
                3 de 3
            </div>
        </div>
        <div class="row">
            <div class="col">
                1 de 3
            </div>
            <div class="col-md-auto">
                Contenido de ancho variable
            </div>
            <div class="col col-lg-2">
                3 de 3
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

## Clases responsive {#responsive-classes}

La cuadrícula de Bootstrap incluye seis niveles de clases predefinidas para crear diseños responsive complejos. Personaliza el tamaño de tus columnas en dispositivos extra pequeños, pequeños, medianos, grandes o extra grandes como mejor te parezca.

{{< content-ads/middle-banner-2 >}}

### Todos los puntos de interrupción {#all-breakpoints}

Para grids que son iguales desde el dispositivo más pequeño hasta el más grande, usa las clases `.col` y `.col-*`. Especifica una clase numerada cuando necesites una columna de tamaño particular; de lo contrario, siéntete libre de seguir con `.col`.

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/all-breakpoints.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row">
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
        </div>
        <div class="row">
            <div class="col-8">col-8</div>
            <div class="col-4">col-4</div>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Apilados en horizontal {#stacked-to-horizontal}

Usando un único conjunto de clases `.col-sm-*`, puedes crear un sistema de cuadrícula básico que comienza apilado y se vuelve horizontal en el punto de interrupción pequeño (`sm`).

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/stacked-to-horizontal.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row">
            <div class="col-sm-8">col-sm-8</div>
            <div class="col-sm-4">col-sm-4</div>
        </div>
        <div class="row">
            <div class="col-sm">col-sm</div>
            <div class="col-sm">col-sm</div>
            <div class="col-sm">col-sm</div>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Mezclar y combinar {#mix-and-match}

¿No quieres que tus columnas simplemente se apilen en algunos niveles de la cuadrícula? Utiliza una combinación de diferentes clases para cada nivel según sea necesario. Ve el ejemplo a continuación para tener una mejor idea de cómo funciona todo.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/mix-and-match.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <div class="row">
            <div class="col-md-8">.col-md-8</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
        <div class="row">
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <!-- Columns are always 50% wide, on mobile and desktop -->
        <div class="row">
            <div class="col-6">.col-6</div>
            <div class="col-6">.col-6</div>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Filas columnas {#row-columns}

Utiliza las clases responsive `.row-cols-*` para establecer rápidamente el número de columnas que mejor representen tu contenido y diseño. Mientras que las clases `.col-*` normales se aplican a las columnas individuales (por ejemplo, `.col-md-4`), las clases de columnas de fila se establecen en el `.row` como acceso directo. Con `.row-cols-auto` puedes darle a las columnas su ancho natural.

Usa estas clases de columnas de fila para crear rápidamente diseños de cuadrícula básicos o para controlar los diseños de tus tarjetas.

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/row-columns-1.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row row-cols-2">
            <div class="col">Columna</div>
            <div class="col">Columna</div>
            <div class="col">Columna</div>
            <div class="col">Columna</div>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/row-columns-2.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row row-cols-3">
            <div class="col">Columna</div>
            <div class="col">Columna</div>
            <div class="col">Columna</div>
            <div class="col">Columna</div>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/row-columns-3.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row row-cols-auto">
            <div class="col">Columna</div>
            <div class="col">Columna</div>
            <div class="col">Columna</div>
            <div class="col">Columna</div>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/row-columns-4.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row row-cols-4">
            <div class="col">Columna</div>
            <div class="col">Columna</div>
            <div class="col">Columna</div>
            <div class="col">Columna</div>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-3 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/row-columns-5.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row row-cols-4">
            <div class="col">Columna</div>
            <div class="col">Columna</div>
            <div class="col-6">Columna</div>
            <div class="col">Columna</div>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/row-columns-6.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div class="col">Columna</div>
            <div class="col">Columna</div>
            <div class="col">Columna</div>
            <div class="col">Columna</div>
        </div>
    </div>
```
{{< /demo-iframe >}}

También puedes usar el mixin de Sass adjunto, `row-cols()`:

```scss {filename="SCSS"}
.element {
    // Three columns to start
    @include row-cols(3);

    // Five columns from medium breakpoint up
    @include media-breakpoint-up(md) {
    @include row-cols(5);
    }
}
```

## Anidamiento {#nesting}

Para anidar tu contenido con la cuadrícula predeterminada, agrega un nuevo `.row` y un conjunto de columnas `.col-sm-*` dentro de una columna `.col-sm-*` existente. Las filas anidadas deben incluir un conjunto de columnas que sumen 12 o menos (no es necesario que utilices las 12 columnas disponibles).

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/nesting.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row">
            <div class="col-sm-3">
                Nivel 1: .col-sm-3
            </div>
            <div class="col-sm-9">
                <div class="row">
                    <div class="col-8 col-sm-6">
                        Nivel 2: .col-8 .col-sm-6
                    </div>
                    <div class="col-4 col-sm-6">
                        Nivel 2: .col-4 .col-sm-6
                    </div>
                </div>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

## Personalización del CSS {#css}

Cuando usas los archivos fuente Sass de Bootstrap, tienes la opción de usar variables y mixins de Sass para crear diseños de página personalizados, semánticos y responsive. Nuestras clases de cuadrícula predefinidas utilizan estas mismas variables y combinaciones para proporcionar un conjunto completo de clases listas para usar para diseños de respuesta rápida.

### Variables Sass generales relacionadas {#sass-variables}

Las variables y los mapas determinan el número de columnas, el ancho del gutter y el punto de media query en el que comenzar a flotar las columnas. Los usamos para generar las clases de cuadrícula predefinidas documentadas anteriormente, así como para los mixins personalizados que se enumeran a continuación.

```scss {filename="SCSS"}
$grid-columns:      12;
$grid-gutter-width: 1.5rem;
$grid-row-columns:  6;
```

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px
);
```
    
[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$container-max-widths: (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1140px,
    xxl: 1320px
);
```

{{< content-ads/middle-banner-4 >}}

### Sass mixins {#sass-mixins}

Los mixins se usan junto con las variables de la cuadrícula para generar CSS semántico para columnas de la cuadrícula individuales.

```scss {filename="SCSS"}
// Creates a wrapper for a series of columns
@include make-row();

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();

// Without optional size values, the mixin will create equal columns (similar to using .col)
@include make-col();
@include make-col($size, $columns: $grid-columns);

// Offset with margins
@include make-col-offset($size, $columns: $grid-columns);
```

### Ejemplo de uso {#example-usage}

Puedes modificar las variables a tus propios valores personalizados, o simplemente usar los mixins con sus valores predeterminados. A continuación se muestra un ejemplo del uso de la configuración predeterminada para crear un diseño de dos columnas con un espacio entre ellas.

```scss {filename="SCSS"}
.example-container {
    @include make-container();
    // Make sure to define this width after the mixin to override
    // `width: 100%` generated by `make-container()`
    width: 800px;
}

.example-row {
    @include make-row();
}

.example-content-main {
    @include make-col-ready();

    @include media-breakpoint-up(sm) {
    @include make-col(6);
    }
    @include media-breakpoint-up(lg) {
    @include make-col(8);
    }
}

.example-content-secondary {
    @include make-col-ready();

    @include media-breakpoint-up(sm) {
    @include make-col(6);
    }
    @include media-breakpoint-up(lg) {
    @include make-col(4);
    }
}
```

{{< demo-iframe path="/demos/bootstrap/5.3/layout/grid/example-usage.html" >}}
```html {filename="HTML"}
    <div class="example-container">
        <div class="example-row">
            <div class="example-content-main">Contenido principal</div>
            <div class="example-content-secondary">Contenido secundario</div>
        </div>
    </div>
```
{{< /demo-iframe >}}

## Personalizando la grilla {#customizing-the-grid}

Utilizando nuestras variables y mapas Sass de cuadrícula integrados, es posible personalizar completamente las clases de cuadrícula predefinidas. Cambia la cantidad de niveles, las dimensiones de la media query y el ancho de los contenedores y luego vuelve a compilar.

### Columnas y gutters {#columns-and-gutters}

El número de columnas de la cuadrícula se puede modificar mediante variables Sass. `$grid-columns` se utiliza para generar los anchos (en porcentaje) de cada columna individual, mientras que `$grid-gutter-width` establece el ancho de los gutteres de las columnas. `$grid-row-columns` se utiliza para establecer el número máximo de columnas de `.row-cols-*`; cualquier número que supere este límite se ignora.

```scss {filename="SCSS"}
$grid-columns: 12 !default;
$grid-gutter-width: 1.5rem !default;
$grid-row-columns: 6 !default;
```

{{< bootstrap/content-suggestion >}}

### Niveles de cuadrícula {#grid-tiers}

Más allá de las columnas mismas, también puedes personalizar el número de niveles de la cuadrícula. Si quisieras solo cuatro niveles de cuadrícula, actualizarías `$grid-breakpoints` y `$container-max-widths` a algo como esto:

```scss {filename="SCSS"}
$grid-breakpoints: (
    xs: 0,
    sm: 480px,
    md: 768px,
    lg: 1024px
);

$container-max-widths: (
    sm: 420px,
    md: 720px,
    lg: 960px
);
```    

Al realizar cambios en las variables o mapas de Sass, deberás guardar los cambios y volver a compilarlos. Al hacerlo, se generará un nuevo conjunto de clases de cuadrícula predefinidas para anchos de columna, desplazamientos y ordenamiento. Las utilidades de visibilidad responsive también se actualizarán para utilizar puntos de interrupción personalizados. Asegúrate de establecer los valores de la cuadrícula en `px` (no en `rem`, `em` o `%`).

{{< content-ads/bottom-banner >}}
