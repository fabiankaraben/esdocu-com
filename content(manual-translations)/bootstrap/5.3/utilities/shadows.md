---
weight: 14
linkTitle: Sombras
title: Uso de las utilidades de Sombras en Bootstrap · Bootstrap en Español v5.3
description: Agrega o elimina sombras a elementos con utilidades de sombra box-shadow.
noindex: true
---

# Uso de las utilidades de Sombras en Bootstrap

Agrega o elimina sombras a elementos con utilidades de sombra box-shadow.

{{< content-ads/top-banner >}}

Ejemplos {#examples}
---------------------

Si bien las sombras en los componentes están deshabilitadas de forma predeterminada en Bootstrap y se pueden habilitar a través de `$enable-shadows`, también puedes agregar o eliminar rápidamente una sombra con nuestras clases de utilidad `box-shadow`. Incluye soporte para `.shadow-none` y tres tamaños predeterminados (que tienen variables asociadas para coincidir).

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/shadows/examples.html" >}}
```html {filename="HTML"}
    <div class="shadow-none p-3 mb-5 bg-body-tertiary rounded">Sin sombra</div>
    <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">Sombra pequeña</div>
    <div class="shadow p-3 mb-5 bg-body-tertiary rounded">Sombra regular</div>
    <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">Sombra más grande</div>
```
{{< /demo-iframe >}}

Personalización del CSS {#css}
-----------

{{< content-ads/middle-banner-1 >}}

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$box-shadow:                  0 .5rem 1rem rgba($black, .15);
$box-shadow-sm:               0 .125rem .25rem rgba($black, .075);
$box-shadow-lg:               0 1rem 3rem rgba($black, .175);
$box-shadow-inset:            inset 0 1px 2px rgba($black, .075);
```

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-2 >}}

### API de utilidades de Sass {#sass-utilities-api}

Las utilidades Shadow se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"shadow": (
  property: box-shadow,
  class: shadow,
  values: (
    null: var(--#{$prefix}box-shadow),
    sm: var(--#{$prefix}box-shadow-sm),
    lg: var(--#{$prefix}box-shadow-lg),
    none: none,
  )
),
```

{{< content-ads/bottom-banner >}}
