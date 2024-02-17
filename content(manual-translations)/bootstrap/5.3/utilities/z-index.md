---
weight: 20
linkTitle: Z-index
title: Uso de las utilidades de valores z-index en Bootstrap · Bootstrap en Español v5.3
description: Utiliza nuestras utilidades de índice z de bajo nivel para cambiar rápidamente el nivel de pila de un elemento o componente.
next: /bootstrap/5.3/extend/approach
noindex: true
---

# Uso de las utilidades de valores z-index en Bootstrap

Utiliza nuestras utilidades z-index de bajo nivel para cambiar rápidamente el nivel de pila de un elemento o componente.

{{< content-ads/top-banner >}}

Ejemplo {#example}
-------------------

Utiliza las utilidades `z-index` para apilar elementos uno encima del otro. Requiere un valor de `position` distinto de `static`, que se puede configurar con estilos personalizados o usando nuestras [utilidades de posición](/bootstrap/5.3/utilities/position).

{{< callout type="info" emoji="" >}}
A estas las llamamos utilidades `z-index` de “bajo nivel” debido a sus valores predeterminados de `-1` a `3`, que utilizamos para el diseño de componentes superpuestos. Los valores `z-index` de alto nivel se utilizan para componentes superpuestos como modales o tooltips.
{{< /callout >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/z-index/example.html" >}}
```html {filename="HTML"}
    <div class="z-3 position-absolute p-5 rounded-3"><span>z-3</span></div>
    <div class="z-2 position-absolute p-5 rounded-3"><span>z-2</span></div>
    <div class="z-1 position-absolute p-5 rounded-3"><span>z-1</span></div>
    <div class="z-0 position-absolute p-5 rounded-3"><span>z-0</span></div>
    <div class="z-n1 position-absolute p-5 rounded-3"><span>z-n1</span></div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-1 >}}

Superposiciones {#overlays}
----------------------------

Los componentes de superposición de Bootstrap (desplegable, modal, offcanvas, popover, toast y tooltips) tienen sus propios valores `z-index` para garantizar una experiencia utilizable con “capas” competitivas de una interfaz.

Lee sobre ellos en la página de [`z-index` (sección layout)](/bootstrap/5.3/layout/z-index).

Enfoque de componentes {#component-approach}
---------------------------------------------

{{< content-ads/middle-banner-2 >}}

En algunos componentes, usamos nuestros valores `z-index` de bajo nivel para administrar elementos repetidos que se superponen entre sí (como botones en un grupo de botones o elementos en un grupo de lista).

Más información sobre nuestro enfoque [`z-index`.](/bootstrap/5.3/extend/approach/#z-index-scales).

Personalización del CSS {#css}
-----------

### Mapas de Sass {#sass-maps}

{{< content-ads/middle-banner-3 >}}

Personaliza este mapa de Sass para cambiar los valores disponibles y las utilidades generadas.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$zindex-levels: (
  n1: -1,
  0: 0,
  1: 1,
  2: 2,
  3: 3
);
```

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-4 >}}

### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de posición se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"z-index": (
  property: z-index,
  class: z,
  values: $zindex-levels,
)
```

{{< content-ads/bottom-banner >}}
