---
weight: 9
linkTitle: Accesibilidad
title: Características de Accesibilidad en Bootstrap · Bootstrap en Español v5.3
description: Una breve descripción de las características y limitaciones de Bootstrap para la creación de contenido accesible.
noindex: true
---

# Características de Accesibilidad en Bootstrap

Una breve descripción de las características y limitaciones de Bootstrap para la creación de contenido accesible.

{{< content-ads/top-banner >}}

Bootstrap proporciona un sencillo marco de estilos listos para usar, herramientas de layout y componentes interactivos, lo que permite a los desarrolladores crear sitios web y aplicaciones que son visualmente atractivos, funcionalmente ricos y accesibles por defecto.

## Descripción general y limitaciones {#overview-and-limitations}

La accesibilidad general de cualquier proyecto creado con Bootstrap depende en gran parte del marcado del autor, el estilo adicional y las secuencias de comandos que hayan incluido. Sin embargo, siempre que se hayan implementado correctamente, debería ser perfectamente posible crear sitios web y aplicaciones con Bootstrap que cumplan [WCAG 2.1](https://www.w3.org/TR/WCAG) (A/AA/AAA), [Sección 508](https://www.section508.gov) y similares estándares y requisitos de accesibilidad.

### Marcado estructural {#structural-markup}

{{< content-ads/middle-banner-1 >}}

El estilo y el diseño de Bootstrap se pueden aplicar a una amplia gama de estructuras de marcado. Esta documentación tiene como objetivo proporcionar a los desarrolladores ejemplos de mejores prácticas para demostrar el uso de Bootstrap en sí e ilustrar el marcado semántico apropiado, incluidas las formas en que se pueden abordar posibles problemas de accesibilidad.

### Componentes interactivos {#interactive-components}

Los componentes interactivos de Bootstrap, como cuadros de diálogo modales, menús desplegables y tooltips personalizados, están diseñados para funcionar con usuarios táctiles, de mouse y de teclado. Mediante el uso de [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria) estos componentes también deben ser comprensibles y operables mediante tecnologías de asistencia (como lectores de pantalla).

Debido a que los componentes de Bootstrap están diseñados específicamente para ser bastante genéricos, es posible que los autores necesiten incluir funciones y atributos ARIA adicionales, así como el comportamiento de JavaScript, para transmitir con mayor precisión la naturaleza y funcionalidad precisas de su componente. Esto suele estar indicado en la documentación.

{{< content-ads/middle-banner-2 >}}

### Contraste de color {#color-contrast}

Algunas combinaciones de colores que actualmente componen la paleta predeterminada de Bootstrap (utilizadas en todo el framework para cosas como variaciones de botones, variaciones de alertas, indicadores de validación de formularios) pueden llevar a _insuficiente_ contraste de color (por debajo de la [relación de contraste de color de texto WCAG 2.1 recomendada de 4.5:1](https://www.w3.org/TR/WCAG/#contrast-minimum) y la [relación de contraste de color sin texto WCAG 2.1 de 3:1](https://www.w3.org/TR/WCAG/#non-text-contrast)), particularmente cuando se usa contra un fondo claro. Se anima a los autores a probar sus usos específicos del color y, cuando sea necesario, modificar/ampliar manualmente estos colores predeterminados para garantizar relaciones de contraste de color adecuadas.

### Contenido visualmente oculto {#visually-hidden-content}

El contenido que debe estar oculto visualmente, pero que debe permanecer accesible para tecnologías de asistencia como lectores de pantalla, se puede diseñar usando la clase `.visually-hidden`. Esto puede resultar útil en situaciones en las que también es necesario transmitir información visual adicional o señales (como el significado denotado mediante el uso de colores) a usuarios no visuales.

{{< content-ads/middle-banner-3 >}}

```html {filename="HTML"}
<p class="text-danger">
  <span class="visually-hidden">Danger: </span>
  This action is not reversible
</p>
```

Para controles interactivos visualmente ocultos, como los tradicionales enlaces de "saltar", usa la clase `.visually-hidden-focusable`. Esto asegurará que el control sea visible una vez enfocado (para usuarios de teclados videntes). **Cuidado, en comparación con las clases equivalentes `.sr-only` y `.sr-only-focusable` de versiones anteriores, `.visually-hidden-focusable` es una clase independiente y no debe usarse en combinación con la clase `.visually-hidden`.**

```html {filename="HTML"}
<a class="visually-hidden-focusable" href="#content">Skip to main content</a>
```

### Movimiento reducido {#reduced-motion}

{{< content-ads/middle-banner-4 >}}

Bootstrap incluye soporte para las preferencias [`prefers-reduced-motion`.](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion) En navegadores/entornos que permiten al usuario especificar su preferencia por el movimiento reducido, la mayoría de los efectos de transición CSS en Bootstrap (por ejemplo, cuando se abre o cierra un cuadro de diálogo modal, o la animación deslizante en carruseles) se desactivarán y las animaciones significativas (como los spinners) se ralentizarán.

En navegadores que admiten `prefers-reduced-motion`, y donde el usuario _no_ ha indicado explícitamente que preferiría movimiento reducido (es decir, donde `prefers-reduced-motion: no-preference`), Bootstrap activa un desplazamiento suave usando la propiedad `scroll-behavior` .

{{< bootstrap/content-suggestion >}}

## Recursos adicionales {#additional-resources}

{{< content-ads/middle-banner-5 >}}

* [Pautas de accesibilidad al contenido web (WCAG) 2.1](https://www.w3.org/TR/WCAG)
* [El Proyecto A11Y](https://www.a11yproject.com)
* [Documentación de accesibilidad de MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
* [Tenon.io Accessibility Checker](https://tenon.io)
* [Analizador de Contraste de Color (CCA)](https://www.tpgi.com/color-contrast-checker)
* [Bookmarklet “HTML Codesniffer” para identificar problemas de accesibilidad](https://github.com/squizlabs/HTML_CodeSniffer)
* [Microsoft Accessibility Insights](https://accessibilityinsights.io)
* [Deque Axe testing tools](https://www.deque.com/axe)
* [Introducción a la Accesibilidad Web](https://www.w3.org/WAI/fundamentals/accessibility-intro)

{{< content-ads/bottom-banner >}}
