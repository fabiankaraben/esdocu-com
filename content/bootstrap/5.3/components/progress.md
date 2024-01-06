---
weight: 20
linkTitle: Progreso
title: El componente Progress de Bootstrap · Bootstrap en Español v5.3
description: Documentación y ejemplos para usar barras de progreso personalizadas de Bootstrap que admiten barras apiladas, fondos animados y etiquetas de texto.
---

# El componente Progress de Bootstrap

Documentación y ejemplos para usar barras de progreso personalizadas de Bootstrap que admiten barras apiladas, fondos animados y etiquetas de texto.

{{< content-ads/top-banner >}}

{{< callout type="info" emoji="" >}}
**Nuevo marcado en v5.3.0:** Hemos dejado de utilizar la estructura HTML anterior para las barras de progreso y la reemplazamos por una más accesible. La estructura anterior seguirá funcionando hasta la v6. [Mira los cambios en nuestra guía de migración.](https://getbootstrap.com/docs/5.3/migration/#improved-markup-for-progress-bars)
{{< /callout >}}

Cómo funciona el componente Progress {#how-it-works}
-------------------------------

Los componentes de progreso se construyen con dos elementos HTML, algo de CSS para establecer el ancho y algunos atributos. No utilizamos [el elemento HTML5 `<progress>`,](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) lo que garantiza que puedas apilar barras de progreso, animarlas y colocar etiquetas de texto sobre ellas.

* Usamos `.progress` como contenedor para indicar el valor máximo de la barra de progreso.
* El contenedor `.progress` también requiere los atributos `role="progressbar"` y `aria` para crear sea accesible, incluido un nombre accesible (usando `aria-label`, `aria-labelledby` o similar).
* Usamos el `.progress-bar` interno únicamente para la barra visual y la etiqueta.
* El `.progress-bar` requiere un estilo en línea, una clase de utilidad o CSS personalizado para establecer su ancho.
* Proporcionamos una clase especial `.progress-stacked` para crear barras de progreso múltiples/apiladas.

Junta todo eso y tendrás los siguientes ejemplos.

{{< demo-iframe path="/demos/bootstrap/5.3/components/progress/how-it-works.html" >}}
```html {filename="HTML"}
<div class="progress" role="progressbar" aria-label="Ejemplo básico" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: 0%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo básico" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo básico" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo básico" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo básico" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: 100%"></div>
</div>
```
{{< /demo-iframe >}}

Tamaño de la barra del componente Progress {#bar-sizing}
------------------------------

### Ancho {#width}

Bootstrap proporciona un puñado de [utilidades para configurar el ancho](/bootstrap/5.3/utilities/sizing). Dependiendo de tus necesidades, estos pueden ayudarte a configurar rápidamente el ancho de la `.progress-bar`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/progress/width.html" >}}
```html {filename="HTML"}
<div class="progress" role="progressbar" aria-label="Ejemplo básico" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar w-75"></div>
</div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-1 >}}

### Altura {#height}

Solo estableces un valor de `height` en el contenedor `.progress`, por lo que si cambias ese valor, el `.progress-bar` cambiará automáticamente de tamaño en consecuencia.

{{< demo-iframe path="/demos/bootstrap/5.3/components/progress/height.html" >}}
```html {filename="HTML"}
<div class="progress" role="progressbar" aria-label="Ejemplo 1px de alto" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 1px">
    <div class="progress-bar" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo 20px de alto" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
    <div class="progress-bar" style="width: 25%"></div>
</div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Etiquetas en el componente Progress {#labels}
--------------------

Agrega etiquetas a tus barras de progreso colocando texto dentro de la `.progress-bar`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/progress/labels-1.html" >}}
```html {filename="HTML"}
<div class="progress" role="progressbar" aria-label="Ejemplo con etiqueta" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: 25%">25%</div>
</div>
```
{{< /demo-iframe >}}

Ten en cuenta que, de forma predeterminada, el contenido dentro de `.progress-bar` se controla con `overflow: hidden`, por lo que no desborde fuera de la barra. Si tu barra de progreso es más corta que tu etiqueta, el contenido estará limitado y puede volverse ilegible. Para cambiar este comportamiento, puedes utilizar `.overflow-visible` de las [utilidades de desbordamiento](/bootstrap/5.3/utilities/overflow), pero asegúrate de definir también un [color de texto](/bootstrap/5.3/utilities/colors/#colors) explícito para que el texto siga siendo legible. Sin embargo, ten en cuenta que actualmente este enfoque no tiene en cuenta los [modos de color](/bootstrap/5.3/customize/color-modes).

{{< demo-iframe path="/demos/bootstrap/5.3/components/progress/labels-2.html" >}}
```html {filename="HTML"}
<div class="progress" role="progressbar" aria-label="Ejemplo con etiqueta" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar overflow-visible text-dark" style="width: 10%">
        Texto de etiqueta largo para la barra de progreso, configurado en un color oscuro
    </div>
</div>
```
{{< /demo-iframe >}}

Personalizar el fondo del componente Progress {#backgrounds}
----------------------

{{< content-ads/middle-banner-2 >}}

Usa clases de utilidades en segundo plano para cambiar la apariencia de las barras de progreso individuales.

{{< demo-iframe path="/demos/bootstrap/5.3/components/progress/backgrounds-1.html" >}}
```html {filename="HTML"}
<div class="progress" role="progressbar" aria-label="Ejemplo de éxito" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo de información" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo de advertencia" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo de peligro" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-danger" style="width: 100%"></div>
</div>
```
{{< /demo-iframe >}}

{{< callout type="info" emoji="" >}}
**Consejo de accesibilidad:** El uso de colores para agregar significado solo proporciona una indicación visual, que no se transmitirá a los usuarios de tecnologías de asistencia como lectores de pantalla. Asegúrate de que el significado sea obvio a partir del contenido mismo (por ejemplo, el texto visible con un [_suficiente_ contraste de color](/bootstrap/5.3/getting-started/accessibility#color-contrast)) o se incluye a través de medios alternativos, como texto adicional oculto con la clase `.visually-hidden`.
{{< /callout >}}

Si agregas etiquetas a las barras de progreso con un color de fondo personalizado, asegúrate de establecer también un [color del texto](/bootstrap/5.3/utilities/colors/#colors), para que las etiquetas sigan siendo legibles y tengan suficiente contraste.

{{< demo-iframe path="/demos/bootstrap/5.3/components/progress/backgrounds-2.html" >}}
```html {filename="HTML"}
<div class="progress" role="progressbar" aria-label="Ejemplo de éxito" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: 25%">25%</div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo de información" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-info text-dark" style="width: 50%">50%</div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo de advertencia" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-warning text-dark" style="width: 75%">75%</div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo de peligro" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-danger" style="width: 100%">100%</div>
</div>
```
{{< /demo-iframe >}}

Como alternativa, puedes usar las nuevas clases auxiliares combinadas [color y fondo](/bootstrap/5.3/helpers/color-background).

{{< demo-iframe path="/demos/bootstrap/5.3/components/progress/backgrounds-3.html" >}}
```html {filename="HTML"}
<div class="progress" role="progressbar" aria-label="Ejemplo de advertencia" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-warning" style="width: 75%">75%</div>
</div>
```
{{< /demo-iframe >}}

Usar varios componente Progress {#multiple-bars}
-------------------------------

Puedes incluir múltiples componentes de progreso dentro de un contenedor con `.progress-stacked` para crear una única barra de progreso apilada. Ten en cuenta que en este caso, el estilo para establecer el ancho visual de la barra de progreso _debe_ aplicarse a los elementos `.progress`, en lugar de `.progress-bar`s.

{{< demo-iframe path="/demos/bootstrap/5.3/components/progress/multiple-bars.html" >}}
```html {filename="HTML"}
<div class="progress-stacked">
    <div class="progress" role="progressbar" aria-label="Segmento uno" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
        <div class="progress-bar"></div>
    </div>
    <div class="progress" role="progressbar" aria-label="Segmento dos" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
        <div class="progress-bar bg-success"></div>
    </div>
    <div class="progress" role="progressbar" aria-label="Segmento tres" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
        <div class="progress-bar bg-info"></div>
    </div>
</div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-3 >}}

{{< bootstrap/content-suggestion >}}

Estilo rayado en el componente Progress {#striped}
------------------

Agrega `.progress-bar-striped` a cualquier `.progress-bar` para aplicar una franja mediante un degradado CSS sobre el color de fondo de la barra de progreso.

{{< demo-iframe path="/demos/bootstrap/5.3/components/progress/striped.html" >}}
```html {filename="HTML"}
<div class="progress" role="progressbar" aria-label="Ejemplo rayado predeterminado" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped" style="width: 10%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo de éxito rayado" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped bg-success" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo de información rayada" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo de rayas de advertencia" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Ejemplo de rayas de peligro" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%"></div>
</div>
```
{{< /demo-iframe >}}

Rayas animadas en el componente Progress {#animated-stripes}
-----------------------------------

El degradado rayado también se puede animar. Añade `.progress-bar-animated` a `.progress-bar` para animar las franjas de derecha a izquierda mediante animaciones CSS3.

{{< demo-iframe path="/demos/bootstrap/5.3/components/progress/animated-stripes.html" >}}
```html {filename="HTML"}
<div class="progress" role="progressbar" aria-label="Ejemplo de rayas animadas" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
</div>
```
{{< /demo-iframe >}}

Personalización del CSS del componente {#css}
-----------

### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

{{< content-ads/middle-banner-4 >}}

Como parte del enfoque de variables CSS en evolución de Bootstrap, las barras de progreso ahora usan variables CSS locales en `.progress` para una personalización mejorada en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_progress.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_progress.scss)

```scss {filename="scss/_progress.scss"}
--#{$prefix}progress-height: #{$progress-height};
@include rfs($progress-font-size, --#{$prefix}progress-font-size);
--#{$prefix}progress-bg: #{$progress-bg};
--#{$prefix}progress-border-radius: #{$progress-border-radius};
--#{$prefix}progress-box-shadow: #{$progress-box-shadow};
--#{$prefix}progress-bar-color: #{$progress-bar-color};
--#{$prefix}progress-bar-bg: #{$progress-bar-bg};
--#{$prefix}progress-bar-transition: #{$progress-bar-transition};
```

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$progress-height:                   1rem;
$progress-font-size:                $font-size-base * .75;
$progress-bg:                       var(--#{$prefix}secondary-bg);
$progress-border-radius:            var(--#{$prefix}border-radius);
$progress-box-shadow:               var(--#{$prefix}box-shadow-inset);
$progress-bar-color:                $white;
$progress-bar-bg:                   $primary;
$progress-bar-animation-timing:     1s linear infinite;
$progress-bar-transition:           width .6s ease;
```

{{< bootstrap/content-suggestion >}}

### Fotogramas clave {#keyframes}

Se utiliza para crear animaciones CSS para `.progress-bar-animated`. Incluido en `scss/_progress-bar.scss`.

[scss/_progress.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_progress.scss)

```scss {filename="scss/_progress.scss"}
@if $enable-transitions {
    @keyframes progress-bar-stripes {
    0% { background-position-x: $progress-height; }
    }
}
```

{{< content-ads/bottom-banner >}}
