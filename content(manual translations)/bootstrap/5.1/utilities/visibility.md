---
weight: 17
linkTitle: Visibilidad
title: Utilidades de Visibilidad · Bootstrap en Español v5.1
description: Controla la visibilidad de los elementos, sin modificar su visualización, con las utilidades de visibilidad.
next: /bootstrap/5.1/extend/approach
type: docs
---

# Utilidades de Visibilidad de Bootstrap

Controla la visibilidad de los elementos, sin modificar su visualización, con las utilidades de visibilidad.

{{< content-ads/top-banner >}}

Establece la propiedad `visibility` de los elementos con nuestras utilidades de visibilidad. Estas clases de utilidad no modifican el valor `display` en absoluto y no afectan el diseño: los elementos `.invisible` siguen ocupando espacio en la página.

{{< bootstrap/5-1/callout warning >}}
Los elementos con la clase `.invisible` se ocultarán tanto visualmente como para los usuarios de lectores de pantalla/tecnología de asistencia.
{{< /bootstrap/5-1/callout >}}

Aplica `.visible` o `.invisible` según sea necesario.

```html
<div class="visible">...</div>
<div class="invisible">...</div>
```

{{< content-ads/middle-banner-1 >}}

```scss
// Class
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}
```

## Sass

### API de utilidades

Las utilidades de visibilidad se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< bootstrap/5-1/docsref "/utilities/api#using-the-api" >}})

{{< bootstrap/5-1/scss-docs name="utils-visibility" file="scss/_utilities.scss" >}}

{{< content-ads/bottom-banner >}}
