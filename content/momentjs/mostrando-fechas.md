---
linkTitle: Mostrar contenido
weight: 5
title: Formas de mostrar contenido de Moment · Moment.js en Español
description: Una vez finalizados el análisis (parsing) y la manipulación, necesitas alguna forma de visualizar el moment con el formato deseado.
---

# Formas de mostrar contenido de Moment.js

Una vez finalizados el análisis (parsing) y la manipulación, necesitas alguna forma de mostrar el moment.

{{< content-ads/top-banner >}}

## Opciones de Formato {#format}

```javascript {filename="Firma del método"}
moment().format();
moment().format(String);
```

Esta es la opción de visualización más sólida. Toma una cadena de tokens y los reemplaza con sus valores correspondientes.

```javascript {filename="JavaScript"}
moment().format();                                // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
moment().format("ddd, hA");                       // "Sun, 3PM"
moment().format("[Today is] dddd");               // "Today is Sunday"
moment('gibberish').format('YYYY MM DD');         // "Invalid date"
```

|                            | Token              | Salida                                                                                                                                                                                                                                                                 |
| -------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Month                      | M                  | 1 2 ... 11 12                                                                                                                                                                                                                                                          |
|                            | Mo                 | 1st 2nd ... 11th 12th                                                                                                                                                                                                                                                  |
|                            | MM                 | 01 02 ... 11 12                                                                                                                                                                                                                                                        |
|                            | MMM                | Jan Feb ... Nov Dec                                                                                                                                                                                                                                                    |
|                            | MMMM               | January February ... November December                                                                                                                                                                                                                                 |
| Quarter                    | Q                  | 1 2 3 4                                                                                                                                                                                                                                                                |
|                            | Qo                 | 1st 2nd 3rd 4th                                                                                                                                                                                                                                                        |
| Day of Month               | D                  | 1 2 ... 30 31                                                                                                                                                                                                                                                          |
|                            | Do                 | 1st 2nd ... 30th 31st                                                                                                                                                                                                                                                  |
|                            | DD                 | 01 02 ... 30 31                                                                                                                                                                                                                                                        |
| Day of Year                | DDD                | 1 2 ... 364 365                                                                                                                                                                                                                                                        |
|                            | DDDo               | 1st 2nd ... 364th 365th                                                                                                                                                                                                                                                |
|                            | DDDD               | 001 002 ... 364 365                                                                                                                                                                                                                                                    |
| Day of Week                | d                  | 0 1 ... 5 6                                                                                                                                                                                                                                                            |
|                            | do                 | 0th 1st ... 5th 6th                                                                                                                                                                                                                                                    |
|                            | dd                 | Su Mo ... Fr Sa                                                                                                                                                                                                                                                        |
|                            | ddd                | Sun Mon ... Fri Sat                                                                                                                                                                                                                                                    |
|                            | dddd               | Sunday Monday ... Friday Saturday                                                                                                                                                                                                                                      |
| Day of Week (Locale)       | e                  | 0 1 ... 5 6                                                                                                                                                                                                                                                            |
| Day of Week (ISO)          | E                  | 1 2 ... 6 7                                                                                                                                                                                                                                                            |
| Week of Year               | w                  | 1 2 ... 52 53                                                                                                                                                                                                                                                          |
|                            | wo                 | 1st 2nd ... 52nd 53rd                                                                                                                                                                                                                                                  |
|                            | ww                 | 01 02 ... 52 53                                                                                                                                                                                                                                                        |
| Week of Year (ISO)         | W                  | 1 2 ... 52 53                                                                                                                                                                                                                                                          |
|                            | Wo                 | 1st 2nd ... 52nd 53rd                                                                                                                                                                                                                                                  |
|                            | WW                 | 01 02 ... 52 53                                                                                                                                                                                                                                                        |
| Year                       | YY                 | 70 71 ... 29 30                                                                                                                                                                                                                                                        |
|                            | YYYY               | 1970 1971 ... 2029 2030                                                                                                                                                                                                                                                |
|                            | YYYYYY             | -001970 -001971 ... +001907 +001971<br/>Nota: Años ampliados (cubre el rango de valores de tiempo completo de aproximadamente 273.790 años hacia adelante o hacia atrás desde el 1 de enero de 1970)                                                                   |
|                            | Y                  | 1970 1971 ... 9999 +10000 +10001<br/>Nota: Cumple con la norma ISO 8601 para fechas posteriores al año 9999                                                                                                                                                            |
| Era Year                   | y                  | 1 2 ... 2020 ...                                                                                                                                                                                                                                                       |
| Era                        | N, NN, NNN         | BC AD<br/>Nota: nombre abreviado de la era                                                                                                                                                                                                                             |
|                            | NNNN               | Before Christ, Anno Domini<br/>Nota: nombre completo de la era                                                                                                                                                                                                         |
|                            | NNNNN              | BC AD<br/>Nota: nombre corto de la era                                                                                                                                                                                                                                 |
| Week Year                  | gg                 | 70 71 ... 29 30                                                                                                                                                                                                                                                        |
|                            | gggg               | 1970 1971 ... 2029 2030                                                                                                                                                                                                                                                |
| Week Year (ISO)            | GG                 | 70 71 ... 29 30                                                                                                                                                                                                                                                        |
|                            | GGGG               | 1970 1971 ... 2029 2030                                                                                                                                                                                                                                                |
| AM/PM                      | A                  | AM PM                                                                                                                                                                                                                                                                  |
|                            | a                  | am pm                                                                                                                                                                                                                                                                  |
| Hour                       | H                  | 0 1 ... 22 23                                                                                                                                                                                                                                                          |
|                            | HH                 | 00 01 ... 22 23                                                                                                                                                                                                                                                        |
|                            | h                  | 1 2 ... 11 12                                                                                                                                                                                                                                                          |
|                            | hh                 | 01 02 ... 11 12                                                                                                                                                                                                                                                        |
|                            | k                  | 1 2 ... 23 24                                                                                                                                                                                                                                                          |
|                            | kk                 | 01 02 ... 23 24                                                                                                                                                                                                                                                        |
| Minute                     | m                  | 0 1 ... 58 59                                                                                                                                                                                                                                                          |
|                            | mm                 | 00 01 ... 58 59                                                                                                                                                                                                                                                        |
| Second                     | s                  | 0 1 ... 58 59                                                                                                                                                                                                                                                          |
|                            | ss                 | 00 01 ... 58 59                                                                                                                                                                                                                                                        |
| Fractional Second          | S                  | 0 1 ... 8 9                                                                                                                                                                                                                                                            |
|                            | SS                 | 00 01 ... 98 99                                                                                                                                                                                                                                                        |
|                            | SSS                | 000 001 ... 998 999                                                                                                                                                                                                                                                    |
|                            | SSSS ... SSSSSSSSS | 000[0..] 001[0..] ... 998[0..] 999[0..]                                                                                                                                                                                                                                |
| Time Zone                  | z or zz            | EST CST ... MST PST<br/>Nota: a partir de 1.6.0, los tokens de formato z/zz han quedado obsoletos en los objetos moment simples. Lee más sobre esto aquí. Sin embargo, *funcionan* si estás utilizando una zona horaria específica con el complemento moment-timezone. |
|                            | Z                  | -07:00 -06:00 ... +06:00 +07:00                                                                                                                                                                                                                                        |
|                            | ZZ                 | -0700 -0600 ... +0600 +0700                                                                                                                                                                                                                                            |
| Unix Timestamp             | X                  | 1360013296                                                                                                                                                                                                                                                             |
| Unix Millisecond Timestamp | x                  | 1360013296123                                                                                                                                                                                                                                                          |

`X` se agregó en **2.0.0**.

`e E gg gggg GG GGGG` se agregaron en **2.1.0**.

`x` se agregó en **2.8.4**.

`SSSS` a `SSSSSSSSS` se agregaron en **2.10.5**. Muestran 3 dígitos significativos y el resto se rellena con ceros.

`k` y `kk` se agregaron en **2.13.0**.

### Formatos regionales (según locale)

Debido a que el formato preferido difiere según la ubicación, existen algunos tokens que se pueden usar para formatear un moment según su ubicación.

Hay variaciones de mayúsculas y minúsculas en los mismos formatos. La versión en minúscula pretende ser la versión abreviada de su contraparte en mayúscula.

| Descripción                                              | Formato | Salida                              |
| -------------------------------------------------------- | ------- | ----------------------------------- |
| Hora                                                     | LT      | 8:30 PM                             |
| Hora con segundos                                        | LTS     | 8:30:25 PM                          |
| Número del mes, día del mes, año                         | L       | 09/04/1986                          |
|                                                          | l       | 9/4/1986                            |
| Nombre del mes, día del mes, año                         | LL      | September 4, 1986                   |
|                                                          | ll      | Sep 4, 1986                         |
| Nombre del mes, día del mes, año, hora                   | LLL     | September 4, 1986 8:30 PM           |
|                                                          | lll     | Sep 4, 1986 8:30 PM                 |
| Nombre del mes, día del mes, día de la semana, año, hora | LLLL    | Thursday, September 4, 1986 8:30 PM |
|                                                          | llll    | Thu, Sep 4, 1986 8:30 PM            |

`l ll lll llll` están disponibles en **2.0.0**.

{{< content-ads/middle-banner-1 >}}

`LTS` se agregó en **2.8.4**.

### Escapando caracteres

Para escapar caracteres en cadenas de formato, puedes colocar los caracteres entre corchetes.

```javascript {filename="JavaScript"}
moment().format('[today] dddd'); // 'today Sunday'
```

### Similitudes y diferencias con LDML

**Nota:** Si bien estos formatos de fecha son muy similares a los formatos de fecha LDML, existen algunas diferencias menores con respecto al día del mes, el día del año y el día de la semana.

Para obtener un desglose de algunos tokens de formato de fecha diferentes en diferentes configuraciones regionales, consulta [este cuadro de tokens de formato de fecha.](https://docs.google.com/spreadsheet/ccc?key=0AtgZluze7WMJdDBOLUZfSFIzenIwOHNjaWZoeGFqbWc&amp;hl=en_US#gid=0)

### Otros tokens

Si te sientes más cómodo trabajando con strftime en lugar de tokens de análisis similares a LDML, puedes utilizar el complemento de Ben Oakes. [benjaminoakes/moment-strftime](https://github.com/benjaminoakes/moment-strftime).

### Formato predeterminado

Al llamar a `moment#format` sin un formato, el valor predeterminado será `moment.defaultFormat`. Fuera de la caja, `moment.defaultFormat` es el formato ISO8601 `YYYY-MM-DDTHH:mm:ssZ`.

A partir de la versión **2.13.0**, cuando estás en modo UTC, el formato predeterminado se rige por `moment.defaultFormatUtc` que tiene el formato `YYYY-MM-DDTHH:mm:ss[Z]`. Esto devuelve `Z` como desplazamiento, en lugar de `+00:00`.

En ciertos casos, una zona horaria local (como `Atlantic/Reykjavik`) puede tener un desplazamiento cero y se considerará UTC. En tales casos, puede resultar útil configurar `moment.defaultFormat` y `moment.defaultFormatUtc` para que utilicen el mismo formato.

Cambiar el valor de `moment.defaultFormat` solo afectará el formato y no afectará el análisis. Por ejemplo:

```javascript {filename="JavaScript"}
moment.defaultFormat = "DD.MM.YYYY HH:mm";
// parse con .toDate()
moment('20.07.2018 09:19').toDate() // Invalid date
// formatea la cadena de fecha con el nuevo defaultFormat y luego analiza (parse)
moment('20.07.2018 09:19', moment.defaultFormat).toDate() // Fri Jul 20 2018 09:19:00 GMT+0300
```

{{< content-ads/middle-banner-2 >}}

## Tiempo desde ahora {#fromnow}

```javascript {filename="Firma del método"}
moment().fromNow();
moment().fromNow(Boolean);
```

Una forma común de mostrar el tiempo es manejada por `moment#fromNow`. A esto a veces se le llama tiempo atrás o tiempo relativo.

```javascript {filename="JavaScript"}
moment([2007, 0, 29]).fromNow(); // 4 years ago
```

Si pasas `true`, puedes obtener el valor sin el sufijo.

```javascript {filename="JavaScript"}
moment([2007, 0, 29]).fromNow();     // 4 years ago
moment([2007, 0, 29]).fromNow(true); // 4 years
```

Las cadenas base están [personalizadas según la configuración regional actual](/momentjs/personalizacion#relative-time). El tiempo se redondea al segundo más cercano.

El desglose de qué cadena se muestra para cada período de tiempo se describe en la siguiente tabla.

| Rango                     | Clave | Salida de muestra                |
| ------------------------- | ----- | -------------------------------- |
| 0 a 44 segundos           | s     | a few seconds ago                |
| unset                     | ss    | 44 seconds ago                   |
| 45 a 89 segundos          | m     | a minute ago                     |
| 90 segundos a 44 minutos  | mm    | 2 minutes ago ... 44 minutes ago |
| 45 a 89 minutos           | h     | an hour ago                      |
| 90 minutos a 21 horas     | hh    | 2 hours ago ... 21 hours ago     |
| 22 a 35 horas             | d     | a day ago                        |
| 36 horas a 25 días        | dd    | 2 days ago ... 25 days ago       |
| 26 a 45 días              | M     | a month ago                      |
| 45 a 319 días             | MM    | 2 months ago ... 10 months ago   |
| 320 a 547 días (1.5 años) | y     | a year ago                       |
| 548 días+                 | yy    | 2 years ago ... 20 years ago     |

**Nota:** A partir de la versión **2.10.3**, si el objeto moment objetivo no es válido, el resultado es la cadena de fecha no válida localizada.

**Nota:** La clave `ss` se agregó en **2.18.0**. Es un umbral opcional. Nunca se mostrará A MENOS que el usuario establezca manualmente el umbral `ss`. Hasta que se establezca el umbral `ss`, el valor predeterminado es el valor del umbral `s` menos 1 (por lo tanto, invisible para el usuario).

## Tiempo desde X {#from}

```javascript {filename="Firma del método"}
moment().from(Moment|String|Number|Date|Array);
moment().from(Moment|String|Number|Date|Array, Boolean);
```

Es posible que desees mostrar un moment en relación con un tiempo distinto al actual. En ese caso, puedes usar `moment#from`.

```javascript {filename="JavaScript"}
var a = moment([2007, 0, 28]);
var b = moment([2007, 0, 29]);
a.from(b) // "a day ago"
```

{{< content-ads/middle-banner-3 >}}

El primer parámetro es cualquier cosa que puedas pasar a `moment()` o a un `Moment` existente.

```javascript {filename="JavaScript"}
var a = moment([2007, 0, 28]);
var b = moment([2007, 0, 29]);
a.from(b);                     // "a day ago"
a.from([2007, 0, 29]);         // "a day ago"
a.from(new Date(2007, 0, 29)); // "a day ago"
a.from("2007-01-29");          // "a day ago"
```

Al igual que `moment#fromNow`, pasar `true` como segundo parámetro devuelve un valor sin el sufijo. Esto es útil siempre que necesites tener un período de tiempo legible por humanos.

```javascript {filename="JavaScript"}
var start = moment([2007, 0, 5]);
var end   = moment([2007, 0, 10]);
end.from(start);       // "in 5 days"
end.from(start, true); // "5 days"
```

A partir de la versión **2.10.3**, si alguno de los puntos finales no es válido, el resultado es la cadena `'Invalid date'` traducida.

## Tiempo hasta ahora {#tonow}

```javascript {filename="Firma del método"}
moment().toNow();
moment().toNow(Boolean);
```

Una forma común de mostrar el tiempo es manejada por `moment#toNow`. A esto a veces se le llama tiempo atrás o tiempo relativo.

Esto es similar a [`moment.fromNow`](/momentjs/mostrando-fechas#fromnow), pero proporciona el intervalo opuesto: `a.fromNow() = - a.toNow()`.

Esto es similar a [`moment.to`](/momentjs/mostrando-fechas#to), pero está en mayúsculas y minúsculas especiales para el moment actual. Utiliza `moment.to`, si deseas controlar los dos puntos finales del intervalo.

```javascript {filename="JavaScript"}
moment([2007, 0, 29]).toNow(); // in 4 years
```

Si pasas `true`, puedes obtener el valor sin el prefijo.

```javascript {filename="JavaScript"}
moment([2007, 0, 29]).toNow();     // in 4 years
moment([2007, 0, 29]).toNow(true); // 4 years
```

Las cadenas base están [personalizadas según la configuración regional actual](/momentjs/personalizacion#relative-time).

El desglose de qué cadena se muestra para cada período de tiempo se describe en la siguiente tabla.

{{< content-ads/middle-banner-4 >}}

| Rango                     | Clave | Salida de muestra              |
| ------------------------- | ----- | ------------------------------ |
| 0 a 44 segundos           | s     | in seconds                     |
| 45 a 89 segundos          | m     | in a minute                    |
| 90 segundos a 44 minutos  | mm    | in 2 minutes ... in 44 minutes |
| 45 a 89 minutos           | h     | in an hour                     |
| 90 minutos a 21 horas     | hh    | in 2 hours ... in 21 hours     |
| 22 a 35 horas             | d     | in a day                       |
| 36 horas a 25 días        | dd    | in 2 days ... in 25 days       |
| 26 a 45 días              | M     | in a month                     |
| 45 a 319 días             | MM    | in 2 months ... in 10 months   |
| 320 a 547 días (1.5 años) | y     | in a year                      |
| 548 días+                 | yy    | in 2 years ... in 20 years     |

A partir de la versión **2.10.3**, si el objeto moment objetivo no es válido, el resultado es la cadena `'Invalid date'` localizada.

{{< content-ads/bottom-banner >}}
