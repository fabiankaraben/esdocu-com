---
linkTitle: "Object Types"
title: "TypeScript · Documentation - Object Types - TypeScript en Español"
description: "How TypeScript describes the shapes of JavaScript objects."
weight: 6
type: docs
draft: true
---

# Object Types

In JavaScript, the fundamental way that we group and pass around data is through objects.
In TypeScript, we represent those through *object types*.

As we’ve seen, they can be anonymous:

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAcwE4FN1QBQAd2oDOCAXIgN6JgCGAtumYVKjGMgNyLXINUi0AjAogC+ASgoAoRIgD0smYqXLlAPXUbNW7TtXTEGKCFRIARAAl0AGytxEpxAGpE+IggB0Neu0kigA)

```ts
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
```

or they can be named by using either an interface:

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgArQM4HsTIN4BQyyA9CcRcgHo21HIhwC2EAXMhmFKAOYDc9ODzYMArkwBG0AQF8CBGKJAIwwHMh5QIEMAAoADphzt0UbCACU+elrCiouAEQAJCABs3WZI+QBqZIZmOAB0jCyyQA)

```ts
interface Person {
  name: string;
  age: number;
}
 
function greet(person: Person) {
  return "Hello " + person.name;
}
```

or a type alias:

[Try this code](https://www.typescriptlang.org/play/#code/C4TwDgpgBAChBOBnA9gOygXigbwFBSgHpCoA9ci-KVAQwFsIAuKRYeAS1QHMBuKmrk2oBXOgCMEfAL59cAM2GoAxsHZooXeBAjAAFJCRpmcQ6gCUOKluDD46AEQAJCABsXyKPagBqKAZSoAHS0DNJAA)

```ts
type Person = {
  name: string;
  age: number;
};
 
function greet(person: Person) {
  return "Hello " + person.name;
}
```

In all three examples above, we’ve written functions that take objects that contain the property `name` (which must be a `string`) and `age` (which must be a `number`).

## Quick Reference {#quick-reference}

We have cheat-sheets available for both [`type` and `interface`](https://www.typescriptlang.org/cheatsheets), if you want a quick look at the important every-day syntax at a glance.

## Property Modifiers {#property-modifiers}

Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.

### Optional Properties {#optional-properties}

Much of the time, we’ll find ourselves dealing with objects that *might* have a property set.
In those cases, we can mark those properties as *optional* by adding a question mark (`?`) to the end of their names.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8C+AUACYQIA2cUKMAriAmMAPYjIDmEYG2EAFAEoAXGkw4A3IUIB6acgC0ihLTCL5hUJFiIUABTiaA8liasAzslyFkyM2IgieE68gAeu5mYD8IkLQC2AEbQkjayNgB6LgCeHt6+AcFQocjhyFFEhHQMpmxYBuBO-MwmZiL6RiYsIGYCli7hAHTNhJkI5mC29sgAvBxcRYKS+ZqDuF28yPgCwwXc9nzjdrwANG5xIgCMAAzbUzOEI4ULS-ZrsZ5bu-uzoycTOGvul8g72+cbr9fT4kA)

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

In this example, both `xPos` and `yPos` are considered optional.
We can choose to provide either of them, so every call above to `paintShape` is valid.
All optionality really says is that if the property *is* set, it better have a specific type.

We can also read from those properties - but when we do under [`strictNullChecks`](/tsconfig#strictNullChecks), TypeScript will tell us they’re potentially `undefined`.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8C+AUACYQIA2cUKMAriAmMAPYjIDmEYG2EAFAEoAXGkw4A3IUKhIsRCgAKcGQHksTVgGdkuQsmSaxEETwl7kADwXNNAfhEhaAWwBG0SfoCe1uw+duoSSJCAHoQ5ABaKIRaMCiIwjoGDTYsZXBTfmZ1TRElVXUWEE0BHXNyLksfZABeZGywTQA6KxsPZDD9Lu6egD1bcsrvG1r6nKbhzXbOntn9fvNOpuXCfCA)

```ts
function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos;
                   
(property) PaintOptions.xPos?: number | undefined
  let yPos = opts.yPos;
                   
(property) PaintOptions.yPos?: number | undefined
  // ...
}
```

In JavaScript, even if the property has never been set, we can still access it - it’s just going to give us the value `undefined`.
We can just handle `undefined` specially by checking for it.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8C+AUACYQIA2cUKMAriAmMAPYjIDmEYG2EAFAEoAXGkw4A3IUKhIsRCgAKcGQHksTVgGdkuQsmSaxEETwl7kADwXNNAfhEhaAWwBG0SfoCe1uw+duoSSJCAHoQ5ABaKIRaMCiIwjoGDTYsZXBTfmZ1TRElVXUWEE0BHXNyLksfZABeZGywTQA6Kxtamrr6UhhQCGJkW2QABmQRBubWzQ9kMP0APVtyyu82uvGmle0OzpBu3v7BkbGcjZ9p2eQF81mm28J8IA)

```ts
function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos === undefined ? 0 : opts.xPos;
       
let xPos: number
  let yPos = opts.yPos === undefined ? 0 : opts.yPos;
       
let yPos: number
  // ...
}
```

Note that this pattern of setting defaults for unspecified values is so common that JavaScript has syntax to support it.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8C+AUACYQIA2cUKMAriAmMAPYjIDmEYG2EAFAEoAXGkw4A3IUKhIsRCgAKcGQHksTVgGdkuQsmSaxEETwl7kADwXNNAfhEhaAWwBG0SfoCe1uw+duoSSJCAHoQ5ABaKIRaMCiIwjoGDTYsZXBTflwDIwAaSx9kAF5kAAZ87xtisuR8ESVVdRYQTQEdcwQtZnIIADpyZnY+ACILZE7mKGJQOEhkWeH8qxsBD2Qw-U2t7Z3d-QA9Ww6unv7Bkc9x5knpkFmUBYqfVfMNvfeP5EPX8N6-wnwQA)

```ts
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);
                                  
(parameter) xPos: number
  console.log("y coordinate at", yPos);
                                  
(parameter) yPos: number
  // ...
}
```

Here we used [a destructuring pattern](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) for `paintShape`’s parameter, and provided [default values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Default_values) for `xPos` and `yPos`.
Now `xPos` and `yPos` are both definitely present within the body of `paintShape`, but optional for any callers to `paintShape`.

> Note that there is currently no way to place type annotations within destructuring patterns.
> This is because the following syntax already means something different in JavaScript.
> [Try this code](https://www.typescriptlang.org/play/#code/PTAEAEDsHsEkFsAOAbAlgY1QFwIKQJ4BcoAZgIbIDOApgFAgTUBOT0TlxATAKzeeicAzAAYALLVSQszcumqgAygAsyieQG8AvrQAm1dMjJN5JAK6R0WVNEihjkPUwAUAD2LmA1jADukAJQA3PRgALRh6KZYYSG0ZhZWNqA6TGTeTuqglCpqxMqq1AA0oC4ACtAcoJCm8ABGzKAAvKAAjMLCoMAAVAB0vZ1gmn6g6rSgdtQOzE5Z+YGj45POpeVzmkA)
> 
> ```ts
> function draw({ shape: Shape, xPos: number = 100 /*...*/ }) {
>   render(shape);
>   render(xPos);
> Cannot find name 'xPos'.2304Cannot find name 'xPos'.}
> ```
> 
> ```text {filename="Generated error"}
> Cannot find name 'shape'. Did you mean 'Shape'?
> ```
> In an object destructuring pattern, `shape: Shape` means “grab the property `shape` and redefine it locally as a variable named `Shape`.
> Likewise `xPos: number` creates a variable named `number` whose value is based on the parameter’s `xPos`.
> 

### `readonly` Properties {#readonly-properties}

Properties can also be marked as `readonly` for TypeScript.
While it won’t change any behavior at runtime, a property marked as `readonly` can’t be written to during type-checking.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYAsAGAUAJYB2ALjAGYCGAxpKAMpwC2kAKgJ4AOdA3nqKGiRKAEzhEANu1Cd4nVIhLRiAcwDceAL5485AK5FqJAuNBjGLEgAtVACjgAjAFaoLbLpACUoPgJCgAdTpqSiJBYRFQcngmUAByRycAOlk4Tjik-lBqcUQ4CUgkiTgVWwADVM5QK0pEUGs6ADdKCT06OIASHkSUuU0Mss8NLP8AIT0SUAB3YNC4yaEAWlrEAhUwghJMgR7K0ABeUAAiK0gJYqONTSA)

```ts
interface SomeType {
  readonly prop: string;
}
 
function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);
 
  // But we can't re-assign it.
  obj.prop = "hello";
}
```

```text {filename="Generated error"}
Cannot assign to 'prop' because it is a read-only property.
```

Using the `readonly` modifier doesn’t necessarily imply that a value is totally immutable - or in other words, that its internal contents can’t be changed.
It just means the property itself can’t be re-written to.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYAsAGAUAJYB2ALjAGYCGAxpKABJwC2dA3nqKNJJQCZxEANgE8ukRAV6RSqVqCKUWqRCWjEA5gG5QldZFREArkwBGMUAF9NeC3jzlDRaiQIDQANwISSAMQQAhAmgSAAteSmEAChDmfQZYgEpQdk4QUAB1OmpKIjE+HSJeUEMAB3CyUBL4EpgXcVByeCZQAHIYlgA6bgkpUhaOjlBqAUQ4QUgOwTh1SIADekoSktETINDw0QASVnaJ7slpEg6FFgsAQlmE605drvED0g7dSABqF+tbe0dnV1zIT2c0ViqEYLCSKVAaX8hhIoAA7lkci1YXC1BUSHBQKE6C19r0SC1KtVaqICCREJBBORQG5KK1QZB+oNbnjDqAALzJQacE5xABEADUCM4EFiQnQAKIAjHQPkAGm5Oj0qCwaAVnCsNiAA)

```ts
interface Home {
  readonly resident: { name: string; age: number };
}
 
function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}
 
function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  home.resident = {
    name: "Victor the Evictor",
    age: 42,
  };
}
```

```text {filename="Generated error"}
Cannot assign to 'resident' because it is a read-only property.
```

It’s important to manage expectations of what `readonly` implies.
It’s useful to signal intent during development time for TypeScript on how an object should be used.
TypeScript doesn’t factor in whether properties on two types are `readonly` when checking whether those types are compatible, so `readonly` properties can also change via aliasing.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgArQM4HsTIN4BQyyIcAthAFzIZhSgDmA3EcnA1SQK5kBG0LAL4ECoSLEQoAShDgATHABsAnuijZchYlFkKQKkuU616IZqx3ylyth2oge-KEJGKIYZAHd6YOLzdqGtSBOMgAvPispBTUAEQhuACyCAnwSLEANKzsnAAsAExZgiwEAPSlXlhQANYYBG4elnoqCdQyVvqqmKER3sC+-hAJJQg42G4AdIpYDAAUTdYJEzkAlEzI5cgADqZgGMgA5AUHBH0DAd0gyxwA1DcsoyDjEFMz87qLl9cQaxsVO2J9kcAMwHIA)

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
 
// works
let readonlyPerson: ReadonlyPerson = writablePerson;
 
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'
```

Using [mapping modifiers](/docs/handbook/2/mapped-types.html#mapping-modifiers), you can remove `readonly` attributes.

### Index Signatures {#index-signatures}

Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.

In those cases you can use an index signature to describe the types of possible values, for example:

[Try this code](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwHMQMBlDGLVAgQRhigE8AKASgC54yKrb6GBuAFAB6YfAC0ksMgyTxgyhhAxEUMAi6UadRvADeg+PADalUAA8OqZAFsARsoC6HAM7ktQgL6DBYPG-gbBl5GDk0eHQZ4AF5CYnDtPlYhP1QAl3A8YABJJRsYwODI4wBGRyFRIyqAPQB+IA)

```ts
interface StringArray {
  [index: number]: string;
}
 
const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
          
const secondItem: string
```

Above, we have a `StringArray` interface which has an index signature.
This index signature states that when a `StringArray` is indexed with a `number`, it will return a `string`.

Only some types are allowed for index signature properties: `string`, `number`, `symbol`, template string patterns, and union types consisting only of these.

While string index signatures are a powerful way to describe the “dictionary” pattern, they also enforce that all properties match their return type.
This is because a string index declares that `obj.property` is also available as `obj["property"]`.
In the following example, `name`’s type does not match the string index’s type, and the type checker gives an error:

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwBYCMWBQIIZ4lVMdcBLAOwBcYAzAQwGNJQA5AVwFsAjGACIVmNCnCqNoAT1ABvXKFABtagBNIAD1SIa0agHMAuqio9+0ANy4FoADaQq+mgAsTZmBdAE4AaxsTuSG1dAysAXyA)

```ts
interface NumberDictionary {
  [index: string]: number;
 
  length: number; // ok
  name: string;
}
```

```text {filename="Generated error"}
Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
```

However, properties of different types are acceptable if the index signature is a union of the property types:

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgHIFcC2AjaB5KAZTClAHMARYBMYAexDigE9kBvAKGWQG1QATCAA8AXMgDOJcgF0xILLijIAPhKkgyAbi7IANhA1gAFnIXRNyAPSXkdANYAaPQbLHkwccjjJ5OaDsZMCDFJUg0La1tHHzgg909vUPIOAF8gA)

```ts
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}
```

Finally, you can make index signatures `readonly` in order to prevent assignment to their indices:

[Try this code](https://www.typescriptlang.org/play/#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwHMQMAlEKYAeVQgE8BlDGLVAgQRhiloAoBKAFzwyFPHUbNWHLrQDcAKAD0i+AFp1YZBnWqlKgAIhOOGAGchAJgCsAFgvyWGI4ihgEI4GIZMW7Tt3gAb3l4eDhRGlp4AG0WUAAPIVRkAFsAIyMAXSFTH1YFAF95eQhieBTaaW4hDy8JXyqogF5CYg9qcTy-GX4FCsboi0z4FoAiAFkoCAgTWlHZIA)

```ts
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
 
let myArray: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory";
```

```text {filename="Generated error"}
Index signature in type 'ReadonlyStringArray' only permits reading.
```

You can’t set `myArray[2]` because the index signature is `readonly`.

## Excess Property Checks {#excess-property-checks}

Where and how an object is assigned a type can make a difference in the type system.
One of the key examples of this is in excess property checking, which validates the object more thoroughly when it is created and assigned to an object type during creation.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWdB2DATgCgBLAOwBcYAzAQwGNJQBlARwFd7pIBhOBVpkA5qADeJUKEZwANggD8qRFWiURAbimgA7mQAmVABbLQFTgFsARjG0BfEiVqcKjKmUEze9Gh268ABSyQqKo-jz8gsIiAJSo4jLyCCpqGpqgkfSoFjYwoPYSOrxUnNAURdLSsgrQqCExAHQ1CKAAPm2gAES8Bl0ANDrSWfXRoo36RsagikmhIhOGJqAAVHNNk8uoaAAMg9L2Dk5ykFSglgCeEbygALzekL6Q15CBiS1lqD2Qff16S8ZUABGHY7AqxTRAA)

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

```text {filename="Generated error"}
Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
  Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
```

Notice the given argument to `createSquare` is spelled *`colour`* instead of `color`.
In plain JavaScript, this sort of thing fails silently.

You could argue that this program is correctly typed, since the `width` properties are compatible, there’s no `color` property present, and the extra `colour` property is insignificant.

However, TypeScript takes the stance that there’s probably a bug in this code.
Object literals get special treatment and undergo *excess property checking* when assigning them to other variables, or passing them as arguments.
If an object literal has any properties that the “target type” doesn’t have, you’ll get an error:

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWdB2DATgCgBLAOwBcYAzAQwGNJQBlARwFd7pIBhOBVpkA5qADeJUKEZwANggD8qRFWiURAbimgA7mQAmVABbLQFTgFsARjG0BfEiVqcKjKmUEze9Gh268ABSyQqKo-jz8gsIiAJSo4jLyCCpqGpqgkfSoFjYwoPYSOrxUnNAURdLSsgrQqCExAHQ1CKAAPm2gAES8Bl0ANDrSWfXRoo36RsagikmhIhOGJqAAVHNNk8uoaAAMg9L2DiQgoAC054ycVOenJHKQVKCWAJ4RvKAAvN6QvpBvkIFEi0yqgepA+v09EtjKgAIw7HYFWKaIA)

```ts
let mySquare = createSquare({ colour: "red", width: 100 });
```

```text {filename="Generated error"}
Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'SquareConfig'.
  Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
```

Getting around these checks is actually really simple.
The easiest method is to just use a type assertion:

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWdB2DATgCgBLAOwBcYAzAQwGNJQBlARwFd7pIBhOBVpkA5qADeJUKEZwANggD8qRFWiURAbimgA7mQAmVABbLQFTgFsARjG0BfEiVqcKjKmUEze9Gh268ABSyQqKo-jz8gsIiAJSo4jLyCCpqGpqgkfSoFjYwoPYSOrxUnNAURdLSsgrQqCExAHQ1CKAAPm2gAES8Bl0ANDrSWfXRoo36RsagikmhIhOGJqAAVHNNk8uoaAAMg9L2DiQgoAC054ycVOenJHKQVKCWAJ4RvKAAvN6QvpBvkIFEptjKgAIw7PagOAAByYZCoz1QO0aeEK9EQbC4kQE81imiAA)

```ts
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
```

However, a better approach might be to add a string index signature if you’re sure that the object can have some extra properties that are used in some special way.
If `SquareConfig` can have `color` and `width` properties with the above types, but could *also* have any number of other properties, then we could define it like so:

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMoEcCucoQMID2IMwA5sgN4BQyyCBANgVAPwBcyAzmFKKQNw1kAd2AATMAAt2yEJgC2AI2iDaAbQAOUAhoByceRA7deIUgF0OcEAE9BAXyA)

```ts
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

Here we’re saying that `SquareConfig` can have any number of properties, and as long as they aren’t `color` or `width`, their types don’t matter.

One final way to get around these checks, which might be a bit surprising, is to assign the object to another variable:
Since assigning `squareOptions` won’t undergo excess property checks, the compiler won’t give you an error:

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMoEcCucoQMID2IMwA5sgN4BQyyCBANgVAPwBcyAzmFKKQNw1kAd2AATMAAt2yEJgC2AI2iDaAbQAOUAhoByceRA7deIUgF0OcEAE9BAXypUYmEAjDAidXHEgZsuAAU9MRkHP44+EQkpACUHBR0jMzGPHz8yJFwHHJK0Mj2lEK4YJhQIEW0tPRMUBwhMQB0NczIAD5tyABEuGJdADRCtFn10WSNohKSyCxJoaQT4lLIAFRzTZPLHABMAAyDtPYOVAD0J8gAtFcImGBXF1QMEGBcWJEA8hoeRJzIALyUJJMMocHoQPr9ERLSQcACMu12BUETxe8hsEVw-28EF8EAxEECnDeuE+3xAnFi-CAA)

```ts
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);
```

The above workaround will work as long as you have a common property between `squareOptions` and `SquareConfig`.
In this example, it was the property `width`. It will however, fail if the variable does not have any common object property. For example:

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYME4BQBLAOwBcYAzAQwGNJQBlARwFcLpIBhOQs-Ac1ADeuUKCpwANggD8qRMWhFeAbmGgA7vgAmxABYzQhJgFsARjBUBfXLjJNCVYvi6i2FUoxZsAFGO59UHqwcXDy8AJSoAqISCLLyikqgQRSohqYwoBaCqmzETNCE2SIiYpLQqL6hAHSlCKAAPvWgAERsms0ANKoiyRUhfFUa2jqgUtF+vINauqAAVOPVQzOoaAAMXSIWlrggoAC0B1RMxAd7uOKQxKCIzEEA8gAOjlyIoAC8gtGS+aitkO2ZFQXK5GACegTY7xckDckAhkC8N08kEez0IiDCSiAA)

```ts
let squareOptions = { colour: "red" };
let mySquare = createSquare(squareOptions);
```

```text {filename="Generated error"}
Type '{ colour: string; }' has no properties in common with type 'SquareConfig'.
```

Keep in mind that for simple code like above, you probably shouldn’t be trying to “get around” these checks.
For more complex object literals that have methods and hold state, you might need to keep these techniques in mind, but a majority of excess property errors are actually bugs.

That means if you’re running into excess property checking problems for something like option bags, you might need to revise some of your type declarations.
In this instance, if it’s okay to pass an object with both a `color` or `colour` property to `createSquare`, you should fix up the definition of `SquareConfig` to reflect that.

## Extending Types {#extending-types}

It’s pretty common to have types that might be more specific versions of other types.
For example, we might have a `BasicAddress` type that describes the fields necessary for sending letters and packages in the U.S.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgEJwM7AQQQCZ5QQYbIDeAUMsiHALYQD8AXMhmFKAOYDcVbHCBDCt2nEL34JgYAJ6iO3PtQQB7AK7go8geMnUADqvZwANgGFVeCAr18AvkA)

```ts
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
```

In some situations that’s enough, but addresses often have a unit number associated with them if the building at an address has multiple units.
We can then describe an `AddressWithUnit`.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgIIBN1QgZxwdWDAAsBVEI5AbwChlkQ4BbCAfgC5kcwpQBzANx1kAVwphO3XiEE0A9HIB6ylapXCpECBK49+Q+giIBPSXpkHkCAPZiep3dNn0ADte5wANgGFr6CGZOQgC+QA)

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

This does the job, but the downside here is that we had to repeat all the other fields from `BasicAddress` when our changes were purely additive.
Instead, we can extend the original `BasicAddress` type and just add the new fields that are unique to `AddressWithUnit`.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgEJwM7AQQQCZ5QQYbIDeAUMsiHALYQD8AXMhmFKAOYDcVbHCBDCt2nEL34JgYAJ6iO3PtQQB7AK7go8geMnUADqvZwANgGFVeCAr18AvhQqhIsRCnyFiGAOoyAFgCqIDLIEAAekCB4pOhYuAREJOT8mjK2ShT2QA)

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

The `extends` keyword on an `interface` allows us to effectively copy members from other named types, and add whatever new members we want.
This can be useful for cutting down the amount of type declaration boilerplate we have to write, and for signaling intent that several different declarations of the same property might be related.
For example, `AddressWithUnit` didn’t need to repeat the `street` property, and because `street` originates from `BasicAddress`, a reader will know that those two types are related in some way.

`interface`s can also extend from multiple types.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMIHsA27YFdPIDeAUMsgljgFzIDOYUoA5gNzEC+xxoksiKqYFASYUJMlDgATYLlo0QuALYAjaG07dw0eEjSU8mQcNHIIAD0ggptfdkMAaNEJFjNFEPXIIaGezHxjV2QAXiJScgMaACIoCClohwjJGTkaABYAJiT2FiA)

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

## Intersection Types {#intersection-types}

`interface`s allowed us to build up new types from other types by extending them.
TypeScript provides another construct called *intersection types* that is mainly used to combine existing object types.

An intersection type is defined using the `&` operator.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMIHsA27YFdPIDeAUMsgljgFzIDOYUoA5gNzEC+xoksiKqwKAkwoSZKHAAmwXLRohcAWwBG0Np2JgAngAd+lPJgFCRyALxoDMfMgBkaQcIgsgA)

```ts
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;
```

Here, we’ve intersected `Colorful` and `Circle` to produce a new type that has all the members of `Colorful`*and*`Circle`.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUAJYB2ALjAGYCGAxpKAMJwA2C5Ark6AN56ijXMEqRCWjEA5gG48AX0KkKNOvQLRqTOjz7RKAEwJsUoImwC2AIxjS5IUAFoH1NiQd287ItRIE4RULp0AdwAKalV1SFRGFmh2TgAyBnCNAEpuXn5fRGZIADoWcWCAA2iEUEDKRFAAEi4wtQ1cgRiZIpTpPgEibMaC4oAlPQMqiqra+ojcnX1DVvbZPDxbOABrSgBPPADKEK5MmNQAInMmNkhDgBpQaeHULDRQGXmlsDg4AAdELaDgveahUCHaCQXSXa6UAi6Qx3B5PSRAA)

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

```text {filename="Generated error"}
Argument of type '{ color: string; raidus: number; }' is not assignable to parameter of type 'Colorful & Circle'.
  Object literal may only specify known properties, but 'raidus' does not exist in type 'Colorful & Circle'. Did you mean to write 'radius'?
```

## Interfaces vs. Intersections {#interfaces-vs-intersections}

We just looked at two ways to combine types which are similar, but are actually subtly different.
With interfaces, we could use an `extends` clause to extend from other types, and we were able to do something similar with intersections and name the result with a type alias.
The principal difference between the two is how conflicts are handled, and that difference is typically one of the main reasons why you’d pick one over the other between an interface and a type alias of an intersection type.

## Generic Object Types {#generic-object-types}

Let’s imagine a `Box` type that can contain any value - `string`s, `number`s, `Giraffe`s, whatever.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgEIHsAeyDeAoZZBdcCcAZwC5k4QBPAbjwF8g)

```ts
interface Box {
  contents: any;
}
```

Right now, the `contents` property is typed as `any`, which works, but can lead to accidents down the line.

We could instead use `unknown`, but that would mean that in cases where we already know the type of `contents`, we’d need to do precautionary checks, or use error-prone type assertions.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgEIHsAeyDeAoZZBdcCcAZwC5kBXEAaxHQHcQBuPAXzzwBsIwyTNQzYAvLgJESkCtQBEACwi9e6ZM3RReAE3kAaLhzwB6ExpTEauosoT1kAckwA6YqQqO8wGMgAUYACeAA4Q6L6u7rJg5Mhi8cjy5GBQoADm8gCUkoTu5Oj8LmppfpEyZDEuYOgAMizQAMJw5BB+mZkc3KbmWhbS1jq0LchwyEGhI+QtUGDAJHh5BRBF6CWlbuUUk8jJqSBpmVW19VBNLW0dQA)

```ts
interface Box {
  contents: unknown;
}
 
let x: Box = {
  contents: "hello world",
};
 
// we could check 'x.contents'
if (typeof x.contents === "string") {
  console.log(x.contents.toLowerCase());
}
 
// or we could use a type assertion
console.log((x.contents as string).toLowerCase());
```

One type safe approach would be to instead scaffold out different `Box` types for every type of `contents`.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGY1oFAEsA7AFxgDMBDAY0lADkBXAWwCMYAhOAD1AG8dRQlOMUjEUoAk1bQA3DgC+OfCOgVqoAMpFohAOYdufAUJFjUibXrmLlJVVRoc4AG0jkCB3v0HCSZ0MxwLm4E1kA)

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

But that means we’ll have to create different functions, or overloads of functions, to operate on these types.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgHIFcC2AjaAhAewA9kBvAKGWQQPAnAGcAuZELXKAbnIF9zzQkWIhQBlMFFABzQiQpUadRiwYTp3PgLrCkyQgQA2EOCFllK1WpGXJsBQ8ZAbyAehfIAtF4TowXj+Qw6CAIYMC0yAwQYADCVvRgDAAUdkQs4pIgMsQANKwQAO5xSokqalkAlCwAbgTAACbcQSFhEVGx8YwpxCwYOPi5+UWdpazs0FXItQ1NwaHhIJHRxdaJ3Wl69kYmsnkghSsJzLZbjpPTjYFzrYvth12pLKSWJccmAJ7IPHsHI28g7wq5ioqQAdIpVgxkABeIb3RIaIA)

```ts
function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
  box.contents = newContents;
}
```

That’s a lot of boilerplate. Moreover, we might later need to introduce new types and overloads.
This is frustrating, since our box types and overloads are all effectively the same.

Instead, we can make a *generic*`Box` type which declares a *type parameter*.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgTwAcIA+ZAbwChlkF1wJwBnALmQOIG5KBfIA)

```ts
interface Box<Type> {
  contents: Type;
}
```

You might read this as “A `Box` of `Type` is something whose `contents` have type `Type`”.
Later on, when we refer to `Box`, we have to give a *type argument* in place of `Type`.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgTwAcIA+ZAbwChlkF1wJwBnALmQOIG5KBfSgen7IAtKIQBXMKOGUANhDDIARljYYcTMFFABzEpyA)

```ts
let box: Box<string>;
```

Think of `Box` as a template for a real type, where `Type` is a placeholder that will get replaced with some other type.
When TypeScript sees `Box<string>`, it will replace every instance of `Type` in `Box<Type>` with `string`, and end up working with something like `{ contents: string }`.
In other words, `Box<string>` and our earlier `StringBox` work identically.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgTwAcIA+ZAbwChlkF1wJwBnALmQOIG5KBfS0SLEQoAymCigA5hkwVqtepGZsm4qdz6UANhDDIARlgCCbGdlUSQksgF4KChsuQAiABYQtW9M+Q9uhzCMAOjpHMCZuAHpImmQAPQB+Sm1dAyxUNjFLaSxkO3IHJXC2ZwB3dCgtABMfP0oA1BDFRnComJpEoA)

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

`Box` is reusable in that `Type` can be substituted with anything. That means that when we need a box for a new type, we don’t need to declare a new `Box` type at all (though we certainly could if we wanted to).

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgTwAcIA+ZAbwChlkF1wJwBnALmQOIG5KBfSy0JFiIUAQUKEANiio0A9HOQA6FUt78FyAMpwAtijhNkAcnK16kZm3FSUPY2rBExE6RkzIAvGizYb0kk4gA)

```ts
interface Box<Type> {
  contents: Type;
}
 
interface Apple {
  // ....
}
 
// Same as '{ contents: Apple }'.
type AppleBox = Box<Apple>;
```

This also means that we can avoid overloads entirely by instead using [generic functions](/docs/handbook/2/functions.html#generic-functions).

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgTwAcIA+ZAbwChlkF1wJwBnALmQOIG5KBfSygPQDkAWjEIArmDEjKMCSARhg9ZEwhgAwvUjM8RUgAoARljYYcHUgBpkICAHdtDZmysBKCtWSnMAOjoXMCZkAF47R2ddYO4eIA)

```ts
function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}
```

It is worth noting that type aliases can also be generic. We could have defined our new `Box<Type>` interface, which was:

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgTwAcIA+ZAbwChlkF1wJwBnALmQOIG5KBfIA)

```ts
interface Box<Type> {
  contents: Type;
}
```

by using a type alias instead:

[Try this code](https://www.typescriptlang.org/play/#code/C4TwDgpgBAQg9gDwDwBVwQHxQLxQN4BQUUAxnAHbASUDOAXFGpANwEC+zQA)

```ts
type Box<Type> = {
  contents: Type;
};
```

Since type aliases, unlike interfaces, can describe more than just object types, we can also use them to write other kinds of generic helper types.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYDsGBQAXATwAdJQB5aAOQFcAbOgHgBUTIA+UAXlFdNAA+oAHb06AblwE2FYZEoBZAIbDCLNpx58yQ7QG0AupOn9ycxSsKVaDdaU0VqYxmfnRlqux3aSQofwB6APxSRKbm7pbWYgDK+NAAlsIA5ojcsm4eVk62iPFJyT64foFBQA)

```ts
type OrNull<Type> = Type | null;
 
type OneOrMany<Type> = Type | Type[];
 
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
           
type OneOrManyOrNull<Type> = OneOrMany<Type> | null
 
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
               
type OneOrManyOrNullStrings = OneOrMany<string> | null
```

We’ll circle back to type aliases in just a little bit.

### The `Array` Type {#the-array-type}

Generic object types are often some sort of container type that work independently of the type of elements they contain.
It’s ideal for data structures to work this way so that they’re re-usable across different data types.

It turns out we’ve been working with a type just like that throughout this handbook: the `Array` type.
Whenever we write out types like `number[]` or `string[]`, that’s really just a shorthand for `Array<number>` and `Array<string>`.

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAEzgZTgWwKZQBYxgDmAFAG4CGANiNgFyICCATsxQJ4A8AzlM4UQB8ASkQBvAFCJEAehmIAdEokBfCRKq5EmdizbsGvfsQDaAXUQBeRCYBEebFSpxbAGkS2A7nGZVktswBudTlEbBh8bGZEOGBESO5sRG9mAGsAQglUDBx8ARIdPQ5hYOysXAJiEjBsTyZWDhJ7R2c3DxS-W2ESoA)

```ts
function doSomething(value: Array<string>) {
  // ...
}
 
let myArray: string[] = ["hello", "world"];
 
// either of these work!
doSomething(myArray);
doSomething(new Array("hello", "world"));
```

Much like the `Box` type above, `Array` itself is a generic type.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEDsHsBkEsBGAuUAXATgVwKYCh5I0cMAzAQwGMdQA5LAW0RNAG8BfAoki60AZUyEA5m06FiZKjQBC0aABsc5SGK6TeNfgE8mitSFABaE5SxoTR9T2mgAghgzltAHgAq2gA44AfGzygoMAAVMEBgcGgAOI4aADOoNAYoHGxCWgAFjRKkMKZiaToWaDkjs4AdOGgwcDhOXkZqJCMzBgA3HjhIWGB1aAASjgM0ABuOOnFCuRxaKA4Sgw4RKCkGNAMJaqlTtqbACagGLFYGJAJ8GiVvTXhntCeABQAlKge3qAAPqBYkHs4pIQcHsOl1QlVInZPN5fglIDgAO5zBZLeLoaCbEplbQAGn2h2OpwmNDhiPq+WghUyNG2FXBtUCniwcQyD3KbIuQziry8OAA2gBdF6gZpMEggwKGNmVdhAA)

```ts
interface Array<Type> {
  /**
   * Gets or sets the length of the array.
   */
  length: number;
 
  /**
   * Removes the last element from an array and returns it.
   */
  pop(): Type | undefined;
 
  /**
   * Appends new elements to an array, and returns the new length of the array.
   */
  push(...items: Type[]): number;
 
  // ...
}
```

Modern JavaScript also provides other data structures which are generic, like `Map<K, V>`, `Set<T>`, and `Promise<T>`.
All this really means is that because of how `Map`, `Set`, and `Promise` behave, they can work with any sets of types.

### The `ReadonlyArray` Type {#the-readonlyarray-type}

The `ReadonlyArray` is a special type that describes arrays that shouldn’t be changed.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYME4BQAzAVwDsBjAFwEs5jQATOAZXMP3wAoA3AQwBtDIKUACVI3BsV4BPAIKxuUgDyJy0SsQDmAPgCUoAN65QoEKADqkUKW61oYuqHzwAtqADkPfoLcA6P0asaFUCABylQAF5QTwFEH0ReSlJIdh0AbgDSILheSB9eOA12AAMAFQALS3xKJHJovgFQSkRQABJ9GMEAbQAGAF0AX2L03ADTPx8AI0I6gHdLa2I3OucZ7nJLDwbvHwDOuJDCRHL2ACJK3gKAQlORgaA)

```ts
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
 
  // ...but we can't mutate 'values'.
  values.push("hello!");
}
```

```text {filename="Generated error"}
Property 'push' does not exist on type 'readonly string[]'.
```

Much like the `readonly` modifier for properties, it’s mainly a tool we can use for intent.
When we see a function that returns `ReadonlyArray`s, it tells us we’re not meant to change the contents at all, and when we see a function that consumes `ReadonlyArray`s, it tells us that we can pass any array into that function without worrying that it will change its contents.

Unlike `Array`, there isn’t a `ReadonlyArray` constructor that we can use.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwDYCcBmAUAHaQDuoASpAIYAmcBANgJ4CCsljAFAETSTVcAaUFwDmvSAUHCARvQCukLgEoA3EA)

```ts
new ReadonlyArray("red", "green", "blue");
```

```text {filename="Generated error"}
'ReadonlyArray' only refers to a type, but is being used as a value here.
```

Instead, we can assign regular `Array`s to `ReadonlyArray`s.

[Try this code](https://www.typescriptlang.org/play/#code/MYewdgzgLgBATiAgnOBDAngLhgJQKaoAm4ANusmugDzRwCWYA5gHwwC8MA2gERx6HcANDG6M+eMEJEAjEgFc83ALoBuIA)

```ts
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
```

Just as TypeScript provides a shorthand syntax for `Array<Type>` with `Type[]`, it also provides a shorthand syntax for `ReadonlyArray<Type>` with `readonly Type[]`.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYME4BQAzAVwDsBjAFwEs5jQATOAZXMP3wAoA3AQwBtDIKUNEjcGxXgE9QictErEA5gG0AugEpQAb1yhQIPYaPGToAHoXLV6xd36wAdUihS3WiLGh88ALagA5Dz8gv4AdOF2pDSyLnAADtIAvKBBAoihiLyUpJDs6gDckdFwvJChvHCK7AAGACoAFs74lEjkKXwCoJSIoAAkWqmCygAMqgC+1QW4dgbhoQBGhG0A7s6uxP5tPkvc5M6BHSGhdoPpcYSI9ewARI28FQCE11NjQA)

```ts
function doStuff(values: readonly string[]) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
 
  // ...but we can't mutate 'values'.
  values.push("hello!");
}
```

```text {filename="Generated error"}
Property 'push' does not exist on type 'readonly string[]'.
```

One last thing to note is that unlike the `readonly` property modifier, assignability isn’t bidirectional between regular `Array`s and `ReadonlyArray`s.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygCwEYAMaBQAbSAF1AA9VpIBDAEzgDt8BPURI6AS3oHMBtAXVABeUAIDcBYqCao2nHgOGj+E3KSVMJLEaTFA)

```ts
let x: readonly string[] = [];
let y: string[] = [];
 
x = y;
y = x;
```

```text {filename="Generated error"}
The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.
```

### Tuple Types {#tuple-types}

A *tuple type* is another sort of `Array` type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

[Try this code](https://www.typescriptlang.org/play/#code/C4TwDgpgBAysBOBLAdgcwHIFcC2AjC8ACgIaLxQC8UA2gM4IqoA0UyO+8AugNwBQA9PyjCRoseKgA9aTNlzJQA)

```ts
type StringNumberPair = [string, number];
```

Here, `StringNumberPair` is a tuple type of `string` and `number`.
Like `ReadonlyArray`, it has no representation at runtime, but is significant to TypeScript.
To the type system, `StringNumberPair` describes arrays whose `0` index contains a `string` and whose `1` index contains a `number`.

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAEzgZTgWwKZQBYxgDmAFAA4CGMATgFyIDaAzlNYUQDSJgiYBG2agF0AlIgDeAKESIICFogqIAvIko0GABiEBuaYgD0BmTIB6Afn1ywCvirVVqDAIy79Rk4gvvjAOn+SAL6SkqgYOPjsJAwARHjYADYJcDFcACwATKI6QA)

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

If we try to index past the number of elements, we’ll get an error.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwBYCcBmAUAGYCuAdgMYAuAlnCaACZwDKcAtpBQBZUkDmAFAAcAhlWioA2ogrQevADSgSRVgCMYAXQCUoAN55QoEKAB0ZvAdBla0q6AC8oEWIloNAbjwBfIA)

```ts
function doSomething(pair: [string, number]) {
  // ...
 
  const c = pair[2];
}
```

```text {filename="Generated error"}
Tuple type '[string, number]' of length '2' has no element at index '2'.
```

We can also [destructure tuples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring) using JavaScript’s array destructuring.

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAEzgZTgWwKZQBYxgDmAFAM5QBOhRAEgIZl4BciA2hdcQDSJgiYARtkoBdAJSIA3gChEiCAgrtCABxBQ0VGrzyM8oxAF5EnGgyYBuGXIVK4AG2wA6B3FJqNWrkXHX5APQB8iGhiAB6APw28opgZI4ubqR6TH62QWFhUTIAvkA)

```ts
function doSomething(stringHash: [string, number]) {
  const [inputString, hash] = stringHash;
 
  console.log(inputString);
                  
const inputString: string
 
  console.log(hash);
               
const hash: number
}
```

> Tuple types are useful in heavily convention-based APIs, where each element’s meaning is “obvious”.
> This gives us flexibility in whatever we want to name our variables when we destructure them.
> In the above example, we were able to name elements `0` and `1` to whatever we wanted.
> However, since not every user holds the same view of what’s obvious, it may be worth reconsidering whether using objects with descriptive property names may be better for your API.
> 

Other than those length checks, simple tuple types like these are equivalent to types which are versions of `Array`s that declare properties for specific indexes, and that declare `length` with a numeric literal type.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMpiqA5gOQK4C2ARtAApzBTIDeAUMsgPSPIDOADhAsHADbAAvCABNk7KAHtOUMMAit6yXhBBYwACwBcyAEwBuRQAZtrDNgMMAjNpCESUA4ubIA8hujIA5AEEoUOACeADymmKrIAD7ItsTQAHyeyAQQsVCsAHSZiqz8SAAUpnAyAPw2dtAANMgqwqXR5VAAlNq+-sGh2JH1qXEGAL5AA)

```ts
interface StringNumberPair {
  // specialized properties
  length: 2;
  0: string;
  1: number;
 
  // Other 'Array<string | number>' members...
  slice(start?: number, end?: number): Array<string | number>;
}
```

Another thing you may be interested in is that tuples can have optional properties by writing out a question mark (`?` after an element’s type).
Optional tuple elements can only come at the end, and also affect the type of `length`.

[Try this code](https://www.typescriptlang.org/play/#code/C4TwDgpgBAoglsAFhATgJgCYHkUGYNQC8UA2gHYCuAtgEaoA0UltDT1dKA-ALoDcAUPwBmFMgGNgcAPZkoAZwjAAwlKkoMcMgENgEABRjV6gFywEydNjwYAlFADe-KFENk5wUgA9GIRgC9uIhcjDAFnAHpw52iY5wA9TkFnVzkpABsIADo0qQBzPQADAAUUKQA3OAwIAkM1DW1dOShELQIAEnta9WyIMlykAF8oDSpeuWk3ApswqEjY+YXFpaWE-gGgA)

```ts
type Either2dOr3d = [number, number, number?];
 
function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;
              
const z: number | undefined
 
  console.log(`Provided coordinates had ${coord.length} dimensions`);
                                                  
(property) length: 2 | 3
}
```

Tuples can also have rest elements, which have to be an array/tuple type.

[Try this code](https://www.typescriptlang.org/play/#code/C4TwDgpgBAysBOBLAdgcwHIFcC2AjC8AQgPbEA2EAhsgM5QC8UA2jQiqgDRTI77xcA6IblIVqTALoSA3AChQkWGzQlyVWljwEGzVkjSDho9ZK48t8GfPDRVY2nH0Ze2xkyECRa8RK572Zi6W0kA)

```ts
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
```

- `StringNumberBooleans` describes a tuple whose first two elements are `string` and `number` respectively, but which may have any number of `boolean`s following.
- `StringBooleansNumber` describes a tuple whose first element is `string` and then any number of `boolean`s and ending with a `number`.
- `BooleansStringNumber` describes a tuple whose starting elements are any number of `boolean`s and ending with a `string` then a `number`.

A tuple with a rest element has no set “length” - it only has a set of well-known elements in different positions.

[Try this code](https://www.typescriptlang.org/play/#code/C4TwDgpgBAysBOBLAdgcwHIFcC2AjC8AQgPbEA2EAhsgM5QC8UA2jQiqgDRTI77xcA6IblIVqTALoSA3ACgA9PKgBaVQGNMwVctlritYFEoAuWGzRY8BEuSq0GzAEQALCGTLFHXAIwzd+1ihcUzgkC15rUTs6RiZHfEpNRAAzTDIvKAAmLgRMCD89Ayg1EPMMCKIo6hinAHdieDIAEwyAZhz4PK5kyjIaCA6uqB6+gahc-OkgA)

```ts
const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];
```

Why might optional and rest elements be useful?
Well, it allows TypeScript to correspond tuples with parameter lists.
Tuples types can be used in [rest parameters and arguments](/docs/handbook/2/functions.html#rest-parameters-and-arguments), so that the following:

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAJwKYEMAmAhEUoICSYADngBQB016yA5gM4BciA2g1MjGHQDSJgQAWwBGqZP2qURcOABsMYVgF1lASkQBvAFCJEEBBzZh0Q1PwBu4hvDCTq3MlGWIAvIlqMA3LsQB6P0QpbQBfIA)

```ts
function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
  // ...
}
```

is basically equivalent to:

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAJwKYEMAmAhEUoICSYADngBRjoC2qAXIgM5TIxgDmANIgG6rKN4YBmBDUARv24A6WWzJQG4uHAA2GMAG0AugEpEAbwBQiRAHoziWdKMBfIA)

```ts
function readButtonInput(name: string, version: number, ...input: boolean[]) {
  // ...
}
```

This is handy when you want to take a variable number of arguments with a rest parameter, and you need a minimum number of elements, but you don’t want to introduce intermediate variables.

### `readonly` Tuple Types {#readonly-tuple-types}

One final note about tuple types - tuple types have `readonly` variants, and can be specified by sticking a `readonly` modifier in front of them - just like with array shorthand syntax.

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAEzgZTgWwKZQBYxgDmAFAA4CGMATgFyLXYWpgA2AnogNoDOU1hIgBpEYEJgBG2agF0AlIgDeAKESIA9OrXaduvdoB6R4ydNmTqjVoB0t5QF8gA)

```ts
function doSomething(pair: readonly [string, number]) {
  // ...
}
```

As you might expect, writing to any property of a `readonly` tuple isn’t allowed in TypeScript.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYAsAGAUAGYCuAdgMYAuAlnCaACZwDKcAtpBQBZUkDmAFAAcAhlWipokYYxIAbAJ6gA2ogrQevADSgSRVgCMYAXQCUoAN55QoEWKU4joALygARJ0izZcAISuA3HgAvkA)

```ts
function doSomething(pair: readonly [string, number]) {
  pair[0] = "hello!";
}
```

```text {filename="Generated error"}
Cannot assign to '0' because it is a read-only property.
```

Tuples tend to be created and left un-modified in most code, so annotating types as `readonly` tuples when possible is a good default.
This is also important given that array literals with `const` assertions will be inferred with `readonly` tuple types.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUADaQAuoADnAJYB2pAvKANoYA0oWAuqAIaKgDGcaomIBuPHgBmAV2r9ilIaAAmlEdzmQAYvAC2AeWiUA5jQAUjAB5sAnh1SNq03QCMYbJ65gcAlKADeeKCg0CTS0NSgALLcxAAWAHSIAI7QxGaWoABUWeigANSgNtm5aD7iAL4SquqaOnAGRqbUZhQ0xOVAA)

```ts
let point = [3, 4] as const;
 
function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}
 
distanceFromOrigin(point);
```

```text {filename="Generated error"}
Argument of type 'readonly [3, 4]' is not assignable to parameter of type '[number, number]'.
  The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.
```

Here, `distanceFromOrigin` never modifies its elements, but expects a mutable tuple.
Since `point`’s type was inferred as `readonly [3, 4]`, it won’t be compatible with `[number, number]` since that type can’t guarantee `point`’s elements won’t be mutated.
