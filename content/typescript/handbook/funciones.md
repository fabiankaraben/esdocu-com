---
linkTitle: "Más acerca de funciones"
title: "Más acerca de funciones en TypeScript - TypeScript en Español"
description: "Aprende cómo funcionan las funciones en TypeScript."
weight: 5
type: docs
---

# Más sobre Funciones en TypeScript

Las funciones son el componente básico de cualquier aplicación, ya sean funciones locales, importadas de otro módulo o métodos de una clase.
También son valores y, al igual que otros valores, TypeScript tiene muchas formas de describir cómo se pueden llamar funciones.
Aprendamos a escribir tipos que describan funciones.

## Expresiones de tipo de función {#function-type-expressions}

La forma más sencilla de describir una función es con una *expresión de tipo de función*.
Estos tipos son sintácticamente similares a las funciones de flecha:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAcwE4FN1XagFMMALkVwENiBnKVGMZASkQF4A+RANzhgBNGBvALAAoRIgK4ARAAl0AG1lwANIgDqcVLO4T6AbmEBfYcNCRYCRAAcaYKABU4AYQQU4s9LgqVqtBokEjECGdXdAA6BWQPXQMjITRMbDwrWjtHYLddIA)

```ts
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole);
```

La sintaxis `(a: string) => void` significa "una función con un parámetro, llamado `a`, de tipo `string`, que no tiene un valor de retorno".
Al igual que con las declaraciones de funciones, si no se especifica un tipo de parámetro, implícitamente es `any`.

> Ten en cuenta que el nombre del parámetro es **obligatorio**. ¡El tipo de función `(string) => void` significa "una función con un parámetro llamado `string` de tipo `any`"!
>

Por supuesto, podemos usar un alias de tipo para nombrar un tipo de función:

[Try this code ↗](https://www.typescriptlang.org/play/#code/C4TwDgpgBA4gThCwBiBXAdgY2ASwPbpQC8UAFAIYBcUAzsHDugOYCUxAfFAG544AmAbgCwAKABmGbPkJMESCHFJj01eIhSTcBNgG9RUKAHpDUAHTnRAXyA)

```ts
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  // ...
}
```

## Firmas de llamadas {#call-signatures}

En JavaScript, las funciones pueden tener propiedades además de ser invocables.
Sin embargo, la sintaxis de expresión del tipo de función no permite declarar propiedades.
Si queremos describir algo invocable con propiedades, podemos escribir una *firma de llamada* en un tipo de objeto:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/C4TwDgpgBAIhDOBjATgSwEYEN0BsIDEBXAO0WFQHtioBeKAbwFgAoKKAEwRVTHKoC4o8YGmIBzANws2ACngUAthACCyMYOKEF6CMgCUg9BQp5MxKcwC+FgGYkylauwoBlRRGAALVOJk3ignBIaFi4BPZ8xHoM0lCIVPJ4AHQ4FGJ+xEmcwTyRUADUUABEUMgehMjEEOzFBVD+MgBsenoWliwsdqR5CiBEpHLuqupQmtq60UyspeWVQkNqUAB8UADMbSy9-YhZXGi8jrTFnDaYhDjAHHu5jkUWLM5uSl4+6Vv2rUA)

```ts
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
 
function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";
 
doSomething(myFunc);
```

Ten en cuenta que la sintaxis es ligeramente diferente en comparación con una expresión de tipo de función; usa `:` entre la lista de parámetros y el tipo de retorno en lugar de `=>`.

## Firmas de Constructores {#construct-signatures}

Las funciones de JavaScript también se pueden invocar con el operador `new`.
TypeScript se refiere a estos como *constructores* porque normalmente crean un nuevo objeto.
Puedes escribir una *firma de constructor* agregando la palabra clave `new` delante de una firma de llamada:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/C4TwDgpgBAyg9gWwgeQEYCsIGNhQLxQCGAdiANwCwAUAPQ1QC0TWArsEw9aJLIhAMJxiAZ2AAnFjjhj8UAN7UoUYhADuUABTCAXFFFiAlsQDmASl3wkaTDkpUAvnYBmLYjgNCoT4hqliLfIIi4pLA0qbyilBiEMAsYsTKalB+GgBEABYQADbZcGmmdvZAA)

```ts
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

Algunos objetos, como el objeto `Date` de JavaScript, se pueden llamar con o sin `new`.
Puedes combinar firmas de llamadas y constructores en el mismo tipo de forma arbitraria:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMJwDYYPJVQexAGcwoBXBMZAbwFgAoZZAChAH4AuZEMgWwCNoASi4kooAOYBuBkxAQA7iyKjSkkcgAicSDPoBfIA)

```ts
interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}
```

## Funciones Genéricas {#generic-functions}

Es común escribir una función donde los tipos de entrada se relacionan con el tipo de salida, o donde los tipos de dos entradas están relacionados de alguna manera.
Consideremos por un momento una función que devuelve el primer elemento de una array:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABMGAnAzlAogGwKYC2eYUAFAIaqoBci5YAngNoC6AlIgN4CwAUIolR4oIVEkqomABhYBuPgF8gA)

```ts
function firstElement(arr: any[]) {
  return arr[0];
}
```

Esta función hace su trabajo, pero desafortunadamente tiene el tipo de retorno `any`.
Sería mejor si la función devolviera el tipo del elemento del array.

En TypeScript, los *generics* se usan cuando queremos describir una correspondencia entre dos valores.
Hacemos esto declarando un *parámetro de tipo* en la firma de la función:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABMGAnAzlAogGwKYC2eYUAPACoCeADngHwAUAhqqgFyJW0DaAugJQcueRAB9E4ACZ4UYPJMQBvALAAoRIlR4oIVEhapuABl4BuNQF8gA)

```ts
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
```

Al agregar un parámetro de tipo `Type` a esta función y usarlo en dos lugares, hemos creado un vínculo entre la entrada de la función (el array) y la salida (el valor de retorno).
Ahora cuando lo llamamos sale un tipo más específico:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtVKxgGcMBRCEAWxFQwB4AVATwAcQA+AClhgC55mbANoBdAJT9BCAD7w0oRFlQhgAbgCwAKAD02+AFpDYZBkP6tu+EXhZrORPAysEAchIwlAcxdaweElbwALwExGQU1LScQgBEUDEANPAxAEaJyWAx4ho6evi28PaOzvAuqMiUKSAwPpp+qAH4IYph5FQ0GNEAjEkATEkAzNkWesg2dg5ObHKoCkoqvv4YcsGhJG2RnaJiqkA)

```ts
// s es de tipo 'string'
const s = firstElement(["a", "b", "c"]);
// n es de tipo 'number'
const n = firstElement([1, 2, 3]);
// u es de tipo undefined
const u = firstElement([]);
```

### Inferencia {#inference}

Ten en cuenta que no tuvimos que especificar `Type` en este ejemplo.
El tipo fue *inferido* - elegido automáticamente - por TypeScript.

También podemos usar múltiples parámetros de tipo.
Por ejemplo, una versión independiente de `map` se vería así:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAcCcFMBdYJbUgWgQcwHYHsYFgAoAMwFdMBjRbTUAWwENwAeASU3BNgBpQB5TjrAB8ACnqRIALlBtBAbQC6PUhWljI6abM4BKUAF4hfAbun9Y8haADehUKBiwSkGuMgA6BuBEryOgNyEAL6EhCCgAAri9LRwyKAA5JgJoAgAzqDYRKCwAJ7g0IlpsJAImOgJYWAJ4OJp0AAmKemZ2XkFiZgktABGyIqVBOTUxRB1jQZ0jCJyAEQAjLM8swBMS6CzAMyzSqAimHqGY5D1bLD7OgFAA)

```ts
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
 
// El parámetro 'n' es de tipo 'string'
// 'parsed' es de tipo 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```

Ten en cuenta que en este ejemplo, TypeScript podría inferir tanto el tipo del parámetro de tipo `Input` (del array `string` dado), como también el tipo de parámetro `Output` basado en el valor de retorno de la expresión de la función (`number`).

### Restricciones {#constraints}

Hemos escrito algunas funciones genéricas que pueden funcionar con *cualquier* tipo de valor.
A veces queremos relacionar dos valores, pero solo podemos operar con un determinado subconjunto de valores.
En este caso, podemos usar una *restricción* para limitar los tipos de tipos que un parámetro de tipo puede aceptar.

Escribamos una función que devuelva el mayor de dos valores.
Para hacer esto, necesitamos una propiedad de `length` que sea un número.
*Restringimos* el parámetro de tipo a ese tipo escribiendo una cláusula `extends`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWdG00BYAKADMBXAOwGMAXASzitABtmBzSROgHgBUAngAdIoSAA86kKgBNEoAN5sZHOgAtUVCgFsARjFABfAHwAKAIaohogDSg91kZACUS0qFAMyoSwDpWVQ1QEwBeBwCg9TdFD09QaEg6CmgWCwBuOKNxVkQxWJJ4hKSUlj1MwuNSI1JSEDZOGABBWAtBLwU4HzpnUABybX0YAG0AXT7SGmYeBqouaBboNtBw9jnuOjNhgEZ7NFH7Hb37DFGXCvq1+YBlOmgGOY7QLtAe0X6LVgYaSD7QAB9+no4HoJiQplQZlcYLd7o9Vo0eGYAESfb6QZH2ZHAvTI851MAAUVgCAAhKAAHK6AxIUCyZh9OigdQWABuYgs-UCcw0f2E8FE0B6k2mTKocDoAHkANIrWZcJHbAAM9mVSvOQA)

```ts
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
 
// longerArray es de tipo 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString es de tipo 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers no tiene una propiedad 'length'
const notOK = longest(10, 100);
```

```text {filename="Error generado"}
Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
```

Hay algunas cosas interesantes a tener en cuenta en este ejemplo.
Permitimos que TypeScript *infiera* el tipo de retorno `longest`.
La inferencia de tipos de retorno también funciona en funciones genéricas.

Debido a que restringimos `Type` a `{ length: number }`, se nos permitió acceder a la propiedad `.length` de los parámetros `a` y `b`.
Sin la restricción de tipo, no podríamos acceder a esas propiedades porque los valores podrían haber sido de otro tipo sin una propiedad `length`.

Los tipos de `longerArray` y `longerString` se infirieron en función de los argumentos.
Recuerda, los generics consisten en relacionar dos o más valores con el mismo tipo.

Finalmente, tal como nos gustaría, la llamada a `longest(10, 100)` se rechaza porque el tipo `number` no tiene una propiedad `.length`.

### Trabajar con valores restringidos {#working-with-constrained-values}

Aquí hay un error común cuando se trabaja con restricciones genéricas:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGY1oLACgAzAVwDsBjAFwEs4TQBbKkq+o+gGUhIHMKALADwAVAJ4AHSKEgAPClwAmiUAG9QAGy68+qEmwBGMUAF8AfAAp8oUHD0ArVKIkAaSwyYs2O-THwBKB+KSyq5UBKBmNrYAdBo8-KAmALxuzKz0viquVtCQFETQdJEA3K5GUmqIQVmgOXkFKuqa-KiMqWzGJXhWRvhGQA)

```ts
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
  }
}
```

```text {filename="Error generado"}
Type '{ length: number; }' is not assignable to type 'Type'.
  '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
```

Podría parecer que esta función está bien: `Type` está restringido a `{ length: number }`, y la función devuelve `Type` o un valor que coincida con esa restricción.
El problema es que la función promete devolver el *mismo* tipo de objeto que se pasó, no solo *algún* objeto que coincida con la restricción.
Si este código fuera legal, podrías escribir código que definitivamente no funcionaría:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwFstUsDkCAZEVAcwwAsAeAFQE8AHBEADw2uADO8AN7wI1OvQBc8VOQBGIGPAC+APgAUAWABQ8eDnkArGW04AaXfqIkyBGXIKKYugJSmOIANy6A9L-gAWmCwZAxgwL8AgHJYGGj4GhAMIQA3KAhkBFFxWgYZADZVXTA8AQx4OPgAXkJiUnIqPPoNAG0ARnN4ACYugGYAXS6C1x8df0rUYHgwGCgBehAhRbh4RTAoZAEEOKhWZahUkCjK+GiBCCwwEASCZPocYC75MNkcCoYEOAxkGFQQaaGIzgDAAQhKZRw4gAdBAcDQNHFoRcriANAAGVyjIA)

```ts
// 'arr' obtiene el valor { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// y falla aquí porque el array tiene un método
// 'slice', ¡pero no el objeto devuelto!
console.log(arr.slice(0));
```

### Especificar argumentos de tipo {#specifying-type-arguments}

TypeScript generalmente puede inferir los argumentos de tipo deseados en una llamada genérica, pero no siempre.
Por ejemplo, digamos que escribiste una función para combinar dos arrays:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABBOBbARjMBTAPAFQE8AHbAPgAoBDAJxoEYAuRI0gbQF0AaRWmgJmatsnAJRCSIjogDeAWABQiRDWxQQNJH3oA6FJCpRqdfqIDcigL5A)

```ts
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
```

Normalmente sería un error llamar a esta función con arrays que no coinciden:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGY1oLACgATSAYwBsBDaSUAMwFcA7YgFwEs4HRi4BbAI1YNIAHgAqATwAOkAHwAKStACMqCdIDaAXQA0oRWlVTIWgJSGNmgNz4QoALQPidZg7v5uDRMz2xQAXi5eASE5dSVdNF0MHVB1ACIAC0hSUjg4zRNLIA)

```ts
const arr = combine([1, 2, 3], ["hello"]);
```

```text {filename="Error generado"}
Type 'string' is not assignable to type 'number'.
```

Sin embargo, si tenías la intención de hacer esto, puedes especificar manualmente `Type`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXzBwFsAjLVEAHgBUBPABxAD4AKWGARgC547GBtALoAaeOwBMPPiCEBKKQxmCA3AFgAUAHpN8ALT6wyDPt0bCqAM4YxMGPAC8BYmQqUrMcgHN4AH3ipkUhAYVn4OUXFRAGYReH4AIgALEAgIHHjBWWUgA)

```ts
const arr = combine<string | number>([1, 2, 3], ["hello"]);
```

### Pautas para escribir buenas funciones genéricas {#guidelines-for-writing-good-generic-functions}

Escribir funciones genéricas es divertido y puede ser fácil dejarse llevar por los parámetros de tipo.
Tener demasiados parámetros de tipo o usar restricciones donde no son necesarias puede hacer que la inferencia sea menos exitosa y frustrar a quienes llaman a tu función.

#### Empuja los parámetros de tipo hacia abajo {#push-type-parameters-down}

Aquí hay dos formas de escribir una función que parecen similares:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABMGAnAzlAogGwKYC2eYUAjADwAqAngA54B8AFAIaqoBciN9A2gLoBKRAG8AsAChEiVHighUSNql4AGfgG5JAX0mTQkWAmRpMuQsSgAmKnTyI8ADyjEAJukQsw1Ac2VcePGFxKRk5BSV2NU0dPQkAenjPLjAQAgAjPFREJgBzODhXQUkIBExPRABeEwxsfCISUiZeUgAaRCt2gGYhLQSk9K4vahz0liKSsqhEdKqas3rLK2a2ju7eoA)

```ts
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}
 
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}
 
// a: number (bien)
const a = firstElement1([1, 2, 3]);
// b: any (mal)
const b = firstElement2([1, 2, 3]);
```

Pueden parecer idénticas a primera vista, pero `firstElement1` es una forma mucho mejor de escribir esta función.
Su tipo de retorno inferido es `Type`, pero el tipo de retorno inferido de `firstElement2` es `any` porque TypeScript tiene que resolver la expresión `arr[0]` usando la restricción de tipo, en lugar de "esperar" para resolver el elemento durante una llamada.

> **Regla**: Cuando sea posible, usa el parámetro de tipo en sí en lugar de restringirlo
>

#### Usa menos parámetros de tipo {#use-fewer-type-parameters}

Aquí tienes otro par de funciones similares:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABMGAbKBTATgRgDwAqAngA4YB8AFAIZZYBcixZA2gLoA0y4EjNWAc0bMMASkQBecogBGcOKgzUwo4aQztEAbwCwAKESIsGKCCxJaWAHQp02SqEiiA3PoC++-Y+jwktzFgATITqXABiPIgYAB6YYAAmAM6I-EJM6uJSsvKKylT6hpZqrJwF3JCMEZD6qukl2mXGpuaIljZoAQ48Lu5AA)

```ts
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}
 
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
```

Hemos creado un parámetro de tipo `Func` que *no relaciona dos valores*.
Eso siempre es una señal de alerta, porque significa que las personas que invocan y desean especificar argumentos de tipo tienen que especificar manualmente un argumento de tipo adicional sin ningún motivo.
¡`Func` no hace nada más que hacer que la función sea más difícil de leer y razonar!

> **Regla**: Utiliza siempre la menor cantidad de parámetros de tipo posible
>

#### Los parámetros de tipo deberían aparecer dos veces {#type-parameters-should-appear-twice}

A veces olvidamos que es posible que no sea necesario que una función sea genérica:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAcwE4FN1QDwGUqqLoAeU6YAJgM6JUExjIB8AFFQFyL6oCUiA3gFgAUIkQQEVOABt0AOmlxkLAEQAJdNMUAaRCsQBqWjwDcIgL4iRaTFFUB3OKmkUVpoA)

```ts
function greet<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}
 
greet("world");
```

Fácilmente podríamos haber escrito una versión más simple:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAcwE4FN1QBQGcBciuUqMYyAlIgN4CwAUIohArnADboB07cy2AIgAS6drwA0iAYgDURCgG4GAXyA)

```ts
function greet(s: string) {
  console.log("Hello, " + s);
}
```

Recuerda, los parámetros de tipo son para *relacionar los tipos de múltiples valores*.
Si un parámetro de tipo solo se usa una vez en la firma de la función, no relaciona nada.
Esto incluye el tipo de devolución inferido; por ejemplo, si `Str` fuera parte del tipo de retorno inferido de `greet`, estaría relacionando el argumento y los tipos de retorno, por lo que se usaría *dos veces* a pesar de aparecer solo una vez en el código escrito.

> **Regla**: si un parámetro de tipo solo aparece en una ubicación, reconsidera seriamente si realmente lo necesitas
>

## Parámetros opcionales {#optional-parameters}

Las funciones en JavaScript a menudo toman una cantidad variable de argumentos.
Por ejemplo, el método `toFixed` de `number` toma un recuento de dígitos opcional:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABMAFGAXIsIC2AjAUwCcBKRAbwFgAoRRCBAZzgBsCA6FuAczXajgAxGAA8CAExQkSAbkQB6eYgAMiAIZFuuAmCiMadBmGZtOPPgOFjJAZmlzFiAIzrN23TQC+QA)

```ts
function f(n: number) {
  console.log(n.toFixed()); // 0 arguments
  console.log(n.toFixed(3)); // 1 argument
}
```

Podemos modelar esto en TypeScript marcando el parámetro como *opcional* con `?`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABMAFADwPwC5FhAWwCMBTAJwEpEBvAWAChFEB6JxAOg-oF97VyBuZqwDyAaV4oAjAAYBQxGKA)

```ts
function f(x?: number) {
  // ...
}
f(); // OK
f(10); // OK
```

Aunque el parámetro se especifica como tipo `number`, el parámetro `x` en realidad tendrá el tipo `number | undefined` porque los parámetros no especificados en JavaScript obtienen el valor `undefined`.

También puedes proporcionar un parámetro *predeterminado*:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABMAFAD0QXkQRgAwCUiA3gLABQiiA9NYgHSMUC+QA)

```ts
function f(x = 10) {
  // ...
}
```

Ahora en el cuerpo de `f`, `x` tendrá el tipo `number` porque cualquier argumento `undefined` será reemplazado por `10`.
Ten en cuenta que cuando un parámetro es opcional, los invocadores (callers) siempre pueden pasar `undefined`, ya que esto simplemente simula un argumento "faltante":

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtVIAoAPAfgC55VkBbAIxBgEoKA3HLYAbgFgAoAen7wwyDH0HwAghAjwA8gGk+iAox68VARgAMa5QTShEWVCGBqgA)

```ts
declare function f(x?: number): void;
// cut
// All OK
f();
f(10);
f(undefined);
```

### Parámetros opcionales en Callbacks {#optional-parameters-in-callbacks}

Una vez que hayas aprendido acerca de los parámetros opcionales y las expresiones de tipo de función, es muy fácil cometer los siguientes errores al escribir funciones que invocan devoluciones de llamada (callbacks):

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAWwJ4DE4CcCiBDCACwAo8ssAuRPMVAbQF0AaRCPAG3YCMCBrK0lgDmVGqhYwwAEwCmADwD8VMCGRcZWAJSIAvAD5EANzgwp2gN4BYAFCJEwbImLsZURDF2IADAG53iAB5qcgA6FzAhKEI-GABqWIsbOzs2Th4IXkEsOhhmd00fJMQAXxtioA)

```ts
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
```

Lo que la gente normalmente pretende cuando escribe `index?` como parámetro opcional es que quiere que ambas llamadas sean legales:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYDMbQEYAOABgBYCBYAKABNIBjAGwENpJQAzAVwDs6AXAJZxuoALYBPAGIIAokzoALABRVQoFtFRNu4gNoBdADSrQdJgwYAjeQGtUSlgHMtOw6AHdaADwD8qbpyiljAAlKAAvAB8oABucALUVCGocQkA3FQgoAC0uXScfLnZVBLS0HKKSrp4bmhuWEagDmFRpsKIcAyQAHQMcI7NIRmUpbLyytW19Y0ObgIt0XTtnT19A0xzIUNAA)

```ts
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
```

Lo que esto *en realidad* significa es que *`callback` podría invocarse con un argumento*.
En otras palabras, la definición de la función dice que la implementación podría verse así:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYDMbQEYAOABgBYCBYAKADMBXAOwGMAXASzntAFsBPAMQQBRAIaMAFgAphsVMPo8A2gF0ANKEbCANpoBGogNaop0AOaz5a1vQAmkAB4B+VPVpcdMAJSgAvAD5QAG5wrNZeAN5UoKDUCKASmpDMoKw+oEQA3MmgADyg0tAAdAn0JsximawA1JXhkVGgIKAAkqDWHADkSdSQkJqgmqz6kKAADvABIVYmoGXDVrZ2M3DWwjx1URraeoz6xtAKrEoe6XUAvlSnQA)

```ts
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    // No tengo ganas de proporcionar el índice hoy.
    callback(arr[i]);
  }
}
```

A su vez, TypeScript aplicará este significado y emitirá errores que en realidad no son posibles:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYDMbQEYAOABgBYCBYAKABNIBjAGwENpJQAzAVwDs6AXAJZxuoALYBPAGIIAokzoALABRVQoFtFRNu4gNoBdADSrQdJgwYAjeQGtUSlgHMtOw6AHdaADwD8qbpyiljAAlKAAvAB8oABucALUVCGocQkA3FQgoAC0uXScfLnZVBLS0HKKSrp4bmhuWEagDm4CYVGgAN4mdMKIcAyQAHQMcI5KAoN8cJICXpDUSiEhGZQAvstAA)

```ts
myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed());
});
```

```text {filename="Error generado"}
'i' is possibly 'undefined'.
```

En JavaScript, si llamas a una función con más argumentos que parámetros, los argumentos adicionales simplemente se ignoran.
TypeScript se comporta de la misma manera.
Las funciones con menos parámetros (del mismo tipo) siempre pueden reemplazar funciones con más parámetros.

> **Regla**: Al escribir un tipo de función para una devolución de llamada, *nunca* escribas un parámetro opcional a menos que tengas la intención de *llamar* la función sin pasar ese argumento
>

## Sobrecargas de funciones {#function-overloads}

Algunas funciones de JavaScript se pueden llamar en una variedad de tipos y recuentos de argumentos.
Por ejemplo, podrías escribir una función para producir un `Date` que tome un timestamp (un argumento) o una especificación de mes/día/año (tres argumentos).

En TypeScript, podemos especificar una función que se puede llamar de diferentes maneras escribiendo *firmas de sobrecarga*.
Para hacer esto, escribe una cierta cantidad de firmas de función (generalmente dos o más), seguidas del cuerpo de la función:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYDsGCwAoAMwFcA7AYwBcBLOU0AWwEMBrSAEScsgAoaHIiSkwYAHVKWIMARjACUqTtwDcBEhRp1GrDl14MJU2dAA0oACaGZMMwE8rxhaCWRVRMlVr1mbFzwYA8tAAKtQCQiLioJLWphYA-A42oLaJ0UbyinqgAN4EoKDUhKA85qAAhAC8laBk5pCE1KSQZQBkrSkV1bWk9Y3N5nK5+QWg0JCUxND0zQDuzno8tmaBIWGCwmJmg24FAL6gkAA2iJDD+KNjE1MzkPN+q6Hhm6Jyu6B7BJ-45HRCFgBGUA1Hy6bg8AFoADMABYMAA2LAADjeBF+pH+5jQwO0vkWGDMBNAGFRPz+lAsUJxoL8ALMULeQA)

```ts
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);
```

```text {filename="Error generado"}
No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
```

En este ejemplo, escribimos dos sobrecargas: una que acepta un argumento y otra que acepta tres argumentos.
Estas dos primeras firmas se denominan *firmas de sobrecarga*.

Luego, escribimos una implementación de función con una firma compatible.
Las funciones tienen una firma de *implementación*, pero esta firma no se puede llamar directamente.
Aunque escribimos una función con dos parámetros opcionales después del requerido, ¡no se puede llamar con dos parámetros!

### Sobrecarga de firmas y firma de implementación {#overload-signatures-and-the-implementation-signature}

Esta es una fuente común de confusión.
A menudo la gente escribe código como este y no entiende por qué hay un error:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYMBYCwAoAMwFcA7AYwBcBLOU0Q0gCgA9VFLprSBzASlQA3ONQAmAbgIkKNOg2Z9QAbwKhQIUADptBAL4ENAURYAHSFUijQlOKABGkUAEM7AG0c3Q5J69egA7tSUABagAF4wtk7QPMQAtpCklIhSCuJAA)

```ts
function fn(x: string): void;
function fn() {
  // ...
}
// Se espera poder llamar sin argumentos
fn();
```

```text {filename="Error generado"}
Expected 1 arguments, but got 0.
```

Nuevamente, la firma utilizada para escribir el cuerpo de la función no se puede "ver" desde afuera.

> La firma de la *implementación* no es visible desde el exterior.
> Al escribir una función sobrecargada, siempre debe tener *dos* o más firmas encima de la implementación de la función.
>

La firma de implementación también debe ser *compatible* con las firmas de sobrecarga.
Por ejemplo, estas funciones tienen errores porque la firma de implementación no coincide con las sobrecargas de manera correcta:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYCcAWAsAFABmArgHYDGALgJZxmhFkAUAHqgEZxwA2kAhmQCUqAG5waAEwDchEKACC0AOYkAtpDJVQVAJ4AHSKBqIyAcm3QaygBZVCpSrXqMW7UIipWyykaHFSssTk1HQMTGyc3HyCQqAA3gC+QA)

```ts
function fn(x: boolean): void;
// El tipo de argumento no es correcto
function fn(x: string): void;
function fn(x: boolean) {}
```

```text {filename="Error generado"}
This overload signature is not compatible with its implementation signature.
```

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYCcAWAsAFABmArgHYDGALgJZxmhFkAUAHqoldDWQOYCUHLj14BuQiFAAlSFRLQGVAJ4AHSKBqIyAciqhuvABZVCpSrXqMW7UGRIBbAEYxBoR3DgAbSAEMy44nJqOgYmNiFuPlAAH1sHZ2h+UABvQlB9WXkGACIPFURsgIBfIA)

```ts
function fn(x: string): string;
// El tipo de devolución no es correcto
function fn(x: number): boolean;
function fn(x: string | number) {
  return "oops";
}
```

```text {filename="Error generado"}
This overload signature is not compatible with its implementation signature.
```

### Escribir buenas sobrecargas {#writing-good-overloads}

Al igual que los generics, hay algunas pautas que debes seguir al usar sobrecargas de funciones.
Seguir estos principios hará que tu función sea más fácil de llamar, de entender y de implementar.

Consideremos una función que devuelve la longitud de una cadena o un array:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAGwKZgBQGcBcitQBOMYA5gJR5ggC2ARqoQNwCwAUKJLAiuhgIaFCefmACeAbQC6lRNXqNWHcNHhI0mAB4jx5RAG92iRIVRQQhJJoB0G0lAAWSgL5A)

```ts
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
```

Esta función está bien; podemos invocarlo con cadenas o arrays.
Sin embargo, no podemos invocarlo con un valor que podría ser una cadena *o* un array, porque TypeScript solo puede resolver una llamada de función a una única sobrecarga:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwHYBsBOAsAFAAmkAxgDYCG0koAZgK4B2pALgJZxOjmRMAUKUIlbR2TAOYBKVEwYBbAEYwA3IRIVqtRiw5cefftWipKTAJ4BtALozQcpasIhQAWnekGrd68K8BAEQBUiqgLgDyANJ+hpYADLahEdEE-vwAspSsABYAdNBmRHDy-FKgAHygcbkArKAA-KAB2ZDk5HABoKjxiUA)

```ts
len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]);
```

```text {filename="Error generado"}
No overload matches this call.
  Overload 1 of 2, '(s: string): number', gave the following error.
    Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'.
      Type 'number[]' is not assignable to type 'string'.
  Overload 2 of 2, '(arr: any[]): number', gave the following error.
    Argument of type 'number[] | "hello"' is not assignable to parameter of type 'any[]'.
      Type 'string' is not assignable to type 'any[]'.
```

Debido a que ambas sobrecargas tienen el mismo número de argumentos y el mismo tipo de retorno, podemos escribir una versión no sobrecargada de la función:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAGwKZgBQA8BciCGYAngNoC6iAPogM5QBOMYA5gJSIDeAsAFCKL1UUEPSRYAdGhZQAFgG5eAXyA)

```ts
function len(x: any[] | string) {
  return x.length;
}
```

¡Esto es mucho mejor!
Los *callers* pueden invocar esto con cualquier tipo de valor y, como beneficio adicional, no tenemos que encontrar una firma de implementación correcta.

> Prefiere siempre parámetros con tipos de unión en lugar de sobrecargas cuando sea posible
>

### Declarando `this` en una Función {#declaring-this-in-a-function}

TypeScript inferirá cuál debería ser `this` en una función mediante el análisis de flujo de código, por ejemplo en lo siguiente:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/MYewdgzgLgBArhApgJxgXhgbwLACgYwCWAJgFwwCMATAMwA0eeBAhsQLaFjkBmzANkgb4YAI0Sg2iAILtOPOGGBRC4GAAoAlFiYEYUABaEIAOlYcw6PcjiIA3DoC+Qh7aA)

```ts
const user = {
  id: 123,
 
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
```

TypeScript entiende que la función `user.becomeAdmin` tiene un `this` correspondiente, que es el objeto externo `user`. `this`, puede ser suficiente para muchos casos, pero hay muchos casos en los que necesitas más control sobre qué objeto representa `this`. La especificación de JavaScript establece que no puedes tener un parámetro llamado `this`, por lo que TypeScript usa ese espacio de sintaxis para permitirte declarar el tipo de `this` en el cuerpo de la función.

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgKoGdrIN4FgBQyywAJgFzIgCuAtgEbQDcBRcJNoFdA9twDYQ4IZvgC+BEhAR84UFAm4h0YZAHMIYACIAhCgAoAlMgC8APmQ6RAeivIAtA4RUwDuwVCRYiFDpwtkMMB8nhjQ6HqBwdD6YAAWwOgUoVBGZsg8-IIgBkmYUADaALoi4vgECkoqJHQmaho6hiIVyshsHEq11QB0kSF54TBUIAhgwIrIenEJudBGeITIcmBUUCDIU+hdbaAlBoxAA)

```ts
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}
 
const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
```

Este patrón es común con las API de estilo callback, donde normalmente otro objeto controla cuándo se llama a tu función. Ten en cuenta que necesitas usar `function` y no funciones de flecha para obtener este comportamiento:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygOwAYAsBGdGc0BYAKAEsA7AFxgDMBDAY0lAFVEZQBvU0UMgCaoKAVwC2AIxgBuXv0QBBAWMqoJcOABtI9CrJIBfUgMiNN9aC0ZwKiKqADmkKgBEAQqgAUASlABeAD5Qd30QUABaSMYRKkjw0koaaAZmYLduOVoyTST2GERPLJyYLyoACzIUNg5oX0DQdS0dCm9UPOgAbQBdfSMSUmtbewEJf0dndx99QbtQemVKRDGRgDoi3JqCn38g8sqV+ZUW6SA)

```ts
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}
 
const db = getDB();
const admins = db.filterUsers(() => this.admin);
```

```text {filename="Error generado"}
The containing arrow function captures the global value of 'this'.Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
```

## Otros tipos que debes conocer {#other-types-to-know-about}

Hay algunos tipos adicionales que querrás reconocer y que aparecen con frecuencia cuando trabajas con tipos de funciones.
Como todos los tipos, puedes usarlos en todas partes, pero son especialmente relevantes en el contexto de las funciones.

### El tipo `void` {#void}

El tipo `void` representa el valor de retorno de funciones que no devuelven un valor.
Es el tipo inferido cada vez que una función no tiene declaraciones `return` o no devuelve ningún valor explícito de esas declaraciones de retorno:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEBUAsFNQSwHYDNoCdXQCagwFwK6oKi4CeADrHAM6gBuA9nJgLABQS+CAxrnA8QQMG5ABQBKUAG92oHNAJEA3OwC+QA)

```ts
// El valor de retorno inferido es void
function noop() {
  return;
}
```

En JavaScript, una función que no devuelve ningún valor devolverá implícitamente el valor `undefined`.
Sin embargo, `void` y `undefined` no son lo mismo en TypeScript.
Hay más detalles al final de este capítulo.

> `void` no es lo mismo que `undefined`.
>

### El tipo `object` {#object}

El tipo especial `object` se refiere a cualquier valor que no sea primitivo (`string`, `number`, `bigint`, `boolean`, `symbol`, `null`, o `undefined`).
Esto es diferente del *tipo de objeto vacío* `{ }`, y también diferente del tipo global `Object`.
Es muy probable que nunca utilices `Object`.

> `object` no es `Object`. **¡Utiliza siempre** `object`!
>

Ten en cuenta que en JavaScript, los valores de las funciones son objetos: tienen propiedades, tienen `Object.prototype` en su cadena de prototipo, son `instanceof Object`, puedes llamar a `Object.keys` en ellos, etcétera.
Por esta razón, los tipos de funciones se consideran `object`s en TypeScript.

### El tipo `unknown` {#unknown}

El tipo `unknown` representa *cualquier* valor.
Esto es similar al tipo `any`, pero es más seguro porque no es legal hacer nada con un valor `unknown`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYDsBGUOAOABgBYA2AWACgAzAVwDsBjAFwEs4HQacAKAQ1T8GATwCUoAN7VQofgDoARrzEBuUCFAB5ANLUAvtXrN2nbmgGpGAawZwA7gwnSqshcrUGgA)

```ts
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b();
}
```

```text {filename="Error generado"}
'a' is of type 'unknown'.
```

Esto es útil al describir tipos de funciones porque puedes describir funciones que aceptan cualquier valor sin tener ningún valor `any` en el cuerpo de tu función.

A la inversa, puedes describir una función que devuelve un valor de tipo `unknown`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEYD2A7AzgF3mpBbEASlCsHgMoYwCWKA5gFzaU20DcAsAFAD038AtILABXDIP5cAZsJRgMVVNiiSQABVhoQACjSNM1OgEpGMgNYokAdxTwA3l3jw4GYTBsApMgHkAcgDoABw1tNEMOTgBfLi5eeB8QEGB4DCR4ACMEMFgQaQh4SyoMAAt4AHIkNIArUoBCLmR0LArK+ABeJRV1GE0dPEJiUlwKA1owoA)

```ts
function safeParse(s: string): unknown {
  return JSON.parse(s);
}
 
// ¡Hay que tener cuidado con 'obj'!
const obj = safeParse(someRandomString);
```

### El tipo `never` {#never}

Algunas funciones *nunca* devuelven un valor:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABMAhjANgCgLYGcDmAXIrlAE4xj4CUxYApgG71mIDeAsAFCKJQAWZOAHdEDUQFEyQsjgLUA3NwC+QA)

```ts
function fail(msg: string): never {
  throw new Error(msg);
}
```

El tipo `never` representa valores que *nunca* se observan.
En un tipo de retorno, esto significa que la función genera una excepción o finaliza la ejecución del programa.

`never` también aparece cuando TypeScript determina que no queda nada en una unión.

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABMMAKAHgLkQZygJxjAHNEAfRMEAWwCMBTfASkQG8BYAKEURmEVRQAngAd6cfukQBeWYgBEeQiXksO3HogD0WxABM4uONXpQAFkWJceAX0T0ANjnq9+g0eMky58qnUaqbNaaOvqGOMamFiT2TvTBdo7OQRo86ADc2rpmAIY4iMJiiADkYPQAbozFAIQJXDZAA)

```ts
function fn(x: string | number) {
  if (typeof x === "string") {
    // hacer algo
  } else if (typeof x === "number") {
    // hacer otra cosa
  } else {
    x; // tiene el tipo 'never'!
  }
}
```

### El tipo `Function` {#function}

El tipo global `Function` describe propiedades como `bind`, `call`, `apply` y otras presentes en todos los valores de funciones en JavaScript.
También tiene la propiedad especial de que siempre se pueden llamar valores de tipo `Function`; estas llamadas devuelven `any`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAEzgZTgWwKZQBYxgDmAFMAFyIBi408YAlIgN4CwAUIogE64jdJgJAIwAaRACZxAZgYBuDgF8gA)

```ts
function doSomething(f: Function) {
  return f(1, 2, 3);
}
```

Esta es una *llamada a función sin tipo* y generalmente es mejor evitarla debido al tipo de retorno inseguro `any`.

Si necesitas aceptar una función arbitraria pero no tienes intención de llamarla, el tipo `() => void` es generalmente más seguro.

## Parámetros y argumentos Rest {#rest-parameters-and-arguments}

> Lectura en segundo plano:[Parámetros rest ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)[Sintaxis spread ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
>

### Parámetros rest {#rest-parameters}

Además de usar parámetros opcionales o sobrecargas para crear funciones que puedan aceptar una cantidad de argumentos fijos, también podemos definir funciones que toman un número *ilimitado* de argumentos usando *parámetros rest*.

Un parámetro rest aparece después de todos los demás parámetros y usa la sintaxis `...`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAWxAG1gBzQTwBRgBciYIyARgKYBOANIgHRPLGkU0DaAugJSIDeAWABQiRNUpQQ1JMgbIAhpjx4AHnwC8APhKIAVInUBuEQF8RAeguIA5ApuIA5pIDOiAG4K0ISog4BGAAZ6ACZgxABmcIAWQK4RCAQXKEQFRA0UdCxcPCD6f1D6CPponiMgA)

```ts
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' toma el valor [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
```

En TypeScript, la anotación de tipo en estos parámetros es implícitamente `any[]` en lugar de `any`, y cualquier anotación de tipo proporcionada debe tener la forma `Array<T>` o `T []`, o un tipo de tupla (del que aprenderemos más adelante).

### Argumentos Rest {#rest-arguments}

A la inversa, podemos *proporcionar* un número variable de argumentos de un objeto iterable (por ejemplo, un array) usando la sintaxis *spread*.
Por ejemplo, el método `push` de arrays toma cualquier número de argumentos:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/MYewdgzgLgBAhgJwQRhgXhgbWQGhgJjwGYBdAbgFgAoUSWRBfdLAFjwFY8A2c6h5AHQAHAK4QAFgAoBMhvgCUZIA)

```ts
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
```

Ten en cuenta que, en general, TypeScript no asume que los arrays sean inmutables.
Esto puede llevar a algunos comportamientos sorprendentes:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYMDYCwAoEUASQDsAzGaSAE1ABcBPAB0lAEtFRSBXAWwBGMANoBdUAFoJoAEQBDUqDmw5jUAHd29ABagAXjDigEoPgja9BMRDIA0BIqTj1QiVgGN25du7kAbPzV6dSNLISQCdzhSRBdlAHMuAF5QYQAOW1AMUQBuSOjYpVJ4vzYUgFk5HQA6KoU0AApq5oTEAEocoA)

```ts
// El tipo inferido es number[] -- "un array con cero o más numbers",
// no específicamente dos numbers
const args = [8, 5];
const angle = Math.atan2(...args);
```

```text {filename="Error generado"}
A spread argument must either have a tuple type or be passed to a rest parameter.
```

La mejor solución para esta situación depende un poco de tu código, pero en general un contexto `const` es la solución más sencilla:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEEkDsDMFMCd6wCagIYGdQCYC0AbWSAcwBcALUUgVwAdCBYAKAGMB7SDU9eYrAXlABtABwAaUAFYAuuiztOpANzMQoAPIBpZgq7oShUIICyaCgDozaSNgAU5h2l4YAlEqA)

```ts
// Inferido como una tupla de longitud 2
const args = [8, 5] as const;
// OK
const angle = Math.atan2(...args);
```

El uso de argumentos rest puede requerir activar [`downlevelIteration` ↗](https://www.typescriptlang.org/tsconfig#downlevelIteration) cuando apuntas a runtimes más antiguos.

## Desestructuración de parámetros {#parameter-destructuring}

> Lectura previa:[Desestructuración de asignaciones ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
>

Puedes usar la desestructuración de parámetros para descomprimir convenientemente objetos proporcionados como argumento en una o más variables locales en el cuerpo de la función.
En JavaScript, se ve así:

```js
function sum({ a, b, c }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
```

La anotación de tipo para el objeto va después de la sintaxis de desestructuración:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAZxAWwBQG9EEMA0iARoRIgL4BciOu1Y6RApgE4Dcx9jrHEXazFhQCUNALAAoRIggJkcADZMAdArgBzDLkQBqYrpnC2k8kA)

```ts
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
```

Esto puede parecer un poco verboso, pero aquí también puedes usar un tipo con nombre:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/PTAEGUEMFsFNUgZ1ABwE4EsD2bSwB4woA2sAsAFAAuAnivAIIBCAwqALygDeCAXKADsArtABGsNAG5Qo-sLETpAYzkjxuAL6TKAMyEClVbANCIRACh6QANDNtLQG-sxYBKbpVCglWAYiykAHTEWADm5pCgANQy0d6u2hQaQA)

```ts
// Lo mismo que el ejemplo anterior
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}
```

## Asignabilidad de Funciones {#assignability-of-functions}

### Tipo de retorno `void` {#return-type-void}

El tipo de retorno `void` para funciones puede producir un comportamiento inusual pero esperado.

El tipado contextual con un tipo de retorno `void` **no** obliga a las funciones a **no** devolver algo. Otra forma de decir esto es un tipo de función contextual con un tipo de retorno `void` (`type voidFunc = () => void`), cuando se implementa, puede devolver *cualquier* otro valor, pero será ignorado.

Así, las siguientes implementaciones del tipo `() => void` son válidas:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/C4TwDgpgBAbg9gSwCYDECuA7AxlAvFACgEo8A+WRJAbgFgAoerODAZ2CgDMBGALguXTY8hErnIBvelCgAnCMDQyMUYDLQRadAL6bGzNpwBMfeAMw58xMirUb6e1uw4BmE5UEXO54AmYioknTScgpKNuqaOkA)

```ts
type voidFunc = () => void;
 
const f1: voidFunc = () => {
  return true;
};
 
const f2: voidFunc = () => true;
 
const f3: voidFunc = function () {
  return true;
};
```

Y cuando el valor de retorno de una de estas funciones se asigna a otra variable, conservará el tipo de `void`:

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/C4TwDgpgBAbg9gSwCYDECuA7AxlAvFACgEo8A+WRJAbgFgAoerODAZ2CgDMBGALguXTY8hErnIBvelCgAnCMDQyMUYDLQRadAL6bGzNpwBMfeAMw58xMirUb6e1uw4BmE5UEXO54AmYioknTScgpKNuqaOvQA9NFQALSJWGjAifEOBjBcwtzEunRMjrCGOYZ59gX67DDOOc55QA)

```ts
const v1 = f1();
 
const v2 = f2();
 
const v3 = f3();
```

Este comportamiento existe para que el siguiente código sea válido aunque `Array.prototype.push` devuelva un número y el método `Array.prototype.forEach` espere una función con un tipo de retorno de `void`.

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/MYewdgzgLgBBBOwYF4YG0CMAaGAmHAzALoDcAsAFCiSwAm0K6ADKZZQsAHQBmI8AogENgACwAUYgKYAbAJQoAfDHpROABwCuEcTNmySQA)

```ts
const src = [1, 2, 3];
const dst = [0];
 
src.forEach((el) => dst.push(el));
```

Hay otro caso especial que debes tener en cuenta: cuando la definición de una función literal tiene un tipo de retorno `void`, esa función **no** debe devolver nada.

[Prueba este código ↗](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABMATACgJQC5EDc4wAmiA3gLABQiiA9DYgAJQDOAtAKYAeADu9BwCcBcAZWoD2UEAKRQBIdgG5KAX0qUICZlGQBmRAF5k4aPCSYc+IqTG16TNl1792QkbYlSZiOQuUUVRSA)

```ts
function f2(): void {
  // @ts-expect-error
  return true;
}
 
const f3 = function (): void {
  // @ts-expect-error
  return true;
};
```

Para obtener más información sobre `void`, consulta estas otras entradas de documentación:

- [manual v2](/typescript/handbook/funciones)
- [Preguntas frecuentes: "¿Por qué las funciones que devuelven valores no nulos son asignables a funciones que devuelven valores nulos?" ↗](https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-functions-returning-non-void-assignable-to-function-returning-void)
