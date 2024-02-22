---
linkTitle: "Tipos genéricos"
title: "Tipos genéricos - TypeScript en Español"
description: "Tipos que pueden funcionar con una variedad de tipos en lugar de uno solo."
weight: 2
type: docs
---

# Generics en TypeScript

Una parte importante de la ingeniería de software es crear componentes que no solo tengan API consistentes y bien definidas, sino que también sean reutilizables.
Los componentes que son capaces de trabajar con los datos de hoy y con los datos del mañana te brindarán las capacidades más flexibles para construir grandes sistemas de software.

{{< content-ads/top-banner >}}

En lenguajes como C# y Java, una de las principales herramientas en la caja de herramientas para crear componentes reutilizables son los *generics*, es decir, poder crear un componente que pueda funcionar en una variedad de tipos en lugar de uno solo.
Esto permite a los usuarios consumir estos componentes y utilizar sus propios tipos.

## Hola Mundo de los Generics {#hello-world-of-generics}

Para empezar, hagamos el "hola mundo" de los generics: la función de identidad.
La función de identidad es una función que devolverá todo lo que se le pase.
Puedes pensar en esto de manera similar al comando `echo`.

Sin generics, tendríamos que darle a la función de identidad un tipo específico:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABDAJgUzLKBPAFAQwCcBzALkTBAFsAjNQgSnMtvsQG8AoRRQtKEISRFiAbk4BfIA)

```ts
function identity(arg: number): number {
  return arg;
}
```

O podríamos describir la función de identidad usando el tipo `any`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABDAJgUzLKBPAFAQwCcBzALkXzGwEpzLtEBvAKEUULShEKSOIG5mAXyA)

```ts
function identity(arg: any): any {
  return arg;
}
```

Si bien el uso de `any` es ciertamente genérico porque hará que la función acepte todos y cada uno de los tipos para el tipo de `arg`, en realidad estamos perdiendo la información sobre cuál era ese tipo cuando la función retorna.
Si pasamos un número, la única información que tenemos es que se podría devolver cualquier tipo.

En lugar de eso, necesitamos una forma de capturar el tipo de argumento de tal manera que también podamos usarlo para indicar lo que se devuelve.
Aquí usaremos una *variable de tipo*, un tipo especial de variable que funciona con tipos en lugar de valores.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABDAJgUzLKBPAPAFWwAc0A+ACgEMAnAcwC5FCSBKR5tRAbwChFFqaKCGpIatANw8AvkA)

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
```

Ahora hemos agregado una variable de tipo `Type` a la función de identidad.
Este `Type` nos permite capturar el tipo que proporciona el usuario (por ejemplo, `number`), para que podamos usar esa información más adelante.
Aquí, usamos `Type` nuevamente como tipo de retorno. Tras la inspección, ahora podemos ver que se utiliza el mismo tipo para el argumento y el tipo de retorno.
Esto nos permite enviar ese tipo de información por un lado de la función y por el otro.

Decimos que esta versión de la función `identity` es genérica, ya que funciona con una variedad de tipos.
A diferencia del uso de `any`, también es tan preciso (es decir, no pierde ninguna información) como la primera función `identity` que usaba `number` para el argumento y el tipo de retorno.

{{< content-ads/middle-banner-1 >}}

Una vez que hayamos escrito la función de identidad genérica, podemos llamarla de dos maneras.
La primera forma es pasar todos los argumentos, incluido el argumento de tipo, a la función:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABDAJgUzLKBPAPAFWwAc0A+ACgEMAnAcwC5FCSBKR5tRAbwChFFqaKCGpIatANw8AvjwD0cxAFoVEEFBVKeAGyGI46ousQBeZOkwwcuAM5RqMMLQoAiALbYAyvce0XLKQV+YP4APQB+IA)

```ts
let output = identity<string>("myString");
      
let output: string
```

Aquí establecemos explícitamente `Type` como `string` como uno de los argumentos de la llamada a la función, usando `<>` alrededor de los argumentos en lugar de `()`.

La segunda forma también es quizás la más común. Aquí usamos *inferencia de argumento de tipo*, es decir, queremos que el compilador establezca el valor de `Type` automáticamente según el tipo de argumento que le pasamos:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABDAJgUzLKBPAPAFWwAc0A+ACgEMAnAcwC5FCSBKR5tRAbwChFFqaKCGpIatANw8AvjwD0cxAFoVEEFBVKeAGyGI46ousQBeZOkwwc5AEQBbbAGUo1GGFo2WUhf1-8AegD8QA)

```ts
let output = identity("myString");
      
let output: string
```

Observa que no tuvimos que pasar explícitamente el tipo entre corchetes angulares (`<>`); el compilador simplemente miró el valor `"myString"` y estableció `Type` en su tipo.
Si bien la inferencia de argumentos de tipo puede ser una herramienta útil para mantener el código más corto y más legible, es posible que tengas que pasar explícitamente los argumentos de tipo como lo hicimos en el ejemplo anterior cuando el compilador no logra inferir el tipo, como puede suceder en ejemplos más complejos.

## Trabajar con variables de tipo genérico {#working-with-generic-type-variables}

Cuando comiences a usar generics, notarás que cuando creas funciones genéricas como `identity`, el compilador exigirá que uses correctamente cualquier parámetro tipado genéricamente en el cuerpo de la función.
Es decir, que realmente trates estos parámetros como si pudieran ser de cualquier tipo.

Tomemos nuestra función `identity` de antes:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABDAJgUzLKBPAPAFWwAc0A+ACgEMAnAcwC5FCSBKR5tRAbwChFFqaKCGpIatANw8AvkA)

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
```

¿Qué pasa si también queremos registrar la longitud del argumento `arg` en la consola con cada llamada?
Podríamos sentirnos tentados a escribir esto:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYME4BQAzAVwDsBjAFwEs5jQAbOAc0cuMYEkATSYq8gTwA8AFX4AHSAD4AFAENojVKIkBKJeMigA3rlChSNRHDqQAdA0ZyF5no3IALFQG5doaJHKFoteYxcBfIA)

{{< content-ads/middle-banner-2 >}}

```ts
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
```

```text {filename="Error generado"}
Property 'length' does not exist on type 'Type'.
```

Cuando lo hagamos, el compilador nos dará un error indicando que estamos usando el miembro `.length` de `arg`, pero en ninguna parte hemos dicho que `arg` tiene este miembro.
Recuerda, dijimos anteriormente que estas variables de tipo representan todos y cada uno de los tipos, por lo que alguien que haya usado esta función podría haber pasado un `number`, que no tiene un miembro `.length`.

Digamos que en realidad pretendemos que esta función funcione en arrays de `Type` en lugar de en `Type` directamente. Como estamos trabajando con arrays, el miembro `.length` debería estar disponible.
Podemos describir esto tal como crearíamos arrays de otros tipos:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAGzgczTMaCSATAUzFigE8AeAFVIAcCA+ACgEMAnNALkWroG0BdAJRceBAYgDeAKESIICAM5xkBAHSo0LduqJooAC0EBuGYlYEoIVkjZoTAXyA)

```ts
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
```

Puedes leer el tipo de `loggingIdentity` como "la función genérica `loggingIdentity` toma un parámetro de tipo `Type` y un argumento `arg` que es un array de `Type`s, y devuelve una array de `Type`s.
Si pasáramos un array de números, obtendríamos un array de números, ya que `Type` se vincularía a `number`.
Esto nos permite usar nuestra variable de tipo genérico `Type` como parte de los tipos con los que estamos trabajando, en lugar del tipo completo, lo que nos brinda mayor flexibilidad.

Alternativamente podemos escribir el ejemplo de esta manera:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAGzgczTMaCSATAUzFigE8AeAFVIAcCA+ACgEMAnNALkQEFXXmK1OvQCUXXv0G0GiAN4AoRIggIAznGQEAdKjQt2OomigALEQG5EAeis8+AxCearEzRIeymANInWIwcIgAtnCsBIgEfKGKiGFQIKxIbGjm8gC+QA)

```ts
function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array tiene un .length, entonces no hay más errores
  return arg;
}
```

Es posible que ya estés familiarizado con este estilo de tipado en otros lenguajes.
En la siguiente sección, cubriremos cómo puedes crear tus propios tipos generics como `Array<Type>`.

## Tipos generics {#generic-types}

En secciones anteriores, creamos funciones de identidad genéricas que funcionaban con una variedad de tipos.
En esta sección, exploraremos el tipo de funciones en sí y cómo crear interfaces genéricas.

El tipo de funciones genéricas es igual que el de las funciones no genéricas, con los parámetros de tipo enumerados primero, de manera similar a las declaraciones de funciones:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABDAJgUzLKBPAPAFWwAc0A+ACgEMAnAcwC5FCSBKR5tRAbwChFFqaKCGpIatANw8Avjx4AbIYgC22AJLpMMHIwLEyVOu30tEAXlJN955JqzYJQA)

{{< content-ads/middle-banner-3 >}}

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: <Type>(arg: Type) => Type = identity;
```

También podríamos haber usado un nombre diferente para el parámetro de tipo genérico en el tipo, siempre y cuando el número de variables de tipo y cómo se usan las variables de tipo estén alineados.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABDAJgUzLKBPAPASTAAcQoA+ACgEMAnAcwC5FCSoBKJl0xAbwChEiGmiggaSWnQDcfAL58+AGxGIAttnzpMMHEwLFSlSZwPtEAXjLNTF5FqzYpQA)

```ts
function identity<Input>(arg: Input): Input {
  return arg;
}
 
let myIdentity: <Input>(arg: Input) => Input = identity;
```

También podemos escribir el tipo genérico como una firma de llamada de un tipo literal de objeto:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABDAJgUzLKBPAPAFWwAc0A+ACgEMAnAcwC5FCSBKR5tRAbwChFFqaKCGpIatANw8Avjx4AbIYgC22AJLpMMHIy6ICxMlTrtDbJocTTEAXmSas2CUA)

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: { <Type>(arg: Type): Type } = identity;
```

Lo que nos lleva a escribir nuestra primera interfaz genérica.
Tomemos el objeto literal del ejemplo anterior y movámoslo a una interfaz:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgOIRNYCCSATDMYMATwDERkBvAKGWQB4AVEgBwgD4AKOKAcwBcyFuwCUQkRADcNAL40aMAK4gERAPaVgBcMRLM2nHvwmHxww9TrIoEMEqiVefGfJoAbO8gC2JfIT0hdEwobH9dUgpkAF5kbQDSKSA)

```ts
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn = identity;
```

En un ejemplo similar, es posible que queramos mover el parámetro genérico para que sea un parámetro de toda la interfaz.
Esto nos permite ver sobre qué tipo(s) estamos siendo genéricos (por ejemplo, `Dictionary<string>` en lugar de solo `Dictionary`).
Esto hace que el parámetro de tipo sea visible para todos los demás miembros de la interfaz.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgOIRNYCCSATDMYMATwDEQAeAFRIAcIA+ZAbwChlkAKOKAcwBcyWgwCUQkRADcbAL5s2MAK4gERAPYhkwAuGIka9Jj34Sj44UdYdkUCGCVQtvPjPlsANveQBbEvkJ9IXRMKGwAvVIKShAlHwAjaGYAXm1dIlIpIA)

```ts
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn<number> = identity;
```

Observa que nuestro ejemplo ha cambiado para ser algo ligeramente diferente.
En lugar de describir una función genérica, ahora tenemos una firma de función no genérica que forma parte de un tipo genérico.
Cuando usamos `GenericIdentityFn`, ahora también necesitaremos especificar el argumento de tipo correspondiente (aquí: `number`), bloqueando efectivamente lo que usará la firma de llamada subyacente.
Comprender cuándo colocar el parámetro de tipo directamente en la firma de llamada y cuándo colocarlo en la interfaz misma será útil para describir qué aspectos de un tipo son generics.

Además de interfaces genéricas, también podemos crear clases genéricas.
Ten en cuenta que no es posible crear enumeraciones y espacios de nombres genéricos.

{{< content-ads/middle-banner-4 >}}

## Clases genéricas {#generic-classes}

Una clase genérica tiene una forma similar a una interfaz genérica.
Las clases genéricas tienen una lista de parámetros de tipo genérico entre corchetes angulares (`<>`) después del nombre de la clase.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEGcBcCcEsDG0BcoBmBDANpApgFCLaaSSgDieAdngogHICuAtgEZ0A8zLAKgJ4AHPAD5QAbwKhQALzoB7AGo4meNDwHCA3FNCYAJvrQAKAB7rWmvABpQ-C3yF4AlKAC8YjU50BfAgWw8aFAWfipaeh4OWHdQWgB3Sho6JCiualZokWNnHVDwlMZMugA6OVglFTxYgAY8sOTI4tgSg31Y9CZqZHh5alAzW35XSWlYIKZYftNQAGo7Xy0gA)

```ts
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

Este es un uso bastante literal de la clase `GenericNumber`, pero habrás notado que nada la restringe a usar solo el tipo `number`.
En su lugar, podríamos haber usado `string` o incluso objetos más complejos.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEGcBcCcEsDG0BcoBmBDANpApgFCLaaSSgDieAdngogHICuAtgEZ0A8zLAKgJ4AHPAD5QAbwKhQALzoB7AGo4meNDwHCA3FNCYAJvrQAKAB7rWmvABpQ-C3yF4AlKAC8YjU50BfAiFAAWmDEJmhgwIJsPGhQGARqAHMeOiR3UFoAd0oaVMZWDlhOePgkkWNnHRKklPoAOjlYJRU8dIAiNqq4UuTWPLqDfXT0JmpkeHlqUDNbfldJaVgYplgp01AAajtfHSJJyHlouux5RONq3pZ+wfPumr76xubsVVs26DwYNudKoA)

```ts
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};
 
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
```

Al igual que con la interfaz, poner el parámetro de tipo en la clase misma nos permite asegurarnos de que todas las propiedades de la clase funcionen con el mismo tipo.

Como cubrimos en [nuestra sección sobre clases](/typescript/handbook/clases), una clase tiene dos lados de su tipo: el lado estático y el lado de instancia.
Las clases genéricas solo son genéricas en su lado de instancia en lugar de en su lado estático, por lo que cuando se trabaja con clases, los miembros estáticos no pueden usar el parámetro de tipo de la clase.

## Restricciones de genéricos {#generic-constraints}

Si recuerdas un ejemplo anterior, es posible que a veces quieras escribir una función genérica que funcione en un conjunto de tipos donde tienes *algo* de conocimiento sobre las capacidades que tendrá ese conjunto de tipos.
En nuestro ejemplo de `loggingIdentity`, queríamos poder acceder a la propiedad `.length` de `arg`, pero el compilador no pudo probar que cada tipo tuviera una propiedad `.length`, por lo que nos advierte que no podemos hacer esa suposición.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYME4BQAzAVwDsBjAFwEs5jQAbOAc0cuMYEkATSYq8gTwA8AFX4AHSAD4AFAENojVKIkBKJeMigA3rlChSNRHDqQAdA0ZyF5no3IALFQG5doaJHKFoteYxcBfIA)

```ts
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
```

```text {filename="Error generado"}
Property 'length' does not exist on type 'Type'.
```

En lugar de trabajar con todos y cada uno de los tipos, nos gustaría restringir esta función para que funcione con todos y cada uno de los tipos que *también*  tengan la propiedad `.length`.
Siempre que el tipo tenga este miembro, lo permitiremos, pero es necesario que tenga al menos este miembro.
Para hacerlo, debemos enumerar nuestro requisito como una restricción sobre lo que puede ser `Type`.

{{< content-ads/middle-banner-5 >}}

Para hacerlo, crearemos una interfaz que describa nuestra restricción.
Aquí, crearemos una interfaz que tenga una única propiedad `.length` y luego usaremos esta interfaz y la palabra clave `extends` para indicar nuestra restricción:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgDIRAczACwO7ADOKA3gFDLIA2G2OAXMiAK4C2ARtANxkC+ZZGMxAIwwAPYhq4zJlCYAkgBMMYsAE8APABV1ABxQQAHpBBLCaWrgLEAfAAo4UTI10GAlK-2kKyBJMJxGgA6KhlHZ1CrHHcuZAB6eOQAOXE8ZDwUAGsQNORgMGQcOAs4ZCisXGQ9KHEDKA0AGmRApnFkVnEoQyhaqF9usGYoKSdMHl4gA)

```ts
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Ahora sabemos que tiene una propiedad .length, así que no habrá más errores.
  return arg;
}
```

Debido a que la función genérica ahora está restringida, ya no funcionará en todos los tipos:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUAJYB2ALjAGYCGAxpKADKREDmJAFgO4GJ0DeeoUABsmrNqiIBXALYAjGAG48AXzx5ykotRIE4RYXGbNizAJIATJjpIBPADwAVGwAc6kAB5ki5xA1HsuHgA+AApKaGZUJ1cASiiXPgFQaj1EOBEAOiFDMIis-zYYpUFoSBJJaH1w5iVVEFAAWibqSRImhrxsoxMLKwJbEIwioA)

```ts
loggingIdentity(3);
```

```text {filename="Error generado"}
Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
```

En lugar de eso, debemos pasar valores cuyo tipo tenga todas las propiedades requeridas:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgDIRAczACwO7ADOKA3gFDLIA2G2OAXMiAK4C2ARtANxkC+ZZGMxAIwwAPYhq4zJlCYAkgBMMYsAE8APABV1ABxQQAHpBBLCaWrgLEAfAAo4UTI10GAlK-2kKyBJMJxGgA6KhlHZ1CrHHceSigIMGYoKSdMHn4AekzkAFp8hGYwfNyyMNl5ZVVgDXsSamjGAEYABgAaZAA3OCpmCEYAZmReWKA)

```ts
loggingIdentity({ length: 10, value: 3 });
```

## Usando parámetros de tipo en restricciones genéricas {#using-type-parameters-in-generic-constraints}

Puedes declarar un parámetro de tipo que esté restringido por otro parámetro de tipo.
Por ejemplo, aquí nos gustaría obtener una propiedad de un objeto dado su nombre.
Nos gustaría asegurarnos de no tomar accidentalmente una propiedad que no existe en `obj`, por lo que colocaremos una restricción entre los dos tipos:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUAGYCuAdgMYAuAlnCaAOaQUAK8ADjBQJ4A8AKlw4AaUAGlIXUJAAeFSCQAmiUAGsJcAqAEcAfAAo4AIwBWqbZBFquqcVwCUoAN55QoaEyLQ6R4wG0rALoA3HgAvnh4ADZMoNKgALxOoACGqACMIoaoaCJkqBgiCqhYoKEheIws7JxcetIiAETJDXYhlaxwHNDcdY0Ati1BQA)

```ts
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
getProperty(x, "m");
```

```text {filename="Error generado"}
Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
```

{{< content-ads/middle-banner-6 >}}

## Usando tipos de clase en generics {#using-class-types-in-generics}

Al crear factories en TypeScript usando generics, es necesario hacer referencia a los tipos de clase por sus funciones constructoras. Por ejemplo,

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABBATgUwIZTQHgCoCeADmgHwAUEAXIgN6JhoDui5AlDYSYgL4eJc0dAFCJE6KCBRJGLCOwDcwnkA)

```ts
function create<Type>(c: { new (): Type }): Type {
  return new c();
}
```

Un ejemplo más avanzado usa la propiedad prototipo para inferir y restringir las relaciones entre la función constructora y el lado de la instancia de los tipos de clase.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEGcBcCcEsDG0BcoBmBDANpApgFCLaaSSgBCeeA0tQA56ygDeBooAFqQLKkDWaAEYB7EdjyYAdqAC8oOAFc8AbgIBfAkRJlQALTF08jZmw5TMAWzzRMAczQwEUu3NAAiHvH4T3azdqk5ACCUvCWOKzsoFKKlgAyeHaQaLGWQkxuACz+WsRBlNSgeAAe0HhSACYhYRHYUeZxicluAGxqHPwMTGhUtN3M8lJ4AO6F-cZMABQAlLmBuvHwIjKl5VU14ZFmoF2TsGgGIkYmbsNjRyfTcxpa6IpSyMsyiLCS5QCSUjDSiHgAPMFimUKtVQKEttgAHxTRCpUagWZyKHgmZoIE7N7QRSwGTnUCIWbzV7vPBfH6PPBTJYrGYAOj2JjpFmstjsahJmE+31slKmfXpjKYdO4kD4kH4KiAA)

```ts
class BeeKeeper {
  hasMask: boolean = true;
}
 
class ZooKeeper {
  nametag: string = "Mikle";
}
 
class Animal {
  numLegs: number = 4;
}
 
class Bee extends Animal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}
 
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
 
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
 
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
```

Este patrón se usa para potenciar el patrón de diseño [mixins ↗](https://www.typescriptlang.org/docs/handbook/mixins.html).

## Valores predeterminados de parámetros generics {#generic-parameter-defaults}

Al declarar un valor predeterminado para un parámetro de tipo genérico, haces opcional especificar el argumento de tipo correspondiente. Por ejemplo, una función que crea un nuevo "HTMLElement". Llamar a la función sin argumentos genera un `HTMLDivElement`; llamar a la función con un elemento como primer argumento genera un elemento del tipo del argumento. Opcionalmente, también puede pasar una lista de elementos hijos. Previamente tendrías que definir la función como:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAwg9gO2AQwJYIgJwDwBUA0UAqgHxQC8UA3gFBRQQA2EAthEgFxS4DcdUAYwAWqRgBNM7LkT4BfPjQD0iqAFp1AgK7B1qmmIgDGySVABmmhAOCpEgycmAQAFAEou8JGgw4AErgBZABkAEVQANwBRZjYkQn9gsKiY9mAAbQBdEj4DIxNoCysbOwEHJzwGAA8nBDEAZygEoOjWVJJnJlbObndYRBR0LDxCXEzs-UNjU0LrWwR7CEcICohq9nrGwOaUuOIqmo2mltjgdv5Ok64CfmFRCSliTJpezwGfYcesniA)

```ts
declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;
declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;
declare function create<T extends HTMLElement, U extends HTMLElement>(
  element: T,
  children: U[]
): Container<T, U[]>;
```

Con los parámetros genéricos predeterminados podemos reducirlo a:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAwg9gO2AQwJYIgJwDwBUA0UAqgHxQC8UA3gFBRQQA2EAthEgFxS4DcdUAYwAWqRgBNM7LkT4BfPjQD0iqAFp1AgK7B1qmmIgDGySVABmmhAOCpEgycmAQ8DAB5OEYgM5QAErgBZABkAUWY2JAo-QKCAEVQANzDWdmBCIijcAG0AXRIACn4mFKQAfi4CfmFRCXZy4hoASi54JDQMHAJiEgUBRC9gKDFEqIEHJ3zGvmV6egA9UpoaPoQBqDBR8Yh8jAB3aOCABRNkAHNMZDAhZIjgSamlFVmFoA)

```ts
declare function create<T extends HTMLElement = HTMLDivElement, U = T[]>(
  element?: T,
  children?: U
): Container<T, U>;
 
const div = create();
      
const div: Container<HTMLDivElement, HTMLDivElement[]>
 
const p = create(new HTMLParagraphElement());
     
const p: Container<HTMLParagraphElement, HTMLParagraphElement[]>
```

Un parámetro genérico predeterminado sigue las siguientes reglas:

- Un parámetro de tipo se considera opcional si tiene un valor predeterminado.
- Los parámetros de tipo obligatorios no deben seguir a los parámetros de tipo opcionales.
- Los tipos predeterminados para un parámetro de tipo deben satisfacer la restricción del parámetro de tipo, si existe.
- Al especificar argumentos de tipo, solo es necesario que especifiques argumentos de tipo para los parámetros de tipo requeridos. Los parámetros de tipo no especificados se resolverán en sus tipos predeterminados.
- Si se especifica un tipo predeterminado y la inferencia no puede elegir un candidato, se infiere el tipo predeterminado.
- Una declaración de clase o interfaz que se fusiona con una declaración de clase o interfaz existente puede introducir un valor predeterminado para un parámetro de tipo existente.
- Una declaración de clase o interfaz que se fusiona con una declaración de clase o interfaz existente puede introducir un nuevo parámetro de tipo siempre que especifique un valor predeterminado.

{{< content-ads/bottom-banner >}}
