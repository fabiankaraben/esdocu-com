---
weight: 4
linkTitle: Navegadores y dispositivos
title: Navegadores y dispositivos compatibles con Bootstrap · Bootstrap en Español v5.3
description: Aprende sobre los navegadores y dispositivos, desde los modernos hasta los antiguos, que son compatibles con Bootstrap, incluidas las peculiaridades y errores conocidos de cada uno.
noindex: true
---

# Navegadores y dispositivos compatibles con Bootstrap

Aprende sobre los navegadores y dispositivos, desde los modernos hasta los antiguos, que son compatibles con Bootstrap, incluidas las peculiaridades y errores conocidos de cada uno.

{{< content-ads/top-banner >}}

## Navegadores compatibles {#supported-browsers}

Bootstrap admite las **versiones estables más recientes** de todos los principales navegadores y plataformas.

Los navegadores alternativos que usan la última versión de WebKit, Blink o Gecko, ya sea directamente o a través de la API de vista web de la plataforma, no son compatibles explícitamente. Sin embargo, Bootstrap debería (en la mayoría de los casos) mostrarse y funcionar correctamente también en estos navegadores. A continuación se proporciona información de soporte más específica.

Puedes encontrar nuestra gama de navegadores compatibles y sus versiones [en nuestro `.browserslistrc file`](https://github.com/twbs/bootstrap/blob/v5.3.2/.browserslistrc):

```tex
# https://github.com/browserslist/browserslist#readme

>= 0.5%
last 2 major versions
not dead
Chrome >= 60
Firefox >= 60
Firefox ESR
iOS >= 12
Safari >= 12
not Explorer <= 11
```    

Usamos [Autoprefixer](https://github.com/postcss/autoprefixer) para manejar la compatibilidad del navegador mediante prefijos CSS, que usa [Browserslist](https://github.com/browserslist/browserslist) para administrar estas versiones del navegador. Consulta su documentación para saber cómo integrar estas herramientas en tus proyectos.

### Dispositivos móviles {#mobile-devices}

En términos generales, Bootstrap admite las últimas versiones de los navegadores predeterminados de cada plataforma principal. Ten en cuenta que los navegadores proxy (como Opera Mini, el modo Turbo de Opera Mobile, UC Browser Mini, Amazon Silk) no son compatibles.

{{< content-ads/middle-banner-1 >}}

|             | Chrome     | Firefox    | Safari     | Navegador Android y WebView |
| ----------- | ---------- | ---------- | ---------- | --------------------------- |
| **Android** | Compatible | Compatible | -          | v6.0+                       |
| **iOS**     | Compatible | Compatible | Compatible | -                           |

### Navegadores de escritorio {#desktop-browsers}

De manera similar, las últimas versiones de la mayoría de los navegadores de escritorio son compatibles.

|             | Chrome     | Firefox    | Microsoft Edge | Opera      | Safari     |
| ----------- | ---------- | ---------- | -------------- | ---------- | ---------- |
| **Mac**     | Compatible | Compatible | Compatible     | Compatible | Compatible |
| **Windows** | Compatible | Compatible | Compatible     | Compatible | -          |

Para Firefox, además de la última versión estable normal, también admitimos la última versión [Extended Support Release (ESR)](https://www.mozilla.org/en-US/firefox/enterprise) de Firefox.

Extraoficialmente, Bootstrap debería verse y comportarse bastante bien en Chromium y Chrome para Linux, y Firefox para Linux, aunque no son oficialmente compatibles.

## Internet Explorer {#internet-explorer}

Internet Explorer no es compatible. **Si necesitas compatibilidad con Internet Explorer, utiliza Bootstrap v4.**

{{< content-ads/middle-banner-2 >}}

## Modales y desplegables en el móvil {#modals-and-dropdowns-on-mobile}

### Desbordamiento y desplazamiento {#overflow-and-scrolling}

La compatibilidad con `overflow: hidden;` en el elemento `<body>` es bastante limitada en iOS y Android. Con ese fin, cuando te desplazas más allá de la parte superior o inferior de un modal en cualquiera de los navegadores de esos dispositivos, el contenido `<body>` comenzará a desplazarse. Consulta el [Error de Chrome n.º 175502](https://bugs.chromium.org/p/chromium/issues/detail?id=175502) (corregido en Chrome v40) y [Error de WebKit n.º 153852](https://bugs.webkit.org/show_bug.cgi?id=153852).

### Campos de texto de iOS y desplazamiento {#ios-text-fields-and-scrolling}

A partir de iOS 9.2, mientras un modal está abierto, si el toque inicial de un gesto de desplazamiento está dentro del límite de un `<input>` textual o un `<textarea>`, se desplazará el contenido `<body>` debajo del modal en lugar del modal en sí. Consulta el [error de WebKit n.º 153856](https://bugs.webkit.org/show_bug.cgi?id=153856).

### Menús desplegables de la barra de navegación {#navbar-dropdowns}

El elemento `.dropdown-backdrop` no se usa en iOS en la navegación debido a la complejidad de la indexación z (z-index). Por lo tanto, para cerrar los menús desplegables en las barras de navegación, debes hacer clic directamente en el elemento desplegable (o [cualquier otro elemento que activará un evento de clic en iOS](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile)).

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-3 >}}

## Zoom del navegador {#browser-zooming}

El zoom de página presenta inevitablemente artefactos de renderizado en algunos componentes, tanto en Bootstrap como en el resto de la web. Dependiendo del problema, es posible que podamos solucionarlo (busca primero y luego abre un issue si es necesario). Sin embargo, tendemos a ignorarlos, ya que a menudo no tienen una solución directa más que soluciones rebuscadas.

## Validadores {#validators}

Para brindar la mejor experiencia posible a navegadores antiguos y con errores, Bootstrap utiliza [hacks de navegador CSS](http://browserhacks.com) en varios lugares para dirigir CSS especial a ciertas versiones del navegador para solucionar errores en los propios navegadores. Es comprensible que estos hacks hagan que los validadores de CSS se quejen de que no son válidos. En un par de lugares, también utilizamos funciones CSS de última generación que aún no están completamente estandarizadas, pero se usan únicamente para una mejora progresiva.

Estas advertencias de validación no importan en la práctica ya que la parte sin hacks de nuestro CSS se valida completamente y las partes con hacks no interfieren con el funcionamiento adecuado de la parte sin hacks, por lo tanto por qué ignoramos deliberadamente estas advertencias particulares.

Nuestros documentos HTML también tienen algunas advertencias de validación de HTML triviales e intrascendentes debido a nuestra inclusión de una solución alternativa para [cierto error de Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=654072).

{{< content-ads/bottom-banner >}}
