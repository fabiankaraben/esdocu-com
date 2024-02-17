---
linkTitle: Manipular contenido
weight: 4
title: Cómo manipular un objeto Moment · Moment.js en Español
description: Una vez que tengas un Moment, es posible que desees manipularlo de alguna manera. Hay varios métodos para ayudar con esto.
---

# Cómo manipular un objeto Moment

Una vez que tengas un `Moment`, es posible que desees manipularlo de alguna manera. Hay varios métodos para ayudar con esto.

{{< content-ads/top-banner >}}

Moment.js utiliza el [patrón de interfaz fluido](https://en.wikipedia.org/wiki/Fluent_interface), también conocido como [encadenamiento de métodos](https://en.wikipedia.org/wiki/Method_chaining). Esto te permite hacer locuras como las siguientes.

```javascript {filename="JavaScript"}
moment().add(7, 'days').subtract(1, 'months').year(2009).hours(0).minutes(0).seconds(0);
```

**Nota:** Cabe señalar que los moments son mutables. Llamar a cualquiera de los métodos de manipulación cambiará el moment original.

Si deseas crear una copia y manipularla, debes usar `moment#clone` antes de manipular el moment. [Más información sobre la clonación.](/momentjs/parsing#moment-clone)

## El método `add` {#add}

```javascript {filename="Firma del método"}
moment().add(Number, String);
moment().add(Duration);
moment().add(Object);
```

Muta el moment original añadiendo tiempo.

Esta es una función bastante sólida para agregar tiempo a un momento existente. Para agregar tiempo, pasa la clave de a qué tiempo deseas agregar y la cantidad que deseas agregar.

```javascript {filename="JavaScript"}
moment().add(7, 'days');
```

También hay algunas claves de atajo si te gusta todo ese asunto de la brevedad.

{{< content-ads/middle-banner-1 >}}

```javascript {filename="JavaScript"}
moment().add(7, 'd');
```

| Clave        | Atajo |
| ------------ | ----- |
| years        | y     |
| quarters     | Q     |
| months       | M     |
| weeks        | w     |
| days         | d     |
| hours        | h     |
| minutes      | m     |
| seconds      | s     |
| milliseconds | ms    |

Si deseas agregar varias claves diferentes al mismo tiempo, puedes pasarlas como un objeto literal.

```javascript {filename="JavaScript"}
moment().add(7, 'days').add(1, 'months'); // con encadenamiento
moment().add({days:7,months:1}); // con objeto literal
```

No hay límites superiores para las cantidades, por lo que puedes sobrecargar cualquiera de los parámetros.

```javascript {filename="JavaScript"}
moment().add(1000000, 'milliseconds'); // un millón de milisegundos
moment().add(360, 'days'); // 360 días
```

### Consideraciones especiales para meses y años

Si el día del mes en la fecha original es mayor que el número de días del mes final, el día del mes cambiará al último día del mes final.

```javascript {filename="JavaScript"}
moment([2010, 0, 31]);                  // January 31
moment([2010, 0, 31]).add(1, 'months'); // February 28
```

También hay consideraciones especiales a tener en cuenta al agregar tiempo que cruza el horario de verano.
Si agregas años, meses, semanas o días, la hora original siempre coincidirá con la hora agregada.

{{< content-ads/middle-banner-2 >}}

Agregar un mes agregará la cantidad especificada de meses a la fecha.

```javascript {filename="JavaScript"}
moment([2010, 1, 28]);                 // February 28
moment([2010, 1, 28]).add(1, 'month'); // March 28
```

```javascript {filename="JavaScript"}
var m = moment(new Date(2011, 2, 12, 5, 0, 0)); // el día antes del horario de verano en los EE. UU.
m.hours(); // 5
m.add(1, 'days').hours(); // 5
```

Si agregas horas, minutos, segundos o milisegundos, se supone que deseas precisión en la hora y el resultado será una hora diferente.

```javascript {filename="JavaScript"}
var m = moment(new Date(2011, 2, 12, 5, 0, 0)); // el día antes del horario de verano en los EE. UU.
m.hours(); // 5
m.add(24, 'hours').hours(); // 6 (pero es posible que primero tengas que configurar la zona horaria)
```

Alternativamente, puedes usar [duraciones](/momentjs/durations) para agregar a moments.

```javascript {filename="JavaScript"}
var duration = moment.duration({'days' : 1});
moment([2012, 0, 31]).add(duration); // February 1
```

Antes de la versión **2.8.0**, también se admitía la sintaxis `moment#add(String, Number)`. Ha quedado obsoleto en favor de `moment#add(Number, String)`.

```javascript {filename="JavaScript"}
moment().add('seconds', 1); // En desuso en 2.8.0
moment().add(1, 'seconds');
```

A partir de **2.12.0**, cuando se pasan valores decimales para días y meses, se redondean al número entero más cercano.
Las semanas, cuartos (trimestres) y años se convierten a días o meses y luego se redondean al número entero más cercano.

{{< content-ads/middle-banner-3 >}}

```javascript {filename="JavaScript"}
moment().add(1.5, 'months') == moment().add(2, 'months')
moment().add(.7, 'years') == moment().add(8, 'months') //.7*12 = 8.4, rounded to 8
```

## El método `subtract` {#subtract}

```javascript {filename="Firma del método"}
moment().subtract(Number, String);
moment().subtract(Duration);
moment().subtract(Object);
```

Muta el moment original restando tiempo.

Esto es exactamente lo mismo que `moment#add`, solo que en lugar de sumar tiempo, lo resta.

```javascript {filename="JavaScript"}
moment().subtract(7, 'days');
```

Antes de la versión **2.8.0**, también se admitía la sintaxis `moment#subtract(String, Number)`. Ha quedado obsoleto en favor de `moment#subtract(Number, String)`.

```javascript {filename="JavaScript"}
moment().subtract('seconds', 1); // Deprecated in 2.8.0
moment().subtract(1, 'seconds');
```

A partir de **2.12.0**, cuando se pasan valores decimales para días y meses, se redondean al número entero más cercano.
Las semanas, cuartos (trimestres) y años se convierten a días o meses y luego se redondean al número entero más cercano.

```javascript {filename="JavaScript"}
moment().subtract(1.5, 'months') == moment().subtract(2, 'months')
moment().subtract(.7, 'years') == moment().subtract(8, 'months') // .7*12 = 8.4, redondeado a 8
```

{{< content-ads/middle-banner-4 >}}

Ten en cuenta que para que las operaciones `moment.add(-.5, 'days')` y `moment.subtract(.5, 'days')` sean equivalentes, `-.5`, `-1.5`, `-2.5`, etc. se redondean hacia abajo.

## Al inicio de una unidad de tiempo {#start-of}

```javascript {filename="Firma del método"}
moment().startOf(String);
```

Muta el momento original configurándolo al inicio de una unidad de tiempo.

```javascript {filename="JavaScript"}
moment().startOf('year');    // establecido al 1 de enero a las 12:00 am de este año
moment().startOf('month');   // establecido al primero de este mes, 12:00 am
moment().startOf('quarter'); // establecido al comienzo del trimestre actual, primer día del mes, 00:00 am
moment().startOf('week');    // establecido al primer día de esta semana, 12:00 am
moment().startOf('isoWeek'); // establecido al primer día de esta semana según ISO 8601, 12:00 am
moment().startOf('day');     // establecido a las 12:00 am de hoy
moment().startOf('date');    // establecido a las 12:00 am de hoy
moment().startOf('hour');    // establecido a ahora, pero con 0 minutos, 0 segundos y 0 ms
moment().startOf('minute');  // establecido a ahora, pero con 0 segundos y 0 milisegundos
moment().startOf('second');  // igual a moment().milliseconds(0);
```

Estos atajos son esencialmente los mismos que los siguientes.

```javascript {filename="JavaScript"}
moment().startOf('year');
moment().month(0).date(1).hours(0).minutes(0).seconds(0).milliseconds(0);
```

```javascript {filename="JavaScript"}
moment().startOf('hour');
moment().minutes(0).seconds(0).milliseconds(0)
```

A partir de la versión **2.0.0**, `moment#startOf('day')` reemplazó a `moment#sod`.

**Nota:** `moment#startOf('week')` se agregó en la versión **2.0.0**.

A partir de la versión **2.1.0**, `moment#startOf('week')` utiliza el día de inicio de la semana que reconoce la configuración regional.

**Nota:** `moment#startOf('isoWeek')` se agregó en la versión **2.2.0**.

**Nota:** `moment#startOf('date')` se agregó como alias para el día en **2.13.0**

{{< content-ads/bottom-banner >}}
