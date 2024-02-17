---
weight: 2
linkTitle: Contenedores
title: Uso de Contenedores en Bootstrap · Bootstrap en Español v5.3
description: Los contenedores son un componente fundamental de Bootstrap que contiene, rellena y alinea tu contenido dentro de un dispositivo o viewport determinado.
noindex: true
---

# Uso de Contenedores en Bootstrap

Los contenedores son un componente fundamental de Bootstrap que contiene, rellena y alinea tu contenido dentro de un dispositivo o viewport determinado.

{{< content-ads/top-banner >}}

Cómo funcionan {#how-they-work}
--------------------------------

Los contenedores son el elemento de diseño más básico en Bootstrap y son **requeridos cuando usamos nuestro sistema de cuadrícula predeterminado**. Los contenedores se utilizan para contener, rellenar y (a veces) centrar el contenido dentro de ellos. Si bien los contenedores _pueden_ anidarse, la mayoría de los diseños no requieren un contenedor anidado.

Bootstrap viene con tres contenedores diferentes:

* `.container`, que establece un `max-width` en cada punto de interrupción responsive
* `.container-{breakpoint}`, que es `width: 100%` hasta el punto de interrupción especificado
* `.container-fluid`, que es `width: 100%` en todos los puntos de interrupción

La siguiente tabla ilustra cómo se compara el `max-width` de cada contenedor con el `.container` y el `.container-fluid` original en cada punto de interrupción.

{{< content-ads/middle-banner-1 >}}

Velos en acción y compáralos en nuestro [ejemplo de cuadrícula](https://getbootstrap.com/docs/5.3/examples/grid/#containers).

|                    | Extra small<br />\<576px | Small<br />≥576px | Medium<br />≥768px | Large<br />≥992px | X-Large<br />≥1200px | XX-Large<br />≥1400px |
| ------------------ | ------------------------ | ----------------- | ------------------ | ----------------- | -------------------- | --------------------- |
| `.container`       | 100%                     | 540px             | 720px              | 960px             | 1140px               | 1320px                |
| `.container-sm`    | 100%                     | 540px             | 720px              | 960px             | 1140px               | 1320px                |
| `.container-md`    | 100%                     | 100%              | 720px              | 960px             | 1140px               | 1320px                |
| `.container-lg`    | 100%                     | 100%              | 100%               | 960px             | 1140px               | 1320px                |
| `.container-xl`    | 100%                     | 100%              | 100%               | 100%              | 1140px               | 1320px                |
| `.container-xxl`   | 100%                     | 100%              | 100%               | 100%              | 100%                 | 1320px                |
| `.container-fluid` | 100%                     | 100%              | 100%               | 100%              | 100%                 | 100%                  |

Contenedor predeterminado {#default-container}
-----------------------------------------------

Nuestra clase `.container` predeterminada es un contenedor responsive de ancho fijo, lo que significa que su `max-width` cambia en cada punto de interrupción.

```html {filename="HTML"}
<div class="container">
  <!-- Content here -->
</div>
```

{{< content-ads/middle-banner-2 >}}

Contenedores responsive {#responsive-containers}
-------------------------------------------------

Los contenedores responsive te permiten especificar una clase que tiene un ancho del 100% hasta que se alcanza el punto de interrupción especificado, después de lo cual aplicamos `max-width` para cada uno de los puntos de interrupción más altos. Por ejemplo, `.container-sm` tiene un ancho 100% para comenzar hasta que se alcance el punto de interrupción `sm`, donde se ampliará con `md`, `lg`, `xl` y `xxl`.

```html {filename="HTML"}
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

Contenedores fluid {#fluid-containers}
---------------------------------------

Usa `.container-fluid` para un contenedor de ancho completo, que abarque todo el ancho del viewport.

{{< content-ads/middle-banner-3 >}}

```html {filename="HTML"}
<div class="container-fluid">
  ...
</div>
```

Personalización del CSS {#css}
-----------

### Variables Sass generales relacionadas {#sass-variables}

Como se muestra arriba, Bootstrap genera una serie de clases contenedoras predefinidas para ayudarte a crear los diseños que deseas. Puedes personalizar estas clases de contenedores predefinidas modificando el mapa Sass (que se encuentra en `_variables.scss`) que las impulsa:

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

{{< content-ads/middle-banner-4 >}}

```scss {filename="scss/_variables.scss"}
$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
);
```

Para obtener más información y ejemplos sobre cómo modificar nuestros mapas y variables de Sass, consulta la [sección de Sass de la documentación de Grid (cuadrícula)](/bootstrap/5.3/layout/grid/#css).

{{< bootstrap/content-suggestion >}}

### Sass mixins {#sass-mixins}

Además de personalizar el Sass, también puedes crear tus propios contenedores con nuestro mixin Sass.

{{< content-ads/middle-banner-5 >}}

```scss {filename="SCSS"}
// Source mixin
@mixin make-container($padding-x: $container-padding-x) {
  width: 100%;
  padding-right: $padding-x;
  padding-left: $padding-x;
  margin-right: auto;
  margin-left: auto;
}

// Usage
.custom-container {
  @include make-container();
}
```

{{< content-ads/bottom-banner >}}
