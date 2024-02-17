---
weight: 3
linkTitle: Contenidos
title: Sección de Contenidos de Bootstrap · Bootstrap en Español v5.3
description: Descubre lo que se incluye en Bootstrap, incluidas nuestras versiones de código fuente y compilado.
noindex: true
---

# Sección de Contenidos de Bootstrap

Descubre lo que se incluye en Bootstrap, incluidas nuestras versiones de código fuente y compilado.

{{< content-ads/top-banner >}}

## Bootstrap compilado {#compiled-bootstrap}

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

### Archivos CSS {#css-files}

Bootstrap incluye un puñado de opciones para incluir parte o la totalidad de nuestro CSS compilado.

| Archivos CSS                                                                                                                        | Layout                                               | Contenido                                    | Componentes | Utilidades                                            |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------- | ----------- | ----------------------------------------------------- |
| `bootstrap.css`<br/>`bootstrap.min.css`<br/>`bootstrap.rtl.css`<br/>`bootstrap.rtl.min.css`                                         | Incluido                                             | Incluido                                     | Incluido    | Incluido                                              |
| `bootstrap-grid.css`<br/>`bootstrap-grid.rtl.css`<br/>`bootstrap-grid.min.css`<br/>`bootstrap-grid.rtl.min.css`                     | [Solo sistema de grilla](/bootstrap/5.3/layout/grid) | -                                            | -           | [Solo utilidades flex](/bootstrap/5.3/utilities/flex) |
| `bootstrap-utilities.css`<br/>`bootstrap-utilities.rtl.css`<br/>`bootstrap-utilities.min.css`<br/>`bootstrap-utilities.rtl.min.css` | -                                                    | -                                            | -           | Incluido                                              |
| `bootstrap-reboot.css`<br/>`bootstrap-reboot.rtl.css`<br/>`bootstrap-reboot.min.css`<br/>`bootstrap-reboot.rtl.min.css`             | -                                                    | [Solo Reboot](/bootstrap/5.3/content/reboot) | -           | -                                                     |

### Archivos JS {#js-files}

{{< content-ads/middle-banner-2 >}}

De manera similar, tenemos opciones para incluir parte o la totalidad de nuestro JavaScript compilado.

| Archivos JS                                         | Popper   |
| --------------------------------------------------- | -------- |
| `bootstrap.bundle.js`<br/>`bootstrap.bundle.min.js` | Incluido |
| `bootstrap.js`<br/>`bootstrap.min.js`               | -        |

{{< bootstrap/content-suggestion >}}

## Código fuente de Bootstrap {#bootstrap-source-code}

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

{{< content-ads/bottom-banner >}}
