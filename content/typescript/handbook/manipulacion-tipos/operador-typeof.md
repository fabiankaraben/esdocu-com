---
linkTitle: "El operador typeof"
title: "El operador de tipo typeof - TypeScript en Español"
description: "Usando el operador typeof en contextos de tipo."
weight: 4
type: docs
noindex: true
draft: true
---

# El operador de tipo `typeof`

{{< content-ads/top-banner >}}

## El operador de tipo `typeof` {#the-typeof-type-operator}

JavaScript ya tiene un operador `typeof` que puedes usar en un contexto de *expresión*:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAUCcEsDsBcDOoBEj41gcxQKAMYD2sihANgKYB0ZhWAFPAJ4AOFhAZqgBIVm2gA7oUhkAJigCUAbiA)

```ts
// Imprime "string"
console.log(typeof "Hello world");
```

{{< content-ads/middle-banner-1 >}}

TypeScript agrega un operador `typeof` que puedes usar en un contexto *type* para referirte al *type* de una variable o propiedad:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/DYUwLgBAzhC8ECIAWJjAPYINwChSQDsAuCMATwAcR0AzaXAegYggD0B+IA)

```ts
let s = "hello";
let n: typeof s;
   
let n: string
```

Esto no es muy útil para tipos básicos, pero combinado con otros operadores de tipo, puedes usar `typeof` para expresar convenientemente muchos patrones.
Por ejemplo, comencemos mirando el tipo predefinido `ReturnType<T>`.
Toma un *tipo de función* y produce su tipo de retorno:

{{< content-ads/middle-banner-2 >}}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBACgThAJgSwMYENjQLxQBQAeAXFAK4B2A1uQPYDu5AlFNgHxQBGNNANhOuQDcAKFCQoAaRZQAShGCk45ACrgIAHnhI0mCKxEB6A1BMA9APxA)

```ts
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
    
type K = boolean
```

Si intentamos usar `ReturnType` en el nombre de una función, vemos un error instructivo:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwHYAsBOAUAGYCuAdgMYAuAlnCaAQBQCUoA3nqKNJBUdHa1AAPVAEYADABpQAT1QBmUAF8A3HiV4KMgA6RQABVABeUACUefEgBUdkADwEAfCqA)

{{< content-ads/middle-banner-3 >}}

```ts
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<f>;
```

```text {filename="Error generado"}
'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?
```

Recuerda que *valores* y *tipos* no son lo mismo.
Para referirnos al *tipo* que tiene el *valor `f`* usamos `typeof`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABMAFASkQbwFCMQJwFMoR8lNEAPALkQEYAGAGkQE9aBmRAXwG5tu2KKwAOhRAAVEAXkQAlYqTAAVUYQA8wsXGDIAfPwD0hvIgB6AfiA)

{{< content-ads/middle-banner-4 >}}

```ts
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
    
type P = {
    x: number;
    y: number;
}
```

### Limitaciones {#limitations}

TypeScript limita intencionalmente los tipos de expresiones en las que puedes usar `typeof`.

Específicamente, solo es legal usar `typeof` en identificadores (es decir, nombres de variables) o sus propiedades.
Esto ayuda a evitar la trampa confusa de escribir código que crees que se está ejecutando, pero no lo está:

{{< content-ads/middle-banner-5 >}}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygIwAYMFYBQATSAYwBsBDaSUIuAO0QBdQBbRAcwCM4APVACgAO8ZgIapG0AJa02ASlABeAHygucEpDK0A3LhCgGATwFVWnHotBbDu-QFoHRAK4MHdvWACym2kwZxQJ0QqBVAAJUgGJ2haABVjSAAeIxM4ADMWdi5uJVwNJkQACzgnEnwAYToGaSdIVBTIdMzzbj4AIgBBSlBDEtBEaKpep1AAdy0-AJpfGsgAfjbZbSA)

```ts
// Diseñado para usar = ReturnType<typeof msgbox>
let shouldContinue: typeof msgbox("Are you sure you want to continue?");
```

```text {filename="Error generado"}
',' expected.
```

{{< content-ads/bottom-banner >}}
