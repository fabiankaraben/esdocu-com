---
weight: 1
linkTitle: Puntos de interrupción
title: Uso de Puntos de interrupción en Bootstrap · Bootstrap en Español v5.3
description: Los puntos de interrupción son anchos personalizables que determinan cómo se comporta tu diseño responsive en todos los tamaños de dispositivos o viewports en Bootstrap.
prev: /bootstrap/5.3/customize/optimize
---

# Uso de Puntos de interrupción en Bootstrap

Los puntos de interrupción son anchos personalizables que determinan cómo se comporta tu diseño responsive en todos los tamaños de dispositivos o viewports en Bootstrap.

{{< content-ads/top-banner >}}

Conceptos básicos {#core-concepts}
-----------------------------------

* **Los puntos de interrupción son los componentes básicos del diseño responsive.** Utilízalos para controlar cuándo se puede adaptar tu diseño a un viewport o tamaño de dispositivo en particular.
    
* **Utiliza media queries para diseñar su CSS por punto de interrupción.** Las media queries son una característica de CSS que te permite aplicar estilos condicionalmente según un conjunto de parámetros del navegador y del sistema operativo. Normalmente utilizamos `min-width` en nuestras media queries.
    
* **El objetivo es el diseño responsive mobile-first.** El CSS de Bootstrap tiene como objetivo aplicar el mínimo indispensable de estilos para hacer que un diseño funcione en el punto de interrupción más pequeño, y luego aplicar capas de estilos para ajustar ese diseño a tamaños de dispositivos más grandes. Esto optimiza tu CSS, mejora el tiempo de renderizado y brinda una excelente experiencia a tus visitantes.
    

Puntos de interrupción disponibles {#available-breakpoints}
------------------------------------------------------------

Bootstrap incluye seis puntos de interrupción predeterminados, a veces denominados _niveles de cuadrícula_, para crear de manera responsive. Estos puntos de interrupción se pueden personalizar si utilizas nuestros archivos fuente Sass.

{{< content-ads/middle-banner-1 >}}

| Punto de interrupción | Clase infix | Dimensiones |
| --------------------- | ----------- | ----------- |
| Extra pequeño         | _Ninguno_   | \<576px     |
| Pequeño               | `sm`        | ≥576px      |
| Medio                 | `md`        | ≥768px      |
| Grande                | `lg`        | ≥992px      |
| Extra grande          | `xl`        | ≥1200px     |
| Extra extra grande    | `xxl`       | ≥1400px     |

Cada punto de interrupción se eligió para contener cómodamente contenedores cuyos anchos son múltiplos de 12. Los puntos de interrupción también son representativos de un subconjunto de tamaños de dispositivos y dimensiones de viewports comunes; no se dirigen específicamente a cada caso de uso o dispositivo. En cambio, las gamas proporcionan una base sólida y consistente sobre la que construir para casi cualquier dispositivo.

Estos puntos de interrupción se pueden personalizar a través de Sass; los encontrarás en un mapa de Sass en nuestra hoja de estilo `_variables.scss` .

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

Media queries {#media-queries}
-------------------------------

{{< content-ads/middle-banner-2 >}}

Dado que Bootstrap está desarrollado para ser mobile-first, usamos un puñado de [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) para crear puntos de interrupción sensibles para nuestros diseños e interfaces. Estos puntos de interrupción se basan principalmente en anchos mínimos del viewport y nos permiten ampliar los elementos a medida que cambia el viewport.

### Min-width {#min-width}

Bootstrap utiliza principalmente los siguientes rangos de media query (o puntos de interrupción) en nuestros archivos Sass fuente para nuestro diseño, sistema de cuadrícula y componentes.

```scss {filename="SCSS"}
// Source mixins

// No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Usage

// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
```

{{< bootstrap/content-suggestion >}}

Estos mixins de Sass se traducen en nuestro CSS compilado usando los valores declarados en nuestras variables de Sass. Por ejemplo:

```scss {filename="SCSS"}
// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }
```

{{< content-ads/middle-banner-3 >}}

### Max-width {#max-width}

Ocasionalmente usamos media queries que van en la otra dirección (el tamaño de pantalla dado _o menor_):

```scss {filename="SCSS"}
// No media query necessary for xs breakpoint as it's effectively `@media (max-width: 0) { ... }`
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(xxl) { ... }

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
```

Estos mixins toman esos puntos de interrupción declarados, les restan `.02px` y los usan como nuestros valores de `max-width`. Por ejemplo:

```scss {filename="SCSS"}
// `xs` returns only a ruleset and no media query
// ... { ... }

// `sm` applies to x-small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// `md` applies to small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// `lg` applies to medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { ... }

// `xl` applies to large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { ... }

// `xxl` applies to x-large devices (large desktops, less than 1400px)
@media (max-width: 1399.98px) { ... }
```

{{< callout type="warning" emoji="" >}}
**¿Por qué restar .02px?** Los navegadores actualmente no admiten [consultas de contexto de rango](https://www.w3.org/TR/mediaqueries-4/#range-context), por lo que solucionamos las limitaciones de [`min-` y `max-` (prefijos)](https://www.w3.org/TR/mediaqueries-4/#mq-min-max) y viewports con anchos fraccionarios (que pueden ocurrir bajo ciertas condiciones en dispositivos de alta resolución, por ejemplo) usando valores con mayor precisión.
{{< /callout >}}

### Punto de interrupción único {#single-breakpoint}

{{< content-ads/middle-banner-4 >}}

También existen media queries y mixins para apuntar a un solo segmento de tamaños de pantalla utilizando los anchos de punto de interrupción mínimo y máximo.

```scss {filename="SCSS"}
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
@include media-breakpoint-only(xxl) { ... }
```

Por ejemplo, `@include media-breakpoint-only(md) { ... }` dará como resultado:

```scss {filename="SCSS"}
@media (min-width: 768px) and (max-width: 991.98px) { ... }
```

{{< bootstrap/content-suggestion >}}

### Entre puntos de interrupción {#between-breakpoints}

De manera similar, las media queries pueden abarcar múltiples anchos de puntos de interrupción:

{{< content-ads/middle-banner-5 >}}

```scss {filename="SCSS"}
@include media-breakpoint-between(md, xl) { ... }
```

Lo cual resulta en:

```scss {filename="SCSS"}
// Example
// Apply styles starting from medium devices and up to extra large devices
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
```

{{< content-ads/bottom-banner >}}
