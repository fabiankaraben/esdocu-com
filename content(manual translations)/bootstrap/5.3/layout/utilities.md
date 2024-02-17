---
weight: 6
linkTitle: Utilidades
title: Utilidades para diseño de layout en Bootstrap · Bootstrap en Español v5.3
description: Para un desarrollo responsive y compatible con dispositivos móviles más rápido, Bootstrap incluye docenas de clases de utilidad para mostrar, ocultar, alinear y espaciar contenido.
noindex: true
---

# Utilidades para diseño de layout en Bootstrap

Para un desarrollo responsive y compatible con dispositivos móviles más rápido, Bootstrap incluye docenas de clases de utilidad para mostrar, ocultar, alinear y espaciar contenido.

{{< content-ads/top-banner >}}

Cambiando `display` {#changing-display}
----------------------------------------

Utiliza nuestras [utilidades de visualización](/bootstrap/5.3/utilities/display) para alternar de forma responsive los valores comunes de la propiedad `display`. Mézclalo con nuestro sistema de cuadrícula, contenido o componentes para mostrarlos u ocultarlos en viewports específicos.

Opciones de Flexbox {#flexbox-options}
---------------------------------------

Bootstrap está construido con flexbox, pero no se ha cambiado el `display` de cada elemento a `display: flex` ya que esto agregaría muchos elementos innecesarios y sobrescribiría inesperadamente comportamientos clave del navegador. La mayoría de [nuestros componentes](/bootstrap/5.3/components/alerts) están construidos con flexbox habilitado.

{{< content-ads/middle-banner-1 >}}

Si necesitas agregar `display: flex` a un elemento, hazlo con `.d-flex` o uno de las variantes responsive (por ejemplo `.d-sm-flex`). Necesitarás esta clase o valor `display` para permitir el uso de nuestras [utilidades flexbox](/bootstrap/5.3/utilities/flex) adicionales para dimensionar, alinear, espaciar y más.

{{< bootstrap/content-suggestion >}}

Margen y relleno {#margin-and-padding}
---------------------------------------

Usa las utilidades `margin` y `padding` [de espaciado](/bootstrap/5.3/utilities/spacing) para controlar cómo se espacian y dimensionan los elementos y componentes. Bootstrap incluye una escala de seis niveles para utilidades de espaciado, basada en un valor predeterminado de `1rem` para la variable `$spacer`. Elige valores para todas los viewports (p. ej., `.me-3` para `margin-right: 1rem` en LTR) o elige variantes responsive para apuntar a viewports específicas (p. ej., `.me-md-3` para `margin-right: 1rem` —en LTR— comenzando en el punto de interrupción `md`).

{{< content-ads/middle-banner-2 >}}

Alterna `visibility` {#toggle-visibility}
------------------------------------------

Cuando no es necesario alternar `display`, puedes alternar `visibility` de un elemento con nuestras [utilidades de visibilidad](/bootstrap/5.3/utilities/visibility). Los elementos invisibles seguirán afectando el diseño de la página, pero están visualmente ocultos para los visitantes.

{{< content-ads/bottom-banner >}}
