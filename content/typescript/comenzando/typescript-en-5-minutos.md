---
linkTitle: "Programadores JavaScript"
title: "TypeScript para programadores JavaScript - TypeScript en Español"
description: "Descubre cómo TypeScript extiende JavaScript."
weight: 2
type: docs
---

# TypeScript para programadores de JavaScript

TypeScript tiene una relación inusual con JavaScript. TypeScript ofrece todas las funciones de JavaScript y una capa adicional además de ellas: el sistema de tipos de TypeScript.

Por ejemplo, JavaScript proporciona primitivos de lenguaje como `string` y `number`, pero no verifica que los hayas asignado de manera consistente. TypeScript lo hace.

Esto significa que tu código JavaScript en funcionamiento existente también es código TypeScript. El principal beneficio de TypeScript es que puede resaltar comportamientos inesperados en tu código, lo que reduce la posibilidad de errores.

Este tutorial proporciona una breve descripción general de TypeScript, centrándose en tsu sistema de tipos.

## Tipos por Inferencia {#types-by-inference}

TypeScript conoce el lenguaje JavaScript y generará tipos por ti en muchos casos.
Por ejemplo, al crear una variable y asignarla a un valor particular, TypeScript usará el valor como su tipo.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/DYUwLgBAFizA9gdXgJ2AEwgXggIgBKwITJrq4DcAUAPQ0QQB6A-EA)

```ts
let helloWorld = "Hello World";
        
let helloWorld: string
```

Al comprender cómo funciona JavaScript, TypeScript puede crear un sistema de tipos que acepte código JavaScript pero tenga tipos. Esto ofrece un sistema de tipos sin necesidad de agregar caracteres adicionales para hacer que los tipos sean explícitos en tu código. Así es como TypeScript sabe que `helloWorld` es un `string` en el ejemplo anterior.

Es posible que hayas escrito JavaScript en Visual Studio Code y hayas tenido el autocompletado del editor. Visual Studio Code utiliza TypeScript internamente para facilitar el trabajo con JavaScript.

## Definiendo tipos {#defining-types}

Puedes usar una amplia variedad de patrones de diseño en JavaScript. Sin embargo, algunos patrones de diseño dificultan la inferencia automática de tipos (por ejemplo, patrones que utilizan programación dinámica). Para cubrir estos casos, TypeScript admite una extensión del lenguaje JavaScript, que ofrece lugares para indicarle a TypeScript cuáles deberían ser los tipos.

Por ejemplo, para crear un objeto con un tipo inferido que incluye `name: string` y `id: number`, puedes escribir:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYewdgzgLgBArhApgJxgXhgbwFAxmAQwFtEAuGAIgAkCBPRCCgGlxgEsATcgBhYF8A3EA)

```ts
const user = {
  name: "Hayes",
  id: 0,
};
```

Puedes describir explícitamente la forma de este objeto usando una declaración de `interface`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgKoGdrIN4ChnIhwC2EAXMumFKAOYDc+ywAJhSAK7EBG0jAvkA)

```ts
interface User {
  name: string;
  id: number;
}
```

Luego puedes declarar que un objeto JavaScript se ajusta a la forma de tu nueva `interface` usando una sintaxis como `: TypeName` después de una declaración de variable:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgKoGdrIN4ChnIhwC2EAXMumFKAOYDc+ywAJhSAK7EBG0jAvrgD0Q5AFoJCDmAljcCAPYgqyDpigUMWALw4mRUhQBEACTgBPCOiMAaJqwoAGO-3pA)

```ts
const user: User = {
  name: "Hayes",
  id: 0,
};
```

Si proporcionas un objeto que no coincide con la interfaz que proporcionaste, TypeScript te advertirá:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGY1oFAEsA7AFxgDMBDAY0lAFVEZQBvHUUA8gW0lUSOkIBzANytQeACaoCAV04AjGKIC+OHJTgE+oGQ2ip6jALzMxumB26oARAAlyAT0iJrAGjGTUABnfLhQA)

```ts
interface User {
  name: string;
  id: number;
}
 
const user: User = {
  username: "Hayes",
  id: 0,
};
```

```text {filename="Error generado"}
Type '{ username: string; id: number; }' is not assignable to type 'User'.
  Object literal may only specify known properties, and 'username' does not exist in type 'User'.
```

Dado que JavaScript admite clases y programación orientada a objetos, TypeScript también lo hace. Puedes utilizar una declaración de interfaz con clases:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgKoGdrIN4ChnIhwC2EAXMumFKAOYDc+ywAJhSAK7EBG0jAvrlwIANnHTo0mKAEEECAPYdwOJkVIUqNEAyat2XXlEZNFILRwRgFUABTrylanQA0zNoUPQAlKoIEwAAtgdAA6B2QAXkISCEZ-ZCCQ0NYo93jkQUFhBXMwZA5pCgwsaJAIAHcpaDlFZTBbACIAWQ4oAAdAgE9GtwBGb3ogA)

```ts
interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);
```

Puedes usar interfaces para anotar parámetros y devolver valores a funciones:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDsHsFECd7XgZwFAEtIBcCm8AzAQwGNdQBVFfUAbzVFEiIFtcAuUFbeLAcwDcDUBgAmnSAFcWAI3xCAvmhCgAtOpKTs61WgKTIJbBmiRQo3ABtceKvgAUk6vE534ASjrCVAOj9olPQMjEzM+GwBBURYsN3t3V2cvRhA-HwCgA)

```ts
function deleteUser(user: User) {
  // ...
}
 
function getAdminUser(): User {
  //...
}
```

Ya existe un pequeño conjunto de tipos primitivos disponibles en JavaScript: `boolean`, `bigint`, `null`, `number`, `string`, `symbol` y `undefined`, que puedes usar en una interfaz. TypeScript amplía esta lista con algunos más, como `any` (permitir cualquier cosa), [`unknown` ↗](https://www.typescriptlang.org/play#example/unknown-and-never) (asegúrate de que alguien que use este tipo declare cuál es el tipo), [`never` ↗](https://www.typescriptlang.org/play#example/unknown-and-never) (no es posible que este tipo pueda suceder), y `void ` (una función que devuelve `undefined` o no tiene valor de retorno).

Verás que hay dos sintaxis para construir tipos: [Interfaces y tipos ↗](https://www.typescriptlang.org/play#example/types-vs-interfaces). Deberías preferir `interface`. Utiliza `type` cuando necesites funciones específicas.

## Componiendo tipos {#composing-types}

Con TypeScript, puedes crear tipos complejos combinando tipos simples. Hay dos formas populares de hacerlo: con unions y con generics.

### Uniones {#unions}

Con una unión, puedes declarar que un tipo podría ser de uno de muchos tipos. Por ejemplo, puedes describir un tipo `boolean` como `true` o `false`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAsiBCB7RAbKBeKwBOBXaAPlAGYCGKAzhANxA)

```ts
type MyBool = true | false;
```

*Nota:* Si pasas el cursor sobre `MyBool` en un editor compatible, verás que está clasificado como `boolean`. Esa es una propiedad del Sistema de Tipo Estructural. Más sobre esto a continuación.

Un caso de uso popular para los tipos de unión es describir el conjunto de `string` o `number` [literales](/typescript/handbook/tipos-comunes#literal-types) que un valor se permite tener:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBA6glgOwCYHsDuBlYBDYEDOUAvFAEQqQKlQA+ZAxgDYr4RLV2kC2icPAXm1IBuAFChIUADIp6Aayy4CxMs3lDaZAK4I1coWInQACizjA4ANwgB5JEgByWrgCMIAJ3wBVZB4AqEAgqAIyaAMyaAKyaAOyaAJzCQA)

```ts
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

Las uniones también brindan una manera de manejar diferentes tipos. Por ejemplo, puedes tener una función que tome un `array` o un `string`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAcwKZQDKrMqALACjgCMArALkQGcoAnGHRAH2roeQG0BdASkQG8AUIkS10IWkhKkAdABtsuPAG5BAXyA)

```ts
function getLength(obj: string | string[]) {
  return obj.length;
}
```

Para conocer el tipo de una variable, puedes usar `typeof`:

|Tipo|Predicado|
|---|---|
|string|`typeof s === "string"`|
|number|`typeof n === "number"`|
|boolean|`typeof b === "boolean"`|
|undefined|`typeof undefined === "undefined"`|
|function|`typeof f === "function"`|
|array|`Array.isArray(a)`|

Por ejemplo, puedes hacer que una función devuelva diferentes valores dependiendo de si se le pasa una cadena o un array:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAdwE4EMAOBJMBBVDATwAo4AjAKwC5EBnKVGMAc0QB97HmWBtAXQCUiAN4AoRIhjBEJKEUwBTODIqVEAXi2IARAyasdw8ZMmpFUEKiS81-ANxiA9E9NvTAPQD8ExAF9fc0trRDVHPyA)

```ts
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
            
(parameter) obj: string
  }
  return obj;
}
```

### Generics {#generics}

Los generics proporcionan variables a los tipos. Un ejemplo común es un array. Un array sin generics podría contener cualquier cosa. Una array con generics puede describir los valores que contiene el array.

```ts
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

Puedes declarar tus propios tipos que usan generics:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUAJYB2ALjAGYCGAxpKAEI0DWADswDwAqAni5AHygA3nlChKAEwmoAFHABGAK1Q8+ASlABeQQDc4BCQG5RoAOaQSsjdtCrIxgL548IWwAsCiUABtidT+KgiG4IJNQAriSgJHDRkN7etryQAMrU0AQsUSRuMP5elC5g1HBEiCSUpKDUlAmQEqAABvLMbNRMjQA04kQNMaBEcFEA7gjQ3OLycJGgw7nQ-lE1ALZ05PDLAHR4EpDU3pQL1aXloC3tbUyojBcc5RlEpvzGRaAKintRAZRBJA+m3Xke0o4UQdGGdF2+0O9VABCilCmOjolC8OToOkOBER3jobGgUTg5AYrWY2xKZUJSk+WjOpPam3MJBkaherhSxFo0VydNu7VAmIyOPygXuxABoG402qlQA5FE2IgCgNwssgdBorF0eIpKByOEiNQSARSttzqwyZIJDJMKygA)

```ts
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
 
// Esta línea es un atajo para decirle a TypeScript que hay una constante 
// llamada `backpack` y que no se preocupe por su origen.
declare const backpack: Backpack<string>;
 
// object es una cadena, porque lo declaramos anteriormente como la parte variable de Backpack.
const object = backpack.get();
 
// Dado que la variable de backpack es una cadena, no puedes pasar un número a la función agregar.
backpack.add(23);
```

```text {filename="Error generado"}
Argument of type 'number' is not assignable to parameter of type 'string'.
```

## Sistema de Tipo Estructural {#structural-type-system}

Uno de los principios básicos de TypeScript es que la verificación de tipos se centra en la *forma* que tienen los valores. A esto a veces se le llama "tipificación pato" o "tipificación estructural".

En un sistema de tipo estructural, si dos objetos tienen la misma forma, se consideran del mismo tipo.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgAoHtRmQbwFDLIAeAXMiAK4C2ARtANwHICeZltDeAvnnjBSARhg6EMgA26AOYYsACgAOZWeACUuJglEBndOIgA6SVLkADACQ4FBolwA0yS9eZdTqxjzwB6LxOnbkACIARgAmB1CANkC8LRBtbAVMcGQAXlxiMjCHVmQo5C5GYxUwRWSwdyA)

```ts
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```

La variable `point` nunca se declara como del tipo `Point`. Sin embargo, TypeScript compara la forma de `point` con la forma de `Point` en la verificación de tipo. Tienen la misma forma, por eso pasa el código.

La coincidencia de formas solo requiere que un subconjunto de los campos del objeto coincida.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUAJYB2ALjAGYCGAxpKAApzEmgDeeooAHqkQK4BbAEYwA3B1ABPXoJHRxAXzx5yfItRIE4RUABs4Ac0bMAFAAdUx0gEo2E6tsRxdkAHT6DJgAYASVmdcuBQAaUD8AyQUva0U8EFAAWiTqPhIkhLwHIkQWMyZSDFAAXjZuVABGNFDpdAA2UIAvVAAOAE5QBXEPKxJzfJIMGNB4j0RQACJK0LRa8eUsnNBoSA1i0p5QDAxq1G3QAHcCABMSAAtdgAZQ08gCA1OSFouOrsMek2WNIZHDMfGt0IYOaZRwsBz6aBrVigG4bcYAYnKzQA7ABBABCADFxi88N1+iZwQgYkA)

```ts
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
 
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
 
const color = { hex: "#187ABF" };
logPoint(color);
```

```text {filename="Error generado"}
Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
  Type '{ hex: string; }' is missing the following properties from type 'Point': x, y
```

No hay diferencia entre cómo las clases y los objetos se ajustan a las formas:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUAJYB2ALjAGYCGAxpKAApzEmgDeeooAHqkQK4BbAEYwA3B1ABPXoJHRxAXzx5yfItRIE4RUABs4Ac0bMAFAAdUx0gEo2E6tsRxdkAHT6DJgAYASVmdcuBQAaUD8AyQUva0U8EFAAWiTqPhIkhLxqXUpERFAANQJoEj5KXSsWdk4eUH5hMQlpWtkG+0cSaD4NBBMaurlQpv6YWyrOUBIACwJEQNAAXm5xcYnp2ckFqWXQJSVM9trIAHd8is2iY4KikrKKkwBGDFCcADYYvA87i5OKmNB4jx5ABEj2eLyBQA)

```ts
class VirtualPoint {
  x: number;
  y: number;
 
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
 
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
```

Si el objeto o clase tiene todas las propiedades requeridas, TypeScript dirá que coinciden, independientemente de los detalles de implementación.

## Próximos pasos {#next-steps}

Esta fue una breve descripción general de la sintaxis y las herramientas utilizadas en el TypeScript cotidiano. Desde aquí podrás:

- Lee el Manual completo [de principio a fin](/typescript/handbook/intro)
- Explora los [ejemplos de Playground ↗](https://www.typescriptlang.org/play#show-examples)
