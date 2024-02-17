---
weight: 5
linkTitle: Enlace de ícono
title: Uso del ayudante para Enlaces de ícono en Bootstrap · Bootstrap en Español v5.3
description: Crea rápidamente hipervínculos estilizados con íconos Bootstrap u otros íconos.
noindex: true
---

# Uso del ayudante para Enlaces de ícono en Bootstrap

Crea rápidamente hipervínculos estilizados con íconos Bootstrap u otros íconos.

{{< content-ads/top-banner >}}

El componente auxiliar de vínculo de ícono modifica nuestros estilos de vínculo predeterminados para mejorar su apariencia y alinear rápidamente cualquier combinación de ícono y texto. La alineación se establece mediante el estilo Flexbox en línea y un valor de `gap` predeterminado. Estilizamos el subrayado con un desplazamiento y color personalizados. Los iconos se ajustan automáticamente a `1em` para que coincidan mejor con el `font-size` del texto asociado.

Los enlaces de iconos suponen que se están utilizando [iconos de Bootstrap](https://icons.getbootstrap.com) , pero puedes usar cualquier icono o imagen que desees.

{{< callout type="info" emoji="" >}}
Cuando los íconos son puramente decorativos, deben ocultarse de las tecnologías de asistencia usando `aria-hidden="true"`, como lo hemos hecho en nuestros ejemplos. Para íconos que transmiten significado, proporciona una alternativa de texto apropiada agregando `role="img"` y un `aria-label="..."` apropiado a los SVG.
{{< /callout >}}

Ejemplo {#example}
-------------------

Toma un elemento `<a>` normal, agrega `.icon-link` e inserta un ícono a la izquierda o a la derecha del texto del enlace. El icono cambia de tamaño, ubicación y color automáticamente.

{{< content-ads/middle-banner-1 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/icon-link/example-1.html" >}}
```html {filename="HTML"}
    <a class="icon-link" href="#">
        <svg class="bi" aria-hidden="true">
            <use xlink:href="#box-seam"></use>
        </svg>
        Enlace de ícono
    </a>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/icon-link/example-2.html" >}}
```html {filename="HTML"}
    <a class="icon-link" href="#">
        Enlace de ícono
        <svg class="bi" aria-hidden="true">
            <use xlink:href="#arrow-right"></use>
        </svg>
    </a>
```
{{< /demo-iframe >}}

Estilo al pasar el mouse {#style-on-hover}
-------------------------------------------

Agrega `.icon-link-hover` para mover el ícono hacia la derecha al pasar el mouse.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/icon-link/style-on-hover.html" >}}
```html {filename="HTML"}
    <a class="icon-link icon-link-hover" href="#">
        Enlace de ícono
        <svg class="bi" aria-hidden="true">
            <use xlink:href="#arrow-right"></use>
        </svg>
    </a>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-2 >}}

Personalizar {#customize}
--------------------------

Modifica el estilo de un enlace de icono con nuestras variables CSS de enlace, variables Sass, utilidades o estilos personalizados.

### Variables CSS {#css-variables}

Modifica las variables CSS `--bs-link-*` y `--bs-icon-link-*` según sea necesario para cambiar la apariencia predeterminada.

Personaliza la `transform` al pasar el mouse sobrescribendo la variable CSS `--bs-icon-link-transform`:

{{< content-ads/middle-banner-3 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/icon-link/css-variables-1.html" >}}
```html {filename="HTML"}
    <a class="icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
        <svg class="bi" aria-hidden="true">
            <use xlink:href="#clipboard"></use>
        </svg>
        Enlace de ícono
    </a>
```
{{< /demo-iframe >}}

Personaliza el color sobrescribendo la variable CSS `--bs-link-*`:

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/icon-link/css-variables-2.html" >}}
```html {filename="HTML"}
    <a class="icon-link icon-link-hover" style="--bs-link-hover-color-rgb: 25, 135, 84;" href="#">
        Enlace de ícono
        <svg class="bi" aria-hidden="true">
            <use xlink:href="#arrow-right"></use>
        </svg>
    </a>
```
{{< /demo-iframe >}}

### Variables Sass generales relacionadas {#sass-variables}

{{< content-ads/middle-banner-4 >}}

Personaliza las variables Sass del enlace de íconos para modificar todos los estilos de enlaces de íconos en tu proyecto impulsado por Bootstrap.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$icon-link-gap:               .375rem;
$icon-link-underline-offset:  .25em;
$icon-link-icon-size:         1em;
$icon-link-icon-transition:   .2s ease-in-out transform;
$icon-link-icon-transform:    translate3d(.25em, 0, 0);
```

### API de utilidades de Sass {#sass-utilities-api}

Modifica los enlaces de los íconos con cualquiera de [nuestras utilidades de enlaces](/bootstrap/5.3/utilities/link) para modificar el color del subrayado y el desplazamiento.

{{< content-ads/middle-banner-5 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/icon-link/sass-utilities-api.html" >}}
```html {filename="HTML"}
    <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="#">
        Enlace de ícono
        <svg class="bi" aria-hidden="true">
            <use xlink:href="#arrow-right"></use>
        </svg>
    </a>
```
{{< /demo-iframe >}}
    

{{< content-ads/bottom-banner >}}
