---
weight: 5
linkTitle: Gutters
title: Uso de Gutters en Bootstrap · Bootstrap en Español v5.3
description: Los gutteres son el relleno entre tus columnas, que se utilizan para espaciar y alinear de manera responsive el contenido en el sistema de cuadrícula de Bootstrap.
noindex: true
---

# Uso de Gutters en Bootstrap

Los gutteres son el relleno entre tus columnas, que se utilizan para espaciar y alinear de manera responsive el contenido en el sistema de cuadrícula de Bootstrap.

{{< content-ads/top-banner >}}

Cómo funcionan {#how-they-work}
--------------------------------

* **Los gutters son los espacios entre el contenido de las columnas, creados por el `padding` horizontal.** Configuramos `padding-right` y `padding-left` en cada columna y usamos un `margin` negativo para compensarlo al principio y al final de cada fila para alinear el contenido.
    
* **Los gutters comienzan en `1.5rem` (`24px`) de ancho.** Esto nos permite hacer coincidir nuestra cuadrícula con la escala de [espaciadores de margin y padding](/bootstrap/5.3/utilities/spacing).
    
* **Los gutters se pueden ajustar de forma responsive.** Utiliza clases de gutters específicas de puntos de interrupción para modificar gutters horizontales, verticales y todos los gutters.
    
Gutters horizontales {#horizontal-gutters}
-------------------------------------------

{{< content-ads/middle-banner-1 >}}

`.gx-*` (clases) se pueden usar para controlar el ancho del gutter horizontal. Es posible que sea necesario ajustar el padre `.container` o `.container-fluid` si también se utilizan gutters más grandes para evitar desbordamientos no deseados, utilizando una utilidad de relleno coincidente. Por ejemplo, en el siguiente ejemplo hemos aumentado el relleno con `.px-4`:

{{< demo-iframe path="/demos/bootstrap/5.3/layout/gutters/horizontal-gutters-1.html" >}}
```html {filename="HTML"}
    <div class="container px-4 text-center">
        <div class="row gx-5">
            <div class="col">
                <div class="p-3">Relleno de columna personalizado</div>
            </div>
            <div class="col">
                <div class="p-3">Relleno de columna personalizado</div>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

Una solución alternativa es agregar un contenedor alrededor del `.row` con la clase `.overflow-hidden`:

{{< demo-iframe path="/demos/bootstrap/5.3/layout/gutters/horizontal-gutters-2.html" >}}
```html {filename="HTML"}
    <div class="container overflow-hidden text-center">
        <div class="row gx-5">
            <div class="col">
                <div class="p-3">Relleno de columna personalizado</div>
            </div>
            <div class="col">
                <div class="p-3">Relleno de columna personalizado</div>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

Gutters verticales {#vertical-gutters}
---------------------------------------

{{< content-ads/middle-banner-2 >}}

`.gy-*` (clases) se pueden usar para controlar el ancho del canal vertical dentro de una fila cuando las columnas se ajustan a nuevas líneas. Al igual que los márgenes horizontales, los márgenes verticales pueden provocar cierto desbordamiento debajo del `.row` al final de una página. Si esto ocurre, agrega un contenedor alrededor de `.row` con la clase `.overflow-hidden`:

{{< demo-iframe path="/demos/bootstrap/5.3/layout/gutters/vertical-gutters.html" >}}
```html {filename="HTML"}
    <div class="container overflow-hidden text-center">
        <div class="row gy-5">
            <div class="col-6">
                <div class="p-3">Relleno de columna personalizado</div>
            </div>
            <div class="col-6">
                <div class="p-3">Relleno de columna personalizado</div>
            </div>
            <div class="col-6">
                <div class="p-3">Relleno de columna personalizado</div>
            </div>
            <div class="col-6">
                <div class="p-3">Relleno de columna personalizado</div>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Gutters horizontales y verticales {#horizontal--vertical-gutters}
------------------------------------------------------------------

Usa las clases `.g-*` para controlar los gutters horizontales y verticales de la cuadrícula. En el siguiente ejemplo, utilizamos un ancho de gutter más pequeño, por lo que no es necesaria la clase contenedora `.overflow-hidden`.
{{< demo-iframe path="/demos/bootstrap/5.3/layout/gutters/horizontal--vertical-gutters.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row g-2">
            <div class="col-6">
                <div class="p-3">Relleno de columna personalizado</div>
            </div>
            <div class="col-6">
                <div class="p-3">Relleno de columna personalizado</div>
            </div>
            <div class="col-6">
                <div class="p-3">Relleno de columna personalizado</div>
            </div>
            <div class="col-6">
                <div class="p-3">Relleno de columna personalizado</div>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-3 >}}

Gutters filas columnas {#row-columns-gutters}
----------------------------------------------

Las clases de canal también se pueden agregar a [columnas de fila](/bootstrap/5.3/layout/grid/#row-columns). En el siguiente ejemplo, utilizamos columnas de fila y clases de gutter responsive.

{{< demo-iframe path="/demos/bootstrap/5.3/layout/gutters/row-columns-gutters.html" >}}
```html {filename="HTML"}
    <div class="container text-center">
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div class="col">
                <div class="p-3">Columna fila</div>
            </div>
            <div class="col">
                <div class="p-3">Columna fila</div>
            </div>
            <div class="col">
                <div class="p-3">Columna fila</div>
            </div>
            <div class="col">
                <div class="p-3">Columna fila</div>
            </div>
            <div class="col">
                <div class="p-3">Columna fila</div>
            </div>
            <div class="col">
                <div class="p-3">Columna fila</div>
            </div>
            <div class="col">
                <div class="p-3">Columna fila</div>
            </div>
            <div class="col">
                <div class="p-3">Columna fila</div>
            </div>
            <div class="col">
                <div class="p-3">Columna fila</div>
            </div>
            <div class="col">
                <div class="p-3">Columna fila</div>
            </div>
        </div>
    </div>
```
{{< /demo-iframe >}}

Sin gutters {#no-gutters}
--------------------------

Los márgenes entre columnas en nuestras clases de cuadrícula predefinidas se pueden eliminar con `.g-0`. Esto elimina los `margin` negativos de `.row` y el `padding` horizontal de todas las columnas secundarias inmediatas.

{{< content-ads/middle-banner-4 >}}

**¿Necesitas un diseño de borde a borde?** Suelta el `.container` o `.container-fluid` principal y agrega `.mx-0` al `.row` para evitar el desbordamiento.

En la práctica, así es como se ve. Ten en cuenta que puedes continuar usando esto con todas las demás clases de cuadrícula predefinidas (incluidos anchos de columna, niveles responsive, reordenamientos y más).

{{< demo-iframe path="/demos/bootstrap/5.3/layout/gutters/no-gutters.html" >}}
```html {filename="HTML"}
    <div class="row g-0 text-center">
        <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    </div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Cambia los gutters {#change-the-gutters}
-----------------------------------------

{{< content-ads/middle-banner-5 >}}

Las clases se construyen a partir del mapa Sass `$gutters` que se hereda del mapa Sass `$spacers`.

```scss {filename="SCSS"}
$grid-gutter-width: 1.5rem;
$gutters: (
    0: 0,
    1: $spacer * .25,
    2: $spacer * .5,
    3: $spacer,
    4: $spacer * 1.5,
    5: $spacer * 3,
);
```

{{< content-ads/bottom-banner >}}
