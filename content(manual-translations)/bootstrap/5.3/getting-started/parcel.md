---
weight: 7
linkTitle: Bootstrap y Parcel
title: Instalación de Bootstrap usando Parcel · Bootstrap en Español v5.3
description: La guía oficial sobre cómo incluir y agrupar CSS y JavaScript de Bootstrap en tu proyecto usando Parcel.
---

# Instalación de Bootstrap usando Parcel

La guía oficial sobre cómo incluir y agrupar CSS y JavaScript de Bootstrap en tu proyecto usando Parcel.

{{< content-ads/top-banner >}}

![](/assets/bootstrap/5.3/assets/img/guides/bootstrap-parcel.png)

{{< callout type="info" emoji="" >}}
**¿Quieres ir hasta el final?** Descarga el código fuente y la demostración funcional de esta guía desde el repositorio [twbs/examples](https://github.com/twbs/examples/tree/main/parcel). También puedes [abrir el ejemplo en StackBlitz](https://stackblitz.com/github/twbs/examples/tree/main/parcel?file=index) pero no ejecutarlo porque Parcel actualmente no es compatible allí.
{{< /callout >}}

## Configuración {#setup}

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

## Estructura del proyecto. {#project-structure}

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

## Configurar Parcel {#configure-parcel}

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

## Importar Bootstrap {#import-bootstrap}

Importar Bootstrap a Parcel requiere dos importaciones, una a nuestro `styles.scss` y otra a nuestro `main.js`.

1.  **Importar CSS de Bootstrap.** Agrega lo siguiente a `src/scss/styles.scss` para importar todo el Sass fuente de Bootstrap.
    ```scss {filename="SCSS"}
    // Import all of Bootstrap's CSS
    @import "bootstrap/scss/bootstrap";
    ```
    
    _También puedes importar nuestras hojas de estilo individualmente si lo deseas. [Lee nuestra documentación de importación de Sass](/bootstrap/5.3/customize/sass/#importing) para obtener más detalles._
    
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
    
    _[Lee nuestra documentación de JavaScript](/bootstrap/5.3/getting-started/javascript) para obtener más información sobre cómo usar los complementos de Bootstrap._
    
3.  **¡Y listo! 🎉** Con el código fuente Sass y JS de Bootstrap completamente cargados, tu servidor de desarrollo local ahora debería verse así.
    
    ![Parcel dev server running with Bootstrap](/assets/bootstrap/5.3/assets/img/guides/parcel-dev-server-bootstrap.png)
    
{{< content-ads/middle-banner-4 >}}

Ahora puedes comenzar a agregar cualquier componente Bootstrap que quieras usar. Asegúrate de [consultar el proyecto de ejemplo de Parcel completo](https://github.com/twbs/examples/tree/main/parcel) para saber cómo incluir Sass personalizado adicional y optimizar tu compilación importando solo las partes de CSS y JS de Bootstrap que necesites.
    

* * *

_¿Ves algo incorrecto o desactualizado aquí? [abre un issue en GitHub](https://github.com/twbs/bootstrap/issues/new/choose). ¿Necesitas ayuda para solucionar problemas? [Buscar o iniciar una discusión](https://github.com/twbs/bootstrap/discussions) en GitHub._

{{< content-ads/bottom-banner >}}
