---
linkTitle: "Programadores funcionales"
title: "TypeScript para programadores funcionales - TypeScript en Español"
description: "Aprende TypeScript si tiene experiencia en programación funcional."
weight: 4
type: docs
---

# TypeScript para Programadores Funcionales

TypeScript comenzó su vida como un intento de llevar los tipos tradicionales orientados a objetos a JavaScript para que los programadores de Microsoft pudieran llevar los programas tradicionales orientados a objetos a la web. A medida que se desarrolló, el sistema de tipos de TypeScript evolucionó para modelar el código escrito por usuarios nativos de JavaScript. El sistema resultante es poderoso, interesante y complejo.

Esta introducción está diseñada para programadores que trabajan en Haskell o ML y desean aprender TypeScript. Describe en qué se diferencia el sistema de tipos de TypeScript del sistema de tipos de Haskell. También describe características únicas del sistema de tipos de TypeScript que surgen de su modelado del código JavaScript.

Esta introducción no cubre la programación orientada a objetos. En la práctica, los programas orientados a objetos en TypeScript son similares a los de otros lenguajes populares con características OO.

## Requisitos previos {#prerequisites}

En esta introducción, asumo que sabes lo siguiente:

- Cómo programar en JavaScript, la parte buena.
- Escribir sintaxis de un lenguaje descendiente de C.

Si necesitas aprender las partes buenas de JavaScript, lee [JavaScript: The Good Parts ↗](https://shop.oreilly.com/product/9780596517748.do).
Es posible que puedas saltarte el libro si sabes cómo escribir programas en un lenguaje de alcance léxico de llamada por valor con mucha mutabilidad y no mucho más.
[Esquema RRS ↗](https://people.csail.mit.edu/jaffer/r4rs.pdf) es un buen ejemplo.

[El lenguaje de programación C++ ↗](http://www.stroustrup.com/4th.html) es un buen lugar para aprender sobre la sintaxis de tipos de estilo C. A diferencia de C++, TypeScript usa tipos postfix, como este: `x: string` en lugar de `string x`.

## Conceptos que existen en Haskell {#concepts-not-in-haskell}

### Tipos incorporados {#built-in-types}

JavaScript define 8 tipos integrados:

|Tipo|Explicación|
|---|---|
|`Number`|un punto flotante IEEE 754 de doble precisión.|
|`String`|una cadena UTF-16 inmutable.|
|`BigInt`|enteros en el formato de precisión arbitraria.|
|`Boolean`|`true` y `false`.|
|`Symbol`|un valor único que normalmente se utiliza como clave.|
|`Null`|equivalente al tipo de unidad.|
|`Undefined`|también equivalente al tipo de unidad.|
|`Object`|similar a records.|

[Consulta la página de MDN para obtener más detalles ↗](https://developer.mozilla.org/docs/Web/JavaScript/Data_structures).

TypeScript tiene tipos primitivos correspondientes para los tipos integrados:

- `number`
- `string`
- `bigint`
- `boolean`
- `symbol`
- `null`
- `undefined`
- `object`

#### Otros tipos importantes de TypeScript {#other-important-typescript-types}

|Tipo|Explicación|
|---|---|
|`unknown`|el tipo superior.|
|`never`|el tipo inferior.|
|object literal|por ejemplo, `{ property: Type }`|
|`void`|para funciones sin valor de retorno documentado|
|`T[]`|arrays mutables, también escritos `Array<T>`|
|`[T, T]`|tuplas, que son de longitud fija pero mutables|
|`(t: T) => U`|funciones|

Notas:

1. La sintaxis de las funciones incluye nombres de parámetros. ¡Es bastante difícil acostumbrarse a esto!

```ts
  let fst: (a: any, b: any) => any = (a, b) => a;

  // o más precisamente:

  let fst: <T, U>(a: T, b: U) => T = (a, b) => a;
  ```

2. La sintaxis del tipo literal del objeto refleja fielmente la sintaxis del valor literal del objeto:

```ts
  let o: { n: number; xs: object[] } = { n: 1, xs: [] };
  ```

3. `[T, T]` es un subtipo de `T[]`. Esto es diferente a Haskell, donde las tuplas no están relacionadas con listas.

#### Tipos boxed {#boxed-types}

JavaScript tiene equivalentes boxed de tipos primitivos que contienen los métodos que los programadores asocian con esos tipos. TypeScript refleja esto con, por ejemplo, la diferencia entre el tipo primitivo `number` y el tipo boxed `Number`. Los tipos boxed rara vez son necesarios, ya que sus métodos devuelven primitivos.

```ts
(1).toExponential();
// es equivalente a
Number.prototype.toExponential.call(1);
```

Ten en cuenta que llamar a un método en un literal numérico requiere que esté entre paréntesis para ayudar al analizador.

### Tipado gradual {#gradual-typing}

TypeScript usa el tipo `any` siempre que no puede decir cuál debería ser el tipo de una expresión. En comparación con `Dynamic`, llamar tipo `any` es una exageración. Simplemente apaga el verificador de tipos dondequiera que aparezca. Por ejemplo, puedes insertar cualquier valor en array `any[]` sin marcar el valor de ninguna manera:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEHcEsBcAtQEQDsD2BJAtgBwDaQMYwCCSAnggFygBmAhjgM4CmokSo0D+KS1kA5gDoAVgx4AaULTIMq00gG0AugChuSBtCkzQAXlDKA3CvkNBWAK4NYACgCMASmOnzV2whTxUCJyZmvrGwBvbVI4Nn4qBH4UJgYEUABfJyA)

```ts
// con "noImplicitAny": false en tsconfig.json, anys: any[]
const anys = [];
anys.push(1);
anys.push("oh no");
anys.push({ anything: "goes" });
```

Y puedes usar una expresión de tipo `any` en cualquier lugar:

```ts
anys.map(anys[1]); // oh no, "oh no" no es una función
```

`any` también es contagioso; si inicializas una variable con una expresión de tipo `any`, la variable también tiene el tipo `any`.

```ts
let sepsis = anys[0] + anys[1]; // esto puede significar cualquier cosa
```

Para obtener un error cuando TypeScript produce `any`, usa `"noImplicitAny": true` o `"strict": true` en `tsconfig.json`.

### Tipificación estructural {#structural-typing}

El tipado estructural es un concepto familiar para la mayoría de los programadores funcionales, aunque Haskell y la mayoría de los ML no están tipificados estructuralmente. Su forma básica es bastante simple:

```ts
// @strict: false
let o = { x: "hi", extra: 1 }; // ok
let o2: { x: string } = o; // ok
```

Aquí, el objeto literal `{ x: "hi", extra: 1 }` tiene un tipo literal coincidente `{ x: string, extra: number }`. Ese tipo se puede asignar a `{ x: string }` ya que tiene todas las propiedades requeridas y esas propiedades tienen tipos asignables. La propiedad adicional no impide la asignación, simplemente la convierte en un subtipo de `{ x: string }`.

Los tipos con nombre simplemente le dan un nombre a un tipo; para fines de asignabilidad, no hay diferencia entre el alias de tipo `One` y el tipo de interfaz `Two` a continuación. Ambos tienen una propiedad `p:string`. (Sin embargo, los alias de tipo se comportan de manera diferente a las interfaces con respecto a las definiciones recursivas y los parámetros de tipo).

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGY1oFABcBPAB0lAHkA7UgXlAG9QjVE9oBLCgc1AF8BuHBzwwAZgEMAxqQAqAdzj0coRs1YdOAnjgkAbMYkShpAC2iRSdJY1C0ARAAlIOnXFuacOHZDygAHqkoaehVQW2M2W14BLx88eVQ5BVpfATik0CpZI1NzAAoASj4gA)

```ts
type One = { p: string };
interface Two {
  p: string;
}
class Three {
  p = "Hello";
}
 
let x: One = { p: "hi" };
let two: Two = x;
two = new Three();
```

### Uniones {#unions}

En TypeScript, los tipos de unión no están etiquetados. En otras palabras, no son uniones discriminadas como los de `data` en Haskell. Sin embargo, a menudo es posible discriminar tipos en una unión mediante etiquetas integradas u otras propiedades.

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAZygQwE5QBQChGKYDmAXClBjGEYgD7mXUDaAunYttgJSIC8AfAypEe9AN4oyqRjQC+uLlIrDEY-IgD0GxFAAWMZIgMoQABwCmGRBDgBbWwiNIAUmgBuaAMoRKpqOphgDigATws4IOI+Xl5EACJpYTieNQICDHMoEAwkG3sEAGE0ZHNsYi4AbnVZRHMAGxKjIOwAQQwMNBCAOgM2jpCyjBEU9XTM7KRiLts0U2w8hzAikq4ugCs4Kmw4gBpkqoIa+sbA4LDzCMIh6Ni40EhYBGTVUcQMrJzrO0Xl0uJuSrVWoNcwvNJvcafBaFYp-IZdZCAw64dT3aDwXLfGElbDIJQyRRCahgtJaRDAKhoOp1EI7RBrECoL5gNyWKCEIk0KBwQhgOB6Syc17vCYoA6IeSyIA)

```ts
function start(
  arg: string | string[] | (() => string) | { s: string }
): string {
  // this is super common in JavaScript
  if (typeof arg === "string") {
    return commonCase(arg);
  } else if (Array.isArray(arg)) {
    return arg.map(commonCase).join(",");
  } else if (typeof arg === "function") {
    return commonCase(arg());
  } else {
    return commonCase(arg.s);
  }
 
  function commonCase(s: string): string {
    // finally, just convert a string to another string
    return s;
  }
}
```

`string`, `Array` y `Function` tienen predicados de tipo incorporados, dejando convenientemente el tipo de objeto para la rama `else`. Sin embargo, es posible generar uniones que sean difíciles de diferenciar en tiempo de ejecución. Para código nuevo, es mejor compilar solo
uniones discriminadas.

Los siguientes tipos tienen predicados integrados:

|Tipo|Predicado|
|---|---|
|string|`typeof s === "string"`|
|number|`typeof n === "number"`|
|bigint|`typeof m === "bigint"`|
|boolean|`typeof b === "boolean"`|
|symbol|`typeof g === "symbol"`|
|undefined|`typeof undefined === "undefined"`|
|function|`typeof f === "function"`|
|array|`Array.isArray(a)`|
|object|`typeof o === "object"`|

Ten en cuenta que las funciones y los arreglos son objetos en tiempo de ejecución, pero tienen sus propios predicados.

#### Intersecciones {#intersections}

Además de uniones, TypeScript también tiene intersecciones:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/C4TwDgpgBAwg9gWwEYEsB2EAmUC8UDeUAhgFxRoCuyEATlAL5QBkBUSZAzsDegOYMBuAFChIsOGgBmAGxQBjYH1ytS5KkloNmKztyX0BQA)

```ts
type Combined = { a: number } & { b: string };
type Conflicting = { a: number } & { a: string };
```

`Combined` tiene dos propiedades, `a` y `b`, como si hubieran sido escritas como un tipo literal de objeto. La intersección y la unión son recursivas en caso de conflictos, por lo que `Conflicting.a: number & string`.

### Tipos de unidades {#unit-types}

Los tipos de unidades son subtipos de tipos primitivos que contienen exactamente un valor primitivo. Por ejemplo, la cadena `"foo"` tiene el tipo `"foo"`. Dado que JavaScript no tiene enumeraciones integradas, es común utilizar en su lugar un conjunto de cadenas conocidas. Las uniones de tipos literales de cadena permiten a TypeScript escribir este patrón:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwAcpgAKAZwC54yMYtUBzAGnlStWQFsAjEGF4FjiZcbeACIIIRBnHwAPhLoMAFrICUVGnUYBuAFBFS4lVnEsAjAAYWk6Rt1A)

```ts
declare function pad(s: string, n: number, direction: "left" | "right"): string;
pad("hi", 10, "left");
```

Cuando es necesario, el compilador *amplia* - convierte a un supertipo - el tipo de unidad al tipo primitivo, como `"foo"` a `string`. Esto sucede cuando se utiliza la mutabilidad, lo que puede dificultar algunos usos de variables mutables:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUACaQDGANgIbSSgBmArgHbEAuAlnA6AA7kEAUKUImbRWDAOYAaUA1QM6AWwBGMaQVZUW7WaABEpSDWa7QAHz2jxAC2MBKVMNESA3HhCgAtF+J1mXj3gGzEKgALwWrNbGrjz8ulasutIAjAAM0oi2zqDuMPDQqADkjmLihaCsiDJwweSIiJEM5EoGoMxwoIX6hsZmEVG6hUA)

```ts
let s = "right";
pad("hi", 10, s); // error: 'string' no es asignable a '"left" | "right"'
```

```text {filename="Error generado"}
Argument of type 'string' is not assignable to parameter of type '"left" | "right"'.
```

Así es como ocurre el error:

- `"right": "right"`
- `s: string` porque `"right"` se amplía a `string` al asignarse a una variable mutable.
- `string` no se puede asignar a `"left" | "right"`

Puedes solucionar esto con una anotación de tipo para `s`, pero eso a su vez evita asignaciones a `s` de variables que no son de tipo `"left" | "right"`.

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwAcpgAKAZwC54yMYtUBzAGnlStWQFsAjEGF4FjiZcbeACIIIRBnHwAPhLoMAFrICUVGnUYBuAFAB6Q-AC05sMgznT+qRmpVJ02QqVZVrgLzvP4g0Sk4ipY4iwAjAAMLGTqukA)

```ts
let s: "left" | "right" = "right";
pad("hi", 10, s);
```

## Conceptos similares a Haskell {#concepts-similar-to-haskell}

### Tipado contextual {#contextual-typing}

TypeScript tiene algunos lugares obvios donde puede inferir tipos, como declaraciones de variables:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/DYUwLgBAzhC8ECICSByAthAhtMAnAlgHYDmAhAgNxA)

```ts
let s = "¡Soy un string!";
```

Pero también infiere tipos en algunos otros lugares que quizás no esperes si has trabajado con otros lenguajes de sintaxis C:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwFsoAHAHgBUAaeAVQD4AKRALngY1fIEp4BeO2tQwBnTgG0Aul1Y1JAbgBQEEBnjDUwvoRIMGqHv3ioAdBhwBlDDCyoA5gy7UxARmoAmagGYpcoA)

```ts
declare function map<T, U>(f: (t: T) => U, ts: T[]): U[];
let sns = map((n) => n.toString(), [1, 2, 3]);
```

Aquí, también en este ejemplo es `n: number`, a pesar de que `T` y `U` no se han inferido antes de la llamada. De hecho, después de que se haya usado `[1,2,3]` para inferir `T=number`, el tipo de retorno de `n => n.toString()` se usa para inferir `U=string`, causando que `sns` sea del tipo `string[]`.

Ten en cuenta que la inferencia funcionará en cualquier orden, pero intellisense solo funcionará de izquierda a derecha, por lo que TypeScript prefiere declarar `map` con el array primero:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwFsoAHAHgBUAaeAVQD4AKDAZwC55yBtAXWsXabtyASngBeOrWHsaPANxA)

```ts
declare function map<T, U>(ts: T[], f: (t: T) => U): U[];
```

El tipado contextual también funciona de forma recursiva a través de objetos literales y en tipos de unidades que de otro modo se inferirían como `string` o `number`. Y puede inferir tipos de retorno a partir del contexto:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXxjQB4AVAPgAoMALNAawC54qmSBKeAXjPgDccswNqwDcAKAggM8LEwDeM1IhBx0IJgGcMMLKgDm8AL5cCaChRwdu8OWPjwcAOl3LVYBJ3gAiAJIA5AGUAUQAlEngAkgBBEiD4AAlQoK9xQzYRIA)

```ts
declare function run<T>(thunk: (t: T) => void): T;
let i: { inference: string } = run((o) => {
  o.inference = "INSERT STATE HERE";
});
```

Se determina que el tipo de `o` es `{ inference: string }` porque

1. Los inicializadores de declaración están tipados contextualmente según el tipo de declaración: `{ inference: string }`.
2. El tipo de retorno de una llamada utiliza el tipo contextual para las inferencias, por lo que el compilador infiere que `T={ inference: string }`.
3. Las funciones de flecha usan el tipo contextual para asignar tipos a sus parámetros, por lo que el compilador proporciona `o: {inference: string}`.

Y lo hace mientras escribes, de modo que después de escribir `o.`, obtienes terminaciones para la propiedad `inference`, junto con cualquier otra propiedad que tendrías en un programa real.
En conjunto, esta característica puede hacer que la inferencia de TypeScript se parezca un poco a un motor de inferencia de tipos unificador, pero no lo es.

### Alias de tipos {#type-aliases}

Los alias de tipos son meros alias, como `type` en Haskell. El compilador intentará utilizar el nombre de alias siempre que se haya utilizado en el código fuente, pero no siempre lo consigue.

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/C4TwDgpgBAyglgL2gXigbQHYFcC2AjCAJwBopt8iBdAbgCgAbCYKADwC5ZEV0BGABh4A6HqQCc4waJpA)

```ts
type Size = [number, number];
let x: Size = [101.1, 999.9];
```

El equivalente más cercano a `newtype` es una *intersección etiquetada*:

```ts
type FString = string & { __compileTimeOnly: any };
```

Un `FString` es como una cadena normal, excepto que el compilador cree que tiene una propiedad llamada `__compileTimeOnly` que en realidad no existe. Esto significa que "FString" aún se puede asignar a `string`, pero no al revés.

### Uniones discriminadas {#discriminated-unions}

El equivalente más cercano a `data` es una unión de tipos con propiedades discriminantes, normalmente llamadas uniones discriminadas en TypeScript:

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
```

A diferencia de Haskell, la etiqueta, o discriminante, es solo una propiedad en cada tipo de objeto. Cada variante tiene una propiedad idéntica con un tipo de unidad diferente. Este sigue siendo un tipo de unión normal; el `|` inicial es una parte opcional de la sintaxis del tipo de unión. Puedes discriminar a los miembros de la unión usando código JavaScript normal:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/C4TwDgpgBAygFgQ0lAvAKClAPlA3lAawEsA7AEwC4oAiAYyICdaAbCagbigYTKIFcAzlRJ8AtgCMIDKAF8M2PIVKUaAgI58EDNpwAewsZOlzMOfMXJVqwBkQQkA5qw5R9UERKmcQBz8fZoaABmfCS0wEQA9iRQWhAIABRCsIiQAJR48kRBUEkAdBZkqCgoNPRMzhm48pjawHwMMQCyCMBweQAKAJJQAFRQAnncvIJ9A0M8-AIBmDJQEMwC0Nm5g4XFpdTqmtrUVTVcEPWN47pjg7ozsvOL0NWYtUcNMfln-YMgGQD0UABMV3IZEA)

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
function area(s: Shape) {
  if (s.kind === "circle") {
    return Math.PI * s.radius * s.radius;
  } else if (s.kind === "square") {
    return s.x * s.x;
  } else {
    return (s.x * s.y) / 2;
  }
}
```

Ten en cuenta que se infiere que el tipo de retorno de `area` es `number` porque TypeScript sabe que la función es total. Si alguna variante no está cubierta, el tipo de retorno de `area` será "number | undefined` en su lugar.

Además, a diferencia de Haskell, las propiedades comunes aparecen en cualquier unión, por lo que puedes discriminar de manera útil a varios miembros de la unión:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/C4TwDgpgBAygFgQ0lAvAKClAPlA3lAawEsA7AEwC4oAiAYyICdaAbCagbigYTKIFcAzlRJ8AtgCMIDKAF8M2PIVKUaAgI58EDNpwAewsZOlzMOfMXJVqwBkQQkA5qw5R9UERKmcQBz8fZoAPSBUAC04bR8wOGhaABmfCS0wEQA9iRQcBBEDnDAABRCsIiQAJR48kRxUIUAdBZkqCgoNPRMzuW48pjawHwMGQBMUABUUAK13LyCAZgyUBDMAtBdmJjB4-XKVuqa2tQK1rb2TmzdXBB9A5u6s7JoMkA)

```ts
function height(s: Shape) {
  if (s.kind === "circle") {
    return 2 * s.radius;
  } else {
    // s.kind: "square" | "triangle"
    return s.x;
  }
}
```

### Parámetros de tipo {#type-parameters}

Como la mayoría de los lenguajes descendientes de C, TypeScript requiere una declaración de parámetros de tipo:

```ts
function liftArray<T>(t: T): Array<T> {
  return [t];
}
```

No hay ningún requisito de mayúsculas y minúsculas, pero los parámetros de tipo son convencionalmente letras mayúsculas individuales. Los parámetros de tipo también se pueden restringir a un tipo, que se comporta un poco como restricciones de clase de tipo:

```ts
function firstish<T extends { length: number }>(t1: T, t2: T): T {
  return t1.length > t2.length ? t1 : t2;
}
```

TypeScript generalmente puede inferir argumentos de tipo a partir de una llamada basada en el tipo de argumentos, por lo que los argumentos de tipo generalmente no son necesarios.

Debido a que TypeScript es estructural, no necesita parámetros de tipo tanto como los sistemas nominales. Específicamente, no son necesarios para hacer que una función sea polimórfica. Los parámetros de tipo solo deben usarse para *propagar* información de tipo, como restringir los parámetros para que sean del mismo tipo:

```ts
function length<T extends ArrayLike<unknown>>(t: T): number {}

function length(t: ArrayLike<unknown>): number {}
```

En el primer `length`, `T` no es necesaria; observa que solo se hace referencia a ella una vez, por lo que no se usa para restringir el tipo de valor de retorno u otros parámetros.

#### Tipos de tipo superior {#higher-kinded-types}

TypeScript no tiene tipos de tipo superior, por lo que lo siguiente no es legal:

```ts
function length<T extends ArrayLike<unknown>, U>(m: T<U>) {}
```

#### Programación sin puntos {#point-free-programming}

La programación sin puntos (uso intensivo de currying y composición de funciones) es posible en JavaScript, pero puede ser verboso.
En TypeScript, la inferencia de tipos a menudo falla en programas sin puntos, por lo que terminarás especificando parámetros de tipo en lugar de parámetros de valor. El resultado es tan verboso que normalmente es mejor evitar la programación sin puntos.

### Sistema de módulos {#module-system}

La sintaxis del módulo moderno de JavaScript es un poco como la de Haskell, excepto que cualquier archivo con `import` o `export` es implícitamente un módulo:

```ts
import { value, Type } from "npm-package";
import { other, Types } from "./local-package";
import * as prefix from "../lib/third-package";
```

También puedes importar módulos commonjs, módulos escritos utilizando el sistema de módulos de node.js:

```ts
import f = require("single-function-package");
```

Puedes exportar con una lista de exportación:

```ts
export { f };

function f() {
  return g();
}
function g() {} // g is not exported
```

O marcando cada exportación individualmente:

```ts
export function f() { return g() }
function g() { }
```

El último estilo es más común pero ambos están permitidos, incluso en el mismo archivo.

### `readonly` y `const` {#readonly-and-const}

En JavaScript, la mutabilidad es la opción predeterminada, aunque permite declaraciones de variables con `const` para declarar que la *referencia* es inmutable. El referente sigue siendo mutable:

```js
const a = [1, 2, 3];
a.push(102); // ):
a[0] = 101; // D:
```

TypeScript además tiene un modificador de `readonly` para las propiedades.

```ts
interface Rx {
  readonly x: number;
}
let rx: Rx = { x: 1 };
rx.x = 12; // error
```

También viene con un tipo mapeado `Readonly<T>` que hace que todas las propiedades sean `readonly`:

```ts
interface X {
  x: number;
}
let rx: Readonly<X> = { x: 1 };
rx.x = 12; // error
```

Y tiene un tipo `ReadonlyArray<T>` específico que elimina los métodos que afectan lateralmente y evita la escritura en índices del array, así como una sintaxis especial para este tipo:

```ts
let a: ReadonlyArray<number> = [1, 2, 3];
let b: readonly number[] = [1, 2, 3];
a.push(102); // error
b[0] = 101; // error
```

También puedes usar una aserción constante, que opera en arrays y objetos literales:

```ts
let a = [1, 2, 3] as const;
a.push(102); // error
a[0] = 101; // error
```

Sin embargo, ninguna de estas opciones es la predeterminada, por lo que no se usan de manera consistente en el código TypeScript.

### Próximos pasos {#next-steps}

Este documento es una descripción general de alto nivel de la sintaxis y los tipos que usarías en el código cotidiano. Desde aquí deberías:

- Lee el Manual completo [de principio a fin ↗](https://www.typescriptlang.org/docs/handbook/intro.html)
- Explora los [ejemplos de Playground ↗](https://www.typescriptlang.org/play#show-examples)
