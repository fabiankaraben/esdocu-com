---
weight: 3
linkTitle: Insignias y breadcrumbs
title: El componente de Insignia de Bootstrap · Bootstrap en Español v5.3
description: Documentación y ejemplos para insignias, nuestro componente de etiquetado y recuento.
---

# Componentes Badge y Breadcrumbs en Bootstrap

<TopBanner />

## El componente de Insignia de Bootstrap

Documentación y ejemplos para insignias, nuestro componente de etiquetado y recuento.

### Ejemplos del componente Insignia {#examples}

Las insignias se escalan para que coincidan con el tamaño del elemento padre inmediato usando el tamaño de fuente relativo y las unidades `em`. A partir de la versión 5, las insignias ya no tienen estilos focus o hover para los enlaces.

#### Títulos {#headings}

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

#### Botones {#buttons}

Las insignias se pueden usar como parte de enlaces o botones para proporcionar un contador.

{{< demo-iframe path="/demos/bootstrap/5.3/components/badge/buttons.html" >}}
```html {filename="HTML"}
    <button type="button" class="btn btn-primary">
        Notificaciones <span class="badge text-bg-secondary">4</span>
    </button>
```
{{< /demo-iframe >}}

Ten en cuenta que, dependiendo de cómo se utilicen, las insignias pueden resultar confusas para los usuarios de lectores de pantalla y tecnologías de asistencia similares. Si bien el estilo de las insignias proporciona una pista visual sobre su propósito, a estos usuarios simplemente se les presentará el contenido de la insignia. Dependiendo de la situación específica, estas insignias pueden parecer palabras o números adicionales aleatorios al final de una oración, enlace o botón.

A menos que el contexto sea claro (como en el ejemplo de “Notificaciones”, donde se entiende que el “4” es el número de notificaciones), considera incluir contexto adicional con una pieza de información adicional visualmente oculta.

#### Posicionado {#positioned}

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

También puedes reemplazar la clase `.badge` con algunas utilidades más sin contar para un indicador más genérico.

<MiddleBannerOne />

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

### Colores de fondo del componente {#background-colors}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Establece un `background-color` con un `color` de primer plano contrastante con [nuestros `.text-bg-{color}` ayudantes](/bootstrap/helpers). Anteriormente era necesario emparejar manualmente tu elección de utilidades para diseñar [`.text-{color}`](/bootstrap/utilidades/colores) y [`.bg-{color}`](/bootstrap/utilidades/background), que aún puedes usar si lo prefieres.

{{< bootstrap/content-suggestion >}}

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
**Consejo de accesibilidad:** El uso de colores para agregar significado solo proporciona una indicación visual, que no se transmitirá a los usuarios de tecnologías de asistencia como lectores de pantalla. Asegúrate de que el significado sea obvio a partir del contenido mismo (por ejemplo, el texto visible con un [_suficiente_ contraste de color](/bootstrap/comenzando#color-contrast)) o se incluye a través de medios alternativos, como texto adicional oculto con la clase `.visually-hidden`.
{{< /callout >}}

### Insignias de pastillas {#pill-badges}

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

### Personalización del CSS del componente {#css}

#### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Como parte del enfoque de variables CSS en evolución de Bootstrap, las insignias ahora usan variables CSS locales en `.badge` para una personalización mejorada en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_badge.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_badge.scss)

<MiddleBannerTwo />

```scss {filename="scss/_badge.scss"}
--#{$prefix}badge-padding-x: #{$badge-padding-x};
--#{$prefix}badge-padding-y: #{$badge-padding-y};
@include rfs($badge-font-size, --#{$prefix}badge-font-size);
--#{$prefix}badge-font-weight: #{$badge-font-weight};
--#{$prefix}badge-color: #{$badge-color};
--#{$prefix}badge-border-radius: #{$badge-border-radius};
```

#### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$badge-font-size:                   .75em;
$badge-font-weight:                 $font-weight-bold;
$badge-color:                       $white;
$badge-padding-y:                   .35em;
$badge-padding-x:                   .65em;
$badge-border-radius:               var(--#{$prefix}border-radius);
```

## El componente Breadcrumb de Bootstrap

Indica la ubicación de la página actual dentro de una jerarquía de navegación que agrega automáticamente separadores mediante CSS.

### Ejemplo del componente Breadcrumb {#example}

Usa una lista ordenada o desordenada con elementos de lista vinculados para crear una ruta de navegación con un estilo mínimo. Utiliza nuestras utilidades para agregar estilos adicionales según lo desees.

{{< demo-iframe path="/demos/bootstrap/5.3/components/breadcrumb/example.html" >}}
```html {filename="HTML"}
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Inicio</li>
        </ol>
    </nav>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Inicio</a></li>
            <li class="breadcrumb-item active" aria-current="page">Biblioteca</li>
        </ol>
    </nav>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Inicio</a></li>
            <li class="breadcrumb-item"><a href="#">Biblioteca</a></li>
            <li class="breadcrumb-item active" aria-current="page">Datos</li>
        </ol>
    </nav>
```
{{< /demo-iframe >}}

### Divisores entre elementos del Breadcrumb {#dividers}

Los divisores se agregan automáticamente en CSS a través de [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) y [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content). Se pueden cambiar modificando una propiedad personalizada CSS local `--bs-breadcrumb-divider`, o mediante la variable Sass `$breadcrumb-divider` y `$breadcrumb-divider-flipped` para su contraparte RTL, si es necesario. Utilizamos de forma predeterminada nuestra variable Sass, que se establece como alternativa a la propiedad personalizada. De esta manera, obtienes un divisor global que puedes sobrescribir sin tener que volver a compilar CSS en ningún momento.

{{< demo-iframe path="/demos/bootstrap/5.3/components/breadcrumb/dividers-1.html" >}}
```html {filename="HTML"}
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Inicio</a></li>
            <li class="breadcrumb-item active" aria-current="page">Biblioteca</li>
        </ol>
    </nav>
```
{{< /demo-iframe >}}

Al modificar a través de Sass, se requiere la función [quote](https://sass-lang.com/documentation/modules/string#quote) para generar las comillas alrededor de una cadena. Por ejemplo, usando `>` como divisor, puedes usar esto:

```scss {filename="SCSS"}
$breadcrumb-divider: quote(">");
```

También es posible usar un **icono SVG incrustado**. Aplícalo a través de nuestra propiedad personalizada CSS o usa la variable Sass.

<MiddleBannerThree />

{{< callout type="info" emoji="" >}}
**El SVG incorporado requiere caracteres con escape adecuado.** Algunos caracteres reservados, como `<`, `>` y `#`, deben estar codificado en URL o con formato de escape. Hacemos esto con la variable `$breadcrumb-divider` usando nuestro [`escape-svg()` (función Sass)](/bootstrap/personalizar/#escape-svg). Al personalizar la variable CSS, debes manejarlo tú mismo. Lee las [explicaciones de Kevin Weber sobre CodePen](https://codepen.io/kevinweber/pen/dXWoRw) para obtener más información.
{{< /callout >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/breadcrumb/dividers-2.html" >}}
```html {filename="HTML"}
    <nav style="--bs-breadcrumb-divider: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&quot;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Inicio</a></li>
            <li class="breadcrumb-item active" aria-current="page">Biblioteca</li>
        </ol>
    </nav>
```
{{< /demo-iframe >}}

```scss {filename="SCSS"}
$breadcrumb-divider: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'><path d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='#{$breadcrumb-divider-color}'/></svg>");
```

También puedes eliminar la configuración del divisor `--bs-breadcrumb-divider: '';` (las cadenas vacías en las propiedades personalizadas de CSS cuentan como un valor), o estableciendo la variable Sass en `$breadcrumb-divider: none;`.

{{< demo-iframe path="/demos/bootstrap/5.3/components/breadcrumb/dividers-3.html" >}}
```html {filename="HTML"}
    <nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Inicio</a></li>
            <li class="breadcrumb-item active" aria-current="page">Biblioteca</li>
        </ol>
    </nav>
```
{{< /demo-iframe >}}

```scss {filename="SCSS"}
$breadcrumb-divider: none;
```

### Accesibilidad del componente Breadcrumb {#accessibility}

Dado que las breadcrumbs proporcionan navegación, es una buena idea agregar una etiqueta significativa como `aria-label="breadcrumb"` para describir el tipo de navegación proporcionada en el elemento `<nav>`, además de aplicar un `aria-current="page"` al último elemento del conjunto para indicar que representa la página actual.

Para obtener más información, consulta la [Guía de prácticas de creación de breadcrumbs de ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb).

### Personalización del CSS del componente {#css}

{{< bootstrap/content-suggestion >}}

#### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Como parte del enfoque de variables CSS en evolución de Bootstrap, las rutas de navegación ahora usan variables CSS locales en `.breadcrumb` para una personalización mejorada en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_breadcrumb.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_breadcrumb.scss)

<MiddleBannerFour />

```scss {filename="scss/_breadcrumb.scss"}
--#{$prefix}breadcrumb-padding-x: #{$breadcrumb-padding-x};
--#{$prefix}breadcrumb-padding-y: #{$breadcrumb-padding-y};
--#{$prefix}breadcrumb-margin-bottom: #{$breadcrumb-margin-bottom};
@include rfs($breadcrumb-font-size, --#{$prefix}breadcrumb-font-size);
--#{$prefix}breadcrumb-bg: #{$breadcrumb-bg};
--#{$prefix}breadcrumb-border-radius: #{$breadcrumb-border-radius};
--#{$prefix}breadcrumb-divider-color: #{$breadcrumb-divider-color};
--#{$prefix}breadcrumb-item-padding-x: #{$breadcrumb-item-padding-x};
--#{$prefix}breadcrumb-item-active-color: #{$breadcrumb-active-color};
```

#### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$breadcrumb-font-size:              null;
$breadcrumb-padding-y:              0;
$breadcrumb-padding-x:              0;
$breadcrumb-item-padding-x:         .5rem;
$breadcrumb-margin-bottom:          1rem;
$breadcrumb-bg:                     null;
$breadcrumb-divider-color:          var(--#{$prefix}secondary-color);
$breadcrumb-active-color:           var(--#{$prefix}secondary-color);
$breadcrumb-divider:                quote("/");
$breadcrumb-divider-flipped:        $breadcrumb-divider;
$breadcrumb-border-radius:          null;
```

<BottomBanner />
