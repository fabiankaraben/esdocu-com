---
weight: 1
linkTitle: Acercarse
title: Acercarse y participar en el proyecto Bootstrap · Bootstrap en Español v5.3
description: Aprende sobre los principios rectores, las estrategias y las técnicas utilizadas para crear y mantener Bootstrap para que puedas personalizarlo y ampliarlo tú mismo más fácilmente.
prev: /bootstrap/5.3/utilities/z-index
noindex: true
---

# Acercarse y participar en el proyecto Bootstrap

Aprende sobre los principios rectores, las estrategias y las técnicas utilizadas para crear y mantener Bootstrap para que puedas personalizarlo y ampliarlo tú mismo más fácilmente.

{{< content-ads/top-banner >}}

Si bien las páginas de introducción brindan un recorrido introductorio por el proyecto y lo que ofrece, este documento se centra en _por qué_ hacemos las cosas que hacemos en Bootstrap. Explica nuestra filosofía de construir en la web para que otros puedan aprender de nosotros, contribuir con nosotros y ayudarnos a mejorar.

¿Ves algo que no suena bien o quizás podría hacerse mejor? [Abra un issue](https://github.com/twbs/bootstrap/issues/new/choose); nos encantaría discutirlo.

Resumen {#summary}
-------------------

Profundizaremos en cada uno de estos más adelante, pero en un nivel alto, esto es lo que guía nuestro enfoque.

* Los componentes deben ser responsive y estar orientados a dispositivos móviles
* Los componentes deben construirse con una clase base y extenderse mediante clases modificadoras
* Los estados de los componentes deben obedecer a una escala de z-index común
* Siempre que sea posible, prefiere una implementación HTML y CSS a JavaScript
* Siempre que sea posible, usa utilidades en lugar de estilos personalizados
* Siempre que sea posible, evita imponer requisitos estrictos de HTML (selectores secundarios)

Responsive {#responsive}
-------------------------

Los estilos responsive de Bootstrap están diseñados para ser responsive, un enfoque que a menudo se conoce como _mobile-first_. Usamos este término en nuestra documentación y en gran medida estamos de acuerdo con él, pero a veces puede ser demasiado amplio. Si bien no todos los componentes _deben_ ser completamente responsive en Bootstrap, este enfoque responsive consiste en reducir las sobrescrituras de CSS al obligarlo a agregar estilos a medida que el viewport se hace más grande.

{{< content-ads/middle-banner-1 >}}

En Bootstrap, verás esto más claramente en nuestras media queries. En la mayoría de los casos, utilizamos consultas `min-width` que comienzan a aplicarse en un punto de interrupción específico y continúan hasta los puntos de interrupción más altos. Por ejemplo, un `.d-none` se aplica desde `min-width: 0` hasta el infinito. Por otro lado, se aplica un `.d-md-none` desde el punto de interrupción medio en adelante.

A veces usamos `max-width` cuando la complejidad inherente de un componente lo requiere. En ocasiones, estas sobrescrituras son funcional y mentalmente más claras de implementar y respaldar que reescribir la funcionalidad principal de nuestros componentes. Nos esforzamos por limitar este enfoque, pero lo usaremos de vez en cuando.

Clases {#classes}
------------------

Aparte de nuestro Reboot, una hoja de estilo de normalización entre navegadores, todos nuestros estilos apuntan a usar clases como selectores. Esto significa mantenerse alejado de selectores de tipo (p. ej., `input[type="text"]`) y clases principales extrañas (p. ej., `.parent .child`) que hacen que los estilos sean demasiado específicos para sobrescribirse fácilmente.

Como tal, los componentes deben construirse con una clase base que albergue pares propiedad-valor comunes que no deben sobrescribirse. Por ejemplo, `.btn` y `.btn-primary`. Usamos `.btn` para todos los estilos comunes como `display`, `padding` y `border-width`. Luego usamos modificadores como `.btn-primary` para agregar el color, color de fondo, color de borde, etc.

Las clases modificadoras solo deben usarse cuando hay múltiples propiedades o valores para cambiar en múltiples variantes. Los modificadores no siempre son necesarios, así que asegúrate de guardar líneas de código y evitar sobrescrituras innecesarias al crearlas. Buenos ejemplos de modificadores son nuestras clases de color de tema y variantes de tamaño.

Escalas z-index {#z-index-scales}
----------------------------------

{{< content-ads/middle-banner-2 >}}

Hay dos escalas `z-index` en Bootstrap: elementos dentro de un componente y componentes superpuestos.

### Elementos de componentes {#component-elements}

* Algunos componentes en Bootstrap están construidos con elementos superpuestos para evitar bordes dobles sin modificar la propiedad `border`. Por ejemplo, grupos de botones, grupos de entrada y paginación.
* Estos componentes comparten una escala de `z-index` estándar de `0` a `3`.
* `0` es predeterminado (inicial), `1` es `:hover`, `2` es `:active`/`.active` y `3` es `:focus`.
* Este enfoque coincide con nuestras expectativas de máxima prioridad para el usuario. Si un elemento está enfocado, está a la vista y bajo la atención del usuario. Los elementos activos ocupan el segundo lugar en importancia porque indican el estado. Pasar el cursor (hover) es el tercero más alto porque indica la intención del usuario, pero se puede pasar el cursor sobre casi _cualquier cosa_.

### Componentes de superposición {#overlay-components}

Bootstrap incluye varios componentes que funcionan como una superposición de algún tipo. Esto incluye, en orden de `z-index` más alto, menús desplegables, barras de navegación fijas y pegajosas, modales, tooltips y ventanas emergentes. Estos componentes tienen su propia escala `z-index` que comienza en `1000`. Este número inicial se eligió arbitrariamente y sirve como un pequeño amortiguador entre nuestros estilos y los estilos personalizados de tu proyecto.

Cada componente superpuesto aumenta ligeramente su valor `z-index` de tal manera que los principios comunes de la interfaz de usuario permiten que los elementos enfocados en el usuario o suspendidos permanezcan a la vista en todo momento. Por ejemplo, un modal bloquea el documento (por ejemplo, no puede realizar ninguna otra acción excepto la acción del modal), por lo que lo colocamos encima de nuestras barras de navegación.

Obtén más información sobre esto en nuestra [`z-index` página de diseño](/bootstrap/5.3/layout/z-index).

{{< content-ads/middle-banner-3 >}}

HTML y CSS sobre JS {#html-and-css-over-js}
--------------------------------------------

Siempre que sea posible, preferimos escribir HTML y CSS en lugar de JavaScript. En general, HTML y CSS son más prolíficos y accesibles para más personas de todos los niveles de experiencia. HTML y CSS también son más rápidos en su navegador que JavaScript, y su navegador generalmente le proporciona una gran cantidad de funciones.

Este principio es nuestra API JavaScript de primera clase que utiliza atributos `data` . No necesita escribir casi ningún JavaScript para utilizar nuestros complementos de JavaScript; en su lugar, escriba HTML. Lee más sobre esto en [nuestra página de descripción general de JavaScript](/bootstrap/5.3/getting-started/javascript/#data-attributes).

Por último, nuestros estilos se basan en los comportamientos fundamentales de los elementos web comunes. Siempre que sea posible, preferimos utilizar lo que proporciona el navegador. Por ejemplo, puede colocar una clase `.btn` en casi cualquier elemento, pero la mayoría de los elementos no proporcionan ningún valor semántico ni funcionalidad del navegador. Entonces, en su lugar, usamos `<button>`s y `<a>`s.

Lo mismo ocurre con los componentes más complejos. Si bien _podríamos_ escribir nuestro propio complemento de validación de formularios para agregar clases a un elemento principal en función del estado de una entrada, permitiéndonos así darle estilo al texto, digamos rojo, preferimos usar los pseudoelementos `:valid`/`:invalid` que nos proporciona cada navegador.

Utilidades {#utilities}
------------------------

Las clases de utilidad (anteriormente ayudantes en Bootstrap 3) son un poderoso aliado para combatir la sobrecarga de CSS y el bajo rendimiento de la página. Una clase de utilidad suele ser un par propiedad-valor único e inmutable expresado como una clase (por ejemplo, `.d-block` representa `display: block;`). Su principal atractivo es la velocidad de uso al escribir HTML y limitar la cantidad de CSS personalizado que tienes que escribir.

{{< content-ads/middle-banner-4 >}}

Específicamente con respecto a CSS personalizado, las utilidades pueden ayudar a combatir el aumento del tamaño de los archivos al reducir los pares propiedad-valor que se repiten con más frecuencia en clases únicas. Esto puede tener un efecto dramático a escala en sus proyectos.

{{< bootstrap/content-suggestion >}}

HTML flexible {#flexible-html}
-------------------------------

Aunque no siempre es posible, nos esforzamos por evitar ser demasiado dogmáticos en nuestros requisitos HTML para componentes. Por lo tanto, nos centramos en clases individuales en nuestros selectores CSS y tratamos de evitar selectores secundarios inmediatos (`>`). Esto le brinda más flexibilidad en su implementación y ayuda a mantener nuestro CSS más simple y menos específico.

Convenciones de código {#code-conventions}
-------------------------------------------

[Guía de código](https://codeguide.co) (del cocreador de Bootstrap, @mdo) documenta cómo escribimos nuestro HTML y CSS en Bootstrap. Especifica pautas para el formato general, valores predeterminados de sentido común, orden de propiedades y atributos, y más.

Usamos [Stylelint](https://stylelint.io) para hacer cumplir estos estándares y más en nuestro Sass/CSS. [Nuestra configuración personalizada de Stylelint](https://github.com/twbs/stylelint-config-twbs-bootstrap) es de código abierto y está disponible para que otros la usen y amplíen.

Usamos [vnu-jar](https://www.npmjs.com/package/vnu-jar) para aplicar HTML estándar y semántico, así como detectar errores comunes.

{{< content-ads/bottom-banner >}}
