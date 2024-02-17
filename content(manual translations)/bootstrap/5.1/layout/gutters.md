---
weight: 5
linkTitle: Gutters
title: Gutters, espaciados de diseño · Bootstrap en Español v5.1
description: Los gutters son el padding entre las columnas, que se utilizan para espaciar y alinear de manera responsive el contenido en el sistema de cuadrícula de Bootstrap.
type: docs
---

# Los Gutters para el diseño en Bootstrap

Los gutters son el padding entre las columnas, que se utilizan para espaciar y alinear de manera responsive el contenido en el sistema de cuadrícula de Bootstrap.

{{< content-ads/top-banner >}}

## ¿Cómo funcionan los Gutters?

- **Los gutters son los espacios entre el columnas, creados con `padding` horizontal.** Establecemos `padding-right` y `padding-left` en cada columna, y usamos un `margin` negativo para compensar eso al principio y final de cada fila para alinear el contenido.

- **Los gutters comienzan en `1.5rem` (`24px`) de ancho.** Esto nos permite hacer coincidir nuestra cuadrícula con la escala de [espaciadores padding y margin]({{< bootstrap/5-1/docsref "/utilities/spacing" >}}).

- **Los gutters se pueden ajustar de forma responsive.** Utiliza clases gutter de breakpoints específicos para modificar gutters horizontales, gutters verticales y todos los gutters.

## Gutters horizontales

{{< content-ads/middle-banner-1 >}}

Las clases `.gx-*` se pueden usar para controlar los anchos de los gutters horizontales. Es posible que sea necesario ajustar el `.container` o `.container-fluid` padre si también se usan gutters más grandes para evitar el desbordamiento no deseado, usando una utilidad de padding coincidente. Por ejemplo, en el siguiente ejemplo hemos aumentado el padding con `.px-4`:

{{< bootstrap/5-1/example >}}
<div class="container px-4">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 border bg-light">Padding de columna personalizado</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Padding de columna personalizado</div>
    </div>
  </div>
</div>
{{< /bootstrap/5-1/example >}}

Una solución alternativa es agregar un contenedor alrededor de `.row` con la clase `.overflow-hidden`:

{{< bootstrap/5-1/example >}}
<div class="container overflow-hidden">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 border bg-light">Padding de columna personalizado</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Padding de columna personalizado</div>
    </div>
  </div>
</div>
{{< /bootstrap/5-1/example >}}

## Gutters verticales

{{< content-ads/middle-banner-2 >}}

Las clases `.gy-*` se pueden usar para controlar los anchos de los gutters verticales. Al igual que los gutters horizontales, los gutters verticales pueden provocar un desbordamiento debajo de la `.row` al final de una página. Si esto ocurre, agrega un contenedor alrededor de `.row` con la clase `.overflow-hidden`:

{{< bootstrap/5-1/example >}}
<div class="container overflow-hidden">
  <div class="row gy-5">
    <div class="col-6">
      <div class="p-3 border bg-light">Padding de columna personalizado</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Padding de columna personalizado</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Padding de columna personalizado</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Padding de columna personalizado</div>
    </div>
  </div>
</div>
{{< /bootstrap/5-1/example >}}

## Gutters horizontales & verticales

Las clases `.g-*` se pueden usar para controlar los anchos de los gutters horizontales, para el siguiente ejemplo usamos un ancho de gutter más pequeño, por lo que no será necesario agregar la clase contenedora `.overflow-hidden`.

{{< bootstrap/5-1/example >}}
<div class="container">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3 border bg-light">Padding de columna personalizado</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Padding de columna personalizado</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Padding de columna personalizado</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Padding de columna personalizado</div>
    </div>
  </div>
</div>
{{< /bootstrap/5-1/example >}}

{{< content-ads/middle-banner-3 >}}

## Gutters columnas de filas

Las clases de gutters también se pueden agregar a [columnas de fila]({{< bootstrap/5-1/docsref "/layout/grid#row-columns" >}}). En el siguiente ejemplo, usamos columnas de fila responsive y clases de gutters responsive.

{{< bootstrap/5-1/example >}}
<div class="container">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
      <div class="p-3 border bg-light">Columna de fila</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Columna de fila</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Columna de fila</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Columna de fila</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Columna de fila</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Columna de fila</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Columna de fila</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Columna de fila</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Columna de fila</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Columna de fila</div>
    </div>
  </div>
</div>
{{< /bootstrap/5-1/example >}}

## Sin gutters

Los gutters entre columnas en nuestras clases de cuadrícula predefinidas se pueden eliminar con `.g-0`. Esto elimina los `margin`s negativos de `.row` y el `padding` horizontal de todas las columnas secundarias inmediatas.

{{< content-ads/middle-banner-4 >}}

**¿Necesitas un diseño de borde a borde?** Deja el `.container` o `.container-fluid` principal y agrega `.mx-0` a `.row` para evitar el desbordamiento.

En la práctica, así es como se ve. Ten en cuenta que puedes continuar usándolo con todas las demás clases de cuadrícula predefinidas (incluidos los anchos de columna, los niveles responsive, los reordenamientos y más).

{{< bootstrap/5-1/example class="bd-example-row" >}}
<div class="row g-0">
  <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
{{< /bootstrap/5-1/example >}}

## Cambiar los gutters

Las clases se crean a partir del mapa Sass `$gutters` que se hereda del mapa Sass `$spacers`.

{{< content-ads/middle-banner-5 >}}

```scss
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
