---
linkTitle: Consultar contenido
weight: 6
title: Cómo realizar consultas a un objeto Moment · Moment.js en Español
description: Para consultar a un objeto Moment para conocer su estado o comparar su valor con otro objeto Moment, Moment.js cuenta con una serie de métodos útiles.
---

# Cómo realizar consultas a un objeto Moment

En ocasiones necesitaremos realizar consultas a un objeto `Moment` para conocer su estado o comparar su valor con otro objeto `Moment`, para estos casos Moment.js cuenta con una serie de métodos útiles.

## El método `isBefore` {#is-before}

```javascript {filename="Firma del método"}
moment().isBefore(Moment|String|Number|Date|Array);
moment().isBefore(Moment|String|Number|Date|Array, String);
```

Comprueba si un moment es anterior a otro moment. El primer argumento se analizará como un moment, si no lo es ya.

```javascript {filename="JavaScript"}
moment('2010-10-20').isBefore('2010-10-21'); // true
```

Si deseas limitar la granularidad a una unidad que no sea milisegundos, pasa las unidades como segundo parámetro.

Como el segundo parámetro determina la precisión, y no solo un valor a verificar, el uso de `day` verificará el año, el mes y el día.

```javascript {filename="JavaScript"}
moment('2010-10-20').isBefore('2010-12-31', 'year'); // false
moment('2010-10-20').isBefore('2011-01-01', 'year'); // true
```

Al igual que `moment#isAfter` y `moment#isSame`, cualquiera de las unidades de tiempo que se admiten para `moment#startOf` se admiten para `moment#isBefore`.

```
year month week isoWeek day hour minute second
```

Si no se pasa nada a `moment#isBefore`, la hora actual será la hora predeterminada.

*NOTA*: `moment().isBefore()` tiene un comportamiento indefinido y no debe usarse. Si el código se ejecuta rápido, el momento inicial creado sería el mismo que el creado en `isBefore` para realizar la verificación, por lo que el resultado sería `false`. Pero si el código se ejecuta más lento, es posible que el momento creado en `isBefore` sea mensurablemente posterior al creado en `moment()`, por lo que la llamada devolvería `true`.

## El método `isSame` {#is-same}

```javascript {filename="Firma del método"}
moment().isSame(Moment|String|Number|Date|Array);
moment().isSame(Moment|String|Number|Date|Array, String);
```

Comprueba si un moment es igual a otro moment. El primer argumento se analizará como un moment, si no lo es ya.

```javascript {filename="JavaScript"}
moment('2010-10-20').isSame('2010-10-20'); // true
```

Si deseas limitar la granularidad a una unidad que no sea milisegundos, pásala como segundo parámetro.

```javascript {filename="JavaScript"}
moment('2010-10-20').isSame('2009-12-31', 'year');  // false
moment('2010-10-20').isSame('2010-01-01', 'year');  // true
moment('2010-10-20').isSame('2010-12-31', 'year');  // true
moment('2010-10-20').isSame('2011-01-01', 'year');  // false
```

Al incluir un segundo parámetro, coincidirá con todas las unidades iguales o mayores. Al pasar `month`, se verificarán `month` y `year`. Al pasar `day`, se verificarán `day`, `month` y `year`.

```javascript {filename="JavaScript"}
moment('2010-01-01').isSame('2011-01-01', 'month'); // false, año diferente
moment('2010-01-01').isSame('2010-02-01', 'day');   // false, mes diferente
```

Al igual que `moment#isAfter` y `moment#isBefore`, cualquiera de las unidades de tiempo admitidas para `moment#startOf` también lo son para `moment#isSame`.

```
year month week isoWeek day hour minute second
```

Si los dos moments tienen zonas horarias diferentes, se utilizará la zona horaria del primer moment para la comparación.

```javascript {filename="JavaScript"}
// Note: Australia/Sydney is UTC+11:00 on these dates
moment.tz("2018-11-09T10:00:00", "Australia/Sydney").isSame(moment.tz("2018-11-08T12:00:00", "UTC"), "day"); // false
moment.tz("2018-11-08T12:00:00", "UTC").isSame(moment.tz("2018-11-09T10:00:00", "Australia/Sydney"), "day"); // true
```

*NOTA*: `moment().isSame()` tiene un comportamiento indefinido y no debe usarse. Si el código se ejecuta rápido, el moment inicial creado sería el mismo que el creado en `isSame` para realizar la verificación, por lo que el resultado sería `true`. Pero si el código se ejecuta más lento, es posible que el momento creado en `isSame` sea considerablemente posterior al creado en `moment()`, por lo que la llamada devolvería `false`.

## El método `isAfter` {#is-after}

```javascript {filename="Firma del método"}
moment().isAfter(Moment|String|Number|Date|Array);
moment().isAfter(Moment|String|Number|Date|Array, String);
```

Comprueba si un moment es posterior a otro moment. El primer argumento se analizará como un moment, si no lo es ya.

```javascript {filename="JavaScript"}
moment('2010-10-20').isAfter('2010-10-19'); // true
```

Si deseas limitar la granularidad a una unidad que no sea milisegundos, pase las unidades como segundo parámetro.

Como el segundo parámetro determina la precisión, y no solo un valor a verificar, el uso de `day` verificará el año, el mes y el día.

```javascript {filename="JavaScript"}
moment('2010-10-20').isAfter('2010-01-01', 'year'); // false
moment('2010-10-20').isAfter('2009-12-31', 'year'); // true
```

Al igual que `moment#isSame` y `moment#isBefore`, cualquiera de las unidades de tiempo que se admiten para `moment#startOf` se admiten para `moment#isAfter`.

```
year month week isoWeek day hour minute second
```

Si no se pasa nada a `moment#isAfter`, la hora actual será la predeterminada.

```javascript {filename="JavaScript"}
moment().isAfter(); // false
```

## El método `isSameOrBefore` {#is-same-or-before}

```javascript {filename="Firma del método"}
moment().isSameOrBefore(Moment|String|Number|Date|Array);
moment().isSameOrBefore(Moment|String|Number|Date|Array, String);
```

Comprueba si un moment es anterior o igual a otro moment. El primer argumento se analizará como un moment, si no lo es ya.

```javascript {filename="JavaScript"}
moment('2010-10-20').isSameOrBefore('2010-10-21');  // true
moment('2010-10-20').isSameOrBefore('2010-10-20');  // true
moment('2010-10-20').isSameOrBefore('2010-10-19');  // false
```

Si deseas limitar la granularidad a una unidad que no sea milisegundos, pasa las unidades como segundo parámetro.

Como el segundo parámetro determina la precisión, y no solo un valor a verificar, el uso de `day` verificará el año, el mes y el día.

```javascript {filename="JavaScript"}
moment('2010-10-20').isSameOrBefore('2009-12-31', 'year'); // false
moment('2010-10-20').isSameOrBefore('2010-12-31', 'year'); // true
moment('2010-10-20').isSameOrBefore('2011-01-01', 'year'); // true
```

Al igual que `moment#isAfter` y `moment#isSame`, cualquiera de las unidades de tiempo admitidas para `moment#startOf` también lo son para `moment#isSameOrBefore`:

```
year month week isoWeek day hour minute second
```

## El método `isSameOrAfter` {#is-same-or-after}

```javascript {filename="Firma del método"}
moment().isSameOrAfter(Moment|String|Number|Date|Array);
moment().isSameOrAfter(Moment|String|Number|Date|Array, String);
```

Comprueba si un moment es posterior o igual a otro moment. El primer argumento se analizará como un moment, si no lo es ya.

```javascript {filename="JavaScript"}
moment('2010-10-20').isSameOrAfter('2010-10-19'); // true
moment('2010-10-20').isSameOrAfter('2010-10-20'); // true
moment('2010-10-20').isSameOrAfter('2010-10-21'); // false
```

Si deseas limitar la granularidad a una unidad que no sea milisegundos, pasa las unidades como segundo parámetro.

Como el segundo parámetro determina la precisión, y no solo un valor a verificar, el uso de `day` verificará el año, el mes y el día.

```javascript {filename="JavaScript"}
moment('2010-10-20').isSameOrAfter('2011-12-31', 'year'); // false
moment('2010-10-20').isSameOrAfter('2010-01-01', 'year'); // true
moment('2010-10-20').isSameOrAfter('2009-12-31', 'year'); // true
```

Al igual que `moment#isSame` y `moment#isBefore`, cualquiera de las unidades de tiempo admitidas para `moment#startOf` también lo son para `moment#isSameOrAfter`:

```
year month week isoWeek day hour minute second
```

## El método `isBetween` {#is-between}

```javascript {filename="Firma del método"}
// Desde 2.13.0 en adelante
moment().isBetween(moment-like, moment-like);
moment().isBetween(moment-like, moment-like, String);
moment().isBetween(moment-like, moment-like, String, String);
// donde moment-like es Moment|String|Number|Date|Array

// Desde 2.9.0 a 2.12.0
moment().isBetween(moment-like, moment-like);
moment().isBetween(moment-like, moment-like, String);
// donde moment-like es Moment|String|Number|Date|Array
```

Compruebe si un moment está entre otros dos moments, opcionalmente mirando la escala de unidades (minutos, horas, días, etc.). El match es exclusivo. Los dos primeros argumentos se analizarán como moments, si no lo han sido ya.

```javascript {filename="JavaScript"}
moment('2010-10-20').isBetween('2010-10-19', '2010-10-25'); // true
moment('2010-10-20').isBetween('2010-10-19', undefined); // true, since moment(undefined) evaluates as moment()
```

Ten en cuenta que el orden de los dos argumentos es importante: la fecha "más pequeña" debe estar en el primer argumento.

```javascript {filename="JavaScript"}
moment('2010-10-20').isBetween('2010-10-19', '2010-10-25'); // true
moment('2010-10-20').isBetween('2010-10-25', '2010-10-19'); // false
```

Si deseas limitar la granularidad a una unidad que no sea milisegundos, pasa las unidades como tercer parámetro.

```javascript {filename="JavaScript"}
moment('2010-10-20').isBetween('2010-01-01', '2012-01-01', 'year'); // false
moment('2010-10-20').isBetween('2009-12-31', '2012-01-01', 'year'); // true
```

Al igual que `moment#isSame`, `moment#isBefore`, `moment#isAfter`, cualquiera de las unidades de tiempo que se admiten para `moment#startOf` se admiten para `moment#isBetween`: `year`, `month`, `week`, `isoWeek`, `day`, `hour`, `minute`, y `second`.

La versión **2.13.0** introduce la inclusión. Un `[` indica la inclusión de un valor. Un `(` indica exclusión.
Si se utilizas el parámetro de inclusión, se deben pasar ambos indicadores.


```javascript {filename="JavaScript"}
moment('2016-10-30').isBetween('2016-10-30', '2016-12-30', undefined, '()'); //false
moment('2016-10-30').isBetween('2016-10-30', '2016-12-30', undefined, '[)'); //true
moment('2016-10-30').isBetween('2016-01-01', '2016-10-30', undefined, '()'); //false
moment('2016-10-30').isBetween('2016-01-01', '2016-10-30', undefined, '(]'); //true
moment('2016-10-30').isBetween('2016-10-30', '2016-10-30', undefined, '[]'); //true
```

Ten en cuenta que en el caso de que los parámetros `from` y `to` sean los mismos, pero los parámetros de inclusión sean diferentes, prevalecerá `false`.

```javascript {filename="JavaScript"}
moment('2016-10-30').isBetween('2016-10-30', '2016-10-30', undefined, '(]'); //false
```

Si no se especifica el parámetro de inclusión, Moment utilizará de forma predeterminada `()`.

## El método `isDST` (Is Daylight Saving Time) {#is-daylight-saving-time}

```javascript {filename="Firma del método"}
moment().isDST();
```

`moment#isDST` comprueba si el moment actual está en horario de verano.

**NOTA**: Esta función es un HACK. El moment no tiene forma de saber si una hora determinada está en horario de verano real o no. Algunos cambios de hora en una zona están relacionados con el horario de verano, otros no, y sin información completa de la zona horaria no se puede saber.

Moment actualmente verifica el horario de invierno y verano, y si el desplazamiento coincide con el desplazamiento de verano (y el horario de verano es diferente al de invierno), entonces informa el horario de verano. Esto funciona en la gran mayoría de los casos, pero como se mencionó anteriormente, no es "correcto" y no funcionará en todos los casos.

El evento moment-timezone (en el momento de escribir 0.5.37) no admite información DST (es decir, si el reloj está oficialmente en horario de verano en un momento determinado o no), por lo que para que las cosas mejoren, se han agregado algunas cosas nuevas (y el paquete tzdata) que tienen que suceder en moment-timezone.


```javascript {filename="JavaScript"}
moment([2011, 2, 12]).isDST(); // false, March 12 2011 is not DST
moment([2011, 2, 14]).isDST(); // true, March 14 2011 is DST
// Este ejemplo es para "en" locale: https://www.timeanddate.com/time/dst/2011.html
```

## El método `isDSTShifted` {#is-dst-shifted}

```javascript {filename="Firma del método"}
moment('2013-03-10 2:30', 'YYYY-MM-DD HH:mm').isDSTShifted()
```

**Nota:** A partir de la versión **2.14.0**, esta función está **obsoleta**. No da la respuesta correcta después de modificar el objeto de moment. Para obtener más información, consulta [moment/3160](https://github.com/moment/moment/pull/3160)

Otra parte importante de la validación es saber si la fecha ha sido movida por un horario de verano. Por ejemplo, en la mayor parte de los Estados Unidos:

```javascript {filename="JavaScript"}
moment('2013-03-10 2:30', 'YYYY-MM-DD HH:mm').format(); //=> '2013-03-10T01:30:00-05:00'
```

Esto se debe a que el horario de verano cambia la hora de 2:00 a 3:00, por lo que 2:30 no es una hora real. El tiempo resultante depende del navegador, ya sea ajustando el tiempo hacia adelante o hacia atrás. Utiliza `moment#isDSTShifted` para probar esta condición.

**Nota:** antes de **2.3.0**, los objetos Moment en esta condición siempre devolvían `false` para `moment#isValid`; ahora devuelven `true`.

## El método `isLeapYear` {#is-leap-year}

```javascript {filename="Firma del método"}
moment().isLeapYear();
```

`moment#isLeapYear` devuelve `true` si ese año es bisiesto, y `false` si no lo es.

```javascript {filename="JavaScript"}
moment([2000]).isLeapYear() // true
moment([2001]).isLeapYear() // false
moment([2100]).isLeapYear() // false
```

## El método `isMoment` {#is-a-moment}

```javascript {filename="Firma del método"}
moment.isMoment(obj);
```

Para comprobar si una variable es un objeto de moment, utiliza `moment.isMoment()`.

```javascript {filename="JavaScript"}
moment.isMoment() // false
moment.isMoment(new Date()) // false
moment.isMoment(moment()) // true
```

Desde la versión **2.11.0**, también puedes probar un objeto Moment mediante el operador `instanceof`:

```javascript {filename="JavaScript"}
moment() instanceof moment // true
```

## El método `isDate` {#is-a-date}

```javascript {filename="Firma del método"}
moment.isDate(obj);
```

Para comprobar si una variable es un objeto `Date` nativo, utiliza `moment.isDate()`.

```javascript {filename="JavaScript"}
moment.isDate(); // false
moment.isDate(new Date()); // true
moment.isDate(moment()); // false
```
