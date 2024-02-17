---
weight: 12
linkTitle: Sombras
title: Utilidades de Sombras · Bootstrap en Español v5.1
description: Agrega o elimina sombras a los elementos con las utilidades de box-shadow.
type: docs
---

# Utilidades de Sombras de Bootstrap

Agrega o elimina sombras a los elementos con las utilidades de box-shadow.

{{< content-ads/top-banner >}}

## Ejemplos

Si bien las sombras en los componentes están deshabilitadas de forma predeterminada en Bootstrap y se pueden habilitar a través de `$enable-shadows`, también puedes agregar o eliminar rápidamente una sombra con nuestras clases de utilidad `box-shadow`. Incluye soporte para `.shadow-none` y tres tamaños predeterminados (que tienen variables asociadas para que coincidan).

{{< bootstrap/5-1/example >}}
<div class="shadow-none p-3 mb-5 bg-light rounded">Sin sombra</div>
<div class="shadow-sm p-3 mb-5 bg-body rounded">Sombra pequeña</div>
<div class="shadow p-3 mb-5 bg-body rounded">Sombra regular</div>
<div class="shadow-lg p-3 mb-5 bg-body rounded">Sombra grande</div>
{{< /bootstrap/5-1/example >}}

## Sass

{{< content-ads/middle-banner-1 >}}

### Variables

{{< bootstrap/5-1/scss-docs name="box-shadow-variables" file="scss/_variables.scss" >}}

### API de utilidades

Las utilidades ocultas se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a usar la API de utilidades.]({{< bootstrap/5-1/docsref "/utilities/api#using-the-api" >}})

{{< bootstrap/5-1/scss-docs name="utils-shadow" file="scss/_utilities.scss" >}}

{{< content-ads/bottom-banner >}}
