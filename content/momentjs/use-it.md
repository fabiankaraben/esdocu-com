---
linkTitle: Uso de Moment.js
weight: 1
title: Cómo utilizar Moment.js y sus opciones de integración · Moment.js en Español
description: Moment fue diseñado para funcionar tanto en el navegador como en Node.js. Aprende a instalar y utilizar Moment en distintas tecnologías como Node.js, Bower, Webpack, TypeScript y más.
---

# Cómo utilizar Moment.js

*Moment* fue diseñado para funcionar tanto en el navegador como en Node.js.

Todo el código debería funcionar en ambos entornos y todas las pruebas unitarias se ejecutan en ambos entornos.

![Moment.js](/assets/momentjs/use-it/momentjs-01.jpg)

Actualmente, se utilizan los siguientes navegadores para el sistema CI: Chrome en Windows XP, IE 8, 9 y 10 en Windows 7, IE 11 en Windows 10, Firefox más reciente en Linux y Safari más reciente en OSX 10.8 y 10.11.

Si deseas probar los códigos de muestra a continuación, simplemente abre la consola de tu navegador e ingréselo.

## Instalar Moment en Node.js {#node-js}

Puedes instalar Moment.js en tu proyecto Node.js ejecutando el siguiente comando:

```sh {filename="Terminal (Instalación con NPM)"}
npm install moment
```

Posteriormente en los archivos que necesites utilizar Moment.js puedes hacerlo con estas líneas de código JavaScript:

```javascript {filename="JavaScript"}
var moment = require('moment'); // require
moment().format(); 
```

O bien en la sintaxis de ES6:

```javascript {filename="JavaScript"}
import moment from 'moment';
moment().format();
```

**Nota:** En **2.4.0**, el objeto `Moment` exportado globalmente estaba **obsoleto**.
Se eliminará en la próxima versión principal.

Si también deseas incluir *Moment Timezone*, consulta la [documentación separada de Moment Timezone para Node.js](https://momentjs.com/timezone/docs/#/use-it/node-js) con ejemplos.

## Moment en el Navegador web {#browser}

Si tu preferencia es utilizar Moment.js directamente en el navegador web, puedes hacerlo añadiendo el paquete `moment.js` previamente descargado o bien utilizando uno de los CDNs disponibles:

```html {filename="HTML"}
<script src="moment.js"></script>
<script>
	moment().format();
</script>
```

*Moment.js* está disponible en [cdnjs.com](https://cdnjs.com/libraries/moment.js) y en [jsDelivr](https://www.jsdelivr.com/package/npm/moment).

## Instalar Moment con Bower {#bower}

Otra opción disponible es [Bower](https://bower.io). Puedes instalar Moment.js en tu proyecto utilizando Bower de la siguiente manera:

```sh {filename="Terminal"}
bower install --save moment
```

Los archivos notables son `moment.js`, `locale/*.js` y `min/moment-with-locales.js`.

## Cargar Moment con Require.js {#require-js}

Recomendamos encarecidamente leer [esto](https://github.com/requirejs/requirejs/issues/1554#issuecomment-226269905) si planeas usar *moment* con *Require.js*. Actualiza también a **2.14.0** o superior para obtener la mejor experiencia.

Para empezar, es posible que hayas adquirido *moment* a través de *bower* o *node_modules* o cualquier otra cosa que coloque *moment.js* junto con un directorio local en una carpeta base. Entonces deberías usar una herramienta como [adapt-pkg-main](https://github.com/jrburke/adapt-pkg-main), o manualmente, usando [packages config](http://requirejs.org/docs/api.html#packages).



```javascript {filename="JavaScript"}
requirejs.config({
  packages: [{
    name: 'moment',
    // Esta ubicación es relativa a baseUrl. Elije bower_components 
    // o node_modules, dependiendo de cómo fue instalado moment.
    location: '[bower_components|node_modules]/moment',
    main: 'moment'
  }]
});
```

Con la configuración anterior, puedes requerir el núcleo con `moment` y el locale `de` con `moment/locale/de`.



```javascript {filename="JavaScript"}
// Solo necesita el core o núcleo.
define(['moment'], function (moment) {
	console.log(moment().format('LLLL'));  // 'Friday, June 24, 2016 1:42 AM'
});

// Core con un solo locale.
define(['moment', 'moment/locale/de'], function (moment) {
	moment.locale('de');
	console.log(moment().format('LLLL')); // 'Freitag, 24. Juni 2016 01:42'
});

// Core con todos los locales.
define(['moment/min/moment-with-locales'], function (moment) {
	moment.locale('de');
	console.log(moment().format('LLLL')); // 'Freitag, 24. Juni 2016 01:42'
});

// Carga async de locale.
define(['require', 'moment'], function(require, moment) {
  // Dentro de algún módulo después de que se detecta el locale. Este es el 
  // caso en el que no se conoce el locale antes del tiempo de carga del módulo.
  require(['moment/locale/de'], function(localeModule) {
    // Aquí el locale está cargado, pero aún no está en uso.
    console.log(moment().format('LLLL'));  // 'Friday, June 24, 2016 1:42 AM'

    moment.locale('de');
    // Utiliza moment ahora que el locale se ha configurado correctamente.
    console.log(moment().format('LLLL')); // 'Freitag, 24. Juni 2016 01:42'
  })
});
```

Para casos de uso más complicados, lee la [excelente explicación de @jrburke](https://github.com/requirejs/requirejs/issues/1554#issuecomment-226269905).

Moment seguirá creando un `moment` global, que es útil para complementos y otros códigos de terceros. Si deseas evitar ese global, usa la opción `noGlobal` en la configuración del módulo.



```javascript {filename="JavaScript"}
require.config({
    config: {
        moment: {
            noGlobal: true
        }
    }
});
```

Si no especificas `noGlobal`, el `moment` exportado globalmente imprimirá una advertencia de obsolescencia. A partir de la próxima versión importante, tendrás que exportarlo tú mismo si deseas ese comportamiento.

Para la versión **2.5.x**, en caso de que utilices otros complementos que dependan de Moment pero que no sean compatibles con AMD, es posible que debas agregar [`wrapShim: true`](https://github.com/jrburke/r.js/blob/b8a6982d2923ae8389355edaa50d2b7f8065a01a/build/example.build.js#L68-L78) a tu configuración `r.js`.

__Nota:__ Para permitir que los complementos `moment.js` se carguen en entornos requirejs, moment se crea como un módulo con nombre. Debido a esto, moment __debe__ cargarse exactamente como `"moment"`, usando `paths` para determinar el directorio. Al solicitar un momento con una ruta como `"vendor\moment"`, se devolverá `undefined`.

__Nota:__ A partir de la versión **2.9.0**, moment se exporta como un módulo anónimo, por lo que si usas solo el núcleo (sin configuraciones regionales ni complementos), no necesitas configuración si lo colocas en una ubicación no estándar.

## Instalar Moment con NuGet {#nuget}

Si tu proyecto es en .NET puedes instalar Moment.js utilizando [NuGet](https://www.nuget.org) instalando particularmente el paquete [Moment.js](https://www.nuget.org/packages/Moment.js) de la siguiente manera:

```sh {filename="Terminal"}
Install-Package Moment.js
```

## Instalar Moment con Meteor {#meteor}

Para instalar Moment.js con [Meteor](https://www.meteor.com) utilizando el paquete disponible en [Atmosphere](https://atmospherejs.com), específicamente el paquete [momentjs:moment](https://atmospherejs.com/momentjs/moment). La instalación se realiza con el siguiente comando:

```sh {filename="Terminal"}
meteor add momentjs:moment
```

## Usar Moment con Browserify {#browserify}

Puedes también instalar Moment.js para utilizarlo con [Browserify](https://browserify.org/). El primer paso es la instalación:

```sh {filename="Terminal (Instalación con NPM)"}
npm install moment
```

Luego puedes utilizar Moment.js en los archivos que necesites:

```javascript {filename="JavaScript"}
var moment = require('moment');
moment().format();
```

**Nota:** Hay un error que impide que se cargue `moment.locale`.

```javascript {filename="JavaScript"}
var moment = require('moment');
moment.locale('cs');
console.log(moment.locale()); // en
```

Utiliza la siguiente solución

```javascript {filename="JavaScript"}
var moment = require('moment');
require('moment/locale/cs');
console.log(moment.locale()); // cs
```

Para incluir todas las configuraciones regionales

```javascript {filename="JavaScript"}
var moment = require('moment');
require("moment/min/locales.min");
moment.locale('cs');
console.log(moment.locale()); // cs
```

## Usar Moment con Webpack {#webpack}

Con [webpack](https://webpack.js.org/) también es posible utilizar Moment.js. Primero realizas la instalación con npm:

```sh {filename="Terminal (Instalación con NPM)"}
npm install moment
```

Luego lo utilizas en tu código de la siguiente manera:

```javascript {filename="JavaScript"}
var moment = require('moment');
moment().format();
```

**Nota:** De forma predeterminada, el paquete web incluye _todas_ las configuraciones regionales de Moment.js (en Moment.js 2.18.1, son 160 KB minificados). Para eliminar las configuraciones regionales innecesarias y agrupar solo las usadas, agrega [`moment-locales-webpack-plugin`](https://www.npmjs.com/package/moment-locales-webpack-plugin):



```javascript {filename="JavaScript"}
// webpack.config.js
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    plugins: [
        // Para eliminar todas los locales excepto "en"
        new MomentLocalesPlugin(),

        // O: eliminar todas los locales excepto “en”, “es-us” y “ru” 
        // (“en” está integrado en Moment y no se puede eliminar)
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'ru'],
        }),
    ],
};
```

Existen otros recursos para optimizar Moment.js con webpack, [por ejemplo este](https://github.com/jmblog/how-to-optimize-momentjs-with-webpack).

## Usar Moment en TypeScript {#typescript}

A partir de la versión **2.13.0**, Moment incluye un archivo de definición para TypeScript.

Instalar a través de NPM:

```sh {filename="Terminal (Instalación con NPM)"}
npm install moment
```

Importar y utilizar en tu archivo Typecript:



```typescript {filename="TypeScript"}
const moment = require('moment');

let now = moment().format('LLLL');
```

**Nota:** Si tienes problemas para importar moment:

Para _TypeScript 2.x_ intenta agregar `"moduleResolution": "node"` en `compilerOptions` en tu archivo `tsconfig.json`

Para _TypeScript 1.x_ intenta agregar `"allowSyntheticDefaultImports": true` en `compilerOptions` en tu archivo `tsconfig.json` y luego usa la sintaxis:



```typescript {filename="TypeScript"}
import moment from 'moment';
```

**Importar Locale**

Para utilizar `moment.locale`, primero debes importar el idioma al que se dirige.



```typescript {filename="TypeScript"}
import * as moment from 'moment';
import 'moment/locale/pt-br';

console.log(moment.locale()); // en
moment.locale('fr');
console.log(moment.locale()); // fr
moment.locale('pt-br');
console.log(moment.locale()); // pt-br
```

## Cargar Moment con System.js {#system-js}

Para cargar moment, colócalo en la ruta especificada por tu `System.config` en la configuración de `baseURL`.
Luego impórtalo a tu página.



```html {filename="HTML"}
<script src="system.js"></script>
<script>
  System.config({
    baseURL: '/app'
  });

  System.import('moment.js');
 </script>
```

Si necesitas que moment se cargue como global, puedes hacerlo con la configuración en `meta`:



```javascript {filename="JavaScript"}
System.config({
  meta: {
    'moment': { format: 'global' }
  }
});
```

Alternativamente, para proporcionar Moment como global solo para una dependencia específica, puedes hacer esto:



```javascript {filename="JavaScript"}
System.config({
  meta: {
    'path/to/global-file.js': {
      globals: {
        moment: 'moment'
      }
    }
  }
});
```

## Otras opciones de instalación {#other}

Para usarlo en **Java/Rhino**, consulta [estas instrucciones](https://gist.github.com/UnquietCode/5614860).

Para usarlo en **Demandware**, consulta [estas instrucciones](https://github.com/moment/moment/issues/1034).

## Solución de problemas {#troubleshooting}

Si tiene algún problema, el primer lugar que debes consultar son las [guías](https://momentjs.com/guides).

Si no encuentras lo que buscas allí, intenta hacer una pregunta en [Stack Overflow](https://stackoverflow.com/questions/tagged/momentjs) con la etiqueta `momentjs`.

Nota: Más de la mitad de los problemas observados en Stack Overflow se pueden responder en [esta publicación de blog](https://maggiepint.com/2016/05/14/moment-js-shows-the-wrong-date).

También puedes utilizar el [rastreador de issues de GitHub](https://github.com/moment/moment/issues) para buscar problemas relacionados o abrir un nuevo issue.

Además, Moment tiene un [Gitter](https://gitter.im/moment/moment) donde el equipo interno está disponible con frecuencia.

Para obtener ayuda general para la resolución de problemas, [Stack Overflow](https://stackoverflow.com/questions/tagged/momentjs) es el foro preferido.
Los mantenedores de Moment son muy activos en Stack Overflow, al igual que otros usuarios expertos. La respuesta más rápida estará ahí.
