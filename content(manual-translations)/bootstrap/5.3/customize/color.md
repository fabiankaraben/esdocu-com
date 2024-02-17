---
weight: 4
linkTitle: Color
title: Todos los colores de Bootstrap · Bootstrap en Español v5.3
description: Bootstrap está respaldado por un extenso sistema de colores que tematiza nuestros estilos y componentes. Esto permite una personalización y extensión más completas para cualquier proyecto.
---

# Todos los colores de Bootstrap

Bootstrap está respaldado por un extenso sistema de colores que tematiza nuestros estilos y componentes. Esto permite una personalización y extensión más completas para cualquier proyecto.

{{< content-ads/top-banner >}}

Colores {#colors}
------------------
<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.3.0</span>

La paleta de colores de Bootstrap ha seguido expandiéndose y volviéndose más matizada en la versión 5.3.0. Hemos agregado nuevas variables para texto y colores de fondo `secondary` y `tertiary`, además de `{color}-bg-subtle`, `{color}-border-subtle` y `{color}-text-emphasis` para los colores de nuestro tema. Estos nuevos colores están disponibles a través de variables Sass y CSS (pero no nuestros mapas de colores o clases de utilidad) con el objetivo expreso de facilitar la personalización en múltiples modos de colores, como claro y oscuro. Estas nuevas variables se configuran globalmente en `:root` y se adaptan a nuestro nuevo modo de color oscuro, mientras que los colores de nuestro tema original permanecen sin cambios.

Los colores que terminan en `-rgb` proporcionan los valores `red, green, blue` para ser usados en los modos de color `rgb()` y `rgba()`. Por ejemplo, `rgba(var(--bs-secondary-bg-rgb), .5)`.

{{< callout type="warning" emoji="" >}}
**¡Atención!** Existe cierta confusión potencial con nuestros nuevos colores secundarios y terciarios, y nuestro color de tema secundario existente, así como nuestros colores de tema claro y oscuro. Esperamos que esto se solucione en v6.
{{< /callout >}}

| Descripción                                                                                                                                                               | Swatch                                                                                                                  | <span class="mx-12 px-12">Variables</span>            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **Body —** primer plano (color) y fondo predeterminados, incluidos los componentes.                                                                                       | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#dee2e6] dark:bg-[#dee2e6]">&nbsp;</div>     | `--bs-body-color`<br/>`--bs-body-color-rgb`           |
|                                                                                                                                                                           | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#212529] dark:bg-[#212529]">&nbsp;</div>     | `--bs-body-bg`<br/>`--bs-body-bg-rgb`                 |
| **Secondary —** utiliza la opción `color` para texto más claro. Utiliza la opción `bg` para divisores y para indicar estados de componentes deshabilitados.               | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#212529bf] dark:bg-[#dee2e6bf]">&nbsp;</div> | `--bs-secondary-color`<br/>`--bs-secondary-color-rgb` |
|                                                                                                                                                                           | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#e9ecef] dark:bg-[#343a40]">&nbsp;</div>     | `--bs-secondary-bg`<br/>`--bs-secondary-bg-rgb`       |
| **Tertiary —** utiliza la opción `color` para obtener un texto aún más claro. Utiliza la opción `bg` para dar estilos a fondos para estados hover, acentuados y hundidos. | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#21252980] dark:bg-[#dee2e680]">&nbsp;</div> | `--bs-tertiary-color`<br/>`--bs-tertiary-color-rgb`   |
|                                                                                                                                                                           | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#f8f9fa] dark:bg-[#2b3035]">&nbsp;</div>     | `--bs-tertiary-bg`<br/>`--bs-tertiary-bg-rgb`         |
| **Emphasis —** para texto con mayor contraste. No aplicable para fondos.                                                                                                  | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#000] dark:bg-[#fff]">&nbsp;</div>           | `--bs-emphasis-color`<br/>`--bs-emphasis-color-rgb`   |
| **Border —** para bordes, divisores y reglas de componentes. Utiliza `--bs-border-color-translucent` para mezclar con fondos con un valor `rgba()` .                      | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#dee2e6] dark:bg-[#495057]">&nbsp;</div>     | `--bs-border-color`<br/>`--bs-border-color-rgb`       |
| **Primary —** color del tema principal, utilizado para hipervínculos, estilos de enfoque y estados activos de componentes y formularios.                                  | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#0d6efd] dark:bg-[#0d6efd]">&nbsp;</div>     | `--bs-primary`<br/>`--bs-primary-rgb`                 |
|                                                                                                                                                                           | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#cfe2ff] dark:bg-[#031633]">&nbsp;</div>     | `--bs-primary-bg-subtle`                              |
|                                                                                                                                                                           | <div class="p-3 rounded-md border-4 border-[#9ec5fe] dark:border-[#084298]">&nbsp;</div>                                | `--bs-primary-border-subtle`                          |
|                                                                                                                                                                           | <div class="p-3 font-extrabold color-[#052c65] dark:color-[#6ea8fe]">Texto</div>                                        | `--bs-primary-text-emphasis`                          |
| **Success —** color del tema utilizado para información y acciones positivas o exitosas.                                                                                  | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#198754] dark:bg-[#198754]">&nbsp;</div>     | `--bs-success`<br/>`--bs-success-rgb`                 |
|                                                                                                                                                                           | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#d1e7dd] dark:bg-[#051b11]">&nbsp;</div>     | `--bs-success-bg-subtle`                              |
|                                                                                                                                                                           | <div class="p-3 rounded-md border-4 border-[#a3cfbb] dark:border-[#0f5132]">&nbsp;</div>                                | `--bs-success-border-subtle`                          |
|                                                                                                                                                                           | <div class="p-3 font-extrabold color-[#0a3622] dark:color-[#75b798]">Texto</div>                                        | `--bs-success-text-emphasis`                          |
| **Danger —** color del tema utilizado para errores y acciones peligrosas.                                                                                                 | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#dc3545] dark:bg-[#dc3545]">&nbsp;</div>     | `--bs-danger`<br/>`--bs-danger-rgb`                   |
|                                                                                                                                                                           | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#f8d7da] dark:bg-[#2c0b0e]">&nbsp;</div>     | `--bs-danger-bg-subtle`                               |
|                                                                                                                                                                           | <div class="p-3 rounded-md border-4 border-[#f1aeb5] dark:border-[#842029]">&nbsp;</div>                                | `--bs-danger-border-subtle`                           |
|                                                                                                                                                                           | <div class="p-3 font-extrabold color-[#58151c] dark:color-[#ea868f]">Texto</div>                                        | `--bs-danger-text-emphasis`                           |
| **Warning —** color del tema utilizado para mensajes de advertencia no destructivos.                                                                                      | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#ffc107] dark:bg-[#ffc107]">&nbsp;</div>     | `--bs-warning`<br/>`--bs-warning-rgb`                 |
|                                                                                                                                                                           | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#fff3cd] dark:bg-[#332701]">&nbsp;</div>     | `--bs-warning-bg-subtle`                              |
|                                                                                                                                                                           | <div class="p-3 rounded-md border-4 border-[#ffe69c] dark:border-[#997404]">&nbsp;</div>                                | `--bs-warning-border-subtle`                          |
|                                                                                                                                                                           | <div class="p-3 font-extrabold color-[#664d03] dark:color-[#ffda6a]">Texto</div>                                        | `--bs-warning-text-emphasis`                          |
| **Info —** color del tema utilizado para contenido neutral e informativo.                                                                                                 | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#0dcaf0] dark:bg-[#0dcaf0]">&nbsp;</div>     | `--bs-info`<br/>`--bs-info-rgb`                       |
|                                                                                                                                                                           | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#cff4fc] dark:bg-[#032830]">&nbsp;</div>     | `--bs-info-bg-subtle`                                 |
|                                                                                                                                                                           | <div class="p-3 rounded-md border-4 border-[#9eeaf9] dark:border-[#087990]">&nbsp;</div>                                | `--bs-info-border-subtle`                             |
|                                                                                                                                                                           | <div class="p-3 font-extrabold color-[#055160] dark:color-[#6edff6]">Texto</div>                                        | `--bs-info-text-emphasis`                             |
| **Light —** Opción de tema adicional para colores menos contrastantes.                                                                                                    | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#f8f9fa] dark:bg-[#f8f9fa]">&nbsp;</div>     | `--bs-light`<br/>`--bs-light-rgb`                     |
|                                                                                                                                                                           | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#fcfcfd] dark:bg-[#343a40]">&nbsp;</div>     | `--bs-light-bg-subtle`                                |
|                                                                                                                                                                           | <div class="p-3 rounded-md border-4 border-[#e9ecef] dark:border-[#495057]">&nbsp;</div>                                | `--bs-light-border-subtle`                            |
|                                                                                                                                                                           | <div class="p-3 font-extrabold color-[#495057] dark:color-[#f8f9fa]">Texto</div>                                        | `--bs-light-text-emphasis`                            |
| **Dark —** opción de tema adicional para colores de mayor contraste.                                                                                                      | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#212529] dark:bg-[#212529]">&nbsp;</div>     | `--bs-dark`<br/>`--bs-dark-rgb`                       |
|                                                                                                                                                                           | <div class="p-3 rounded-md border border-gray-400 dark:border-gray-600 bg-[#ced4da] dark:bg-[#1a1d20]">&nbsp;</div>     | `--bs-dark-bg-subtle`                                 |
|                                                                                                                                                                           | <div class="p-3 rounded-md border-4 border-[#adb5bd] dark:border-[#343a40]">&nbsp;</div>                                | `--bs-dark-border-subtle`                             |
|                                                                                                                                                                           | <div class="p-3 font-extrabold color-[#495057] dark:color-[#dee2e6]">Texto</div>                                        | `--bs-dark-text-emphasis`                             |

### Usando los nuevos colores {#using-the-new-colors}

Se puede acceder a estos nuevos colores a través de variables CSS y clases de utilidad, como `--bs-primary-bg-subtle` y `.bg-primary-subtle`: te permite componer tus propias reglas CSS con las variables o aplicar estilos rápidamente a través de clases. Las utilidades se crean con las variables CSS asociadas al color y, dado que personalizamos esas variables CSS para el modo oscuro, también se adaptan al modo de color de forma predeterminada.

{{< demo-iframe path="/demos/bootstrap/5.3/customize/color/using-the-new-colors.html" >}}
```html {filename="HTML"}
<div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
    Ejemplo de elemento con utilidades
</div>
```
{{< /demo-iframe >}}

### Colores del tema {#theme-colors}

Usamos un subconjunto de todos los colores para crear una paleta de colores más pequeña para generar esquemas de color, también disponible como variables Sass y un mapa Sass en el archivo `scss/_variables.scss`.

<div class="my-5 p-3 rounded-md font-bold bg-[#0d6efd] text-white">
Primary
</div>

<div class="my-5 p-3 rounded-md font-bold bg-[#6c757d] text-white">
Secondary
</div>

{{< content-ads/middle-banner-1 >}}

<div class="my-5 p-3 rounded-md font-bold bg-[#198754] text-white">
Success
</div>

<div class="my-5 p-3 rounded-md font-bold bg-[#dc3545] text-white">
Danger
</div>

<div class="my-5 p-3 rounded-md font-bold bg-[#ffc107] text-black">
Warning
</div>

<div class="my-5 p-3 rounded-md font-bold bg-[#0dcaf0] text-black">
Info
</div>

<div class="my-5 p-3 rounded-md font-bold bg-[#f8f9fa] text-black">
Light
</div>

<div class="my-5 p-3 rounded-md font-bold bg-[#212529] text-white">
Dark
</div>

Todos estos colores están disponibles como mapa Sass, `$theme-colors`.

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

Consulta [nuestra documentación de mapas y bucles de Sass](/bootstrap/5.3/customize/sass/#maps-and-loops) para saber cómo modificar estos colores.

### Todos los colores {#all-colors}

Todos los colores de Bootstrap están disponibles como variables Sass y un mapa Sass en el archivo `scss/_variables.scss`. Para evitar un aumento en el tamaño de los archivos, no creamos clases de texto o color de fondo para cada una de estas variables. En su lugar, elegimos un subconjunto de estos colores para una [paleta de tema](#theme-colors).

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/content-suggestion >}}

Asegúrate de controlar las relaciones de contraste mientras personalizas los colores. Como se muestra a continuación, hemos agregado tres relaciones de contraste a cada uno de los colores principales: una para los colores actuales de la muestra, otra para el blanco y otra para el negro.

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

{{< content-ads/middle-banner-3 >}}

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

### Notas sobre Sass {#notes-on-sass}

Sass no puede generar variables mediante programación, por lo que nosotros mismos creamos variables manualmente para cada tinte y tono. Especificamos el valor del punto medio (por ejemplo, `$blue-500`) y utilizamos funciones de color personalizadas para teñir (aclarar) o sombrear (oscurecer) nuestros colores a través de la función de color `mix()` de Sass.

Usar `mix()` no es lo mismo que `lighten()` y `darken()`— el primero combina el color especificado con blanco o negro, mientras que el segundo solo ajusta el valor de luminosidad de cada color. El resultado es un conjunto de colores mucho más completo, como [se muestra en esta demostración de CodePen](https://codepen.io/emdeoh/pen/zYOQOPB).

Nuestras funciones `tint-color()` y `shade-color()` usan `mix()` junto con nuestra variable `$theme-color-interval`, que especifica un valor de porcentaje escalonado para cada color mezclado que producimos. Consulta los archivos `scss/_functions.scss` y `scss/_variables.scss` para obtener el código fuente completo.

Mapas de Color Sass {#color-sass-maps}
---------------------------------------

Los archivos fuente Sass de Bootstrap incluyen tres mapas para ayudarte a recorrer rápida y fácilmente una lista de colores y sus valores hexadecimales.

* `$colors` enumera todos nuestros colores base disponibles (`500`)
* `$theme-colors` enumera todos los colores de tema con nombres semánticos (que se muestran a continuación)
* `$grays` enumera todos los tintes y tonos de grises

Dentro de `scss/_variables.scss`, encontrarás las variables de color de Bootstrap y el mapa Sass. Aquí hay un ejemplo del mapa `$colors` de Sass:

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

{{< content-ads/middle-banner-4 >}}

```scss {filename="scss/_variables.scss"}
$colors: (
  "blue":       $blue,
  "indigo":     $indigo,
  "purple":     $purple,
  "pink":       $pink,
  "red":        $red,
  "orange":     $orange,
  "yellow":     $yellow,
  "green":      $green,
  "teal":       $teal,
  "cyan":       $cyan,
  "black":      $black,
  "white":      $white,
  "gray":       $gray-600,
  "gray-dark":  $gray-800
);
```

Agrega, elimina o modifica valores dentro del mapa para actualizar cómo se usan en muchos otros componentes. Desafortunadamente, en este momento, no _todos_ los componentes utilizan este mapa Sass. Las actualizaciones futuras se esforzarán por mejorar esto. Hasta entonces, planea utilizar las variables `${color}` y este mapa de Sass.

### Ejemplo {#example}

Así es como puedes usarlos en tu Sass:

```scss {filename="SCSS"}
.alpha { color: $purple; }
.beta {
  color: $yellow-300;
  background-color: $indigo-900;
}
```

[Color](/bootstrap/5.3/utilities/colors) y [background](/bootstrap/5.3/utilities/background) son clases de utilidad que también están disponibles para configurar `color` y `background-color` usando `500` los valores de color.

Generando utilidades {#generating-utilities}
---------------------------------------------
<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.1.0</span>

Bootstrap no incluye las utilidades `color` y `background-color` para cada variable de color, pero puedes generarlas tú mismo con nuestra [API de utilidad](/bootstrap/5.3/utilities/api) y nuestros mapas Sass extendidos agregados en v5.1.0.

1.  Para comenzar, asegúrate de haber importado nuestras funciones, variables, mixins y utilidades.
2.  Utiliza nuestra función `map-merge-multiple()` para fusionar rápidamente varios mapas de Sass en un nuevo mapa.
3.  Combina este nuevo mapa combinado para ampliar cualquier utilidad con un nombre de clase `{color}-{level}`.

{{< bootstrap/content-suggestion >}}

Aquí tienes un ejemplo que genera utilidades de color de texto (por ejemplo, `.text-purple-500`) siguiendo los pasos anteriores.

```scss {filename="SCSS"}
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
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

Esto generará nuevas utilidades `.text-{color}-{level}` para cada color y nivel. También puedes hacer lo mismo con cualquier otro servicio público y propiedad.

{{< content-ads/bottom-banner >}}
