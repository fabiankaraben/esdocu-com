---
weight: 4
linkTitle: Color
title: Uso y personalización de colores · Bootstrap en Español v5.1
description: Bootstrap está respaldado por un extenso sistema de colores que tematiza nuestros estilos y componentes. Esto permite una personalización y extensión más completas para cualquier proyecto.
type: docs
---

# Los colores de Bootstrap

Bootstrap está respaldado por un extenso sistema de colores que tematiza nuestros estilos y componentes. Esto permite una personalización y extensión más completas para cualquier proyecto.

{{< content-ads/top-banner >}}

## Colores del tema

Usamos un subconjunto de todos los colores para crear una paleta de colores más pequeña para generar esquemas de color, también disponible como variables Sass y un mapa Sass en el archivo `scss/_variables.scss` de Bootstrap.

{{< bootstrap/5-1/example >}}
<div class="row">
    <div class="col-md-4">
      <div class="p-3 mb-3 bg-primary text-white">Primary</div>
    </div>
    <div class="col-md-4">
      <div class="p-3 mb-3 bg-secondary text-white">Secondary</div>
    </div>
    <div class="col-md-4">
      <div class="p-3 mb-3 bg-success text-white">Success</div>
    </div>
    <div class="col-md-4">
      <div class="p-3 mb-3 bg-danger text-white">Danger</div>
    </div>
    <div class="col-md-4">
      <div class="p-3 mb-3 bg-warning text-dark">Warning</div>
    </div>
    <div class="col-md-4">
      <div class="p-3 mb-3 bg-info text-dark">Info</div>
    </div>
    <div class="col-md-4">
      <div class="p-3 mb-3 bg-light text-dark">Light</div>
    </div>
    <div class="col-md-4">
      <div class="p-3 mb-3 bg-dark text-white">Dark</div>
    </div>
</div>
{{< /bootstrap/5-1/example >}}

Todos estos colores están disponibles como mapa Sass, `$theme-colors`.

{{< bootstrap/5-1/scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

Consulta nuestros documentos de [mapas y bucles de Sass]({{< bootstrap/5-1/docsref "/customize/sass#maps-and-loops" >}}) para saber cómo modificar estos colores.

## Todos los colores

Todos los colores de Bootstrap están disponibles como variables Sass y un mapa Sass en el archivo `scss/_variables.scss`. Para evitar aumentar el tamaño de los archivos, no creamos clases de color de texto o de fondo para cada una de estas variables. En su lugar, elegimos un subconjunto de estos colores para una [paleta de temas](#theme-colors).

{{< content-ads/middle-banner-1 >}}

Asegúrate de controlar las relaciones de contraste a medida que personalizas los colores. Como se muestra a continuación, hemos agregado tres proporciones de contraste a cada uno de los colores principales: una para los colores actuales de la muestra, una contra el blanco y otra contra el negro.

<div class="mt-8 mb-2 p-3 rounded-md font-bold bg-[#0d6efd] text-white">
<strong>$blue</strong> #0d6efd
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#cfe2ff] text-black">
$blue-100
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#9ec5fe] text-black">
$blue-200
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#6ea8fe] text-black">
$blue-300
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#3d8bfd] text-black">
$blue-400
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#0d6efd] text-white">
$blue-500
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#0a58ca] text-white">
$blue-600
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#084298] text-white">
$blue-700
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#052c65] text-white">
$blue-800
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#031633] text-white">
$blue-900
</div>

<div class="mt-8 mb-2 p-3 rounded-md font-bold bg-[#6610f2] text-white">
<strong>indigo</strong> #6610f2
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#e0cffc] text-black">
$indigo-100
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#c29ffa] text-black">
$indigo-200
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#a370f7] text-black">
$indigo-300
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#8540f5] text-black">
$indigo-400
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#6610f2] text-white">
$indigo-500
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#520dc2] text-white">
$indigo-600
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#3d0a91] text-white">
$indigo-700
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#290661] text-white">
$indigo-800
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#140330] text-white">
$indigo-900
</div>

<div class="mt-8 mb-2 p-3 rounded-md font-bold bg-[#6f42c1] text-white">
<strong>purple</strong> #6f42c1
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#e2d9f3] text-black">
$purple-100
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#c5b3e6] text-black">
$purple-200
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#a98eda] text-black">
$purple-300
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#8c68cd] text-black">
$purple-400
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#6f42c1] text-white">
$purple-500
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#59359a] text-white">
$purple-600
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#432874] text-white">
$purple-700
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#2c1a4d] text-white">
$purple-800
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#160d27] text-white">
$purple-900
</div>

<div class="mt-8 mb-2 p-3 rounded-md font-bold bg-[#d63384] text-white">
<strong>pink</strong> #d63384
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#f7d6e6] text-black">
$pink-100
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#efadce] text-black">
$pink-200
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#e685b5] text-black">
$pink-300
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#de5c9d] text-black">
$pink-400
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#d63384] text-white">
$pink-500
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#ab296a] text-white">
$pink-600
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#801f4f] text-white">
$pink-700
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#561435] text-white">
$pink-800
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#2b0a1a] text-white">
$pink-900
</div>

<div class="mt-8 mb-2 p-3 rounded-md font-bold bg-[#dc3545] text-white">
<strong>red</strong> #dc3545
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#f8d7da] text-black">
$red-100
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#f1aeb5] text-black">
$red-200
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#ea868f] text-black">
$red-300
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#e35d6a] text-black">
$red-400
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#dc3545] text-white">
$red-500
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#b02a37] text-white">
$red-600
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#842029] text-white">
$red-700
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#58151c] text-white">
$red-800
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#2c0b0e] text-white">
$red-900
</div>

<div class="mt-8 mb-2 p-3 rounded-md font-bold bg-[#fd7e14] text-black">
<strong>orange</strong> #fd7e14
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#ffe5d0] text-black">
$orange-100
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#fecba1] text-black">
$orange-200
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#feb272] text-black">
$orange-300
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#fd9843] text-black">
$orange-400
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#fd7e14] text-white">
$orange-500
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#ca6510] text-white">
$orange-600
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#984c0c] text-white">
$orange-700
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#653208] text-white">
$orange-800
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#331904] text-white">
$orange-900
</div>

<div class="mt-8 mb-2 p-3 rounded-md font-bold bg-[#ffc107] text-black">
<strong>yellow</strong> #ffc107
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#fff3cd] text-black">
$yellow-100
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#ffe69c] text-black">
$yellow-200
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#ffda6a] text-black">
$yellow-300
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#ffda6a] text-black">
$yellow-400
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#ffc107] text-black">
$yellow-500
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#cc9a06] text-black">
$yellow-600
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#997404] text-black">
$yellow-700
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#664d03] text-white">
$yellow-800
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#332701] text-white">
$yellow-900
</div>

{{< content-ads/middle-banner-2 >}}

<div class="mt-8 mb-2 p-3 rounded-md font-bold bg-[#198754] text-white">
<strong>green</strong> #198754
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#d1e7dd] text-black">
$green-100
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#a3cfbb] text-black">
$green-200
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#75b798] text-black">
$green-300
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#479f76] text-black">
$green-400
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#198754] text-white">
$green-500
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#146c43] text-white">
$green-600
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#0f5132] text-white">
$green-700
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#0a3622] text-white">
$green-800
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#051b11] text-white">
$green-900
</div>

<div class="mt-8 mb-2 p-3 rounded-md font-bold bg-[#20c997] text-black">
<strong>teal</strong> #20c997
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#d2f4ea] text-black">
$teal-100
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#a6e9d5] text-black">
$teal-200
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#79dfc1] text-black">
$teal-300
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#4dd4ac] text-black">
$teal-400
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#20c997] text-black">
$teal-500
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#1aa179] text-black">
$teal-600
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#13795b] text-white">
$teal-700
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#0d503c] text-white">
$teal-800
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#06281e] text-white">
$teal-900
</div>

<div class="mt-8 mb-2 p-3 rounded-md font-bold bg-[#0dcaf0] text-black">
<strong>cyan</strong> #0dcaf0
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#cff4fc] text-black">
$cyan-100
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#9eeaf9] text-black">
$cyan-200
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#6edff6] text-black">
$cyan-300
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#3dd5f3] text-black">
$cyan-400
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#0dcaf0] text-black">
$cyan-500
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#0aa2c0] text-black">
$cyan-600
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#087990] text-white">
$cyan-700
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#055160] text-white">
$cyan-800
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#032830] text-white">
$cyan-900
</div>

<div class="mt-8 mb-2 p-3 rounded-md font-bold bg-[#adb5bd] text-black">
<strong>gray-500</strong> #adb5bd
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#f8f9fa] text-black">
$gray-100
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#e9ecef] text-black">
$gray-200
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#dee2e6] text-black">
$gray-300
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#ced4da] text-black">
$gray-400
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#adb5bd] text-black">
$gray-500
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#6c757d] text-white">
$gray-600
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#495057] text-white">
$gray-700
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#343a40] text-white">
$gray-800
</div>
<div class="p-3 my-1 rounded-md font-bold bg-[#212529] text-white">
$gray-900
</div>

<div class="mt-8 mb-2 p-3 rounded-md font-bold bg-[#000] text-white">
<strong>black</strong> #000
</div>

<div class="mt-8 mb-2 p-3 rounded-md font-bold bg-[#fff] text-black">
<strong>white</strong> #fff
</div>

### Notas sobre Sass

Sass no puede generar variables programáticamente, por lo que creamos variables manualmente para cada tinte y sombreado nosotros mismos. Especificamos el valor del punto medio (por ejemplo, `$blue-500`) y usamos funciones de color personalizadas para teñir (aclarar) o sombrear (oscurecer) nuestros colores a través de la función de color `mix()` de Sass.

{{< content-ads/middle-banner-3 >}}

Usar `mix()` no es lo mismo que `lighten()` y `darken()`: el primero combina el color especificado con blanco o negro, mientras que el último solo ajusta el valor de luminosidad de cada color. El resultado es un conjunto de colores mucho más completo, como se muestra en esta [demostración de CodePen](https://codepen.io/emdeoh/pen/zYOQOPB).

Nuestras funciones `tint-color()` y `shade-color()` usan `mix()` junto con nuestra variable `$theme-color-interval`, que especifica un valor porcentual escalonado para cada color mezclado que producimos. Consulta los archivos `scss/_functions.scss` y `scss/_variables.scss` para obtener el código fuente completo.

## Mapas Sass de colores

Los archivos fuente de Sass de Bootstrap incluyen tres mapas para ayudarte a recorrer rápida y fácilmente una lista de colores y sus valores hexadecimales.

- `$colors` enumera todos nuestros colores base disponibles (`500`)
- `$theme-colors` enumera todos los colores del tema con nombres semánticos (que se muestran a continuación)
- `$grays` enumera todos los tintes y tonos de gris

Dentro de `scss/_variables.scss`, encontrarás las variables de color de Bootstrap y el mapa de Sass. Aquí hay un ejemplo del mapa Sass `$colors`:

{{< bootstrap/5-1/scss-docs name="colors-map" file="scss/_variables.scss" >}}

Agrega, elimina o modifica valores dentro del mapa para actualizar cómo se usan en muchos otros componentes. Desafortunadamente, en este momento, no todos los componentes utilizan este mapa de Sass. Las actualizaciones futuras se esforzarán por mejorar esto. Hasta entonces, planea hacer uso de las variables `${color}` y este mapa de Sass.

{{< content-ads/middle-banner-4 >}}

### Ejemplo

Así es como puedes usarlos en tu Sass:

```scss
.alpha { color: $purple; }
.beta {
  color: $yellow-300;
  background-color: $indigo-900;
}
```

Las clases de utilidad [Color]({{< bootstrap/5-1/docsref "/utilities/colors" >}}) y [background]({{< bootstrap/5-1/docsref "/utilities/background" >}}) también están disponibles para configurar `color` y `background-color` utilizando los valores de color `500`.

## Generación de utilidades

<small class="d-inline-flex px-2 py-1 font-monospace text-muted border rounded-3">Añadido en v5.1.0</small>

Bootstrap no incluye las utilidades `color` y `background-color` para cada variable de color, pero puedes generarlas tú mismo con nuestra [utility API]({{< bootstrap/5-1/docsref "/utilities/api" >}}) y nuestra mapas Sass extendido añadido en v5.1.0.

1. Para comenzar, asegúrate de haber importado nuestras funciones, variables, mixins y utilidades.
2. Utiliza nuestra función `map-merge-multiple()` para fusionar rápidamente múltiples mapas Sass en un nuevo mapa.
3. Fusiona este nuevo mapa combinado para ampliar cualquier utilidad con un nombre de clase `{color}-{level}`.

{{< content-ads/middle-banner-5 >}}

Aquí hay un ejemplo que genera utilidades de color de texto (por ejemplo, `.text-purple-500`) siguiendo los pasos anteriores.

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$all-colors: map-merge-multiple($blues, $indigos, $purples, $pinks, $reds, $oranges, $yellows, $greens, $teals, $cyans);

$utilities: map-merge(
  $utilities,
  (
    "color": map-merge(
      map-get($utilities, "color"),
      (
        values: map-merge(
          map-get(map-get($utilities, "color"), "values"),
          (
            $all-colors
          ),
        ),
      ),
    ),
  )
);

@import "bootstrap/scss/utilities/api";
```

Esto generará nuevas utilidades `.text-{color}-{level}` para cada color y nivel. También puedes hacer lo mismo con cualquier otra utilidad y propiedad.

{{< content-ads/bottom-banner >}}
