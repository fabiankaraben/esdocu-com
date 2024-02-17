---
weight: 1
linkTitle: ¿Qué es Bootstrap?
title: Comienza con Bootstrap en 3 simples pasos · Bootstrap en Español v5.3
description: Bootstrap es un conjunto de herramientas de interfaz potente y repleto de funciones. Construye cualquier cosa, desde el prototipo hasta la producción, en minutos.
type: docs
---

# Primeros pasos con Bootstrap

## Comienza con Bootstrap en 3 simples pasos

Bootstrap es un conjunto de herramientas de interfaz potente y repleto de funciones. Construye cualquier cosa, desde el prototipo hasta la producción, en minutos.

{{< content-ads/top-banner >}}

### Inicio rápido {#quick-start}

Comienza incluyendo CSS y JavaScript listos para producción de Bootstrap a través de CDN sin necesidad de realizar ningún paso de compilación. Velo en la práctica con esta [demo de Bootstrap CodePen](https://codepen.io/team/bootstrap/pen/qBamdLj).

1. **Crea un nuevo archivo `index.html` en la raíz de tu proyecto**. Incluye el `<meta name="viewport">` también para un [comportamiento de respuesta adecuado](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) en dispositivos móviles.

    ```html {filename="HTML"}
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
      </body>
    </html>
    ```

2. **Incluye CSS y JS de Bootstrap.** Coloca la etiqueta `<link>` en el `<head>` para nuestro CSS y la etiqueta `<script>` para nuestro paquete JavaScript (incluido Popper para colocar menús desplegables, poppers y tooltips) antes del `</body>`. Obtén más información sobre nuestros [enlaces CDN](/bootstrap/comenzando/#cdn-links).

    ```html {filename="HTML"}
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      </head>
      <body>
        <h1>Hello, world!</h1>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      </body>
    </html>
    ```

    También puedes incluir [Popper](https://popper.js.org) y nuestro JS por separado. Si no planeas usar menús desplegables, ventanas emergentes popovers o tooltips, ahorra algunos kilobytes al no incluir Popper.

    ```html {filename="HTML"}
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
    ```

{{< content-ads/middle-banner-1 >}}

3. **¡Hola mundo!** Abre la página en el navegador de tu elección para ver tu página Bootstrapped. Ahora puedes empezar a construir con Bootstrap creando tu propio [layout](/bootstrap/grilla), agregando docenas de [componentes](/bootstrap/componentes/botones) y utilizando [nuestros ejemplos oficiales](/bootstrap/comenzando/#:~:text=nuestros%20ejemplos%20oficiales).

{{< bootstrap/content-suggestion >}}

### Enlaces CDN {#cdn-links}

Como referencia, aquí están nuestros enlaces CDN principales.

| Descripción | URL                                                                          |
| ----------- | ---------------------------------------------------------------------------- |
| CSS         | https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css      |
| JS          | https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js |

También puedes usar la CDN para obtener cualquiera de nuestras [compilaciones adicionales enumeradas en la página Contenidos](/bootstrap/comenzando).

### Próximos pasos {#next-steps}

- Lee un poco más sobre algunas [configuraciones importantes del entorno global](/bootstrap/comenzando/#important-globals) que utiliza Bootstrap.
- Lee sobre lo que se incluye en Bootstrap en nuestra [sección de contenidos](/bootstrap/comenzando) y la lista de [componentes que requieren JavaScript](/bootstrap/comenzando/#js-components) a continuación.
- ¿Necesitas un poco más de potencia? Considera compilar con Bootstrap [incluidos los archivos fuente a través del administrador de paquetes](/bootstrap/comenzando/#package-managers).
- ¿Quieres usar Bootstrap como módulo con `<script type="module">`? Consulta nuestra sección [uso de Bootstrap como módulo](/bootstrap/comenzando/#using-bootstrap-as-a-module).

{{< content-ads/middle-banner-2 >}}

### Componentes JS {#js-components}

¿Tienes curiosidad por saber qué componentes requieren explícitamente nuestro JavaScript y Popper? Si no estás seguro acerca de la estructura general de la página, sigue leyendo para ver una plantilla de página de ejemplo.

- Alertas descartables
- Botones para alternar estados y funcionalidad de casilla de verificación/radio
- Carrusel para todos los comportamientos, controles e indicadores de las diapositivas.
- Contraer para alternar la visibilidad del contenido
- Menú desplegables para visualización y posicionamiento (también requiere [Popper](https://popper.js.org))
- Modales para mostrar, posicionar y comportamiento de desplazamiento
- Barra de navegación para extender nuestros complementos Collapse y Offcanvas para implementar comportamientos responsive
- Navs con el complemento Tab para alternar paneles de contenido
- Offcanvases para visualización, posicionamiento y comportamiento de desplazamiento
- Scrollspy para comportamiento de desplazamiento y actualizaciones de navegación
- Toasts para mostrar y descartar
- Tooltips y popovers para mostrar y posicionar (también requiere [Popper](https://popper.js.org))

### Globales importantes {#important-globals}

Bootstrap emplea un puñado de estilos y configuraciones globales importantes, todos los cuales están casi exclusivamente orientados a la normalización de estilos entre navegadores. Vamos a sumergirnos.

{{< bootstrap/content-suggestion >}}

#### HTML5 doctype {#html5-doctype}

Bootstrap requiere el uso de HTML5 doctype. Sin él, verás un estilo original e incompleto.

{{< content-ads/middle-banner-3 >}}

```html {filename="HTML"}
<!doctype html>
<html lang="en">
  ...
</html>
```

#### Viewport meta {#viewport-meta}

Bootstrap se desarrolla mobile first, una estrategia en la que primero optimizamos el código para dispositivos móviles y luego escalamos los componentes según sea necesario usando media queries CSS. Para garantizar una representación adecuada y un zoom táctil para todos los dispositivos, agrega la metaetiqueta responsive de viewport a tu `<head>`.

```html {filename="HTML"}
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Puedes ver un ejemplo de esto en acción en el [inicio rápido](/bootstrap/comenzando/#quick-start).

#### Box-sizing {#box-sizing}

Para un dimensionado más sencillo en CSS, cambiamos el valor global `box-sizing` de `content-box` a `border-box`. Esto garantiza que el `padding` no afecte el ancho final calculado de un elemento, pero puede causar problemas con algunos programas de terceros como Google Maps y Google Custom Search Engine.

En las raras ocasiones en que necesites sobrescribirlo, usa algo como lo siguiente:

{{< content-ads/middle-banner-4 >}}

```css {filename="CSS"}
.selector-for-some-widget {
  box-sizing: content-box;
}
```

Con el fragmento anterior, los elementos anidados (incluido el contenido generado mediante `::before` y `::after`) heredarán el `box-sizing` especificado para ese `.selector-for-some-widget`.

Obtén más información sobre [model box y tamaños en CSS Tricks](https://css-tricks.com/box-sizing).

#### Reboot {#reboot}

Para mejorar el renderizado entre navegadores, utilizamos [Reboot](/bootstrap/reboot) para corregir inconsistencias entre navegadores y dispositivos mientras proporcionando restablecimientos un poco más obstinados de elementos HTML comunes.

{{< bootstrap/content-suggestion >}}

### Community {#community}

Mantente actualizado sobre el desarrollo de Bootstrap y comunícate con la comunidad con estos útiles recursos.

{{< content-ads/middle-banner-5 >}}

- Lee y suscríbete a [El blog oficial de Bootstrap](https://blog.getbootstrap.com).
- Haz preguntas y explora [nuestras discusiones de GitHub](https://github.com/twbs/bootstrap/discussions).
- Discute, haz preguntas y más en [la comunidad Discord](https://discord.gg/bZUvakRU3M) o el [subreddit de Bootstrap](https://reddit.com/r/bootstrap).
- Chatea con otros Bootstrappers en IRC. En el servidor `irc.libera.chat`, en el canal `#bootstrap`.
- Puedes encontrar ayuda para la implementación en Stack Overflow (etiquetado como [bootstrap-5](https://stackoverflow.com/questions/tagged/bootstrap-5)).
- Los desarrolladores deben usar la palabra clave `bootstrap` en paquetes que modifican o agregan funcionalidad a Bootstrap cuando se distribuyen a través de [npm](https://www.npmjs.com/search?q=keywords:bootstrap) o mecanismos de entrega similares para una máxima visibilidad.

También puedes seguir a [@getbootstrap en Twitter](https://twitter.com/getbootstrap) para conocer los últimos chismes y fantásticos vídeos musicales.

## Diferentes formas de descargar Bootstrap

Descarga Bootstrap para obtener el CSS y JavaScript compilados, el código fuente, o inclúyelo con tus administradores de paquetes favoritos como npm, RubyGems y más.

{{< content-ads/top-banner >}}

### CSS y JS compilados. {#compiled-css-and-js}

Descarga el código compilado listo para usar de **Bootstrap v5.3.2** para incluirlo fácilmente en tu proyecto, que incluye:

- Paquetes CSS compilados y minimizados (ver [Comparación de archivos CSS](/bootstrap/comenzando/#css-files))
- Plugins de JavaScript compilados y minimizados (ver [Comparación de archivos JS](/bootstrap/comenzando/#js-files))

Esto no incluye documentación, archivos fuente ni ninguna dependencia opcional de JavaScript como Popper.

[Descargar](https://github.com/twbs/bootstrap/releases/download/v5.3.2/bootstrap-5.3.2-dist.zip)

### Archivos fuente {#source-files}

Compila Bootstrap con tu propia canalización de assets descargando nuestros archivos fuente Sass, JavaScript y documentación. Esta opción requiere algunas herramientas adicionales:

- [Compilador Sass](/bootstrap/comenzando/#sass) para compilar archivos fuente Sass en archivos CSS
- [Autoprefixer](https://github.com/postcss/autoprefixer) para prefijos de proveedores de CSS

Si necesitas nuestro conjunto completo de [herramientas de compilación](/bootstrap/comenzando/#tooling-setup), son incluidas para desarrollar Bootstrap y su documentación, pero probablemente no sean adecuados para tus propios fines.

[Descargar fuente](https://github.com/twbs/bootstrap/archive/v5.3.2.zip)

{{< content-ads/middle-banner-1 >}}

### Ejemplos {#examples}

Si deseas descargar y examinar nuestros [ejemplos](https://getbootstrap.com/docs/5.3/examples), puedes tomar los ejemplos ya creados:

[Descargar ejemplos](https://github.com/twbs/bootstrap/releases/download/v5.3.2/bootstrap-5.3.2-examples.zip)

### CDN vía jsDelivr {#cdn-via-jsdelivr}

Salta la descarga con [jsDelivr](https://www.jsdelivr.com) para entregar la versión en caché del CSS y JS compilado de Bootstrap a tu proyecto.

```html {filename="HTML"}
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
```

Si estás usando nuestro JavaScript compilado y prefieres incluir Popper por separado, agrega Popper antes de nuestro JS, preferiblemente a través de una CDN.

```html {filename="HTML"}
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
```

#### CDN alternativas {#alternative-cdns}

Recomendamos [jsDelivr](https://www.jsdelivr.com) y lo usamos nosotros mismos en nuestra documentación. Sin embargo, en algunos casos, como en algunos países o entornos específicos, es posible que necesites utilizar otros proveedores de CDN como [cdnjs](https://cdnjs.com) o [unpkg](https://unpkg.com).

{{< content-ads/middle-banner-2 >}}

Encontrarás los mismos archivos en estos proveedores de CDN, aunque con diferentes URL. Con cdnjs, puedes [usar este enlace directo al paquete Bootstrap](https://cdnjs.com/libraries/bootstrap) para copiar y pegar fragmentos HTML listos para usar para cada archivo dist desde cualquier versión de Bootstrap.

{{< callout type="warning" emoji="" >}}
Si los hashes SRI difieren para un archivo determinado, no debes usar los archivos de ese CDN, porque significa que el archivo fue modificado por otra persona.
{{< /callout >}}

Ten en cuenta que debes comparar hashes de la misma longitud, ej. `sha384` con `sha384`, de lo contrario se espera que sean diferentes. Como tal, puedes utilizar una herramienta en línea como [SRI Hash Generator](https://www.srihash.org) para asegurarte de que los hashes sean los mismos para un archivo determinado. Alternativamente, suponiendo que tengas OpenSSL instalado, puedes lograr lo mismo desde la CLI, por ejemplo:

```shell {filename="Terminal"}
openssl dgst -sha384 -binary bootstrap.min.js | openssl base64 -A
```

### Administradores de paquetes {#package-managers}

Incorpora los archivos fuente de Bootstrap a casi cualquier proyecto con algunos de los administradores de paquetes más populares. No importa el administrador de paquetes, Bootstrap **requerirá un [compilador Sass](/bootstrap/comenzando/#sass) y un [Autoprefixer](https://github.com/postcss/autoprefixer)** para obtener una configuración que coincida con nuestras versiones compiladas oficiales.

#### npm {#npm}

Instala Bootstrap en tus aplicaciones con tecnología Node.js con el [paquete npm](https://www.npmjs.com/package/bootstrap):

{{< bootstrap/content-suggestion >}}

```shell {filename="Terminal"}
npm install bootstrap@5.3.2
```

{{< content-ads/middle-banner-3 >}}

`const bootstrap = require('bootstrap')` o `import bootstrap from 'bootstrap'` cargará todos los complementos de Bootstrap en un objeto `bootstrap`. El módulo `bootstrap` exporta todos nuestros complementos. Puedes cargar manualmente los complementos de Bootstrap individualmente cargando los archivos `/js/dist/*.js` en el directorio de nivel superior del paquete.

El `package.json` de Bootstrap contiene algunos metadatos adicionales bajo las siguientes claves:

- `sass` - ruta al archivo fuente principal [Sass](https://sass-lang.com) de Bootstrap
- `style` - ruta al CSS no minificado de Bootstrap que se ha compilado usando la configuración predeterminada (sin personalización)

{{< callout type="info" emoji="" >}}
**¡Empieza a usar Bootstrap a través de npm con nuestro proyecto inicial!** Dirígete al repositorio de ejemplo de [Sass y JS](https://github.com/twbs/examples/tree/main/sass-js) para ver cómo crear y personalizar Bootstrap en tu propio proyecto npm. Incluye el compilador Sass, Autoprefixer, Stylelint, PurgeCSS y Bootstrap Icons.
{{< /callout >}}

#### yarn {#yarn}

Instala Bootstrap en tus aplicaciones con tecnología Node.js con el [paquete yarn](https://yarnpkg.com/en/package/bootstrap):

```shell {filename="Terminal"}
yarn add bootstrap@5.3.2
```

#### RubyGems {#rubygems}

Instala Bootstrap en tus aplicaciones Ruby usando [Bundler](https://bundler.io) (recomendado) y [RubyGems](https://rubygems.org) agregando la siguiente línea a tu [Gemfile](https://bundler.io/gemfile):

```ruby {filename="Ruby"}
gem 'bootstrap', '~> 5.3.2'
```

{{< content-ads/middle-banner-4 >}}

Alternativamente, si no estás usando Bundler, puedes instalar la gema ejecutando este comando:

```shell {filename="Terminal"}
gem install bootstrap -v 5.3.2
```

[Consulta el archivo README de la gema](https://github.com/twbs/bootstrap-rubygem/blob/main/README.md) para obtener más información.

#### Composer {#composer}

También puedes instalar y administrar Sass y JavaScript de Bootstrap usando [Composer](https://getcomposer.org):

```shell {filename="Terminal"}
composer require twbs/bootstrap:5.3.2
```

#### NuGet {#nuget}

Si desarrollas en .NET Framework, también puedes instalar y administrar el [CSS](https://www.nuget.org/packages/bootstrap) o [Sass](https://www.nuget.org/packages/bootstrap.sass) y JavaScript de Bootstrap usando [NuGet](https://www.nuget.org). Los proyectos más nuevos deben usar [libman](https://docs.microsoft.com/en-us/aspnet/core/client-side/libman) u otro método, ya que NuGet está diseñado para código compilado, no para assets de frontend.

```powershell {filename="PowerShell"}
Install-Package bootstrap
```

```powershell {filename="PowerShell"}
Install-Package bootstrap.sass
```

## Sección de Contenidos de Bootstrap

Descubre lo que se incluye en Bootstrap, incluidas nuestras versiones de código fuente y compilado.

{{< content-ads/top-banner >}}

### Bootstrap compilado {#compiled-bootstrap}

Una vez descargado, descomprime la carpeta comprimida y verás algo como esto:

```
bootstrap/
├── css/
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap-grid.rtl.css
│   ├── bootstrap-grid.rtl.css.map
│   ├── bootstrap-grid.rtl.min.css
│   ├── bootstrap-grid.rtl.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   ├── bootstrap-reboot.min.css.map
│   ├── bootstrap-reboot.rtl.css
│   ├── bootstrap-reboot.rtl.css.map
│   ├── bootstrap-reboot.rtl.min.css
│   ├── bootstrap-reboot.rtl.min.css.map
│   ├── bootstrap-utilities.css
│   ├── bootstrap-utilities.css.map
│   ├── bootstrap-utilities.min.css
│   ├── bootstrap-utilities.min.css.map
│   ├── bootstrap-utilities.rtl.css
│   ├── bootstrap-utilities.rtl.css.map
│   ├── bootstrap-utilities.rtl.min.css
│   ├── bootstrap-utilities.rtl.min.css.map
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── bootstrap.rtl.css
│   ├── bootstrap.rtl.css.map
│   ├── bootstrap.rtl.min.css
│   └── bootstrap.rtl.min.css.map
└── js/
    ├── bootstrap.bundle.js
    ├── bootstrap.bundle.js.map
    ├── bootstrap.bundle.min.js
    ├── bootstrap.bundle.min.js.map
    ├── bootstrap.esm.js
    ├── bootstrap.esm.js.map
    ├── bootstrap.esm.min.js
    ├── bootstrap.esm.min.js.map
    ├── bootstrap.js
    ├── bootstrap.js.map
    ├── bootstrap.min.js
    └── bootstrap.min.js.map
```

Esta es la forma más básica de Bootstrap: archivos compilados para un uso rápido en casi cualquier proyecto web. Proporcionamos CSS y JS compilados (`bootstrap.*`), así como CSS y JS compilados y minificados (`bootstrap.min.*`). [Mapas de fuente](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`bootstrap.*.map`) están disponibles para su uso con las herramientas de desarrollo de ciertos navegadores. Los archivos JS incluidos (`bootstrap.bundle.js` y `bootstrap.bundle.min.js` minificados) incluyen [Popper](https://popper.js.org).

{{< content-ads/middle-banner-1 >}}

#### Archivos CSS {#css-files}

Bootstrap incluye un puñado de opciones para incluir parte o la totalidad de nuestro CSS compilado.

| Archivos CSS                                                                                                                        | Layout                                      | Contenido                        | Componentes | Utilidades                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | -------------------------------- | ----------- | -------------------------------------------------- |
| `bootstrap.css`<br/>`bootstrap.min.css`<br/>`bootstrap.rtl.css`<br/>`bootstrap.rtl.min.css`                                         | Incluido                                    | Incluido                         | Incluido    | Incluido                                           |
| `bootstrap-grid.css`<br/>`bootstrap-grid.rtl.css`<br/>`bootstrap-grid.min.css`<br/>`bootstrap-grid.rtl.min.css`                     | [Solo sistema de grilla](/bootstrap/grilla) | -                                | -           | [Solo utilidades flex](/bootstrap/utilidades/flex) |
| `bootstrap-utilities.css`<br/>`bootstrap-utilities.rtl.css`<br/>`bootstrap-utilities.min.css`<br/>`bootstrap-utilities.rtl.min.css` | -                                           | -                                | -           | Incluido                                           |
| `bootstrap-reboot.css`<br/>`bootstrap-reboot.rtl.css`<br/>`bootstrap-reboot.min.css`<br/>`bootstrap-reboot.rtl.min.css`             | -                                           | [Solo Reboot](/bootstrap/reboot) | -           | -                                                  |

#### Archivos JS {#js-files}

{{< content-ads/middle-banner-2 >}}

De manera similar, tenemos opciones para incluir parte o la totalidad de nuestro JavaScript compilado.

| Archivos JS                                         | Popper   |
| --------------------------------------------------- | -------- |
| `bootstrap.bundle.js`<br/>`bootstrap.bundle.min.js` | Incluido |
| `bootstrap.js`<br/>`bootstrap.min.js`               | -        |

{{< bootstrap/content-suggestion >}}

### Código fuente de Bootstrap {#bootstrap-source-code}

{{< content-ads/middle-banner-3 >}}

La descarga del código fuente de Bootstrap incluye los assets CSS y JavaScript compilados, junto con el código fuente Sass, JavaScript y documentación. Más específicamente, incluye lo siguiente y más:

```
bootstrap/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── 5.3/
│              └── examples/
├── js/
└── scss/
```

En `scss/` y `js/` se encuentran el código fuente de nuestro CSS y JavaScript. La carpeta `dist/` incluye todo lo que aparece en la sección de descarga compilada anterior. La carpeta `site/content/docs/` incluye el código fuente de nuestra documentación alojada, incluidos nuestros ejemplos en vivo del uso de Bootstrap.

Más allá de eso, cualquier otro archivo incluido brinda soporte para paquetes, información de licencia y desarrollo.

## Navegadores y dispositivos compatibles con Bootstrap

Aprende sobre los navegadores y dispositivos, desde los modernos hasta los antiguos, que son compatibles con Bootstrap, incluidas las peculiaridades y errores conocidos de cada uno.

{{< content-ads/top-banner >}}

### Navegadores compatibles {#supported-browsers}

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

#### Dispositivos móviles {#mobile-devices}

En términos generales, Bootstrap admite las últimas versiones de los navegadores predeterminados de cada plataforma principal. Ten en cuenta que los navegadores proxy (como Opera Mini, el modo Turbo de Opera Mobile, UC Browser Mini, Amazon Silk) no son compatibles.

{{< content-ads/middle-banner-1 >}}

|             | Chrome     | Firefox    | Safari     | Navegador Android y WebView |
| ----------- | ---------- | ---------- | ---------- | --------------------------- |
| **Android** | Compatible | Compatible | -          | v6.0+                       |
| **iOS**     | Compatible | Compatible | Compatible | -                           |

#### Navegadores de escritorio {#desktop-browsers}

De manera similar, las últimas versiones de la mayoría de los navegadores de escritorio son compatibles.

|             | Chrome     | Firefox    | Microsoft Edge | Opera      | Safari     |
| ----------- | ---------- | ---------- | -------------- | ---------- | ---------- |
| **Mac**     | Compatible | Compatible | Compatible     | Compatible | Compatible |
| **Windows** | Compatible | Compatible | Compatible     | Compatible | -          |

Para Firefox, además de la última versión estable normal, también admitimos la última versión [Extended Support Release (ESR)](https://www.mozilla.org/en-US/firefox/enterprise) de Firefox.

Extraoficialmente, Bootstrap debería verse y comportarse bastante bien en Chromium y Chrome para Linux, y Firefox para Linux, aunque no son oficialmente compatibles.

### Internet Explorer {#internet-explorer}

Internet Explorer no es compatible. **Si necesitas compatibilidad con Internet Explorer, utiliza Bootstrap v4.**

{{< content-ads/middle-banner-2 >}}

### Modales y desplegables en el móvil {#modals-and-dropdowns-on-mobile}

#### Desbordamiento y desplazamiento {#overflow-and-scrolling}

La compatibilidad con `overflow: hidden;` en el elemento `<body>` es bastante limitada en iOS y Android. Con ese fin, cuando te desplazas más allá de la parte superior o inferior de un modal en cualquiera de los navegadores de esos dispositivos, el contenido `<body>` comenzará a desplazarse. Consulta el [Error de Chrome n.º 175502](https://bugs.chromium.org/p/chromium/issues/detail?id=175502) (corregido en Chrome v40) y [Error de WebKit n.º 153852](https://bugs.webkit.org/show_bug.cgi?id=153852).

#### Campos de texto de iOS y desplazamiento {#ios-text-fields-and-scrolling}

A partir de iOS 9.2, mientras un modal está abierto, si el toque inicial de un gesto de desplazamiento está dentro del límite de un `<input>` textual o un `<textarea>`, se desplazará el contenido `<body>` debajo del modal en lugar del modal en sí. Consulta el [error de WebKit n.º 153856](https://bugs.webkit.org/show_bug.cgi?id=153856).

#### Menús desplegables de la barra de navegación {#navbar-dropdowns}

El elemento `.dropdown-backdrop` no se usa en iOS en la navegación debido a la complejidad de la indexación z (z-index). Por lo tanto, para cerrar los menús desplegables en las barras de navegación, debes hacer clic directamente en el elemento desplegable (o [cualquier otro elemento que activará un evento de clic en iOS](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile)).

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-3 >}}

### Zoom del navegador {#browser-zooming}

El zoom de página presenta inevitablemente artefactos de renderizado en algunos componentes, tanto en Bootstrap como en el resto de la web. Dependiendo del problema, es posible que podamos solucionarlo (busca primero y luego abre un issue si es necesario). Sin embargo, tendemos a ignorarlos, ya que a menudo no tienen una solución directa más que soluciones rebuscadas.

### Validadores {#validators}

Para brindar la mejor experiencia posible a navegadores antiguos y con errores, Bootstrap utiliza [hacks de navegador CSS](http://browserhacks.com) en varios lugares para dirigir CSS especial a ciertas versiones del navegador para solucionar errores en los propios navegadores. Es comprensible que estos hacks hagan que los validadores de CSS se quejen de que no son válidos. En un par de lugares, también utilizamos funciones CSS de última generación que aún no están completamente estandarizadas, pero se usan únicamente para una mejora progresiva.

Estas advertencias de validación no importan en la práctica ya que la parte sin hacks de nuestro CSS se valida completamente y las partes con hacks no interfieren con el funcionamiento adecuado de la parte sin hacks, por lo tanto por qué ignoramos deliberadamente estas advertencias particulares.

Nuestros documentos HTML también tienen algunas advertencias de validación de HTML triviales e intrascendentes debido a nuestra inclusión de una solución alternativa para [cierto error de Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=654072).

## Utilización de JavaScript en Bootstrap

Dale vida a Bootstrap con nuestros complementos de JavaScript opcionales. Obtén más información sobre cada complemento, nuestras opciones de API programática y de datos, y más.

{{< content-ads/top-banner >}}

### Individual o compilado {#individual-or-compiled}

Los complementos se pueden incluir individualmente (usando el `js/dist/*.js` individual de Bootstrap), o todos a la vez usando `bootstrap.js` o el `bootstrap.min.js` minimizado (no incluyas ambos).

Si usas un paquete (Webpack, Parcel, Vite…), puedes usar archivos `/js/dist/*.js` que estén preparados para UMD.

### Uso con frameworks JavaScript {#usage-with-javascript-frameworks}

Si bien Bootstrap CSS se puede usar con cualquier framework, **Bootstrap JavaScript no es totalmente compatible con frameworks de JavaScript como React, Vue y Angular** que se suponen completos conocedores del DOM. Tanto Bootstrap como el framework pueden intentar mutar el mismo elemento DOM, lo que genera errores como menús desplegables que se atascan en la posición "open".

Una mejor alternativa para quienes usan este tipo de frameworks es usar un paquete específico del framework **en lugar de** el JavaScript Bootstrap. Estas son algunas de las opciones más populares:

* React: [React Bootstrap](https://react-bootstrap.github.io)
    {{< callout type="info" emoji="" >}}
**¡Pruébalo tú mismo!** Descarga el código fuente y la demostración funcional para usar Bootstrap con React, Next.js y React Bootstrap desde el repositorio [twbs/examples](https://github.com/twbs/examples/tree/main/react-nextjs). También puedes [abrir el ejemplo en StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/react-nextjs?file=src%2Fpages%2Findex.tsx).
    {{< /callout >}}
* Vue: [BootstrapVue](https://bootstrap-vue.org) (Bootstrap 4)
* Vue 3: [BootstrapVueNext](https://bootstrap-vue-next.github.io/bootstrap-vue-next) (Bootstrap 5 , actualmente en alfa)
* Angular: [ng-bootstrap](https://ng-bootstrap.github.io)

### Usar Bootstrap como módulo {#using-bootstrap-as-a-module}

{{< callout type="info" emoji="" >}}
**¡Pruébalo tú mismo!** Descarga el código fuente y la demostración funcional para usar Bootstrap como módulo ES desde el repositorio [twbs/examples](https://github.com/twbs/examples/tree/main/sass-js-esm). También puedes[abrir el ejemplo en StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/sass-js-esm?file=index).
{{< /callout >}}

Proporcionamos una versión de Bootstrap creada como `ESM` (`bootstrap.esm.js` y `bootstrap.esm.min.js`) que te permite utilizar Bootstrap como módulo en el navegador, si tus [navegadores utilizados lo admiten](https://caniuse.com/es6-module).

```html {filename="HTML"}
<script type="module">
    import { Toast } from 'bootstrap.esm.min.js'

    Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
</script>
```

En comparación con los paquetes JS, usar ESM en el navegador requiere que uses la ruta completa y el nombre del archivo en lugar del nombre del módulo. [Lee más sobre los módulos JS en el navegador.](https://v8.dev/features/modules#specifiers) Por eso usamos `'bootstrap.esm.min.js'` en lugar de `'bootstrap'` arriba. Sin embargo, esto se complica aún más por nuestra dependencia de Popper, que importa Popper a nuestro JavaScript de esta manera:

```javascript {filename="JavaScript"}
import * as Popper from "@popperjs/core"
```

Si intentas esto tal como está, verás un error en la consola como el siguiente:

```text {filename="Consola"}
Uncaught TypeError: Failed to resolve module specifier "@popperjs/core". Relative references must start with either "/", "./", or "../".
```    

Para solucionar este problema, puedes usar un `importmap` para resolver los nombres arbitrarios de los módulos para completar las rutas. Si tus [navegadores específicos](https://caniuse.com/?search=importmap) no admiten `importmap`, deberás utilizar el proyecto [es-module-shims](https://github.com/guybedford/es-module-shims). Así es como funciona para Bootstrap y Popper:

{{< content-ads/middle-banner-1 >}}

```html {filename="HTML"}
<!doctype html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Hello, modularity!</title>
    </head>
    <body>
    <h1>Hello, modularity!</h1>
    <button id="popoverButton" type="button" class="btn btn-primary btn-lg" data-bs-toggle="popover" title="ESM in Browser" data-bs-content="Bang!">Popover personalizado</button>

    <script async src="https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js" crossorigin="anonymous"></script>
    <script type="importmap">
    {
        "imports": {
        "@popperjs/core": "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/esm/popper.min.js",
        "bootstrap": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.esm.min.js"
        }
    }
    </script>
    <script type="module">
        import * as bootstrap from 'bootstrap'

        new bootstrap.Popover(document.getElementById('popoverButton'))
    </script>
    </body>
</html>
```    

### Dependencias {#dependencies}

Algunos complementos y componentes CSS dependen de otros complementos. Si incluyes plugins individualmente, asegúrate de comprobar en las docs si existen estas dependencias.

Nuestros menús desplegables, ventanas emergentes popovers tooltips también dependen de [Popper](https://popper.js.org).

### Atributos de datos {#data-attributes}

Casi todos los complementos de Bootstrap se pueden habilitar y configurar solo a través de HTML con atributos de datos (nuestra forma preferida de usar la funcionalidad de JavaScript). Asegúrate de **usar solo un conjunto de atributos de datos en un solo elemento** (por ejemplo, no puedes activar un tooltip y un modal desde el mismo botón).

Como las opciones se pueden pasar a través de atributos de datos o JavaScript, puedes agregar un nombre de opción a `data-bs-`, como en `data-bs-animation="{value}"`. Asegúrate de cambiar el tipo de caso del nombre de la opción de “_camelCase_” a “_kebab-case_” al pasar las opciones a través de atributos de datos. Por ejemplo, utiliza `data-bs-custom-class="beautifier"` en lugar de `data-bs-customClass="beautifier"`.

A partir de Bootstrap 5.2.0, todos los componentes admiten un atributo de datos **experimental** reservado `data-bs-config` que puede albergar datos simples de configuración del componente como una cadena JSON. Cuando un elemento tiene los atributos `data-bs-config='{"delay":0, "title":123}'` y `data-bs-title="456"`, el valor final de `title` será `456` y los atributos de datos separados sobrescribirán los valores proporcionados en `data-bs-config`. Además, los atributos de datos existentes pueden albergar valores JSON como `data-bs-delay='{"show":0,"hide":150}'`.

El objeto de configuración final es el resultado combinado de `data-bs-config`, `data-bs-` y `js object` donde el último valor-clave dado sobrescribe los demás.

{{< bootstrap/content-suggestion >}}

### Selectores {#selectors}

Usamos los métodos nativos `querySelector` y `querySelectorAll` para consultar elementos DOM por razones de rendimiento, por lo que debes usar [selectores válidos](https://www.w3.org/TR/CSS21/syndata.html#value-def-identifier). Si utilizas selectores especiales como `collapse:Example`, asegúrate de evitarlos.

### Eventos {#events}

Bootstrap proporciona eventos personalizados para las acciones únicas de la mayoría de los complementos. Generalmente, estos vienen en forma de infinitivo y participio pasado, donde el infinitivo (ej. `show`) se activa al comienzo de un evento, y su forma de participio pasado (ej. `shown`) se activa al finalizar una acción.

Todos los eventos infinitivos proporcionan la funcionalidad [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault). Esto proporciona la capacidad de detener la ejecución de una acción antes de que comience. Devolver false desde un controlador de eventos también llamará automáticamente a `preventDefault()`.

```javascript {filename="JavaScript"}
const myModal = document.querySelector('#myModal')

myModal.addEventListener('show.bs.modal', event => {
    return event.preventDefault() // stops modal from being shown
})
```    

{{< content-ads/middle-banner-2 >}}

### API programática {#programmatic-api}

Todos los constructores aceptan un objeto de opciones opcional o nada (lo que inicia un complemento con su comportamiento predeterminado):

```javascript {filename="JavaScript"}
const myModalEl = document.querySelector('#myModal')
const modal = new bootstrap.Modal(myModalEl) // initialized with defaults

const configObject = { keyboard: false }
const modal1 = new bootstrap.Modal(myModalEl, configObject) // initialized with no keyboard
```    

Si deseas obtener una instancia de complemento en particular, cada complemento expone un método `getInstance`. Por ejemplo, para recuperar una instancia directamente de un elemento:

```javascript {filename="JavaScript"}
bootstrap.Popover.getInstance(myPopoverEl)
```

Este método devolverá `null` si no se inicia una instancia sobre el elemento solicitado.

Alternativamente, `getOrCreateInstance` se puede usar para obtener la instancia asociada con un elemento DOM, o crear una nueva en caso de que no haya sido inicializada.

```javascript {filename="JavaScript"}
bootstrap.Popover.getOrCreateInstance(myPopoverEl, configObject)
```

En caso de que una instancia no haya sido inicializada, puede aceptar y usar un objeto de configuración opcional como segundo argumento.

#### Selectores CSS en constructores {#css-selectors-in-constructors}

Además de los métodos `getInstance` y `getOrCreateInstance`, todos los constructores de complementos pueden aceptar un elemento DOM o un [selector CSS](#selectors) como primer argumento. Los elementos del complemento se encuentran con el método `querySelector` ya que nuestros complementos solo admiten un único elemento.

```javascript {filename="JavaScript"}
const modal = new bootstrap.Modal('#myModal')
const dropdown = new bootstrap.Dropdown('[data-bs-toggle="dropdown"]')
const offcanvas = bootstrap.Offcanvas.getInstance('#myOffcanvas')
const alert = bootstrap.Alert.getOrCreateInstance('#myAlert')
```    

#### Funciones asincrónicas y transiciones {#asynchronous-functions-and-transitions}

Todos los métodos API programáticos son **asincrónicos** y regresan al invocador del método una vez que se inicia la transición, pero **antes de que finalice** . Para ejecutar una acción una vez completada la transición, puedes escuchar el evento correspondiente.

```javascript {filename="JavaScript"}
const myCollapseEl = document.querySelector('#myCollapse')

myCollapseEl.addEventListener('shown.bs.collapse', event => {
    // Action to execute once the collapsible area is expanded
})
```    

Además, una llamada a un método en un **componente en transición será ignorada**.

{{< content-ads/middle-banner-3 >}}

```javascript {filename="JavaScript"}
const myCarouselEl = document.querySelector('#myCarousel')
const carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance

myCarouselEl.addEventListener('slid.bs.carousel', event => {
    carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

carousel.to('1') // Will start sliding to the slide 1 and returns to the caller
carousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
```    

##### Método `dispose` {#dispose-method}

Si bien puede parecer correcto usar el método `dispose` inmediatamente después de `hide()`, conducirá a resultados incorrectos. A continuación se muestra un ejemplo del uso problemático:

```javascript {filename="JavaScript"}
const myModal = document.querySelector('#myModal')
myModal.hide() // it is asynchronous

myModal.addEventListener('shown.bs.hidden', event => {
    myModal.dispose()
})
```    

#### Configuración predeterminada {#default-settings}

Puedes cambiar la configuración predeterminada de un complemento modificando el objeto `Constructor.Default` del complemento:

```javascript {filename="JavaScript"}
// changes default for the modal plugin's `keyboard` option to false
bootstrap.Modal.Default.keyboard = false 
```

{{< bootstrap/content-suggestion >}}

### Métodos y propiedades. {#methods-and-properties}

Cada complemento Bootstrap expone los siguientes métodos y propiedades estáticas.

| Método                | Descripción                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dispose`             | Destruye el modal de un elemento. (Elimina los datos almacenados en el elemento DOM)                                                                |
| `getInstance`         | _Static_ método que te permite obtener la instancia modal asociada con un elemento DOM.                                                             |
| `getOrCreateInstance` | _Static_ método que te permite obtener la instancia modal asociada con un elemento DOM, o crear una nueva en caso de que no haya sido inicializada. |

| Propiedad Static | Descripción                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `NAME`           | Devuelve el nombre del complemento. (Ejemplo: `bootstrap.Tooltip.NAME`)                                                                                                              |
| `VERSION`        | Se puede acceder a la versión de cada uno de los complementos de Bootstrap a través de la propiedad `VERSION` del constructor del complemento (Ejemplo: `bootstrap.Tooltip.VERSION`) |

### Sanear {#sanitizer}

La información sobre herramientas y las ventanas emergentes utilizan nuestro saneador incorporado para sanear las opciones que aceptan HTML.

El valor predeterminado de `allowList` es el siguiente:

[js/src/util/sanitizer.js](https://github.com/twbs/bootstrap/blob/v5.3.2/js/src/util/sanitizer.js)

{{< content-ads/middle-banner-4 >}}

```javascript {filename="js/src/util/sanitizer.js"}
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i

export const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
}
```

Si quieres agregar nuevos valores a esta `allowList` predeterminada, puedes hacer lo siguiente:

```javascript {filename="JavaScript"}
const myDefaultAllowList = bootstrap.Tooltip.Default.allowList

// To allow table elements
myDefaultAllowList.table = []

// To allow td elements and data-bs-option attributes on td elements
myDefaultAllowList.td = ['data-bs-option']

// You can push your custom regex to validate your attributes.
// Be careful about your regular expressions being too lax
const myCustomRegex = /^data-my-app-[\w-]+/
myDefaultAllowList['*'].push(myCustomRegex)
```

Si quieres omitir nuestro saneador porque prefieres usar una biblioteca dedicada, por ejemplo [DOMPurify](https://www.npmjs.com/package/dompurify), debes hacer lo siguiente:

```javascript {filename="JavaScript"}
const yourTooltipEl = document.querySelector('#yourTooltip')
const tooltip = new bootstrap.Tooltip(yourTooltipEl, {
    sanitizeFn(content) {
    return DOMPurify.sanitize(content)
    }
})
```

### Opcionalmente usando jQuery {#optionally-using-jquery}

**No necesitas jQuery en Bootstrap 5**, pero aún es posible usar nuestros componentes con jQuery. Si Bootstrap detecta `jQuery` en el objeto `window`, agregará todos nuestros componentes en el sistema de complementos de jQuery. Esto te permite hacer lo siguiente:

```javascript {filename="JavaScript"}
// to enable tooltips with the default configuration
$('[data-bs-toggle="tooltip"]').tooltip()

// to initialize tooltips with given configuration
$('[data-bs-toggle="tooltip"]').tooltip({
    boundary: 'clippingParents',
    customClass: 'myClass'
})

// to trigger the `show` method
$('#myTooltip').tooltip('show')
```

Lo mismo ocurre con nuestros otros componentes.

#### No conflict {#no-conflict}

A veces es necesario usar complementos Bootstrap con otros marcos de UI. En estas circunstancias, ocasionalmente pueden ocurrir colisiones de espacios de nombres. Si esto sucede, puedes llamar a `.noConflict` en el complemento cuyo valor deseas revertir.

{{< bootstrap/content-suggestion >}}

```javascript {filename="JavaScript"}
const bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton // give $().bootstrapBtn the Bootstrap functionality
```

Bootstrap no admite oficialmente bibliotecas de JavaScript de terceros como Prototype o jQuery UI. A pesar de `.noConflict` y los eventos con espacios de nombres, es posible que haya problemas de compatibilidad que debas solucionar por tu cuenta.

#### Eventos JQuery {#jquery-events}

Bootstrap detectará jQuery si `jQuery` está presente en el objeto `window` y no hay atributo `data-bs-no-jquery` establecido en `<body>`. Si se encuentra jQuery, Bootstrap emitirá eventos gracias al sistema de eventos de jQuery. Entonces, si deseas escuchar los eventos de Bootstrap, deberás usar los métodos jQuery (`.on`, `.one`) en lugar de `addEventListener`.

```javascript {filename="JavaScript"}
$('#myTab a').on('shown.bs.tab', () => {
    // do something...
})
```

### JavaScript deshabilitado {#disabled-javascript}

Los complementos de Bootstrap no tienen un respaldo especial cuando JavaScript está deshabilitado. Si te importa la experiencia del usuario en este caso, utiliza [`<noscript>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) para explicar la situación (y cómo volver a habilitar JavaScript) a tus usuarios y/o agregar sus propias alternativas personalizadas.

## Instalación de Bootstrap usando Webpack

La guía oficial sobre cómo incluir y agrupar CSS y JavaScript de Bootstrap en tu proyecto usando Webpack.

{{< content-ads/top-banner >}}

![Bootstrap y Webpack](/assets/bootstrap/5.3/assets/img/guides/bootstrap-webpack.png)

{{< callout type="info" emoji="" >}}
**¿Quieres ir hasta el final?** Descarga el código fuente y la demostración funcional de esta guía desde el repositorio [twbs/examples](https://github.com/twbs/examples/tree/main/webpack). También puedes [abrir el ejemplo en StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/webpack?file=index) para editarlo en vivo.
{{< /callout >}}

### Configuración {#setup}

Estamos creando un proyecto Webpack con Bootstrap desde cero, por lo que existen algunos requisitos previos y pasos previos antes de que podamos comenzar realmente. Esta guía requiere que tengas Node.js instalado y cierta familiaridad con el terminal.

1.  **Crea una carpeta de proyecto y configura npm.** Crearemos la carpeta `my-project` e inicializaremos npm con el argumento `-y` para evitar que nos haga todas las preguntas interactivas.
    ```shell {filename="Terminal"}
    mkdir my-project && cd my-project
    npm init -y
    ```    
2.  **Instalar Webpack.** A continuación, debemos instalar nuestras dependencias de desarrollo de Webpack: `webpack` para el núcleo de Webpack, `webpack-cli` para que podamos ejecutar comandos de Webpack desde la terminal y `webpack-dev-server` para que podamos ejecutar un servidor de desarrollo local. Además, instalaremos `html-webpack-plugin` para poder almacenar nuestro `index.html` en el directorio `src` en lugar del directorio `dist`. Usamos `--save-dev` para indicar que estas dependencias son solo para uso de desarrollo y no para producción.
    ```shell {filename="Terminal"}
    npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
    ```    
3.  **Instalar Bootstrap.** Ahora podemos instalar Bootstrap. También instalaremos Popper, ya que nuestros menús desplegables, ventanas emergentes y tooltips dependen de él para su posicionamiento. Si no planeas usar esos componentes, puedes omitir Popper aquí.
    ```shell {filename="Terminal"}
    npm i --save bootstrap @popperjs/core
    ```
4.  **Instala dependencias adicionales.** Además de Webpack y Bootstrap, necesitamos algunas dependencias más para importar y agrupar correctamente CSS y JS de Bootstrap con Webpack. Estos incluyen Sass, algunos cargadores y Autoprefixer.
    ```shell {filename="Terminal"}
    npm i --save-dev autoprefixer css-loader postcss-loader sass sass-loader style-loader
    ```    

Ahora que tenemos todas las dependencias necesarias instaladas, podemos comenzar a trabajar creando los archivos del proyecto e importando Bootstrap.

### Estructura del proyecto. {#project-structure}

Ya creamos la carpeta `my-project` e inicializamos npm. Ahora también crearemos nuestras carpetas `src` y `dist` para completar la estructura del proyecto. Ejecuta lo siguiente desde `my-project` o crea manualmente la carpeta y la estructura de archivos que se muestran a continuación.

```shell {filename="Terminal"}
mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss webpack.config.js
```    

{{< content-ads/middle-banner-1 >}}

Cuando hayas terminado, tu proyecto completo debería verse así:

```
my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   ├── scss/
│   │   └── styles.scss
│   └── index.html
├── package-lock.json
├── package.json
└── webpack.config.js
```    

En este punto, todo está en el lugar correcto, pero Webpack no funcionará porque aún no hemos completado nuestro `webpack.config.js`.

### Configurar Webpack {#configure-webpack}

Con las dependencias instaladas y nuestra carpeta de proyecto lista para que comencemos a codificar, ahora podemos configurar Webpack y ejecutar nuestro proyecto localmente.

1.  **Abre `webpack.config.js` en tu editor.** Como está en blanco, necesitaremos agregar alguna configuración repetitiva a para que podamos iniciar nuestro servidor. Esta parte de la configuración le dice a Webpack dónde buscar el JavaScript de nuestro proyecto, dónde enviar el código compilado (`dist`) y cómo debe comportarse el servidor de desarrollo (extrayendo del directorio `dist` con hot reload).
    ```javascript {filename="JavaScript"}
    'use strict'

    const path = require('path')
    const HtmlWebpackPlugin = require('html-webpack-plugin')

    module.exports = {
        mode: 'development',
        entry: './src/js/main.js',
        output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
        },
        devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true
        },
        plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
        ]
    }
    ```
2.  **A continuación completamos nuestro `src/index.html`.** Esta es la página HTML que Webpack cargará en el navegador para utilizar el CSS y JS incluidos que agregaremos en pasos posteriores. Antes de que podamos hacer eso, tenemos que darle algo para renderizar e incluir el `output` JS del paso anterior.
    ```html {filename="HTML"}
    <!doctype html>
    <html lang="en">
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap w/ Webpack</title>
        </head>
        <body>
        <div class="container py-4 px-3 mx-auto">
            <h1>Hello, Bootstrap and Webpack!</h1>
            <button class="btn btn-primary">Primary button</button>
        </div>
        </body>
    </html>
    ```    
    Estamos incluyendo un poco de estilo Bootstrap aquí con el `div class="container"` y `<button>` para que podamos ver cuándo Webpack carga el CSS de Bootstrap.
    
3.  **Ahora necesitamos un script npm para ejecutar Webpack.** Abre `package.json` y agrega el script `start` que se muestra a continuación (ya debería tener el script test). Usaremos este script para iniciar nuestro servidor de desarrollo Webpack local. También puedes agregar un script `build` que se muestra a continuación para construir tu proyecto.
    ```json {filename="JSON"}
    {
        // ...
        "scripts": {
        "start": "webpack serve",
        "build": "webpack build --mode=production",
        "test": "echo \"Error: no test specified\" && exit 1"
        },
        // ...
    }
    ```    
4.  **Y finalmente, podemos iniciar Webpack.** Desde la carpeta `my-project` en tu terminal, ejecuta el script npm recién agregado:
    ```shell {filename="Terminal"}
    npm start
    ```
    
    ![Webpack dev server running](/assets/bootstrap/5.3/assets/img/guides/webpack-dev-server.png)

En la siguiente y última sección de esta guía, configuraremos los cargadores de paquetes web e importaremos todo el CSS y JavaScript de Bootstrap.

{{< content-ads/middle-banner-2 >}}

### Importar Bootstrap {#import-bootstrap}

Importar Bootstrap a Webpack requiere los cargadores que instalamos en la primera sección. Los instalamos con npm, pero ahora es necesario configurar Webpack para usarlos.

{{< bootstrap/content-suggestion >}}

1.  **Configura los cargadores en `webpack.config.js`.** Tu archivo de configuración ahora está completo y debe coincidir con el siguiente fragmento. La única parte nueva aquí es la sección `module`.
    ```javascript {filename="JavaScript"}
    'use strict'

    const path = require('path')
    const autoprefixer = require('autoprefixer')
    const HtmlWebpackPlugin = require('html-webpack-plugin')

    module.exports = {
        mode: 'development',
        entry: './src/js/main.js',
        output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
        },
        devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true
        },
        plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
        ],
        module: {
        rules: [
            {
            test: /\.(scss)$/,
            use: [
                {
                // Adds CSS to the DOM by injecting a `<style>` tag
                loader: 'style-loader'
                },
                {
                // Interprets `@import` and `url()` like `import/require()` and will resolve them
                loader: 'css-loader'
                },
                {
                // Loader for webpack to process CSS with PostCSS
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                    plugins: [
                        autoprefixer
                    ]
                    }
                }
                },
                {
                // Loads a SASS/SCSS file and compiles it to CSS
                loader: 'sass-loader'
                }
            ]
            }
        ]
        }
    }
    ```
    Aquí tienes un resumen de por qué necesitamos todos estos cargadores. `style-loader` inyecta el CSS en un elemento `<style>` en el `<head>` de la página HTML, `css-loader` ayuda con el uso de `@import` y `url()`, `postcss-loader` es necesario para Autoprefixer y `sass-loader` nos permite usar Sass.    
2.  **Ahora, importemos el CSS de Bootstrap.** Agrega lo siguiente a `src/scss/styles.scss` para importar todo el código fuente Sass de Bootstrap.
    ```scss {filename="SCSS"}
    // Import all of Bootstrap's CSS
    @import "bootstrap/scss/bootstrap";
    ```    
    _También puedes importar nuestras hojas de estilo individualmente si lo deseas. [Lee nuestra documentación de importación de Sass](/bootstrap/personalizar/#importing) para obtener más detalles._    
3.  **A continuación cargamos el CSS e importamos el JavaScript de Bootstrap.** Agrega lo siguiente a `src/js/main.js` para cargar el CSS e importa todo el JS de Bootstrap. Popper se importará automáticamente a través de Bootstrap.
    ```javascript {filename="JavaScript"}
    // Import our custom CSS
    import '../scss/styles.scss'

    // Import all of Bootstrap's JS
    import * as bootstrap from 'bootstrap'
    ```    
    También puedes importar complementos de JavaScript individualmente según sea necesario para mantener bajos los tamaños de los paquetes:
    ```javascript {filename="JavaScript"}
    import Alert from 'bootstrap/js/dist/alert'

    // or, specify which plugins you need:
    import { Tooltip, Toast, Popover } from 'bootstrap'
    ```    
    _[Lee nuestra documentación de JavaScript](/bootstrap/comenzando) para obtener más información sobre cómo usar los complementos de Bootstrap._
4.  **¡Y listo! 🎉** Con el código fuente Sass y JS de Bootstrap completamente cargados, tu servidor de desarrollo local ahora debería verse así.

    ![Webpack dev server running with Bootstrap](/assets/bootstrap/5.3/assets/img/guides/webpack-dev-server-bootstrap.png)
    
    Ahora puedes comenzar a agregar cualquier componente Bootstrap que quieras usar. Asegúrate de [consultar el proyecto de ejemplo de Webpack completo](https://github.com/twbs/examples/tree/main/webpack) para saber cómo incluir Sass personalizado adicional y optimizar tu compilación importando solo las partes de CSS y JS de Bootstrap que necesites.
    

### Optimizaciones de producción {#production-optimizations}

Dependiendo de tu configuración, es posible que desees implementar algunas optimizaciones adicionales de seguridad y velocidad útiles para ejecutar el proyecto en producción. Ten en cuenta que estas optimizaciones no se aplican en [el proyecto de ejemplo de Webpack](https://github.com/twbs/examples/tree/main/webpack) y su implementación depende de ti.

{{< content-ads/middle-banner-3 >}}

#### Extrayendo CSS {#extracting-css}

El `style-loader` que configuramos anteriormente emite CSS convenientemente en el paquete bundle para que cargar manualmente un archivo CSS en `dist/index.html` no sea necesario. Sin embargo, es posible que este enfoque no funcione con una política de seguridad de contenido estricta y puede convertirse en un cuello de botella en tu aplicación debido al gran tamaño del paquete.

Para separar el CSS para que podamos cargarlo directamente desde `dist/index.html`, usa el complemento `mini-css-extract-loader` de Webpack.

Primero, instala el complemento:

```shell {filename="Terminal"}
npm install --save-dev mini-css-extract-plugin
```

Luego crea una instancia y usa el complemento en la configuración de Webpack:

{{< bootstrap/content-suggestion >}}

```diff {filename="Diff"}
--- a/webpack.config.js
+++ b/webpack.config.js
@@ -3,6 +3,7 @@
    const path = require('path')
    const autoprefixer = require('autoprefixer')
    const HtmlWebpackPlugin = require('html-webpack-plugin')
+const miniCssExtractPlugin = require('mini-css-extract-plugin')

    module.exports = {
    mode: 'development',
@@ -17,7 +18,8 @@ module.exports = {
        hot: true
    },
    plugins: [
-    new HtmlWebpackPlugin({ template: './src/index.html' })
+    new HtmlWebpackPlugin({ template: './src/index.html' }),
+    new miniCssExtractPlugin()
    ],
    module: {
        rules: [
@@ -25,8 +27,8 @@ module.exports = {
            test: /\.(scss)$/,
            use: [
            {
-            // Adds CSS to the DOM by injecting a `<style>` tag
-            loader: 'style-loader'
+            // Extracts CSS for each JS file that includes CSS
+            loader: miniCssExtractPlugin.loader
            },
            {
```

Después de ejecutar `npm run build` nuevamente, habrá un nuevo archivo `dist/main.css`, que contendrá todo el CSS importado por `src/js/main.js`. Si ves `dist/index.html` en tu navegador ahora, faltará el estilo, ya que ahora está en `dist/main.css`. Puedes incluir el CSS generado en `dist/index.html` así:

{{< content-ads/middle-banner-4 >}}

```diff {filename="Diff"}
--- a/dist/index.html
+++ b/dist/index.html
@@ -3,6 +3,7 @@
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
+    <link rel="stylesheet" href="./main.css">
        <title>Bootstrap w/ Webpack</title>
    </head>
    <body>
```

#### Extraer archivos SVG {#extracting-svg-files}

El CSS de Bootstrap incluye múltiples referencias a archivos SVG a través de URI `data:` en línea. Si defines una Política de seguridad de contenido para tu proyecto que bloquea los URI `data:` para imágenes, estos archivos SVG no se cargarán. Puedes solucionar este problema extrayendo los archivos SVG en línea utilizando la función de módulos de assets de Webpack.

{{< bootstrap/content-suggestion >}}

Configura Webpack para extraer archivos SVG en línea como este:

```diff {filename="Diff"}
--- a/webpack.config.js
+++ b/webpack.config.js
@@ -23,6 +23,14 @@ module.exports = {
    },
    module: {
        rules: [
+      {
+        mimetype: 'image/svg+xml',
+        scheme: 'data',
+        type: 'asset/resource',
+        generator: {
+          filename: 'icons/[hash].svg'
+        }
+      },
        {
            test: /\.(scss)$/,
            use: [
```

Después de ejecutar `npm run build` nuevamente, encontrarás los archivos SVG extraídos en `dist/icons` y referenciados correctamente desde CSS.

* * *

_¿Ves algo incorrecto o desactualizado aquí? [abre un issue en GitHub](https://github.com/twbs/bootstrap/issues/new/choose). ¿Necesitas ayuda para solucionar problemas? [Buscar o iniciar una discusión](https://github.com/twbs/bootstrap/discussions) en GitHub._

## Instalación de Bootstrap usando Parcel

La guía oficial sobre cómo incluir y agrupar CSS y JavaScript de Bootstrap en tu proyecto usando Parcel.

{{< content-ads/top-banner >}}

![](/assets/bootstrap/5.3/assets/img/guides/bootstrap-parcel.png)

{{< callout type="info" emoji="" >}}
**¿Quieres ir hasta el final?** Descarga el código fuente y la demostración funcional de esta guía desde el repositorio [twbs/examples](https://github.com/twbs/examples/tree/main/parcel). También puedes [abrir el ejemplo en StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/parcel?file=index) pero no ejecutarlo porque Parcel actualmente no es compatible allí.
{{< /callout >}}

### Configuración {#setup}

Estamos creando un proyecto de Parcel con Bootstrap desde cero, por lo que existen algunos requisitos previos y pasos previos antes de que podamos comenzar realmente. Esta guía requiere que tengas Node.js instalado y cierta familiaridad con el terminal.

1.  **Crea una carpeta de proyecto y configura npm.** Crearemos la carpeta `my-project` e inicializaremos npm con el argumento `-y` para evitar que nos haga todas las preguntas interactivas.
    ```shell {filename="Terminal"}
    mkdir my-project && cd my-project
    npm init -y
    ``` 
2.  **Instalar Parcel** . A diferencia de nuestra guía de Webpack, aquí solo hay una única dependencia de herramienta de compilación. Parcel instalará automáticamente transformadores de lenguajes (como Sass) a medida que los detecte. Usamos `--save-dev` para indicar que esta dependencia es solo para uso de desarrollo y no para producción.
    ```shell {filename="Terminal"}
    npm i --save-dev parcel
    ``` 
3.  **Instalar Bootstrap.** Ahora podemos instalar Bootstrap. También instalaremos Popper, ya que nuestros menús desplegables, ventanas emergentes y tooltips dependen de él para su posicionamiento. Si no planeas usar esos componentes, puedes omitir Popper aquí.
    ```shell {filename="Terminal"}
    npm i --save bootstrap @popperjs/core
    ``` 

Ahora que tenemos todas las dependencias necesarias instaladas, podemos comenzar a trabajar creando los archivos del proyecto e importando Bootstrap.

### Estructura del proyecto. {#project-structure}

{{< content-ads/middle-banner-1 >}}

Ya creamos la carpeta `my-project` e inicializamos npm. Ahora también crearemos nuestra carpeta `src`, hoja de estilo y archivo JavaScript para completar la estructura del proyecto. Ejecuta lo siguiente desde `my-project` o crea manualmente la carpeta y la estructura de archivos que se muestran a continuación.

```shell {filename="Terminal"}
mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss
```

Cuando hayas terminado, tu proyecto completo debería verse así:

```
my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   ├── scss/
│   │   └── styles.scss
│   └── index.html
├── package-lock.json
└── package.json
```

En este punto, todo está en el lugar correcto, pero Parcel necesita una página HTML y un script npm para iniciar nuestro servidor.

### Configurar Parcel {#configure-parcel}

Con las dependencias instaladas y nuestra carpeta de proyecto lista para que comencemos a codificar, ahora podemos configurar Parcel y ejecutar nuestro proyecto localmente. Parcel en sí no requiere ningún archivo de configuración por diseño, pero sí necesitamos un script npm y un archivo HTML para iniciar nuestro servidor.

{{< content-ads/middle-banner-2 >}}

1.  **Rellena el archivo `src/index.html`.** Parcel necesita una página para renderizar, así que usamos nuestro `index.html` para configurar HTML básico, incluidos nuestros archivos CSS y JavaScript.
    ```html {filename="HTML"}
    <!doctype html>
    <html lang="en">
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap w/ Parcel</title>
        <link rel="stylesheet" href="scss/styles.scss">
        <script type="module" src="js/main.js"></script>
        </head>
        <body>
        <div class="container py-4 px-3 mx-auto">
            <h1>Hello, Bootstrap and Parcel!</h1>
            <button class="btn btn-primary">Primary button</button>
        </div>
        </body>
    </html>
    ```
    
    Estamos incluyendo un poco de estilo Bootstrap aquí con el `div class="container"` y `<button>` para que podamos ver cuándo Parcel carga el CSS de Bootstrap.
    
    Parcel detectará automáticamente que estamos usando Sass e instalará el [complemento Sass de Parcel](https://parceljs.org/languages/sass) para apoyarlo. Sin embargo, si lo deseas, también puedes ejecutar manualmente `npm i --save-dev @parcel/transformer-sass`.
    
2.  **Agrega los scripts Parcel npm.** Abre el `package.json` y agrega el siguiente script `start` al objeto `scripts`. Usaremos este script para iniciar nuestro servidor de desarrollo de Parcel y renderizar el archivo HTML que creamos después de compilarlo en el directorio `dist`.
    ```json {filename="JSON"}
    {
        // ...
        "scripts": {
            "start": "parcel serve src/index.html --public-url / --dist-dir dist",
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        // ...
    }
    ```    
3.  **Y finalmente, podemos iniciar Parcel.** Desde la carpeta `my-project` en tu terminal, ejecuta el script npm recién agregado:
    ```shell {filename="Terminal"}
    npm start
    ```
    
    ![Parcel dev server running](/assets/bootstrap/5.3/assets/img/guides/parcel-dev-server.png)

En la siguiente y última sección de esta guía, importaremos todo el CSS y JavaScript de Bootstrap.

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-3 >}}

### Importar Bootstrap {#import-bootstrap}

Importar Bootstrap a Parcel requiere dos importaciones, una a nuestro `styles.scss` y otra a nuestro `main.js`.

1.  **Importar CSS de Bootstrap.** Agrega lo siguiente a `src/scss/styles.scss` para importar todo el Sass fuente de Bootstrap.
    ```scss {filename="SCSS"}
    // Import all of Bootstrap's CSS
    @import "bootstrap/scss/bootstrap";
    ```
    
    _También puedes importar nuestras hojas de estilo individualmente si lo deseas. [Lee nuestra documentación de importación de Sass](/bootstrap/personalizar/#importing) para obtener más detalles._
    
2.  **Importar JS de Bootstrap.** Agrega lo siguiente a `src/js/main.js` para importar todos los JS de Bootstrap. Popper se importará automáticamente a través de Bootstrap.
    ```javascript {filename="JavaScript"}
    // Import all of Bootstrap's JS
    import * as bootstrap from 'bootstrap'
    ```
    
    También puedes importar complementos de JavaScript individualmente según sea necesario para mantener bajos los tamaños de los paquetes:

    ```javascript {filename="JavaScript"}
    import Alert from 'bootstrap/js/dist/alert'
    
    // or, specify which plugins you need:
    import { Tooltip, Toast, Popover } from 'bootstrap'
    ```
    
    _[Lee nuestra documentación de JavaScript](/bootstrap/comenzando) para obtener más información sobre cómo usar los complementos de Bootstrap._
    
3.  **¡Y listo! 🎉** Con el código fuente Sass y JS de Bootstrap completamente cargados, tu servidor de desarrollo local ahora debería verse así.
    
    ![Parcel dev server running with Bootstrap](/assets/bootstrap/5.3/assets/img/guides/parcel-dev-server-bootstrap.png)
    
{{< content-ads/middle-banner-4 >}}

Ahora puedes comenzar a agregar cualquier componente Bootstrap que quieras usar. Asegúrate de [consultar el proyecto de ejemplo de Parcel completo](https://github.com/twbs/examples/tree/main/parcel) para saber cómo incluir Sass personalizado adicional y optimizar tu compilación importando solo las partes de CSS y JS de Bootstrap que necesites.
    

* * *

_¿Ves algo incorrecto o desactualizado aquí? [abre un issue en GitHub](https://github.com/twbs/bootstrap/issues/new/choose). ¿Necesitas ayuda para solucionar problemas? [Buscar o iniciar una discusión](https://github.com/twbs/bootstrap/discussions) en GitHub._

## Instalación de Bootstrap usando Vite

La guía oficial sobre cómo incluir y agrupar CSS y JavaScript de Bootstrap en tu proyecto usando Vite.

{{< content-ads/top-banner >}}

![Bootstrap y Vite](/assets/bootstrap/5.3/assets/img/guides/bootstrap-vite.png)

{{< callout type="info" emoji="" >}}
**¿Quieres ir hasta el final?** Descarga el código fuente y la demostración funcional de esta guía desde el repositorio [twbs/examples](https://github.com/twbs/examples/tree/main/vite). También puedes [abrir el ejemplo en StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/vite?file=index) para editarlo en vivo.
{{< /callout >}}

### Configuración {#setup}

Estamos creando un proyecto Vite con Bootstrap desde cero, por lo que existen algunos requisitos previos y pasos previos antes de que podamos comenzar realmente. Esta guía requiere que tengas Node.js instalado y cierta familiaridad con el terminal.

1.  **Crea una carpeta de proyecto y configura npm.** Crearemos la carpeta `my-project` e inicializaremos npm con el argumento `-y` para evitar que nos haga todas las preguntas interactivas.
    ```shell {filename="Terminal"}
    mkdir my-project && cd my-project
    npm init -y
    ```
    
2.  **Instala Vite.** A diferencia de nuestra guía de Webpack, aquí solo hay una única dependencia de herramienta de compilación. Usamos `--save-dev` para indicar que esta dependencia es solo para uso de desarrollo y no para producción.
    ```shell {filename="Terminal"}
    npm i --save-dev vite
    ``` 
    
3.  **Instalar Bootstrap.** Ahora podemos instalar Bootstrap. También instalaremos Popper, ya que nuestros menús desplegables, ventanas emergentes y tooltips dependen de él para su posicionamiento. Si no planeas usar esos componentes, puedes omitir Popper aquí.
    ```shell {filename="Terminal"}
    npm i --save bootstrap @popperjs/core
    ```
    
{{< content-ads/middle-banner-1 >}}

4.  **Instala una dependencia adicional.** Además de Vite y Bootstrap, necesitamos otra dependencia (Sass) para importar y agrupar correctamente el CSS de Bootstrap.
    ```shell {filename="Terminal"}
    npm i --save-dev sass
    ```
    
Ahora que tenemos todas las dependencias necesarias instaladas y configuradas, podemos comenzar a trabajar creando los archivos del proyecto e importando Bootstrap.

### Estructura del proyecto. {#project-structure}

Ya creamos la carpeta `my-project` e inicializamos npm. Ahora también crearemos nuestra carpeta `src`, hoja de estilo y archivo JavaScript para completar la estructura del proyecto. Ejecuta lo siguiente desde `my-project` o crea manualmente la carpeta y la estructura de archivos que se muestran a continuación.

```shell {filename="Terminal"}
mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss vite.config.js
```

Cuando hayas terminado, tu proyecto completo debería verse así:

```
my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   └── scss/
│   |   └── styles.scss
|   └── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

{{< content-ads/middle-banner-2 >}}

En este punto, todo está en el lugar correcto, pero Vite no funcionará porque aún no hemos completado nuestro `vite.config.js`.

### Configurar Vite {#configure-vite}

Con las dependencias instaladas y nuestra carpeta de proyecto lista para que comencemos a codificar, ahora podemos configurar Vite y ejecutar nuestro proyecto localmente.

1.  **Abre `vite.config.js` en tu editor.** Como está en blanco, necesitaremos agregar algo de configuración para que podamos iniciar nuestro servidor. Esta parte de la configuración le dice a Vite dónde buscar el JavaScript de nuestro proyecto y cómo debe comportarse el servidor de desarrollo (extrayendo de la carpeta `src` con hot reload).
    ```javascript {filename="JavaScript"}
    const path = require('path')
    
    export default {
      root: path.resolve(__dirname, 'src'),
      build: {
        outDir: '../dist'
      },
      server: {
        port: 8080
      }
    }
    ```
    
2.  **A continuación completamos `src/index.html`.** Esta es la página HTML que Vite cargará en el navegador para utilizar el CSS y JS incluidos que agregaremos en pasos posteriores.
    ```html {filename="HTML"}
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap w/ Vite</title>
        <script type="module" src="./js/main.js"></script>
      </head>
      <body>
        <div class="container py-4 px-3 mx-auto">
          <h1>Hello, Bootstrap and Vite!</h1>
          <button class="btn btn-primary">Primary button</button>
        </div>
      </body>
    </html>
    ```
    
    Estamos incluyendo un poco de estilo Bootstrap aquí con el `div class="container"` y `<button>` para que podamos ver cuándo Vite carga el CSS de Bootstrap.
    
3.  **Ahora necesitamos un script npm para ejecutar Vite.** Abre `package.json` y agrega el script `start` que se muestra a continuación (ya deberías tener el script test). Usaremos este script para iniciar nuestro servidor de desarrollo Vite local.
    ```json {filename="JSON"}
    {
      // ...
      "scripts": {
        "start": "vite",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      // ...
    }
    ```
    
{{< content-ads/middle-banner-3 >}}

4.  **Y finalmente, podemos iniciar Vite.** Desde la carpeta `my-project` en tu terminal, ejecuta el script npm recién agregado:
    ```shell {filename="Terminal"}
    npm start
    ```
    
    ![Vite dev server running](/assets/bootstrap/5.3/assets/img/guides/vite-dev-server.png)

En la siguiente y última sección de esta guía, importaremos todo el CSS y JavaScript de Bootstrap.

{{< bootstrap/content-suggestion >}}

### Importar Bootstrap {#import-bootstrap}

1.  **Importar CSS de Bootstrap.** Agrega lo siguiente a `src/scss/styles.scss` para importar todo el Sass fuente de Bootstrap.
    ```scss {filename="SCSS"}
    // Import all of Bootstrap's CSS
    @import "bootstrap/scss/bootstrap";
    ```
    
    _También puedes importar nuestras hojas de estilo individualmente si lo deseas. [Lee nuestra documentación de importación de Sass](/bootstrap/personalizar/#importing) para obtener más detalles._
    
{{< content-ads/middle-banner-4 >}}

2.  **A continuación cargamos el CSS e importamos el JavaScript de Bootstrap.** Agrega lo siguiente a `src/js/main.js` para cargar el CSS e importa todo el JS de Bootstrap. Popper se importará automáticamente a través de Bootstrap.
    ```javascript {filename="JavaScript"}
    // Import our custom CSS
    import '../scss/styles.scss'
    
    // Import all of Bootstrap's JS
    import * as bootstrap from 'bootstrap'
    ```
    
    También puedes importar complementos de JavaScript individualmente según sea necesario para mantener bajos los tamaños de los paquetes:
    ```javascript {filename="JavaScript"}
    import Alert from 'bootstrap/js/dist/alert';
    
    // or, specify which plugins you need:
    import { Tooltip, Toast, Popover } from 'bootstrap';
    ```
    
    _[Lee nuestra documentación de JavaScript](/bootstrap/comenzando) para obtener más información sobre cómo usar los complementos de Bootstrap._
    
3.  **¡Y listo! 🎉** Con el código fuente Sass y JS de Bootstrap completamente cargados, tu servidor de desarrollo local ahora debería verse así.
    
    ![Vite dev server running with Bootstrap](/assets/bootstrap/5.3/assets/img/guides/vite-dev-server-bootstrap.png)
    
    Ahora puedes comenzar a agregar cualquier componente Bootstrap que quieras usar. Asegúrate de [consultar el proyecto de ejemplo completo de Vite](https://github.com/twbs/examples/tree/main/vite) para saber cómo incluir Sass personalizado adicional y optimizar tu compilación importando solo las partes de CSS y JS de Bootstrap que necesites.
    

* * *

_¿Ves algo incorrecto o desactualizado aquí? [abre un issue en GitHub](https://github.com/twbs/bootstrap/issues/new/choose). ¿Necesitas ayuda para solucionar problemas? [Buscar o iniciar una discusión](https://github.com/twbs/bootstrap/discussions) en GitHub._

## Características de Accesibilidad en Bootstrap

Una breve descripción de las características y limitaciones de Bootstrap para la creación de contenido accesible.

{{< content-ads/top-banner >}}

Bootstrap proporciona un sencillo marco de estilos listos para usar, herramientas de layout y componentes interactivos, lo que permite a los desarrolladores crear sitios web y aplicaciones que son visualmente atractivos, funcionalmente ricos y accesibles por defecto.

### Descripción general y limitaciones {#overview-and-limitations}

La accesibilidad general de cualquier proyecto creado con Bootstrap depende en gran parte del marcado del autor, el estilo adicional y las secuencias de comandos que hayan incluido. Sin embargo, siempre que se hayan implementado correctamente, debería ser perfectamente posible crear sitios web y aplicaciones con Bootstrap que cumplan [WCAG 2.1](https://www.w3.org/TR/WCAG) (A/AA/AAA), [Sección 508](https://www.section508.gov) y similares estándares y requisitos de accesibilidad.

#### Marcado estructural {#structural-markup}

{{< content-ads/middle-banner-1 >}}

El estilo y el diseño de Bootstrap se pueden aplicar a una amplia gama de estructuras de marcado. Esta documentación tiene como objetivo proporcionar a los desarrolladores ejemplos de mejores prácticas para demostrar el uso de Bootstrap en sí e ilustrar el marcado semántico apropiado, incluidas las formas en que se pueden abordar posibles problemas de accesibilidad.

#### Componentes interactivos {#interactive-components}

Los componentes interactivos de Bootstrap, como cuadros de diálogo modales, menús desplegables y tooltips personalizados, están diseñados para funcionar con usuarios táctiles, de mouse y de teclado. Mediante el uso de [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria) estos componentes también deben ser comprensibles y operables mediante tecnologías de asistencia (como lectores de pantalla).

Debido a que los componentes de Bootstrap están diseñados específicamente para ser bastante genéricos, es posible que los autores necesiten incluir funciones y atributos ARIA adicionales, así como el comportamiento de JavaScript, para transmitir con mayor precisión la naturaleza y funcionalidad precisas de su componente. Esto suele estar indicado en la documentación.

{{< content-ads/middle-banner-2 >}}

#### Contraste de color {#color-contrast}

Algunas combinaciones de colores que actualmente componen la paleta predeterminada de Bootstrap (utilizadas en todo el framework para cosas como variaciones de botones, variaciones de alertas, indicadores de validación de formularios) pueden llevar a _insuficiente_ contraste de color (por debajo de la [relación de contraste de color de texto WCAG 2.1 recomendada de 4.5:1](https://www.w3.org/TR/WCAG/#contrast-minimum) y la [relación de contraste de color sin texto WCAG 2.1 de 3:1](https://www.w3.org/TR/WCAG/#non-text-contrast)), particularmente cuando se usa contra un fondo claro. Se anima a los autores a probar sus usos específicos del color y, cuando sea necesario, modificar/ampliar manualmente estos colores predeterminados para garantizar relaciones de contraste de color adecuadas.

#### Contenido visualmente oculto {#visually-hidden-content}

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

#### Movimiento reducido {#reduced-motion}

{{< content-ads/middle-banner-4 >}}

Bootstrap incluye soporte para las preferencias [`prefers-reduced-motion`.](https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion) En navegadores/entornos que permiten al usuario especificar su preferencia por el movimiento reducido, la mayoría de los efectos de transición CSS en Bootstrap (por ejemplo, cuando se abre o cierra un cuadro de diálogo modal, o la animación deslizante en carruseles) se desactivarán y las animaciones significativas (como los spinners) se ralentizarán.

En navegadores que admiten `prefers-reduced-motion`, y donde el usuario _no_ ha indicado explícitamente que preferiría movimiento reducido (es decir, donde `prefers-reduced-motion: no-preference`), Bootstrap activa un desplazamiento suave usando la propiedad `scroll-behavior` .

{{< bootstrap/content-suggestion >}}

### Recursos adicionales {#additional-resources}

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

## Uso de contenido RFS en Bootstrap

El motor de cambio de tamaño de Bootstrap escala de manera responsive las propiedades CSS comunes para utilizar mejor el espacio disponible en las ventanas gráficas y los dispositivos.

{{< content-ads/top-banner >}}

### ¿Qué es RFS? {#what-is-rfs}

El proyecto paralelo de Bootstrap [RFS](https://github.com/twbs/rfs/tree/v10.0.0) es un motor de cambio de tamaño de unidades que se desarrolló inicialmente para cambiar el tamaño de las fuentes (de ahí su abreviatura de Responsive Font Sizes). Hoy en día, RFS es capaz de reescalar la mayoría de las propiedades CSS con valores unitarios como `margin`, `padding`, `border-radius` o incluso `box-shadow`.

El mecanismo calcula automáticamente los valores apropiados en función de las dimensiones de la ventana gráfica del navegador. Se compilará en funciones `calc()` con una combinación de `rem` y unidades de viewport para permitir el comportamiento de escalado responsive.

### Usando RFS {#using-rfs}

{{< content-ads/middle-banner-1 >}}

Los mixins están incluidos en Bootstrap y están disponibles una vez que incluyes el `scss`de Bootstrap. RFS también se puede [instalar de forma independiente](https://github.com/twbs/rfs/tree/v10.0.0#installation) si es necesario.

#### Usando los mixins {#using-the-mixins}

El mixin `rfs()` tiene abreviaturas para `font-size`, `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `padding`, `padding-top`, `padding-right`, `padding-bottom` y `padding-left`. Ve el siguiente ejemplo en Sass y CSS compilado.

```css {filename="CSS"}
.title {
  @include font-size(4rem);
}
```

{{< content-ads/middle-banner-2 >}}

```css {filename="CSS"}
.title {
  font-size: calc(1.525rem + 3.3vw);
}

@media (min-width: 1200px) {
  .title {
    font-size: 4rem;
  }
}
```

Cualquier otra propiedad se puede pasar al mixin `rfs()` así:

```css {filename="CSS"}
.selector {
  @include rfs(4rem, border-radius);
}
```

`!important` también se puede agregar al valor que quieras:

{{< content-ads/middle-banner-3 >}}

```css {filename="CSS"}
.selector {
  @include padding(2.5rem !important);
}
```

#### Usando las funciones {#using-the-functions}

Cuando no quieras usar los includes, también hay dos funciones:

* `rfs-value()` convierte a un valor `rem` si un valor en `px` es pasado, en otros casos devuelve el mismo resultado.
* `rfs-fluid-value()` devuelve la versión fluida de un valor si es necesario cambiar la escala de la propiedad.

{{< content-ads/middle-banner-4 >}}

En este ejemplo, utilizamos uno de los [mixins de puntos de interrupción responsive](/bootstrap/layout) integrados en Bootstrap para aplicar solo estilo debajo del punto de interrupción `lg`.

```css {filename="CSS"}
.selector {
  @include media-breakpoint-down(lg) {
    padding: rfs-fluid-value(2rem);
    font-size: rfs-fluid-value(1.125rem);
  }
}
```
    
```css {filename="CSS"}
@media (max-width: 991.98px) {
  .selector {
    padding: calc(1.325rem + 0.9vw);
    font-size: 1.125rem; /* 1.125rem is small enough, so RFS won't rescale this */
  }
}
```

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-5 >}}

### Documentación extendida {#extended-documentation}

RFS es un proyecto separado bajo la organización Bootstrap. Puedes encontrar más información sobre RFS y su configuración en su [repositorio de GitHub](https://github.com/twbs/rfs/tree/v10.0.0).

## Uso de contenido RTL en Bootstrap

Aprende cómo habilitar la compatibilidad con texto de derecha a izquierda en Bootstrap en nuestro layout, componentes y utilidades.

{{< content-ads/top-banner >}}

### Familiarízate {#get-familiar}

Recomendamos familiarizarte con Bootstrap primero leyendo nuestra [página de introducción para comenzar](/bootstrap/comenzando). Una vez que lo hayas leído, continúa leyendo aquí para saber cómo habilitar RTL.

Quizás también quieras leer sobre [el proyecto RTLCSS](https://rtlcss.com), ya que impulsa nuestro enfoque de RTL.

{{< callout type="warning" emoji="" >}}
**La función RTL de Bootstrap aún es experimental** y evolucionará según los comentarios de los usuarios. ¿Viste algo o tienes alguna mejora que sugerir? [Abre un issue](https://github.com/twbs/bootstrap/issues/new/choose), nos encantaría conocer tus ideas.
{{< /callout >}}

### HTML requerido {#required-html}

Existen dos requisitos estrictos para habilitar RTL en páginas impulsadas por Bootstrap.

1.  Establece `dir="rtl"` en el elemento `<html>`.
2.  Agrega un atributo `lang` apropiado, como `lang="ar"`, en el elemento `<html>`.

A partir de ahí, deberás incluir una versión RTL de nuestro CSS. Por ejemplo, aquí está la hoja de estilo de nuestro CSS compilado y minimizado con RTL habilitado:

{{< content-ads/middle-banner-1 >}}

```html {filename="HTML"}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css" integrity="sha384-nU14brUcp6StFntEOOEBvcJm4huWjB0OcIeQ3fltAfSmuZFrkAif0T+UtNGlKKQv" crossorigin="anonymous">
```

#### Plantilla de inicio {#starter-template}

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

#### Ejemplos RTL {#rtl-examples}

Empieza con uno de nuestros varios [ejemplos RTL](https://getbootstrap.com/docs/5.3/examples/#rtl).

### Acercarse {#approach}

Nuestro enfoque para crear soporte RTL en Bootstrap viene con dos decisiones importantes que afectan la forma en que escribimos y usamos nuestro CSS:

{{< content-ads/middle-banner-2 >}}

1.  **Primero, decidimos construirlo con el proyecto [RTLCSS](https://rtlcss.com).** Esto nos brinda algunas características poderosas para administrar cambios y sobrescrituras al pasar de LTR a RTL. También nos permite crear dos versiones de Bootstrap a partir de una base de código.
    
2.  **En segundo lugar, hemos cambiado el nombre de un puñado de clases direccionales para adoptar un enfoque de propiedades lógicas.** La mayoría de ustedes ya han interactuado con propiedades lógicas gracias a nuestras utilidades flex: reemplazan las propiedades de dirección como `left` y `right` a favor de `start` y `end`. Eso hace que los nombres y valores de las clases sean apropiados para LTR y RTL sin ningún costo adicional.
    

Por ejemplo, en lugar de `.ml-3` para `margin-left`, usa `.ms-3`.

Trabajar con RTL, a través de nuestro Sass fuente o CSS compilado, no debería ser muy diferente de nuestro LTR predeterminado.

### Personalizar desde la fuente {#customize-from-source}

Cuando se trata de [personalización](/bootstrap/personalizar), la forma preferida es aprovechar variables, mapas, y mixins. Este enfoque funciona igual para RTL, incluso si se procesa posteriormente a partir de los archivos compilados, gracias a [cómo funciona RTLCSS](https://rtlcss.com/learn/getting-started/why-rtlcss).

#### Valores RTL personalizados {#custom-rtl-values}

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

#### Pila de fuentes alternativas {#alternative-font-stack}

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

#### LTR y RTL al mismo tiempo {#ltr-and-rtl-at-the-same-time}

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
2.  Cargar ambos archivos puede ser un verdadero cuello de botella en el rendimiento: considera algo de [optimización](/bootstrap/personalizar) y tal vez intentes [carga uno de esos archivos de forma asincrónica](https://www.filamentgroup.com/lab/load-css-simpler).
3.  Anidar estilos de esta manera evitará que nuestro mixin `form-validation-state()` funcione según lo previsto, por lo que requerirá que lo modifiques un poco por tu cuenta. [Ver #31223](https://github.com/twbs/bootstrap/issues/31223).
{{< /callout >}}

{{< bootstrap/content-suggestion >}}

### El caso del breadcrumb {#the-breadcrumb-case}

El [separador de breadcrumb](/bootstrap/componentes/insignias-y-breadcrumbs/ "Página todavía no traducida") es el único caso que requiere una variable completamente nueva, concretamente `$breadcrumb-divider-flipped`, cuyo valor predeterminado es `$breadcrumb-divider`.

### Recursos adicionales {#additional-resources}

* [RTLCSS](https://rtlcss.com)
* [Estilo en RTL 101](https://rtlstyling.com/posts/rtl-styling)

## Cómo contribuir en el proyecto Bootstrap

Ayuda a desarrollar Bootstrap con nuestra documentación, scripts y tests.

{{< content-ads/top-banner >}}

### Configuración de herramientas {#tooling-setup}

Bootstrap usa [scripts npm](https://docs.npmjs.com/misc/scripts) para crear la documentación y compilar los archivos fuente. Nuestro [package.json](https://github.com/twbs/bootstrap/blob/v5.3.2/package.json) alberga estos scripts para compilar código, ejecutar pruebas y más. Estos no están pensados para su uso fuera de nuestro repositorio y documentación.

Para usar nuestro sistema de compilación y ejecutar nuestra documentación localmente, necesitarás una copia de los archivos fuente de Bootstrap y Node. Sigue estos pasos y deberías estar listo para rockear:

1.  [Descarga e instala Node.js](https://nodejs.org/en/download), que usamos para administrar nuestras dependencias.
2.  Descarga las [fuentes de Bootstrap](https://github.com/twbs/bootstrap/archive/v5.3.2.zip) o bifurca y clona el [repositorio de Bootstrap](https://github.com/twbs/bootstrap).
3.  Navega al directorio raíz `/bootstrap` y ejecuta `npm install` para instalar nuestras dependencias locales enumeradas en [package.json](https://github.com/twbs/bootstrap/blob/v5.3.2/package.json).

{{< content-ads/middle-banner-1 >}}

Cuando esté completo, podrás ejecutar los distintos comandos proporcionados desde la línea de comandos.

### Usar scripts npm {#using-npm-scripts}

Nuestro [package.json](https://github.com/twbs/bootstrap/blob/v5.3.2/package.json) incluye numerosos tareas para el desarrollo del proyecto. Ejecuta `npm run` para ver todos los scripts npm en tu terminal. **Las tareas principales incluyen:**

| Tarea                | Descripción                                                                                                                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm start`          | Compila CSS y JavaScript, crea la documentación e inicia un servidor local.                                                                                                                      |
| `npm run dist`       | Crea el directorio `dist/` con archivos compilados. Utiliza [Sass](https://sass-lang.com), [Autoprefixer](https://github.com/postcss/autoprefixer) y [terser](https://github.com/terser/terser). |
| `npm test`           | Ejecuta tests localmente después de ejecutar `npm run dist`                                                                                                                                      |
| `npm run docs-serve` | Compila y ejecuta la documentación localmente.                                                                                                                                                   |

{{< content-ads/middle-banner-2 >}}

{{< callout type="info" emoji="" >}}
**¡Empieza a usar Bootstrap a través de npm con nuestro proyecto inicial!** Dirígete al repositorio de ejemplo de [Sass y JS](https://github.com/twbs/examples/tree/main/sass-js) para ver cómo crear y personalizar Bootstrap en tu propio proyecto npm. Incluye el compilador Sass, Autoprefixer, Stylelint, PurgeCSS y Bootstrap Icons.
{{< /callout >}}

### Sass {#sass}

Bootstrap usa [Dart Sass](https://sass-lang.com/dart-sass) para compilar nuestros archivos fuente Sass en archivos CSS (incluido en nuestro proceso de compilación), y te recomendamos que hagas lo mismo si estás compilando Sass utilizando tus propios assets. Anteriormente usamos Node Sass para Bootstrap v4, pero LibSass y los paquetes creados sobre él, incluido Node Sass, ahora están [obsoletos.](https://sass-lang.com/blog/libsass-is-deprecated).

Dart Sass utiliza una precisión de redondeo de 10 y por razones de eficiencia no permite ajustar este valor. No reducimos esta precisión durante el procesamiento posterior de nuestro CSS generado, como durante la minificación, pero si decides hacerlo, te recomendamos mantener una precisión de al menos 6 para evitar problemas con el redondeo del navegador.

{{< content-ads/middle-banner-3 >}}

### Autoprefixer {#autoprefixer}

Bootstrap usa [Autoprefixer](https://github.com/postcss/autoprefixer) (incluido en nuestro proceso de compilación) para agregar automáticamente prefijos de proveedores a algunas propiedades CSS en el momento de la compilación. Hacerlo nos ahorra tiempo y código al permitirnos escribir partes clave de nuestro CSS una sola vez y al mismo tiempo eliminar la necesidad de mixins de proveedores como los que se encuentran en la versión 3.

Mantenemos la lista de navegadores compatibles con Autoprefixer en un archivo separado dentro de nuestro repositorio de GitHub. Consulta [.browserslistrc](https://github.com/twbs/bootstrap/blob/v5.3.2/.browserslistrc) para obtener más detalles.

### RTLCSS {#rtlcss}

{{< content-ads/middle-banner-4 >}}

Bootstrap usa [RTLCSS](https://rtlcss.com) para procesar CSS compilado y convertirlos a RTL, básicamente reemplazando las propiedades que reconocen la dirección horizontal (por ejemplo `padding-left`) con su opuesto. Nos permite escribir nuestro CSS solo una vez y realizar ajustes menores usando las directivas de RTLCSS [control](https://rtlcss.com/learn/usage-guide/control-directives) y [value](https://rtlcss.com/learn/usage-guide/value-directives).

{{< bootstrap/content-suggestion >}}

### Documentación local {#local-documentation}

La ejecución de nuestra documentación localmente requiere el uso de Hugo, que se instala a través del paquete npm [hugo-bin](https://www.npmjs.com/package/hugo-bin). Hugo es un generador de sitios estáticos increíblemente rápido y bastante extensible que nos proporciona: inclusiones básicas, archivos basados en Markdown, plantillas y más. A continuación te indicamos cómo empezar:

{{< content-ads/middle-banner-5 >}}

1.  Ejecuta la [configuración de herramientas](#tooling-setup) anterior para instalar todas las dependencias.
2.  Desde el directorio raíz `/bootstrap` ejecuta `npm run docs-serve` en la línea de comando.
3.  Abre `http://localhost:9001/` en tu navegador y listo.

Aprende más sobre el uso de Hugo leyendo su [documentación](https://gohugo.io/documentation).

### Solución de problemas {#troubleshooting}

Si tienes problemas con la instalación de dependencias, desinstala todas las versiones de dependencias anteriores (globales y locales). Luego, vuelve a ejecutar `npm install`.
