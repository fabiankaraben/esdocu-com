---
weight: 2
linkTitle: Color y fondo
title: Uso del ayudante para colores y fondos en Bootstrap · Bootstrap en Español v5.3
description: Establece un color de fondo con un color de primer plano que contraste.
noindex: true
---

# Uso del ayudante para colores y fondos en Bootstrap

Establece un color de fondo con un color de primer plano que contraste.

{{< content-ads/top-banner >}}

Descripción general {#overview}
--------------------------------

Los ayudantes de color y fondo combinan el poder de nuestras [`.text-*` (utilidades)](/bootstrap/5.3/utilities/colors) y [`.bg-*` (utilidades)](/bootstrap/5.3/utilities/background) en una clase. Usando nuestra función Sass `color-contrast()`, determinamos automáticamente un `color` de contraste para un `background-color` particular.

{{< callout type="warning" emoji="" >}}
**¡Atención!** Actualmente no hay soporte para una función `color-contrast` nativa de CSS, por lo que usamos la nuestra a través de Sass. Esto significa que personalizar los colores de nuestro tema mediante variables CSS puede causar problemas de contraste de color con estas utilidades.
{{< /callout >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/color-background/overview.html" >}}
```html {filename="HTML"}
    <div class="text-bg-primary p-3">Primaria con color contrastante</div>
    <div class="text-bg-secondary p-3">Secundaria con color contrastante</div>
    <div class="text-bg-success p-3">Éxito con color contrastante</div>
    <div class="text-bg-danger p-3">Peligro con color contrastante</div>
    <div class="text-bg-warning p-3">Advertencia con color contrastante</div>
    <div class="text-bg-info p-3">Información con color contrastante</div>
    <div class="text-bg-light p-3">Claro con color contrastante.</div>
    <div class="text-bg-dark p-3">Oscuro con color contrastante.</div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-1 >}}

{{< callout type="info" emoji="" >}}
**Consejo de accesibilidad:** El uso de colores para agregar significado solo proporciona una indicación visual, que no se transmitirá a los usuarios de tecnologías de asistencia como lectores de pantalla. Asegúrate de que el significado sea obvio a partir del contenido mismo (por ejemplo, el texto visible con un [_suficiente_ contraste de color](/bootstrap/5.3/getting-started/accessibility#color-contrast)) o se incluye a través de medios alternativos, como texto adicional oculto con la clase `.visually-hidden`.
{{< /callout >}}

Con componentes {#with-components}
-----------------------------------

Úsalos en lugar de las clases combinadas `.text-*` y `.bg-*` , como en [insignias](/bootstrap/5.3/components/badge/#background-colors):

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/color-background/with-components-1.html" >}}
```html {filename="HTML"}
    <span class="badge text-bg-primary">Primary</span>
    <span class="badge text-bg-info">Info</span>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/content-suggestion >}}

O en [tarjetas](/bootstrap/5.3/components/card/#background-and-color):

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/color-background/with-components-2.html" >}}
```html {filename="HTML"}
    <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
    <div class="card text-bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Encabezado</div>
        <div class="card-body">
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/bottom-banner >}}
