---
linkTitle: "Tipos de acceso indexado"
title: "Tipos de acceso indexado - TypeScript en Español"
description: "Usa la sintaxis Type['a'] para acceder a un subconjunto de un tipo."
weight: 5
type: docs
---

# Tipos de acceso indexado

Podemos usar un *tipo de acceso indexado* para buscar una propiedad específica en otro tipo:

{{< content-ads/top-banner >}}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAChBOBnA9gOygXigbygQwHMIAuKVAVwFsAjBAbjL0pKkWHgEtUCG8AbDgDcW1ZMj4Q86AL50AUKEhQAgkUywEKVAG0ARIQi6AuvID0pqJYB6AfiA)

```ts
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
     
type Age = number
```

El tipo de indexación es en sí mismo un tipo, por lo que podemos usar uniones, `keyof` u otros tipos por completo:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAChBOBnA9gOygXigbygQwHMIAuKVAVwFsAjBAbjL0pKkWHgEtUCG8AbDgDcW1ZMj4Q86AL50AUAHoFUALRqAxuWBqVc0JCgBJAIyZYCFKgDaAIkIQbUAD5QbqJg4C68pVD8A9AH45PXBoQwAmMzgkNCsAawgQZAAzc1jUb0VlAODQgwBBAWEAeXgAOQ8zO2KHZ1d3Zht5fXCAZmiLOKKhCDLK5izfXKA)

{{< content-ads/middle-banner-1 >}}

```ts
type I1 = Person["age" | "name"];
     
type I1 = string | number
 
type I2 = Person[keyof Person];
     
type I2 = string | number | boolean
 
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];
     
type I3 = string | boolean
```

Incluso verás un error si intentas indexar una propiedad que no existe:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYME4BQAXATwAdJQAFGROAO1AF5QBvUAQwHNJUaBXAWwBGMANygarPl1CJ80AJY12o1gBs5ANykC4cFZFZ0AvsNwhQAWksBjHvkvmCJMgEkAjAwpVaAbQBEqzV8AXWEgA)

```ts
type I1 = Person["alve"];
```

{{< content-ads/middle-banner-2 >}}

```text {filename="Error generado"}
Property 'alve' does not exist on type 'Person'.
```

Otro ejemplo de indexación con un tipo arbitrario es usar `number` para obtener el tipo de elementos de una array.
Podemos combinar esto con `typeof` para capturar convenientemente el tipo de elemento de un literal de array:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYewdgzgLgBAsgTwIICcUEMEwLwwNoBQMMA3jGOgLYCmAXDAERIA2AlsNQwDQzoDmdGAEYArDAC+XIqXJVBDAEIgARt14D6AJgDMEqcTIUa9BgFEAbpx79B2gBx6CAXQDcBAlAQAHajAAK1CgQ4Dgwnj4gAGbwyGiYeGAArpTKga4EAPQZxDAAegD8Ht6+SAKh4dRRMagYCAnJqShOeAw2DOlZOQWZ2QDyKEU+MKXUmqEBQeAtbR3ZxAVAA)

```ts
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
 
type Person = typeof MyArray[number];
       
type Person = {
    name: string;
    age: number;
}
type Age = typeof MyArray[number]["age"];
     
type Age = number
// Or
type Age2 = Person["age"];
      
type Age2 = number
```

{{< content-ads/middle-banner-3 >}}

Solo puedes usar tipos al indexar, lo que significa que no puedes usar `const` para hacer una referencia a una variable:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYDMAOdB2AFgE4AoAFwE8AHSUABRkTgDtQBeUAb1AEMBzSKhYBXALYAjGAG5QLXmKGhE5aAEsW-WbwA2agG5KJcODsi82AX2mkQoALSOAxiPKP7pJ6xWgA1pEoOUAAiAUhgmypaUABBQSDGJFYAbX9KAF1pIA)

```ts
const key = "age";
type Age = Person[key];
```

```text {filename="Error generado"}
Type 'key' cannot be used as an index type.'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?
```

{{< content-ads/middle-banner-4 >}}

Sin embargo, puedes usar un alias de tipo para un estilo similar de refactorización:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAChBOBnA9gOygXigbygQwHMIAuKVAVwFsAjBAbjL0pKkWHgEtUCG8AbDgDcW1ZMj4Q86AL50AUAHoFUALRqAxuWBqVc0JCgBrCCExQARIQjn5+6AEEiZuEjQBtYyAC6dIA)

```ts
type key = "age";
type Age = Person[key];
```

{{< content-ads/bottom-banner >}}
