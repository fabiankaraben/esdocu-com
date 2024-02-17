---
weight: 22
linkTitle: Spinners
title: El componente Spinner de Bootstrap · Bootstrap en Español v5.3
description: Indica el estado de carga de un componente o página con controles giratorios Bootstrap, construidos completamente con HTML, CSS y sin JavaScript.
---

# El componente Spinner de Bootstrap

Indica el estado de carga de un componente o página con controles giratorios Bootstrap, construidos completamente con HTML, CSS y sin JavaScript.

{{< content-ads/top-banner >}}

Los “spinners” de Bootstrap se pueden usar para mostrar el estado de carga en tus proyectos. Están creados únicamente con HTML y CSS, lo que significa que no necesitas JavaScript para crearlos. Sin embargo, necesitarás algo de JavaScript personalizado para alternar su visibilidad. Su apariencia, alineación y tamaño se pueden personalizar fácilmente con nuestras increíbles clases de utilidad.

Por motivos de accesibilidad, cada cargador aquí incluye `role="status"` y un `<span class="visually-hidden">Loading...</span>`.

{{< callout type="info" emoji="" >}}
El efecto de animación de este componente depende de la media query `prefers-reduced-motion`. Consulta la [sección de movimiento reducido de nuestra documentación de accesibilidad](/bootstrap/comenzando/#reduced-motion).
{{< /callout >}}

## Estilo de solo bordes del componente Spinner {#border-spinner}

Usa los controles giratorios de borde para obtener un indicador de carga liviano.

{{< demo-iframe path="/demos/bootstrap/5.3/components/spinners/border-spinner.html" >}}
```html {filename="HTML"}
<div class="spinner-border" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
```
{{< /demo-iframe >}}

### Colores {#colors}

El spinner de borde usa `currentColor` para su `border-color`, lo que significa que puedes personalizar el color con [utilidades de color de texto](/bootstrap/utilidades/colores). Puedes utilizar cualquiera de nuestras utilidades de color de texto en el control giratorio estándar.

{{< demo-iframe path="/demos/bootstrap/5.3/components/spinners/colors.html" >}}
```html {filename="HTML"}
<div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-border text-success" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-border text-danger" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-border text-info" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-border text-dark" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
```
{{< /demo-iframe >}}

{{< callout type="info" emoji="" >}}
**¿Por qué no utilizar las utilidades `border-color`?** Cada spinner de borde especifica un borde `transparent` para al menos un lado, por lo que `.border-{color}` sobrescribirían eso.
{{< /callout >}}

## Estilo Growing spinner {#growing-spinner}

Si no te apetece un spinner de bordes, cambia al spinner de crecimiento. Si bien técnicamente no gira, ¡crece repetidamente!

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-1 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/spinners/growing-spinner-1.html" >}}
```html {filename="HTML"}
<div class="spinner-grow" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
```
{{< /demo-iframe >}}

Una vez más, esta ruleta está construida con `currentColor`, por lo que puedes cambiar fácilmente su apariencia con [utilidades de color de texto](/bootstrap/utilidades/colores). Aquí está en azul, junto con las variantes compatibles.

{{< demo-iframe path="/demos/bootstrap/5.3/components/spinners/growing-spinner-2.html" >}}
```html {filename="HTML"}
<div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-grow text-success" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-grow text-danger" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-grow text-warning" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-grow text-info" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-grow text-light" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-grow text-dark" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
```
{{< /demo-iframe >}}

## Alineación del componente Spinner {#alignment}

Los spinners en Bootstrap están construidos con `rem`s, `currentColor` y `display: inline-flex`. Esto significa que se les puede cambiar el tamaño, el color y la alineación rápidamente.

### Margen {#margin}

Usa [utilidades de margen](/bootstrap/utilidades/espaciado) como `.m-5` para facilitar el espaciado.

{{< demo-iframe path="/demos/bootstrap/5.3/components/spinners/margin.html" >}}
```html {filename="HTML"}
<div class="spinner-border m-5" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
```
{{< /demo-iframe >}}

{{< bootstrap/content-suggestion >}}

### Ubicación {#placement}

Usa [utilidades flexbox](/bootstrap/utilidades/flex), [utilidades flotantes](/bootstrap/utilidades/otras-utilidades) o utilidades de [alineación de texto](/bootstrap/utilidades/textos) para colocar los hilanderos exactamente donde los necesitas en cualquier situación.

#### Flex {#flex}

{{< demo-iframe path="/demos/bootstrap/5.3/components/spinners/flex-1.html" >}}
```html {filename="HTML"}
<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
    </div>
</div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-2 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/spinners/flex-2.html" >}}
```html {filename="HTML"}
<div class="d-flex align-items-center">
    <strong role="status">Cargando...</strong>
    <div class="spinner-border ms-auto" aria-hidden="true"></div>
</div>
```
{{< /demo-iframe >}}

#### Flotadores {#floats}

{{< demo-iframe path="/demos/bootstrap/5.3/components/spinners/floats.html" >}}
```html {filename="HTML"}
<div class="clearfix">
    <div class="spinner-border float-end" role="status">
        <span class="visually-hidden">Cargando...</span>
    </div>
</div>
```
{{< /demo-iframe >}}

#### Alinear texto {#text-align}

{{< demo-iframe path="/demos/bootstrap/5.3/components/spinners/text-align.html" >}}
```html {filename="HTML"}
<div class="text-center">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
    </div>
</div>
```
{{< /demo-iframe >}}

## Tamaño del componente Spinner {#size}

Agrega `.spinner-border-sm` y `.spinner-grow-sm` para crear un spinner más pequeño que se pueda usar rápidamente dentro de otros componentes.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/spinners/size-1.html" >}}
```html {filename="HTML"}
<div class="spinner-border spinner-border-sm" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
```
{{< /demo-iframe >}}

O usa CSS personalizado o estilos en línea para cambiar las dimensiones según sea necesario.

{{< demo-iframe path="/demos/bootstrap/5.3/components/spinners/size-2.html" >}}
```html {filename="HTML"}
<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
    <span class="visually-hidden">Cargando...</span>
</div>
```
{{< /demo-iframe >}}

## Usar componentes Spinner en botones {#buttons}

Usa spinners dentro de los botones para indicar que una acción se está procesando o teniendo lugar actualmente. También puedes cambiar el texto del spinner y utilizar el texto del botón según sea necesario.

{{< content-ads/middle-banner-3 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/spinners/buttons-1.html" >}}
```html {filename="HTML"}
<button class="btn btn-primary" type="button" disabled="">
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span class="visually-hidden" role="status">Cargando...</span>
</button>
<button class="btn btn-primary" type="button" disabled="">
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Cargando...</span>
</button>
```
{{< /demo-iframe >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/spinners/buttons-2.html" >}}
```html {filename="HTML"}
<button class="btn btn-primary" type="button" disabled="">
    <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
    <span class="visually-hidden" role="status">Cargando...</span>
</button>
<button class="btn btn-primary" type="button" disabled="">
    <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
    <span role="status">Cargando...</span>
</button>
```
{{< /demo-iframe >}}

## Personalización del CSS del componente {#css}

{{< bootstrap/content-suggestion >}}

### Variables Sass del componente {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Como parte del enfoque de evolución de variables CSS de Bootstrap, los spinners ahora usan variables CSS locales en `.spinner-border` y `.spinner-grow` para una personalización mejorada en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

Variables de spinners de borde:

[scss/_spinners.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_spinners.scss)

```scss {filename="scss/_spinners.scss"}
--#{$prefix}spinner-width: #{$spinner-width};
--#{$prefix}spinner-height: #{$spinner-height};
--#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};
--#{$prefix}spinner-border-width: #{$spinner-border-width};
--#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};
--#{$prefix}spinner-animation-name: spinner-border;
```

Variables spinners crecientes:

[scss/_spinners.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_spinners.scss)

```scss {filename="scss/_spinners.scss"}
--#{$prefix}spinner-width: #{$spinner-width};
--#{$prefix}spinner-height: #{$spinner-height};
--#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};
--#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};
--#{$prefix}spinner-animation-name: spinner-grow;
```

{{< content-ads/middle-banner-4 >}}

Para ambos spinners, se utilizan pequeñas clases modificadoras de spinners para actualizar los valores de estas variables CSS según sea necesario. Por ejemplo, la clase `.spinner-border-sm` hace lo siguiente:

[scss/_spinners.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_spinners.scss)

```scss {filename="scss/_spinners.scss"}
--#{$prefix}spinner-width: #{$spinner-width-sm};
--#{$prefix}spinner-height: #{$spinner-height-sm};
--#{$prefix}spinner-border-width: #{$spinner-border-width-sm};
```

### Variables Sass generales relacionadas {#sass-variables}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$spinner-width:           2rem;
$spinner-height:          $spinner-width;
$spinner-vertical-align:  -.125em;
$spinner-border-width:    .25em;
$spinner-animation-speed: .75s;

$spinner-width-sm:        1rem;
$spinner-height-sm:       $spinner-width-sm;
$spinner-border-width-sm: .2em;
```

{{< bootstrap/content-suggestion >}}

### Fotogramas clave {#keyframes}

Se utiliza para crear animaciones CSS para nuestros spinners. Incluido en `scss/_spinners.scss`.

[scss/_spinners.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_spinners.scss)

```scss {filename="scss/_spinners.scss"}
@keyframes spinner-border {
    to { transform: rotate(360deg) #{"/* rtl:ignore */"}; }
}
```

[scss/_spinners.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_spinners.scss)

```scss {filename="scss/_spinners.scss"}
@keyframes spinner-grow {
    0% {
    transform: scale(0);
    }
    50% {
    opacity: 1;
    transform: none;
    }
}
```

{{< content-ads/bottom-banner >}}
