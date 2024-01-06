---
linkTitle: Esdado del proyecto
weight: 12
title: Estado actual del proyecto Moment.js · Moment.js en Español
description: Estado actual del proyecto Moment.js, issues, futuras features y propuestas en análisis.
---

# Estado del proyecto Moment.js

**Moment.js** se ha utilizado con éxito en millones de proyectos y estamos felices de haber contribuido a mejorar la fecha y la hora en la web.

{{< content-ads/top-banner >}}

¡A partir de septiembre de 2020, Moment obtiene más de **12 millones de descargas** por semana! Sin embargo, Moment se creó para la era anterior del ecosistema JavaScript.
La web moderna se ve muy diferente hoy en día. Moment ha evolucionado un poco a lo largo de los años, pero tiene esencialmente el mismo diseño que cuando se creó en 2011.
Dado que muchos proyectos dependen de ello, *elegimos **priorizar la estabilidad** sobre las nuevas funciones*.

Como ejemplo, considera que los objetos `Moment` son *mutables*. Ésta es una fuente común de quejas sobre *Moment*.
Lo abordamos [en nuestra guía de uso](https://momentjs.com/guides/#/lib-concepts/mutability) pero aún así resulta una sorpresa para la mayoría de los usuarios nuevos.
Cambiar Moment para que sea inmutable sería un cambio radical para cada uno de los proyectos que lo utilizan.
Crear un "Moment v3" que fuera inmutable sería una tarea tremenda y haría de Moment una biblioteca completamente diferente.
Dado que esto ya se ha logrado en otras bibliotecas, creemos que es más importante conservar la API mutable.

Otro argumento común en contra del uso de Moment en aplicaciones modernas es su tamaño. Moment no funciona bien con los algoritmos modernos de "tree shaking", por lo que tiende a aumentar el tamaño de los paquetes de aplicaciones web.
Si uno necesita internacionalización o soporte de zona horaria, Moment puede volverse bastante grande. Los navegadores web modernos (y Node.js) exponen la internacionalización y el soporte de zona horaria a través del objeto [`Intl`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl), codificado como [ECMA-402](https://ecma-international.org/ecma-402). Bibliotecas como [Luxon](https://moment.github.io/luxon) (y otras) aprovechan esto, reduciendo o eliminando la necesidad de enviar tus propios archivos de datos.

Recientemente, Chrome Dev Tools [comenzó a mostrar recomendaciones para reemplazar Moment](https://web.archive.org/web/20210828024054/https://twitter.com/addyosmani/status/1304676118822174721) solo por el tamaño. En general apoyamos esta medida.

Quizás también quieras leer:

- [*Probablemente ya no necesites Moment.js*](https://dockyard.com/blog/2020/02/14/you-probably-don-t-need-moment-js-anymore)
- [*No (puede que no) necesites Moment.js*](https://github.com/you-dont-need/You-Dont-Need-Momentjs/blob/master/README.md)
- [*Por qué no deberías usar Moment.js...*](https://inventi.studio/en/blog/why-you-shouldnt-use-moment-js)
- [*4 alternativas a moment.js para internacionalizar fechas*](https://blog.logrocket.com/4-alternatives-to-moment-js-for-internationalizing-dates)

El equipo de Moment ha discutido extensamente estos temas. Reconocemos que muchos proyectos existentes pueden seguir usando Moment, pero nos gustaría desalentar el uso de Moment en nuevos proyectos en el futuro.
En su lugar, nos gustaría [recomendar alternativas](/momentjs/project-status#recommendations) que son excelentes opciones para usar en aplicaciones modernas hoy en día.

También nos gustaría promover la adición de [`Temporal`](/momentjs/project-status#future) al lenguaje JavaScript, que buscan los comentarios y contribuyentes.

**Ahora generalmente consideramos que Moment es un proyecto heredado en modo de mantenimiento. No está *muerto*, pero de hecho está *finalizado*.**

En la práctica, esto significa:

{{< content-ads/middle-banner-1 >}}

- No agregaremos nuevas funciones o capacidades.
- No cambiaremos la API de Moment para que sea inmutable.
- No abordaremos problemas con tree shaking o el tamaño de los paquetes.
- No haremos *ningún* cambio importante (sin versión 3).
- Es posible que optemos por no corregir errores o peculiaridades de comportamiento, especialmente si se trata de problemas conocidos desde hace mucho tiempo.

Con respecto específicamente a los archivos locales de internacionalización de Moment:

- Podemos optar por no aceptar correcciones a cadenas de configuración regionales o formatos de fecha localizados, especialmente si se han argumentado exitosamente en su forma actual.
- Debes presentar un nuevo argumento convincente a favor de los cambios de ubicación con evidencia significativa y no anecdótica que respalde tu posición.
- Si la cadena o el formato que solicitas cambiar se refleja en [CLDR](http://cldr.unicode.org), entonces debes enviar un cambio allí *primero* y hacer que se acepte.

Sin embargo, como entendemos que Moment está bien establecido en millones de proyectos existentes:

- *Abordaremos* los problemas críticos de seguridad a medida que surjan.
- *Publicaremos* actualizaciones de datos para Moment-Timezone después de las publicaciones de la [base de datos de zonas horarias de la IANA](https://www.iana.org/time-zones).

## Razones para seguir usando Moment

En la mayoría de los casos, no debes elegir Moment para nuevos proyectos. Sin embargo, existen algunas posibles razones por las que es posible que desees seguir usándolo.

### Soporte del navegador

Moment funciona bien en Internet Explorer 8 y superior. Por el contrario, Luxon sólo funciona en IE 10 y superior y requiere un polyfill para hacerlo. [Puedes leer más en la documentación de Luxon.](https://moment.github.io/luxon/#/matrix)

Otras bibliotecas también han tenido problemas con Safari, especialmente en dispositivos móviles. Si tienes un fuerte requisito de admitir navegadores más antiguos, es posible que desees seguir con Moment por un poco más de tiempo.

{{< content-ads/middle-banner-2 >}}

Sin embargo, [Day.js informa compatibilidad con IE8 y superior](https://day.js.org/docs/en/installation/installation), por lo que es posible que desees considerar esa alternativa.

### Dependencia de otras bibliotecas

Varias otras bibliotecas, especialmente las bibliotecas de selección de fechas y de gráficos, toman Moment como una dependencia. Si estás utilizando dicho componente y no puedes encontrar una alternativa, entonces ya estás incluyendo Moment en tu proyecto.
Por lo tanto, podría tener sentido seguir usando Moment en todo el proyecto en lugar de incluir otra biblioteca de fechas y horas.

### Familiaridad

Si eres usuario de Moment desde hace mucho tiempo, es posible que ya comprendas bien su API y sus limitaciones. Si es así, y los problemas mencionados anteriormente no te preocupan, entonces ciertamente puedes continuar usándolo.

## Alternativas recomendadas {#recommendations}

Hay varias opciones excelentes para considerar usar en lugar de Moment.

Al elegir, considera que:

- Algunas bibliotecas se dividen en módulos, complementos o bibliotecas complementarias.
- Algunas bibliotecas utilizan la API ECMAScript [`Intl`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl) para configuraciones regionales, zonas horarias o ambas.
- Algunas bibliotecas todavía proporcionan sus propios archivos de configuración regional y zona horaria, como lo hacen Moment y Moment-Timezone.

**Aquí están las alternativas que recomendamos:**

{{< content-ads/middle-banner-3 >}}

### [Luxon](https://moment.github.io/luxon)

Se puede considerar a Luxon como la evolución de Moment. Su autor es [Isaac Cambron](https://github.com/icambron), colaborador de Moment desde hace mucho tiempo.
Lee las páginas [*¿Por qué existe Luxon?*](https://moment.github.io/luxon/#/why) y el [*Para usuarios de Moment*](https://moment.github.io/luxon/#/moment) en la documentación de Luxon.

- Configuraciones regionales: `Intl` proporcionadas
- Zonas horarias: `Intl` proporcionadas

### [Day.js](https://day.js.org)

Day.js está diseñado para ser un reemplazo minimalista de Moment.js, utilizando una API similar.
No es un reemplazo directo, pero si estás acostumbrado a usar la API de Moment y deseas comenzar a moverte rápidamente, considera usar Day.js.

- Configuraciones regionales: archivos de datos personalizados que se pueden importar individualmente
- Zonas horarias: `Intl` proporcionada, a través de un complemento

### [date-fns](https://date-fns.org)

Date-fns ofrece una serie de funciones para manipular objetos JavaScript [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date). Para obtener más detalles, desplázate hasta "¿Por qué date-fns?" en la página de inicio de date-fns.

- Configuraciones regionales: archivos de datos personalizados que se pueden importar individualmente
- Zonas horarias: `Intl` proporcionada, a través de una biblioteca complementaria separada

### [js-Joda](https://js-joda.github.io/js-joda)

{{< content-ads/middle-banner-4 >}}

js-Joda es un port a JavaScript de [Three-Ten Backport](https://www.threeten.org/threetenbp) de Java, que es la base para la implementación JSR-310 del paquete Java SE 8 `java.time`.
Si estás familiarizado con [`java.time`](https://docs.oracle.com/javase/8/docs/api/java/time/package-summary.html), [Joda-Time](https://www.joda.org/joda-time), o [Noda Time](https://nodatime.org), encontrarás js-Joda comparable.

- Configuraciones regionales: archivos de datos personalizados a través del módulo complementario
- Zonas horarias: archivos de datos personalizados a través del módulo complementario

### Sin biblioteca

JavaScript siempre ha tenido un objeto [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date), especificación ECMAScript (ECMA-262) definida [aquí](https://www.ecma-international.org/ecma-262/11.0/index.html#sec-date-objects).

Al utilizar objetos `Date`, ten en cuenta lo siguiente:

- El objeto `Date` representa internamente una marca de tiempo Unix con precisión de milisegundos. Ofrece funciones que convertirán hacia y desde la zona horaria local del sistema, pero *siempre* internamente es UTC. A diferencia de un objeto `Moment`, *no* se puede configurar para usar otra zona horaria; No tiene concepto de "mode".

- Usar [`Date.parse`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/parse), o [`new Date(<string>)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#Timestamp_string) ha sido problemático y se implementó de manera inconsistente en el pasado. La [especificación actual](https://www.ecma-international.org/ecma-262/11.0/index.html#sec-date-time-string-format) define el análisis de una variación de las cadenas ISO 8601, donde las formas de solo fecha (como `"2020-09-14"`) se analizan como UTC, en lugar de hora local como lo sería según ISO 8601. Incluso entonces, no todas las implementaciones modernas han implementado esta especificación correctamente (por ejemplo, Safari). Otros tipos de cadenas *pueden* funcionar, pero analizarlas es *específico de la implementación* y puede variar significativamente, especialmente con navegadores más antiguos. Dependiendo de la implementación y de los componentes proporcionados en la cadena, es posible que te sorprendas con el resultado. Por estos motivos, estamos de acuerdo con la [declaración de MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#Timestamp_string) en que **analizar cadenas con el objeto `Date` es totalmente desaconsejado**.

Los entornos JavaScript modernos también implementarán la especificación [ECMA-402](https://www.ecma-international.org/ecma-402), que proporciona el objeto [`Intl`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl), y define las opciones de comportamiento de las funciones `toLocaleString`, `toLocaleDateString` y `toLocaleTimeString` del objeto `Date`.

Al utilizar el objeto `Intl`, ten en cuenta lo siguiente:

- No todos los entornos implementarán la especificación completa. En particular, los entornos Node.js requieren soporte de internacionalización proporcionado por ICU. Consulta [la documentación de Node.js](https://nodejs.org/docs/latest-v12.x/api/intl.html) para obtener más detalles.
- La [tabla de compatibilidad ECMAScript Intl (por kangax)](http://kangax.github.io/compat-table/esintl) puede ser útil para determinar qué funciones son compatibles y cuáles no.
- La mayoría de los entornos más nuevos brindan soporte para la zona horaria de la IANA a través de la opción `timeZone` en el constructor `Intl.DateTimeFormat` (y en `Date.toLocaleString`, `Date.toLocaleDateString` y `Date.toLocaleTimeString`). Esta opción se puede utilizar para tomar la marca de tiempo interna basada en UTC de un objeto `Date` y obtener una *cadena* que se ha convertido a una zona horaria con nombre. Sin embargo, *no* puede usarse para convertir un objeto `Date` a una zona horaria diferente.

{{< content-ads/middle-banner-5 >}}

Si los objetos `Date` e `Intl` satisfacen tus necesidades y comprendes completamente sus limitaciones, entonces podrías considerar usarlos directamente.

## El futuro {#future}

### **Temporal** - ¡Mejores fechas y horas en el lenguaje JavaScript!

Esperamos que algún día pronto no haya una gran necesidad de bibliotecas de fecha y hora en JavaScript. En su lugar, podremos utilizar las capacidades del propio lenguaje JavaScript.
Aunque algunas capacidades están aquí hoy con [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) y [`Intl`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl), sabemos por experiencia y datos que hay un importante margen de mejora.

El esfuerzo por mejorar las API de fecha y hora en el lenguaje JavaScript se está realizando a través de [La propuesta temporal ECMA TC39](https://tc39.es/proposal-temporal/docs/index.html).
Actualmente se encuentra en la Etapa 3 del [proceso TC39](https://tc39.es/process-document).

`Temporal` será un nuevo objeto global que actuará como un espacio de nombres de nivel superior (como `Math`). Expone muchos tipos separados de objetos, incluidos `Temporal.Instant`, `Temporal.ZonedDateTime`, `Temporal.PlainDateTime`, `Temporal.PlainDate`, `Temporal.PlainTime`, `Temporal.TimeZone` y varios otros. El [Temporal Cookbook](https://tc39.es/proposal-temporal/docs/cookbook.html) muestra muchas "recetas" con ejemplos de cómo se pueden utilizar estos objetos en diferentes escenarios.

Puedes probar Temporal hoy, a través de [un polyfill que no es de producción](https://github.com/tc39/proposal-temporal/tree/main/polyfill). ¡Pruébalo, pero no lo uses en producción (todavía)!

Envía tus comentarios y considera contribuir a este esfuerzo, ¡especialmente si tienes experiencia en el uso de Moment u otras bibliotecas de fecha y hora!

{{< content-ads/bottom-banner >}}
