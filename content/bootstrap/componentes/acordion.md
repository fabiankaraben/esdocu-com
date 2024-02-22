---
weight: 1
linkTitle: Acordeón
title: El componente Acordeón de Bootstrap · Bootstrap en Español v5.3
description: Construye acordeones que se contraen verticalmente en combinación con nuestro complemento Collapse JavaScript.
prev: /bootstrap/formularios
---

# El componente Acordeón de Bootstrap

Construye acordeones que se contraen verticalmente en combinación con nuestro complemento Collapse JavaScript.

{{< content-ads/top-banner >}}

## Cómo funciona el componente Acordeón {#how-it-works}

El acordeón usa [collapse](/bootstrap/componentes/collapse) internamente para hacerlo plegable. Para representar un acordeón expandido, agrega la clase `.open` en `.accordion`.

{{< callout type="info" emoji="" >}}
El efecto de animación de este componente depende de la media query `prefers-reduced-motion`. Consulta la [sección de movimiento reducido de nuestra documentación de accesibilidad](/bootstrap/comenzando/#reduced-motion).
{{< /callout >}}

## Ejemplo del componente Acordeón {#example}

Haz clic en los acordeones a continuación para expandir/contraer el contenido del acordeón.

{{< demo-iframe path="/demos/bootstrap/5.3/components/accordion/example.html" >}}
```html {filename="HTML"}
<div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Acordeón Item #1
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>Este es el cuerpo de acordeón del primer elemento.</strong> Se muestra de forma
                predeterminada, hasta que el complemento collapse agrega las clases apropiadas que usamos para
                diseñar cada elemento. Estas clases controlan la apariencia general, así como mostrar y ocultar
                mediante transiciones CSS. Puedes modificar todo esto con CSS personalizado o sobrescribendo
                nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede
                ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Acordeón Item #2
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>Este es el cuerpo de acordeón del segundo elemento.</strong> Está oculto de forma
                predeterminada, hasta que el complemento collapse agrega las clases apropiadas que usamos para
                diseñar cada elemento. Estas clases controlan la apariencia general, así como mostrar y ocultar
                mediante transiciones CSS. Puedes modificar todo esto con CSS personalizado o sobrescribendo
                nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede
                ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Acordeón Item #3
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>Este es el cuerpo de acordeón del tercer elemento.</strong> Está oculto de forma
                predeterminada, hasta que el complemento collapse agrega las clases apropiadas que usamos para
                diseñar cada elemento. Estas clases controlan la apariencia general, así como mostrar y ocultar
                mediante transiciones CSS. Puedes modificar todo esto con CSS personalizado o sobrescribendo
                nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede
                ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
            </div>
        </div>
    </div>
</div>
```
{{< /demo-iframe >}}

### Las clases Flush {#flush}

Agrega `.accordion-flush` para eliminar algunos bordes y esquinas redondeadas para representar los acordeones de borde a borde con su contenedor principal.

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/components/accordion/flush.html" >}}
```html {filename="HTML"}
<div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Acordeón Item #1
            </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                Contenido de marcador de posición para este acordeón, cuyo objetivo es demostrar la clase <code>.accordion-flush</code>. Este es el cuerpo de acordeón del primer elemento.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Acordeón Item #2
            </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                Contenido de marcador de posición para este acordeón, cuyo objetivo es
                demostrar la clase <code>.accordion-flush</code>. Este es el cuerpo de acordeón del segundo
                elemento. Imaginemos que esto está lleno de contenido real.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Acordeón Item #3
            </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Contenido de marcador de posición para este acordeón, cuyo objetivo es
                demostrar la clase <code>.accordion-flush</code>. Este es el cuerpo de acordeón del tercer
                elemento. Aquí no sucede nada más interesante en términos de contenido, sino simplemente llenar
                el espacio para que parezca, al menos a primera vista, un poco más representativo de cómo se
                vería en una aplicación del mundo real.</div>
        </div>
    </div>
</div>
```
{{< /demo-iframe >}}

### Acordeón siempre abierto {#always-open}

Omite el atributo `data-bs-parent` en cada `.accordion-collapse` para que los elementos del acordeón permanezcan abiertos cuando se abre otro elemento.

{{< demo-iframe path="/demos/bootstrap/5.3/components/accordion/always-open.html" >}}
```html {filename="HTML"}
<div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Acordeón Item #1
            </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
                <strong>Este es el cuerpo de acordeón del primer elemento.</strong> Se muestra de forma
                predeterminada, hasta que el complemento collapse agrega las clases apropiadas que usamos para
                diseñar cada elemento. Estas clases controlan la apariencia general, así como mostrar y ocultar
                mediante transiciones CSS. Puedes modificar todo esto con CSS personalizado o sobrescribendo
                nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede
                ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Acordeón Item #2
            </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
                <strong>Este es el cuerpo de acordeón del segundo elemento.</strong> Está oculto de forma
                predeterminada, hasta que el complemento collapse agrega las clases apropiadas que usamos para
                diseñar cada elemento. Estas clases controlan la apariencia general, así como mostrar y ocultar
                mediante transiciones CSS. Puedes modificar todo esto con CSS personalizado o sobrescribendo
                nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede
                ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Acordeón Item #3
            </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
                <strong>Este es el cuerpo de acordeón del tercer elemento.</strong> Está oculto de forma
                predeterminada, hasta que el complemento collapse agrega las clases apropiadas que usamos para
                diseñar cada elemento. Estas clases controlan la apariencia general, así como mostrar y ocultar
                mediante transiciones CSS. Puedes modificar todo esto con CSS personalizado o sobrescribendo
                nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede
                ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
            </div>
        </div>
    </div>
</div>
```
{{< /demo-iframe >}}

## Accesibilidad del componente Acordeón {#accessibility}

Lee la [sección de accesibilidad de collapse](/bootstrap/componentes/collapse/#accessibility) para obtener más información.

{{< content-ads/middle-banner-1 >}}

## Personalización del CSS del componente {#css}

{{< bootstrap/content-suggestion >}}

### Variables Sass del componente Acordeón {#variables}

<br/>
<span class="py-1 px-3 text-green-700 border border-green-700 rounded-md">Agregado en v5.2.0</span>

Como parte del enfoque de variables CSS en evolución de Bootstrap, los acordeones ahora usan variables CSS locales en `.accordion` para una personalización mejorada en tiempo real. Los valores de las variables CSS se establecen a través de Sass, por lo que la personalización de Sass también es compatible.

[scss/_accordion.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_accordion.scss)

```scss {filename="scss/_accordion.scss"}
--#{$prefix}accordion-color: #{$accordion-color};
--#{$prefix}accordion-bg: #{$accordion-bg};
--#{$prefix}accordion-transition: #{$accordion-transition};
--#{$prefix}accordion-border-color: #{$accordion-border-color};
--#{$prefix}accordion-border-width: #{$accordion-border-width};
--#{$prefix}accordion-border-radius: #{$accordion-border-radius};
--#{$prefix}accordion-inner-border-radius: #{$accordion-inner-border-radius};
--#{$prefix}accordion-btn-padding-x: #{$accordion-button-padding-x};
--#{$prefix}accordion-btn-padding-y: #{$accordion-button-padding-y};
--#{$prefix}accordion-btn-color: #{$accordion-button-color};
--#{$prefix}accordion-btn-bg: #{$accordion-button-bg};
--#{$prefix}accordion-btn-icon: #{escape-svg($accordion-button-icon)};
--#{$prefix}accordion-btn-icon-width: #{$accordion-icon-width};
--#{$prefix}accordion-btn-icon-transform: #{$accordion-icon-transform};
--#{$prefix}accordion-btn-icon-transition: #{$accordion-icon-transition};
--#{$prefix}accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon)};
--#{$prefix}accordion-btn-focus-border-color: #{$accordion-button-focus-border-color};
--#{$prefix}accordion-btn-focus-box-shadow: #{$accordion-button-focus-box-shadow};
--#{$prefix}accordion-body-padding-x: #{$accordion-body-padding-x};
--#{$prefix}accordion-body-padding-y: #{$accordion-body-padding-y};
--#{$prefix}accordion-active-color: #{$accordion-button-active-color};
--#{$prefix}accordion-active-bg: #{$accordion-button-active-bg};
```

### Variables Sass generales relacionadas {#sass-variables}

{{< bootstrap/content-suggestion >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$accordion-padding-y:                     1rem;
$accordion-padding-x:                     1.25rem;
$accordion-color:                         var(--#{$prefix}body-color);
$accordion-bg:                            var(--#{$prefix}body-bg);
$accordion-border-width:                  var(--#{$prefix}border-width);
$accordion-border-color:                  var(--#{$prefix}border-color);
$accordion-border-radius:                 var(--#{$prefix}border-radius);
$accordion-inner-border-radius:           subtract($accordion-border-radius, $accordion-border-width);

$accordion-body-padding-y:                $accordion-padding-y;
$accordion-body-padding-x:                $accordion-padding-x;

$accordion-button-padding-y:              $accordion-padding-y;
$accordion-button-padding-x:              $accordion-padding-x;
$accordion-button-color:                  var(--#{$prefix}body-color);
$accordion-button-bg:                     var(--#{$prefix}accordion-bg);
$accordion-transition:                    $btn-transition, border-radius .15s ease;
$accordion-button-active-bg:              var(--#{$prefix}primary-bg-subtle);
$accordion-button-active-color:           var(--#{$prefix}primary-text-emphasis);

$accordion-button-focus-border-color:     $input-focus-border-color;
$accordion-button-focus-box-shadow:       $btn-focus-box-shadow;

$accordion-icon-width:                    1.25rem;
$accordion-icon-color:                    $body-color;
$accordion-icon-active-color:             $primary-text-emphasis;
$accordion-icon-transition:               transform .2s ease-in-out;
$accordion-icon-transform:                rotate(-180deg);

$accordion-button-icon:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
$accordion-button-active-icon:  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-active-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
```

{{< content-ads/bottom-banner >}}
