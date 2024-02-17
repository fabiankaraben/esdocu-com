---
weight: 7
linkTitle: Variables CSS
title: Las Variables CSS de Bootstrap · Bootstrap en Español v5.3
description: Usa las propiedades personalizadas de CSS de Bootstrap para un diseño y desarrollo rápidos y con visión de futuro.
---

# Las Variables CSS de Bootstrap

Usa las propiedades personalizadas de CSS de Bootstrap para un diseño y desarrollo rápidos y con visión de futuro.

{{< content-ads/top-banner >}}

Bootstrap incluye muchas [propiedades personalizadas de CSS (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) en su CSS compilado para personalización en tiempo real sin necesidad de recompilar Sass. Estos proporcionan un fácil acceso a los valores de uso común, como los colores de nuestro tema, los puntos de interrupción y las pilas de fuentes principales cuando se trabaja en el inspector de tu navegador, una zona de pruebas de código o la creación de prototipos en general.

**Todas nuestras propiedades personalizadas tienen el prefijo `bs-`** para evitar conflictos con CSS de terceros.

Variables root {#root-variables}
---------------------------------

Aquí están las variables que incluimos (ten en cuenta que `:root` es obligatorio) a las que se puede acceder desde cualquier lugar donde esté cargado el CSS de Bootstrap. Están ubicados en nuestro archivo `_root.scss` y se incluyen en nuestros archivos dist compilados.

### Predeterminado {#default}

Estas variables CSS están disponibles en todas partes, independientemente del modo de color.

{{< content-ads/middle-banner-1 >}}

```scss {filename="SCSS"}
:root,
[data-bs-theme=light] {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-primary-rgb: 13, 110, 253;
  --bs-secondary-rgb: 108, 117, 125;
  --bs-success-rgb: 25, 135, 84;
  --bs-info-rgb: 13, 202, 240;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 248, 249, 250;
  --bs-dark-rgb: 33, 37, 41;
  --bs-primary-text-emphasis: #052c65;
  --bs-secondary-text-emphasis: #2b2f32;
  --bs-success-text-emphasis: #0a3622;
  --bs-info-text-emphasis: #055160;
  --bs-warning-text-emphasis: #664d03;
  --bs-danger-text-emphasis: #58151c;
  --bs-light-text-emphasis: #495057;
  --bs-dark-text-emphasis: #495057;
  --bs-primary-bg-subtle: #cfe2ff;
  --bs-secondary-bg-subtle: #e2e3e5;
  --bs-success-bg-subtle: #d1e7dd;
  --bs-info-bg-subtle: #cff4fc;
  --bs-warning-bg-subtle: #fff3cd;
  --bs-danger-bg-subtle: #f8d7da;
  --bs-light-bg-subtle: #fcfcfd;
  --bs-dark-bg-subtle: #ced4da;
  --bs-primary-border-subtle: #9ec5fe;
  --bs-secondary-border-subtle: #c4c8cb;
  --bs-success-border-subtle: #a3cfbb;
  --bs-info-border-subtle: #9eeaf9;
  --bs-warning-border-subtle: #ffe69c;
  --bs-danger-border-subtle: #f1aeb5;
  --bs-light-border-subtle: #e9ecef;
  --bs-dark-border-subtle: #adb5bd;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-color-rgb: 33, 37, 41;
  --bs-body-bg: #fff;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-emphasis-color: #000;
  --bs-emphasis-color-rgb: 0, 0, 0;
  --bs-secondary-color: rgba(33, 37, 41, 0.75);
  --bs-secondary-color-rgb: 33, 37, 41;
  --bs-secondary-bg: #e9ecef;
  --bs-secondary-bg-rgb: 233, 236, 239;
  --bs-tertiary-color: rgba(33, 37, 41, 0.5);
  --bs-tertiary-color-rgb: 33, 37, 41;
  --bs-tertiary-bg: #f8f9fa;
  --bs-tertiary-bg-rgb: 248, 249, 250;
  --bs-heading-color: inherit;
  --bs-link-color: #0d6efd;
  --bs-link-color-rgb: 13, 110, 253;
  --bs-link-decoration: underline;
  --bs-link-hover-color: #0a58ca;
  --bs-link-hover-color-rgb: 10, 88, 202;
  --bs-code-color: #d63384;
  --bs-highlight-color: #212529;
  --bs-highlight-bg: #fff3cd;
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-xxl: 2rem;
  --bs-border-radius-2xl: var(--bs-border-radius-xxl);
  --bs-border-radius-pill: 50rem;
  --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  --bs-focus-ring-width: 0.25rem;
  --bs-focus-ring-opacity: 0.25;
  --bs-focus-ring-color: rgba(13, 110, 253, 0.25);
  --bs-form-valid-color: #198754;
  --bs-form-valid-border-color: #198754;
  --bs-form-invalid-color: #dc3545;
  --bs-form-invalid-border-color: #dc3545;
}
```

### Modo oscuro {#dark-mode}

Estas variables tienen como alcance nuestro modo oscuro incorporado.

```scss {filename="SCSS"}
[data-bs-theme=dark] {
  color-scheme: dark;
  --bs-body-color: #dee2e6;
  --bs-body-color-rgb: 222, 226, 230;
  --bs-body-bg: #212529;
  --bs-body-bg-rgb: 33, 37, 41;
  --bs-emphasis-color: #fff;
  --bs-emphasis-color-rgb: 255, 255, 255;
  --bs-secondary-color: rgba(222, 226, 230, 0.75);
  --bs-secondary-color-rgb: 222, 226, 230;
  --bs-secondary-bg: #343a40;
  --bs-secondary-bg-rgb: 52, 58, 64;
  --bs-tertiary-color: rgba(222, 226, 230, 0.5);
  --bs-tertiary-color-rgb: 222, 226, 230;
  --bs-tertiary-bg: #2b3035;
  --bs-tertiary-bg-rgb: 43, 48, 53;
  --bs-primary-text-emphasis: #6ea8fe;
  --bs-secondary-text-emphasis: #a7acb1;
  --bs-success-text-emphasis: #75b798;
  --bs-info-text-emphasis: #6edff6;
  --bs-warning-text-emphasis: #ffda6a;
  --bs-danger-text-emphasis: #ea868f;
  --bs-light-text-emphasis: #f8f9fa;
  --bs-dark-text-emphasis: #dee2e6;
  --bs-primary-bg-subtle: #031633;
  --bs-secondary-bg-subtle: #161719;
  --bs-success-bg-subtle: #051b11;
  --bs-info-bg-subtle: #032830;
  --bs-warning-bg-subtle: #332701;
  --bs-danger-bg-subtle: #2c0b0e;
  --bs-light-bg-subtle: #343a40;
  --bs-dark-bg-subtle: #1a1d20;
  --bs-primary-border-subtle: #084298;
  --bs-secondary-border-subtle: #41464b;
  --bs-success-border-subtle: #0f5132;
  --bs-info-border-subtle: #087990;
  --bs-warning-border-subtle: #997404;
  --bs-danger-border-subtle: #842029;
  --bs-light-border-subtle: #495057;
  --bs-dark-border-subtle: #343a40;
  --bs-heading-color: inherit;
  --bs-link-color: #6ea8fe;
  --bs-link-hover-color: #8bb9fe;
  --bs-link-color-rgb: 110, 168, 254;
  --bs-link-hover-color-rgb: 139, 185, 254;
  --bs-code-color: #e685b5;
  --bs-highlight-color: #dee2e6;
  --bs-highlight-bg: #664d03;
  --bs-border-color: #495057;
  --bs-border-color-translucent: rgba(255, 255, 255, 0.15);
  --bs-form-valid-color: #75b798;
  --bs-form-valid-border-color: #75b798;
  --bs-form-invalid-color: #ea868f;
  --bs-form-invalid-border-color: #ea868f;
}
```

Variables de componentes {#component-variables}
------------------------------------------------

Bootstrap 5 utiliza cada vez más propiedades personalizadas como variables locales para varios componentes. De esta manera reducimos nuestro CSS compilado, garantizamos que los estilos no se hereden en lugares como tablas anidadas y permitimos algunos cambios básicos de estilo y extensión de los componentes Bootstrap después de la compilación de Sass.

{{< content-ads/middle-banner-2 >}}

Echa un vistazo a nuestra documentación de tablas para ver la [visión de cómo utilizamos las variables CSS](/bootstrap/5.3/content/tables/#how-do-the-variants-and-accented-tables-work). Nuestras [barras de navegación también utilizan variables CSS](/bootstrap/5.3/components/navbar/#css) a partir de v5.2.0. También estamos usando variables CSS en nuestras cuadrículas, principalmente para los gutters, la [nueva cuadrícula CSS opcional](/bootstrap/5.3/layout/css-grid), con un mayor uso de componentes en camino.

{{< bootstrap/content-suggestion >}}

Siempre que sea posible, asignaremos variables CSS en el nivel del componente base (por ejemplo, `.navbar` para la barra de navegación y sus subcomponentes). Esto reduce las conjeturas sobre dónde y cómo personalizar, y permite que nuestro equipo realice modificaciones sencillas en futuras actualizaciones.

Prefijo {#prefix}
------------------

La mayoría de las variables CSS usan un prefijo para evitar colisiones con tu propio código base. Este prefijo se suma al `--` que se requiere en cada variable CSS.

Personaliza el prefijo mediante la variable Sass `$prefix`. De forma predeterminada, está configurado en `bs-` (ten en cuenta el guión final).

{{< content-ads/middle-banner-3 >}}

Ejemplos {#examples}
---------------------

Las variables CSS ofrecen una flexibilidad similar a las variables de Sass, pero sin la necesidad de compilarlas antes de enviarlas al navegador. Por ejemplo, aquí estamos restableciendo la fuente de nuestra página y los estilos de enlace con variables CSS.

```css {filename="CSS"}
body {
  font: 1rem/1.5 var(--bs-font-sans-serif);
}
a {
  color: var(--bs-blue);
}
```

Variables de enfoque {#focus-variables}
----------------------------------------
<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.3.0</span>

Bootstrap proporciona estilos `:focus` personalizados usando una combinación de variables Sass y CSS que se pueden agregar opcionalmente a componentes y elementos específicos. Todavía no sobrescribimos globalmente todos los estilos `:focus`.

En nuestro Sass, configuramos valores predeterminados que se pueden personalizar antes de compilar.

{{< content-ads/middle-banner-4 >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$focus-ring-width:      .25rem;
$focus-ring-opacity:    .25;
$focus-ring-color:      rgba($primary, $focus-ring-opacity);
$focus-ring-blur:       0;
$focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color;
```

Esas variables luego se reasignan a variables CSS de nivel `:root` que se pueden personalizar en tiempo real, incluidas opciones para `x` e `y` offsets (que por defecto tienen su valor alternativo de `0`).

[scss/_root.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_root.scss)

```scss {filename="scss/_root.scss"}
--#{$prefix}focus-ring-width: #{$focus-ring-width};
--#{$prefix}focus-ring-opacity: #{$focus-ring-opacity};
--#{$prefix}focus-ring-color: #{$focus-ring-color};
```

Puntos de interrupción de la cuadrícula {#grid-breakpoints}
------------------------------------------------------------

Aunque incluimos nuestros puntos de interrupción de cuadrícula como variables CSS (excepto `xs`), ten en cuenta que las **variables CSS no funcionan en media queries**. Esto está diseñado en la especificación CSS para variables, pero puede cambiar en los próximos años con soporte para variables `env()`. Consulta [esta respuesta de Stack Overflow](https://stackoverflow.com/a/47212942) para obtener algunos enlaces útiles. Mientras tanto, puedes utilizar estas variables en otras situaciones de CSS, así como en tu JavaScript.

{{< content-ads/bottom-banner >}}
