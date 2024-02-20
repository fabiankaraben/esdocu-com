---
linkTitle: "Tipos de Objetos"
title: "Tipos de Objetos - TypeScript en Español"
description: "Cómo TypeScript describe las formas de los objetos JavaScript."
weight: 6
type: docs
---

# Tipos de objetos en TypeScript

En JavaScript, la forma fundamental en que agrupamos y pasamos datos es a través de objetos.
En TypeScript, los representamos a través de *tipos de objetos*.

{{< content-ads/top-banner >}}

Como hemos visto, pueden ser anónimos:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAcwE4FN1QBQAd2oDOCAXIgN6JgCGAtumYVKjGMgNyLXINUi0AjAogC+ASgoAoRIgD0smYqXLlAPXUbNW7TtXTEGKCFRIARAAl0AGytxEpxAGpE+IggB0Neu0kigA)

```ts
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
```

o se les puede nombrar usando una interfaz:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgArQM4HsTIN4BQyyA9CcRcgHo21HIhwC2EAXMhmFKAOYDc9ODzYMArkwBG0AQF8CBGKJAIwwHMh5QIEMAAoADphzt0UbCACU+elrCiouAEQAJCABs3WZI+QBqZIZmOAB0jCyyQA)

```ts
interface Person {
  name: string;
  age: number;
}
 
function greet(person: Person) {
  return "Hello " + person.name;
}
```

o un alias de tipo:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAChBOBnA9gOygXigbwFBSgHpCoA9ci-KVAQwFsIAuKRYeAS1QHMBuKmrk2oBXOgCMEfAL59cAM2GoAxsHZooXeBAjAAFJCRpmcQ6gCUOKluDD46AEQAJCABsXyKPagBqKAZSoAHS0DNJAA)

```ts
type Person = {
  name: string;
  age: number;
};
 
function greet(person: Person) {
  return "Hello " + person.name;
}
```

En los tres ejemplos anteriores, hemos escrito funciones que toman objetos que contienen la propiedad `name` (que debe ser un `string`) y `age` (que debe ser un `number`).

## Referencia rápida {#quick-reference}

Tenemos hojas de trucos disponibles para [`type` e `interface` ↗](https://www.typescriptlang.org/cheatsheets.html), si quieres echarle un vistazo rápido la sintaxis cotidiana.

## Modificadores de propiedades {#property-modifiers}

Cada propiedad en un tipo de objeto puede especificar un par de cosas: el tipo, si la propiedad es opcional y si se puede escribir en la propiedad.

### Propiedades opcionales {#optional-properties}

La mayor parte del tiempo, nos encontraremos tratando con objetos que *podrían* tener una propiedad establecida.
En esos casos, podemos marcar esas propiedades como *opcionales* agregando un signo de interrogación (`?`) al final de sus nombres.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8C+AUACYQIA2cUKMAriAmMAPYjIDmEYG2EAFAEoAXGkw4A3IUIB6acgC0ihLTCL5hUJFiIUABTiaA8liasAzslyFkyM2IgieE68gAeu5mYD8IkLQC2AEbQkjayNgB6LgCeHt6+AcFQocjhyFFEhHQMpmxYBuBO-MwmZiL6RiYsIGYCli7hAHTNhJkI5mC29sgAvBxcRYKS+ZqDuF28yPgCwwXc9nzjdrwANG5xIgCMAAzbUzOEI4ULS-ZrsZ5bu-uzoycTOGvul8g72+cbr9fT4kA)

```ts
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}
 
function paintShape(opts: PaintOptions) {
  // ...
}
 
const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
```

En este ejemplo, tanto `xPos` como `yPos` se consideran opcionales.
Podemos optar por proporcionar cualquiera de ellos, por lo que todas las llamadas anteriores a `paintShape` son válidas.
Lo único que realmente dice la opcionalidad es que si la propiedad *está* configurada, es mejor que tenga un tipo específico.

También podemos leer desde esas propiedades, pero cuando lo hacemos en [`strictNullChecks` ↗](https://www.typescriptlang.org/tsconfig#strictNullChecks), TypeScript nos dirá que son potencialmente `undefined`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8C+AUACYQIA2cUKMAriAmMAPYjIDmEYG2EAFAEoAXGkw4A3IUKhIsRCgAKcGQHksTVgGdkuQsmSaxEETwl7kADwXNNAfhEhaAWwBG0SfoCe1uw+duoSSJCAHoQ5ABaKIRaMCiIwjoGDTYsZXBTfmZ1TRElVXUWEE0BHXNyLksfZABeZGywTQA6KxsPZDD9Lu6egD1bcsrvG1r6nKbhzXbOntn9fvNOpuXCfCA)

```ts
function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos;
                   
(property) PaintOptions.xPos?: number | undefined
  let yPos = opts.yPos;
                   
(property) PaintOptions.yPos?: number | undefined
  // ...
}
```

En JavaScript, incluso si la propiedad nunca se ha configurado, aún podemos acceder a ella; solo nos dará el valor `undefined`.
Podemos manejar `undefined` especialmente comprobándolo.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8C+AUACYQIA2cUKMAriAmMAPYjIDmEYG2EAFAEoAXGkw4A3IUKhIsRCgAKcGQHksTVgGdkuQsmSaxEETwl7kADwXNNAfhEhaAWwBG0SfoCe1uw+duoSSJCAHoQ5ABaKIRaMCiIwjoGDTYsZXBTfmZ1TRElVXUWEE0BHXNyLksfZABeZGywTQA6Kxtamrr6UhhQCGJkW2QABmQRBubWzQ9kMP0APVtyyu82uvGmle0OzpBu3v7BkbGcjZ9p2eQF81mm28J8IA)

```ts
function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos === undefined ? 0 : opts.xPos;
       
let xPos: number
  let yPos = opts.yPos === undefined ? 0 : opts.yPos;
       
let yPos: number
  // ...
}
```

Ten en cuenta que este patrón de configuración predeterminada para valores no especificados es tan común que JavaScript tiene una sintaxis que lo admite.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8C+AUACYQIA2cUKMAriAmMAPYjIDmEYG2EAFAEoAXGkw4A3IUKhIsRCgAKcGQHksTVgGdkuQsmSaxEETwl7kADwXNNAfhEhaAWwBG0SfoCe1uw+duoSSJCAHoQ5ABaKIRaMCiIwjoGDTYsZXBTflwDIwAaSx9kAF5kAAZ87xtisuR8ESVVdRYQTQEdcwQtZnIIADpyZnY+ACILZE7mKGJQOEhkWeH8qxsBD2Qw-U2t7Z3d-QA9Ww6unv7Bkc9x5knpkFmUBYqfVfMNvfeP5EPX8N6-wnwQA)

```ts
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);
                                  
(parameter) xPos: number
  console.log("y coordinate at", yPos);
                                  
(parameter) yPos: number
  // ...
}
```

Aquí usamos [un patrón de desestructuración ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) para parámetros de `paintShape` y se proporcionó [valores predeterminados ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Default_values) para `xPos` y `yPos`.
Ahora, `xPos` y `yPos` están definitivamente presentes dentro del cuerpo de `paintShape`, pero son opcionales para cualquiera que llame a `paintShape`.

> Ten en cuenta que actualmente no hay forma de colocar anotaciones tipográficas dentro de patrones de desestructuración.
> Esto se debe a que la siguiente sintaxis ya significa algo diferente en JavaScript.
> [Pruebe este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDsHsEkFsAOAbAlgY1QFwIKQJ4BcoAZgIbIDOApgFAgTUBOT0TlxATAKzeeicAzAAYALLVSQszcumqgAygAsyieQG8AvrQAm1dMjJN5JAK6R0WVNEihjkPUwAUAD2LmA1jADukAJQA3PRgALRh6KZYYSG0ZhZWNqA6TGTeTuqglCpqxMqq1AA0oC4ACtAcoJCm8ABGzKAAvKAAjMLCoMAAVAB0vZ1gmn6g6rSgdtQOzE5Z+YGj45POpeVzmkA)
>
> ```ts
> function draw({ shape: Shape, xPos: number = 100 /*...*/ }) {
>   render(shape);
>   render(xPos);
> Cannot find name 'xPos'.2304Cannot find name 'xPos'.}
> ```
>
> ```text {filename="Error generado"}
> Cannot find name 'shape'. Did you mean 'Shape'?
> ```
> En un patrón de desestructuración de objetos, `shape: Shape` significa "tomar la propiedad `shape` y redefinirla localmente como una variable llamada `Shape`.
> Del mismo modo `xPos: number` crea una variable llamada `number` cuyo valor se basa en el parámetro `xPos`.
>

### Propiedades `readonly` {#readonly-properties}

Las propiedades también se pueden marcar como `readonly` para TypeScript.
Si bien no cambiará ningún comportamiento en tiempo de ejecución, no se puede escribir en una propiedad marcada como `readonly` durante la verificación de tipos.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYAsAGAUAJYB2ALjAGYCGAxpKAMpwC2kAKgJ4AOdA3nqKGiRKAEzhEANu1Cd4nVIhLRiAcwDceAL5485AK5FqJAuNBjGLEgAtVACjgAjAFaoLbLpACUoPgJCgAdTpqSiJBYRFQcngmUAByRycAOlk4Tjik-lBqcUQ4CUgkiTgVWwADVM5QK0pEUGs6ADdKCT06OIASHkSUuU0Mss8NLP8AIT0SUAB3YNC4yaEAWlrEAhUwghJMgR7K0ABeUAAiK0gJYqONTSA)

```ts
interface SomeType {
  readonly prop: string;
}
 
function doSomething(obj: SomeType) {
  // Podemos leer desde 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);
 
  // Pero no lo podemos reasignar.
  obj.prop = "hello";
}
```

```text {filename="Error generado"}
Cannot assign to 'prop' because it is a read-only property.
```

Usar el modificador `readonly` no necesariamente implica que un valor sea totalmente inmutable - o en otras palabras, que su contenido interno no se pueda cambiar.
Simplemente significa que no se puedes reescribir la propiedad en sí.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYAsAGAUAJYB2ALjAGYCGAxpKABJwC2dA3nqKNJJQCZxEANgE8ukRAV6RSqVqCKUWqRCWjEA5gG5QldZFREArkwBGMUAF9NeC3jzlDRaiQIDQANwISSAMQQAhAmgSAAteSmEAChDmfQZYgEpQdk4QUAB1OmpKIjE+HSJeUEMAB3CyUBL4EpgXcVByeCZQAHIYlgA6bgkpUhaOjlBqAUQ4QUgOwTh1SIADekoSktETINDw0QASVnaJ7slpEg6FFgsAQlmE605drvED0g7dSABqF+tbe0dnV1zIT2c0ViqEYLCSKVAaX8hhIoAA7lkci1YXC1BUSHBQKE6C19r0SC1KtVaqICCREJBBORQG5KK1QZB+oNbnjDqAALzJQacE5xABEADUCM4EFiQnQAKIAjHQPkAGm5Oj0qCwaAVnCsNiAA)

```ts
interface Home {
  readonly resident: { name: string; age: number };
}
 
function visitForBirthday(home: Home) {
  // Podemos leer y editar propiedadesde de 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}
 
function evict(home: Home) {
  // Pero no podemos escribir en la propiedad 'resident' misma de 'Home'.
  home.resident = {
    name: "Victor the Evictor",
    age: 42,
  };
}
```

```text {filename="Error generado"}
Cannot assign to 'resident' because it is a read-only property.
```

Es importante gestionar las expectativas de lo que implica `readonly`.
Es útil señalar la intención durante el tiempo de desarrollo de TypeScript sobre cómo se debe usar un objeto.
TypeScript no tiene en cuenta si las propiedades de dos tipos son `readonly` al comprobar si esos tipos son compatibles, por lo que las propiedades `readonly` también pueden cambiar mediante alias.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgArQM4HsTIN4BQyyIcAthAFzIZhSgDmA3EcnA1SQK5kBG0LAL4ECoSLEQoAShDgATHABsAnuijZchYlFkKQKkuU616IZqx3ylyth2oge-KEJGKIYZAHd6YOLzdqGtSBOMgAvPispBTUAEQhuACyCAnwSLEANKzsnAAsAExZgiwEAPSlXlhQANYYBG4elnoqCdQyVvqqmKER3sC+-hAJJQg42G4AdIpYDAAUTdYJEzkAlEzI5cgADqZgGMgA5AUHBH0DAd0gyxwA1DcsoyDjEFMz87qLl9cQaxsVO2J9kcAMwHIA)

```ts
interface Person {
  name: string;
  age: number;
}
 
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}
 
let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};
 
// Funciona
let readonlyPerson: ReadonlyPerson = writablePerson;
 
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
```

Usando [modificadores de mapeo](/typescript/handbook/manipulacion-tipos/tipos-mapeados#mapping-modifiers), puedes eliminar atributos `readonly`.

### Firmas de índices {#index-signatures}

A veces no conoces todos los nombres de las propiedades de un tipo de antemano, pero sí conoces la forma de los valores.

En esos casos puedes usar una firma de índice para describir los tipos de valores posibles, por ejemplo:

{{< content-ads/middle-banner-1 >}}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwHMQMBlDGLVAgQRhigE8AKASgC54yKrb6GBuAFAB6YfAC0ksMgyTxgyhhAxEUMAi6UadRvADeg+PADalUAA8OqZAFsARsoC6HAM7ktQgL6DBYPG-gbBl5GDk0eHQZ4AF5CYnDtPlYhP1QAl3A8YABJJRsYwODI4wBGRyFRIyqAPQB+IA)

```ts
interface StringArray {
  [index: number]: string;
}
 
const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
          
const secondItem: string
```

Arriba, tenemos una interfaz `StringArray` que tiene una firma de índice.
Esta firma de índice establece que cuando un `StringArray` se indexa con un `number`, devolverá un `string`.

Solo se permiten algunos tipos para las propiedades de firma de índice: `string`, `number`, `symbol`, patrones de cadena de plantilla y tipos de unión que constan solo de estos.

Si bien las firmas de índice de cadenas son una forma poderosa de describir el patrón de "diccionario", también exigen que todas las propiedades coincidan con su tipo de retorno.
Esto se debe a que un índice de cadena declara que `obj.property` también está disponible como `obj["property"]`.
En el siguiente ejemplo, el tipo de `name` no coincide con el tipo del índice de cadena y el verificador de tipos da un error:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwBYCMWBQIIZ4lVMdcBLAOwBcYAzAQwGNJQA5AVwFsAjGACIVmNCnCqNoAT1ABvXKFABtagBNIAD1SIa0agHMAuqio9+0ANy4FoADaQq+mgAsTZmBdAE4AaxsTuSG1dAysAXyA)

```ts
interface NumberDictionary {
  [index: string]: number;
 
  length: number; // ok
  name: string;
}
```

```text {filename="Error generado"}
Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
```

Sin embargo, las propiedades de diferentes tipos son aceptables si la firma del índice es una unión de los tipos de propiedad:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgHIFcC2AjaB5KAZTClAHMARYBMYAexDigE9kBvAKGWQG1QATCAA8AXMgDOJcgF0xILLijIAPhKkgyAbi7IANhA1gAFnIXRNyAPSXkdANYAaPQbLHkwccjjJ5OaDsZMCDFJUg0La1tHHzgg909vUPIOAF8gA)

```ts
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}
```

Finalmente, puedes hacer que las firmas de índice sean `readonly` para evitar la asignación a sus índices:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwHMQMAlEKYAeVQgE8BlDGLVAgQRhiloAoBKAFzwyFPHUbNWHLrQDcAKAD0i+AFp1YZBnWqlKgAIhOOGAGchAJgCsAFgvyWGI4ihgEI4GIZMW7Tt3gAb3l4eDhRGlp4AG0WUAAPIVRkAFsAIyMAXSFTH1YFAF95eQhieBTaaW4hDy8JXyqogF5CYg9qcTy-GX4FCsboi0z4FoAiAFkoCAgTWlHZIA)

```ts
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
 
let myArray: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory";
```

```text {filename="Error generado"}
Index signature in type 'ReadonlyStringArray' only permits reading.
```

No puedes asignar en `myArray[2]` porque la firma del índice es `readonly`.

## Chequeos de propiedad en exceso {#excess-property-checks}

Dónde y cómo se le asigna un tipo a un objeto puede marcar la diferencia en el sistema de tipos.
Uno de los ejemplos clave de esto es la verificación excesiva de propiedades, que valida el objeto más exhaustivamente cuando se crea y se asigna a un tipo de objeto durante la creación.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWdB2DATgCgBLAOwBcYAzAQwGNJQBlARwFd7pIBhOBVpkA5qADeJUKEZwANggD8qRFWiURAbimgA7mQAmVABbLQFTgFsARjG0BfEiVqcKjKmUEze9Gh268ABSyQqKo-jz8gsIiAJSo4jLyCCpqGpqgkfSoFjYwoPYSOrxUnNAURdLSsgrQqCExAHQ1CKAAPm2gAES8Bl0ANDrSWfXRoo36RsagikmhIhOGJqAAVHNNk8uoaAAMg9L2Dk5ykFSglgCeEbygALzekL6Q15CBiS1lqD2Qff16S8ZUABGHY7AqxTRAA)

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
 
let mySquare = createSquare({ colour: "red", width: 100 });
```

```text {filename="Error generado"}
Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
  Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
```

Observa que el argumento dado para `createSquare` se escribe *`colour`* en lugar de `color`.
En JavaScript simple, este tipo de cosas falla silenciosamente.

Podrías argumentar que este programa está escrito correctamente, ya que las propiedades `width` son compatibles, no hay ninguna propiedad `colour` presente y la propiedad `color` adicional es insignificante.

Sin embargo, TypeScript adopta la postura de que probablemente haya un error en este código.
Los objetos literales reciben un tratamiento especial y se someten a una *verificación excesiva de propiedades* cuando se asignan a otras variables o se pasan como argumentos.
Si un objeto literal tiene propiedades que el "tipo de destino" no tiene, obtendrás un error:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWdB2DATgCgBLAOwBcYAzAQwGNJQBlARwFd7pIBhOBVpkA5qADeJUKEZwANggD8qRFWiURAbimgA7mQAmVABbLQFTgFsARjG0BfEiVqcKjKmUEze9Gh268ABSyQqKo-jz8gsIiAJSo4jLyCCpqGpqgkfSoFjYwoPYSOrxUnNAURdLSsgrQqCExAHQ1CKAAPm2gAES8Bl0ANDrSWfXRoo36RsagikmhIhOGJqAAVHNNk8uoaAAMg9L2DiQgoAC054ycVOenJHKQVKCWAJ4RvKAAvN6QvpBvkIFEi0yqgepA+v09EtjKgAIw7HYFWKaIA)

```ts
let mySquare = createSquare({ colour: "red", width: 100 });
```

```text {filename="Error generado"}
Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
  Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
```

Sortear estos controles es realmente sencillo.
El método más sencillo es simplemente utilizar una aserción de tipo:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWdB2DATgCgBLAOwBcYAzAQwGNJQBlARwFd7pIBhOBVpkA5qADeJUKEZwANggD8qRFWiURAbimgA7mQAmVABbLQFTgFsARjG0BfEiVqcKjKmUEze9Gh268ABSyQqKo-jz8gsIiAJSo4jLyCCpqGpqgkfSoFjYwoPYSOrxUnNAURdLSsgrQqCExAHQ1CKAAPm2gAES8Bl0ANDrSWfXRoo36RsagikmhIhOGJqAAVHNNk8uoaAAMg9L2DiQgoAC054ycVOenJHKQVKCWAJ4RvKAAvN6QvpBvkIFEptjKgAIw7PagOAAByYZCoz1QO0aeEK9EQbC4kQE81imiAA)

```ts
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```

Sin embargo, un mejor enfoque podría ser agregar una firma de índice de cadena si estás seguro de que el objeto puede tener algunas propiedades adicionales que se usan de alguna manera especial.
Si `SquareConfig` puede tener propiedades `color` y `width` con los tipos anteriores, pero *también* puede tener cualquier cantidad de otras propiedades, entonces podríamos definirlo así:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMoEcCucoQMID2IMwA5sgN4BQyyCBANgVAPwBcyAzmFKKQNw1kAd2AATMAAt2yEJgC2AI2iDaAbQAOUAhoByceRA7deIUgF0OcEAE9BAXyA)

```ts
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

Aquí estamos diciendo que `SquareConfig` puede tener cualquier cantidad de propiedades, y siempre que no sean `color` o `width`, sus tipos no importan.

Una última forma de evitar estas comprobaciones, que puede resultar un poco sorprendente, es asignar el objeto a otra variable:
Dado que la asignación de `squareOptions` no se someterá a controles excesivos de propiedades, el compilador no te dará un error:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMoEcCucoQMID2IMwA5sgN4BQyyCBANgVAPwBcyAzmFKKQNw1kAd2AATMAAt2yEJgC2AI2iDaAbQAOUAhoByceRA7deIUgF0OcEAE9BAXypUYmEAjDAidXHEgZsuAAU9MRkHP44+EQkpACUHBR0jMzGPHz8yJFwHHJK0Mj2lEK4YJhQIEW0tPRMUBwhMQB0NczIAD5tyABEuGJdADRCtFn10WSNohKSyCxJoaQT4lLIAFRzTZPLHABMAAyDtPYOVAD0J8gAtFcImGBXF1QMEGBcWJEA8hoeRJzIALyUJJMMocHoQPr9ERLSQcACMu12BUETxe8hsEVw-28EF8EAxEECnDeuE+3xAnFi-CAA)

```ts
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
```

La solución anterior funcionará siempre que tengas una propiedad común entre `squareOptions` y `SquareConfig`.
En este ejemplo, era la propiedad `width`. Sin embargo, fallará si la variable no tiene ninguna propiedad de objeto común. Por ejemplo:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYME4BQBLAOwBcYAzAQwGNJQBlARwFcLpIBhOQs-Ac1ADeuUKCpwANggD8qRMWhFeAbmGgA7vgAmxABYzQhJgFsARjBUBfXLjJNCVYvi6i2FUoxZsAFGO59UHqwcXDy8AJSoAqISCLLyikqgQRSohqYwoBaCqmzETNCE2SIiYpLQqL6hAHSlCKAAPvWgAERsms0ANKoiyRUhfFUa2jqgUtF+vINauqAAVOPVQzOoaAAMXSIWlrggoAC0B1RMxAd7uOKQxKCIzEEA8gAOjlyIoAC8gtGS+aitkO2ZFQXK5GACegTY7xckDckAhkC8N08kEez0IiDCSiAA)

```ts
let squareOptions = { colour: "red" };
let mySquare = createSquare(squareOptions);
```

```text {filename="Error generado"}
Type '{ colour: string; }' has no properties in common with type 'SquareConfig'.
```

Ten en cuenta que para un código simple como el anterior, probablemente no deberías intentar "eludir" estas comprobaciones.
Para literales de objetos más complejos que tienen métodos y mantienen el estado, es posible que debas tener en cuenta estas técnicas, pero la mayoría de los errores de propiedad excesivos son en realidad bugs.

Eso significa que si tienes problemas excesivos en la verificación de propiedades para algo, es posible que debas revisar algunas de tus declaraciones de tipo.
En este caso, si está bien pasar un objeto con una propiedad `color` o `colour` a `createSquare`, debes corregir la definición de `SquareConfig` para reflejar eso.

## Tipos extendidos {#extending-types}

Es bastante común tener tipos que podrían ser versiones más específicas de otros tipos.
Por ejemplo, podríamos tener un tipo `BasicAddress` que describa los campos necesarios para enviar cartas y paquetes en los EE. UU.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgEJwM7AQQQCZ5QQYbIDeAUMsiHALYQD8AXMhmFKAOYDcVbHCBDCt2nEL34JgYAJ6iO3PtQQB7AK7go8geMnUADqvZwANgGFVeCAr18AvkA)

{{< content-ads/middle-banner-2 >}}

```ts
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
```

En algunas situaciones eso es suficiente, pero las direcciones a menudo tienen un número de unidad asociado si el edificio en una dirección tiene varias unidades.
Luego podemos describir una `AddressWithUnit`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgIIBN1QgZxwdWDAAsBVEI5AbwChlkQ4BbCAfgC5kcwpQBzANx1kAVwphO3XiEE0A9HIB6ylapXCpECBK49+Q+giIBPSXpkHkCAPZiep3dNn0ADte5wANgGFr6CGZOQgC+QA)

```ts
interface AddressWithUnit {
  name?: string;
  unit: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
```

Esto hace el trabajo, pero la desventaja aquí es que tuvimos que repetir todos los demás campos de `BasicAddress` cuando nuestros cambios eran puramente aditivos.
En su lugar, podemos ampliar el tipo `BasicAddress` original y simplemente agregar los nuevos campos que son exclusivos de `AddressWithUnit`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgEJwM7AQQQCZ5QQYbIDeAUMsiHALYQD8AXMhmFKAOYDcVbHCBDCt2nEL34JgYAJ6iO3PtQQB7AK7go8geMnUADqvZwANgGFVeCAr18AvhQqhIsRCnyFiGAOoyAFgCqIDLIEAAekCB4pOhYuAREJOT8mjK2ShT2QA)

```ts
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
 
interface AddressWithUnit extends BasicAddress {
  unit: string;
}
```

La palabra clave `extends` en una `interface` nos permite copiar efectivamente miembros de otros tipos con nombre y agregar los nuevos miembros que queramos.
Esto puede ser útil para reducir la cantidad de declaraciones de tipo repetitivas que tenemos que escribir y para señalar la intención de que varias declaraciones diferentes de la misma propiedad podrían estar relacionadas.
Por ejemplo, `AddressWithUnit` no necesitaba repetir la propiedad `street` y debido a que `street` se origina en `BasicAddress`, el lector sabrá que esos dos tipos están relacionados de alguna manera.

Las "interfaces" también pueden extenderse desde múltiples tipos.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMIHsA27YFdPIDeAUMsgljgFzIDOYUoA5gNzEC+xxoksiKqYFASYUJMlDgATYLlo0QuALYAjaG07dw0eEjSU8mQcNHIIAD0ggptfdkMAaNEJFjNFEPXIIaGezHxjV2QAXiJScgMaACIoCClohwjJGTkaABYAJiT2FiA)

```ts
interface Colorful {
  color: string;
}
 
interface Circle {
  radius: number;
}
 
interface ColorfulCircle extends Colorful, Circle {}
 
const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};
```

## Tipos de intersección {#intersection-types}

La `interface` nos permitió crear nuevos tipos a partir de otros tipos extendiéndolos.
TypeScript proporciona otra construcción llamada *tipos de intersección* que se utiliza principalmente para combinar tipos de objetos existentes.

Un tipo de intersección se define usando el operador `&`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMIHsA27YFdPIDeAUMsgljgFzIDOYUoA5gNzEC+xoksiKqwKAkwoSZKHAAmwXLRohcAWwBG0Np2JgAngAd+lPJgFCRyALxoDMfMgBkaQcIgsgA)

```ts
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;
```

Aquí, hemos cruzado `Colorful` y `Circle` para producir un nuevo tipo que tiene todos los miembros de `Colorful` *y* `Circle`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUAJYB2ALjAGYCGAxpKAMJwA2C5Ark6AN56ijXMEqRCWjEA5gG48AX0KkKNOvQLRqTOjz7RKAEwJsUoImwC2AIxjS5IUAFoH1NiQd287ItRIE4RULp0AdwAKalV1SFRGFmh2TgAyBnCNAEpuXn5fRGZIADoWcWCAA2iEUEDKRFAAEi4wtQ1cgRiZIpTpPgEibMaC4oAlPQMqiqra+ojcnX1DVvbZPDxbOABrSgBPPADKEK5MmNQAInMmNkhDgBpQaeHULDRQGXmlsDg4AAdELaDgveahUCHaCQXSXa6UAi6Qx3B5PSRAA)

```ts
function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}
 
// okay
draw({ color: "blue", radius: 42 });
 
// oops
draw({ color: "red", raidus: 42 });
```

```text {filename="Error generado"}
Argument of type '{ color: string; raidus: number; }' is not assignable to parameter of type 'Colorful & Circle'.
  Object literal may only specify known properties, but 'raidus' does not exist in type 'Colorful & Circle'. Did you mean to write 'radius'?
```

## Interfaces vs. Intersecciones {#interfaces-vs-intersections}

Acabamos de ver dos formas de combinar tipos que son similares, pero que en realidad son sutilmente diferentes.
Con las interfaces, podríamos usar una cláusula `extends` para extendernos desde otros tipos, y pudimos hacer algo similar con las intersecciones y nombrar el resultado con un alias de tipo.
La principal diferencia entre los dos es cómo se manejan los conflictos, y esa diferencia suele ser una de las razones principales por las que elegirías uno sobre el otro entre una interfaz y un alias de tipo de intersección.

## Tipos de objetos generics {#generic-object-types}

Imaginemos un tipo `Box` que puede contener cualquier valor: `string`s, `number`s, `Jirafa`s, lo que sea.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgEIHsAeyDeAoZZBdcCcAZwC5k4QBPAbjwF8g)

```ts
interface Box {
  contents: any;
}
```

En este momento, la propiedad `content` está tipada como `any`, lo cual funciona, pero puede provocar accidentes en el futuro.

En su lugar podríamos usar `unknown`, pero eso significaría que en los casos en los que ya conocemos el tipo de `contents`, necesitaríamos realizar comprobaciones de precaución o usar aserciones de tipo propensas a errores.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgEIHsAeyDeAoZZBdcCcAZwC5kBXEAaxHQHcQBuPAXzzwBsIwyTNQzYAvLgJESkCtQBEACwi9e6ZM3RReAE3kAaLhzwB6ExpTEauosoT1kAckwA6YqQqO8wGMgAUYACeAA4Q6L6u7rJg5Mhi8cjy5GBQoADm8gCUkoTu5Oj8LmppfpEyZDEuYOgAMizQAMJw5BB+mZkc3KbmWhbS1jq0LchwyEGhI+QtUGDAJHh5BRBF6CWlbuUUk8jJqSBpmVW19VBNLW0dQA)

```ts
interface Box {
  contents: unknown;
}
 
let x: Box = {
  contents: "hello world",
};
 
// podemos verificar 'x.contents'
if (typeof x.contents === "string") {
  console.log(x.contents.toLowerCase());
}
 
// o podemos utilizar aserciones de tipos
console.log((x.contents as string).toLowerCase());
```

Un enfoque seguro sería, en su lugar, crear diferentes tipos de `Box` para cada tipo de `contents`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGY1oFAEsA7AFxgDMBDAY0lADkBXAWwCMYAhOAD1AG8dRQlOMUjEUoAk1bQA3DgC+OfCOgVqoAMpFohAOYdufAUJFjUibXrmLlJVVRoc4AG0jkCB3v0HCSZ0MxwLm4E1kA)

```ts
interface NumberBox {
  contents: number;
}
 
interface StringBox {
  contents: string;
}
 
interface BooleanBox {
  contents: boolean;
}
```

Pero eso significa que tendremos que crear diferentes funciones, o sobrecargas de funciones, para operar en estos tipos.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgHIFcC2AjaAhAewA9kBvAKGWQQPAnAGcAuZELXKAbnIF9zzQkWIhQBlMFFABzQiQpUadRiwYTp3PgLrCkyQgQA2EOCFllK1WpGXJsBQ8ZAbyAehfIAtF4TowXj+Qw6CAIYMC0yAwQYADCVvRgDAAUdkQs4pIgMsQANKwQAO5xSokqalkAlCwAbgTAACbcQSFhEVGx8YwpxCwYOPi5+UWdpazs0FXItQ1NwaHhIJHRxdaJ3Wl69kYmsnkghSsJzLZbjpPTjYFzrYvth12pLKSWJccmAJ7IPHsHI28g7wq5ioqQAdIpVgxkABeIb3RIaIA)

```ts
function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
  box.contents = newContents;
}
```

Eso es un montón de repeticiones. Además, es posible que más adelante necesitemos introducir nuevos tipos y sobrecargas.
Esto es frustrante, ya que nuestros tipos de box y sobrecargas son todos iguales.

En su lugar, podemos crear un tipo *genérico* `Box` que declare un *parámetro de tipo*.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgTwAcIA+ZAbwChlkF1wJwBnALmQOIG5KBfIA)

```ts
interface Box<Type> {
  contents: Type;
}
```

Podrías leer esto como "Un `Box` de `Type` es algo cuyo `contents` tiene el tipo `Type`".
Más adelante, cuando nos referimos a `Box`, tenemos que dar un *argumento de tipo* en lugar de `Type`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgTwAcIA+ZAbwChlkF1wJwBnALmQOIG5KBfSgen7IAtKIQBXMKOGUANhDDIARljYYcTMFFABzEpyA)

```ts
let box: Box<string>;
```

Piensa en `Box` como una plantilla para un tipo real, donde `Type` es un marcador de posición que será reemplazado por algún otro tipo.
Cuando TypeScript ve `Box<string>`, reemplazará cada instancia de `Type` en `Box<Type>` con `string` y terminará trabajando con algo como `{ content: string }`.
En otras palabras, `Box<string>` y nuestro `StringBox` anterior funcionan de manera idéntica.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgTwAcIA+ZAbwChlkF1wJwBnALmQOIG5KBfS0SLEQoAymCigA5hkwVqtepGZsm4qdz6UANhDDIARlgCCbGdlUSQksgF4KChsuQAiABYQtW9M+Q9uhzCMAOjpHMCZuAHpImmQAPQB+Sm1dAyxUNjFLaSxkO3IHJXC2ZwB3dCgtABMfP0oA1BDFRnComJpEoA)

```ts
interface Box<Type> {
  contents: Type;
}
interface StringBox {
  contents: string;
}
 
let boxA: Box<string> = { contents: "hello" };
boxA.contents;
        
(property) Box<string>.contents: string
 
let boxB: StringBox = { contents: "world" };
boxB.contents;
        
(property) StringBox.contents: string
```

{{< content-ads/middle-banner-3 >}}

`Box` es reutilizable en el sentido de que `Type` se puede sustituir por cualquier cosa. Eso significa que cuando necesitamos un `Box` para un nuevo tipo, no necesitamos declarar un nuevo tipo `Box` en absoluto (aunque ciertamente podríamos hacerlo si quisiéramos).

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgTwAcIA+ZAbwChlkF1wJwBnALmQOIG5KBfSy0JFiIUAQUKEANiio0A9HOQA6FUt78FyAMpwAtijhNkAcnK16kZm3FSUPY2rBExE6RkzIAvGizYb0kk4gA)

```ts
interface Box<Type> {
  contents: Type;
}
 
interface Apple {
  // ....
}
 
// Igual a '{ contents: Apple }'.
type AppleBox = Box<Apple>;
```

Esto también significa que podemos evitar las sobrecargas por completo usando [funciones genéricas](/typescript/handbook/funciones#generic-functions).

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgTwAcIA+ZAbwChlkF1wJwBnALmQOIG5KBfSygPQDkAWjEIArmDEjKMCSARhg9ZEwhgAwvUjM8RUgAoARljYYcHUgBpkICAHdtDZmysBKCtWSnMAOjoXMCZkAF47R2ddYO4eIA)

```ts
function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}
```

Vale la pena señalar que los alias de tipo también pueden ser generics. Podríamos haber definido nuestra nueva interfaz `Box<Type>`, que sería:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgTwAcIA+ZAbwChlkF1wJwBnALmQOIG5KBfIA)

```ts
interface Box<Type> {
  contents: Type;
}
```

usando un alias de tipo en su lugar:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAQg9gDwDwBVwQHxQLxQN4BQUUAxnAHbASUDOAXFGpANwEC+zQA)

```ts
type Box<Type> = {
  contents: Type;
};
```

Dado que los alias de tipos, a diferencia de las interfaces, pueden describir más que solo tipos de objetos, también podemos usarlos para escribir otros tipos de tipos auxiliares genéricos.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYDsGBQAXATwAdJQB5aAOQFcAbOgHgBUTIA+UAXlFdNAA+oAHb06AblwE2FYZEoBZAIbDCLNpx58yQ7QG0AupOn9ycxSsKVaDdaU0VqYxmfnRlqux3aSQofwB6APxSRKbm7pbWYgDK+NAAlsIA5ojcsm4eVk62iPFJyT64foFBQA)

```ts
type OrNull<Type> = Type | null;
 
type OneOrMany<Type> = Type | Type[];
 
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
           
type OneOrManyOrNull<Type> = OneOrMany<Type> | null
 
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
               
type OneOrManyOrNullStrings = OneOrMany<string> | null
```

Volveremos a los alias de tipo en un momento.

### El tipo `Array` {#the-array-type}

Los tipos de objetos generics suelen ser algún tipo de tipo de contenedor que funciona independientemente del tipo de elementos que contienen.
Es ideal que las estructuras de datos funcionen de esta manera para que sean reutilizables en diferentes tipos de datos.

Resulta que hemos estado trabajando con un tipo como ese a lo largo de este manual: el tipo `Array`.
Siempre que escribimos tipos como `number[]` o `string[]`, en realidad es solo una abreviatura de `Array<number>` y `Array<string>`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAEzgZTgWwKZQBYxgDmAFAG4CGANiNgFyICCATsxQJ4A8AzlM4UQB8ASkQBvAFCJEAehmIAdEokBfCRKq5EmdizbsGvfsQDaAXUQBeRCYBEebFSpxbAGkS2A7nGZVktswBudTlEbBh8bGZEOGBESO5sRG9mAGsAQglUDBx8ARIdPQ5hYOysXAJiEjBsTyZWDhJ7R2c3DxS-W2ESoA)

```ts
function doSomething(value: Array<string>) {
  // ...
}
 
let myArray: string[] = ["hello", "world"];
 
// cualquiera de estos funciona!
doSomething(myArray);
doSomething(new Array("hello", "world"));
```

Al igual que el tipo `Box` anterior, `Array` en sí es un tipo genérico.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDsHsBkEsBGAuUAXATgVwKYCh5I0cMAzAQwGMdQA5LAW0RNAG8BfAoki60AZUyEA5m06FiZKjQBC0aABsc5SGK6TeNfgE8mitSFABaE5SxoTR9T2mgAghgzltAHgAq2gA44AfGzygoMAAVMEBgcGgAOI4aADOoNAYoHGxCWgAFjRKkMKZiaToWaDkjs4AdOGgwcDhOXkZqJCMzBgA3HjhIWGB1aAASjgM0ABuOOnFCuRxaKA4Sgw4RKCkGNAMJaqlTtqbACagGLFYGJAJ8GiVvTXhntCeABQAlKge3qAAPqBYkHs4pIQcHsOl1QlVInZPN5fglIDgAO5zBZLeLoaCbEplbQAGn2h2OpwmNDhiPq+WghUyNG2FXBtUCniwcQyD3KbIuQziry8OAA2gBdF6gZpMEggwKGNmVdhAA)

```ts
interface Array<Type> {
  /**
   * Obtiene o asigna la longitud del array.
   */
  length: number;
 
  /**
   * Remueve el último elemento del array y lo devuelve.
   */
  pop(): Type | undefined;
 
  /**
   * Añade un nuevo elemento al array, y retorna la nueva longitud del array.
   */
  push(...items: Type[]): number;
 
  // ...
}
```

JavaScript moderno también proporciona otras estructuras de datos que son genéricas, como `Map<K, V>`, `Set<T>` y `Promise<T>`.
Todo lo que esto realmente significa es que debido a cómo se comportan `Map`, `Set` y `Promise`, pueden funcionar con cualquier conjunto de tipos.

### El tipo `ReadonlyArray` {#the-readonlyarray-type}

`ReadonlyArray` es un tipo especial que describe arrays que no deben cambiarse.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYME4BQAzAVwDsBjAFwEs5jQATOAZXMP3wAoA3AQwBtDIKUACVI3BsV4BPAIKxuUgDyJy0SsQDmAPgCUoAN65QoEKADqkUKW61oYuqHzwAtqADkPfoLcA6P0asaFUCABylQAF5QTwFEH0ReSlJIdh0AbgDSILheSB9eOA12AAMAFQALS3xKJHJovgFQSkRQABJ9GMEAbQAGAF0AX2L03ADTPx8AI0I6gHdLa2I3OucZ7nJLDwbvHwDOuJDCRHL2ACJK3gKAQlORgaA)

```ts
function doStuff(values: ReadonlyArray<string>) {
  // Podemos leer desde 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
 
  // ...pero no podemos mutar 'values'.
  values.push("hello!");
}
```

```text {filename="Error generado"}
Property 'push' does not exist on type 'readonly string[]'.
```

Al igual que el modificador `readonly` para propiedades, es principalmente una herramienta que podemos usar con la siguiente intención.
Cuando vemos una función que devuelve `ReadonlyArray`s, nos dice que no debemos cambiar el contenido en absoluto, y cuando vemos una función que consume `ReadonlyArray`s, nos dice que podemos pasar cualquier array a esa función sin preocuparnos de que cambie su contenido.

A diferencia de `Array`, no existe un constructor `ReadonlyArray` que podamos usar.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwDYCcBmAUAHaQDuoASpAIYAmcBANgJ4CCsljAFAETSTVcAaUFwDmvSAUHCARvQCukLgEoA3EA)

```ts
new ReadonlyArray("red", "green", "blue");
```

```text {filename="Error generado"}
'ReadonlyArray' only refers to a type, but is being used as a value here.
```

En su lugar, podemos asignar `Array`s normales a `ReadonlyArray`s.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYewdgzgLgBATiAgnOBDAngLhgJQKaoAm4ANusmugDzRwCWYA5gHwwC8MA2gERx6HcANDG6M+eMEJEAjEgFc83ALoBuIA)

```ts
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
```

Así como TypeScript proporciona una sintaxis abreviada para `Array<Type>` con `Type[]`, también proporciona una sintaxis abreviada para `ReadonlyArray<Type>` con `readonly Type[]` .

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYME4BQAzAVwDsBjAFwEs5jQATOAZXMP3wAoA3AQwBtDIKUNEjcGxXgE9QictErEA5gG0AugEpQAb1yhQIPYaPGToAHoXLV6xd36wAdUihS3WiLGh88ALagA5Dz8gv4AdOF2pDSyLnAADtIAvKBBAoihiLyUpJDs6gDckdFwvJChvHCK7AAGACoAFs74lEjkKXwCoJSIoAAkWqmCygAMqgC+1QW4dgbhoQBGhG0A7s6uxP5tPkvc5M6BHSGhdoPpcYSI9ewARI28FQCE11NjQA)

```ts
function doStuff(values: readonly string[]) {
  // Podemos leer desde 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
 
  // ...pero no podemos mutar 'values'.
  values.push("hello!");
}
```

```text {filename="Error generado"}
Property 'push' does not exist on type 'readonly string[]'.
```

Una última cosa a tener en cuenta es que, a diferencia del modificador de propiedad `readonly`, la asignabilidad no es bidireccional entre `Array`s y `ReadonlyArray`s normales.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygCwEYAMaBQAbSAF1AA9VpIBDAEzgDt8BPURI6AS3oHMBtAXVABeUAIDcBYqCao2nHgOGj+E3KSVMJLEaTFA)

```ts
let x: readonly string[] = [];
let y: string[] = [];
 
x = y;
y = x;
```

```text {filename="Error generado"}
The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.
```

{{< content-ads/middle-banner-4 >}}

### Tipos de tuplas {#tuple-types}

Un *tipo tupla* es otro tipo de tipo `Array` que sabe exactamente cuántos elementos contiene y exactamente qué tipos contiene en posiciones específicas.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAysBOBLAdgcwHIFcC2AjC8ACgIaLxQC8UA2gM4IqoA0UyO+8AugNwBQA9PyjCRoseKgA9aTNlzJQA)

```ts
type StringNumberPair = [string, number];
```

Aquí, `StringNumberPair` es un tipo de tupla de `string` y `number`.
Al igual que `ReadonlyArray`, no tiene representación en tiempo de ejecución, pero es importante para TypeScript.
Para el sistema de tipos, `StringNumberPair` describe arrays cuyo índice `0` contiene un `string` y cuyo índice `1` contiene un `number`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAEzgZTgWwKZQBYxgDmAFAA4CGMATgFyIDaAzlNYUQDSJgiYBG2agF0AlIgDeAKESIICFogqIAvIko0GABiEBuaYgD0BmTIB6Afn1ywCvirVVqDAIy79Rk4gvvjAOn+SAL6SkqgYOPjsJAwARHjYADYJcDFcACwATKI6QA)

```ts
function doSomething(pair: [string, number]) {
  const a = pair[0];
       
const a: string
  const b = pair[1];
       
const b: number
  // ...
}
 
doSomething(["hello", 42]);
```

Si intentamos indexar más allá del número de elementos, obtendremos un error.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwBYCcBmAUAGYCuAdgMYAuAlnCaACZwDKcAtpBQBZUkDmAFAAcAhlWioA2ogrQevADSgSRVgCMYAXQCUoAN55QoEKAB0ZvAdBla0q6AC8oEWIloNAbjwBfIA)

```ts
function doSomething(pair: [string, number]) {
  // ...
 
  const c = pair[2];
}
```

```text {filename="Error generado"}
Tuple type '[string, number]' of length '2' has no element at index '2'.
```

También podemos [deestructurar tuplas ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring) usando la desestructuración de arrays de JavaScript.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAEzgZTgWwKZQBYxgDmAFAM5QBOhRAEgIZl4BciA2hdcQDSJgiYARtkoBdAJSIA3gChEiCAgrtCABxBQ0VGrzyM8oxAF5EnGgyYBuGXIVK4AG2wA6B3FJqNWrkXHX5APQB8iGhiAB6APw28opgZI4ubqR6TH62QWFhUTIAvkA)

```ts
function doSomething(stringHash: [string, number]) {
  const [inputString, hash] = stringHash;
 
  console.log(inputString);
                  
const inputString: string
 
  console.log(hash);
               
const hash: number
}
```

> Los tipos de tupla son útiles en API fuertemente basadas en convenciones, donde el significado de cada elemento es "obvio".
> Esto nos da flexibilidad en el nombre que queramos darle a nuestras variables cuando las desestructuramos.
> En el ejemplo anterior, pudimos nombrar los elementos `0` y `1` como quisimos.
> Sin embargo, dado que no todos los usuarios tienen la misma visión de lo que es obvio, puede valer la pena reconsiderar si usar objetos con nombres de propiedad descriptivos puede ser mejor para tu API.
>

Aparte de esas comprobaciones de longitud, los tipos de tupla simples como estos son equivalentes a tipos que son versiones de `Array`s que declaran propiedades para índices específicos y que declaran `length` con un tipo literal numérico.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMpiqA5gOQK4C2ARtAApzBTIDeAUMsgPSPIDOADhAsHADbAAvCABNk7KAHtOUMMAit6yXhBBYwACwBcyAEwBuRQAZtrDNgMMAjNpCESUA4ubIA8hujIA5AEEoUOACeADymmKrIAD7ItsTQAHyeyAQQsVCsAHSZiqz8SAAUpnAyAPw2dtAANMgqwqXR5VAAlNq+-sGh2JH1qXEGAL5AA)

```ts
interface StringNumberPair {
  // propiedades especializadas
  length: 2;
  0: string;
  1: number;
 
  // Otros miembros 'Array<string | number>' ...
  slice(start?: number, end?: number): Array<string | number>;
}
```

Otra cosa que te puede interesar es que las tuplas pueden tener propiedades opcionales escribiendo un signo de interrogación (`?` después del tipo de elemento).
Los elementos de tupla opcionales solo pueden aparecer al final y también afectan el tipo de `length`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAoglsAFhATgJgCYHkUGYNQC8UA2gHYCuAtgEaoA0UltDT1dKA-ALoDcAUPwBmFMgGNgcAPZkoAZwjAAwlKkoMcMgENgEABRjV6gFywEydNjwYAlFADe-KFENk5wUgA9GIRgC9uIhcjDAFnAHpw52iY5wA9TkFnVzkpABsIADo0qQBzPQADAAUUKQA3OAwIAkM1DW1dOShELQIAEnta9WyIMlykAF8oDSpeuWk3ApswqEjY+YXFpaWE-gGgA)

```ts
type Either2dOr3d = [number, number, number?];
 
function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;
              
const z: number | undefined
 
  console.log(`Provided coordinates had ${coord.length} dimensions`);
                                                  
(property) length: 2 | 3
}
```

Las tuplas también pueden tener elementos rest, que tienen que ser de tipo array/tupla.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAysBOBLAdgcwHIFcC2AjC8AQgPbEA2EAhsgM5QC8UA2jQiqgDRTI77xcA6IblIVqTALoSA3AChQkWGzQlyVWljwEGzVkjSDho9ZK48t8GfPDRVY2nH0Ze2xkyECRa8RK572Zi6W0kA)

```ts
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
```

- `StringNumberBooleans` describe una tupla cuyos dos primeros elementos son `string` y `number` respectivamente, pero que puede tener cualquier número de `boolean`s siguientes.
- `StringBooleansNumber` describe una tupla cuyo primer elemento es `string` y luego cualquier número de `boolean`s y termina con un `number`.
- `BooleansStringNumber` describe una tupla cuyos elementos iniciales son cualquier número de `boolean`s y terminan con un `string` y luego un `number`.

Una tupla con un elemento rest no tiene un `length` establecido; solo tiene un conjunto de elementos conocidos en diferentes posiciones.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAysBOBLAdgcwHIFcC2AjC8AQgPbEA2EAhsgM5QC8UA2jQiqgDRTI77xcA6IblIVqTALoSA3ACgA9PKgBaVQGNMwVctlritYFEoAuWGzRY8BEuSq0GzAEQALCGTLFHXAIwzd+1ihcUzgkC15rUTs6RiZHfEpNRAAzTDIvKAAmLgRMCD89Ayg1EPMMCKIo6hinAHdieDIAEwyAZhz4PK5kyjIaCA6uqB6+gahc-OkgA)

```ts
const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];
```

¿Por qué podrían ser útiles los elementos opcionales y elementos rest?
Bueno, permite que TypeScript corresponda tuplas con listas de parámetros.
Los tipos de tuplas se pueden usar en [parámetros y argumentos rest](/typescript/handbook/funciones#rest-parameters-and-arguments), de modo que lo siguiente:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAJwKYEMAmAhEUoICSYADngBQB016yA5gM4BciA2g1MjGHQDSJgQAWwBGqZP2qURcOABsMYVgF1lASkQBvAFCJEEBBzZh0Q1PwBu4hvDCTq3MlGWIAvIlqMA3LsQB6P0QpbQBfIA)

```ts
function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
  // ...
}
```

básicamente equivale a:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAJwKYEMAmAhEUoICSYADngBRjoC2qAXIgM5TIxgDmANIgG6rKN4YBmBDUARv24A6WWzJQG4uHAA2GMAG0AugEpEAbwBQiRAHoziWdKMBfIA)

```ts
function readButtonInput(name: string, version: number, ...input: boolean[]) {
  // ...
}
```

Esto es útil cuando quieres tomar una cantidad variable de argumentos con un parámetro rest y necesitas una cantidad mínima de elementos, pero no quieres introducir variables intermedias.

### Tipos de tuplas `readonly` {#readonly-tuple-types}

Una nota final sobre los tipos de tupla: los tipos de tupla tienen variantes de solo lectura y se pueden especificar colocando un modificador `readonly` delante de ellos, al igual que con la sintaxis abreviada de array.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAEzgZTgWwKZQBYxgDmAFAA4CGMATgFyLXYWpgA2AnogNoDOU1hIgBpEYEJgBG2agF0AlIgDeAKESIA9OrXaduvdoB6R4ydNmTqjVoB0t5QF8gA)

```ts
function doSomething(pair: readonly [string, number]) {
  // ...
}
```

Como es de esperar, escribir en cualquier propiedad de una tupla `readonly` no está permitido en TypeScript.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYAsAGAUAGYCuAdgMYAuAlnCaACZwDKcAtpBQBZUkDmAFAAcAhlWipokYYxIAbAJ6gA2ogrQevADSgSRVgCMYAXQCUoAN55QoEWKU4joALygARJ0izZcAISuA3HgAvkA)

```ts
function doSomething(pair: readonly [string, number]) {
  pair[0] = "hello!";
}
```

```text {filename="Error generado"}
Cannot assign to '0' because it is a read-only property.
```

Las tuplas tienden a crearse y no modificarse en la mayoría del código, por lo que anotar tipos como tuplas `readonly` cuando sea posible es una buena opción predeterminada.
Esto también es importante dado que los literales de array con aserciones `const` se inferirán con tipos de tupla `readonly`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUADaQAuoADnAJYB2pAvKANoYA0oWAuqAIaKgDGcaomIBuPHgBmAV2r9ilIaAAmlEdzmQAYvAC2AeWiUA5jQAUjAB5sAnh1SNq03QCMYbJ65gcAlKADeeKCg0CTS0NSgALLcxAAWAHSIAI7QxGaWoABUWeigANSgNtm5aD7iAL4SquqaOnAGRqbUZhQ0xOVAA)

```ts
let point = [3, 4] as const;
 
function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}
 
distanceFromOrigin(point);
```

```text {filename="Error generado"}
Argument of type 'readonly [3, 4]' is not assignable to parameter of type '[number, number]'.
  The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.
```

Aquí, `distanceFromOrigin` nunca modifica sus elementos, pero espera una tupla mutable.
Dado que el tipo de `point` se dedujo como `readonly [3, 4]`, no será compatible con `[number, number]`, ya que ese tipo no puede garantizar que los elementos de `point` no sean mutados.

{{< content-ads/bottom-banner >}}
