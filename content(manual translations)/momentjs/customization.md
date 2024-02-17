---
linkTitle: Personalización
weight: 8
title: Cómo personalizar Moment.js y su configuración · Moment.js en Español
description: Moment.js es muy fácil de personalizar. En general, debes crear una configuración regional con tus personalizaciones.
---

# Cómo personalizar Moment.js

Moment.js es muy fácil de personalizar. En general, debes crear una configuración regional con tus personalizaciones.

{{< content-ads/top-banner >}}

```javascript {filename="JavaScript"}
moment.locale('en-my-settings', {
    // customizations.
});
```

Puedes eliminar una configuración regional previamente definida pasando `null` como segundo argumento.
La configuración regional eliminada ya no estará disponible para su uso.

```javascript {filename="JavaScript"}
moment.locale('fr'); // 'fr'
moment.locale('en'); // 'en'
moment.locale('fr', null);
moment.locale('fr'); // 'en'
```

A partir de **2.12.0** es posible crear una configuración regional (locale) que herede de una configuración regional padre.

```javascript {filename="JavaScript"}
moment.defineLocale('en-foo', {
  parentLocale: 'en',
  /* */
});
```

Las propiedades que no se especifican en la configuración regional se heredarán de la configuración regional padre.

A partir de **2.16.0** es posible definir una configuración regional con un padre que no se ha definido ni cargado.

{{< content-ads/middle-banner-1 >}}

```javascript {filename="JavaScript"}
moment.defineLocale('fakeLocale', {parentLocale:'xyz'})
```

A partir de **2.21.0**, al intentar crear un moment con la configuración regional recién definida, el moment intentará cargar de forma diferida el padre si existe. De lo contrario, el padre utilizará de forma predeterminada la configuración regional global.

A partir de **2.12.0** también es posible actualizar las propiedades de una configuración regional.

```javascript {filename="JavaScript"}
moment.updateLocale('en', {
  /**/
});
```

Todas las propiedades especificadas se actualizarán, mientras que otras permanecerán iguales. Esta función no afecta a los moments que ya existen. Ten en cuenta que llamar a `updateLocale` también cambia la configuración regional global actual a la configuración regional que se actualiza; consulta [este issue de GitHub](https://github.com/moment/moment/issues/5410) para obtener más información.

Para revertir una actualización utiliza:

```javascript {filename="JavaScript"}
moment.updateLocale('en', null);
```

{{< content-ads/middle-banner-2 >}}

En **2.12.0** quedó obsoleto el uso de `moment.locale()` para cambiar una configuración regional existente. Utiliza `moment.updateLocale()` en su lugar.

## Nombres de meses {#month-names}

```javascript {filename="Firma del método"}
// Desde 2.12.0 en adelante
moment.updateLocale('en', {
    months : String[]
});
moment.updateLocale('en', {
    months : Function
});
moment.updateLocale('en', {
    months : {
        format : String[],
        standalone : String[]
    }
});
// Desde 2.11.0 en adelante
moment.locale('en', {
    months : {
        format : String[],
        standalone : String[]
    }
});
// Desde 2.8.1 a 2.11.2
moment.locale('en', {
    months : String[]
});
moment.locale('en', {
    months : Function
});

// Obsoleto desde 2.8.1
moment.lang('en', {
    months : String[]
});
moment.lang('en', {
    months : Function
});
```

`Locale#months` debe ser un array de los nombres de los meses.

```javascript {filename="JavaScript"}
moment.updateLocale('en', {
    months : [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ]
});
```

Si necesitas más procesamiento para calcular el nombre del mes (por ejemplo, si hay diferente gramática para diferentes formatos), `Locale#months` puede ser una función con la siguiente firma. Siempre debería devolver el nombre de un mes.

```javascript {filename="JavaScript"}
moment.updateLocale('en', {
    months : function (momentToFormat, format) {
        // momentToFormat es el momento en el que se está formateando 
        // actualmente. El formato es la cadena de formato.
        if (/^MMMM/.test(format)) { // si el formato comienza con 'MMMM'
            return nominative[momentToFormat.month()];
        } else {
            return subjective[momentToFormat.month()];
        }
    }
});
```

{{< content-ads/middle-banner-3 >}}

A partir de la versión **2.11.0** los meses también pueden ser un objeto, especificando las formas `standalone` y `format` (nominativo y acusativo). La expresión regular que se ejecuta en el formato para comprobar si se debe utilizar el formato `format` es `/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/`. A partir de la versión **2.14.0** se puede especificar uno diferente con la clave `isFormat`.

```javascript {filename="JavaScript"}
moment.updateLocale('en', {
    months : {
         format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
         standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
         isFormat: /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?|MMMM?(\[[^\[\]]*\]|\s+)+D[oD]?/  // from 2.14.0
    }
});
```

## Abreviaturas de meses {#month-abbreviations}

```javascript {filename="Firma del método"}
// From 2.12.0 en adelante
moment.updateLocale('en', {
    monthsShort : String[]
});
moment.updateLocale('en', {
    monthsShort : Function
});
moment.updateLocale('en', {
    monthsShort : {
        format: String[],
        standalone : String[]
    }
});
// Desde 2.11.0
moment.locale('en', {
    monthsShort : {
        format: String[],
        standalone : String[]
    }
});
// Desde 2.8.1 a 2.11.2
moment.locale('en', {
    monthsShort : String[]
});
moment.locale('en', {
    monthsShort : Function
});

// Obsoleto en 2.8.1
moment.lang('en', {
    monthsShort : String[]
});
moment.lang('en', {
    monthsShort : Function
});
```

`Locale#monthsShort` debe ser un array de abreviaturas de meses.

```javascript {filename="JavaScript"}
moment.updateLocale('en', {
    monthsShort : [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]
});
```

Al igual que `Locale#months`, `Locale#monthsShort` también puede ser una función de devolución de llamada.

{{< content-ads/middle-banner-4 >}}

```javascript {filename="JavaScript"}
moment.updateLocale('en', {
    monthsShort : function (momentToFormat, format) {
        if (/^MMMM/.test(format)) {
            return nominative[momentToFormat.month()];
        } else {
            return subjective[momentToFormat.month()];
        }
    }
});
```

**Nota:** A partir de la versión **2.11.0**, al igual que `Locale#months`, `Locale#monthsShort` puede ser un objeto con casos `standalone` y `format`.

```javascript {filename="JavaScript"}
moment.updateLocale('en', {
    monthsShort : {
        format: 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_'),
        standalone: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_')
    }
});
```

## Nombres de días de la semana {#weekday-names}

```javascript {filename="Firma del método"}
// Desde la versión 2.12.0 en adelante
moment.updateLocale('en', {
    weekdays : String[]
});
moment.updateLocale('en', {
    weekdays : Function
});
moment.updateLocale('en', {
    weekdays : {
        standalone : String[],
        format : String[],
        isFormat : RegExp
    }
});
// Desde la versión 2.11.0
moment.locale('en', {
    weekdays : {
        standalone : String[],
        format : String[],
        isFormat : Boolean
    }
});
// Desde la versión 2.8.1 a 2.11.2
moment.locale('en', {
    weekdays : String[]
});
moment.locale('en', {
    weekdays : Function
});

// Obsoleto en 2.8.1
moment.lang('en', {
    weekdays : String[]
});
moment.lang('en', {
    weekdays : Function
});
```

`Locale#weekdays` debe ser un array de los nombres de los días de la semana.

```javascript {filename="JavaScript"}
moment.updateLocale('en', {
    weekdays : [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ]
});
```

{{< content-ads/middle-banner-5 >}}

`Locale#weekdays` también puede ser una función de devolución de llamada.

```javascript {filename="JavaScript"}
moment.updateLocale('en', {
    weekdays : function (momentToFormat, format) {
        return weekdays[momentToFormat.day()];
    }
});
```

**Nota:** Desde la versión **2.11.0** también se pueden pasar casos de format/standalone. `isFormat` se usará contra la cadena de formato completo para determinar qué formato usar.

```javascript {filename="JavaScript"}
moment.updateLocale('en', {
    weekdays : {
        standalone: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
        format: 'Воскресенье_Понедельник_Вторник_Среду_Четверг_Пятницу_Субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    }
});
```

{{< content-ads/bottom-banner >}}
