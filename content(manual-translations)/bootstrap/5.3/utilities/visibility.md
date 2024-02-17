---
weight: 19
linkTitle: Visibilidad
title: Uso de las utilidades de Visibilidad en Bootstrap · Bootstrap en Español v5.3
description: Controla la visibilidad de los elementos, sin modificar su visualización, con utilidades de visibilidad.
noindex: true
---

# Uso de las utilidades de Visibilidad en Bootstrap

Controla la visibilidad de los elementos, sin modificar su visualización, con utilidades de visibilidad.

{{< content-ads/top-banner >}}

Establece la `visibility` de los elementos con nuestras utilidades de visibilidad. Estas clases de utilidad no modifican el valor `display` en absoluto y no afectan el diseño: los elementos `.invisible` aún ocupan espacio en la página.

{{< callout type="warning" emoji="" >}}
Los elementos con la clase `.invisible` se ocultarán _tanto_ visualmente como para los usuarios de tecnología de asistencia/lectores de pantalla.
{{< /callout >}}

Aplica `.visible` o `.invisible` según sea necesario.

```html {filename="HTML"}
<div class="visible">...</div>
<div class="invisible">...</div>
```

{{< content-ads/middle-banner-1 >}}

```css {filename="CSS"}
// Class
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}
```

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

### API de utilidades de Sass {#sass-utilities-api}

{{< content-ads/middle-banner-2 >}}

Las utilidades de visibilidad se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"visibility": (
  property: visibility,
  class: null,
  values: (
    visible: visible,
    invisible: hidden,
  )
),
```

{{< content-ads/bottom-banner >}}
