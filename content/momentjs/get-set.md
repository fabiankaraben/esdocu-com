---
linkTitle: Getters y Setters
weight: 3
title: Los getters y setters de Moment.js · Moment.js en Español
description: Moment.js utiliza getters y setters sobrecargados. Llamar a estos métodos sin parámetros actúa como un getter y llamarlos con un parámetro actúa como un setter.
---

# Los getters y setters de Moment.js

Moment.js utiliza getters y setters sobrecargados. Es posible que estés familiarizado con este patrón por su uso en jQuery.

Llamar a estos métodos sin parámetros actúa como un getter y llamarlos con un parámetro actúa como un setter.

Estos se asignan a la función correspondiente en el objeto nativo `Date`.


```javascript {filename="JavaScript"}
moment().seconds(30).valueOf() === new Date().setSeconds(30);
moment().seconds() === new Date().getSeconds();
```

Si estás en [modo UTC](/momentjs/manipulating#utc), se asignarán al equivalente UTC.

```javascript {filename="JavaScript"}
moment.utc().seconds(30).valueOf() === new Date().setUTCSeconds(30);
moment.utc().seconds() === new Date().getUTCSeconds();
```

Por conveniencia, existen nombres de métodos tanto en singular como en plural a partir de la versión **2.0.0**.

**Nota:** Todos estos métodos mutan el moment original cuando se usan como setters.

**Nota:** Desde **2.19.0** pasar `NaN` a cualquier setter no es una operación. Antes de **2.19.0** invalidaba el moment de forma incorrecta.

## Obtener o configurar los milisegundos {#millisecond}

```javascript {filename="Firma del método"}
moment().millisecond(Number);
moment().millisecond(); // Number
moment().milliseconds(Number);
moment().milliseconds(); // Number
```

Obtiene o establece los milisegundos.

Acepta números del `0` al `999`. Si se excede el rango aumentará los segundos.


## Obtener o configurar los segundos {#second}

```javascript {filename="Firma del método"}
moment().second(Number);
moment().second(); // Number
moment().seconds(Number);
moment().seconds(); // Number
```

Obtiene o establece los segundos.

Acepta números del `0` al `59`. Si se excede el rango aumentará los minutos.

## Obtener o configurar los minutos {#minute}

```javascript {filename="Firma del método"}
moment().minute(Number);
moment().minute(); // Number
moment().minutes(Number);
moment().minutes(); // Number
```


Obtiene o establece los minutos.

Acepta números del `0` al `59`. Si se excede el rango aumentará las horas.


## Obtener o configurar las horas {#hour}

```javascript {filename="Firma del método"}
moment().hour(Number);
moment().hour(); // Number
moment().hours(Number);
moment().hours(); // Number
```

Obtiene o establece la hora.

Acepta números del `0` al `23`. Si se excede el rango aumentará el día.

## Obtener o configurar el día del mes {#date}

```javascript {filename="Firma del método"}
moment().date(Number);
moment().date(); // Number
moment().dates(Number);
moment().dates(); // Number
```

Obtiene o establece el día del mes.

Acepta números del `1` al `31`. Si se excede el rango aumentará los meses.

**Nota:** `Moment#date` es para la fecha del mes y `Moment#day` es para el día de la semana.

**Nota:** si encadenas múltiples acciones para construir una fecha, debes comenzar desde un año, luego un mes, luego un día, etc. De lo contrario, puedes obtener resultados inesperados, como cuando `day=31` y el mes actual solo tiene 30 días (lo mismo se aplica a la manipulación nativa de la `Date` de JavaScript), la fecha devuelta será el día 30 del mes actual (consulta [mes](http://momentjs.com/docs/#/get-set/month) para más detalles).

Malo: `moment().date(day).month(month).year(year)`

Bueno: `moment().year(year).month(month).date(day)`

En **2.16.0** es obsoleto usar `moment().dates()`. Utiliza `moment().date()` en su lugar.

## Obtener o configurar el día de la semana {#day}

```javascript {filename="Firma del método"}
moment().day(Number|String);
moment().day(); // Number
moment().days(Number|String);
moment().days(); // Number
```

Obtiene o establece el día de la semana.

Este método se puede utilizar para configurar el día de la semana, siendo el domingo `0` y el sábado `6`.

Si el valor dado es de `0` a `6`, la fecha resultante estará dentro de la semana actual (de domingo a sábado).

Si se excede el rango, aumentará a la siguiente semana.

```javascript {filename="JavaScript"}
moment().day(-7); // el domingo pasado (0 - 7)
moment().day(0); // este domingo (0)
moment().day(7); // próximo domingo (0 + 7)
moment().day(10); // próximo miércoles (3 + 7)
moment().day(24); // 3 miércoles desde ahora (3 + 7 + 7 + 7)
```

**Nota:** `Moment#date` es para la fecha del mes y `Moment#day` es para el día de la semana.

A partir de **2.1.0**, también se admite el nombre de un día. Esto se analiza en el locale actual del moment.

```javascript {filename="JavaScript"}
moment().day("Sunday");
moment().day("Monday");
```

## Obtener o configurar el día de la semana (Según local) {#weekday}

```javascript {filename="Firma del método"}
moment().weekday(Number);
moment().weekday(); // Number
```

Obtiene o establece el día de la semana según la configuración regional.

Si la configuración regional asigna el lunes como el primer día de la semana, `moment().weekday(0)` será el lunes.
Si el domingo es el primer día de la semana, `moment().weekday(0)` será el domingo.

Al igual que con el `moment#day`, si se excede el rango, aumentará a la siguiente semana.

```javascript {filename="JavaScript"}
// cuando el lunes es el primer día de la semana
moment().weekday(-7); // el lunes pasado
moment().weekday(7); // el próximo lunes
// cuando el domingo es el primer día de la semana
moment().weekday(-7); // el domingo pasado
moment().weekday(7); // el próximo domingo
```

## Obtener o configurar el día de la semana (ISO) {#iso-weekday}

```javascript {filename="Firma del método"}
moment().isoWeekday(Number);
moment().isoWeekday(); // Number
```

Obtiene o establece el [día de la semana ISO](https://en.wikipedia.org/wiki/ISO_week_date) siendo `1` lunes y `7` domingo.

Al igual que con `moment#day`, si se excede el rango, aumentará a la siguiente semana.

```javascript {filename="JavaScript"}
moment().isoWeekday(1); // Monday
moment().isoWeekday(7); // Sunday
```

También se admite un nombre de día. Esto se analiza en el locale actual del moment.

```javascript {filename="JavaScript"}
moment().isoWeekday("Sunday");
moment().isoWeekday("Monday");
```

## Obtener o configurar el día del año {#day-of-year}

```javascript {filename="Firma del método"}
moment().dayOfYear(Number);
moment().dayOfYear(); // Number
```

Obtiene o establece el día del año.

Acepta números del `1` al `366`. Si se excede el rango, aumentará al siguiente año.

## Obtener o configurar la semana del año {#week}

```javascript {filename="Firma del método"}
moment().week(Number);
moment().week(); // Number
moment().weeks(Number);
moment().weeks(); // Number
```

Obtiene o establece la semana del año.

Debido a que diferentes configuraciones regionales definen la numeración de la semana del año de manera diferente, Moment.js agregó `moment#week` para obtener/establecer la semana del año localizada.

La semana del año varía dependiendo de qué día es el primer día de la semana (domingo, lunes, etc.) y de qué semana es la primera semana del año.

Por ejemplo, en Estados Unidos, el domingo es el primer día de la semana. La semana que tiene el 1 de enero es la primera semana del año.

En Francia, el lunes es el primer día de la semana y la semana del 4 de enero es la primera semana del año.

La salida de `moment#week` dependerá del [locale](/momentjs/i18n) para ese moment.

Al configurar la semana del año se mantiene el día de la semana.

## Obtener o configurar la semana del año (ISO) {#iso-week}

```javascript {filename="Firma del método"}
moment().isoWeek(Number);
moment().isoWeek(); // Number
moment().isoWeeks(Number);
moment().isoWeeks(); // Number
```

Obtiene o establece la [semana ISO del año](https://en.wikipedia.org/wiki/ISO_week_date).

Al configurar la semana del año se mantiene el día de la semana.

## Obtener o configurar el mes {#month}

```javascript {filename="Firma del método"}
moment().month(Number|String);
moment().month(); // Number
moment().months(Number|String);
moment().months(); // Number
```

Obtiene o establece el mes.

Acepta números del `0` al `11`. Si se excede el rango, aumentará el año.

**Nota:** Los meses están indexados desde cero, por lo que enero es el mes `0`.

A partir de **2.1.0**, también se admite el nombre de un mes. Esto se analiza en el locale actual del moment.

```javascript {filename="JavaScript"}
moment().month("January");
moment().month("Feb");
```

Antes de la versión **2.1.0**, si en un moment cambiaban los meses y el nuevo mes no tenía suficientes días para mantener el día actual del mes, se desbordaba al mes siguiente.

A partir de la versión **2.1.0**, esto se modificó para limitarse al final del mes objetivo.

```javascript {filename="JavaScript"}
// antes de 2.1.0
moment([2012, 0, 31]).month(1).format("YYYY-MM-DD"); // 2012-03-02
// después de 2.1.0
moment([2012, 0, 31]).month(1).format("YYYY-MM-DD"); // 2012-02-29
```

En **2.16.0** quedó obsoleto el uso de `moment().months()`. Utiliza `moment().month()` en su lugar.

## Obtener o configurar el cuarto del año {#quarter}

```javascript {filename="Firma del método"}
moment().quarter(); // Number
moment().quarter(Number);
moment().quarters(); // Number
moment().quarters(Number);
```

Obtiene el número de cuarto del año (trimestre) (1 a 4).

```javascript {filename="JavaScript"}
moment('2013-01-01T00:00:00.000').quarter() // 1
moment('2013-04-01T00:00:00.000').subtract(1, 'ms').quarter() // 1
moment('2013-04-01T00:00:00.000').quarter() // 2
moment('2013-07-01T00:00:00.000').subtract(1, 'ms').quarter() // 2
moment('2013-07-01T00:00:00.000').quarter() // 3
moment('2013-10-01T00:00:00.000').subtract(1, 'ms').quarter() // 3
moment('2013-10-01T00:00:00.000').quarter() // 4
moment('2014-01-01T00:00:00.000').subtract(1, 'ms').quarter() // 4
```

Establece el cuarto (1 a 4).

```javascript {filename="JavaScript"}
moment('2013-01-01T00:00:00.000').quarter(2) // '2013-04-01T00:00:00.000'
moment('2013-02-05T05:06:07.000').quarter(2).format() // '2013-05-05T05:06:07-07:00'
```

## Obtener o configurar el año {#year}

```javascript {filename="Firma del método"}
moment().year(Number);
moment().year(); // Number
moment().years(Number);
moment().years(); // Number
```

Obtiene o establece el año.

Acepta números de `-270.000` a `270.000`.

En **2.6.0** quedó obsoleto el uso de `moment().years()`. Utiliza `moment().year()` en su lugar.

## Obtener o configurar la semana del año {#week-year}

```javascript {filename="Firma del método"}
moment().weekYear(Number);
moment().weekYear(); // Number
```

Obtiene o establece el semana del año según la configuración regional.

Debido a que el primer día de la primera semana no siempre cae en el primer día del año, a veces la semana del año será diferente del mes del año.

Por ejemplo, en EE. UU., la semana que contiene el 1 de enero es siempre la primera semana. En Estados Unidos, las semanas también comienzan el domingo. Si el 1 de enero fuera lunes, el 31 de diciembre pertenecería a la misma semana que el 1 de enero y, por lo tanto, sería la misma semana del año que el 1 de enero. El 30 de diciembre tendría una semana del año diferente al 31 de diciembre.

## Obtener o configurar la semana del año (ISO) {#iso-week-year}

```javascript {filename="Firma del método"}
moment().isoWeekYear(Number);
moment().isoWeekYear(); // Number
```

Obtiene o establece el [ISO semana del año](https://en.wikipedia.org/wiki/ISO_week_date).

## Obtener las semanas del año {#weeks-in-year}

```javascript {filename="Firma del método"}
moment().weeksInYear();
```

Obtiene el número de semanas según la ubicación (locale) en el año actual.

## Obtener las semanas en el año (ISO) {#iso-weeks-in-year}

```javascript {filename="Firma del método"}
moment().isoWeeksInYear();
```

Obtiene el número de semanas del año actual, según [semanas ISO](https://en.wikipedia.org/wiki/ISO_week_date).

## Get genérico {#get}

```javascript {filename="Firma del método"}
moment().get('year');
moment().get('month');  // 0 a 11
moment().get('date');
moment().get('hour');
moment().get('minute');
moment().get('second');
moment().get('millisecond');
```

Getter de cadena. En general

```javascript {filename="JavaScript"}
moment().get(unit) === moment()[unit]()
```

Las unidades no distinguen entre mayúsculas y minúsculas y admiten formas plurales y cortas: año (years, y), mes (months, M), fecha (dates, D), hora (hours, h), minuto (minutes, m), segundo (seconds, s), milisegundo (milliseconds, ms).

## Set genérico {#set}

```javascript {filename="Firma del método"}
moment().set(String, Int);
moment().set(Object(String, Int));
```

Setter genérico, que acepta la unidad como primer argumento y el valor como segundo:

```javascript {filename="JavaScript"}
moment().set('year', 2013);
moment().set('month', 3);  // Abril
moment().set('date', 1);
moment().set('hour', 13);
moment().set('minute', 20);
moment().set('second', 30);
moment().set('millisecond', 123);

moment().set({'year': 2013, 'month': 3});
```

Las unidades no distinguen entre mayúsculas y minúsculas y admiten formas plurales y cortas: año (years, y), mes (months, M), fecha (dates, D), hora (hours, h), minuto (minutes, m), segundo (seconds, s), milisegundo (milliseconds, ms).

El análisis de objetos se agregó en **2.9.0**

## Máximo {#max}

```javascript {filename="Firma del método"}
moment.max(Moment[,Moment...]);
moment.max(Moment[]);
```

Devuelve el máximo (futuro más lejano) de las instancias del moment dado.

Por ejemplo:

```javascript {filename="JavaScript"}
var a = moment().subtract(1, 'day');
var b = moment().add(1, 'day');
moment.max(a, b);  // b

var friends = fetchFriends(); /* [{name: 'Dan', birthday: '11.12.1977'}, {name: 'Mary', birthday: '11.12.1986'}, {name: 'Stephan', birthday: '11.01.1993'}]*/
var friendsBirthDays = friends.map(function(friend){
    return moment(friend.birthday, 'DD.MM.YYYY');
});
moment.max(friendsBirthDays);  // '11.01.1993'
```

Sin argumentos, la función devuelve una instancia de moment con la hora actual.

A partir de la versión **2.10.5**, si un moment no válido es uno de los argumentos, el resultado es un moment no válido.

```javascript {filename="JavaScript"}
moment.max(moment(), moment.invalid()).isValid() === false
moment.max(moment.invalid(), moment()).isValid() === false
moment.max([moment(), moment.invalid()]).isValid() === false
moment.max([moment.invalid(), moment()]).isValid() === false
```

## Mínimo {#min}

```javascript {filename="Firma del método"}
moment.min(Moment[,Moment...]);
moment.min(Moment[]);
```

Devuelve el mínimo (el pasado más lejano) de las instancias del moment dado.

Por ejemplo:

```javascript {filename="JavaScript"}
var a = moment().subtract(1, 'day');
var b = moment().add(1, 'day');
moment.min(a, b);  // a
moment.min([a, b]); // a
```

Sin argumentos, la función devuelve una instancia de moment con la hora actual.

A partir de la versión **2.10.5**, si un moment no válido es uno de los argumentos, el resultado es un moment no válido.

```javascript {filename="JavaScript"}
moment.min(moment(), moment.invalid()).isValid() === false
moment.min(moment.invalid(), moment()).isValid() === false
moment.min([moment(), moment.invalid()]).isValid() === false
moment.min([moment.invalid(), moment()]).isValid() === false
```
