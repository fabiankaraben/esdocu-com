---
weight: 12
linkTitle: Visualmente oculto
title: Uso del ayudante para contenido visualmente oculto en Bootstrap · Bootstrap en Español v5.3
description: Usa estos ayudantes para ocultar elementos visualmente pero mantenlos accesibles para las tecnologías de asistencia.
next: /bootstrap/5.3/utilities/api
noindex: true
---

# Uso del ayudante para contenido visualmente oculto en Bootstrap

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

{{< content-ads/bottom-banner >}}
