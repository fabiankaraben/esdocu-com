---
weight: 4
linkTitle: Anillo de enfoque
title: Uso del ayudante para Anillo de enfoque en Bootstrap · Bootstrap en Español v5.3
description: Clases de utilidad que te permiten agregar y modificar estilos de anillos de enfoque personalizados a elementos y componentes.
noindex: true
---

# Uso del ayudante para Anillo de enfoque en Bootstrap

Clases de utilidad que te permiten agregar y modificar estilos de anillos de enfoque personalizados a elementos y componentes.

{{< content-ads/top-banner >}}

El asistente `.focus-ring` elimina el `outline` predeterminado en `:focus`, reemplazándolo con un `box-shadow` que se puede personalizar de forma más amplia. La nueva sombra se compone de una serie de variables CSS, heredadas del nivel `:root`, que se pueden modificar para cualquier elemento o componente.

Ejemplo {#example}
-------------------

Haz clic directamente en el siguiente enlace para ver el anillo de enfoque en acción, o en el ejemplo siguiente y luego presiona Tab.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/focus-ring/example.html" >}}
```html {filename="HTML"}
    <a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
        Anillo de enfoque personalizado
    </a>
```
{{< /demo-iframe >}}

Personalizar {#customize}
--------------------------

{{< content-ads/middle-banner-1 >}}

Modifica el estilo de un anillo de enfoque con nuestras variables CSS, variables Sass, utilidades o estilos personalizados.

### Variables CSS {#css-variables}

Modifica las variables CSS `--bs-focus-ring-*` según sea necesario para cambiar la apariencia predeterminada.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/focus-ring/css-variables-1.html" >}}
```html {filename="HTML"}
    <a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--bs-focus-ring-color: rgba(var(--bs-success-rgb), .25)">
        Anillo de enfoque verde
    </a>
```
{{< /demo-iframe >}}

`.focus-ring` establece estilos a través de variables CSS globales que se pueden sobrescribir en cualquier elemento principal, como se muestra arriba. Estas variables se generan a partir de sus contrapartes variables de Sass.

{{< content-ads/middle-banner-2 >}}

[scss/_root.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_root.scss)

```scss {filename="scss/_root.scss"}
--#{$prefix}focus-ring-width: #{$focus-ring-width};
--#{$prefix}focus-ring-opacity: #{$focus-ring-opacity};
--#{$prefix}focus-ring-color: #{$focus-ring-color};
```

Por defecto, no hay `--bs-focus-ring-x`, `--bs-focus-ring-y`, o `--bs-focus-ring-blur`, pero proporcionamos variables CSS con respaldo a los valores iniciales `0` . Modifícalos para cambiar la apariencia predeterminada.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/focus-ring/css-variables-2.html" >}}
```html {filename="HTML"}
    <a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" style="--bs-focus-ring-x: 10px; --bs-focus-ring-y: 10px; --bs-focus-ring-blur: 4px">
        Anillo de enfoque desplazado borroso
    </a>
```
{{< /demo-iframe >}}

### Variables Sass generales relacionadas {#sass-variables}

{{< content-ads/middle-banner-3 >}}

Personaliza las variables Sass del anillo de enfoque para modificar todo el uso de los estilos del anillo de enfoque en tu proyecto impulsado por Bootstrap.

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$focus-ring-width:      .25rem;
$focus-ring-opacity:    .25;
$focus-ring-color:      rgba($primary, $focus-ring-opacity);
$focus-ring-blur:       0;
$focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color;
```

### API de utilidades de Sass {#sass-utilities-api}

Además de `.focus-ring`, tenemos varias utilidades `.focus-ring-*` para modificar los valores predeterminados de la clase auxiliar. Modifica el color con cualquiera de nuestros [colores de tema](/bootstrap/5.3/customize/color/#theme-colors). Ten en cuenta que es posible que las variantes clara y oscura no sean visibles en todos los colores de fondo debido a la compatibilidad con el modo de color actual.

{{< content-ads/middle-banner-4 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/focus-ring/sass-utilities-api.html" >}}
```html {filename="HTML"}
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">Enfoque principal</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">Enfoque secundario</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">Enfoque en éxito</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">Enfoque en peligro</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">Enfoque en advertencia</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">Enfoque en información</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">Enfoque claro</a></p>
    <p><a href="#" class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">Enfoque oscuro</a></p>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

Las utilidades de Focus Ring se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprenda a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"focus-ring": (
    css-var: true,
    css-variable-name: focus-ring-color,
    class: focus-ring,
    values: map-loop($theme-colors-rgb, rgba-css-var, "$key", "focus-ring")
),
```

{{< content-ads/bottom-banner >}}
