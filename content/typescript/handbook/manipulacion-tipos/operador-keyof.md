---
linkTitle: "El operador keyof"
title: "El operador de tipo keyof - TypeScript en Español"
description: "Usa el operador keyof en contextos de tipo."
weight: 3
type: docs
---

# El operador de tipo keyof

{{< content-ads/top-banner >}}

## El operador de tipo `keyof` {#the-keyof-type-operator}

El operador `keyof` toma un tipo de objeto y produce una cadena o unión literal numérica de sus claves.
El siguiente tipo `P` es el mismo tipo que `type P = "x" | "y"`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBACg9gSwHbCgXigbygDwFxRICuAtgEYQBOA3FCAceVVAL7UBQoks6UA1hBBwAZrEQoOAeklRZAPQD8QA)

```ts
type Point = { x: number; y: number };
type P = keyof Point;
    
type P = keyof Point
```

Si el tipo tiene una firma de índice `string` o `number`, `keyof` devolverá esos tipos en su lugar:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAggTnAhiAlgZwBZQLxQN5QDaAdgFxTECuAtgEYRwC65lxA1sQPYDuxUAvgG4AUKEiwcUNhBCcAZrATJ0GEQHo1ULQD0A-MNHhoAWURgVkgoTbk0wOCmIBzZlFqdOAGwiI+Qw+LGktKyCqbmmOqaOrpAA)

```ts
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
    
type A = number
 
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
    
type M = string | number
```

Ten en cuenta que en este ejemplo, `M` es `string | number`: esto se debe a que las claves de objetos de JavaScript siempre se convierten en una cadena, por lo que `obj[0]` es siempre lo mismo que `obj["0"]`.

Los tipos `keyof` se vuelven especialmente útiles cuando se combinan con tipos mapeados, sobre los cuales aprenderemos más adelante.

{{< content-ads/bottom-banner >}}
