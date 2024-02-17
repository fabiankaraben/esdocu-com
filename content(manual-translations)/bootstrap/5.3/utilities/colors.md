---
weight: 4
linkTitle: Colores
title: Uso de las utilidades de Colores en Bootstrap · Bootstrap en Español v5.3
description: Transmite significado a través del color con un puñado de clases de utilidad de color. También incluye soporte para diseñar enlaces con estados de desplazamiento.
---

# Uso de las utilidades de Colores en Bootstrap

Transmitir significado a través del `color` con un puñado de clases de utilidad de color. También incluye soporte para diseñar enlaces con estados hover.

{{< content-ads/top-banner >}}

{{< callout type="info" emoji="" >}}
**Consejo de accesibilidad:** El uso de colores para agregar significado solo proporciona una indicación visual, que no se transmitirá a los usuarios de tecnologías de asistencia como lectores de pantalla. Asegúrate de que el significado sea obvio a partir del contenido mismo (por ejemplo, el texto visible con un [_suficiente_ contraste de color](/bootstrap/5.3/getting-started/accessibility#color-contrast)) o se incluye a través de medios alternativos, como texto adicional oculto con la clase `.visually-hidden`.
{{< /callout >}}

Colores {#colors}
------------------

Colorea texto con utilidades de color. Si deseas colorear enlaces, puedes utilizar las [`.link-*` (clases auxiliares)](/bootstrap/5.3/helpers/colored-links) que tienen los estados `:hover` y `:focus`.

{{< callout type="info" emoji="" >}}
Las utilidades de color como `.text-*` que se generaron a partir de nuestro mapa Sass `$theme-colors` original aún no responden a los modos de color; sin embargo, cualquier `.text-*-emphasis` lo hará. Esto se resolverá en v6.
{{< /callout >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/colors/colors.html" >}}
```html {filename="HTML"}
    <p class="text-primary">.text-primary</p>
    <p class="text-primary-emphasis">.text-primary-emphasis</p>
    <p class="text-secondary">.text-secondary</p>
    <p class="text-secondary-emphasis">.text-secondary-emphasis</p>
    <p class="text-success">.text-success</p>
    <p class="text-success-emphasis">.text-success-emphasis</p>
    <p class="text-danger">.text-danger</p>
    <p class="text-danger-emphasis">.text-danger-emphasis</p>
    <p class="text-warning bg-dark">.text-warning</p>
    <p class="text-warning-emphasis">.text-warning-emphasis</p>
    <p class="text-info bg-dark">.text-info</p>
    <p class="text-info-emphasis">.text-info-emphasis</p>
    <p class="text-light bg-dark">.text-light</p>
    <p class="text-light-emphasis">.text-light-emphasis</p>
    <p class="text-dark bg-white">.text-dark</p>
    <p class="text-dark-emphasis">.text-dark-emphasis</p>
    
    <p class="text-body">.text-body</p>
    <p class="text-body-emphasis">.text-body-emphasis</p>
    <p class="text-body-secondary">.text-body-secondary</p>
    <p class="text-body-tertiary">.text-body-tertiary</p>
    
    <p class="text-black bg-white">.text-black</p>
    <p class="text-white bg-dark">.text-white</p>
    <p class="text-black-50 bg-white">.text-black-50</p>
    <p class="text-white-50 bg-dark">.text-white-50</p>
```
{{< /demo-iframe >}}

{{< callout type="warning" emoji="" >}}
**Desuso:** con la adición de utilidades `.text-opacity-*` y variables CSS para utilidades de texto, `.text-black-50` y `.text-white-50` están obsoletos a partir de v5.1.0. Se eliminarán en v6.0.0.
{{< /callout >}}

{{< callout type="warning" emoji="" >}}
**Desuso:** Con la adición de variables y colores de tema ampliados, la utilidad `.text-muted` ha quedado obsoleta a partir de la versión 5.3.0. Su valor predeterminado también se ha reasignado a la nueva variable CSS `--bs-secondary-color` para admitir mejor los modos de color. Se eliminará en v6.0.0.
{{< /callout >}}

Opacidad {#opacity}
--------------------

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.1.0</span>

A partir de v5.1.0, las utilidades de color de texto se generan con Sass usando variables CSS. Esto permite cambios de color en tiempo real sin compilación y cambios dinámicos de transparencia alfa.

### Cómo funciona {#how-it-works}

Considera nuestra utilidad `.text-primary` predeterminada.

{{< content-ads/middle-banner-1 >}}

```css {filename="CSS"}
.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
```

Usamos una versión RGB de nuestra variable CSS `--bs-primary` (con el valor de `13, 110, 253`) y se adjuntó una segunda variable CSS, `--bs-text-opacity`, para la transparencia alfa (con un valor predeterminado `1` gracias a una variable CSS local). Eso significa que cada vez que uses `.text-primary` ahora, tu valor de `color` calculado es `rgba(13, 110, 253, 1)`. La variable CSS local dentro de cada clase `.text-*` evita problemas de herencia, por lo que las instancias anidadas de las utilidades no tienen automáticamente una transparencia alfa modificada.

### Ejemplo {#example}

Para cambiar esa opacidad, sobrescribe `--bs-text-opacity` mediante estilos personalizados o estilos en línea.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/colors/example-1.html" >}}
```html {filename="HTML"}
    <div class="text-primary">Este es el texto principal predeterminado</div>
    <div class="text-primary" style="--bs-text-opacity: .5;">Este es un texto primary con una opacidad del 50%.</div>
```
{{< /demo-iframe >}}

O elige cualquiera de las utilidades `.text-opacity`:

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/colors/example-2.html" >}}
```html {filename="HTML"}
    <div class="text-primary">Este es el texto principal predeterminado</div>
    <div class="text-primary text-opacity-75">Este es un texto primary con una opacidad del 75%.</div>
    <div class="text-primary text-opacity-50">Este es un texto primary con una opacidad del 50%.</div>
    <div class="text-primary text-opacity-25">Este es un texto primary con una opacidad del 25%.</div>
```
{{< /demo-iframe >}}

Especificidad {#specificity}
-----------------------------

A veces las clases contextuales no se pueden aplicar debido a la especificidad de otro selector. En algunos casos, una solución suficiente es envolver el contenido de tu elemento en un `<div>` o un elemento más semántico con la clase deseada.

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

Además de las siguientes funciones de Sass, considera leer sobre nuestras [propiedades personalizadas de CSS](/bootstrap/5.3/customize/css-variables) incluidas (también conocidas como variables CSS) para colores y más.

{{< content-ads/middle-banner-2 >}}

### Variables Sass generales relacionadas {#sass-variables}

La mayoría de las utilidades `color` se generan a partir de los colores de nuestro tema, reasignados a partir de las variables genéricas de nuestra paleta de colores.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$blue:    #0d6efd;
$indigo:  #6610f2;
$purple:  #6f42c1;
$pink:    #d63384;
$red:     #dc3545;
$orange:  #fd7e14;
$yellow:  #ffc107;
$green:   #198754;
$teal:    #20c997;
$cyan:    #0dcaf0;
```

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$primary:       $blue;
$secondary:     $gray-600;
$success:       $green;
$info:          $cyan;
$warning:       $yellow;
$danger:        $red;
$light:         $gray-100;
$dark:          $gray-900;
```

Los colores en escala de grises también están disponibles, pero solo se utiliza un subconjunto para generar utilidades.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$white:    #fff;
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-300: #dee2e6;
$gray-400: #ced4da;
$gray-500: #adb5bd;
$gray-600: #6c757d;
$gray-700: #495057;
$gray-800: #343a40;
$gray-900: #212529;
$black:    #000;
```

[scss/_maps.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_maps.scss)

```scss {filename="scss/_maps.scss"}
$theme-colors-text: (
  "primary": $primary-text-emphasis,
  "secondary": $secondary-text-emphasis,
  "success": $success-text-emphasis,
  "info": $info-text-emphasis,
  "warning": $warning-text-emphasis,
  "danger": $danger-text-emphasis,
  "light": $light-text-emphasis,
  "dark": $dark-text-emphasis,
);
```

Variables para configurar colores en utilidades `.text-*-emphasis` en modo claro y oscuro:

{{< content-ads/middle-banner-3 >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$primary-text-emphasis:   shade-color($primary, 60%);
$secondary-text-emphasis: shade-color($secondary, 60%);
$success-text-emphasis:   shade-color($success, 60%);
$info-text-emphasis:      shade-color($info, 60%);
$warning-text-emphasis:   shade-color($warning, 60%);
$danger-text-emphasis:    shade-color($danger, 60%);
$light-text-emphasis:     $gray-700;
$dark-text-emphasis:      $gray-700;
```

[scss/_variables-dark.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables-dark.scss)

```scss {filename="scss/_variables-dark.scss"}
$primary-text-emphasis-dark:        tint-color($primary, 40%);
$secondary-text-emphasis-dark:      tint-color($secondary, 40%);
$success-text-emphasis-dark:        tint-color($success, 40%);
$info-text-emphasis-dark:           tint-color($info, 40%);
$warning-text-emphasis-dark:        tint-color($warning, 40%);
$danger-text-emphasis-dark:         tint-color($danger, 40%);
$light-text-emphasis-dark:          $gray-100;
$dark-text-emphasis-dark:           $gray-300;
```

### Mapas de Sass {#sass-maps}

Los colores del tema luego se colocan en un mapa de Sass para que podamos recorrerlos para generar nuestras utilidades, modificadores de componentes y más.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$theme-colors: (
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
);
```

Los colores en escala de grises también están disponibles como mapa Sass. **Este mapa no se utiliza para generar ninguna utilidad.**

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$grays: (
  "100": $gray-100,
  "200": $gray-200,
  "300": $gray-300,
  "400": $gray-400,
  "500": $gray-500,
  "600": $gray-600,
  "700": $gray-700,
  "800": $gray-800,
  "900": $gray-900
);
```

Los colores RGB se generan a partir de un mapa Sass separado:

{{< content-ads/middle-banner-4 >}}

[scss/_maps.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_maps.scss)

```scss {filename="scss/_maps.scss"}
$theme-colors-rgb: map-loop($theme-colors, to-rgb, "$value");
```

{{< bootstrap/content-suggestion >}}

Las opacidades de color se basan en eso con su propio mapa que es consumido por la API de utilidades:

[scss/_maps.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_maps.scss)

```scss {filename="scss/_maps.scss"}
$utilities-text: map-merge(
  $utilities-colors,
  (
    "black": to-rgb($black),
    "white": to-rgb($white),
    "body": to-rgb($body-color)
  )
);
$utilities-text-colors: map-loop($utilities-text, rgba-css-var, "$key", "text");

$utilities-text-emphasis-colors: (
  "primary-emphasis": var(--#{$prefix}primary-text-emphasis),
  "secondary-emphasis": var(--#{$prefix}secondary-text-emphasis),
  "success-emphasis": var(--#{$prefix}success-text-emphasis),
  "info-emphasis": var(--#{$prefix}info-text-emphasis),
  "warning-emphasis": var(--#{$prefix}warning-text-emphasis),
  "danger-emphasis": var(--#{$prefix}danger-text-emphasis),
  "light-emphasis": var(--#{$prefix}light-text-emphasis),
  "dark-emphasis": var(--#{$prefix}dark-text-emphasis)
);
```

Los colores de texto adaptativo al modo de color también están disponibles como mapa Sass:

[scss/_maps.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_maps.scss)

```scss {filename="scss/_maps.scss"}
$theme-colors-text: (
  "primary": $primary-text-emphasis,
  "secondary": $secondary-text-emphasis,
  "success": $success-text-emphasis,
  "info": $info-text-emphasis,
  "warning": $warning-text-emphasis,
  "danger": $danger-text-emphasis,
  "light": $light-text-emphasis,
  "dark": $dark-text-emphasis,
);
```

[scss/_maps.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_maps.scss)

```scss {filename="scss/_maps.scss"}
$theme-colors-text-dark: (
  "primary": $primary-text-emphasis-dark,
  "secondary": $secondary-text-emphasis-dark,
  "success": $success-text-emphasis-dark,
  "info": $info-text-emphasis-dark,
  "warning": $warning-text-emphasis-dark,
  "danger": $danger-text-emphasis-dark,
  "light": $light-text-emphasis-dark,
  "dark": $dark-text-emphasis-dark,
);
```

### API de utilidades de Sass {#sass-utilities-api}

{{< content-ads/middle-banner-5 >}}

Las utilidades de color se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"color": (
  property: color,
  class: text,
  local-vars: (
    "text-opacity": 1
  ),
  values: map-merge(
    $utilities-text-colors,
    (
      "muted": var(--#{$prefix}secondary-color), // deprecated
      "black-50": rgba($black, .5), // deprecated
      "white-50": rgba($white, .5), // deprecated
      "body-secondary": var(--#{$prefix}secondary-color),
      "body-tertiary": var(--#{$prefix}tertiary-color),
      "body-emphasis": var(--#{$prefix}emphasis-color),
      "reset": inherit,
    )
  )
),
"text-opacity": (
  css-var: true,
  class: text-opacity,
  values: (
    25: .25,
    50: .5,
    75: .75,
    100: 1
  )
),
"text-color": (
  property: color,
  class: text,
  values: $utilities-text-emphasis-colors
),
```

{{< content-ads/bottom-banner >}}
