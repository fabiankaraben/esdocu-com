---
weight: 5
linkTitle: Buttons
title: Buttons · Bootstrap en Español v5.1
description: Usa los estilos de botones personalizados de Bootstrap para acciones en formularios, cuadros de diálogo y más con soporte para múltiples tamaños, estados y más.
---

# Buttons

Usa los estilos de botones personalizados de Bootstrap para acciones en formularios, cuadros de diálogo y más con soporte para múltiples tamaños, estados y más.

{{< content-ads/top-banner >}}

## Ejemplos

Bootstrap incluye varios estilos de botones predefinidos, cada uno con su propio propósito semántico, con algunos extras incluidos para un mayor control.

{{< bootstrap/5-1/example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "bootstrap_5_1_theme-colors") }}
<button type="button" class="btn btn-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}

<button type="button" class="btn btn-link">Enlace</button>
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/callout info >}}
{{< bootstrap/5-1/partial "callout-warning-color-assistive-technologies.md" >}}
{{< /bootstrap/5-1/callout >}}

## Deshabilitar ajuste de texto

Si no deseas que el texto del botón se ajuste, puedes agregar la clase `.text-nowrap` al botón. En Sass, puedes configurar `$btn-white-space: nowrap` para deshabilitar el ajuste de texto para cada botón.

## Etiquetas de botón

Las clases `.btn` están diseñadas para usarse con el elemento `<button>`. Sin embargo, también puedes usar estas clases en elementos `<a>` o `<input>` (aunque algunos navegadores pueden aplicar una representación ligeramente diferente).

Al usar clases de botón en elementos `<a>` que se usan para activar alguna funcionalidad en la página (como colapsar contenido), en lugar de vincular a nuevas páginas o secciones dentro de la página actual, estos enlaces deben recibir un `role="button "` para transmitir adecuadamente su propósito a las tecnologías de asistencia, como los lectores de pantalla.

{{< bootstrap/5-1/example >}}
<a class="btn btn-primary" href="#" role="button">Enlace</a>
<button class="btn btn-primary" type="submit">Botón</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{{< /bootstrap/5-1/example >}}

{{< content-ads/middle-banner-1 >}}

## Botones de contorno

¿Necesitas un botón, pero no los fuertes colores de fondo que traen? Reemplaza las clases de modificador predeterminadas con `.btn-outline-*` para eliminar todas las imágenes y colores de fondo en cualquier botón.

{{< bootstrap/5-1/example >}}
{{< buttons.inline >}}
{{- range (index $.Site.Data "bootstrap_5_1_theme-colors") }}
<button type="button" class="btn btn-outline-{{ .name }}">{{ .name | title }}</button>
{{- end -}}
{{< /buttons.inline >}}
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/callout info >}}
Algunos de los estilos de botones usan un color de primer plano relativamente claro y solo deben usarse sobre un fondo oscuro para tener suficiente contraste.
{{< /bootstrap/5-1/callout >}}

## Tamaños

¿Te apetece botones más grandes o más pequeños? Agrega `.btn-lg` o `.btn-sm` para tamaños adicionales.

{{< bootstrap/5-1/example >}}
<button type="button" class="btn btn-primary btn-lg">Botón grande</button>
<button type="button" class="btn btn-secondary btn-lg">Botón grande</button>
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/example >}}
<button type="button" class="btn btn-primary btn-sm">Botón pequeño</button>
<button type="button" class="btn btn-secondary btn-sm">Botón pequeño</button>
{{< /bootstrap/5-1/example >}}

## Estado deshabilitado

Haz que los botones parezcan inactivos agregando el atributo booleano `disabled` a cualquier elemento `<button>`. Los botones deshabilitados tienen `pointer-events: none` aplicado, lo que evita que se activen los estados *active* y *hover*.

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element. Disabled buttons have `pointer-events: none` applied to, preventing hover and active states from triggering.

{{< bootstrap/5-1/example >}}
<button type="button" class="btn btn-lg btn-primary" disabled>Botón primary</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Botón</button>
{{< /bootstrap/5-1/example >}}

Los botones deshabilitados que usan el elemento `<a>` se comportan un poco diferente:

- Los `<a>`s no admiten el atributo `disabled`, por lo que debes agregar la clase `.disabled` para que aparezca visualmente deshabilitado.
- Se incluyen algunos estilos amigables (para el futuro) para deshabilitar todos los `pointer-events` en los botones de `<a>`s.
- Los botones deshabilitados que usan `<a>` deben incluir el atributo `aria-disabled="true"` para indicar el estado del elemento a las tecnologías de asistencia.
- Los botones deshabilitados que usan `<a>` *no deben* incluir el atributo `href`.

{{< bootstrap/5-1/example >}}
<a class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Enlace primary</a>
<a class="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Enlace</a>
{{< /bootstrap/5-1/example >}}

### Advertencia de funcionalidad de enlace

Para cubrir los casos en los que debes mantener el atributo `href` en un enlace deshabilitado, la clase `.disabled` usa `pointer-events: none` para intentar deshabilitar la funcionalidad del enlace de `<a>`s. Ten en cuenta que esta propiedad CSS aún no está estandarizada para HTML, pero todos los navegadores modernos la admiten. Además, incluso en los navegadores que admiten `pointer-events: none`, la navegación con el teclado no se ve afectada, lo que significa que los usuarios de teclados videntes y los usuarios de tecnologías de asistencia aún podrán activar estos enlaces. Entonces, para estar seguro, además de `aria-disabled="true"`, también incluye un atributo `tabindex="-1"` en estos enlaces para evitar que reciban el foco del teclado, y usa JavaScript personalizado para deshabilitar tu funcionalidad por completo .

{{< bootstrap/5-1/example >}}
<a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Enlace primary</a>
<a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Enlace</a>
{{< /bootstrap/5-1/example >}}

## Botones de bloque

Crea pilas responsive de "botones de bloque" de ancho completo como los de Bootstrap 4 con una combinación de nuestras utilidades de visualización y espacios. Al usar utilidades en lugar de clases específicas de botones, tenemos un control mucho mayor sobre el espaciado, la alineación y los comportamientos de respuesta.

{{< bootstrap/5-1/example >}}
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Botón</button>
  <button class="btn btn-primary" type="button">Botón</button>
</div>
{{< /bootstrap/5-1/example >}}

Aquí creamos una variación responsive, comenzando con botones apilados verticalmente hasta el breakpoint `md`, donde `.d-md-block` reemplaza a la clase `.d-grid`, sobrescribiendo así la utilidad `gap-2`. Cambia el tamaño de tu navegador para verlos cambiar.

{{< bootstrap/5-1/example >}}
<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Botón</button>
  <button class="btn btn-primary" type="button">Botón</button>
</div>
{{< /bootstrap/5-1/example >}}

Puedes ajustar el ancho de tus botones de bloque con clases de ancho de columna de cuadrícula. Por ejemplo, para un "botón de bloque" de ancho medio, usa `.col-6`. Céntralo horizontalmente con `.mx-auto`, también.

{{< bootstrap/5-1/example >}}
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Botón</button>
  <button class="btn btn-primary" type="button">Botón</button>
</div>
{{< /bootstrap/5-1/example >}}

Se pueden usar utilidades adicionales para ajustar la alineación de los botones cuando están en posición horizontal. Aquí tomamos nuestro ejemplo responsive anterior y agregamos algunas utilidades flex y una utilidad de margen en el botón para alinear a la derecha los botones cuando ya no están apilados.

{{< bootstrap/5-1/example >}}
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">Botón</button>
  <button class="btn btn-primary" type="button">Botón</button>
</div>
{{< /bootstrap/5-1/example >}}

{{< content-ads/middle-banner-2 >}}

## Complemento de botón

El complemento de botón te permite crear botones simples de encender/apagar.

{{< bootstrap/5-1/callout info >}}
Visualmente, estos botones toggle son idénticos a los [botones de alternancia de casilla de verificación]({{< bootstrap/5-1/docsref "/forms/checks-radios#checkbox-toggle-buttons" >}}). Sin embargo, las tecnologías de asistencia los transmiten de manera diferente: los lectores de pantalla anunciarán las casillas de verificación como "marcadas"/"no marcadas" (dado que, a pesar de su apariencia, siguen siendo fundamentalmente casillas de verificación), mientras que estos botones de alternancia se anunciarán como "botón"/"botón presionado". La elección entre estos dos enfoques dependerá del tipo de alternancia que estés creando y de si la alternancia tendrá o no sentido para los usuarios cuando se anuncie como una casilla de verificación o como un botón real.
{{< /bootstrap/5-1/callout >}}

### Estados toggle

Agrega `data-bs-toggle="button"` para alternar el estado `active` de un botón. Si estás alternando previamente un botón, debes agregar manualmente la clase `.active` **y** `aria-pressed="true"` para asegurarte de que se transmita de manera adecuada a las tecnologías de asistencia.

{{< bootstrap/5-1/example >}}
<button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Botón toggle</button>
<button type="button" class="btn btn-primary active" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Botón toggle activo</button>
<button type="button" class="btn btn-primary" disabled data-bs-toggle="button" autocomplete="off">Botón toggle deshabilitado</button>
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/example >}}
<a href="#" class="btn btn-primary" role="button" data-bs-toggle="button">Enlace toggle</a>
<a href="#" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Enlace toggle activo</a>
<a class="btn btn-primary disabled" aria-disabled="true" role="button" data-bs-toggle="button">Enlace toggle deshabilitado</a>
{{< /bootstrap/5-1/example >}}

### Métodos

Puedes crear una instancia de botón con el constructor de botones, por ejemplo:

```js
var button = document.getElementById('myButton')
var bsButton = new bootstrap.Button(button)
```

<table class="table">
  <thead>
    <tr>
      <th>Método</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>toggle</code>
      </td>
      <td>
        Cambia el estado del botón. Da al botón la apariencia de que ha sido activado.
      </td>
    </tr>
    <tr>
      <td>
        <code>dispose</code>
      </td>
      <td>
        Destruye el botón de un elemento. (Elimina los datos almacenados en el elemento DOM)
      </td>
    </tr>
    <tr>
      <td>
        <code>getInstance</code>
      </td>
      <td>
        Método estático que te permite obtener la instancia del botón asociada a un elemento DOM, puedes usarlo así: <code>bootstrap.Button.getInstance(element)</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>getOrCreateInstance</code>
      </td>
      <td>
        Método estático que devuelve una instancia de botón asociada a un elemento DOM o crea una nueva en caso de que no se haya inicializado.
        Puedes usarlo así: <code>bootstrap.Button.getOrCreateInstance(element)</code>
      </td>
    </tr>
  </tbody>
</table>

Por ejemplo, para alternar todos los botones

```js
var buttons = document.querySelectorAll('.btn')
buttons.forEach(function (button) {
  var button = new bootstrap.Button(button)
  button.toggle()
})
```

## Sass

### Variables

{{< bootstrap/5-1/scss-docs name="btn-variables" file="scss/_variables.scss" >}}

### Mixins

Hay tres mixins para botones: mixins de botón y mixins de variante de contorno de botón (ambos basados en `$theme-colors`), más un mixin de tamaño de botón.

{{< bootstrap/5-1/scss-docs name="btn-variant-mixin" file="scss/mixins/_buttons.scss" >}}

{{< bootstrap/5-1/scss-docs name="btn-outline-variant-mixin" file="scss/mixins/_buttons.scss" >}}

{{< bootstrap/5-1/scss-docs name="btn-size-mixin" file="scss/mixins/_buttons.scss" >}}

{{< content-ads/middle-banner-3 >}}

### Loops

Las variantes de botón (para botones regulares y de contorno) usan sus respectivos mixins con nuestro mapa `$theme-colors` para generar las clases modificadoras en `scss/_buttons.scss`.

{{< bootstrap/5-1/scss-docs name="btn-variant-loops" file="scss/_buttons.scss" >}}

{{< content-ads/bottom-banner >}}