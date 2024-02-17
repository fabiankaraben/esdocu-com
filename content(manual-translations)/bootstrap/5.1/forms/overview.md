---
weight: 1
linkTitle: Overview
title: Uso de Formularios · Bootstrap en Español v5.1
description: Ejemplos y pautas de uso para los estilos de controles de formulario, opciones de diseño y componentes personalizados para crear una amplia variedad de formularios.
prev: /bootstrap/5.1/content/figures
type: docs
---

# Uso de Formularios en Bootstrap

Ejemplos y pautas de uso para los estilos de controles de formulario, opciones de diseño y componentes personalizados para crear una amplia variedad de formularios.

{{< content-ads/top-banner >}}

- **Controles de Formulario**: Estiliza entradas de texto y áreas de texto con soporte para múltiples estados.    
- **Select**: Mejora los elementos select predeterminados del navegador con una apariencia inicial personalizada.
- **Checks & radios**: Utiliza nuestros botones de radio personalizados y casillas de verificación en formularios para seleccionar opciones de entrada.
- **Rangos**: Reemplaza las entradas de rango predeterminadas del navegador con nuestra versión personalizada.
- **Input group**: Adjunta etiquetas y botones a sus inputs para aumentar el valor semántico.
- **Etiquetas flotantes**: Crea etiquetas de formulario hermosamente simples que floten sobre tus campos de entrada.
- **Layout**: Crea diseños en línea, horizontales o basados en cuadrículas complejas con tus formularios.
- **Validación**: Valida tus formularios con estilos y comportamientos de validación nativos o personalizados.

## Descripción general

Los controles de formulario de Bootstrap se expanden en [nuestros estilos de formulario reiniciados]({{< bootstrap/5-1/docsref "/content/reboot#forms" >}}) con clases. Usa estas clases para optar por tus pantallas personalizadas para una representación más consistente en todos los navegadores y dispositivos.

Asegúrate de utilizar un atributo `type` apropiado en todas las entradas (por ejemplo, `email` para las direcciones de correo electrónico o `number` para información numérica) para aprovechar los controles de entrada más nuevos, como la verificación de correo electrónico, la selección de números y más.

Aquí hay un ejemplo rápido para demostrar los estilos de formulario de Bootstrap. Sigue leyendo para obtener documentación sobre las clases requeridas, el diseño de formularios y más.

{{< bootstrap/5-1/example >}}
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Verificado</label>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
{{< /bootstrap/5-1/example >}}

{{< content-ads/middle-banner-1 >}}

## Textos de formulario

Textos de formulario a nivel de bloque o en línea se pueden crear usando `.form-text`.

{{< bootstrap/5-1/callout warning >}}
##### Asociación de textos de formulario con controles de formulario

Los textos de formulario deben asociarse explícitamente con el control del formulario al que se relacionan mediante el atributo `aria-describedby`. Esto garantizará que las tecnologías de asistencia, como los lectores de pantalla, anuncien el texto de este formulario cuando el usuario lo enfoca o ingresa al control.
{{< /bootstrap/5-1/callout >}}

El texto debajo de los inputs se puede estilizar con `.form-text`. Si se utiliza un elemento a nivel de bloque, se agrega un margen superior para facilitar el espaciado de los imputs anteriores.

{{< bootstrap/5-1/example >}}
<label for="inputPassword5" class="form-label">Contraseña</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
<div id="passwordHelpBlock" class="form-text">
  Tu contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
</div>
{{< /bootstrap/5-1/example >}}

Textos en línea pueden usar cualquier elemento HTML en línea típico (ya sea `<span>`, `<small>` o cualquier otro) con nada más que la clase `.form-text`.

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/5-1/example >}}
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Contraseña</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Debe tener entre 8 y 20 caracteres.
    </span>
  </div>
</div>
{{< /bootstrap/5-1/example >}}

## Formularios deshabilitados

Agrega el atributo booleano `disabled` en un input para evitar interacciones del usuario y hacer que parezca más claro.

```html
<input class="form-control" id="disabledInput" type="text" placeholder="Entrada deshabilitada..." disabled>
```

Agrega el atributo `disabled` a un `<fieldset>` para deshabilitar todos los controles en su interior. Los navegadores tratan todos los controles de formulario nativos (elementos `<input>`, `<select>` y `<button>`) dentro de un `<fieldset disabled>` como deshabilitados, lo que impide que interactúen con ellos tanto con el teclado como con el mouse.

Sin embargo, si tu formulario también incluye elementos personalizados similares a botones como `<a class="btn btn-*">...</a>`, estos solo tendrán un estilo de `pointer-events: none` , lo que significa que aún se podrán enfocar y operar con el teclado. En este caso, debes modificar manualmente estos controles agregando `tabindex="-1"` para evitar que reciban atención y `aria-disabled="disabled"` para señalar su estado a las tecnologías de asistencia.

{{< content-ads/middle-banner-3 >}}

{{< bootstrap/5-1/example >}}
<form>
  <fieldset disabled>
    <legend>Ejemplo de fieldset deshabilitado</legend>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Input deshabilitado</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Input deshabilitado">
    </div>
    <div class="mb-3">
      <label for="disabledSelect" class="form-label">Select menu deshabilitado</label>
      <select id="disabledSelect" class="form-select">
        <option>Select deshabilitado</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
        <label class="form-check-label" for="disabledFieldsetCheck">
          No puedes verificar esto
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
  </fieldset>
</form>
{{< /bootstrap/5-1/example >}}

## Accesibilidad

Asegúrate de que todos los controles de formulario tengan un nombre accesible adecuado para que su propósito pueda transmitirse a los usuarios de tecnologías de asistencia. La forma más sencilla de lograr esto es usar un elemento `<label>` o, en el caso de los botones, incluir texto suficientemente descriptivo como parte del contenido `<button>...</button>`.

Para situaciones en las que no es posible incluir una `<label>` visible o contenido de texto apropiado, existen formas alternativas de proporcionar un nombre accesible, como:

- Elementos `<label>` ocultos usando la clase `.visually-hidden`
- Apuntando a un elemento existente que puede actuar como una etiqueta usando `aria-labelledby`
- Proporcionar un atributo `title`
- Establecer explícitamente el nombre accesible en un elemento usando `aria-label`

Si ninguno de estos están presentes, las tecnologías de asistencia pueden recurrir al uso del atributo `placeholder` como respaldo para el nombre accesible en los elementos `<input>` y `<textarea>`. Los ejemplos de esta sección proporcionan algunos enfoques sugeridos para casos específicos.

{{< content-ads/middle-banner-4 >}}

Si bien el uso de contenido visualmente oculto (`.visually-hidden`, `aria-label` e incluso `placeholder`, que desaparece una vez que un campo de formulario tiene contenido) beneficiará a los usuarios de tecnología de asistencia, la falta de texto de etiqueta visible aún puede ser un problema. problemático para ciertos usuarios. Alguna forma de etiqueta visible es generalmente el mejor enfoque, tanto para la accesibilidad como para la usabilidad.

## Sass

Muchas variables de formulario se establecen en un nivel general para ser reutilizadas y ampliadas por componentes de formulario individuales. Las verás con más frecuencia como variables `$input-btn-*` y `$input-*`.

### Variables

Las variables `$input-btn-*` son variables globales compartidas entre nuestros [botones]({{< bootstrap/5-1/docsref "/components/buttons" >}}) y nuestros componentes de formulario. Encontrarás que estos se reasignan con frecuencia como valores a otras variables específicas de componentes.

{{< bootstrap/5-1/scss-docs name="input-btn-variables" file="scss/_variables.scss" >}}

{{< content-ads/bottom-banner >}}
