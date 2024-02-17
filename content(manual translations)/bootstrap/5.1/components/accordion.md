---
weight: 1
linkTitle: Accordion
title: El componente Accordion · Bootstrap en Español v5.1
description: Crea acordeones que se contraen verticalmente en combinación con nuestro complemento JavaScript Collapse.
prev: /bootstrap/5.1/forms/validation
type: docs
---

# El componente Accordion

Crea acordeones que se contraen verticalmente en combinación con nuestro complemento JavaScript Collapse.

{{< content-ads/top-banner >}}

## ¿Cómo funciona el Accordion?

El acordeón usa [collapse]({{< bootstrap/5-1/docsref "/components/collapse" >}}) internamente para hacerse plegable. Para renderizar un acordeón expandido, agrega la clase `.open` en `.accordion`.

{{< bootstrap/5-1/callout info >}}
{{< bootstrap/5-1/partial "callout-info-prefersreducedmotion.md" >}}
{{< /bootstrap/5-1/callout >}}

## Ejemplo

{{< content-ads/middle-banner-1 >}}

Haz clic en los acordeones a continuación para expandir/contraer el contenido del acordeón.

{{< bootstrap/5-1/example >}}
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Acordeón artículo #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Este es el cuerpo del acordeón del primer elemento.</strong> Se muestra de forma predeterminada, hasta que el complemento de colapso agrega las clases apropiadas que usamos para diseñar cada elemento. Estas clases controlan la apariencia general, así como la visualización y ocultación a través de transiciones CSS. Puedes modificar cualquiera de esto con CSS personalizado o sobrescribir nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Acordeón artículo #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Este es el cuerpo del acordeón del segundo elemento.</strong> Está oculto de manera predeterminada, hasta que el complemento de Collapse agregue las clases apropiadas que usamos para diseñar cada elemento. Estas clases controlan la apariencia general, así como la visualización y ocultación a través de transiciones CSS. Puedes modificar cualquiera de esto con CSS personalizado o sobrescribir nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Acordeón artículo #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Este es el cuerpo del acordeón del tercer elemento.</strong> Está oculto de manera predeterminada, hasta que el complemento Collapse agregue las clases apropiadas que usamos para diseñar cada elemento. Estas clases controlan la apariencia general, así como la visualización y ocultación a través de transiciones CSS. Puedes modificar cualquiera de esto con CSS personalizado o sobrescribir nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
      </div>
    </div>
  </div>
</div>
{{< /bootstrap/5-1/example >}}

### Flush

Agrega `.accordion-flush` para eliminar el `background-color` predeterminado, algunos bordes y algunas esquinas redondeadas para representar los acordeones de borde a borde con su contenedor padre.

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/5-1/example class="bg-light" >}}
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Acordeón artículo #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Contenido placeholder para este acordeón, que pretende demostrar la clase <code>.accordion-flush</code>. Este es el cuerpo de acordeón del primer elemento.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Acordeón artículo #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Contenido placeholder para este acordeón, que pretende demostrar la clase <code>.accordion-flush</code>. Este es el cuerpo del acordeón del segundo elemento. Imaginemos que esto se llena con algún contenido real.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Acordeón artículo #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Contenido placeholder para este acordeón, que pretende demostrar la clase <code>.accordion-flush</code>. Este es el cuerpo del acordeón del tercer elemento. No sucede nada más emocionante aquí en términos de contenido, sino simplemente llenar el espacio para que se vea, al menos a primera vista, un poco más representativo de cómo se vería esto en una aplicación del mundo real.</div>
    </div>
  </div>
</div>
{{< /bootstrap/5-1/example >}}

### Siempre abierto

Omite el atributo `data-bs-parent` en cada `.accordion-collapse` para que los elementos de acordeón permanezcan abiertos cuando se abre otro elemento.

{{< bootstrap/5-1/example >}}
<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Acordeón artículo #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>Este es el cuerpo del acordeón del primer elemento.</strong> Se muestra de forma predeterminada, hasta que el complemento Collapse agrega las clases apropiadas que usamos para diseñar cada elemento. Estas clases controlan la apariencia general, así como la visualización y ocultación a través de transiciones CSS. Puedes modificar cualquiera de esto con CSS personalizado o sobrescribir nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Acordeón artículo #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>Este es el cuerpo del acordeón del segundo elemento.</strong> Está oculto de manera predeterminada, hasta que el complemento Collapse agregue las clases apropiadas que usamos para diseñar cada elemento. Estas clases controlan la apariencia general, así como la visualización y ocultación a través de transiciones CSS. Puedes modificar cualquiera de esto con CSS personalizado o sobrescribr nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Acordeón artículo #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>Este es el cuerpo del acordeón del tercer elemento.</strong> Está oculto de manera predeterminada, hasta que el complemento Collapse agregue las clases apropiadas que usamos para diseñar cada elemento. Estas clases controlan la apariencia general, así como la visualización y ocultación a través de transiciones CSS. Puedes modificar cualquiera de esto con CSS personalizado o sobrescribir nuestras variables predeterminadas. También vale la pena señalar que casi cualquier HTML puede ir dentro de <code>.accordion-body</code>, aunque la transición limita el desbordamiento.
      </div>
    </div>
  </div>
</div>
{{< /bootstrap/5-1/example >}}

{{< content-ads/middle-banner-3 >}}

## Accesibilidad

Lee la [sección de accesibilidad de collapse]({{< bootstrap/5-1/docsref "/components/collapse#accessibility" >}}) para obtener más información.

## Sass

### Variables

{{< bootstrap/5-1/scss-docs name="accordion-variables" file="scss/_variables.scss" >}}

{{< content-ads/bottom-banner >}}
