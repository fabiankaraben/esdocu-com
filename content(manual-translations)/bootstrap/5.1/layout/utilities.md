---
weight: 6
linkTitle: Utilidades
title: Utilidades para el diseño · Bootstrap en Español v5.1
description: Para un desarrollo responsive y listo para dispositivos móviles, Bootstrap incluye docenas de clases de utilidades para mostrar, ocultar, alinear y espaciar el contenido.
type: docs
---

# Utilidades para el diseño en Bootstrap

Para un desarrollo responsive y listo para dispositivos móviles, Bootstrap incluye docenas de clases de utilidades para mostrar, ocultar, alinear y espaciar el contenido.

{{< content-ads/top-banner >}}

## Cambiar el `display`

Utiliza nuestras [utilidades de visualización]({{< bootstrap/5-1/docsref "/utilities/display" >}}) para alternar de manera responsive los valores comunes de la propiedad `display`. Mézclalo con nuestro sistema de cuadrícula, contenido o componentes para mostrarlos u ocultarlos en viewports específicos.

## Opciones Flexbox

Bootstrap está construido con flexbox, pero no se ha cambiado la propiedad `display` de todos los elementos a `display: flex`, ya que esto agregaría muchas sobrescrituras innecesarias y cambiaría inesperadamente los comportamientos clave del navegador. La mayoría de [nuestros componentes]({{< bootstrap/5-1/docsref "/components/alerts" >}}) están construidos con flexbox habilitado.

{{< content-ads/middle-banner-1 >}}

Si necesitas agregar `display: flex` a un elemento, hazlo con `.d-flex` o una de las variantes responsive (por ejemplo, `.d-sm-flex`). Necesitarás esta clase o el valor `display` para permitir el uso de nuestras [utilidades flexbox]({{< bootstrap/5-1/docsref "/utilities/flex" >}}) adicionales para ajustar el tamaño, la alineación, el espaciado y más.

## Margin y padding

Usa `margin` y `padding` [utilidades de espaciado]({{< bootstrap/5-1/docsref "/utilities/spacing" >}}) para controlar cómo se espacian y dimensionan los elementos y componentes. Bootstrap incluye una escala de seis niveles para las utilidades de espaciado, basada en una variable `$spacer` predeterminada de valor `1rem`. Elije valores para todos los viewports (p. ej., `.me-3` para `margin-right: 1rem` en LTR) o elije variantes responsive para apuntar a viewports específicos (p. ej., `.me-md-3` para `margin-right: 1rem` —en LTR— comenzando en el punto de interrupción `md`).

## Alternar `visibility`

Cuando no es necesario alternar `display`, puedes alternar la propiedad `visibility` de un elemento con nuestras [utilidades de visibilidad]({{< bootstrap/5-1/docsref "/utilities/visibility" >}}). Los elementos invisibles seguirán afectando el diseño de la página, pero están visualmente ocultos para los visitantes.

{{< content-ads/bottom-banner >}}
