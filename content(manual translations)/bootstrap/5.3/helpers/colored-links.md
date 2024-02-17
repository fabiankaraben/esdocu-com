---
weight: 3
linkTitle: Enlaces de colores
title: Uso del ayudante para Enlaces de colores en Bootstrap · Bootstrap en Español v5.3
description: Enlaces de colores con estados de desplazamiento
noindex: true
---

# Uso del ayudante para Enlaces de colores en Bootstrap

Enlaces de colores con estados de desplazamiento.

{{< content-ads/top-banner >}}

Colores de enlace {#link-colors}
---------------------------------

Puedes usar las clases `.link-*` para colorear enlaces. A diferencia de las [`.text-*` (clases)](/bootstrap/5.3/utilities/colors), estas clases tienen un estado `:hover` y `:focus`. Algunos de los estilos de enlace utilizan un color de primer plano relativamente claro y solo deben usarse sobre un fondo oscuro para tener suficiente contraste.

{{< callout type="info" emoji="" >}}
**¡Atención!** `.link-body-emphasis` es actualmente el único enlace de color que se adapta a los modos de color. Se trata como un caso especial hasta que llegue la versión 6 y podamos reconstruir más a fondo los colores de nuestro tema para los modos de color. Hasta entonces, es un color de enlace único y de alto contraste con estilos personalizados `:hover` y `:focus`. Sin embargo, todavía responde a las nuevas utilidades de enlace.
{{< /callout >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/colored-links/link-colors.html" >}}
```html {filename="HTML"}
    <p><a href="#" class="link-primary">Enlace principal</a></p>
    <p><a href="#" class="link-secondary">Enlace secundario</a></p>
    <p><a href="#" class="link-success">Enlace de éxito</a></p>
    <p><a href="#" class="link-danger">Enlace de peligro</a></p>
    <p><a href="#" class="link-warning">Enlace de advertencia</a></p>
    <p><a href="#" class="link-info">Enlace de información</a></p>
    <p><a href="#" class="link-light">Enlace claro</a></p>
    <p><a href="#" class="link-dark">Enlace oscuro</a></p>
    <p><a href="#" class="link-body-emphasis">Enlace de énfasis</a></p>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-1 >}}

{{< callout type="info" emoji="" >}}
**Consejo de accesibilidad:** El uso de colores para agregar significado solo proporciona una indicación visual, que no se transmitirá a los usuarios de tecnologías de asistencia como lectores de pantalla. Asegúrate de que el significado sea obvio a partir del contenido mismo (por ejemplo, el texto visible con un [_suficiente_ contraste de color](/bootstrap/5.3/getting-started/accessibility#color-contrast)) o se incluye a través de medios alternativos, como texto adicional oculto con la clase `.visually-hidden`.
{{< /callout >}}

Utilidades de enlace {#link-utilities}
---------------------------------------

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.3.0</span>

Los enlaces de colores también pueden modificarse mediante nuestras [utilidades de enlaces](/bootstrap/5.3/utilities/link).

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/colored-links/link-utilities.html" >}}
```html {filename="HTML"}
    <p><a href="#" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace principal</a></p>
    <p><a href="#" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace secundario</a></p>
    <p><a href="#" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace de éxito</a></p>
    <p><a href="#" class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace de peligro</a></p>
    <p><a href="#" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace de advertencia</a></p>
    <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace de información</a></p>
    <p><a href="#" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace claro</a></p>
    <p><a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace oscuro</a></p>
    <p><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Enlace de énfasis</a></p>
```
{{< /demo-iframe >}}

{{< content-ads/bottom-banner >}}
