---
weight: 6
linkTitle: Componentes
title: Los Componentes de Bootstrap · Bootstrap en Español v5.3
description: Aprende cómo y por qué construimos casi todos nuestros componentes de manera responsive y con clases base y modificadoras.
---

# Los Componentes de Bootstrap

Aprende cómo y por qué construimos casi todos nuestros componentes de manera responsive y con clases base y modificadoras.

{{< content-ads/top-banner >}}

Clases base {#base-classes}
----------------------------

Los componentes de Bootstrap están construidos en gran medida con una nomenclatura de modificador de base. Agrupamos tantas propiedades compartidas como sea posible en una clase base, como `.btn`, y luego agrupamos estilos individuales para cada variante en clases modificadoras, como `.btn-primary` o `.btn-success`.

Para construir nuestras clases modificadoras, usamos los bucles `@each` de Sass para iterar sobre un mapa de Sass. Esto es especialmente útil para generar variantes de un componente mediante nuestro `$theme-colors` y crear variantes responsive para cada punto de interrupción. A medida que personalices estos mapas de Sass y los vuelvas a compilar, verás automáticamente tus cambios reflejados en estos bucles.

Consulta [nuestra documentación de mapas y bucles de Sass](/bootstrap/5.3/customize/sass/#maps-and-loops) para saber cómo personalizar estos bucles y extender el enfoque de modificador de base de Bootstrap a tu propio código.

Modificadores {#modifiers}
---------------------------

{{< content-ads/middle-banner-1 >}}

Muchos de los componentes de Bootstrap están construidos con un enfoque de clase modificadora de base. Esto significa que la mayor parte del estilo está contenido en una clase base (por ejemplo, `.btn`), mientras que las variaciones de estilo se limitan a clases modificadoras (por ejemplo, `.btn-danger`). Estas clases modificadoras se crean a partir del mapa `$theme-colors` para personalizar el número y el nombre de nuestras clases modificadoras.

Aquí hay dos ejemplos de cómo recorremos el mapa `$theme-colors` para generar modificadores para los componentes `.alert` y `.list-group`.

[scss/_alert.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_alert.scss)

```scss {filename="scss/_alert.scss"}
// Generate contextual modifier classes for colorizing the alert
@each $state in map-keys($theme-colors) {
  .alert-#{$state} {
    --#{$prefix}alert-color: var(--#{$prefix}#{$state}-text-emphasis);
    --#{$prefix}alert-bg: var(--#{$prefix}#{$state}-bg-subtle);
    --#{$prefix}alert-border-color: var(--#{$prefix}#{$state}-border-subtle);
    --#{$prefix}alert-link-color: var(--#{$prefix}#{$state}-text-emphasis);
  }
}
```

[scss/_list-group.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_list-group.scss)

{{< content-ads/middle-banner-2 >}}

```scss {filename="scss/_list-group.scss"}
// List group contextual variants
//
// Add modifier classes to change text and background color on individual items.
// Organizationally, this must come after the `:hover` states.

@each $state in map-keys($theme-colors) {
  .list-group-item-#{$state} {
    --#{$prefix}list-group-color: var(--#{$prefix}#{$state}-text-emphasis);
    --#{$prefix}list-group-bg: var(--#{$prefix}#{$state}-bg-subtle);
    --#{$prefix}list-group-border-color: var(--#{$prefix}#{$state}-border-subtle);
    --#{$prefix}list-group-action-hover-color: var(--#{$prefix}emphasis-color);
    --#{$prefix}list-group-action-hover-bg: var(--#{$prefix}#{$state}-border-subtle);
    --#{$prefix}list-group-action-active-color: var(--#{$prefix}emphasis-color);
    --#{$prefix}list-group-action-active-bg: var(--#{$prefix}#{$state}-border-subtle);
    --#{$prefix}list-group-active-color: var(--#{$prefix}#{$state}-bg-subtle);
    --#{$prefix}list-group-active-bg: var(--#{$prefix}#{$state}-text-emphasis);
    --#{$prefix}list-group-active-border-color: var(--#{$prefix}#{$state}-text-emphasis);
  }
}
```

{{< bootstrap/content-suggestion >}}

Responsive {#responsive}
-------------------------

Estos bucles de Sass tampoco se limitan a mapas de colores. También puedes generar variaciones responsive de tus componentes. Tomemos, por ejemplo, nuestra alineación responsive de los menús desplegables donde mezclamos un bucle `@each` para el mapa Sass `$grid-breakpoints` con una media query include.

[scss/_dropdown.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_dropdown.scss)

{{< content-ads/middle-banner-3 >}}

```scss {filename="scss/_dropdown.scss"}
// We deliberately hardcode the `bs-` prefix because we check
// this custom property in JS to determine Popper's positioning

@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    .dropdown-menu#{$infix}-start {
      --bs-position: start;

      &[data-bs-popper] {
        right: auto;
        left: 0;
      }
    }

    .dropdown-menu#{$infix}-end {
      --bs-position: end;

      &[data-bs-popper] {
        right: 0;
        left: auto;
      }
    }
  }
}
```

Si modificas tus `$grid-breakpoints`, tus cambios se aplicarán a todos los bucles que se iteren sobre ese mapa.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

Para obtener más información y ejemplos sobre cómo modificar nuestros mapas y variables de Sass, consulta [la sección CSS de la documentación de Grid](/bootstrap/5.3/layout/grid/#css).

{{< content-ads/middle-banner-4 >}}

Crear el tuyo propio {#creating-your-own}
------------------------------------------

Te animamos a que adoptes estas pautas cuando construyas con Bootstrap para crear tus propios componentes. Nosotros mismos hemos ampliado este enfoque a los componentes personalizados en nuestra documentación y ejemplos. Los componentes como nuestros callouts se construyen igual que los componentes proporcionados, con clases base y modificadoras.

{{< demo-iframe path="/demos/bootstrap/5.3/customize/components/creating-your-own-1.html" >}}
```html {filename="HTML"}
    <div class="bd-callout">
        <strong>Esto es un aviso.</strong> Lo creamos personalizado para nuestros documentación para que nuestros
        mensajes se destaquen. Tiene tres variantes mediante clases de modificadores.
    </div>
```
{{< /demo-iframe >}}

En tu CSS, tendrías algo como lo siguiente donde la mayor parte del estilo se realiza a través de `.callout`. Luego, los estilos únicos entre cada variante se controlan mediante una clase modificadora.

```css {filename="CSS"}
// Base class
.callout {}

// Modifier classes
.callout-info {}
.callout-warning {}
.callout-danger {}
```

{{< content-ads/middle-banner-5 >}}

Para las leyendas, ese estilo único es solo un `border-left-color`. Cuando combinas esa clase base con una de esas clases modificadoras, obtienes tu familia completa de componentes:

{{< demo-iframe path="/demos/bootstrap/5.3/customize/components/creating-your-own-2.html" >}}
```html {filename="HTML"}
    <div class="bd-callout bd-callout-info">
        <strong>Esta es una leyenda informativa.</strong> Texto de ejemplo para mostrarlo en acción.
    </div>
    <div class="bd-callout bd-callout-warning">
        <strong>Esta es una leyenda de advertencia.</strong> Texto de ejemplo para mostrarlo en acción.
    </div>
    <div class="bd-callout bd-callout-danger">
        <strong>Esta es una advertencia de peligro.</strong> Texto de ejemplo para mostrarlo en acción.
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/bottom-banner >}}
