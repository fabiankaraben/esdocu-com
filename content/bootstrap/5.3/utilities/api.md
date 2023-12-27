---
weight: 1
linkTitle: API
title: Uso de la API de utilidades de Bootstrap · Bootstrap en Español v5.3
description: La API de utilidad es una herramienta basada en Sass para generar clases de utilidad.
prev: /bootstrap/5.3/helpers/visually-hidden
---

# Uso de la API de utilidades de Bootstrap

La API de utilidad es una herramienta basada en Sass para generar clases de utilidad.

{{< content-ads/top-banner >}}

Las utilidades Bootstrap se generan con nuestra API de utilidades y se pueden usar para modificar o ampliar nuestro conjunto predeterminado de clases de utilidades a través de Sass. Nuestra API de utilidad se basa en una serie de mapas y funciones de Sass para generar familias de clases con varias opciones. Si no estás familiarizado con los mapas de Sass, lee la [documentación oficial de Sass](https://sass-lang.com/documentation/values/maps) para comenzar.

El mapa `$utilities` contiene todas nuestras utilidades y luego se fusiona con tu mapa `$utilities` personalizado, si está presente. El mapa de utilidades contiene una lista clave de grupos de utilidades que aceptan las siguientes opciones:

| Opción                                         | Tipo          | Valor predeterminado | Descripción                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------- | ------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`property`](#property)                        | **Requerido** | –                    | Nombre de la propiedad, puede ser una cadena o una matriz de cadenas (por ejemplo, márgenes o rellenos horizontales).                                                                                                                                                                        |
| [`values`](#values)                            | **Requerido** | –                    | Lista de valores, o un mapa si no quieres que el nombre de la clase sea el mismo que el valor. Si se utiliza `null` como clave de mapa, `class` no se antepone al nombre de la clase.                                                                                                        |
| [`class`](#class)                              | Opcional      | null                 | Nombre de la clase generada. Si no se proporciona y `property` es una matriz de cadenas, `class` utilizará de forma predeterminada el primer elemento de la matriz `property`. Si no se proporciona y `property` es una cadena, las claves `values` se utilizan para los nombres de `class`. |
| [`css-var`](#css-variable-utilities)           | Opcional      | `false`              | Booleano para generar variables CSS en lugar de reglas CSS.                                                                                                                                                                                                                                  |
| [`css-variable-name`](#css-variable-utilities) | Opcional      | null                 | Nombre personalizado sin prefijo para la variable CSS dentro del conjunto de reglas.                                                                                                                                                                                                         |
| [`local-vars`](#local-css-variables)           | Opcional      | null                 | Mapa de variables CSS locales a generar además de las reglas CSS.                                                                                                                                                                                                                            |
| [`state`](#states)                             | Opcional      | null                 | Lista de variantes de pseudoclases (por ejemplo, `:hover` o `:focus`) para generar.                                                                                                                                                                                                          |
| [`responsive`](#responsive)                    | Opcional      | `false`              | Booleano que indica si se deben generar clases responsive.                                                                                                                                                                                                                                   |
| `rfs`                                          | Opcional      | `false`              | Booleano para habilitar el [rescalado fluid con RFS](/bootstrap/5.3/getting-started/rfs).                                                                                                                                                                                                    |
| [`print`](#print)                              | Opcional      | `false`              | Booleano que indica si es necesario generar clases de impresión.                                                                                                                                                                                                                             |
| `rtl`                                          | Opcional      | `true`               | Booleano que indica si la utilidad debe mantenerse en RTL.                                                                                                                                                                                                                                   |

API explicada {#api-explained}
-------------------------------

Todas las variables de utilidad se agregan a la variable `$utilities` dentro de nuestra hoja de estilo `_utilities.scss`. Cada grupo de utilidades se parece a esto:

```scss {filename="SCSS"}
$utilities: (
  "opacity": (
    property: opacity,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Que genera lo siguiente:

```css {filename="CSS"}
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }
```

### Propiedad {#property}

La clave `property` requerida debe estar configurada para cualquier utilidad y debe contener una propiedad CSS válida. Esta propiedad se utiliza en el conjunto de reglas de la utilidad generada. Cuando se omite la clave `class`, también sirve como nombre de clase predeterminado. Considera la utilidad `text-decoration`:

```scss {filename="SCSS"}
$utilities: (
  "text-decoration": (
    property: text-decoration,
    values: none underline line-through
  )
);
```

Salida:

```css {filename="CSS"}
.text-decoration-none { text-decoration: none !important; }
.text-decoration-underline { text-decoration: underline !important; }
.text-decoration-line-through { text-decoration: line-through !important; }
```

### Valores {#values}

Utiliza la clave `values` para especificar qué valores para la `property` especificada deben usarse en las reglas y nombres de clase generados. Puede ser una lista o un mapa (establecido en las utilidades o en una variable Sass).

Como una lista, como con las [`text-decoration` (utilidades)](/bootstrap/5.3/utilities/text/#text-decoration):

```scss {filename="SCSS"}
values: none underline line-through
```

Como mapa, como con las [`opacity` (utilidades)](/bootstrap/5.3/utilities/opacity):

```scss {filename="SCSS"}
values: (
  0: 0,
  25: .25,
  50: .5,
  75: .75,
  100: 1,
)
```

Como una variable Sass que establece la lista o mapa, como en nuestra [`position` (utilidades)](/bootstrap/5.3/utilities/position):

```scss {filename="SCSS"}
values: $position-values
```

### Clase {#class}

Usa la opción `class` para cambiar el prefijo de clase usado en el CSS compilado. Por ejemplo, para cambiar de `.opacity-*` a `.o-*`:

```scss {filename="SCSS"}
$utilities: (
  "opacity": (
    property: opacity,
    class: o,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Salida:

```css {filename="CSS"}
.o-0 { opacity: 0 !important; }
.o-25 { opacity: .25 !important; }
.o-50 { opacity: .5 !important; }
.o-75 { opacity: .75 !important; }
.o-100 { opacity: 1 !important; }
```

{{< bootstrap/content-suggestion >}}

Si `class: null`, genera clases para cada una de las claves `values`:

```scss {filename="SCSS"}
$utilities: (
  "visibility": (
    property: visibility,
    class: null,
    values: (
      visible: visible,
      invisible: hidden,
    )
  )
);
```

Salida:

```css {filename="CSS"}
.visible { visibility: visible !important; }
.invisible { visibility: hidden !important; }
```

### Utilidades de variables CSS {#css-variable-utilities}

Establece la opción booleana `css-var` en `true` y la API generará variables CSS locales para el selector dado en lugar del reglas habituales de `property: value`. Agrega un `css-variable-name` opcional para establecer un nombre de variable CSS diferente al nombre de la clase.

Considera nuestras utilidades `.text-opacity-*`. Si agregamos la opción `css-variable-name` obtendremos un resultado personalizado.

```scss {filename="SCSS"}
$utilities: (
  "text-opacity": (
    css-var: true,
    css-variable-name: text-alpha,
    class: text-opacity,
    values: (
      25: .25,
      50: .5,
      75: .75,
      100: 1
    )
  ),
);
```

Salida:

```css {filename="CSS"}
.text-opacity-25 { --bs-text-alpha: .25; }
.text-opacity-50 { --bs-text-alpha: .5; }
.text-opacity-75 { --bs-text-alpha: .75; }
.text-opacity-100 { --bs-text-alpha: 1; }
```

### Variables CSS locales {#local-css-variables}

Usa la opción `local-vars` para especificar un mapa Sass que generará variables CSS locales dentro del conjunto de reglas de la clase de utilidad. Ten en cuenta que puede requerir trabajo adicional consumir esas variables CSS locales en las reglas CSS generadas. Por ejemplo, considera nuestras utilidades `.bg-*`:

```scss {filename="SCSS"}
$utilities: (
  "background-color": (
    property: background-color,
    class: bg,
    local-vars: (
      "bg-opacity": 1
    ),
    values: map-merge(
      $utilities-bg-colors,
      (
        "transparent": transparent
      )
    )
  )
);
```

Salida:

```css {filename="CSS"}
.bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}
```

### Estados {#states}

Usa la opción `state` para generar variaciones de pseudoclases. Ejemplos de pseudoclases son `:hover` y `:focus`. Cuando se proporciona una lista de estados, se crean nombres de clase para esa pseudoclase. Por ejemplo, para cambiar la opacidad al pasar el mouse, agrega `state: hover` y obtendrás `.opacity-hover:hover` en tu CSS compilado.

¿Necesitas múltiples pseudoclases? Utiliza una lista de estados separados por espacios: `state: hover focus`.

```scss {filename="SCSS"}
$utilities: (
  "opacity": (
    property: opacity,
    class: opacity,
    state: hover,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Salida:

```css {filename="CSS"}
.opacity-0-hover:hover { opacity: 0 !important; }
.opacity-25-hover:hover { opacity: .25 !important; }
.opacity-50-hover:hover { opacity: .5 !important; }
.opacity-75-hover:hover { opacity: .75 !important; }
.opacity-100-hover:hover { opacity: 1 !important; }
```

### Responsive {#responsive}

Agrega el booleano `responsive` para generar utilidades responsive (por ejemplo, `.opacity-md-25`) en [todos los puntos de interrupción](/bootstrap/5.3/layout/breakpoints).

```scss {filename="SCSS"}
$utilities: (
  "opacity": (
    property: opacity,
    responsive: true,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Salida:

```css {filename="CSS"}
.opacity-0 { opacity: 0 !important; }
.opacity-25 { opacity: .25 !important; }
.opacity-50 { opacity: .5 !important; }
.opacity-75 { opacity: .75 !important; }
.opacity-100 { opacity: 1 !important; }

@media (min-width: 576px) {
  .opacity-sm-0 { opacity: 0 !important; }
  .opacity-sm-25 { opacity: .25 !important; }
  .opacity-sm-50 { opacity: .5 !important; }
  .opacity-sm-75 { opacity: .75 !important; }
  .opacity-sm-100 { opacity: 1 !important; }
}

@media (min-width: 768px) {
  .opacity-md-0 { opacity: 0 !important; }
  .opacity-md-25 { opacity: .25 !important; }
  .opacity-md-50 { opacity: .5 !important; }
  .opacity-md-75 { opacity: .75 !important; }
  .opacity-md-100 { opacity: 1 !important; }
}

@media (min-width: 992px) {
  .opacity-lg-0 { opacity: 0 !important; }
  .opacity-lg-25 { opacity: .25 !important; }
  .opacity-lg-50 { opacity: .5 !important; }
  .opacity-lg-75 { opacity: .75 !important; }
  .opacity-lg-100 { opacity: 1 !important; }
}

@media (min-width: 1200px) {
  .opacity-xl-0 { opacity: 0 !important; }
  .opacity-xl-25 { opacity: .25 !important; }
  .opacity-xl-50 { opacity: .5 !important; }
  .opacity-xl-75 { opacity: .75 !important; }
  .opacity-xl-100 { opacity: 1 !important; }
}

@media (min-width: 1400px) {
  .opacity-xxl-0 { opacity: 0 !important; }
  .opacity-xxl-25 { opacity: .25 !important; }
  .opacity-xxl-50 { opacity: .5 !important; }
  .opacity-xxl-75 { opacity: .75 !important; }
  .opacity-xxl-100 { opacity: 1 !important; }
}
```

{{< bootstrap/content-suggestion >}}

### Imprimir {#print}

Habilitar la opción `print`, **también** generará clases de utilidad para impresión, que solo se aplican dentro de `@media print { ... }` (media query).

```scss {filename="SCSS"}
$utilities: (
  "opacity": (
    property: opacity,
    print: true,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Salida:

```css {filename="CSS"}
.opacity-0 { opacity: 0 !important; }
.opacity-25 { opacity: .25 !important; }
.opacity-50 { opacity: .5 !important; }
.opacity-75 { opacity: .75 !important; }
.opacity-100 { opacity: 1 !important; }

@media print {
  .opacity-print-0 { opacity: 0 !important; }
  .opacity-print-25 { opacity: .25 !important; }
  .opacity-print-50 { opacity: .5 !important; }
  .opacity-print-75 { opacity: .75 !important; }
  .opacity-print-100 { opacity: 1 !important; }
}
```

Importancia {#importance}
--------------------------

Todas las utilidades generadas por la API incluyen `!important` para garantizar que se sobrescriben los componentes y las clases modificadoras según lo previsto. Puedes alternar esta configuración globalmente con la variable `$enable-important-utilities` (el valor predeterminado es `true`).

Usando la API {#using-the-api}
-------------------------------

Ahora que estás familiarizado con cómo funciona la API de utilidades, aprende cómo agregar tus propias clases personalizadas y modificar nuestras utilidades predeterminadas.

### Sobrescribir utilidades {#override-utilities}

Sobrescribe las utilidades existentes usando la misma clave. Por ejemplo, si deseas clases de utilidad de desbordamiento responsive adicionales, puede hacer esto:

```scss {filename="SCSS"}
$utilities: (
  "overflow": (
    responsive: true,
    property: overflow,
    values: visible hidden scroll auto,
  ),
);
```

### Agregar utilidades {#add-utilities}

Se pueden agregar nuevas utilidades al mapa predeterminado `$utilities` con un `map-merge`. Asegúrate de que nuestros archivos Sass requeridos y `_utilities.scss` se importen primero, luego usa `map-merge` para agregar tus utilidades adicionales. Por ejemplo, aquí se explica cómo agregar una utilidad `cursor` responsive con tres valores.

```scss {filename="SCSS"}
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab,
    )
  )
);

@import "bootstrap/scss/utilities/api";
```

### Modificar utilidades {#modify-utilities}

Modificar las utilidades existentes en el mapa predeterminado `$utilities` con las funciones `map-get` y `map-merge`. En el siguiente ejemplo, agregamos un valor adicional a las utilidades `width`. Comienza con un `map-merge` inicial y luego especifica qué utilidad deseas modificar. Desde allí, obtén el mapa `"width"` anidado con `map-get` para acceder y modificar las opciones y valores de la utilidad.

```scss {filename="SCSS"}
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    "width": map-merge(
      map-get($utilities, "width"),
      (
        values: map-merge(
          map-get(map-get($utilities, "width"), "values"),
          (10: 10%),
        ),
      ),
    ),
  )
);

@import "bootstrap/scss/utilities/api";
```

#### Habilitar responsive {#enable-responsive}

Puedes habilitar clases responsive para un conjunto existente de utilidades que actualmente no son responsive de forma predeterminada. Por ejemplo, para hacer que las clases `border` responsive:

```scss {filename="SCSS"}
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities, (
    "border": map-merge(
      map-get($utilities, "border"),
      ( responsive: true ),
    ),
  )
);

@import "bootstrap/scss/utilities/api";
```

{{< bootstrap/content-suggestion >}}

Esto ahora generará variaciones responsive de `.border` y `.border-0` para cada punto de interrupción. El CSS generado se verá así:

```css {filename="CSS"}
.border { ... }
.border-0 { ... }

@media (min-width: 576px) {
  .border-sm { ... }
  .border-sm-0 { ... }
}

@media (min-width: 768px) {
  .border-md { ... }
  .border-md-0 { ... }
}

@media (min-width: 992px) {
  .border-lg { ... }
  .border-lg-0 { ... }
}

@media (min-width: 1200px) {
  .border-xl { ... }
  .border-xl-0 { ... }
}

@media (min-width: 1400px) {
  .border-xxl { ... }
  .border-xxl-0 { ... }
}
```

#### Cambiar el nombre de las utilidades {#rename-utilities}

¿Faltan utilidades v4 o estás acostumbrado a otra convención de nomenclatura? La API de utilidades se puede utilizar para sobrescribir la `class` resultante de una utilidad determinada; por ejemplo, para cambiar el nombre de las utilidades `.ms-*` al antiguo `.ml-*`:

```scss {filename="SCSS"}
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities, (
    "margin-start": map-merge(
      map-get($utilities, "margin-start"),
      ( class: ml ),
    ),
  )
);

@import "bootstrap/scss/utilities/api";
```

### Quitar utilidades {#remove-utilities}

Elimina cualquiera de las utilidades predeterminadas con [`map-remove()` (función Sass)](https://sass-lang.com/documentation/modules/map#remove).

```scss {filename="SCSS"}
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

// Remove multiple utilities with a comma-separated list
$utilities: map-remove($utilities, "width", "float");

@import "bootstrap/scss/utilities/api";
```

También puedes usar [`map-merge()` (función Sass)](https://sass-lang.com/documentation/modules/map#merge) y establecer la clave de grupo en `null` para eliminar la utilidad.

```scss {filename="SCSS"}
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    "width": null
  )
);

@import "bootstrap/scss/utilities/api";
```

### Agregar, quitar, modificar {#add-remove-modify}

Puedes agregar, eliminar y modificar muchas utilidades a la vez con [`map-merge()` (función Sass)](https://sass-lang.com/documentation/modules/map#merge). Así es como puedes combinar los ejemplos anteriores en un mapa más grande.

```scss {filename="SCSS"}
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    // Remove the `width` utility
    "width": null,

    // Make an existing utility responsive
    "border": map-merge(
      map-get($utilities, "border"),
      ( responsive: true ),
    ),

    // Add new utilities
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab,
    )
  )
);

@import "bootstrap/scss/utilities/api";
```

#### Eliminar utilidad en RTL {#remove-utility-in-rtl}

Algunos casos extremos hacen [El estilo RTL es difícil](https://rtlstyling.com/posts/rtl-styling#common-things-that-might-not-work-for-rtl), como los saltos de línea en árabe. Por lo tanto, las utilidades se pueden eliminar de la salida RTL configurando la opción `rtl` en `false`:

```scss {filename="SCSS"}
$utilities: (
  "word-wrap": (
    property: word-wrap word-break,
    class: text,
    values: (break: break-word),
    rtl: false
  ),
);
```

{{< bootstrap/content-suggestion >}}

Salida:

```css {filename="CSS"}
/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}
/* rtl:end:remove */
```

Esto no genera nada en RTL, gracias a [la directiva de control `remove` RTLCSS](https://rtlcss.com/learn/usage-guide/control-directives/#remove).

{{< content-ads/bottom-banner >}}