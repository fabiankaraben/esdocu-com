---
weight: 8
linkTitle: Stacks
title: Uso del ayudante de Stacks en Bootstrap · Bootstrap en Español v5.3
description: Ayudantes que se basan en nuestras utilidades flexbox para hacer que el diseño de componentes sea más rápido y más fácil que nunca.
noindex: true
---

# Uso del ayudante de Stacks en Bootstrap

Ayudantes que se basan en nuestras utilidades flexbox para hacer que el diseño de componentes sea más rápido y más fácil que nunca.

{{< content-ads/top-banner >}}

Las pilas ofrecen un atajo para aplicar una serie de propiedades de flexbox para crear diseños rápida y fácilmente en Bootstrap. Todo el crédito por el concepto y la implementación es para el [proyecto Pylon](https://almonk.github.io/pylon) de código abierto.

{{< callout type="warning" emoji="" >}}
¡Aviso! Recientemente se agregó a Safari compatibilidad con utilidades de gap con flexbox, así que considera verificar la compatibilidad de tu navegador. El diseño de la cuadrícula no debería tener problemas. [Leer más](https://caniuse.com/flexbox-gap).
{{< /callout >}}

Vertical {#vertical}
---------------------

Usa `.vstack` para crear diseños verticales. Los elementos apilados tienen el ancho completo de forma predeterminada. Utiliza las utilidades `.gap-*` para agregar espacio entre elementos.

{{< content-ads/middle-banner-1 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stacks/vertical.html" >}}
```html {filename="HTML"}
    <div class="vstack gap-3">
        <div class="p-2">Primer elemento</div>
        <div class="p-2">Segundo elemento</div>
        <div class="p-2">Tercer elemento</div>
    </div>
```
{{< /demo-iframe >}}

Horizontal {#horizontal}
-------------------------

Usa `.hstack` para diseños horizontales. Los elementos apilados están centrados verticalmente de forma predeterminada y solo ocupan el ancho necesario. Utiliza las utilidades `.gap-*` para agregar espacio entre elementos.

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stacks/horizontal-1.html" >}}
```html {filename="HTML"}
    <div class="hstack gap-3">
        <div class="p-2">Primer elemento</div>
        <div class="p-2">Segundo elemento</div>
        <div class="p-2">Tercer elemento</div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-2 >}}

Usar utilidades de margen horizontal como `.ms-auto` como espaciadores:

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stacks/horizontal-2.html" >}}
```html {filename="HTML"}
    <div class="hstack gap-3">
        <div class="p-2">Primer elemento</div>
        <div class="p-2 ms-auto">Segundo elemento</div>
        <div class="p-2">Tercer elemento</div>
    </div>
```
{{< /demo-iframe >}}

Y con [reglas verticales](/bootstrap/5.3/helpers/vertical-rule):

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stacks/horizontal-3.html" >}}
```html {filename="HTML"}
    <div class="hstack gap-3">
        <div class="p-2">Primer elemento</div>
        <div class="p-2 ms-auto">Segundo elemento</div>
        <div class="vr"></div>
        <div class="p-2">Tercer elemento</div>
    </div>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-3 >}}

Ejemplos {#examples}
---------------------

Usa `.vstack` para apilar botones y otros elementos:

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stacks/examples-1.html" >}}
```html {filename="HTML"}
    <div class="vstack gap-2 col-md-5 mx-auto">
        <button type="button" class="btn btn-secondary">Guardar cambios</button>
        <button type="button" class="btn btn-outline-secondary">Cancelar</button>
    </div>
```
{{< /demo-iframe >}}

Crea un formulario en línea con `.hstack`:

{{< content-ads/middle-banner-4 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/stacks/examples-2.html" >}}
```html {filename="HTML"}
    <div class="hstack gap-3">
        <input class="form-control me-auto" type="text" placeholder="Agrega tu elemento aquí..."
            aria-label="Agrega tu elemento aquí...">
        <button type="button" class="btn btn-secondary">Enviar</button>
        <div class="vr"></div>
        <button type="button" class="btn btn-outline-danger">Restablecer</button>
    </div>
```
{{< /demo-iframe >}}

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

[scss/helpers/_stacks.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/helpers/_stacks.scss)

{{< content-ads/middle-banner-5 >}}

```scss {filename="scss/helpers/_stacks.scss"}
.hstack {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: stretch;
}

.vstack {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-self: stretch;
}
```

{{< content-ads/bottom-banner >}}
