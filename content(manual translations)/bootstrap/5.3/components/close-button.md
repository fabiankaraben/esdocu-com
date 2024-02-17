---
weight: 9
linkTitle: Botón cerrar
title: El componente Botón cerrar de Bootstrap · Bootstrap en Español v5.3
description: Un botón de cierre genérico para descartar contenido como modales y alertas.
noindex: true
---

# El componente Botón cerrar de Bootstrap

Un botón de cierre genérico para descartar contenido como modales y alertas.

{{< content-ads/top-banner >}}

Ejemplo del componente Botón cerrar {#example}
-------------------

Proporciona una opción para descartar o cerrar un componente con `.btn-close`. El estilo predeterminado es limitado, pero altamente personalizable. Modifica las variables de Sass para reemplazar la `background-image` predeterminada. **Asegúrate de incluir texto para lectores de pantalla**, como hemos hecho con `aria-label`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/close-button/example.html" >}}
```html {filename="HTML"}
<button type="button" class="btn-close" aria-label="Cerrar"></button>
```
{{< /demo-iframe >}}

Estado deshabilitado del componente Botón cerrar {#disabled-state}
---------------------------------------

{{< content-ads/middle-banner-1 >}}

Los botones de cierre deshabilitados cambian su `opacity`. También hemos aplicado `pointer-events: none` y `user-select: none` para evitar que se activen los estados assets y de desplazamiento.

{{< demo-iframe path="/demos/bootstrap/5.3/components/close-button/disabled-state.html" >}}
```html {filename="HTML"}
<button type="button" class="btn-close" disabled="" aria-label="Cerrar"></button>
```
{{< /demo-iframe >}}

Variante oscura del componente Botón cerrar {#dark-variant}
--------------------------------

<br/>
<span class="py-1 px-3 text-yellow-600 border border-yellow-600 rounded-md">Obsoleto en v5.3.0</span>

{{< content-ads/middle-banner-2 >}}

{{< callout type="warning" emoji="" >}}
**¡Atención!** A partir de la versión 5.3.0, la clase `.btn-close-white` está obsoleta. En su lugar, utiliza `data-bs-theme="dark"` para cambiar el modo de color del botón de cerrar.
{{< /callout >}}

Agrega `data-bs-theme="dark"` al `.btn-close`, o a su elemento padre, para invertir el botón de cerrar. Esto utiliza la propiedad `filter` para invertir la `background-image` sin sobrescribir su valor.

{{< demo-iframe path="/demos/bootstrap/5.3/components/close-button/dark-variant.html" >}}
```html {filename="HTML"}
<div data-bs-theme="dark">
    <button type="button" class="btn-close" aria-label="Cerrar"></button>
    <button type="button" class="btn-close" disabled="" aria-label="Cerrar"></button>
</div>
```
{{< /demo-iframe >}}

Personalización del CSS del componente {#css}
-----------

{{< content-ads/middle-banner-3 >}}

### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.3.0</span>

Como parte del enfoque de variables CSS en evolución de Bootstrap, el botón de cierre ahora usa variables CSS locales en `.btn-close` para una personalización mejorada en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_close.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_close.scss)

{{< content-ads/middle-banner-4 >}}

```scss {filename="scss/_close.scss"}
--#{$prefix}btn-close-color: #{$btn-close-color};
--#{$prefix}btn-close-bg: #{ escape-svg($btn-close-bg) };
--#{$prefix}btn-close-opacity: #{$btn-close-opacity};
--#{$prefix}btn-close-hover-opacity: #{$btn-close-hover-opacity};
--#{$prefix}btn-close-focus-shadow: #{$btn-close-focus-shadow};
--#{$prefix}btn-close-focus-opacity: #{$btn-close-focus-opacity};
--#{$prefix}btn-close-disabled-opacity: #{$btn-close-disabled-opacity};
--#{$prefix}btn-close-white-filter: #{$btn-close-white-filter};
```

{{< bootstrap/content-suggestion >}}

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

{{< content-ads/middle-banner-5 >}}

```scss {filename="scss/_variables.scss"}
$btn-close-width:            1em;
$btn-close-height:           $btn-close-width;
$btn-close-padding-x:        .25em;
$btn-close-padding-y:        $btn-close-padding-x;
$btn-close-color:            $black;
$btn-close-bg:               url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>");
$btn-close-focus-shadow:     $focus-ring-box-shadow;
$btn-close-opacity:          .5;
$btn-close-hover-opacity:    .75;
$btn-close-focus-opacity:    1;
$btn-close-disabled-opacity: .25;
$btn-close-white-filter:     invert(1) grayscale(100%) brightness(200%);
``` 

{{< content-ads/bottom-banner >}}
