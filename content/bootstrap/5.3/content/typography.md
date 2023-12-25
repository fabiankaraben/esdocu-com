---
weight: 2
linkTitle: Tipografía
title: Uso de Tipografía con Bootstrap · Bootstrap en Español v5.3
description: Documentación y ejemplos para tipografía de Bootstrap, incluidas configuraciones globales, encabezados, cuerpo de texto, listas y más.
---

# Uso de Tipografía con Bootstrap

Documentación y ejemplos para tipografía de Bootstrap, incluidas configuraciones globales, encabezados, cuerpo de texto, listas y más.

{{< bootstrap/main-banner >}}

Configuración global {#global-settings}
----------------------------------------

Bootstrap establece estilos básicos de visualización global, tipografía y enlaces. Cuando necesites más control, consulta las [clases de utilidades textuales](/bootstrap/5.3/utilities/text).

* Usa una [pila de fuentes nativas](/bootstrap/5.3/content/reboot/#native-font-stack) que seleccione el mejor `font-family` para cada sistema operativo y dispositivo.
* Para una escala de tipografía más inclusiva y accesible, utilizamos la raíz predeterminada del navegador `font-size` (normalmente 16 píxeles) para que los visitantes puedan personalizar los valores predeterminados de su navegador según sea necesario.
* Usa los atributos `$font-family-base`, `$font-size-base` y `$line-height-base` como nuestra base tipográfica aplicada al `<body>`.
* Establece el color del enlace global mediante `$link-color`.
* Usa `$body-bg` para establecer un `background-color` en el `<body>` (`#fff` por defecto).

Estos estilos se pueden encontrar dentro de `_reboot.scss`, y las variables globales están definidas en `_variables.scss`. Asegúrate de configurar `$font-size-base` en `rem`.

Títulos {#headings}
--------------------

Todos los encabezados HTML, desde `<h1>` hasta `<h6>`, están disponibles.

| Título      | Ejemplo                                                                              |
| ----------- | ------------------------------------------------------------------------------------ |
| `<h1></h1>` | <span style={{fontSize: '36.52px', fontWeight: 500}}>h1. Título de Bootstrap</span>  |
| `<h2></h2>` | <span style={{fontSize: '29.912px', fontWeight: 500}}>h2. Título de Bootstrap</span> |
| `<h3></h3>` | <span style={{fontSize: '26.608px', fontWeight: 500}}>h3. Título de Bootstrap</span> |
| `<h4></h4>` | <span style={{fontSize: '23.304px', fontWeight: 500}}>h4. Título de Bootstrap</span> |
| `<h5></h5>` | <span style={{fontSize: '20px', fontWeight: 500}}>h5. Título de Bootstrap</span>     |
| `<h6></h6>` | <span style={{fontSize: '19.2px', fontWeight: 500}}>h6. Título de Bootstrap</span>   |

```html
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
```    

`.h1` a `.h6` también están disponibles, para cuando quieras hacer coincidir el estilo de fuente de un encabezado pero no puedas utiliza el elemento HTML asociado.

{{< demo-iframe path="/demos/bootstrap/5.3/content/typography/headings.html" >}}
```html {filename="HTML"}
<p class="h1">h1. Título de Bootstrap</p>
<p class="h2">h2. Título de Bootstrap</p>
<p class="h3">h3. Título de Bootstrap</p>
<p class="h4">h4. Título de Bootstrap</p>
<p class="h5">h5. Título de Bootstrap</p>
<p class="h6">h6. Título de Bootstrap</p>
```
{{< /demo-iframe >}}

### Personalizar encabezados {#customizing-headings}

Usa las clases de utilidad incluidas para recrear el pequeño texto del encabezado secundario de Bootstrap 3.

{{< demo-iframe path="/demos/bootstrap/5.3/content/typography/customizing-headings.html" >}}
```html {filename="HTML"}
<h3>
    Título de pantalla elegante
    <small class="text-body-secondary">Con texto secundario descolorido</small>
</h3>
```
{{< /demo-iframe >}}

Mostrar encabezados {#display-headings}
----------------------------------------

Los elementos de encabezado tradicionales están diseñados para funcionar mejor en el contenido principal de tu página. Cuando necesites que un título destaque, considera la posibilidad de utilizar un **título de visualización**: un estilo de título más grande y un poco más obstinado.

{{< demo-iframe path="/demos/bootstrap/5.3/content/typography/display-headings.html" >}}
```html {filename="HTML"}
    <div class="display-1">Display 1</div>
    <div class="display-2">Display 2</div>
    <div class="display-3">Display 3</div>
    <div class="display-4">Display 4</div>
    <div class="display-5">Display 5</div>
    <div class="display-6">Display 6</div>
```
{{< /demo-iframe >}}    

Los encabezados de visualización se configuran mediante el mapa Sass `$display-font-sizes` y dos variables, `$display-font-weight` y `$display-line-height`.

Los encabezados de visualización se pueden personalizar mediante dos variables, `$display-font-family` y `$display-font-style`.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$display-font-sizes: (
    1: 5rem,
    2: 4.5rem,
    3: 4rem,
    4: 3.5rem,
    5: 3rem,
    6: 2.5rem
);

$display-font-family: null;
$display-font-style:  null;
$display-font-weight: 300;
$display-line-height: $headings-line-height;
```

Lead {#lead}
-------------

Haz que un párrafo se destaque agregando `.lead`.

{{< demo-iframe path="/demos/bootstrap/5.3/content/typography/lead.html" >}}
```html {filename="HTML"}
    <p class="lead">
        Este es un párrafo inicial. Se destaca de los párrafos habituales.
    </p>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Elementos de texto en línea {#inline-text-elements}
----------------------------------------------------

Estilo para elementos HTML5 en línea comunes.

{{< demo-iframe path="/demos/bootstrap/5.3/content/typography/inline-text-elements.html" >}}
```html {filename="HTML"}
    <p>Puedes usar la etiqueta de mark para <mark>resaltar</mark> texto.</p>
    <p><del>Esta línea de texto debe tratarse como texto eliminado.</del></p>
    <p><s>Esta línea de texto debe tratarse como si ya no fuera precisa.</s></p>
    <p><ins>Esta línea de texto debe tratarse como una adición al documento.</ins></p>
    <p><u>Esta línea de texto se mostrará subrayada.</u></p>
    <p><small>Esta línea de texto debe tratarse como letra pequeña.</small></p>
    <p><strong>Esta línea aparece como texto en negrita.</strong></p>
    <p><em>Esta línea se muestra como texto en cursiva.</em></p>
```
{{< /demo-iframe >}}

Ten en cuenta que esas etiquetas deben usarse con fines semánticos:

* `<mark>` representa texto que está marcado o resaltado con fines de referencia o notación.
* `<small>` representa comentarios secundarios y letra pequeña, como derechos de autor y texto legal.
* `<s>` representa elementos que ya no son relevantes o que ya no son precisos.
* `<u>` representa un tramo de texto en línea que debe representarse de una manera que indique que tiene una anotación no textual.

Si quieres darle estilo a tu texto, debes usar las siguientes clases en su lugar:

* `.mark` aplicará los mismos estilos que `<mark>`.
* `.small` aplicará los mismos estilos que `<small>`.
* `.text-decoration-underline` aplicará los mismos estilos que `<u>`.
* `.text-decoration-line-through` aplicará los mismos estilos que `<s>`.

Aunque no se muestra arriba, siéntete libre de usar `<b>` y `<i>` en HTML5. `<b>` está destinado a resaltar palabras o frases sin transmitir importancia adicional, mientras que `<i>` está destinado principalmente a voz, términos técnicos, etc.

Utilidades de texto {#text-utilities}
--------------------------------------

Cambia la alineación del texto, la transformación, el estilo, el peso, la altura de la línea, la decoración y el color con nuestras [utilidades de texto](/bootstrap/5.3/utilities/text) y [utilidades de color](/bootstrap/5.3/utilities/colors).

Abreviaturas {#abbreviations}
------------------------------

Implementación estilizada del elemento `<abbr>` de HTML para abreviaturas y acrónimos para mostrar la versión ampliada al pasar el mouse. Las abreviaturas tienen un subrayado predeterminado y obtienen un cursor de ayuda para proporcionar contexto adicional al pasar el mouse y a los usuarios de tecnologías de asistencia.

Agrega `.initialism` a una abreviatura para un tamaño de fuente ligeramente más pequeño.

{{< demo-iframe path="/demos/bootstrap/5.3/content/typography/abbreviations.html" >}}
```html {filename="HTML"}
    <p><abbr title="atributo">attr</abbr></p>
    <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
```
{{< /demo-iframe >}}

Blockquotes {#blockquotes}
---------------------------

Para citar bloques de contenido de otra fuente dentro de tu documento. Envuelve `<blockquote class="blockquote">` alrededor de cualquier HTML como cita.

{{< demo-iframe path="/demos/bootstrap/5.3/content/typography/blockquotes.html" >}}
```html {filename="HTML"}
    <blockquote class="blockquote">
        <p>Una cita muy conocida, contenida en un elemento blockquote.</p>
    </blockquote>
```
{{< /demo-iframe >}}

### Nombrar una fuente {#naming-a-source}

La especificación HTML requiere que la atribución de cita en bloque se coloque fuera del `<blockquote>`. Al proporcionar atribución, incluye tu `<blockquote>` en un `<figure>` y usa un `<figcaption>` o un elemento de nivel de bloque (por ejemplo, `<p>`) con la clase `.blockquote-footer`. Asegúrate de incluir también el nombre del trabajo fuente en `<cite>`.

{{< demo-iframe path="/demos/bootstrap/5.3/content/typography/naming-a-source.html" >}}
```html {filename="HTML"}
    <figure>
        <blockquote class="blockquote">
            <p>Una cita muy conocida, contenida en un elemento blockquote.</p>
        </blockquote>
        <figcaption class="blockquote-footer">Alguien famoso en <cite title="Source Title">Source Title</cite>
        </figcaption>
    </figure>
```
{{< /demo-iframe >}}

### Alineación {#alignment}

Usa las utilidades de texto según sea necesario para cambiar la alineación de tu cita en bloque.

{{< demo-iframe path="/demos/bootstrap/5.3/content/typography/alignment-1.html" >}}
```html {filename="HTML"}
    <figure class="text-center">
        <blockquote class="blockquote">
            <p>Una cita muy conocida, contenida en un elemento blockquote.</p>
        </blockquote>
        <figcaption class="blockquote-footer">Alguien famoso en <cite title="Source Title">Source Title</cite>
        </figcaption>
    </figure>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/content/typography/alignment-2.html" >}}
```html {filename="HTML"}
    <figure class="text-end">
        <blockquote class="blockquote">
            <p>Una cita muy conocida, contenida en un elemento blockquote.</p>
        </blockquote>
        <figcaption class="blockquote-footer">Alguien famoso en <cite title="Source Title">Source Title</cite>
        </figcaption>
    </figure>
```
{{< /demo-iframe >}}

Listas {#lists}
----------------

### Sin estilo {#unstyled}

Eliminar el `list-style` predeterminado y el margen izquierdo en los elementos de la lista (solo children inmediatos). **Esto solo se aplica a los elementos de la lista secundaria inmediata**, lo que significa que también deberás agregar la clase para cualquier lista anidada.

{{< demo-iframe path="/demos/bootstrap/5.3/content/typography/unstyled.html" >}}
```html {filename="HTML"}
    <ul class="list-unstyled">
        <li>Esta es una lista.</li>
        <li>Parece completamente sin estilo.</li>
        <li>Estructuralmente, sigue siendo una lista.</li>
        <li>Sin embargo, este estilo solo se aplica a elementos secundarios inmediatos.</li>
        <li>Listas anidadas:
            <ul>
                <li>no se ven afectados por este estilo</li>
                <li>seguirá mostrando una viñeta</li>
                <li>y tener un margen izquierdo apropiado</li>
            </ul>
        </li>
        <li>Esto aún puede resultar útil en algunas situaciones.</li>
    </ul>
```
{{< /demo-iframe >}}

### Inline {#inline}

Elimina las viñetas de una lista y aplica un poco de `margin` con una combinación de dos clases, `.list-inline` y `.list-inline-item`.

{{< demo-iframe path="/demos/bootstrap/5.3/content/typography/inline.html" >}}
```html {filename="HTML"}
    <ul class="list-inline">
        <li class="list-inline-item">Este es un elemento de la lista.</li>
        <li class="list-inline-item">Y otro más.</li>
        <li class="list-inline-item">Pero se muestran en línea.</li>
    </ul>
```
{{< /demo-iframe >}}

### Alineación de la lista de descripciones {#description-list-alignment}

Alinear términos y descripciones horizontalmente usando las clases predefinidas de nuestro sistema de cuadrícula (o mixins semánticos). Para plazos más largos, puedes agregar opcionalmente una clase `.text-truncate` para truncar el texto con puntos suspensivos.

{{< demo-iframe path="/demos/bootstrap/5.3/content/typography/description-list-alignment.html" >}}
```html {filename="HTML"}
    <dl class="row">
        <dt class="col-sm-3">Listas de descripción</dt>
        <dd class="col-sm-9">Una lista de descripciones es perfecta para definir términos.</dd>

        <dt class="col-sm-3">Término</dt>
        <dd class="col-sm-9">
            <p>Definición del término.</p>
            <p>Y más texto de definición de marcador de posición.</p>
        </dd>

        <dt class="col-sm-3">Otro término</dt>
        <dd class="col-sm-9">Esta definición es corta, así que no hay párrafos adicionales ni nada por el estilo.
        </dd>

        <dt class="col-sm-3 text-truncate">Término truncado se trunca</dt>
        <dd class="col-sm-9">Esto puede resultar útil cuando el espacio es reducido. Agrega puntos suspensivos al
            final.</dd>

        <dt class="col-sm-3">Anidamiento</dt>
        <dd class="col-sm-9">
            <dl class="row">
                <dt class="col-sm-4">Lista de definiciones anidadas</dt>
                <dd class="col-sm-8">Escuché que te gustan las listas de definiciones. Déjame poner una lista de
                    definiciones dentro de tu lista de definiciones.</dd>
            </dl>
        </dd>
    </dl>
```
{{< /demo-iframe >}}

Tamaños de fuente responsive {#responsive-font-sizes}
------------------------------------------------------

En Bootstrap 5, hemos habilitado tamaños de fuente responsive de forma predeterminada, lo que permite que el texto se escale de manera más natural en todos los tamaños de dispositivos y viewports. Echa un vistazo a la [página RFS](/bootstrap/5.3/getting-started/rfs) para descubrir cómo funciona.

Personalización del CSS {#css}
-----------

### Variables Sass generales relacionadas {#sass-variables}

Los títulos tienen algunas variables dedicadas para el tamaño y el espaciado.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$headings-margin-bottom:      $spacer * .5;
$headings-font-family:        null;
$headings-font-style:         null;
$headings-font-weight:        500;
$headings-line-height:        1.2;
$headings-color:              inherit;
```

{{< bootstrap/content-suggestion >}}

Los elementos tipográficos diversos que se tratan aquí y en [Reboot](/bootstrap/5.3/content/reboot) también tienen variables dedicadas.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$lead-font-size:              $font-size-base * 1.25;
$lead-font-weight:            300;

$small-font-size:             .875em;

$sub-sup-font-size:           .75em;

// fusv-disable
$text-muted:                  var(--#{$prefix}secondary-color); // Deprecated in 5.3.0
// fusv-enable

$initialism-font-size:        $small-font-size;

$blockquote-margin-y:         $spacer;
$blockquote-font-size:        $font-size-base * 1.25;
$blockquote-footer-color:     $gray-600;
$blockquote-footer-font-size: $small-font-size;

$hr-margin-y:                 $spacer;
$hr-color:                    inherit;

// fusv-disable
$hr-bg-color:                 null; // Deprecated in v5.2.0
$hr-height:                   null; // Deprecated in v5.2.0
// fusv-enable

$hr-border-color:             null; // Allows for inherited colors
$hr-border-width:             var(--#{$prefix}border-width);
$hr-opacity:                  .25;

$vr-border-width:             var(--#{$prefix}border-width);

$legend-margin-bottom:        .5rem;
$legend-font-size:            1.5rem;
$legend-font-weight:          null;

$dt-font-weight:              $font-weight-bold;

$list-inline-padding:         .5rem;

$mark-padding:                .1875em;
$mark-color:                  $body-color;
$mark-bg:                     $yellow-100;
```    

### Sass mixins {#sass-mixins}

No hay mixins dedicados para tipografía, pero Bootstrap usa [Tamaño de fuente responsive (RFS)](/bootstrap/5.3/getting-started/rfs).
