---
linkTitle: "Narrowing"
title: "TypeScript · Documentation - Narrowing - TypeScript en Español"
description: "Understand how TypeScript uses JavaScript knowledge to reduce the amount of type syntax in your projects."
weight: 4
type: docs
draft: true
---

# Narrowing

Imagine we have a function called `padLeft`.

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABABwIYBMAyBTYUAUa66MYA5gFyJggC2ARtgE6IA+iAzlE6WQDSJSyEFCpce5AJRjuvRAG8AUIkRQAFkzgB3ath0BRJpqb4ARADk4UQbWQAbbLWxgo2dIgCe2KAEJTkgG5FAF8gA)

```ts
function padLeft(padding: number | string, input: string): string {
  throw new Error("Not implemented yet!");
}
```

If `padding` is a `number`, it will treat that as the number of spaces we want to prepend to `input`.
If `padding` is a `string`, it should just prepend `padding` to `input`.
Let’s try to implement the logic for when `padLeft` is passed a `number` for `padding`.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUAGYCuAdgMYAuAlnCaAA4CGAJgDKQEUAUTzzVJAOaoSRALYAjGKAA+oRBWgDBAGlAD6RCqgVKhASlABvPKFDRIFItDoAiULYB0F+pEbde-A6ADU6kpoUANx4AL5AA)

```ts
function padLeft(padding: number | string, input: string) {
  return " ".repeat(padding) + input;
}
```

```text {filename="Generated error"}
Argument of type 'string | number' is not assignable to parameter of type 'number'.
  Type 'string' is not assignable to type 'number'.
```

Uh-oh, we’re getting an error on `padding`.
TypeScript is warning us that we’re passing a value with type `number | string` to the `repeat` function, which only accepts a `number`, and it’s right.
In other words, we haven’t explicitly checked if `padding` is a `number` first, nor are we handling the case where it’s a `string`, so let’s do exactly that.

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABABwIYBMAyBTYUAUa66MYA5gFyJggC2ARtgE6IA+iAzlE6WQDSJSyEFCpce5AJSIA3gChEg4InxQAnsmxxlREuUQBeI4gBENBsxPT5ixU2xQQTJCdMA6e5tQFdvaQGpBMGEoAG4FRABfCPtHZxQMPTJEQKERcMigA)

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

If this mostly looks like uninteresting JavaScript code, that’s sort of the point.
Apart from the annotations we put in place, this TypeScript code looks like JavaScript.
The idea is that TypeScript’s type system aims to make it as easy as possible to write typical JavaScript code without bending over backwards to get type safety.

While it might not look like much, there’s actually a lot going on under the covers here.
Much like how TypeScript analyzes runtime values using static types, it overlays type analysis on JavaScript’s runtime control flow constructs like `if/else`, conditional ternaries, loops, truthiness checks, etc., which can all affect those types.

Within our `if` check, TypeScript sees `typeof padding === "number"` and understands that as a special form of code called a *type guard*.
TypeScript follows possible paths of execution that our programs can take to analyze the most specific possible type of a value at a given position.
It looks at these special checks (called *type guards*) and assignments, and the process of refining types to more specific types than declared is called *narrowing*.
In many editors we can observe these types as they change, and we’ll even do so in our examples.

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABABwIYBMAyBTYUAUa66MYA5gFyJggC2ARtgE6IA+iAzlE6WQDSJSyEFCpce5AJSIA3gChEg4InxQAnsmxxlREuUQBeI4gBENBsxPT5ixU2xQQTJCdMA6e5tQFdvaQGpBMGEoAG4FWwB6SNtYuNiAPQB+CIBfCPtHZxQMPTJEQKERcMVouOS5VKA)

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
                        
(parameter) padding: number
  }
  return padding + input;
           
(parameter) padding: string
}
```

There are a couple of different constructs TypeScript understands for narrowing.

## `typeof` type guards {#typeof-type-guards}

As we’ve seen, JavaScript supports a `typeof` operator which can give very basic information about the type of values we have at runtime.
TypeScript expects this to return a certain set of strings:

- `"string"`
- `"number"`
- `"bigint"`
- `"boolean"`
- `"symbol"`
- `"undefined"`
- `"object"`
- `"function"`

Like we saw with `padLeft`, this operator comes up pretty often in a number of JavaScript libraries, and TypeScript can understand it to narrow types in different branches.

In TypeScript, checking against the value returned by `typeof` is a type guard.
Because TypeScript encodes how `typeof` operates on different values, it knows about some of its quirks in JavaScript.
For example, notice that in the list above, `typeof` doesn’t return the string `null`.
Check out the following example:

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYDMBGUOAOABgBYB2AKADMBXAOwGMAXASzjtAAdoW6mBBADaCAFIiZJU4nnQDmoAD6hpvWQG0AuotB0awgJSgA3hVCgWVUCKYBPTpDiXpiUAF53oAERwARgCtIZk9DEzMzKgQrBnZxZVBHZQlEENMws2i6RDhBSAA6QThZMX0AblSzAF9UitBIQURIc0trOwcnJLcPTxU5YONy0AysnPzCsSTS6tr6xtCwkFAAEzgdOCYAC1VqigqgA)

```ts
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}
```

```text {filename="Generated error"}
'strs' is possibly 'null'.
```

In the `printAll` function, we try to check if `strs` is an object to see if it’s an array type (now might be a good time to reinforce that arrays are object types in JavaScript).
But it turns out that in JavaScript, `typeof null` is actually `"object"`!
This is one of those unfortunate accidents of history.

Users with enough experience might not be surprised, but not everyone has run into this in JavaScript; luckily, TypeScript lets us know that `strs` was only narrowed down to `string[] | null` instead of just `string[]`.

This might be a good segue into what we’ll call “truthiness” checking.

# Truthiness narrowing {#truthiness-narrowing}

Truthiness might not be a word you’ll find in the dictionary, but it’s very much something you’ll hear about in JavaScript.

In JavaScript, we can use any expression in conditionals, `&&`s, `||`s, `if` statements, Boolean negations (`!`), and more.
As an example, `if` statements don’t expect their condition to always have the type `boolean`.

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAcwKZQKoGdUCcsDyYANjGKgLKpZYCGaAFGCALbZ6ElmoBcizLAEZ4AlIgDeAKESIYwRE1bt8RUuTFSZM3OhC4kAAwAqACzypEtHYgAk4gcs5rUAX0QJn-OAHcAhAYBuaUQXYJ0oPSQAIgA5OEE4ABMATwByLEQzHQA6RB4GKKCXIA)

```ts
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}
```

In JavaScript, constructs like `if` first “coerce” their conditions to `boolean`s to make sense of them, and then choose their branches depending on whether the result is `true` or `false`.
Values like

- `0`
- `NaN`
- `""` (the empty string)
- `0n` (the `bigint` version of zero)
- `null`
- `undefined`

all coerce to `false`, and other values get coerced to `true`.
You can always coerce values to `boolean`s by running them through the `Boolean` function, or by using the shorter double-Boolean negation. (The latter has the advantage that TypeScript infers a narrow literal boolean type `true`, while inferring the first as type `boolean`.)

[Try this code](https://www.typescriptlang.org/play/#code/PTAECMHsBcAtUgM1HApgZ1aAThgrgDbSgCWAdqAOTTZ6qUBQAQpJAagIZkAUARLKgIFIvAJQBuUCBQBPAA6oAXBFbsuAGlAA3DgTrKadBgEJjvAO6RsBACa9J06PKUpaqTaE869Lw6iA)

```ts
// both of these result in 'true'
Boolean("hello"); // type: boolean, value: true
!!"world"; // type: true,    value: true
```

It’s fairly popular to leverage this behavior, especially for guarding against values like `null` or `undefined`.
As an example, let’s try using it for our `printAll` function.

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABABwE4zFAggGxwCgGcpVCAuRY9MAc0QB9KSMaBtAXQcTBDwEpEAbwBQiRDGCIiJQogBkcxFACeyAKZxJVWQF49iAERwARgCs10AwJFixwOKikQExSok1NS10bbHOwhHA4agB0OHA0RHwA3D5iAL4+8YhqOIRq4pL4Kuoe2oh6OoZULFZCcYj+gcFhEdJesQnC8UA)

```ts
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}
```

You’ll notice that we’ve gotten rid of the error above by checking if `strs` is truthy.
This at least prevents us from dreaded errors when we run our code like:

```txt
TypeError: null is not iterable
```

Keep in mind though that truthiness checking on primitives can often be error prone.
As an example, consider a different attempt at writing `printAll`

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABABwE4zFAggGxwCgGcpVCAuRY9MAc0QB9KSMaBtAXQcTBDwEpEAbwBQiRAHpxiAISy58hdNESpiACIB5AHIByACrqNiPQAkAkgGUlYyWMQBpAKKOACogBKjrGrNaA4sq2isFyyjDAiEQkhAIidojhkVAAnsgApnARVISIALz5iABEcABGAFZp0IWxyvHAcKiREAjElIiZTKQ18fHNYIRwOGkAdDhwNER8ANy1dgC+s3OIaTiEaQkR+CnpHdl5BYVULNVCs2J9A0Oj41FdM-ELYgtzQA)

```ts
function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
```

We wrapped the entire body of the function in a truthy check, but this has a subtle downside: we may no longer be handling the empty string case correctly.

TypeScript doesn’t hurt us here at all, but this behavior is worth noting if you’re less familiar with JavaScript.
TypeScript can often help you catch bugs early on, but if you choose to do *nothing* with a value, there’s only so much that it can do without being overly prescriptive.
If you want, you can make sure you handle situations like these with a linter.

One last word on narrowing by truthiness is that Boolean negations with `!` filter out from negated branches.

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAWxAG1gBzQTwIJpoAUAUIogG4CGaIApgM4BciYIyARnQE4DaAuogA+icABM6wGGDpiANGUTAq0ONxZtOPEgEoN7Ln0Ejxk6bMQBvRTGCIiAQmq1GOq4vLc6UENyTP6BgBuRQBfRDo0Bjp3ck9vX38aQIA6ZCpMIiIADzcAXgA+RGzEAColFSg1HRDyUJJQoA)

```ts
function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}
```

## Equality narrowing {#equality-narrowing}

TypeScript also uses `switch` statements and equality checks like `===`, `!==`, `==`, and `!=` to narrow types.
For example:

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAUwB4EMC2AHANsgClQC5EBnKAJxjAHNEAfRMETAI2UoBpEBPUitTqNEbOHHzowASkQBvAFCJEMYIiKIAvNr6zFy5QHpDiAOrJEEKczgB3S+ly5EU3ogDkgmrXeJMyKAALOAATRAQPVF84Sg9edwA6JQNUBKg4AFVsbE4AYXQyQmkAbmSjEwA9AH4yvjS4ABk7PIKi0oNEY0Rq5IBfFFxC+VqIBDIJZATcOFoiEtqujqWejtGwcfwpmYJeeY7FpYMVxF6FXqA)

```ts
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
          
(method) String.toUpperCase(): string
    y.toLowerCase();
          
(method) String.toLowerCase(): string
  } else {
    console.log(x);
               
(parameter) x: string | number
    console.log(y);
               
(parameter) y: string | boolean
  }
}
```

When we checked that `x` and `y` are both equal in the above example, TypeScript knew their types also had to be equal.
Since `string` is the only common type that both `x` and `y` could take on, TypeScript knows that `x` and `y` must be a `string` in the first branch.

Checking against specific literal values (as opposed to variables) works also.
In our section about truthiness narrowing, we wrote a `printAll` function which was error-prone because it accidentally didn’t handle empty strings properly.
Instead we could have done a specific check to block out `null`s, and TypeScript still correctly removes `null` from the type of `strs`.

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABABwE4zFAggGxwCgGcpVCAuRY9MAc0QB9KSMaBtAXQcTBDwEpEAbwBQiRDGCIiJQogCEAXgXdeOASLFiJUqAE9kAUziSqspcoBEcAEYArA9AvrRmscDiopEBMUqJjTKTOrq4A9KEhkYgAegD8LpHeYIRwOAYAdDhwNER8ANwJmgC+hUWIBjiEBuKS+HqGAaaI5ogWVCxOQoViSSlpmdnSQQWR4VGacaUuJUVAA)

```ts
function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
                       
(parameter) strs: string[]
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
                   
(parameter) strs: string
    }
  }
}
```

JavaScript’s looser equality checks with `==` and `!=` also get narrowed correctly.
If you’re unfamiliar, checking whether something `== null` actually not only checks whether it is specifically the value `null` - it also checks whether it’s potentially `undefined`.
The same applies to `== undefined`: it checks whether a value is either `null` or `undefined`.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMIHtx1NZBvAKGWQDc4AbAVwgC5kRKBbAI1wB97LzzkPKQAJhBg4BAbgIBfAgRj8EYYJmSMuigA7kAngDUK1ABQJMYbCGh0MWHFAA0yeAvRQ6DFtACU+IsgD0v5AAlCEZ0EhRmdDAAC2QAcgZuOOQ4QXj+IRFzAWSYKHRGZBiUMC11CAA6H2AYZCMTM2gKsioUAEIAXk5uL0JiYmMQAGd0ckrydABzeutzKGb9CA8Jfr8A1Y3N1YA9AH4ZVf9kADl0AHdkM5QEVOQhuBgIbRU1YE0teMHTGwXWuKrVl9GvMWtRkAAqLqOMDOFbIaSSIA)

```ts
interface Container {
  value: number | null | undefined;
}
 
function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);
                           
(property) Container.value: number
 
    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}
```

## The `in` operator narrowing {#the-in-operator-narrowing}

JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the `in` operator.
TypeScript takes this into account as a way to narrow down potential types.

For example, with the code: `"value" in x`. where `"value"` is a string literal and `x` is a union type.
The “true” branch narrows `x`’s types which have either an optional or required property `value`, and the “false” branch narrows to types which have an optional or missing property `value`.

[Try this code](https://www.typescriptlang.org/play/#code/C4TwDgpgBAYglgZwBZQLxQN5QQdzgWwC4oAKASjQD4oA3AezgBMoBfAbgChRIoAhOAE7N0WAGYAbEMXJVaDZuw4dRAVwB2AY2Bw6aqPjo0IJAIZqCJ8cXjIoAHz6DGFDByhQ4o0gCJcBbx56ZhbiLm7uUAIQwCoCQeb4lgB0fvjknO4sSu5RMXFQwYniSRIg6RwsQA)

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}
```

To reiterate, optional properties will exist in both sides for narrowing. For example, a human could both swim and fly (with the right equipment) and thus should show up in both sides of the `in` check:

[Try this code](https://www.typescriptlang.org/play/#code/C4TwDgpgBAYglgZwBZQLxQN5QQdzgWwC4oAKASjQD4oA3AezgBMoBfAbgChRIoAhOAE7N0WAGYAbEMXJVaDZuy7hoACQCu+AIYA7NJmx58AfmkVU1ekzZQJIE6TMX5rTh1FrtAY2Bw6u-HQ0ECQ6BJrixPDIUAA+fILMcepa2hQYHFBQcKKkAES4BLlZuqFa4mkZmVCl4ZwA9HWZAHpGlSxQEOII0OlV1dph4vWNUC1tHCxAA)

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;
      
(parameter) animal: Fish | Human
  } else {
    animal;
      
(parameter) animal: Bird | Human
  }
}
```

## `instanceof` narrowing {#instanceof-narrowing}

JavaScript has an operator for checking whether or not a value is an “instance” of another value.
More specifically, in JavaScript `x instanceof Foo` checks whether the *prototype chain* of `x` contains `Foo.prototype`.
While we won’t dive deep here, and you’ll see more of this when we get into classes, they can still be useful for most values that can be constructed with `new`.
As you might have guessed, `instanceof` is also a type guard, and TypeScript narrows in branches guarded by `instanceof`s.

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAGzgcwGoENkgKYAUAHgFyIAiWUeiAPogM5QBOMYaAlIgN4BQiiGMETFBYJlkh44wytS58BAiAgZxkeAHSo0xTVDgBVACoBhAMos2ujhwDc-JQHonSt0oB6AfkcBfRHjIDDSKSiri6lo6egaGAA5xeMymWMEEtg5uLu7u3n68vkA)

```ts
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
               
(parameter) x: Date
  } else {
    console.log(x.toUpperCase());
               
(parameter) x: string
  }
}
```

## Assignments {#assignments}

As we mentioned earlier, when we assign to any variable, TypeScript looks at the right side of the assignment and narrows the left side appropriately.

[Try this code](https://www.typescriptlang.org/play/#code/DYUwLgBAHhC8EFkCGYAWA6ATkgdgEwHsBbACgEoIAeCABnQFYIB+CARhogC4IAiVEYMAIQA7gUzA8AQh4BuAFAB6RRAgA9JvJjxWC+QGMCOAM4FQ6IQHMSUMguWrHT9Zu29LBAngBGATxAyeoYmZiAWBNa29irOThpAA)

```ts
let x = Math.random() < 0.5 ? 10 : "hello world!";
   
let x: string | number
x = 1;
 
console.log(x);
           
let x: number
x = "goodbye!";
 
console.log(x);
           
let x: string
```

Notice that each of these assignments is valid.
Even though the observed type of `x` changed to `number` after our first assignment, we were still able to assign a `string` to `x`.
This is because the *declared type* of `x` - the type that `x` started with - is `string | number`, and assignability is always checked against the declared type.

If we’d assigned a `boolean` to `x`, we’d have seen an error since that wasn’t part of the declared type.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGY1oFABtIAXUAD1AF5QBZAQ0IAsA6aGgOwBM4BbACgEpQAHlAAGRgFZQAflABGEaFQAiepDx44oAO4I87AIRKA3DhChQAPSk4ylWSZwBjOK0RwCjDQHMeJPibNzIOCrGwpQQmgAV0gHZ1d3SE84Hz8AsGDMqyA)

```ts
let x = Math.random() < 0.5 ? 10 : "hello world!";
   
let x: string | number
x = 1;
 
console.log(x);
           
let x: number
x = true;
 
console.log(x);
           
let x: string | number
```

```text {filename="Generated error"}
Type 'boolean' is not assignable to type 'string | number'.
```

## Control flow analysis {#control-flow-analysis}

Up until this point, we’ve gone through some basic examples of how TypeScript narrows within specific branches.
But there’s a bit more going on than just walking up from every variable and looking for type guards in `if`s, `while`s, conditionals, etc.
For example

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABABwIYBMAyBTYUAUa66MYA5gFyJggC2ARtgE6IA+iAzlE6WQDSJSyEFCpce5AJSIA3gChEg4InxQAnsmxxlREuUQBeI4gBENBsxPT5ixU2xQQTJCdMA6e5tQFdvaQGpBMGEoAG4FRABfCPtHZxQMPTJEQKERcMigA)

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

`padLeft` returns from within its first `if` block.
TypeScript was able to analyze this code and see that the rest of the body (`return padding + input;`) is *unreachable* in the case where `padding` is a `number`.
As a result, it was able to remove `number` from the type of `padding` (narrowing from `string | number` to `string`) for the rest of the function.

This analysis of code based on reachability is called *control flow analysis*, and TypeScript uses this flow analysis to narrow types as it encounters type guards and assignments.
When a variable is analyzed, control flow can split off and re-merge over and over again, and that variable can be observed to have a different type at each point.

[Try this code](https://www.typescriptlang.org/play/#code/GYVwdgxgLglg9mABAUwB4EMC2AHANsgCgEpEBvAKEUXykVQC5EBnKAJxjAHNEAfRMEJgBGyVr0RC4cfOjABucpTqIAvIgCy6KAAsAdK1kATOJmKIAPIgAMugKwKlEBE2nJduOJwKoiCqgHp-KmCQxAA9AH5FKhhgRAJNHX0jEzNLG1sSChDUVUQAIm1kXA98v2CnMBd8d09vXyUAoNCQyKUAXxRcJmQyRuU1AEYrK3KqSuq3Dy8fMcRAltaoqnboxFZkKBBWJFRyhaXydqA)

```ts
function example() {
  let x: string | number | boolean;
 
  x = Math.random() < 0.5;
 
  console.log(x);
             
let x: boolean
 
  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);
               
let x: string
  } else {
    x = 100;
    console.log(x);
               
let x: number
  }
 
  return x;
        
let x: string | number
}
```

## Using type predicates {#using-type-predicates}

We’ve worked with existing JavaScript constructs to handle narrowing so far, however sometimes you want more direct control over how types change throughout your code.

To define a user-defined type guard, we simply need to define a function whose return type is a *type predicate*:

[Try this code](https://www.typescriptlang.org/play/#code/C4TwDgpgBAYglgZwBZQLxQN5QQdzgWwC4oAKASjQD4oA3AezgBMoBfAbgChRIoAhOAE7N0WAGYAbEMXJVaDZuw6MIAY3EBDAdFEBXAHYrgcOnqgBzCMADK+dePEAFS+WLxkUAD59BjTgHo-KABaEJUdYBCgjl0DIxMoRDckEkhgV0QUL34hMmJUhIRYDMwOKCgtYB0BUxTLKHVCpLIAOlwCKABCVHR9ZVE4PQhfDhYgA)

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

`pet is Fish` is our type predicate in this example.
A predicate takes the form `parameterName is Type`, where `parameterName` must be the name of a parameter from the current function signature.

Any time `isFish` is called with some variable, TypeScript will *narrow* that variable to that specific type if the original type is compatible.

[Try this code](https://www.typescriptlang.org/play/#code/C4TwDgpgBAYglgZwBZQLxQN5QQdzgWwC4oAKASjQD4oA3AezgBMoBfAbgChRIoAhOAE7N0WAGYAbEMXJVaDZuw6MIAY3EBDAdFEBXAHYrgcOnqgBzCMADK+dePEAFS+WLxkUAD59BjTroNGJlCIbkgkkMCuiChe-EJkxBHBCLDRmBxQUFrAOgKm4ZZQ6imhZAB0uARQAISo6PrKonB6EL4cLBwA9J1QALT9KjrA-b1dPbx0wCgqduIpwHRQAOSV+EtFesxLEiDrmtB6dDhQdADW6iBlHOKFSegW1rb2TsDknBxwoqQh0QXAZBQMBkoBEKnh8G92lAIHNoEDMqCdpCWEA)

```ts
// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
 
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```

Notice that TypeScript not only knows that `pet` is a `Fish` in the `if` branch;
it also knows that in the `else` branch, you *don’t* have a `Fish`, so you must have a `Bird`.

You may use the type guard `isFish` to filter an array of `Fish | Bird` and obtain an array of `Fish`:

[Try this code](https://www.typescriptlang.org/play/#code/C4TwDgpgBAYglgZwBZQLxQN5QQdzgWwC4oAKASjQD4oA3AezgBMBuKAOwEN8JiFgAnOGwDmUAL7MAUKEhQAQnH6M0mKADMANiGLkqtBi3Zce2AUNETJjCAGMNHftDUBXNjeBw6bKMIjAAyvgcGhoACn7kxPDIUAA+8ooski5uHl5QiNFIJJDAUYgo8QpKZMS5GQiwBZiSUFCOwM783jl+UByVWWQAdLgEUACEqOiu1mpCEElikgD0M1AAtEs2zsBLC5I2XnxQAF50dDpZcQklANoAuipnvgFBIeHA5AA0Pn6BwWERZK+3Hw-fC5SLZsHajCD8ADqHGAEIAjPlkJcVPs6N1xhpYfwSJkCmQpHMoHR+K8IABHZxwGjBCBsYBaTbbYBQcFQmEQgBMiKQyPQqPRcExEJxCC67U6BUuUlm8wAKkhoGBHIw4DZ2VAgiB2BBJvUIJAYeZ1MSNcToFt8GANBAAB5QW1cK0QBCM0HM1nQrEAZm5vL2BwFQuxrWApSg5UQVRiqGoGFqGTUpFy3U43DQwygACJkA4ANYQECZigNJreNTBBAQKR1EvNCpZEP4yRifFAA)

```ts
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
 
// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
```

In addition, classes can [use `this is Type`](/docs/handbook/2/classes.html#this-based-type-guards) to narrow their type.

## Assertion functions {#assertion-functions}

Types can also be narrowed using [Assertion functions](/docs/handbook/release-notes/typescript-3-7.html#assertion-functions).

# Discriminated unions {#discriminated-unions}

Most of the examples we’ve looked at so far have focused around narrowing single variables with simple types like `string`, `boolean`, and `number`.
While this is common, most of the time in JavaScript we’ll be dealing with slightly more complex structures.

For some motivation, let’s imagine we’re trying to encode shapes like circles and squares.
Circles keep track of their radiuses and squares keep track of their side lengths.
We’ll use a field called `kind` to tell which shape we’re dealing with.
Here’s a first attempt at defining `Shape`.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8BQyyA1qACYBcyARAsFAgDYTXIA+NAzgI4CucUFgG5CyKHDLBenAPxUQvALYAjaCKKdgZCABkIIAOZh0c5ApVr8AXyA)

```ts
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}
```

Notice we’re using a union of string literal types: `"circle"` and `"square"` to tell us whether we should treat the shape as a circle or square respectively.
By using `"circle" | "square"` instead of `string`, we can avoid misspelling issues.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYBsB2AUAJYB2ALjAGYCGAxpKAMoAWlADnQN56igDWxAJqgBE1AtGoAbSENAAfUEMQBHAK6Vo0gNxdQ0SvwIrEAflREVAWwBGMbd0QF+kADKQiAcxKNToc9dt4AL54eCCgALSR1CokkeF45CpE1CQEcESgzET8UkyskAAUiMxsqHlsAJSgnNxhcHAsiACEOgTkoEUlkAB0fNmgALxDChopQlU13KBh3bM6wYFAA)

```ts
function handleShape(shape: Shape) {
  // oops!
  if (shape.kind === "rect") {
    // ...
  }
}
```

```text {filename="Generated error"}
This comparison appears to be unintentional because the types '"circle" | "square"' and '"rect"' have no overlap.
```

We can write a `getArea` function that applies the right logic based on if it’s dealing with a circle or square.
We’ll first try dealing with circles.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYDMbQEYAOABgBYCAoASwDsAXGAMwEMBjSUAZQAsmAHdgN7lQoANY0AJqgBELStBYAbSNNAAfUNMQBHAK5NoKgNzDQ0JhMq7EAflTVdAWwBGMEyMSUJkADKRqAOa0XHagDi5u5AC+5OQgoAC0SSy6tEkJ5Ay61Cy0lHDUoAGQtACChkwAFIg8-KjcfJAAlKBCIoa0utCFALJMwQB0AAoAkqAAVKA1jQPmltYTk2gmUUA)

```ts
function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2;
}
```

```text {filename="Generated error"}
'shape.radius' is possibly 'undefined'.
```

Under [`strictNullChecks`](/tsconfig#strictNullChecks) that gives us an error - which is appropriate since `radius` might not be defined.
But what if we perform the appropriate checks on the `kind` property?

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwFYDMbQEYAOABgBYCAoASwDsAXGAMwEMBjSUAZQAsmAHdgN7lQoANY0AJqgBELStBYAbSNNAAfUNMQBHAK5NoKgNzDQ0JhMq7EAflTVdAWwBGMEyMSUJkADKRqAOa0XHagDi5u5AC+5OQgoAC0SSy6tEkJ5Ay61Cy0lHDUoAGQtACChkwAFIg8-KjcfJAAlKBCIpQMoNW1kAB04tQSoAC8o5pyCsrSLW0iZiW60IUAskzBvQAKAJKgAFSgNY295pbWe-to7qAxUUA)

```ts
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}
```

```text {filename="Generated error"}
'shape.radius' is possibly 'undefined'.
```

Hmm, TypeScript still doesn’t know what to do here.
We’ve hit a point where we know more about our values than the type checker does.
We could try to use a non-null assertion (a `!` after `shape.radius`) to say that `radius` is definitely present.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8BQyyA1qACYBcyARAsFAgDYTXIA+NAzgI4CucUFgG5CyKHDLBenAPxUQvALYAjaCKKdgZCABkIIAOZh0c5ApVr8AX3z4A9HeQBaFwl5gXT-DF4gEYYAB7EGQDCDAAQUE4AApOTBwqDGwIAEpkAiJgGGQ4hIgAOlIQMmQAXgqaOgZmanTMojFw3igQgFk4YwKABQBJZAAqZHiUgvFJaQBCQaGAJnVkGysgA)

```ts
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius! ** 2;
  }
}
```

But this doesn’t feel ideal.
We had to shout a bit at the type-checker with those non-null assertions (`!`) to convince it that `shape.radius` was defined, but those assertions are error-prone if we start to move code around.
Additionally, outside of [`strictNullChecks`](/tsconfig#strictNullChecks) we’re able to accidentally access any of those fields anyway (since optional properties are just assumed to always be present when reading them).
We can definitely do better.

The problem with this encoding of `Shape` is that the type-checker doesn’t have any way to know whether or not `radius` or `sideLength` are present based on the `kind` property.
We need to communicate what *we* know to the type checker.
With that in mind, let’s take another swing at defining `Shape`.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMLCggNig3gKGWQGtQATALmQCIENsJqBuQ5KOM4AVwGcqQuAWwBG0FgF98+UJFiIUAZQCOXOFDytSISjR4q1jFkR7AyEADIQQAczAALfkNFQJUsAE8ADortxvyAF40ehxkAB9kZVV1JiA)

```ts
interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;
```

Here, we’ve properly separated `Shape` out into two types with different values for the `kind` property, but `radius` and `sideLength` are declared as required properties in their respective types.

Let’s see what happens here when we try to access the `radius` of a `Shape`.

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGYME4BQBLAOwBcYAzAQwGNJQBhfaKgG1oG9dRQBrIgE1QAiKoxaRBAbk6hoFPvgCuKUIQUBbAEYwpAX1wES5arQDKARwUVo7ab0IDQgxBavipXRPj6QAMpEIA5sQAFqiqmtq4erjEAJ4ADqbBFImgALz0oqygAD6g5pbWUrggoAC0FVQKxBVluGQKhFTE+HCEoAGQxACC1hQAFIjJiagmw5AAlKAcXNbECtDtALIUIQB0AAoAkqAAVKBDKZBrsvJKe-toukA)

```ts
function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2;
}
```

```text {filename="Generated error"}
Property 'radius' does not exist on type 'Shape'.
  Property 'radius' does not exist on type 'Square'.
```

Like with our first definition of `Shape`, this is still an error.
When `radius` was optional, we got an error (with [`strictNullChecks`](/tsconfig#strictNullChecks) enabled) because TypeScript couldn’t tell whether the property was present.
Now that `Shape` is a union, TypeScript is telling us that `shape` might be a `Square`, and `Square`s don’t have `radius` defined on them!
Both interpretations are correct, but only the union encoding of `Shape` will cause an error regardless of how [`strictNullChecks`](/tsconfig#strictNullChecks) is configured.

But what if we tried checking the `kind` property again?

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMLCggNig3gKGWQGtQATALmQCIENsJqBuQ5KOM4AVwGcqQuAWwBG0FgF98+UJFiIUAZQCOXOFDytSISjR4q1jFkR7AyEADIQQAczAALfkNFQJUsAE8ADortxvyAF40ehxkAB9kZVV1FnwAejjkAFoUhC4wFKT8GC4QBDBgAHsQZGsIMABBdTgACh5fbyoFBogASmQCImAYZDqWgDotMkCAoNoQxnbOojZyrigSgFk4e36ABQBJZAAqZHq-CH72Tl4d3YAmIxmEmdu7mYA9AH5WSXEgA)

```ts
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
                      
(parameter) shape: Circle
  }
}
```

That got rid of the error!
When every type in a union contains a common property with literal types, TypeScript considers that to be a *discriminated union*, and can narrow out the members of the union.

In this case, `kind` was that common property (which is what’s considered a *discriminant* property of `Shape`).
Checking whether the `kind` property was `"circle"` got rid of every type in `Shape` that didn’t have a `kind` property with the type `"circle"`.
That narrowed `shape` down to the type `Circle`.

The same checking works with `switch` statements as well.
Now we can try to write our complete `getArea` without any pesky `!` non-null assertions.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMLCggNig3gKGWQGtQATALmQCIENsJqBuQ5KOM4AVwGcqQuAWwBG0FgF98+UJFiIUAZQCOXOFDytSISjR4q1jFkR7AyEADIQQAczAALfkNFQJUsAE8ADortxvyAF40ehxkAB9kZVV1FnwAejjkAFoUhC4wFKT8GC4QBDBgAHsQZGsIMABBdTgACh5fbyoFBogASmQCYwB3YDAEO2Q6loA6LTJ2zqJkBDgeFFoQxgpWKbZyrigSgFk4e2GABQBJZAAqZHq-CGH2Tl5Ts4AmIymE1bf3ogA9AH4V6dn5npoks-kR1GANiULt5hiYzJYbPZ7sgnn9Xu8fqxJOIgA)

```ts
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
                        
(parameter) shape: Circle
    case "square":
      return shape.sideLength ** 2;
              
(parameter) shape: Square
  }
}
```

The important thing here was the encoding of `Shape`.
Communicating the right information to TypeScript - that `Circle` and `Square` were really two separate types with specific `kind` fields - was crucial.
Doing that lets us write type-safe TypeScript code that looks no different than the JavaScript we would’ve written otherwise.
From there, the type system was able to do the “right” thing and figure out the types in each branch of our `switch` statement.

> As an aside, try playing around with the above example and remove some of the return keywords.
> You’ll see that type-checking can help avoid bugs when accidentally falling through different clauses in a `switch` statement.
> 

Discriminated unions are useful for more than just talking about circles and squares.
They’re good for representing any sort of messaging scheme in JavaScript, like when sending messages over the network (client/server communication), or encoding mutations in a state management framework.

# The `never` type {#the-never-type}

When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left.
In those cases, TypeScript will use a `never` type to represent a state which shouldn’t exist.

# Exhaustiveness checking {#exhaustiveness-checking}

The `never` type is assignable to every type; however, no type is assignable to `never` (except `never` itself). This means you can use narrowing and rely on `never` turning up to do exhaustive checking in a `switch` statement.

For example, adding a `default` to our `getArea` function which tries to assign the shape to `never` will not raise an error when every possible case has been handled.

[Try this code](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgMLCggNig3gKGWQGtQATALmQCIENsJqBuQ5KOM4AVwGcqQuAWwBG0FgF98+UJFiIUAZQCOXOFDytSISjR4q1jFkR7AyEADIQQAczAALfkNFQJ+APRvkAWh8IuYHy98MABPAAdFOzgI5ABeNHocZAAfZGVVdRZ8GC4QBDBgAHsQZGsIMABBdTgACh4oiKoFBogASmQCYwB3YDAEO2Q6loA6LTJ2zqJkBDgeFFpExgpWKbZyrigSgFk4e2GABQBJZAAqZHroiGH2Tl5Ts4AmIymZud19dWpl1aJ1MA2ShcIsMTGZLDZ7PdkE8VsgzPAuFgwN8fghijwwMgAPoQAAeUV4BQAbhBUHYIAhiPwICSoHFzi1nqs-gDsXiCRjgCSyRTiM9JOIgA)

```ts
type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

Adding a new member to the `Shape` union, will cause a TypeScript error:

[Try this code](https://www.typescriptlang.org/play/#code/PTAEAEFMCdoe2gZwFygEwGY1oFAEsA7AFxgDMBDAY0lAGE9pKAbGgbx1FAGtCATVAESUGzSAIDcHUNHK88AVxSgC8gLYAjGJIC+OfMTJUaAZQCO88tDZSeBfqAGJzlsZM6I8vSABlIBAOZEABaoKhpaOLogoAC0cZTyRHEx+iTQFNSgACrQeOQBLKDsnLb2AkS5+f4sElIeXr4BwaFqmtA6ekQAngAOJkHkfaAAvHQihQA+oGYWVqBTOXkFkJI4pPIElER4cASg-pBEAIJW5AAUiAN9qMZXkACURXUA7nhElEGgF3cAdKWPxU4oEo5EQNCE4zEyCkQOkh3k0D2AFlyMEfgAFACSoAAVKBLoNID8ZHJFLi8Wg3ECQWCHE5ZlCYUCrEQEXsCX0fvUfH5Ap8cRSqZwvBR5EwiNDYZxKLtEERQAB9SAADwGim2ADdILQgpBKFxQpAtdARvi7kLmfDEYqVWq5XgtTq9VwqbptEA)

```ts
interface Triangle {
  kind: "triangle";
  sideLength: number;
}
 
type Shape = Circle | Square | Triangle;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

```text {filename="Generated error"}
Type 'Triangle' is not assignable to type 'never'.
```
