---
weight: 7
linkTitle: Uso de Reboot en Boostrap
title: Uso de la biblioteca Reboot en Bootstrap · Bootstrap en Español v5.3
description: Reboot, una colección de cambios de CSS específicos de elementos en un solo archivo, el inicio de Bootstrap para proporcionar una línea de base elegante, consistente y simple sobre la cual construir.
---

# Uso de la biblioteca Reboot en Bootstrap

Reboot, una colección de cambios de CSS específicos de elementos en un solo archivo, el inicio de Bootstrap para proporcionar una línea de base elegante, consistente y simple sobre la cual construir.

{{< content-ads/top-banner >}}

Reboot se basa en Normalize, proporcionando muchos elementos HTML con estilos un tanto obstinados usando solo selectores de elementos. El estilo adicional se realiza solo con clases. Por ejemplo, reiniciamos algunos estilos `<table>` para obtener una línea base más simple y luego proporcionamos `.table`, `.table-bordered` y más.

Aquí están nuestras pautas y razones para elegir qué sobrescribir en Reboot:

* Actualiza algunos valores predeterminados del navegador para usar `rem`s en lugar de `em`s para lograr un espaciado escalable entre componentes.
* Evita `margin-top`. Los márgenes verticales pueden colapsar y producir resultados inesperados. Sin embargo, lo más importante es que una única dirección de `margin` es un modelo mental más simple.
* Para facilitar el escalado entre tamaños de dispositivos, los elementos de bloque deben usar `rem`s para los `margin`s.
* Mantén las declaraciones de propiedades relacionadas con `font` al mínimo, usando `inherit` siempre que sea posible.

## Variables CSS {#css-variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Con v5.1.1, estandarizamos nuestros `@import` requeridos en todos nuestros paquetes de CSS (incluido `bootstrap.css`, `bootstrap-reboot.css` y `bootstrap-grid.css`) para incluir `_root.scss`. Esto agrega variables CSS de nivel `:root` a todos los paquetes, independientemente de cuántas de ellas se utilicen en ese paquete. En última instancia, Bootstrap 5 seguirá viendo más [variables CSS](/bootstrap/personalizar) agregadas con el tiempo, para proporcionar más personalización en tiempo real sin la necesidad de siempre recompilar Sass. Nuestro enfoque es tomar nuestras variables Sass fuente y transformarlas en variables CSS. De esa manera, incluso si no usas variables CSS, aún tienes todo el poder de Sass. **Esto todavía está en progreso y llevará tiempo implementarlo por completo.**

Por ejemplo, considera estas variables CSS `:root` para estilos `<body>` comunes:

[scss/_root.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_root.scss)

```scss {filename="scss/_root.scss"}
@if $font-size-root != null {
    --#{$prefix}root-font-size: #{$font-size-root};
}
--#{$prefix}body-font-family: #{inspect($font-family-base)};
@include rfs($font-size-base, --#{$prefix}body-font-size);
--#{$prefix}body-font-weight: #{$font-weight-base};
--#{$prefix}body-line-height: #{$line-height-base};
@if $body-text-align != null {
    --#{$prefix}body-text-align: #{$body-text-align};
}

--#{$prefix}body-color: #{$body-color};
--#{$prefix}body-color-rgb: #{to-rgb($body-color)};
--#{$prefix}body-bg: #{$body-bg};
--#{$prefix}body-bg-rgb: #{to-rgb($body-bg)};

--#{$prefix}emphasis-color: #{$body-emphasis-color};
--#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color)};

--#{$prefix}secondary-color: #{$body-secondary-color};
--#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color)};
--#{$prefix}secondary-bg: #{$body-secondary-bg};
--#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg)};

--#{$prefix}tertiary-color: #{$body-tertiary-color};
--#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color)};
--#{$prefix}tertiary-bg: #{$body-tertiary-bg};
--#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg)};
```

En la práctica, esas variables se aplican en Reboot así:

[scss/_reboot.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_reboot.scss)

```scss {filename="scss/_reboot.scss"}
body {
    margin: 0; // 1
    font-family: var(--#{$prefix}body-font-family);
    @include font-size(var(--#{$prefix}body-font-size));
    font-weight: var(--#{$prefix}body-font-weight);
    line-height: var(--#{$prefix}body-line-height);
    color: var(--#{$prefix}body-color);
    text-align: var(--#{$prefix}body-text-align);
    background-color: var(--#{$prefix}body-bg); // 2
    -webkit-text-size-adjust: 100%; // 3
    -webkit-tap-highlight-color: rgba($black, 0); // 4
}
```

Lo cual te permite realizar personalizaciones en tiempo real como quieras:

```html {filename="HTML"}
<body style="--bs-body-color: #333;">
    <!-- ... -->
</body>
```

## Valores predeterminados de página {#page-defaults}

Los elementos `<html>` y `<body>` se actualizan para proporcionar mejores valores predeterminados en toda la página. Más específicamente:

* El `box-sizing` se establece globalmente en cada elemento, incluidos `*::before` y `*::after`, a `border-box`. Esto garantiza que nunca se exceda el ancho declarado del elemento debido al relleno o al borde.
    * No se declara ningún `font-size` base en el `<html>`, pero se supone `16px` (el valor predeterminado del navegador). `font-size: 1rem` se aplica en `<body>` para facilitar el escalado de tipografía mediante media queries, respetando al mismo tiempo las preferencias del usuario y garantizando un enfoque más accesible. Este valor predeterminado del navegador se puede sobrescribir modificando la variable `$font-size-root`.
* El `<body>` también establece un `font-family`global, `font-weight`, `line-height` y `color`. Esto lo heredan más adelante algunos elementos del formulario para evitar inconsistencias en las fuentes.
* Por seguridad, el `<body>` tiene un `background-color` declarado, por defecto `#fff`.

## Pila de fuentes nativas {#native-font-stack}

Bootstrap utiliza una “pila de fuentes nativa” o una “pila de fuentes del sistema” para una representación óptima del texto en cada dispositivo y sistema operativo. Estas fuentes del sistema se han diseñado específicamente teniendo en cuenta los dispositivos actuales, con representación mejorada en las pantallas, compatibilidad con fuentes variables y más. Lee más sobre [pilas de fuentes nativas en esta _Smashing Magazine_ (artículo)](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide).

{{< content-ads/middle-banner-1 >}}

```css {filename="SCSS"}
$font-family-sans-serif:
    // Cross-platform generic font family (default user interface font)
    system-ui,
    // Safari for macOS and iOS (San Francisco)
    -apple-system,
    // Windows
    "Segoe UI",
    // Android
    Roboto,
    // older macOS and iOS
    "Helvetica Neue"
    // Linux
    "Noto Sans",
    "Liberation Sans",
    // Basic web fallback
    Arial,
    // Sans serif fallback
    sans-serif,
    // Emoji fonts
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
```

Ten en cuenta que debido a que la pila de fuentes incluye fuentes emoji, muchos símbolos comunes/caracteres dingbat Unicode se representarán como pictografías multicolores. Su apariencia variará, dependiendo del estilo utilizado en la fuente emoji nativa del navegador/plataforma, y no se verán afectados por ningún estilo de `color` de CSS.

Esta `font-family` se aplica al `<body>` y se hereda automáticamente de forma global en Bootstrap. Para cambiar la `font-family` global, actualiza `$font-family-base` y vuelve a compilar Bootstrap.

{{< bootstrap/content-suggestion >}}

## Títulos {#headings}

Todos los elementos de encabezado—`<h1>`—`<h6>` tienen su `margin-top` eliminado, `margin-bottom: .5rem` establecido y `line-height` ajustado. Aunque los encabezados heredan su `color` de forma predeterminada, también puedes sobrescribirlo mediante la variable CSS opcional, `--bs-heading-color`.

| Título      | Ejemplo                                                                            |
| ----------- | ---------------------------------------------------------------------------------- |
| `<h1></h1>` | <span style="font-size: 36.52px; font-weight: 500">h1. Título de Bootstrap</span>  |
| `<h2></h2>` | <span style="font-size: 29.912px; font-weight: 500">h2. Título de Bootstrap</span> |
| `<h3></h3>` | <span style="font-size: 26.608px; font-weight: 500">h3. Título de Bootstrap</span> |
| `<h4></h4>` | <span style="font-size: 23.304px; font-weight: 500">h4. Título de Bootstrap</span> |
| `<h5></h5>` | <span style="font-size: 20px; font-weight: 500">h5. Título de Bootstrap</span>     |
| `<h6></h6>` | <span style="font-size: 19.2px; font-weight: 500">h6. Título de Bootstrap</span>   |

## Párrafos {#paragraphs}

Todos los elementos `<p>` tienen su `margin-top` eliminado y `margin-bottom: 1rem` configurado para facilitar el espaciado.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/paragraphs.html" >}}
```html {filename="HTML"}
    <p>Este es un párrafo de ejemplo.</p>
```
{{< /demo-iframe >}}

## Enlaces {#links}

Los enlaces tienen un `color` predeterminado y se aplica un subrayado. Si bien los enlaces cambian al `:hover`, no cambian en función de si alguien `:visited` el enlace. Tampoco reciben estilos `:focus` especiales.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/links-1.html" >}}
```html {filename="HTML"}
    <a href="#">Esto es un enlace de ejemplo</a>
```
{{< /demo-iframe >}}

A partir de v5.3.x, el enlace `color` se configura usando `rgba()` y la nueva variables CSS `-rgb`, que permiten una fácil personalización de la opacidad del color del enlace. Cambia la opacidad del color del enlace con la variable CSS `--bs-link-opacity`:

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/links-2.html" >}}
```html {filename="HTML"}
    <a href="#" style="--bs-link-opacity: .5">Esto es un enlace de ejemplo</a>
```
{{< /demo-iframe >}}

Los enlaces de marcador de posición (aquellos sin un `href`) están orientados con un selector más específico y tienen su `color` y `text-decoration` restablecidos a sus valores predeterminados.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/links-3.html" >}}
```html {filename="HTML"}
    <a>Esto es un enlace de marcador de posición</a>
```
{{< /demo-iframe >}}

## Reglas horizontales {#horizontal-rules}

{{< content-ads/middle-banner-2 >}}

El elemento `<hr>` ha sido simplificado. De manera similar a los valores predeterminados del navegador, los `<hr>` tienen estilo mediante `border-top`, tienen una `opacity: .25` y heredan automáticamente su `border-color` a través de `color`, incluso cuando `color` se establece a través del padre. Se pueden modificar con utilidades de texto, bordes y opacidad.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/horizontal-rules.html" >}}
```html {filename="HTML"}
    <hr>
    
    <div class="text-success">
      <hr>
    </div>
    
    <hr class="border border-danger border-2 opacity-50">
    <hr class="border border-primary border-3 opacity-75">
```
{{< /demo-iframe >}}

## Listas {#lists}

Todas las listas—`<ul>`, `<ol>` y `<dl>`—eliminan el `margin-top` y el `margin-bottom: 1rem`. Las listas anidadas no tienen `margin-bottom`. También hemos restablecido el `padding-left` en los elementos `<ul>` y `<ol>`.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/lists-1.html" >}}
```html {filename="HTML"}
<ul>
    <li>A todas las listas se les elimina el margen superior.</li>
    <li>Y su margen inferior se normalizó</li>
    <li>Las listas anidadas no tienen margen inferior
        <ul>
            <li>De esta manera tienen una apariencia más uniforme</li>
            <li>Particularmente cuando va seguido de más elementos de la lista</li>
        </ul>
    </li>
    <li>El padding izquierdo también se ha restablecido</li>
</ul>
<ol>
    <li>Aquí tienes una lista ordenada</li>
    <li>Con algunos elementos de la lista</li>
    <li>Tiene el mismo aspecto general.</li>
    <li>Como la lista desordenada anterior</li>
</ol>
```
{{< /demo-iframe >}}

Para un estilo más simple, una jerarquía clara y un mejor espaciado, las listas de descripciones tienen `margin`s actualizados. `<dd>` restablece `margin-left` a `0` y agrega `margin-bottom: .5rem`. Los `<dt>` están en **negrita**.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/lists-2.html" >}}
```html {filename="HTML"}
    <dl>
        <dt>Listas de descripción</dt>
        <dd>Una lista de descripciones es perfecta para definir términos.</dd>
        <dt>Término</dt>
        <dd>Definición del término.</dd>
        <dd>Una segunda definición para el mismo término.</dd>
        <dt>Otro término</dt>
        <dd>Definición de este otro término.</dd>
    </dl>
```
{{< /demo-iframe >}}

## Código en línea {#inline-code}

Ajusta fragmentos de código en línea con `<code>`. Asegúrate de evitar los corchetes angulares HTML.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/inline-code.html" >}}
```html {filename="HTML"}
    Por ejemplo, <code>&lt;section&gt;</code> debe incluirse como en línea.
```
{{< /demo-iframe >}}

## Bloques de código {#code-blocks}

Usa `<pre>`s para varias líneas de código. Una vez más, asegúrate de omitir los corchetes angulares en el código para una representación adecuada. El elemento `<pre>` se restablece para eliminar su `margin-top` y usar unidades `rem` para su `margin-bottom`.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/code-blocks.html" >}}
```html {filename="HTML"}
    <pre><code>&lt;p&gt;Texto de muestra aquí...&lt;/p&gt;
    &lt;p&gt;Y otra línea de texto de muestra aquí...&lt;/p&gt;
    </code></pre>
```
{{< /demo-iframe >}}

## Variables {#variables}

Para indicar variables usa la etiqueta `<var>`.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/variables.html" >}}
```html {filename="HTML"}
    <var>y</var> = <var>m</var><var>x</var> + <var>b</var>
```
{{< /demo-iframe >}}

## Entrada del usuario {#user-input}

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-3 >}}

Utiliza `<kbd>` para indicar la entrada que normalmente se ingresa mediante el teclado.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/user-input.html" >}}
```html {filename="HTML"}
    Para cambiar de directorio, escribe <kbd>cd</kbd> seguido del nombre del directorio.<br>
    Para editar la configuración, presione <kbd><kbd>Ctrl</kbd> + <kbd>,</kbd></kbd>
```
{{< /demo-iframe >}}

## Salida de muestra {#sample-output}

Para indicar resultados de muestra de un programa usa la etiqueta `<samp>`.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/sample-output.html" >}}
```html {filename="HTML"}
    <samp>Este texto debe ser tratado como un resultado de muestra de un programa de computadora.</samp>
```
{{< /demo-iframe >}}

## Tablas {#tables}

Las tablas se ajustan ligeramente para diseñar `<caption>`, contraer bordes y garantizar una `text-align` consistente en todas partes. Los cambios adicionales para bordes, relleno y más vienen [con `.table` (clase)](/bootstrap/tablas) .

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/tables.html" >}}
```html {filename="HTML"}
<table>
    <caption>
        Esta es una tabla de ejemplo, y este es su título para describir el contenido.
    </caption>
    <thead>
        <tr>
            <th>Encabezado de tabla</th>
            <th>Encabezado de tabla</th>
            <th>Encabezado de tabla</th>
            <th>Encabezado de tabla</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Celda de tabla</td>
            <td>Celda de tabla</td>
            <td>Celda de tabla</td>
            <td>Celda de tabla</td>
        </tr>
        <tr>
            <td>Celda de tabla</td>
            <td>Celda de tabla</td>
            <td>Celda de tabla</td>
            <td>Celda de tabla</td>
        </tr>
        <tr>
            <td>Celda de tabla</td>
            <td>Celda de tabla</td>
            <td>Celda de tabla</td>
            <td>Celda de tabla</td>
        </tr>
    </tbody>
</table>
```
{{< /demo-iframe >}}

## Formularios {#forms}

Se han reiniciado varios elementos del formulario para estilos base más simples. Éstos son algunos de los cambios más notables:

* `<fieldset>` no tienen bordes, relleno ni márgenes, por lo que pueden usarse fácilmente como envoltorios para entradas individuales o grupos de entradas.
* `<legend>`, al igual que los conjuntos de campos (fieldsets), también han sido rediseñados para que se muestren como una especie de encabezado.
* `<label>` están configurados en `display: inline-block` para permitir que `margin` sea aplicado.
* `<input>`s, `<select>`s, `<textarea>`s , y los `<button>` se solucionan principalmente con Normalize, pero Reboot elimina su `margin` y establece `line-height: inherit` también.
* `<textarea>` se modifican para que solo se puedan cambiar de tamaño verticalmente, ya que el cambio de tamaño horizontal a menudo "rompe" el diseño de la página.
* `<button>`s (elementos del botón) y `<input>` tienen `cursor: pointer` cuando `:not(:disabled)`.

Estos cambios y más se muestran a continuación.

{{< callout type="warning" emoji="" >}}
Algunos tipos de entradas de fecha [no son totalmente compatibles](https://caniuse.com/input-datetime) con las últimas versiones de Safari y Firefox.
{{< /callout >}}

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/forms.html" >}}
{{< /demo-iframe >}}

### Punteros en botones {#pointers-on-buttons}

Reboot incluye una mejora para que `role="button"` cambie el cursor predeterminado a `pointer`. Agrega este atributo a los elementos para ayudar a indicar que los elementos son interactivos. Esta función no es necesaria para los elementos `<button>`, que obtienen su propio cambio de `cursor`.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/pointers-on-buttons.html" >}}
```html {filename="HTML"}
    <span role="button" tabindex="0">Botón sin elemento button</span>
```
{{< /demo-iframe >}}

## Elementos varios {#misc-elements}

{{< content-ads/middle-banner-4 >}}

### Dirección {#address}

El elemento `<address>` se actualiza para restablecer el `font-style` predeterminado del navegador de `italic` a `normal`. Ahora también se hereda `line-height` y se ha agregado `margin-bottom: 1rem`. Los `<address>` sirven para presentar información de contacto del antepasado más cercano (o de todo un trabajo). Conserva el formato terminando las líneas con `<br>`.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/misc-elements.html" >}}
```html {filename="HTML"}
<address>
    <strong>ACME Corporation</strong><br>
    1123 Fictional St,<br>
    San Francisco, CA 94103<br>
    <abbr title="Phone">P:</abbr> (123) 456-7890
</address>
<address>
    <strong>Nombre completo</strong><br>
    <a href="mailto:first.last@example.com">nombre.apellido@ejemplo.com</a>
</address>
```
{{< /demo-iframe >}}

### Blockquote {#blockquote}

El `margin` predeterminado en blockquotes es `1em 40px`, así que lo restablecemos a `0 0 1rem` para algo más consistente con otros elementos.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/blockquote.html" >}}
```html {filename="HTML"}
<blockquote class="blockquote">
    <p>Una cita muy conocida, contenida en un elemento blockquote.</p>
</blockquote>
<p>Alguien famoso en <cite title="Source Title">Source Title</cite></p>
```
{{< /demo-iframe >}}

### Elementos en línea {#inline-elements}

El elemento `<abbr>` recibe un estilo básico para que se destaque entre el texto del párrafo.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/inline-elements.html" >}}
```html {filename="HTML"}
El elemento de abreviatura <abbr title="HyperText Markup Language">HTML</abbr>.
```
{{< /demo-iframe >}}

### Resumen {#summary}

El `cursor` predeterminado en el resumen es `text`, así que lo restablecemos a `pointer` para transmitirlo. Se puede interactuar con el elemento haciendo clic en él.

{{< demo-iframe path="/demos/bootstrap/5.3/content/reboot/summary.html" >}}
```html {filename="HTML"}
<details>
    <summary>Algunos detalles</summary>
    <p>Más información sobre los detalles.</p>
</details>
<details open="">
    <summary>Aún más detalles</summary>
    <p>Aquí hay aún más detalles sobre los detalles.</p>
</details>
```
{{< /demo-iframe >}}

Algunos detalles

Más información sobre los detalles.

Aún más detalles

Aquí hay aún más detalles sobre los detalles.

{{< bootstrap/content-suggestion >}}

## HTML5 `[hidden]` attribute {#html5-hidden-attribute}

HTML5 agrega [un nuevo atributo global llamado `[hidden]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden), que tiene el estilo `display: none` de forma predeterminada. Tomando prestada una idea de [PureCSS](https://purecss.io), mejoramos este valor predeterminado haciendo `[hidden] { display: none !important; }` para ayudar a evitar que su `display` se sobrescriba accidentalmente.

```html {filename="HTML"}
<input type="text" hidden>
```

Dado que `[hidden]` no es compatible con los métodos de jQuery `$(...).hide()` y `$(...).show()`, no respaldamos específicamente `[hidden]` sobre otras técnicas para administrar la `display` de elementos.

Para simplemente alternar la visibilidad de un elemento, es decir, su `display` no se modifica y el elemento aún puede afectar el flujo del documento, usa [la clase `.invisible`,](/bootstrap/utilidades/otras-utilidades) en su lugar.

{{< content-ads/bottom-banner >}}
