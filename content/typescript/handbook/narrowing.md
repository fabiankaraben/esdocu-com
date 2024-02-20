---
linkTitle: "Estrechamiento de tipos"
title: "Estrechamiento de tipos (narrowing) - TypeScript en Español"
description: "Comprende cómo TypeScript utiliza el conocimiento de JavaScript para estrechar la cantidad de sintaxis de tipos en tus proyectos."
weight: 4
type: docs
---

# Estrechamiento o Narrowing en TypeScript

Imagina que tenemos una función llamada `padLeft`.

{{< content-ads/top-banner >}}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABABwIYBMAyBTYUAUa66MYA5gFyJggC2ARtgE6IA+iAzlE6WQDSJSyEFCpce5AJRjuvRAG8AUIkRQAFkzgB3ath0BRJpqb4ARADk4UQbWQAbbLWxgo2dIgCe2KAEJTkgG5FAF8gA)

```ts
function padLeft(padding: number | string, input: string): string {
  throw new Error("Not implemented yet!");
}
```

Si `padding` es un `number`, lo tratará como la cantidad de espacios que queremos anteponer a `input`.
Si `padding` es un `string`, simplemente debe anteponer `padding` a `input`.
Intentemos implementar la lógica para cuando a `padLeft` se le pasa un `number` para `padding`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUAGYCuAdgMYAuAlnCaAA4CGAJgDKQEUAUTzzVJAOaoSRALYAjGKAA+oRBWgDBAGlAD6RCqgVKhASh2LloAN55QoaJApFodAESgHAOmv1Ijbr34HQAanUSTQoAbjwAXyA)

```ts
function padLeft(padding: number | string, input: string): string {
  return " ".repeat(padding) + input;
}
```

```text {filename="Error generado"}
Argument of type 'string | number' is not assignable to parameter of type 'number'.
  Type 'string' is not assignable to type 'number'.
```

Oh, oh, recibimos un error en `padding`.
TypeScript nos advierte que estamos pasando un valor con tipo `number | string` a la función `repeat`, que solo acepta un `number`, y es correcto.
En otras palabras, no hemos verificado explícitamente si `padding` es un `number` primero, ni estamos manejando el caso en el que es un `string`, así que hagamos exactamente eso.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABABwIYBMAyBTYUAUa66MYA5gFyJggC2ARtgE6IA+iAzlE6WQDSJSyEFCpce5AJRjuvRAG8AUIkHBE+KAE9k2OGqIlyiALynEAIhoNm5yQuUrETbFBBMk5iwDpnO1AQNeOwBqQTBhKABuBwBfB2dXdxQMQzJEUKERaJigA)

```ts
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

Si esto parece principalmente un código JavaScript poco interesante, ese es el punto.
Aparte de las anotaciones que implementamos, este código TypeScript se parece a JavaScript.
La idea es que el sistema de tipos de TypeScript tiene como objetivo hacer que sea lo más fácil posible escribir código JavaScript típico sin hacer todo lo posible para obtener seguridad de tipos.

Si bien puede que no parezca mucho, en realidad están sucediendo muchas cosas bajo las sábanas aquí.
Al igual que TypeScript analiza los valores en tiempo de ejecución utilizando tipos estáticos, superpone el análisis de tipos en las construcciones de flujo de control de tiempo de ejecución de JavaScript como `if/else`, ternarios condicionales, bucles, comprobaciones de veracidad, etc., que pueden afectar esos tipos.

Dentro de nuestra verificación `if`, TypeScript ve `typeof padding === "number"` y lo entiende como una forma especial de código llamada *type guard*.
TypeScript sigue posibles rutas de ejecución que nuestros programas pueden tomar para analizar el tipo de valor más específico posible en una posición determinada.
Examina estas comprobaciones especiales (llamadas *protecciones de tipo* o *type guards*) y asignaciones, y el proceso de refinar tipos a tipos más específicos de los declarados se llama *estrechamiento* (o *narrowing*).
En muchos editores podemos observar estos tipos a medida que cambian, e incluso lo haremos en nuestros ejemplos.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABABwIYBMAyBTYUAUa66MYA5gFyJggC2ARtgE6IA+iAzlE6WQDSJSyEFCpce5AJRjuvRAG8AUIkHBE+KAE9k2OGqIlyiALynEAIhoNm5yQuUrETbFBBMk5iwDpnO1AQNeOwBqQTBhKABuBxUAeljHRKTEgD0AfgcAXwdnV3cUDEMyRFChEWi4hNSMzKA)

```ts
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
                        
(parameter) padding: number
  }
  return padding + input;
           
(parameter) padding: string
}
```

Hay un par de construcciones diferentes que TypeScript entiende para estrechar.

## El operador type guard `typeof` {#typeof-type-guards}

Como hemos visto, JavaScript admite un operador `typeof` que puede brindar información muy básica sobre el tipo de valores que tenemos en tiempo de ejecución.
TypeScript espera que esto devuelva un determinado conjunto de cadenas:

- `"string"`
- `"number"`
- `"bigint"`
- `"boolean"`
- `"symbol"`
- `"undefined"`
- `"object"`
- `"function"`

Como vimos con `padLeft`, este operador aparece con bastante frecuencia en varias bibliotecas de JavaScript, y TypeScript puede entenderlo para estrechar tipos en diferentes ramas.

En TypeScript, comparar el valor devuelto por `typeof` es una protección de tipo (type guard).
Debido a que TypeScript codifica cómo opera `typeof` en diferentes valores, conoce algunas de sus peculiaridades en JavaScript.
Por ejemplo, observa que en la lista anterior, `typeof` no devuelve la cadena `null`.
Mira el siguiente ejemplo:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYDMBGUOAOABgBYB2AKADMBXAOwGMAXASzjtAAdoW6mBBADaCAFIiZJU4nnQDmoAD6hpvWQG0AuotB0awgJSgA3hVCgWVUCKYBPTpDiXpiUAF53oAERwARgCtIZk9DEzMzKgQrBnZxZVBHZQlEENMws2i6RDhBSAA6QThZMX0AblSzAF9UitBIQURIc0trOwcnJLcPTxU5YONy0AysnPzCsSTS6tr6xtCwkFAAEzgdOCYAC1VqigqgA)

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

```text {filename="Error generado"}
'strs' is possibly 'null'.
```

En la función `printAll`, intentamos verificar si `strs` es un objeto para ver si es un tipo de array (ahora podría ser un buen momento para reforzar que los arrays son tipos de objetos en JavaScript).
¡Pero resulta que en JavaScript, `typeof null` es en realidad `"object"`!
Este es uno de esos desafortunados accidentes de la historia.

Puede que los usuarios con suficiente experiencia no se sorprendan, pero no todos se han topado con esto en JavaScript; afortunadamente, TypeScript nos permite saber que `strs` solo se estrechó a `string[] | null` en lugar de simplemente `string[]`.

Esto podría ser una buena transición hacia lo que llamaremos verificación de "veracidad" (truthiness).

# Estrechamiento de veracidad {#truthiness-narrowing}

Puede que Truthiness (veracidad) no sea una palabra que encuentres en el diccionario, pero es algo de lo que escucharás en JavaScript.

En JavaScript, podemos usar cualquier expresión en condicionales, `&&`, `||`, declaraciones `if`, negaciones booleanas (`!`) y más.
Por ejemplo, las declaraciones `if` no esperan que su condición siempre tenga el tipo `boolean`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAcwKZQKoGdUCcsDyYANjGKgLKpZYCGaAFGCALbZ6ElmoBcizLAEZ4AlIgDeAKESIYwRE1bt8RUuTFSZM3OhC4kAAwAqACzypEtHYgAk4gcs5rUAX0QJn-OAHcAhAYBuaUQXYJ0oPSQAIgA5OEE4ABMATwByLEQzHQA6RB4GKKCXIA)

```ts
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}
```

En JavaScript, las construcciones como `if` primero "coaccionan" sus condiciones a `boolean` para darles sentido, y luego eligen sus ramas dependiendo de si el resultado es `true` o `false`.
Valores como

- `0`
-`NaN`
- `""` (la cadena vacía)
- `0n` (la versión `bigint` de cero)
- `null`
- `undefined`

todos se coaccionan a `false` y otros valores se coaccionan a `true`.
Siempre puedes forzar valores a `boolean`s ejecutándolos a través de la función `Boolean` o usando la negación doble booleana más corta. (Este último tiene la ventaja de que TypeScript infiere un tipo booleano literal estrecho `true`, mientras que infiere el primero como de tipo `boolean`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAECMHsBcAtUgM1HApgZ1aAThgrgDbSgCWAdqAOTTZ6qUBQAQpJAagIZkAUARLKgIFIvAJQBuUCBQBPAA6oAXBFbsuAGlAA3DgTrKadBgEJjvAO6RsBACa9J06PKUpaqTaE869Lw6iA)

```ts
// ambos resultados serán 'true'
Boolean("hello"); // type: boolean, value: true
!!"world"; // type: true,    value: true
```

Es bastante popular aprovechar este comportamiento, especialmente para protegerte contra valores como `null` o `undefined`.
Como ejemplo, intentemos usarlo para nuestra función `printAll`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABABwE4zFAggGxwCgGcpVCAuRY9MAc0QB9KSMaBtAXQcTBDwEpEAbwBQiRDGCIiJQogBkcxFACeyAKZxJVWQF49iAERwARgCs10AwJFixwOKikQExSok1NS10bbHOwhHA4agB0OHA0RHwA3D5iAL4+8YhqOIRq4pL4Kuoe2oh6OoZULFZCcYj+gcFhEdJesQnC8UA)

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

Notarás que nos hemos deshecho del error anterior al verificar si `strs` es verdadero.
Esto al menos nos evita errores temidos cuando ejecutamos nuestro código como:

```txt
TypeError: null is not iterable
```

Ten en cuenta que la verificación de la veracidad de las primitivas a menudo puede ser propensa a errores.
Como ejemplo, considera un intento diferente de escribir `printAll`

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABABwE4zFAggGxwCgGcpVCAuRY9MAc0QB9KSMaBtAXQcTBDwEpEAbwBQiRAHpxiAISy58hdNESpiACIB5AHIByACrqNiPQAkAkgGUlYyWMQBpAKKOACogBKjrGrNaA4sq2isFyyjDAiEQkhAIidojhkVAAnsgApnARVISIALz5iABEcABGAFZp0IWxyvHAcKiREAjElIiZTKQ18fHNYIRwOGkAdDhwNER8ANy1dgC+s3OIaTiEaQkR+CnpHdl5BYVULNVCs2J9A0Oj41FdM-ELYgtzQA)

```ts
function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  NO HAGAS ESTO!
  //  SIGUE LEYENDO
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

Envolvimos todo el cuerpo de la función en una verificación veraz, pero esto tiene una desventaja sutil: es posible que ya no estemos manejando correctamente la cadena vacía.

TypeScript no nos hace ningún daño aquí, pero vale la pena señalar este comportamiento si estás menos familiarizado con JavaScript.
TypeScript a menudo puede ayudarle a detectar errores desde el principio, pero si eliges no hacer *nada* con un valor, hay mucho que puedes hacer sin ser demasiado prescriptivo.
Si lo deseas, puedes asegurarte de manejar situaciones como estas con un linter.

{{< content-ads/middle-banner-1 >}}

Una última palabra sobre el estrechamiento por veracidad es que las negaciones booleanas con `!` se filtran de las ramas negadas.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAWxAG1gBzQTwIJpoAUAUIogG4CGaIApgM4BciYIyARnQE4DaAuogA+icABM6wGGDpiANGUTAq0ONxZtOPEgEoN7Ln0Ejxk6bMQBvRTGCIiAQmq1GOq4vLc6UENyTP6BgBuRQBfRDo0Bjp3ck9vX38aQIA6ZCpMIiIADzcAXgA+RGzEAColFSg1HRDyUJJQoA)

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

## Estrechamiento por igualdad {#equality-narrowing}

TypeScript también usa declaraciones `switch` y operadores de igualdad como `===`, `!==`, `==` y `!=` para estrechar los tipos.
Por ejemplo:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAUwB4EMC2AHANsgClQC5EBnKAJxjAHNEAfRMETAI2UoBpEBPUitTqNEbOHHzowASkQBvAFCJEMYIiKIAvNr6zFy5QHpDiAOrJEEKczgB3S+ly5EU3ogDkgmrXeJMyKAALOAATRAQPVF84Sg9edwA6JQNUBKg4AFVsbE4AYXQyQmkAbmSjEwA9AH4yvjS4ABk7PIKi0oNEY0Rq5IBfFFxC+VqIBDIJZATcOFoiEtqujqWejtGwcfwpmYJeeY7FpYMVxF6FXqA)

```ts
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // Ahora podemos llamar a cualquier método de 'string' en 'x' o 'y'.
    x.toUpperCase();          
       // (method) String.toUpperCase(): string
    y.toLowerCase();          
       // (method) String.toLowerCase(): string
  } else {
    console.log(x);     
       // (parameter) x: string | number
    console.log(y);     
       // (parameter) y: string | boolean
  }
}
```

Cuando verificamos que `x` e `y` son iguales en el ejemplo anterior, TypeScript supo que sus tipos también tenían que ser iguales.
Dado que `string` es el único tipo común que tanto `x` como `y` pueden adoptar, TypeScript sabe que `x` e `y` deben ser un `string` en la primera rama.

Comparar valores literales específicos (a diferencia de variables) también funciona.
En nuestra sección sobre el estrechamiento por veracidad, escribimos una función `printAll` que era propensa a errores porque accidentalmente no manejaba correctamente las cadenas vacías.
En su lugar, podríamos haber realizado una verificación específica para bloquear los `null`s, y TypeScript aún elimina correctamente los `null`s del tipo de `strs`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABABwE4zFAggGxwCgGcpVCAuRY9MAc0QB9KSMaBtAXQcTBDwEpEAbwBQiRDGCIiJQogCEAXgXdeOASLFiJUqAE9kAUziSqspcoBEcAEYArA9AvrRmscDiopEBMUqJjTKTOrq4A9KEhkYgAegD8LpHeYIRwOAYAdDhwNER8ANwJmgC+hUWIBjiEBuKS+HqGAaaI5ogWVCxOQoViSSlpmdnSQQWR4VGacaUuJUVAA)

```ts
function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {                       
        // (parameter) strs: string[]
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);                   
        // (parameter) strs: string
    }
  }
}
```

Las comprobaciones de igualdad más flexibles de JavaScript con `==` y `!=` también se estrechan correctamente.
Si no estás familiarizado, verificar si algo `== null` en realidad no solo verifica si es específicamente el valor `null`, sino que también verifica si es potencialmente `undefined`.
Lo mismo se aplica a `== undefined`: verifica si un valor es `null` o `undefined`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMIHtx1NZBvAKGWQDc4AbAVwgC5kRKBbAI1wB97LzzkPKQAJhBg4BAbgIBfAgRj8EYYJmSMuigA7kAngDUK1ABQJMYbCGh0MWHFAA0yeAvRQ6DFtACU+IsgD0v5AAlCEZ0EhRmdDAAC2QAcgZuOOQ4QXj+IRFzAWSYKHRGZBiUMC11CAA6H2AYZCMTM2gKsioUAEIAXk5uL0JiYmMQAGd0ckrydABzeutzKGb9CA8Jfr8A1Y3N1YA9AH4ZVf9kADl0AHdkM5QEVOQhuBgIbRU1YE0teMHTGwXWuKrVl9GvMWtRkAAqLqOMDOFbIaSSIA)

```ts
interface Container {
  value: number | null | undefined;
}
 
function multiplyValue(container: Container, factor: number) {
  // Elimina tanto 'null' como 'undefined' del tipo.
  if (container.value != null) {
    console.log(container.value);                           
      // (property) Container.value: number
 
    // Ahora podemos multiplicar 'container.value' de forma segura.
    container.value *= factor;
  }
}
```

## El operador de estrechamiento `in` {#the-in-operator-narrowing}

JavaScript tiene un operador para determinar si un objeto o su cadena prototipo tiene una propiedad con un nombre: el operador `in`.
TypeScript tiene esto en cuenta como una forma de estrechar los tipos potenciales.

Por ejemplo, con el código: `"value" in x`, donde `"value"` es una cadena literal y `x` es un tipo de unión.
La rama `true` estrecha los tipos de `x` que tienen una propiedad `value` opcional o requerida, y la rama `false` se estrecha a los tipos que tienen una propiedad `valor` opcional o faltante.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAYglgZwBZQLxQN5QQdzgWwC4oAKASjQD4oA3AezgBMoBfAbgChRIoAhOAE7N0WAGYAbEMXJVaDZuw4dRAVwB2AY2Bw6aqPjo0IJAIZqCJ8cXjIoAHz6DGFDByhQ4o0gCJcBbx56ZhbiLm7uUAIQwCoCQeb4lgB0fvjknO4sSu5RMXFQwYniSRIg6RwsQA)

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

Para reiterar, existirán propiedades opcionales en ambos lados para estrecharlas. Por ejemplo, un humano podría nadar y volar (con el equipo adecuado) y, por lo tanto, debería aparecer en ambos lados del chequeo "in":

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAYglgZwBZQLxQN5QQdzgWwC4oAKASjQD4oA3AezgBMoBfAbgChRIoAhOAE7N0WAGYAbEMXJVaDZuy7hoACQCu+AIYA7NJmx58AfmkVU1ekzZQJIE6TMX5rTh1FrtAY2Bw6u-HQ0ECQ6BJrixPDIUAA+fILMcepa2hQYHFBQcKKkAES4BLlZuqFa4mkZmVCl4ZwA9HWZAHpGlSxQEOII0OlV1dph4vWNUC1tHCxAA)

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;      
      // (parameter) animal: Fish | Human
  } else {
    animal;      
      // (parameter) animal: Bird | Human
  }
}
```

## El operador de estrechamiento `instanceof` {#instanceof-narrowing}

JavaScript tiene un operador para verificar si un valor es o no una "instancia" de otro valor.
Más específicamente, en JavaScript, `x instanceof Foo` comprueba si la *cadena de prototipos* de `x` contiene `Foo.prototype`.
Si bien no profundizaremos aquí y verás más de esto cuando entremos en las clases, aún pueden ser útiles para la mayoría de los valores que se pueden construir con `new`.
Como habrás adivinado, `instanceof` también es una protección de tipos, y TypeScript se estrecha en las ramas protegidas por `instanceof`s.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAGzgcwGoENkgKYAUAHgFyIAiWUeiAPogM5QBOMYaAlIgN4BQiiGMETFBYJlkh44wytS58BAiAgZxkeAHSo0xTVDgBVACoBhAMos2ujhwDc-JQHonSt0oB6AfkcBfRHjIDDSKSiri6lo6egaGAA5xeMymWMEEtg5uLu7u3n68vkA)

```ts
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());               
     // (parameter) x: Date
  } else {
    console.log(x.toUpperCase());               
     // (parameter) x: string
  }
}
```

## Asignaciones {#assignments}

Como mencionamos anteriormente, cuando asignamos cualquier variable, TypeScript mira el lado derecho de la asignación y estrecha el lado izquierdo de manera apropiada.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/DYUwLgBAHhC8EFkCGYAWA6ATkgdgEwHsBbACgEoIAeCABnQFYIB+CARhogC4IAiVEYMAIQA7gUzA8AQh4BuAFAB6RRAgA9JvJjxWC+QGMCOAM4FQ6IQHMSUMguWrHT9Zu29LBAngBGATxAyeoYmZiAWBNa29irOThpAA)

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

Fíjate que cada una de estas asignaciones es válida.
Aunque el tipo observado de `x` cambió a `number` después de nuestra primera asignación, todavía pudimos asignar un `string` a `x`.
Esto se debe a que el *tipo declarado* de `x` (el tipo con el que comenzó `x`) es `string | number`, y la asignabilidad siempre se compara con el tipo declarado.

Si hubiéramos asignado un `boolean` a `x`, habríamos visto un error ya que no era parte del tipo declarado.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGY1oFABtIAXUAD1AF5QBZAQ0IAsA6aGgOwBM4BbACgEpQAHlAAGRgFZQAflABGEaFQAiepDx44oAO4I87AIRKA3DhChQAPSk4ylWSZwBjOK0RwCjDQHMeJPibNzIOCrGwpQQmgAV0gHZ1d3SE84Hz8AsGDMqyA)

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

```text {filename="Error generado"}
Type 'boolean' is not assignable to type 'string | number'.
```

## Análisis de control de flujo {#control-flow-analysis}

Hasta este punto, hemos repasado algunos ejemplos básicos de cómo TypeScript se estrecha a ramas específicas.
Pero está sucediendo algo más que simplemente salir de cada variable y buscar protecciones de tipo en `if`s, ` while`s, condicionales, etc.
Por ejemplo

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABABwIYBMAyBTYUAUa66MYA5gFyJggC2ARtgE6IA+iAzlE6WQDSJSyEFCpce5AJSIA3gChEg4InxQAnsmxxlREuUQBeI4gBENBsxPT5ixU2xQQTJCdMA6e5tQFdvaQGpBMGEoAG4FRABfCPtHZxQMPTJEQKERcMigA)

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

`padLeft` retorna desde su primer bloque `if`.
TypeScript pudo analizar este código y ver que el resto del cuerpo (`return padding + input;`) es *inalcanzable* en el caso de que `padding` sea un `number`.
Como resultado, pudo eliminar `number` del tipo de `padding` (estrechándose de `string | number` a `string`) para el resto de la función.

Este análisis de código basado en la accesibilidad se llama *análisis de control de flujo*, y TypeScript usa este análisis de flujo para estrechar los tipos a medida que encuentra asignaciones y protecciones de tipos.
Cuando se analiza una variable, el control de flujo puede dividirse y volver a fusionarse una y otra vez, y se puede observar que esa variable tiene un tipo diferente en cada punto.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAUwB4EMC2AHANsgCgEpEBvAKEUXykVQC5EBnKAJxjAHNEAfRMEJgBGyVr0RC4cfOjABucpTqIAvIgCy6KAAsAdK1kATOJmKIAPIgAMugKwKlEBE2nJduOJwKoiCqgHp-KmCQxAA9AH5FKhhgRAJNHX0jEzNLG1sSChDUVUQAIm1kXA98v2CnMBd8d09vXyUAoNCQyKUAXxRcJmQyRuU1AEYrK3KqSuq3Dy8fMcRAltaoqnboxFZkKBBWJFRyhaXydqA)

```ts
function example() {
  let x: string | number | boolean;
 
  x = Math.random() < 0.5;
 
  console.log(x);
       // let x: boolean
 
  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);
       // let x: string
  } else {
    x = 100;
    console.log(x);
       // let x: number
  }
 
  return x;
        
       // let x: string | number
}
```

## Usando predicados de tipo {#using-type-predicates}

Hemos trabajado con construcciones de JavaScript existentes para manejar el estrechamiento hasta ahora, sin embargo, a veces desearás un control más directo sobre cómo cambian los tipos a lo largo de tu código.

Para definir una protección de tipo definida por el usuario, simplemente necesitamos definir una función cuyo tipo de retorno sea un *predicado de tipo*:

{{< content-ads/middle-banner-2 >}}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAYglgZwBZQLxQN5QQdzgWwC4oAKASjQD4oA3AezgBMoBfAbgChRIoAhOAE7N0WAGYAbEMXJVaDZuw6MIAY3EBDAdFEBXAHYrgcOnqgBzCMADK+dePEAFS+WLxkUAD59BjTgHo-KABaEJUdYBCgjl0DIxMoRDckEkhgV0QUL34hMmJUhIRYDMwOKCgtYB0BUxTLKHVCpLIAOlwCKABCVHR9ZVE4PQhfDhYgA)

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

`pet is Fish` es nuestro predicado de tipo en este ejemplo.
Un predicado toma la forma `parameterName is Type`, donde `parameterName` debe ser el nombre de un parámetro de la firma de la función actual.

Cada vez que se llama a `isFish` con alguna variable, TypeScript *estrechará* esa variable a ese tipo específico si el tipo original es compatible.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAYglgZwBZQLxQN5QQdzgWwC4oAKASjQD4oA3AezgBMoBfAbgChRIoAhOAE7N0WAGYAbEMXJVaDZuw6MIAY3EBDAdFEBXAHYrgcOnqgBzCMADK+dePEAFS+WLxkUAD59BjTroNGJlCIbkgkkMCuiChe-EJkxBHBCLDRmBxQUFrAOgKm4ZZQ6imhZAB0uARQAISo6PrKonB6EL4cLBwA9J1QALT9KjrA-b1dPbx0wCgqduIpwHRQAOSV+EtFesxLEiDrmtB6dDhQdADW6iBlHOKFSegW1rb2TsDknBxwoqQh0QXAZBQMBkoBEKnh8G92lAIHNoEDMqCdpCWEA)

```ts
// Ambas llamadas a 'swim' y 'fly' están ahora okay.
let pet = getSmallPet();
 
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```

Observa que TypeScript no solo sabe que `pet` es un `Fish` en la rama `if`;
también sabe que en la rama `else`, *no* tienes un `Fish`, por lo que debes tener un `Bird`.

Puedes usar el tipo de protección `isFish` para filtrar un array de `Fish | Bird` y obtener un array de `Fish`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAYglgZwBZQLxQN5QQdzgWwC4oAKASjQD4oA3AezgBMBuKAOwEN8JiFgAnOGwDmUAL7MAUKEhQAQnH6M0mKADMANiGLkqtBi3Zce2AUNETJjCAGMNHftDUBXNjeBw6bKMIjAAyvgcGhoACn7kxPDIUAA+8ooski5uHl5QiNFIJJDAUYgo8QpKZMS5GQiwBZiSUFCOwM783jl+UByVWWQAdLgEUACEqOiu1mpCEElikgD0M1AAtEs2zsBLC5I2XnxQAF50dDpZcQklANoAuipnvgFBIeHA5AA0Pn6BwWERZK+3Hw-fC5SLZsHajCD8ADqHGAEIAjPlkJcVPs6N1xhpYfwSJkCmQpHMoHR+K8IABHZxwGjBCBsYBaTbbYBQcFQmEQgBMiKQyPQqPRcExEJxCC67U6BUuUlm8wAKkhoGBHIw4DZ2VAgiB2BBJvUIJAYeZ1MSNcToFt8GANBAAB5QW1cK0QBCM0HM1nQrEAZm5vL2BwFQuxrWApSg5UQVRiqGoGFqGTUpFy3U43DQwygACJkA4ANYQECZigNJreNTBBAQKR1EvNCpZEP4yRifFAA)

```ts
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// o equivalentemente
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
 
// Es posible que sea necesario repetir el predicado para ejemplos más complejos.
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
```

Además, las clases pueden [usar `this is Type` ↗](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-based-type-guards) para limitar su tipo.

## Funciones de aserción {#assertion-functions}

Los tipos también se pueden limitar usando [Funciones de aserción ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions).

# Uniones discriminadas {#discriminated-unions}

La mayoría de los ejemplos que hemos visto hasta ahora se han centrado en estrechar variables individuales con tipos simples como `string`, `boolean` y `number`.
Si bien esto es común, la mayor parte del tiempo en JavaScript trataremos con estructuras un poco más complejas.

Para motivarte, imaginemos que estamos tratando de codificar formas como círculos y cuadrados.
Los círculos realizan un seguimiento de sus radios y los cuadrados realizan un seguimiento de la longitud de sus lados.
Usaremos un campo llamado `kind` para indicar con qué forma estamos tratando.
Aquí hay un primer intento de definir `Shape`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8BQyyA1qACYBcyARAsFAgDYTXIA+NAzgI4CucUFgG5CyKHDLBenAPxUQvALYAjaCKKdgZCABkIIAOZh0c5ApVr8AXyA)

```ts
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}
```

Observa que estamos usando una unión de tipos literales de string: `"circle"` y `"square"` para decirnos si debemos tratar la forma como un círculo o un cuadrado respectivamente.
Usando `"circle" | "square"` en lugar de `string`, podemos evitar problemas de ortografía.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYBsB2AUAJYB2ALjAGYCGAxpKAMoAWlADnQN56igDWxAJqgBE1AtGoAbSENAAfUEMQBHAK6Vo0gNxdQ0SvwIrEAflREVAWwBGMbd0QF+kADKQiAcxKNToc9dt4AL54eCCgALSR1CokkeF45CpE1CQEcESgzET8UkyskAAUiMxsqHlsAJSgnNxhcHAsiACEOgTkoEUlkAB0fNmgALxDChopQlU13KBh3bM6wYFAA)

```ts
function handleShape(shape: Shape) {
  // oops!
  if (shape.kind === "rect") {
    // ...
  }
}
```

```text {filename="Error generado"}
This comparison appears to be unintentional because the types '"circle" | "square"' and '"rect"' have no overlap.
```

Podemos escribir una función `getArea` que aplique la lógica correcta según si se trata de un círculo o un cuadrado.
Primero intentaremos trabajar con círculos.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYDMbQEYAOABgBYCAoASwDsAXGAMwEMBjSUAZQAsmAHdgN7lQoANY0AJqgBELStBYAbSNNAAfUNMQBHAK5NoKgNzDQ0JhMq7EAflTVdAWwBGMEyMSUJkADKRqAOa0XHagDi5u5AC+5OQgoAC0SSy6tEkJ5Ay61Cy0lHDUoAGQtACChkwAFIg8-KjcfJAAlKBCIoa0utCFALJMwQB0AAoAkqAAVKA1jQPmltYTk2gmUUA)

```ts
function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2;
}
```

```text {filename="Error generado"}
'shape.radius' is possibly 'undefined'.
```

En [`strictNullChecks` ↗](https://www.typescriptlang.org/tsconfig#strictNullChecks) eso nos da un error, lo cual es apropiado ya que es posible que `radius` no esté definido.
Pero ¿qué pasa si realizamos las comprobaciones apropiadas en la propiedad `kind`?

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYDMbQEYAOABgBYCAoASwDsAXGAMwEMBjSUAZQAsmAHdgN7lQoANY0AJqgBELStBYAbSNNAAfUNMQBHAK5NoKgNzDQ0JhMq7EAflTVdAWwBGMEyMSUJkADKRqAOa0XHagDi5u5AC+5OQgoAC0SSy6tEkJ5Ay61Cy0lHDUoAGQtACChkwAFIg8-KjcfJAAlKBCIpQMoNW1kAB04tQSoAC8o5pyCsrSLW0iZiW60IUAskzBvQAKAJKgAFSgNY295pbWe-to7qAxUUA)

```ts
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}
```

```text {filename="Error generado"}
'shape.radius' is possibly 'undefined'.
```

Hmm, TypeScript todavía no sabe qué hacer aquí.
Hemos llegado a un punto en el que sabemos más sobre nuestros valores que el verificador de tipos.
Podríamos intentar utilizar una aserción de no null (un `!` después de `shape.radius`) para decir que `radius` definitivamente está presente.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMoAs4AcUG8BQyyA1qACYBcyARAsFAgDYTXIA+NAzgI4CucUFgG5CyKHDLBenAPxUQvALYAjaCKKdgZCABkIIAOZh0c5ApVr8AX3z4A9HeQBaFwl5gXT-DF4gEYYAB7EGQDCDAAQUE4AApOTBwqDGwIAEpkAiJgGGQ4hIgAOlIQMmQAXgqaOgZmanTMojFw3igQgFk4YwKABQBJZAAqZHiUgvFJaQBCQaGAJnVkGysgA)

```ts
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius! ** 2;
  }
}
```

Pero esto no parece ideal.
Tuvimos que gritarle un poco al verificador de tipos con esas aserciones no nulas (`!`) para convencerlo de que `shape.radius` estaba definido, pero esas aserciones son propensas a errores si comenzamos a mover el código.
Además, fuera de [`strictNullChecks` ↗](https://www.typescriptlang.org/tsconfig#strictNullChecks) podemos acceder accidentalmente a cualquiera de esos campos de todos modos (ya que se supone que las propiedades opcionales siempre están presentes al leerlos).
Definitivamente podemos hacerlo mejor.

El problema con esta codificación de `Shape` es que el verificador de tipos no tiene ninguna forma de saber si `radius` o `sideLength` están presentes según la propiedad `kind`.
Necesitamos comunicar lo que *nosotros* sabemos al verificador de tipos.
Con eso en mente, demos otro paso para definir `Shape`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMLCggNig3gKGWQGtQATALmQCIENsJqBuQ5KOM4AVwGcqQuAWwBG0FgF98+UJFiIUAZQCOXOFDytSISjR4q1jFkR7AyEADIQQAczAALfkNFQJUsAE8ADortxvyAF40ehxkAB9kZVV1JiA)

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

Aquí, hemos separado correctamente `Shape` en dos tipos con diferentes valores para la propiedad `kind`, pero `radius` y `sideLength` se declaran como propiedades requeridas en sus respectivos tipos.

Veamos qué sucede aquí cuando intentamos acceder al `radius` de una `Shape`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYME4BQBLAOwBcYAzAQwGNJQBhfaKgG1oG9dRQBrIgE1QAiKoxaRBAbk6hoFPvgCuKUIQUBbAEYwpAX1wES5arQDKARwUVo7ab0IDQgxBavipXRPj6QAMpEIA5sQAFqiqmtq4erjEAJ4ADqbBFImgALz0oqygAD6g5pbWUrggoAC0FVQKxBVluGQKhFTE+HCEoAGQxACC1hQAFIjJiagmw5AAlKAcXNbECtDtALIUIQB0AAoAkqAAVKBDKZBrsvJKe-toukA)

```ts
function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2;
}
```

```text {filename="Error generado"}
Property 'radius' does not exist on type 'Shape'.
  Property 'radius' does not exist on type 'Square'.
```

Al igual que con nuestra primera definición de `Shape`, esto sigue siendo un error.
Cuando `radius` era opcional, obtuvimos un error (con [`strictNullChecks` ↗](https://www.typescriptlang.org/tsconfig#strictNullChecks) habilitado) porque TypeScript no podía decir si la propiedad estaba presente.
Ahora que `Shape` es una unión, TypeScript nos dice que `shape` podría ser un `Square`, ¡y los `Square` no tienen un `radius` definido!
Ambas interpretaciones son correctas, pero solo la codificación de unión de `Shape` causará un error independientemente de cómo esté configurado [`strictNullChecks` ↗](https://www.typescriptlang.org/tsconfig#strictNullChecks).

¿Pero qué pasaría si intentáramos verificar la propiedad `kind` nuevamente?

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMLCggNig3gKGWQGtQATALmQCIENsJqBuQ5KOM4AVwGcqQuAWwBG0FgF98+UJFiIUAZQCOXOFDytSISjR4q1jFkR7AyEADIQQAczAALfkNFQJUsAE8ADortxvyAF40ehxkAB9kZVV1FnwAejjkAFoUhC4wFKT8GC4QBDBgAHsQZGsIMABBdTgACh5fbyoFBogASmQCImAYZDqWgDotMkCAoNoQxnbOojZyrigSgFk4e36ABQBJZAAqZHq-CH72Tl4d3YAmIxmEmdu7mYA9AH5WSXEgA)

```ts
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
          // (parameter) shape: Circle
  }
}
```

{{< content-ads/middle-banner-3 >}}

¡Eso eliminó el error!
Cuando cada tipo en una unión contiene una propiedad común con tipos literales, TypeScript considera que se trata de una *unión discriminada* y puede estrechar los miembros de la unión.

En este caso, `kind` era esa propiedad común (que es lo que se considera una propiedad *discriminante* de `Shape`).
Al comprobar si la propiedad `kind` era `"circle"`, se eliminaron todos los tipos en `Shape` que no tenían una propiedad `kind` con el tipo `"circle"`.
Eso redujo `shape` al tipo `Circle`.

La misma verificación también funciona con declaraciones `switch`.
Ahora podemos intentar escribir nuestro `getArea` completo sin ninguna molesta afirmación no nula `!`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMLCggNig3gKGWQGtQATALmQCIENsJqBuQ5KOM4AVwGcqQuAWwBG0FgF98+UJFiIUAZQCOXOFDytSISjR4q1jFkR7AyEADIQQAczAALfkNFQJUsAE8ADortxvyAF40ehxkAB9kZVV1FnwAejjkAFoUhC4wFKT8GC4QBDBgAHsQZGsIMABBdTgACh5fbyoFBogASmQCYwB3YDAEO2Q6loA6LTJ2zqJkBDgeFFoQxgpWKbZyrigSgFk4e2GABQBJZAAqZHq-CGH2Tl5Ts4AmIymE1bf3ogA9AH4V6dn5npoks-kR1GANiULt5hiYzJYbPZ7sgnn9Xu8fqxJOIgA)

```ts
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
              // (parameter) shape: Circle
    case "square":
      return shape.sideLength ** 2;
              // (parameter) shape: Square
  }
}
```

Lo importante aquí era la codificación de `Shape`.
Comunicar la información correcta a TypeScript (que `Circle` y `Square` eran en realidad dos tipos separados con campos `kind` específicos) era crucial.
Hacer eso nos permite escribir código TypeScript con seguridad de tipos que no se ve diferente al JavaScript que habríamos escrito de otra manera.
A partir de ahí, el sistema de tipos pudo hacer lo "correcto" y descubrir los tipos en cada rama de nuestra declaración `switch`.

> Aparte, intenta jugar con el ejemplo anterior y elimina algunas de las palabras clave de retorno.
> Verás que la verificación de tipos puede ayudar a evitar errores al pasar accidentalmente por diferentes cláusulas en una declaración `switch`.
>

Las uniones discriminadas sirven para algo más que hablar de círculos y cuadrados.
Son buenas para representar cualquier tipo de esquema de mensajería en JavaScript, como cuando se envían mensajes a través de la red (comunicación cliente/servidor) o codifican mutaciones en un framework de gestión de estado.

# El tipo `never` {#the-never-type}

Al estrechar, puedes reducir las opciones de una unión hasta un punto en el que hayas eliminado todas las posibilidades y no te quede nada.
En esos casos, TypeScript usará un tipo `never` para representar un estado que no debería existir.

# Comprobación de exhaustividad {#exhaustiveness-checking}

El tipo `never` se puede asignar a todos los tipos; sin embargo, ningún tipo se puede asignar a `never` (excepto el propio `never`). Esto significa que puedes utilizar el estrechamiento y confiar en que `never` aparezca para realizar una verificación exhaustiva en una declaración `switch`.

Por ejemplo, agregar un valor `default` a nuestra función `getArea` que intenta asignar `never` a `shape` no generará un error cuando se hayan manejado todos los casos posibles.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgMLCggNig3gKGWQGtQATALmQCIENsJqBuQ5KOM4AVwGcqQuAWwBG0FgF98+UJFiIUAZQCOXOFDytSISjR4q1jFkR7AyEADIQQAczAALfkNFQJ+APRvkAWh8IuYHy98MABPAAdFOzgI5ABeNHocZAAfZGVVdRZ8GC4QBDBgAHsQZGsIMABBdTgACh4oiKoFBogASmQCYwB3YDAEO2Q6loA6LTJ2zqJkBDgeFFpExgpWKbZyrigSgFk4e2GABQBJZAAqZHroiGH2Tl5Ts4AmIymZud19dWpl1aJ1MA2ShcIsMTGZLDZ7PdkE8VsgzPAuFgwN8fghijwwMgAPoQAAeUV4BQAbhBUHYIAhiPwICSoHFzi1nqs-gDsXiCRjgCSyRTiM9JOIgA)

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

Agregar un nuevo miembro a la unión `Shape` provocará un error de TypeScript:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGY1oFAEsA7AFxgDMBDAY0lAGE9pKAbGgbx1FAGtCATVAESUGzSAIDcHUNHK88AVxSgC8gLYAjGJIC+OfMTJUaAZQCO88tDZSeBfqAGJzlsZM6I8vSABlIBAOZEABaoKhpaOLogoAC0cZTyRHEx+iTQFNSgACrQeOQBLKDsnLb2AkS5+f4sElIeXr4BwaFqmtA6ekQAngAOJkHkfaAAvHQihQA+oGYWVqBTOXkFkJI4pPIElER4cASg-pBEAIJW5AAUiAN9qMZXkACURXUA7nhElEGgF3cAdKWPxU4oEo5EQNCE4zEyCkQOkh3k0D2AFlyMEfgAFACSoAAVKBLoNID8ZHJFLi8Wg3ECQWCHE5ZlCYUCrEQEXsCX0fvUfH5Ap8cRSqZwvBR5EwiNDYZxKLtEERQAB9SAADwGim2ADdILQgpBKFxQpAtdARvi7kLmfDEYqVWq5XgtTq9VwqbptEA)

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

```text {filename="Error generado"}
Type 'Triangle' is not assignable to type 'never'.
```

{{< content-ads/bottom-banner >}}
