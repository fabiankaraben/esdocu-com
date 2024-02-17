---
weight: 9
linkTitle: Close button
title: El componente Close button · Bootstrap en Español v5.1
description: Un botón de cierre genérico para descartar contenido como modals y alerts.
type: docs
noindex: true
---

# El componente Close button

Un botón de cierre genérico para descartar contenido como modals y alerts.

{{< content-ads/top-banner >}}

## Ejemplo

Proporciona una opción para descartar o cerrar un componente con `.btn-close`. El estilo predeterminado es limitado, pero altamente personalizable. Modifica las variables de Sass para reemplazar la `background-image` predeterminada. **Asegúrate de incluir texto para lectores de pantalla**, como hemos hecho con `aria-label`.

{{< bootstrap/5-1/example >}}
<button type="button" class="btn-close" aria-label="Cerrar"></button>
{{< /bootstrap/5-1/example >}}

## Estado deshabilitado

{{< content-ads/middle-banner-1 >}}

Los botones de cierre deshabilitados cambian su `opacity`. También hemos aplicado `pointer-events: none` y `user-select: none` para evitar que se activen los estados *active* y *hover*.

{{< bootstrap/5-1/example >}}
<button type="button" class="btn-close" disabled aria-label="Cerrar"></button>
{{< /bootstrap/5-1/example >}}

## Variante clara

Cambia el `.btn-close` predeterminado para que sea blanco con la clase `.btn-close-white`. Esta clase usa la propiedad `filter` para invertir la `background-image`.

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/5-1/example class="bg-dark" >}}
<button type="button" class="btn-close btn-close-white" aria-label="Cerrar"></button>
<button type="button" class="btn-close btn-close-white" disabled aria-label="Cerrar"></button>
{{< /bootstrap/5-1/example >}}

## Sass

### Variables

{{< bootstrap/5-1/scss-docs name="close-variables" file="scss/_variables.scss" >}}

{{< content-ads/bottom-banner >}}
