---
weight: 3
linkTitle: Insignias
title: El componente de Insignia de Bootstrap · Bootstrap en Español v5.3
description: Documentación y ejemplos para insignias, nuestro componente de etiquetado y recuento.
---

# El componente de Insignia de Bootstrap

Documentación y ejemplos para insignias, nuestro componente de etiquetado y recuento.

{{< content-ads/top-banner >}}

Ejemplos del componente Insignia {#examples}
---------------------

Las insignias se escalan para que coincidan con el tamaño del elemento padre inmediato usando el tamaño de fuente relativo y las unidades `em`. A partir de la versión 5, las insignias ya no tienen estilos focus o hover para los enlaces.

### Títulos {#headings}

{{< demo-iframe path="/demos/bootstrap/5.3/components/badge/examples.html" >}}
```html {filename="HTML"}
    <h1>Encabezado de ejemplo <span class="badge bg-secondary">Nuevo</span></h1>
    <h2>Encabezado de ejemplo <span class="badge bg-secondary">Nuevo</span></h2>
    <h3>Encabezado de ejemplo <span class="badge bg-secondary">Nuevo</span></h3>
    <h4>Encabezado de ejemplo <span class="badge bg-secondary">Nuevo</span></h4>
    <h5>Encabezado de ejemplo <span class="badge bg-secondary">Nuevo</span></h5>
    <h6>Encabezado de ejemplo <span class="badge bg-secondary">Nuevo</span></h6>
```
{{< /demo-iframe >}}

### Botones {#buttons}

Las insignias se pueden usar como parte de enlaces o botones para proporcionar un contador.

{{< content-ads/middle-banner-1 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/badge/buttons.html" >}}
```html {filename="HTML"}
    <button type="button" class="btn btn-primary">
        Notificaciones <span class="badge text-bg-secondary">4</span>
    </button>
```
{{< /demo-iframe >}}

Ten en cuenta que, dependiendo de cómo se utilicen, las insignias pueden resultar confusas para los usuarios de lectores de pantalla y tecnologías de asistencia similares. Si bien el estilo de las insignias proporciona una pista visual sobre su propósito, a estos usuarios simplemente se les presentará el contenido de la insignia. Dependiendo de la situación específica, estas insignias pueden parecer palabras o números adicionales aleatorios al final de una oración, enlace o botón.

A menos que el contexto sea claro (como en el ejemplo de “Notificaciones”, donde se entiende que el “4” es el número de notificaciones), considera incluir contexto adicional con una pieza de información adicional visualmente oculta.

### Posicionado {#positioned}

Usa utilidades para modificar un `.badge` y posicionarlo en la esquina de un enlace o botón.

{{< demo-iframe path="/demos/bootstrap/5.3/components/badge/positioned-1.html" >}}
```html {filename="HTML"}
    <button type="button" class="btn btn-primary position-relative">
        Bandeja de entrada
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span class="visually-hidden">mensajes no leídos</span>
        </span>
    </button>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-2 >}}

También puedes reemplazar la clase `.badge` con algunas utilidades más sin contar para un indicador más genérico.

{{< demo-iframe path="/demos/bootstrap/5.3/components/badge/positioned-2.html" >}}
```html {filename="HTML"}
    <button type="button" class="btn btn-primary position-relative">
        Perfil
        <span
            class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
            <span class="visually-hidden">Nuevas alertas</span>
        </span>
    </button>
```
{{< /demo-iframe >}}

Colores de fondo del componente {#background-colors}
--------------------------------------

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Establece un `background-color` con un `color` de primer plano contrastante con [nuestros `.text-bg-{color}` ayudantes](/bootstrap/5.3/helpers/color-background). Anteriormente era necesario emparejar manualmente tu elección de utilidades para diseñar [`.text-{color}`](/bootstrap/5.3/utilities/colors) y [`.bg-{color}`](/bootstrap/5.3/utilities/background), que aún puedes usar si lo prefieres.

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-3 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/badge/background-colors.html" >}}
```html {filename="HTML"}
    <span class="badge text-bg-primary">Primary</span>
    <span class="badge text-bg-secondary">Secondary</span>
    <span class="badge text-bg-success">Success</span>
    <span class="badge text-bg-danger">Danger</span>
    <span class="badge text-bg-warning">Warning</span>
    <span class="badge text-bg-info">Info</span>
    <span class="badge text-bg-light">Light</span>
    <span class="badge text-bg-dark">Dark</span>
```
{{< /demo-iframe >}}

{{< callout type="info" emoji="" >}}
**Consejo de accesibilidad:** El uso de colores para agregar significado solo proporciona una indicación visual, que no se transmitirá a los usuarios de tecnologías de asistencia como lectores de pantalla. Asegúrate de que el significado sea obvio a partir del contenido mismo (por ejemplo, el texto visible con un [_suficiente_ contraste de color](/bootstrap/5.3/getting-started/accessibility#color-contrast)) o se incluye a través de medios alternativos, como texto adicional oculto con la clase `.visually-hidden`.
{{< /callout >}}

Insignias de pastillas {#pill-badges}
--------------------------------------

Utiliza la clase de utilidad `.rounded-pill` para hacer insignias más redondeadas con un `border-radius` más grande.

{{< demo-iframe path="/demos/bootstrap/5.3/components/badge/pill-badges.html" >}}
```html {filename="HTML"}
    <span class="badge rounded-pill text-bg-primary">Primary</span>
    <span class="badge rounded-pill text-bg-secondary">Secondary</span>
    <span class="badge rounded-pill text-bg-success">Success</span>
    <span class="badge rounded-pill text-bg-danger">Danger</span>
    <span class="badge rounded-pill text-bg-warning">Warning</span>
    <span class="badge rounded-pill text-bg-info">Info</span>
    <span class="badge rounded-pill text-bg-light">Light</span>
    <span class="badge rounded-pill text-bg-dark">Dark</span>
```
{{< /demo-iframe >}}

Personalización del CSS del componente {#css}
-----------

{{< content-ads/middle-banner-4 >}}

### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Como parte del enfoque de variables CSS en evolución de Bootstrap, las insignias ahora usan variables CSS locales en `.badge` para una personalización mejorada en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_badge.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_badge.scss)

```scss {filename="scss/_badge.scss"}
--#{$prefix}badge-padding-x: #{$badge-padding-x};
--#{$prefix}badge-padding-y: #{$badge-padding-y};
@include rfs($badge-font-size, --#{$prefix}badge-font-size);
--#{$prefix}badge-font-weight: #{$badge-font-weight};
--#{$prefix}badge-color: #{$badge-color};
--#{$prefix}badge-border-radius: #{$badge-border-radius};
```

### Variables Sass generales relacionadas {#sass-variables}

{{< content-ads/middle-banner-5 >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$badge-font-size:                   .75em;
$badge-font-weight:                 $font-weight-bold;
$badge-color:                       $white;
$badge-padding-y:                   .35em;
$badge-padding-x:                   .65em;
$badge-border-radius:               var(--#{$prefix}border-radius);
```

{{< content-ads/bottom-banner >}}
