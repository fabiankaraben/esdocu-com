---
linkTitle: Complementos
weight: 11
title: Algunos complementos para Moment.js de la comunidad · Moment.js en Español
description: Algunas personas han creado complementos para Moment.js que pueden resultarte útiles.
---

# Complementos para Moment.js

Algunas personas han creado complementos para Moment.js que pueden resultarte útiles.

{{< content-ads/top-banner >}}

## El complemento Strftime {#strftime}

```javascript {filename="Firma del método"}
npm install moment-strftime
```

Si te sientes más cómodo trabajando con strftime en lugar de tokens de análisis similares a LDML, puedes usar el complemento `moment-strftime` de Ben Oakes.

El repositorio está ubicado en [github.com/benjaminoakes/moment-strftime](https://github.com/benjaminoakes/moment-strftime).

## El complemento MSDate {#msdate}

Si estás utilizando fechas de automatización OLE en .NET, consulta `moment-msdate` de Markit On Demand. El uso de este complemento te permite formatear fechas OA en fechas JavaScript y viceversa.

Convierte un `moment` en una fecha OA:

```javascript {filename="JavaScript"}
moment().toOADate(); // un número de coma flotante
```

O convierte una fecha OA en un `moment`:

```javascript {filename="JavaScript"}
moment.fromOADate(41493); // Wed Aug 07 2013 00:00:00 GMT-0600 (MDT)
```

Puedes encontrar más información y documentación detallada en GitHub en [http://markitondemand.github.io/moment-msdate/](http://markitondemand.github.io/moment-msdate).

## El complemento Java DateFormat Parser {#jdateformatparser}

```javascript {filename="Firma del método"}
npm install moment-jdateformatparser
```

Si deseas trabajar con `java.text.DateFormat`, puedes utilizar este complemento.

Por ejemplo,

{{< content-ads/middle-banner-1 >}}

```javascript {filename="JavaScript"}
moment("2013-12-24 14:30").formatWithJDF("dd.MM.yyyy");  // devuelve la fecha formateada "24.12.2013"
moment().toJDFString("DD.MM.YYYY");  // devuelve el patrón de formato Java "dd.MM.yyyy"
```

El repositorio está ubicado en [github.com/MadMG/moment-jdateformatparser](https://github.com/MadMG/moment-jdateformatparser).

## El complemento Date Ranges {#range}

```javascript {filename="Firma del método"}
npm install moment-range
```

Si necesitas trabajar con rangos de fechas, puedes utilizar el complemento `moment-range` de Gianni Chiappetta.

La documentación se puede encontrar en la página de inicio [github.com/rotaready/moment-range](https://github.com/rotaready/moment-range).

Y también está disponible para la web en el repositorio a continuación.

El repositorio está ubicado en [github.com/rotaready/moment-range](https://github.com/rotaready/moment-range).

## El complemento Twix {#twix}

```javascript {filename="Firma del método"}
  npm install twix
```

Otro complemento de rango es la biblioteca `Twix` de Isaac Cambron. Tiene muchas características relacionadas con el rango y se destaca al formatear rangos de manera legible. Por ejemplo,

```javascript {filename="JavaScript"}
var t = moment("1/25/1982 9:30 AM").twix("1/25/1982 1:30 PM");
t.isCurrent(); // false
t.count('minutes'); // 241
t.format();  // 'Jan 25, 1982, 9:30 AM - 1:30 PM'
t.simpleFormat("h:m"); // '9:30 - 1:30'
```

La documentación completa de todas las opciones y características se encuentra [aquí](http://icambron.github.io/twix.js).

Está disponible en npm así:

```
npm install twix
```

{{< content-ads/middle-banner-2 >}}

O simplemente toma el archivo JS desde [aquí](https://raw.github.com/icambron/twix.js/master/dist/twix.js).

## El complemento Precise Range {#preciserange}

```javascript {filename="Firma del método"}
npm install moment-precise-range-plugin
```

El complemento [Precise Range](https://codebox.org.uk/pages/moment-date-range-plugin), escrito por [Rob Dawson](https://github.com/codebox), se puede utilizar para mostrar representaciones exactas y legibles por humanos de rangos de fecha/hora:

```javascript {filename="JavaScript"}
moment("2014-01-01 12:00:00").preciseDiff("2015-03-04 16:05:06");
 // 1 year 2 months 3 days 4 hours 5 minutes 6 seconds
```

```javascript {filename="JavaScript"}
moment.preciseDiff("2014-01-01 12:00:00", "2014-04-20 12:00:00");
// 3 months 19 days
```

Para obtener los valores numéricos sin formato en lugar de una cadena, pasa el valor `true` como tercer argumento del método:

```javascript {filename="JavaScript"}
moment.preciseDiff(m1, m2, true); 
// {years : 0, months : 1, days : 2, hours : 3, minutes : 4, seconds : 5, firstDateWasLater : false}
```

## El complemento ISO Calendar {#isocalendar}

```javascript {filename="Firma del método"}
npm install moment-isocalendar
```

Si estás buscando un método de isocalendario similar a Python, puedes usar el complemento de Rocky Meza

`moment-isocalendar`

Llamar al método `isocalendar` en un moment devolverá un array como el siguiente:

`[year, week_of_year, day_of_week, minutes_since_midnight]`

```javascript {filename="JavaScript"}
moment().isocalendar(); // [2012, 8, 5, 870]
```

{{< content-ads/middle-banner-3 >}}

También puedes reconstruir un moment a partir de un array isocalendaria.

```javascript {filename="JavaScript"}
moment.fromIsocalendar([2011, 51, 5, 870]).format('LLLL');
// "Friday, December 23 2011 2:30 PM"
```

El repositorio está ubicado en [github.com/fusionbox/moment-isocalendar](https://github.com/fusionbox/moment-isocalendar).

## El complemento Jalaali Calendar {#jalaali}

```javascript {filename="Firma del método"}
npm install moment-jalaali
```

Si deseas trabajar con el sistema de calendario Jalaali (Jalali, persa, Khorshidi o Shamsi), puedes utilizar el complemento `moment-jalaali` de Behrang Noruzi Niya.

Cuando se instale, envolverá el objeto `moment` y moment podrá formatear y analizar años y meses de Jalaali. Aquí hay un breve ejemplo:

```javascript {filename="JavaScript"}
var m = moment('1360/5/26', 'jYYYY/jM/jD'); // Parse a Jalaali date.
m.format('jYYYY/jM/jD [is] YYYY/M/D'); // 1360/5/26 is 1981/8/17
```

El repositorio está ubicado en [github.com/behrang/moment-jalaali](https://github.com/behrang/moment-jalaali).

{{< content-ads/bottom-banner >}}
