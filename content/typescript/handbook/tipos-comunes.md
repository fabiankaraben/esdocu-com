---
linkTitle: "Tipos cotidianos"
title: "Tipos más comunes - TypeScript en Español"
description: "Los tipos primitivos del lenguaje JavaScript y TypeScript."
weight: 3
type: docs
---

# Tipos cotidianos de TypeScript

En este capítulo, cubriremos algunos de los tipos de valores más comunes que encontrarás en el código JavaScript y explicaremos las formas correspondientes de describir esos tipos en TypeScript.
Esta no es una lista exhaustiva y los capítulos futuros describirán más formas de nombrar y utilizar otros tipos.

Los tipos también pueden aparecer en muchos más *lugares* que solo anotaciones de tipo.
A medida que aprendamos sobre los tipos en sí, también aprenderemos sobre los lugares donde podemos referirnos a estos tipos para formar nuevas construcciones.

Comenzaremos revisando los tipos más básicos y comunes que puedes encontrar al escribir código JavaScript o TypeScript.
Estos formarán más adelante los componentes básicos de tipos más complejos.

## Los tipos primitivos: `string`, `number` y `boolean` {#the-primitives-string-number-and-boolean}

JavaScript tiene tres tipos [primitivos ↗](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) de uso muy común: `string`, `number` y `boolean`.
Cada uno tiene un tipo correspondiente en TypeScript.
Como es de esperar, estos son los mismos nombres que verías si usaras el operador `typeof` de JavaScript en un valor de esos tipos:

- `string` representa valores de cadena como `"Hello, world"`
- `number` es para números como `42`. JavaScript no tiene un valor de tiempo de ejecución especial para números enteros, por lo que no existe un equivalente a `int` o `float`: todo es simplemente `number`.
- `boolean` es para los dos valores `true` y `false`.

> Los nombres de tipo `String`, `Number` y `Boolean` (que comienzan con letras mayúsculas) son legales, pero se refieren a algunos tipos integrados especiales que muy raramente aparecerán en tu código. *Siempre* utiliza `string`, `number` o `boolean` para los tipos.
>

## Tipos para el contenido de Arrays {#arrays}

Para especificar el tipo de un array como `[1, 2, 3]`, puedes usar la sintaxis `number[]`; esta sintaxis funciona para cualquier tipo (por ejemplo, `string[]` es un array de cadenas, etc.).
También puedes ver esto escrito como `Array<number>`, que significa lo mismo.
Aprenderemos más sobre la sintaxis `T<U>` cuando cubramos *generics*.

> Ten en cuenta que `[number]` es una cosa diferente; consulta la sección sobre [Tuples ↗](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types).
>

## El tipo especial `any` {#any}

TypeScript también tiene un tipo especial, `any`, que puedes usar siempre que no quieras que un valor en particular cause errores de verificación de tipo.

Cuando un valor es de tipo `any`, puedes acceder a cualquier propiedad del mismo (que a su vez será de tipo `any`), llamarlo como una función, asignarlo a (o desde) un valor de cualquier tipo, o prácticamente cualquier otra cosa que sea sintácticamente legal:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/DYUwLgBA9gRgVgLggQwHYE8IF4IG8IAeSADBAL4DcAsAFAD0dEAclKiNAGYRgAW7HUYMCgB3AJaoA5hGASQAZ04QAxlAAm7cUO48ATqJVQAtgAcxoXRBC79u+QDpaDCAFV5E6QAM06TxDVi8sgwoIrI2hwArrq81tzoJuzKfMoA1h4ANCioahBikIEo8vKRRiBqTozoUJEQqagGsVaoAG5i+qhlqJAw4GBxvGgQACoJIADKyrpiJmCONLBw9gJQABQAlNQL8Btbi-YwyJY4AIzExHvw2BAARHxCUDdbqqjykKhIqKW9x9DwFEA)

```ts
let obj: any = { x: 0 };
// Ninguna de las siguientes líneas de código generará errores de compilación.
// El uso de `any` desactiva todas las comprobaciones de tipos adicionales y
// se supone que conoces el entorno mejor que TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

El tipo `any` es útil cuando no quieres escribir un tipo largo solo para convencer a TypeScript de que una línea de código en particular está bien.

### El indicador `noImplicitAny` {#noimplicitany}

Cuando no especificas un tipo y TypeScript no puede inferirlo del contexto, el compilador generalmente usará de manera predeterminada `any`.

Normalmente querrás evitar esto porque `any` no es un tipo comprobado.
Utiliza el indicador del compilador [`noImplicitAny` ↗](https://www.typescriptlang.org/tsconfig#noImplicitAny) para marcar cualquier `any` implícito como un error.

## Anotaciones de tipado en variables {#type-annotations-on-variables}

Cuando declaras una variable usando `const`, `var` o `let`, opcionalmente puedes agregar una anotación de tipo para especificar explícitamente el tipo de la variable:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/DYUwLgBAtgngcgQyiAXBAzmATgSwHYDmEAvBAEQCCwOAxiGQNwCwAUAPRsRfdcB6-A-hAAqMAA4gICPHgD2YBGByy8QA)

```ts
let myName: string = "Alice";
```

> TypeScript no usa declaraciones de estilo "tipos a la izquierda" como `int x = 0;`
> Las anotaciones de tipo siempre irán *después* de lo que está siendo tipado.
>

En la mayoría de los casos, sin embargo, esto no es necesario.
Siempre que es posible, TypeScript intenta *inferir* automáticamente los tipos en tu código.
Por ejemplo, el tipo de una variable se infiere en función del tipo de su inicializador:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEDkHtQFwTwA4FNQEMB27I1TAlpOqOkkgCbmgC0VoA5ALZzioNJ2h7oBmSATn0qoAzrEQo6wmHy4BzOgFgAUABskMUExZtQAXlAAiAIIq8AYyQGA3EA)

```ts
// No se necesita anotación de tipo: 'myName' se infiere de tipo 'string'
let myName = "Alice";
```

En su mayor parte, no necesitas aprender explícitamente las reglas de inferencia.
Si estás empezando, intenta utilizar menos anotaciones de tipo de las que crees que necesitas; te sorprenderá saber cuántas necesitas para que TypeScript comprenda completamente lo que está sucediendo.

## Tipos en Funciones {#functions}

Las funciones son el medio principal para pasar datos en JavaScript.
TypeScript te permite especificar los tipos de valores de entrada y salida de funciones.

### Anotaciones de tipo de parámetros {#parameter-type-annotations}

Cuando declaras una función, puedes agregar anotaciones de tipo después de cada parámetro para declarar qué tipos de parámetros acepta la función.
Las anotaciones de tipo de parámetro van después del nombre del parámetro:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAUEMCdIWwKYBcHVEgngBwaSA7fAeyUiQEsj8BYAKADMBXfAYwqtAHNoFkAKfPAQAuUAGck0cvk4BKUAG86oUCBXqNm9QD1de3ctAsqYogBsEAOjNFOfAEQAJBGZsAaUPdABqUIMSWSEQAqlg40ADCkGIIfPK+9gCEifayANx0AL5AA)

```ts
// Anotación de tipo de parámetro
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

Cuando un parámetro tiene una anotación de tipo, se verificarán los argumentos de esa función:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAsAFAAmkAxgDYCG0koAZgK4B2pALgJZxOgDmNkrABRNKAW0ipEraOyY8AlKgBucdkQDchEKAC0e0g1Z6dWsAHU4DckVAAjWpVDRmHcaBjxoodnXcAPMkNIIgBCQj5IAUEsNHl1IA)

```ts
// ¡Sería un error de ejecución si se ejecutara!
greet(42);
```

```text {filename="Error generado"}
Argument of type 'number' is not assignable to parameter of type 'string'.
```

> Incluso si no tienes anotaciones de tipo en tus parámetros, TypeScript aún verificará que hayas pasado la cantidad correcta de argumentos.
>

### Anotaciones de tipo de retorno {#return-type-annotations}

También puedes agregar anotaciones de tipo de retorno.
Las anotaciones de tipo de retorno aparecen después de la lista de parámetros:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAcwKZQGIEMBucBOMUqAciALYBGq+AFAJQBciYF1+iA3gLABQiiAPSCBoseIliAejNky+A-OhD4kAJgBsAbj4BfIA)

```ts
function getFavoriteNumber(): number {
  return 26;
}
```

Al igual que las anotaciones de tipo variable, generalmente no necesitas una anotación de tipo de retorno porque TypeScript inferirá el tipo de retorno de la función en función de sus declaraciones `return`.
La anotación de tipo en el ejemplo anterior no cambia nada.
Algunas bases de código especificarán explícitamente un tipo de devolución con fines de documentación, para evitar cambios accidentales o simplemente por preferencia personal.

#### Funciones que devuelven Promises {#functions-which-return-promises}

Si quieres anotar el tipo de retorno de una función que devuelve una promesa, debes usar el tipo `Promise`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/IYZwngdgxgBAZgV2gFwJYHsIwOYFNkBiwAbugE6rK4ByCAtgEa5kAUAlAFwwAKZ6dqELgA8EekzIA+GAG8AsACgYMMvgRksAJgBsAbkUBfIA)

```ts
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```

### Funciones Anónimas {#anonymous-functions}

Las funciones anónimas son un poco diferentes de las declaraciones de funciones.
Cuando una función aparece en un lugar donde TypeScript puede determinar cómo se llamará, los parámetros de esa función reciben tipos automáticamente.

Aquí tienes un ejemplo:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYMEYCwAoAYzgDtEAXUEgQwFtJFQBeUAbQCIBBAGwEtDI7ADSh2AITgAjYaICiAN0EBdANwECIUAGFS5SAA9yAV2rdQ5AJ4AHXiQDmoAGYInRkoXK9SoALSgr1NB0kHrQoIy2jjDQkAAm5nCgABbUiubWkOHk0LZ2BDT0iAB0ztCy1IRJABSObh5eJKBViACUoADeBKCgxGRw3JBF3HB2zUXkcACqVlYwWtSIkFUtLWr4AL6r6viaOiR6hiZmljb2oKaIidQzfAwJ57BwAO6u7p6kiPnBxaXllVXNNpMAB8HS6PQ+-UGw1GxQm01m0Hmi2WWw2qyAA)

```ts
const names = ["Alice", "Bob", "Eve"];
 
// Tipado contextual para función: se infiere que los parámetros tienen tipo string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// El tipado contextual también se aplica a las funciones de flecha
names.forEach((s) => {
  console.log(s.toUpperCase());
});
```

Aunque el parámetro `s` no tenía una anotación de tipo, TypeScript usó los tipos de la función `forEach`, junto con el tipo inferido del array, para determinar el tipo que `s` tendrá.

Este proceso se llama *tipificación contextual* porque el *contexto* en el que ocurrió la función informa qué tipo debe tener.

Similar a las reglas de inferencia, no necesitas aprender explícitamente cómo sucede esto, pero comprender que *sucede* puede ayudarte a darte cuenta cuando las anotaciones de tipo no son necesarias.
Más adelante veremos más ejemplos de cómo el contexto en el que ocurre un valor puede afectar su tipo.

## Tipos de Objetos {#object-types}

Aparte de las primitivas, el suerte de tipo más común que encontrarás es un *object type*.
Esto se refiere a cualquier valor de JavaScript con propiedades, ¡que son casi todas!
Para definir un tipo de objeto, simplemente enumeramos sus propiedades y sus tipos.

Por ejemplo, aquí tienes una función que toma un objeto puntual:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEBUAsFNQBwIYCcEFtoBdpIOQGdQMBPOWBAO3IHsMEMBLK80egi0KgIwCtoBjDIRLQAsACgAZgFdyAxszhJ65DAGEqVJABMAFHAwAuUAG9QADyPkpqTtgDcoIpeu2koAL4BKE+NCgQfoFBwSF+AHoRkVHRMZG+oHxMeFQANtAAdClUAOY6AERQsImaWsp00PjmoABuCClSsKygeaAA1PAY6WaedvGJ5MlpmTn5hQka2mVYlUQ1dQ0sBC3t+ulEPeLu4orKahO6phagAMwANI5GAOwePUA)

```ts
// La anotación de tipo del parámetro es un tipo de objeto.
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

Aquí, anotamos el parámetro con un tipo con dos propiedades, `x` e `y`, que son ambas del tipo `number`.
Puedes usar `,` o `;` para separar las propiedades, y el último separador es opcional de cualquier manera.

La parte del tipo de cada propiedad también es opcional.
Si no especificas un tipo, se asumirá que es `any`.

### Propiedades opcionales {#optional-properties}

Los tipos de objetos también pueden especificar que algunas o todas sus propiedades sean *opcionales*.
Para hacer esto, agrega un `?` después del nombre de la propiedad:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABABwE4zFAcgQwLYCmAFHAEYBWAXIgN6LAyoDOU1L6YA5gNyIA2OFgH42UDp0QBfAJS0AsAChEiAPQrEAOi2LJitYgBCcKAAtEAeQDSitBmz5idBs1aIAREdJup07jY72hEROjCzUbgCCfDAQBG4ANPyCrpHRTEwI3jLcQA)

```ts
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Ambos OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

En JavaScript, si accedes a una propiedad que no existe, obtendrás el valor `undefined` en lugar de un error de tiempo de ejecución.
Debido a esto, cuando *leas* una propiedad opcional, tendrás que verificar si es `undefined` antes de usarla.

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygIwA4AMAWDBYAKADMBXAOwGMAXASznNAAdpbzqA5AQwFtIAKOACMAVqgDeoYrSTVUiaq3IBzANygANlwUB+eYrbLQAXwCUocUVCgQoAKKwEoALSgetZQAtqoStG2eoLTEoADkwiIAdFoKoaAA7trkoT4scAButAAmkFkAhFa+DIhwGpDRcMqCotHa1JHUcACqTEwwAMLaAqamqoXBoNVRMT55ALxjoBQ50uS55paE1ta2APIA0oXWlMWl5RqVQ7UKDc2tHV38PX1LJkSFtgCCoIhcxJCgXBrUMORcdOkPqREIY3HActBGAApLjpLgAZT8tCYPkQAE92FwAB7IQo7cglMoVKoRY7UHSnFptaCdRDdXpEYxAA)

```ts
function printName(obj: { first: string; last?: string }) {
  // Error: ¡puede fallar si no se proporciona 'obj.last'!
  console.log(obj.last.toUpperCase());
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // Una alternativa segura que utiliza la sintaxis moderna de JavaScript:
  console.log(obj.last?.toUpperCase());
}
```

```text {filename="Error generado"}
'obj.last' is possibly 'undefined'.
```

## Tipos de uniones {#union-types}

El sistema de tipos de TypeScript te permite crear nuevos tipos a partir de los existentes utilizando una gran variedad de operadores.
Ahora que sabemos cómo escribir algunos tipos, es hora de comenzar a *combinarlos* de maneras interesantes.

### Definiendo un tipo de unión {#defining-a-union-type}

La primera forma de combinar tipos que puedes ver es un tipo *union*.
Un tipo de unión es un tipo formado a partir de dos o más tipos diferentes, que representan valores que pueden ser *cualquiera* de esos tipos.
Nos referimos a cada uno de estos tipos como los *miembros* de la unión.

Escribamos una función que pueda operar con cadenas o números:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAsAFABmArgHYDGALgJZxmgAO0NZVAkgCYAUNnqZEgFsARjFAAfUIiosyAcwCUoAN6FQoCvURwANpAB0uuPO4AiAJpwS0UOwAioGilBnQAaiedFAbkIBfQhBQAHkAaUJmVg4eAEYABljfILBwyLkY8zR4tDNkgmCAUVgEdOiubhVQIQBPB1Q0TCw0UH9fIA)

```ts
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
```

```text {filename="Error generado"}
Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
```

### Trabajar con tipos de uniones {#working-with-union-types}

Es fácil *proporcionar* un valor que coincida con un tipo de unión; simplemente proporciona un tipo que coincida con cualquiera de los miembros de la unión.
Si *tienes* un valor de tipo unión, ¿cómo trabajas con él?

TypeScript solo permitirá una operación si es válida para *todos* los miembros de la unión.
Por ejemplo, si tienes la unión `string | number`, no puedes usar métodos que solo están disponibles en `string`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYME4CwAoAMwFcA7AYwBcBLOU0AB2mtMoEkATACmo9VOIBbAEYxQAH1CJKzUgHMAlKADeBUKHJ1EcADaQAdDrhyeHfZTgBVBgxgBhAIaJIXBQoDcBAL5A)

```ts
function printId(id: number | string) {
  console.log(id.toUpperCase());
}
```

```text {filename="Error generado"}
Property 'toUpperCase' does not exist on type 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'.
```

La solución es *estrechar* (narrow) la unión con código, igual que lo harías en JavaScript sin anotaciones de tipo.
El *estrechamiento* ocurre cuando TypeScript puede deducir un tipo más específico para un valor basado en la estructura del código.

Por ejemplo, TypeScript sabe que solo un valor `string` tendrá un valor `typeof` igual a `"string"`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABABwE4zFAkgEwBQw4BciYIAtgEYCmqiAPogM5TpgDmAlIgN4CwAKESIYwRHigBPZNThjCiALzLEAIhZt2q7vyHDEAegOIsSKAAsYTRJVQBDSOYA0InCOtzEUmYgDkGjHZfQX1ECAQmOAAbagA6KLh2AhxYqDgAVWQZVABhOyZqPE5OAG4QxABfRGoogt5y4SNEAAlaahcFK0RPb2o-MipaYL1hcLBImPjE5NLyisEKoA)

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    // En esta rama, la identificación es de tipo 'string'
    console.log(id.toUpperCase());
  } else {
    // Aquí, id es de tipo 'number'
    console.log(id);
  }
}
```

Otro ejemplo es usar una función como `Array.isArray`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAdwKYBsJwLaoAqpwAO6qAFAB4BciAzlAE4xgDmA2gLqIA+djzLAJSIA3gFgAUIkQxgiMgEEGDAIYBPAHQxaS1WsqDh4qdMQB6M4gASqBqhoByCg5m1ED+k1acHk04iwwWjhSDXQ4FjIAIht0cIAaRCjEAGpECg0AKzhmaMQVMAATJMMAbj9EAF9EDFpUUQrpC2tbe3dnV3dPAV8TaUDg0PDIqIB1DCxcRHCwesYVADcMWyTU9MFyk0rJSqA)

```ts
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Aquí: 'x' es 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Aquí: 'x' es 'string'
    console.log("Welcome lone traveler " + x);
  }
}
```

Observa que en la rama `else`, no necesitamos hacer nada especial; si `x` no era un `string[]`, entonces debe haber sido un `string`.

A veces tendrás una unión donde todos los miembros tienen algo en común.
Por ejemplo, tanto los arrays como las cadenas tienen un método `slice`.
Si cada miembro de una unión tiene una propiedad en común, puedes usar esa propiedad sin estrechar:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAECUFMBcFcCcB2poE8AOlQEsDOPEAzSeeSAE1AEN9FYBbAIxIG0BdUAH1F2nm0QBzALAAoQrEQBjaNgD2yQTABi2eLwAqACzKQAFAA8AXKDpNWHbr35CAlKADeY0KDJwkoAwDpcAG2xS+gAMADSgAMy2ANxiAL5AA)

```ts
// Return type is inferred as number[] | string
// El tipo de devolución se infiere como number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
```

> Puede resultar confuso que una *unión* de tipos parezca tener la *intersección* de las propiedades de esos tipos.
> Esto no es un accidente: el nombre *unión* proviene de la teoría de tipos.
> La *unión* `number | string` se compone tomando la unión *de los valores* de cada tipo.
> Observa que dados dos conjuntos con hechos correspondientes sobre cada conjunto, sólo la *intersección* de esos hechos se aplica a la *unión* de los propios conjuntos.
> Por ejemplo, si tuviéramos una sala de personas altas con sombreros y otra sala de hispanohablantes con sombreros, después de combinar esas salas, lo único que sabemos sobre *cada* persona es que debe llevar sombrero.
>

## Alias de tipos {#type-aliases}

Hemos estado usando tipos de objetos y tipos de unión escribiéndolos directamente en anotaciones de tipo.
Esto es conveniente, pero es común querer usar el mismo tipo más de una vez y referirse a él con un solo nombre.

Un *alias de tipo* es exactamente eso: un *nombre* para cualquier *tipo*.
La sintaxis para un alias de tipo es:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/C4TwDgpgBACg9gSwHbCgXigbwLACgpQAeAXFEgK4C2ARhAE4DceBIpFN9TuAvl3gPT8oAUUIBDAMbAANiCjAAFtADOYytDHL5SqBDF1pCervGUw0iHgBm5JFIRwkUMHWTAAwnDh0AJgAowYFJ4NwBKLGYoCUdlOAsAOmk4AHM-ACIAFR1o7x9kMWAIAHItQigANzFpcmgELTSoAGpnYHjCUK4CaKRYhKTUzOyvX3zCkqg5Sura+qaW+JAOvG48PBc3T1y-TCJSAEYABgOAGgn9o6huDqA)

```ts
type Point = {
  x: number;
  y: number;
};
 
// Exactamente igual que el ejemplo anterior.
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

Puedes usar un alias de tipo para darle un nombre a cualquier tipo, no solo a un tipo de objeto.
Por ejemplo, un alias de tipo puede nombrar un tipo de unión:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/C4TwDgpgBAkgIlAvFAdgVwLYCMICcoA+UAzsLgJYoDmA3EA)

```ts
type ID = number | string;
```

Ten en cuenta que los alias son *solo* alias: no puedes usar alias de tipo para crear "versiones" diferentes/distintas del mismo tipo.
Cuando usas el alias, es exactamente como si hubiera escrito el tipo que representa el alias.
En otras palabras, este código puede *parecer* ilegal, pero está bien según TypeScript porque ambos tipos son alias para el mismo tipo:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwHMQMBJVAB2QwAoBKALngGcMYtUCBuAWAChRIsBCnTY8zKKizYAXiGosYjRewINmrVT14B6HfAC0RsFSMG+GAJ7kEAVSYgYZShgDKk6VjnBXmjvABeDTYObT4RTFx8Jg9ZEGcqBVZlPzVGe0cEt1ivEB9U+ABvPnh4OAxkGGicuSSYWm0AXz4+PXgAYTgoDAQoCSk44Hh2Fz4IYnhkBycKKkD+zzks6iJSWZpaBpbdfXbJDSwICHgAIwQ4AygmJiwCVDz4AHdpAAt4PpV-DBecZAIXvhTTLreYAInuj2G61BnCAA)

```ts
type UserInputSanitizedString = string;
 
function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}
 
// Crear una entrada desinfectada
let userInput = sanitizeInput(getInput());
 
// Aunque todavía se puede reasignar con una cadena
userInput = "new input";
```

## Interfaces {#interfaces}

Una *declaración de interfaz* es otra forma de nombrar un tipo de objeto:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgAoHtRmQbwLABQyyAHgFzIgCuAtgEbQDchxAnhdfU4QL6GEwqIBGGDoQyAA5QsAYXTooAEwAUksBQxYAlLhbIE4gM7oANhAB0p9AHMVAIgAqACxSHFS0HEgByI6WQANzhTKhRgf3tkAGopMAsSbWYiA2MzS2s7J1dUjy9ff1YgkLDkCOQo2PULViTefgJpOQVlFRxSCgBGAAZugBpkdmQe7uQeJKA)

```ts
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

Al igual que cuando usamos un alias de tipo arriba, el ejemplo funciona como si hubiéramos usado un tipo de objeto anónimo.
TypeScript solo se preocupa por la *estructura* del valor que pasamos a `printCoord`; solo le importa que tenga las propiedades esperadas.
Preocuparnos únicamente por la estructura y capacidades de los tipos es la razón por la que llamamos a TypeScript un sistema de tipos *estructuralmente tipificado*.

### Diferencias entre alias de tipo e interfaces {#differences-between-type-aliases-and-interfaces}

Los alias de tipo y las interfaces son muy similares y en muchos casos puedes elegir entre ellos libremente.
Casi todas las características de una `interface` están disponibles en `type`, la distinción clave es que un tipo no se puede volver a abrir para agregar nuevas propiedades frente a una interfaz que siempre es extensible.

|`Interface`|`Type`|
|---|---|
|Ampliar una interfaz<br><div class="code-block relative mt-6 first:mt-0 group/code"><pre><code><br>interface Animal {<br>  name: string;<br>}<br>interface Bear extends Animal {<br>  honey: boolean;<br>}<br>const bear = getBear();<br>bear.name;<br>bear.honey;<br>        </code></pre></div>|Extender un tipo mediante intersecciones<br><div class="code-block relative mt-6 first:mt-0 group/code"><pre><code><br>type Animal = {<br>  name: string;<br>}<br>type Bear = Animal & { <br>  honey: boolean;<br>}<br>const bear = getBear();<br>bear.name;<br>bear.honey;<br>        </code></pre></div>|
|Agregar nuevos campos a una interfaz existente<br><div class="code-block relative mt-6 first:mt-0 group/code"><pre><code><br>interface Window {<br>  title: string;<br>}<br>interface Window {<br>  ts: TypeScriptAPI;<br>}<br>const src = 'const a = "Hello World"';<br>window.ts.transpileModule(src, {});<br>        </code></pre></div>|Un tipo no se puede cambiar después de haber sido creado<br><div class="code-block relative mt-6 first:mt-0 group/code"><pre><code><br>type Window = {<br>  title: string;<br>}<br>type Window = {<br>  ts: TypeScriptAPI;<br>}<br> // Error: Duplicate identifier 'Window'.<br>        </code></pre></div>|

Aprenderás más sobre estos conceptos en capítulos posteriores, así que no te preocupes si no los entiendes todos de inmediato.

- Antes de la versión 4.2 de TypeScript, los nombres de alias de tipos [*podían* aparecer en mensajes de error ↗](https://www.typescriptlang.org/play?#code/PTAEGEHsFsAcEsA2BTATqNrLusgzngIYDm+oA7koqIYuYQJ56gCueyoAUCKAC4AWHAHaFcoSADMaQ0PCG80EwgGNkALk6c5C1EtWgAsqOi1QAb06groEbjWg8vVHOKcAvpokshy3vEgyyMr8kEbQJogAFND2YREAlOaW1soBeJAoAHSIkMTRmbbI8e6aPMiZxJmgACqCGKhY6ABGyDnkFFQ0dIzMbBwCwqIccabcYLyQoKjIEmh8kwN8DLAc5PzwwbLMyAAeK77IACYaQSEjUWZWhfYAjABMAMwALA+gbsVjoADqgjKESytQPxCHghAByXigYgBfr8LAsYj8aQMUASbDQcRSExCeCwFiIQh+AKfAYyBiQFgOPyIaikSGLQo0Zj-aazaY+dSaXjLDgAGXgAC9CKhDqAALxJaw2Ib2RzOISuDycLw+ImBYKQflCkWRRD2LXCw6JCxS1JCdJZHJ5RAFIbFJU8ADKC3WzEcnVZaGYE1ABpFnFOmsFhsil2uoHuzwArO9SmAAEIsSFrZB-GgAjjA5gtVN8VCEc1o1C4Q4AGlR2AwO1EsBQoAAbvB-gJ4HhPgB5aDwem-Ph1TCV3AEEirTp4ELtRbTPD4vwKjOfAuioSQHuDXBcnmgACC+eCONFEs73YAPGGZVT5cRyyhiHh7AAON7lsG3vBggB8XGV3l8-nVISOgghxoLq9i7io-AHsayRWGaFrlFauq2rg9qaIGQHwCBqChtKdgRo8TxRjeyB3o+7xAA), a veces en lugar del tipo anónimo equivalente (que puede ser deseable o no). Las interfaces siempre se nombrarán en los mensajes de error.
- Los alias de tipo no pueden participar [en la fusión de declaraciones, pero las interfaces sí ↗](https://www.typescriptlang.org/play?#code/PTAEEEDtQS0gXApgJwGYEMDGjSfdAIx2UQFoB7AB0UkQBMAoEUfO0Wgd1ADd0AbAK6IAzizp16ALgYM4SNFhwBZdAFtV-UAG8GoPaADmNAcMmhh8ZHAMMAvjLkoM2UCvWad+0ARL0A-GYWVpA29gyY5JAWLJAwGnxmbvGgALzauvpGkCZmAEQAjABMAMwALLkANBl6zABi6DB8okR4Jjg+iPSgABboovDk3jjo5pbW1d6+dGb5djLwAJ7UoABKiJTwjThpnpnGpqPBoTLMAJrkArj4kOTwYmycPOhW6AR8IrDQ8N04wmo4HHQCwYi2Waw2W1S6S8HX8gTGITsQA).
- Las interfaces solo pueden usarse para [declarar las formas de los objetos, no cambiar el nombre de las primitivas ↗](https://www.typescriptlang.org/play?#code/PTAEAkFMCdIcgM6gC4HcD2pIA8CGBbABwBtIl0AzUAKBFAFcEBLAOwHMUBPQs0XFgCahWyGBVwBjMrTDJMAshOhMARpD4tQ6FQCtIE5DWoixk9QEEWAeV37kARlABvaqDegAbrmL1IALlAEZGV2agBfampkbgtrWwMAJlAAXmdXdy8ff0Dg1jZwyLoAVWZ2Lh5QVHUJflAlSFxROsY5fFAWAmk6CnRoLGwmILzQQmV8JmQmDzI-SOiKgGV+CaYAL0gBBdyy1KCQ-Pn1AFFplgA5enw1PtSWS+vCsAAVAAtB4QQWOEMKBuYVUiVCYvYQsUTQcRSBDGMGmKSgAAa-VEgiQe2GLgKQA).
- Los nombres de las interfaces [*siempre* aparecerán en su forma original ↗](https://www.typescriptlang.org/play?#code/PTAEGEHsFsAcEsA2BTATqNrLusgzngIYDm+oA7koqIYuYQJ56gCueyoAUCKAC4AWHAHaFcoSADMaQ0PCG80EwgGNkALk6c5C1EtWgAsqOi1QAb06groEbjWg8vVHOKcAvpokshy3vEgyyMr8kEbQJogAFND2YREAlOaW1soBeJAoAHSIkMTRmbbI8e6aPMiZxJmgACqCGKhY6ABGyDnkFFQ0dIzMbBwCwqIccabcYLyQoKjIEmh8kwN8DLAc5PzwwbLMyAAeK77IACYaQSEjUWY2Q-YAjABMAMwALA+gbsVjNXW8yxySoAADaAA0CCaZbPh1XYqXgOIY0ZgmcK0AA0nyaLFhhGY8F4AHJmEJILCWsgZId4NNfIgGFdcIcUTVfgBlZTOWC8T7kAJ42G4eT+GS42QyRaYbCgXAEEguTzeXyCjDBSAAQSE8Ai0Xsl0K9kcziExDeiQs1lAqSE6SyOTy0AKQ2KHk4p1V6s1OuuoHuzwArMagA) en mensajes de error, pero *solo* cuando se usan por nombre.

En su mayor parte, puedes elegir según tus preferencias personales, y TypeScript te dirá si necesita algo para ser el otro tipo de declaración. Si deseas una heurística, usa `interface` hasta que necesites usar características de `type`.

## Aserciones de Tipos {#type-assertions}

A veces tendrás información sobre el tipo de valor que TypeScript no puede conocer.

Por ejemplo, si estás usando `document.getElementById`, TypeScript solo sabe que esto devolverá *algún* tipo de `HTMLElement`, pero es posible que sepas que tu página siempre tendrá un `HTMLCanvasElement` con un ID determinado.

En esta situación, puedes usar una *aserción de tipo* para especificar un tipo más específico:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/MYewdgzgLgBAtgTwMIEMwDcURgXhgExGAFc4BTMKAOgHMyoBRAGzPMoCEEBJfACgCI4KAJZgA+sDSYI-AJQwsMABIAVALIAZVBizNWFKAG4gA)

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

Al igual que una anotación de tipo, el compilador elimina las aserciones de tipo y no afectarán el comportamiento de ejecución de tu código.

También puedes usar la sintaxis de corchetes angulares (excepto si el código está en un archivo `.tsx`), que es equivalente:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/MYewdgzgLgBAtgTwMIEMwDcURgXhgHgAkAVAWQBlUMsBRAGwFM4GwoA+AExGAFdnWAdAHMGUekxZQAQggCSHABQAiOCgCWYAPrA0mCEoCUAbiA)

```ts
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

> Recordatorio: Debido a que las aserciones de tipo se eliminan en tiempo de compilación, no hay verificación en tiempo de ejecución asociada con una aserción de tipo.
> No se generará una excepción o `null` si la afirmación del tipo es incorrecta.
>

TypeScript solo permite afirmaciones de tipo que se convierten a una versión *más específica* o *menos específica* de un tipo.
Esta regla previene coacciones "imposibles" como:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYCsaCwAoAYzgDtEAXUAD1AF5QAiAC0gBtW4HQBDRUEgK4BbAEYwA3EA)

```ts
const x = "hello" as number;
```

```text {filename="Error generado"}
Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
```

A veces esta regla puede ser demasiado conservadora y no permitirá coacciones más complejas que podrían ser válidas.
Si esto sucede, puedes usar dos aserciones, primero para `any` (o `unknow`, que presentaremos más adelante), luego para el tipo deseado:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEYD2A7AzgF3iAHgBxgC54oUBPAbgFgAoDMvBAFXgF54BvE4gRgvgBGxAEz8wxAMzwAvtRoB6efAC0qsAFcMq5bWTosUNtnwwSaEuTPwmFIA)

```ts
const a = expr as any as T;
```

## Tipos literales {#literal-types}

Además de los tipos generales `string` y `number`, podemos referirnos a cadenas y números *específicos* en posiciones de tipo.

Una forma de pensar en esto es considerar cómo JavaScript viene con diferentes formas de declarar una variable. Tanto `var` como `let` permiten cambiar lo que se contiene dentro de la variable, y `const` no. Esto se refleja en cómo TypeScript crea tipos para literales.

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/DYUwLgBAxgFghgOwOYEtkGUwCc1IgXggCIAJEYYAewgHVKtgATIgbgFgAoWRVDbXAsQDywAIcQAsgFcEjSq04B6RRABCIKHCkBnEBAAG3ZLkw5k+6IghYQABxu6EkRAE8Itytu0oARqAja-MgANBBg8GBKKijaEDCUAO4QACoutiDoUDi2kIwg2lm++RAokGhhMHpgaXraLoEgALacRrxIprjsHMoQAHoA-JwtlAiB0COBiGAdyIKk5FS09EwK3Srqmjp6hhNgUzNIFpoIECPAbjb2+SBOEACM7p7efrVBSKGlUXFwsXAQwKUQFg4MAwjVrHYHDc9mAUCNhqM9k4Dl0egMgA)

```ts
let changingString = "Hello World";
changingString = "Olá Mundo";
// Debido a que `changingString` puede representar cualquier cadena 
// posible, así es como TypeScript la describe en el sistema de tipos.
changingString;
      
let changingString: string
 
const constantString = "Hello World";
// Debido a que `constantString` solo puede representar 1 cadena posible, tiene una representación de tipo literal
constantString;
      
const constantString: "Hello World"
```

Por sí solos, los tipos literales no son muy valiosos:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGY1oLACgAbSAF1AA9UAiAC0gILktAF5Qa6HKBufEUAeQDS+Miza16jHnj4A6eSLE04AdwAmAT25A)

```ts
let x: "hello" = "hello";
// OK
x = "hello";
// ...
x = "howdy";
```

```text {filename="Error generado"}
Type '"howdy"' is not assignable to type '"hello"'.
```

¡No sirve de mucho tener una variable que solo puede tener un valor!

Pero al *combinar* literales en uniones, puedes expresar un concepto mucho más útil - por ejemplo, funciones que solo aceptan un cierto conjunto de valores conocidos:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAsAFABmArgHYDGALgJZxmgAO0NZVAKpAB5UAUKoRFRZkA5gBpQAQwA2NUWQC2kNqgBEMyESprQAH1BqWogBY79hiiqow1ASlABvQqFAhQAOi+EAvoWasHNx8agASkDIycJIA7ggyACZqkhpaOnYA3P4iQTy8agDiAOQJUgCekopSNsmW1tCQ9hlAA)

```ts
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");
```

```text {filename="Error generado"}
Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
```

Los tipos literales numéricos funcionan de la misma manera:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABBOBbADgQwE4FMAUmAXIgM5TYxgDmANIgEYnmU0CUJAtAIyIA+iAAz9EvAN4BYAFCJEeKCGxJMiALzrGiAPxDEJFQD5NO3l24BuaQF8gA)

```ts
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
```

Por supuesto, puedes combinarlos con tipos no literales:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAsAFACWAdgC4wBmAhgMaSgDyADmUXCYqAN6GigB3IgBMyAC1QkArgFsARjADchAL6FKUkrTYdQtDpSIBzKdEgAKAB6oWOzqAA+oAETUpZOM4CUPPqBCgAHTBqoT6JIYmZubcgiLiqACMAAzJoCpeygThkaYWru6emWEGxnnmBR4y1Gy03opAA)

```ts
interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");
```

```text {filename="Error generado"}
Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.
```

Hay un tipo más de literal: los literales booleanos.
Solo hay dos tipos de literales booleanos y, como puedes imaginar, son los tipos `true` y `false`.
El tipo `boolean` en sí mismo es en realidad solo un alias para la unión `true | false`.

### Inferencia literal {#literal-inference}

Cuando inicializas una variable con un objeto, TypeScript asume que las propiedades de ese objeto podrían cambiar los valores más adelante.
Por ejemplo, si escribiste un código como este:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEYD2A7AzgF3mpBbEAwqsAJYYmoBc8ARkkhCFCgNwCwAUAPRfwC0AsAFcMAvp2TosSGgCt4AXngBvREiEoMIGNQAM8AL7sOJAGbwAFDnxEUpcqgCUKzvHgzZAOmQatMRfAAjMYGQA)

```ts
const obj = { counter: 0 };
if (someCondition) {
  obj.counter = 1;
}
```

TypeScript no asume que la asignación de `1` a un campo que anteriormente tenía `0` sea un error.
Otra forma de decir esto es que `obj.counter` debe tener el tipo `number`, no `0`, porque los tipos se utilizan para determinar el comportamiento de *lectura* y *escritura*.

Lo mismo se aplica a las cadenas:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAsAFAAmkAxgDYCG0koAZgK4B2pALgJZxOgAWlTRcpABKkAI4NIiVgAoG0cqmnR2TAOYAaUAFtIrHnCKoARAHEAogBVjoAD6hjABQDyAZWsBKVADc47IgDchISkXNKgNGKgALygAN6g8ooOPKysAA4oIJAAHpTa6UIAdKHaxlq6+oYmFtagAL5BBHwCQqISUrKRRUla3ZUGRB4BQA)

```ts
declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
```

```text {filename="Error generado"}
Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
```

En el ejemplo anterior, se infiere que `req.method` es `string`, no `"GET"`. Debido a que el código se puede evaluar entre la creación de `req` y la llamada de `handleRequest`, que podría asignar una nueva cadena como `"GUESS"` a `req.method`, TypeScript considera que este código tiene un error.

Hay dos formas de solucionar este problema.

1. Puedes cambiar la inferencia agregando una aserción de tipo en cualquier ubicación:
   [Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwAspVgIQAlEAR2RAGcMAKZGCALngZi1QHMAaeAFsQGAjmAcARAHEAogBUp8AD7wpABQDyAZSUBKDgDccWYAG4AsACgA9LfgBaZ2GQZnjm-fgBhInwQARjYbMDwGeDgqeABeeABveBZ2dQIMDAAHOjZ7EAAPKCEMsgA6MKEpQRExCWl5JXgoOnV65QBfKzsHP2JeBAAmG39SCmpaBkYokuTBKerxYEbm2UUpfXMgA)

  ```ts
  // Cambio 1:
  const req = { url: "https://example.com", method: "GET" as "GET" };
  // Cambio 2
  handleRequest(req.url, req.method as "GET");
  ```
   El cambio 1 significa "Tengo la intención de que `req.method` siempre tenga el *tipo literal* `"GET"`", evitando la posible asignación de `"GUESS"` a ese campo posteriormente.
   El cambio 2 significa "Sé por otras razones que `req.method` tiene el valor `"GET"`".

2. Puedes usar `as const` para convertir todo el objeto en literales de tipo:
   [Pruebe este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwAspVgIQAlEAR2RAGcMAKZGCALngZi1QHMAaeAFsQGAjmAcARAHEAogBUp8AD7wpABQDyAZSUBKDgDccWYAG4AsACgA9LfgBaZ2GQZnjm2DwN4cKvAAvPAA3vAs7OoEGBgADnRs9iAAHlBCsWQAdN5CUoIiYhLS8krwAL7wUHTw3qgMVtZEJGSUNPRM-pkRgp0F4sD65kA)

  ```ts
  const req = { url: "https://example.com", method: "GET" } as const;
  handleRequest(req.url, req.method);
  ```

El sufijo `as const` actúa como `const` pero para el sistema de tipos, asegurando que a todas las propiedades se les asigne el tipo literal en lugar de una versión más general como `string` o `number`.

## Los valores `null` y `undefined` {#null-and-undefined}

JavaScript tiene dos valores primitivos que se usan para señalar un valor ausente o no inicializado: `null` y `undefined`.

TypeScript tiene dos *tipos* correspondientes con los mismos nombres. El comportamiento de estos tipos depende de si tienes activada la opción [`strictNullChecks` ↗](https://www.typescriptlang.org/tsconfig#strictNullChecks).

### Con la opción `strictNullChecks` en `off` {#strictnullchecks-off}

Con [`strictNullChecks` ↗](https://www.typescriptlang.org/tsconfig#strictNullChecks) en *off*, aún se puede acceder a los valores que pueden ser `null` o `undefined` normalmente, y a los valores `null` y `undefined` se puede asignar a una propiedad de cualquier tipo.
Esto es similar a cómo se comportan los lenguajes sin comprobaciones de nulos (por ejemplo, C#, Java).
La falta de verificación de estos valores tiende a ser una fuente importante de errores; Siempre recomendamos que las personas activen [`strictNullChecks` ↗](https://www.typescriptlang.org/tsconfig#strictNullChecks) si es práctico hacerlo en tu código base.

### Con la opción `strictNullChecks` en `on` {#strictnullchecks-on}

Con [`strictNullChecks` ↗](https://www.typescriptlang.org/tsconfig#strictNullChecks) en `on`, cuando un valor es `null` o `undefined`, necesitarás probar esos valores antes de usar métodos o propiedades sobre ese valor.
Al igual que verificar `undefined` antes de usar una propiedad opcional, podemos usar *estrechamiento* para verificar valores que podrían ser `null`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAEzgZTgWwKZQBYxgDmAFAB4BciAzlAE6FGIA+iYIANhwJSIDeAWABQiRDGCJyiALyy2nHv2GjRAelUo4bOPkbLEAX0TYO1bEpEqICanA7YAdBzikARAAkTzgDSJXiAGpEMgcoOABVAAdI7DoAYQBDMxJubgBufQNhAyA)

```ts
function doSomething(x: string | null) {
  if (x === null) {
    // hacer nada
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```

### Operador de aserción no nulo (Postfix `!`) {#non-null-assertion-operator-postfix-}

TypeScript también tiene una sintaxis especial para eliminar `null` y `undefined` de un tipo sin realizar ninguna verificación explícita.
Escribir `!` después de cualquier expresión es efectivamente una afirmación de tipo de que el valor no es `null` o `undefined`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAGxgNwKYBECGYDmGATnCAM7ICeAFAB4D8AXImCALYBGxiAPiyMmQBKRAG8AsAChEiAPSzEAOTiJiJIlJkQEZOMgwA6ZHHx0AhAahwAYjFoYAJtSFCA3FIC+QA)

```ts
function liveDangerously(x?: number | null) {
  // Sin error
  console.log(x!.toFixed());
}
```

Al igual que otras afirmaciones de tipo, esto no cambia el comportamiento de ejecución de tu código, por lo que es importante usar `!` solo cuando sepas que el valor *no* puede ser `null` o `undefined`.

## Enums {#enums}

Las enumeraciones son una característica agregada a JavaScript por TypeScript que permite describir un valor que podría ser uno de un conjunto de posibles constantes con nombre. A diferencia de la mayoría de las funciones de TypeScript, esto *no* es una adición de nivel de tipo a JavaScript, sino algo agregado al lenguaje y al tiempo de ejecución. Debido a esto, es una característica que debes saber que existe, pero tal vez no la uses a menos que estés seguro. Puedes leer más sobre enumeraciones en la [Página de referencia de enumeraciones ↗](https://www.typescriptlang.org/docs/handbook/enums.html).

## Primitivas menos comunes {#less-common-primitives}

Vale la pena mencionar el resto de primitivas en JavaScript que están representadas en el sistema de tipos.
Aunque aquí no entraremos en profundidad.

#### La primitiva `bigint` {#bigint}

Desde ES2020 en adelante, hay una primitiva en JavaScript que se usa para enteros muy grandes, `BigInt`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEBcEMCcHMCmkBcpEGcBMAGXBYAKCJFAGFZFpIBLAO3lGlACMb57JQA3G5yABaJQAIXYBJOlwBmAVzoBjWgHs6RBaoxdViABLyAJpQNo2HKaAC8oiVIAUARhw4AlAG4iJMBSq0GTG3hJLl5+IVAAGxpIRFhoCNAMAE8paAAPdU0uaDplQVj9OiNEE1Z2TitQJxw6NyA)

```ts
// Crea un bigint mediante la función BigInt
const oneHundred: bigint = BigInt(100);
 
// Crea un BigInt mediante la sintaxis literal
const anotherHundred: bigint = 100n;
```

Puedes obtener más información sobre BigInt en [las notas de la versión de TypeScript 3.2 ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint).

#### La primitiva `symbol` {#symbol}

Hay una primitiva en JavaScript que se usa para crear una referencia global única a través de la función `Symbol()`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYBsB2AsAFADGcAdogC6gBmAlkhQHICGAtpKALygDKAnqwBGcADYAKAESk2kCQEoA3IRLkqiSCoAmLdl14Dh4qTPlKChWtVBi6DHR06PQ6rfbmgA3oVCgQoAMLMpADkVJAAbjCgABbMAA5xkKSEAL5AA)

```ts
const firstName = Symbol("name");
const secondName = Symbol("name");
 
if (firstName === secondName) {
  // Can't ever happen
}
```

```text {filename="Error generado"}
This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.
```

Puedes obtener más información sobre ellos en la [Página de referencia de símbolos ↗](https://www.typescriptlang.org/docs/handbook/symbols.html).
