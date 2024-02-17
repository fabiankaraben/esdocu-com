---
weight: 20
linkTitle: Progress
title: El componente Progress · Bootstrap en Español v5.1
description: Documentación y ejemplos para el uso de barras de progreso personalizadas de Bootstrap con soporte para barras apiladas, fondos animados y etiquetas de texto.
type: docs
---

# El componente Progress

Documentación y ejemplos para el uso de barras de progreso personalizadas de Bootstrap con soporte para barras apiladas, fondos animados y etiquetas de texto.

{{< content-ads/top-banner >}}

## ¿Cómo funciona progress?

Los componentes de progreso se construyen con dos elementos HTML, algo de CSS para establecer el ancho y algunos atributos. No usamos [el elemento HTML5 `<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), lo que garantiza que puedes apilar barras de progreso, animarlas y colocar etiquetas de texto sobre ellos.

- Usamos `.progress` como contenedor para indicar el valor máximo de la barra de progreso.
- Usamos la `.progress-bar` interna para indicar el progreso hasta el momento.
- La `.progress-bar` requiere un estilo en línea, una clase de utilidad o un CSS personalizado para establecer su ancho.
- La `.progress-bar` también requiere algunos atributos `role` y `aria` para que sea accesible.

Pon todo eso junto, y tienes los siguientes ejemplos.

{{< bootstrap/5-1/example >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /bootstrap/5-1/example >}}

Bootstrap proporciona un puñado de [utilidades para configurar el ancho]({{< bootstrap/5-1/docsref "/utilities/sizing" >}}). Dependiendo de tus necesidades, estos pueden ayudar a configurar rápidamente el progreso.

{{< content-ads/middle-banner-1 >}}

{{< bootstrap/5-1/example >}}
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /bootstrap/5-1/example >}}

## Etiquetas

Agrega etiquetas a tus barras de progreso colocando texto dentro de `.progress-bar`.

{{< bootstrap/5-1/example >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
{{< /bootstrap/5-1/example >}}

## Altura

Solo establecemos un valor de `height` en `.progress`, por lo que si cambias ese valor, la `.progress-bar` interna cambiará automáticamente de tamaño en consecuencia.

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/5-1/example >}}
<div class="progress" style="height: 1px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 20px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /bootstrap/5-1/example >}}

## Fondos

Usa clases de utilidad de fondo para cambiar la apariencia de las barras de progreso individuales.

{{< bootstrap/5-1/example >}}
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /bootstrap/5-1/example >}}

## Múltiples barras

Incluye múltiples barras de progreso en un componente de progreso si lo necesitas.

{{< content-ads/middle-banner-3 >}}

{{< bootstrap/5-1/example >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /bootstrap/5-1/example >}}

## A rayas

Agrega `.progress-bar-striped` a cualquier `.progress-bar` para aplicar una rayas con un degradado CSS sobre el color de fondo de la barra de progreso.

{{< bootstrap/5-1/example >}}
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /bootstrap/5-1/example >}}

## Rayas animadas

El degradado rayado también se puede animar. Agrega `.progress-bar-animated` a `.progress-bar` para animar las franjas de derecha a izquierda a través de animaciones CSS3.

{{< content-ads/middle-banner-4 >}}

{{< bootstrap/5-1/example >}}
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
{{< /bootstrap/5-1/example >}}

## Sass

### Variables

{{< bootstrap/5-1/scss-docs name="progress-variables" file="scss/_variables.scss" >}}

### Keyframes

Se utiliza para crear animaciones CSS para `.progress-bar-animated`. Incluido en `scss/_progress-bar.scss`.

{{< bootstrap/5-1/scss-docs name="progress-keyframes" file="scss/_progress.scss" >}}

{{< content-ads/bottom-banner >}}
