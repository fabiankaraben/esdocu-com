---
weight: 6
linkTitle: Bootstrap y Webpack
title: Instalación de Bootstrap usando Webpack · Bootstrap en Español v5.3
description: La guía oficial sobre cómo incluir y agrupar CSS y JavaScript de Bootstrap en tu proyecto usando Webpack.
---

# Instalación de Bootstrap usando Webpack

La guía oficial sobre cómo incluir y agrupar CSS y JavaScript de Bootstrap en tu proyecto usando Webpack.

{{< content-ads/top-banner >}}

![Bootstrap y Webpack](/assets/bootstrap/5.3/assets/img/guides/bootstrap-webpack.png)

{{< callout type="info" emoji="" >}}
**¿Quieres ir hasta el final?** Descarga el código fuente y la demostración funcional de esta guía desde el repositorio [twbs/examples](https://github.com/twbs/examples/tree/main/webpack). También puedes [abrir el ejemplo en StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/webpack?file=index) para editarlo en vivo.
{{< /callout >}}

## Configuración {#setup}

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

## Estructura del proyecto. {#project-structure}

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

## Configurar Webpack {#configure-webpack}

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

## Importar Bootstrap {#import-bootstrap}

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
    _También puedes importar nuestras hojas de estilo individualmente si lo deseas. [Lee nuestra documentación de importación de Sass](/bootstrap/5.3/customize/sass/#importing) para obtener más detalles._    
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
    _[Lee nuestra documentación de JavaScript](/bootstrap/5.3/getting-started/javascript) para obtener más información sobre cómo usar los complementos de Bootstrap._
4.  **¡Y listo! 🎉** Con el código fuente Sass y JS de Bootstrap completamente cargados, tu servidor de desarrollo local ahora debería verse así.

    ![Webpack dev server running with Bootstrap](/assets/bootstrap/5.3/assets/img/guides/webpack-dev-server-bootstrap.png)
    
    Ahora puedes comenzar a agregar cualquier componente Bootstrap que quieras usar. Asegúrate de [consultar el proyecto de ejemplo de Webpack completo](https://github.com/twbs/examples/tree/main/webpack) para saber cómo incluir Sass personalizado adicional y optimizar tu compilación importando solo las partes de CSS y JS de Bootstrap que necesites.
    

## Optimizaciones de producción {#production-optimizations}

Dependiendo de tu configuración, es posible que desees implementar algunas optimizaciones adicionales de seguridad y velocidad útiles para ejecutar el proyecto en producción. Ten en cuenta que estas optimizaciones no se aplican en [el proyecto de ejemplo de Webpack](https://github.com/twbs/examples/tree/main/webpack) y su implementación depende de ti.

{{< content-ads/middle-banner-3 >}}

### Extrayendo CSS {#extracting-css}

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

### Extraer archivos SVG {#extracting-svg-files}

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

{{< content-ads/bottom-banner >}}
