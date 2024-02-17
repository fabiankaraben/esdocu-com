---
weight: 6
linkTitle: Visualmente oculto
title: Elementos visualmente oculto · Bootstrap en Español v5.1
description: Utiliza estos helpers para ocultar elementos visualmente, manteniéndolos accesibles para las tecnologías de asistencia.
type: docs
noindex: true
---

# Elementos visualmente oculto en Bootstrap

Utiliza estos helpers para ocultar elementos visualmente, manteniéndolos accesibles para las tecnologías de asistencia.

{{< content-ads/top-banner >}}

Oculta visualmente un elemento y, al mismo tiempo, permite que esté expuesto a tecnologías de asistencia (como lectores de pantalla) con `.visually-hidden`. Usa `.visually-hidden-focusable` para ocultar visualmente un elemento de forma predeterminada, pero mostrarlo cuando está enfocado (por ejemplo, por un usuario que solo usa el teclado). `.visually-hidden-focusable` también se puede aplicar a un contenedor, gracias a `:focus-within`, el contenedor se mostrará cuando cualquier elemento secundario del contenedor reciba el foco.

{{< bootstrap/5-1/example >}}
<h2 class="visually-hidden">Título para lectores de pantalla</h2>
<a class="visually-hidden-focusable" href="#content">Saltar al contenido principal</a>
<div class="visually-hidden-focusable">Un contenedor con un <a href="#">elemento enfocable</a>.</div>
{{< /bootstrap/5-1/example >}}

Ambos `visually-hidden` y `visually-hidden-focusable` pueden ser usados como mixins.

```scss
// Uso como un mixin

.visually-hidden-title {
  @include visually-hidden;
}

.skip-navigation {
  @include visually-hidden-focusable;
}
```

{{< content-ads/bottom-banner >}}
