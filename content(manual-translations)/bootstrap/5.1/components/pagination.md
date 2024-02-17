---
weight: 17
linkTitle: Pagination
title: El componente Pagination · Bootstrap en Español v5.1
description: Documentación y ejemplos de paginación para indicar que existe una serie de contenido relacionado en varias páginas.
type: docs
---

# El componente Pagination

Documentación y ejemplos de paginación para indicar que existe una serie de contenido relacionado en varias páginas.

{{< content-ads/top-banner >}}

## Overview

Usamos un gran bloque de enlaces conectados para nuestra paginación, lo que hace que los enlaces sean difíciles de perder y fácilmente escalables, todo mientras proporciona grandes áreas de acción. La paginación se crea con elementos HTML de lista para que los lectores de pantalla puedan anunciar la cantidad de enlaces disponibles. Utiliza un elemento envolvente `<nav>` para identificarlo como una sección de navegación para lectores de pantalla y otras tecnologías de asistencia.

Además, como es probable que las páginas tengan más de una de estas secciones de navegación, es recomendable proporcionar una `aria-label` descriptiva para `<nav>` para reflejar su propósito. Por ejemplo, si el componente de paginación se usa para navegar entre un conjunto de resultados de búsqueda, una etiqueta apropiada podría ser `aria-label="Search results pages"`.

{{< bootstrap/5-1/example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
  </ul>
</nav>
{{< /bootstrap/5-1/example >}}

## Trabajar con iconos

{{< content-ads/middle-banner-1 >}}

¿Deseas utilizar un icono o símbolo en lugar de texto para algunos enlaces de paginación? Asegúrate de proporcionar la compatibilidad adecuada con el lector de pantalla con los atributos `aria`.

{{< bootstrap/5-1/example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
{{< /bootstrap/5-1/example >}}

## Estados disabled y active

Los enlaces de paginación se pueden personalizar para diferentes circunstancias. Usa `.disabled` para los enlaces a los que no se puede hacer clic y `.active` para indicar la página actual.

Mientras que la clase `.disabled` usa `pointer-events: none` para _intentar_ deshabilitar la funcionalidad de enlace de elementos `<a>`, esa propiedad CSS aún no está estandarizada y no tiene en cuenta la navegación con el teclado. Como tal, siempre debes agregar `tabindex="-1"` en los enlaces deshabilitados y usar JavaScript personalizado para deshabilitar completamente su funcionalidad.

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/5-1/example >}}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link">Anterior</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Siguiente</a>
    </li>
  </ul>
</nav>
{{< /bootstrap/5-1/example >}}

Opcionalmente, puedes cambiar los enlaces *active* o *disabled* por `<span>`, u omitir el enlace en el caso de las flechas anterior/siguiente, para eliminar la función de clic y evitar el enfoque del teclado mientras conserva los estilos previstos.

{{< bootstrap/5-1/example >}}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Anterior</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Siguiente</a>
    </li>
  </ul>
</nav>
{{< /bootstrap/5-1/example >}}

## Dimensionamiento

¿Te apetece una paginación más grande o más pequeña? Agrega `.pagination-lg` o `.pagination-sm` para tamaños adicionales.

{{< content-ads/middle-banner-3 >}}

{{< bootstrap/5-1/example >}}
<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/example >}}
<nav aria-label="...">
  <ul class="pagination pagination-sm">
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{{< /bootstrap/5-1/example >}}

## Alineación

Cambia la alineación de los componentes de paginación con [utilidades flexbox]({{< bootstrap/5-1/docsref "/utilities/flex" >}}).

{{< bootstrap/5-1/example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Anterior</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Siguiente</a>
    </li>
  </ul>
</nav>
{{< /bootstrap/5-1/example >}}

{{< content-ads/middle-banner-4 >}}

{{< bootstrap/5-1/example >}}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link">Anterior</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Siguiente</a>
    </li>
  </ul>
</nav>
{{< /bootstrap/5-1/example >}}

## Sass

### Variables

{{< bootstrap/5-1/scss-docs name="pagination-variables" file="scss/_variables.scss" >}}

### Mixins

{{< bootstrap/5-1/scss-docs name="pagination-mixin" file="scss/mixins/_pagination.scss" >}}

{{< content-ads/bottom-banner >}}
