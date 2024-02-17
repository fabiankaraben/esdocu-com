---
weight: 12
linkTitle: Helpers de Bootstrap
title: Uso de ayudantes o helpers de Bootstrap · Bootstrap en Español v5.3
description: Borra rápida, posiciona o aplica formato fácilmente al contenido utilizando una estas utilidades.
prev: /bootstrap/componentes/tooltips
next: /bootstrap/utilidades/api
---

# Utilidades helpers en Bootstrap

## Uso del ayudante Clearfix en Bootstrap

Borra rápida y fácilmente el contenido flotante dentro de un contenedor agregando una utilidad clearfix.

{{< content-ads/top-banner >}}

Borra fácilmente los `float` agregando `.clearfix` **al elemento padre**. También se puede utilizar como mixin.

Usar en HTML:

```html {filename="HTML"}
<div class="clearfix">...</div>
```

El código fuente del mixin:

{{< content-ads/middle-banner-1 >}}

[scss/mixins/_clearfix.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/mixins/_clearfix.scss)

```scss {filename="scss/mixins/_clearfix.scss"}
@mixin clearfix() {
  &::after {
    display: block;
    clear: both;
    content: "";
  }
}
```

{{< bootstrap/content-suggestion >}}

Usa el mixin en SCSS:

{{< content-ads/middle-banner-2 >}}

```scss {filename="SCSS"}
.element {
  @include clearfix;
}
```

El siguiente ejemplo muestra cómo se puede usar clearfix. Sin clearfix, el div envolvente no abarcaría los botones, lo que provocaría un diseño roto.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/clearfix/index.html" >}}
```html {filename="HTML"}
    <div class="bg-info clearfix">
        <button type="button" class="btn btn-secondary float-start">Ejemplo de botón flotando hacia la
            izquierda</button>
        <button type="button" class="btn btn-secondary float-end">El botón de ejemplo flotando hacia la
            derecha</button>
    </div>
```
{{< /demo-iframe >}}

## Uso del ayudante para colores y fondos en Bootstrap

Establece un color de fondo con un color de primer plano que contraste.

{{< content-ads/top-banner >}}

### Descripción general {#overview}

Los ayudantes de color y fondo combinan el poder de nuestras [`.text-*` (utilidades)](/bootstrap/utilidades/colores) y [`.bg-*` (utilidades)](/bootstrap/utilidades/background) en una clase. Usando nuestra función Sass `color-contrast()`, determinamos automáticamente un `color` de contraste para un `background-color` particular.

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
**Consejo de accesibilidad:** El uso de colores para agregar significado solo proporciona una indicación visual, que no se transmitirá a los usuarios de tecnologías de asistencia como lectores de pantalla. Asegúrate de que el significado sea obvio a partir del contenido mismo (por ejemplo, el texto visible con un [_suficiente_ contraste de color](/bootstrap/comenzando#color-contrast)) o se incluye a través de medios alternativos, como texto adicional oculto con la clase `.visually-hidden`.
{{< /callout >}}

### Con componentes {#with-components}

Úsalos en lugar de las clases combinadas `.text-*` y `.bg-*` , como en [insignias](/bootstrap/componentes/insignias-y-breadcrumbs/#background-colors):

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/color-background/with-components-1.html" >}}
```html {filename="HTML"}
    <span class="badge text-bg-primary">Primary</span>
    <span class="badge text-bg-info">Info</span>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/content-suggestion >}}

O en [tarjetas](/bootstrap/componentes/tarjetas/#background-and-color):

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

## Uso del ayudante para Enlaces de colores en Bootstrap

Enlaces de colores con estados de desplazamiento.

{{< content-ads/top-banner >}}

### Colores de enlace {#link-colors}

Puedes usar las clases `.link-*` para colorear enlaces. A diferencia de las [`.text-*` (clases)](/bootstrap/utilidades/colores), estas clases tienen un estado `:hover` y `:focus`. Algunos de los estilos de enlace utilizan un color de primer plano relativamente claro y solo deben usarse sobre un fondo oscuro para tener suficiente contraste.

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
**Consejo de accesibilidad:** El uso de colores para agregar significado solo proporciona una indicación visual, que no se transmitirá a los usuarios de tecnologías de asistencia como lectores de pantalla. Asegúrate de que el significado sea obvio a partir del contenido mismo (por ejemplo, el texto visible con un [_suficiente_ contraste de color](/bootstrap/comenzando#color-contrast)) o se incluye a través de medios alternativos, como texto adicional oculto con la clase `.visually-hidden`.
{{< /callout >}}

### Utilidades de enlace {#link-utilities}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.3.0</span>

Los enlaces de colores también pueden modificarse mediante nuestras [utilidades de enlaces](/bootstrap/utilidades/enlaces-e-interacciones).

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

## Uso del ayudante para Anillo de enfoque en Bootstrap

Clases de utilidad que te permiten agregar y modificar estilos de anillos de enfoque personalizados a elementos y componentes.

{{< content-ads/top-banner >}}

El asistente `.focus-ring` elimina el `outline` predeterminado en `:focus`, reemplazándolo con un `box-shadow` que se puede personalizar de forma más amplia. La nueva sombra se compone de una serie de variables CSS, heredadas del nivel `:root`, que se pueden modificar para cualquier elemento o componente.

### Ejemplo {#example}

Haz clic directamente en el siguiente enlace para ver el anillo de enfoque en acción, o en el ejemplo siguiente y luego presiona Tab.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/focus-ring/example.html" >}}
```html {filename="HTML"}
    <a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
        Anillo de enfoque personalizado
    </a>
```
{{< /demo-iframe >}}

### Personalizar {#customize}

{{< content-ads/middle-banner-1 >}}

Modifica el estilo de un anillo de enfoque con nuestras variables CSS, variables Sass, utilidades o estilos personalizados.

#### Variables CSS {#css-variables}

Modifica las variables CSS `--bs-focus-ring-*` según sea necesario para cambiar la apariencia predeterminada.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/focus-ring/css-variables-1.html" >}}
```html {filename="HTML"}
    <a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--bs-focus-ring-color: rgba(var(--bs-success-rgb), .25)">
        Anillo de enfoque verde
    </a>
```
{{< /demo-iframe >}}

`.focus-ring` establece estilos a través de variables CSS globales que se pueden sobrescribir en cualquier elemento principal, como se muestra arriba. Estas variables se generan a partir de sus contrapartes variables de Sass.

{{< content-ads/middle-banner-2 >}}

[scss/_root.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_root.scss)

```scss {filename="scss/_root.scss"}
--#{$prefix}focus-ring-width: #{$focus-ring-width};
--#{$prefix}focus-ring-opacity: #{$focus-ring-opacity};
--#{$prefix}focus-ring-color: #{$focus-ring-color};
```

Por defecto, no hay `--bs-focus-ring-x`, `--bs-focus-ring-y`, o `--bs-focus-ring-blur`, pero proporcionamos variables CSS con respaldo a los valores iniciales `0` . Modifícalos para cambiar la apariencia predeterminada.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/focus-ring/css-variables-2.html" >}}
```html {filename="HTML"}
    <a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--bs-focus-ring-x: 10px; --bs-focus-ring-y: 10px; --bs-focus-ring-blur: 4px">
        Anillo de enfoque desplazado borroso
    </a>
```
{{< /demo-iframe >}}

#### Variables Sass generales relacionadas {#sass-variables}

{{< content-ads/middle-banner-3 >}}

Personaliza las variables Sass del anillo de enfoque para modificar todo el uso de los estilos del anillo de enfoque en tu proyecto impulsado por Bootstrap.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$focus-ring-width:      .25rem;
$focus-ring-opacity:    .25;
$focus-ring-color:      rgba($primary, $focus-ring-opacity);
$focus-ring-blur:       0;
$focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color;
```

#### API de utilidades de Sass {#sass-utilities-api}

Además de `.focus-ring`, tenemos varias utilidades `.focus-ring-*` para modificar los valores predeterminados de la clase auxiliar. Modifica el color con cualquiera de nuestros [colores de tema](/bootstrap/personalizar/#theme-colors). Ten en cuenta que es posible que las variantes clara y oscura no sean visibles en todos los colores de fondo debido a la compatibilidad con el modo de color actual.

{{< content-ads/middle-banner-4 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/focus-ring/sass-utilities-api.html" >}}
```html {filename="HTML"}
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">Enfoque principal</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">Enfoque secundario</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">Enfoque en éxito</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">Enfoque en peligro</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">Enfoque en advertencia</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">Enfoque en información</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">Enfoque claro</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">Enfoque oscuro</a></p>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Las utilidades de Focus Ring se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprenda a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"focus-ring": (
    css-var: true,
    css-variable-name: focus-ring-color,
    class: focus-ring,
    values: map-loop($theme-colors-rgb, rgba-css-var, "$key", "focus-ring")
),
```

## Uso del ayudante para Enlaces de ícono en Bootstrap

Crea rápidamente hipervínculos estilizados con íconos Bootstrap u otros íconos.

{{< content-ads/top-banner >}}

El componente auxiliar de vínculo de ícono modifica nuestros estilos de vínculo predeterminados para mejorar su apariencia y alinear rápidamente cualquier combinación de ícono y texto. La alineación se establece mediante el estilo Flexbox en línea y un valor de `gap` predeterminado. Estilizamos el subrayado con un desplazamiento y color personalizados. Los iconos se ajustan automáticamente a `1em` para que coincidan mejor con el `font-size` del texto asociado.

Los enlaces de iconos suponen que se están utilizando [iconos de Bootstrap](https://icons.getbootstrap.com) , pero puedes usar cualquier icono o imagen que desees.

{{< callout type="info" emoji="" >}}
Cuando los íconos son puramente decorativos, deben ocultarse de las tecnologías de asistencia usando `aria-hidden="true"`, como lo hemos hecho en nuestros ejemplos. Para íconos que transmiten significado, proporciona una alternativa de texto apropiada agregando `role="img"` y un `aria-label="..."` apropiado a los SVG.
{{< /callout >}}

### Ejemplo {#example}

Toma un elemento `<a>` normal, agrega `.icon-link` e inserta un ícono a la izquierda o a la derecha del texto del enlace. El icono cambia de tamaño, ubicación y color automáticamente.

{{< content-ads/middle-banner-1 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/icon-link/example-1.html" >}}
```html {filename="HTML"}
    <a class="icon-link" href="#">
        <svg class="bi" aria-hidden="true">
            <use xlink:href="#box-seam"></use>
        </svg>
        Enlace de ícono
    </a>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/icon-link/example-2.html" >}}
```html {filename="HTML"}
    <a class="icon-link" href="#">
        Enlace de ícono
        <svg class="bi" aria-hidden="true">
            <use xlink:href="#arrow-right"></use>
        </svg>
    </a>
```
{{< /demo-iframe >}}

### Estilo al pasar el mouse {#style-on-hover}

Agrega `.icon-link-hover` para mover el ícono hacia la derecha al pasar el mouse.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/icon-link/style-on-hover.html" >}}
```html {filename="HTML"}
    <a class="icon-link icon-link-hover" href="#">
        Enlace de ícono
        <svg class="bi" aria-hidden="true">
            <use xlink:href="#arrow-right"></use>
        </svg>
    </a>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-2 >}}

### Personalizar {#customize}

Modifica el estilo de un enlace de icono con nuestras variables CSS de enlace, variables Sass, utilidades o estilos personalizados.

#### Variables CSS {#css-variables}

Modifica las variables CSS `--bs-link-*` y `--bs-icon-link-*` según sea necesario para cambiar la apariencia predeterminada.

Personaliza la `transform` al pasar el mouse sobrescribendo la variable CSS `--bs-icon-link-transform`:

{{< content-ads/middle-banner-3 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/icon-link/css-variables-1.html" >}}
```html {filename="HTML"}
    <a class="icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
        <svg class="bi" aria-hidden="true">
            <use xlink:href="#clipboard"></use>
        </svg>
        Enlace de ícono
    </a>
```
{{< /demo-iframe >}}

Personaliza el color sobrescribendo la variable CSS `--bs-link-*`:

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/icon-link/css-variables-2.html" >}}
```html {filename="HTML"}
    <a class="icon-link icon-link-hover" style="--bs-link-hover-color-rgb: 25, 135, 84;" href="#">
        Enlace de ícono
        <svg class="bi" aria-hidden="true">
            <use xlink:href="#arrow-right"></use>
        </svg>
    </a>
```
{{< /demo-iframe >}}

#### Variables Sass generales relacionadas {#sass-variables}

{{< content-ads/middle-banner-4 >}}

Personaliza las variables Sass del enlace de íconos para modificar todos los estilos de enlaces de íconos en tu proyecto impulsado por Bootstrap.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$icon-link-gap:               .375rem;
$icon-link-underline-offset:  .25em;
$icon-link-icon-size:         1em;
$icon-link-icon-transition:   .2s ease-in-out transform;
$icon-link-icon-transform:    translate3d(.25em, 0, 0);
```

#### API de utilidades de Sass {#sass-utilities-api}

Modifica los enlaces de los íconos con cualquiera de [nuestras utilidades de enlaces](/bootstrap/utilidades/enlaces-e-interacciones) para modificar el color del subrayado y el desplazamiento.

{{< content-ads/middle-banner-5 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/icon-link/sass-utilities-api.html" >}}
```html {filename="HTML"}
    <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="#">
        Enlace de ícono
        <svg class="bi" aria-hidden="true">
            <use xlink:href="#arrow-right"></use>
        </svg>
    </a>
```
{{< /demo-iframe >}}

## Uso del ayudante para Posición del contenido en Bootstrap

Usa estos ayudantes para configurar rápidamente la posición de un elemento.

{{< content-ads/top-banner >}}

### Fijo parte superior {#fixed-top}

Coloca un elemento en la parte superior del viewport, de borde a borde. Asegúrate de comprender las ramificaciones de la posición fija en tu proyecto; es posible que necesites agregar CSS adicional.

```html {filename="HTML"}
<div class="fixed-top">...</div>
```

### Fijo parte inferior {#fixed-bottom}

{{< content-ads/middle-banner-1 >}}

Coloca un elemento en la parte inferior del viewport, de borde a borde. Asegúrate de comprender las ramificaciones de la posición fija en tu proyecto; es posible que necesites agregar CSS adicional.

```html {filename="HTML"}
<div class="fixed-bottom">...</div>
```

### Pegajoso parte superior {#sticky-top}

Coloca un elemento en la parte superior del viewport, de borde a borde, pero solo después de pasarlo.

{{< content-ads/middle-banner-2 >}}

```html {filename="HTML"}
<div class="sticky-top">...</div>
```

### Pegajoso responsive superior {#responsive-sticky-top}

También existen variaciones responsive para la utilidad `.sticky-top`.

```html {filename="HTML"}
<div class="sticky-sm-top">Stick to the top on viewports sized SM (small) or wider</div>
<div class="sticky-md-top">Stick to the top on viewports sized MD (medium) or wider</div>
<div class="sticky-lg-top">Stick to the top on viewports sized LG (large) or wider</div>
<div class="sticky-xl-top">Stick to the top on viewports sized XL (extra-large) or wider</div>
<div class="sticky-xxl-top">Stick to the top on viewports sized XXL (extra-extra-large) or wider</div>
```

{{< content-ads/middle-banner-3 >}}

### Pegajoso parte inferior {#sticky-bottom}

Coloca un elemento en la parte inferior del viewport, de borde a borde, pero solo después de pasarlo.

```html {filename="HTML"}
<div class="sticky-bottom">...</div>
```

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-4 >}}

### Pegajoso responsive inferior {#responsive-sticky-bottom}

También existen variaciones responsive para la utilidad `.sticky-bottom`.

```html {filename="HTML"}
<div class="sticky-sm-bottom">Stick to the bottom on viewports sized SM (small) or wider</div>
<div class="sticky-md-bottom">Stick to the bottom on viewports sized MD (medium) or wider</div>
<div class="sticky-lg-bottom">Stick to the bottom on viewports sized LG (large) or wider</div>
<div class="sticky-xl-bottom">Stick to the bottom on viewports sized XL (extra-large) or wider</div>
<div class="sticky-xxl-bottom">Stick to the bottom on viewports sized XXL (extra-extra-large) or wider</div>
```

## Uso del ayudante de Ratios en Bootstrap

Usa pseudoelementos generados para hacer que un elemento mantenga la relación de aspecto que elijas. Perfecto para manejar de manera responsive incrustaciones de videos o presentaciones de diapositivas según el ancho del elemento principal.

{{< content-ads/top-banner >}}

### Acerca de {#about}

Utiliza el asistente de proporciones para administrar las proporciones de contenido externo como `<iframe>`s, `<embed>`s, `<video>`s y `<object>`s. Estos ayudantes también se pueden utilizar en cualquier elemento secundario HTML estándar (por ejemplo, un `<div>` o `<img>`). Los estilos se aplican desde la clase padre `.ratio` directamente al hijo.

Las relaciones de aspecto se declaran en un mapa Sass y se incluyen en cada clase a través de una variable CSS, que también permite [relaciones de aspecto personalizadas](#custom-ratios).

{{< callout type="info" emoji="" >}}
**¡Consejo profesional!** No necesitas `frameborder="0"` en tus `<iframe>`s, ya que lo sobrescribimos en [Reboot](/bootstrap/reboot).
{{< /callout >}}

{{< content-ads/middle-banner-1 >}}

### Ejemplo {#example}

Envuelve cualquier incrustación, como un `<iframe>`, en un elemento padre con `.ratio` y una clase de relación de aspecto. El tamaño del elemento hijo inmediato se ajusta automáticamente gracias a nuestro selector universal `.ratio > *`.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/ratio/example.html" >}}
```html {filename="HTML"}
    <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/mUxzKVrSAjs?rel=0" title="Video de YouTube"
            allowfullscreen=""></iframe>
    </div>
```
{{< /demo-iframe >}}

### Relaciones de aspecto {#aspect-ratios}

{{< content-ads/middle-banner-2 >}}

Las relaciones de aspecto se pueden personalizar con clases de modificadores. De forma predeterminada, se proporcionan las siguientes clases de relación:

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/ratio/aspect-ratios.html" >}}
```html {filename="HTML"}
    <div class="ratio ratio-1x1">
        <div>1x1</div>
    </div>
    <div class="ratio ratio-4x3">
        <div>4x3</div>
    </div>
    <div class="ratio ratio-16x9">
        <div>16x9</div>
    </div>
    <div class="ratio ratio-21x9">
        <div>21x9</div>
    </div>
```
{{< /demo-iframe >}}

### Proporciones personalizadas {#custom-ratios}

Cada clase `.ratio-*` incluye una propiedad personalizada CSS (o variable CSS) en el selector. Puedes sobrescribir esta variable CSS para crear relaciones de aspecto personalizadas sobre la marcha con algunos cálculos rápidos de tu parte.

{{< content-ads/middle-banner-3 >}}

Por ejemplo, para crear una relación de aspecto de 2x1, establece `--bs-aspect-ratio: 50%` en `.ratio`.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/ratio/custom-ratios-1.html" >}}
```html {filename="HTML"}
    <div class="ratio" style="--bs-aspect-ratio: 50%;">
        <div>2x1</div>
    </div>
```
{{< /demo-iframe >}}

Esta variable CSS facilita la modificación de la relación de aspecto entre puntos de interrupción. Lo siguiente es 4x3 para comenzar, pero cambia a un 2x1 personalizado en el punto de interrupción medio.

```scss {filename="SCSS"}
.ratio-4x3 {
    @include media-breakpoint-up(md) {
    --bs-aspect-ratio: 50%; // 2x1
    }
}
```

{{< content-ads/middle-banner-4 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/ratio/custom-ratios-2.html" >}}
```html {filename="HTML"}
    <div class="ratio ratio-4x3">
        <div>4x3, luego 2x1</div>
    </div>
```
{{< /demo-iframe >}}

### Mapas de Sass {#sass-maps}

{{< bootstrap/content-suggestion >}}

Dentro de `_variables.scss`, puedes cambiar las relaciones de aspecto que deseas usar. Aquí está nuestro mapa `$ratio-aspect-ratios` predeterminado. Modifica el mapa como quieras y vuelve a compilar tu Sass para usarlo.

{{< content-ads/middle-banner-5 >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$aspect-ratios: (
    "1x1": 100%,
    "4x3": calc(3 / 4 * 100%),
    "16x9": calc(9 / 16 * 100%),
    "21x9": calc(9 / 21 * 100%)
);
```

## Uso del ayudante de Stacks en Bootstrap

Ayudantes que se basan en nuestras utilidades flexbox para hacer que el diseño de componentes sea más rápido y más fácil que nunca.

{{< content-ads/top-banner >}}

Las pilas ofrecen un atajo para aplicar una serie de propiedades de flexbox para crear diseños rápida y fácilmente en Bootstrap. Todo el crédito por el concepto y la implementación es para el [proyecto Pylon](https://almonk.github.io/pylon) de código abierto.

{{< callout type="warning" emoji="" >}}
¡Aviso! Recientemente se agregó a Safari compatibilidad con utilidades de gap con flexbox, así que considera verificar la compatibilidad de tu navegador. El diseño de la cuadrícula no debería tener problemas. [Leer más](https://caniuse.com/flexbox-gap).
{{< /callout >}}

### Vertical {#vertical}

Usa `.vstack` para crear diseños verticales. Los elementos apilados tienen el ancho completo de forma predeterminada. Utiliza las utilidades `.gap-*` para agregar espacio entre elementos.

{{< content-ads/middle-banner-1 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stacks/vertical.html" >}}
```html {filename="HTML"}
    <div class="vstack gap-3">
        <div class="p-2">Primer elemento</div>
        <div class="p-2">Segundo elemento</div>
        <div class="p-2">Tercer elemento</div>
    </div>
```
{{< /demo-iframe >}}

### Horizontal {#horizontal}

Usa `.hstack` para diseños horizontales. Los elementos apilados están centrados verticalmente de forma predeterminada y solo ocupan el ancho necesario. Utiliza las utilidades `.gap-*` para agregar espacio entre elementos.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stacks/horizontal-1.html" >}}
```html {filename="HTML"}
    <div class="hstack gap-3">
        <div class="p-2">Primer elemento</div>
        <div class="p-2">Segundo elemento</div>
        <div class="p-2">Tercer elemento</div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-2 >}}

Usar utilidades de margen horizontal como `.ms-auto` como espaciadores:

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stacks/horizontal-2.html" >}}
```html {filename="HTML"}
    <div class="hstack gap-3">
        <div class="p-2">Primer elemento</div>
        <div class="p-2 ms-auto">Segundo elemento</div>
        <div class="p-2">Tercer elemento</div>
    </div>
```
{{< /demo-iframe >}}

Y con [reglas verticales](/bootstrap/helpers):

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stacks/horizontal-3.html" >}}
```html {filename="HTML"}
    <div class="hstack gap-3">
        <div class="p-2">Primer elemento</div>
        <div class="p-2 ms-auto">Segundo elemento</div>
        <div class="vr"></div>
        <div class="p-2">Tercer elemento</div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-3 >}}

### Ejemplos {#examples}

Usa `.vstack` para apilar botones y otros elementos:

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stacks/examples-1.html" >}}
```html {filename="HTML"}
    <div class="vstack gap-2 col-md-5 mx-auto">
        <button type="button" class="btn btn-secondary">Guardar cambios</button>
        <button type="button" class="btn btn-outline-secondary">Cancelar</button>
    </div>
```
{{< /demo-iframe >}}

Crea un formulario en línea con `.hstack`:

{{< content-ads/middle-banner-4 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stacks/examples-2.html" >}}
```html {filename="HTML"}
    <div class="hstack gap-3">
        <input class="form-control me-auto" type="text" placeholder="Agrega tu elemento aquí..."
            aria-label="Agrega tu elemento aquí...">
        <button type="button" class="btn btn-secondary">Enviar</button>
        <div class="vr"></div>
        <button type="button" class="btn btn-outline-danger">Restablecer</button>
    </div>
```
{{< /demo-iframe >}}

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

[scss/helpers/_stacks.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/helpers/_stacks.scss)

{{< content-ads/middle-banner-5 >}}

```scss {filename="scss/helpers/_stacks.scss"}
.hstack {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: stretch;
}

.vstack {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-self: stretch;
}
```

## Uso del ayudante para Enlaces estirados en Bootstrap

Haz que se pueda hacer clic en cualquier elemento HTML o componente Bootstrap "estirando" un enlace anidado a través de CSS.

{{< content-ads/top-banner >}}

Agrega `.stretched-link` a un enlace para que sea [bloque contenedor](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) en el que se puede hacer clic mediante un pseudoelemento `::after`. En la mayoría de los casos, esto significa que se puede hacer clic en un elemento con `position: relative;` que contiene un enlace con la clase `.stretched-link`. Ten en cuenta [cómo funciona `position` (CSS)](https://www.w3.org/TR/CSS21/visuren.html#propdef-position), `.stretched-link` no se puede mezclar con la mayoría de los elementos de la tabla.

Las tarjetas tienen `position: relative` de forma predeterminada en Bootstrap, por lo que en este caso puedes agregar de forma segura la clase `.stretched-link` a un enlace en la tarjeta sin ningún otro cambio de HTML.

No se recomiendan múltiples enlaces y objetivos táctiles con enlaces extendidos. Sin embargo, algunos estilos de `position` y `z-index` pueden ayudar si fuera necesario.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stretched-link/index-1.html" >}}
```html {filename="HTML"}
    <div class="card" style="width: 18rem;">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
            aria-label="Cap de imagen de tarjeta" focusable="false" preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg">
            <title>Cap de imagen de tarjeta</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <div class="card-body">
            <h5 class="card-title">Tarjeta con enlace estirado</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
            <a href="#" class="btn btn-primary stretched-link">Ve a algún lado</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-1 >}}

La mayoría de los componentes personalizados no tienen `position: relative` de forma predeterminada, por lo que debemos agregar `.position-relative` aquí para evitar que el enlace se extienda fuera del elemento padre.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stretched-link/index-2.html" >}}
```html {filename="HTML"}
    <div class="d-flex position-relative">
        <svg class="bd-placeholder-img flex-shrink-0 me-3" width="144" height="144" role="img"
            aria-label="Imagen de marcador de posición genérico" focusable="false"
            preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <title>Imagen de marcador de posición genérico</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <div>
            <h5 class="mt-0">Componente personalizado con enlace estirado</h5>
            <p>Este es un contenido de marcador de posición para el componente personalizado. Su objetivo es imitar
                cómo se vería algún contenido del mundo real, y lo estamos usando aquí para darle al componente un
                poco de cuerpo y tamaño.</p>
            <a href="#" class="stretched-link">Ve a algún lado</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stretched-link/index-3.html" >}}
```html {filename="HTML"}
    <div class="row g-0 bg-body-secondary position-relative">
        <div class="col-md-6 mb-md-0 p-md-4">
            <svg class="bd-placeholder-img w-100" width="100%" height="200" role="img"
                aria-label="Imagen de marcador de posición genérico" focusable="false"
                preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <title>Imagen de marcador de posición genérico</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>
        </div>
        <div class="col-md-6 p-4 ps-md-0">
            <h5 class="mt-0">Columnas con enlace estirado</h5>
            <p>Otra instancia de contenido de marcador de posición para este otro componente personalizado. Su
                objetivo es imitar cómo se vería algún contenido del mundo real, y lo estamos usando aquí para darle
                al componente un poco de cuerpo y tamaño.</p>
            <a href="#" class="stretched-link">Ve a algún lado</a>
        </div>
    </div>
```
{{< /demo-iframe >}}

### Identificar el bloque contenedor {#identifying-the-containing-block}

{{< content-ads/middle-banner-2 >}}

Si el enlace extendido no parece funcionar, el [bloque contenedor](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block) probablemente será la causa. Las siguientes propiedades CSS convertirán a un elemento en el bloque contenedor:

{{< bootstrap/content-suggestion >}}

* Un valor de `position` distinto de `static`
* Un valor de `transform` o `perspective` distinto de `none`
* Un valor `will-change` de `transform` o `perspective`
* Un valor de `filter` distinto de `none` o un valor `will-change` de `filter` (sólo funciona en Firefox)

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stretched-link/identifying-the-containing-block.html" >}}
```html {filename="HTML"}
    <div class="card" style="width: 18rem;">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
            aria-label="Cap de imagen de tarjeta" focusable="false" preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg">
            <title>Cap de imagen de tarjeta</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>
        <div class="card-body">
            <h5 class="card-title">Tarjeta con enlaces estirados</h5>
            <p class="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
                mayor parte del contenido de la tarjeta.</p>
            <p class="card-text">
                <a href="#" class="stretched-link text-danger" style="position: relative;">El enlace extendido no
                    funcionará aquí, porque <code>position: relative</code> se agrega al enlace</a>
            </p>
            <p class="card-text bg-body-tertiary" style="transform: rotate(0);">
                Este <a href="#" class="text-warning stretched-link">enlace extendido</a> solo se distribuirá en la
                etiqueta <code>p</code>, porque se le aplica una transformación.
            </p>
        </div>
    </div>
```
{{< /demo-iframe >}}

## Uso del ayudante para Truncamiento de texto en Bootstrap

Truncar largas cadenas de texto con puntos suspensivos.

{{< content-ads/top-banner >}}

Para contenido más extenso, puedes agregar una clase `.text-truncate` para truncar el texto con puntos suspensivos. **Requiere `display: inline-block` o `display: block`.**

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/text-truncation/index.html" >}}
```html {filename="HTML"}
    <!-- Block level -->
    <div class="row">
        <div class="col-2 text-truncate">
            Este texto es bastante largo y se truncará una vez mostrado.
        </div>
    </div>

    <!-- Inline level -->
    <span class="d-inline-block text-truncate" style="max-width: 150px;">
        Este texto es bastante largo y se truncará una vez mostrado.
    </span>
```
{{< /demo-iframe >}}

## Uso del ayudante de Regla vertical en Bootstrap

Utiliza el asistente de regla vertical personalizado para crear divisores verticales como el elemento `<hr>`.

{{< content-ads/top-banner >}}

### Cómo funciona {#how-it-works}

Las reglas verticales están inspiradas en el elemento `<hr>` , lo que te permite crear divisores verticales en diseños comunes. Tienen el mismo estilo que los elementos `<hr>`:

* Miden `1px` de ancho
* Tienen `min-height` de `1em`
* Su color se establece mediante `currentColor` y `opacity`

Personalízalos con estilos adicionales según sea necesario.

{{< content-ads/middle-banner-1 >}}

### Ejemplo {#example}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/vertical-rule/example-1.html" >}}
```html {filename="HTML"}
    <div class="vr"></div>
```
{{< /demo-iframe >}}

Las reglas verticales escalan su altura en diseños flex:

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/vertical-rule/example-2.html" >}}
```html {filename="HTML"}
    <div class="d-flex" style="height: 200px;">
        <div class="vr"></div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-2 >}}

### Con pilas {#with-stacks}

También se pueden usar en [pilas](/bootstrap/helpers):

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/vertical-rule/with-stacks.html" >}}
```html {filename="HTML"}
    <div class="hstack gap-3">
        <div class="p-2">Primer elemento</div>
        <div class="p-2 ms-auto">Segundo elemento</div>
        <div class="vr"></div>
        <div class="p-2">Tercer elemento</div>
    </div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-3 >}}

### Personalización del CSS {#css}

#### Variables Sass generales relacionadas {#sass-variables}

Personaliza la variable Sass de regla vertical para cambiar su ancho.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

{{< content-ads/middle-banner-4 >}}

```scss {filename="scss/_variables.scss"}
$vr-border-width:             var(--#{$prefix}border-width);
```

## Uso del ayudante para contenido visualmente oculto en Bootstrap

Usa estos ayudantes para ocultar elementos visualmente pero mantenlos accesibles para las tecnologías de asistencia.

{{< content-ads/top-banner >}}

Oculta visualmente un elemento y al mismo tiempo permite que esté expuesto a tecnologías de asistencia (como lectores de pantalla) con `.visually-hidden`. Utiliza `.visually-hidden-focusable` para ocultar visualmente un elemento de forma predeterminada, pero para mostrarlo cuando está enfocado (por ejemplo, por un usuario que solo usa el teclado). `.visually-hidden-focusable` también se puede aplicar a un contenedor; gracias a `:focus-within`, el contenedor se mostrará cuando cualquier elemento hijo del contenedor reciba el foco.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/visually-hidden/index.html" >}}
```html {filename="HTML"}
    <h2 class="visually-hidden">Título para lectores de pantalla</h2>
    <a class="visually-hidden-focusable" href="#content">Saltar al contenido principal</a>
    <div class="visually-hidden-focusable">Un contenedor con un <a href="#">elemento enfocable</a>.</div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Tanto `visually-hidden` como `visually-hidden-focusable` también se pueden usar como mixins.

{{< content-ads/middle-banner-1 >}}

```scss {filename="SCSS"}
// Usage as a mixin

.visually-hidden-title {
  @include visually-hidden;
}

.skip-navigation {
  @include visually-hidden-focusable;
}
```
