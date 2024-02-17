---
weight: 2
linkTitle: Descargar
title: Diferentes formas de descargar Bootstrap · Bootstrap en Español v5.3
description: Descarga Bootstrap para obtener el CSS y JavaScript compilados, el código fuente, o inclúyelo con tus administradores de paquetes favoritos como npm, RubyGems y más.
---

# Diferentes formas de descargar Bootstrap

Descarga Bootstrap para obtener el CSS y JavaScript compilados, el código fuente, o inclúyelo con tus administradores de paquetes favoritos como npm, RubyGems y más.

{{< content-ads/top-banner >}}

## CSS y JS compilados. {#compiled-css-and-js}

Descarga el código compilado listo para usar de **Bootstrap v5.3.2** para incluirlo fácilmente en tu proyecto, que incluye:

- Paquetes CSS compilados y minimizados (ver [Comparación de archivos CSS](/bootstrap/5.3/getting-started/contents/#css-files))
- Plugins de JavaScript compilados y minimizados (ver [Comparación de archivos JS](/bootstrap/5.3/getting-started/contents/#js-files))

Esto no incluye documentación, archivos fuente ni ninguna dependencia opcional de JavaScript como Popper.

[Descargar](https://github.com/twbs/bootstrap/releases/download/v5.3.2/bootstrap-5.3.2-dist.zip)

## Archivos fuente {#source-files}

Compila Bootstrap con tu propia canalización de assets descargando nuestros archivos fuente Sass, JavaScript y documentación. Esta opción requiere algunas herramientas adicionales:

- [Compilador Sass](/bootstrap/5.3/getting-started/contribute/#sass) para compilar archivos fuente Sass en archivos CSS
- [Autoprefixer](https://github.com/postcss/autoprefixer) para prefijos de proveedores de CSS

Si necesitas nuestro conjunto completo de [herramientas de compilación](/bootstrap/5.3/getting-started/contribute/#tooling-setup), son incluidas para desarrollar Bootstrap y su documentación, pero probablemente no sean adecuados para tus propios fines.

[Descargar fuente](https://github.com/twbs/bootstrap/archive/v5.3.2.zip)

{{< content-ads/middle-banner-1 >}}

## Ejemplos {#examples}

Si deseas descargar y examinar nuestros [ejemplos](https://getbootstrap.com/docs/5.3/examples), puedes tomar los ejemplos ya creados:

[Descargar ejemplos](https://github.com/twbs/bootstrap/releases/download/v5.3.2/bootstrap-5.3.2-examples.zip)

## CDN vía jsDelivr {#cdn-via-jsdelivr}

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

### CDN alternativas {#alternative-cdns}

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

## Administradores de paquetes {#package-managers}

Incorpora los archivos fuente de Bootstrap a casi cualquier proyecto con algunos de los administradores de paquetes más populares. No importa el administrador de paquetes, Bootstrap **requerirá un [compilador Sass](/bootstrap/5.3/getting-started/contribute/#sass) y un [Autoprefixer](https://github.com/postcss/autoprefixer)** para obtener una configuración que coincida con nuestras versiones compiladas oficiales.

### npm {#npm}

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

### yarn {#yarn}

Instala Bootstrap en tus aplicaciones con tecnología Node.js con el [paquete yarn](https://yarnpkg.com/en/package/bootstrap):

```shell {filename="Terminal"}
yarn add bootstrap@5.3.2
```

### RubyGems {#rubygems}

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

### Composer {#composer}

También puedes instalar y administrar Sass y JavaScript de Bootstrap usando [Composer](https://getcomposer.org):

```shell {filename="Terminal"}
composer require twbs/bootstrap:5.3.2
```

### NuGet {#nuget}

Si desarrollas en .NET Framework, también puedes instalar y administrar el [CSS](https://www.nuget.org/packages/bootstrap) o [Sass](https://www.nuget.org/packages/bootstrap.sass) y JavaScript de Bootstrap usando [NuGet](https://www.nuget.org). Los proyectos más nuevos deben usar [libman](https://docs.microsoft.com/en-us/aspnet/core/client-side/libman) u otro método, ya que NuGet está diseñado para código compilado, no para assets de frontend.

```powershell {filename="PowerShell"}
Install-Package bootstrap
```

```powershell {filename="PowerShell"}
Install-Package bootstrap.sass
```

{{< content-ads/bottom-banner >}}
