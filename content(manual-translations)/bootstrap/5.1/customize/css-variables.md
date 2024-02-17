---
weight: 6
linkTitle: Variables CSS
title: Variables CSS · Bootstrap en Español v5.1
description: Utiliza las propiedades personalizadas de CSS de Bootstrap para un diseño y desarrollo rápidos y con visión de futuro.
type: docs
---

# Variables CSS de Bootstrap

Utiliza las propiedades personalizadas de CSS de Bootstrap para un diseño y desarrollo rápidos y con visión de futuro.

{{< content-ads/top-banner >}}

Bootstrap incluye muchas [propiedades personalizadas de CSS (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) en su CSS compilado para la personalización en tiempo real sin necesidad de volver a compilar Sass. Estas brindan un fácil acceso a los valores de uso común, como nuestros colores de tema, breakpoints y pilas de fuentes primarias, cuando trabajas en el inspector de tu navegador, un sandbox de código o en la creación de prototipos en general.

**Todas nuestras propiedades personalizadas tienen el prefijo `bs-`** para evitar conflictos con CSS de terceros.

## Variables root

Estas son las variables que incluimos (ten en cuenta que se requiere `:root`), a las que se puede acceder desde cualquier lugar donde se cargue el CSS de Bootstrap. Están ubicados en nuestro archivo `_root.scss` e incluidos en nuestros archivos dist compilados.

{{< content-ads/middle-banner-1 >}}

```css
{{< root.inline >}}
{{- $css := readFile "assets/bootstrap/5.1/dist/css/bootstrap.css" -}}
{{- $match := findRE ":root {([^}]*)}" $css 1 -}}

{{- if (eq (len $match) 0) -}}
{{- errorf "Got no matches for :root in %q!" $.Page.Path -}}
{{- end -}}

{{- index $match 0 -}}

{{< /root.inline >}}
```

## Component variables

También estamos comenzando a utilizar propiedades personalizadas como variables locales para varios componentes. De esta manera, podemos reducir nuestro CSS compilado, asegurarnos de que los estilos no se hereden en lugares como tablas anidadas y permitir algunos cambios de estilo básicos y la ampliación de los componentes de Bootstrap después de la compilación de Sass.

Echa un vistazo a nuestra documentación de tabla para obtener algunos [conocimientos sobre cómo usamos las variables CSS]({{< bootstrap/5-1/docsref "/content/tables#how-do-the-variants-and-accented-tables-work" >}}).

{{< content-ads/middle-banner-2 >}}

También estamos usando variables CSS en nuestras cuadrículas (grid), principalmente para gutters, con más uso de componentes en el futuro.

## Ejemplos

Las variables de CSS ofrecen una flexibilidad similar a las variables de Sass, pero sin necesidad de compilación antes de ser enviadas al navegador. Por ejemplo, aquí estamos restableciendo la fuente de nuestra página y los estilos de enlaces con variables CSS.

```css
body {
  font: 1rem/1.5 var(--bs-font-sans-serif);
}
a {
  color: var(--bs-blue);
}
```

{{< content-ads/middle-banner-3 >}}

## Grid breakpoints

Si bien incluimos nuestros breakpoints de cuadrícula como variables CSS (excepto `xs`), ten en cuenta que **las variables CSS no funcionan en las media queries**. Esto es por diseño en la especificación CSS para variables, pero puede cambiar en los próximos años con soporte para variables `env()`. Consulta [esta respuesta de Stack Overflow](https://stackoverflow.com/a/47212942) para obtener algunos enlaces útiles. Mientras tanto, puedes usar estas variables en otras situaciones de CSS, así como en tu JavaScript.

{{< content-ads/bottom-banner >}}
