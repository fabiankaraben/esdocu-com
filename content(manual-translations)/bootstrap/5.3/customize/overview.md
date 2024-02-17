---
weight: 1
linkTitle: Personalizar
title: Formas de Personalizar tu compilación de Bootstrap · Bootstrap en Español v5.3
description: Aprende a crear temas, personalizar y ampliar Bootstrap con Sass, una gran cantidad de opciones globales, un sistema de color expansivo y más.
noindex: true
prev: /bootstrap/5.3/getting-started/contribute
---

# Formas de Personalizar tu compilación de Bootstrap

Aprende a crear temas, personalizar y ampliar Bootstrap con Sass, una gran cantidad de opciones globales, un sistema de color expansivo y más.

{{< content-ads/top-banner >}}

| <span class="mx-14">Tópico</span>                           | Descripción                                                                                                      |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [**Sass**](/bootstrap/5.3/customize/sass)                   | Utiliza nuestros archivos fuente Sass para aprovechar variables, mapas, mixins y funciones.                      |
| [**Opciones**](/bootstrap/5.3/customize/options)            | Personaliza Bootstrap con variables integradas para alternar fácilmente las preferencias globales de CSS.        |
| [**Color**](/bootstrap/5.3/customize/color)                 | Aprende y personaliza los sistemas de color que respaldan todo el conjunto de herramientas.                      |
| [**Modos de color**](/bootstrap/5.3/customize/color-modes)  | Explora nuestro modo claro predeterminado y el nuevo modo oscuro, o crea tú mismo modos de color personalizados. |
| [**Componentes**](/bootstrap/5.3/customize/components)      | Aprende cómo construimos casi todos nuestros componentes de manera responsive y con clases base y modificadoras. |
| [**Variables CSS**](/bootstrap/5.3/customize/css-variables) | Usa las propiedades personalizadas CSS de Bootstrap para un diseño y desarrollo rápido y con visión de futuro.   |
| [**Optimizar**](/bootstrap/5.3/customize/optimize)          | Mantén tus proyectos ágiles, responsive y mantenibles para que puedas ofrecer la mejor experiencia.              |

Descripción general {#overview}
--------------------------------

Hay varias formas de personalizar Bootstrap. Tu mejor camino puede depender de tu proyecto, la complejidad de tus herramientas de compilación, la versión de Bootstrap que estés utilizando, la compatibilidad del navegador y más.

Nuestros dos métodos preferidos son:

{{< content-ads/middle-banner-1 >}}

1.  Usar Bootstrap [a través del administrador de paquetes](/bootstrap/5.3/getting-started/download/#package-managers) para que puedas usar y ampliar nuestro archivos fuente.
2.  Usar los archivos de distribución compilados de Bootstrap o [jsDelivr](/bootstrap/5.3/getting-started/download/#cdn-via-jsdelivr) para que puedas agregar o sobrescribir los estilos de Bootstrap.

Si bien no podemos entrar en detalles aquí sobre cómo usar cada administrador de paquetes, podemos brindarte algunas pautas sobre cómo [usar Bootstrap con tu propio compilador Sass](/bootstrap/5.3/customize/sass).

Para aquellos que quieran utilizar los archivos de distribución, revisa la [página de introducción](/bootstrap/5.3/getting-started/introduction) para conocer cómo incluir esos archivos y una página HTML de ejemplo. Desde allí, consulta la documentación para conocer el diseño, los componentes y los comportamientos que te gustaría utilizar.

A medida que te familiarices con Bootstrap, continúa explorando esta sección para obtener más detalles sobre cómo utilizar nuestras opciones globales, cómo usar y cambiar nuestro sistema de color, cómo construimos nuestros componentes, cómo usar nuestro lista cada vez mayor de propiedades personalizadas de CSS y cómo optimizar tu código al compilar con Bootstrap.

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/content-suggestion >}}

CSP y SVG integrados {#csps-and-embedded-svgs}
-----------------------------------------------

Varios componentes de Bootstrap incluyen SVG integrados en nuestro CSS para diseñar componentes de manera consistente y sencilla en todos los navegadores y dispositivos. **Para organizaciones con configuraciones de CSP más estrictas**, hemos documentado todas las instancias de nuestros SVG integrados (todos los cuales se aplican a través de `background-image`) para que puedas revisar más a fondo tus opciones.

* [Acordeón](/bootstrap/5.3/components/accordion)
* [Controles de carrusel](/bootstrap/5.3/components/carousel/#with-controls)
* [Botón cerrar](/bootstrap/5.3/components/close-button) (usado en alertas y modales)
* [Casillas de verificación y botones radio de formulario](/bootstrap/5.3/forms/checks-radios)
* [Switches de formulario](/bootstrap/5.3/forms/checks-radios/#switches)
* [Íconos de validación de formularios](/bootstrap/5.3/forms/validation/#server-side)
* [Botones de alternancia de la barra de navegación](/bootstrap/5.3/components/navbar/#responsive-behaviors)
* [Menús de selección](/bootstrap/5.3/forms/select)

Basado en la [conversación comunitaria](https://github.com/twbs/bootstrap/issues/25394), algunas opciones para abordar esto en tu propia base de código incluye [reemplazar las URL con assets alojados localmente](/bootstrap/5.3/getting-started/webpack/#extracting-svg-files), eliminar las imágenes y usar imágenes en línea (no es posible en todos los componentes) y modificando tu CSP. Nuestra recomendación es revisar cuidadosamente tus propias políticas de seguridad y decidir cuál es el mejor camino a seguir, si es necesario.

{{< content-ads/bottom-banner >}}
