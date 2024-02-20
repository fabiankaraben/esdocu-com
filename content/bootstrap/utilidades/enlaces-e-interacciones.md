---
weight: 9
linkTitle: Utilidades para enlace
title: Uso de las utilidades de Enlaces en Bootstrap · Bootstrap en Español v5.3
description: Las utilidades de enlace se utilizan para estilizar tus anchors y ajustar su color, opacidad, desplazamiento de subrayado, color de subrayado y más.
---

# Enlaces e interacciones en Bootstrap

{{< content-ads/top-banner >}}

## Uso de las utilidades de Enlaces en Bootstrap

Las utilidades de enlace se utilizan para estilizar tus anchors y ajustar su color, opacidad, desplazamiento de subrayado, color de subrayado y más.

### Opacidad del enlace {#link-opacity}

Cambia la opacidad alfa del valor de color del enlace `rgba()` con utilidades. Ten en cuenta que los cambios en la opacidad de un color pueden generar enlaces con [_insuficiente_ contraste](/bootstrap/comenzando/#color-contrast).

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/link-opacity-1.html" >}}
```html {filename="HTML"}
    <p><a class="link-opacity-10" href="#">Opacidad del enlace 10</a></p>
    <p><a class="link-opacity-25" href="#">Opacidad del enlace 25</a></p>
    <p><a class="link-opacity-50" href="#">Opacidad del enlace 50</a></p>
    <p><a class="link-opacity-75" href="#">Opacidad del enlace 75</a></p>
    <p><a class="link-opacity-100" href="#">Opacidad del enlace 100</a></p>
```
{{< /demo-iframe >}}

Incluso puedes cambiar el nivel de opacidad al pasar el mouse.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/link-opacity-2.html" >}}
```html {filename="HTML"}
    <p><a class="link-opacity-10-hover" href="#">Opacidad hover del enlace 10</a></p>
    <p><a class="link-opacity-25-hover" href="#">Opacidad hover del enlace 25</a></p>
    <p><a class="link-opacity-50-hover" href="#">Opacidad hover del enlace 50</a></p>
    <p><a class="link-opacity-75-hover" href="#">Opacidad hover del enlace 75</a></p>
    <p><a class="link-opacity-100-hover" href="#">Opacidad hover del enlace 100</a></p>
```
{{< /demo-iframe >}}

### Enlace subrayado {#link-underlines}

#### Color de subrayado {#underline-color}

{{< content-ads/middle-banner-1 >}}

Cambia el color del subrayado independientemente del color del texto del enlace.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/underline-color.html" >}}
```html {filename="HTML"}
    <p><a href="#" class="link-underline-primary">Subrayado primario</a></p>
    <p><a href="#" class="link-underline-secondary">Subrayado secundario</a></p>
    <p><a href="#" class="link-underline-success">Subrayado de éxito</a></p>
    <p><a href="#" class="link-underline-danger">Subrayado de peligro</a></p>
    <p><a href="#" class="link-underline-warning">Subrayada de advertencia</a></p>
    <p><a href="#" class="link-underline-info">Subrayado de información</a></p>
    <p><a href="#" class="link-underline-light">Subrayado claro</a></p>
    <p><a href="#" class="link-underline-dark">Subrayado oscuro</a></p>
```
{{< /demo-iframe >}}

#### Desplazamiento del subrayado {#underline-offset}

Cambia la distancia del subrayado de tu texto. El desplazamiento se establece en unidades `em` para escalar automáticamente con el `font-size` actual del elemento.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/underline-offset.html" >}}
```html {filename="HTML"}
    <p><a href="#">Enlace predeterminado</a></p>
    <p><a class="link-offset-1" href="#">Enlace de compensación (offset) 1</a></p>
    <p><a class="link-offset-2" href="#">Enlace Offset 2</a></p>
    <p><a class="link-offset-3" href="#">Enlace Offset 3</a></p>
```
{{< /demo-iframe >}}

#### Opacidad del subrayado {#underline-opacity}

Cambiar la opacidad del subrayado. Requiere agregar `.link-underline` para establecer primero un color `rgba()` que usamos para luego modificar la opacidad alfa.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/underline-opacity.html" >}}
```html {filename="HTML"}
        <p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Opacidad del subrayado 0</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-10" href="#">Opacidad del subrayado 10</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-25" href="#">Opacidad del subrayado 25</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-50" href="#">Opacidad del subrayado 50</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-75" href="#">Opacidad del subrayado 75</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-100" href="#">Opacidad del subrayado 100</a></p>
```
{{< /demo-iframe >}}

#### Variantes hover {#hover-variants}

{{< content-ads/middle-banner-2 >}}

Al igual que las utilidades `.link-opacity-*-hover`, `.link-offset` y `.link-underline-opacity` incluyen variantes `:hover` de forma predeterminada. Mezcla y combina para crear estilos de enlaces únicos.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/hover-variants.html" >}}
```html {filename="HTML"}
    <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
        Opacidad del subrayado 0
    </a>
```
{{< /demo-iframe >}}

### Enlaces de colores {#colored-links}

[Los ayudantes de enlaces de colores](/bootstrap/helpers) se han actualizado para combinarlos con nuestras utilidades de enlaces. Utiliza las nuevas utilidades para modificar la opacidad del enlace, la opacidad del subrayado y el desplazamiento del subrayado.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/colored-links.html" >}}
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

{{< callout type="info" emoji="" >}}
**Consejo de accesibilidad:** El uso de colores para agregar significado solo proporciona una indicación visual, que no se transmitirá a los usuarios de tecnologías de asistencia como lectores de pantalla. Asegúrate de que el significado sea obvio a partir del contenido mismo (por ejemplo, el texto visible con un [_suficiente_ contraste de color](/bootstrap/comenzando#color-contrast)) o se incluye a través de medios alternativos, como texto adicional oculto con la clase `.visually-hidden`.
{{< /callout >}}

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

Además de las siguientes funciones de Sass, considera leer sobre nuestras [propiedades personalizadas de CSS](/bootstrap/personalizar) incluidas (también conocidas como variables CSS) para colores y más.

{{< content-ads/middle-banner-3 >}}

#### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de enlace se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"link-opacity": (
  css-var: true,
  class: link-opacity,
  state: hover,
  values: (
    10: .1,
    25: .25,
    50: .5,
    75: .75,
    100: 1
  )
),
"link-offset": (
  property: text-underline-offset,
  class: link-offset,
  state: hover,
  values: (
    1: .125em,
    2: .25em,
    3: .375em,
  )
),
"link-underline": (
  property: text-decoration-color,
  class: link-underline,
  local-vars: (
    "link-underline-opacity": 1
  ),
  values: map-merge(
    $utilities-links-underline,
    (
      null: rgba(var(--#{$prefix}link-color-rgb), var(--#{$prefix}link-underline-opacity, 1)),
    )
  )
),
"link-underline-opacity": (
  css-var: true,
  class: link-underline-opacity,
  state: hover,
  values: (
    0: 0,
    10: .1,
    25: .25,
    50: .5,
    75: .75,
    100: 1
  ),
),
```

## Uso de las utilidades de Interacciones en Bootstrap

Clases de utilidad que cambian la forma en que los usuarios interactúan con los contenidos de un sitio web.

### Selección de texto {#text-selection}

Cambiar la forma en la que se selecciona el contenido cuando el usuario interactúa con él.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/interactions/text-selection.html" >}}
```html {filename="HTML"}
    <p class="user-select-all">Este párrafo quedará completamente seleccionado cuando el usuario haga clic en él.</p>
    <p class="user-select-auto">Este párrafo tiene un comportamiento de selección predeterminado.</p>
    <p class="user-select-none">Este párrafo no será seleccionable cuando el usuario haga clic en él.</p>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-4 >}}

### Eventos de puntero {#pointer-events}

Bootstrap proporciona las clases `.pe-none` y `.pe-auto` para evitar o agregar interacciones de elementos.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/interactions/pointer-events.html" >}}
```html {filename="HTML"}
    <p><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">No se puede hacer clic en este enlace</a>.</p>
    <p><a href="#" class="pe-auto">Se puede hacer clic en este enlace</a> (este es el comportamiento predeterminado).</p>
    <p class="pe-none"><a href="#" tabindex="-1" aria-disabled="true">No se puede hacer clic en este enlace</a> porque la propiedad <code>pointer-events</code> se hereda de su padre. Sin embargo, <a href="#" class="pe-auto">este enlace</a> tiene una clase <code>pe-auto</code> y se puede hacer clic en el.</p>
```
{{< /demo-iframe >}}

La clase `.pe-none` (y la propiedad CSS `pointer-events` que establece) solo previene las interacciones con un puntero (ratón, lápiz óptico, touch). Los enlaces y controles con `.pe-none` son, de forma predeterminada, aún enfocables y procesables para los usuarios del teclado. Para garantizar que estén completamente neutralizados incluso para los usuarios de teclado, es posible que debas agregar atributos adicionales como `tabindex="-1"` (para evitar que reciban el foco del teclado) y `aria-disabled="true"` (para transmitir el hecho de que están efectivamente deshabilitados para tecnologías de asistencia) y posiblemente usar JavaScript para evitar por completo que sean procesables.

Si es posible, la solución más sencilla es:

* Para controles de formulario, agrega el atributo HTML `disabled`.
* Para enlaces, elimina el atributo `href`, convirtiéndolo en un enlace ancla o marcador de posición no interactivo.

### Personalización del CSS {#css}

{{< bootstrap/content-suggestion >}}

#### API de utilidades de Sass {#sass-utilities-api}

{{< content-ads/middle-banner-5 >}}

Las utilidades de interacción se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/utilidades/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"user-select": (
  property: user-select,
  values: all auto none
),
"pointer-events": (
  property: pointer-events,
  class: pe,
  values: none auto,
),
```

{{< content-ads/bottom-banner >}}
