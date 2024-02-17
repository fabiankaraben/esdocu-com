---
weight: 2
linkTitle: Sass
title: Uso de Sass en Bootstrap · Bootstrap en Español v5.3
description: Utiliza nuestros archivos fuente Sass para aprovechar variables, mapas, mixins y funciones que te ayudarán a construir más rápido y personalizar tu proyecto.
---

# Uso de Sass en Bootstrap

Utiliza nuestros archivos fuente Sass para aprovechar variables, mapas, mixins y funciones que te ayudarán a construir más rápido y personalizar tu proyecto.

{{< content-ads/top-banner >}}

Utiliza nuestros archivos fuente Sass para aprovechar variables, mapas, mixins y más.

Estructura de archivos {#file-structure}
-----------------------------------------

Siempre que sea posible, evita modificar los archivos principales de Bootstrap. Para Sass, eso significa crear tu propia hoja de estilo que importe Bootstrap para que puedas modificarla y ampliarla. Suponiendo que estés utilizando un administrador de paquetes como npm, tendrás una estructura de archivos similar a esta:

```
your-project/
├── scss/
│   └── custom.scss
└── node_modules/
│   └── bootstrap/
│       ├── js/
│       └── scss/
└── index.html
```

Si descargaste nuestros archivos fuente y no estás usando un administrador de paquetes, querrás crear manualmente algo similar a esa estructura, manteniendo los archivos fuente de Bootstrap separados de los tuyos.

```
your-project/
├── scss/
│   └── custom.scss
├── bootstrap/
│   ├── js/
│   └── scss/
└── index.html
```

Importar {#importing}
----------------------

En tu `custom.scss`, importarás los archivos Sass fuente de Bootstrap. Tienes dos opciones: incluir todo Bootstrap o elegir las piezas que necesitas. Recomendamos esto último, aunque ten en cuenta que existen algunos requisitos y dependencias entre nuestros componentes. También deberás incluir algo de JavaScript para nuestros complementos.

```scss {filename="SCSS"}
// Custom.scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)

@import "../node_modules/bootstrap/scss/bootstrap";

// Then add additional custom code here
```

```scss {filename="SCSS"}
// Custom.scss
// Option B: Include parts of Bootstrap

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here

// 3. Include remainder of required Bootstrap stylesheets (including any separate color mode stylesheets)
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// 6. Optionally include any other parts as needed
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/helpers";

// 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@import "../node_modules/bootstrap/scss/utilities/api";

// 8. Add additional custom code here
```

Con esa configuración implementada, puedes comenzar a modificar cualquiera de las variables y mapas de Sass en tu `custom.scss`. También puedes comenzar a agregar partes de Bootstrap en la sección `// Optional` según sea necesario. Te sugerimos utilizar la pila de importación completa de nuestro archivo `bootstrap.scss` como punto de partida.

Compilando {#compiling}
------------------------

Para poder usar tu código Sass personalizado como CSS en el navegador, necesitas un compilador Sass. Sass se envía como un paquete CLI, pero también puedes compilarlo con otras herramientas de compilación como [Gulp](https://gulpjs.com) o [Webpack](https://webpack.js.org), o con aplicaciones GUI. Algunos IDE también tienen compiladores Sass integrados o como extensiones descargables.

Nos gusta usar la CLI para compilar nuestro Sass, pero puedes usar el método que prefieras. Desde la línea de comando, ejecuta lo siguiente:

```shell {filename="Terminal"}
# Install Sass globally
npm install -g sass

# Watch your custom Sass for changes and compile it to CSS
sass --watch ./scss/custom.scss ./css/custom.css
```

Obtén más información sobre tus opciones en [sass-lang.com/install](https://sass-lang.com/install) y [compilando con VS Code](https://code.visualstudio.com/docs/languages/css#_transpiling-sass-and-less-into-css).

{{< content-ads/middle-banner-1 >}}

{{< callout type="info" emoji="" >}}
**¿Utilizas Bootstrap con otra herramienta de compilación?** Considera leer nuestras guías para compilar con [Webpack](/bootstrap/5.3/getting-started/webpack), [Parcel](/bootstrap/5.3/getting-started/parcel) o [Vite](/bootstrap/5.3/getting-started/vite). También tenemos demostraciones listas para producción en [nuestro repositorio de ejemplos en GitHub](https://github.com/twbs/examples).
{{< /callout >}}

{{< bootstrap/content-suggestion >}}

Incluyendo {#including}
------------------------

Una vez que tu CSS esté compilado, puedes incluirlo en tus archivos HTML. Dentro de tu `index.html` querrás incluir tu archivo CSS compilado. Asegúrate de actualizar la ruta a tu archivo CSS compilado si lo has cambiado.

```html {filename="HTML"}
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Custom Bootstrap</title>
    <link href="/css/custom.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

Valores predeterminados de variables {#variable-defaults}
----------------------------------------------------------

Cada variable Sass en Bootstrap incluye el indicador `!default` que te permite sobrescribir el valor predeterminado de la variable en tu propio Sass sin modificar el código fuente de Bootstrap. Copia y pega las variables según sea necesario, modifica sus valores y elimina la marca `!default`. Si una variable ya ha sido asignada, no será reasignada por los valores predeterminados en Bootstrap.

Encontrarás la lista completa de variables de Bootstrap en `scss/_variables.scss`. Algunas variables están configuradas en `null`, estas variables no generan la propiedad a menos que se sobrescriban en tu configuración.

Las sobrescrituras de variables deben realizarse después de importar nuestras funciones, pero antes del resto de las importaciones.

Aquí tienes un ejemplo que cambia el `background-color` y el `color` para el `<body>` al importar y compilar Bootstrap a través de npm:

```scss {filename="SCSS"}
// Required
@import "../node_modules/bootstrap/scss/functions";

// Default variable overrides
$body-bg: #000;
$body-color: #111;

// Required
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Optional Bootstrap components here
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc
```

Repite según sea necesario para cualquier variable en Bootstrap, incluidas las opciones globales a continuación.

{{< callout type="info" emoji="" >}}
**¡Empieza a usar Bootstrap a través de npm con nuestro proyecto inicial!** Dirígete al repositorio de ejemplo de [Sass y JS](https://github.com/twbs/examples/tree/main/sass-js) para ver cómo crear y personalizar Bootstrap en tu propio proyecto npm. Incluye el compilador Sass, Autoprefixer, Stylelint, PurgeCSS y Bootstrap Icons.
{{< /callout >}}

Mapas y bucles {#maps-and-loops}
---------------------------------

Bootstrap incluye un puñado de mapas Sass, pares clave-valor que facilitan la generación de familias de CSS relacionados. Usamos mapas de Sass para nuestros colores, puntos de interrupción de cuadrícula y más. Al igual que las variables de Sass, todos los mapas de Sass incluyen el indicador `!default` y se pueden sobrescribir y ampliar.

Algunos de nuestros mapas Sass se fusionan en mapas vacíos de forma predeterminada. Esto se hace para permitir una fácil expansión de un mapa de Sass determinado, pero tiene el costo de hacer que _eliminar_ elementos de un mapa sea un poco más difícil.

{{< content-ads/middle-banner-2 >}}

### Modificar mapa {#modify-map}

Todas las variables en el mapa `$theme-colors` se definen como variables independientes. Para modificar un color existente en nuestro mapa `$theme-colors`, agrega lo siguiente a tu archivo Sass personalizado:

```scss {filename="SCSS"}
$primary: #0074d9;
$danger: #ff4136;
```

Más adelante, estas variables se configuran en el mapa `$theme-colors` de Bootstrap:

```scss {filename="SCSS"}
$theme-colors: (
  "primary": $primary,
  "danger": $danger
);
```

### Agregar al mapa {#add-to-map}

Agrega nuevos colores a `$theme-colors`, o cualquier otro mapa, creando un nuevo mapa Sass con tus valores personalizados y fusionándolo con el mapa original. En este caso, crearemos un nuevo mapa `$custom-colors` y lo fusionaremos con `$theme-colors`.

```scss {filename="SCSS"}
// Create your own map
$custom-colors: (
  "custom-color": #900
);

// Merge the maps
$theme-colors: map-merge($theme-colors, $custom-colors);
```

### Eliminar del mapa {#remove-from-map}

Para eliminar colores de `$theme-colors`, o de cualquier otro mapa, usa `map-remove`. Ten en cuenta que debes insertar `$theme-colors` entre nuestros requisitos justo después de tu definición en `variables` y antes de su uso en `maps`:

```scss {filename="SCSS"}
// Required
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

$theme-colors: map-remove($theme-colors, "info", "light", "dark");

@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Optional
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc
```

Claves requeridas {#required-keys}
-----------------------------------

Bootstrap asume la presencia de algunas claves específicas dentro de los mapas de Sass, ya que las usamos y ampliamos nosotros mismos. A medida que personalizas los mapas incluidos, puedes encontrar errores cuando se utiliza la clave de un mapa Sass específico.

Por ejemplo, usamos las claves `primary`, `success` y `danger` de `$theme-colors` para enlaces, botones y estados de formulario. Reemplazar los valores de estas claves no debería presentar problemas, pero eliminarlas puede causar problemas de compilación de Sass. En estos casos, deberás modificar el código Sass que utiliza esos valores.

Funciones {#functions}
-----------------------

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-3 >}}

### Colores {#colors}

Junto a los [mapas Sass](/bootstrap/5.3/customize/color/#color-sass-maps) que tenemos, los colores del tema también pueden usarse como variables independientes, como `$primary`.

```scss {filename="SCSS"}
.custom-element {
  color: $gray-100;
  background-color: $dark;
}
```

Puedes aclarar u oscurecer colores con las funciones `tint-color()` y `shade-color()` de Bootstrap. Estas funciones mezclarán colores con blanco o negro, a diferencia de las funciones nativas `lighten()` y `darken()` de Sass que cambiarán la luminosidad en una cantidad fija, lo que a menudo no conduce al efecto deseado.

[scss/_functions.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_functions.scss)

```scss {filename="SCSS"}
// Tint a color: mix a color with white
@function tint-color($color, $weight) {
  @return mix(white, $color, $weight);
}

// Shade a color: mix a color with black
@function shade-color($color, $weight) {
  @return mix(black, $color, $weight);
}

// Shade the color if the weight is positive, else tint it
@function shift-color($color, $weight) {
  @return if($weight > 0, shade-color($color, $weight), tint-color($color, -$weight));
}
```

En la práctica, llamarías a la función y pasarías los parámetros de color y peso.

```scss {filename="SCSS"}
.custom-element {
  color: tint-color($primary, 10%);
}

.custom-element-2 {
  color: shade-color($danger, 30%);
}
```

### Contraste de color {#color-contrast}

Para cumplir con las [Pautas de Accesibilidad al Contenido Web (WCAG)](https://www.w3.org/TR/WCAG), los autores **deben** proporcionar un [contraste de color del texto mínimo de 4.5:1](https://www.w3.org/TR/WCAG/#contrast-minimum) y un [contraste de color sin texto mínimo de 3:1](https://www.w3.org/TR/WCAG/#non-text-contrast), con muy pocas excepciones.

Para ayudar con esto, incluimos la función `color-contrast` en Bootstrap. Utiliza el [algoritmo de relación de contraste WCAG](https://www.w3.org/TR/WCAG/#dfn-contrast-ratio) para calcular umbrales de contraste basados en [luminancia relativa](https://www.w3.org/TR/WCAG/#dfn-relative-luminance) en un espacio de color `sRGB` para devolver automáticamente un color de contraste claro (`#fff`), oscuro (`#212529`) o negro (`#000`) según el color base especificado. Esta función es especialmente útil para mixins o bucles en los que generas varias clases.

Por ejemplo, para generar muestras de color desde nuestro mapa `$theme-colors`:

```scss {filename="SCSS"}
@each $color, $value in $theme-colors {
  .swatch-#{$color} {
    color: color-contrast($value);
  }
}
```

También se puede utilizar para necesidades puntuales de contraste:

```scss {filename="SCSS"}
.custom-element {
  color: color-contrast(#000); // returns `color: #fff`
}
```

También puedes especificar un color base con nuestras funciones de mapa de colores:

{{< content-ads/middle-banner-4 >}}

```scss {filename="SCSS"}
.custom-element {
  color: color-contrast($dark); // returns `color: #fff`
}
```

### Escape SVG {#escape-svg}

Usamos la función `escape-svg` para escapar de `<`, `>` y `#` caracteres para imágenes de fondo SVG. Cuando se utiliza la función `escape-svg`, se deben citar los URI de datos.

### Funciones de sumar y restar {#add-and-subtract-functions}

Usamos las funciones `add` y `subtract` para envolver la función CSS `calc`. El objetivo principal de estas funciones es evitar errores cuando un valor `0` “sin unidades” se pasa a una expresión `calc`. Expresiones como `calc(10px - 0)` devolverán un error en todos los navegadores, a pesar de ser matemáticamente correctas.

Ejemplo donde el cálculo es válido:

```scss {filename="SCSS"}
$border-radius: .25rem;
$border-width: 1px;

.element {
  // Output calc(.25rem - 1px) is valid
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Output the same calc(.25rem - 1px) as above
  border-radius: subtract($border-radius, $border-width);
}
```

Ejemplo donde el cálculo no es válido:

```scss {filename="SCSS"}
$border-radius: .25rem;
$border-width: 0;

.element {
  // Output calc(.25rem - 0) is invalid
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Output .25rem
  border-radius: subtract($border-radius, $border-width);
}
```
    

Mixins {#mixins}
-----------------

Nuestro directorio `scss/mixins/` tiene un montón de mixins que potencian partes de Bootstrap y también se pueden usar en tu propio proyecto.

{{< bootstrap/content-suggestion >}}

### Esquemas de colores {#color-schemes}

Hay disponible una combinación abreviada para la media query `prefers-color-scheme` compatible con `light`, `dark` y esquemas de color personalizados. Consulta [la documentación de modos de color](/bootstrap/5.3/customize/color-modes) para obtener información sobre nuestra combinación de modos de color.

[scss/mixins/_color-scheme.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/mixins/_color-scheme.scss)

{{< content-ads/middle-banner-5 >}}

```scss {filename="SCSS"}
@mixin color-scheme($name) {
  @media (prefers-color-scheme: #{$name}) {
    @content;
  }
}
```

```scss {filename="SCSS"}
.custom-element {
  @include color-scheme(dark) {
    // Insert dark mode styles here
  }

  @include color-scheme(custom-named-scheme) {
    // Insert custom color scheme styles here
  }
}
```

{{< content-ads/bottom-banner >}}
