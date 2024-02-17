---
weight: 6
linkTitle: Posición
title: Uso del ayudante para Posición del contenido en Bootstrap · Bootstrap en Español v5.3
description: Usa estos ayudantes para configurar rápidamente la posición de un elemento.
noindex: true
---

# Uso del ayudante para Posición del contenido en Bootstrap

Usa estos ayudantes para configurar rápidamente la posición de un elemento.

{{< content-ads/top-banner >}}

Fijo parte superior {#fixed-top}
---------------------------------

Coloca un elemento en la parte superior del viewport, de borde a borde. Asegúrate de comprender las ramificaciones de la posición fija en tu proyecto; es posible que necesites agregar CSS adicional.

```html {filename="HTML"}
<div class="fixed-top">...</div>
```

Fijo parte inferior {#fixed-bottom}
------------------------------------

{{< content-ads/middle-banner-1 >}}

Coloca un elemento en la parte inferior del viewport, de borde a borde. Asegúrate de comprender las ramificaciones de la posición fija en tu proyecto; es posible que necesites agregar CSS adicional.

```html {filename="HTML"}
<div class="fixed-bottom">...</div>
```

Pegajoso parte superior {#sticky-top}
--------------------------------------

Coloca un elemento en la parte superior del viewport, de borde a borde, pero solo después de pasarlo.

{{< content-ads/middle-banner-2 >}}

```html {filename="HTML"}
<div class="sticky-top">...</div>
```

Pegajoso responsive superior {#responsive-sticky-top}
------------------------------------------------------

También existen variaciones responsive para la utilidad `.sticky-top`.

```html {filename="HTML"}
<div class="sticky-sm-top">Stick to the top on viewports sized SM (small) or wider</div>
<div class="sticky-md-top">Stick to the top on viewports sized MD (medium) or wider</div>
<div class="sticky-lg-top">Stick to the top on viewports sized LG (large) or wider</div>
<div class="sticky-xl-top">Stick to the top on viewports sized XL (extra-large) or wider</div>
<div class="sticky-xxl-top">Stick to the top on viewports sized XXL (extra-extra-large) or wider</div>
```

{{< content-ads/middle-banner-3 >}}

Pegajoso parte inferior {#sticky-bottom}
-----------------------------------------

Coloca un elemento en la parte inferior del viewport, de borde a borde, pero solo después de pasarlo.

```html {filename="HTML"}
<div class="sticky-bottom">...</div>
```

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-4 >}}

Pegajoso responsive inferior {#responsive-sticky-bottom}
---------------------------------------------------------

También existen variaciones responsive para la utilidad `.sticky-bottom`.

```html {filename="HTML"}
<div class="sticky-sm-bottom">Stick to the bottom on viewports sized SM (small) or wider</div>
<div class="sticky-md-bottom">Stick to the bottom on viewports sized MD (medium) or wider</div>
<div class="sticky-lg-bottom">Stick to the bottom on viewports sized LG (large) or wider</div>
<div class="sticky-xl-bottom">Stick to the bottom on viewports sized XL (extra-large) or wider</div>
<div class="sticky-xxl-bottom">Stick to the bottom on viewports sized XXL (extra-extra-large) or wider</div>
```

{{< content-ads/bottom-banner >}}
