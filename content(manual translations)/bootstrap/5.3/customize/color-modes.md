---
weight: 5
linkTitle: Modos de color
title: Los Modos de color en Bootstrap · Bootstrap en Español v5.3
description: Bootstrap ahora admite modos de color o temas a partir de la versión 5.3.0. Explora nuestro modo de color claro predeterminado y el nuevo modo oscuro, o crea el tuyo propio usando nuestros estilos como plantilla.
---

# Los Modos de color en Bootstrap

Bootstrap ahora admite modos de color o temas a partir de la versión 5.3.0. Explora nuestro modo de color claro predeterminado y el nuevo modo oscuro, o crea el tuyo propio usando nuestros estilos como plantilla.

{{< content-ads/top-banner >}}

<br />
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.3.0</span>

{{< callout type="info" emoji="" >}}
**¡Pruébalo tú mismo!** Descarga el código fuente y la demostración funcional para usar Bootstrap con Stylelint y los modos de color del repositorio [twbs/examples](https://github.com/twbs/examples/tree/main/color-modes). También puedes [abrir el ejemplo en StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/color-modes?file=index).
{{< /callout >}}

Modo oscuro {#dark-mode}
-------------------------

**Bootstrap ahora admite modos de color, ¡comenzando con el modo oscuro!** Con v5.3.0 puedes implementar tu propio alternador de modo de color (ver a continuación un ejemplo de la docs de Bootstrap) y aplica los diferentes modos de color como mejor te parezca. Admitimos un modo claro (predeterminado) y ahora un modo oscuro. Los modos de color se pueden alternar globalmente en el elemento `<html>`, o en componentes y elementos específicos, gracias al atributo `data-bs-theme`.

Como alternativa, también puedes cambiar a una implementación de media queries gracias a nuestra combinación de modos de color, consulta [la sección de uso para obtener más detalles](#building-with-sass). Sin embargo, ten cuidado: esto elimina tu capacidad de cambiar temas por componente, como se muestra a continuación.

Ejemplo {#example}
-------------------

Por ejemplo, para cambiar el modo de color de un menú desplegable, agrega `data-bs-theme="light"` o `data-bs-theme="dark"` al padre `.dropdown`. Ahora, sin importar el modo de color global, estos menús desplegables se mostrarán con el valor del tema especificado.

{{< demo-iframe path="/demos/bootstrap/5.3/customize/color-modes/example.html" >}}
```html {filename="HTML"}
    <div class="dropdown" data-bs-theme="light">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight"
            data-bs-toggle="dropdown" aria-expanded="false">
            Menú desplegable predeterminado
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLight" style="">
            <li><a class="dropdown-item active" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Enlace separado</a></li>
        </ul>
    </div>

    <div class="dropdown" data-bs-theme="dark">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonDark"
            data-bs-toggle="dropdown" aria-expanded="false">
            Menú desplegable oscuro
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
            <li><a class="dropdown-item active" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><a class="dropdown-item" href="#">Algo más aquí.</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Enlace separado</a></li>
        </ul>
    </div>
```
{{< /demo-iframe >}}

Cómo funciona {#how-it-works}
-------------------------------

* Como se muestra arriba, los estilos de modo de color están controlados por el atributo `data-bs-theme`. Este atributo se puede aplicar al elemento `<html>`, o a cualquier otro elemento o componente Bootstrap. Si se aplica al elemento `<html>`, se aplicará a todo. Si se aplica a un componente o elemento, su ámbito será ese componente o elemento específico.
    
* Para cada modo de color que desees admitir, necesitarás agregar nuevas sobrescrituras para las variables CSS globales compartidas. Ya hacemos esto en nuestra hoja de estilo `_root.scss` para el modo oscuro, siendo el modo claro los valores predeterminados. Al escribir estilos específicos del modo de color, utiliza el mixin:

  ```scss {filename="SCSS"}
  // Color mode variables in _root.scss
  @include color-mode(dark) {
    // CSS variable overrides here...
  }
  ```
    
{{< content-ads/middle-banner-1 >}}

* Utilizamos un `_variables-dark.scss` personalizado para potenciar esas sobrescrituras de variables CSS globales compartidas para el modo oscuro. Este archivo no es necesario para tus propios modos de color personalizados, pero sí para nuestro modo oscuro por dos razones. En primer lugar, es mejor tener un único lugar para restablecer los colores globales. En segundo lugar, algunas variables de Sass tuvieron que ser anuladas para imágenes de fondo incrustadas en nuestro CSS para acordeones, componentes de formulario y más.
    

Uso {#usage}
-------------

### Activa el modo oscuro {#enable-dark-mode}

Habilita el modo de color oscuro integrado en todo tu proyecto agregando el atributo `data-bs-theme="dark"` al elemento `<html>`. Esto aplicará el modo de color oscuro a todos los componentes y elementos, excepto aquellos con un atributo `data-bs-theme` específico aplicado. Aprovechando la [plantilla de inicio rápido](/bootstrap/5.3/getting-started/introduction/#quick-start):

```html {filename="HTML"}
<!doctype html>
<html lang="en" data-bs-theme="dark">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </body>
</html>
```

Bootstrap aún no viene con un selector de modo de color incorporado, pero puedes usar el de nuestra propia documentación si lo deseas. [Obtén más información en la sección JavaScript.](#javascript)

{{< bootstrap/content-suggestion >}}

### Construyendo con Sass {#building-with-sass}

Nuestra nueva opción de modo oscuro está disponible para todos los usuarios de Bootstrap, pero se controla mediante atributos de datos en lugar de media queries y no alterna automáticamente el modo de color de tu proyecto. Puedes desactivar nuestro modo oscuro por completo a través de Sass cambiando `$enable-dark-mode` a `false`.

Utilizamos un mixin Sass personalizado, `color-mode()`, para ayudarte a controlar _cómo_ se aplican los modos de color. De forma predeterminada, utilizamos un enfoque de atributo `data`, lo que te permite crear experiencias más fáciles de usar donde tus visitantes pueden elegir tener un modo oscuro automático o controlar sus preferencias (como en nuestra propia documentación aquí). Esta también es una forma fácil y escalable de agregar diferentes temas y más modos de color personalizados más allá de claro y oscuro.

En caso de que quieras usar media queries y solo hacer que los modos de color sean automáticos, puedes cambiar el tipo predeterminado del mixin a través de la variable Sass. Considera el siguiente fragmento y su salida CSS compilada.

{{< content-ads/middle-banner-2 >}}

```scss {filename="SCSS"}
$color-mode-type: data;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
```

Salidas a:

```css {filename="CSS"}
[data-bs-theme=dark] .element {
  color: var(--bs-primary-text-emphasis);
  background-color: var(--bs-primary-bg-subtle);
}
```

Y al configurar a `media-query`:

```scss {filename="SCSS"}
$color-mode-type: media-query;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
```

Salidas a:

```css {filename="CSS"}
@media (prefers-color-scheme: dark) {
  .element {
    color: var(--bs-primary-text-emphasis);
    background-color: var(--bs-primary-bg-subtle);
  }
}
```
    
Modos de color personalizados {#custom-color-modes}
----------------------------------------------------

Si bien el caso de uso principal para los modos de color es el modo claro y oscuro, también son posibles los modos de color personalizados. Crea tu propio selector `data-bs-theme` con un valor personalizado como nombre de tu modo de color, luego modifica nuestras variables Sass y CSS según sea necesario. Optamos por crear una hoja de estilo `_variables-dark.scss` separada para albergar las variables Sass específicas del modo oscuro de Bootstrap, pero eso no es necesario para ti.

Por ejemplo, puedes crear un “tema blue” con el selector `data-bs-theme="blue"`. En tu archivo Sass o CSS personalizado, agrega el nuevo selector y sobrescribe cualquier variable CSS global o componente según sea necesario. Si estás usando Sass, también puedes usar las funciones de Sass dentro de tus sobrescrituras de variables CSS.

[site/assets/scss/_content.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/site/assets/scss/_content.scss)

```scss {filename="site/assets/scss/_content.scss"}
[data-bs-theme="blue"] {
  --bs-body-color: var(--bs-white);
  --bs-body-color-rgb: #{to-rgb($white)};
  --bs-body-bg: var(--bs-blue);
  --bs-body-bg-rgb: #{to-rgb($blue)};
  --bs-tertiary-bg: #{$blue-600};

  .dropdown-menu {
    --bs-dropdown-bg: #{mix($blue-500, $blue-600)};
    --bs-dropdown-link-active-bg: #{$blue-700};
  }

  .btn-secondary {
    --bs-btn-bg: #{mix($gray-600, $blue-400, .5)};
    --bs-btn-border-color: #{rgba($white, .25)};
    --bs-btn-hover-bg: #{darken(mix($gray-600, $blue-400, .5), 5%)};
    --bs-btn-hover-border-color: #{rgba($white, .25)};
    --bs-btn-active-bg: #{darken(mix($gray-600, $blue-400, .5), 10%)};
    --bs-btn-active-border-color: #{rgba($white, .5)};
    --bs-btn-focus-border-color: #{rgba($white, .5)};
    --bs-btn-focus-box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .2);
  }
}
```

{{< content-ads/middle-banner-3 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/customize/color-modes/custom-color-modes.html" >}}
```html {filename="HTML"}
    <div data-bs-theme="blue">
      ...
    </div>
```
{{< /demo-iframe >}}    

JavaScript {#javascript}
----------------------------------------------------------

Para permitir a los visitantes o usuarios alternar modos de color, necesitarás crear un elemento de alternancia para controlar el atributo `data-bs-theme` en el elemento raíz, `<html>`. Hemos creado un conmutador en nuestra documentación que inicialmente se remite al modo de color actual del sistema del usuario, pero proporciona una opción para sobrescribirlo y elegir un modo de color específico.

Aquí tienes un vistazo al JavaScript que lo impulsa. No dudes en inspeccionar nuestra propia barra de navegación de documentación para ver cómo se implementa utilizando HTML y CSS desde nuestros propios componentes. Se sugiere incluir JavaScript en la parte superior de su página para reducir el posible parpadeo de la pantalla durante la recarga de tu sitio. Ten en cuenta que si decides utilizar media queries para tus modos de color, es posible que debas modificar o eliminar tu JavaScript si prefiere un control implícito.

```javascript {filename="JavaScript"}
/*!
  * Color mode toggler for Bootstrap's docs (https://getbootstrap.com)
  * Copyright 2011-2023 The Bootstrap Authors
  * Licensed under the Creative Commons Attribution 3.0 Unported License.
  */

(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()
```

Agregar colores al tema {#adding-theme-colors}
-----------------------------------------------

Agregar un nuevo color en `$theme-colors` no es suficiente para algunos de nuestros componentes como las [alertas](/bootstrap/5.3/components/alerts) y [grupo de listas](/bootstrap/5.3/components/list-group). También se deben definir nuevos colores en `$theme-colors-text`, `$theme-colors-bg-subtle` y `$theme-colors-border-subtle` para el tema light (claro); pero también en `$theme-colors-text-dark`, `$theme-colors-bg-subtle-dark` y `$theme-colors-border-subtle-dark` para el tema dark (oscuro).

{{< bootstrap/content-suggestion >}}

Este es un proceso manual porque Sass no puede generar sus propias variables Sass a partir de una variable o mapa existente. En futuras versiones de Bootstrap, revisaremos esta configuración para reducir la duplicación.

```javascript {filename="JavaScript"}
// Required
@import "functions";
@import "variables";
@import "variables-dark";

// Add a custom color to $theme-colors
$custom-colors: (
  "custom-color": #712cf9
);
$theme-colors: map-merge($theme-colors, $custom-colors);

@import "maps";
@import "mixins";
@import "utilities";

// Add a custom color to new theme maps

// Light mode
$custom-colors-text: ("custom-color": #712cf9);
$custom-colors-bg-subtle: ("custom-color": #e1d2fe);
$custom-colors-border-subtle: ("custom-color": #bfa1fc);

$theme-colors-text: map-merge($theme-colors-text, $custom-colors-text);
$theme-colors-bg-subtle: map-merge($theme-colors-bg-subtle, $custom-colors-bg-subtle);
$theme-colors-border-subtle: map-merge($theme-colors-border-subtle, $custom-colors-border-subtle);

// Dark mode
$custom-colors-text-dark: ("custom-color": #e1d2f2);
$custom-colors-bg-subtle-dark: ("custom-color": #8951fa);
$custom-colors-border-subtle-dark: ("custom-color": #e1d2f2);

$theme-colors-text-dark: map-merge($theme-colors-text-dark, $custom-colors-text-dark);
$theme-colors-bg-subtle-dark: map-merge($theme-colors-bg-subtle-dark, $custom-colors-bg-subtle-dark);
$theme-colors-border-subtle-dark: map-merge($theme-colors-border-subtle-dark, $custom-colors-border-subtle-dark);

// Remainder of Bootstrap imports
@import "root";
@import "reboot";
// etc
```

Personalización del CSS {#css}
-----------

### Variables Sass del componente {#variables}

{{< content-ads/middle-banner-4 >}}

Docenas de variables CSS de nivel raíz se repiten como sobrescrituras para el modo oscuro. Estos tienen como ámbito el selector de modo de color, que por defecto es `data-bs-theme` pero [se puede configurar](#building-with-sass) para usar un `prefers-color-scheme` media query. Utiliza estas variables como guía para generar tus propios modos de color nuevos.

[scss/_root.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_root.scss)

```scss {filename="scss/_root.scss"}
--#{$prefix}body-color: #{$body-color-dark};
--#{$prefix}body-color-rgb: #{to-rgb($body-color-dark)};
--#{$prefix}body-bg: #{$body-bg-dark};
--#{$prefix}body-bg-rgb: #{to-rgb($body-bg-dark)};

--#{$prefix}emphasis-color: #{$body-emphasis-color-dark};
--#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color-dark)};

--#{$prefix}secondary-color: #{$body-secondary-color-dark};
--#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color-dark)};
--#{$prefix}secondary-bg: #{$body-secondary-bg-dark};
--#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg-dark)};

--#{$prefix}tertiary-color: #{$body-tertiary-color-dark};
--#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color-dark)};
--#{$prefix}tertiary-bg: #{$body-tertiary-bg-dark};
--#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg-dark)};

@each $color, $value in $theme-colors-text-dark {
  --#{$prefix}#{$color}-text-emphasis: #{$value};
}

@each $color, $value in $theme-colors-bg-subtle-dark {
  --#{$prefix}#{$color}-bg-subtle: #{$value};
}

@each $color, $value in $theme-colors-border-subtle-dark {
  --#{$prefix}#{$color}-border-subtle: #{$value};
}

--#{$prefix}heading-color: #{$headings-color-dark};

--#{$prefix}link-color: #{$link-color-dark};
--#{$prefix}link-hover-color: #{$link-hover-color-dark};
--#{$prefix}link-color-rgb: #{to-rgb($link-color-dark)};
--#{$prefix}link-hover-color-rgb: #{to-rgb($link-hover-color-dark)};

--#{$prefix}code-color: #{$code-color-dark};
--#{$prefix}highlight-color: #{$mark-color-dark};
--#{$prefix}highlight-bg: #{$mark-bg-dark};

--#{$prefix}border-color: #{$border-color-dark};
--#{$prefix}border-color-translucent: #{$border-color-translucent-dark};

--#{$prefix}form-valid-color: #{$form-valid-color-dark};
--#{$prefix}form-valid-border-color: #{$form-valid-border-color-dark};
--#{$prefix}form-invalid-color: #{$form-invalid-color-dark};
--#{$prefix}form-invalid-border-color: #{$form-invalid-border-color-dark};
```

### Variables Sass generales relacionadas {#sass-variables}

Las variables CSS para nuestro modo de color oscuro se generan parcialmente a partir de variables Sass específicas del modo oscuro en `_variables-dark.scss`. Esto también incluye algunas sobrescrituras personalizadas para cambiar los colores de los SVG incrustados utilizados en todos nuestros componentes.

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

$primary-bg-subtle-dark:            shade-color($primary, 80%);
$secondary-bg-subtle-dark:          shade-color($secondary, 80%);
$success-bg-subtle-dark:            shade-color($success, 80%);
$info-bg-subtle-dark:               shade-color($info, 80%);
$warning-bg-subtle-dark:            shade-color($warning, 80%);
$danger-bg-subtle-dark:             shade-color($danger, 80%);
$light-bg-subtle-dark:              $gray-800;
$dark-bg-subtle-dark:               mix($gray-800, $black);

$primary-border-subtle-dark:        shade-color($primary, 40%);
$secondary-border-subtle-dark:      shade-color($secondary, 40%);
$success-border-subtle-dark:        shade-color($success, 40%);
$info-border-subtle-dark:           shade-color($info, 40%);
$warning-border-subtle-dark:        shade-color($warning, 40%);
$danger-border-subtle-dark:         shade-color($danger, 40%);
$light-border-subtle-dark:          $gray-700;
$dark-border-subtle-dark:           $gray-800;

$body-color-dark:                   $gray-300;
$body-bg-dark:                      $gray-900;
$body-secondary-color-dark:         rgba($body-color-dark, .75);
$body-secondary-bg-dark:            $gray-800;
$body-tertiary-color-dark:          rgba($body-color-dark, .5);
$body-tertiary-bg-dark:             mix($gray-800, $gray-900, 50%);
$body-emphasis-color-dark:          $white;
$border-color-dark:                 $gray-700;
$border-color-translucent-dark:     rgba($white, .15);
$headings-color-dark:               inherit;
$link-color-dark:                   tint-color($primary, 40%);
$link-hover-color-dark:             shift-color($link-color-dark, -$link-shade-percentage);
$code-color-dark:                   tint-color($code-color, 40%);
$mark-color-dark:                   $body-color-dark;
$mark-bg-dark:                      $yellow-800;

//
// Forms
//

$form-select-indicator-color-dark:  $body-color-dark;
$form-select-indicator-dark:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color-dark}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>");

$form-switch-color-dark:            rgba($white, .25);
$form-switch-bg-image-dark:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color-dark}'/></svg>");

$form-valid-color-dark:             $green-300;
$form-valid-border-color-dark:      $green-300;
$form-invalid-color-dark:           $red-300;
$form-invalid-border-color-dark:    $red-300;

//
// Accordion
//

$accordion-icon-color-dark:         $primary-text-emphasis-dark;
$accordion-icon-active-color-dark:  $primary-text-emphasis-dark;

$accordion-button-icon-dark:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color-dark}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
$accordion-button-active-icon-dark:  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-active-color-dark}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
```

{{< bootstrap/content-suggestion >}}    

### Sass mixins {#sass-mixins}

Los estilos para el modo oscuro y cualquier modo de color personalizado que crees pueden tener un alcance apropiado para el selector de atributos `data-bs-theme` o la media query con el mixin personalizable `color-mode()`. Consulta la [sección de uso de Sass](#building-with-sass) para obtener más detalles.

[scss/mixins/_color-mode.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/mixins/_color-mode.scss)

```scss {filename="scss/mixins/_color-mode.scss"}
@mixin color-mode($mode: light, $root: false) {
  @if $color-mode-type == "media-query" {
    @if $root == true {
      @media (prefers-color-scheme: $mode) {
        :root {
          @content;
        }
      }
    } @else {
      @media (prefers-color-scheme: $mode) {
        @content;
      }
    }
  } @else {
    [data-bs-theme="#{$mode}"] {
      @content;
    }
  }
}
```

{{< content-ads/bottom-banner >}}
