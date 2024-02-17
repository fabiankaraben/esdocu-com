---
weight: 8
linkTitle: Bootstrap y Vite
title: Instalación de Bootstrap usando Vite · Bootstrap en Español v5.3
description: La guía oficial sobre cómo incluir y agrupar CSS y JavaScript de Bootstrap en tu proyecto usando Vite.
---

# Instalación de Bootstrap usando Vite

La guía oficial sobre cómo incluir y agrupar CSS y JavaScript de Bootstrap en tu proyecto usando Vite.

{{< content-ads/top-banner >}}

![Bootstrap y Vite](/assets/bootstrap/5.3/assets/img/guides/bootstrap-vite.png)

{{< callout type="info" emoji="" >}}
**¿Quieres ir hasta el final?** Descarga el código fuente y la demostración funcional de esta guía desde el repositorio [twbs/examples](https://github.com/twbs/examples/tree/main/vite). También puedes [abrir el ejemplo en StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/vite?file=index) para editarlo en vivo.
{{< /callout >}}

## Configuración {#setup}

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

## Estructura del proyecto. {#project-structure}

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

## Configurar Vite {#configure-vite}

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

## Importar Bootstrap {#import-bootstrap}

1.  **Importar CSS de Bootstrap.** Agrega lo siguiente a `src/scss/styles.scss` para importar todo el Sass fuente de Bootstrap.
    ```scss {filename="SCSS"}
    // Import all of Bootstrap's CSS
    @import "bootstrap/scss/bootstrap";
    ```
    
    _También puedes importar nuestras hojas de estilo individualmente si lo deseas. [Lee nuestra documentación de importación de Sass](/bootstrap/5.3/customize/sass/#importing) para obtener más detalles._
    
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
    
    _[Lee nuestra documentación de JavaScript](/bootstrap/5.3/getting-started/javascript) para obtener más información sobre cómo usar los complementos de Bootstrap._
    
3.  **¡Y listo! 🎉** Con el código fuente Sass y JS de Bootstrap completamente cargados, tu servidor de desarrollo local ahora debería verse así.
    
    ![Vite dev server running with Bootstrap](/assets/bootstrap/5.3/assets/img/guides/vite-dev-server-bootstrap.png)
    
    Ahora puedes comenzar a agregar cualquier componente Bootstrap que quieras usar. Asegúrate de [consultar el proyecto de ejemplo completo de Vite](https://github.com/twbs/examples/tree/main/vite) para saber cómo incluir Sass personalizado adicional y optimizar tu compilación importando solo las partes de CSS y JS de Bootstrap que necesites.
    

* * *

_¿Ves algo incorrecto o desactualizado aquí? [abre un issue en GitHub](https://github.com/twbs/bootstrap/issues/new/choose). ¿Necesitas ayuda para solucionar problemas? [Buscar o iniciar una discusión](https://github.com/twbs/bootstrap/discussions) en GitHub._

{{< content-ads/bottom-banner >}}
