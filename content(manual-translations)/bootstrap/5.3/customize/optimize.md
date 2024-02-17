---
weight: 8
linkTitle: Optimizar
title: Formas de Optimizar la utilización de Bootstrap · Bootstrap en Español v5.3
description: Mantén tus proyectos ágiles, responsive y mantenibles para que puedas ofrecer la mejor experiencia y concentrarte en trabajos más importantes.
next: /bootstrap/5.3/layout/breakpoints
---

# Formas de Optimizar la utilización de Bootstrap

Mantén tus proyectos ágiles, responsive y mantenibles para que puedas ofrecer la mejor experiencia y concentrarte en trabajos más importantes.

{{< content-ads/top-banner >}}

Importaciones Sass optimizadas {#lean-sass-imports}
----------------------------------------------------

Cuando utilices Sass en tu canalización de assets, asegúrate de optimizar Bootstrap `@import`ando solo los componentes que necesitas. Es probable que tus mayores optimizaciones provengan de la sección `Layout & Components` de nuestro `bootstrap.scss`.

[scss/bootstrap.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/bootstrap.scss)

```scss {filename="scss/bootstrap.scss"}
// Configuration
@import "functions";
@import "variables";
@import "variables-dark";
@import "maps";
@import "mixins";
@import "utilities";

// Layout & components
@import "root";
@import "reboot";
@import "type";
@import "images";
@import "containers";
@import "grid";
@import "tables";
@import "forms";
@import "buttons";
@import "transitions";
@import "dropdown";
@import "button-group";
@import "nav";
@import "navbar";
@import "card";
@import "accordion";
@import "breadcrumb";
@import "pagination";
@import "badge";
@import "alert";
@import "progress";
@import "list-group";
@import "close";
@import "toasts";
@import "modal";
@import "tooltip";
@import "popover";
@import "carousel";
@import "spinners";
@import "offcanvas";
@import "placeholders";

// Helpers
@import "helpers";

// Utilities
@import "utilities/api";
```

Si no estás usando un componente, coméntalo o elimínalo por completo. Por ejemplo, si no estás usando el carrusel, elimina esa importación para ahorrar algo de tamaño de archivo en tu CSS compilado. Ten en cuenta que existen algunas dependencias entre las importaciones de Sass que pueden dificultar la omisión de un archivo.

JavaScript optimizado {#lean-javascript}
--------------------------------------------------------------------------

{{< content-ads/middle-banner-1 >}}

El JavaScript de Bootstrap incluye todos los componentes de nuestros archivos dist primarios (`bootstrap.js` y `bootstrap.min.js`), e incluso nuestra dependencia principal (Popper) con nuestros archivos de paquete (`bootstrap.bundle.js` y `bootstrap.bundle.min.js`). Mientras personalizas a través de Sass, asegúrate de eliminar el JavaScript relacionado.

Por ejemplo, suponiendo que estás usando tu propio paquete de JavaScript como Webpack, Parcel o Vite, solo importarás el JavaScript que planeas usar. En el siguiente ejemplo, mostramos cómo incluir simplemente nuestro JavaScript modal:

```javascript {filename="JavaScript"}
// Import just what we need

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';
```

De esta manera, no incluirás ningún JavaScript que no pretendas utilizar para componentes como botones, carruseles e tooltips. Si estás importando menús desplegables, tooltips o ventanas emergentes, asegúrate de incluir la dependencia de Popper en tu archivo `package.json`.

{{< callout type="info" emoji="" >}}
**¡Atención!** Los archivos en `bootstrap/js/dist` usan la **exportación predeterminada**. Para usarlos, haz lo siguiente:

```javascript
import Modal from 'bootstrap/js/dist/modal'
const modal = new Modal(document.getElementById('myModal'))
```
{{< /callout >}}

Autoprefixer .browserslistrc {#autoprefixer-browserslistrc}
------------------------------------------------------------

{{< content-ads/middle-banner-2 >}}

Bootstrap depende de Autoprefixer para agregar automáticamente prefijos del navegador a ciertas propiedades CSS. Los prefijos los dicta nuestro archivo `.browserslistrc`, que se encuentra en la raíz del repositorio de Bootstrap. Al personalizar esta lista de navegadores y volver a compilar Sass, se eliminará automáticamente parte del CSS del CSS compilado, si hay prefijos de proveedor exclusivos para ese navegador o versión.

CSS no utilizado {#unused-css}
-------------------------------

_Se necesita ayuda con esta sección, considera abrir un PR. ¡Gracias!_

Si bien no tenemos un ejemplo prediseñado para usar [PurgeCSS](https://github.com/FullHuman/purgecss) con Bootstrap, hay algunos artículos y tutoriales útiles que la comunidad ha escrito. Aquí tienes algunas opciones:

* [https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772](https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772)
* [https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/](https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks)

Por último, este [artículo de CSS Tricks sobre CSS no utilizado](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site) muestra cómo utilizar PurgeCSS y otras herramientas similares.

{{< content-ads/middle-banner-3 >}}

Minify y gzip {#minify-and-gzip}
---------------------------------

Siempre que sea posible, asegúrate de comprimir todo el código que entregas a tus visitantes. Si estás utilizando archivos dist Bootstrap, intenta utilizar las versiones minimizadas (indicadas por las extensiones `.min.css` y `.min.js`). Si estás compilando Bootstrap desde el código fuente con tu propio sistema de compilación, asegúrate de implementar tus propios minificadores para HTML, CSS y JS.

{{< bootstrap/content-suggestion >}}

Archivos sin bloqueo {#non-blocking-files}
-------------------------------------------

Si bien minimizar y usar compresión puede parecer suficiente, hacer que tus archivos no bloqueen también es un gran paso para que tu sitio esté bien optimizado y sea lo suficientemente rápido.

Si estás utilizando un complemento [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) en Google Chrome, es posible que hayas tropezado con FCP. La métrica [First Contentful Paint](https://web.dev/fcp) mide el tiempo desde que la página comienza a cargarse hasta que cualquier parte del contenido de la página se muestra en la pantalla.

{{< content-ads/middle-banner-4 >}}

Puedes mejorar FCP posponiendo JavaScript o CSS no críticos. ¿Qué significa eso? Simplemente, JavaScript u hojas de estilo que no necesitan estar presentes en la primera pintura de tu página deben marcarse con los atributos `async` o `defer`.

Esto asegura que los recursos menos importantes se carguen más tarde y no bloqueen la primera pintura. Por otro lado, los recursos críticos se pueden incluir como scripts o estilos en línea.

Si quieres aprender más sobre esto, ya hay muchos artículos excelentes al respecto:

* [https://web.dev/render-blocking-resources/](https://web.dev/render-blocking-resources)
* [https://web.dev/defer-non-critical-css/](https://web.dev/defer-non-critical-css)

Usa siempre HTTPS {#always-use-https}
--------------------------------------

Tu sitio web solo debe estar disponible a través de conexiones HTTPS en producción. HTTPS mejora la seguridad, la privacidad y la disponibilidad de todos los sitios, y [no existe el tráfico web no confidencial](https://https.cio.gov/everything). Los pasos para configurar tu sitio web para que funcione exclusivamente a través de HTTPS varían ampliamente dependiendo de su arquitectura y proveedor de alojamiento web y, por lo tanto, están fuera del alcance de esta documentación.

Los sitios servidos a través de HTTPS también deben acceder a todas las hojas de estilo, scripts y otros activos a través de conexiones HTTPS. De lo contrario, enviarás a los usuarios [contenido activo mixto](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content), lo que generará vulnerabilidades potenciales en las que un sitio puede verse comprometido al alterar una dependencia. Esto puede provocar problemas de seguridad y mostrar advertencias en el navegador a los usuarios. Ya sea que obtengas Bootstrap desde una CDN o lo proporciones tú mismo, asegúrate de acceder solo a través de conexiones HTTPS.

{{< content-ads/bottom-banner >}}
