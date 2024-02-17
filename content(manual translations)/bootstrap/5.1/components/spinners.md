---
weight: 22
linkTitle: Spinners
title: El componente Spinner · Bootstrap en Español v5.1
description: Indica el estado de carga de un componente o una página con los indicadores giratorios de Bootstrap, creados completamente con HTML, CSS y sin JavaScript.
type: docs
---

# El componente Spinner

Indica el estado de carga de un componente o una página con los indicadores giratorios de Bootstrap, creados completamente con HTML, CSS y sin JavaScript.

{{< content-ads/top-banner >}}

## Acerca de spinners

Los "spinners" de Bootstrap se pueden usar para mostrar el estado de carga en tus proyectos. Están construidos solo con HTML y CSS, lo que significa que no necesitas JavaScript para crearlos. Sin embargo, necesitarás JavaScript personalizado para alternar su visibilidad. Su apariencia, alineación y tamaño se pueden personalizar fácilmente con nuestras increíbles clases de utilidad.

Para propósitos de accesibilidad, cada cargador aquí incluye `role="status"` y un `<span class="visually-hidden">Cargando...</span>` anidado.

{{< bootstrap/5-1/callout info >}}
{{< bootstrap/5-1/partial "callout-info-prefersreducedmotion.md" >}}
{{< /bootstrap/5-1/callout >}}

## Spinner de borde

Utiliza los spinners de borde para un indicador de carga ligero.

{{< bootstrap/5-1/example >}}
<div class="spinner-border" role="status">
  <span class="visually-hidden">Cargando...</span>
</div>
{{< /bootstrap/5-1/example >}}

### Colores

El spinner de borde usa `currentColor` para su `border-color`, lo que significa que puedes personalizar el color con [utilidades de color de texto][color]. Puedes usar cualquiera de nuestras utilidades de color de texto en el spinner estándar.

{{< content-ads/middle-banner-1 >}}

{{< bootstrap/5-1/example >}}
{{< spinner.inline >}}
{{- range (index $.Site.Data "bootstrap_5_1_theme-colors") }}
<div class="spinner-border text-{{ .name }}" role="status">
  <span class="visually-hidden">Cargando...</span>
</div>
{{- end -}}
{{< /spinner.inline >}}
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/callout info >}}
**¿Por qué no usar las utilidades `border-color`?** Cada marcador giratorio de borde especifica un borde `transparent` para al menos un lado, por lo que las utilidades `.border-{color}` sobrescribirían eso.
{{< /bootstrap/5-1/callout >}}

## Spinner creciente

Si no te apetece un spinner de borde, cambia al spinner de crecimiento. Si bien técnicamente no gira, ¡crece repetidamente!

{{< bootstrap/5-1/example >}}
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Cargando...</span>
</div>
{{< /bootstrap/5-1/example >}}

Una vez más, este spinner está construido con `currentColor`, por lo que puedes cambiar fácilmente su apariencia con [utilidades de color de texto][color]. Aquí está en azul, junto con las variantes admitidas.

{{< bootstrap/5-1/example >}}
{{< spinner.inline >}}
{{- range (index $.Site.Data "bootstrap_5_1_theme-colors") }}
<div class="spinner-grow text-{{ .name }}" role="status">
  <span class="visually-hidden">Cargando...</span>
</div>
{{- end -}}
{{< /spinner.inline >}}
{{< /bootstrap/5-1/example >}}

## Alineación

Los spinners en Bootstrap están construidos con `rem`s, `currentColor` y `display: inline-flex`. Esto significa que se pueden cambiar de tamaño, cambiar de color y alinear rápidamente.

{{< content-ads/middle-banner-2 >}}

### Margen

Usa [utilidades de margen][margen] como `.m-5` para facilitar el espaciado.

{{< bootstrap/5-1/example >}}
<div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Cargando...</span>
</div>
{{< /bootstrap/5-1/example >}}

### Colocación

Utiliza las [utilidades flexbox][flex], [utilidades float][float] o [alineación de texto][text] para colocar los spinners exactamente donde los necesitas en cualquier situación.

#### Flex

{{< bootstrap/5-1/example >}}
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Cargando...</span>
  </div>
</div>
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/example >}}
<div class="d-flex align-items-center">
  <strong>Cargando...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
{{< /bootstrap/5-1/example >}}

#### Floats

{{< content-ads/middle-banner-3 >}}

{{< bootstrap/5-1/example >}}
<div class="clearfix">
  <div class="spinner-border float-end" role="status">
    <span class="visually-hidden">Cargando...</span>
  </div>
</div>
{{< /bootstrap/5-1/example >}}

#### Alineación de texto

{{< bootstrap/5-1/example >}}
<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Cargando...</span>
  </div>
</div>
{{< /bootstrap/5-1/example >}}

## Tamaño

Agrega `.spinner-border-sm` y `.spinner-grow-sm` para hacer un spinner más pequeño que se pueda usar rápidamente dentro de otros componentes.

{{< bootstrap/5-1/example >}}
<div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="visually-hidden">Cargando...</span>
</div>
{{< /bootstrap/5-1/example >}}

O bien, usa CSS personalizado o estilos en línea para cambiar las dimensiones según sea necesario.

{{< bootstrap/5-1/example >}}
<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Cargando...</span>
</div>
{{< /bootstrap/5-1/example >}}

## Botones

{{< content-ads/middle-banner-4 >}}

Usa los spinners dentro de botones para indicar que una acción se está procesando o está teniendo lugar actualmente. También puedes cambiar el texto fuera del elemento spinner y utilizar el texto del botón según sea necesario.

{{< bootstrap/5-1/example >}}
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Cargando...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Cargando...
</button>
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/example >}}
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Cargando...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Cargando...
</button>
{{< /bootstrap/5-1/example >}}

## Sass

### Variables

{{< bootstrap/5-1/scss-docs name="spinner-variables" file="scss/_variables.scss" >}}

### Keyframes

Usado para crear las animaciones CSS para nuestros spinners. Incluido en `scss/_spinners.scss`.

{{< bootstrap/5-1/scss-docs name="spinner-border-keyframes" file="scss/_spinners.scss" >}}

{{< content-ads/middle-banner-5 >}}

{{< bootstrap/5-1/scss-docs name="spinner-grow-keyframes" file="scss/_spinners.scss" >}}

[color]:   {{< bootstrap/5-1/docsref "/utilities/colors" >}}
[display]: {{< bootstrap/5-1/docsref "/utilities/display" >}}
[flex]:    {{< bootstrap/5-1/docsref "/utilities/flex" >}}
[float]:   {{< bootstrap/5-1/docsref "/utilities/float" >}}
[margin]:  {{< bootstrap/5-1/docsref "/utilities/spacing" >}}
[sizing]:  {{< bootstrap/5-1/docsref "/utilities/sizing" >}}
[text]:    {{< bootstrap/5-1/docsref "/utilities/text" >}}

{{< content-ads/bottom-banner >}}
