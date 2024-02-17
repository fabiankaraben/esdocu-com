---
weight: 3
linkTitle: Opciones
title: Las Opciones de Bootstrap · Bootstrap en Español v5.3
description: Personaliza rápidamente Bootstrap con variables integradas para alternar fácilmente las preferencias globales de CSS para controlar el estilo y el comportamiento.
noindex: true
---

# Las Opciones de Bootstrap

Personaliza rápidamente Bootstrap con variables integradas para alternar fácilmente las preferencias globales de CSS para controlar el estilo y el comportamiento.

{{< content-ads/top-banner >}}

Personaliza Bootstrap con nuestro archivo de variables personalizadas incorporado y alterna fácilmente las preferencias globales de CSS con las nuevas variables `$enable-*` Sass. Sobrescribe el valor de una variable y vuelve a compilar con `npm run test` según sea necesario.

{{< bootstrap/content-suggestion >}}

Puedes encontrar y personalizar estas variables para opciones globales clave en el archivo `scss/_variables.scss` de Bootstrap.

| Variable                       | Valores                                        | Descripción                                                                                                                                                                                                                                 |
| ------------------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$spacer`                      | `1rem` (predeterminado), o cualquier valor > 0 | Especifica el valor de espaciado predeterminado para generar mediante programación nuestras [utilidades de espaciado](/bootstrap/5.3/utilities/spacing).                                                                                    |
| `$enable-dark-mode`            | `true` (predeterminado) o `false`              | Habilita el [soporte para el modo oscuro](/bootstrap/5.3/customize/color-modes/#dark-mode) integrado en todo el proyecto y sus componentes.                                                                                                 |
| `$enable-rounded`              | `true` (predeterminado) o `false`              | Permite estilos `border-radius` predefinidos en varios componentes.                                                                                                                                                                         |
| `$enable-shadows`              | `true` o `false` (predeterminado)              | Habilita estilos decorativos `box-shadow` predefinidos en varios componentes. No afecta los `box-shadow` utilizados para los estados de enfoque.                                                                                            |
| `$enable-gradients`            | `true` o `false` (predeterminado)              | Permite gradientes predefinidos a través de estilos `background-image` en varios componentes.                                                                                                                                               |
| `$enable-transitions`          | `true` (predeterminado) o `false`              | Permite `transition`s predefinidas en varios componentes.                                                                                                                                                                                   |
| `$enable-reduced-motion`       | `true` (predeterminado) o `false`              | Habilita la [`prefers-reduced-motion` media query](/bootstrap/5.3/getting-started/accessibility/#reduced-motion), que suprime ciertas animaciones/transiciones basadas en las preferencias del navegador/sistema operativo de los usuarios. |
| `$enable-grid-classes`         | `true` (predeterminado) o `false`              | Permite la generación de clases CSS para el sistema grid (por ejemplo, `.row`, `.col-md-1`, etc. ).                                                                                                                                         |
| `$enable-container-classes`    | `true` (predeterminado) o `false`              | Habilita la generación de clases CSS para contenedores de layout. (Nuevo en v5.2.0)                                                                                                                                                         |
| `$enable-caret`                | `true` (predeterminado) o `false`              | Habilita el caret de pseudoelemento en `.dropdown-toggle`.                                                                                                                                                                                  |
| `$enable-button-pointers`      | `true` (predeterminado) o `false`              | Agrega un cursor de “mano” a los elementos de botón no deshabilitados.                                                                                                                                                                      |
| `$enable-rfs`                  | `true` (predeterminado) o `false`              | Habilita globalmente [RFS](/bootstrap/5.3/getting-started/rfs).                                                                                                                                                                             |
| `$enable-validation-icons`     | `true` (predeterminado) o `false`              | Habilita íconos `background-image` dentro de entradas de texto y algunos formularios personalizados para estados de validación.                                                                                                             |
| `$enable-negative-margins`     | `true` o `false` (predeterminado)              | Permite la generación de [utilidades de margen negativo](/bootstrap/5.3/utilities/spacing/#negative-margin).                                                                                                                                |
| `$enable-deprecation-messages` | `true` (predeterminado) o `false`              | Establécelo en `false` para ocultar advertencias al usar cualquiera de los mixins y funciones obsoletos que se planea eliminar en `v6`.                                                                                                     |
| `$enable-important-utilities`  | `true` (predeterminado) o `false`              | Habilita el sufijo `!important` en clases de utilidad.                                                                                                                                                                                      |
| `$enable-smooth-scroll`        | `true` (predeterminado) o `false`              | Aplica `scroll-behavior: smooth` globalmente, excepto para los usuarios que solicitan movimiento reducido a través de [`prefers-reduced-motion` media query](/bootstrap/5.3/getting-started/accessibility/#reduced-motion)                  |

{{< content-ads/bottom-banner >}}
