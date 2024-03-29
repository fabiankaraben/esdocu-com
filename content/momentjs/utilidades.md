---
linkTitle: Utilidades
weight: 10
title: Todas las utilidades de Moment.js · Moment.js en Español
description: Moment expone algunos métodos que pueden ser útiles para las personas que amplían la biblioteca o escriben parsers personalizados.
noindex: true
---

# Utilidades de Moment.js

Moment expone algunos métodos que pueden ser útiles para las personas que amplían la biblioteca o escriben parsers personalizados.

{{< content-ads/top-banner >}}

## Normalizar unidades {#normalize-units}

```javascript {filename="Firma del método"}
moment.normalizeUnits(String);
```

Muchas de las funciones de Moment permiten al invocador pasar alias para enumeraciones de unidades. Por ejemplo, todos los `get`s siguientes son equivalentes.

```javascript {filename="JavaScript"}
var m = moment();
m.get('y');
m.get('year');
m.get('years');
```

Si estás ampliando la biblioteca, es posible que desees acceder a las instalaciones de Moment para alinear mejor tu funcionalidad con la de Moment.

```javascript {filename="JavaScript"}
moment.normalizeUnits('y');      // 'year'
moment.normalizeUnits('Y');      // 'year'
moment.normalizeUnits('year');   // 'year'
moment.normalizeUnits('years');  // 'year'
moment.normalizeUnits('YeARS');  // 'year'
```

## Objetos Moment no válidos {#invalid}

```javascript {filename="Firma del método"}
moment.invalid(Object);
```

Puedes crear tus propios objetos Moment no válidos, lo cual resulta útil para crear tu propio analizador (parser).

```javascript {filename="JavaScript"}
var m = moment.invalid();
m.isValid();                      // false
m.format();                       // 'Invalid date'
m.parsingFlags().userInvalidated; // true
```

`invalid` también acepta un objeto que especifica qué indicadores de análisis establecer. Esto *no* establecerá el indicador de análisis `userInvalidated` a menos que sea una de las propiedades especificadas.

```javascript {filename="JavaScript"}
var m = moment.invalid({invalidMonth: 'Actober'});
m.parsingFlags().invalidMonth; // 'Actober'
```

No es necesario especificar indicadores de análisis reconocidos por Moment; No obstante, el Moment no será válido y las banderas de análisis serán devueltas por `parsingFlags()`.

{{< content-ads/bottom-banner >}}
