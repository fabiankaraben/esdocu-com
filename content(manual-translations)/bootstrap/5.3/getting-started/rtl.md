---
weight: 11
linkTitle: RTL
title: Uso de contenido RTL en Bootstrap · Bootstrap en Español v5.3
description: Aprende cómo habilitar la compatibilidad con texto de derecha a izquierda en Bootstrap en nuestro layout, componentes y utilidades.
noindex: true
---

# Uso de contenido RTL en Bootstrap

Aprende cómo habilitar la compatibilidad con texto de derecha a izquierda en Bootstrap en nuestro layout, componentes y utilidades.

{{< content-ads/top-banner >}}

## Familiarízate {#get-familiar}

Recomendamos familiarizarte con Bootstrap primero leyendo nuestra [página de introducción para comenzar](/bootstrap/5.3/getting-started/introduction). Una vez que lo hayas leído, continúa leyendo aquí para saber cómo habilitar RTL.

Quizás también quieras leer sobre [el proyecto RTLCSS](https://rtlcss.com), ya que impulsa nuestro enfoque de RTL.

{{< callout type="warning" emoji="" >}}
**La función RTL de Bootstrap aún es experimental** y evolucionará según los comentarios de los usuarios. ¿Viste algo o tienes alguna mejora que sugerir? [Abre un issue](https://github.com/twbs/bootstrap/issues/new/choose), nos encantaría conocer tus ideas.
{{< /callout >}}

## HTML requerido {#required-html}

Existen dos requisitos estrictos para habilitar RTL en páginas impulsadas por Bootstrap.

1.  Establece `dir="rtl"` en el elemento `<html>`.
2.  Agrega un atributo `lang` apropiado, como `lang="ar"`, en el elemento `<html>`.

A partir de ahí, deberás incluir una versión RTL de nuestro CSS. Por ejemplo, aquí está la hoja de estilo de nuestro CSS compilado y minimizado con RTL habilitado:

{{< content-ads/middle-banner-1 >}}

```html {filename="HTML"}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css" integrity="sha384-nU14brUcp6StFntEOOEBvcJm4huWjB0OcIeQ3fltAfSmuZFrkAif0T+UtNGlKKQv" crossorigin="anonymous">
```

### Plantilla de inicio {#starter-template}

Puedes ver los requisitos anteriores reflejados en esta plantilla inicial RTL modificada.

```html {filename="HTML"}
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css" integrity="sha384-nU14brUcp6StFntEOOEBvcJm4huWjB0OcIeQ3fltAfSmuZFrkAif0T+UtNGlKKQv" crossorigin="anonymous">

    <title>مرحبًا بالعالم!</title>
  </head>
  <body>
    <h1>مرحبًا بالعالم!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```    

### Ejemplos RTL {#rtl-examples}

Empieza con uno de nuestros varios [ejemplos RTL](https://getbootstrap.com/docs/5.3/examples/#rtl).

## Acercarse {#approach}

Nuestro enfoque para crear soporte RTL en Bootstrap viene con dos decisiones importantes que afectan la forma en que escribimos y usamos nuestro CSS:

{{< content-ads/middle-banner-2 >}}

1.  **Primero, decidimos construirlo con el proyecto [RTLCSS](https://rtlcss.com).** Esto nos brinda algunas características poderosas para administrar cambios y sobrescrituras al pasar de LTR a RTL. También nos permite crear dos versiones de Bootstrap a partir de una base de código.
    
2.  **En segundo lugar, hemos cambiado el nombre de un puñado de clases direccionales para adoptar un enfoque de propiedades lógicas.** La mayoría de ustedes ya han interactuado con propiedades lógicas gracias a nuestras utilidades flex: reemplazan las propiedades de dirección como `left` y `right` a favor de `start` y `end`. Eso hace que los nombres y valores de las clases sean apropiados para LTR y RTL sin ningún costo adicional.
    

Por ejemplo, en lugar de `.ml-3` para `margin-left`, usa `.ms-3`.

Trabajar con RTL, a través de nuestro Sass fuente o CSS compilado, no debería ser muy diferente de nuestro LTR predeterminado.

## Personalizar desde la fuente {#customize-from-source}

Cuando se trata de [personalización](/bootstrap/5.3/customize/sass), la forma preferida es aprovechar variables, mapas, y mixins. Este enfoque funciona igual para RTL, incluso si se procesa posteriormente a partir de los archivos compilados, gracias a [cómo funciona RTLCSS](https://rtlcss.com/learn/getting-started/why-rtlcss).

### Valores RTL personalizados {#custom-rtl-values}

{{< content-ads/middle-banner-3 >}}

Usando la [directivas de valor RTLCSS](https://rtlcss.com/learn/usage-guide/value-directives), puedes hacer que una variable genere un valor diferente para RTL. Por ejemplo, para disminuir el peso de `$font-weight-bold` en todo el código base, puedes usar la sintaxis `/*rtl: {value}*/`:

```scss {filename="SCSS"}
$font-weight-bold: 700 #{/* rtl:600 */} !default;
```

{{< bootstrap/content-suggestion >}}

Lo que generaría lo siguiente para nuestro CSS y RTL predeterminados:

```css {filename="CSS"}
/* bootstrap.css */
dt {
  font-weight: 700 /* rtl:600 */;
}

/* bootstrap.rtl.css */
dt {
  font-weight: 600;
}
```

### Pila de fuentes alternativas {#alternative-font-stack}

En el caso de que estés usando una fuente personalizada, ten en cuenta que no todas las fuentes admiten el alfabeto no latino. Para cambiar de la familia paneuropea a la árabe, es posible que necesites usar `/*rtl:insert: {value}*/` en tu pila de fuentes para modificar los nombres de las familias de fuentes.

Por ejemplo, para cambiar de la fuente `Helvetica Neue` para LTR a `Helvetica Neue Arabic` para RTL, tu código Sass podría verse así:

{{< content-ads/middle-banner-4 >}}

```scss {filename="SCSS"}
$font-family-sans-serif:
  Helvetica Neue #{"/* rtl:insert:Arabic */"},
  // Cross-platform generic font family (default user interface font)
  system-ui,
  // Safari for macOS and iOS (San Francisco)
  -apple-system,
  // Chrome < 56 for macOS (San Francisco)
  BlinkMacSystemFont,
  // Windows
  "Segoe UI",
  // Android
  Roboto,
  // Basic web fallback
  Arial,
  // Linux
  "Noto Sans",
  // Sans serif fallback
  sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
```

### LTR y RTL al mismo tiempo {#ltr-and-rtl-at-the-same-time}

¿Necesitas LTR y RTL en la misma página? Gracias a [RTLCSS String Maps](https://rtlcss.com/learn/usage-guide/string-map), esto es bastante sencillo. Envuelve tus `@import` con una clase y establece una regla de cambio de nombre personalizada para RTLCSS:

```scss {filename="SCSS"}
/* rtl:begin:options: {
  "autoRename": true,
  "stringMap":[ {
    "name": "ltr-rtl",
    "priority": 100,
    "search": ["ltr"],
    "replace": ["rtl"],
    "options": {
      "scope": "*",
      "ignoreCase": false
    }
  } ]
} */
.ltr {
  @import "../node_modules/bootstrap/scss/bootstrap";
}
/*rtl:end:options*/
```

Después de ejecutar Sass y luego RTLCSS, cada selector en tus archivos CSS tendrá antepuesto `.ltr` y `.rtl` para RTL. Ahora puedes usar ambos archivos en la misma página y simplemente usar `.ltr` o `.rtl` en los envoltorios de tus componentes para usar una dirección u otra.

{{< callout type="warning" emoji="" >}}
**Casos extremos y limitaciones conocidas** a considerar cuando se trabaja con una implementación combinada de LTR y RTL:

1.  Al cambiar `.ltr` y `.rtl`, asegúrate de agregar los atributos `dir` y `lang` en consecuencia.
2.  Cargar ambos archivos puede ser un verdadero cuello de botella en el rendimiento: considera algo de [optimización](/bootstrap/5.3/customize/optimize) y tal vez intentes [carga uno de esos archivos de forma asincrónica](https://www.filamentgroup.com/lab/load-css-simpler).
3.  Anidar estilos de esta manera evitará que nuestro mixin `form-validation-state()` funcione según lo previsto, por lo que requerirá que lo modifiques un poco por tu cuenta. [Ver #31223](https://github.com/twbs/bootstrap/issues/31223).
{{< /callout >}}

{{< bootstrap/content-suggestion >}}

## El caso del breadcrumb {#the-breadcrumb-case}

El [separador de breadcrumb](/bootstrap/5.3/components/breadcrumb/ "Página todavía no traducida") es el único caso que requiere una variable completamente nueva, concretamente `$breadcrumb-divider-flipped`, cuyo valor predeterminado es `$breadcrumb-divider`.

## Recursos adicionales {#additional-resources}

* [RTLCSS](https://rtlcss.com)
* [Estilo en RTL 101](https://rtlstyling.com/posts/rtl-styling)

{{< content-ads/bottom-banner >}}
