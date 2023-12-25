---
linkTitle: Parsing o análisis
weight: 2
title: Parsing, formas de crear un objeto Moment · Moment.js en Español
description: Moment.js crea un contenedor para el objeto Date. Para obtener este objeto contenedor, simplemente llama a moment() con uno de los tipos de entrada admitidos.
---

# Parsing, formas de crear un objeto Moment

En lugar de modificar el `Date.prototype` nativo, Moment.js crea un contenedor para el objeto `Date`. Para obtener este objeto contenedor, simplemente llama a `moment()` con uno de los tipos de entrada admitidos.

El prototipo `Moment` se expone a través de `moment.fn`. Si deseas agregar tus propias funciones, ahí es donde las colocarás.

Para facilitar la referencia, se hará referencia a cualquier método en `Moment.prototype` en la documentación como `moment#method`. Entonces `Moment.prototype.format` == `moment.fn.format` == `moment#format`.

**Por favor lee:**
* `moment(...)` es el modo local. Se supone que la entrada ambigua (sin offset) es la hora local. La entrada inequívoca (con offset) se ajusta a la hora local.
* `moment.utc(...)` es el modo utc. Se supone que la entrada ambigua es UTC. La entrada inequívoca se ajusta a UTC.
* `moment.parseZone()` mantiene la zona de entrada pasada. Se supone que la entrada ambigua es UTC.
* `moment.tz(...)` con el complemento moment-timezone puedes analizar (parse) la entrada en una zona horaria específica.

Ten en cuenta que una zona horaria y un offset de zona horaria son dos cosas diferentes. Un offset de -08:00 no significa necesariamente que se encuentre en la zona horaria del Pacífico de EE. UU.

[Consulta la Guía de parse para obtener información adicional](https://momentjs.com/guides/#/parsing).

## Obtener la fecha y hora actuales {#now}

```javascript {filename="Firma del método"}
moment();
moment(undefined);
// Desde 2.14.0 en adelante, también compatible
moment([]);
moment({});
```

Para obtener la fecha y hora actuales, simplemente llama a `moment()` sin parámetros.

```javascript {filename="JavaScript"}
var now = moment();
```

Esto es esencialmente lo mismo que llamar a `moment(new Date())`.

**Nota:** A partir de la versión **2.14.0**, `moment([])` y `moment({})` también regresan *now*. Antes de la versión 2.14.0, el valor predeterminado era el inicio de día actual, pero eso era arbitrario, por lo que se cambió.

**Nota:** Los parámetros de función por defecto son `undefined` cuando no se pasan. Moment trata `moment(undefined)` como `moment()`.

**Nota:** Los moments se crean en el momento de la evaluación, por lo que es posible que `moment().diff(moment())` no siempre devuelva `0`. Consulta [este issue de GitHub](https://github.com/moment/moment/issues/5195) para obtener más detalles.

## Crear un Moment a partir de una cadena {#string}

```javascript {filename="Firma del método"}
moment(String);
```

Al crear un moment a partir de una cadena, primero verificamos si la cadena coincide con los formatos conocidos [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), luego verificamos si la cadena coincide con [RFC 2822 de Fecha y hora](https://tools.ietf.org/html/rfc2822#section-3.3) antes de pasar al comportamiento por defecto de `new Date(string)` si no se encuentra un formato conocido.

```javascript {filename="JavaScript"}
var day = moment("1995-12-25");
```

**Advertencia:** La compatibilidad del navegador con el parsing de cadenas [es inconsistente](http://dygraphs.com/date-formats.html). Debido a que no existe ninguna especificación sobre qué formatos deben admitirse, lo que funciona en algunos navegadores no funcionará en otros.

<!--
**Note:** This has been the source of a lot of confusion, because moments created via `Date` constructor don't support `isValid` and also work unreliably. So it would be soon deprecated. From version 2.6.0 there is a way to prevent Date constructor usage - just set `moment.createFromInputFallback` to an empty function.
-->

Para obtener resultados consistentes al analizar cualquier cosa que no sean cadenas ISO 8601, debes usar [Cadena + Formato](/momentjs/parsing#string-format).

### Cadenas ISO 8601 compatibles

Una cadena ISO 8601 requiere una parte de fecha.

```
2013-02-08  # Una parte de fecha del calendario
2013-02     # Parte de fecha de un mes
2013-W06-5  # Parte de fecha de una semana
2013-039    # Una parte de fecha ordinal

20130208    # Fecha completa básica (corta)
201303      # Básico (corto) año+mes
2013        # Solo año básico (corto)
2013W065    # Semana básica (corta), día laborable
2013W06     # Solo semana básica (corta)
2013050     # Fecha ordinal básica (corta) (año + día del año)
```

También se puede incluir una parte de hora, separada de la parte de fecha por un espacio o una T mayúscula.

```
2013-02-08T09            # Una parte horaria separada por una T
2013-02-08 09            # Una parte de hora separada por un espacio
2013-02-08 09:30         # Una parte de hora y minuto
2013-02-08 09:30:26      # Una hora, minuto y segunda parte
2013-02-08 09:30:26.123  # Una parte de tiempo de hora, minuto, segundo y milisegundo
2013-02-08 24:00:00.000  # hora 24, minuto, segundo, milisegundo igual a 0 significa el día siguiente a medianoche

20130208T080910,123      # Fecha y hora cortas hasta ms, separadas por coma
20130208T080910.123      # Fecha y hora cortas hasta ms
20130208T080910          # Fecha y hora cortas hasta segundos
20130208T0809            # Fecha y hora cortas hasta minutos
20130208T08              # Fecha y hora cortas, solo horas
```

Cualquiera de las partes de fecha puede tener una parte de hora.

```
2013-02-08 09   # Una parte de fecha del calendario y una parte de hora
2013-W06-5 09   # Una parte de fecha de la semana y una parte de hora
2013-039 09     # Una parte de fecha ordinal y una parte de hora
```

Si se incluye una parte de tiempo, también se puede incluir un desplazamiento de UTC como `+-HH:mm`, `+-HHmm`, `+-HH` o `Z`.

```
2013-02-08 09+07:00             # +-HH:mm
2013-02-08 09-0100              # +-HHmm
2013-02-08 09Z                  #Z
2013-02-08 09:30:26.123+07:00   # +-HH:mm
2013-02-08 09:30:26.123+07      # +-HH
```

**Nota:** Se agregó soporte para los formatos semanales y ordinales en la versión **2.3.0**.

Si una cadena no coincide con ninguno de los formatos anteriores y no se puede analizar con `Date.parse`, `moment#isValid` devolverá falso.

```javascript {filename="JavaScript"}
moment("una fecha no real").isValid(); // false
```

### El formato de fecha y hora RFC 2822

Antes de analizar una fecha y hora RFC 2822, la cadena se limpia para eliminar cualquier comentario y/o carácter de nueva línea. Los caracteres adicionales son legales en el formato pero no añaden nada a la creación de una instancia de moment válida.

Después de la limpieza, la cadena se valida en las siguientes secciones separadas por espacios, todas ellas en inglés:

```
6 Mar 17 21:22 UT
6 Mar 17 21:22:23 UT
6 Mar 2017 21:22:23 GMT
06 Mar 2017 21:22:23 Z
Mon 06 Mar 2017 21:22:23 z
Mon, 06 Mar 2017 21:22:23 +0000
```

1. Día de la semana en tres letras, seguido de una coma opcional. (opcional)
2. Día del mes (1 o 2 dígitos), seguido de un mes de tres letras y un año de 2 o 4 dígitos
3. Horas y minutos de dos dígitos separados por dos puntos (:), seguidos opcionalmente de otros dos puntos y segundos de 2 dígitos
4. Zona horaria o desplazamiento en uno de los siguientes formatos:
   1. UT: +0000
   2. GMT: +0000
   3. EST | CCT | MST | Hora del Pacífico | hora del Este | CDT | MDT | PDT: zonas horarias de EE. UU.*
   4. A-I | K - Z: Zonas horarias militares*
   5. Desplazamiento de tiempo +/-9999

  Consulta la [sección 4.3](https://tools.ietf.org/html/rfc2822#section-4.3) de la especificación para obtener más detalles.

El analizador (parser) también confirma que el día de la semana (cuando se incluye) es coherente con la fecha.

## Pasar Cadena + Formato {#string-format}

```javascript {filename="Firma del método"}
moment(String, String);
moment(String, String, String);
moment(String, String, String[]);
moment(String, String, Boolean);
moment(String, String, String, Boolean);
```

Si conoces el formato de una cadena de entrada, puedes usarlo para analizar un moment.

```javascript {filename="JavaScript"}
moment("12-25-1995", "MM-DD-YYYY");
```

El parser ignora los caracteres no alfanuméricos de forma predeterminada, por lo que los siguientes ejemplos devolverán lo mismo.

```javascript {filename="JavaScript"}
moment("12-25-1995", "MM-DD-YYYY");
moment("12/25/1995", "MM-DD-YYYY");
```

Es posible que obtengas resultados inesperados al analizar tanto la fecha como la hora. Es posible que el siguiente ejemplo no se analice como esperaba:

```javascript {filename="JavaScript"}
moment('24/12/2019 09:15:00', "DD MM YYYY hh:mm:ss");
```

Puedes utilizar el modo estricto, que identificará el error de análisis y establecerá el objeto Moment como no válido:

```javascript {filename="JavaScript"}
moment('24/12/2019 09:15:00', "DD MM YYYY hh:mm:ss", true);
```

Los tokens de análisis (parsing) son similares a los tokens de formato utilizados en `moment#format`.

### Tokens de año, mes y día

*Los tokens distinguen entre mayúsculas y minúsculas.*

| Entrada    | Ejemplo          | Descripción                                                                    |
| ---------- | ---------------- | ------------------------------------------------------------------------------ |
| `YYYY`     | `2014`           | Año de 4 o 2 dígitos. Nota: Solo se pueden analizar 4 dígitos en modo `strict` |
| `YY`       | `14`             | Año de 2 dígitos                                                               |
| `Y`        | `-25`            | Año con cualquier número de dígitos y signo                                    |
| `Q`        | `1..4`           | Trimestre del año. Establece el mes al primer mes del trimestre.               |
| `M MM`     | `1..12`          | Número de mes                                                                  |
| `MMM MMMM` | `Jan..December`  | Nombre del mes en la configuración regional establecida por `moment.locale()`  |
| `D DD`     | `1..31`          | Día del mes                                                                    |
| `Do`       | `1st..31st`      | Día del mes con ordinal                                                        |
| `DDD DDDD` | `1..365`         | Día del año                                                                    |
| `X`        | `1410715640.579` | Marca de tiempo (timestamp) de Unix                                            |
| `x`        | `1410715640579`  | Marca de tiempo (timestamp) de Unix ms                                         |

`YYYY` desde la versión **2.10.5** admite años de 2 dígitos en modo no `strict` y los convierte en un año
cerca de 2000 (igual que `YY`).

`Y` se agregó en **2.11.1**. Coincidirá con cualquier número, con signo o sin signo. Es útil para años que no son de 4 dígitos o son anteriores a la era común. Se puede utilizar para cualquier año.

### Tokens de año, semana y día de la semana

Para estos, los tokens en minúsculas usan los días de inicio de la semana que tienen en cuenta la configuración regional (locale) y los tokens en mayúsculas usan los días de inicio de la [fecha de la semana ISO](https://en.wikipedia.org/wiki/ISO_week_date).

*Los tokens distinguen entre mayúsculas y minúsculas.*

| Entrada    | Ejemplo        | Descripción                                                                   |
| ---------- | -------------- | ----------------------------------------------------------------------------- |
| `gggg`     | `2014`         | Configuración regional 4 dígitos semana año                                   |
| `gg`       | `14`           | Configuración regional 2 dígitos semana año                                   |
| `w ww`     | `1..53`        | Semana local del año                                                          |
| `e`        | `0..6`         | Local día de la semana                                                        |
| `ddd dddd` | `Mon...Sunday` | Nombre del día en la configuración regional establecida por `moment.locale()` |
| `GGGG`     | `2014`         | Año de la semana ISO de 4 dígitos                                             |
| `GG`       | `14`           | ISO 2 dígitos semana año                                                      |
| `W WW`     | `1..53`        | Semana ISO del año                                                            |
| `E`        | `1..7`         | Día ISO de la semana                                                          |

### Formatos compatibles con la configuración regional

Los formatos de fecha y hora compatibles con la configuración regional también están disponibles usando `LT LTS L LL LLL LLLL`. Se agregaron en la versión **2.2.1**, excepto `LTS` que se agregó **2.8.4**.

*Los tokens distinguen entre mayúsculas y minúsculas.*

| Entrada | Ejemplo                              | Descripción                                              |
| ------- | ------------------------------------ | -------------------------------------------------------- |
| `L`     | `09/04/1986`                         | Fecha (en formato local)                                 |
| `LL`    | `September 4 1986`                   | Nombre del mes, día del mes, año.                        |
| `LLL`   | `September 4 1986 8:30 PM`           | Nombre del mes, día del mes, año, hora                   |
| `LLLL`  | `Thursday, September 4 1986 8:30 PM` | Día de la semana, nombre del mes, día del mes, año, hora |
| `LT`    | `8:30 PM`                            | Tiempo (sin segundos)                                    |
| `LTS`   | `8:30:00 PM`                         | Tiempo (con segundos)                                    |

### Tokens de hora, minutos, segundos, milisegundos y desplazamiento

*Los tokens distinguen entre mayúsculas y minúsculas.*

| Entrada                  | Ejemplo        | Descripción                                                                            |
| ------------------------ | -------------- | -------------------------------------------------------------------------------------- |
| `H HH`                   | `0..23`        | Horas (24 horas)                                                                       |
| `h hh`                   | `1..12`        | Horas (tiempo de 12 horas usado con `a A`).                                            |
| `k kk`                   | `1..24`        | Horas (horario de 24 horas del 1 al 24)                                                |
| `a A`                    | `am pm`        | Post o ante meridiem (ten en cuenta que el carácter `a p` también se considera válido) |
| `m mm`                   | `0..59`        | Minutos                                                                                |
| `s ss`                   | `0..59`        | Segundos                                                                               |
| `S SS SSS ... SSSSSSSSS` | `0..999999999` | Fracciones de segundos                                                                 |
| `Z ZZ`                   | `+12:00`       | Desplazamiento de UTC como `+-HH:mm`, `+-HHmm` o `Z`                                   |

Desde la versión **2.10.5**: los tokens de fracciones de segundo con una longitud de `4` a `9` pueden analizar cualquier número de dígitos, pero solo considerarán los 3 primeros (milisegundos). Úsalo si tienes la hora impresa con muchos dígitos fraccionarios y deseas consumir la entrada.

Ten en cuenta que la cantidad de caracteres `S` proporcionada solo es relevante cuando se analiza en modo estricto.
En el modo estándar, `S`, `SS`, `SSS`, `SSSS` son todos equivalentes y se interpretan como fracciones de segundo.
Por ejemplo, `.12` siempre es 120 milisegundos; pasar `SS` no hará que se interprete como 12 milisegundos.

`Z ZZ` se agregaron en la versión **1.2.0**.

`S SS SSS` se agregaron en la versión **1.6.0**.

`X` se agregó en la versión **2.0.0**.

`SSSSS ... SSSSSSSSS` se agregaron en la versión **2.10.5**.

`k kk` se agregaron en la versión **2.13.0**.

A menos que especifiques un desplazamiento de zona horaria, el análisis de una cadena creará una fecha en la zona horaria actual.

```javascript {filename="JavaScript"}
moment("2010-10-20 4:30",       "YYYY-MM-DD HH:mm");   // Analizado como 4:30 local time
moment("2010-10-20 4:30 +0000", "YYYY-MM-DD HH:mm Z"); // Analizado como 4:30 UTC
```

### Tokens relacionados con el año de la era

*Los tokens distinguen entre mayúsculas y minúsculas.*

| Input     | Examples      | Description                |
| --------- | ------------- | -------------------------- |
| y .. yyyy | `5 +5 -500`   | Años                       |
| yo        | `5th 1st`     | Años ordinales             |
| N         | `AD`          | Nombre abreviado de la era |
| NN        | `AD`          | Nombre abreviado de la era |
| NNN       | `AD`          | Nombre abreviado de la era |
| NNNN      | `Anno Domini` | Nombre completo de la era  |
| NNNNN     | `AD`          | Nombre estrecho de era     |

El soporte de era se agregó en **2.25.0**. Los tokens/API todavía están cambiando.

### Notas y trucos

Si el moment resultante de la entrada analizada no existe, `moment#isValid` devolverá falso.

```javascript {filename="JavaScript"}
moment("2010 13",           "YYYY MM").isValid();     // false (no es un mes real)
moment("2010 11 31",        "YYYY MM DD").isValid();  // false (no es un día real)
moment("2010 2 29",         "YYYY MM DD").isValid();  // false (no es un año bisiesto)
moment("2010 notamonth 29", "YYYY MMM DD").isValid(); // false (no es un nombre de mes real)
```

A partir de la versión **2.0.0**, se puede pasar una clave local como tercer parámetro a `moment()` y `moment.utc()`.

```javascript {filename="JavaScript"}
moment('2012 juillet', 'YYYY MMM', 'fr');
moment('2012 July',    'YYYY MMM', 'en');
moment('2012 July',    'YYYY MMM', ['qj', 'en']);
```

El analizador de Moment es muy indulgente y esto puede provocar un comportamiento no deseado o inesperado.

Por ejemplo, se puede observar el siguiente comportamiento:

```javascript {filename="JavaScript"}
moment('2016 is a date', 'YYYY-MM-DD').isValid() // true, 2016 fue considerado
```

Antes de **2.13.0**, el analizador mostraba el siguiente comportamiento. Esto ha sido corregido.

```javascript {filename="JavaScript"}
moment('I am spartacus', 'h:hh A').isValid();     // true - 'am' se toma como una 'A' flag.
```

A partir de la versión **2.3.0**, puedes especificar un valor booleano para el último argumento para que Moment utilice un análisis estricto. El análisis estricto requiere que el formato y la entrada coincidan exactamente, *incluidos los delimitadores*.

```javascript {filename="JavaScript"}
moment('It is 2012-05-25', 'YYYY-MM-DD').isValid();       // true
moment('It is 2012-05-25', 'YYYY-MM-DD', true).isValid(); // false
moment('2012-05-25',       'YYYY-MM-DD', true).isValid(); // true
moment('2012.05.25',       'YYYY-MM-DD', true).isValid(); // false
```

Puedes utilizar tanto la configuración regional (locale) como el modo estricto.

```javascript {filename="JavaScript"}
moment('2012-10-14', 'YYYY-MM-DD', 'fr', true);
```

El análisis estricto suele ser la mejor opción de análisis. Para obtener más información sobre cómo elegir un análisis estricto o indulgente, consulta la [guía de análisis](https://momentjs.com/guides/#/parsing).

### Analizando años de dos dígitos

De forma predeterminada, se supone que los años de dos dígitos por encima de 68 pertenecen a la década de 1900 y los años de 68 o menos pertenecen a la década de 2000. Esto se puede cambiar reemplazando el método `moment.parseTwoDigitYear`. El único argumento de este método es una cadena que contiene los dos años ingresados por el usuario y debe devolver el año como un número entero.

```javascript {filename="JavaScript"}
moment.parseTwoDigitYear = function(yearString) {
    return parseInt(yearString) + 2000;
}
```

### Analizando horas y minutos pegados

Desde la versión **2.11.0** se admite el análisis de `hmm`, `Hmm`, `hmmss` y `Hmmss`:

```javascript {filename="JavaScript"}
moment("123", "hmm").format("HH:mm") === "01:23"
moment("1234", "hmm").format("HH:mm") === "12:34"
```

## Pasar una Cadena + Formatos {#string-formats}

```javascript {filename="Firma del método"}
moment(String, String[], String, Boolean);
```

Si no conoces el formato exacto de una cadena de entrada, pero sabes que podría ser una entre muchas, puedes utilizar una variedad de formatos.

Esto es lo mismo que [Cadena + Formato](/momentjs/parsing#string-format), solo que intentará hacer coincidir la entrada con múltiples formatos.

```javascript {filename="JavaScript"}
moment("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"]);
```

A partir de la versión **2.3.0**, Moment utiliza algunas heurísticas simples para determinar qué formato usar. En orden:

  * Prefiere los formatos que den como resultado fechas [válidas](/momentjs/parsing#is-valid) a las no válidas.
  * Prefiere formatos que analicen más cadena que menos y usen más formato que menos, es decir, prefiere un análisis más estricto.
  * Prefiere formatos anteriores en el array que posteriores.

```javascript {filename="JavaScript"}
moment("29-06-1995", ["MM-DD-YYYY", "DD-MM", "DD-MM-YYYY"]); // utiliza el último formato
moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"]);          // utiliza el primer formato
```

También puedes especificar un argumento local y estricto. Funcionan igual que el caso de formato único.

```javascript {filename="JavaScript"}
moment("29-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr');       // utiliza la configuración regional 'fr'
moment("29-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], true);       // utiliza análisis estricto
moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr', true); // utiliza la configuración regional 'fr' y un análisis estricto
```

**Nota:** Analizar varios formatos es considerablemente más lento que analizar un solo formato. Si puedes evitarlo, es mucho más rápido analizar un solo formato.

## Formatos Especiales {#special-formats}

```javascript {filename="Firma del método"}
moment(String, moment.CUSTOM_FORMAT, [String], [Boolean]);
moment(String, moment.HTML5_FMT.DATETIME_LOCAL, [String], [Boolean]); // desde 2.20.0
moment(String, [..., moment.ISO_8601, ...], [String], [Boolean]);
```

[ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) es un estándar para la visualización de tiempo y duración. Moment ya admite el análisis de cadenas iso-8601, pero esto se puede especificar explícitamente en el formato/lista de formatos al construir un moment.

Para especificar el análisis iso-8601, utiliza la constante `moment.ISO_8601`.

```javascript {filename="JavaScript"}
moment("2010-01-01T05:06:07", moment.ISO_8601);
moment("2010-01-01T05:06:07", ["YYYY", moment.ISO_8601]);
```

A partir de la versión **2.20.0**, los siguientes formatos HTML5 están disponibles como constantes en la propiedad `HTML5_FMT` del objeto `moment` (`moment.HTML5_FMT.*`):

| Constante                | Formato                   | Ejemplo                 | Tipo de entrada                                |
| ------------------------ | ------------------------- | ----------------------- | ---------------------------------------------- |
| `DATETIME_LOCAL`         | `YYYY-MM-DDTHH:mm`        | 2017-12-14T16:34        | `<input type="datetime-local" />`              |
| `DATETIME_LOCAL_SECONDS` | `YYYY-MM-DDTHH:mm:ss`     | 2017-12-14T16:34:10     | `<input type="datetime-local" step="1" />`     |
| `DATETIME_LOCAL_MS`      | `YYYY-MM-DDTHH:mm:ss.SSS` | 2017-12-14T16:34:10.234 | `<input type="datetime-local" step="0.001" />` |
| `DATE`                   | `YYYY-MM-DD`              | 2017-12-14              | `<input type="date" />`                        |
| `TIME`                   | `HH:mm`                   | 16:34                   | `<input type="time" />`                        |
| `TIME_SECONDS`           | `HH:mm:ss`                | 16:34:10                | `<input type="time" step="1" />`               |
| `TIME_MS`                | `HH:mm:ss.SSS`            | 16:34:10.234            | `<input type="time" step="0.001" />`           |
| `WEEK`                   | `GGGG-[W]WW`              | 2017-W50                | `<input type="week" />`                        |
| `MONTH`                  | `YYYY-MM`                 | 2017-12                 | `<input type="month" />`                       |

## Pasar un Objecto JavaScript {#object}

```javascript {filename="Firma del método"}
moment({unit: value, ...});
```

```javascript {filename="JavaScript"}
moment({ hour:15, minute:10 });
moment({ y    :2010, M     :3, d   :5, h    :15, m      :10, s      :3, ms          :123});
moment({ year :2010, month :3, day :5, hour :15, minute :10, second :3, millisecond :123});
moment({ years:2010, months:3, days:5, hours:15, minutes:10, seconds:3, milliseconds:123});
moment({ years:2010, months:3, date:5, hours:15, minutes:10, seconds:3, milliseconds:123});
moment({ years:'2010', months:'3', date:'5', hours:'15', minutes:'10', seconds:'3', milliseconds:'123'});  // desde 2.11.0
```

Puedes crear un moment especificando algunas de las unidades de un objeto.

Las unidades omitidas tienen por defecto 0 o la fecha, mes y año actuales.

Las claves `day` y `date` significan el día del mes.

La clave `date` se agregó en **2.8.4**.

Los valores de cadena (como se muestran en la última línea) se admiten desde la versión **2.11.0**.

Ten en cuenta que, al igual que `moment(Array)` y `new Date(year, month, date)`, los meses están indexados desde `0`.

## Desde Timestamp de Unix (milisegundos) {#unix-timestamp-milliseconds}

```javascript {filename="Firma del método"}
moment(Number);
```

De manera similar a `new Date(Number)`, puedes crear un momento pasando un valor entero que represente el número de *milisegundos* desde la época Unix (1 de enero de 1970 a las 12 a. m. UTC).

```javascript {filename="JavaScript"}
var day = moment(1318781876406);
```

**Nota**: ECMAScript llama a esto [Valor de tiempo (Time Value)](https://www.ecma-international.org/ecma-262/6.0/#sec-time-values-and-time-range)

## Desde Timestamp de Unix (segundos) {#unix-timestamp}

```javascript {filename="Firma del método"}
moment.unix(Number)
```

Para crear un moment a partir de una marca de tiempo de Unix (*segundos* desde la época de Unix), usa `moment.unix(Number)`.

```javascript {filename="JavaScript"}
var day = moment.unix(1318781876);
```

Esto se implementa como `moment(timestamp * 1000)`, por lo que se incluyen segundos parciales en la marca de tiempo de entrada.

```javascript {filename="JavaScript"}
var day = moment.unix(1318781876.721);
```

**Nota:** A pesar de que las marcas de tiempo de Unix están basadas en UTC, esta función crea un objeto moment en modo *local*. Si necesitas UTC, luego llama a `.utc()`, como en:

```javascript {filename="JavaScript"}
var day = moment.unix(1318781876).utc();
```

## Pasar un objeto Date {#date}

```javascript {filename="Firma del método"}
moment(Date);
```

Puedes crear un `Moment` con un objeto `Date` nativo de Javascript preexistente.

```javascript {filename="JavaScript"}
var day = new Date(2011, 9, 16);
var dayWrapper = moment(day);
```

Esto clona el objeto `Date`; cambios adicionales en el objeto `Date` no afectarán el `Moment`, y viceversa.

## Pasar un Array {#array}

```javascript {filename="Firma del método"}
moment(Number[]);
```

Puedes crear un moment con una serie de números que reflejen los parámetros pasados a [new Date()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date)

`[year, month, day, hour, minute, second, millisecond]`

```javascript {filename="JavaScript"}
moment([2010, 1, 14, 15, 25, 50, 125]); // February 14th, 3:25:50.125 PM
```

Cualquier valor posterior al año es opcional y, de forma predeterminada, será el número más bajo posible.

```javascript {filename="JavaScript"}
moment([2010]);        // January 1st
moment([2010, 6]);     // July 1st
moment([2010, 6, 10]); // July 10th
```

La construcción con un array creará una fecha en la zona horaria actual. Para crear una fecha a partir de un array en UTC, usa `moment.utc(Number[])`.

```javascript {filename="JavaScript"}
moment.utc([2010, 1, 14, 15, 25, 50, 125]);
```

**Nota:** Debido a que esto refleja los parámetros nativos de `Date`, los meses, horas, minutos, segundos y milisegundos están indexados desde cero. Los años y días del mes están indexados desde 1.

Esto suele ser causa de frustración, especialmente con los meses, ¡así que toma nota!

Si la fecha representada por el array no existe, `moment#isValid` devolverá falso.

```javascript {filename="JavaScript"}
moment([2010, 12]).isValid();     // false (no es un mes real)
moment([2010, 10, 31]).isValid(); // false (no es un día real)
moment([2010, 1, 29]).isValid();  // false (no es un año real)
```

## Pasar un ASP.NET JSON Date {#asp-net-json-date}

```javascript {filename="Firma del método"}
moment(String);
```

Microsoft Web API devuelve fechas JSON en el formato ISO-8601 adecuado de forma predeterminada, pero las tecnologías ASP.NET más antiguas pueden devolver fechas en JSON como `/Date(1198908717056)/` o `/Date(1198908717056-0700)/`

Si se pasa una cadena que coincide con este formato, se analizará correctamente.

```javascript {filename="JavaScript"}
moment("/Date(1198908717056-0700)/"); // 2007-12-28T23:11:57.056-07:00
```

## Clonar un objeto Moment {#moment-clone}

```javascript {filename="Firma del método"}
moment(Moment);
```

Todos los moments son mutables. Si quieres un clon de un moment, puedes hacerlo de forma implícita o explícita.

Llamar a `moment()` en un moment lo clonará.

```javascript {filename="JavaScript"}
var a = moment([2012]);
var b = moment(a);
a.year(2000);
b.year(); // 2012
```

Además, puedes llamar a `moment#clone` para clonar un moment.

```javascript {filename="JavaScript"}
var a = moment([2012]);
var b = a.clone();
a.year(2000);
b.year(); // 2012
```

## El modo UTC {#utc}

```javascript {filename="Firma del método"}
moment.utc();
moment.utc(Number);
moment.utc(Number[]);
moment.utc(String);
moment.utc(String, String);
moment.utc(String, String[]);
moment.utc(String, String, String);
moment.utc(String, String, String[]);
moment.utc(String, String, Boolean);
moment.utc(String, String, String, Boolean);
moment.utc(Moment);
moment.utc(Date);
```

De forma predeterminada, el moment analiza y se muestra en la hora local.

Si deseas analizar o mostrar un moment en UTC, puedes usar `moment.utc()` en lugar de `moment()`.

Esto nos lleva a una característica interesante de Moment.js, el modo UTC.

Mientras estés en modo UTC, todos los métodos de visualización se mostrarán en hora UTC en lugar de en hora local.

```javascript {filename="JavaScript"}
moment().format();     // 2013-02-04T10:35:24-08:00
moment.utc().format(); // 2013-02-04T18:35:24+00:00
```

Además, mientras estés en modo UTC, todos los getters y setters utilizarán internamente los métodos `Date#getUTC*` y `Date#setUTC*` en lugar de los métodos `Date#get*` y `Date#set*`.

```javascript {filename="JavaScript"}
moment.utc().seconds(30).valueOf() === new Date().setUTCSeconds(30);
moment.utc().seconds()   === new Date().getUTCSeconds();
```

Es importante tener en cuenta que, aunque las visualizaciones anteriores difieren, ambas son el mismo momento en el tiempo.

```javascript {filename="JavaScript"}
var a = moment();
var b = moment.utc();
a.format();  // 2013-02-04T10:35:24-08:00
b.format();  // 2013-02-04T18:35:24+00:00
a.valueOf(); // 1360002924000
b.valueOf(); // 1360002924000
```

Cualquier moment creado con `moment.utc()` estará en modo UTC, y cualquier moment creado con `moment()` no.

Para cambiar de UTC a la hora local, puede utilizar [moment#utc](/momentjs/manipulating#utc) o [moment#local](/momentjs/manipulating#local).


```javascript {filename="JavaScript"}
var a = moment.utc([2011, 0, 1, 8]);
a.hours(); // 8 UTC
a.local();
a.hours(); // 0 PST
```

## El método `parseZone` {#parse-zone}

```javascript {filename="Firma del método"}
moment.parseZone()
moment.parseZone(String)
moment.parseZone(String, String)
moment.parseZone(String, [String])
moment.parseZone(String, String, Boolean)
moment.parseZone(String, String, String, Boolean)
```

Las funciones de análisis de cadenas de Moment como `moment(string)` y `moment.utc(string)` aceptan información de desplazamiento si se proporciona, pero convierten el objeto Moment resultante a hora local o UTC. Por el contrario, `moment.parseZone()` analiza la cadena pero mantiene el objeto Moment resultante en una zona horaria con desplazamiento fijo con el desplazamiento proporcionado en la cadena.

```javascript {filename="JavaScript"}
moment.parseZone("2013-01-01T00:00:00-13:00").utcOffset(); // -780 ("-13:00" en minutos totales)
moment.parseZone('2013 01 01 05 -13:00', 'YYYY MM DD HH ZZ').utcOffset(); // -780  ("-13:00" en minutos totales)
moment.parseZone('2013-01-01-13:00', ['DD MM YYYY ZZ', 'YYYY MM DD ZZ']).utcOffset(); // -780  ("-13:00" en minutos totales);
```

También te permite pasar argumentos locales y estrictos.

```javascript {filename="JavaScript"}
moment.parseZone("2013 01 01 -13:00", 'YYYY MM DD ZZ', true).utcOffset(); // -780  ("-13:00" en minutos totales)
moment.parseZone("2013-01-01-13:00", 'YYYY MM DD ZZ', true).utcOffset(); // NaN (no pasa el chequeo estricto)
moment.parseZone("2013 01 01 -13:00", 'YYYY MM DD ZZ', 'fr', true).utcOffset(); // -780 (con argumentos locale y estrictos)
moment.parseZone("2013 01 01 -13:00", ['DD MM YYYY ZZ', 'YYYY MM DD ZZ'], 'fr', true).utcOffset(); // -780 (con argumentos locale y estrictos junto con una variedad de formatos)
```

`moment.parseZone` es equivalente a analizar la cadena y usar `moment#utcOffset` para analizar la zona.

```javascript {filename="JavaScript"}
var s = "2013-01-01T00:00:00-13:00";
moment(s).utcOffset(s);
```

## Validación de un objeto Moment {#is-valid}

```javascript {filename="Firma del método"}
moment().isValid();
```

Moment aplica reglas de inicialización más estrictas que el constructor `Date`.

```javascript {filename="JavaScript"}
new Date(2013, 25, 14).toString(); // "Sat Feb 14 2015 00:00:00 GMT-0500 (EST)"
moment([2015, 25, 35]).format();   // 'Invalid date'
```

Puedes verificar si Moment considera que la fecha no es válida usando `moment#isValid`. Puedes verificar las métricas utilizadas por `#isValid` usando `moment#parsingFlags`, que devuelve un objeto.

Los siguientes indicadores de análisis dan como resultado una fecha no válida:

* `overflow`: un desbordamiento de un campo de fecha, como un mes 13, un día 32 del mes (o un 29 de febrero en años no bisiestos), un día 367 del año, etc. `overflow` contiene el índice de la unidad no válida que debe coincidir con `#invalidAt` (ver más abajo); `-1` significa que no hay desbordamiento.
* `invalidMonth`: un nombre de mes no válido, como `moment('Marbruary', 'MMMM');`. Contiene la cadena del mes no válido o nula.
* `empty`: una cadena de entrada que no contiene nada analizable, como `moment('esto no tiene sentido');`. Booleano.
* `nullInput`: una entrada `null`, como `moment(null);`. Booleano.
* `invalidFormat`: una lista vacía de formatos, como `moment('2013-05-25', [])`. Booleano.
* `userInvalidated`: una fecha creada explícitamente como no válida, como `moment.invalid()`. Booleano.

Además de lo anterior, a partir de **2.13.0** los indicadores `meridiem` y `parsedDateParts` funcionan juntos para determinar la validez de la fecha.

  * `meridiem`: Indica qué meridiem (AM/PM) se analizó, si corresponde. Cadena.
  * `parsedDateParts`: Devuelve un array de partes de fecha analizadas en orden descendente, es decir, `parsedDateParts[0]` *=== año*. Si no hay partes presentes, pero el meridiem tiene valor, la fecha no es válida. Array.

Además, si el Moment se analiza en modo estricto, estas banderas deben estar vacías para que el Moment sea válido:

* `unusedTokens`: array de subcadenas de formato no encontradas en la cadena de entrada
* `unusedInput`: array de subcadenas de entrada que no coinciden con la cadena de formato

**Nota:** El concepto de validez de Moment se volvió más estricto y consistente entre **2.2** y **2.3**.
**Nota:** La validez se determina en el momento de la creación. Un moment modificado (es decir, `moment().hour(NaN)`) seguirá siendo válido.

Además, puedes utilizar `moment#invalidAt` para determinar qué unidad de fecha se desbordó.

```javascript {filename="JavaScript"}
var m = moment("2011-10-10T10:20:90");
m.isValid(); // false
m.invalidAt(); // 5 for seconds
```

El valor de retorno tiene el siguiente significado:

1. años
2. meses
3. días
4. horas
5. minutos
6. segundos
7. milisegundos

**Nota:** En caso de que haya varias unidades incorrectas, se devuelve la primera (porque la validez de los días puede depender del mes, por ejemplo).

### Moments no válidos

Si un momento no es válido, se comporta como un `NaN` en operaciones de punto flotante.

Todo lo siguiente produce moments no válidos:

* `invalid.add(unit, value)`
* `another.add(invalid)`
* `invalid.clone()`
* `invalid.diff(another)`
* `invalid.endOf(unit)`
* `invalid.max(another)`
* `another.max(invalid)`
* `invalid.min(another)`
* `another.min(invalid)`
* `invalid.set(unit, value)`
* `invalid.startOf(unit)`
* `invalid.subtract(unit, value)`

Lo siguiente produce una versión localizada de `'InvalidDate'`:

* `invalid.format(anyFmt)` resulta en `'Invalid Date'` en el locale actual
* `invalid.from(another)`
* `another.from(invalid)`
* `invalid.fromNow(suffix)`
* `invalid.to(another)`
* `another.to(invalid)`
* `invalid.toNow(suffix)`
* `invalid.toISOString()` (Antes de **2.18.0**)
* `invalid.toString()`

Lo siguiente devuelve `false`:

* `invalid.isAfter(another)`
* `invalid.isAfter(invalid)`
* `another.isAfter(invalid)`
* `invalid.isBefore(another)`
* `invalid.isBefore(invalid)`
* `another.isBefore(invalid)`
* `invalid.isBetween(another, another)`
* `invalid.isBetween(invalid, invalid)`
* `invalid.isSame(another)`
* `invalid.isSame(invalid)`
* `another.isSame(invalid)`
* `invalid.isSameOrAfter(another)`
* `invalid.isSameOrAfter(invalid)`
* `another.isSameOrAfter(invalid)`
* `invalid.isSameOrBefore(another)`
* `invalid.isSameOrBefore(invalid)`
* `another.isSameOrBefore(invalid)`

Y estos devuelven `null` o `NaN` con alguna estructura:

* `invalid.get(unit)` devuelve null, como todos los demás getters con nombre
* `invalid.toArray() === [NaN, NaN, NaN, NaN, NaN, NaN]`
* `invalid.toObject()` tiene todos los valores establecidos en `NaN`
* `invalid.toDate()` devuelve un objeto Date no válido
* `invalid.toJSON()` retorna null
* `invalid.unix()` retorna null
* `invalid.valueOf()` retorna null
* `invalid.toISOString()` retorna null (A partir de **2.18.0**)

## Datos de creación {#creation-data}

```javascript {filename="Firma del método"}
moment().creationData();
```

Después de crear un objeto moment, se puede acceder a todas las entradas con el método `creationData()`:



```javascript {filename="JavaScript"}
moment("2013-01-02", "YYYY-MM-DD", true).creationData() === {
    input: "2013-01-02",
    format: "YYYY-MM-DD",
    locale: Locale obj,
    isUTC: false,
    strict: true
}
```

## Valores por defecto {#defaults}

```javascript {filename="Firma del método"}
moment("15", "hh")
```

Puedes crear un objeto moment especificando solo algunas de las unidades, y el resto será el día, mes o año actual de forma predeterminada, o 0 para horas, minutos, segundos y milisegundos.

Por defecto el momento actual, cuando no se pasa nada:

```javascript {filename="JavaScript"}
moment();  // fecha y hora actual
```

Por defecto es hoy, cuando solo pasan horas, minutos, segundos y milisegundos:

```javascript {filename="JavaScript"}
moment(5, "HH");  // hoy, 5:00:00.000
moment({hour: 5});  // hoy, 5:00:00.000
moment({hour: 5, minute: 10});  // hoy, 5:10.00.000
moment({hour: 5, minute: 10, seconds: 20});  // hoy, 5:10.20.000
moment({hour: 5, minute: 10, seconds: 20, milliseconds: 300});  // hoy, 5:10.20.300
```

Valores por defecto para mes y año, cuando solo se pasan días y unidades más pequeñas:

```javascript {filename="JavaScript"}
moment(5, "DD");  // este mes, 5to día del mes
moment("4 05:06:07", "DD hh:mm:ss");  // este mes, 4to día del mes, 05:06:07.000
```

Valores por defecto para año, si no se especifica el año:

```javascript {filename="JavaScript"}
moment(3, "MM");  // este año, tercer mes (marzo)
moment("Apr 4 05:06:07", "MMM DD hh:mm:ss");  // este año, 4 de abril, 05:06:07.000
```
