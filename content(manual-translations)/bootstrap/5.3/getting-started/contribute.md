---
weight: 12
linkTitle: Contribuir
title: Cómo contribuir en el proyecto Bootstrap · Bootstrap en Español v5.3
description: Ayuda a desarrollar Bootstrap con nuestra documentación, scripts y tests.
noindex: true
next: /bootstrap/5.3/customize/overview
---

# Cómo contribuir en el proyecto Bootstrap

Ayuda a desarrollar Bootstrap con nuestra documentación, scripts y tests.

{{< content-ads/top-banner >}}

## Configuración de herramientas {#tooling-setup}

Bootstrap usa [scripts npm](https://docs.npmjs.com/misc/scripts) para crear la documentación y compilar los archivos fuente. Nuestro [package.json](https://github.com/twbs/bootstrap/blob/v5.3.2/package.json) alberga estos scripts para compilar código, ejecutar pruebas y más. Estos no están pensados para su uso fuera de nuestro repositorio y documentación.

Para usar nuestro sistema de compilación y ejecutar nuestra documentación localmente, necesitarás una copia de los archivos fuente de Bootstrap y Node. Sigue estos pasos y deberías estar listo para rockear:

1.  [Descarga e instala Node.js](https://nodejs.org/en/download), que usamos para administrar nuestras dependencias.
2.  Descarga las [fuentes de Bootstrap](https://github.com/twbs/bootstrap/archive/v5.3.2.zip) o bifurca y clona el [repositorio de Bootstrap](https://github.com/twbs/bootstrap).
3.  Navega al directorio raíz `/bootstrap` y ejecuta `npm install` para instalar nuestras dependencias locales enumeradas en [package.json](https://github.com/twbs/bootstrap/blob/v5.3.2/package.json).

{{< content-ads/middle-banner-1 >}}

Cuando esté completo, podrás ejecutar los distintos comandos proporcionados desde la línea de comandos.

## Usar scripts npm {#using-npm-scripts}

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

## Sass {#sass}

Bootstrap usa [Dart Sass](https://sass-lang.com/dart-sass) para compilar nuestros archivos fuente Sass en archivos CSS (incluido en nuestro proceso de compilación), y te recomendamos que hagas lo mismo si estás compilando Sass utilizando tus propios assets. Anteriormente usamos Node Sass para Bootstrap v4, pero LibSass y los paquetes creados sobre él, incluido Node Sass, ahora están [obsoletos.](https://sass-lang.com/blog/libsass-is-deprecated).

Dart Sass utiliza una precisión de redondeo de 10 y por razones de eficiencia no permite ajustar este valor. No reducimos esta precisión durante el procesamiento posterior de nuestro CSS generado, como durante la minificación, pero si decides hacerlo, te recomendamos mantener una precisión de al menos 6 para evitar problemas con el redondeo del navegador.

{{< content-ads/middle-banner-3 >}}

## Autoprefixer {#autoprefixer}

Bootstrap usa [Autoprefixer](https://github.com/postcss/autoprefixer) (incluido en nuestro proceso de compilación) para agregar automáticamente prefijos de proveedores a algunas propiedades CSS en el momento de la compilación. Hacerlo nos ahorra tiempo y código al permitirnos escribir partes clave de nuestro CSS una sola vez y al mismo tiempo eliminar la necesidad de mixins de proveedores como los que se encuentran en la versión 3.

Mantenemos la lista de navegadores compatibles con Autoprefixer en un archivo separado dentro de nuestro repositorio de GitHub. Consulta [.browserslistrc](https://github.com/twbs/bootstrap/blob/v5.3.2/.browserslistrc) para obtener más detalles.

## RTLCSS {#rtlcss}

{{< content-ads/middle-banner-4 >}}

Bootstrap usa [RTLCSS](https://rtlcss.com) para procesar CSS compilado y convertirlos a RTL, básicamente reemplazando las propiedades que reconocen la dirección horizontal (por ejemplo `padding-left`) con su opuesto. Nos permite escribir nuestro CSS solo una vez y realizar ajustes menores usando las directivas de RTLCSS [control](https://rtlcss.com/learn/usage-guide/control-directives) y [value](https://rtlcss.com/learn/usage-guide/value-directives).

{{< bootstrap/content-suggestion >}}

## Documentación local {#local-documentation}

La ejecución de nuestra documentación localmente requiere el uso de Hugo, que se instala a través del paquete npm [hugo-bin](https://www.npmjs.com/package/hugo-bin). Hugo es un generador de sitios estáticos increíblemente rápido y bastante extensible que nos proporciona: inclusiones básicas, archivos basados en Markdown, plantillas y más. A continuación te indicamos cómo empezar:

{{< content-ads/middle-banner-5 >}}

1.  Ejecuta la [configuración de herramientas](#tooling-setup) anterior para instalar todas las dependencias.
2.  Desde el directorio raíz `/bootstrap` ejecuta `npm run docs-serve` en la línea de comando.
3.  Abre `http://localhost:9001/` en tu navegador y listo.

Aprende más sobre el uso de Hugo leyendo su [documentación](https://gohugo.io/documentation).

## Solución de problemas {#troubleshooting}

Si tienes problemas con la instalación de dependencias, desinstala todas las versiones de dependencias anteriores (globales y locales). Luego, vuelve a ejecutar `npm install`.

{{< content-ads/bottom-banner >}}
