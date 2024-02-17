---
weight: 10
linkTitle: RFS
title: Uso de contenido RFS en Bootstrap · Bootstrap en Español v5.3
description: El motor de cambio de tamaño de Bootstrap escala de manera responsive las propiedades CSS comunes para utilizar mejor el espacio disponible en las ventanas gráficas y los dispositivos.
noindex: true
---

# Uso de contenido RFS en Bootstrap

El motor de cambio de tamaño de Bootstrap escala de manera responsive las propiedades CSS comunes para utilizar mejor el espacio disponible en las ventanas gráficas y los dispositivos.

{{< content-ads/top-banner >}}

## ¿Qué es RFS? {#what-is-rfs}

El proyecto paralelo de Bootstrap [RFS](https://github.com/twbs/rfs/tree/v10.0.0) es un motor de cambio de tamaño de unidades que se desarrolló inicialmente para cambiar el tamaño de las fuentes (de ahí su abreviatura de Responsive Font Sizes). Hoy en día, RFS es capaz de reescalar la mayoría de las propiedades CSS con valores unitarios como `margin`, `padding`, `border-radius` o incluso `box-shadow`.

El mecanismo calcula automáticamente los valores apropiados en función de las dimensiones de la ventana gráfica del navegador. Se compilará en funciones `calc()` con una combinación de `rem` y unidades de viewport para permitir el comportamiento de escalado responsive.

## Usando RFS {#using-rfs}

{{< content-ads/middle-banner-1 >}}

Los mixins están incluidos en Bootstrap y están disponibles una vez que incluyes el `scss`de Bootstrap. RFS también se puede [instalar de forma independiente](https://github.com/twbs/rfs/tree/v10.0.0#installation) si es necesario.

### Usando los mixins {#using-the-mixins}

El mixin `rfs()` tiene abreviaturas para `font-size`, `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `padding`, `padding-top`, `padding-right`, `padding-bottom` y `padding-left`. Ve el siguiente ejemplo en Sass y CSS compilado.

```css {filename="CSS"}
.title {
  @include font-size(4rem);
}
```

{{< content-ads/middle-banner-2 >}}

```css {filename="CSS"}
.title {
  font-size: calc(1.525rem + 3.3vw);
}

@media (min-width: 1200px) {
  .title {
    font-size: 4rem;
  }
}
```

Cualquier otra propiedad se puede pasar al mixin `rfs()` así:

```css {filename="CSS"}
.selector {
  @include rfs(4rem, border-radius);
}
```

`!important` también se puede agregar al valor que quieras:

{{< content-ads/middle-banner-3 >}}

```css {filename="CSS"}
.selector {
  @include padding(2.5rem !important);
}
```

### Usando las funciones {#using-the-functions}

Cuando no quieras usar los includes, también hay dos funciones:

* `rfs-value()` convierte a un valor `rem` si un valor en `px` es pasado, en otros casos devuelve el mismo resultado.
* `rfs-fluid-value()` devuelve la versión fluida de un valor si es necesario cambiar la escala de la propiedad.

{{< content-ads/middle-banner-4 >}}

En este ejemplo, utilizamos uno de los [mixins de puntos de interrupción responsive](/bootstrap/5.3/layout/breakpoints) integrados en Bootstrap para aplicar solo estilo debajo del punto de interrupción `lg`.

```css {filename="CSS"}
.selector {
  @include media-breakpoint-down(lg) {
    padding: rfs-fluid-value(2rem);
    font-size: rfs-fluid-value(1.125rem);
  }
}
```
    
```css {filename="CSS"}
@media (max-width: 991.98px) {
  .selector {
    padding: calc(1.325rem + 0.9vw);
    font-size: 1.125rem; /* 1.125rem is small enough, so RFS won't rescale this */
  }
}
```

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-5 >}}

## Documentación extendida {#extended-documentation}

RFS es un proyecto separado bajo la organización Bootstrap. Puedes encontrar más información sobre RFS y su configuración en su [repositorio de GitHub](https://github.com/twbs/rfs/tree/v10.0.0).

{{< content-ads/bottom-banner >}}
