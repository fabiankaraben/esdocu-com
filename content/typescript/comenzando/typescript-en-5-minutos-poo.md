---
linkTitle: "Programadores Java/C#"
title: "TypeScript para programadores Java/C# - TypeScript en Español"
description: "Aprende TypeScript si tienes experiencia en lenguajes orientados a objetos."
weight: 3
type: docs
---

# TypeScript para programadores Java/C#

TypeScript es una opción popular para programadores acostumbrados a otros lenguajes con tipado estático, como C# y Java.

El sistema de tipos de TypeScript ofrece muchos de los mismos beneficios, como una mejor completado del código, detección más temprana de errores y una comunicación más clara entre las partes de tu programa.
Si bien TypeScript proporciona muchas características familiares para estos desarrolladores, vale la pena retroceder para ver en qué se diferencia JavaScript (y por lo tanto TypeScript) de los lenguajes OOP tradicionales.
Comprender estas diferencias te ayudará a escribir mejor código JavaScript y a evitar errores comunes en los que pueden caer los programadores que pasan directamente de C#/Java a TypeScript.

## Co-aprendizaje de JavaScript {#co-learning-javascript}

Si ya estás familiarizado con JavaScript pero eres principalmente un programador de Java o C#, esta página introductoria puede ayudarte a explicar algunos de los errores y confusiones comunes a los que podrías ser susceptible.
Algunas de las formas en que TypeScript modela tipos son bastante diferentes de Java o C#, y es importante tenerlas en cuenta al aprender TypeScript.

Si eres un programador de Java o C# que es nuevo en JavaScript en general, te recomendamos aprender un poco de JavaScript *sin* tipos primero para comprender los comportamientos de tiempo de ejecución de JavaScript.
Debido a que TypeScript no cambia la forma en que *se ejecuta* tu código, aún tendrás que aprender cómo funciona JavaScript para poder escribir código que realmente haga algo.

Es importante recordar que TypeScript usa el mismo *runtime (tiempo de ejecución)* que JavaScript, por lo que cualquier recurso sobre cómo lograr un comportamiento de tiempo de ejecución específico (convertir una cadena en un número, mostrar una alerta, escribir un archivo en disco, etc.) siempre se aplicará igualmente bien a los programas TypeScript.
¡No te limites a recursos específicos de TypeScript!

## Repensando la Clase {#rethinking-the-class}

C# y Java son lo que podríamos llamar lenguajes *POO obligatorios*.
En estos lenguajes, la *clase* es la unidad básica de organización del código y también el contenedor básico de todos los datos *y* el comportamiento en tiempo de ejecución.
Forzar que todas las funciones y datos se mantengan en clases puede ser un buen modelo de dominio para algunos problemas, pero no todos los dominios *necesitan* representarse de esta manera.

### Funciones y datos libres {#free-functions-and-data}

En JavaScript, las funciones pueden vivir en cualquier lugar y los datos se pueden transmitir libremente sin estar dentro de una `class` o `struct` predefinida.
Esta flexibilidad es extremadamente poderosa.
Las funciones "libres" (aquellas no asociadas con una clase) que trabajan con datos sin una jerarquía de programación orientada a objetos implícita tienden a ser el modelo preferido para escribir programas en JavaScript.

### Clases estáticas {#static-classes}

Además, ciertas construcciones de C# y Java, como singletons y clases estáticas, son innecesarias en TypeScript.

## POO en TypeScript {#oop-in-typescript}

Dicho esto, ¡aún puedes usar las clases si quieres!
Algunos problemas se adaptan bien a la solución de una jerarquía de programación orientada a objetos tradicional, y el soporte de TypeScript para clases de JavaScript hará que estos modelos sean aún más poderosos.
TypeScript admite muchos patrones comunes, como la implementación de interfaces, la herencia y los métodos estáticos.

Cubriremos las clases más adelante en esta guía.

## Repensando los tipos {#rethinking-types}

La comprensión de TypeScript sobre un *tipo* es en realidad bastante diferente de la de C# o Java.
Exploremos algunas diferencias.

### Sistemas de tipos reificados nominales {#nominal-reified-type-systems}

En C# o Java, cualquier valor u objeto dado tiene un tipo exacto: sea `null`, un primitivo o un tipo de clase conocido.
Podemos llamar a métodos como `value.GetType()` o `value.getClass()` para consultar el tipo exacto en tiempo de ejecución.
La definición de este tipo residirá en una clase en algún lugar con algún nombre, y no podemos usar dos clases con formas similares en lugar de otra a menos que exista una relación de herencia explícita o una interfaz implementada comúnmente.

Estos aspectos describen un sistema de tipo *reificado, nominal*.
Los tipos que escribimos en el código están presentes en tiempo de ejecución y los tipos están relacionados a través de sus declaraciones, no de sus estructuras.

### Tipos como Conjuntos {#types-as-sets}

En C# o Java, tiene sentido pensar en una correspondencia uno a uno entre los tipos de tiempo de ejecución y sus declaraciones en tiempo de compilación.

En TypeScript, es mejor pensar en un tipo como un *conjunto de valores* que comparten algo en común.
Debido a que los tipos son solo conjuntos, un valor particular puede pertenecer a *muchos* conjuntos al mismo tiempo.

Una vez que empiezas a pensar en los tipos como conjuntos, ciertas operaciones se vuelven muy naturales.
Por ejemplo, en C#, es complicado pasar un valor que sea *o* un `string` o un `int`, porque no hay un solo tipo que represente este tipo de valor.

En TypeScript, esto se vuelve muy natural una vez que te das cuenta de que cada tipo es solo un conjunto.
¿Cómo se describe un valor que pertenece al conjunto `string` o al conjunto `number`?
Simplemente pertenece a la *unión* de esos conjuntos: `string | number`.

TypeScript proporciona una serie de mecanismos para trabajar con tipos en una forma teórica de conjuntos, y los encontrarás más intuitivos si piensas en los tipos como conjuntos.

### Tipos estructurales borrados {#erased-structural-types}

En TypeScript, los objetos *no* son de un solo tipo exacto.
Por ejemplo, si construimos un objeto que satisface una interfaz, podemos usar ese objeto donde se espera esa interfaz aunque no haya una relación declarativa entre los dos.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgAoHtRgDbANYoDeAUMsgB4BcyIArgLYBG0A3KcgJ7V1OvEC+xLNHhJkAOTj0IAE2QkyIKRGoBnMFFABzNoOIxaIBGGDoQybOi0YsACgAOmcNRvhcBAJTz2CM6vTYEAB0llq2AETkyAC8yOHIANTIjlhBUUnhADScMXGJyU5gQRweusT6hsam5qGS0rZUEsoyXgrIviD+gSFWEQASENiW2fFJ5EFK0qUC5R3qyOiMAFa5bY0ADJnsXMib7JMqcQDymlqgWQJsxKGuYLaLS9O1yvfLpUA)

```ts
interface Pointlike {
  x: number;
  y: number;
}
interface Named {
  name: string;
}
 
function logPoint(point: Pointlike) {
  console.log("x = " + point.x + ", y = " + point.y);
}
 
function logName(x: Named) {
  console.log("Hello, " + x.name);
}
 
const obj = {
  x: 0,
  y: 0,
  name: "Origin",
};
 
logPoint(obj);
logName(obj);
```

El sistema de tipos de TypeScript es *estructural*, no nominal: podemos usar `obj` como `Pointlike` porque tiene propiedades `x` e `y` que son ambas números.
Las relaciones entre tipos están determinadas por las propiedades que contienen, no por si fueron declarados con alguna relación particular.

El sistema de tipos de TypeScript también *no está cosificado*: no hay nada en tiempo de ejecución que nos diga que `obj` es `Pointlike`.
De hecho, el tipo `Pointlike` no está presente *de ninguna forma* en tiempo de ejecución.

Volviendo a la idea de *tipos como conjuntos*, podemos pensar en `obj` como miembro tanto del conjunto de valores `Pointlike` como del conjunto de valores `Named`.

### Consecuencias de la tipificación estructural {#consequences-of-structural-typing}

Los programadores de programación orientada a objetos a menudo se sorprenden con dos aspectos particulares del tipado estructural.

#### Tipos vacíos {#empty-types}

La primera es que el *tipo vacío* parece desafiar las expectativas:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAECiC2AHALgT2gbwL4CgcDMBXAO2GQEsB7Y6fYgCjACcBzALjiTQEpMdpoAekHQAJpWgRK8AKbIAFuWIsA-Dlw5h0AHISZTJpSYAaaACNCyaAvIxbxAORWwNBwhSoH0NXXoZoANYcAIwADNBY3ADcQA)

```ts
class Empty {}
 
function fn(arg: Empty) {
  // ¿hacer algo?
}
 
// No hay error, pero ¿esto no es un 'Empty'?
fn({ k: 10 });
```

TypeScript determina si la llamada a `fn` aquí es válida al ver si el argumento proporcionado es un `Empty` válido.
Lo hace examinando la *estructura* de `{ k: 10 }` y `class Empty { }`.
Podemos ver que `{ k: 10 }` tiene *todas* las propiedades que tiene `Empty`, porque `Empty` no tiene propiedades.
Por lo tanto, ¡este es un llamado válido!

Esto puede parecer sorprendente, pero en última instancia es una relación muy similar a la que se aplica en los lenguajes de programación orientada a objetos nominales.
Una subclase no puede *eliminar* una propiedad de su clase base, porque hacerlo destruiría la relación de subtipo natural entre la clase derivada y su base.
Los sistemas de tipos estructurales simplemente identifican esta relación implícitamente describiendo los subtipos en términos de tener propiedades de tipos compatibles.

#### Tipos Idénticos {#identical-types}

Otra fuente frecuente de sorpresa viene con tipos idénticos:

```ts
class Car {
  drive() {
    // pisa el acelerador
  }
}
class Golfer {
  drive() {
    // patea la pelota lejos
  }
}

// ¿No hay error?
let w: Car = new Golfer();
```

Nuevamente, esto no es un error porque las *estructuras* de estas clases son las mismas.
Si bien esto puede parecer una fuente potencial de confusión, en la práctica no son comunes clases idénticas que no deberían estar relacionadas.

Aprenderemos más sobre cómo se relacionan las clases entre sí en el capítulo de Clases.

### Reflexión {#reflection}

Los programadores de programación orientada a objetos están acostumbrados a poder consultar el tipo de cualquier valor, incluso uno genérico:

```csharp
// C#
static void LogType<T>() {
    Console.WriteLine(typeof(T).Name);
}
```

Debido a que el sistema de tipos de TypeScript se borra por completo, la información sobre, por ejemplo la creación de instancias de un parámetro de tipo genérico no está disponible en tiempo de ejecución.

JavaScript tiene algunas primitivas limitadas como `typeof` e `instanceof`, pero recuerda que estos operadores todavía están trabajando en los valores tal como existen en el código de salida con los tipos borrados.
Por ejemplo, `typeof (new Car())` será `"object"`, no `Car` o `"Car"`.

## Próximos pasos {#next-steps}

Esta fue una breve descripción general de la sintaxis y las herramientas utilizadas en el TypeScript cotidiano. Desde aquí podrás:

- Lee el Manual completo [de principio a fin](/typescript/handbook/intro)
- Explora los [ejemplos de Playground ↗](https://www.typescriptlang.org/play#show-examples)
