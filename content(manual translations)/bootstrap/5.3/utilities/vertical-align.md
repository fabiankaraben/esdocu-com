---
weight: 18
linkTitle: Alineación vertical
title: Uso de las utilidades de Alineación vertical en Bootstrap · Bootstrap en Español v5.3
description: Cambia fácilmente la alineación vertical de los elementos en línea, bloque en línea, tabla en línea y celda de tabla.
noindex: true
---

# Uso de las utilidades de Alineación vertical en Bootstrap

Cambia fácilmente la alineación vertical de los elementos en línea, bloque en línea, tabla en línea y celda de tabla.

{{< content-ads/top-banner >}}

Cambiar la alineación de elementos con utilidades de [`vertical-alignment`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align). Ten en cuenta que la alineación vertical solo afecta a los elementos en línea, en bloque en línea, en tabla en línea y en celdas de tabla.

Elige entre `.align-baseline`, `.align-top`, `.align-middle`, `.align-bottom`, `.align-text-bottom` y `.align-text-top` según sea necesario.

Para centrar verticalmente contenido no en línea (como `<div>`s y más), usa nuestras [utilidades de flexbox](/bootstrap/5.3/utilities/flex/#align-items).

Con elementos en línea:

{{< content-ads/middle-banner-1 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/vertical-align/index-1.html" >}}
```html {filename="HTML"}
    <span class="align-baseline">baseline</span>
    <span class="align-top">arriba</span>
    <span class="align-middle">medio</span>
    <span class="align-bottom">abajo</span>
    <span class="align-text-top">texto-arriba</span>
    <span class="align-text-bottom">texto-abajo</span>
```
{{< /demo-iframe >}}

Con celdas de tabla:

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/vertical-align/index-2.html" >}}
```html {filename="HTML"}
    <table style="height: 100px;">
        <tbody>
            <tr>
                <td class="align-baseline">baseline</td>
                <td class="align-top">arriba</td>
                <td class="align-middle">medio</td>
                <td class="align-bottom">abajo</td>
                <td class="align-text-top">texto-arriba</td>
                <td class="align-text-bottom">texto-abajo</td>
            </tr>
        </tbody>
    </table>
```
{{< /demo-iframe >}}

Personalización del CSS {#css}
-----------

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/content-suggestion >}}

### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de alineación vertical se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

{{< content-ads/middle-banner-3 >}}

```scss {filename="scss/_utilities.scss"}
"align": (
    property: vertical-align,
    class: align,
    values: baseline top middle bottom text-bottom text-top
),
```

{{< content-ads/bottom-banner >}}
