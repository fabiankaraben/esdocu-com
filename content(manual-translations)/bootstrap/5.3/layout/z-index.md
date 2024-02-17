---
weight: 7
linkTitle: Z-index
title: El rol de los valores z-index en Bootstrap · Bootstrap en Español v5.3
description: Si bien no forman parte del sistema de cuadrícula de Bootstrap, los índices z juegan un papel importante en cómo nuestros componentes se superponen e interactúan entre sí.
noindex: true
---

# El rol de los valores z-index en Bootstrap

Si bien no forman parte del sistema de cuadrícula de Bootstrap, los índices z juegan un papel importante en cómo nuestros componentes se superponen e interactúan entre sí.

{{< content-ads/top-banner >}}

Varios componentes de Bootstrap utilizan `z-index`, la propiedad CSS que ayuda a controlar el diseño al proporcionar un tercer eje para organizar el contenido. Utilizamos una escala de índice z predeterminada en Bootstrap que ha sido diseñada para superponer correctamente la navegación, tooltips y ventanas emergentes, modales y más.

Estos valores más altos comienzan en un número arbitrario, lo suficientemente alto y específico como para evitar conflictos idealmente. Necesitamos un conjunto estándar de estos en todos nuestros componentes en capas (tooltips, ventanas emergentes, barras de navegación, menús desplegables, modales) para que podamos ser razonablemente consistentes en los comportamientos. No hay ninguna razón por la que no pudiéramos haber usado `100`\+ o `500`+.

No fomentamos la personalización de estos valores individuales; si cambias uno, es probable que debas cambiarlos todos.

{{< bootstrap/content-suggestion >}}

{{< content-ads/middle-banner-1 >}}

[scss/_variables.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss)

```scss {filename="scss/_variables.scss"}
$zindex-dropdown:                   1000;
$zindex-sticky:                     1020;
$zindex-fixed:                      1030;
$zindex-offcanvas-backdrop:         1040;
$zindex-offcanvas:                  1045;
$zindex-modal-backdrop:             1050;
$zindex-modal:                      1055;
$zindex-popover:                    1070;
$zindex-tooltip:                    1080;
$zindex-toast:                      1090;
```

Para manejar los bordes superpuestos dentro de los componentes (por ejemplo, botones y entradas en grupos de entrada), utilizamos valores bajos de `z-index` de un solo dígito de `1`, `2` y `3` para los estados predeterminado, hover y active. Al producirse hover/focus/active, colocamos un elemento en particular en primer plano con un valor de `z-index` más alto para mostrar su borde sobre los elementos hermanos.

{{< content-ads/bottom-banner >}}
